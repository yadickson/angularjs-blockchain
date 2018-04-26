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

    describe('Test module and factory with stub', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var web3Factory,
        web3;

      // Initialize the service
      beforeEach(inject(function(_web3_) {
        web3Factory = _web3_;
        web3 = {
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
              }
            }
          }
        };
      }));

      it('Check web3.isConnected false', function() {
        web3Factory.setWeb3(null);
        expect(web3Factory.isConnected()).to.be.false;
      });

      it('Check web3.isConnected stub false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.isConnected()).to.be.false;
      });

      it('Check web3.isConnected stub true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        expect(web3Factory.isConnected()).to.be.true;
      });

      it('Check web3.getBlockSize connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.getBlockSize()).to.be.equal(0);
      });

      it('Check web3.getBlockSize connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3.eth.blockNumber = 25;
        expect(web3Factory.getBlockSize()).to.be.equal(25);
      });

      it('Check web3.getBlock connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(JSON.stringify(web3Factory.getBlock(1))).to.be.equal(JSON.stringify({}));
      });

      it('Check web3.getBlock connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3.eth.getBlock.withArgs(1).returns("x");
        expect(web3Factory.getBlock(1)).to.be.equal("x");
      });

      it('Check web3.getDefaultAccount connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.getDefaultAccount()).to.be.equal('');
      });

      it('Check web3.getDefaultAccount connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3.eth.coinbase = 'coinbase';
        expect(web3Factory.getDefaultAccount()).to.be.equal("coinbase");
      });

      it('Check web3.getAccounts connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.getAccounts()).to.be.an('array');
        expect(web3Factory.getAccounts()).to.be.lengthOf(0);
      });

      it('Check web3.getAccounts connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3.eth.accounts = ['1', '2'];
        expect(web3Factory.getAccounts()).to.be.an('array');
        expect(web3Factory.getAccounts()).to.be.lengthOf(2);
      });

      it('Check web3.getBalance connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.getBalance('account')).to.be.equal(0);
      });

      it('Check web3.getBalance connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3.fromWei.withArgs(26, 'ether').returns(27);
        web3.eth.getBalance.withArgs('account').returns(26);
        expect(web3Factory.getBalance('account')).to.be.equal(27);
      });

      it('Check web3.getContract connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        expect(web3Factory.getContract('abi', 'address')).to.be.null;
      });

      it('Check web3.getContract connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        expect(web3Factory.getContract('abi', 'address')).to.be.equal('address');
      });

      it('Check web3.disconnect connected false', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(false);
        web3Factory.disconnect();
      });

      it('Check web3.disconnect connected true', function() {
        web3Factory.setWeb3(web3);
        web3.isConnected.returns(true);
        web3Factory.disconnect();
        expect(web3.reset.called).to.be.true;
      });

    });

  });

})();
