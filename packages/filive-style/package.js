Package.describe({
  name: 'filive:style',
  version: '1.0.0',
  summary: 'Styling for FILIVE 2015',
  documentation: 'README.md'
});

Cordova.depends({
  'org.apache.cordova.statusbar': '0.1.9'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  var packages = [
    'standard-app-packages',
    'service-configuration',
    'accounts-ui',
    'accounts-base',
    'accounts-password',
    'mobile-status-bar@1.0.3',
    'mongo',
    'jquery',
    'momentjs:moment@2.10.3',
    'templating',
    'tmeasday:gravatar@0.0.4',
    'aldeed:template-extension@3.4.3',
    'brentjanderson:buzz@1.1.9'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles('lib/statusbar.js');

  api.addFiles('lib/server/profile-pictures.js', 'server');

  api.addFiles([
    'lib/client/main.html',
    'lib/client/chaparall.css',
    'lib/client/styles.css',
    'lib/client/autoscroll.js'
  ], 'client');
});
