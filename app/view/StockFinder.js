Ext.define('DemoSenchaApp.view.StockFinder', {
  extend: 'Ext.Panel',
  xtype: 'compass-erpapp-mobile-stock_finder-application',
  requires: [
    'DemoSenchaApp.util.Helper'
  ],
  config:{
    layout: 'card',
    tabBarPosition: 'bottom'
  },

  constructor: function(config){
    Helper.loadMask();
    var self = this;
    this.store = Ext.create('DemoSenchaApp.store.Stocks', {
      storeId: 'stockfinder-stockstore'
    });
    this.store.load({
      callback: Helper.callback
    });
    
    config['items'] = [
      {
        xtype: 'toolbar',
        ui: 'light',
        iconMask:true,
        docked: 'top',
        items: [
          {
            text: 'Home',
            ui: 'back',
            handler: function (btn) {
              btn.up('#mainContainer').setActiveItem('#home');
            }
          },
          {
            xtype: 'searchfield',
            name: 'query',
            placeHolder: "yhoo,goog", 
            listeners: {
              action: function(field){
                var stock_symbols = field.getValue();
                self.store.load({
                  params: {symbols: stock_symbols},
                  callback: Helper.callback
                });
              }
            }
          }
        ]
        
      },
      {
        xtype: 'list',
        store: 'stockfinder-stockstore',
        itemTpl: [
          '<div><strong>Company: </strong><span><b>{name}</b></span></div>',
          '<div><strong>Symbol: </strong><span>{symbol}</span></div>',
          '<div><strong>Ask: </strong><span>{ask}</span></div>',
          '<div><strong>Change: </strong><span class={[parseFloat(values.change)>0]}>{change}</span></div>',
          '<div><strong>Change %: </strong> <span class={[parseFloat(values.changePercent)>0]}>{changePercent}</span></div>',
          '<div><strong>Last Update: </strong><span>{lastUpdate}</span></div>'
        ]
        
      }
    ];
    this.callParent([config]);
  }
});
