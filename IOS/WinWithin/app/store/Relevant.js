Ext.define("WinWithin.store.Relevant", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "WinWithin.model.Relevant",
        proxy: {
            type: 'localstorage',
            id: 'WinWithin-app-store-relevant'
        }
    }
});