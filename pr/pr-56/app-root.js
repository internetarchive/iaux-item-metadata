(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var t=globalThis,n=t.ShadowRoot&&(t.ShadyCSS===void 0||t.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap,a=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(n&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=i.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&i.set(t,e))}return e}toString(){return this.cssText}},o=e=>new a(typeof e==`string`?e:e+``,void 0,r),s=(e,...t)=>new a(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,r),c=(e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of r){let r=document.createElement(`style`),i=t.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=n.cssText,e.appendChild(r)}},l=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return o(t)})(e):e,{is:u,defineProperty:d,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,f=globalThis,ie=f.trustedTypes,ae=ie?ie.emptyScript:``,oe=f.reactiveElementPolyfillSupport,p=(e,t)=>e,m={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},h=(e,t)=>!u(e,t),se={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:h};Symbol.metadata??=Symbol(`metadata`),f.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&d(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(p(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(p(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(p(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(l(e))}else e!==void 0&&t.push(l(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?m:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?m:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??h)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[p(`elementProperties`)]=new Map,g[p(`finalized`)]=new Map,oe?.({ReactiveElement:g}),(f.reactiveElementVersions??=[]).push(`2.1.2`);var _=globalThis,ce=e=>e,v=_.trustedTypes,le=v?v.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ue=`$lit$`,y=`lit$${Math.random().toFixed(9).slice(2)}$`,de=`?`+y,fe=`<${de}>`,b=document,x=()=>b.createComment(``),S=e=>e===null||typeof e!=`object`&&typeof e!=`function`,C=Array.isArray,pe=e=>C(e)||typeof e?.[Symbol.iterator]==`function`,me=`[ 	
\f\r]`,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ge=/>/g,T=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),_e=/'/g,ve=/"/g,ye=/^(?:script|style|textarea|title)$/i,E=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),D=Symbol.for(`lit-noChange`),O=Symbol.for(`lit-nothing`),be=new WeakMap,k=b.createTreeWalker(b,129);function xe(e,t){if(!C(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return le===void 0?t:le.createHTML(t)}var Se=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=w;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===w?c[1]===`!--`?o=he:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=T):(ye.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=T):o=ge:o===T?c[0]===`>`?(o=i??w,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?T:c[3]===`"`?ve:_e):o===ve||o===_e?o=T:o===he||o===ge?o=w:(o=T,i=void 0);let d=o===T&&e[t+1].startsWith(`/>`)?` `:``;a+=o===w?n+fe:l>=0?(r.push(s),n.slice(0,l)+ue+n.slice(l)+y+d):n+y+(l===-2?t:d)}return[xe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ce=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Se(t,n);if(this.el=e.createElement(l,r),k.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=k.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ue)){let t=u[o++],n=i.getAttribute(e).split(y),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ee:r[1]===`?`?De:r[1]===`@`?Oe:j}),i.removeAttribute(e)}else e.startsWith(y)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ye.test(i.tagName)){let e=i.textContent.split(y),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],x()),k.nextNode(),c.push({type:2,index:++a});i.append(e[t],x())}}}else if(i.nodeType===8)if(i.data===de)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(y,e+1))!==-1;)c.push({type:7,index:a}),e+=y.length-1}a++}}static createElement(e,t){let n=b.createElement(`template`);return n.innerHTML=e,n}};function A(e,t,n=e,r){if(t===D)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=S(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=A(e,i._$AS(e,t.values),i,r)),t}var we=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??b).importNode(t,!0);k.currentNode=r;let i=k.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Te(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=k.nextNode(),a++)}return k.currentNode=b,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Te=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),S(e)?e===O||e==null||e===``?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==D&&this._(e):e._$litType$===void 0?e.nodeType===void 0?pe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&S(this._$AH)?this._$AA.nextSibling.data=e:this.T(b.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ce.createElement(xe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new we(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=be.get(e.strings);return t===void 0&&be.set(e.strings,t=new Ce(e)),t}k(t){C(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(x()),this.O(x()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},j=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=A(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==D,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=A(this,r[n+o],t,o),s===D&&(s=this._$AH[o]),a||=!S(s)||s!==this._$AH[o],s===O?e=O:e!==O&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ee=class extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},De=class extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},Oe=class extends j{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??O)===D)return;let n=this._$AH,r=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==O&&(n===O||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}},Ae=_.litHtmlPolyfillSupport;Ae?.(Ce,Te),(_.litHtmlVersions??=[]).push(`3.3.3`);var je=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Te(t.insertBefore(x(),e),e,void 0,n??{})}return i._$AI(e),i},M=globalThis,N=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=je(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};N._$litElement$=!0,N.finalized=!0,M.litElementHydrateSupport?.({LitElement:N});var Me=M.litElementPolyfillSupport;Me?.({LitElement:N}),(M.litElementVersions??=[]).push(`4.2.2`);var Ne=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Pe={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:h},Fe=(e=Pe,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function Ie(e){return(t,n)=>typeof n==`object`?Fe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function P(e){return Ie({...e,state:!0,attribute:!1})}function F(e){let t,n,r;return typeof e==`object`?(t=e.hashFunction,n=e.expiring,r=e.tags):t=e,(e,i,a)=>{if(a.value!=null)a.value=Le(a.value,t,n,r);else if(a.get!=null)a.get=Le(a.get,t,n,r);else throw`Only put a Memoize() decorator on a method or get accessor.`}}var I=new Map;function Le(e,t,n=0,r){let i=Symbol(`__memoized_map__`);return function(...a){let o;this.hasOwnProperty(i)||Object.defineProperty(this,i,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let s=this[i];if(Array.isArray(r))for(let e of r)I.has(e)?I.get(e).push(s):I.set(e,[s]);if(t||a.length>0||n>0){let r;r=t===!0?a.map(e=>e.toString()).join(`!`):t?t.apply(this,a):a[0];let i=`${r}__timestamp`,c=!1;if(n>0)if(!s.has(i))c=!0;else{let e=s.get(i);c=Date.now()-e>n}s.has(r)&&!c?o=s.get(r):(o=e.apply(this,a),s.set(r,o),n>0&&s.set(i,Date.now()))}else{let t=this;s.has(t)?o=s.get(t):(o=e.apply(this,a),s.set(t,o))}return o}}var L=class{parseValue(e){if(typeof e==`string`){let t=e.trim().toLowerCase();if(t===`false`||t===`0`||t===`no`)return!1;if(t===`true`||t===`1`||t===`yes`)return!0}return!!e}};L.shared=new L;var R=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=parseFloat(e);if(!Number.isNaN(t))return t}};R.shared=new R;var z=class{parseValue(e){return R.shared.parseValue(e)}};z.shared=new z;var B=class{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!=`string`)return;let t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!=`string`)return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(` `,`T`));let n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}};B.shared=new B;var V=class{parseValue(e){if(typeof e==`number`)return e;if(typeof e==`boolean`)return;let t=e.split(`:`),n;return n=t.length===1?this.parseNumberFormat(t[0]):this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1,n=e.map((n,r)=>{let i=parseFloat(n);if(Number.isNaN(i))return t=!0,0;let a=60**(e.length-1-r);return i*Math.floor(a)}).reduce((e,t)=>e+t,0);return t?void 0:n}};V.shared=new V;var Re=class{parseValue(e){if(typeof e==`string`)return e}};Re.shared=new Re;var ze=class{constructor(e,t){this.separators=[`;`,`,`],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){let t=String(e),n=[];for(let e of this.separators)if(n=t.split(e),n.length>1)break;return this.parseListValues(n)}parseListValues(e){let t=e.map(e=>e.trim()).map(e=>this.parser.parseValue(e)),n=[];return t.forEach(e=>{e!==void 0&&n.push(e)}),n}},Be=class{parseValue(e){if(typeof e==`string`)return e}};Be.shared=new Be;var H=class{parseValue(e){return String(e)}};H.shared=new H;function U(e,t,...n){for(let r of n){let n=e[r];if(n!=null)return t(n)}}var W=class{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;let e=R.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return U(this.rawValue,e=>z.shared.parseValue(e),`size`)}get title(){return this.rawValue.title}get length(){return U(this.rawValue,e=>V.shared.parseValue(e),`length`)}get height(){return U(this.rawValue,e=>R.shared.parseValue(e),`height`)}get width(){return U(this.rawValue,e=>R.shared.parseValue(e),`width`)}get track(){return U(this.rawValue,e=>R.shared.parseValue(e),`track`)}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}};e([F()],W.prototype,`mtime`,null),e([F()],W.prototype,`size`,null),e([F()],W.prototype,`length`,null),e([F()],W.prototype,`height`,null),e([F()],W.prototype,`width`,null),e([F()],W.prototype,`track`,null);var G=class{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){let e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(e=>{let n=this.parser.parseValue(e);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}};e([F()],G.prototype,`values`,null),e([F()],G.prototype,`value`,null);var Ve=class extends G{constructor(e){super(L.shared,e)}},K=class extends G{constructor(e){super(B.shared,e)}},q=class extends G{constructor(e){super(V.shared,e)}},J=class extends G{constructor(e){super(R.shared,e)}},Y=class extends G{constructor(e){super(H.shared,e)}},X=class{constructor(e){this.allowed=e}parseValue(e){return typeof e==`string`&&this.allowed.includes(e)?e:void 0}},He=class extends G{constructor(e,t){super(t,e)}},Ue=new X([`rl`,`lr`]),We=class extends He{constructor(e){super(e,Ue)}},Ge=class extends G{constructor(e){super(z.shared,e)}},Ke=new X([`account`,`audio`,`collection`,`data`,`etree`,`image`,`movies`,`search`,`software`,`texts`,`web`]),qe=class extends He{constructor(e){super(e,Ke)}},Je=class extends G{constructor(e,t){super(t,e)}},Ye=class extends Je{constructor(e){let t=new ze(H.shared);super(e,t)}},Xe=new X([`true`,`none`,`frozen`]),Z=class{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate==null?void 0:new K(this.rawMetadata.addeddate)}get audio_codec(){return this.rawMetadata.audio_codec==null?void 0:new Y(this.rawMetadata.audio_codec)}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate==null?void 0:new J(this.rawMetadata.audio_sample_rate)}get avg_rating(){return this.rawMetadata.avg_rating==null?void 0:new J(this.rawMetadata.avg_rating)}get collection(){return this.rawMetadata.collection==null?void 0:new Y(this.rawMetadata.collection)}get collections_raw(){return this.rawMetadata.collections_raw==null?void 0:new Y(this.rawMetadata.collections_raw)}get collection_size(){return this.rawMetadata.collection_size==null?void 0:new Ge(this.rawMetadata.collection_size)}get contact(){return this.rawMetadata.contact==null?void 0:new Y(this.rawMetadata.contact)}get contributor(){return this.rawMetadata.contributor==null?void 0:new Y(this.rawMetadata.contributor)}get coverage(){return this.rawMetadata.coverage==null?void 0:new Y(this.rawMetadata.coverage)}get creator(){return this.rawMetadata.creator==null?void 0:new Y(this.rawMetadata.creator)}get creator_alt_script(){return this.rawMetadata[`creator-alt-script`]==null?void 0:new Y(this.rawMetadata[`creator-alt-script`])}get credits(){return this.rawMetadata.credits==null?void 0:new Y(this.rawMetadata.credits)}get collection_layout(){return this.rawMetadata.collection_layout==null?void 0:new Y(this.rawMetadata.collection_layout)}get date(){return this.rawMetadata.date==null?void 0:new K(this.rawMetadata.date)}get description(){return this.rawMetadata.description==null?void 0:new Y(this.rawMetadata.description)}get downloads(){return this.rawMetadata.downloads==null?void 0:new J(this.rawMetadata.downloads)}get duration(){return this.rawMetadata.duration==null?void 0:new q(this.rawMetadata.duration)}get external_identifier(){return this.rawMetadata[`external-identifier`]==null?void 0:new Y(this.rawMetadata[`external-identifier`])}get external_link(){return this.rawMetadata[`external-link`]==null?void 0:new Y(this.rawMetadata[`external-link`])}get files_count(){return this.rawMetadata.files_count==null?void 0:new J(this.rawMetadata.files_count)}get indexdate(){return this.rawMetadata.indexdate==null?void 0:new K(this.rawMetadata.indexdate)}get isbn(){return this.rawMetadata.isbn==null?void 0:new Y(this.rawMetadata.isbn)}get issue(){return this.rawMetadata.issue==null?void 0:new Y(this.rawMetadata.issue)}get item_count(){return this.rawMetadata.item_count==null?void 0:new J(this.rawMetadata.item_count)}get item_size(){return this.rawMetadata.item_size==null?void 0:new Ge(this.rawMetadata.item_size)}get language(){return this.rawMetadata.language==null?void 0:new Y(this.rawMetadata.language)}get length(){return this.rawMetadata.length==null?void 0:new q(this.rawMetadata.length)}get licenseurl(){return this.rawMetadata.licenseurl==null?void 0:new Y(this.rawMetadata.licenseurl)}get lineage(){return this.rawMetadata.lineage==null?void 0:new Y(this.rawMetadata.lineage)}get month(){return this.rawMetadata.month==null?void 0:new J(this.rawMetadata.month)}get mediatype(){return this.rawMetadata.mediatype==null?void 0:new qe(this.rawMetadata.mediatype)}get noindex(){return this.rawMetadata.noindex==null?void 0:new Ve(this.rawMetadata.noindex)}get notes(){return this.rawMetadata.notes==null?void 0:new Y(this.rawMetadata.notes)}get num_favorites(){return this.rawMetadata.num_favorites==null?void 0:new J(this.rawMetadata.num_favorites)}get num_reviews(){return this.rawMetadata.num_reviews==null?void 0:new J(this.rawMetadata.num_reviews)}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition==null?void 0:new Y(this.rawMetadata.openlibrary_edition)}get openlibrary_work(){return this.rawMetadata.openlibrary_work==null?void 0:new Y(this.rawMetadata.openlibrary_work)}get page_progression(){return this.rawMetadata.page_progression==null?void 0:new We(this.rawMetadata.page_progression)}get paginated(){return this.rawMetadata.paginated==null?void 0:new Ve(this.rawMetadata.paginated)}get partner(){return this.rawMetadata.partner==null?void 0:new Y(this.rawMetadata.partner)}get post_text(){return this.rawMetadata.post_text==null?void 0:new Y(this.rawMetadata.post_text)}get ppi(){return this.rawMetadata.ppi==null?void 0:new J(this.rawMetadata.ppi)}get publicdate(){return this.rawMetadata.publicdate==null?void 0:new K(this.rawMetadata.publicdate)}get publisher(){return this.rawMetadata.publisher==null?void 0:new Y(this.rawMetadata.publisher)}get reviewdate(){return this.rawMetadata.reviewdate==null?void 0:new K(this.rawMetadata.reviewdate)}get reviews_allowed(){return this.rawMetadata[`reviews-allowed`]==null?void 0:new He(this.rawMetadata[`reviews-allowed`],Xe)}get rights(){return this.rawMetadata.rights==null?void 0:new Y(this.rawMetadata.rights)}get rights_holder(){let e=this.rawMetadata[`rights-holder`]??this.rawMetadata.rights_holder;return e==null?void 0:new Y(e)}get runtime(){return this.rawMetadata.runtime==null?void 0:new q(this.rawMetadata.runtime)}get scanner(){return this.rawMetadata.scanner==null?void 0:new Y(this.rawMetadata.scanner)}get segments(){return this.rawMetadata.segments==null?void 0:new Y(this.rawMetadata.segments)}get shotlist(){return this.rawMetadata.shotlist==null?void 0:new Y(this.rawMetadata.shotlist)}get source(){return this.rawMetadata.source==null?void 0:new Y(this.rawMetadata.source)}get sponsor(){return this.rawMetadata.sponsor==null?void 0:new Y(this.rawMetadata.sponsor)}get start_localtime(){return this.rawMetadata.start_localtime==null?void 0:new K(this.rawMetadata.start_localtime)}get start_time(){return this.rawMetadata.start_time==null?void 0:new K(this.rawMetadata.start_time)}get stop_time(){return this.rawMetadata.stop_time==null?void 0:new K(this.rawMetadata.stop_time)}get subject(){return this.rawMetadata.subject==null?void 0:new Ye(this.rawMetadata.subject)}get taper(){return this.rawMetadata.taper==null?void 0:new Y(this.rawMetadata.taper)}get title(){return this.rawMetadata.title==null?void 0:new Y(this.rawMetadata.title)}get title_alt_script(){return this.rawMetadata[`title-alt-script`]==null?void 0:new Y(this.rawMetadata[`title-alt-script`])}get transferer(){return this.rawMetadata.transferer==null?void 0:new Y(this.rawMetadata.transferer)}get track(){return this.rawMetadata.track==null?void 0:new J(this.rawMetadata.track)}get type(){return this.rawMetadata.type==null?void 0:new Y(this.rawMetadata.type)}get uploader(){return this.rawMetadata.uploader==null?void 0:new Y(this.rawMetadata.uploader)}get utc_offset(){return this.rawMetadata.utc_offset==null?void 0:new J(this.rawMetadata.utc_offset)}get venue(){return this.rawMetadata.venue==null?void 0:new Y(this.rawMetadata.venue)}get volume(){return this.rawMetadata.volume==null?void 0:new Y(this.rawMetadata.volume)}get week(){return this.rawMetadata.week==null?void 0:new J(this.rawMetadata.week)}get year(){return this.rawMetadata.year==null?void 0:new J(this.rawMetadata.year)}constructor(e={}){this.rawMetadata=e}};e([F()],Z.prototype,`addeddate`,null),e([F()],Z.prototype,`audio_codec`,null),e([F()],Z.prototype,`audio_sample_rate`,null),e([F()],Z.prototype,`avg_rating`,null),e([F()],Z.prototype,`collection`,null),e([F()],Z.prototype,`collections_raw`,null),e([F()],Z.prototype,`collection_size`,null),e([F()],Z.prototype,`contact`,null),e([F()],Z.prototype,`contributor`,null),e([F()],Z.prototype,`coverage`,null),e([F()],Z.prototype,`creator`,null),e([F()],Z.prototype,`creator_alt_script`,null),e([F()],Z.prototype,`credits`,null),e([F()],Z.prototype,`collection_layout`,null),e([F()],Z.prototype,`date`,null),e([F()],Z.prototype,`description`,null),e([F()],Z.prototype,`downloads`,null),e([F()],Z.prototype,`duration`,null),e([F()],Z.prototype,`external_identifier`,null),e([F()],Z.prototype,`external_link`,null),e([F()],Z.prototype,`files_count`,null),e([F()],Z.prototype,`indexdate`,null),e([F()],Z.prototype,`isbn`,null),e([F()],Z.prototype,`issue`,null),e([F()],Z.prototype,`item_count`,null),e([F()],Z.prototype,`item_size`,null),e([F()],Z.prototype,`language`,null),e([F()],Z.prototype,`length`,null),e([F()],Z.prototype,`licenseurl`,null),e([F()],Z.prototype,`lineage`,null),e([F()],Z.prototype,`month`,null),e([F()],Z.prototype,`mediatype`,null),e([F()],Z.prototype,`noindex`,null),e([F()],Z.prototype,`notes`,null),e([F()],Z.prototype,`num_favorites`,null),e([F()],Z.prototype,`num_reviews`,null),e([F()],Z.prototype,`openlibrary_edition`,null),e([F()],Z.prototype,`openlibrary_work`,null),e([F()],Z.prototype,`page_progression`,null),e([F()],Z.prototype,`paginated`,null),e([F()],Z.prototype,`partner`,null),e([F()],Z.prototype,`post_text`,null),e([F()],Z.prototype,`ppi`,null),e([F()],Z.prototype,`publicdate`,null),e([F()],Z.prototype,`publisher`,null),e([F()],Z.prototype,`reviewdate`,null),e([F()],Z.prototype,`reviews_allowed`,null),e([F()],Z.prototype,`rights`,null),e([F()],Z.prototype,`rights_holder`,null),e([F()],Z.prototype,`runtime`,null),e([F()],Z.prototype,`scanner`,null),e([F()],Z.prototype,`segments`,null),e([F()],Z.prototype,`shotlist`,null),e([F()],Z.prototype,`source`,null),e([F()],Z.prototype,`sponsor`,null),e([F()],Z.prototype,`start_localtime`,null),e([F()],Z.prototype,`start_time`,null),e([F()],Z.prototype,`stop_time`,null),e([F()],Z.prototype,`subject`,null),e([F()],Z.prototype,`taper`,null),e([F()],Z.prototype,`title`,null),e([F()],Z.prototype,`title_alt_script`,null),e([F()],Z.prototype,`transferer`,null),e([F()],Z.prototype,`track`,null),e([F()],Z.prototype,`type`,null),e([F()],Z.prototype,`uploader`,null),e([F()],Z.prototype,`utc_offset`,null),e([F()],Z.prototype,`venue`,null),e([F()],Z.prototype,`volume`,null),e([F()],Z.prototype,`week`,null),e([F()],Z.prototype,`year`,null);var Ze=class{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return U(this.rawValue,e=>B.shared.parseValue(e),`reviewdate`)}get createdate(){return U(this.rawValue,e=>B.shared.parseValue(e),`createdate`)}get stars(){return U(this.rawValue,e=>R.shared.parseValue(e),`stars`)}constructor(e={}){this.rawValue=e}};e([F()],Ze.prototype,`reviewdate`,null),e([F()],Ze.prototype,`createdate`,null),e([F()],Ze.prototype,`stars`,null);var Qe=[{label:`title`,get:e=>e.title},{label:`mediatype`,get:e=>e.mediatype},{label:`page_progression`,get:e=>e.page_progression},{label:`creator`,get:e=>e.creator},{label:`collection`,get:e=>e.collection},{label:`subject`,get:e=>e.subject},{label:`description`,get:e=>e.description},{label:`date`,get:e=>e.date},{label:`addeddate`,get:e=>e.addeddate},{label:`publicdate`,get:e=>e.publicdate},{label:`language`,get:e=>e.language},{label:`duration`,get:e=>e.duration},{label:`runtime`,get:e=>e.runtime},{label:`downloads`,get:e=>e.downloads},{label:`item_size`,get:e=>e.item_size},{label:`files_count`,get:e=>e.files_count},{label:`venue`,get:e=>e.venue},{label:`taper`,get:e=>e.taper},{label:`source`,get:e=>e.source},{label:`lineage`,get:e=>e.lineage}],$e=[`gd73-06-10.sbd.hollister.174.sbeok.shnf`,`nasa`,`goody`,`eventsounds_pack`,`womeningovernmen0000jame`];function Q(e){return e==null?`—`:e instanceof Date?e.toISOString():Array.isArray(e)?e.length?e.map(Q).join(`, `):`—`:typeof e==`object`?JSON.stringify(e):String(e)}var $=class extends N{constructor(){super(...arguments),this.identifier=$e[0],this.loading=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){let e=this.identifier.trim();if(!e){this.error=`Enter an archive.org identifier.`;return}this.loading=!0,this.error=void 0;try{let t=await fetch(`https://archive.org/metadata/${encodeURIComponent(e)}`);if(!t.ok)throw Error(`Request failed (${t.status})`);let n=await t.json();if(!n.metadata)throw Error(`No item found for identifier “${e}”.`);this.metadata=new Z(n.metadata),this.fileCount=n.files?.length}catch(e){this.metadata=void 0,this.fileCount=void 0,this.error=e instanceof Error?e.message:`Failed to load item.`}finally{this.loading=!1}}parseJson(){let e=this.shadowRoot?.querySelector(`textarea`)?.value??``;if(!e.trim()){this.error=`Paste some metadata JSON first.`;return}try{let t=JSON.parse(e),n=t.metadata??t;this.metadata=new Z(n),this.fileCount=void 0,this.error=void 0}catch{this.error=`Could not parse that as JSON.`}}render(){return E`
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
        ${$e.map(e=>E`<button
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
          ${Qe.map(t=>{let n=t.get(e);return n?E`
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
  `,e([P()],$.prototype,`identifier`,void 0),e([P()],$.prototype,`metadata`,void 0),e([P()],$.prototype,`fileCount`,void 0),e([P()],$.prototype,`loading`,void 0),e([P()],$.prototype,`error`,void 0),$=e([Ne(`app-root`)],$);