Ext.define("WinWithin.store.Negtank", {
    extend: "Ext.data.Store",
    requires: [
        'WinWithin.model.Negtank',
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        model: "WinWithin.model.Negtank",
        proxy: {
            type: 'localstorage',
            id: 'WinWithin-app-store-negtank'
        }
    }
});