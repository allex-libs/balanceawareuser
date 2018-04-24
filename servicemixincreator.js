function createServiceMixin (execlib, templates) {
  'use strict';

  var lib = execlib.lib;

  function BalanceAwareServiceMixin (msm) {
    this.msm = msm;
    templates.ctorBalanceSetterFunc(this, 'getUserBalance', 'setBalance');
    //this.__hotel.getUserBalance(this.name).then(this.setBalance.bind(this));
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

  BalanceAwareServiceMixin.prototype.setBalance = templates.serviceBalanceAwareFunc('balance');

  return BalanceAwareServiceMixin;
}

module.exports = createServiceMixin;
