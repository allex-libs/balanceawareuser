function createServiceUserMixin (execlib) {
  'use strict';

  var lib = execlib.lib;

  function ServiceUserMixin () {
  }

  ServiceUserMixin.prototype.destroy = function () {
  };

  ServiceUserMixin.prototype.updateBalance = function (newbalance, defer) {
    this.__service.setBalance(newbalance);
    defer.resolve(newbalance);
  };

  ServiceUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ServiceUserMixin, 'updateBalance');
  }

  return ServiceUserMixin;
}

module.exports = createServiceUserMixin;

