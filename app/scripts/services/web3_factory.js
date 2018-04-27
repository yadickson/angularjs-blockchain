(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name blockchainModule.factory:web3
   *
   * @description
   * Description of the factory web3
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
                 .controller('SampleCtrl', ['web3', function (web3) {
                      var vm = this;
                      vm.value = 'Hello factory ' + web3.someMethod();
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .factory('web3', ['$cookieStore', function() {
      // Service logic
      // ...
      var vm = this;

      vm.name = 'web3Factory';
      vm.web3 = null;

      // Public API here
      return {
        someMethod: function() {
          return vm.name;
        },
        setWeb3: function(web3) { //Only for stub
          vm.web3 = web3;
        },
        connect: function(url) {
          vm.web3 = new Web3(new Web3.providers.HttpProvider(url));
          return this.isConnected();
        },
        isConnected: function() {
          return vm.web3 === null ? false : vm.web3.isConnected();
        },
        getBlockSize: function() {
          return this.isConnected() ? vm.web3.eth.blockNumber : 0;
        },
        getBlock: function(id) {
          return this.isConnected() ? vm.web3.eth.getBlock(id) : {};
        },
        getDefaultAccount: function() {
          return this.isConnected() ? vm.web3.eth.coinbase : '';
        },
        getAccounts: function() {
          return this.isConnected() ? vm.web3.eth.accounts : [];
        },
        getBalance: function(account) {
          return this.isConnected() ? vm.web3.fromWei(vm.web3.eth.getBalance(account), "ether") : 0;
        },
        getContract: function(abi, address) {
          return this.isConnected() ? vm.web3.eth.contract(abi).at(address) : null;
        },
        disconnect: function() {
          if (this.isConnected()) {
            vm.web3.reset();
            vm.web3 = null;
          }
        }
      };
    }]);

})();
