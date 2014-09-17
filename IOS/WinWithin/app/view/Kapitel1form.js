Ext.define('WinWithin.view.Kapitel1form', {
    extend: "Ext.form.Panel",
    alias: 'widget.kapitel1form',
    requires: [
        'Ext.form.FieldSet'
    ],
    initialize: function() {
        //this.

        this.callParent(arguments);
        this.backEvent = undefined;
        this.currentPanel = undefined;
        // Unique for every view...
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Utmaning',
            style: {
                'background': '#7baf9a'
            },
            items: [
            {
                xtype: 'button',
                ui: 'back',
                style: {
                    'background': 'none'
                },
                handler: this.onMenu,
                scope: this,
                text: 'Kapitel 1',
                iconMask: true
            },{
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.onDelete,
                scope: this,
                html: '<img src="resources/images/ic_action_discard.png" style="width:22px; margin-top: 6px;" />',
                iconMask: true
            }
            ]
        };

        this.add([
            topToolbar
        ]);
    },
    updateWithForm: function() {
        if (this.currentPanel !== undefined) {
            this.removeAll();
        }
        var record = this.getRecord();
        
        var noteTitleEditor = {
            xtype: 'textfield',
            name: 'namnge',
            label: '',
            placeHolder: 'Namnge',
            value: record.get('namnge')
        };

        var negativTanke = {
            xtype: 'autoHeightTextArea',
            name: 'negativtanke',
            label: '',
            placeHolder: 'Negativ tanke',
            value: record.get('negativtanke')
        };
        

        var obehaglig = {
            xtype: 'autoHeightTextArea',
            name: 'obehaglig',
            label: '',
            placeHolder: 'Obehagliga känslor',
            value: record.get('obehaglig')
        };
        var item = this.add([
            // Form
            {
                xtype: 'container',
                layout : {
                    type: 'vbox',
                    align: 'stretch'
                },
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                items: [
                    {
                        xtype: 'component',
                        padding: 10,
                        style: {
                            'font-weight': 'bold',
                            'background': '#FFF'
                        },
                        html: 'Relevant eller grundlös tanke'
                    },
                    { xtype: "fieldset",
                        style: {
                            'background': '#FFF'
                        },
                        items: [noteTitleEditor]
                    },
                    { xtype: 'fieldset',
                        style: {
                            'background': '#FFF'
                        },
                        layout : {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [negativTanke]
                    },
                    { xtype: 'fieldset',
                        style: {
                            'background': '#FFF'
                        },
                        items: [obehaglig]
                    }
                ]
            }
        ]);
        this.add([
            // Clickprotection
            {
                xtype: 'component',
                name: 'clickProtection',
                style: {
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'background': 'rgba(0, 0, 0, 0)',
                    'width': '100%',
                    'height': '100%'
                },
                hidden: false
            },
            // Fader
            {
                xtype: 'component',
                name: 'fader',
                style: {
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'background': 'rgba(0, 0, 0, 0.2)',
                    'width': '100%',
                    'height': '100%'
                },
                hidden: true
            },
            // Delete container
            {
                xtype: 'panel',
                name: 'deletepanel',
                docked: 'bottom',
                hidden: true,
                style: {
                    'width': '100%',
                    'height': '200px',
                    'background': '#FFF',
                    'padding': '12px'
                },
                items: [
                    {
                        xtype: 'button',
                        handler: this.onRadera,
                        scope: this,
                        html: 'Radera',
                        style: {
                            'background': '#cc272b',
                            'color': 'white',
                            'margin-bottom': '10px',
                            'border': '0 none'
                        }
                    },
                    {
                        xtype: 'button',
                        handler: this.onAvbryt,
                        scope: this,
                        html: 'Avbryt'
                    }
                ]
            }
        ]);
        this.currentPanel = item._itemId;

        setTimeout(function() {
            this.down('[name=clickProtection]').hide({
                type: 'fadeOut',
                duration: 1,
                delay: 0
            });
        }.bind(this), 500);
    },

    onMenu: function () {
        this.fireEvent("saveNegtankCommand", this);
    },
    onDelete: function () {
        this.down('[name=fader]').show({
            type: 'fadeIn',
            duration: 150,
            delay: 0
        });
        this.down('[name=deletepanel]').show({
            type: 'slide',
            direction: 'up',
            duration: 150
        });
    },
    onRadera: function() {
        this.onAvbryt();
        this.fireEvent("deleteNegtankCommand", this);
    },
    onAvbryt: function() {
        this.down('[name=fader]').hide({
            type: 'fadeOut',
            duration: 150,
            delay: 0
        });
        this.down('[name=deletepanel]').hide({
            type: 'fadeOut'
        });
    },
    config: {
        fullscreen: true,
        scrollable: false
    }
});
