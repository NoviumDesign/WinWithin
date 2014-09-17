Ext.define('WinWithin.view.Kapitel3form', {
    extend: "Ext.form.Panel",
    alias: 'widget.kapitel3form',
    requires: [
        'Ext.form.FieldSet'
    ],
    initialize: function() {
        this.callParent(arguments);
        this.currentPanel = undefined;
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Utmaning',
            style: {
                'background': '#905f79'
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
                text: 'Kapitel 3',
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

        var bottomToolbar = {
            xtype: "toolbar",
            docked: 'bottom',
            id: 'bottomToolbar',
            style: {
                'background': '#905f79'
            },
            items: [
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.play,
                scope: this,
                html: '<img name="kap3formPlay" src="resources/images/play.png" style="width:48px;" />',
                iconMask: true
            }
            ]
        };

        this.add([topToolbar, bottomToolbar]);
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
            margin: '10 0 0 0',
            html: 'Problemlösning'
        };
        
        var negativTanke = {
            xtype: 'autoHeightTextArea',
            name: 'beskriv',
            label: '',
            value: record.get('beskriv'),
            placeHolder: 'Beskriv problemet'
        };


        this.add([
            {
                xtype: 'panel',
                // padding: '0 12',
                style: {
                    'background': '#e5e5e5'
                },
                items: [
                    headlinePanel
                ]
            }
        ]);
        this.add([
            // Form
            {
                xtype: 'panel',
                // padding: '0 12',
                style: {
                    'background': '#e5e5e5'
                },
                items: [
                    { xtype: 'fieldset',
                        margin: '10 0 0 0',
                        style: {
                            'background': '#FFF'
                        },
                        items: [negativTanke]
                    }
                ]
            }
        ]);
        this.add([
            {
                xtype: 'panel',
                // padding: '0 12',
                style: {
                    'background': '#e5e5e5'
                },
                items: [
                    { xtype: 'component',
                        margin: '10 0 0 0',
                        style: {
                            'background': '#FFF',
                            'padding': '5px'
                        },
                        html: '<span style="font-weight:bold;">Förslag till problemlösning</span><br/>Markera det du väljer att genomföra'
                    }
                ]
            }
        ]);

        this.forslag = record.get('forslag');
        // Add one empty
        this.forslag.push('');
        var forslagPanel = new Ext.Panel({
            // padding: 12,
            style: {
                'background': '#e5e5e5'
            },
            items: []
        });
        // Loop through bevis
        this.valda = [];
        

        for (var key in this.forslag) {
            var checker = new Ext.field.Checkbox({
                id: 'forslagCheck'+key,
                cls: 'checkGrey no-border',
                style: {
                    'width'      : '15%',
                    'float'      : 'left',
                    'position'   : 'absolute',
                    'top'        : '50%',
                    'right'      : '5px',
                    'margin-top' : '-21px'
                },
                handler: function(el, ev) {
                    if(el.up('.x-container').getCls() == 'checkGrey') {
                        for (var c in this.valda) {
                            this.valda[c].setCls('checkGrey');
                        }
                        el.setCls('checkGreen');
                        this.getRecord().set('vald', parseInt(el.id.replace('forslagCheck', ''), 10));
                    }
                }.bind(this),
                html: '&nbsp;'
            });
            if (this.getRecord().get('vald') == key) {
                checker.setCls('checkGreen');
            }
            this.valda.push(checker);
            forslagPanel.add(
                { xtype: 'panel',
                cls: 'clearfix borderrr',
                style: {
                    'position': 'relative',
                    'background': '#FFF',
                },
                items: [
                    {
                        xtype: 'autoHeightTextArea',
                        name: 'forslag'+key,
                        cls: 'no-border',
                        style: {
                            'background': '#FFF',
                            'width': '85%',
                            'float': 'left'
                        },
                        label: '',
                        value: this.forslag[key],
                        placeHolder: 'Verkliga bevis för att tanken är relevant'
                    },
                    checker
            ]});
            // forslagPanel.add();
        } // Endfor
        this.add(forslagPanel);


        this.add({
            xtype: 'button',
            style: {
                'background': '#FFF',
                'color': '#000',
                'border': '0 none'
            },
            html: '<span style="color:#000;">+ Lägg till</span>',
            handler: function(){
                key = this.forslag.push('') -1;
                
                var checker = new Ext.Button({
                    name: 'forslagCheck'+key,
                    cls: 'checkGrey',
                    style: {
                        'position': 'absolute',
                        'top': '3px',
                        'right': '3px',
                        'width': '18px',
                        'height': '18px',
                        'box-shadow': 'none',
                        '-webkit-box-shadow': 'none'
                    },
                    handler: function(el, ev) {
                        if(el.getCls() == 'checkGrey') {
                            for (var c in this.valda) {
                                this.valda[c].setCls('checkGrey');
                            }
                            el.setCls('checkGreen');
                            this.getRecord().set('vald', parseInt(el.name.replace('forslagCheck', ''), 10));
                        }
                        console.log(this.getRecord().get('vald'));
                    }.bind(this),
                    html: '&nbsp;'
                });
                this.valda.push(checker);
                forslagPanel.add(
                    { xtype: 'panel',
                    style: {
                        'position': 'relative'
                    },
                    items: [
                        {
                            xtype: 'autoHeightTextArea',
                            name: 'forslag'+key,
                            style: {
                                'background': '#FFF'
                            },
                            label: '',
                            placeHolder: 'Verkliga bevis för att tanken är relevant'
                        },
                        checker
                ]});

            }.bind(this)
        });
        
        var item = this.add([
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
        this.fireEvent('saveProblem', this);
    },
    play: function() {
        this.fireEvent('play', this);
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
        this.fireEvent("deleteProblemCommand", this);
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
