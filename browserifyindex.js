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
