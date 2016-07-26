var notifier = require('node-notifier');
var path = require('path');

module.exports = function(hookName) {
  return function(context) {
    var config = this.readConfig(hookName);

    if (!config) return;

    var showDefaultConfig = typeof config === 'boolean';
    var title, message, icon, sound;

    if (showDefaultConfig) {
      title = 'Ember deploy';
      message = hookName;
      icon = path.join(__dirname, '../tomster.png');
      sound = 'Submarine';
    } else {
      title = config.title;
      message = config.message;
      icon = config.icon;
      sound = config.sound;
    }

    notifier.notify({
      title: title,
      message: message,
      icon: icon,
      sound: sound
    });
  }
};