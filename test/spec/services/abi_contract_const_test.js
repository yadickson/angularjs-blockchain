(function() {
    'use strict';

    describe('Constant:abiContract', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var ABI_CONTRACT_CONST;
            // Initialize the service
            beforeEach(inject(function(_abiContract_) {
                ABI_CONTRACT_CONST = _abiContract_;
            }));

            it('Check value', function() {
                expect(ABI_CONTRACT_CONST).to.be.an('array');
            });
        });
    });
})();
