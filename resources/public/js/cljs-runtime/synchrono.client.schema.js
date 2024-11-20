goog.provide('synchrono.client.schema');
var module$node_modules$prosemirror_model$dist$index_cjs=shadow.js.require("module$node_modules$prosemirror_model$dist$index_cjs", {});
synchrono.client.schema.schema_spec = ({"nodes": ({"doc": ({"content": "paragraph+"}), "paragraph": ({"content": "(text | option | command | tag)*", "parseDOM": [({"tag": "p"})], "toDOM": (function (){
return ["p",(0)];
})}), "text": ({"group": "inline"}), "option": ({"inline": true, "group": "inline", "content": "text*", "atom": true, "selectable": true, "parseDOM": [({"tag": "span.option"})], "toDOM": (function (node){
return ["span",({"class": "option"}),(0)];
})}), "command": ({"inline": true, "group": "inline", "content": "text*", "atom": true, "selectable": true, "parseDOM": [({"tag": "span.command"})], "toDOM": (function (node){
return ["span",({"class": "command"}),(0)];
})}), "tag": ({"inline": true, "group": "inline", "content": "text*", "atom": true, "selectable": true, "parseDOM": [({"tag": "span.tag"})], "toDOM": (function (node){
return ["span",({"class": "tag"}),(0)];
})})}), "marks": ({"bold": ({"parseDOM": [({"tag": "strong"})], "toDOM": (function (){
return ["strong",(0)];
})}), "italic": ({"parseDOM": [({"tag": "em"})], "toDOM": (function (){
return ["em",(0)];
})}), "link": ({"attrs": ({"href": cljs.core.PersistentArrayMap.EMPTY}), "inclusive": false, "parseDOM": [({"tag": "a", "getAttrs": (function (dom){
return ({"href": dom.getAttribute("href")});
})})], "toDOM": (function (node){
return ["a",({"href": node.attrs.href}),(0)];
})})})});
synchrono.client.schema.schema = (new module$node_modules$prosemirror_model$dist$index_cjs.Schema(synchrono.client.schema.schema_spec));

//# sourceMappingURL=synchrono.client.schema.js.map
