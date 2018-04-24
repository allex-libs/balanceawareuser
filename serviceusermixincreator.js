function createServiceUserMixin (execlib, templates) {
  'use strict';

  var lib = execlib.lib;

  function ServiceUserMixin () {
  }

  ServiceUserMixin.prototype.destroy = function () {
  };

  ServiceUserMixin.prototype.updateBalance = templates.serviceUserUpdateBalanceFunc('setBalance');

  ServiceUserMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ServiceUserMixin, 'updateBalance');
  }

  return ServiceUserMixin;
}

module.exports = createServiceUserMixin;

