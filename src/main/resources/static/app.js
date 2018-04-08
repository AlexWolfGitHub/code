window.ctx="";
require.config({
    baseUrl: window.ctx + "/static/app",
    waitSeconds: 2000,
    paths: {
        "jquery": window.ctx + "/bower_components/jquery/dist/jquery.min",
        "bootstrap": window.ctx + "/bower_components/bootstrap/dist/js/bootstrap.min",
        "angular": window.ctx + "/bower_components/angular/angular"
    },
    shim: {
        "angular": {
            exports: "angular",
            deps: ["jquery"]
        }
    },
    deps: ["dynamicBootstrap"]
});
