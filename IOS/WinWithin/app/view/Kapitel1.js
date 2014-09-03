Ext.define('WinWithin.view.Kapitel1', {
    extend: 'Ext.Container',
    alias: 'widget.kapitel1',
    initialize: function() {
        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Kapitel 1',
            style: {
                'background': '#7baf9a'
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
                'background': '#7baf9a'
            },
            items: [
            {
                xtype: 'button',
                style: {
                    'background': 'none'
                },
                handler: this.play,
                scope: this,
                html: '<img name="kap1Play" src="resources/images/play.png" style="width:48px;" />',
                iconMask: true
            }
            ]
        };

        var button = {
            xtype: "button",
            iconCls: "",
            html: 'Negativa tankar och känslor',
            iconMask: true,
            handler: this.negTank,
            scope: this
        };

        var component = {
            xtype: 'panel',
            padding: 10,
            style: {
                'background': '#FFF'
            },
            items: [
            {
                xtype: 'component',
                padding: 0,
                style: {
                    'font-weight': 'bold',
                    'background': '#FFF'
                },
                html: '<h1>Negativa tankar ger obehagliga k&auml;nslop&aring;slag<h1>'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                html: [
                    '<p>Vi startar med att titta n&auml;rmare p&aring; vad som h&auml;nder med dig n&auml;r du t&auml;nker pessimistiska och negativa tankar.<br />Vi g&aring;r igenom ett exempel: T&auml;nk dig att du &auml;r ute p&aring; promenad och st&ouml;ter ihop med en gammal arbetskamrat.<br /> Arbetskamraten s&auml;ger: N&auml;sta l&ouml;rdag ska jag ha en fest och det vore j&auml;tteroligt om du vill komma?<br /> Du svarar: S&aring; trevligt, vilka andra &auml;r det som kommer?<br /> Arbetskamraten s&auml;ger: Du k&auml;nner ingen av dem, de &auml;r gamla v&auml;nner till mig.<br /> Nu b&ouml;rjar du att t&auml;nka. Din f&ouml;rsta tanke l&aring;ter s&aring; h&auml;r: usch vad jobbigt det kan bli om jag inte k&auml;nner n&aring;gon.<br /> Du f&aring;r en ny tanke: T&auml;nk om jag inte hittar n&aring;gon att prata med.<br /> &Auml;nnu en ny tanke: Alla andra kanske pratar med varandra och jag kommer att st&aring; d&auml;r ensam som ett f&aring;n.<br /> Ny tanke: De andra kommer att undra vad jag &auml;r f&ouml;r en looser som bara st&aring;r i ett h&ouml;rn och glor.<br /> Ny tanke: Var ska jag ta v&auml;gen d&aring;? Jag kan ju inte bara sticka d&auml;rifr&aring;n.<br /> Du s&auml;ger: &Aring;h, jag hade g&auml;rna kommit men tyv&auml;rr har jag redan bokat in annat.</p> <p>N&auml;r du t&auml;nker f&aring;r du k&auml;nslor i kroppen som motsvarar tankarnas inneh&aring;ll. T&auml;nker du i negativa banor kommer du att k&auml;nna dig d&auml;refter. K&auml;nslor som h&ouml;r ihop med negativt t&auml;nkande &auml;r till exempel att bli tr&ouml;tt, k&auml;nna sig tung, ledsen, l&aring;g, orolig eller r&auml;dd. &Auml;r k&auml;nslorna riktigt starka kan man k&auml;nna &aring;ngest. Vi g&aring;r tillbaka till exemplet och l&auml;gger till k&auml;nslop&aring;slag som speglar tankarnas inneh&aring;ll.</p> <p>Arbetskamraten s&auml;ger: N&auml;sta l&ouml;rdag ska jag ha en fest och det vore j&auml;tteroligt om du vill komma?<br /> Du svarar: S&aring; trevligt, vilka andra &auml;r det som kommer?Arbetskamraten s&auml;ger: Du k&auml;nner ingen av dem, de &auml;r gamla v&auml;nner till mig.<br /> Din tanke: Usch vad jobbigt det kan bli om jag inte k&auml;nner n&aring;gon.<br /> Av den tanken f&aring;r du obehagliga k&auml;nslor i kroppen: Det kan vara en klump i magen, kanske ett tryck &ouml;ver br&ouml;stet. Du blir stressad.<br /> Du f&aring;r en ny tanke: T&auml;nk om jag inte hittar n&aring;gon att prata med.<br /> Dina k&auml;nslop&aring;slag blir starkare och nya kan tillkomma: Klump i magen, tryck &ouml;ver br&ouml;stet och hj&auml;rtklappning.<br /> &Auml;nnu en ny tanke: Alla andra kanske pratar med varandra och jag kommer att st&aring; d&auml;r ensam som ett f&aring;n.<br /> Dina k&auml;nslor: Klump i magen, tryck &ouml;ver br&ouml;stet och hj&auml;rtklappning.<br /> N&auml;sta tanke: De andra kommer att undra vad jag &auml;r f&ouml;r en looser som bara st&aring;r i en h&ouml;rn och glor.<br /> Dina k&auml;nslor: Klump i magen, tryck &ouml;ver br&ouml;stet och hj&auml;rtklappning.<br /> N&auml;sta tanke: Var ska jag ta v&auml;gen d&aring;? Jag kan ju inte bara sticka d&auml;rifr&aring;n!<br /> Dina k&auml;nslor: Klump i magen, tryck &ouml;ver br&ouml;stet och hj&auml;rtklappning.</p> <p>Det som h&auml;nder i kroppen n&auml;r du t&auml;nker alla de h&auml;r oroande negativa tankarna &auml;r att ditt biologiska larmsystem g&aring;r ig&aring;ng.<br /> Hj&auml;rnan st&aring;r i direkt f&ouml;rbindelse med autonoma nervsystemet som best&aring;r av tv&aring; delar. Dels det parasympatiska nervsystemet som &auml;r aktiverat n&auml;r du &auml;r i lugna situationer eller i vila. Dels det sympatiska nervsystemet som &auml;r aktivt n&auml;r du beh&ouml;ver f&ouml;rsvara dig eller fly. Du kanske har h&ouml;rt talas om kamp- och flyktsystemet? S&aring; kallas ofta det sympatiska nervsystemet i dagligt tal och d&auml;rf&ouml;r kommer jag ocks&aring; att g&ouml;ra det forts&auml;ttningsvis.</p> <p>I exemplet med festen beh&ouml;ver du inte f&ouml;rsvara dig eller fly, du &auml;r ju inte utsatt f&ouml;r verklig fara, du har blivit bjuden till en fest. Om inneh&aring;llet i dina tankar &auml;r skr&auml;mmande signalerar hj&auml;rnan. Larmet g&aring;r och kamp och flyktsystemet drar i g&aring;ng.&nbsp;</p> <p>Det r&auml;cker med att hj&auml;rnan tolkar att du &auml;r utsatt f&ouml;r fara f&ouml;r att det ska ske. Hj&auml;rnan &auml;r inst&auml;lld p&aring; att dra snabba och f&ouml;rhastade slutsatser. I exemplet snurrar dina tankar kring skr&auml;mmande scenarion och utifr&aring;n dessa g&aring;r systemet ig&aring;ng. Nu &auml;r ju inte faran p&aring; riktigt utan du t&auml;nker p&aring; n&aring;got som du upplever som hotfullt. Du kan ju inte innan festen har varit veta hur trevligt eller otrevligt du f&aring;r om du g&aring;r dit. De tankar du har &auml;r allts&aring; inte baserade p&aring; fakta men det spelar ingen roll f&ouml;r det kan nervsystemet inte g&ouml;ra n&aring;gon skillnad p&aring;, allts&aring; vilka tankar som &auml;r sanna eller inte.</p> <p>&Auml;ven om de negativa tankarna inte hade n&aring;got med din verklighet att g&ouml;ra s&aring; var de kroppsliga p&aring;slag du fick n&auml;r kamp och flyktsystemet slog p&aring; verkliga. De var m&auml;tbara. Till exempel &ouml;kade blodfl&ouml;det till dina muskler f&ouml;r att du skulle f&aring; kraft att f&ouml;rsvara dig. Stresshormoner str&ouml;mmade ut i ditt blod f&ouml;r att &ouml;ka din kropps prestationsf&ouml;rm&aring;ga. Blodsockret steg f&ouml;r att ge dig mer energi. Luftv&auml;garna vidgades f&ouml;r att f&ouml;rse dina lungor med mer syre. Eftersom du kunde k&auml;nna de fysiologiska f&ouml;r&auml;ndringarna i kroppen p&aring; riktigt s&aring; tolkade du sanningshalten i de negativa tankarna som h&ouml;g och trov&auml;rdig. Att hotet i tankarna var p&aring; riktigt, att du skulle bli ensam och utpekad p&aring; festen. De negativa tankarna blev s&aring; att s&auml;ga bekr&auml;ftade av k&auml;nslop&aring;slagen. Det blev en v&auml;xelverkan mellan de negativa tankarna och de fysiologiska stressp&aring;slagen. Det ledde till att du tillskrev dina tankars inneh&aring;ll h&ouml;g trov&auml;rdighet.&nbsp;</p> <p>Eftersom trov&auml;rdigheten var h&ouml;g f&ouml;r att det skulle bli obehagligt f&ouml;r dig att vara p&aring; festen s&aring; tackade du nej. Nu kunde du sl&auml;ppa de skr&auml;mmande tankarna och de obehagliga k&auml;nslorna b&ouml;rjade tona ut. Du blev lugn igen och k&auml;nde att du gjort r&auml;tt som tackat nej till inbjudan. I sj&auml;lva verket kanske du just beg&aring;tt ett misstag, baserat p&aring; en stressreaktion som sattes ig&aring;ng av att du t&auml;nkte negativa tankar. Tankar som du tog ur luften. Du kanske skulle ha haft riktigt kul p&aring; festen. Det f&aring;r du aldrig veta eftersom du tackade nej till inbjudan.&nbsp;</p> <p>I exemplet finns en motpart, arbetskamraten. De negativa tankarna i exemplet uppkommer som en reaktion p&aring; det arbetskamraten s&auml;ger. F&ouml;r att hamna i negativt k&auml;nslot&auml;nkande beh&ouml;vs inte alltid en motpart eller n&aring;got yttre stimuli, allts&aring; n&aring;got som sker utanf&ouml;r en sj&auml;lv. Negativt t&auml;nkande kan ocks&aring; uppkomma och p&aring;g&aring; i ensamhet utan att det finns en p&aring;taglig anledning eller motpart. D&aring; kan det vara t.ex. en minnesbild, en f&ouml;rnimmelse, ett sinnestillst&aring;nd eller en tanke som startar en inre negativ och kritisk monolog.&nbsp;</p> <p>Negativt t&auml;nkande f&ouml;ljer ett m&ouml;nster som upprepar sig g&aring;ng p&aring; g&aring;ng. De negativa tankar kretsar kring egna tillkortakommanden, katastrofer och att saker och ting inte ska fungera. Att man ska misslyckas, bli utpekad, avsl&ouml;jad, ensam, sjuk, hamna i pinsamma situationer, bli utblottad ekonomiskt eller f&aring; s&auml;mre ekonomi. Att n&auml;ra och k&auml;ra ska r&aring;ka ut f&ouml;r obehagliga h&auml;ndelser, bli sjuka eller d&ouml;.</p> <p>Att generalisera h&ouml;r till n&auml;r tankebanorna &auml;r negativa. F&ouml;renkla och g&ouml;ra onyanserade bed&ouml;mningar av s&aring;dant som har h&auml;nt eller kommer att h&auml;nda. Dra f&ouml;rhastade slutsatser p&aring; en pytteliten m&auml;ngd information. Med ord som alltid och aldrig, ingen och alla sl&aring;r man fast hur det &auml;r eller kommer att bli. S&aring;dant som ligger utanf&ouml;r den egna kontrollen kan man g&ouml;ra sig personligt ansvarig f&ouml;r. H&auml;r f&ouml;ljer n&aring;gra exempel p&aring; hur negativa tankar kan l&aring;ta. Exemplen &auml;r uppdelade under olika kategorier och f&auml;rger. V&auml;rdeorden &auml;r markerade med fet stil och &auml;r dessutom understrukna n&auml;r de h&ouml;r till n&auml;mnda kategori. De f&auml;rglagda &auml;r, onyanserad bed&ouml;mning (av n&aring;got som har h&auml;nt eller kommer att h&auml;nda) och g&ouml;ra sig personligt ansvarig (f&ouml;r s&aring;dant som ligger utanf&ouml;r den egna kontrollen). Jag vill r&aring;da dig, om du enbart lyssnar just nu, att f&ouml;lja med i texten n&auml;r vi g&aring;r igenom exemplen. D&aring; ser du tydligt hur v&auml;rdeord bygger upp negativt t&auml;nkande och sl&aring;r fast tanken som en sanning. Mina exempel beh&ouml;ver inte st&auml;mma in exakt p&aring; just dig.</p> <p><ins><strong>Alltid/j&auml;mt/jag &auml;r</strong></ins><br /> - Det finns bara spridda platser kvar. Jag f&aring;r <strong>alltid</strong><strong> </strong>s&aring; d&aring;liga biljetter.<br /> - Jag kommer f&ouml;rst&aring;s <strong>inte</strong> att ha n&aring;got intressant att s&auml;ga, det har jag <strong>aldrig</strong>. <strong>Alla</strong> andra vet och kan <ins><strong>alltid</strong></ins> s&aring; mycket.&nbsp;<br /> - Jag kommer <ins><strong>alltid</strong></ins> vara ensam. Det &auml;r <strong>ingen </strong>id&eacute; att jag f&ouml;rs&ouml;ker tr&auml;ffa n&aring;gon.<br /> - Jag pratar <ins><strong>j&auml;mt</strong></ins> f&ouml;r mycket och bara om ointressanta saker. Jag <strong>borde</strong> h&aring;lla mun.<br /> - S&aring; pinsamt att jag tog fel p&aring; m&ouml;tesdag. Jag ska <ins><strong>alltid</strong></ins> klanta till de</p> <p><ins><strong>Jag</strong> <strong>&auml;r</strong></ins><strong> </strong>en idiot som trodde att jag skulle klara tentan. <ins><strong>Jag</strong> <strong>&auml;r</strong></ins> misslyckad.</p> <p><strong>Aldrig</strong><br /> - Det blir s&auml;ker en tr&aring;kig resa. Mig h&auml;nder det <strong>aldrig</strong> n&aring;got kul.<br /> - Varf&ouml;r &auml;r det <strong>aldrig</strong> n&aring;gon annan som anm&auml;ler sig som klassf&ouml;r&auml;lder. Det &auml;r <strong>alltid</strong> jag som <strong>m&aring;ste</strong> g&ouml;ra det.<br /> - Jag kommer <strong>aldrig</strong> att lyckas.<br /> - Som vanligt har jag <strong>inget</strong> sp&auml;nnande att tillf&ouml;ra. Det har jag <strong>aldrig</strong>.<br /> - Det &auml;r <strong>aldrig</strong> n&aring;gon som tar h&auml;nsyn till det jag s&auml;ger. <strong>Alla </strong>verkar tycka att <strong>jag</strong><strong> </strong><strong>&auml;r </strong>ointressant.</p> <p><strong>M&aring;ste/ska</strong><br /> <strong>Varf&ouml;r </strong><strong>m&aring;ste</strong><strong> </strong>jag <strong>alltid </strong>s&auml;ga s&aring; dumma saker. Jag <strong>ska</strong><strong> j&auml;mt </strong>pladdra s&aring; mycket.<br /> <strong>Varf&ouml;r </strong><strong>ska</strong><strong> </strong>jag <strong>alltid </strong>bli den som f&aring;r g&ouml;ra de tr&aring;kigaste uppgifterna.<br /> Det <strong>&auml;r</strong> <strong>alltid</strong> jag som <strong>m&aring;ste</strong> st&auml;lla upp.<br /> Jag <strong>ska</strong> <strong>alltid </strong>klanta till det.<br /> <strong>M&aring;ste</strong> jag <strong>j&auml;mt </strong>vara s&aring; f&ouml;rbannat dum.</p> <p><strong>Ingen</strong>/<strong>inget/ingenting</strong><br /> -<strong>Ingen</strong> <strong>&auml;r</strong> v&auml;l intresserad av vad jag tycker. Det &auml;r <strong>aldrig</strong> n&aring;gon som fr&aring;gar mig.<br /> - Det &auml;r &auml;nd&aring; <strong>ingen</strong> som kommer vilja vara i mitt lag.<br /> - Jag har <strong>ingen</strong> personlighet. <strong>Jag</strong> <strong>&auml;r</strong> en gr&aring; mus.<br /> - Det tj&auml;nar <strong>ingenting</strong> till att jag anstr&auml;nger mig<br /> - Jag kommer inte att klara det h&auml;r. Jag fixar ju <strong>ingenting</strong>.</p> <p><strong>Alla</strong><br /> - <strong>Alla</strong> kommer tycka att min presentation &auml;r usel.<br /> - <strong>Alla</strong> andra vet vad de ska s&auml;ga.<br /> - <strong>Alla</strong> andra har s&aring; m&aring;nga v&auml;nner.&nbsp;<br /> <strong>Alla</strong> lyckas utom jag.<br /> <strong>Alla</strong> tycker att <strong>j</strong><strong>ag</strong> <strong>&auml;r</strong> tr&aring;kig, <strong>ingen</strong> vill umg&aring;s med mig.</p> <p><strong>T&auml;nk</strong> <strong>om</strong><br /> - <strong>T&auml;nk</strong> <strong>om</strong> jag inte hittar till m&ouml;tet och kommer f&ouml;rsent!<br /> - <strong>T&auml;nk</strong> <strong>om</strong> t&aring;get &auml;r inst&auml;llt och jag missar planet.<br /> - <strong>T&auml;nk</strong> <strong>om</strong> jag har f&aring;tt cancer. Jag har ju haft ont i magen i flera dagar nu.<br /> - <strong>T&auml;nk</strong> <strong>om</strong> jag rodnar s&aring; att <strong>alla</strong> ser.<br /> - <strong>T&auml;nk</strong> <strong>om</strong> min son drunknar n&auml;r de &auml;r p&aring; utflykten.&nbsp;<br /> - <strong>T&auml;nk</strong> <strong>om</strong> aktiekursen sjunker. D&aring; blir jag utblottad.&nbsp;<br /> - <strong>T&auml;nk om</strong> jag blir uppsagd.&nbsp;</p> <p><strong>Onyanserad</strong> <strong>bed&ouml;mning</strong> (av n&aring;got som har h&auml;nt eller kommer att h&auml;nda)<br /> - <strong>Varf&ouml;r</strong> vill chefen prata med just mig? Vad har jag gjort f&ouml;r fel?<br /> - Nu &auml;r min man en kvart f&ouml;rsenad, det <strong>m&aring;ste</strong> ha h&auml;nt en olycka?<br /> - Hon sa inget om att jag hade en ny kostym p&aring; mig. Hon tyckte att den var ful.<br /> - S&aring; klart att det <strong>ska</strong> vara stopp i trafiken n&auml;r jag har br&aring;ttom. Jag <strong>borde</strong> ha fattat att jag skulle ha startat tidigare.</p> <p>G&ouml;ra sig personligt ansvarig/jag borde (f&ouml;r s&aring;dant som ligger utanf&ouml;r den egna kontrollen)</p> <p>- Det var avslagen st&auml;mning p&aring; firmafesten ig&aring;r. <strong>Jag</strong> <strong>borde</strong> inte ha f&ouml;reslagit att vi skulle ha 80-tals tema.<br /> - S&aring; ot&auml;ckt att de k&ouml;rde av v&auml;gen. Om jag hade ringt dem och varnat f&ouml;r att det var halt ute s&aring; hade det inte beh&ouml;vt h&auml;nda.<br /> - Jag bj&ouml;d in 70 personer till f&ouml;rel&auml;sningen men bara 25 kom. <strong>Jag borde </strong>ha fattat att det skulle bli s&aring; och inte bokat en s&aring; stor lokal.</p> <p><strong>Varf&ouml;r</strong><br /> - <strong>Varf&ouml;r</strong> skulle de vilja anst&auml;lla mig?<br /> - <strong>Varf&ouml;r</strong> ens f&ouml;rs&ouml;ka. Det kommer &auml;nd&aring; <strong>aldrig</strong> att g&aring;.<br /> - <strong>Varf&ouml;r</strong> blir det jag g&ouml;r <strong>alltid</strong> s&aring; d&aring;ligt?<br /> - <strong>Varf&ouml;r</strong> har just jag s&aring; sv&aring;rt f&ouml;r att fatta? Det &auml;r <strong>alltid</strong> s&aring;.<br /> - Det &auml;r <strong>ingen</strong> id&eacute; att jag f&ouml;ljer med p&aring; resan. <strong>Varf&ouml;r</strong> skulle de vilja ha med mig?</p>'
        + '<p>Nu vet du en hel del om negativt t&auml;nkande och det &auml;r dags f&ouml;r din f&ouml;rsta utmaning p&aring; egen hand.</p> <p>Du ska g&ouml;ra s&aring; h&auml;r: F&ouml;rs&ouml;k under ett par dagar att k&auml;nna efter och observera n&auml;r du f&aring;r stressande kroppsliga k&auml;nslop&aring;slag. Det beh&ouml;ver inte vara kraftiga k&auml;nslor utan lite grann r&auml;cker. N&auml;r du m&auml;rker att du k&auml;nner dig stressad/r&auml;dd/otrygg/orolig eller f&aring;r andra obehagliga k&auml;nslop&aring;slag s&aring; ska du fr&aring;ga dig sj&auml;lv, vad t&auml;nker jag p&aring; just nu? D&auml;refter registrerar du vad det &auml;r f&ouml;r tankar du har just d&aring;. Du kommer att se ett samband mellan dina tankar och dina obehagliga k&auml;nslor. Anv&auml;nd utmaning: negativa tankar och k&auml;nslor, f&ouml;r att skriva ner dina observationer. G&ouml;r det h&auml;r upprepade g&aring;nger s&aring; att du blir bra p&aring; att f&aring;nga dina negativa tankar och de kroppsliga reaktioner som h&auml;nger ihop med tankarna. Jag rekommenderar dig att inte g&aring; vidare i appen p&aring; ett par dagar medan du &auml;gna dig &aring;t utmaningen. Om du beh&ouml;ver s&aring; g&aring; till baka och l&auml;s kapitel 1 en g&aring;ng till.</p> <p>Sammanfattning:<br /> <strong>Negativa tankar</strong> leder till att<br /> <strong>kamp- och flyktsystemet </strong>drar ig&aring;ng.<br /> Negativa tankar &auml;r uppbyggda kring <strong>v&auml;rdeord.</strong></p>'].join("")
            },{
                xtype: "button",
                iconCls: "",
                html: 'Negativa tankar och känslor',
                iconMask: true,
                handler: this.negTank,
                scope: this
            }
            ]
                        
        };

        this.add([topToolbar, bottomToolbar, component]);
    },

    negTank: function() {
        this.fireEvent('gotoNegTank', this);
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
