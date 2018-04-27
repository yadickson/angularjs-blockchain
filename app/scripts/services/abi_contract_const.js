(function() {
  'use strict';

  var abi = [{
    "constant": true,
    "inputs": [],
    "name": "renderHelloWorld",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }];

  /**
   * @ngdoc service
   * @name blockchainModule.constant:abiContract
   *
   * @description
   * Description of the constant abiContract
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
                 .controller('SampleCtrl', ['abiContract', function (abiContract) {
                      this.value = 'Hello constant abiContract: ' + JSON.stringify(abiContract);
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .constant('abiContract', abi)
    .constant('addressContract', '0xaec77c04c6b4fe1b9b8e572310d867d52576b0c6');

})();
