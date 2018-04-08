define(["jquery", "underscore"], function ($, _) {

    var Topology = function (config) {
        _.extend(this, {
            nodeWidth: 200,
            nodeHeight: 200,
            arrowLineHeight: 30,
            horizontalSpacing: 60,
            verticalSpacing: 80,
            options: {}
        }, config);

        this.$el = $(config.el);

        this._setChildrenExpandStatus();
        this.levelCount = this._getShowLevelCount();
        this.gridCount = parseInt(this.$el.width() / (this.nodeWidth + this.horizontalSpacing));
        var drawing = document.createElement("div");
        var id = new Date().getTime();
        drawing.id = "drawing" + id;
        drawing.style.position = "absolute";
        drawing.style.left = 0;
        drawing.style.top = 0;
        this.$el.append(drawing);
        this.drawingId = drawing.id;
    };

    var Proto = Topology.prototype;
    Proto.render = function () {
        var _this = this,
            rootElement = _this._createNode(_this.options),
            rootX = parseInt(_this.gridCount / 2) * (_this.nodeWidth + _this.horizontalSpacing),
            rootY = _this.levelCount.top * _this.nodeHeight;

        _this._reset();
        _this.$el.append(rootElement);
        rootElement.css("left", rootX);
        rootElement.css("top", rootY);
        _this.options.x = rootX;
        _this.options.y = rootY;
        _this.$rootEl = rootElement;

        _this.topHorizontalLevelNodeCount = {"max": 0};
        _this.bottomHorizontalLevelNodeCount = {"max": 0};
        _this._renderTop(_this.options.parent, 1, {x: rootX, y: rootY});
        _this._renderBottom(_this.options.children, 1, {x: rootX, y: rootY});
        if (_this.$el.width() < _this.$el[0].scrollWidth) _this.draw.size(_this.$el[0].scrollWidth, (this.levelCount.top + this.levelCount.bottom) * this.nodeHeight);
    };

    Proto._reset = function () {
        $("#" + this.drawingId).empty();
        this.draw = SVG(this.drawingId).size(this.$el.width(), (this.levelCount.top + this.levelCount.bottom) * this.nodeHeight);
        this.arrow1 = this.draw.marker(10, 10, function (add) {
            add.path("M2,2 L2,7 L10,5 L2,2").fill("#999999");
        });
        this.arrow2 = this.draw.marker(10, 10, function (add) {
            add.path("M2,2 L2,7 L10,5 L2,2").fill("#C1282D");
        });
    };

    Proto._renderTop = function (nodes, level, parentPoint) {
        var _this = this;
        if (!nodes || nodes.length === 0) return;

        function func(node) {
            var nodeEl = _this._createNode(node);
            _this.$el.append(nodeEl);
            node.$el = nodeEl;
        }

        var x = 0, y = parentPoint.y - _this.nodeHeight;
        if (_this.topHorizontalLevelNodeCount.max === 0) {
            if (level === 1 && nodes.length >= this.gridCount) x = 0;
            else x = parentPoint.x - this.nodeWidth - this.horizontalSpacing;
        } else {
            x = _this.topHorizontalLevelNodeCount.max * (_this.nodeWidth + _this.horizontalSpacing);
        }
        if (x < 0) x = 0;
        var startX = x, endX = x;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            node.y = y;
            if (node.children && node.children.length > 0 && node.expand) {
                var location = _this._renderTop(node.children, level + 1, {x: endX, y: y});

                if (node.children.length === 1) {
                    node.x = location.start;
                    endX = location.end;
                } else {
                    node.x = startX = location.start + (location.end - location.start - _this.nodeWidth) / 2;
                    endX = location.end;

                    _this._renderLine({
                            x: (node.x + _this.nodeWidth / 2),
                            y: (node.y - _this.arrowLineHeight)
                        }, {x: (node.x + _this.nodeWidth / 2), y: (node.y - 10)},
                        false, true);
                }
            } else {
                node.x = endX;
                endX += _this.nodeWidth + _this.horizontalSpacing;
            }

            func(node);
            _this._increaseLevelNodeCount(level, node, false);
            var a = 0;
        }
        if (nodes.length > 1) {
            if (level === 1) {
                _this._renderLine({
                        x: (parentPoint.x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.arrowLineHeight)
                    }, {x: (parentPoint.x + _this.nodeWidth / 2), y: (parentPoint.y - 10)},
                    false, true);
            }

            _this._renderLine({
                    x: (nodes[0].x + _this.nodeWidth / 2),
                    y: (parentPoint.y - _this.arrowLineHeight)
                }, {x: (nodes[nodes.length - 1].x + _this.nodeWidth / 2), y: (parentPoint.y - _this.arrowLineHeight)},
                false, false);

            for (var i = 0; i < nodes.length; i++) {
                _this._renderLine({
                        x: (nodes[i].x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.verticalSpacing)
                    },
                    {
                        x: (nodes[i].x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.arrowLineHeight)
                    }, nodes[i].fuse, false);

                _this.$el.append(_this._createRelationDesc(nodes[i], {
                    x: (nodes[i].x + _this.nodeWidth / 2 + 10),
                    y: (parentPoint.y - _this.arrowLineHeight - 32)
                }));
            }
        } else {
            if(level === 1){
                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.verticalSpacing)
                    }, {x: (nodes[0].x + _this.nodeWidth / 2), y: (parentPoint.y - _this.arrowLineHeight)},
                    nodes[0].fuse, false);

                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.arrowLineHeight)
                    }, {x: (_this.options.x + _this.nodeWidth / 2), y: (parentPoint.y - _this.arrowLineHeight)},
                    nodes[0].fuse, false);

                _this._renderLine({
                        x: (_this.options.x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.arrowLineHeight)
                    }, {x: (_this.options.x + _this.nodeWidth / 2), y: (parentPoint.y - 10)},
                    nodes[0].fuse, true);
            } else {
                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y - _this.verticalSpacing)
                    }, {x: (nodes[0].x + _this.nodeWidth / 2), y: (parentPoint.y - 10)},
                    nodes[0].fuse, true);
            }

            _this.$el.append(_this._createRelationDesc(nodes[0], {
                x: (nodes[0].x + _this.nodeWidth / 2 + 10),
                y: (parentPoint.y - _this.arrowLineHeight - 32)
            }));
        }
        return {start: startX, end: endX};
    };

    Proto._renderBottom = function (nodes, level, parentPoint) {
        var _this = this;
        if (!nodes || nodes.length === 0) return;

        function func(node) {
            var nodeEl = _this._createNode(node);
            _this.$el.append(nodeEl);
            node.$el = nodeEl;
        }

        var x = 0, y = parentPoint.y + _this.nodeHeight;
        if (_this.bottomHorizontalLevelNodeCount.max === 0) {
            if (level === 1 && nodes.length >= this.gridCount) x = 0;
            else if(level === 1 || nodes.length === 1) x = parentPoint.x;
            else x = parentPoint.x - this.nodeWidth - this.horizontalSpacing;
        } else {
            x = _this.bottomHorizontalLevelNodeCount.max * (_this.nodeWidth + _this.horizontalSpacing);
        }
        if (x < 0) x = 0;
        var startX = x, endX = x;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            node.y = y;
            if (node.children && node.children.length > 0 && node.expand) {
                var location = _this._renderBottom(node.children, level + 1, {x: endX, y: y});

                if (node.children.length === 1) {
                    node.x = location.start;
                    endX = location.end;
                } else {
                    node.x = startX = location.start + (location.end - location.start - _this.nodeWidth) / 2;
                    endX = location.end;
                }
            } else {
                node.x = endX;
                endX += _this.nodeWidth + _this.horizontalSpacing;
            }

            func(node);

            if (node.children && node.children.length > 1 && node.expand) {
                _this._renderLine({
                        x: (node.x + _this.nodeWidth / 2),
                        y: (node.y + node.$el.height())
                    }, {x: (node.x + _this.nodeWidth / 2), y: (node.y + node.$el.height() + _this.arrowLineHeight)},
                    false, false);
            }
            _this._increaseLevelNodeCount(level, node, true);
        }
        if (nodes.length > 1) {
            if (level === 1) {
                _this._renderLine({
                        x: (parentPoint.x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height())
                    }, {
                        x: (parentPoint.x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                    },
                    false, false);
            }

            _this._renderLine({
                    x: (nodes[0].x + _this.nodeWidth / 2),
                    y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                }, {
                    x: (nodes[nodes.length - 1].x + _this.nodeWidth / 2),
                    y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                },
                false, false);

            for (var i = 0; i < nodes.length; i++) {
                _this._renderLine({
                        x: (nodes[i].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + nodes[i].$el.height() + _this.arrowLineHeight)
                    },
                    {
                        x: (nodes[i].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + nodes[i].$el.height() + _this.verticalSpacing)
                    }, nodes[i].fuse, true);

                _this.$el.append(_this._createRelationDesc(nodes[i], {
                    x: (nodes[i].x + _this.nodeWidth / 2 + 10),
                    y: (parentPoint.y + nodes[i].$el.height() + _this.arrowLineHeight + 10)
                }));
            }
        } else {
            if(level === 1){
                _this._renderLine({
                        x: (parentPoint.x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height())
                    }, {
                        x: (parentPoint.x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                    },
                    false, false);

                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                    }, {
                        x: (_this.options.x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                    },
                    false, false);

                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + _this.$rootEl.height() + _this.arrowLineHeight)
                    }, {
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + nodes[0].$el.height() + _this.verticalSpacing)
                    },
                    nodes[0].fuse, true);
            } else {
                _this._renderLine({
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + nodes[0].$el.height())
                    }, {
                        x: (nodes[0].x + _this.nodeWidth / 2),
                        y: (parentPoint.y + nodes[0].$el.height() + _this.verticalSpacing)
                    },
                    nodes[0].fuse, true);
            }

            _this.$el.append(_this._createRelationDesc(nodes[0], {
                x: (nodes[0].x + _this.nodeWidth / 2 + 10),
                y: (parentPoint.y + nodes[0].$el.height() + _this.arrowLineHeight + 10)
            }));
        }
        return {start: startX, end: endX};
    };

    Proto._increaseLevelNodeCount = function (level, node, isBottom) {
        if (isBottom) {
            if (this.bottomHorizontalLevelNodeCount[level] === undefined) this.bottomHorizontalLevelNodeCount[level] = 0;
            this.bottomHorizontalLevelNodeCount[level]++;
            var max = this.bottomHorizontalLevelNodeCount["max"];
            for (var k in this.bottomHorizontalLevelNodeCount) {
                if ((!node.children || node.children.length == 0) && k > level) this.bottomHorizontalLevelNodeCount[k]++;
                if (this.bottomHorizontalLevelNodeCount[k] > max) this.bottomHorizontalLevelNodeCount.max = this.bottomHorizontalLevelNodeCount[k];
            }
        } else {
            if (this.topHorizontalLevelNodeCount[level] === undefined) this.topHorizontalLevelNodeCount[level] = 0;
            this.topHorizontalLevelNodeCount[level]++;
            var max = this.topHorizontalLevelNodeCount["max"];
            for (var k in this.topHorizontalLevelNodeCount) {
                if ((!node.children || node.children.length == 0) && k > level) this.topHorizontalLevelNodeCount[k]++;
                if (this.topHorizontalLevelNodeCount[k] > max) this.topHorizontalLevelNodeCount.max = this.topHorizontalLevelNodeCount[k];
            }
        }
    };

    Proto._renderLine = function (point1, point2, fuse, arrow) {
        var _this = this,
            path = _this.draw.path('M' + point1.x + ' ' + point1.y + ' L' + point2.x + ' ' + point2.y),
            color = fuse ? '#C1282D' : '#999';
        path.fill('none').stroke({width: 2, color: color});
        if (arrow) path.marker('end', (fuse ? _this.arrow2 : _this.arrow1));
    };

    Proto._createNode = function (node) {
        var html = '<div class="service-topology-element" style="width: ' + this.nodeWidth + 'px;' + (node.x ? ('left: ' + node.x + 'px;') : "") + (node.y ? ('top: ' + node.y + 'px;') : "") + '">\n' +
            '   <p class="text">' + node.desc + '</p>\n' +
            '   <span class="icon">\n' +
            '       <i class="fa ' + (node.icon ? node.icon : 'fa-file-text') + '"></i>\n' +
            '   </span>\n' +
            '   <span class="title">' + node.title + '</span>\n' +
            '</div>';
        return $(html);
    };

    Proto._createRelationDesc = function (node, point) {
        var html = '<div class="rate-info' + (node.fuse ? " fuse" : "") + '" style="' + (point.x ? ('left: ' + point.x + 'px;') : "") + (point.y ? ('top: ' + point.y + 'px;') : "") + '">\n' +
            '   <span><i class="fa fa-clock-o"></i> ' + node.time + 'ms </span>\n' +
            '   <span><b>TPS<small>c</small></b>' + node.tps + '/S</span>\n';

        if (node.fuse) {
            html += '<span class="fuse-text"><i class="fa fa-xing"></i> 熔断</span>\n';
        }
        html += '</div>';
        return $(html);
    };

    Proto._getShowLevelCount = function () {
        var _this = this;

        function func(data, count) {
            if (!data) return count;
            count++;
            var tmp = count;
            for (var i = 0; i < data.length; i++) {
                var n = count;
                if (data[i]["children"] && data[i]["children"].length > 0 && data[i]["expand"]) {
                    n = func(data[i]["children"], n);
                }

                if (n > tmp) tmp = n;
            }
            return tmp;
        }

        var top = func(_this.options.parent, 0);
        var bottom = func(_this.options.children, 0);
        return {top: top, bottom: bottom};
    };

    Proto._setChildrenExpandStatus = function () {
        var _this = this;

        function func(data) {
            _.each(data, function (item) {
                item.expand = true;
                if (item.children && item.children.length > 0) func(item.children);
            });
        }

        func(_this.options.children);
    };

    return Topology;
});