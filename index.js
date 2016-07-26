/* jshint node: true */
'use strict';
var BasePlugin = require('ember-cli-deploy-plugin');
var notify = require('./lib/notify');

module.exports = {
  name: 'ember-cli-deploy-notifier',
  createDeployPlugin: function(options) {
    var options = {name: options.name};
    var plugins = ['willDeploy', 'willBuild', 'build', 'didBuild', 'willPrepare', 'prepare', 'didPrepare', 'willUpload', 'upload', 'didUpload', 'willActivate', 'activate', 'fetchRevisions', 'didActivate', 'fetchRevisions', 'didDeploy', 'teardown'];
    
    plugins.forEach(function(p) {
      options[p] = notify(p);
    });
    
    var DeployPlugin = BasePlugin.extend(options);

    return new DeployPlugin();
  }
};
