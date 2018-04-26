(function() {
  'use strict';

  describe('Controller:BlocksCtrl', function() {
    describe('Test module and controller', function() {

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
        controller = $controller('BlocksCtrl', {
          $scope: scope,
          ethereum: mockEthereumService
          // place here mocked dependencies
        });
      }));

      it('should attach a list of awesomeThings to the scope', function() {
        expect(controller.awesomeThings).to.be.an('array');
        expect(controller.awesomeThings).to.have.lengthOf(3);
      });
    });
  });
})();
