(function() {
    'use strict';

    /**
     * @ngdoc service
     * @name blockchainModule.factory:cookie
     *
     * @description
     * Description of the factory cookie
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
                   .controller('SampleCtrl', ['cookie', function (cookie) {
                        this.value = 'Hello factory ' + cookie.someMethod();
                   }]);
           </file>
       </example>
     */
    angular
        .module('blockchainModule')
        .factory('cookie', ['$cookieStore', function($cookieStore) {
            // Service logic
            // ...

            var name = 'cookieFactory';

            // Public API here
            return {
                someMethod: function() {
                    return name;
                }
            };
        }]);

})();
