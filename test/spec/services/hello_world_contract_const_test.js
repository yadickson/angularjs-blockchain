(function() {
    'use strict';

    describe('Constant:helloWorldContract', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var HELLO_WORLD_CONTRACT_CONST;
            // Initialize the service
            beforeEach(inject(function(_helloWorldContract_) {
                HELLO_WORLD_CONTRACT_CONST = _helloWorldContract_;
            }));

            it('Check value', function() {
                expect(HELLO_WORLD_CONTRACT_CONST).to.be.an('array');;
            });
        });
    });
})();
