window.ctx="";
require.config({
    baseUrl: window.ctx + "/static/app",
    waitSeconds: 2000,
    paths: {
        "jquery": window.ctx + "/bower_components/jquery/dist/jquery.min",
        "bootstrap": window.ctx + "/bower_components/bootstrap/dist/js/bootstrap.min",
        "angular": window.ctx + "/bower_components/angular/angular",
        "jqueryEasing": window.ctx + "/static/templete1/js/jquery.easing.min",
        "jqueryStellar": window.ctx + "/static/templete1/js/jquery.stellar",
        "jqueryAppear": window.ctx + "/static/templete1/js/jquery.appear",
        "jqueryNicescroll": window.ctx + "/static/templete1/js/jquery.nicescroll.min",
        "jqueryCountTo": window.ctx + "/static/templete1/js/jquery.countTo",
        "modernizr": window.ctx + "/static/templete1/js/jquery.shuffle.modernizr",
        "jqueryShuffle": window.ctx + "/static/templete1/js/jquery.shuffle",
        "jowlCarousel": window.ctx + "/static/templete1/js/owl.carousel",
        "jqueryAjaxchimp": window.ctx + "/static/templete1/js/jquery.ajaxchimp.min"
    },
    shim: {
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        }
    },
    deps: ["dynamicBootstrap"]
});
