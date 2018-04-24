function createLib (execlib) {
  'use strict';

  var templates = require('./templatecreator')(execlib);

  return {
    templates: templates,
    servicemixin: require('./servicemixincreator')(execlib, templates),
    users: {
      serviceusermixin: require('./serviceusermixincreator')(execlib, templates)
    },
    methoddescriptors: {
      serviceuser: require('./methoddescriptors/serviceuser')(templates)
    }
  };
}

module.exports = createLib;
