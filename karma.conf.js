module.exports = function(config) {
    config.set({

        basePath: '.',
        // frameworks to use
        frameworks: ['browserify', 'mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser

        files: [
            "build/js/jquery.js",
            "build/js/angular.js",
            "build/js/angular-animate.js",
            "build/js/angular-cookies.js",
            "build/js/angular-mocks.js",
            "build/js/angular-ui-router.js",
            "build/js/bootstrap.js",
            "build/js/sweetalert.js",
            "build/js/web3.js",
            "app/scripts/main.js",
            "app/scripts/services/web3js_value.js",
            "app/scripts/services/web3_factory.js",
            "app/scripts/services/cookie_factory.js",
            "app/scripts/services/promise_timeout_const.js",
            "app/scripts/services/ethereum_service.js",
            "app/scripts/services/menu_const.js",
            "app/scripts/controllers/accounts_ctrl.js",
            "app/scripts/controllers/block_ctrl.js",
            "app/scripts/controllers/blocks_ctrl.js",
            "app/scripts/controllers/connect_ctrl.js",
            "app/scripts/services/abi_contract_const.js",
            "app/scripts/controllers/contracts_ctrl.js",
            "app/scripts/controllers/disconnect_ctrl.js",
            "app/scripts/controllers/home_ctrl.js",
            "app/scripts/controllers/menu_ctrl.js",
            "app/scripts/controllers/nodes_ctrl.js",
            "app/scripts/controllers/transaction_ctrl.js",
            "test/spec/main_test.js",
            "test/spec/services/abi_contract_const_test.js",
            "test/spec/services/menu_const_test.js",
            "test/spec/services/promise_timeout_const_test.js",
            "test/spec/services/web3js_value_test.js",
            "test/spec/services/ethereum_service_test.js",
            "test/spec/services/cookie_factory_test.js",
            "test/spec/services/web3_factory_test.js",
            "test/spec/controllers/accounts_ctrl_test.js",
            "test/spec/controllers/block_ctrl_test.js",
            "test/spec/controllers/blocks_ctrl_test.js",
            "test/spec/controllers/connect_ctrl_test.js",
            "test/spec/controllers/contracts_ctrl_test.js",
            "test/spec/controllers/disconnect_ctrl_test.js",
            "test/spec/controllers/home_ctrl_test.js",
            "test/spec/controllers/menu_ctrl_test.js",
            "test/spec/controllers/nodes_ctrl_test.js",
            "test/spec/controllers/transaction_ctrl_test.js"
            ],

        reporters: ['progress', 'mocha', 'junit', 'coverage', 'istanbul'],

        hostname: 'localhost',

        port: 9000,

        colors: true,

        autoWatch: true,

        browsers: ['PhantomJS'],

        preprocessors: {
            'app/scripts/**/*.js': ['coverage']
        },

        coverageReporter: {
            dir: 'coverage',
            reporters: [{
                type: 'html',
                subdir: '.'
            }]
        },

        istanbulReporter: {
            dir : 'coverage',
            reporters: [{
                type: 'lcov',
                subdir: '.'
            }]
        },

        junitReporter: {
            outputDir: 'reports',
            outputFile: 'test-results.xml',
            useBrowserName: false
        }

    });
};
