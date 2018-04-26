(function() {
    'use strict';

    describe('Constant:promiseTimeout', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var PROMISE_TIMEOUT_CONST;
            // Initialize the service
            beforeEach(inject(function(_promiseTimeout_) {
                PROMISE_TIMEOUT_CONST = _promiseTimeout_;
            }));

            it('Check value', function() {
                expect(PROMISE_TIMEOUT_CONST).to.be.equal(100);
            });
        });
    });
})();
