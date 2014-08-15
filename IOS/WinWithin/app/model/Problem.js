Ext.define("WinWithin.model.Problem", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date', dateFormat: 'c' },
            { name: 'beskriv', type: 'string' },
            { name: 'forslag', type: 'auto' },
            { name: 'vald', type: 'string' }
       ]
    }
});