(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:BlockCtrl
   *
   * @description
   * Description of the controller BlockCtrl
   *
   * @requires ../main.js
   *
   * @example
      <example module="blockchainModule">
          <file name="index.html">
             <div data-ng-controller='BlockCtrl as sample'>
               {{sample.value}}
             </div>
          </file>
      </example>
   */

  angular
    .module('blockchainModule')
    .controller('BlockCtrl', ['$stateParams', '$location', 'ethereum', 'blocksUrl', function($stateParams, $location, ethereum, blocksUrl) {

      var vm = this;

      vm.value = 'Hello controller BlockCtrl';

      vm.blockId = $stateParams.blockId;

      vm.element = {
        "number": '',
        "miner": 'pending',
        "hash": 'pending',
        "parentHash": '',
        "extraData": ''
      };

      if (ethereum.isConnected() && vm.blockId !== undefined) {

        ethereum.getBlock(parseInt(vm.blockId, 10)).then(function(result) {

          vm.element.number = result.number;
          vm.element.parentHash = result.parentHash;
          vm.element.extraData = result.extraData;

          if (result.hash !== undefined) {
            vm.element.hash = result.hash;
          }

          if (result.miner !== undefined) {
            vm.element.miner = result.miner;
          }

        });

      } else {
        $location.path(blocksUrl);
      }

    }]);

})();
