/* jshint node: true */
'use strict';
var notifier = require('node-notifier');

module.exports = {
  name: 'ember-cli-deploy-notifier',
  createDeployPlugin: function(options) {
    return {
      name: options.name,

      didBuild: function(context) {
        //do something amazing here once the project has been built
      },

      upload: function(context) {
        //do something here to actually deploy your app somewhere
      },

      didDeploy: function(context) {
        //do something here like notify your team on slack
      }
    };
  }
};
