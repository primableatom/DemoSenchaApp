Ext.define('DemoSenchaApp.util.Helper', {
  singleton : true,
  alternateClassName : 'Helper',
  loadMask: function(){
    Ext.Viewport.setMasked({
      xtype: 'loadmask',
      message: 'Finding Stocks...'
    });    
  },
  callback: function(records, options, success){
    Ext.Viewport.setMasked(false);
    if (!success){
      Ext.Msg.alert('Error', 'Error finding stocks');
    }
  }
});
