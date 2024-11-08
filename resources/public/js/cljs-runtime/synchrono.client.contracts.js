goog.provide('synchrono.client.contracts');
/**
 * Form component for creating a new contract. Displays input fields for all contract properties.
 */
synchrono.client.contracts.new_contract_form = (function synchrono$client$contracts$new_contract_form(){
var keypairs_list = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keypairs-list","keypairs-list",404972286)], null));
var current_keypair = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-keypair","current-keypair",678745730)], null));
var current_keypair_private_key = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652)], null));
var current_contract = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-contract","current-contract",31820208)], null));
var message = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002)], null));
var error = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"New Contract"], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18026_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-name","set-contract-name",-522381180),p1__18026_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"About"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.contract-about","textarea.contract-about",-441454561),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"about","about",1423892543).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18027_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-about","set-contract-about",-803409938),p1__18027_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Picture URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"picture","picture",-921943404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18028_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-picture","set-contract-picture",-773659025),p1__18028_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Initial Balance (satoshis)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"initial-credit-balance-sat","initial-credit-balance-sat",-500768184).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18029_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-initial-credit-balance-sat","set-contract-initial-credit-balance-sat",-1469387092),p1__18029_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Minimum Withdrawal (satoshis)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"minimum-withdrawal-sat","minimum-withdrawal-sat",-752266317).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18030_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-minimum-withdrawal-sat","set-contract-minimum-withdrawal-sat",-1368992091),p1__18030_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Daily Fee (satoshis)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"daily-fee-sat","daily-fee-sat",1928281526).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18031_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-daily-fee-sat","set-contract-daily-fee-sat",468602664),p1__18031_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Timezone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"timezone","timezone",1831928099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_contract)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18032_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-contract-timezone","set-contract-timezone",258063157),p1__18032_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Pubkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((cljs.core.empty_QMARK_(cljs.core.deref(keypairs_list)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.header-button.error","button.header-button.error",-974590437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-route","set-current-route",-154604093),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
})], null),"No keys"], null):(cljs.core.truth_(cljs.core.deref(current_keypair_private_key))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.header-button","button.header-button",710875035),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-route","set-current-route",-154604093),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
})], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_keypair))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.header-button.error","button.header-button.error",-974590437),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-route","set-current-route",-154604093),new cljs.core.Keyword(null,"keys","keys",1068423698)], null));
})], null),"Keys locked"], null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(cljs.core.truth_(cljs.core.deref(message))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.message","div.message",197515312),cljs.core.deref(message)], null):null),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(error)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"publish-contract","publish-contract",1096835539)], null));
})], null),"Publish Contract"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.content-button","button.content-button",-1537050635),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-contract?","set-new-contract?",948806428),false], null));
})], null),"Cancel"], null)], null)], null);
});
/**
 * Component for displaying available contracts that can be purchased
 */
synchrono.client.contracts.available_contracts_form = (function synchrono$client$contracts$available_contracts_form(){
var contract_events = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contract-events","contract-events",-894360490)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"Available Contracts"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts-list","div.contracts-list",-693824706),(function (){var iter__5480__auto__ = (function synchrono$client$contracts$available_contracts_form_$_iter__18037(s__18038){
return (new cljs.core.LazySeq(null,(function (){
var s__18038__$1 = s__18038;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18038__$1);
if(temp__5804__auto__){
var s__18038__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18038__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__18038__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__18040 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__18039 = (0);
while(true){
if((i__18039 < size__5479__auto__)){
var contract_event = cljs.core._nth(c__5478__auto__,i__18039);
cljs.core.chunk_append(b__18040,(function (){var contract = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(contract_event);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["contract",contract], 0));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contract)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"about","about",1423892543).cljs$core$IFn$_invoke$arity$1(contract)], null),(function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(contract,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"credit-balance-sat","credit-balance-sat",-2064900884)], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var balance = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Your credit balance: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance.toLocaleString())," satoshis"].join('')], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Modify Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__18039,contract,_,contract_event,c__5478__auto__,size__5479__auto__,b__18040,s__18038__$2,temp__5804__auto__,contract_events){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buy-contract","buy-contract",1673051622),contract], null));
});})(i__18039,contract,_,contract_event,c__5478__auto__,size__5479__auto__,b__18040,s__18038__$2,temp__5804__auto__,contract_events))
], null),"Buy Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Read Today"], null)], null)], null);
})());

