(function() {
    'use strict';

    describe('Controller:BlockCtrl', function() {
        describe('Test module and controller', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var controller,
                scope;

            // Initialize the controller and a mock scope
            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller('BlockCtrl', {
                    $scope: scope
                        // place here mocked dependencies
                });
            }));

            it('should attach a list of awesomeThings to the scope', function() {
                expect(controller.value).to.be.equal('Hello controller BlockCtrl');
            });
        });
    });
})();
