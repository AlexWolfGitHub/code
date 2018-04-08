define([
    'jquery',
    'underscore'
], function ($, _) {
    elasticLayout = function() {
        var $elasticElements = $('.elastic-layout');
        var throttleDoElasticLayout = _.throttle(doElasticLayout, 300, {leading: false});
        /* test --> */
        // $elasticElements.each(function(i, el) {
        //   var colors = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'purple'];
        //   $(el).css({
        //     outline: '3px dashed ' + colors[i % colors.length],
        //     outlineOffset: '-2px'
        //   });
        // });
        /* <-- test */
        if (!$elasticElements.length) {
            return;
        }

        $('body').css({overflow: 'hidden'});
        elasticElements = _.map($elasticElements, function (el) {
            var $el = $(el);
            var $parent = $(el).parent().closest('.elastic-layout');
            return {
                el: el,
                parent: $parent[0]
            }
        });
        $('head').append('<style>.__elastic-auto-height{height: auto !important;}.__elastic-hidden{display: none !important;}.elastic-tabs > .tab > .tab-nav {z-index: 1;}.elastic-tabs > .tab > .tab-body {overflow: auto;}.elastic-tabs > .tab > .tab-body > .tab-body-html,.elastic-tabs > .tab > .tab-body > .tab-body-iframe {height: auto;}</style>');

        $(window).on('resize', throttleDoElasticLayout);
        $('.elastic-layout-btn').on('click', function () {
            window.resize();
        });

        function doElasticLayout() {
            elasticChildren();
        }

        function elasticChildren(parent) {
            var $parent = $(parent);
            var children = [];
            if ($parent.hasClass('elastic-grid')) {
                children = _.map($parent.find('.grid-body,.group-table,.hot-table'), function (el) {
                    return {el: el};
                });
            } else if ($parent.hasClass('elastic-tabs')) {
                children = _.map($parent.children('.tab').children('.tab-body'), function (el) {
                    return {el: el};
                });
            } else {
                children = _.filter(elasticElements, function (o) {
                    return o.parent === parent;
                });
            }
            var childrenCount = children.length;
            if (!childrenCount) {
                return;
            }
            var parentHeight = parent
                ? $parent.innerHeight()
                : window.innerHeight;
            var parentContentHeight;
            if (parent) {
                $parent.addClass('__elastic-auto-height');
                _.forEach(children, function (child) {
                    var el = child.el;
                    $(el).addClass('__elastic-hidden');
                });
                parentContentHeight = $parent.innerHeight();
                $parent.removeClass('__elastic-auto-height');
            }
            var ratio = getElasticRatio($parent, childrenCount);

            _.forEach(children, function (child, i) {
                var el = child.el;
                var $el = $(el);
                if (!parent) {
                    $el.outerHeight(parentHeight / ratio.totle * ratio.ratio[i]);
                } else if ($parent.hasClass('elastic-horizontal')) {
                    $el.outerHeight(parentHeight - parentContentHeight);
                } else if ($el.hasClass('hot-table')) {
                    var restHeight = parentHeight - parentContentHeight;
                    var gridScope = $el.children().scope();
                    var grid = gridScope && gridScope.grid;
                    $el.removeClass('__elastic-hidden');
                    grid && grid.resizeTo(null, restHeight / ratio.totle * ratio.ratio[i]);
                } else {
                    var restHeight = parentHeight - parentContentHeight;
                    $el.outerHeight(restHeight / ratio.totle * ratio.ratio[i]);
                }
                $el.removeClass('__elastic-hidden');
                elasticChildren(el);
            });
        }

        function getElasticRatio($el, count) {
            var classList = ($el.attr('class') || '').split(' ');
            var ratioClass = '';
            ratioClass = _.find(classList, function (className) {
                return className.indexOf('elastic-ratio-') === 0;
            });
            var defaultRatio = {
                totle: count,
                ratio: fillArray(count, 1)
            };
            if (!ratioClass) {
                return defaultRatio;
            }
            var ratioStrList = ratioClass.split('-').splice(2);
            if (!ratioStrList.length) {
                return defaultRatio;
            }
            var ratioList = [];
            var totle = 0;
            $.each(ratioStrList, function (i, s) {
                var n = parseInt(s) || 1;
                totle += n;
                ratioList.push(n);
            });
            var rest = count - ratioList.length;
            if (rest > 0) {
                for (var i = 0; i < rest; i++) {
                    totle += 1;
                    ratioList.push(1);
                }
            }
            return {
                totle: totle,
                ratio: ratioList
            };

            function fillArray(len, item) {
                var arr = [];
                if (!len) {
                    return [];
                }
                for (var i = 0; i < len; i++) {
                    arr.push(item);
                }
                return arr;
            }
        }
    }
});
