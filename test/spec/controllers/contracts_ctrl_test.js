(function() {
    'use strict';

    describe('Controller:ContractsCtrl', function() {
        describe('Test module and controller', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var controller,
                scope;

            // Initialize the controller and a mock scope
            beforeEach(inject(function($controller, $rootScope) {
                scope = $rootScope.$new();
                controller = $controller('ContractsCtrl', {
                    $scope: scope
                        // place here mocked dependencies
                });
            }));

            it('should attach a value to the scope', function() {
                expect(controller.value).to.be.equal('Hello controller ContractsCtrl');
            });
        });
    });
})();
