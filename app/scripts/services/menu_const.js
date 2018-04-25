(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name blockchainModule.constant:menu
   *
   * @description
   * Description of the constant menu
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
                 .controller('SampleCtrl', ['menu', function (menu) {
                      this.value = 'Hello constant menu: ' + menu;
                 }]);
         </file>
     </example>
   */

  var CONNECT_URL = "/connect";
  var BLOCKS_URL = "/blocks";
  var BLOCK_URL = "/block";
  var CONTRACTS_URL = "/contracts";

  var MENU = [{
      "name": "Connect",
      "url": CONNECT_URL,
      "status": false
    },
    {
      "name": "Blocks",
      "url": BLOCKS_URL,
      "status": true
    },
    {
      "name": "Account",
      "url": "/accounts",
      "status": true
    },
    {
      "name": "Contracts",
      "url": CONTRACTS_URL,
      "status": true
    },
    {
      "name": "Nodes",
      "url": "/nodes",
      "status": true
    },
    {
      "name": "Disconnect",
      "url": "/disconnect",
      "status": true
    }
  ];

  angular
    .module('blockchainModule')
    .constant('menu', MENU)
    .constant('connectUrl', CONNECT_URL)
    .constant('blocksUrl', BLOCKS_URL)
    .constant('blockUrl', BLOCK_URL)
    .constant('contractsUrl', CONTRACTS_URL);

})();
