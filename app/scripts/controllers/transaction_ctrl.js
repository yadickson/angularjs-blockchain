(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:TransactionCtrl
   *
   * @description
   * Description of the controller TransactionCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   * @example
      <example module="blockchainModule">
          <file name="index.html">
             <div data-ng-controller='TransactionCtrl as sample'>
               {{sample.value}}
             </div>
          </file>
      </example>
   */

  angular
    .module('blockchainModule')
    .controller('TransactionCtrl', ['$location', 'ethereum', 'connectUrl', function($location, ethereum, connectUrl) {

      var vm = this;

      vm.value = 'Hello controller TransactionCtrl';

      if (ethereum.isConnected()) {

      } else {
        $location.path(connectUrl);
      }
    }]);

})();
