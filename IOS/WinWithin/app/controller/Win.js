Ext.define("WinWithin.controller.Win", {
    extend: "Ext.app.Controller",
    requires: [
        'Ext.Menu'
    ],
    config: {
        refs: {
            // lookup views by xtype
            main         : "main",
            introduktion : 'introduktion',
            kapitel1     : 'kapitel1',
            kapitel2     : 'kapitel2',
            kapitel3     : 'kapitel3',
            avslutning   : 'avslutning',
            utmaningar   : 'utmaningar',
            kapitel1form : 'kapitel1form',
            kapitel2form1 : 'kapitel2form1',
            kapitel2form2 : 'kapitel2form2',
            kapitel3form : 'kapitel3form',
            nyutmaning: 'nyutmaning'
        },
        control: {
            // Events in main
            main: {
                avtal: 'avtal'
            },
            introduktion: {
                menuToggle: 'menuToggle',
                play: 'playIntroduktion'
            },
            kapitel1: {
                menuToggle: 'menuToggle',
                gotoNegTank: 'gotoNegTank',
                play: 'playKapitel1'
            },
            kapitel2: {
                menuToggle   : 'menuToggle',
                gotoBevis    : 'gotoBevis',
                gotoRelevant : 'gotoRelevant',
                play: 'playKapitel2'
            },
            kapitel3: {
                menuToggle: 'menuToggle',
                gotoProblem: 'gotoProblem',
                play: 'playKapitel3'
            },
            avslutning: {
                menuToggle: 'menuToggle',
                play: 'playAvslutning'
            },
            utmaningar: {
                menuToggle: 'menuToggle',
                gotoEdit: 'gotoEdit',
                newChallange: 'newChallange'
            },
            kapitel1form: {
                back: 'backToKapitel1',
                saveNegtankCommand: 'saveNegtankCommand',
                deleteNegtankCommand: 'deleteNegtankCommand'
            },
            kapitel2form1: {
                saveRelElGrund : 'saveRelElGrund',
                deleteRelevantCommand: 'deleteRelevantCommand'

            },
            kapitel2form2: {
                saveBevis: 'saveBevis',
                deleteBevis: 'deleteBevis',
                play: 'playChallenge22'
            },
            kapitel3form: {
                saveProblem: 'saveProblem',
                deleteProblemCommand: 'deleteProblemCommand',
                play: 'playChallenge3'
            },
            nyutmaning: {
                gotoNewChallange: 'gotoNewChallange',
                backToUtmaningar: 'backToUtmaningar'
            }


        }
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    menuToggle: function () {
        Ext.Viewport.toggleMenu('left');
    },
    stopAllPlay: function() {
        if (typeof Media === 'function') {
             this.audio.stop();
             this.audio.release();
        } else {
            // Introduktion
            if(!document.getElementById('multiaudio1').paused) {
                var imgs = document.getElementsByName('introPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio1').pause();
                document.getElementById('multiaudio1').currentTime = 0;
            }
            // Kapitel 1
            if(!document.getElementById('multiaudio2').paused) {
                var imgs = document.getElementsByName('kap1Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio2').pause();
                document.getElementById('multiaudio2').currentTime = 0;
            }
            // Kapitel 2
            if(!document.getElementById('multiaudio3').paused) {
                var imgs = document.getElementsByName('kap2Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio3').pause();
                document.getElementById('multiaudio3').currentTime = 0;
            }
            // Kapitel 3
            if(!document.getElementById('multiaudio4').paused) {
                var imgs = document.getElementsByName('kap3Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio4').pause();
                document.getElementById('multiaudio4').currentTime = 0;
            }
            // Avslutning
            if(!document.getElementById('multiaudio5').paused) {
                var imgs = document.getElementsByName('avslPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio5').pause();
                document.getElementById('multiaudio5').currentTime = 0;
            }
            // Kapitel 2 utmaning
            if(!document.getElementById('multiaudio6').paused) {
                var imgs = document.getElementsByName('kap2form1Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio6').pause();
                document.getElementById('multiaudio6').currentTime = 0;
            }
            // Kapitel 3 utmaning
            if(!document.getElementById('multiaudio7').paused) {
                var imgs = document.getElementsByName('kap3formPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                document.getElementById('multiaudio7').pause();
                document.getElementById('multiaudio7').currentTime = 0;
            }
            // Jingel
            if(!document.getElementById('multiaudio8').paused) {
                document.getElementById('multiaudio8').pause();
                document.getElementById('multiaudio8').currentTime = 0;
            }
        }
    },
    playIntroduktion: function () {
        if(!document.getElementById('multiaudio1').paused) {
            // Playing
            var imgs = document.getElementsByName('introPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio1').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('introPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio1').play();
        }
    },
    playKapitel1: function() {
        // kap1Play
        if(!document.getElementById('multiaudio2').paused) {
            // Playing
            var imgs = document.getElementsByName('kap1Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio2').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap1Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio2').play();
        }
    },
    playKapitel2: function (){
        // kap2Play
        if(!document.getElementById('multiaudio3').paused) {
            // Playing
            var imgs = document.getElementsByName('kap2Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio3').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap2Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio3').play();
        }
    },
    playChallenge22: function() {
        // kap2form1Play
        if(!document.getElementById('multiaudio6').paused) {
            // Playing
            var imgs = document.getElementsByName('kap2form1Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio6').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap2form1Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio6').play();
        }
    },
    playKapitel3: function() {
        // kap3Play
        if(!document.getElementById('multiaudio4').paused) {
            // Playing
            var imgs = document.getElementsByName('kap3Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio4').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap3Play');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio4').play();
        }
    },
    playChallenge3: function() {
        // kap3formPlay
        if(!document.getElementById('multiaudio7').paused) {
            // Playing
            var imgs = document.getElementsByName('kap3formPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio7').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap3formPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio7').play();
        }
    },
    playAvslutning: function() {
        // avslPlay
        if(!document.getElementById('multiaudio5').paused) {
            // Playing
            var imgs = document.getElementsByName('avslPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/play.png';
            }
            document.getElementById('multiaudio5').pause();
        } else {
            // Not playing
            var imgs = document.getElementsByName('avslPlay');
            for (var iKey in imgs) {
                imgs[iKey].src = 'resources/images/paus.png';
            }
            document.getElementById('multiaudio5').play();
        }
    },
    avtal: function(){
        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var record = Ext.create("WinWithin.model.Avtal", {
            id: noteId,
            dateCreated: now
        });
        record.set('godkann', 'true');
        var notesStore = Ext.getStore("Avtal");
        if (null == notesStore.findRecord('id', record.data.id)) {
            notesStore.add(record);
        }
        notesStore.sync();
        Ext.Viewport.setActiveItem(this.getIntroduktion());
    },
    gotoEdit: function() {
        if (arguments[1] && arguments[1].hasOwnProperty('data')) {
            var record = arguments[1].data.record;
            switch(arguments[1].data.action) {
                case 'gotoNegTank': 
                    var kapitel1form = this.getKapitel1form();
                    kapitel1form.backEvent = 'backToUtmaningar';
                    this.gotoNegTank(record); 
                    break;
                case 'gotoBevis':
                    var kapitel2form2 = this.getKapitel2form2();
                    kapitel2form2.backEvent = 'backToUtmaningar';
                    this.gotoBevis(record); 
                    break;
                case 'gotoRelevant':
                    var kapitel2form1 = this.getKapitel2form1();
                    kapitel2form1.backEvent = 'backToUtmaningar';
                    this.gotoRelevant(record); 
                    break;
                case 'gotoProblem':
                    var kapitel3form = this.getKapitel3form();
                    kapitel3form.backEvent = 'backToUtmaningar';
                    this.gotoProblem(record);
                    break;
            }
        } 
    },
    newChallange: function() {
        var nyutmaning = this.getNyutmaning();
        Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'left' });
    },
    gotoNewChallange: function() {
        if (arguments[1] && arguments[1].hasOwnProperty('data')) {
            var chall = arguments[1].data.namnge;
            switch(chall) {
                case 'Negativa tankar och känslor':
                    var kapitel1form = this.getKapitel1form();
                    kapitel1form.backEvent = 'backToNyUtm';
                    this.gotoNegTank({});
                    break;
                case 'Bevis för eller emot':
                    var kapitel2form2 = this.getKapitel2form2();
                    kapitel2form2.backEvent = 'backToNyUtm';
                    this.gotoBevis({});
                    break;
                case 'Relevant eller grundlös tanke':
                    var kapitel2form1 = this.getKapitel2form1();
                    kapitel2form1.backEvent = 'backToNyUtm';
                    this.gotoRelevant({}); 
                    break;
                case 'Problemlösning':
                    var kapitel3form = this.getKapitel3form();
                    kapitel3form.backEvent = 'backToNyUtm';
                    this.gotoProblem({});
                    break;
            }

        }
    },
    gotoIntroduktion: function() {
        this.stopAllPlay.call(this);

        var introduktion = this.getIntroduktion();
        // load data?
        Ext.Viewport.animateActiveItem(introduktion, { type: 'slide', direction: 'left' });
    },
    /**
     * Kapitel 1
     * 
     * @return {[type]} [description]
     */
    gotoKapitel1: function() {
        this.stopAllPlay.call(this);

        var kapitel1 = this.getKapitel1();
        var kapitel1form = this.getKapitel1form();
        kapitel1form.backEvent = 'backToKapitel1';
        // load data?
        Ext.Viewport.animateActiveItem(kapitel1, { type: 'slide', direction: 'left' });
    },
    gotoNegTank: function(record) {
        this.stopAllPlay.call(this);

        var kapitel1form = this.getKapitel1form();
            
        if (!record.hasOwnProperty('internalId')) {
            // There is no record
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Negtank", {
                id: noteId,
                dateCreated: now,
                namnge: '',
                negativtanke: '',
                obehaglig: ''
            });
        }
        kapitel1form.setRecord(record);
        kapitel1form.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel1form, {type:'slide', direction:'left'});
    },
    saveNegtankCommand: function() {
        var kapitel1form = this.getKapitel1form();
        var currentNote = kapitel1form.getRecord();
        var newValues = kapitel1form.getValues();
        if (newValues.namnge.length > 0) {
            currentNote.set("namnge", newValues.namnge);
            currentNote.set("negativtanke", newValues.negativtanke);
            currentNote.set("obehaglig", newValues.obehaglig);
            var notesStore = Ext.getStore("Negtank");
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        switch(kapitel1form.backEvent) {
            case 'backToKapitel1': 
                this.backToKapitel1(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
        
    },
    deleteNegtankCommand: function() {
        var kapitel1form = this.getKapitel1form();
        var currentNote = kapitel1form.getRecord();
        var notesStore = Ext.getStore("Negtank");
        notesStore.remove(currentNote);
        notesStore.sync();

        switch(kapitel1form.backEvent) {
            case 'backToKapitel1': 
                this.backToKapitel1(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel1: function() {
        this.stopAllPlay.call(this);
        var kapitel1 = this.getKapitel1();
        Ext.Viewport.animateActiveItem(kapitel1, { type: 'slide', direction: 'right' });
    },
    /**
     * Kapitel 2
     * 
     * @return {[type]} [description]
     */
    gotoKapitel2: function() {
        this.stopAllPlay.call(this);

        var kapitel2 = this.getKapitel2();
        var kapitel2form1 = this.getKapitel2form1();
        var kapitel2form2 = this.getKapitel2form2();
        kapitel2form1.backEvent = 'backToKapitel2';
        kapitel2form2.backEvent = 'backToKapitel2';
        Ext.Viewport.animateActiveItem(kapitel2, { type: 'slide', direction: 'left' });
    },
    gotoBevis: function(record) {
        this.stopAllPlay.call(this);

        var kapitel2form2 = this.getKapitel2form2();
        
        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Bevis", {
                id: noteId,
                dateCreated: now,
                namnge: '',
                negTanke: '',
                relBevis: [],
                grundBevis: [],
                relElGrund: undefined
            });
        }
        kapitel2form2.setRecord(record);
        kapitel2form2.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel2form2, {type:'slide', direction:'left'});
    },
    saveBevis: function() {
        var kapitel2form2 = this.getKapitel2form2();
        var currentNote = kapitel2form2.getRecord();
        var newValues = kapitel2form2.getValues();
        
        if (newValues.namnge.length > 0) {
            currentNote.set('namnge', newValues.namnge);
            currentNote.set('negTanke', newValues.negTanke);
            var relBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 8) == 'relBevis') {
                    if (newValues[key].length > 0) {
                        relBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('relBevis', relBevis);
            var grundBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 10) == 'grundBevis') {
                    if (newValues[key].length > 0) {
                        grundBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('grundBevis', grundBevis);
            var notesStore = Ext.getStore('Bevis');
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        
        switch(kapitel2form2.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    deleteBevis: function() {
        var kapitel2form2 = this.getKapitel2form2();
        var currentNote = kapitel2form2.getRecord();
        var notesStore = Ext.getStore("Bevis");
        notesStore.remove(currentNote);
        notesStore.sync();

        switch(kapitel2form2.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    gotoRelevant: function(record) {
        this.stopAllPlay.call(this);
        var kapitel2form1 = this.getKapitel2form1();

        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Relevant", {
                id: noteId,
                dateCreated: now,
                fields: [{
                    namnge: '',
                    negTanke: '',
                    relElGrund: undefined
                }]
            });
        }
        
        kapitel2form1.setRecord(record);
        kapitel2form1.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel2form1, {type:'slide', direction:'left'});
    },
    saveRelElGrund: function() {
        var kapitel2form1 = this.getKapitel2form1();
        var currentNote = kapitel2form1.getRecord();
        var newValues = kapitel2form1.getValues();
        var fields = [{
            namnge: newValues.namnge,
            negTanke: newValues.negTanke,
            relElGrund: currentNote.get('fields')[0].relElGrund
        }]
        if (newValues.namnge.length > 0) {

            currentNote.set('fields', fields);
            var notesStore = Ext.getStore("Relevant");
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        switch(kapitel2form1.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    deleteRelevantCommand: function() {
        var kapitel2form1 = this.getKapitel2form1();
        var currentNote = kapitel2form1.getRecord();
        var notesStore = Ext.getStore("Relevant");
        notesStore.remove(currentNote);
        notesStore.sync();
        
        switch(kapitel2form1.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel2: function() {
        this.stopAllPlay.call(this);
        var kapitel2 = this.getKapitel2();
        Ext.Viewport.animateActiveItem(kapitel2, { type: 'slide', direction: 'right' });
    },
    /**
     * Kapitel 3
     * 
     * @return {[type]} [description]
     */
    gotoKapitel3: function() {
        this.stopAllPlay.call(this);
        var kapitel3 = this.getKapitel3();
        var kapitel3form = this.getKapitel3form();
        kapitel3form.backEvent = 'backToKapitel3';
        Ext.Viewport.animateActiveItem(kapitel3, { type: 'slide', direction: 'left' });
    },
    gotoProblem: function(record) {
        this.stopAllPlay.call(this);
        var kapitel3form = this.getKapitel3form();

        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Problem", {
                id: noteId,
                dateCreated: now,
                beskriv: '',
                forslag: [],
                vald: undefined
            });
        }
        
        kapitel3form.setRecord(record);
        kapitel3form.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel3form, {type:'slide', direction:'left'});
    },
    saveProblem: function() {
        var kapitel3form = this.getKapitel3form();
        var currentNote = kapitel3form.getRecord();
        var newValues = kapitel3form.getValues();
        
        if (newValues.beskriv.length > 0) {

            currentNote.set('beskriv', newValues.beskriv);
            var relBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 7) == 'forslag') {
                    if (newValues[key].length > 0) {
                        relBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('forslag', relBevis);
            
            var notesStore = Ext.getStore('Problem');
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        
        switch(kapitel3form.backEvent) {
            case 'backToKapitel3': 
                this.backToKapitel3();
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
        
    },
    deleteProblemCommand: function() {
        var kapitel3form = this.getKapitel3form();
        var currentNote = kapitel3form.getRecord();
        var notesStore = Ext.getStore('Problem');
        notesStore.remove(currentNote);
        notesStore.sync();
        switch(kapitel3form.backEvent) {
            case 'backToKapitel3': 
                this.backToKapitel3(); 
                break;
            case 'backToNyUtm':
                var nyutmaning = this.getNyutmaning();
                Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                var utmaningar = this.getUtmaningar();
                utmaningar.refresh();
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel3: function() {
        this.stopAllPlay.call(this);
        var kapitel3 = this.getKapitel3();
        Ext.Viewport.animateActiveItem(kapitel3, { type: 'slide', direction: 'right' });
    },
    gotoAvslutning: function() {
        this.stopAllPlay.call(this);
        var avslutning = this.getAvslutning();
        // load data?
        Ext.Viewport.animateActiveItem(avslutning, { type: 'slide', direction: 'left' });
    },
    gotoUtmaningar: function() {
        this.stopAllPlay.call(this);
        
        var listData = [];
        Ext.getStore('Negtank').load();
        Ext.getStore('Negtank').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Relevant').load();
        Ext.getStore('Relevant').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Bevis').load();
        Ext.getStore('Bevis').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Problem').load();
        Ext.getStore('Problem').each(function(rec) {
            listData.push(rec);
        });
        if (listData.length > 0) {
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh();
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        } else {
            var nyutmaning = this.getNyutmaning();
            Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'left' });
        }
        
    },
    backToUtmaningar: function() {
        this.stopAllPlay.call(this);
        var utmaningar = this.getUtmaningar();
        utmaningar.refresh();
        Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
    },
    doSetHidden: function(hidden) {
        this.callParent(arguments);
        if (hidden) {
            Ext.Viewport.removeMenu('left');
        } else {
            Ext.Viewport.setMenu(this.menuForSide('left'), { side: 'left', reveal: true });
        }
    },
    /**
     * Create menu on the fly
     * @param  {string} side Which side the menu should be on
     * @return {Ext.Menu}      Menu instance
     */
    menuForSide: function(side) {
        var items = [
        {
            text:'Introduktion',
            style: {
                'height': '16.6666667%',
                'background': '#d9d04c',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoIntroduktion();
            }
        },
        {
            text:'Kapitel 1',
            style: {
                'height': '16.6666667%',
                'background': '#7baf9a',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel1();
            }
        },
        {
            text:'Kapitel 2',
            style: {
                'height': '16.6666667%',
                'background': '#495b6a',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel2();
            }
        },
        {
            text:'Kapitel 3',
            style: {
                'height': '16.6666667%',
                'background': '#905f79',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel3();
            }
        },
        {
            text:'Avslutning',
            style: {
                'height': '16.6666667%',
                'background': '#657798',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoAvslutning();
            }
        },
        {
            text:'Utmaningar',
            style: {
                'height': '16.6666667%',
                'background': '#794849',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoUtmaningar();
            }
        }

        ];
        var className = 'Ext.Menu';
        return Ext.create(className, {items: items});
    },
    launch: function () {
        this.callParent();
        //Ext.getStore("Negtank").load();

        // console.log("launch");
    },

    init: function () {
        this.callParent();
        Ext.Viewport.setMenu(this.menuForSide('left'), { side: 'left', reveal: true });
        this.playToggle = false;
    }

});
