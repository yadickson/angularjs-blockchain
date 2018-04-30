(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name blockchainModule.value:web3js
     *
     * @description
     * Description of the value web3js
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
                   .controller('SampleCtrl', ['web3js', function (web3js) {
                        this.value = 'Hello value web3js: ' + web3js;
                   }]);
           </file>
       </example>
     */
    angular
        .module('blockchainModule')
        .value('web3js', null);

})();
