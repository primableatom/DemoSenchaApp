Ext.define('DemoSenchaApp.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [
    'DemoSenchaApp.view.StockFinder'
  ],
  config: {
    tabBar: {
      docked: 'bottom',
      layout: {
        pack: 'center'
      }
    },
    items: [{
      xtype: 'compass-erpapp-mobile-stock_finder-application',
      iconCls: 'home',
      title: 'Stocks'
    }]
  }
});
           
