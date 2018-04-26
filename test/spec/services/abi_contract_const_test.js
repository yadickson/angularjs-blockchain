(function() {
  'use strict';

  describe('Constant:abiContract', function() {
    describe('Test module and constant', function() {

      // load the module
      beforeEach(angular.mock.module('blockchainModule'));

      var ABI_CONTRACT_CONST;
      var ADDRESS_CONTRACT_CONST;

      // Initialize the service
      beforeEach(inject(function(_abiContract_, _addressContract_) {
        ABI_CONTRACT_CONST = _abiContract_;
        ADDRESS_CONTRACT_CONST = _addressContract_;
      }));

      it('Check abiContract element', function() {
        expect(ABI_CONTRACT_CONST).to.be.an('array');
      });

      it('Check abiContract element', function() {
        expect(ADDRESS_CONTRACT_CONST).to.be.an('string');
      });
    });
  });
})();
