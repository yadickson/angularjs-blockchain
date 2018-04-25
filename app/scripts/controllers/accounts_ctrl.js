(function() {
  'use strict';

  /**
   * @ngdoc controller
   * @name blockchainModule.controller:AccountsCtrl
   *
   * @description
   * Description of the controller AccountsCtrl
   */
  angular
    .module('blockchainModule')
    .controller('AccountsCtrl', ['$location', 'ethereum', 'helloWorldContract', 'connectUrl', function($location, ethereum, helloWorldContract, connectUrl) {

      var vm = this;

      vm.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Mocha'
      ];

      vm.defaultAccount = null;
      vm.tokenContract = null;

      if (ethereum.isConnected()) {

        ethereum.getDefaultAccount().then(function(result){
          vm.defaultAccount = result;
        });
        /*
        vm.tokenContract = ethereum.loadContract(helloWorldContract).renderHelloWorld.call(function(a, b) {
          console.log('a', a);
          console.log('b', b);
        });*/

      } else {
        $location.path(connectUrl);
      }

    }]);

})();
