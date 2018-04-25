(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:HomeCtrl
   *
   * @description
   * Description of the controller HomeCtrl
   * @example
      <example module="blockchainModule">
          <file name="index.html">
             <div data-ng-controller='HomeCtrl as sample'>
               {{sample.value}}
             </div>
          </file>
      </example>
   */
  angular
    .module('blockchainModule')
    .controller('HomeCtrl', ['$rootScope', function($rootScope) {

      var vm = this;

      vm.value = "Hello controller";
    }]);

})();
