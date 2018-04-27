module.exports = function(config) {
    config.set({

        basePath: '',
        // frameworks to use
        frameworks: ['browserify', 'mocha', 'chai', 'sinon'],

        // list of files / patterns to load in the browser

        files: [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/angular/angular.js",
            "node_modules/angular-animate/angular-animate.js",
            "node_modules/angular-cookies/angular-cookies.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "node_modules/angular-ui-router/release/angular-ui-router.js",
            "node_modules/bootstrap/dist/js/bootstrap.js",
            "node_modules/sweetalert/dist/sweetalert.min.js",
            "node_modules/web3/dist/web3.js",
            "app/scripts/main.js",
            "app/scripts/controllers/accounts_ctrl.js",
            "app/scripts/controllers/block_ctrl.js",
            "app/scripts/controllers/blocks_ctrl.js",
            "app/scripts/controllers/connect_ctrl.js",
            "app/scripts/controllers/contracts_ctrl.js",
            "app/scripts/controllers/disconnect_ctrl.js",
            "app/scripts/controllers/home_ctrl.js",
            "app/scripts/controllers/menu_ctrl.js",
            "app/scripts/controllers/nodes_ctrl.js",
            "app/scripts/controllers/transaction_ctrl.js",
            "app/scripts/services/abi_contract_const.js",
            "app/scripts/services/cookie_factory.js",
            "app/scripts/services/ethereum_service.js",
            "app/scripts/services/menu_const.js",
            "app/scripts/services/promise_timeout_const.js",
            "app/scripts/services/web3_factory.js",
            "test/spec/main_test.js",
            "test/spec/services/abi_contract_const_test.js",
            "test/spec/services/menu_const_test.js",
            "test/spec/services/promise_timeout_const_test.js",
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
