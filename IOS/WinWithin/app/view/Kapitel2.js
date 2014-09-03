Ext.define('WinWithin.view.Kapitel2', {
    extend: 'Ext.Container',
    alias: 'widget.kapitel2',
    initialize: function() {
        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Kapitel 2',
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
                html: '<img name="kap2Play" src="resources/images/play.png" style="width:48px;" />',
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
                html: '<h1>Relevanta eller grundl&ouml;sa negativa tankar</h1>'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                html: [
                    '<p>Nu hoppas jag att du f&ouml;rst&aring;tt sambandet mellan det du t&auml;nker och k&auml;nner, att du kan koppla ihop ditt kamp-'
    +' och flyktsystem med dina negativa tankar. Om inte rekommenderar jag att du ska ge unders&ouml;kandet lite mer tid. Uppm&auml;rksammade du'
    +' hur lurad du blev av dina obehagliga k&auml;nslor till att tro p&aring; dina negativa tankar? Att de obehagliga k&auml;nslop&aring;slagen '
    +'gav tankarna trov&auml;rdighet.<br />'
+'M&auml;rkte du att du blev k&auml;nslom&auml;ssigt p&aring;verkad oavsett sanningshalten i tankarna?&nbsp;</p>'

+'<p>Nu &auml;r det dags att b&ouml;rja skilja p&aring; relevanta och grundl&ouml;sa negativa tankar. Med relevanta tankar menar jag de tankar '
+'som r&ouml;r din tillvaro p&aring; riktigt, som har en verklighetsbaserad bakgrund. Med grundl&ouml;sa tankar menar jag tankar som inte har '
+'f&ouml;rankring i din nuvarande situation eller verklighet, utan bara &auml;r l&ouml;st dragna slutsatser och antaganden.&nbsp;<br />'
+'Att l&auml;ra sig dela in tankarnas inneh&aring;ll i dessa tv&aring; olika grupper &auml;r viktigt. Att kunna skilja mellan att bli orolig av '
+'tankar som inte har n&aring;gon b&auml;ring i verkliga livet och tankar kring riktiga problem av n&aring;got slag. Kan man inte skilja de '
+'b&aring;da kategorierna &aring;t s&aring; finns det en risk att man handskas med allt oroande och negativt t&auml;nkande p&aring; samma s&auml;tt,'
+' oavsett sanningshalt.<br />'
+'Man tillskriver de tv&aring; olika tankekategorierna samma status, samma v&auml;rde.&nbsp;</p>'

+'<p>F&ouml;rest&auml;ll dig att dina tankar b&ouml;rjar cirkla i negativa banor kring att du inte har pengar till att betala dina r&auml;kningar.'
+' Om kontot &auml;r magert eller tomt &auml;r dessa tankar ber&auml;ttigade, de &auml;r allts&aring; relevanta. Men, om du egentligen vet att du '
+'har pengar p&aring; ditt konto. Tillr&auml;ckligt mycket f&ouml;r att betala dina r&auml;kningar, d&aring; har du t&auml;nkt en massa negativa '
+'tankar utan anledning. Dina negativa tankar har varit grundl&ouml;sa.</p>'

+'<p>Ett exempel till: du b&ouml;rjar t&auml;nka i negativa banor och oroa dig &ouml;ver att du ska bli uppsagd fr&aring;n ditt nya arbete. '
+'Ledningen har meddelat att antalet anst&auml;llda ska minskas p&aring; grund av sjunkande efterfr&aring;gan. Du &auml;r nyanst&auml;lld '
+'s&aring; din oro och de negativa tankarna kan vara ber&auml;ttigade, allts&aring; relevanta.</p>'

+'<p>Ett annat exempel: Du b&ouml;rjar t&auml;nka i negativa banor kring att bli uppsagd p&aring; grund av att din chef f&ouml;resl&aring;r '
+'n&aring;gra &auml;ndringar i ett dokument du har skrivit. I det h&auml;r exemplet &auml;r de negativa tankarna med all sannolikhet '
+'grundl&ouml;sa. Att f&aring; synpunkter med nya id&eacute;er leder ju inte per automatik till att man ska f&aring; sparken.</p>'

+'<p>Det kan vara knepigt att avg&ouml;ra om en negativ tanke &auml;r relevant eller grundl&ouml;s, du kommer v&auml;l ih&aring;g hur tanken '
+'blir bekr&auml;ftad av k&auml;nslan och att du d&auml;rmed luras till att tro p&aring; det du t&auml;nkt. Trots att det kan vara sv&aring;rt '
+'s&aring; &auml;r det av vikt att kunna avg&ouml;ra om tanken &auml;r relevant eller grundl&ouml;s. Din utmaning i detta kapitel blir att skilja '
+'dina negativa tankar &aring;t. Du ska dela in dem i de tv&aring; grupperna, relevanta och grundl&ouml;sa. Tycker du att det &auml;r sv&aring;rt '
+'att avg&ouml;ra om en negativ tanke &auml;r relevant eller inte g&aring;r du till utmaning: bevis f&ouml;r och emot. D&auml;r skriver du ner '
+'din negativa tanke. G&aring; sedan igenom vad du har f&ouml;r bevis som talar f&ouml;r att den &auml;r relevant och bevis som talar emot att '
+'den &auml;r relevant. Du ska skriva ner alla bevis du kan komma p&aring;. N&auml;r du &auml;r klar har du ett bra underlag f&ouml;r att kunna '
+'besluta om den negativa tanken var relevant eller grundl&ouml;s genom att titta p&aring;, och v&auml;rdera, det du skrivit. Se upp s&aring; att '
+'du inte blir lurad av stressande k&auml;nslop&aring;slag som f&aring;r dig att se grundl&ouml;sa negativa tankar som relevanta.&nbsp;<br />'
+'Beh&ouml;ver du inte pr&ouml;va tankens sanningshalt med hj&auml;lp av bevis f&ouml;r och emot, utan tror att du kan avg&ouml;ra direkt om '
+'tanken &auml;r relevant eller grundl&ouml;s, d&aring; kan du g&aring; till utmaning: relevant eller grundl&ouml;s tanke.&nbsp;<br />'
+'Arbeta med denna utmaning under ett par dagar, innan du g&aring;r vidare till kapitel 3.</p>'

+'<p>Sammanfattning:<br />'
+'<strong>Negativa tankar</strong> leder till att<br />'
+'<strong>kamp- och flyktsystemet</strong> drar ig&aring;ng.<br />'
+'Negativa tankar &auml;r uppbyggda kring <strong>v&auml;rdeord.</strong><br />'
+'<strong>Relevanta</strong> och <strong>grundl&ouml;sa</strong> tankar. B&aring;da kategorierna leder till kroppsliga reaktioner.&nbsp;</p>',
'<p><strong>Utmaning kapitel </strong><strong>2.<br/> Bevis f&ouml;r och emot. Bevis som talar f&ouml;r och emot att tanken &auml;r relevant.'
    +'</strong></p><p>F&ouml;r att du ska f&aring; en id&eacute; om hur du kan t&auml;nka n&auml;r du ska utf&ouml;ra din utmaning ger jag '
    +'dig tre exempel. F&ouml;r enkelhetens skull har jag lagt alla bevisen under samma kategori.</p>'
    +'<p>Exempel 1.<br /> Negativa tankar:<br /> Min man &auml;r aldrig hemma nuf&ouml;rtiden. T&auml;nk om han har tr&auml;ffat n&aring;gon '
    +'annan?<br /> Bevis som talar f&ouml;r att han har tr&auml;ffat n&aring;gon annan? Jag har inga.<br /> Bevis som talar emot att han har '
    +'tr&auml;ffat n&aring;gon annan?<br /> Han har mycket att g&ouml;ra p&aring; jobbet. Det har han varje &aring;r vid den h&auml;r tiden.<br />'
    +'Ig&aring;r fr&aring;gade han om vi skulle resa n&aring;gonstans n&auml;r allt lugnat ner sig.<br />'
    +'Var tankarna relevanta eller grundl&ouml;sa? Mina negativa tankar var grundl&ouml;sa.</p>'
    +'<p>Exempel 2.<br />Negativa tankar: Jag &auml;r alltid ensam p&aring; helgerna. Ingen vill umg&aring;s med mig.<br />'
    +'Bevis som talar f&ouml;r att ingen vill umg&aring;s med mig. T&auml;nker jag efter s&aring; har jag inga.<br />'
    +'Bevis som talar emot att ingen vill umg&aring;s med mig.<br /> 1. Jag skylde p&aring; att jag var upptagen n&auml;r jag blev inbjuden '
    +'till en middag f&ouml;rra helgen.<br /> 2. Jag bjuder sj&auml;lv aldrig in andra eller f&ouml;resl&aring;r n&aring;gra gemensamma '
    +'aktiviteter.<br />Var tankarna relevanta eller grundl&ouml;sa? Mina negativa tankar var grundl&ouml;sa.</p><p>Exempel 3.<br />'
    +'Negativa tankar: Min chef intresserar sig aldrig f&ouml;r mina id&eacute;er p&aring; jobbet.<br />'
    +'Bevis som talar f&ouml;r att att min chef inte &auml;r intresserad av mina id&eacute;er.&nbsp;<br />Min chef har aldrig bett om mina '
    +'synpunkter.<br />Varje g&aring;ng jag har kommit med en id&eacute; s&auml;ger min chef att vi f&aring;r t&auml;nka p&aring; saken. '
    +'Efter det n&auml;mns aldrig det jag f&ouml;reslagit igen.<br /> Bevis som talar emot att min chef inte &auml;r intresserad av mina '
    +'id&eacute;er. Jag kan inte hitta n&aring;gra.&nbsp;<br /> Var tanken relevant eller grundl&ouml;s? Min negativa tanke var relevant.</p>'
].join("")
            },{
                xtype: "button",
                iconCls: "",
                html: 'Bevis för och emot',
                style: {
                    'margin-bottom': '10px'
                },
                iconMask: true,
                handler: this.bevis,
                scope: this
            },{
                xtype: "button",
                iconCls: "",
                html: 'Relevant eller grundlös tanke',
                style: {
                    'margin-bottom': '10px'
                },
                iconMask: true,
                handler: this.relevant,
                scope: this
            }
            ]
                        
        };

        this.add([topToolbar, bottomToolbar, component]);
    },
    bevis: function() {
        this.fireEvent('gotoBevis', this);
        evt.stopPropagation();
    },
    relevant: function() {
        this.fireEvent('gotoRelevant', this);
        evt.stopPropagation();
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
