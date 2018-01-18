function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function BalanceAwareServiceMixin (msm) {
    this.msm = msm;
    this.__hotel.getUserBalance(this.name).then(this.setBalance.bind(this));
  }

  BalanceAwareServiceMixin.prototype.destroy = function () {
    this.msm = null;
  };

  BalanceAwareServiceMixin.addMethods = function (klass) {
    lib.inheritMethods(
      klass,
      BalanceAwareServiceMixin, 
      'setBalance'
    );
  };

  BalanceAwareServiceMixin.prototype.setBalance = function (balanceinteger) {
    this.state.set('balance', this.msm ? this.msm.fromMoney(balanceinteger) : balanceinteger);
  };

  return BalanceAwareServiceMixin;
}

module.exports = createServiceMixin;
