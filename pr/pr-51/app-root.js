(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function o(a,e,t,n){var r=arguments.length,i=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,n);else for(var h=a.length-1;h>=0;h--)(s=a[h])&&(i=(r<3?s(i):r>3?s(e,t,i):s(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,le=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,de=Symbol(),ce=new WeakMap;let Pe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==de)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(le&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ce.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ce.set(t,e))}return e}toString(){return this.cssText}};const Ue=a=>new Pe(typeof a=="string"?a:a+"",void 0,de),Te=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[i+1],a[0]);return new Pe(t,a,de)},ke=(a,e)=>{if(le)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),r=J.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,a.appendChild(n)}},fe=le?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ue(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Re,defineProperty:ze,getOwnPropertyDescriptor:He,getOwnPropertyNames:De,getOwnPropertySymbols:Le,getPrototypeOf:je}=Object,v=globalThis,we=v.trustedTypes,Fe=we?we.emptyScript:"",Y=v.reactiveElementPolyfillSupport,k=(a,e)=>a,W={toAttribute(a,e){switch(e){case Boolean:a=a?Fe:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ue=(a,e)=>!Re(a,e),ge={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ue};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class V extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ze(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:i}=He(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const h=r==null?void 0:r.call(this);i.call(this,s),this.requestUpdate(e,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const e=je(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const t=this.properties,n=[...De(t),...Le(t)];for(const r of n)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(fe(r))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var i;const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:W).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),h=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:W;this._$Em=r,this[r]=h.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??ue)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EU()}catch(r){throw e=!1,this._$EU(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}V.elementStyles=[],V.shadowRootOptions={mode:"open"},V[k("elementProperties")]=new Map,V[k("finalized")]=new Map,Y==null||Y({ReactiveElement:V}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,K=R.trustedTypes,me=K?K.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ce="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+A,Ie=`<${Ve}>`,C=document,H=()=>C.createComment(""),D=a=>a===null||typeof a!="object"&&typeof a!="function",he=Array.isArray,Be=a=>he(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",ee=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,_e=/>/g,S=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$e=/'/g,be=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Je=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),E=Je(1),N=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Me=new WeakMap,P=C.createTreeWalker(C,129);function Oe(a,e){if(!he(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const qe=(a,e)=>{const t=a.length-1,n=[];let r,i=e===2?"<svg>":e===3?"<math>":"",s=T;for(let h=0;h<t;h++){const u=a[h];let f,g,c=-1,_=0;for(;_<u.length&&(s.lastIndex=_,g=s.exec(u),g!==null);)_=s.lastIndex,s===T?g[1]==="!--"?s=ye:g[1]!==void 0?s=_e:g[2]!==void 0?(Ne.test(g[2])&&(r=RegExp("</"+g[2],"g")),s=S):g[3]!==void 0&&(s=S):s===S?g[0]===">"?(s=r??T,c=-1):g[1]===void 0?c=-2:(c=s.lastIndex-g[2].length,f=g[1],s=g[3]===void 0?S:g[3]==='"'?be:$e):s===be||s===$e?s=S:s===ye||s===_e?s=T:(s=S,r=void 0);const b=s===S&&a[h+1].startsWith("/>")?" ":"";i+=s===T?u+Ie:c>=0?(n.push(f),u.slice(0,c)+Ce+u.slice(c)+A+b):u+A+(c===-2?h:b)}return[Oe(a,i+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class L{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0;const h=e.length-1,u=this.parts,[f,g]=qe(e,t);if(this.el=L.createElement(f,n),P.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=P.nextNode())!==null&&u.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Ce)){const _=g[s++],b=r.getAttribute(c).split(A),B=/([.?@])?(.*)/.exec(_);u.push({type:1,index:i,name:B[2],strings:b,ctor:B[1]==="."?Ke:B[1]==="?"?Ze:B[1]==="@"?Xe:Q}),r.removeAttribute(c)}else c.startsWith(A)&&(u.push({type:6,index:i}),r.removeAttribute(c));if(Ne.test(r.tagName)){const c=r.textContent.split(A),_=c.length-1;if(_>0){r.textContent=K?K.emptyScript:"";for(let b=0;b<_;b++)r.append(c[b],H()),P.nextNode(),u.push({type:2,index:++i});r.append(c[_],H())}}}else if(r.nodeType===8)if(r.data===Ve)u.push({type:2,index:i});else{let c=-1;for(;(c=r.data.indexOf(A,c+1))!==-1;)u.push({type:7,index:i}),c+=A.length-1}i++}}static createElement(e,t){const n=C.createElement("template");return n.innerHTML=e,n}}function O(a,e,t=a,n){var s,h;if(e===N)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl;const i=D(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),i===void 0?r=void 0:(r=new i(a),r._$AT(a,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=r:t._$Cl=r),r!==void 0&&(e=O(a,r._$AS(a,e.values),r,n)),e}class We{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??C).importNode(t,!0);P.currentNode=r;let i=P.nextNode(),s=0,h=0,u=n[0];for(;u!==void 0;){if(s===u.index){let f;u.type===2?f=new F(i,i.nextSibling,this,e):u.type===1?f=new u.ctor(i,u.name,u.strings,this,e):u.type===6&&(f=new Ge(i,this,e)),this._$AV.push(f),u=n[++h]}s!==(u==null?void 0:u.index)&&(i=P.nextNode(),s++)}return P.currentNode=C,r}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class F{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),D(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(C.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=L.createElement(Oe(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{const s=new We(r,this),h=s.u(this.options);s.p(t),this.T(h),this._$AH=s}}_$AC(e){let t=Me.get(e.strings);return t===void 0&&Me.set(e.strings,t=new L(e)),t}k(e){he(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const i of e)r===t.length?t.push(n=new F(this.O(H()),this.O(H()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){const i=this.strings;let s=!1;if(i===void 0)e=O(this,e,t,0),s=!D(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{const h=e;let u,f;for(e=i[0],u=0;u<i.length-1;u++)f=O(this,h[n+u],t,u),f===N&&(f=this._$AH[u]),s||(s=!D(f)||f!==this._$AH[u]),f===w?e=w:e!==w&&(e+=(f??"")+i[u+1]),this._$AH[u]=f}s&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ke extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}class Ze extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}}class Xe extends Q{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??w)===N)return;const n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ge{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}const te=R.litHtmlPolyfillSupport;te==null||te(L,F),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.2.1");const Qe=(a,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let r=n._$litPart$;if(r===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new F(e.insertBefore(H(),i),i,void 0,t??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let z=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return N}};var Ee;z._$litElement$=!0,z.finalized=!0,(Ee=globalThis.litElementHydrateSupport)==null||Ee.call(globalThis,{LitElement:z});const re=globalThis.litElementPolyfillSupport;re==null||re({LitElement:z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:ue},tt=(a=et,e,t)=>{const{kind:n,metadata:r}=t;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(t.name,a),n==="accessor"){const{name:s}=t;return{set(h){const u=e.get.call(this);e.set.call(this,h),this.requestUpdate(s,u,a)},init(h){return h!==void 0&&this.P(s,void 0,a),h}}}if(n==="setter"){const{name:s}=t;return function(h){const u=this[s];e.call(this,h),this.requestUpdate(s,u,a)}}throw Error("Unsupported decorator location: "+n)};function rt(a){return(e,t)=>typeof t=="object"?tt(a,e,t):((n,r,i)=>{const s=r.hasOwnProperty(i);return r.constructor.createProperty(i,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(r,i):void 0})(a,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function I(a){return rt({...a,state:!0,attribute:!1})}function l(a){let e,t,n;return e=a,(r,i,s)=>{if(s.value!=null)s.value=Ae(s.value,e,t,n);else if(s.get!=null)s.get=Ae(s.get,e,t,n);else throw"Only put a Memoize() decorator on a method or get accessor."}}const ne=new Map;function Ae(a,e,t=0,n){const r=Symbol("__memoized_map__");return function(...i){let s;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[r];if(Array.isArray(n))for(const u of n)ne.has(u)?ne.get(u).push(h):ne.set(u,[h]);if(e||i.length>0||t>0){let u;e===!0?u=i.map(c=>c.toString()).join("!"):e?u=e.apply(this,i):u=i[0];const f=`${u}__timestamp`;let g=!1;if(t>0)if(!h.has(f))g=!0;else{let c=h.get(f);g=Date.now()-c>t}h.has(u)&&!g?s=h.get(u):(s=a.apply(this,i),h.set(u,s),t>0&&h.set(f,Date.now()))}else{const u=this;h.has(u)?s=h.get(u):(s=a.apply(this,i),h.set(u,s))}return s}}class ie{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}ie.shared=new ie;class ${parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}$.shared=new $;class Z{parseValue(e){return $.shared.parseValue(e)}}Z.shared=new Z;class j{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const n=Date.parse(t);if(Number.isNaN(n))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}j.shared=new j;class X{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let n;return t.length===1?n=this.parseNumberFormat(t[0]):n=this.parseColonSeparatedFormat(t),n}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const n=e.map((r,i)=>{const s=parseFloat(r);if(Number.isNaN(s))return t=!0,0;const u=60**(e.length-1-i);return s*Math.floor(u)}).reduce((r,i)=>r+i,0);return t?void 0:n}}X.shared=new X;class se{parseValue(e){if(typeof e=="string")return e}}se.shared=new se;class nt{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let n=[];for(const r of this.separators)if(n=t.split(r),n.length>1)break;return this.parseListValues(n)}parseListValues(e){const n=e.map(i=>i.trim()).map(i=>this.parser.parseValue(i)),r=[];return n.forEach(i=>{i!==void 0&&r.push(i)}),r}}class oe{parseValue(e){if(typeof e=="string")return e}}oe.shared=new oe;class G{parseValue(e){return String(e)}}G.shared=new G;class U{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;const e=$.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?Z.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?X.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?$.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?$.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?$.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}o([l()],U.prototype,"mtime",null);o([l()],U.prototype,"size",null);o([l()],U.prototype,"length",null);o([l()],U.prototype,"height",null);o([l()],U.prototype,"width",null);o([l()],U.prototype,"track",null);class y{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(n=>{const r=this.parser.parseValue(n);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}o([l()],y.prototype,"values",null);o([l()],y.prototype,"value",null);class ve extends y{constructor(e){super(ie.shared,e)}}class M extends y{constructor(e){super(j.shared,e)}}class ae extends y{constructor(e){super(X.shared,e)}}class m extends y{constructor(e){super($.shared,e)}}class p extends y{constructor(e){super(G.shared,e)}}class at extends y{constructor(e){super(oe.shared,e)}}class xe extends y{constructor(e){super(Z.shared,e)}}class it extends y{constructor(e){super(se.shared,e)}}class st extends y{constructor(e,t){super(t,e)}}class ot extends st{constructor(e){const t=new nt(G.shared);super(e,t)}}class lt{constructor(e){this.allowed=e}parseValue(e){return typeof e=="string"&&this.allowed.includes(e)?e:void 0}}class dt extends y{constructor(e,t){super(t,e)}}const ut=new lt(["true","none","frozen"]);class d{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new M(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new p(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new m(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new m(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new p(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new p(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new xe(this.rawMetadata.collection_size):void 0}get contact(){return this.rawMetadata.contact!=null?new p(this.rawMetadata.contact):void 0}get contributor(){return this.rawMetadata.contributor!=null?new p(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new p(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new p(this.rawMetadata.creator):void 0}get creator_alt_script(){return this.rawMetadata["creator-alt-script"]!=null?new p(this.rawMetadata["creator-alt-script"]):void 0}get credits(){return this.rawMetadata.credits!=null?new p(this.rawMetadata.credits):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new p(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new M(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new p(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new m(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new ae(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new p(this.rawMetadata["external-identifier"]):void 0}get external_link(){return this.rawMetadata["external-link"]!=null?new p(this.rawMetadata["external-link"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new m(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new M(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new p(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new p(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new m(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new xe(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new p(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new ae(this.rawMetadata.length):void 0}get licenseurl(){return this.rawMetadata.licenseurl!=null?new p(this.rawMetadata.licenseurl):void 0}get lineage(){return this.rawMetadata.lineage!=null?new p(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new m(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new it(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new ve(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new p(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new m(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new m(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new p(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new p(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new at(this.rawMetadata.page_progression):void 0}get paginated(){return this.rawMetadata.paginated!=null?new ve(this.rawMetadata.paginated):void 0}get partner(){return this.rawMetadata.partner!=null?new p(this.rawMetadata.partner):void 0}get post_text(){return this.rawMetadata.post_text!=null?new p(this.rawMetadata.post_text):void 0}get ppi(){return this.rawMetadata.ppi!=null?new m(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new M(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new p(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new M(this.rawMetadata.reviewdate):void 0}get reviews_allowed(){return this.rawMetadata["reviews-allowed"]!=null?new dt(this.rawMetadata["reviews-allowed"],ut):void 0}get rights(){return this.rawMetadata.rights!=null?new p(this.rawMetadata.rights):void 0}get rights_holder(){var e;const t=(e=this.rawMetadata["rights-holder"])!==null&&e!==void 0?e:this.rawMetadata.rights_holder;return t!=null?new p(t):void 0}get runtime(){return this.rawMetadata.runtime!=null?new ae(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new p(this.rawMetadata.scanner):void 0}get segments(){return this.rawMetadata.segments!=null?new p(this.rawMetadata.segments):void 0}get shotlist(){return this.rawMetadata.shotlist!=null?new p(this.rawMetadata.shotlist):void 0}get source(){return this.rawMetadata.source!=null?new p(this.rawMetadata.source):void 0}get sponsor(){return this.rawMetadata.sponsor!=null?new p(this.rawMetadata.sponsor):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new M(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new M(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new M(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new ot(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new p(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new p(this.rawMetadata.title):void 0}get title_alt_script(){return this.rawMetadata["title-alt-script"]!=null?new p(this.rawMetadata["title-alt-script"]):void 0}get transferer(){return this.rawMetadata.transferer!=null?new p(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new m(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new p(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new p(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new m(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new p(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new p(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new m(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new m(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([l()],d.prototype,"addeddate",null);o([l()],d.prototype,"audio_codec",null);o([l()],d.prototype,"audio_sample_rate",null);o([l()],d.prototype,"avg_rating",null);o([l()],d.prototype,"collection",null);o([l()],d.prototype,"collections_raw",null);o([l()],d.prototype,"collection_size",null);o([l()],d.prototype,"contact",null);o([l()],d.prototype,"contributor",null);o([l()],d.prototype,"coverage",null);o([l()],d.prototype,"creator",null);o([l()],d.prototype,"creator_alt_script",null);o([l()],d.prototype,"credits",null);o([l()],d.prototype,"collection_layout",null);o([l()],d.prototype,"date",null);o([l()],d.prototype,"description",null);o([l()],d.prototype,"downloads",null);o([l()],d.prototype,"duration",null);o([l()],d.prototype,"external_identifier",null);o([l()],d.prototype,"external_link",null);o([l()],d.prototype,"files_count",null);o([l()],d.prototype,"indexdate",null);o([l()],d.prototype,"isbn",null);o([l()],d.prototype,"issue",null);o([l()],d.prototype,"item_count",null);o([l()],d.prototype,"item_size",null);o([l()],d.prototype,"language",null);o([l()],d.prototype,"length",null);o([l()],d.prototype,"licenseurl",null);o([l()],d.prototype,"lineage",null);o([l()],d.prototype,"month",null);o([l()],d.prototype,"mediatype",null);o([l()],d.prototype,"noindex",null);o([l()],d.prototype,"notes",null);o([l()],d.prototype,"num_favorites",null);o([l()],d.prototype,"num_reviews",null);o([l()],d.prototype,"openlibrary_edition",null);o([l()],d.prototype,"openlibrary_work",null);o([l()],d.prototype,"page_progression",null);o([l()],d.prototype,"paginated",null);o([l()],d.prototype,"partner",null);o([l()],d.prototype,"post_text",null);o([l()],d.prototype,"ppi",null);o([l()],d.prototype,"publicdate",null);o([l()],d.prototype,"publisher",null);o([l()],d.prototype,"reviewdate",null);o([l()],d.prototype,"reviews_allowed",null);o([l()],d.prototype,"rights",null);o([l()],d.prototype,"rights_holder",null);o([l()],d.prototype,"runtime",null);o([l()],d.prototype,"scanner",null);o([l()],d.prototype,"segments",null);o([l()],d.prototype,"shotlist",null);o([l()],d.prototype,"source",null);o([l()],d.prototype,"sponsor",null);o([l()],d.prototype,"start_localtime",null);o([l()],d.prototype,"start_time",null);o([l()],d.prototype,"stop_time",null);o([l()],d.prototype,"subject",null);o([l()],d.prototype,"taper",null);o([l()],d.prototype,"title",null);o([l()],d.prototype,"title_alt_script",null);o([l()],d.prototype,"transferer",null);o([l()],d.prototype,"track",null);o([l()],d.prototype,"type",null);o([l()],d.prototype,"uploader",null);o([l()],d.prototype,"utc_offset",null);o([l()],d.prototype,"venue",null);o([l()],d.prototype,"volume",null);o([l()],d.prototype,"week",null);o([l()],d.prototype,"year",null);class pe{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?j.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?j.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?$.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}o([l()],pe.prototype,"reviewdate",null);o([l()],pe.prototype,"createdate",null);o([l()],pe.prototype,"stars",null);const ht=[{label:"title",get:a=>a.title},{label:"mediatype",get:a=>a.mediatype},{label:"creator",get:a=>a.creator},{label:"collection",get:a=>a.collection},{label:"subject",get:a=>a.subject},{label:"description",get:a=>a.description},{label:"date",get:a=>a.date},{label:"addeddate",get:a=>a.addeddate},{label:"publicdate",get:a=>a.publicdate},{label:"language",get:a=>a.language},{label:"duration",get:a=>a.duration},{label:"runtime",get:a=>a.runtime},{label:"downloads",get:a=>a.downloads},{label:"item_size",get:a=>a.item_size},{label:"files_count",get:a=>a.files_count},{label:"venue",get:a=>a.venue},{label:"taper",get:a=>a.taper},{label:"source",get:a=>a.source},{label:"lineage",get:a=>a.lineage}],Se=["gd73-06-10.sbd.hollister.174.sbeok.shnf","nasa"];function q(a){return a==null?"—":a instanceof Date?a.toISOString():Array.isArray(a)?a.length?a.map(q).join(", "):"—":typeof a=="object"?JSON.stringify(a):String(a)}let x=class extends z{constructor(){super(...arguments),this.identifier=Se[0],this.loading=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){var e;const t=this.identifier.trim();if(!t){this.error="Enter an archive.org identifier.";return}this.loading=!0,this.error=void 0;try{const n=await fetch(`https://archive.org/metadata/${encodeURIComponent(t)}`);if(!n.ok)throw new Error(`Request failed (${n.status})`);const r=await n.json();if(!r.metadata)throw new Error(`No item found for identifier “${t}”.`);this.metadata=new d(r.metadata),this.fileCount=(e=r.files)===null||e===void 0?void 0:e.length}catch(n){this.metadata=void 0,this.fileCount=void 0,this.error=n instanceof Error?n.message:"Failed to load item."}finally{this.loading=!1}}parseJson(){var e,t,n;const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("textarea"),i=(t=r==null?void 0:r.value)!==null&&t!==void 0?t:"";if(!i.trim()){this.error="Paste some metadata JSON first.";return}try{const s=JSON.parse(i),h=(n=s.metadata)!==null&&n!==void 0?n:s;this.metadata=new d(h),this.fileCount=void 0,this.error=void 0}catch{this.error="Could not parse that as JSON."}}render(){return E`
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
          ${this.loading?"Loading…":"Load item"}
        </button>
      </form>

      <p class="examples">
        Try:
        ${Se.map(e=>E`<button
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

      ${this.error?E`<p class="error" role="alert">${this.error}</p>`:w}
      ${this.metadata?this.renderResult(this.metadata):w}
    `}renderResult(e){const{identifier:t}=e;return E`
      <h2>
        ${t?E`<a
              href="https://archive.org/details/${t}"
              target="_blank"
              rel="noopener"
              >${t}</a
            >`:"Parsed metadata"}
      </h2>
      ${this.fileCount!==void 0?E`<p class="meta">${this.fileCount} files in response</p>`:w}

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
          ${ht.map(n=>{const r=n.get(e);return r?E`
              <tr>
                <td><code>${n.label}</code></td>
                <td>${q(r.value)}</td>
                <td>${q(r.values)}</td>
                <td class="raw">${q(r.rawValue)}</td>
              </tr>
            `:w})}
        </tbody>
      </table>
    `}onIdentifierInput(e){this.identifier=e.currentTarget.value}onSubmit(e){e.preventDefault(),this.loadFromArchive()}useExample(e){this.identifier=e,this.loadFromArchive()}};x.styles=Te`
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
  `;o([I()],x.prototype,"identifier",void 0);o([I()],x.prototype,"metadata",void 0);o([I()],x.prototype,"fileCount",void 0);o([I()],x.prototype,"loading",void 0);o([I()],x.prototype,"error",void 0);x=o([Ye("app-root")],x);
