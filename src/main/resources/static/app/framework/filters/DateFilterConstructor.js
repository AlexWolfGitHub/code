// Generated by CoffeeScript 1.9.3
(function () {

    define('framework/filters/DateFilterConstructor', ['angular'], function (angular) {
        //计算当前时区
        var CURRENT_TIME_ZONE = (function () {
            var currentDate = new Date();
            var isoDate = JSON.stringify(currentDate);
            var orginalYear = currentDate.getFullYear();
            var orginalMonth = currentDate.getMonth() + 1;
            var orginalDay = currentDate.getDate();
            var orginalHour = currentDate.getHours();

            var isoYear = parseInt(isoDate.substr(1, 5), 10);
            var isoMonth = parseInt(isoDate.substr(6, 2), 10);
            var isonDay = parseInt(isoDate.substr(9, 2), 10);
            var isoHour = parseInt(isoDate.substr(12, 2), 10);


            if (orginalYear === isoYear) {
                if (orginalMonth == isoMonth) {
                    if (orginalDay == isonDay) {
                        return orginalHour - isoHour;
                    } else {
                        if (orginalDay > isonDay) {
                            return 24 + (orginalHour - isoHour);
                        } else {
                            return -(24 + (orginalHour - isoHour));
                        }
                    }
                } else {
                    if (orginalMonth > isoMonth) {
                        return 24 + (orginalHour - isoHour);
                    } else {
                        return -(24 + (orginalHour - isoHour));
                    }
                }
            } else {
                if (orginalYear > isoYear) {
                    return 24 + (orginalHour - isoHour);
                } else {
                    return -(24 + (orginalHour - isoHour));
                }
            }
        })();

        var DateFormatter, timeRegExp;
        timeRegExp = /(\d{4})-(\d{2})-(\d{2})?(.*)/;
        //获取与国际化时间的时差

        DateFormatter = (function () {
            function DateFormatter(pattern1) {
                this.pattern = pattern1;
            }

            DateFormatter.prototype.format = function (value) {
                var date, dateDetail, key, result, week;
                if (angular.isUndefined(value)) {
                    return "";
                }
                if (angular.isString(value)) {
                    if (value === "") {
                        return value;
                    }
                    if (value.indexOf("T") !== -1) {
                        date = value.replace(/(\d{4})-(\d{2})-(\d{2})T?(.*)Z/, "$1/$2/$3 $4");
                        date = new Date(date);
                        date.setHours(date.getHours() + CURRENT_TIME_ZONE);
                    } else {
                        date = value.replace(timeRegExp, "$1/$2/$3 $4");
                        date = new Date(date);
                    }
                } else if (angular.isDate(value)) {
                    date = value;
                }
                dateDetail = {
                    "M+": date.getMonth() + 1,
                    "(d+)|(D+)": date.getDate(),
                    "h+": date.getHours() % 12 === 0 && date.getHours() !== 0 ? 12 : date.getHours() % 12,
                    "H+": date.getHours(),
                    "m+": date.getMinutes(),
                    "s+": date.getSeconds(),
                    "q+": Math.floor((date.getMonth() + 3) / 3),
                    "S": date.getMilliseconds()
                };
                week = {
                    "0": "一",
                    "1": "二",
                    "2": "三",
                    "3": "四",
                    "4": "五",
                    "5": "六",
                    "6": "日"
                };
                result = this.pattern;
                if (/((y+)|(Y+))/.test(this.pattern)) {
                    var year = date.getFullYear() + "";
                    while (year.length < 4) {
                        year = "0" + year;
                    }

                    result = result.replace(RegExp.$1, (year + "").substr(4 - RegExp.$1.length));
                }
                if (/(E+)/.test(this.pattern)) {
                    result = result.replace(RegExp.$1, (RegExp.$1.length > 0 ? (RegExp.$1.length > 1 ? "星期" : "周") : "") + week[date.getDay() + ""]);
                }
                for (key in dateDetail) {
                    value = dateDetail[key];
                    if (new RegExp("(" + key + ")").test(this.pattern)) {
                        result = result.replace(RegExp.$1, RegExp.$1.length === 1 ? value : ("00" + value).substr(("" + value).length));
                    }
                }
                return result;
            };

            return DateFormatter;

        })();
        return function () {
            return function (val, pattern) {
                var formatter;
                formatter = new DateFormatter(pattern);
                return formatter.format(val);
            };
        };
    });

}).call(this);