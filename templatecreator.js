function createTemplate (execlib) {
  'use strict';


  function serviceBalanceAwareFunc (statename) {
    return function (balanceinteger) {
      this.state.set(statename, this.msm ? this.msm.fromMoney(balanceinteger) : balanceinteger);
    };
  }

  function serviceUserUpdateBalanceFunc (servicemethodname) {
    return function (newbalance, defer) {
      this.__service[servicemethodname](newbalance);
      defer.resolve(newbalance);
    }
  }

  function ctorBalanceSetterFunc (service, hotelfetchermethodname, servicesettermethodname) {
    service.__hotel[hotelfetchermethodname](service.name).then(service[servicesettermethodname].bind(service));
    service = null;
    hotelfetchermethodname = null;
    servicesettermethodname = null;
  }

  return {
    serviceBalanceAwareFunc: serviceBalanceAwareFunc,
    ctorBalanceSetterFunc: ctorBalanceSetterFunc,
    serviceUserUpdateBalanceFunc: serviceUserUpdateBalanceFunc,
    methodDescriptorUpdateBalance: [{
      title: 'New Balance',
      type: 'integer'
    }]
  };
}

module.exports = createTemplate;
