(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:MenuCtrl
   *
   * @description
   * Description of the controller MenuCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   */
  angular
    .module('blockchainModule')
    .controller('MenuCtrl', ['$location', 'ethereum', 'menu', function($location, ethereum, menu) {

      var vm = this;

      vm.menu = [];
      vm.connected = ethereum.isConnected();

      angular.forEach(menu, function(value) {
        if (value.status === vm.connected) {
          var active = $location.path() === value.url ? 'active' : '';
          vm.menu.push({
            "name": value.name,
            "url": value.url,
            "active": active
          });
        }
      });

    }]);

})();
