(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,f=globalThis,ie=f.trustedTypes,ae=ie?ie.emptyScript:``,oe=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!u(e,t),se={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[p(`elementProperties`)]=new Map,g[p(`finalized`)]=new Map,oe?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var ce=globalThis,le=e=>e,_=ce.trustedTypes,ue=_?_.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,v=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+v,pe=`<${fe}>`,y=document,b=()=>y.createComment(``),x=e=>e===null||typeof e!=`object`&&typeof e!=`function`,S=Array.isArray,me=e=>S(e)||typeof e?.[Symbol.iterator]==`function`,C=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ge=/>/g,T=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,E=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),D=Symbol.for(`lit-noChange`),O=Symbol.for(`lit-nothing`),be=new WeakMap,k=y.createTreeWalker(y,129);function xe(e,t){if(!S(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var Se=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=w;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===w?c[1]===`!--`?o=he:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=T):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=T):o=ge:o===T?c[0]===`>`?(o=i??w,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?T:c[3]===`"`?ve:_e):o===ve||o===_e?o=T:o===he||o===ge?o=w:(o=T,i=void 0);let d=o===T&&e[t+1].startsWith(`/>`)?` `:``;a+=o===w?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+v+d):n+v+(l===-2?t:d)}return[xe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},A=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Se(t,n);if(this.el=e.createElement(l,r),k.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=k.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(v),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?we:r[1]===`?`?Te:r[1]===`@`?Ee:N}),i.removeAttribute(e)}else e.startsWith(v)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(v),t=e.length-1;if(t>0){i.textContent=_?_.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],b()),k.nextNode(),c.push({type:2,index:++a});i.append(e[t],b())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(v,e+1))!==-1;)c.push({type:7,index:a}),e+=v.length-1}a++}}static createElement(e,t){let n=y.createElement(`template`);return n.innerHTML=e,n}};function j(e,t,n=e,r){if(t===D)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=x(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=j(e,i._$AS(e,t.values),i,r)),t}var Ce=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??y).importNode(t,!0);k.currentNode=r;let i=k.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new M(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new De(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=k.nextNode(),a++)}return k.currentNode=y,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},M=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=j(this,e,t),x(e)?e===O||e==null||e===``?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==D&&this._(e):e._$litType$===void 0?e.nodeType===void 0?me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=A.createElement(xe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ce(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new A(e)),t}k(t){S(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(b()),this.O(b()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=j(this,e,t,0),a=!x(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=j(this,r[n+o],t,o),s===D&&(s=this._$AH[o]),a||=!x(s)||s!==this._$AH[o],s===O?e=O:e!==O&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},we=class extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},Te=class extends N{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},Ee=class extends N{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=j(this,e,t,0)??O)===D)return;let n=this._$AH,r=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==O&&(n===O||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},De=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}},Oe=ce.litHtmlPolyfillSupport;Oe?.(A,M),(ce.litHtmlVersions??=[]).push(`3.3.3`);var ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new M(t.insertBefore(b(),e),e,void 0,n??{})}return i._$AI(e),i},P=globalThis,F=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};F._$litElement$=!0,F.finalized=!0,P.litElementHydrateSupport?.({LitElement:F});var Ae=P.litElementPolyfillSupport;Ae?.({LitElement:F}),(P.litElementVersions??=[]).push(`4.2.2`);var je=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Me={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Ne=(e=Me,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Pe(e){return(t,n)=>typeof n==`object`?Ne(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function I(e){return Pe({...e,state:!0,attribute:!1})}function L(e){let t,n,r;return typeof e==`object`?(t=e.hashFunction,n=e.expiring,r=e.tags):t=e,(e,i,a)=>{if(a.value!=null)a.value=Fe(a.value,t,n,r);else if(a.get!=null)a.get=Fe(a.get,t,n,r);else throw`Only put a Memoize() decorator on a method or get accessor.`}}var R=new Map;function Fe(e,t,n=0,r){let i=Symbol(`__memoized_map__`);return function(...a){let o;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let s=this[i];if(Array.isArray(r))for(let e of r)R.has(e)?R.get(e).push(s):R.set(e,[s]);if(t||a.length>0||n>0){let r;r=t===!0?a.map(e=>e.toString()).join(`!`):t?t.apply(this,a):a[0];let i=`${r}__timestamp`,c=!1;if(n>0)if(!s.has(i))c=!0;else{let e=s.get(i);c=Date.now()-e>n}s.has(r)&&!c?o=s.get(r):(o=e.apply(this,a),s.set(r,o),n>0&&s.set(i,Date.now()))}else{let t=this;s.has(t)?o=s.get(t):(o=e.apply(this,a),s.set(t,o))}return o}}var z=class{parseValue(e){if(typeof e==`string`){let t=e.trim().toLowerCase();if(t===`false`||t===`0`||t===`no`)return!1;if(t===`true`||t===`1`||t===`yes`)return!0}return!!e}};z.shared=new z;var B=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=parseFloat(e);if(!Number.isNaN(t))return t}};B.shared=new B;var V=class{parseValue(e){return B.shared.parseValue(e)}};V.shared=new V;var H=class{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!=`string`)return;let t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!=`string`)return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(` `,`T`));let n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}};H.shared=new H;var U=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=e.split(`:`),n;return n=t.length===1?this.parseNumberFormat(t[0]):this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1,n=e.map((n,r)=>{let i=parseFloat(n);if(Number.isNaN(i))return t=!0,0;let a=60**(e.length-1-r);return i*Math.floor(a)}).reduce((e,t)=>e+t,0);return t?void 0:n}};U.shared=new U;var Ie=class{parseValue(e){if(typeof e==`string`)return e}};Ie.shared=new Ie;var Le=class{constructor(e,t){this.separators=[`;`,`,`],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){let t=String(e),n=[];for(let e of this.separators)if(n=t.split(e),n.length>1)break;return this.parseListValues(n)}parseListValues(e){let t=e.map(e=>e.trim()).map(e=>this.parser.parseValue(e)),n=[];return t.forEach(e=>{e!==void 0&&n.push(e)}),n}},Re=class{parseValue(e){if(typeof e==`string`)return e}};Re.shared=new Re;var W=class{parseValue(e){return String(e)}};W.shared=new W;var G=class{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;let e=B.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size==null?void 0:V.shared.parseValue(this.rawValue.size)}get title(){return this.rawValue.title}get length(){return this.rawValue.length==null?void 0:U.shared.parseValue(this.rawValue.length)}get height(){return this.rawValue.height==null?void 0:B.shared.parseValue(this.rawValue.height)}get width(){return this.rawValue.width==null?void 0:B.shared.parseValue(this.rawValue.width)}get track(){return this.rawValue.track==null?void 0:B.shared.parseValue(this.rawValue.track)}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}};e([L()],G.prototype,`mtime`,null),e([L()],G.prototype,`size`,null),e([L()],G.prototype,`length`,null),e([L()],G.prototype,`height`,null),e([L()],G.prototype,`width`,null),e([L()],G.prototype,`track`,null);var K=class{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){let e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(e=>{let n=this.parser.parseValue(e);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}};e([L()],K.prototype,`values`,null),e([L()],K.prototype,`value`,null);var ze=class extends K{constructor(e){super(z.shared,e)}},q=class extends K{constructor(e){super(H.shared,e)}},J=class extends K{constructor(e){super(U.shared,e)}},Y=class extends K{constructor(e){super(B.shared,e)}},X=class extends K{constructor(e){super(W.shared,e)}},Be=class{constructor(e){this.allowed=e}parseValue(e){return typeof e==`string`&&this.allowed.includes(e)?e:void 0}},Ve=class extends K{constructor(e,t){super(t,e)}},He=new Be([`rl`,`lr`]),Ue=class extends Ve{constructor(e){super(e,He)}},We=class extends K{constructor(e){super(V.shared,e)}},Ge=new Be([`account`,`audio`,`collection`,`data`,`etree`,`image`,`movies`,`search`,`software`,`texts`,`web`]),Ke=class extends Ve{constructor(e){super(e,Ge)}},qe=class extends K{constructor(e,t){super(t,e)}},Je=class extends qe{constructor(e){let t=new Le(W.shared);super(e,t)}},Ye=new Be([`true`,`none`,`frozen`]),Z=class{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.field(q,`addeddate`)}get audio_codec(){return this.field(X,`audio_codec`)}get audio_sample_rate(){return this.field(Y,`audio_sample_rate`)}get avg_rating(){return this.field(Y,`avg_rating`)}get collection(){return this.field(X,`collection`)}get collections_raw(){return this.field(X,`collections_raw`)}get collection_size(){return this.field(We,`collection_size`)}get contact(){return this.field(X,`contact`)}get contributor(){return this.field(X,`contributor`)}get coverage(){return this.field(X,`coverage`)}get creator(){return this.field(X,`creator`)}get creator_alt_script(){return this.field(X,`creator-alt-script`)}get credits(){return this.field(X,`credits`)}get collection_layout(){return this.field(X,`collection_layout`)}get date(){return this.field(q,`date`)}get description(){return this.field(X,`description`)}get downloads(){return this.field(Y,`downloads`)}get duration(){return this.field(J,`duration`)}get external_identifier(){return this.field(X,`external-identifier`)}get external_link(){return this.field(X,`external-link`)}get files_count(){return this.field(Y,`files_count`)}get indexdate(){return this.field(q,`indexdate`)}get isbn(){return this.field(X,`isbn`)}get issue(){return this.field(X,`issue`)}get item_count(){return this.field(Y,`item_count`)}get item_size(){return this.field(We,`item_size`)}get language(){return this.field(X,`language`)}get length(){return this.field(J,`length`)}get licenseurl(){return this.field(X,`licenseurl`)}get lineage(){return this.field(X,`lineage`)}get month(){return this.field(Y,`month`)}get mediatype(){return this.field(Ke,`mediatype`)}get noindex(){return this.field(ze,`noindex`)}get notes(){return this.field(X,`notes`)}get num_favorites(){return this.field(Y,`num_favorites`)}get num_reviews(){return this.field(Y,`num_reviews`)}get openlibrary_edition(){return this.field(X,`openlibrary_edition`)}get openlibrary_work(){return this.field(X,`openlibrary_work`)}get page_progression(){return this.field(Ue,`page_progression`)}get paginated(){return this.field(ze,`paginated`)}get partner(){return this.field(X,`partner`)}get post_text(){return this.field(X,`post_text`)}get ppi(){return this.field(Y,`ppi`)}get publicdate(){return this.field(q,`publicdate`)}get publisher(){return this.field(X,`publisher`)}get reviewdate(){return this.field(q,`reviewdate`)}get reviews_allowed(){return this.fieldFrom(e=>new Ve(e,Ye),`reviews-allowed`)}get rights(){return this.field(X,`rights`)}get rights_holder(){return this.field(X,`rights-holder`,`rights_holder`)}get runtime(){return this.field(J,`runtime`)}get scanner(){return this.field(X,`scanner`)}get segments(){return this.field(X,`segments`)}get shotlist(){return this.field(X,`shotlist`)}get source(){return this.field(X,`source`)}get sponsor(){return this.field(X,`sponsor`)}get start_localtime(){return this.field(q,`start_localtime`)}get start_time(){return this.field(q,`start_time`)}get stop_time(){return this.field(q,`stop_time`)}get subject(){return this.field(Je,`subject`)}get taper(){return this.field(X,`taper`)}get title(){return this.field(X,`title`)}get title_alt_script(){return this.field(X,`title-alt-script`)}get transferer(){return this.field(X,`transferer`)}get track(){return this.field(Y,`track`)}get type(){return this.field(X,`type`)}get uploader(){return this.field(X,`uploader`)}get utc_offset(){return this.field(Y,`utc_offset`)}get venue(){return this.field(X,`venue`)}get volume(){return this.field(X,`volume`)}get week(){return this.field(Y,`week`)}get year(){return this.field(Y,`year`)}field(e,...t){return this.fieldFrom(t=>new e(t),...t)}fieldFrom(e,...t){for(let n of t){let t=this.rawMetadata[n];if(t!=null)return e(t)}}constructor(e={}){this.rawMetadata=e}};e([L()],Z.prototype,`addeddate`,null),e([L()],Z.prototype,`audio_codec`,null),e([L()],Z.prototype,`audio_sample_rate`,null),e([L()],Z.prototype,`avg_rating`,null),e([L()],Z.prototype,`collection`,null),e([L()],Z.prototype,`collections_raw`,null),e([L()],Z.prototype,`collection_size`,null),e([L()],Z.prototype,`contact`,null),e([L()],Z.prototype,`contributor`,null),e([L()],Z.prototype,`coverage`,null),e([L()],Z.prototype,`creator`,null),e([L()],Z.prototype,`creator_alt_script`,null),e([L()],Z.prototype,`credits`,null),e([L()],Z.prototype,`collection_layout`,null),e([L()],Z.prototype,`date`,null),e([L()],Z.prototype,`description`,null),e([L()],Z.prototype,`downloads`,null),e([L()],Z.prototype,`duration`,null),e([L()],Z.prototype,`external_identifier`,null),e([L()],Z.prototype,`external_link`,null),e([L()],Z.prototype,`files_count`,null),e([L()],Z.prototype,`indexdate`,null),e([L()],Z.prototype,`isbn`,null),e([L()],Z.prototype,`issue`,null),e([L()],Z.prototype,`item_count`,null),e([L()],Z.prototype,`item_size`,null),e([L()],Z.prototype,`language`,null),e([L()],Z.prototype,`length`,null),e([L()],Z.prototype,`licenseurl`,null),e([L()],Z.prototype,`lineage`,null),e([L()],Z.prototype,`month`,null),e([L()],Z.prototype,`mediatype`,null),e([L()],Z.prototype,`noindex`,null),e([L()],Z.prototype,`notes`,null),e([L()],Z.prototype,`num_favorites`,null),e([L()],Z.prototype,`num_reviews`,null),e([L()],Z.prototype,`openlibrary_edition`,null),e([L()],Z.prototype,`openlibrary_work`,null),e([L()],Z.prototype,`page_progression`,null),e([L()],Z.prototype,`paginated`,null),e([L()],Z.prototype,`partner`,null),e([L()],Z.prototype,`post_text`,null),e([L()],Z.prototype,`ppi`,null),e([L()],Z.prototype,`publicdate`,null),e([L()],Z.prototype,`publisher`,null),e([L()],Z.prototype,`reviewdate`,null),e([L()],Z.prototype,`reviews_allowed`,null),e([L()],Z.prototype,`rights`,null),e([L()],Z.prototype,`rights_holder`,null),e([L()],Z.prototype,`runtime`,null),e([L()],Z.prototype,`scanner`,null),e([L()],Z.prototype,`segments`,null),e([L()],Z.prototype,`shotlist`,null),e([L()],Z.prototype,`source`,null),e([L()],Z.prototype,`sponsor`,null),e([L()],Z.prototype,`start_localtime`,null),e([L()],Z.prototype,`start_time`,null),e([L()],Z.prototype,`stop_time`,null),e([L()],Z.prototype,`subject`,null),e([L()],Z.prototype,`taper`,null),e([L()],Z.prototype,`title`,null),e([L()],Z.prototype,`title_alt_script`,null),e([L()],Z.prototype,`transferer`,null),e([L()],Z.prototype,`track`,null),e([L()],Z.prototype,`type`,null),e([L()],Z.prototype,`uploader`,null),e([L()],Z.prototype,`utc_offset`,null),e([L()],Z.prototype,`venue`,null),e([L()],Z.prototype,`volume`,null),e([L()],Z.prototype,`week`,null),e([L()],Z.prototype,`year`,null);var Xe=class{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate==null?void 0:H.shared.parseValue(this.rawValue.reviewdate)}get createdate(){return this.rawValue.createdate==null?void 0:H.shared.parseValue(this.rawValue.createdate)}get stars(){return this.rawValue.stars==null?void 0:B.shared.parseValue(this.rawValue.stars)}constructor(e={}){this.rawValue=e}};e([L()],Xe.prototype,`reviewdate`,null),e([L()],Xe.prototype,`createdate`,null),e([L()],Xe.prototype,`stars`,null);var Ze=[{label:`title`,get:e=>e.title},{label:`mediatype`,get:e=>e.mediatype},{label:`page_progression`,get:e=>e.page_progression},{label:`creator`,get:e=>e.creator},{label:`collection`,get:e=>e.collection},{label:`subject`,get:e=>e.subject},{label:`description`,get:e=>e.description},{label:`date`,get:e=>e.date},{label:`addeddate`,get:e=>e.addeddate},{label:`publicdate`,get:e=>e.publicdate},{label:`language`,get:e=>e.language},{label:`duration`,get:e=>e.duration},{label:`runtime`,get:e=>e.runtime},{label:`downloads`,get:e=>e.downloads},{label:`item_size`,get:e=>e.item_size},{label:`files_count`,get:e=>e.files_count},{label:`venue`,get:e=>e.venue},{label:`taper`,get:e=>e.taper},{label:`source`,get:e=>e.source},{label:`lineage`,get:e=>e.lineage}],Qe=[`gd73-06-10.sbd.hollister.174.sbeok.shnf`,`nasa`,`goody`,`eventsounds_pack`,`womeningovernmen0000jame`];function Q(e){return e==null?`—`:e instanceof Date?e.toISOString():Array.isArray(e)?e.length?e.map(Q).join(`, `):`—`:typeof e==`object`?JSON.stringify(e):String(e)}var $=class extends F{constructor(){super(...arguments),this.identifier=Qe[0],this.loading=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){let e=this.identifier.trim();if(!e){this.error=`Enter an archive.org identifier.`;return}this.loading=!0,this.error=void 0;try{let t=await fetch(`https://archive.org/metadata/${encodeURIComponent(e)}`);if(!t.ok)throw Error(`Request failed (${t.status})`);let n=await t.json();if(!n.metadata)throw Error(`No item found for identifier “${e}”.`);this.metadata=new Z(n.metadata),this.fileCount=n.files?.length}catch(e){this.metadata=void 0,this.fileCount=void 0,this.error=e instanceof Error?e.message:`Failed to load item.`}finally{this.loading=!1}}parseJson(){let e=this.shadowRoot?.querySelector(`textarea`)?.value??``;if(!e.trim()){this.error=`Paste some metadata JSON first.`;return}try{let t=JSON.parse(e),n=t.metadata??t;this.metadata=new Z(n),this.fileCount=void 0,this.error=void 0}catch{this.error=`Could not parse that as JSON.`}}render(){return E`
      <h1>Item Metadata Demo</h1>
      <p>
        Models for
        <a href="https://archive.org" target="_blank" rel="noopener"
          >archive.org</a
        >
        item metadata. Load an item by identifier (or paste raw JSON) to see how
        each field is normalized from its raw API value into a native type.
      </p>

      <form class="controls" @submit=${this.onSubmit}>
        <label class="field">
          <span>archive.org identifier</span>
          <input
            type="text"
            .value=${this.identifier}
            @input=${this.onIdentifierInput}
            placeholder="e.g. nasa"
          />
        </label>
        <button type="submit" ?disabled=${this.loading}>
          ${this.loading?`Loading…`:`Load item`}
        </button>
      </form>

      <p class="examples">
        Try:
        ${Qe.map(e=>E`<button
              type="button"
              class="link"
              @click=${()=>this.useExample(e)}
            >
              ${e}
            </button>`)}
      </p>

      <details>
        <summary>…or paste raw metadata JSON</summary>
        <form class="json-form">
          <label class="field">
            <span class="sr-only">Metadata JSON</span>
            <textarea
              rows="6"
              placeholder='{"metadata": {"identifier": "foo", "addeddate": "2021-01-01", "downloads": "42"}}'
            ></textarea>
          </label>
          <button type="button" @click=${this.parseJson}>Parse JSON</button>
        </form>
      </details>

      ${this.error?E`<p class="error" role="alert">${this.error}</p>`:O}
      ${this.metadata?this.renderResult(this.metadata):O}
    `}renderResult(e){let{identifier:t}=e;return E`
      <h2>
        ${t?E`<a
              href="https://archive.org/details/${t}"
              target="_blank"
              rel="noopener"
              >${t}</a
            >`:`Parsed metadata`}
      </h2>
      ${this.fileCount===void 0?O:E`<p class="meta">${this.fileCount} files in response</p>`}

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th><code>.value</code></th>
            <th><code>.values</code></th>
            <th><code>.rawValue</code></th>
          </tr>
        </thead>
        <tbody>
          ${Ze.map(t=>{let n=t.get(e);return n?E`
              <tr>
                <td><code>${t.label}</code></td>
                <td>${Q(n.value)}</td>
                <td>${Q(n.values)}</td>
                <td class="raw">${Q(n.rawValue)}</td>
              </tr>
            `:O})}
        </tbody>
      </table>
    `}onIdentifierInput(e){this.identifier=e.currentTarget.value}onSubmit(e){e.preventDefault(),this.loadFromArchive()}useExample(e){this.identifier=e,this.loadFromArchive()}};$.styles=s`
    :host {
      display: block;
      max-width: 60rem;
      margin: 0 auto;
      padding: 1rem;
      color: #222;
      line-height: 1.4;
    }

    h1 {
      margin-bottom: 0.25rem;
    }

    .controls {
      display: flex;
      align-items: flex-end;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      flex: 1 1 18rem;
    }

    .field span {
      font-size: 0.8rem;
      font-weight: bold;
    }

    input,
    textarea {
      font: inherit;
      padding: 0.4rem 0.5rem;
      border: 1px solid #aaa;
      border-radius: 4px;
      width: 100%;
      box-sizing: border-box;
    }

    button {
      font: inherit;
      padding: 0.45rem 0.9rem;
      border: 1px solid #194880;
      background: #194880;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;
    }

    button[disabled] {
      opacity: 0.6;
      cursor: default;
    }

    button.link {
      background: none;
      border: none;
      color: #194880;
      text-decoration: underline;
      padding: 0;
      cursor: pointer;
    }

    .examples {
      font-size: 0.85rem;
      color: #555;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: baseline;
    }

    details {
      margin: 0.5rem 0 1rem;
    }

    .json-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.5rem;
      align-items: flex-start;
    }

    .error {
      color: #b00020;
      font-weight: bold;
    }

    .meta {
      color: #555;
      font-size: 0.85rem;
      margin-top: 0;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      font-size: 0.9rem;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 0.4rem 0.6rem;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: #f0f0f0;
    }

    td.raw {
      color: #555;
      font-family: monospace;
      word-break: break-word;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    }
  `,e([I()],$.prototype,`identifier`,void 0),e([I()],$.prototype,`metadata`,void 0),e([I()],$.prototype,`fileCount`,void 0),e([I()],$.prototype,`loading`,void 0),e([I()],$.prototype,`error`,void 0),$=e([je(`app-root`)],$);