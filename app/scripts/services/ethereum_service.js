(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name blockchainModule.service:ethereum
   *
   * @description
   * Description of the service ethereum
   *
   * @example
     <example module="blockchainModule">
         <file name="index.html">
            <div data-ng-controller='SampleCtrl as sample'>
              {{sample.value}}
            </div>
         </file>
         <file name="script.js">
             angular
                 .module('blockchainModule')
                 .controller('SampleCtrl', ['ethereum', function (ethereum) {
                      vm.value = 'Hello factory ' + ethereum.name;
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .service('ethereum', ['$q', 'web3', 'cookie', function($q, web3, cookie) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var vm = this;

      vm.name = 'ethereumService';
      vm.protocol = web3;

      vm.connect = function(url) {
        return vm.protocol.connect(url);
      };

      vm.isConnected = function() {
        return vm.protocol.isConnected();
      };

      vm.getBlockSize = function() {
        var deferred = $q.defer();

        setTimeout(function() {

          var count = 0;

          if (vm.isConnected()) {
            count = parseInt(vm.protocol.getBlockSize(), 10);
          }

          deferred.resolve(count);

        }, 200);

        return deferred.promise;
      };

      vm.getBlocks = function(size) {
        var deferred = $q.defer();

        setTimeout(function() {

          var blocks = [];

          if (vm.isConnected()) {
            var blockNum = parseInt(vm.protocol.getBlockSize(), 10);

            for (var i = 0; i < size; ++i) {
              var number = vm.protocol.getBlock(blockNum - i).number;
              blocks.push(number);
            }
          }

          deferred.resolve(blocks);

        }, 200);

        return deferred.promise;
      };

      vm.getBlock = function(id) {
        var deferred = $q.defer();

        setTimeout(function() {
          var result = {};

          if (vm.isConnected()) {
            result = vm.protocol.getBlock(id);
          }

          deferred.resolve(result);
        }, 200);

        return deferred.promise;
      };

      vm.getDefaultAccount = function() {
        var deferred = $q.defer();

        setTimeout(function() {
          var result = null;

          if (vm.isConnected()) {
            result = vm.protocol.getDefaultAccount();
          }

          deferred.resolve(result);
        }, 200);

        return deferred.promise;
      };

      vm.loadContract = function(json) {
        return vm.protocol.loadContract(json);
      };

      vm.disconnect = function() {
        return vm.protocol.disconnect();
      };

    }]);

})();
