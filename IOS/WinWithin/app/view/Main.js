Ext.define('WinWithin.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',
    initialize: function() {
        this.callParent(arguments);
        
        var component = {
            xtype: 'panel',
            padding: 10,
            style: {
                    'background': '#905f79'
            },
            items: [
            {
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#905f79',
                    'font-weight': 'bold',
                    'color': '#FFF',
                    'text-align': 'center'
                },
                html: '<img src="resources/images/logo.png" style="width:50%; margin:auto; padding-top:20px; padding-bottom:20px;" />'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#905f79',
                    'color': '#FFF'
                },
                html: [
                    '<p>Anv&auml;ndarvillkor och avtal g&auml;llande denna mobilapplikation.</p>'
    +'<p>1. Allm&auml;nna villkor och best&auml;mmelser</p><p>Applikationen riktar sig mot myndiga fysiska personer. '
    +'Syftet med applikationen &auml;r att informera om fysiska och psykologiska processer som driver och vidmakth&aring;ller '
    +'k&auml;nslan oro, samt, visa p&aring; ett f&ouml;rh&aring;llningss&auml;tt gentemot tankar som k&auml;nslan gett upphov till.<br />'
    +'Applikationen skall inte anv&auml;ndas som medel f&ouml;r psykologisk behandling eller annan medicinsk behandling. Win Within '
    +'r&aring;der denne som &auml;r i behov av psykologiskt st&ouml;d eller behandling, att ist&auml;llet v&auml;nda sig till en l&auml;kare '
    +'eller annan f&ouml;r &auml;ndam&aring;let kompetent yrkesperson f&ouml;r hj&auml;lp. Det &auml;r kundens ansvar att se till att '
    +'anv&auml;nda applikationen inom ramen f&ouml;r dess syfte.</p><p>Genom att installera eller anv&auml;nda Win Withins app ing&aring;r '
    +'du ett juridiskt bindande avtal med Win Within g&auml;llande anv&auml;ndningen av appen. L&auml;s noga igenom anv&auml;ndarvillkoren '
    +'innan du godtar dem och installerar appen.</p><p>Allt inneh&aring;ll i denna applikation &auml;gs och kontrolleras av Win Within. '
    +'Du f&aring;r ladda ner applikationen och anv&auml;nda inneh&aring;llet endast f&ouml;r personligt bruk. Det &auml;r inte '
    +'till&aring;tet att kopiera, g&ouml;ra &auml;ndringar eller reproducera inneh&aring;llet i applikationen. Applikationen f&aring;r '
    +'inte anv&auml;ndas av yrkesperson som hj&auml;lpmedel eller redskap i samband med behandling av patient/klient, eller p&aring; annat '
    +'s&auml;tt anv&auml;ndas inom professionell/kommersiell verksamhet.</p><p>2. Win Withins &auml;gander&auml;tt</p>'
    +'<p>Alla varum&auml;rken, upphovsr&auml;tter (copyright) och andra immaterialr&auml;ttigheter av n&aring;got slag r&ouml;rande appen '
    +'Win Within, &auml;r Win Withins egendom. Kunden &aring;tar sig att respektera Win Withins &auml;gander&auml;tt och endast '
    +'anv&auml;nda denna immateriella egendom enligt anv&auml;ndningsvillkoren. F&ouml;r eventuell annan anv&auml;ndning kr&auml;vs ett '
    +'f&ouml;reg&aring;ende skriftligt medgivande fr&aring;n Win Within. All upphovsr&auml;tt (copyright) samt alla andra '
    +'immaterialr&auml;ttigheter som kan uppst&aring; vid anv&auml;ndningen av applikationen Win Within f&ouml;rblir Win Withins egendom.</p>'
    +'<p>3. Ansvarsbegr&auml;nsning&nbsp;</p><p>S&aring; l&aring;ngt inte annat f&ouml;ljer av tvingande lag ansvarar Win Within inte '
    +'f&ouml;r personskador, direkta eller indirekta skador eller f&ouml;ljdskador som inte beror p&aring; Win Within eller s&aring;dan '
    +'omst&auml;ndighet &ouml;ver vilken Win Within r&aring;der.</p><p>D&aring; applikationen inte &auml;r f&ouml;rsedd med '
    +'inloggningsuppgifter &aring;ligger det anv&auml;ndaren sj&auml;lv att vidta s&aring;dana &aring;tg&auml;rder som kr&auml;vs f&ouml;r '
    +'att bevara personlig information som denne tillf&ouml;rt applikationen, genom att till exempel l&ouml;senordsskydda sin mobila '
    +'enhet/smartphone mot obeh&ouml;riga. &nbsp;</p><p>All den information anv&auml;ndaren skriver in i applikationen inklusive personlig '
    +'identifierbar information som kunden tillf&ouml;r Win Within ansvarar denne sj&auml;lv f&ouml;r.<br />Win Within ansvarar inte '
    +'f&ouml;r skador som uppkommer genom att kunden hanterar uppgifterna p&aring; ett ovarsamt s&auml;tt.&nbsp;</p> <p>Win Within ansvarar '
    +'inte f&ouml;r fel i applikationstj&auml;nsten som orsakas av t. ex. driftsavbrott och bristande tillg&auml;nglighet samt andra '
    +'h&auml;ndelser som beror p&aring; f&ouml;rh&aring;llanden som ligger utanf&ouml;r Win Withins kontroll eller force majeure.</p>'
    +'<p>Win Within ansvarar inte f&ouml;r anv&auml;ndarens egna mobila enhet/smartphones m&ouml;jlighet att ta emot och korrekt &aring;terge '
    +'data fr&aring;n applikationen. Win Within ansvarar ej heller f&ouml;r det fall installation av denna applikation p&aring;verkar andra '
    +'applikationer i anv&auml;ndarens egna mobila enhet/smartphones.</p><p>Win Within ansvarar inte f&ouml;r den ekonomiska transaktion '
    +'kunden g&ouml;r i samband med k&ouml;p av applikationen fr&aring;n n&aring;gon onlinestore (internetbutik). Nedladdningen av '
    +'applikationen och anv&auml;ndandet av denna kan &auml;ven vara villkorade av annan part &auml;n Win Within, t.ex. fr&aring;n den '
    +'onlinestore (internetbutik) den &auml;r nedladdad fr&aring;n.&nbsp;</p><p>Win Within tar inte ansvar f&ouml;r anv&auml;ndande av '
    +'applikationen samt b&auml;r inte n&aring;got ansvar i det fall kunden agerar i strid mot dessa allm&auml;nna villkor.</p><p>Win Within '
    +'&aring;tar sig inga skyldigheter att tillhandah&aring;lla n&aring;gon form av support eller underh&aring;ll av applikationen.&nbsp;</p>'
    +'<p>4. F&ouml;r&auml;ndring av tj&auml;nst och avtalets f&ouml;rtida upph&ouml;rande</p><p>Win Within kan ensidigt &auml;ndra dessa '
    +'villkor genom att du f&aring;r ett tydligt meddelande d&auml;rom via applikationen. F&ouml;r det fall du godk&auml;nner de nya villkoren'
    +'alternativt forts&auml;tter att anv&auml;nda applikationen efter det att du tagit del av s&aring;dana &auml;ndrade villkor anses du'
    +'ha godk&auml;nt detta. I annat fall skall du avinstallera applikationen fr&aring;n samtliga enheter.</p><p>Win Within kommer att '
    +'vidta rimliga &aring;tg&auml;rder f&ouml;r att h&aring;lla appen i anv&auml;ndbart skick. Win Within har r&auml;tt att modifiera '
    +'tj&auml;nsten. &Auml;ndringar som inte &auml;r marginella justeringar, kommer att meddelas via applikationen. Win Within '
    +'f&ouml;rbeh&aring;ller sig r&auml;tten att n&auml;r som helst utan ansvar eller ers&auml;ttningsskyldighet tillf&auml;lligt eller '
    +'permanent begr&auml;nsa &aring;tkomsten eller st&auml;nga ner applikationen i sin helhet.</p><p>Villkoren g&auml;ller &auml;ven '
    +'f&ouml;r samtliga kommande uppdateringar av applikationen som Win Within tillhandah&aring;ller och som ers&auml;tter och/eller '
    +'utg&ouml;r till&auml;gg till applikationen.</p><p>N&auml;r du avinstallerat applikationen fr&aring;n samtliga enheter upph&ouml;r '
    +'villkoren att g&auml;lla.</p><p>5. Tvist&nbsp;</p><p>Eventuell Tvist i anledning av detta avtal skall slutligt avg&ouml;ras genom '
    +'svensk domstol med svensk lag som utg&aring;ngspunkt.</p><p>&nbsp;</p><p>6. Kontaktuppgifter</p><p>Win Within</p><p>Box 38091</p>'
    +'<p>10064 Stockholm</p><p>&nbsp;</p><p>Avtalet &auml;r uppr&auml;ttat den 1 juli 2014.</p>'].join("")
            },{
                xtype: "button",
                id: "godkannBtn",
                html: 'Jag godkänner avtalet',
                style: {
                    'border': '1px solid #6fbb7d',
                    'background': 'transparent'
                },
                iconMask: true,
                handler: this.godkann,
                scope: this
            }
            ]
                        
        };

        this.add([component]);
        
    },
    godkann: function() {
        this.fireEvent('avtal', this);
    },
    config: {
        fullscreen: true,
        scrollable: true
    }

});