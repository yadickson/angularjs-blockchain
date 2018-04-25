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
        expect(MENU_CONST).to.be.an('array');
        expect(MENU_CONST).to.have.lengthOf(5);
      });
    });
  });

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
        expect(HOME_URL_CONST).to.be.equal('/home');
      });
    });
  });

  describe('Constant:connectUrl', function() {
    describe('Test module and constant', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var CONNECT_URL_CONST;
      // Initialize the service
      beforeEach(inject(function(_connectUrl_) {
        CONNECT_URL_CONST = _connectUrl_;
      }));

      it('Check value', function() {
        expect(CONNECT_URL_CONST).to.be.equal('/connect');
      });
    });
  });

})();
