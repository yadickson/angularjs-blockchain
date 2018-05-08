(function() {
  'use strict';

  var abi = [{
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "render",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{
        "name": "a",
        "type": "uint256"
      }],
      "name": "add",
      "outputs": [{
        "name": "",
        "type": "uint256"
      }],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [{
        "name": "who",
        "type": "bytes"
      }],
      "name": "greeting",
      "outputs": [{
        "name": "",
        "type": "string"
      }],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    }
  ];

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
    .constant('addressContract', '0xd83200179b95e08557a17115d67315baf86f647f');

})();
