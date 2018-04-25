(function() {
  'use strict';

  describe('Controller:MenuCtrl', function() {
    describe('Test module and controller for disconnected', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var controller,
        scope;

      var mockEthereumService = {
        isConnected: function() {
          return false;
        }
      };

      // Initialize the controller and a mock scope
      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('MenuCtrl', {
          $scope: scope,
          ethereum: mockEthereumService
          // place here mocked dependencies
        });
      }));

      it('should attach a list of menu to the scope', function() {
        expect(controller.menu).to.be.an('array');
        expect(controller.menu).to.have.lengthOf(1);
      });

    });

    describe('Test module and controller for connected', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var controller,
        scope;

      var mockEthereumService = {
        isConnected: function() {
          return true;
        }
      };

      // Initialize the controller and a mock scope
      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('MenuCtrl', {
          $scope: scope,
          ethereum: mockEthereumService
          // place here mocked dependencies
        });
      }));

      it('should attach a list of menu to the scope', function() {
        expect(controller.menu).to.be.an('array');
        expect(controller.menu).to.have.lengthOf(4);
      });
    });

  });
})();
