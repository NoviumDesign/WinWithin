Ext.define("WinWithin.store.Avtal", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "WinWithin.model.Avtal",
        proxy: {
            type: 'localstorage',
            id: 'WinWithin-app-store-avtal'
        }
    }
});