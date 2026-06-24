(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function o(n,e,t,a){var r=arguments.length,s=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,a);else for(var h=n.length-1;h>=0;h--)(i=n[h])&&(s=(r<3?i(s):r>3?i(e,t,s):i(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,de=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ue=Symbol(),fe=new WeakMap;let Ve=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(de&&e===void 0){const a=t!==void 0&&t.length===1;a&&(e=fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&fe.set(t,e))}return e}toString(){return this.cssText}};const Te=n=>new Ve(typeof n=="string"?n:n+"",void 0,ue),Re=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((a,r,s)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new Ve(t,n,ue)},ze=(n,e)=>{if(de)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),r=q.litNonce;r!==void 0&&a.setAttribute("nonce",r),a.textContent=t.cssText,n.appendChild(a)}},we=de?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return Te(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:He,getOwnPropertyDescriptor:je,getOwnPropertyNames:Le,getOwnPropertySymbols:Fe,getPrototypeOf:Ie}=Object,A=globalThis,ge=A.trustedTypes,Be=ge?ge.emptyScript:"",ee=A.reactiveElementPolyfillSupport,R=(n,e)=>n,K={toAttribute(n,e){switch(e){case Boolean:n=n?Be:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},he=(n,e)=>!De(n,e),me={attribute:!0,type:String,converter:K,reflect:!1,useDefault:!1,hasChanged:he};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);let N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),r=this.getPropertyDescriptor(e,a,t);r!==void 0&&He(this.prototype,e,r)}}static getPropertyDescriptor(e,t,a){const{get:r,set:s}=je(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:r,set(i){const h=r==null?void 0:r.call(this);s==null||s.call(this,i),this.requestUpdate(e,h,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const e=Ie(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const t=this.properties,a=[...Le(t),...Fe(t)];for(const r of a)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[a,r]of t)this.elementProperties.set(a,r)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const r=this._$Eu(t,a);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const r of a)t.unshift(we(r))}else e!==void 0&&t.push(we(e));return t}static _$Eu(e,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ze(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var s;const a=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,a);if(r!==void 0&&a.reflect===!0){const i=(((s=a.converter)==null?void 0:s.toAttribute)!==void 0?a.converter:K).toAttribute(t,a.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){var s,i;const a=this.constructor,r=a._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const h=a.getPropertyOptions(r),u=typeof h.converter=="function"?{fromAttribute:h.converter}:((s=h.converter)==null?void 0:s.fromAttribute)!==void 0?h.converter:K;this._$Em=r;const f=u.fromAttribute(t,h.type);this[r]=f??((i=this._$Ej)==null?void 0:i.get(r))??f,this._$Em=null}}requestUpdate(e,t,a,r=!1,s){var i;if(e!==void 0){const h=this.constructor;if(r===!1&&(s=this[e]),a??(a=h.getPropertyOptions(e)),!((a.hasChanged??he)(s,t)||a.useDefault&&a.reflect&&s===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(h._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:r,wrapped:s},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:h}=i,u=this[s];h!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,i,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this._$EO)==null||a.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var r;return(r=a.hostUpdated)==null?void 0:r.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[R("elementProperties")]=new Map,N[R("finalized")]=new Map,ee==null||ee({ReactiveElement:N}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,ye=n=>n,Z=z.trustedTypes,_e=Z?Z.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ne="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Oe="?"+M,Je=`<${Oe}>`,V=document,H=()=>V.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",pe=Array.isArray,qe=n=>pe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",te=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,be=/>/g,S=RegExp(`>|${te}(?:([^\\s"'>=/]+)(${te}*=${te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,Me=/"/g,ke=/^(?:script|style|textarea|title)$/i,We=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),E=We(1),O=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Ae=new WeakMap,P=V.createTreeWalker(V,129);function Ue(n,e){if(!pe(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(e):e}const Ke=(n,e)=>{const t=n.length-1,a=[];let r,s=e===2?"<svg>":e===3?"<math>":"",i=T;for(let h=0;h<t;h++){const u=n[h];let f,g,c=-1,_=0;for(;_<u.length&&(i.lastIndex=_,g=i.exec(u),g!==null);)_=i.lastIndex,i===T?g[1]==="!--"?i=$e:g[1]!==void 0?i=be:g[2]!==void 0?(ke.test(g[2])&&(r=RegExp("</"+g[2],"g")),i=S):g[3]!==void 0&&(i=S):i===S?g[0]===">"?(i=r??T,c=-1):g[1]===void 0?c=-2:(c=i.lastIndex-g[2].length,f=g[1],i=g[3]===void 0?S:g[3]==='"'?Me:ve):i===Me||i===ve?i=S:i===$e||i===be?i=T:(i=S,r=void 0);const b=i===S&&n[h+1].startsWith("/>")?" ":"";s+=i===T?u+Je:c>=0?(a.push(f),u.slice(0,c)+Ne+u.slice(c)+M+b):u+M+(c===-2?h:b)}return[Ue(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class L{constructor({strings:e,_$litType$:t},a){let r;this.parts=[];let s=0,i=0;const h=e.length-1,u=this.parts,[f,g]=Ke(e,t);if(this.el=L.createElement(f,a),P.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=P.nextNode())!==null&&u.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(Ne)){const _=g[i++],b=r.getAttribute(c).split(M),J=/([.?@])?(.*)/.exec(_);u.push({type:1,index:s,name:J[2],strings:b,ctor:J[1]==="."?Xe:J[1]==="?"?Ge:J[1]==="@"?Qe:Y}),r.removeAttribute(c)}else c.startsWith(M)&&(u.push({type:6,index:s}),r.removeAttribute(c));if(ke.test(r.tagName)){const c=r.textContent.split(M),_=c.length-1;if(_>0){r.textContent=Z?Z.emptyScript:"";for(let b=0;b<_;b++)r.append(c[b],H()),P.nextNode(),u.push({type:2,index:++s});r.append(c[_],H())}}}else if(r.nodeType===8)if(r.data===Oe)u.push({type:2,index:s});else{let c=-1;for(;(c=r.data.indexOf(M,c+1))!==-1;)u.push({type:7,index:s}),c+=M.length-1}s++}}static createElement(e,t){const a=V.createElement("template");return a.innerHTML=e,a}}function k(n,e,t=n,a){var i,h;if(e===O)return e;let r=a!==void 0?(i=t._$Co)==null?void 0:i[a]:t._$Cl;const s=j(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=r:t._$Cl=r),r!==void 0&&(e=k(n,r._$AS(n,e.values),r,a)),e}class Ze{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,r=((e==null?void 0:e.creationScope)??V).importNode(t,!0);P.currentNode=r;let s=P.nextNode(),i=0,h=0,u=a[0];for(;u!==void 0;){if(i===u.index){let f;u.type===2?f=new I(s,s.nextSibling,this,e):u.type===1?f=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(f=new Ye(s,this,e)),this._$AV.push(f),u=a[++h]}i!==(u==null?void 0:u.index)&&(s=P.nextNode(),i++)}return P.currentNode=V,r}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class I{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),j(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):qe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&j(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:a}=e,r=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=L.createElement(Ue(a.h,a.h[0]),this.options)),a);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const i=new Ze(r,this),h=i.u(this.options);i.p(t),this.T(h),this._$AH=i}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new L(e)),t}k(e){pe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,r=0;for(const s of e)r===t.length?t.push(a=new I(this.O(H()),this.O(H()),this,this.options)):a=t[r],a._$AI(s),r++;r<t.length&&(this._$AR(a&&a._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const r=ye(e).nextSibling;ye(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,r,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=w}_$AI(e,t=this,a,r){const s=this.strings;let i=!1;if(s===void 0)e=k(this,e,t,0),i=!j(e)||e!==this._$AH&&e!==O,i&&(this._$AH=e);else{const h=e;let u,f;for(e=s[0],u=0;u<s.length-1;u++)f=k(this,h[a+u],t,u),f===O&&(f=this._$AH[u]),i||(i=!j(f)||f!==this._$AH[u]),f===w?e=w:e!==w&&(e+=(f??"")+s[u+1]),this._$AH[u]=f}i&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xe extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}class Ge extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}}class Qe extends Y{constructor(e,t,a,r,s){super(e,t,a,r,s),this.type=5}_$AI(e,t=this){if((e=k(this,e,t,0)??w)===O)return;const a=this._$AH,r=e===w&&a!==w||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,s=e!==w&&(a===w||r);r&&this.element.removeEventListener(this.name,this,a),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ye{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const re=z.litHtmlPolyfillSupport;re==null||re(L,I),(z.litHtmlVersions??(z.litHtmlVersions=[])).push("3.3.3");const et=(n,e,t)=>{const a=(t==null?void 0:t.renderBefore)??e;let r=a._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;a._$litPart$=r=new I(e.insertBefore(H(),s),s,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class D extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return O}}var Ce;D._$litElement$=!0,D.finalized=!0,(Ce=C.litElementHydrateSupport)==null||Ce.call(C,{LitElement:D});const ae=C.litElementPolyfillSupport;ae==null||ae({LitElement:D});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:he},at=(n=rt,e,t)=>{const{kind:a,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),a==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(t.name,n),a==="accessor"){const{name:i}=t;return{set(h){const u=e.get.call(this);e.set.call(this,h),this.requestUpdate(i,u,n,!0,h)},init(h){return h!==void 0&&this.C(i,void 0,n,h),h}}}if(a==="setter"){const{name:i}=t;return function(h){const u=this[i];e.call(this,h),this.requestUpdate(i,u,n,!0,h)}}throw Error("Unsupported decorator location: "+a)};function nt(n){return(e,t)=>typeof t=="object"?at(n,e,t):((a,r,s)=>{const i=r.hasOwnProperty(s);return r.constructor.createProperty(s,a),i?Object.getOwnPropertyDescriptor(r,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(n){return nt({...n,state:!0,attribute:!1})}function l(n){let e,t,a;return e=n,(r,s,i)=>{if(i.value!=null)i.value=xe(i.value,e,t,a);else if(i.get!=null)i.get=xe(i.get,e,t,a);else throw"Only put a Memoize() decorator on a method or get accessor."}}const ne=new Map;function xe(n,e,t=0,a){const r=Symbol("__memoized_map__");return function(...s){let i;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[r];if(Array.isArray(a))for(const u of a)ne.has(u)?ne.get(u).push(h):ne.set(u,[h]);if(e||s.length>0||t>0){let u;e===!0?u=s.map(c=>c.toString()).join("!"):e?u=e.apply(this,s):u=s[0];const f=`${u}__timestamp`;let g=!1;if(t>0)if(!h.has(f))g=!0;else{let c=h.get(f);g=Date.now()-c>t}h.has(u)&&!g?i=h.get(u):(i=n.apply(this,s),h.set(u,i),t>0&&h.set(f,Date.now()))}else{const u=this;h.has(u)?i=h.get(u):(i=n.apply(this,s),h.set(u,i))}return i}}class ie{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}ie.shared=new ie;class ${parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}$.shared=new $;class X{parseValue(e){return $.shared.parseValue(e)}}X.shared=new X;class F{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const a=Date.parse(t);if(Number.isNaN(a))return;let r=new Date(t);return(t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}F.shared=new F;class G{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let a;return t.length===1?a=this.parseNumberFormat(t[0]):a=this.parseColonSeparatedFormat(t),a}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const a=e.map((r,s)=>{const i=parseFloat(r);if(Number.isNaN(i))return t=!0,0;const u=60**(e.length-1-s);return i*Math.floor(u)}).reduce((r,s)=>r+s,0);return t?void 0:a}}G.shared=new G;class oe{parseValue(e){if(typeof e=="string")return e}}oe.shared=new oe;class st{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let a=[];for(const r of this.separators)if(a=t.split(r),a.length>1)break;return this.parseListValues(a)}parseListValues(e){const a=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return a.forEach(s=>{s!==void 0&&r.push(s)}),r}}class le{parseValue(e){if(typeof e=="string")return e}}le.shared=new le;class Q{parseValue(e){return String(e)}}Q.shared=new Q;class U{get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){if(this.rawValue.mtime==null)return;const e=$.shared.parseValue(this.rawValue.mtime);if(e)return new Date(e*1e3)}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size!=null?X.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length!=null?G.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height!=null?$.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width!=null?$.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track!=null?$.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}constructor(e={}){this.rawValue=e}}o([l()],U.prototype,"mtime",null);o([l()],U.prototype,"size",null);o([l()],U.prototype,"length",null);o([l()],U.prototype,"height",null);o([l()],U.prototype,"width",null);o([l()],U.prototype,"track",null);class y{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(a=>{const r=this.parser.parseValue(a);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}o([l()],y.prototype,"values",null);o([l()],y.prototype,"value",null);class Se extends y{constructor(e){super(ie.shared,e)}}class v extends y{constructor(e){super(F.shared,e)}}class se extends y{constructor(e){super(G.shared,e)}}class m extends y{constructor(e){super($.shared,e)}}class p extends y{constructor(e){super(Q.shared,e)}}class it extends y{constructor(e){super(le.shared,e)}}class Ee extends y{constructor(e){super(X.shared,e)}}class ot extends y{constructor(e){super(oe.shared,e)}}class lt extends y{constructor(e,t){super(t,e)}}class dt extends lt{constructor(e){const t=new st(Q.shared);super(e,t)}}class ut{constructor(e){this.allowed=e}parseValue(e){return typeof e=="string"&&this.allowed.includes(e)?e:void 0}}class ht extends y{constructor(e,t){super(t,e)}}const pt=new ut(["true","none","frozen"]);class d{get identifier(){return this.rawMetadata.identifier}get addeddate(){return this.rawMetadata.addeddate!=null?new v(this.rawMetadata.addeddate):void 0}get audio_codec(){return this.rawMetadata.audio_codec!=null?new p(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){return this.rawMetadata.audio_sample_rate!=null?new m(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){return this.rawMetadata.avg_rating!=null?new m(this.rawMetadata.avg_rating):void 0}get collection(){return this.rawMetadata.collection!=null?new p(this.rawMetadata.collection):void 0}get collections_raw(){return this.rawMetadata.collections_raw!=null?new p(this.rawMetadata.collections_raw):void 0}get collection_size(){return this.rawMetadata.collection_size!=null?new Ee(this.rawMetadata.collection_size):void 0}get contact(){return this.rawMetadata.contact!=null?new p(this.rawMetadata.contact):void 0}get contributor(){return this.rawMetadata.contributor!=null?new p(this.rawMetadata.contributor):void 0}get coverage(){return this.rawMetadata.coverage!=null?new p(this.rawMetadata.coverage):void 0}get creator(){return this.rawMetadata.creator!=null?new p(this.rawMetadata.creator):void 0}get creator_alt_script(){return this.rawMetadata["creator-alt-script"]!=null?new p(this.rawMetadata["creator-alt-script"]):void 0}get credits(){return this.rawMetadata.credits!=null?new p(this.rawMetadata.credits):void 0}get collection_layout(){return this.rawMetadata.collection_layout!=null?new p(this.rawMetadata.collection_layout):void 0}get date(){return this.rawMetadata.date!=null?new v(this.rawMetadata.date):void 0}get description(){return this.rawMetadata.description!=null?new p(this.rawMetadata.description):void 0}get downloads(){return this.rawMetadata.downloads!=null?new m(this.rawMetadata.downloads):void 0}get duration(){return this.rawMetadata.duration!=null?new se(this.rawMetadata.duration):void 0}get external_identifier(){return this.rawMetadata["external-identifier"]!=null?new p(this.rawMetadata["external-identifier"]):void 0}get external_link(){return this.rawMetadata["external-link"]!=null?new p(this.rawMetadata["external-link"]):void 0}get files_count(){return this.rawMetadata.files_count!=null?new m(this.rawMetadata.files_count):void 0}get indexdate(){return this.rawMetadata.indexdate!=null?new v(this.rawMetadata.indexdate):void 0}get isbn(){return this.rawMetadata.isbn!=null?new p(this.rawMetadata.isbn):void 0}get issue(){return this.rawMetadata.issue!=null?new p(this.rawMetadata.issue):void 0}get item_count(){return this.rawMetadata.item_count!=null?new m(this.rawMetadata.item_count):void 0}get item_size(){return this.rawMetadata.item_size!=null?new Ee(this.rawMetadata.item_size):void 0}get language(){return this.rawMetadata.language!=null?new p(this.rawMetadata.language):void 0}get length(){return this.rawMetadata.length!=null?new se(this.rawMetadata.length):void 0}get licenseurl(){return this.rawMetadata.licenseurl!=null?new p(this.rawMetadata.licenseurl):void 0}get lineage(){return this.rawMetadata.lineage!=null?new p(this.rawMetadata.lineage):void 0}get month(){return this.rawMetadata.month!=null?new m(this.rawMetadata.month):void 0}get mediatype(){return this.rawMetadata.mediatype!=null?new ot(this.rawMetadata.mediatype):void 0}get noindex(){return this.rawMetadata.noindex!=null?new Se(this.rawMetadata.noindex):void 0}get notes(){return this.rawMetadata.notes!=null?new p(this.rawMetadata.notes):void 0}get num_favorites(){return this.rawMetadata.num_favorites!=null?new m(this.rawMetadata.num_favorites):void 0}get num_reviews(){return this.rawMetadata.num_reviews!=null?new m(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){return this.rawMetadata.openlibrary_edition!=null?new p(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){return this.rawMetadata.openlibrary_work!=null?new p(this.rawMetadata.openlibrary_work):void 0}get page_progression(){return this.rawMetadata.page_progression!=null?new it(this.rawMetadata.page_progression):void 0}get paginated(){return this.rawMetadata.paginated!=null?new Se(this.rawMetadata.paginated):void 0}get partner(){return this.rawMetadata.partner!=null?new p(this.rawMetadata.partner):void 0}get post_text(){return this.rawMetadata.post_text!=null?new p(this.rawMetadata.post_text):void 0}get ppi(){return this.rawMetadata.ppi!=null?new m(this.rawMetadata.ppi):void 0}get publicdate(){return this.rawMetadata.publicdate!=null?new v(this.rawMetadata.publicdate):void 0}get publisher(){return this.rawMetadata.publisher!=null?new p(this.rawMetadata.publisher):void 0}get reviewdate(){return this.rawMetadata.reviewdate!=null?new v(this.rawMetadata.reviewdate):void 0}get reviews_allowed(){return this.rawMetadata["reviews-allowed"]!=null?new ht(this.rawMetadata["reviews-allowed"],pt):void 0}get rights(){return this.rawMetadata.rights!=null?new p(this.rawMetadata.rights):void 0}get rights_holder(){var e;const t=(e=this.rawMetadata["rights-holder"])!==null&&e!==void 0?e:this.rawMetadata.rights_holder;return t!=null?new p(t):void 0}get runtime(){return this.rawMetadata.runtime!=null?new se(this.rawMetadata.runtime):void 0}get scanner(){return this.rawMetadata.scanner!=null?new p(this.rawMetadata.scanner):void 0}get segments(){return this.rawMetadata.segments!=null?new p(this.rawMetadata.segments):void 0}get shotlist(){return this.rawMetadata.shotlist!=null?new p(this.rawMetadata.shotlist):void 0}get source(){return this.rawMetadata.source!=null?new p(this.rawMetadata.source):void 0}get sponsor(){return this.rawMetadata.sponsor!=null?new p(this.rawMetadata.sponsor):void 0}get start_localtime(){return this.rawMetadata.start_localtime!=null?new v(this.rawMetadata.start_localtime):void 0}get start_time(){return this.rawMetadata.start_time!=null?new v(this.rawMetadata.start_time):void 0}get stop_time(){return this.rawMetadata.stop_time!=null?new v(this.rawMetadata.stop_time):void 0}get subject(){return this.rawMetadata.subject!=null?new dt(this.rawMetadata.subject):void 0}get taper(){return this.rawMetadata.taper!=null?new p(this.rawMetadata.taper):void 0}get title(){return this.rawMetadata.title!=null?new p(this.rawMetadata.title):void 0}get title_alt_script(){return this.rawMetadata["title-alt-script"]!=null?new p(this.rawMetadata["title-alt-script"]):void 0}get transferer(){return this.rawMetadata.transferer!=null?new p(this.rawMetadata.transferer):void 0}get track(){return this.rawMetadata.track!=null?new m(this.rawMetadata.track):void 0}get type(){return this.rawMetadata.type!=null?new p(this.rawMetadata.type):void 0}get uploader(){return this.rawMetadata.uploader!=null?new p(this.rawMetadata.uploader):void 0}get utc_offset(){return this.rawMetadata.utc_offset!=null?new m(this.rawMetadata.utc_offset):void 0}get venue(){return this.rawMetadata.venue!=null?new p(this.rawMetadata.venue):void 0}get volume(){return this.rawMetadata.volume!=null?new p(this.rawMetadata.volume):void 0}get week(){return this.rawMetadata.week!=null?new m(this.rawMetadata.week):void 0}get year(){return this.rawMetadata.year!=null?new m(this.rawMetadata.year):void 0}constructor(e={}){this.rawMetadata=e}}o([l()],d.prototype,"addeddate",null);o([l()],d.prototype,"audio_codec",null);o([l()],d.prototype,"audio_sample_rate",null);o([l()],d.prototype,"avg_rating",null);o([l()],d.prototype,"collection",null);o([l()],d.prototype,"collections_raw",null);o([l()],d.prototype,"collection_size",null);o([l()],d.prototype,"contact",null);o([l()],d.prototype,"contributor",null);o([l()],d.prototype,"coverage",null);o([l()],d.prototype,"creator",null);o([l()],d.prototype,"creator_alt_script",null);o([l()],d.prototype,"credits",null);o([l()],d.prototype,"collection_layout",null);o([l()],d.prototype,"date",null);o([l()],d.prototype,"description",null);o([l()],d.prototype,"downloads",null);o([l()],d.prototype,"duration",null);o([l()],d.prototype,"external_identifier",null);o([l()],d.prototype,"external_link",null);o([l()],d.prototype,"files_count",null);o([l()],d.prototype,"indexdate",null);o([l()],d.prototype,"isbn",null);o([l()],d.prototype,"issue",null);o([l()],d.prototype,"item_count",null);o([l()],d.prototype,"item_size",null);o([l()],d.prototype,"language",null);o([l()],d.prototype,"length",null);o([l()],d.prototype,"licenseurl",null);o([l()],d.prototype,"lineage",null);o([l()],d.prototype,"month",null);o([l()],d.prototype,"mediatype",null);o([l()],d.prototype,"noindex",null);o([l()],d.prototype,"notes",null);o([l()],d.prototype,"num_favorites",null);o([l()],d.prototype,"num_reviews",null);o([l()],d.prototype,"openlibrary_edition",null);o([l()],d.prototype,"openlibrary_work",null);o([l()],d.prototype,"page_progression",null);o([l()],d.prototype,"paginated",null);o([l()],d.prototype,"partner",null);o([l()],d.prototype,"post_text",null);o([l()],d.prototype,"ppi",null);o([l()],d.prototype,"publicdate",null);o([l()],d.prototype,"publisher",null);o([l()],d.prototype,"reviewdate",null);o([l()],d.prototype,"reviews_allowed",null);o([l()],d.prototype,"rights",null);o([l()],d.prototype,"rights_holder",null);o([l()],d.prototype,"runtime",null);o([l()],d.prototype,"scanner",null);o([l()],d.prototype,"segments",null);o([l()],d.prototype,"shotlist",null);o([l()],d.prototype,"source",null);o([l()],d.prototype,"sponsor",null);o([l()],d.prototype,"start_localtime",null);o([l()],d.prototype,"start_time",null);o([l()],d.prototype,"stop_time",null);o([l()],d.prototype,"subject",null);o([l()],d.prototype,"taper",null);o([l()],d.prototype,"title",null);o([l()],d.prototype,"title_alt_script",null);o([l()],d.prototype,"transferer",null);o([l()],d.prototype,"track",null);o([l()],d.prototype,"type",null);o([l()],d.prototype,"uploader",null);o([l()],d.prototype,"utc_offset",null);o([l()],d.prototype,"venue",null);o([l()],d.prototype,"volume",null);o([l()],d.prototype,"week",null);o([l()],d.prototype,"year",null);class ce{get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewer_itemname(){return this.rawValue.reviewer_itemname}get reviewdate(){return this.rawValue.reviewdate!=null?F.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate!=null?F.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars!=null?$.shared.parseValue(this.rawValue.stars):void 0}constructor(e={}){this.rawValue=e}}o([l()],ce.prototype,"reviewdate",null);o([l()],ce.prototype,"createdate",null);o([l()],ce.prototype,"stars",null);const ct=[{label:"title",get:n=>n.title},{label:"mediatype",get:n=>n.mediatype},{label:"creator",get:n=>n.creator},{label:"collection",get:n=>n.collection},{label:"subject",get:n=>n.subject},{label:"description",get:n=>n.description},{label:"date",get:n=>n.date},{label:"addeddate",get:n=>n.addeddate},{label:"publicdate",get:n=>n.publicdate},{label:"language",get:n=>n.language},{label:"duration",get:n=>n.duration},{label:"runtime",get:n=>n.runtime},{label:"downloads",get:n=>n.downloads},{label:"item_size",get:n=>n.item_size},{label:"files_count",get:n=>n.files_count},{label:"venue",get:n=>n.venue},{label:"taper",get:n=>n.taper},{label:"source",get:n=>n.source},{label:"lineage",get:n=>n.lineage}],Pe=["gd73-06-10.sbd.hollister.174.sbeok.shnf","nasa","goody","eventsounds_pack","womeningovernmen0000jame"];function W(n){return n==null?"—":n instanceof Date?n.toISOString():Array.isArray(n)?n.length?n.map(W).join(", "):"—":typeof n=="object"?JSON.stringify(n):String(n)}let x=class extends D{constructor(){super(...arguments),this.identifier=Pe[0],this.loading=!1}firstUpdated(){this.loadFromArchive()}async loadFromArchive(){var e;const t=this.identifier.trim();if(!t){this.error="Enter an archive.org identifier.";return}this.loading=!0,this.error=void 0;try{const a=await fetch(`https://archive.org/metadata/${encodeURIComponent(t)}`);if(!a.ok)throw new Error(`Request failed (${a.status})`);const r=await a.json();if(!r.metadata)throw new Error(`No item found for identifier “${t}”.`);this.metadata=new d(r.metadata),this.fileCount=(e=r.files)===null||e===void 0?void 0:e.length}catch(a){this.metadata=void 0,this.fileCount=void 0,this.error=a instanceof Error?a.message:"Failed to load item."}finally{this.loading=!1}}parseJson(){var e,t,a;const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector("textarea"),s=(t=r==null?void 0:r.value)!==null&&t!==void 0?t:"";if(!s.trim()){this.error="Paste some metadata JSON first.";return}try{const i=JSON.parse(s),h=(a=i.metadata)!==null&&a!==void 0?a:i;this.metadata=new d(h),this.fileCount=void 0,this.error=void 0}catch{this.error="Could not parse that as JSON."}}render(){return E`
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
        ${Pe.map(e=>E`<button
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
          ${ct.map(a=>{const r=a.get(e);return r?E`
              <tr>
                <td><code>${a.label}</code></td>
                <td>${W(r.value)}</td>
                <td>${W(r.values)}</td>
                <td class="raw">${W(r.rawValue)}</td>
              </tr>
            `:w})}
        </tbody>
      </table>
    `}onIdentifierInput(e){this.identifier=e.currentTarget.value}onSubmit(e){e.preventDefault(),this.loadFromArchive()}useExample(e){this.identifier=e,this.loadFromArchive()}};x.styles=Re`
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
  `;o([B()],x.prototype,"identifier",void 0);o([B()],x.prototype,"metadata",void 0);o([B()],x.prototype,"fileCount",void 0);o([B()],x.prototype,"loading",void 0);o([B()],x.prototype,"error",void 0);x=o([tt("app-root")],x);
