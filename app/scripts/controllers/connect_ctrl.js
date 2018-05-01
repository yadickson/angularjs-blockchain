(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:ConnectCtrl
   *
   * @description
   * Description of the controller ConnectCtrl
   *
   * @requires ../main.js
   *
   */
  angular
    .module('blockchainModule')
    .controller('ConnectCtrl', ['$location', 'ethereum', 'homeUrl', function($location, ethereum, homeUrl) {

      var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Mocha'
      ];

      vm.host = 'localhost';
      vm.port = '8545';

      vm.connect = function() {
        var connect = ethereum.connect("http://" + vm.host + ":" + vm.port);

        if (connect) {
          $location.path(homeUrl);
        } else {
          swal("No es posible conectarse con el nodo", "", "error");
        }

      };

    }]);

})();
