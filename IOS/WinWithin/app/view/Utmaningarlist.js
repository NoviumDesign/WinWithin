Ext.define("WinWithin.view.Utmaningarlist", {
    extend: "Ext.dataview.List",
    alias: "widget.utmaningarlist",
    config: {
        loadingText: "Laddar utmaningar...",
        emptyText: '</pre><div class="notes-list-empty-text">Inga utmaningar skapade ännu</div><pre>',
        onItemDisclosure: true,
        itemTpl: new Ext.XTemplate('<div class="{clss}">', '<span style="display: inline-block;">{namnge}</span>','</div>')
        // '</pre><div class="list-item-title {clss}">{namnge}</div><pre>',
    }
});
