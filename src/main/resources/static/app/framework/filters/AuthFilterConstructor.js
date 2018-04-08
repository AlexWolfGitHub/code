define('framework/filters/AuthFilterConstructor', function () {
    return function () {
        return function (val) {
            if (val) {
                var inboundFilters = val.inboundFilters;
                var outboundFilters = val.outboundFilters;
                var str = new Array;
                for(var i=0;i<inboundFilters.length;i++){
                    if(inboundFilters[i].filterName == "SIGN_CHECK_FILTER" && str.indexOf("签名认证")==-1){
                        str.push("签名认证");
                    }else if(inboundFilters[i].filterName == "APPKEY_FILTER" && str.indexOf("appKey认证")==-1){
                        str.push("appKey认证");
                    }else if(inboundFilters[i].filterName == "TIMELINESS_FILTER" && str.indexOf("时效性认证")==-1){
                        str.push("时效性认证");
                    }
                }
                for(var i=0;i<outboundFilters.length;i++){
                    if(outboundFilters[i].filterName == "SIGN_CHECK_FILTER" && str.indexOf("签名认证")==-1){
                        str.push("签名认证");
                    }else if(outboundFilters[i].filterName == "APPKEY_FILTER" && str.indexOf("appKey认证")==-1){
                        str.push("appKey认证");
                    }else if(outboundFilters[i].filterName == "TIMELINESS_FILTER" && str.indexOf("时效性认证")==-1){
                        str.push("时效性认证");
                    }
                }
                return str.join(',');
            }
            return '';
        }
    }
});