Ext.define("WinWithin.model.Bevis", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'namnge', type: 'string' },
            { name: 'negTanke', type: 'string' },
            { name: 'relBevis', type: 'auto' },
            { name: 'grundBevis', type: 'auto' },
            { name: 'relElGrund', type: 'string' }
       ]
    }
});