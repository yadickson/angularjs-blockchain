  (function() {
      'use strict';

      describe('Factory:web3', function() {
          describe('Test module and factory', function() {

              // load the module
              beforeEach(angular.mock.module('blockchainModule'));

              var web3Factory;
              // Initialize the service
              beforeEach(inject(function(_web3_) {
                  web3Factory = _web3_;
              }));

              it('Check factory web3', function() {
                  expect(!!web3Factory).to.be.true;
              });

              it('Check web3.someMethod()', function() {
                  expect(web3Factory.someMethod()).to.be.equal('web3Factory');
              });
          });
      });
  })();
