Ext.define('DemoSenchaApp.view.Main', {
  extend: 'Ext.navigation.View',
  xtype: 'main',
  id: "naviview",
  requires: [
    'DemoSenchaApp.view.Login'
  ],
  config: {
    navigationBar: {
      hidden: true
    },    
    tabBar: {
      docked: 'bottom',
      layout: {
        pack: 'center'
      }
    },
    items: [{
      xtype: 'compass-ae-login'
    }]
  }
});
           
