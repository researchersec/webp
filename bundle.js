!function(){var n={559:function(n,e,t){let r;n=t.nmd(n),function(){const e={};let o,i;o="undefined"==typeof document?location.href:new URL(document.currentScript.src,location.href).toString();const _=new Array(128).fill(void 0);function c(n){return _[n]}_.push(void 0,null,!0,!1);let u=_.length;function a(n){const e=c(n);return function(n){n<132||(_[n]=u,u=n)}(n),e}const b=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});b.decode();let l=null;function s(){return null!==l&&0!==l.byteLength||(l=new Uint8Array(i.memory.buffer)),l}function f(n,e){return b.decode(s().subarray(n,n+e))}function g(n){u===_.length&&_.push(_.length+1);const e=u;return u=_[e],_[e]=n,e}let w=0;const d=new TextEncoder("utf-8"),y="function"==typeof d.encodeInto?function(n,e){return d.encodeInto(n,e)}:function(n,e){const t=d.encode(n);return e.set(t),{read:n.length,written:t.length}};function m(n,e,t){if(void 0===t){const t=d.encode(n),r=e(t.length);return s().subarray(r,r+t.length).set(t),w=t.length,r}let r=n.length,o=e(r);const i=s();let _=0;for(;_<r;_++){const e=n.charCodeAt(_);if(e>127)break;i[o+_]=e}if(_!==r){0!==_&&(n=n.slice(_)),o=t(o,r,r=_+3*n.length);const e=s().subarray(o+_,o+r);_+=y(n,e).written}return w=_,o}function p(n){return null==n}let h=null;function v(){return null!==h&&0!==h.byteLength||(h=new Int32Array(i.memory.buffer)),h}function A(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=A(n[0]));for(let r=1;r<e;r++)t+=", "+A(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}function k(n,e){const t=e(1*n.length);return s().set(n,t/1),w=n.length,t}let S=null;function j(){return null!==S&&0!==S.byteLength||(S=new Uint32Array(i.memory.buffer)),S}function E(n,e){const t=e(4*n.length),r=j();for(let e=0;e<n.length;e++)r[t/4+e]=g(n[e]);return w=n.length,t}function O(n,e){try{return n.apply(this,e)}catch(n){i.__wbindgen_exn_store(g(n))}}function x(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(n){a(n)},e.wbg.__wbindgen_is_string=function(n){return"string"==typeof c(n)},e.wbg.__wbindgen_error_new=function(n,e){return g(new Error(f(n,e)))},e.wbg.__wbindgen_string_get=function(n,e){const t=c(e),r="string"==typeof t?t:void 0;var o=p(r)?0:m(r,i.__wbindgen_malloc,i.__wbindgen_realloc),_=w;v()[n/4+1]=_,v()[n/4+0]=o},e.wbg.__wbindgen_object_clone_ref=function(n){return g(c(n))},e.wbg.__wbindgen_is_object=function(n){const e=c(n);return"object"==typeof e&&null!==e},e.wbg.__wbg_String_88810dfeb4021902=function(n,e){const t=m(String(c(e)),i.__wbindgen_malloc,i.__wbindgen_realloc),r=w;v()[n/4+1]=r,v()[n/4+0]=t},e.wbg.__wbindgen_number_new=function(n){return g(n)},e.wbg.__wbindgen_string_new=function(n,e){return g(f(n,e))},e.wbg.__wbg_set_841ac57cff3d672b=function(n,e,t){c(n)[a(e)]=a(t)},e.wbg.__wbg_crypto_70a96de3b6b73dac=function(n){return g(c(n).crypto)},e.wbg.__wbg_process_dd1577445152112e=function(n){return g(c(n).process)},e.wbg.__wbg_versions_58036bec3add9e6f=function(n){return g(c(n).versions)},e.wbg.__wbg_node_6a9d28205ed5b0d8=function(n){return g(c(n).node)},e.wbg.__wbg_msCrypto_adbc770ec9eca9c7=function(n){return g(c(n).msCrypto)},e.wbg.__wbg_require_f05d779769764e82=function(){return O((function(){return g(n.require)}),arguments)},e.wbg.__wbindgen_is_function=function(n){return"function"==typeof c(n)},e.wbg.__wbg_randomFillSync_e950366c42764a07=function(){return O((function(n,e){c(n).randomFillSync(a(e))}),arguments)},e.wbg.__wbg_getRandomValues_3774744e221a22ad=function(){return O((function(n,e){c(n).getRandomValues(c(e))}),arguments)},e.wbg.__wbg_new_b525de17f44a8943=function(){return g(new Array)},e.wbg.__wbg_newnoargs_2b8b6bd7753c76ba=function(n,e){return g(new Function(f(n,e)))},e.wbg.__wbg_new_f841cc6f2098f4b5=function(){return g(new Map)},e.wbg.__wbg_call_95d1ea488d03e4e8=function(){return O((function(n,e){return g(c(n).call(c(e)))}),arguments)},e.wbg.__wbg_new_f9876326328f45ed=function(){return g(new Object)},e.wbg.__wbg_self_e7c1f827057f6584=function(){return O((function(){return g(self.self)}),arguments)},e.wbg.__wbg_window_a09ec664e14b1b81=function(){return O((function(){return g(window.window)}),arguments)},e.wbg.__wbg_globalThis_87cbb8506fecf3a9=function(){return O((function(){return g(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_c85a9259e621f3db=function(){return O((function(){return g(t.g.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(n){return void 0===c(n)},e.wbg.__wbg_set_17224bc548dd1d7b=function(n,e,t){c(n)[e>>>0]=a(t)},e.wbg.__wbg_call_9495de66fdbe016b=function(){return O((function(n,e,t){return g(c(n).call(c(e),c(t)))}),arguments)},e.wbg.__wbg_set_388c4c6422704173=function(n,e,t){return g(c(n).set(c(e),c(t)))},e.wbg.__wbg_buffer_cf65c07de34b9a08=function(n){return g(c(n).buffer)},e.wbg.__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5=function(n,e,t){return g(new Uint8Array(c(n),e>>>0,t>>>0))},e.wbg.__wbg_new_537b7341ce90bb31=function(n){return g(new Uint8Array(c(n)))},e.wbg.__wbg_set_17499e8aa4003ebd=function(n,e,t){c(n).set(c(e),t>>>0)},e.wbg.__wbg_newwithlength_b56c882b57805732=function(n){return g(new Uint8Array(n>>>0))},e.wbg.__wbg_subarray_7526649b91a252a6=function(n,e,t){return g(c(n).subarray(e>>>0,t>>>0))},e.wbg.__wbindgen_debug_string=function(n,e){const t=m(A(c(e)),i.__wbindgen_malloc,i.__wbindgen_realloc),r=w;v()[n/4+1]=r,v()[n/4+0]=t},e.wbg.__wbindgen_throw=function(n,e){throw new Error(f(n,e))},e.wbg.__wbindgen_memory=function(){return g(i.memory)},e}function R(n,e){return i=n.exports,T.__wbindgen_wasm_module=e,h=null,S=null,l=null,i}async function T(n){void 0===n&&(n=o.replace(/\.js$/,"_bg.wasm"));const e=x();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:r}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,e);return R(t,r)}e.parseEvent=function(n,e,t,r){try{const g=i.__wbindgen_add_to_stack_pointer(-16),d=k(n,i.__wbindgen_malloc),y=w;var o=p(e)?0:m(e,i.__wbindgen_malloc,i.__wbindgen_realloc),_=w,c=p(t)?0:E(t,i.__wbindgen_malloc),u=w,b=p(r)?0:E(r,i.__wbindgen_malloc),l=w;i.parseEvent(g,d,y,o,_,c,u,b,l);var s=v()[g/4+0],f=v()[g/4+1];if(v()[g/4+2])throw a(f);return a(s)}finally{i.__wbindgen_add_to_stack_pointer(16)}},e.parseEvents=function(n,e,t,r){try{const g=i.__wbindgen_add_to_stack_pointer(-16),d=k(n,i.__wbindgen_malloc),y=w;var o=p(e)?0:E(e,i.__wbindgen_malloc),_=w,c=p(t)?0:E(t,i.__wbindgen_malloc),u=w,b=p(r)?0:E(r,i.__wbindgen_malloc),l=w;i.parseEvents(g,d,y,o,_,c,u,b,l);var s=v()[g/4+0],f=v()[g/4+1];if(v()[g/4+2])throw a(f);return a(s)}finally{i.__wbindgen_add_to_stack_pointer(16)}},e.listGameEvents=function(n){try{const r=i.__wbindgen_add_to_stack_pointer(-16),o=k(n,i.__wbindgen_malloc),_=w;i.listGameEvents(r,o,_);var e=v()[r/4+0],t=v()[r/4+1];if(v()[r/4+2])throw a(t);return a(e)}finally{i.__wbindgen_add_to_stack_pointer(16)}},e.parseTicks=function(n,e,t,r){try{const s=i.__wbindgen_add_to_stack_pointer(-16),f=k(n,i.__wbindgen_malloc),g=w;var o=p(e)?0:E(e,i.__wbindgen_malloc),_=w,c=p(t)?0:function(n,e){const t=e(4*n.length);return j().set(n,t/4),w=n.length,t}(t,i.__wbindgen_malloc),u=w;i.parseTicks(s,f,g,o,_,c,u,p(r)?16777215:r?1:0);var b=v()[s/4+0],l=v()[s/4+1];if(v()[s/4+2])throw a(l);return a(b)}finally{i.__wbindgen_add_to_stack_pointer(16)}},e.parseGrenades=function(n){try{const r=i.__wbindgen_add_to_stack_pointer(-16),o=k(n,i.__wbindgen_malloc),_=w;i.parseGrenades(r,o,_);var e=v()[r/4+0],t=v()[r/4+1];if(v()[r/4+2])throw a(t);return a(e)}finally{i.__wbindgen_add_to_stack_pointer(16)}},e.parseHeader=function(n){try{const r=i.__wbindgen_add_to_stack_pointer(-16),o=k(n,i.__wbindgen_malloc),_=w;i.parseHeader(r,o,_);var e=v()[r/4+0],t=v()[r/4+1];if(v()[r/4+2])throw a(t);return a(e)}finally{i.__wbindgen_add_to_stack_pointer(16)}},r=Object.assign(T,{initSync:function(n){const e=x();return n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),R(new WebAssembly.Instance(n,e),n)}},e)}()}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return n[r](i,i.exports,t),i.loaded=!0,i.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){"use strict";var n=t(559),e=t.n(n);document.getElementById("uploadBtn").addEventListener("click",(()=>{const n=document.getElementById("demoFile").files[0];if(!n)return void alert("Please select a demo file!");const t=new FileReader;t.onload=function(n){const t=n.target.result,r=new(e());r.parse(t);const o=r.getParsedData();document.getElementById("output").textContent=JSON.stringify(o,null,2)},t.readAsArrayBuffer(n)}))}()}();