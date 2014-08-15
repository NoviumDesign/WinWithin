Ext.define("WinWithin.view.Utmaningarlist", {
    extend: "Ext.dataview.List",
    alias: "widget.utmaningarlist",
    config: {
        loadingText: "Laddar utmaningar...",
        emptyText: '</pre><div class="notes-list-empty-text">Inga utmaningar skapade ännu</div><pre>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="list-item-title">{namnge}</div><pre>',
    }
});
