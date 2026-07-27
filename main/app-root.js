(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,f=globalThis,ie=f.trustedTypes,ae=ie?ie.emptyScript:``,oe=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!u(e,t),se={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[p(`elementProperties`)]=new Map,g[p(`finalized`)]=new Map,oe?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var ce=globalThis,le=e=>e,_=ce.trustedTypes,ue=_?_.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,v=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+v,pe=`<${fe}>`,y=document,b=()=>y.createComment(``),x=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,C=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,w=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),T=Symbol.for(`lit-noChange`),E=Symbol.for(`lit-nothing`),Se=new WeakMap,D=y.createTreeWalker(y,129);function Ce(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var we=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=S;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===S?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=C):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=C):o=ve:o===C?c[0]===`>`?(o=i??S,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?C:c[3]===`"`?be:ye):o===be||o===ye?o=C:o===_e||o===ve?o=S:(o=C,i=void 0);let d=o===C&&e[t+1].startsWith(`/>`)?` `:``;a+=o===S?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+v+d):n+v+(l===-2?t:d)}return[Ce(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=we(t,n);if(this.el=e.createElement(l,r),D.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=D.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(v),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Oe:r[1]===`?`?ke:r[1]===`@`?Ae:k}),i.removeAttribute(e)}else e.startsWith(v)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(v),t=e.length-1;if(t>0){i.textContent=_?_.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],b()),D.nextNode(),c.push({type:2,index:++a});i.append(e[t],b())}}}else if(i.nodeType===8)if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(v,e+1))!==-1;)c.push({type:7,index:a}),e+=v.length-1}a++}}static createElement(e,t){let n=y.createElement(`template`);return n.innerHTML=e,n}};function O(e,t,n=e,r){if(t===T)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=x(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=O(e,i._$AS(e,t.values),i,r)),t}var Ee=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??y).importNode(t,!0);D.currentNode=r;let i=D.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new De(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=D.nextNode(),a++)}return D.currentNode=y,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},De=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),x(e)?e===E||e==null||e===``?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&x(this._$AH)?this._$AA.nextSibling.data=e:this.T(y.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(Ce(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ee(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(b()),this.O(b()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=le(e).nextSibling;le(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=O(this,e,t,0),a=!x(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=O(this,r[n+o],t,o),s===T&&(s=this._$AH[o]),a||=!x(s)||s!==this._$AH[o],s===E?e=E:e!==E&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Oe=class extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},ke=class extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},Ae=class extends k{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??E)===T)return;let n=this._$AH,r=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},Me=ce.litHtmlPolyfillSupport;Me?.(Te,De),(ce.litHtmlVersions??=[]).push(`3.3.3`);var Ne=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new De(t.insertBefore(b(),e),e,void 0,n??{})}return i._$AI(e),i},Pe=globalThis,A=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ne(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};A._$litElement$=!0,A.finalized=!0,Pe.litElementHydrateSupport?.({LitElement:A});var Fe=Pe.litElementPolyfillSupport;Fe?.({LitElement:A}),(Pe.litElementVersions??=[]).push(`4.2.2`);var Ie=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Le={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Re=(e=Le,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function ze(e){return(t,n)=>typeof n==`object`?Re(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function j(e){return ze({...e,state:!0,attribute:!1})}function M(e){let t,n,r;return typeof e==`object`?(t=e.hashFunction,n=e.expiring,r=e.tags):t=e,(e,i,a)=>{if(a.value!=null)a.value=Ve(a.value,t,n,r);else if(a.get!=null)a.get=Ve(a.get,t,n,r);else throw`Only put a Memoize() decorator on a method or get accessor.`}}var Be=new Map;function Ve(e,t,n=0,r){let i=Symbol(`__memoized_map__`);return function(...a){let o;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let s=this[i];if(Array.isArray(r))for(let e of r)Be.has(e)?Be.get(e).push(s):Be.set(e,[s]);if(t||a.length>0||n>0){let r;r=t===!0?a.map(e=>e.toString()).join(`!`):t?t.apply(this,a):a[0];let i=`${r}__timestamp`,c=!1;if(n>0)if(!s.has(i))c=!0;else{let e=s.get(i);c=Date.now()-e>n}s.has(r)&&!c?o=s.get(r):(o=e.apply(this,a),s.set(r,o),n>0&&s.set(i,Date.now()))}else{let t=this;s.has(t)?o=s.get(t):(o=e.apply(this,a),s.set(t,o))}return o}}var N=class{parseValue(e){if(typeof e==`string`){let t=e.trim().toLowerCase();if(t===`false`||t===`0`||t===`no`)return!1;if(t===`true`||t===`1`||t===`yes`)return!0}return!!e}};N.shared=new N;var P=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=parseFloat(e);if(!Number.isNaN(t))return t}};P.shared=new P;var F=class{parseValue(e){return P.shared.parseValue(e)}};F.shared=new F;var I=class{parseValue(e){return this.parseCompactDate(e)||this.parseJSDate(e)||this.parseBracketDate(e)}parseCompactDate(e){if(typeof e!=`string`)return;let t=e.trim().match(/^(\d{4})(\d{2})(\d{2})(?:(\d{2})(\d{2})(\d{2}))?$/);if(!t)return;let[,n,r,i,a=`00`,o=`00`,s=`00`]=t,c=new Date(`${n}-${r}-${i}T${a}:${o}:${s}`);return Number.isNaN(c.getTime())?void 0:c}parseBracketDate(e){if(typeof e!=`string`)return;let t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!=`string`)return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(` `,`T`));let n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}};I.shared=new I;var L=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=e.split(`:`),n;return n=t.length===1?this.parseNumberFormat(t[0]):this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1,n=e.map((n,r)=>{let i=parseFloat(n);if(Number.isNaN(i))return t=!0,0;let a=60**(e.length-1-r);return i*Math.floor(a)}).reduce((e,t)=>e+t,0);return t?void 0:n}};L.shared=new L;var He=class{parseValue(e){if(typeof e==`string`)return e}};He.shared=new He;var Ue=class{constructor(e,t){this.separators=[`;`,`,`],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){let t=String(e),n=[];for(let e of this.separators)if(n=t.split(e),n.length>1)break;return this.parseListValues(n)}parseListValues(e){let t=e.map(e=>e.trim()).map(e=>this.parser.parseValue(e)),n=[];return t.forEach(e=>{e!==void 0&&n.push(e)}),n}},We=class{parseValue(e){if(typeof e==`string`)return e}};We.shared=new We;var R=class{parseValue(e){return String(e)}};R.shared=new R;function z(e,t,...n){for(let r of n){let n=e[r];if(n!=null)return t(n)}}function B(e,t,...n){return z(e,e=>t(e),...n)}var V=class{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;let e=P.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return B(this.rawValue,e=>F.shared.parseValue(e),`size`)}get title(){return this.rawValue.title}get length(){return B(this.rawValue,e=>L.shared.parseValue(e),`length`)}get height(){return B(this.rawValue,e=>P.shared.parseValue(e),`height`)}get width(){return B(this.rawValue,e=>P.shared.parseValue(e),`width`)}get track(){return B(this.rawValue,e=>P.shared.parseValue(e),`track`)}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}get bitrate(){return B(this.rawValue,e=>P.shared.parseValue(e),`bitrate`)}get private(){return B(this.rawValue,e=>N.shared.parseValue(e),`private`)}constructor(e={}){this.rawValue=e}};e([M()],V.prototype,`mtime`,null),e([M()],V.prototype,`size`,null),e([M()],V.prototype,`length`,null),e([M()],V.prototype,`height`,null),e([M()],V.prototype,`width`,null),e([M()],V.prototype,`track`,null),e([M()],V.prototype,`bitrate`,null),e([M()],V.prototype,`private`,null);var H=class{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){let e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(e=>{let n=this.parser.parseValue(e);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}};e([M()],H.prototype,`values`,null),e([M()],H.prototype,`value`,null);var U=class extends H{constructor(e){super(N.shared,e)}},W=class extends H{constructor(e){super(I.shared,e)}},G=class extends H{constructor(e){super(L.shared,e)}},K=class extends H{constructor(e){super(P.shared,e)}},q=class extends H{constructor(e){super(R.shared,e)}},J=class{constructor(e){this.allowed=e}parseValue(e){return typeof e==`string`&&this.allowed.includes(e)?e:void 0}},Y=class extends H{constructor(e,t){super(t,e)}},Ge=new J([`rl`,`lr`]),Ke=class extends Y{constructor(e){super(e,Ge)}},qe=class extends H{constructor(e){super(F.shared,e)}},Je=new J([`account`,`audio`,`collection`,`data`,`etree`,`image`,`movies`,`search`,`software`,`texts`,`web`]),Ye=class extends Y{constructor(e){super(e,Je)}},Xe=class extends H{constructor(e,t){super(t,e)}},Ze=class extends Xe{constructor(e){let t=new Ue(R.shared);super(e,t)}},Qe=class extends Xe{constructor(e){let t=new Ue(P.shared);super(e,t)}},$e=class{parseValue(e){if(typeof e!=`string`)return;let t=e.match(/^\s*(\d+(?:\.\d+)?)\s*[:/x]\s*(\d+(?:\.\d+)?)\s*$/i);if(!t)return;let n=parseFloat(t[1]),r=parseFloat(t[2]);if(r)return{width:n,height:r,decimal:n/r}}};$e.shared=new $e;var et=class extends H{constructor(e){super($e.shared,e)}},X=class{parseValue(e){let t=String(e).trim().match(/^([+-]?)(\d{1,2}):?(\d{2})$/);if(!t)return;let n=t[1]===`-`?-1:1,r=parseInt(t[2],10),i=parseInt(t[3],10);return{hours:n*r,minutes:i,totalMinutes:n*(r*60+i)}}};X.shared=new X;var tt=class extends H{constructor(e){super(X.shared,e)}},nt=class{parseValue(e){if(typeof e!=`string`)return;let t=e.match(/Channel\s+(\d+)(?:\s*\(\s*([\d.]+)\s*MHz\s*\))?/i);if(t)return{channel:parseInt(t[1],10),frequencyMhz:t[2]?parseFloat(t[2]):void 0}}};nt.shared=new nt;var rt=class extends H{constructor(e){super(nt.shared,e)}},it=new J([`true`,`none`,`frozen`]),at=new J([`sound`,`silent`]),ot=new J([`color`,`b&w`]),Z=class{get identifier(){return this.rawMetadata.identifier}get access_restricted_item(){return this.field(U,`access-restricted-item`)}get addeddate(){return this.field(W,`addeddate`)}get aspect_ratio(){return this.field(et,`aspect_ratio`)}get audio_codec(){return this.field(q,`audio_codec`)}get audio_sample_rate(){return this.field(K,`audio_sample_rate`)}get avg_rating(){return this.field(K,`avg_rating`)}get backup_location(){return this.field(q,`backup_location`)}get ccnum(){return this.field(q,`ccnum`)}get closed_captioning(){return this.field(U,`closed_captioning`)}get collection(){return this.field(q,`collection`)}get collections_raw(){return this.field(q,`collections_raw`)}get collection_size(){return this.field(qe,`collection_size`)}get color(){return z(this.rawMetadata,e=>new Y(e,ot),`color`)}get contact(){return this.field(q,`contact`)}get contributor(){return this.field(q,`contributor`)}get coverage(){return this.field(q,`coverage`)}get creator(){return this.field(q,`creator`)}get creator_alt_script(){return this.field(q,`creator-alt-script`)}get credits(){return this.field(q,`credits`)}get collection_layout(){return this.field(q,`collection_layout`)}get date(){return this.field(W,`date`)}get description(){return this.field(q,`description`)}get downloads(){return this.field(K,`downloads`)}get duration(){return this.field(G,`duration`)}get external_identifier(){return this.field(q,`external-identifier`)}get external_link(){return this.field(q,`external-link`)}get files_count(){return this.field(K,`files_count`)}get frames_per_second(){return this.field(K,`frames_per_second`)}get identifier_access(){return this.field(q,`identifier-access`)}get imagecount(){return this.field(K,`imagecount`)}get indexdate(){return this.field(W,`indexdate`)}get isbn(){return this.field(q,`isbn`)}get issue(){return this.field(q,`issue`)}get item_count(){return this.field(K,`item_count`)}get item_size(){return this.field(qe,`item_size`)}get language(){return this.field(q,`language`)}get length(){return this.field(G,`length`)}get licenseurl(){return this.field(q,`licenseurl`)}get lineage(){return this.field(q,`lineage`)}get month(){return this.field(K,`month`)}get mediatype(){return this.field(Ye,`mediatype`)}get mpeg_program(){return this.field(K,`mpeg_program`)}get next_item(){return this.field(q,`next_item`)}get noindex(){return this.field(U,`noindex`)}get notes(){return this.field(q,`notes`)}get num_favorites(){return this.field(K,`num_favorites`)}get num_reviews(){return this.field(K,`num_reviews`)}get openlibrary_edition(){return this.field(q,`openlibrary_edition`)}get openlibrary_work(){return this.field(q,`openlibrary_work`)}get page_progression(){return this.field(Ke,`page_progression`)}get paginated(){return this.field(U,`paginated`)}get partner(){return this.field(q,`partner`)}get post_text(){return this.field(q,`post_text`)}get ppi(){return this.field(K,`ppi`)}get previous_item(){return this.field(q,`previous_item`)}get program(){return this.field(q,`program`)}get publicdate(){return this.field(W,`publicdate`)}get publisher(){return this.field(q,`publisher`)}get reviewdate(){return this.field(W,`reviewdate`)}get reviews_allowed(){return z(this.rawMetadata,e=>new Y(e,it),`reviews-allowed`)}get rights(){return this.field(q,`rights`)}get rights_holder(){return this.field(q,`rights-holder`,`rights_holder`)}get runtime(){return this.field(G,`runtime`)}get scandate(){return this.field(W,`scandate`)}get scanner(){return this.field(q,`scanner`)}get scanningcenter(){return this.field(q,`scanningcenter`)}get segments(){return this.field(q,`segments`)}get shotlist(){return this.field(q,`shotlist`)}get sound(){return z(this.rawMetadata,e=>new Y(e,at),`sound`)}get source(){return this.field(q,`source`)}get source_pixel_height(){return this.field(K,`source_pixel_height`)}get source_pixel_width(){return this.field(K,`source_pixel_width`)}get sponsor(){return this.field(q,`sponsor`)}get start_localtime(){return this.field(W,`start_localtime`)}get start_time(){return this.field(W,`start_time`)}get station_name(){return this.field(q,`station_name`)}get stop_time(){return this.field(W,`stop_time`)}get subject(){return this.field(Ze,`subject`)}get taper(){return this.field(q,`taper`)}get thumbs(){return this.field(Qe,`thumbs`)}get times(){return this.field(Qe,`times`)}get title(){return this.field(q,`title`)}get title_alt_script(){return this.field(q,`title-alt-script`)}get transferer(){return this.field(q,`transferer`)}get track(){return this.field(K,`track`)}get tuner(){return this.field(rt,`tuner`)}get type(){return this.field(q,`type`)}get uploader(){return this.field(q,`uploader`)}get utc_offset(){return this.field(tt,`utc_offset`)}get venue(){return this.field(q,`venue`)}get video_codec(){return this.field(q,`video_codec`)}get volume(){return this.field(q,`volume`)}get week(){return this.field(K,`week`)}get year(){return this.field(K,`year`)}field(e,...t){return z(this.rawMetadata,t=>new e(t),...t)}constructor(e={}){this.rawMetadata=e}};e([M()],Z.prototype,`access_restricted_item`,null),e([M()],Z.prototype,`addeddate`,null),e([M()],Z.prototype,`aspect_ratio`,null),e([M()],Z.prototype,`audio_codec`,null),e([M()],Z.prototype,`audio_sample_rate`,null),e([M()],Z.prototype,`avg_rating`,null),e([M()],Z.prototype,`backup_location`,null),e([M()],Z.prototype,`ccnum`,null),e([M()],Z.prototype,`closed_captioning`,null),e([M()],Z.prototype,`collection`,null),e([M()],Z.prototype,`collections_raw`,null),e([M()],Z.prototype,`collection_size`,null),e([M()],Z.prototype,`color`,null),e([M()],Z.prototype,`contact`,null),e([M()],Z.prototype,`contributor`,null),e([M()],Z.prototype,`coverage`,null),e([M()],Z.prototype,`creator`,null),e([M()],Z.prototype,`creator_alt_script`,null),e([M()],Z.prototype,`credits`,null),e([M()],Z.prototype,`collection_layout`,null),e([M()],Z.prototype,`date`,null),e([M()],Z.prototype,`description`,null),e([M()],Z.prototype,`downloads`,null),e([M()],Z.prototype,`duration`,null),e([M()],Z.prototype,`external_identifier`,null),e([M()],Z.prototype,`external_link`,null),e([M()],Z.prototype,`files_count`,null),e([M()],Z.prototype,`frames_per_second`,null),e([M()],Z.prototype,`identifier_access`,null),e([M()],Z.prototype,`imagecount`,null),e([M()],Z.prototype,`indexdate`,null),e([M()],Z.prototype,`isbn`,null),e([M()],Z.prototype,`issue`,null),e([M()],Z.prototype,`item_count`,null),e([M()],Z.prototype,`item_size`,null),e([M()],Z.prototype,`language`,null),e([M()],Z.prototype,`length`,null),e([M()],Z.prototype,`licenseurl`,null),e([M()],Z.prototype,`lineage`,null),e([M()],Z.prototype,`month`,null),e([M()],Z.prototype,`mediatype`,null),e([M()],Z.prototype,`mpeg_program`,null),e([M()],Z.prototype,`next_item`,null),e([M()],Z.prototype,`noindex`,null),e([M()],Z.prototype,`notes`,null),e([M()],Z.prototype,`num_favorites`,null),e([M()],Z.prototype,`num_reviews`,null),e([M()],Z.prototype,`openlibrary_edition`,null),e([M()],Z.prototype,`openlibrary_work`,null),e([M()],Z.prototype,`page_progression`,null),e([M()],Z.prototype,`paginated`,null),e([M()],Z.prototype,`partner`,null),e([M()],Z.prototype,`post_text`,null),e([M()],Z.prototype,`ppi`,null),e([M()],Z.prototype,`previous_item`,null),e([M()],Z.prototype,`program`,null),e([M()],Z.prototype,`publicdate`,null),e([M()],Z.prototype,`publisher`,null),e([M()],Z.prototype,`reviewdate`,null),e([M()],Z.prototype,`reviews_allowed`,null),e([M()],Z.prototype,`rights`,null),e([M()],Z.prototype,`rights_holder`,null),e([M()],Z.prototype,`runtime`,null),e([M()],Z.prototype,`scandate`,null),e([M()],Z.prototype,`scanner`,null),e([M()],Z.prototype,`scanningcenter`,null),e([M()],Z.prototype,`segments`,null),e([M()],Z.prototype,`shotlist`,null),e([M()],Z.prototype,`sound`,null),e([M()],Z.prototype,`source`,null),e([M()],Z.prototype,`source_pixel_height`,null),e([M()],Z.prototype,`source_pixel_width`,null),e([M()],Z.prototype,`sponsor`,null),e([M()],Z.prototype,`start_localtime`,null),e([M()],Z.prototype,`start_time`,null),e([M()],Z.prototype,`station_name`,null),e([M()],Z.prototype,`stop_time`,null),e([M()],Z.prototype,`subject`,null),e([M()],Z.prototype,`taper`,null),e([M()],Z.prototype,`thumbs`,null),e([M()],Z.prototype,`times`,null),e([M()],Z.prototype,`title`,null),e([M()],Z.prototype,`title_alt_script`,null),e([M()],Z.prototype,`transferer`,null),e([M()],Z.prototype,`track`,null),e([M()],Z.prototype,`tuner`,null),e([M()],Z.prototype,`type`,null),e([M()],Z.prototype,`uploader`,null),e([M()],Z.prototype,`utc_offset`,null),e([M()],Z.prototype,`venue`,null),e([M()],Z.prototype,`video_codec`,null),e([M()],Z.prototype,`volume`,null),e([M()],Z.prototype,`week`,null),e([M()],Z.prototype,`year`,null);var st=class{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return B(this.rawValue,e=>I.shared.parseValue(e),`reviewdate`)}get createdate(){return B(this.rawValue,e=>I.shared.parseValue(e),`createdate`)}get stars(){return B(this.rawValue,e=>P.shared.parseValue(e),`stars`)}constructor(e={}){this.rawValue=e}};e([M()],st.prototype,`reviewdate`,null),e([M()],st.prototype,`createdate`,null),e([M()],st.prototype,`stars`,null);var ct=[{label:`title`,get:e=>e.title},{label:`mediatype`,get:e=>e.mediatype},{label:`page_progression`,get:e=>e.page_progression},{label:`creator`,get:e=>e.creator},{label:`collection`,get:e=>e.collection},{label:`subject`,get:e=>e.subject},{label:`description`,get:e=>e.description},{label:`date`,get:e=>e.date},{label:`addeddate`,get:e=>e.addeddate},{label:`publicdate`,get:e=>e.publicdate},{label:`language`,get:e=>e.language},{label:`duration`,get:e=>e.duration},{label:`runtime`,get:e=>e.runtime},{label:`downloads`,get:e=>e.downloads},{label:`item_size`,get:e=>e.item_size},{label:`files_count`,get:e=>e.files_count},{label:`venue`,get:e=>e.venue},{label:`taper`,get:e=>e.taper},{label:`source`,get:e=>e.source},{label:`lineage`,get:e=>e.lineage},{label:`station_name`,get:e=>e.station_name},{label:`video_codec`,get:e=>e.video_codec},{label:`closed_captioning`,get:e=>e.closed_captioning},{label:`aspect_ratio`,get:e=>e.aspect_ratio},{label:`utc_offset`,get:e=>e.utc_offset},{label:`tuner`,get:e=>e.tuner},{label:`scandate`,get:e=>e.scandate},{label:`access_restricted_item`,get:e=>e.access_restricted_item},{label:`times`,get:e=>e.times},{label:`thumbs`,get:e=>e.thumbs}],lt=[`gd73-06-10.sbd.hollister.174.sbeok.shnf`,`nasa`,`goody`,`eventsounds_pack`,`womeningovernmen0000jame`,`KGO_20101106_063500_Nightline`];function Q(e){return e==null?`—`:e instanceof Date?e.toISOString():Array.isArray(e)?e.length?e.map(Q).join(`, `):`—`:typeof e==`object`?JSON.stringify(e):String(e)}var $=class extends A{constructor(){super(...arguments),this.identifier=lt[0],this.loading=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){let e=this.identifier.trim();if(!e){this.error=`Enter an archive.org identifier.`;return}this.loading=!0,this.error=void 0;try{let t=await fetch(`https://archive.org/metadata/${encodeURIComponent(e)}`);if(!t.ok)throw Error(`Request failed (${t.status})`);let n=await t.json();if(!n.metadata)throw Error(`No item found for identifier “${e}”.`);this.metadata=new Z(n.metadata),this.fileCount=n.files?.length}catch(e){this.metadata=void 0,this.fileCount=void 0,this.error=e instanceof Error?e.message:`Failed to load item.`}finally{this.loading=!1}}parseJson(){let e=this.shadowRoot?.querySelector(`textarea`)?.value??``;if(!e.trim()){this.error=`Paste some metadata JSON first.`;return}try{let t=JSON.parse(e),n=t.metadata??t;this.metadata=new Z(n),this.fileCount=void 0,this.error=void 0}catch{this.error=`Could not parse that as JSON.`}}render(){return w`
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
        ${lt.map(e=>w`<button
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

      ${this.error?w`<p class="error" role="alert">${this.error}</p>`:E}
      ${this.metadata?this.renderResult(this.metadata):E}
    `}renderResult(e){let{identifier:t}=e;return w`
      <h2>
        ${t?w`<a
              href="https://archive.org/details/${t}"
              target="_blank"
              rel="noopener"
              >${t}</a
            >`:`Parsed metadata`}
      </h2>
      ${this.fileCount===void 0?E:w`<p class="meta">${this.fileCount} files in response</p>`}

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
          ${ct.map(t=>{let n=t.get(e);return n?w`
              <tr>
                <td><code>${t.label}</code></td>
                <td>${Q(n.value)}</td>
                <td>${Q(n.values)}</td>
                <td class="raw">${Q(n.rawValue)}</td>
              </tr>
            `:E})}
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
  `,e([j()],$.prototype,`identifier`,void 0),e([j()],$.prototype,`metadata`,void 0),e([j()],$.prototype,`fileCount`,void 0),e([j()],$.prototype,`loading`,void 0),e([j()],$.prototype,`error`,void 0),$=e([Ie(`app-root`)],$);