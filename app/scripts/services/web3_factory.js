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
            <div data-ng-controller='SampleCtrl'>
              {{value}}
            </div>
         </file>
         <file name="script.js">
             angular
                 .module('blockchainModule', [])
                 .controller('SampleCtrl', ['web3', function (web3) {
                      this.value = 'Hello factory ' + web3.someMethod();
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .factory('web3', ['$cookieStore', function() {
      // Service logic
      // ...

      var name = 'web3Factory';
      var web3 = null;

      // Public API here
      return {
        someMethod: function() {
          return name;
        },
        connect: function(url) {
          web3 = new Web3(new Web3.providers.HttpProvider(url));
          return this.isConnected();
        },
        isConnected: function() {
          return web3 === null ? false : web3.isConnected();
        },
        getBlockSize: function() {
          return this.isConnected() ? web3.eth.blockNumber : 0;
        },
        getBlock: function(id) {
          return this.isConnected() ? web3.eth.getBlock(id) : {};
        },
        getDefaultAccount: function() {
          return this.isConnected() ? web3.eth.coinbase : '';
        },
        getAccounts: function() {
          return this.isConnected() ? web3.eth.accounts : [];
        },
        getBalance: function(account) {
          return this.isConnected() ? web3.fromWei(web3.eth.getBalance(account), "ether") : 0;
        },
        getContract: function(abi, address) {
          return this.isConnected() ? web3.eth.contract(abi).at(address) : null;
        },
        disconnect: function() {
          if (this.isConnected()) {
            web3.reset();
            web3 = null;
          }
        }
      };
    }]);

})();
