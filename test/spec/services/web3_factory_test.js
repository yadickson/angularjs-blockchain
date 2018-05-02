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

      it('Check web3Mock.someMethod()', function() {
        expect(web3Factory.someMethod()).to.be.equal('web3Factory');
      });

      it('Check web3 is null', function() {
        expect(web3Factory.isConnected()).to.be.false;
      });
    });

    describe('Test module and factory with stub', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var web3Mock;

      // Initialize the service
      beforeEach(function() {

        web3Mock = {
          isConnected: sinon.stub(),
          fromWei: sinon.stub(),
          reset: sinon.spy(),
          eth: {
            blockNumber: -1,
            getBlock: sinon.stub(),
            coinbase: '0x00',
            accounts: [-1],
            getBalance: sinon.stub(),
            contract: function(abi) {
              return {
                at: function(address) {
                  return address;
                }
              };
            }
          }
        };

        angular.mock.module(function($provide) {
          $provide.value('web3js', web3Mock);
        });

      });

      it('Check web3.isConnected stub false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.isConnected()).to.be.false;
      }));

      it('Check web3.isConnected stub true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        expect(web3.isConnected()).to.be.true;
      }));

      it('Check web3.getBlockSize connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.getBlockSize()).to.be.equal(0);
      }));

      it('Check web3.getBlockSize connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3Mock.eth.blockNumber = 25;
        expect(web3.getBlockSize()).to.be.equal(25);
      }));

      it('Check web3.getBlock connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(JSON.stringify(web3.getBlock(1))).to.be.equal(JSON.stringify({}));
      }));

      it('Check web3.getBlock connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3Mock.eth.getBlock.withArgs(1).returns("x");
        expect(web3.getBlock(1)).to.be.equal("x");
      }));

      it('Check web3.getDefaultAccount connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.getDefaultAccount()).to.be.equal('');
      }));

      it('Check web3.getDefaultAccount connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3Mock.eth.coinbase = 'coinbase';
        expect(web3.getDefaultAccount()).to.be.equal("coinbase");
      }));

      it('Check web3.getAccounts connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.getAccounts()).to.be.an('array');
        expect(web3.getAccounts()).to.be.lengthOf(0);
      }));

      it('Check web3.getAccounts connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3Mock.eth.accounts = ['1', '2'];
        expect(web3.getAccounts()).to.be.an('array');
        expect(web3.getAccounts()).to.be.lengthOf(2);
      }));

      it('Check web3.getBalance connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.getBalance('account')).to.be.equal(0);
      }));

      it('Check web3.getBalance connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3Mock.fromWei.withArgs(26, 'ether').returns(27);
        web3Mock.eth.getBalance.withArgs('account').returns(26);
        expect(web3.getBalance('account')).to.be.equal(27);
      }));

      it('Check web3.getContract connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        expect(web3.getContract('abi', 'address')).to.be.null;
      }));

      it('Check web3.getContract connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        expect(web3.getContract('abi', 'address')).to.be.equal('address');
      }));

      it('Check web3.disconnect connected false', inject(function(web3) {
        web3Mock.isConnected.returns(false);
        web3.disconnect();
      }));

      it('Check web3.disconnect connected true', inject(function(web3) {
        web3Mock.isConnected.returns(true);
        web3.disconnect();
        expect(web3Mock.reset.called).to.be.true;
      }));

    });

  });

})();
