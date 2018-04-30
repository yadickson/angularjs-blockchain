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
    .factory('web3', ['web3js', function(web3js) {
      // Service logic
      // ...
      var vm = this;

      vm.name = 'web3Factory';

      // Public API here
      return {
        someMethod: function() {
          return vm.name;
        },
        connect: function(url) {
          web3js = new Web3(new Web3.providers.HttpProvider(url));
          return this.isConnected();
        },
        isConnected: function() {
          return web3js === null ? false : web3js.isConnected();
        },
        getBlockSize: function() {
          return this.isConnected() ? web3js.eth.blockNumber : 0;
        },
        getBlock: function(id) {
          return this.isConnected() ? web3js.eth.getBlock(id) : {};
        },
        getDefaultAccount: function() {
          return this.isConnected() ? web3js.eth.coinbase : '';
        },
        getAccounts: function() {
          return this.isConnected() ? web3js.eth.accounts : [];
        },
        getBalance: function(account) {
          return this.isConnected() ? web3js.fromWei(web3js.eth.getBalance(account), "ether") : 0;
        },
        getContract: function(abi, address) {
          return this.isConnected() ? web3js.eth.contract(abi).at(address) : null;
        },
        disconnect: function() {
          if (this.isConnected()) {
            web3js.reset();
            web3js = null;
          }
        }
      };
    }]);

})();
