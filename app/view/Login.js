Ext.define('DemoSenchaApp.view.Login', {
  extend: 'Ext.form.Panel',
  xtype: 'compass-ae-login',
  id: 'compass-ae-login',
  config: {
    fullscreen: true,
    defaults: {
      xtype: 'textfield'
    },
    items: [
      {
        xtype:'container',
        height:200
      },
      {
        label: 'Username or Email Address',
        labelAlign: 'top',
        name: 'login',
        required: true
      },
      {
        xtype: 'passwordfield',
        labelAlign: 'top',
        label: 'Password',
        name: 'password',
        required: true
      },
      {
        xtype: 'button',
        text: 'Login',
        flex: 1,
        style: 'margin:0.1em',
        itemId: 'submitLogin'        
      }
    ]
    
  }
});
