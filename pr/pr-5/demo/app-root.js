(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();function d(a,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,e,t,r);else for(var h=a.length-1;h>=0;h--)(s=a[h])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,ae=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),de=new WeakMap;let $e=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ae&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&de.set(t,e))}return e}toString(){return this.cssText}};const Ee=a=>new $e(typeof a=="string"?a:a+"",void 0,ie),Pe=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((r,n,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+a[i+1],a[0]);return new $e(t,a,ie)},xe=(a,e)=>{if(ae)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),n=L.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=t.cssText,a.appendChild(r)}},oe=ae?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Ee(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ce,defineProperty:Ne,getOwnPropertyDescriptor:Oe,getOwnPropertyNames:Ue,getOwnPropertySymbols:Te,getPrototypeOf:Re}=Object,A=globalThis,ue=A.trustedTypes,He=ue?ue.emptyScript:"",I=A.reactiveElementPolyfillSupport,O=(a,e)=>a,G={toAttribute(a,e){switch(e){case Boolean:a=a?He:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},Me=(a,e)=>!Ce(a,e),le={attribute:!0,type:String,converter:G,reflect:!1,hasChanged:Me};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&Ne(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=Oe(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const h=n==null?void 0:n.call(this);i.call(this,s),this.requestUpdate(e,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const e=Re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const t=this.properties,r=[...Ue(t),...Te(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(oe(n))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){var i;const r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(n!==void 0&&r.reflect===!0){const s=(((i=r.converter)==null?void 0:i.toAttribute)!==void 0?r.converter:G).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Eh.get(e);if(n!==void 0&&this._$Em!==n){const s=r.getPropertyOptions(n),h=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:G;this._$Em=n,this[n]=h.fromAttribute(t,s.type),this._$Em=null}}requestUpdate(e,t,r){if(e!==void 0){if(r??(r=this.constructor.getPropertyOptions(e)),!(r.hasChanged??Me)(this[e],t))return;this.P(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n)s.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(r=this._$EO)==null||r.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(t)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[O("elementProperties")]=new Map,P[O("finalized")]=new Map,I==null||I({ReactiveElement:P}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,V=U.trustedTypes,he=V?V.createPolicy("lit-html",{createHTML:a=>a}):void 0,ve="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+v,De=`<${Ae}>`,E=document,R=()=>E.createComment(""),H=a=>a===null||typeof a!="object"&&typeof a!="function",se=Array.isArray,ze=a=>se(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",W=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,fe=/>/g,b=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,_e=/"/g,be=/^(?:script|style|textarea|title)$/i,ke=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Le=ke(1),x=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),we=new WeakMap,S=E.createTreeWalker(E,129);function Se(a,e){if(!se(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}const Ve=(a,e)=>{const t=a.length-1,r=[];let n,i=e===2?"<svg>":e===3?"<math>":"",s=N;for(let h=0;h<t;h++){const l=a[h];let c,_,p=-1,y=0;for(;y<l.length&&(s.lastIndex=y,_=s.exec(l),_!==null);)y=s.lastIndex,s===N?_[1]==="!--"?s=pe:_[1]!==void 0?s=fe:_[2]!==void 0?(be.test(_[2])&&(n=RegExp("</"+_[2],"g")),s=b):_[3]!==void 0&&(s=b):s===b?_[0]===">"?(s=n??N,p=-1):_[1]===void 0?p=-2:(p=s.lastIndex-_[2].length,c=_[1],s=_[3]===void 0?b:_[3]==='"'?_e:ce):s===_e||s===ce?s=b:s===pe||s===fe?s=N:(s=b,n=void 0);const M=s===b&&a[h+1].startsWith("/>")?" ":"";i+=s===N?l+De:p>=0?(r.push(c),l.slice(0,p)+ve+l.slice(p)+v+M):l+v+(p===-2?h:M)}return[Se(a,i+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class D{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0;const h=e.length-1,l=this.parts,[c,_]=Ve(e,t);if(this.el=D.createElement(c,r),S.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=S.nextNode())!==null&&l.length<h;){if(n.nodeType===1){if(n.hasAttributes())for(const p of n.getAttributeNames())if(p.endsWith(ve)){const y=_[s++],M=n.getAttribute(p).split(v),k=/([.?@])?(.*)/.exec(y);l.push({type:1,index:i,name:k[2],strings:M,ctor:k[1]==="."?Be:k[1]==="?"?Fe:k[1]==="@"?Ie:F}),n.removeAttribute(p)}else p.startsWith(v)&&(l.push({type:6,index:i}),n.removeAttribute(p));if(be.test(n.tagName)){const p=n.textContent.split(v),y=p.length-1;if(y>0){n.textContent=V?V.emptyScript:"";for(let M=0;M<y;M++)n.append(p[M],R()),S.nextNode(),l.push({type:2,index:++i});n.append(p[y],R())}}}else if(n.nodeType===8)if(n.data===Ae)l.push({type:2,index:i});else{let p=-1;for(;(p=n.data.indexOf(v,p+1))!==-1;)l.push({type:7,index:i}),p+=v.length-1}i++}}static createElement(e,t){const r=E.createElement("template");return r.innerHTML=e,r}}function C(a,e,t=a,r){var s,h;if(e===x)return e;let n=r!==void 0?(s=t._$Co)==null?void 0:s[r]:t._$Cl;const i=H(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==i&&((h=n==null?void 0:n._$AO)==null||h.call(n,!1),i===void 0?n=void 0:(n=new i(a),n._$AT(a,t,r)),r!==void 0?(t._$Co??(t._$Co=[]))[r]=n:t._$Cl=n),n!==void 0&&(e=C(a,n._$AS(a,e.values),n,r)),e}class je{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,n=((e==null?void 0:e.creationScope)??E).importNode(t,!0);S.currentNode=n;let i=S.nextNode(),s=0,h=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new z(i,i.nextSibling,this,e):l.type===1?c=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(c=new We(i,this,e)),this._$AV.push(c),l=r[++h]}s!==(l==null?void 0:l.index)&&(i=S.nextNode(),s++)}return S.currentNode=E,n}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class z{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=C(this,e,t),H(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ze(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=D.createElement(Se(r.h,r.h[0]),this.options)),r);if(((i=this._$AH)==null?void 0:i._$AD)===n)this._$AH.p(t);else{const s=new je(n,this),h=s.u(this.options);s.p(t),this.T(h),this._$AH=s}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new D(e)),t}k(e){se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,n=0;for(const i of e)n===t.length?t.push(r=new z(this.O(R()),this.O(R()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,t);e&&e!==this._$AB;){const n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}_$AI(e,t=this,r,n){const i=this.strings;let s=!1;if(i===void 0)e=C(this,e,t,0),s=!H(e)||e!==this._$AH&&e!==x,s&&(this._$AH=e);else{const h=e;let l,c;for(e=i[0],l=0;l<i.length-1;l++)c=C(this,h[r+l],t,l),c===x&&(c=this._$AH[l]),s||(s=!H(c)||c!==this._$AH[l]),c===w?e=w:e!==w&&(e+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!n&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Be extends F{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}}class Fe extends F{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}}class Ie extends F{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=C(this,e,t,0)??w)===x)return;const r=this._$AH,n=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==w&&(r===w||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class We{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){C(this,e)}}const K=U.litHtmlPolyfillSupport;K==null||K(D,z),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.2.1");const Ke=(a,e,t)=>{const r=(t==null?void 0:t.renderBefore)??e;let n=r._$litPart$;if(n===void 0){const i=(t==null?void 0:t.renderBefore)??null;r._$litPart$=n=new z(e.insertBefore(R(),i),i,void 0,t??{})}return n._$AI(a),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return x}}var ye;T._$litElement$=!0,T.finalized=!0,(ye=globalThis.litElementHydrateSupport)==null||ye.call(globalThis,{LitElement:T});const J=globalThis.litElementPolyfillSupport;J==null||J({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=a=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(a,e)}):customElements.define(a,e)};function o(a){let e,t,r;return e=a,(n,i,s)=>{if(s.value!=null)s.value=ge(s.value,e,t,r);else if(s.get!=null)s.get=ge(s.get,e,t,r);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Z=new Map;function ge(a,e,t=0,r){const n=Symbol("__memoized_map__");return function(...i){let s;this.hasOwnProperty(n)||Object.defineProperty(this,n,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let h=this[n];if(Array.isArray(r))for(const l of r)Z.has(l)?Z.get(l).push(h):Z.set(l,[h]);if(e||i.length>0||t>0){let l;e===!0?l=i.map(p=>p.toString()).join("!"):e?l=e.apply(this,i):l=i[0];const c=`${l}__timestamp`;let _=!1;if(t>0)if(!h.has(c))_=!0;else{let p=h.get(c);_=Date.now()-p>t}h.has(l)&&!_?s=h.get(l):(s=a.apply(this,i),h.set(l,s),t>0&&h.set(c,Date.now()))}else{const l=this;h.has(l)?s=h.get(l):(s=a.apply(this,i),h.set(l,s))}return s}}class Q{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:!!e}}Q.shared=new Q;class j{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}j.shared=new j;class X{parseValue(e){return j.shared.parseValue(e)}}X.shared=new X;class Y{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const r=Date.parse(t);if(Number.isNaN(r))return;let n=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(n=new Date(n.getTime()+n.getTimezoneOffset()*1e3*60)),n}}Y.shared=new Y;class ee{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let r;return t.length===1?r=this.parseNumberFormat(t[0]):r=this.parseColonSeparatedFormat(t),r}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const r=e.map((n,i)=>{const s=parseFloat(n);if(Number.isNaN(s))return t=!0,0;const l=60**(e.length-1-i);return s*Math.floor(l)}).reduce((n,i)=>n+i,0);return t?void 0:r}}ee.shared=new ee;class te{parseValue(e){if(typeof e=="string")return e}}te.shared=new te;class Ze{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let r=[];for(const n of this.separators)if(r=t.split(n),r.length>1)break;return this.parseListValues(r)}parseListValues(e){const r=e.map(i=>i.trim()).map(i=>this.parser.parseValue(i)),n=[];return r.forEach(i=>{i!==void 0&&n.push(i)}),n}}class ne{parseValue(e){if(typeof e=="string")return e}}ne.shared=new ne;class B{parseValue(e){return String(e)}}B.shared=new B;class m{get values(){return this.parseRawValue()}get value(){return this.values[0]}constructor(e,t){this.parser=e,this.rawValue=t}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(r=>{const n=this.parser.parseValue(r);Array.isArray(n)?t.push(...n):n!==void 0&&t.push(n)}),t}}d([o()],m.prototype,"values",null);d([o()],m.prototype,"value",null);class qe extends m{constructor(e){super(Q.shared,e)}}class $ extends m{constructor(e){super(Y.shared,e)}}class q extends m{constructor(e){super(ee.shared,e)}}class g extends m{constructor(e){super(j.shared,e)}}class f extends m{constructor(e){super(B.shared,e)}}class Ge extends m{constructor(e){super(ne.shared,e)}}class me extends m{constructor(e){super(X.shared,e)}}class Qe extends m{constructor(e){super(te.shared,e)}}class Xe extends m{constructor(e,t){super(t,e)}}class Ye extends Xe{constructor(e){const t=new Ze(B.shared);super(e,t)}}class u{get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new $(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new f(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new g(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new g(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new f(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new f(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new me(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new f(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new f(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new f(this.rawMetadata.creator):void 0}get collection_layout(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_layout?new f(this.rawMetadata.collection_layout):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new $(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new f(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new g(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new q(this.rawMetadata.duration):void 0}get external_identifier(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new f((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new g(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new $(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new f(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new f(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new g(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new me(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new f(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new q(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new f(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new g(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Qe(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new qe(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new f(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new g(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new g(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new f(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new f(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new Ge(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new f(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new g(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new $(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new f(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new $(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new q(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new f(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new f(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new $(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new $(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new $(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new Ye(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new f(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new f(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new f(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new g(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new f(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new f(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new g(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new f(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new f(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new g(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new $(this.rawMetadata.year):void 0}constructor(e){this.rawMetadata=e}}d([o()],u.prototype,"addeddate",null);d([o()],u.prototype,"audio_codec",null);d([o()],u.prototype,"audio_sample_rate",null);d([o()],u.prototype,"avg_rating",null);d([o()],u.prototype,"collection",null);d([o()],u.prototype,"collections_raw",null);d([o()],u.prototype,"collection_size",null);d([o()],u.prototype,"contributor",null);d([o()],u.prototype,"coverage",null);d([o()],u.prototype,"creator",null);d([o()],u.prototype,"collection_layout",null);d([o()],u.prototype,"date",null);d([o()],u.prototype,"description",null);d([o()],u.prototype,"downloads",null);d([o()],u.prototype,"duration",null);d([o()],u.prototype,"external_identifier",null);d([o()],u.prototype,"files_count",null);d([o()],u.prototype,"indexdate",null);d([o()],u.prototype,"isbn",null);d([o()],u.prototype,"issue",null);d([o()],u.prototype,"item_count",null);d([o()],u.prototype,"item_size",null);d([o()],u.prototype,"language",null);d([o()],u.prototype,"length",null);d([o()],u.prototype,"lineage",null);d([o()],u.prototype,"month",null);d([o()],u.prototype,"mediatype",null);d([o()],u.prototype,"noindex",null);d([o()],u.prototype,"notes",null);d([o()],u.prototype,"num_favorites",null);d([o()],u.prototype,"num_reviews",null);d([o()],u.prototype,"openlibrary_edition",null);d([o()],u.prototype,"openlibrary_work",null);d([o()],u.prototype,"page_progression",null);d([o()],u.prototype,"partner",null);d([o()],u.prototype,"ppi",null);d([o()],u.prototype,"publicdate",null);d([o()],u.prototype,"publisher",null);d([o()],u.prototype,"reviewdate",null);d([o()],u.prototype,"runtime",null);d([o()],u.prototype,"scanner",null);d([o()],u.prototype,"source",null);d([o()],u.prototype,"start_localtime",null);d([o()],u.prototype,"start_time",null);d([o()],u.prototype,"stop_time",null);d([o()],u.prototype,"subject",null);d([o()],u.prototype,"taper",null);d([o()],u.prototype,"title",null);d([o()],u.prototype,"transferer",null);d([o()],u.prototype,"track",null);d([o()],u.prototype,"type",null);d([o()],u.prototype,"uploader",null);d([o()],u.prototype,"utc_offset",null);d([o()],u.prototype,"venue",null);d([o()],u.prototype,"volume",null);d([o()],u.prototype,"week",null);d([o()],u.prototype,"year",null);let re=class extends T{constructor(){super(...arguments),this.metadata=new u({identifier:"foo",addeddate:"2021-01-01",collection:["foo","bar"],description:"A foo that is also a bar",duration:"1:23:45",mediatype:"audio"})}firstUpdated(e){super.firstUpdated(e),console.log("Metadata:",this.metadata)}render(){var e,t,r,n,i;return Le`
      <h1>Metadata Demo</h1>
      <small><i>Open the JS console to see the Metadata object</i></small>

      <h2>Raw Metadata</h2>
      <p>${JSON.stringify(this.metadata.rawMetadata)}</p>

      <h2>Parsed Values</h2>
      <table>
        <thead>
          <th>Key</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr>
            <td>Identifier</td>
            <td>${this.metadata.identifier}</td>
          </tr>
          <tr>
            <td>Addeddate</td>
            <td>${(e=this.metadata.addeddate)===null||e===void 0?void 0:e.value}</td>
          </tr>
          <tr>
            <td>Collection</td>
            <td>${(t=this.metadata.collection)===null||t===void 0?void 0:t.values.join(", ")}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>${(r=this.metadata.description)===null||r===void 0?void 0:r.value}</td>
          </tr>
          <tr>
            <td>Duration</td>
            <td>${(n=this.metadata.duration)===null||n===void 0?void 0:n.value}</td>
          </tr>
          <tr>
            <td>MediaType</td>
            <td>${(i=this.metadata.mediatype)===null||i===void 0?void 0:i.value}</td>
          </tr>
        </tbody>
      </table>
    `}};re.styles=Pe`
    :host {
      display: block;
    }
  `;re=d([Je("app-root")],re);
