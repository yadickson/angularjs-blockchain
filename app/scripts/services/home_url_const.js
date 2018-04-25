(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name blockchainModule.constant:homeUrl
     *
     * @description
     * Description of the constant homeUrl
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
                   .controller('SampleCtrl', ['homeUrl', function (homeUrl) {
                        this.value = 'Hello constant homeUrl: ' + homeUrl;
                   }]);
           </file>
       </example>
     */
    angular
        .module('blockchainModule')
        .constant('homeUrl', '/home');

})();
