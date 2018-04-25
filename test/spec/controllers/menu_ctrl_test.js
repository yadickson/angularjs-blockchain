(function() {
  'use strict';

  describe('Controller:MenuCtrl', function() {
    describe('Test module and controller', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var controller,
        scope;

      // Initialize the controller and a mock scope
      beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('MenuCtrl', {
          $scope: scope
          // place here mocked dependencies
        });
      }));

      it('should attach a list of menu to the scope', function() {
        expect(controller.menu).to.be.an('array');
        expect(controller.menu).to.have.lengthOf(5);
        expect(JSON.stringify(controller.menu[0])).to.be.equal(JSON.stringify({"name": "Connect", "status": false }));
        expect(JSON.stringify(controller.menu[4])).to.be.equal(JSON.stringify({"name": "Disconnect", "status": true }));
      });
    });
  });
})();
