Ext.define('WinWithin.view.Introduktion', {
    extend: 'Ext.Container',
    alias: 'widget.introduktion',
    initialize: function() {
        this.callParent(arguments);

        // Unique for every view...
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Introduktion',
            style: {
                'background': '#d9d04c'
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
                'background': '#d9d04c'
            },
            items: [
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.play,
                scope: this,
                html: '<img name="introPlay" src="resources/images/play.png" style="width:48px;" />',
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
                html: '<h1>Utmana dina tankar- &auml;ndra ditt beteende- m&aring; b&auml;ttre.</h1>'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                html: [
                    '<p>Under mina &aring;r verksam som som kognitiv beteendeterapeut och coach har jag kommit i kontakt med m&aring;nga'
                    +' m&auml;nniskor och m&aring;nga olika problemomr&aring;den.&nbsp;Majoriteten har haft det gemensamt att de p&aring;verkats negativt '
                    +'av sina tankar. De har befunnit sig i ett m&ouml;nster av k&auml;nslot&auml;nkande. Helt enkelt tillskrivit sina egna tankar och '
                    +'k&auml;nslor en allt f&ouml;r stor och felaktig betydelse. De har m&aring;tt d&aring;ligt av alla obehagliga, stressfyllda k&auml;nslor '
                    +'som det negativa t&auml;nkandet gett upphov till.&nbsp;<br />'
                    +'Hur vi ska agera i olika situationer och vilka beslut vi ska fatta i olika fr&aring;gor baserar vi p&aring; vad vi t&auml;nker och '
                    +'k&auml;nner. Med den vetskapen &auml;r det inte sv&aring;rt att r&auml;kna ut hur ett negativt och pessimistiskt t&auml;nkande '
                    +'p&aring;verkar det vi g&ouml;r eller avst&aring;r fr&aring;n att g&ouml;ra.&nbsp;</p> <p>Med den h&auml;r appen vill jag presentera '
                    +'en rationell och praktisk 3-stegsmetod f&ouml;r dig som t&auml;nker pessimistiskt och har ett &ouml;verskott av negativa tankar.&nbsp;'
                    +'<br />Jag kommer att g&aring; igenom hur du kan &ouml;va in ett realistiskt f&ouml;rh&aring;llningss&auml;tt till dina negativa tankar. '
                    +'Hur du kan l&auml;ra dig att l&auml;sa av, och f&ouml;rst&aring;, var de obehagliga k&auml;nslorna kommer ifr&aring;n. Vi kommer '
                    +'ocks&aring; att g&aring; igenom hur du kan sortera bland dina negativa tankar. Hur du ska g&ouml;ra f&ouml;r att kunna fatta '
                    +'v&auml;lfungerande beslut samt p&aring; ett realistiskt s&auml;tt kunna f&ouml;rh&aring;lla dig till din vardag. I slutet av varje '
                    +'kapitel kommer du att f&aring; en utmaning att g&ouml;ra p&aring; egen hand. Du kan v&auml;lja att f&aring; texten uppl&auml;st om du '
                    +'inte vill l&auml;sa sj&auml;lv. Denna metod ska inte ses som v&aring;rd eller psykoterapi.</p> <p>Det heter att &ouml;vning ger '
                    +'f&auml;rdighet och min erfarenhet &auml;r att det st&auml;mmer. Vill du f&aring; kontroll p&aring; ditt inre liv, vad som '
                    +'p&aring;g&aring;r, s&aring; m&aring;ste du ha kunskap och verktyg f&ouml;r att kunna f&aring; det. Om du arbetar dig igenom den '
                    +'h&auml;r appen s&aring; &auml;r du p&aring; v&auml;g mot att:<br /> &nbsp;-&nbsp;utmana dina tankar<br /> &nbsp;-&nbsp;&auml;ndra ditt '
                    +'beteende<br /> &nbsp;-&nbsp;och att m&aring; b&auml;ttre.</p> <p>Nu b&ouml;rjar vi.</p><br/><br/>'].join("")
            }
            ]
        };

        this.add([topToolbar,bottomToolbar, component]);
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
