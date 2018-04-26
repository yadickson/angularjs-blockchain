(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name blockchainModule.constant:promiseTimeout
     *
     * @description
     * Description of the constant promiseTimeout
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
                   .controller('SampleCtrl', ['promiseTimeout', function (promiseTimeout) {
                        this.value = 'Hello constant promiseTimeout: ' + promiseTimeout;
                   }]);
           </file>
       </example>
     */
    angular
        .module('blockchainModule')
        .constant('promiseTimeout', 100);

})();
