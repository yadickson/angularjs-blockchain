(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:DisconnectCtrl
   *
   * @description
   * Description of the controller DisconnectCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   * @example
      <example module="blockchainModule">
          <file name="index.html">
             <div data-ng-controller='DisconnectCtrl as sample'>
               {{sample.value}}
             </div>
          </file>
      </example>
   */

  angular
    .module('blockchainModule')
    .controller('DisconnectCtrl', ['$location', 'ethereum', 'connectUrl', 'homeUrl', function($location, ethereum, connectUrl, homeUrl) {

      var vm = this;

      vm.value = 'Hello controller DisconnectCtrl';

      if (ethereum.isConnected()) {
        ethereum.disconnect();
        $location.path(homeUrl);
      } else {
        $location.path(connectUrl);
      }
    }]);

})();
