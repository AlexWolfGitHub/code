window.__qx_ctx = '';
define({
    $window_$config: {
        ctx: '',
        path: '',
        locale: 'zh-cn'
    },
    controls: {
        $prepareLoadModules: [],
        repeatRequestInterceptor: {
            /**
             * @cfg title {String}
             * @cfg message {String}
             */
            repeatMsgOptions: {
                title: '错误',
                message: '请不要重复提交'
            },
            sessionUserIdProp: '$sessionAttrs.loginUser.userId',
            handleUrlPatterns: ['/gillion-web/system/employees/*']
        }
    },
    $paths: {
        $current: {
            ctx: '',
            path: ''
        }
    }
});
