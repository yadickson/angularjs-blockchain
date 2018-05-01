(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:BlocksCtrl
   *
   * @description
   * Description of the controller BlocksCtrl
   *
   * @requires ../main.js
   * @requires ../services/ethereum_service.js
   * @requires ../services/menu_const.js
   *
   */
  angular
    .module('blockchainModule')
    .controller('BlocksCtrl', ['$location', 'ethereum', 'connectUrl', 'blockUrl', function($location, ethereum, connectUrl, blockUrl) {

      var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Mocha'
      ];

      var maxBlocks = 20;

      vm.path = blockUrl;
      vm.blocks = [];

      if (ethereum.isConnected()) {

          ethereum.getBlocks(maxBlocks).then(function(result) {
            vm.blocks = result;
          });

      } else {
        $location.path(connectUrl);
      }

    }]);

})();
