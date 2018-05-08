(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name blockchainModule.service:ethereum
   *
   * @description
   * Description of the service ethereum
   *
   * @requires ../services/web3_factory.js
   * @requires ../services/cookie_factory.js
   * @requires ../services/promise_timeout_const.js
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
                      var vm = this;
                      vm.value = 'Hello factory ' + ethereum.name;
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .service('ethereum', ['$q', 'web3', 'cookie', 'promiseTimeout', function($q, web3, cookie, promiseTimeout) {
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

      vm.getBlockSizeSync = function() {
        return parseInt(vm.protocol.getBlockSize(), 10);
      };

      vm.getBlocksSync = function(size) {

        var blocks = [];

        var blockNum = vm.getBlockSizeSync();

        for (var i = 0; i < size && blockNum > 0 && i < blockNum; ++i) {
          var number = vm.protocol.getBlock(blockNum - i).number;
          blocks.push(number);
        }

        return blocks;
      };

      vm.getBlocks = function(size) {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.getBlocksSync(size));
          }, promiseTimeout);
        });
      };

      vm.getBlock = function(id) {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.protocol.getBlock(id));
          }, promiseTimeout);
        });
      };

      vm.getDefaultAccount = function() {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.protocol.getDefaultAccount());
          }, promiseTimeout);
        });
      };

      vm.getAccounts = function() {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.protocol.getAccounts());
          }, promiseTimeout);
        });
      };

      vm.getAccountsSync = function() {
        var accounts = vm.protocol.getAccounts();
        var result = [];

        angular.forEach(accounts, function(account) {
          result.push({
            "account": account,
            "balance": vm.protocol.getBalance(account)
          });
        });

        return result;
      };

      vm.getBalances = function() {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.getAccountsSync());
          }, promiseTimeout);
        });
      };

      vm.fromAscii = function(text) {
        return vm.protocol.fromAscii(text);
      };

      vm.toAscii = function(bytes) {
        return vm.protocol.toAscii(bytes);
      };

      vm.getContract = function(abi, address) {
        return $q(function(resolve, reject) {
          setTimeout(function() {
            resolve(vm.protocol.getContract(abi, address));
          }, promiseTimeout);
        });
      };

      vm.disconnect = function() {
        return vm.protocol.disconnect();
      };

    }]);

})();
