/*! For license information please see dced4dfa38d0ad567fa2.worker.js.LICENSE.txt */
!function(){"use strict";var t={d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}};t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var e={};function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),u=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=_(u,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,u),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=c;var h={};function d(){}function y(){}function v(){}var p={};l(p,u,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&o.call(g,u)&&(p=g);var x=v.prototype=d.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function n(i,u,a,s){var l=f(t[i],t,u);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==r(h)&&o.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(h).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:L}}function L(){return{value:void 0,done:!0}}return y.prototype=v,l(x,"constructor",v),l(v,"constructor",y),y.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(F.prototype),l(F.prototype,a,(function(){return this})),t.AsyncIterator=F,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new F(c(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(x),l(x,s,"Generator"),l(x,u,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],u=!0,a=!1;try{for(r=r.call(t);!(u=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);u=!0);}catch(s){a=!0,o=s}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,e)||function(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e,r,n,o,i,u){try{var a=t[i](u),s=a.value}catch(l){return void r(l)}a.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,s,"next",t)}function s(t){u(i,n,o,a,s,"throw",t)}a(void 0)}))}}t.d(e,{init:function(){return Y},loadFrame:function(){return X},loadRandomFrame:function(){return H},search:function(){return K}});var s=function(){return s=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};function l(t){var e="function"===typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var r="function"===typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),u=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)u.push(n.value)}catch(a){o={error:a}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return u}function f(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}var h,d,y,v,p="KEYS",m="VALUES",g="",x=function(){function t(t,e){var r=t._tree,n=Array.from(r.keys());this.set=t,this._type=e,this._path=n.length>0?[{node:r,keys:n}]:[]}return t.prototype.next=function(){var t=this.dive();return this.backtrack(),t},t.prototype.dive=function(){if(0===this._path.length)return{done:!0,value:void 0};var t=w(this._path),e=t.node,r=t.keys;return w(r)===g?{done:!1,value:this.result()}:(this._path.push({node:e.get(w(r)),keys:Array.from(e.get(w(r)).keys())}),this.dive())},t.prototype.backtrack=function(){0!==this._path.length&&(w(this._path).keys.pop(),w(this._path).keys.length>0||(this._path.pop(),this.backtrack()))},t.prototype.key=function(){return this.set._prefix+this._path.map((function(t){var e=t.keys;return w(e)})).filter((function(t){return t!==g})).join("")},t.prototype.value=function(){return w(this._path).node.get(g)},t.prototype.result=function(){return this._type===m?this.value():this._type===p?this.key():[this.key(),this.value()]},t.prototype[Symbol.iterator]=function(){return this},t}(),w=function(t){return t[t.length-1]},F=function t(e,r,n,o,i,u,a,s){var c,f;try{t:for(var h=l(e.keys()),d=h.next();!d.done;d=h.next()){var y=d.value;if(y===g){var v=i[u-1];v<=n&&o.set(s,[e.get(y),v])}else{for(var p=0;p<y.length;p++){for(var m=y[p],x=u+a*p,w=x-a,F=i[x]=i[w]+1,_=0;_<a-1;_++){var b=m!==r[_],A=i[w+_]+ +b,E=i[w+_+1]+1,k=i[x+_]+1,L=i[x+_+1]=Math.min(A,E,k);L<F&&(F=L)}if(F>n)continue t}t(e.get(y),r,n,o,i,u+a*y.length,a,s+y)}}}catch(S){c={error:S}}finally{try{d&&!d.done&&(f=h.return)&&f.call(h)}finally{if(c)throw c.error}}},_=function(){function t(t,e){void 0===t&&(t=new Map),void 0===e&&(e=""),this._size=void 0,this._tree=t,this._prefix=e}return t.prototype.atPrefix=function(e){var r,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var o=c(b(this._tree,e.slice(this._prefix.length)),2),i=o[0],u=o[1];if(void 0===i){var a=c(O(u),2),s=a[0],f=a[1];try{for(var h=l(s.keys()),d=h.next();!d.done;d=h.next()){var y=d.value;if(y!==g&&y.startsWith(f)){var v=new Map;return v.set(y.slice(f.length),s.get(y)),new t(v,e)}}}catch(p){r={error:p}}finally{try{d&&!d.done&&(n=h.return)&&n.call(h)}finally{if(r)throw r.error}}}return new t(i,e)},t.prototype.clear=function(){this._size=void 0,this._tree.clear()},t.prototype.delete=function(t){return this._size=void 0,L(this._tree,t)},t.prototype.entries=function(){return new x(this,"ENTRIES")},t.prototype.forEach=function(t){var e,r;try{for(var n=l(this),o=n.next();!o.done;o=n.next()){var i=c(o.value,2);t(i[0],i[1],this)}}catch(u){e={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},t.prototype.fuzzyGet=function(t,e){return function(t,e,r){var n=new Map;if(void 0===e)return n;for(var o=e.length+1,i=new Uint8Array((o+r)*o),u=0;u<o;u++)i[u]=u;return F(t,e,r,n,i,o,o,""),n}(this._tree,t,e)},t.prototype.get=function(t){var e=A(this._tree,t);return void 0!==e?e.get(g):void 0},t.prototype.has=function(t){var e=A(this._tree,t);return void 0!==e&&e.has(g)},t.prototype.keys=function(){return new x(this,p)},t.prototype.set=function(t,e){if("string"!==typeof t)throw new Error("key must be a string");return this._size=void 0,E(this._tree,t).set(g,e),this},Object.defineProperty(t.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var t=this.entries();!t.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),t.prototype.update=function(t,e){if("string"!==typeof t)throw new Error("key must be a string");this._size=void 0;var r=E(this._tree,t);return r.set(g,e(r.get(g))),this},t.prototype.fetch=function(t,e){if("string"!==typeof t)throw new Error("key must be a string");this._size=void 0;var r=E(this._tree,t),n=r.get(g);return void 0===n&&r.set(g,n=e()),n},t.prototype.values=function(){return new x(this,m)},t.prototype[Symbol.iterator]=function(){return this.entries()},t.from=function(e){var r,n,o=new t;try{for(var i=l(e),u=i.next();!u.done;u=i.next()){var a=c(u.value,2),s=a[0],f=a[1];o.set(s,f)}}catch(h){r={error:h}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},t.fromObject=function(e){return t.from(Object.entries(e))},t}(),b=function t(e,r,n){var o,i;if(void 0===n&&(n=[]),0===r.length||null==e)return[e,n];try{for(var u=l(e.keys()),a=u.next();!a.done;a=u.next()){var s=a.value;if(s!==g&&r.startsWith(s))return n.push([e,s]),t(e.get(s),r.slice(s.length),n)}}catch(c){o={error:c}}finally{try{a&&!a.done&&(i=u.return)&&i.call(u)}finally{if(o)throw o.error}}return n.push([e,r]),t(void 0,"",n)},A=function t(e,r){var n,o;if(0===r.length||null==e)return e;try{for(var i=l(e.keys()),u=i.next();!u.done;u=i.next()){var a=u.value;if(a!==g&&r.startsWith(a))return t(e.get(a),r.slice(a.length))}}catch(s){n={error:s}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}},E=function t(e,r){var n,o,i,u;if(0===r.length||null==e)return e;try{for(var a=l(e.keys()),s=a.next();!s.done;s=a.next()){if((h=s.value)!==g&&r.startsWith(h))return t(e.get(h),r.slice(h.length))}}catch(p){n={error:p}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}try{for(var c=l(e.keys()),f=c.next();!f.done;f=c.next()){var h;if((h=f.value)!==g&&h.startsWith(r[0])){var d=k(r,h),y=new Map;return y.set(h.slice(d),e.get(h)),e.set(r.slice(0,d),y),e.delete(h),t(y,r.slice(d))}}}catch(m){i={error:m}}finally{try{f&&!f.done&&(u=c.return)&&u.call(c)}finally{if(i)throw i.error}}var v=new Map;return e.set(r,v),v},k=function(t,e){for(var r=Math.min(t.length,e.length),n=0;n<r;n++)if(t[n]!==e[n])return n;return r},L=function(t,e){var r=c(b(t,e),2),n=r[0],o=r[1];if(void 0!==n)if(n.delete(g),0===n.size)S(o);else if(1===n.size){var i=c(n.entries().next().value,2),u=i[0],a=i[1];z(o,u,a)}},S=function t(e){if(0!==e.length){var r=c(O(e),2),n=r[0],o=r[1];if(n.delete(o),0===n.size)t(e.slice(0,-1));else if(1===n.size){var i=c(n.entries().next().value,2),u=i[0],a=i[1];u!==g&&z(e.slice(0,-1),u,a)}}},z=function(t,e,r){if(0!==t.length){var n=c(O(t),2),o=n[0],i=n[1];o.set(i+e,r),o.delete(i)}},O=function(t){return t[t.length-1]},C="or",D=function(){function t(t){if(null==(null===t||void 0===t?void 0:t.fields))throw new Error('MiniSearch: option "fields" must be provided');this._options=s(s(s({},T),t),{searchOptions:s(s({},N),t.searchOptions||{})}),this._index=new _,this._documentCount=0,this._documentIds=new Map,this._fieldIds={},this._fieldLength=new Map,this._averageFieldLength=[],this._nextId=0,this._storedFields=new Map,this.addFields(this._options.fields)}return t.prototype.add=function(t){var e,r,n,o,i=this._options,u=i.extractField,a=i.tokenize,s=i.processTerm,c=i.fields,f=i.idField,h=u(t,f);if(null==h)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var d=this.addDocumentId(h);this.saveStoredFields(d,t);try{for(var y=l(c),v=y.next();!v.done;v=y.next()){var p=v.value,m=u(t,p);if(null!=m){var g=a(m.toString(),p),x=this._fieldIds[p];this.addFieldLength(d,x,this.documentCount-1,g.length);try{for(var w=(n=void 0,l(g)),F=w.next();!F.done;F=w.next()){var _=s(F.value,p);_&&this.addTerm(x,d,_)}}catch(b){n={error:b}}finally{try{F&&!F.done&&(o=w.return)&&o.call(w)}finally{if(n)throw n.error}}}}}catch(A){e={error:A}}finally{try{v&&!v.done&&(r=y.return)&&r.call(y)}finally{if(e)throw e.error}}},t.prototype.addAll=function(t){var e,r;try{for(var n=l(t),o=n.next();!o.done;o=n.next()){var i=o.value;this.add(i)}}catch(u){e={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},t.prototype.addAllAsync=function(t,e){var r=this;void 0===e&&(e={});var n=e.chunkSize,o=void 0===n?10:n,i={chunk:[],promise:Promise.resolve()},u=t.reduce((function(t,e,n){var i=t.chunk,u=t.promise;return i.push(e),(n+1)%o===0?{chunk:[],promise:u.then((function(){return new Promise((function(t){return setTimeout(t,0)}))})).then((function(){return r.addAll(i)}))}:{chunk:i,promise:u}}),i),a=u.chunk;return u.promise.then((function(){return r.addAll(a)}))},t.prototype.remove=function(t){var e,r,n,o,i,u,a=this._options,s=a.tokenize,f=a.processTerm,h=a.extractField,d=a.fields,y=a.idField,v=h(t,y);if(null==v)throw new Error('MiniSearch: document does not have ID field "'.concat(y,'"'));try{for(var p=l(this._documentIds),m=p.next();!m.done;m=p.next()){var g=c(m.value,2),x=g[0];if(v===g[1]){try{for(var w=(n=void 0,l(d)),F=w.next();!F.done;F=w.next()){var _=F.value,b=h(t,_);if(null!=b){var A=s(b.toString(),_),E=this._fieldIds[_];try{for(var k=(i=void 0,l(A)),L=k.next();!L.done;L=k.next()){var S=f(L.value,_);S&&this.removeTerm(E,x,S)}}catch(z){i={error:z}}finally{try{L&&!L.done&&(u=k.return)&&u.call(k)}finally{if(i)throw i.error}}this.removeFieldLength(x,E,this.documentCount,A.length)}}}catch(O){n={error:O}}finally{try{F&&!F.done&&(o=w.return)&&o.call(w)}finally{if(n)throw n.error}}return this._storedFields.delete(x),this._documentIds.delete(x),this._fieldLength.delete(x),void(this._documentCount-=1)}}}catch(C){e={error:C}}finally{try{m&&!m.done&&(r=p.return)&&r.call(p)}finally{if(e)throw e.error}}throw new Error("MiniSearch: cannot remove document with ID ".concat(v,": it is not in the index"))},t.prototype.removeAll=function(t){var e,r;if(t)try{for(var n=l(t),o=n.next();!o.done;o=n.next()){var i=o.value;this.remove(i)}}catch(u){e={error:u}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new _,this._documentCount=0,this._documentIds=new Map,this._fieldLength=new Map,this._averageFieldLength=[],this._storedFields=new Map,this._nextId=0}},t.prototype.search=function(t,e){var r,n;void 0===e&&(e={});var o=this.executeQuery(t,e),i=[];try{for(var u=l(o),a=u.next();!a.done;a=u.next()){var s=c(a.value,2),f=s[0],h=s[1],d=h.score,y=h.match,v=h.terms,p={id:this._documentIds.get(f),terms:P(v),score:d,match:y};Object.assign(p,this._storedFields.get(f)),(null==e.filter||e.filter(p))&&i.push(p)}}catch(m){r={error:m}}finally{try{a&&!a.done&&(n=u.return)&&n.call(u)}finally{if(r)throw r.error}}return i.sort((function(t,e){return t.score<e.score?1:-1})),i},t.prototype.autoSuggest=function(t,e){var r,n,o,i;void 0===e&&(e={}),e=s(s({},R),e);var u=new Map;try{for(var a=l(this.search(t,e)),f=a.next();!f.done;f=a.next()){var h=f.value,d=h.score,y=(F=h.terms).join(" ");null!=(x=u.get(y))?(x.score+=d,x.count+=1):u.set(y,{score:d,terms:F,count:1})}}catch(b){r={error:b}}finally{try{f&&!f.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}var v=[];try{for(var p=l(u),m=p.next();!m.done;m=p.next()){var g=c(m.value,2),x=g[0],w=g[1],F=(d=w.score,w.terms),_=w.count;v.push({suggestion:x,terms:F,score:d/_})}}catch(A){o={error:A}}finally{try{m&&!m.done&&(i=p.return)&&i.call(p)}finally{if(o)throw o.error}}return v.sort((function(t,e){return t.score<e.score?1:-1})),v},Object.defineProperty(t.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),t.loadJSON=function(e,r){if(null==r)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return t.loadJS(JSON.parse(e),r)},t.getDefault=function(t){if(T.hasOwnProperty(t))return I(T,t);throw new Error('MiniSearch: unknown option "'.concat(t,'"'))},t.loadJS=function(e,r){var n,o,i,u,a=e.index,s=e.documentCount,f=e.nextId,h=e.documentIds,d=e.fieldIds,y=e.fieldLength,v=e.averageFieldLength,p=e.storedFields;if(1!==e.serializationVersion)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var m=new t(r);m._documentCount=s,m._nextId=f,m._documentIds=W(h),m._fieldIds=d,m._fieldLength=W(y),m._averageFieldLength=v,m._storedFields=W(p),m._index=new _;try{for(var g=l(a),x=g.next();!x.done;x=g.next()){var w=c(x.value,2),F=w[0],b=w[1],A=new Map;try{for(var E=(i=void 0,l(Object.keys(b))),k=E.next();!k.done;k=E.next()){var L=k.value,S=b[L],z=S.df,O=S.ds;A.set(parseInt(L,10),{df:z,ds:W(O)})}}catch(C){i={error:C}}finally{try{k&&!k.done&&(u=E.return)&&u.call(E)}finally{if(i)throw i.error}}m._index.set(F,A)}}catch(D){n={error:D}}finally{try{x&&!x.done&&(o=g.return)&&o.call(g)}finally{if(n)throw n.error}}return m},t.prototype.executeQuery=function(t,e){var r=this;if(void 0===e&&(e={}),"string"===typeof t)return this.executeSearch(t,e);var n=t.queries.map((function(n){var o=s(s(s({},e),t),{queries:void 0});return r.executeQuery(n,o)}));return this.combineResults(n,t.combineWith)},t.prototype.executeSearch=function(t,e){var r=this;void 0===e&&(e={});var n=this._options,o=n.tokenize,i=n.processTerm,u=n.searchOptions,a=s(s({tokenize:o,processTerm:i},u),e),l=a.tokenize,c=a.processTerm,f=l(t).map((function(t){return c(t)})).filter((function(t){return!!t})).map(B(a)).map((function(t){return r.executeQuerySpec(t,a)}));return this.combineResults(f,a.combineWith)},t.prototype.executeQuerySpec=function(t,e){var r,n,o,i,u,a,f=s(s({},this._options.searchOptions),e),h=(f.fields||this._options.fields).reduce((function(t,e){var r;return s(s({},t),((r={})[e]=I(t,e)||1,r))}),f.boost||{}),d=f.boostDocument,y=f.weights,v=f.maxFuzzy,p=s(s({},N.weights),y),m=p.fuzzy,g=p.prefix,x=this.termResults(t.term,h,d,this._index.get(t.term));if(t.prefix&&(u=this._index.atPrefix(t.term)),t.fuzzy){var w=!0===t.fuzzy?.2:t.fuzzy,F=w<1?Math.min(v,Math.round(t.term.length*w)):w;a=this._index.fuzzyGet(t.term,F)}if(u)try{for(var _=l(u),b=_.next();!b.done;b=_.next()){var A=c(b.value,2),E=A[0],k=A[1];if(O=E.length-t.term.length){null===a||void 0===a||a.delete(E);var L=.3*O/E.length;this.termResults(E,h,d,k,x,g,L)}}}catch(D){r={error:D}}finally{try{b&&!b.done&&(n=_.return)&&n.call(_)}finally{if(r)throw r.error}}if(a)try{for(var S=l(a.keys()),z=S.next();!z.done;z=S.next()){E=z.value;var O,C=c(a.get(E),2);k=C[0];if(O=C[1]){L=O/E.length;this.termResults(E,h,d,k,x,m,L)}}}catch(j){o={error:j}}finally{try{z&&!z.done&&(i=S.return)&&i.call(S)}finally{if(o)throw o.error}}return x},t.prototype.combineResults=function(t,e){if(void 0===e&&(e=C),0===t.length)return new Map;var r=e.toLowerCase();return t.reduce(j[r])||new Map},t.prototype.toJSON=function(){var t,e,r,n,o=[];try{for(var i=l(this._index),u=i.next();!u.done;u=i.next()){var a=c(u.value,2),s=a[0],f=a[1],h={};try{for(var d=(r=void 0,l(f)),y=d.next();!y.done;y=d.next()){var v=c(y.value,2),p=v[0],m=v[1],g=m.df,x=m.ds;h[p]={df:g,ds:Object.fromEntries(x)}}}catch(w){r={error:w}}finally{try{y&&!y.done&&(n=d.return)&&n.call(d)}finally{if(r)throw r.error}}o.push([s,h])}}catch(F){t={error:F}}finally{try{u&&!u.done&&(e=i.return)&&e.call(i)}finally{if(t)throw t.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._averageFieldLength,storedFields:Object.fromEntries(this._storedFields),index:o,serializationVersion:1}},t.prototype.termResults=function(t,e,r,n,o,i,u){var a,s,f,h,d;if(void 0===o&&(o=new Map),void 0===i&&(i=1),void 0===u&&(u=0),null==n)return o;try{for(var y=l(Object.keys(e)),v=y.next();!v.done;v=y.next()){var p=v.value,m=e[p],g=this._fieldIds[p],x=n.get(g);if(null!=x)try{for(var w=(f=void 0,l(x.ds)),F=w.next();!F.done;F=w.next()){var _=c(F.value,2),b=_[0],A=_[1],E=r?r(this._documentIds.get(b),t):1;if(E){var k=this._fieldLength.get(b)[g]/this._averageFieldLength[g],L=i*E*M(A,x.df,this._documentCount,k,m,u),S=o.get(b);if(S){S.score+=L;var z=I(S.match,t);z?z.push(p):(S.match[t]=[p],S.terms.push(t))}else o.set(b,{score:L,match:(d={},d[t]=[p],d),terms:[t]})}}}catch(O){f={error:O}}finally{try{F&&!F.done&&(h=w.return)&&h.call(w)}finally{if(f)throw f.error}}}}catch(C){a={error:C}}finally{try{v&&!v.done&&(s=y.return)&&s.call(y)}finally{if(a)throw a.error}}return o},t.prototype.addTerm=function(t,e,r){var n=this._index.fetch(r,G),o=n.get(t);if(null==o)(o={df:1,ds:new Map}).ds.set(e,1),n.set(t,o);else{var i=o.ds.get(e);null==i&&(o.df+=1),o.ds.set(e,(i||0)+1)}},t.prototype.removeTerm=function(t,e,r){if(this._index.has(r)){var n=this._index.fetch(r,G),o=n.get(t);null==o||null==o.ds.get(e)?this.warnDocumentChanged(e,t,r):o.ds.get(e)<=1?o.df<=1?n.delete(t):(o.df-=1,o.ds.delete(e)):o.ds.set(e,o.ds.get(e)-1),0===this._index.get(r).size&&this._index.delete(r)}else this.warnDocumentChanged(e,t,r)},t.prototype.warnDocumentChanged=function(t,e,r){var n,o;if(null!=console&&null!=console.warn)try{for(var i=l(Object.keys(this._fieldIds)),u=i.next();!u.done;u=i.next()){var a=u.value;if(this._fieldIds[a]===e)return void console.warn("MiniSearch: document with ID ".concat(this._documentIds.get(t),' has changed before removal: term "').concat(r,'" was not present in field "').concat(a,'". Removing a document after it has changed can corrupt the index!'))}}catch(s){n={error:s}}finally{try{u&&!u.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}},t.prototype.addDocumentId=function(t){var e=this._nextId;return this._documentIds.set(e,t),this._documentCount+=1,this._nextId+=1,e},t.prototype.addFields=function(t){for(var e=0;e<t.length;e++)this._fieldIds[t[e]]=e},t.prototype.addFieldLength=function(t,e,r,n){var o=this._fieldLength.get(t);null==o&&this._fieldLength.set(t,o=[]),o[e]=n;var i=(this._averageFieldLength[e]||0)*r+n;this._averageFieldLength[e]=i/(r+1)},t.prototype.removeFieldLength=function(t,e,r,n){var o=this._averageFieldLength[e]*r-n;this._averageFieldLength[e]=o/(r-1)},t.prototype.saveStoredFields=function(t,e){var r,n,o=this._options,i=o.storeFields,u=o.extractField;if(null!=i&&0!==i.length){var a=this._storedFields.get(t);null==a&&this._storedFields.set(t,a={});try{for(var s=l(i),c=s.next();!c.done;c=s.next()){var f=c.value,h=u(e,f);void 0!==h&&(a[f]=h)}}catch(d){r={error:d}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}}},t}(),I=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0},j=((h={}).or=function(t,e){var r,n,o;try{for(var i=l(e.keys()),u=i.next();!u.done;u=i.next()){var a=u.value,s=t.get(a);if(null==s)t.set(a,e.get(a));else{var h=e.get(a),d=h.score,y=h.match,v=h.terms;s.score=1.5*(s.score+d),s.match=Object.assign(s.match,y),(o=s.terms).push.apply(o,f([],c(v),!1))}}}catch(p){r={error:p}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return t},h.and=function(t,e){var r,n,o=new Map;try{for(var i=l(e.keys()),u=i.next();!u.done;u=i.next()){var a=u.value,s=t.get(a);if(null!=s){var h=e.get(a),d=h.score,y=h.match,v=h.terms;o.set(a,{score:s.score+d,match:Object.assign(s.match,y),terms:f(f([],c(s.terms),!1),c(v),!1)})}}}catch(p){r={error:p}}finally{try{u&&!u.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},h.and_not=function(t,e){var r,n;try{for(var o=l(e.keys()),i=o.next();!i.done;i=o.next()){var u=i.value;t.delete(u)}}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return t},h),M=function(t,e,r,n,o,i){var u,a;return o/(1+.333*o*i)*(u=e,a=r,t*Math.log(a/u))/n},B=function(t){return function(e,r,n){return{term:e,fuzzy:"function"===typeof t.fuzzy?t.fuzzy(e,r,n):t.fuzzy||!1,prefix:"function"===typeof t.prefix?t.prefix(e,r,n):!0===t.prefix}}},P=function(t){return t.filter((function(t,e,r){return r.indexOf(t)===e}))},T={idField:"id",extractField:function(t,e){return t[e]},tokenize:function(t,e){return t.split(J)},processTerm:function(t,e){return t.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[]},N={combineWith:C,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375}},R={prefix:function(t,e,r){return e===r.length-1}},G=function(){return new Map},W=function(t){var e,r,n=new Map;try{for(var o=l(Object.keys(t)),i=o.next();!i.done;i=o.next()){var u=i.value;n.set(parseInt(u,10),t[u])}}catch(a){e={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return n},J=/[\n\r -#%-\*,-\/:;\?@\[-\]_\{\}\xA0\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/,Q="",U={},V=function(){if(d){if(""===Q.split(" ").filter((function(t){return t.length>=3})).join(" "))return t.g.self.postMessage(["setDidSearch",!1]),void t.g.self.postMessage(["setSearchResults",[]]);var e=d.search(Q).filter((function(t,e,r){return r.findIndex((function(e){return t.id===e.id}))===e}));t.g.self.postMessage(["setDidSearch",!0]),t.g.self.postMessage(["setSearchResults",e.slice(0,40)])}};function Y(){return q.apply(this,arguments)}function q(){return(q=a(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat("https://acrossoverepisode-assets2.storage.googleapis.com","/index.json")).then((function(t){return t.text()})).then((function(e){d=D.loadJSON(e,{fields:["text"],storeFields:["html","season","episode","stillPath"],searchOptions:{combineWith:"AND",prefix:!0}});var r=JSON.parse(e);y=r.documentIds,v=r.storedFields,U=Object.fromEntries(Object.entries(y||{}).map((function(t){var e=i(t,2),r=e[0],n=e[1],o=v[r];return["".concat(o.season,":").concat(o.episode,":").concat(n),r]}))),t.g.self.postMessage(["setReady",!0]),V()}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(t){return $.apply(this,arguments)}function $(){return($=a(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Q=e,V();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function H(){if(v&&y){var t=Object.keys(y),e=t[Math.floor(Math.random()*t.length)];if(v[e])return{id:y[e],episode:v[e].episode,html:v[e].html,season:v[e].season}}}function X(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(y&&v){var o="".concat(t,":").concat(e,":").concat(r),i=parseInt(U[o],10)+n+"";return{id:y[i],episode:v[i].episode,html:v[i].html,season:v[i].season}}}addEventListener("message",(function(t){var r,n=t.data,o=n.type,i=n.method,u=n.id,a=n.params;"RPC"===o&&i&&((r=e[i])?Promise.resolve().then((function(){return r.apply(e,a)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:u,result:t})})).catch((function(t){var e={message:t};t.stack&&(e.message=t.message,e.stack=t.stack,e.name=t.name),postMessage({type:"RPC",id:u,error:e})}))})),postMessage({type:"RPC",method:"ready"})}();
//# sourceMappingURL=dced4dfa38d0ad567fa2.worker.js.map