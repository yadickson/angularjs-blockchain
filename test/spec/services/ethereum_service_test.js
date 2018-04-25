  (function() {
      'use strict';

      describe('Service:ethereum', function() {
          describe('Test module and service', function() {

              // load the module
              beforeEach(angular.mock.module('blockchainModule'));

              var ethereumService;
              // Initialize the service
              beforeEach(inject(function(_ethereum_) {
                  ethereumService = _ethereum_;
              }));

              it('Check service ethereum', function() {
                  expect(!!ethereumService).to.be.true;
              });

              it('Check ethereum.name', function() {
                  expect(ethereumService.name).to.be.equal('ethereumService');
              });
          });
      });
  })();
