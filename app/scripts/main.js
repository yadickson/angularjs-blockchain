(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name blockchainModule
   *
   * @requires ui.router
   *
   * @description
   * Description of the module blockchainModule
   */
  angular
    .module('blockchainModule', [
      'ui.router',
      'ngCookies'
    ])
    .config(['$stateProvider', '$urlRouterProvider', 'homeUrl', 'connectUrl', 'blocksUrl', 'contractsUrl', function($stateProvider, $urlRouterProvider, homeUrl, connectUrl, blocksUrl, contractsUrl) {

      $stateProvider
        .state('root', {
          abstract: true,
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {},
            'footer@': {}
          }
        })
        // inject:routes
        .state('Home', {
          parent: 'root',
          url: homeUrl,
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'HomeCtrl',
              templateUrl: 'views/home.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Connect', {
          parent: 'root',
          url: connectUrl,
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'ConnectCtrl',
              templateUrl: 'views/connect.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Blocks', {
          parent: 'root',
          url: blocksUrl,
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'BlocksCtrl',
              templateUrl: 'views/blocks.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Accounts', {
          parent: 'root',
          url: '/accounts',
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'AccountsCtrl',
              templateUrl: 'views/accounts.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Nodes', {
          parent: 'root',
          url: '/nodes',
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'NodesCtrl',
              templateUrl: 'views/nodes.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Disconnect', {
          parent: 'root',
          url: '/disconnect',
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'DisconnectCtrl',
              templateUrl: 'views/disconnect.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Block', {
          parent: 'root',
          url: '/block/:blockId',
          views: {
            'main@': {
              controller: 'BlockCtrl',
              templateUrl: 'views/block.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Transaction', {
          parent: 'root',
          url: '/transaction/:blockId',
          views: {
            'main@': {
              controller: 'TransactionCtrl',
              templateUrl: 'views/transaction.html',
              controllerAs: 'vm'
            }
          }
        })
        .state('Contracts', {
          parent: 'root',
          url: contractsUrl,
          views: {
            'header@': {
              controller: 'MenuCtrl',
              templateUrl: 'views/menu.html',
              controllerAs: 'vm'
            },
            'main@': {
              controller: 'ContractsCtrl',
              templateUrl: 'views/contracts.html',
              controllerAs: 'vm'
            }
          }
        })
      // endinject
      ;

      $urlRouterProvider.otherwise('/home');

    }])
    .run(function($rootScope) {

    });

})();
