Ext.define("WinWithin.model.Negtank", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'namnge', type: 'string' },
            { name: 'negativtanke', type: 'string' },
            { name: 'obehaglig', type: 'string' }
        ]
    }
});