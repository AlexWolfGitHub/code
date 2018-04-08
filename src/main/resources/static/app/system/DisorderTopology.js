define(["jquery", "underscore"], function ($, _) {

    /*
        {
            el: "",
            element:[
                { id:"", title: "", x: 10, y: 10}
            ],
            relation:[
                { source: "", target: "", status: 1 }
            ],
            onElementRender:F
        }
    */
    var Topology = function (options) {
        this.options = options;
        this.$el = $(options.el);
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
            elements = this.options.element;
        _.each(elements, function (element) {
            var el = _this._renderElement(element);
            element.$el = $(el);
            _this.$el.append(el);
        });
        _this._renderRelation();
        _this._bindRelationEvent();
    };

    Proto._renderElement = function (option) {
        var _this = this,
            html = "",
            el = document.createElement("div");
        el.className = "topology-element";
        el.style.left = (option.x || 0) + "px";
        el.style.top = (option.y || 0) + "px";

        if (this.options.onElementRender) {
            html = this.options.onElementRender(option);
        } else {
            html = "<i class='fa fa-cloud'></i>";
            html += "<span class='text'>" + option.title + "</span>";
        }
        el.innerHTML = html;
        el.onclick = function () {
            _.each(_this.options.element, function (element) {
                if (element.$el) element.$el.removeClass("selected");
            });
            $(el).addClass("selected");
            if (_this.options.onClick) _this.options.onClick(el, option);
        };
        return el;
    };

    Proto._renderRelation = function () {
        var _this = this,
            relations = _this.options.relation || [];

        function getElement(id) {
            var result = false;
            _.each(_this.options.element, function (element) {
                if (id == element.id) {
                    result = element;
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
            document.getElementById(_this.drawingId).innerHTML = "";
        }

        var result = [];
        _.each(relations, function (relation) {
            var source = getElement(relation.source),
                target = getElement(relation.target);

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
                arrowOffsetX = 0,
                arrowOffsetY = 0,
                sourcePoint = false, targetPoint = false;

            if ((targetY + targetH) < sourceY) {
                arrowOffsetX = 8;
                arrowOffsetY = 8;
                if ((targetX + targetW) < sourceX) {
                    if ((sourceX - targetX - targetW) > (sourceY - targetY - targetH)) {
                        sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                        targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
                        //result.push("M" + sourceX + " " + (sourceY + sourceH / 2) + " L" + (targetX + targetW) + " " + (targetY + targetH / 2));
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                        targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                        //result.push("M" + (sourceX + sourceW / 2) + " " + sourceY + " L" + (targetX + targetW / 2) + " " + (targetY + targetH));
                    }
                } else if (targetX > (sourceX + sourceW)) {
                    if ((targetX - sourceX - sourceW) > (sourceY - targetY - targetH)) {
                        result.push("M" + (sourceX + sourceW) + " " + (sourceY + sourceH / 2) + " L" + targetX + " " + (targetY + targetH / 2));
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                        targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                        //result.push("M" + (sourceX + sourceW / 2) + " " + sourceY + " L" + (targetX + targetW / 2) + " " + (targetY + targetH));
                    }
                } else {
                    sourcePoint = {x: (sourceX + sourceW / 2), y: sourceY};
                    targetPoint = {x: (targetX + targetW / 2), y: (targetY + targetH)};
                    //result.push("M" + (sourceX + sourceW / 2) + " " + sourceY + " L" + (targetX + targetW / 2) + " " + (targetY + targetH));
                }
            } else if (targetY > (sourceY + sourceH)) {
                arrowOffsetX = -8;
                arrowOffsetY = -8;
                if ((targetX + targetW) < sourceX) {
                    if ((sourceX - targetX - targetW) > (targetY - sourceY - sourceH)) {
                        sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                        targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
                        //result.push("M" + sourceX + " " + (sourceY + sourceH / 2) + " L" + (targetX + targetW) + " " + (targetY + targetH / 2));
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                        targetPoint = {x: (targetX + targetW / 2), y: targetY};
                        //result.push("M" + (sourceX + sourceW / 2) + " " + (sourceY + sourceH) + " L" + (targetX + targetW / 2) + " " + targetY);
                    }
                } else if (targetX > (sourceX + sourceW)) {
                    if ((targetX - sourceX - sourceW) > (targetY - sourceY - sourceH)) {
                        sourcePoint = {x: (sourceX + sourceW), y: (sourceY + sourceH / 2)};
                        targetPoint = {x: targetX, y: (targetY + targetH / 2)};
                        //result.push("M" + (sourceX + sourceW) + " " + (sourceY + sourceH / 2) + " L" + targetX + " " + (targetY + targetH / 2));
                    } else {
                        sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                        targetPoint = {x: (targetX + targetW / 2), y: targetY};
                        //result.push("M" + (sourceX + sourceW / 2) + " " + (sourceY + sourceH) + " L" + (targetX + targetW / 2) + " " + targetY);
                    }
                } else {
                    sourcePoint = {x: (sourceX + sourceW / 2), y: (sourceY + sourceH)};
                    targetPoint = {x: (targetX + targetW / 2), y: targetY};
                    //result.push("M" + (sourceX + sourceW / 2) + " " + (sourceY + sourceH) + " L" + (targetX + targetW / 2) + " " + targetY);
                }
            } else if ((targetX + targetW) < sourceX) {
                arrowOffsetX = 8;
                arrowOffsetY = 0;
                sourcePoint = {x: sourceX, y: (sourceY + sourceH / 2)};
                targetPoint = {x: (targetX + targetW), y: (targetY + targetH / 2)};
                //result.push("M" + sourceX + " " + (sourceY + sourceH / 2) + " L" + (targetX + targetW) + " " + (targetY + targetH / 2));
            } else if (targetX > (sourceX + sourceW)) {
                arrowOffsetX = 0;
                arrowOffsetY = 8;
                sourcePoint = {x: (sourceX + sourceW), y: (sourceY + sourceH / 2)};
                targetPoint = {x: targetX, y: (targetY + targetH / 2)};
                //result.push("M" + (sourceX + sourceW) + " " + (sourceY + sourceH / 2) + " L" + targetX + " " + (targetY + targetH / 2));
            }

            if (sourcePoint === false || targetPoint === false) return;
            var path = _this.draw.path('M' + sourcePoint.x + ' ' + sourcePoint.y + ' L' + (targetPoint.x + arrowOffsetX) + ' ' + (targetPoint.y + arrowOffsetY)),
                color = relation.status == 1 ? '#C1282D' : '#999',
                arrow = relation.status == 1 ? _this.arrow2 : _this.arrow1;
            path.fill('none').stroke({width: 2, color: color});
            path.marker('end', arrow);

            targetPoint.x += arrowOffsetX;
            targetPoint.y += arrowOffsetY;
            relation.sourcePoint = sourcePoint;
            relation.targetPoint = targetPoint;
        });


    };

    Proto._bindRelationEvent = function () {
        var _this = this;
        var svg = $("#" + this.drawingId).find("svg");

        function isHover(sourcePoint, targetPoint, hoverPoint) {
            if (sourcePoint.x > targetPoint.x && (hoverPoint.x > sourcePoint.x || hoverPoint.x < targetPoint.x)) return false;
            if (sourcePoint.x < targetPoint.x && (hoverPoint.x < sourcePoint.x || hoverPoint.x > targetPoint.x)) return false;
            if (sourcePoint.y > targetPoint.y && (hoverPoint.y > sourcePoint.y || hoverPoint.y < targetPoint.y)) return false;
            if (sourcePoint.y < targetPoint.y && (hoverPoint.y < sourcePoint.y || hoverPoint.y > targetPoint.y)) return false;

            var slope1 = Math.abs((hoverPoint.y - sourcePoint.y) / (hoverPoint.x - sourcePoint.x));
            var slope2 = Math.abs((hoverPoint.y - targetPoint.y) / (hoverPoint.x - targetPoint.x));
            return Math.abs(slope1 - slope2) < 0.2;
        }

        svg.mousemove(function () {
            svg.css("cursor", "default");
            _.each(_this.options.relation, function (relation) {
                var sourcePoint = relation.sourcePoint,
                    targetPoint = relation.targetPoint;
                if (!sourcePoint || !targetPoint) return;
                if (isHover(sourcePoint, targetPoint, {x: event.offsetX, y: event.offsetY})) {
                    svg.css("cursor", "pointer");
                }
            });
        });

        svg.mousedown(function () {
            if (_this.options.onRelationClick) {
                _.each(_this.options.relation, function (relation) {
                    var sourcePoint = relation.sourcePoint,
                        targetPoint = relation.targetPoint;
                    if (!sourcePoint || !targetPoint) return;
                    if (isHover(sourcePoint, targetPoint, {x: event.offsetX, y: event.offsetY})) {
                        _this.options.onRelationClick(relation.source, relation.target);
                        return false;
                    }
                });
            }
        });
    };

    return Topology;
});