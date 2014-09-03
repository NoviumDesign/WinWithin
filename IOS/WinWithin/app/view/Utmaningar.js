Ext.define('WinWithin.view.Utmaningar', {
    extend: 'Ext.Container',
    alias: 'widget.utmaningar',
    initialize: function() {
        this.callParent(arguments);
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Utmaningar',
            style: {
                'background': '#794849'
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
                text: 'Meny',
                iconMask: true
            },{
                xtype: 'spacer'
            },
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.onNew,
                scope: this,
                html: '<img src="resources/images/ic_action_new.png" style="width:22px; margin-top: 6px;" />',
                iconMask: true
            }
            ]
        };

        this.add([topToolbar]);

        this.refresh();
        
    },
    refresh: function() {
        this.removeAll();
        
        var listData = [];
        
        Ext.getStore('Negtank').load();
        Ext.getStore('Negtank').each(function(rec) {
            listData.push({namnge: rec.get('namnge'), model: 'Negtank', clss:'negtankList', record: rec, action: 'gotoNegTank'});
        });
        
        Ext.getStore('Relevant').load();
        Ext.getStore('Relevant').each(function(rec) {
            var fields = rec.get('fields');
            var title = fields[0].namnge;
            if (fields[0].relElGrund == 'relevant') {
                title += ' (Relevant)';
            }
            if (fields[0].relElGrund == 'grundlos') {
                title += ' (Grundlös)';
            }
            listData.push({namnge: title, model: 'Relevant', clss:'bevisList', record: rec, action: 'gotoRelevant'});
        });
        Ext.getStore('Bevis').load();
        Ext.getStore('Bevis').each(function(rec) {
            var title = rec.get('namnge');
            if (rec.get('relElGrund') == 'relevant') {
                title += ' (Relevant)';
            }
            if (rec.get('relElGrund') == 'grundlos') {
                title += ' (Grundlös)';
            }
            listData.push({namnge: title, model: 'Bevis', clss:'bevisList', record: rec, action: 'gotoBevis'});
        });
        
        Ext.getStore('Problem').load();
        Ext.getStore('Problem').each(function(rec) {
            listData.push({namnge: rec.get('beskriv'), model: 'Problem', clss:'problemList', record: rec, action: 'gotoProblem'});
        });
        
        if (listData.length > 0) {

            var utmaningarlist = {
                xtype: "utmaningarlist",
                style: {
                    'background': '#FFF'
                },
                data: listData,
                listeners: {
                    scope: this,
                    //disclose: this.onDisclose,
                    itemtap: this.onTap
                }
            };
            
            var panel = {
                xtype: 'panel',
                layout: 'fit',
                // style: { 
                //     'padding': '12px'
                // },
                items: [utmaningarlist]
            }

            this.add([panel]);
        } 
    },
    // onDisclose: function (list, record, target, index, evt, options) {
    //     this.fireEvent('gotoEdit', this, record);
    // },
    onTap: function (list, index, target, record, evt, options) {
        console.log(evt);
        setTimeout(function() {
            this.fireEvent('gotoEdit', this, record);
        }.bind(this), 20);

        // evt.stopPropagation();
    },
    onMenu: function () {
        this.fireEvent("menuToggle", this);
    },
    onNew: function(){
        this.fireEvent('newChallange', this);
    },
    config: {
        fullscreen: true,
        scrollable: false,
        layout: 'fit'
    }
});
