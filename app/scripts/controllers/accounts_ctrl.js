(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:AccountsCtrl
   *
   * @description
   * Description of the controller AccountsCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   */
  angular
    .module('blockchainModule')
    .controller('AccountsCtrl', ['$location', 'ethereum', 'connectUrl', function($location, ethereum, connectUrl) {

      var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Mocha'
      ];

      vm.defaultAccount = null;
      vm.accounts = [];
      vm.balances = [];

      if (ethereum.isConnected()) {

        ethereum.getDefaultAccount().then(function(result){
          vm.defaultAccount = result;
        });

        ethereum.getAccounts().then(function(result){
          vm.accounts = result;
        });

        ethereum.getBalances().then(function(result){
          vm.balances = result;
        });

      } else {
        $location.path(connectUrl);
      }

    }]);

})();
