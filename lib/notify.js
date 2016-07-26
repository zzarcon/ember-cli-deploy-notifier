var notifier = require('node-notifier');
var path = require('path');

module.exports = function(hookName) {
  return function(context) {
    var config = this.readConfig(hookName);
    if (!config) return;

    var showDefaultConfig = typeof config === 'boolean';
    var title, message, icon;

    if (showDefaultConfig) {
      title = hookName;
      message = 'Default message';
      icon = path.join(__dirname, '../tomster.png');
    } else {
      title = config.title;
      message = config.message;
      icon = config.icon;
    }

    notifier.notify({
      title: title,
      message: message,
      icon: icon
    });
  }
};