(function() {
    'use strict';

    describe('Value:web3js', function() {
        describe('Test module and value', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var web3jsValue;
            // Initialize the service
            beforeEach(inject(function(_web3js_) {
                web3jsValue = _web3js_;
            }));

            it('Check value', function() {
                expect(web3jsValue).to.be.null;
            });
        });
    });
})();
