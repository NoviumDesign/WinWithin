/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'WinWithin',

    requires: [
        'Ext.MessageBox'
    ],
    forms: [ 'AutoTextArea'],
    views: [
        'Main', 'Introduktion', 'Kapitel1', 'Kapitel2', 'Kapitel3', 'Avslutning',
        'Utmaningar', 'Utmaningarlist', 'Kapitel1form', 'Kapitel2form1', 'Kapitel2form2', 'Kapitel3form',
        'Nyutmaning'
    ],
    controllers: [
        'Win'
    ],
    models: ['Negtank', 'Relevant', 'Bevis', 'Problem', 'Avtal'],
    stores: ['Negtank', 'Relevant', 'Bevis', 'Problem', 'Avtal'],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var main         = {xtype: 'main'},
          introduktion   = {xtype: 'introduktion'},
          kapitel1       = {xtype: 'kapitel1'},
          kapitel2       = {xtype: 'kapitel2'},
          kapitel3       = {xtype: 'kapitel3'},
          avslutning     = {xtype: 'avslutning'},
          utmaningar     = {xtype: 'utmaningar'},
          kapitel1form   = {xtype: 'kapitel1form'},
          kapitel2form1  = {xtype: 'kapitel2form1'},
          kapitel2form2  = {xtype: 'kapitel2form2'},
          kapitel3form   = {xtype: 'kapitel3form'},
          nyutmaning = {xtype: 'nyutmaning'}

        Ext.Viewport.add([main, introduktion, kapitel1, kapitel2, kapitel3, avslutning, utmaningar, 
            kapitel1form, kapitel2form1, kapitel2form2, kapitel3form, nyutmaning]);

        Ext.getStore('Avtal').load();
        if (Ext.getStore('Avtal').getCount() === 0) {
            Ext.Viewport.setActiveItem(main);
        } else {
            Ext.Viewport.setActiveItem(introduktion);
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
