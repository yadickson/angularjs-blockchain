(function() {
  'use strict';

  var helloWorldContract = [{
    "constant": false,
    "inputs": [],
    "name": "renderHelloWorld",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }];


  /**
   * @ngdoc service
   * @name blockchainModule.constant:helloWorldContract
   *
   * @description
   * Description of the constant helloWorldContract
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
                 .controller('SampleCtrl', ['helloWorldContract', function (helloWorldContract) {
                      this.value = 'Hello constant helloWorldContract: ' + helloWorldContract;
                 }]);
         </file>
     </example>
   */
  angular
    .module('blockchainModule')
    .constant('helloWorldContract', helloWorldContract);

})();
