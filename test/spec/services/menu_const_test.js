(function() {
    'use strict';

    describe('Constant:menu', function() {
        describe('Test module and constant', function() {

            // load the module
            beforeEach(angular.mock.module('blockchainModule'));

            var MENU_CONST;
            // Initialize the service
            beforeEach(inject(function(_menu_) {
                MENU_CONST = _menu_;
            }));

            it('Check value', function() {
                expect(MENU_CONST).to.be.equal('MENU_CONST');
            });
        });
    });
})();