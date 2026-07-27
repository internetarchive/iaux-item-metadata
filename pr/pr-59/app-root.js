(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:re,getPrototypeOf:ie}=Object,d=globalThis,ae=d.trustedTypes,oe=ae?ae.emptyScript:``,se=d.reactiveElementPolyfillSupport,f=(e,t)=>e,p={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!u(e,t),le={attribute:!0,type:String,converter:p,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),d.litPropertyMetadata??=new WeakMap;var m=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(f(`elementProperties`)))return;let e=ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(f(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f(`properties`))){let e=this.properties,t=[...ne(e),...re(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?p:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?p:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};m.elementStyles=[],m.shadowRootOptions={mode:`open`},m[f(`elementProperties`)]=new Map,m[f(`finalized`)]=new Map,se?.({ReactiveElement:m}),(d.reactiveElementVersions??=[]).push(`2.1.2`);var ue=globalThis,de=e=>e,h=ue.trustedTypes,fe=h?h.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,pe=`$lit$`,g=`lit$${Math.random().toFixed(9).slice(2)}$`,me=`?`+g,he=`<${me}>`,_=document,v=()=>_.createComment(``),y=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ge=Array.isArray,_e=e=>ge(e)||typeof e?.[Symbol.iterator]==`function`,ve=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,be=/>/g,x=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),xe=/'/g,Se=/"/g,Ce=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),C=Symbol.for(`lit-noChange`),w=Symbol.for(`lit-nothing`),we=new WeakMap,T=_.createTreeWalker(_,129);function Te(e,t){if(!ge(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return fe===void 0?t:fe.createHTML(t)}var Ee=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=b;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===b?c[1]===`!--`?o=ye:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=x):(Ce.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=x):o=be:o===x?c[0]===`>`?(o=i??b,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?x:c[3]===`"`?Se:xe):o===Se||o===xe?o=x:o===ye||o===be?o=b:(o=x,i=void 0);let ee=o===x&&e[t+1].startsWith(`/>`)?` `:``;a+=o===b?n+he:l>=0?(r.push(s),n.slice(0,l)+pe+n.slice(l)+g+ee):n+g+(l===-2?t:ee)}return[Te(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},De=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ee(t,n);if(this.el=e.createElement(l,r),T.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=T.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(pe)){let t=u[o++],n=i.getAttribute(e).split(g),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:O}),i.removeAttribute(e)}else e.startsWith(g)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ce.test(i.tagName)){let e=i.textContent.split(g),t=e.length-1;if(t>0){i.textContent=h?h.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],v()),T.nextNode(),c.push({type:2,index:++a});i.append(e[t],v())}}}else if(i.nodeType===8)if(i.data===me)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(g,e+1))!==-1;)c.push({type:7,index:a}),e+=g.length-1}a++}}static createElement(e,t){let n=_.createElement(`template`);return n.innerHTML=e,n}};function E(e,t,n=e,r){if(t===C)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=y(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=E(e,i._$AS(e,t.values),i,r)),t}var Oe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??_).importNode(t,!0);T.currentNode=r;let i=T.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new D(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=T.nextNode(),a++)}return T.currentNode=_,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},D=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),y(e)?e===w||e==null||e===``?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==C&&this._(e):e._$litType$===void 0?e.nodeType===void 0?_e(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&y(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=De.createElement(Te(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Oe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new De(e)),t}k(t){ge(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(v()),this.O(v()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=de(e).nextSibling;de(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=E(this,e,t,0),a=!y(e)||e!==this._$AH&&e!==C,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=E(this,r[n+o],t,o),s===C&&(s=this._$AH[o]),a||=!y(s)||s!==this._$AH[o],s===w?e=w:e!==w&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},Ae=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},je=class extends O{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??w)===C)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},Ne=ue.litHtmlPolyfillSupport;Ne?.(De,D),(ue.litHtmlVersions??=[]).push(`3.3.3`);var Pe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new D(t.insertBefore(v(),e),e,void 0,n??{})}return i._$AI(e),i},Fe=globalThis,k=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};k._$litElement$=!0,k.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:k});var Ie=Fe.litElementPolyfillSupport;Ie?.({LitElement:k}),(Fe.litElementVersions??=[]).push(`4.2.2`);var Le=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Re={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:ce},ze=(e=Re,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Be(e){return(t,n)=>typeof n==`object`?ze(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function A(e){return Be({...e,state:!0,attribute:!1})}function j(e){let t,n,r;return typeof e==`object`?(t=e.hashFunction,n=e.expiring,r=e.tags):t=e,(e,i,a)=>{if(a.value!=null)a.value=He(a.value,t,n,r);else if(a.get!=null)a.get=He(a.get,t,n,r);else throw`Only put a Memoize() decorator on a method or get accessor.`}}var Ve=new Map;function He(e,t,n=0,r){let i=Symbol(`__memoized_map__`);return function(...a){let o;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let s=this[i];if(Array.isArray(r))for(let e of r)Ve.has(e)?Ve.get(e).push(s):Ve.set(e,[s]);if(t||a.length>0||n>0){let r;r=t===!0?a.map(e=>e.toString()).join(`!`):t?t.apply(this,a):a[0];let i=`${r}__timestamp`,c=!1;if(n>0)if(!s.has(i))c=!0;else{let e=s.get(i);c=Date.now()-e>n}s.has(r)&&!c?o=s.get(r):(o=e.apply(this,a),s.set(r,o),n>0&&s.set(i,Date.now()))}else{let t=this;s.has(t)?o=s.get(t):(o=e.apply(this,a),s.set(t,o))}return o}}var M=class{parseValue(e){if(typeof e==`string`){let t=e.trim().toLowerCase();if(t===`false`||t===`0`||t===`no`)return!1;if(t===`true`||t===`1`||t===`yes`)return!0}return!!e}};M.shared=new M;var N=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=parseFloat(e);if(!Number.isNaN(t))return t}};N.shared=new N;var P=class{parseValue(e){return N.shared.parseValue(e)}};P.shared=new P;var F=class{parseValue(e){return this.parseCompactDate(e)||this.parseJSDate(e)||this.parseBracketDate(e)}parseCompactDate(e){if(typeof e!=`string`)return;let t=e.trim().match(/^(\d{4})(\d{2})(\d{2})(?:(\d{2})(\d{2})(\d{2}))?$/);if(!t)return;let[,n,r,i,a=`00`,o=`00`,s=`00`]=t,c=new Date(`${n}-${r}-${i}T${a}:${o}:${s}`);return Number.isNaN(c.getTime())?void 0:c}parseBracketDate(e){if(typeof e!=`string`)return;let t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!=`string`)return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(` `,`T`));let n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}};F.shared=new F;var I=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=e.split(`:`),n;return n=t.length===1?this.parseNumberFormat(t[0]):this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1,n=e.map((n,r)=>{let i=parseFloat(n);if(Number.isNaN(i))return t=!0,0;let a=60**(e.length-1-r);return i*Math.floor(a)}).reduce((e,t)=>e+t,0);return t?void 0:n}};I.shared=new I;var Ue=class{parseValue(e){if(typeof e==`string`)return e}};Ue.shared=new Ue;var We=class{constructor(e,t){this.separators=[`;`,`,`],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){let t=String(e),n=[];for(let e of this.separators)if(n=t.split(e),n.length>1)break;return this.parseListValues(n)}parseListValues(e){let t=e.map(e=>e.trim()).map(e=>this.parser.parseValue(e)),n=[];return t.forEach(e=>{e!==void 0&&n.push(e)}),n}},Ge=class{parseValue(e){if(typeof e==`string`)return e}};Ge.shared=new Ge;var L=class{parseValue(e){return String(e)}};L.shared=new L;function R(e,t,...n){for(let r of n){let n=e[r];if(n!=null)return t(n)}}function z(e,t,...n){return R(e,e=>t(e),...n)}var B=class{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;let e=N.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return z(this.rawValue,e=>P.shared.parseValue(e),`size`)}get title(){return this.rawValue.title}get length(){return z(this.rawValue,e=>I.shared.parseValue(e),`length`)}get height(){return z(this.rawValue,e=>N.shared.parseValue(e),`height`)}get width(){return z(this.rawValue,e=>N.shared.parseValue(e),`width`)}get track(){return z(this.rawValue,e=>N.shared.parseValue(e),`track`)}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}get bitrate(){return z(this.rawValue,e=>N.shared.parseValue(e),`bitrate`)}get private(){return z(this.rawValue,e=>M.shared.parseValue(e),`private`)}constructor(e={}){this.rawValue=e}};e([j()],B.prototype,`mtime`,null),e([j()],B.prototype,`size`,null),e([j()],B.prototype,`length`,null),e([j()],B.prototype,`height`,null),e([j()],B.prototype,`width`,null),e([j()],B.prototype,`track`,null),e([j()],B.prototype,`bitrate`,null),e([j()],B.prototype,`private`,null);var V=class{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){let e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(e=>{let n=this.parser.parseValue(e);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}};e([j()],V.prototype,`values`,null),e([j()],V.prototype,`value`,null);var H=class extends V{constructor(e){super(M.shared,e)}},U=class extends V{constructor(e){super(F.shared,e)}},Ke=class extends V{constructor(e){super(I.shared,e)}},W=class extends V{constructor(e){super(N.shared,e)}},G=class extends V{constructor(e){super(L.shared,e)}},K=class{constructor(e){this.allowed=e}parseValue(e){return typeof e==`string`&&this.allowed.includes(e)?e:void 0}},q=class extends V{constructor(e,t){super(t,e)}},qe=new K([`rl`,`lr`]),Je=class extends q{constructor(e){super(e,qe)}},Ye=class extends V{constructor(e){super(P.shared,e)}},Xe=new K([`account`,`audio`,`collection`,`data`,`etree`,`image`,`movies`,`search`,`software`,`texts`,`web`]),Ze=class extends q{constructor(e){super(e,Xe)}},Qe=class extends V{constructor(e,t){super(t,e)}},$e=class extends Qe{constructor(e){let t=new We(L.shared);super(e,t)}},et=class extends Qe{constructor(e){let t=new We(N.shared);super(e,t)}},tt=class{parseValue(e){if(typeof e!=`string`)return;let t=e.match(/^\s*(\d+(?:\.\d+)?)\s*[:/x]\s*(\d+(?:\.\d+)?)\s*$/i);if(!t)return;let n=parseFloat(t[1]),r=parseFloat(t[2]);if(r)return{width:n,height:r,decimal:n/r}}};tt.shared=new tt;var nt=class extends V{constructor(e){super(tt.shared,e)}},J=class{parseValue(e){let t=String(e).trim().match(/^([+-]?)(\d{1,2}):?(\d{2})$/);if(!t)return;let n=t[1]===`-`?-1:1,r=parseInt(t[2],10),i=parseInt(t[3],10);return{hours:n*r,minutes:i,totalMinutes:n*(r*60+i)}}};J.shared=new J;var rt=class extends V{constructor(e){super(J.shared,e)}},it=class{parseValue(e){if(typeof e!=`string`)return;let t=e.match(/Channel\s+(\d+)(?:\s*\(\s*([\d.]+)\s*MHz\s*\))?/i);if(t)return{channel:parseInt(t[1],10),frequencyMhz:t[2]?parseFloat(t[2]):void 0}}};it.shared=new it;var at=class extends V{constructor(e){super(it.shared,e)}},ot=new K([`true`,`none`,`frozen`]),st=new K([`sound`,`silent`]),ct=new K([`color`,`b&w`]),Y=class{get identifier(){return this.rawMetadata.identifier}get access_restricted_item(){return this.field(H,`access-restricted-item`)}get addeddate(){return this.field(U,`addeddate`)}get aspect_ratio(){return this.field(nt,`aspect_ratio`)}get audio_codec(){return this.field(G,`audio_codec`)}get audio_sample_rate(){return this.field(W,`audio_sample_rate`)}get avg_rating(){return this.field(W,`avg_rating`)}get backup_location(){return this.field(G,`backup_location`)}get ccnum(){return this.field(G,`ccnum`)}get closed_captioning(){return this.field(H,`closed_captioning`)}get collection(){return this.field(G,`collection`)}get collections_raw(){return this.field(G,`collections_raw`)}get collection_size(){return this.field(Ye,`collection_size`)}get color(){return R(this.rawMetadata,e=>new q(e,ct),`color`)}get contact(){return this.field(G,`contact`)}get contributor(){return this.field(G,`contributor`)}get coverage(){return this.field(G,`coverage`)}get creator(){return this.field(G,`creator`)}get creator_alt_script(){return this.field(G,`creator-alt-script`)}get credits(){return this.field(G,`credits`)}get collection_layout(){return this.field(G,`collection_layout`)}get date(){return this.field(U,`date`)}get description(){return this.field(G,`description`)}get downloads(){return this.field(W,`downloads`)}get duration(){return this.field(Ke,`duration`)}get external_identifier(){return this.field(G,`external-identifier`)}get external_link(){return this.field(G,`external-link`)}get files_count(){return this.field(W,`files_count`)}get frames_per_second(){return this.field(W,`frames_per_second`)}get identifier_access(){return this.field(G,`identifier-access`)}get imagecount(){return this.field(W,`imagecount`)}get indexdate(){return this.field(U,`indexdate`)}get isbn(){return this.field(G,`isbn`)}get issue(){return this.field(G,`issue`)}get item_count(){return this.field(W,`item_count`)}get item_size(){return this.field(Ye,`item_size`)}get language(){return this.field(G,`language`)}get length(){return this.field(Ke,`length`)}get licenseurl(){return this.field(G,`licenseurl`)}get lineage(){return this.field(G,`lineage`)}get month(){return this.field(W,`month`)}get mediatype(){return this.field(Ze,`mediatype`)}get mpeg_program(){return this.field(W,`mpeg_program`)}get next_item(){return this.field(G,`next_item`)}get noindex(){return this.field(H,`noindex`)}get notes(){return this.field(G,`notes`)}get num_favorites(){return this.field(W,`num_favorites`)}get num_reviews(){return this.field(W,`num_reviews`)}get openlibrary_edition(){return this.field(G,`openlibrary_edition`)}get openlibrary_work(){return this.field(G,`openlibrary_work`)}get page_progression(){return this.field(Je,`page_progression`)}get paginated(){return this.field(H,`paginated`)}get partner(){return this.field(G,`partner`)}get post_text(){return this.field(G,`post_text`)}get ppi(){return this.field(W,`ppi`)}get previous_item(){return this.field(G,`previous_item`)}get program(){return this.field(G,`program`)}get publicdate(){return this.field(U,`publicdate`)}get publisher(){return this.field(G,`publisher`)}get reviewdate(){return this.field(U,`reviewdate`)}get reviews_allowed(){return R(this.rawMetadata,e=>new q(e,ot),`reviews-allowed`)}get rights(){return this.field(G,`rights`)}get rights_holder(){return this.field(G,`rights-holder`,`rights_holder`)}get runtime(){return this.field(Ke,`runtime`)}get scandate(){return this.field(U,`scandate`)}get scanner(){return this.field(G,`scanner`)}get scanningcenter(){return this.field(G,`scanningcenter`)}get segments(){return this.field(G,`segments`)}get shotlist(){return this.field(G,`shotlist`)}get sound(){return R(this.rawMetadata,e=>new q(e,st),`sound`)}get source(){return this.field(G,`source`)}get source_pixel_height(){return this.field(W,`source_pixel_height`)}get source_pixel_width(){return this.field(W,`source_pixel_width`)}get sponsor(){return this.field(G,`sponsor`)}get start_localtime(){return this.field(U,`start_localtime`)}get start_time(){return this.field(U,`start_time`)}get station_name(){return this.field(G,`station_name`)}get stop_time(){return this.field(U,`stop_time`)}get subject(){return this.field($e,`subject`)}get taper(){return this.field(G,`taper`)}get thumbs(){return this.field(et,`thumbs`)}get times(){return this.field(et,`times`)}get title(){return this.field(G,`title`)}get title_alt_script(){return this.field(G,`title-alt-script`)}get transferer(){return this.field(G,`transferer`)}get track(){return this.field(W,`track`)}get tuner(){return this.field(at,`tuner`)}get type(){return this.field(G,`type`)}get uploader(){return this.field(G,`uploader`)}get utc_offset(){return this.field(rt,`utc_offset`)}get venue(){return this.field(G,`venue`)}get video_codec(){return this.field(G,`video_codec`)}get volume(){return this.field(G,`volume`)}get week(){return this.field(W,`week`)}get year(){return this.field(W,`year`)}field(e,...t){return R(this.rawMetadata,t=>new e(t),...t)}constructor(e={}){this.rawMetadata=e}};e([j()],Y.prototype,`access_restricted_item`,null),e([j()],Y.prototype,`addeddate`,null),e([j()],Y.prototype,`aspect_ratio`,null),e([j()],Y.prototype,`audio_codec`,null),e([j()],Y.prototype,`audio_sample_rate`,null),e([j()],Y.prototype,`avg_rating`,null),e([j()],Y.prototype,`backup_location`,null),e([j()],Y.prototype,`ccnum`,null),e([j()],Y.prototype,`closed_captioning`,null),e([j()],Y.prototype,`collection`,null),e([j()],Y.prototype,`collections_raw`,null),e([j()],Y.prototype,`collection_size`,null),e([j()],Y.prototype,`color`,null),e([j()],Y.prototype,`contact`,null),e([j()],Y.prototype,`contributor`,null),e([j()],Y.prototype,`coverage`,null),e([j()],Y.prototype,`creator`,null),e([j()],Y.prototype,`creator_alt_script`,null),e([j()],Y.prototype,`credits`,null),e([j()],Y.prototype,`collection_layout`,null),e([j()],Y.prototype,`date`,null),e([j()],Y.prototype,`description`,null),e([j()],Y.prototype,`downloads`,null),e([j()],Y.prototype,`duration`,null),e([j()],Y.prototype,`external_identifier`,null),e([j()],Y.prototype,`external_link`,null),e([j()],Y.prototype,`files_count`,null),e([j()],Y.prototype,`frames_per_second`,null),e([j()],Y.prototype,`identifier_access`,null),e([j()],Y.prototype,`imagecount`,null),e([j()],Y.prototype,`indexdate`,null),e([j()],Y.prototype,`isbn`,null),e([j()],Y.prototype,`issue`,null),e([j()],Y.prototype,`item_count`,null),e([j()],Y.prototype,`item_size`,null),e([j()],Y.prototype,`language`,null),e([j()],Y.prototype,`length`,null),e([j()],Y.prototype,`licenseurl`,null),e([j()],Y.prototype,`lineage`,null),e([j()],Y.prototype,`month`,null),e([j()],Y.prototype,`mediatype`,null),e([j()],Y.prototype,`mpeg_program`,null),e([j()],Y.prototype,`next_item`,null),e([j()],Y.prototype,`noindex`,null),e([j()],Y.prototype,`notes`,null),e([j()],Y.prototype,`num_favorites`,null),e([j()],Y.prototype,`num_reviews`,null),e([j()],Y.prototype,`openlibrary_edition`,null),e([j()],Y.prototype,`openlibrary_work`,null),e([j()],Y.prototype,`page_progression`,null),e([j()],Y.prototype,`paginated`,null),e([j()],Y.prototype,`partner`,null),e([j()],Y.prototype,`post_text`,null),e([j()],Y.prototype,`ppi`,null),e([j()],Y.prototype,`previous_item`,null),e([j()],Y.prototype,`program`,null),e([j()],Y.prototype,`publicdate`,null),e([j()],Y.prototype,`publisher`,null),e([j()],Y.prototype,`reviewdate`,null),e([j()],Y.prototype,`reviews_allowed`,null),e([j()],Y.prototype,`rights`,null),e([j()],Y.prototype,`rights_holder`,null),e([j()],Y.prototype,`runtime`,null),e([j()],Y.prototype,`scandate`,null),e([j()],Y.prototype,`scanner`,null),e([j()],Y.prototype,`scanningcenter`,null),e([j()],Y.prototype,`segments`,null),e([j()],Y.prototype,`shotlist`,null),e([j()],Y.prototype,`sound`,null),e([j()],Y.prototype,`source`,null),e([j()],Y.prototype,`source_pixel_height`,null),e([j()],Y.prototype,`source_pixel_width`,null),e([j()],Y.prototype,`sponsor`,null),e([j()],Y.prototype,`start_localtime`,null),e([j()],Y.prototype,`start_time`,null),e([j()],Y.prototype,`station_name`,null),e([j()],Y.prototype,`stop_time`,null),e([j()],Y.prototype,`subject`,null),e([j()],Y.prototype,`taper`,null),e([j()],Y.prototype,`thumbs`,null),e([j()],Y.prototype,`times`,null),e([j()],Y.prototype,`title`,null),e([j()],Y.prototype,`title_alt_script`,null),e([j()],Y.prototype,`transferer`,null),e([j()],Y.prototype,`track`,null),e([j()],Y.prototype,`tuner`,null),e([j()],Y.prototype,`type`,null),e([j()],Y.prototype,`uploader`,null),e([j()],Y.prototype,`utc_offset`,null),e([j()],Y.prototype,`venue`,null),e([j()],Y.prototype,`video_codec`,null),e([j()],Y.prototype,`volume`,null),e([j()],Y.prototype,`week`,null),e([j()],Y.prototype,`year`,null);var lt=class{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return z(this.rawValue,e=>F.shared.parseValue(e),`reviewdate`)}get createdate(){return z(this.rawValue,e=>F.shared.parseValue(e),`createdate`)}get stars(){return z(this.rawValue,e=>N.shared.parseValue(e),`stars`)}constructor(e={}){this.rawValue=e}};e([j()],lt.prototype,`reviewdate`,null),e([j()],lt.prototype,`createdate`,null),e([j()],lt.prototype,`stars`,null);var X=Object.getOwnPropertyNames(Y.prototype).filter(e=>typeof Object.getOwnPropertyDescriptor(Y.prototype,e)?.get==`function`).sort();function Z(e,t){return e[t]}function ut(e){return typeof e==`object`&&!!e&&`rawValue`in e}function dt(e){let t=new Set,n=new Y(new Proxy(e,{get(e,n){return typeof n==`string`&&t.add(n),Reflect.get(e,n)}}));for(let e of X)Z(n,e);return t}var ft=[`gd73-06-10.sbd.hollister.174.sbeok.shnf`,`nasa`,`goody`,`eventsounds_pack`,`womeningovernmen0000jame`,`KGO_20101106_063500_Nightline`],pt=`identifier`,mt=`filter`;function ht(e){return new URLSearchParams(window.location.search).get(e)?.trim()||void 0}function gt(e){return e.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean)}function _t(e,t){if(!t.length)return!0;let n=e.toLowerCase();return t.some(e=>n.includes(e))}function Q(e){return e==null?`—`:e instanceof Date?e.toISOString():Array.isArray(e)?e.length?e.map(Q).join(`, `):`—`:typeof e==`object`?JSON.stringify(e):String(e)}var $=class extends k{constructor(){super(...arguments),this.identifier=ht(pt)??ft[0],this.loading=!1,this.unmodeledKeys=[],this.query=ht(mt)??``,this.showUnset=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){let e=this.identifier.trim();if(!e){this.error=`Enter an archive.org identifier.`;return}this.loading=!0,this.error=void 0;try{let t=await fetch(`https://archive.org/metadata/${encodeURIComponent(e)}`);if(!t.ok)throw Error(`Request failed (${t.status})`);let n=await t.json();if(!n.metadata)throw Error(`No item found for identifier “${e}”.`);this.setMetadata(n.metadata),this.fileCount=n.files?.length,this.syncUrl()}catch(e){this.metadata=void 0,this.fileCount=void 0,this.unmodeledKeys=[],this.error=e instanceof Error?e.message:`Failed to load item.`}finally{this.loading=!1}}setMetadata(e){this.metadata=new Y(e);let t=dt(e);this.unmodeledKeys=Object.keys(e).filter(e=>!t.has(e)).sort()}parseJson(){let e=this.shadowRoot?.querySelector(`textarea`)?.value??``;if(!e.trim()){this.error=`Paste some metadata JSON first.`;return}try{let t=JSON.parse(e),n=t.metadata??t;this.setMetadata(n),this.fileCount=void 0,this.error=void 0}catch{this.error=`Could not parse that as JSON.`}}render(){return S`
      <h1>Item Metadata Demo</h1>
      <p>
        Models for
        <a href="https://archive.org" target="_blank" rel="noopener"
          >archive.org</a
        >
        item metadata. Load an item by identifier (or paste raw JSON) to see how
        each field is normalized from its raw API value into a native type. The
        item and field filter stay in the URL, so you can link straight to a
        view.
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
        ${ft.map(e=>S`<button
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

      ${this.error?S`<p class="error" role="alert">${this.error}</p>`:w}
      ${this.metadata?this.renderResult(this.metadata):w}
    `}renderResult(e){let{identifier:t}=e;return S`
      <h2>
        ${t?S`<a
              href="https://archive.org/details/${t}"
              target="_blank"
              rel="noopener"
              >${t}</a
            >`:`Parsed metadata`}
      </h2>
      ${this.fileCount===void 0?w:S`<p class="meta">${this.fileCount} files in response</p>`}

      <div class="toolbar">
        <label class="field">
          <span>Filter fields (comma separated)</span>
          <input
            type="search"
            .value=${this.query}
            @input=${this.onQueryInput}
            placeholder="e.g. aspect, tuner, scandate"
          />
        </label>
        <label class="toggle">
          <input
            type="checkbox"
            .checked=${this.showUnset}
            @change=${this.onShowUnsetChange}
          />
          <span>Show unset fields</span>
        </label>
      </div>

      ${this.renderTable(e)} ${this.renderUnmodeled()}
    `}visibleFields(e){let t=gt(this.query);return X.filter(n=>_t(n,t)?this.showUnset||Z(e,n)!==void 0:!1)}renderTable(e){let t=this.visibleFields(e),n=X.filter(t=>Z(e,t)!==void 0).length;return S`
      <p class="meta">
        Showing ${t.length} of ${X.length} modeled fields.
        ${n} set on this item.
      </p>
      ${t.length?S`
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
                ${t.map(t=>this.renderRow(e,t))}
              </tbody>
            </table>
          `:S`<p class="meta">No field names match that filter.</p>`}
    `}renderRow(e,t){let n=Z(e,t),r=ut(n)?[Q(n.value),Q(n.values),Q(n.rawValue)]:[Q(n),Q(void 0),Q(void 0)];return S`
      <tr class=${n===void 0?`unset`:``}>
        <td><code>${t}</code></td>
        <td>${r[0]}</td>
        <td>${r[1]}</td>
        <td class="raw">${r[2]}</td>
      </tr>
    `}renderUnmodeled(){if(!this.unmodeledKeys.length)return w;let e=gt(this.query),t=this.unmodeledKeys.filter(t=>_t(t,e));return S`
      <details class="unmodeled">
        <summary>
          ${t.length===this.unmodeledKeys.length?this.unmodeledKeys.length:`${t.length} of ${this.unmodeledKeys.length}`}
          raw keys the model doesn't expose
        </summary>
        ${t.length?S`<p class="keys">
              ${t.map(e=>S`<code>${e}</code>`)}
            </p>`:S`<p class="meta">No unmodeled keys match that filter.</p>`}
      </details>
    `}onIdentifierInput(e){this.identifier=e.currentTarget.value}onQueryInput(e){this.query=e.currentTarget.value,this.syncUrl()}syncUrl(){let e=new URL(window.location.href),t={[pt]:this.identifier,[mt]:gt(this.query).join(`,`)};for(let[n,r]of Object.entries(t))r.trim()?e.searchParams.set(n,r.trim()):e.searchParams.delete(n);let n=e.search.replace(/%2C/g,`,`);window.history.replaceState({},``,`${e.origin}${e.pathname}${n}`)}onShowUnsetChange(e){this.showUnset=e.currentTarget.checked}onSubmit(e){e.preventDefault(),this.loadFromArchive()}useExample(e){this.identifier=e,this.loadFromArchive()}};$.styles=s`
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

    .toolbar {
      display: flex;
      align-items: flex-end;
      gap: 1rem;
      flex-wrap: wrap;
      margin: 0.75rem 0;
    }

    .toggle {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85rem;
      white-space: nowrap;
    }

    .toggle input {
      width: auto;
    }

    tr.unset td {
      color: #999;
    }

    .unmodeled {
      margin-top: 1rem;
    }

    .unmodeled summary {
      cursor: pointer;
      font-size: 0.85rem;
      color: #555;
    }

    .keys {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin: 0.5rem 0 0;
    }

    .keys code {
      background: #f0f0f0;
      border: 1px solid #ddd;
      border-radius: 3px;
      padding: 0.1rem 0.3rem;
      font-size: 0.8rem;
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
  `,e([A()],$.prototype,`identifier`,void 0),e([A()],$.prototype,`metadata`,void 0),e([A()],$.prototype,`fileCount`,void 0),e([A()],$.prototype,`loading`,void 0),e([A()],$.prototype,`error`,void 0),e([A()],$.prototype,`unmodeledKeys`,void 0),e([A()],$.prototype,`query`,void 0),e([A()],$.prototype,`showUnset`,void 0),$=e([Le(`app-root`)],$);