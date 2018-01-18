function createLib (execlib) {
  'use strict';

  return {
    servicemixin: require('./servicemixincreator')(execlib),
    users: {
      serviceusermixin: require('./serviceusermixincreator')(execlib)
    },
    methoddescriptors: {
      serviceuser: require('./methoddescriptors/serviceuser')
    }
  };
}

module.exports = createLib;
