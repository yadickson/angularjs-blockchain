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
            isConnected: sinon.spy(),
            disconnect: sinon.spy()
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

        it('Check ethereum.disconnect', inject(function(ethereum) {
          ethereum.disconnect();
          expect(mockWeb3.disconnect.called).to.be.true;
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
            isConnected: sinon.stub(),
            getBlockSize: sinon.stub(),
            getBlock: sinon.stub(),
            getAccounts: sinon.stub(),
            getBalance: sinon.stub()
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

        it('Check ethereum.getBlockSizeSync', inject(function(ethereum) {
          mockWeb3.getBlockSize.returns(25);
          expect(ethereum.getBlockSizeSync()).to.be.equal(25);
        }));

        it('Check ethereum.getBlocksSync none', inject(function(ethereum) {
          mockWeb3.getBlockSize.returns(0);
          var blocks = ethereum.getBlocksSync(5);
          expect(blocks).to.be.an('array');
          expect(blocks).to.be.lengthOf(0);
        }));

        it('Check ethereum.getBlocksSync two', inject(function(ethereum) {
          mockWeb3.getBlockSize.returns(2);
          mockWeb3.getBlock.withArgs(2).returns({
            'number': 20
          });
          mockWeb3.getBlock.withArgs(1).returns({
            'number': 10
          });
          var blocks = ethereum.getBlocksSync(5);
          expect(blocks).to.be.an('array');
          expect(blocks).to.be.lengthOf(2);
          expect(blocks[0]).to.be.equal(20);
          expect(blocks[1]).to.be.equal(10);
        }));

        it('Check ethereum.getAccountsSync none', inject(function(ethereum) {
          mockWeb3.getAccounts.returns([]);
          var accounts = ethereum.getAccountsSync();
          expect(accounts).to.be.an('array');
          expect(accounts).to.be.lengthOf(0);
        }));

        it('Check ethereum.getAccountsSync two', inject(function(ethereum) {
          mockWeb3.getAccounts.returns(['1', '2']);
          mockWeb3.getBalance.withArgs('1').returns(10);
          mockWeb3.getBalance.withArgs('2').returns(20);
          var accounts = ethereum.getAccountsSync();
          expect(accounts).to.be.an('array');
          expect(accounts).to.be.lengthOf(2);
          expect(JSON.stringify(accounts[0])).to.be.equal(JSON.stringify({
            account: '1',
            balance: 10
          }));
          expect(JSON.stringify(accounts[1])).to.be.equal(JSON.stringify({
            account: '2',
            balance: 20
          }));
        }));

      });

    });
  })();
