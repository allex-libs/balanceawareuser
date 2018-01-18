function createLib (execlib) {
  'use strict';

  return {
    methoddescriptors: {
      serviceuser: require('./methoddescriptors/serviceuser')
    }
  };
}

module.exports = createLib;
