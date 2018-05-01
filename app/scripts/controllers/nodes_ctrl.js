(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:NodesCtrl
   *
   * @description
   * Description of the controller NodesCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   */
  angular
    .module('blockchainModule')
    .controller('NodesCtrl', ['$location', 'ethereum', 'connectUrl', function($location, ethereum, connectUrl) {

      var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Mocha'
      ];

      if (ethereum.isConnected()) {

      } else {
        $location.path(connectUrl);
      }
    }]);

})();
