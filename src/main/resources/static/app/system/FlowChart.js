define(["jquery", "underscore"], function ($, _, GillionMsg) {

    function doDrawing() {
        var id = new Date().getTime();
        var container = document.createElement("div");
        container.id = "drawing" + id;
        container.style.position = "absolute";
        container.style.left = 0;
        container.style.top = 0;

        return container;
    }

    var FlowChart = function (flowModel) {
        this.flowModel = flowModel;
        this.$el = $(flowModel.el);

        var drawing = doDrawing();
        this.$el.append(drawing);
        this.drawingId = drawing.id;
    };

    var flow = FlowChart.prototype;

    flow.render = function () {
        var _this = this,
            flowNodes = this.flowModel.nodes;
        _.each(flowNodes, function (node, i) {
            var el = _this._renderNode(node, i);
            node.$el = $(el);
            _this.$el.append(el);
        });
        _this._renderConnection();
        //设置svg高度
        $('svg').css('height',window.innerHeight-80+document.getElementById('component').scrollTop);
    };

    flow.reRender = function () {
        var _this = this,
            drawing = doDrawing();

        _this.$el.empty();
        _this.$el.append(drawing);
        _this.drawingId = drawing.id;

        if(_this.flowModel.nodes.length > 0) {
            delete _this.draw;
            _this.render();
        }
    };

    flow.deleteDrawing = function () {
        this.$el.empty();
    }

    flow.addNode = function (newNode) {
        var _this = this,
            flowNodes = _this.flowModel.nodes,
            flowConnections = _this.flowModel.connections,
            $el = _this.$el.find(".selected"),
            nodeTitle = $el.find("span").text().trim(),
            nodeId = $el.length>0?$el[0].id:'';
            nodeIndex = _.findLastIndex(flowNodes, {title : nodeTitle}),
            currNode = flowNodes.filter(function (node) {return node.id == nodeId;}),
            currConnection = [],
            newConnections = [];

        if (flowNodes == null || flowNodes.length == 0){
            _this.flowModel.nodes = [newNode];
        } else {
            if ($el.length == 0) {
                return alert('请选择需要添加流程的节点!');
            }
            if (_.findIndex(flowNodes, newNode) > -1) {
                return alert('添加的流程节点已存在!');
            }

            currConnection = flowConnections.filter(function (node) {
                return node.source == currNode[0].id;
            });

            if (currConnection.length == 0){
                var newConn = {};
                newConn.source = currNode[0].id;
                newConn.target = newNode.id;
                _this.flowModel.connections.push(newConn)
            }else {
                _.each(flowConnections, function (connection) {
                    if (connection.source == currConnection[0].source && connection.target == currConnection[0].target) {
                        var currTarget = currConnection[0].target;
                        connection.target = newNode.id;
                        newConnections.push(connection);
                        var newConn = {};
                        newConn.source = newNode.id;
                        newConn.target = currTarget;
                        newConnections.push(newConn);
                        return;
                    }
                    newConnections.push(connection);
                });
                _this.flowModel.connections = newConnections;
            }
            flowNodes.splice(nodeIndex + 1, 0, newNode);
        }
    };

    flow.removeNode = function (currNode) {
        var _this = this,
            flowNodes = _this.flowModel.nodes,
            flowConnections = _this.flowModel.connections,
            newNodes,
            currConnection,
            newConnections = [];

        newNodes = flowNodes.filter(function (node) {
            return node.id != currNode.id;
        });
        currConnection = flowConnections.filter(function (node) {
            return node.source == currNode.id;
        });

        if (currConnection.length == 0) {
            newConnections = flowConnections.slice(0, flowConnections.length-1);
        }else {
            _.each(flowConnections, function (connection) {
                if (connection.source == currConnection[0].source && connection.target == currConnection[0].target) return;
                if (connection.target == currConnection[0].source) {
                    connection.target = currConnection[0].target;
                }
                if (connection.source == currConnection[0].target) {
                    connection.source = currConnection[0].target;
                }
                newConnections.push(connection);
            });
        }
        _this.flowModel.nodes = newNodes;
        _this.flowModel.connections = newConnections;
    };

    flow._renderNode = function (currNode, i) {
        var _this = this,
            html = "",
            el = document.createElement("div"),
            flowNodes = _this.flowModel.nodes,
            nodeX = currNode.x || (_this.$el.width()-175) / 2,
            nodeY = currNode.y || (i * 50 + 20);

        el.className = "topology-element";
        el.style.left = nodeX + "px";
        el.style.top = nodeY  + "px";
        el.id = currNode.id;

        if (this.flowModel.onNodeRender) {
            html = this.flowModel.onNodeRender(currNode);
        } else {
            html = "<span class='text'>" + currNode.title + "</span>";
            html += "<button class='btn form-upload-btn-del' type='button' style='display: none'><i class='fi fi-close-xs'></i></button>";
        }
        el.innerHTML = html;
        el.onclick = function () {
            _.each(flowNodes, function (node) {
                if (node.$el) node.$el.removeClass("selected");
            });
            $(el).addClass("selected");
            if (_this.flowModel.onClick) _this.flowModel.onClick(el, currNode);
        };
        $(el).hover(
            function () {
                $(el).find("button").show();
            },
            function () {
                $(el).find("button").hide();
            }
        );
        $(el).find("button").click(function(){
            _this.removeNode(currNode);
            _this.reRender();
        });
        return el;
    };

    flow._renderConnection = function () {
        var _this = this,
            flowConnections = _this.flowModel.connections || [];

        function getElement(id) {
            var result = false;
            _.each(_this.flowModel.nodes, function (node) {
                if (id == node.id) {
                    result = node;
                    return false;
                }
            });
            return result;
        }

        if (!_this.draw) {
            _this.draw = SVG(_this.drawingId).size(_this.$el.width(), _this.$el.height());
            _this.arrow1 = _this.draw.marker(10, 10, function (add) {
                add.path("M2,2 L2,7 L10,5 L2,2").fill("#999999");
            });
            _this.arrow2 = _this.draw.marker(10, 10, function (add) {
                add.path("M2,2 L2,7 L10,5 L2,2").fill("#C1282D");
            });
        } else {
            $(_this.drawingId)[0].innerHTML = "";
        }

        var result = [];
        _.each(flowConnections, function (connection) {
            var source = getElement(connection.source),
                target = getElement(connection.target);

            if (!source || !target) return;
            var sourceOffset = source.$el.position(),
                sourceX = sourceOffset.left,
                sourceY = sourceOffset.top,
                sourceW = source.$el.outerWidth(),
                sourceH = source.$el.outerHeight(),
                targetOffset = target.$el.position(),
                targetX = targetOffset.left,
                targetY = targetOffset.top,
                targetW = target.$el.outerWidth(),
                targetH = target.$el.outerHeight(),
                sourcePoint = false, targetPoint = false;

            if ((targetY + targetH) < sourceY) {
                if ((targetX + targetW) < sourceX) {
                    if ((sourceX - targetX - targetW) > (sourceY - targetY - targetH)) {
                        sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                        targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                        targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                    }
                } else if (targetX > (sourceX + sourceW)) {
                    if ((targetX - sourceX - sourceW) > (sourceY - targetY - targetH)) {
                        result.push("M" + (sourceX + sourceW) + " " + (sourceY + sourceH / 2) + " L" + targetX + " " + (targetY + targetH / 2));
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                        targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                    }
                } else {
                    sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                    targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                }
            } else if (targetY > (sourceY + sourceH)) {
                if ((targetX + targetW) < sourceX) {
                    if ((sourceX - targetX - targetW) > (targetY - sourceY - sourceH)) {
                        sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                        targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                        targetPoint = {x: (targetX + targetW / 2), y: targetY};
                    }
                } else if (targetX > (sourceX + sourceW)) {
                    if ((targetX - sourceX - sourceW) > (targetY - sourceY - sourceH)) {
                        sourcePoint = {x: (sourceX + sourceW), y: (sourceY + sourceH / 2)};
                        targetPoint = {x: targetX, y: (targetY + targetH / 2)};
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                        targetPoint = {x: (targetX + targetW / 2), y: targetY};
                    }
                } else {
                    sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                    targetPoint = {x: (targetX + targetW / 2), y: targetY};
                }
            } else if ((targetX + targetW) < sourceX) {
                sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
            } else if (targetX > (sourceX + sourceW)) {
                sourcePoint = {x: (sourceX + sourceW), y: (sourceY + sourceH / 2)};
                targetPoint = {x: targetX, y: (targetY + targetH / 2)};
            }

            if (sourcePoint === false || targetPoint === false) return;
            var path = _this.draw.path('M' + sourcePoint.x + ' ' + sourcePoint.y + ' L' + (targetPoint.x) + ' ' + (targetPoint.y-10)),
                color = connection.status == 1 ? '#C1282D' : '#999',
                arrow = connection.status == 1 ? _this.arrow2 : _this.arrow1;
            path.fill('none').stroke({width: 2, color: color});
            path.marker('end', arrow);

            connection.sourcePoint = sourcePoint;
            connection.targetPoint = targetPoint;
        });
    };

    return FlowChart;
});