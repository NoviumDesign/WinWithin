Ext.define('WinWithin.view.Kapitel2form1', {
    extend: "Ext.form.Panel",
    alias: 'widget.kapitel2form1',
    requires: [
        'Ext.form.FieldSet'
    ],
    initialize: function() {
        this.callParent(arguments);
        this.backEvent = undefined;
        this.currentPanel = undefined;
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Utmaning',
            style: {
                'background': '#495b6a'
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
                text: 'Kapitel 2',
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
        
        this.add([topToolbar]);
    },
    updateWithForm: function() {
        if (this.currentPanel !== undefined) {
            this.removeAll();
        }
        var record = this.getRecord();
        
        var headlinePanel = {
            xtype: 'panel',
            style: {
                'background': '#FFF',
                'padding': '10px',
                'font-weight': 'bold'
            },
            // margin: '10 0',
            html: 'Relevant eller grundlös tanke'
        };
        this.add([
            {
                xtype: 'panel',
                padding: 0,
                style: {
                    'background': '#e5e5e5'
                },
                items: [
                    headlinePanel
                ]
            }
        ]);
        var fiel = record.get('fields');
        // Loop through record fields
        for (var key in fiel) {
            
            var noteTitleEditor = {
                xtype: 'textfield',
                name: 'namnge',
                placeHolder: 'Namnge',
                value: fiel[key].namnge
            };

            var negativTanke = {
                xtype: 'autoHeightTextArea',
                name: 'negTanke',
                label: '',
                value: fiel[key].negTanke,
                placeHolder: 'Negativ tanke'
            };

            // relElGrund
            var button1 = {
                xtype: 'button',
                id: 'relevant'+key,
                style: {
                    'width': '46%',
                    'float': 'left',
                    'margin-right': '2%'
                },
                handler: function(el, ev) {
                    var keyButton = parseInt(el.id.replace('relevant', ''), 10);
                    var el2 = this.down('[id=grundlos'+keyButton+']');
                    var recFields = this.getRecord().get('fields');
                    if(el.getCls() == 'buttonGreen') {            
                        //el.setCls('buttonGray');
                    } else {
                        el2.setCls('buttonGray');
                        el.setCls('buttonGreen');
                        recFields[keyButton].relElGrund = 'relevant';
                        this.getRecord().set('fields', recFields);
                    }
                }.bind(this),
                html: 'Relevant',
            }
            if (fiel[key].relElGrund == 'relevant') {
                button1.cls = 'buttonGreen';
            }
            var button2 = {
                xtype: 'button',
                id: 'grundlos'+key,
                style: {
                    'width': '50%',
                    'float': 'left'
                },
                handler: function(el, ev) {
                    var keyButton = parseInt(el.id.replace('grundlos', ''), 10);
                    var el2 = this.down('[id=relevant'+keyButton+']');
                    var recFields = this.getRecord().get('fields');

                    if(el.getCls() == 'buttonGreen') {            
                        //el.setCls('buttonGray');
                    } else {
                        el2.setCls('buttonGray');
                        el.setCls('buttonGreen');
                        recFields[keyButton].relElGrund = 'grundlos';
                        this.getRecord().set('fields', recFields);
                    }
                }.bind(this),
                html: 'Grundlös',
            }
            if (fiel[key].relElGrund == 'grundlos') {
                button2.cls = 'buttonGreen';
            }
            var item = this.add([
                // Form
                {
                    xtype: 'panel',
                    padding: 0,
                    style: {
                        'background': '#FFF'
                    },
                    items: [
                        { xtype: "fieldset",
                            style: {
                                'background': '#FFF'
                            },
                            items: [noteTitleEditor]
                        },
                        { xtype: 'fieldset',
                            // margin: '10 0',
                            style: {
                                'background': '#FFF'
                            },
                            items: [negativTanke]
                        },
                        { xtype: 'fieldset',
                            margin: '10 0',
                            padding: 10,
                            style: {
                                'background': '#FFF'
                            },
                            items: [button1, button2]
                        }

                    ]
                }
            ]);
        }
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
    // Tap menu takes you back
    onMenu: function () {
        this.fireEvent('saveRelElGrund', this);
    },



    /**
     * Standard options
     *
     */
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
        this.fireEvent("deleteRelevantCommand", this);
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
        scrollable: true
    }
});
