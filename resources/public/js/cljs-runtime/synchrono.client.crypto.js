goog.provide('synchrono.client.crypto');
var module$node_modules$aes_js$index=shadow.js.require("module$node_modules$aes_js$index", {});
var module$node_modules$$noble$hashes$sha256=shadow.js.require("module$node_modules$$noble$hashes$sha256", {});
var module$node_modules$nostr_tools$lib$cjs$index=shadow.js.require("module$node_modules$nostr_tools$lib$cjs$index", {});
/**
 * Converts a byte array to a hex string.
 * Each byte is converted to a 2-digit hex number and concatenated.
 */
synchrono.client.crypto.bytes_to_hex = (function synchrono$client$crypto$bytes_to_hex(bytes){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (byte$){
var hex = byte$.toString((16));
if((hex.length < (2))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
} else {
return hex;
}
}),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(bytes)));
});
/**
 * Converts a hex string to a byte array.
 * Removes non-hex characters and converts each pair of hex digits to a byte.
 * Returns empty byte array if input is nil.
 */
synchrono.client.crypto.hex_to_bytes = (function synchrono$client$crypto$hex_to_bytes(hex){
if((hex == null)){
return (new Uint8Array((0)));
} else {
var clean_hex = clojure.string.replace(hex,/[^0-9a-fA-F]/,"");
var byte_length = (clean_hex.length / (2));
var byte_array = (new Uint8Array(byte_length));
var n__5593__auto___19669 = byte_length;
var i_19670 = (0);
while(true){
if((i_19670 < n__5593__auto___19669)){
(byte_array[i_19670] = parseInt(clean_hex.slice((i_19670 * (2)),((i_19670 * (2)) + (2))),(16)));

var G__19671 = (i_19670 + (1));
i_19670 = G__19671;
continue;
} else {
}
break;
}

return byte_array;
}
});
/**
 * Derives an encryption key from a password using SHA-256.
 * Returns the key as a byte array.
 */
synchrono.client.crypto.derive_key = (function synchrono$client$crypto$derive_key(password){
var encoder = (new TextEncoder());
var password_bytes = encoder.encode(password);
var key_bytes = module$node_modules$$noble$hashes$sha256.sha256(password_bytes);
return key_bytes;
});
/**
 * Generates a random 16-byte (128-bit) initialization vector for AES.
 */
synchrono.client.crypto.generate_nonce = (function synchrono$client$crypto$generate_nonce(){
return crypto.getRandomValues((new Uint8Array((16))));
});
/**
 * Encrypts data using AES-CTR mode with a derived key.
 * Data can be either a string or byte array.
 * Returns hex string of concatenated IV and ciphertext.
 */
synchrono.client.crypto.encrypt = (function synchrono$client$crypto$encrypt(data,password){
var data_bytes = ((typeof data === 'string')?synchrono.client.crypto.hex_to_bytes(data):data);
var key = synchrono.client.crypto.derive_key(password);
var iv = synchrono.client.crypto.generate_nonce();
var aes_ctr = (new module$node_modules$aes_js$index.ModeOfOperation.ctr(key,iv));
var encrypted = aes_ctr.encrypt(data_bytes);
var combined = (new Uint8Array((iv.length + encrypted.length)));
combined.set(iv,(0));

combined.set(encrypted,iv.length);

return synchrono.client.crypto.bytes_to_hex(combined);
});
/**
 * Decrypts a hex string using AES-CTR mode.
 * Expects concatenated IV and ciphertext.
 * Returns decrypted bytes as Uint8Array or nil if decryption fails.
 */
synchrono.client.crypto.decrypt = (function synchrono$client$crypto$decrypt(encrypted_hex,password){
var combined_bytes = synchrono.client.crypto.hex_to_bytes(encrypted_hex);
var iv = (new Uint8Array(combined_bytes.slice((0),(16))));
var ciphertext = (new Uint8Array(combined_bytes.slice((16))));
var key = synchrono.client.crypto.derive_key(password);
var aes_ctr = (new module$node_modules$aes_js$index.ModeOfOperation.ctr(key,iv));
try{return (new Uint8Array(aes_ctr.decrypt(ciphertext)));
}catch (e19668){var e = e19668;
console.error("Decryption failed:",e);

return null;
}});
synchrono.client.crypto.generate_keypair = (function synchrono$client$crypto$generate_keypair(){
var private_key_bytes = module$node_modules$nostr_tools$lib$cjs$index.generateSecretKey();
var public_key = module$node_modules$nostr_tools$lib$cjs$index.getPublicKey(private_key_bytes);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"public-key","public-key",-2106850051),public_key,new cljs.core.Keyword(null,"private-key","private-key",426483388),synchrono.client.crypto.bytes_to_hex(private_key_bytes),new cljs.core.Keyword(null,"private-key-bytes","private-key-bytes",381285272),private_key_bytes], null);
});

//# sourceMappingURL=synchrono.client.crypto.js.map
