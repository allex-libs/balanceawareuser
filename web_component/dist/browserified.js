(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
ALLEX.execSuite.libRegistry.register('allex_balanceawareuserlib',require('./browserifyindex')(ALLEX));

},{"./browserifyindex":2}],2:[function(require,module,exports){
function createLib (execlib) {
  'use strict';

  var templates = require('./templatecreator')(execlib);

  return {
    methoddescriptors: {
      serviceuser: require('./methoddescriptors/serviceuser')(templates)
    }
  };
}

module.exports = createLib;

},{"./methoddescriptors/serviceuser":3,"./templatecreator":4}],3:[function(require,module,exports){
function createMethodDescriptors (templates) {
  'use strict';
  return {
    updateBalance: templates.methodDescriptorUpdateBalance
  };
}


module.exports = createMethodDescriptors;


},{}],4:[function(require,module,exports){
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

},{}]},{},[1]);
