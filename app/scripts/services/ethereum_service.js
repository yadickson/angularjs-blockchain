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
          deferred.resolve(parseInt(vm.protocol.getBlockSize(), 10));
        }, 200);

        return deferred.promise;
      };

      vm.getBlocks = function(size) {
        var deferred = $q.defer();

        setTimeout(function() {

          var blocks = [];

          var blockNum = parseInt(vm.protocol.getBlockSize(), 10);

          for (var i = 0; i < size && blockNum > 0; ++i) {
            var number = vm.protocol.getBlock(blockNum - i).number;
            blocks.push(number);
          }

          deferred.resolve(blocks);

        }, 200);

        return deferred.promise;
      };

      vm.getBlock = function(id) {
        var deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve(vm.protocol.getBlock(id));
        }, 200);

        return deferred.promise;
      };

      vm.getDefaultAccount = function() {
        var deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve(vm.protocol.getDefaultAccount());
        }, 200);

        return deferred.promise;
      };

      vm.getAccounts = function() {
        var deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve(vm.protocol.getAccounts());
        }, 200);

        return deferred.promise;
      };

      vm.getBalances = function() {
        var deferred = $q.defer();

        setTimeout(function() {
          var accounts = vm.protocol.getAccounts();
          var result = [];

          angular.forEach(accounts, function(account) {
            result.push({
              "account": account,
              "balance": vm.protocol.getBalance(account)
            });
          });

          deferred.resolve(result);

        }, 200);

        return deferred.promise;
      };

      vm.getContract = function(abi, address) {
        var deferred = $q.defer();

        setTimeout(function() {
          deferred.resolve(vm.protocol.getContract(abi, address));
        }, 200);

        return deferred.promise;
      };

      vm.disconnect = function() {
        return vm.protocol.disconnect();
      };

    }]);

})();
