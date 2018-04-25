  (function() {
      'use strict';

      describe('Factory:cookie', function() {
          describe('Test module and factory', function() {

              // load the module
              beforeEach(angular.mock.module('blockchainModule'));

              var cookieFactory;
              // Initialize the service
              beforeEach(inject(function(_cookie_) {
                  cookieFactory = _cookie_;
              }));

              it('Check factory cookie', function() {
                  expect(!!cookieFactory).to.be.true;
              });

              it('Check cookie.someMethod()', function() {
                  expect(cookieFactory.someMethod()).to.be.equal('cookieFactory');
              });
          });
      });
  })();
