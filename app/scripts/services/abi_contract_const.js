(function() {
  'use strict';

  var abi = [{
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
    .constant('addressContract', '0x524beb82c09499ee1bccce324a40e8743dc38f11');

})();
