(function() {
    'use strict';

    describe('Constant:homeUrl', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var HOME_URL_CONST;
            // Initialize the service
            beforeEach(inject(function(_homeUrl_) {
                HOME_URL_CONST = _homeUrl_;
            }));

            it('Check value', function() {
                expect(HOME_URL_CONST).to.be.equal('HOME_URL_CONST');
            });
        });
    });
})();