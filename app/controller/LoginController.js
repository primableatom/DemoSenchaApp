Ext.define('DemoSenchaApp.controller.LoginController', {
  extend : 'Ext.app.Controller',
  config: {
    refs: {
      nav: 'main',
      loginForm: 'compass-ae-login',
      submitButton: 'compass-ae-login button[itemId=submitLogin]'
    },
    control: {
      push: 'onPush',
      submitButton: {
        tap: "authenticateUser"
      }
    }
  },

  onPush: function(){
    this.getNav().setHidden(true);
  },


  authenticateUser: function(button){
    var self = this;
    var form = this.getLoginForm();
    form.setMasked({
      xtype: 'loadmask',
      message: 'Authenticating User...'
    });
    form.submit({
      url: 'http://192.168.11.95:3000/session/sign_in',
      method: 'POST',
      success: function (form, result) {
        form.setMasked(false);
        self.getNav().push({xtype: 'compass-erpapp-mobile-stock_finder-application'});
      },
      failure: function (form, result) {
        Ext.Msg.alert("Error", "Could not authenticate .");
      }
    });
    
  }
});
  