var G__18077 = (i__18039 + (1));
i__18039 = G__18077;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18040),synchrono$client$contracts$available_contracts_form_$_iter__18037(cljs.core.chunk_rest(s__18038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18040),null);
}
} else {
var contract_event = cljs.core.first(s__18038__$2);
return cljs.core.cons((function (){var contract = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(contract_event);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["contract",contract], 0));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(contract)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.Keyword(null,"about","about",1423892543).cljs$core$IFn$_invoke$arity$1(contract)], null),(function (){var temp__5804__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(contract,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"credit-balance-sat","credit-balance-sat",-2064900884)], null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var balance = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Your credit balance: "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(balance.toLocaleString())," satoshis"].join('')], null)], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Modify Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (contract,_,contract_event,s__18038__$2,temp__5804__auto__,contract_events){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buy-contract","buy-contract",1673051622),contract], null));
});})(contract,_,contract_event,s__18038__$2,temp__5804__auto__,contract_events))
], null),"Buy Contract"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),"Read Today"], null)], null)], null);
})(),synchrono$client$contracts$available_contracts_form_$_iter__18037(cljs.core.rest(s__18038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(contract_events));
})()], null)], null);
});
/**
 * Component for displaying user's owned contracts
 */
synchrono.client.contracts.my_contracts_form = (function synchrono$client$contracts$my_contracts_form(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"My Contracts"], null)], null);
});
/**
 * Main contracts component that manages display of different contract views
 */
synchrono.client.contracts.contracts = (function synchrono$client$contracts$contracts(){
var new_contract_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836)], null));
var my_contracts_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707)], null));
var available_contracts_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts","div.contracts",700350854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"contracts"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts-menu.row","div.contracts-menu.row",2047241764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts-menu-item","div.contracts-menu-item",1547371803),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(new_contract_QMARK_))?"hilighted":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-new-contract?","set-new-contract?",948806428),true], null));
})], null),"New"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts-menu-item","div.contracts-menu-item",1547371803),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(available_contracts_QMARK_))?"hilighted":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-available-contracts?","set-available-contracts?",187048316),true], null));
})], null),"Available"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.contracts-menu-item","div.contracts-menu-item",1547371803),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.action-button","button.action-button",-642678460),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(my_contracts_QMARK_))?"hilighted":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-my-contracts?","set-my-contracts?",-1781550145),true], null));
})], null),"My"], null)], null)], null),(cljs.core.truth_(cljs.core.deref(new_contract_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.contracts.new_contract_form], null):null),(cljs.core.truth_(cljs.core.deref(my_contracts_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.contracts.my_contracts_form], null):null),(cljs.core.truth_(cljs.core.deref(available_contracts_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [synchrono.client.contracts.available_contracts_form], null):null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"publish-contract","publish-contract",1096835539),(function (p__18061,_){
var map__18062 = p__18061;
var map__18062__$1 = cljs.core.__destructure_map(map__18062);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18062__$1,new cljs.core.Keyword(null,"db","db",993250759));
var current_contract = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"current-contract","current-contract",31820208)], null));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Publishing contract (before):",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_contract], 0))], 0));

var current_keypair_private_key = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"current-keypair-private-key","current-keypair-private-key",-609513652)], null));
if(cljs.core.truth_(current_keypair_private_key)){
var relay_urls = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relays","relays",390472162),new cljs.core.Keyword(null,"relays-list","relays-list",-1087282965)], null));
var event = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),(4444),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["s","synchrono"], null)], null),new cljs.core.Keyword(null,"content","content",15833224),current_contract,new cljs.core.Keyword(null,"created_at","created_at",1484050750),Math.floor((Date.now() / (1000)))], null);
synchrono.client.nostr.publish(relay_urls,event,current_keypair_private_key);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"posting?","posting?",2019552076)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"error","error",-978969032)], null),"No keypair available.")], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-new-contract?","set-new-contract?",948806428),(function (db,p__18063){
var vec__18064 = p__18063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18064,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18064,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836)], null),value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-my-contracts?","set-my-contracts?",-1781550145),(function (db,p__18067){
var vec__18068 = p__18067;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18068,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18068,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707)], null),value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017)], null),false);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-available-contracts?","set-available-contracts?",187048316),(function (db,p__18072){
var vec__18073 = p__18072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017)], null),value),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707)], null),false);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"contract-events","contract-events",-894360490),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var contract_event_ids = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"event-ids-by-kind","event-ids-by-kind",-2135185994),(4444)], null));
var contract_events = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18076_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"events-by-id","events-by-id",-359530454),p1__18076_SHARP_], null));
}),contract_event_ids);
return contract_events;
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"new-contract?","new-contract?",-2108278836)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"my-contracts?","my-contracts?",-1159776707)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"available-contracts?","available-contracts?",1935240017)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"current-contract","current-contract",31820208),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contracts","contracts",905357673),new cljs.core.Keyword(null,"current-contract","current-contract",31820208)], null));
})], 0));

//# sourceMappingURL=synchrono.client.contracts.js.map
