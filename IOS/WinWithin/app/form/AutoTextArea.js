Ext.define('WinWithin.form.AutoTextArea', { 
    extend: 'Ext.field.TextArea',
    xtype : 'autoHeightTextArea',
    
    constructor: function() {
        this.callParent(arguments);

        this.adjustHeight = Ext.Function.createBuffered(function(textarea) {
            var textAreaEl = textarea.getComponent().input;
            if (textAreaEl) {
                textAreaEl.dom.style.height = 'auto';
                textAreaEl.dom.style.height = textAreaEl.dom.scrollHeight + "px";
            }
        },200,this);

        this.on({
            scope: this,
            // focus: function() {
                
            //     console.log(this.up('.x-scroll-scroller'));
            //     window.scrollTo(0,0);

            // },
            keyup: function (textarea) {
                textarea.adjustHeight(textarea);
            },
            change: function(textarea, newValue) {
                textarea.adjustHeight(textarea);
            },
            activate: function(textarea) {
                textarea.adjustHeight(textarea);
            }
        });
    }
});