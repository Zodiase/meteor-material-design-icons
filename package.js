var mdiVersion = '2.2.2';
var revision = 0;

Package.describe({
  name: 'zodiase:material-design-icons-fonts',
  version: (revision > 0) ? mdiVersion + '_' + revision : mdiVersion,
  summary: 'Material Design icons for Meteor',
  git: 'https://github.com/Zodiase/meteor-material-design-icons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addAssets([
    'iconfont/MaterialIcons-Regular.eot',
    'iconfont/MaterialIcons-Regular.ijmap',
    'iconfont/MaterialIcons-Regular.svg',
    'iconfont/MaterialIcons-Regular.ttf',
    'iconfont/MaterialIcons-Regular.woff',
    'iconfont/MaterialIcons-Regular.woff2'
  ], 'client');
  api.addFiles('iconfont/material-icons.css', 'client');
});
