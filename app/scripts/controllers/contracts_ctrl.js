(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:ContractsCtrl
   *
   * @description
   * Description of the controller ContractsCtrl
   *
   * @example
      <example module="blockchainModule">
          <file name="index.html">
             <div data-ng-controller='ContractsCtrl as sample'>
               {{sample.value}}
             </div>
          </file>
      </example>
   */

  angular
    .module('blockchainModule')
    .controller('ContractsCtrl', ['$location', 'ethereum', 'connectUrl', 'abiContract', 'addressContract', function($location, ethereum, connectUrl, abiContract, addressContract) {
      var vm = this;
      vm.value = 'Hello controller ContractsCtrl';
      vm.message = null;

      if (ethereum.isConnected()) {

        ethereum.getContract(abiContract, addressContract).then(function(contract) {
          vm.message = contract.renderHelloWorld.call();
        });

      } else {
        $location.path(connectUrl);
      }

    }]);

})();
