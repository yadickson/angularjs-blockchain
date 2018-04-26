  (function() {
    'use strict';

    describe('Service:ethereum', function() {
      describe('Test module and service', function() {

        // load the module
        beforeEach(angular.mock.module('blockchainModule'));

        var ethereum;
        // Initialize the service
        beforeEach(inject(function(_ethereum_) {
          ethereum = _ethereum_;
        }));

        it('Check service ethereum', inject(function(ethereum) {
          expect(!!ethereum).to.be.true;
        }));

        it('Check ethereum.name', inject(function(ethereum) {
          expect(ethereum.name).to.be.equal('ethereumService');
        }));

      });

      describe('Test module and service with spy', function() {

        // load the module
        beforeEach(angular.mock.module('blockchainModule'));

        var mockWeb3;
        // Initialize the service
        beforeEach(function() {

          mockWeb3 = {
            connect: sinon.spy(),
            isConnected: sinon.spy()
          };

          angular.mock.module(function($provide) {
            $provide.value('web3', mockWeb3);
          });

        });

        it('Check ethereum.connect', inject(function(ethereum) {
          ethereum.connect("url");
          expect(mockWeb3.connect.called).to.be.true;
          expect(mockWeb3.connect.firstCall.args).to.be.an('array');
          expect(mockWeb3.connect.firstCall.args).to.be.lengthOf(1);
          expect(mockWeb3.connect.firstCall.args[0]).to.be.equal('url');
        }));

        it('Check ethereum.isConnected', inject(function(ethereum) {
          ethereum.isConnected("url");
          expect(mockWeb3.isConnected.called).to.be.true;
        }));

      });

      describe('Test module and service with stub', function() {

        // load the module
        beforeEach(angular.mock.module('blockchainModule'));

        var mockWeb3;
        // Initialize the service
        beforeEach(function() {

          mockWeb3 = {
            connect: sinon.stub(),
            isConnected: sinon.stub()
          };

          angular.mock.module(function($provide) {
            $provide.value('web3', mockWeb3);
          });

        });

        it('Check ethereum.connect true', inject(function(ethereum) {
          mockWeb3.connect.returns(true);
          expect(ethereum.connect("url")).to.be.true;
        }));

        it('Check ethereum.connect false', inject(function(ethereum) {
          mockWeb3.connect.returns(false);
          expect(ethereum.connect("url")).to.be.false;
        }));

      });

    });
  })();
