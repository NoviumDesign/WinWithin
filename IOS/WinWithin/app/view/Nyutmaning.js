Ext.define('WinWithin.view.Nyutmaning', {
    extend: 'Ext.Container',
    alias: 'widget.nyutmaning',
    initialize: function() {
        this.callParent(arguments);
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Ny utmaning',
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
            }
            ]
        };
        
        this.add([topToolbar]);

        this.refresh();
        
    },
    refresh: function() {
        this.removeAll();
        
        var listData = [
            { namnge: 'Negativa tankar och känslor', clss:'negtankList'},
            { namnge: 'Bevis för eller emot', clss:'bevisList'},
            { namnge: 'Relevant eller grundlös tanke', clss:'bevisList'},
            { namnge: 'Problemlösning', clss:'problemList' }
        ];
        
        
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
    
    },
    onTap: function (list, index, target, record, evt, options) {
        this.fireEvent('gotoNewChallange', this, record);
        evt.stopPropagation();
    },
    // onDisclose: function (list, record, target, index, evt, options) {
    //     this.fireEvent('gotoNewChallange', this, record);
    // },
    onMenu: function () {
        this.fireEvent("backToUtmaningar", this);
    },
    config: {
        fullscreen: true,
        scrollable: false,
        layout: 'fit'
    }
});
