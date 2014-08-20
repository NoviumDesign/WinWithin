Ext.define('WinWithin.view.Avslutning', {
    extend: 'Ext.Container',
    alias: 'widget.avslutning',
    initialize: function() {
        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Avslutning',
            style: {
                'background': '#657798'
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
        var bottomToolbar = {
            xtype: "toolbar",
            docked: 'bottom',
            id: 'bottomToolbar',
            style: {
                'background': '#657798'
            },
            items: [
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.play,
                scope: this,
                html: '<img name="avslPlay" src="resources/images/play.png" style="width:48px;" />',
                iconMask: true
            }
            ]
        };

        var component = {
            xtype: 'panel',
            padding: 10,
            items: [
            {
                xtype: 'component',
                padding: 0,
                style: {
                    'font-weight': 'bold',
                    'background': '#FFF'
                },
                html: '<h1>Avslutning</h1>'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                html: [
                    '<p>Bra jobbat! Nu har du g&aring;tt igenom alla de tre stegen. Du har l&auml;rt dig en metod, ett '
    +'f&ouml;rh&aring;llningss&auml;tt gentemot dina negativa tankar och obehagliga k&auml;nslor.&nbsp;<br />'
    +'I kapitel 3 gick vi igenom hur du ska handskas med dina grundl&ouml;sa respektive relevanta tankar. Att du ska sl&auml;ppa de '
    +'grundl&ouml;sa tankarna och probleml&ouml;sa de relevanta negativa tankarna. Naturligtvis kan man inte probleml&ouml;sa bort alla '
    +'relevanta negativa tankar och k&auml;nslor. Drabbas man av en sorg eller h&auml;ndelse som ligger utanf&ouml;r den egna '
    +'beslutssf&auml;ren s&aring; &auml;r oro och negativa tankar sv&aring;ra att v&auml;rja sig emot och dessutom naturliga att ha. Att '
    +'leva inneb&auml;r att man kommer uts&auml;ttas f&ouml;r p&aring;frestningar och oro och det m&aring;ste man acceptera. Allt kan man '
    +'inte p&aring;verka. Det &auml;r livets villkor.&nbsp;</p>'
    +'<p>Jag vill avsluta med att uppmana dig, var uppm&auml;rksam och forts&auml;tt att h&aring;lla koll p&aring; dina obehagliga k&auml;nslor. '
    +'Forts&auml;tt att f&ouml;rh&aring;lla dig kallsinnig till dina grundl&ouml;sa negativa tankar. L&auml;mna dem i sticket och l&aring;t '
    +'dem klara sig p&aring; egen hand. Forts&auml;tt att utmana dina relevanta negativa tankar. Att med probleml&ouml;sningens hj&auml;lp '
    +'&auml;ndra ditt beteende och minska dina pessimistiska tankar. Med hj&auml;lp av den h&auml;r 3-stegsmetoden kan du m&ouml;ta dina '
    +'tankar och k&auml;nslor utan att beh&ouml;va fastna i negativa tankebanor och l&aring;ngdraget &auml;ltande. Nu &auml;r det &ouml;vning '
    +'som st&aring;r p&aring; agendan f&ouml;r att du ska f&aring; dina nyvunna kunskaper att f&auml;sta ordentligt, f&ouml;r som jag sa i '
    +'b&ouml;rjan, &ouml;vning ger f&auml;rdighet och f&auml;rdighet ger resultat.</p>'
    +'<p>Lycka till!<br />Kaxa Lindberg Rob&eacute;<br />Win Within</p>'].join("")
            }
            ]
                        
        };

        this.add([topToolbar, bottomToolbar, component]);
    },

    onMenu: function () {
        this.fireEvent("menuToggle", this);
    },
    play: function() {
        this.fireEvent('play', this);
    },
    config: {
        fullscreen: true,
        scrollable: true
    }
});
