Ext.define('WinWithin.view.Kapitel3', {
    extend: 'Ext.Container',
    alias: 'widget.kapitel3',
    initialize: function() {
        this.callParent(arguments);

        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Kapitel 3',
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
                html: '<img name="kap3Play" src="resources/images/play.png" style="width:48px;" />',
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
                html: '<h1>Probleml&ouml;sa eller sl&auml;ppa tanken</h1>'
            },{
                xtype: 'component',
                padding: 0,
                style: {
                    'background': '#FFF'
                },
                html: [
                    '<p>Hur gick det d&auml;r? Klarade du att se om dina negativa tankar var relevanta eller grundl&ouml;sa?&nbsp;<br />'
    +'Det momentet &auml;r inte s&aring; l&auml;tt. Om du hade sv&aring;righeter med att bed&ouml;ma sanningshalten i tanken s&aring; var '
    +'det nog f&ouml;r att du lyssnade f&ouml;r mycket till dina k&auml;nslop&aring;slag. Du l&auml;t nog k&auml;nslorna g&ouml;ra '
    +'bed&ouml;mningen &aring;t dig. G&aring; tillbaka till uppgiften ett tag till. H&aring;ll dina k&auml;nslor utanf&ouml;r och bed&ouml;m '
    +'det du t&auml;nkt enbart med hj&auml;lp av din analytiska f&ouml;rm&aring;ga.&nbsp;</p>'
    +'<p>Du har nu l&auml;rt dig tv&aring; av de tre stegen i metoden.<br />'
    +'Att se sambandet mellan dina negativa tankar och dina obehagliga k&auml;nslop&aring;slag. Att se hur en negativ tanke &auml;r '
    +'uppbyggd och att f&aring;nga dina egna negativa tankar.<br />'
    +'Att skilja mellan relevanta och grundl&ouml;sa negativa tankar.</p>'
    +'<p>Nu n&auml;r du har kommit s&aring; l&aring;ngt att du kan avg&ouml;ra om de negativa tankarna &auml;r relevanta eller '
    +'grundl&ouml;sa ska vi g&aring; igenom hur du ska f&ouml;rh&aring;lla dig till dem. S&aring; h&auml;r ska du handskas med dem.&nbsp;</p>'
    +'<p>Grundl&ouml;sa tankar:<br />'
    +'T&auml;nk efter, vad g&ouml;r man med information som visat sig vara baserad p&aring; grundl&ouml;sa antaganden? Just det, man '
    +'f&ouml;rkastar och bortser ifr&aring;n den. N&auml;r man vet att informationen &auml;r grundl&ouml;s s&aring; har den inte l&auml;ngre '
    +'n&aring;got v&auml;rde. Du ska allts&aring; sluta lyssna till de grundl&ouml;sa tankarna och sl&auml;ppa dem. Har du f&aring;tt '
    +'ig&aring;ng kamp och flyktsystemet med tankens hj&auml;lp tar det lite tid innan k&auml;nslorna klingar av och sl&auml;pper sitt '
    +'grepp, &auml;ven om du avsl&ouml;jat tankarna som grundl&ouml;sa. S&aring; l&auml;nge de obehagliga k&auml;nslorna finns kvar '
    +'s&ouml;ker sig tanken l&auml;tt tillbaka till de negativa tankebanorna. St&aring; p&aring; dig och p&aring;minn dig om att tanken '
    +'&auml;r grundl&ouml;s och att de obehagliga k&auml;nslorna d&auml;rf&ouml;r inte har n&aring;got ber&auml;ttigande.&nbsp;<br />'
    +'Ju mer du &ouml;var desto b&auml;ttre blir du p&aring; att avsl&ouml;ja och sl&auml;ppa dina grundl&ouml;sa negativa tankar, trots att '
    +'du k&auml;nner obehagliga k&auml;nslor. T&auml;nk p&aring; att en k&auml;nsla just bara &auml;r en k&auml;nsla.&nbsp;</p>'
    +'<p>Relevanta tankar:<br />'
    +'Vad g&ouml;r man n&auml;r man st&aring;r inf&ouml;r n&aring;got problematiskt? Jo, man probleml&ouml;ser. N&auml;r den negativa '
    +'tanken har b&auml;ring i tillvaron och &auml;r relevant s&aring; &auml;r det dags att probleml&ouml;sa. G&ouml;r man inte det kommer '
    +'oron och de negativa tankarna att f&aring; fritt spelrum. Man kommer &auml;gna sig &aring;t &auml;ltande f&ouml;r att p&aring; s&aring; '
    +'s&auml;tt f&ouml;rs&ouml;ka l&ouml;sa problemet. Men, &auml;ltande av negativa tankar har ingenting med probleml&ouml;sning att '
    +'g&ouml;ra. Att &auml;lta &auml;r att t&auml;nka runt i meningsl&ouml;sa cirklar. Att probleml&ouml;sa &auml;r att t&auml;nka '
    +'strukturerat och bygger p&aring; relevanta, valda alternativ. Du ska allts&aring; b&ouml;rja probleml&ouml;sa de negativa relevanta '
    +'tankarna.&nbsp;</p>'
    +'<p>Varf&ouml;r &auml;r det bara de relevanta negativa tankarna som ska probleml&ouml;sas och inte de grundl&ouml;sa? Om du ger dig '
    +'p&aring; att f&ouml;rs&ouml;ka probleml&ouml;sa de grundl&ouml;sa tankarna kommer du inte att lyckas f&ouml;r hur l&ouml;ser man ett '
    +'problem som inte finns? B&ouml;rjar du probleml&ouml;sa grundl&ouml;sa tankar kommer du inte bara att misslyckas du kommer ocks&aring; '
    +'att v&auml;nja dig vid att ta de grundl&ouml;sa tankarna p&aring; allvar. Du g&ouml;r dem verkliga. Du ger dem samma v&auml;rde som de '
    +'relevanta negativa tankarna.&nbsp;</p>'
    +'<p>N&auml;r du b&ouml;rjar probleml&ouml;sa dina relevanta negativa tankar &auml;ndrar du ditt beteende fr&aring;n att passivt &auml;lta '
    +'till att aktivt ta tag i problemen. Du flyttar ut problemen fr&aring;n tankev&auml;rden till att ta tag i dem p&aring; riktigt. N&auml;r '
    +'du aktivt tar tag i problemen beh&ouml;vs inte de negativa tankarna p&aring; samma s&auml;tt. De blir &ouml;verfl&ouml;diga.</p>'
    +'<p>Du kanske undrar om det inte &auml;r b&auml;ttre att bara byta ut negativa tankar mot positiva? Vi tittar p&aring; ett exempel. '
    +'Du har en negativ tanke som l&aring;ter s&aring; h&auml;r: &rdquo;Jag kommer aldrig att f&aring; leda n&aring;got av de stora projekten '
    +'p&aring; jobbet. Alla andra utom jag f&aring;r det. Min chef litar inte p&aring; mig&rdquo;. S&aring; byter du ut den tanken mot att '
    +'t&auml;nka i positiva banor: &rdquo;Jag ska visa dem. Jag kommer att bli den mest framg&aring;ngsrika projektledaren det h&auml;r '
    +'f&ouml;retaget n&aring;gonsin haft. Min chef kommer att bli s&aring; f&ouml;rv&aring;nad&rdquo;.<br />'
    +'T&auml;nk efter, hur skulle det kunna vara b&auml;ttre att t&auml;nka p&aring; det viset? Visst, du kanske lyckas med att muntra upp dig '
    +'f&ouml;r stunden. Men p&aring; l&aring;ng sikt, n&auml;r du m&auml;rker att det ena projektet efter det andra inte erbjuds dig, vad '
    +'hj&auml;lper det d&aring; att t&auml;nka positivt? Ska du varje g&aring;ng ett nytt projekt g&aring;r din n&auml;sa f&ouml;rbi t&auml;nka '
    +'i positiva banor? Hj&auml;lper det upp situationen? Nej knappast. Att du i denna situation f&ouml;rs&ouml;ka peppa dig sj&auml;lv '
    +'l&ouml;ser inte sj&auml;lva problemet. Tillslut r&auml;cker inte de positiva tankarna till f&ouml;r att h&aring;lla hoppet och modet vid '
    +'liv. N&auml;r du inser att du &auml;r kvar p&aring; ruta ett och att ditt positiva t&auml;nkande inte ledde dig n&aring;gon vart i '
    +'verkligheten, d&aring; &ouml;kar risken att du ska bli nedst&auml;md och b&ouml;rja &auml;lta. Befinner du dig i en situation d&auml;r '
    +'du skulle &ouml;nska en f&ouml;r&auml;ndring. L&aring;t bli att dr&ouml;mma dig bort i enbart positiva tankeg&aring;ngar. Pr&ouml;va '
    +'att hitta en l&ouml;sning ist&auml;llet. Helt enkelt, b&ouml;rja att probleml&ouml;sa. B&ouml;rja t&auml;nka i realistiska banor. '
    +'Sj&auml;lvklart &auml;r det bra om du litar till din egen f&ouml;rm&aring;ga och kan k&auml;nna dig positivt inst&auml;lld. Om du kan '
    +'se fram&aring;t med tilltro. Men, byt inte ut en dysfunktionell negativ tanke till en lika dysfunktionell positiv tanke. Ta kommandot '
    +'och bli aktiv ist&auml;llet f&ouml;r passiv i f&ouml;rh&aring;llande till din negativa tanke. Att probleml&ouml;sa i det h&auml;r '
    +'exemplet kanske inte skulle leda fram till att du blev ansvarig f&ouml;r n&aring;got av de st&ouml;rre projekten. Med '
    +'probleml&ouml;sningens hj&auml;lp kanske du skulle f&ouml;rst&aring;tt anledningen till att du inte blev tillfr&aring;gad. Att den '
    +'kanske bottnade i din brist p&aring; kunnande och inte i att din chef inte litade p&aring; dig. Kanske hade du d&aring;, n&auml;r du '
    +'kommit underfund med detta, g&aring;tt och pratat med din chef. Fr&aring;gat vad du beh&ouml;vde g&ouml;ra f&ouml;r att bli aktuell '
    +'som projektledare. Eller kanske hade du valt att vidareutbilda dig f&ouml;r att komma dit du ville.&nbsp;<br />'
    +'Skillnaden mellan att t&auml;nka positivt och att probleml&ouml;sa &auml;r att det ena s&auml;ttet &auml;r passivt medan det andra '
    +'&auml;r aktivt. Det ena tar dig inte fram&aring;t men det g&ouml;r det andra.&nbsp;</p>'
    +'<p>Din 3:e utmaning &auml;r att &ouml;va p&aring; att sl&auml;ppa de grundl&ouml;sa negativa tankarna och att probleml&ouml;sa de '
    +'relevanta negativa tankarna.&nbsp;</p>'
    +'<p>Du kan anv&auml;nd dig av f&ouml;ljande visualisering n&auml;r du ska sl&auml;ppa en grundl&ouml;s tanke. T&auml;nk dig att du har '
    +'en liten p&aring;se med sm&aring; moln i. Se framf&ouml;r dig hur du tar ut ett moln ur p&aring;sen. P&aring; molnet placerar du din '
    +'grundl&ouml;sa negativa tanke. Sl&auml;pp sedan iv&auml;g molnet och f&ouml;lj det med blicken n&auml;r det seglar upp i luften och '
    +'f&ouml;rsvinner i horisonten. P&aring; detta s&auml;tt g&ouml;r du dig av med tanken. Kommer tanken tillbaka efter ett tag s&aring; '
    +'tar du fram ett nytt moln och upprepar proceduren.</p>'
    +'<p>Utmaning 3 anv&auml;nder du till probleml&ouml;sning, men komih&aring;g, probleml&ouml;s endast verkliga problem.</p>'
    +'<p>Sammanfattning:<br /> <strong>Negativa tankar</strong> leder till att<br /><strong>kamp- och flyktsystemet </strong>'
    +'drar ig&aring;ng.<br /> Negativa tankar &auml;r uppbyggda kring <strong>v&auml;rdeord.</strong><br />'
    +'<strong>Relevanta och</strong> <strong>grundl&ouml;sa</strong> tankar. B&aring;da kategorierna leder till kroppsliga '
    +'reaktioner.&nbsp;<br /> Verkliga problem ska <strong>probleml&ouml;sas </strong>och grundl&ouml;sa problem ska '
    +'<strong>sl&auml;ppas</strong>.</p>',
    '<strong>Utmaning Kapitel 3. Probleml&ouml;sning</strong><br /> F&ouml;r att du ska f&aring; en id&eacute; om hur du kan '
    +'t&auml;nka n&auml;r du ska utf&ouml;ra din utmaning ger jag dig tv&aring; exempel.&nbsp;</p><p>Exempel 1.<br />'
    +'Negativa tankar: Min chef intresserar sig aldrig f&ouml;r mina id&eacute;er p&aring; jobbet.<br /> Det &auml;r alltid andras id&eacute;er '
    +'hon v&auml;ljer. Det jag f&ouml;resl&aring;r negligeras alltid.&nbsp;</p><p>Beskriv problemet: Min chef intresserar sig aldrig f&ouml;r '
    +'mina id&eacute;er.<br />T&auml;nk ut och skriv ner olika f&ouml;rslag till att l&ouml;sa problemet:&nbsp;<br />'
    +'Jag pratar med chefen och fr&aring;gar varf&ouml;r mina id&eacute;er aldrig uppm&auml;rksammas.<br />'
    +'Jag b&ouml;rjar leta efter ett nytt arbete.&nbsp;<br />'
    +'Jag slutar att komma med synpunkter.<br />'
    +'V&auml;lj det alternativ till l&ouml;sning du tror blir b&auml;st och genomf&ouml;r det: Jag b&ouml;rjar leta efter ett nytt arbete.</p>'
    +'<p>Exempel 2.<br />Negativa tankar: Vad ska jag laga f&ouml;r mat i helgen n&auml;r sv&auml;rfar kommer p&aring; bes&ouml;k? Det '
    +'kommer inte spela n&aring;gon roll om jag anstr&auml;nger mig. Han kommer att f&auml;lla en massa spydiga kommentarer oavsett vad jag '
    +'lagar. Det g&ouml;r han alltid n&auml;r ingen annan h&ouml;r. &rdquo;Matlagning har aldrig varit din starka sida&rdquo; det kommer han '
    +'s&auml;kert att s&auml;ga. Usch, hela helgen kommer att vara f&ouml;rst&ouml;rd med honom i huset. Jag kommer att vara helt slut '
    +'n&auml;r arbetsveckan k&ouml;r ig&aring;ng igen. Jag kommer inte orka prestera n&aring;got vettigt och min chef blir s&auml;kert '
    +'missn&ouml;jd med mig.</p><p><strong>Beskriv</strong> problemet: Min sv&auml;rfar &auml;r spydig och elak emot mig.<br />'
    +'T&auml;nk ut och skriv ner olika f&ouml;rslag till att l&ouml;sa problemet:&nbsp;<br />Jag ringer upp sv&auml;rfar innan han kommer '
    +'p&aring; bes&ouml;k och pratar med honom.<br />Jag pratar med min man om problemet.<br />Jag bokar in n&aring;gonting annat hela helgen '
    +'s&aring; slipper jag att vara hemma.<br />V&auml;lj det alternativ till l&ouml;sning du tror blir b&auml;st och genomf&ouml;r '
    +'det:<br />Jag pratar med min man om problemet.</p>'].join("")
            },{
                xtype: "button",
                iconCls: "",
                html: 'Problemlösning',
                iconMask: true,
                handler: this.problem,
                scope: this
            }
            ]

        };

        this.add([topToolbar, bottomToolbar, component]);
    },
    problem: function() {
        this.fireEvent('gotoProblem', this);
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
