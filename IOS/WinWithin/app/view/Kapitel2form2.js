Ext.define('WinWithin.view.Kapitel2form2', {
    extend: "Ext.form.Panel",
    alias: 'widget.kapitel2form2',
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

        var bottomToolbar = {
            xtype: "toolbar",
            docked: 'bottom',
            id: 'bottomToolbar',
            style: {
                'background': '#495b6a'
            },
            items: [
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.play,
                scope: this,
                html: '<img name="kap2form1Play" src="resources/images/play.png" style="width:48px;" />',
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
            // margin: '10 0',
            html: 'Bevis för och emot'
        };
        var noteTitleEditor = {
            xtype: 'textfield',
            name: 'namnge',
            placeHolder: 'Namnge',
            value: record.get('namnge')
        };

        var negativTanke = {
            xtype: 'autoHeightTextArea',
            name: 'negTanke',
            label: '',
            value: record.get('negTanke'),
            placeHolder: 'Negativ tanke'
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
        this.add([
            // Form
            {
                xtype: 'panel',
                padding: 0,
                style: {
                    'background': '#e5e5e5'
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
                    }
                ]
            }
        ]);

        this.relBevis = record.get('relBevis');
        // Add one empty
        this.relBevis.push('');
        var bevisPanel = new Ext.Panel({
            padding: 0,
            style: {
                'background': '#e5e5e5'
            },
            items: []
        });
        // Loop through bevis
        for (var key in this.relBevis) {
            bevisPanel.add({
                xtype: 'autoHeightTextArea',
                name: 'relBevis'+key,
                style: {
                    'background': '#FFF'
                },
                label: '',
                value: this.relBevis[key],
                placeHolder: 'Verkliga bevis för att tanken är relevant'
            });
        } // Endfor
        this.add(bevisPanel);

        this.add({
            xtype: 'button',
            style: {
                'background': '#FFF',
                'color': '#000',
                'border': '0 none'
            },
            html: '<span style="color:#000;">+ Lägg till</span>',
            handler: function(){
                key = this.relBevis.push('') -1;
                bevisPanel.add({
                    xtype: 'autoHeightTextArea',
                    name: 'relBevis'+key,
                    style: {
                        'background': '#FFF'
                    },
                    label: '',
                    placeHolder: 'Verkliga bevis för att tanken är relevant'
                });
            }.bind(this)
        });
        
        this.grundBevis = record.get('grundBevis');
        // Add one empty
        this.grundBevis.push('');
        var grundPanel = new Ext.Panel({
            padding: 0,
            style: {
                'background': '#e5e5e5'
            },
            items: []
        });
        // Loop through bevis
        for (var key in this.grundBevis) {
            grundPanel.add({
                xtype: 'autoHeightTextArea',
                name: 'grundBevis'+key,
                style: {
                    'background': '#FFF'
                },
                label: '',
                value: this.grundBevis[key],
                placeHolder: 'Verkliga bevis för att tanken är grundlös'
            });
        }
        this.add(grundPanel);
        this.add({
            xtype: 'button',
            style: {
                'background': '#FFF',
                'color': '#000',
                'border': '0 none'
            },
            html: '<span style="color:#000;">+ Lägg till</span>',
            handler: function(){
                key = this.grundBevis.push('') -1;
                grundPanel.add({
                    xtype: 'autoHeightTextArea',
                    name: 'grundBevis'+key,
                    style: {
                        'background': '#FFF'
                    },
                    label: '',
                    placeHolder: 'Verkliga bevis för att tanken är grundlös'
                });
            }.bind(this)
        });


        var button1 = {
            xtype: 'button',
            name: 'relevant',
            style: {
                'width': '50%',
                'float': 'left'
            },
            handler: function(el, ev) {
                var el2 = this.down('[name=grundlos]');
                if(el.getCls() == 'buttonGreen') {            
                    //el.setCls('buttonGray');
                } else {
                    el2.setCls('buttonGray');
                    el.setCls('buttonGreen');
                    this.getRecord().set('relElGrund', 'relevant');
                }
            }.bind(this),
            html: 'Relevant',
        }
        if (this.getRecord().get('relElGrund') == 'relevant') {
            button1.cls = 'buttonGreen';
        }
        var button2 = {
            xtype: 'button',
            name: 'grundlos',
            style: {
                'width': '50%',
                'float': 'left'
            },
            handler: function(el, ev) {
                var el2 = this.down('[name=relevant]');
                if(el.getCls() == 'buttonGreen') {            
                    //el.setCls('buttonGray');
                } else {
                    el2.setCls('buttonGray');
                    el.setCls('buttonGreen');
                    this.getRecord().set('relElGrund', 'grundlos');
                }
            }.bind(this),
            html: 'Grundlös',
        }
        if (this.getRecord().get('relElGrund') == 'grundlos') {
            button2.cls = 'buttonGreen';
        }
        var item = this.add([
            {
                xtype: 'panel',
                padding: 0,
                style: {
                    'background': '#e5e5e5'
                },
                items: [
                    { xtype: 'fieldset',
                        padding: 10,
                        // margin: '10 0',
                        style: {
                            'background': '#FFF'
                        },
                        items: [button1, button2]
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
    // Tap menu takes you back
    onMenu: function () {
        this.fireEvent('saveBevis', this);
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
        this.fireEvent("deleteBevis", this);
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
