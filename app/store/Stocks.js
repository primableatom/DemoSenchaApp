Ext.define('DemoSenchaApp.store.Stocks', {
  extend: 'Ext.data.Store',
  config: {
    model: 'DemoSenchaApp.model.Stock',
    proxy:{
      autoLoad: true,
      url:'http://192.168.11.95:3000/erp_app/shared/stocks/data',
      type:'ajax',
      reader:{
        type:'json',
        rootProperty:'data'
      }
    }
  }
});

