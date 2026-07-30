//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region node_modules/tslib/tslib.es6.mjs
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
//#endregion
//#region node_modules/@lit/reactive-element/css-tag.js
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$2 = globalThis, e$2 = t$2.ShadowRoot && (void 0 === t$2.ShadyCSS || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap();
var n$3 = class {
	constructor(t, e, o) {
		if (this._$cssResult$ = !0, o !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = t, this.t = e;
	}
	get styleSheet() {
		let t = this.o;
		const s = this.t;
		if (e$2 && void 0 === t) {
			const e = void 0 !== s && 1 === s.length;
			e && (t = o$4.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), e && o$4.set(s, t));
		}
		return t;
	}
	toString() {
		return this.cssText;
	}
};
var r$4 = (t) => new n$3("string" == typeof t ? t : t + "", void 0, s$2), i$3 = (t, ...e) => {
	return new n$3(1 === t.length ? t[0] : e.reduce((e, s, o) => e + ((t) => {
		if (!0 === t._$cssResult$) return t.cssText;
		if ("number" == typeof t) return t;
		throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
	})(s) + t[o + 1], t[0]), t, s$2);
}, S$1 = (s, o) => {
	if (e$2) s.adoptedStyleSheets = o.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
	else for (const e of o) {
		const o = document.createElement("style"), n = t$2.litNonce;
		void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
	}
}, c$2 = e$2 ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((t) => {
	let e = "";
	for (const s of t.cssRules) e += s.cssText;
	return r$4(e);
})(t) : t;
//#endregion
//#region node_modules/@lit/reactive-element/reactive-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var { is: i$2, defineProperty: e$1, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$3, getOwnPropertySymbols: o$3, getPrototypeOf: n$2 } = Object, a$1 = globalThis, c$1 = a$1.trustedTypes, l$1 = c$1 ? c$1.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (t, s) => t, u$1 = {
	toAttribute(t, s) {
		switch (s) {
			case Boolean:
				t = t ? l$1 : null;
				break;
			case Object:
			case Array: t = null == t ? t : JSON.stringify(t);
		}
		return t;
	},
	fromAttribute(t, s) {
		let i = t;
		switch (s) {
			case Boolean:
				i = null !== t;
				break;
			case Number:
				i = null === t ? null : Number(t);
				break;
			case Object:
			case Array: try {
				i = JSON.parse(t);
			} catch (t) {
				i = null;
			}
		}
		return i;
	}
}, f$1 = (t, s) => !i$2(t, s), b$1 = {
	attribute: !0,
	type: String,
	converter: u$1,
	reflect: !1,
	useDefault: !1,
	hasChanged: f$1
};
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y$1 = class extends HTMLElement {
	static addInitializer(t) {
		this._$Ei(), (this.l ??= []).push(t);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(t, s = b$1) {
		if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
			const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
			void 0 !== h && e$1(this.prototype, t, h);
		}
	}
	static getPropertyDescriptor(t, s, i) {
		const { get: e, set: r } = h$1(this.prototype, t) ?? {
			get() {
				return this[s];
			},
			set(t) {
				this[s] = t;
			}
		};
		return {
			get: e,
			set(s) {
				const h = e?.call(this);
				r?.call(this, s), this.requestUpdate(t, h, i);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(t) {
		return this.elementProperties.get(t) ?? b$1;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d$1("elementProperties"))) return;
		const t = n$2(this);
		t.finalize(), void 0 !== t.l && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$1("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
			const t = this.properties, s = [...r$3(t), ...o$3(t)];
			for (const i of s) this.createProperty(i, t[i]);
		}
		const t = this[Symbol.metadata];
		if (null !== t) {
			const s = litPropertyMetadata.get(t);
			if (void 0 !== s) for (const [t, i] of s) this.elementProperties.set(t, i);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (const [t, s] of this.elementProperties) {
			const i = this._$Eu(t, s);
			void 0 !== i && this._$Eh.set(i, t);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(s) {
		const i = [];
		if (Array.isArray(s)) {
			const e = new Set(s.flat(Infinity).reverse());
			for (const s of e) i.unshift(c$2(s));
		} else void 0 !== s && i.push(c$2(s));
		return i;
	}
	static _$Eu(t, s) {
		const i = s.attribute;
		return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
	}
	addController(t) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
	}
	removeController(t) {
		this._$EO?.delete(t);
	}
	_$E_() {
		const t = /* @__PURE__ */ new Map(), s = this.constructor.elementProperties;
		for (const i of s.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
		t.size > 0 && (this._$Ep = t);
	}
	createRenderRoot() {
		const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return S$1(t, this.constructor.elementStyles), t;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
	}
	enableUpdating(t) {}
	disconnectedCallback() {
		this._$EO?.forEach((t) => t.hostDisconnected?.());
	}
	attributeChangedCallback(t, s, i) {
		this._$AK(t, i);
	}
	_$ET(t, s) {
		const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
		if (void 0 !== e && !0 === i.reflect) {
			const h = (void 0 !== i.converter?.toAttribute ? i.converter : u$1).toAttribute(s, i.type);
			this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
		}
	}
	_$AK(t, s) {
		const i = this.constructor, e = i._$Eh.get(t);
		if (void 0 !== e && this._$Em !== e) {
			const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? { fromAttribute: t.converter } : void 0 !== t.converter?.fromAttribute ? t.converter : u$1;
			this._$Em = e;
			const r = h.fromAttribute(s, t.type);
			this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
		}
	}
	requestUpdate(t, s, i, e = !1, h) {
		if (void 0 !== t) {
			const r = this.constructor;
			if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? f$1)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
			this.C(t, s, i);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
		i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (t) {
			Promise.reject(t);
		}
		const t = this.scheduleUpdate();
		return null != t && await t, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (const [t, s] of this._$Ep) this[t] = s;
				this._$Ep = void 0;
			}
			const t = this.constructor.elementProperties;
			if (t.size > 0) for (const [s, i] of t) {
				const { wrapped: t } = i, e = this[s];
				!0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
			}
		}
		let t = !1;
		const s = this._$AL;
		try {
			t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t) => t.hostUpdate?.()), this.update(s)) : this._$EM();
		} catch (s) {
			throw t = !1, this._$EM(), s;
		}
		t && this._$AE(s);
	}
	willUpdate(t) {}
	_$AE(t) {
		this._$EO?.forEach((t) => t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(t) {
		return !0;
	}
	update(t) {
		this._$Eq &&= this._$Eq.forEach((t) => this._$ET(t, this[t])), this._$EM();
	}
	updated(t) {}
	firstUpdated(t) {}
};
y$1.elementStyles = [], y$1.shadowRootOptions = { mode: "open" }, y$1[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y$1[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y$1 }), (a$1.reactiveElementVersions ??= []).push("2.1.2");
//#endregion
//#region node_modules/lit-html/lit-html.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$1 = globalThis, i$1 = (t) => t, s$1 = t$1.trustedTypes, e = s$1 ? s$1.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, h = "$lit$", o$2 = `lit$${Math.random().toFixed(9).slice(2)}$`, n$1 = "?" + o$2, r$2 = `<${n$1}>`, l = document, c = () => l.createComment(""), a = (t) => null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, d = (t) => u(t) || "function" == typeof t?.[Symbol.iterator], f = "[ 	\n\f\r]", v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, x = (t) => (i, ...s) => ({
	_$litType$: t,
	strings: i,
	values: s
}), b = x(1), E = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), C = /* @__PURE__ */ new WeakMap(), P = l.createTreeWalker(l, 129);
function V(t, i) {
	if (!u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return void 0 !== e ? e.createHTML(i) : i;
}
var N = (t, i) => {
	const s = t.length - 1, e = [];
	let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = v;
	for (let i = 0; i < s; i++) {
		const s = t[i];
		let a, u, d = -1, f = 0;
		for (; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);) f = c.lastIndex, c === v ? "!--" === u[1] ? c = _ : void 0 !== u[1] ? c = m : void 0 !== u[2] ? (y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = p) : void 0 !== u[3] && (c = p) : c === p ? ">" === u[0] ? (c = n ?? v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? p : "\"" === u[3] ? $ : g) : c === $ || c === g ? c = p : c === _ || c === m ? c = v : (c = p, n = void 0);
		const x = c === p && t[i + 1].startsWith("/>") ? " " : "";
		l += c === v ? s + r$2 : d >= 0 ? (e.push(a), s.slice(0, d) + h + s.slice(d) + o$2 + x) : s + o$2 + (-2 === d ? i : x);
	}
	return [V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")), e];
};
var S = class S {
	constructor({ strings: t, _$litType$: i }, e) {
		let r;
		this.parts = [];
		let l = 0, a = 0;
		const u = t.length - 1, d = this.parts, [f, v] = N(t, i);
		if (this.el = S.createElement(f, e), P.currentNode = this.el.content, 2 === i || 3 === i) {
			const t = this.el.content.firstChild;
			t.replaceWith(...t.childNodes);
		}
		for (; null !== (r = P.nextNode()) && d.length < u;) {
			if (1 === r.nodeType) {
				if (r.hasAttributes()) for (const t of r.getAttributeNames()) if (t.endsWith(h)) {
					const i = v[a++], s = r.getAttribute(t).split(o$2), e = /([.?@])?(.*)/.exec(i);
					d.push({
						type: 1,
						index: l,
						name: e[2],
						strings: s,
						ctor: "." === e[1] ? I : "?" === e[1] ? L : "@" === e[1] ? z : H
					}), r.removeAttribute(t);
				} else t.startsWith(o$2) && (d.push({
					type: 6,
					index: l
				}), r.removeAttribute(t));
				if (y.test(r.tagName)) {
					const t = r.textContent.split(o$2), i = t.length - 1;
					if (i > 0) {
						r.textContent = s$1 ? s$1.emptyScript : "";
						for (let s = 0; s < i; s++) r.append(t[s], c()), P.nextNode(), d.push({
							type: 2,
							index: ++l
						});
						r.append(t[i], c());
					}
				}
			} else if (8 === r.nodeType) if (r.data === n$1) d.push({
				type: 2,
				index: l
			});
			else {
				let t = -1;
				for (; -1 !== (t = r.data.indexOf(o$2, t + 1));) d.push({
					type: 7,
					index: l
				}), t += o$2.length - 1;
			}
			l++;
		}
	}
	static createElement(t, i) {
		const s = l.createElement("template");
		return s.innerHTML = t, s;
	}
};
function M(t, i, s = t, e) {
	if (i === E) return i;
	let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
	const o = a(i) ? void 0 : i._$litDirective$;
	return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = M(t, h._$AS(t, i.values), h, e)), i;
}
var R = class {
	constructor(t, i) {
		this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(t) {
		const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? l).importNode(i, !0);
		P.currentNode = e;
		let h = P.nextNode(), o = 0, n = 0, r = s[0];
		for (; void 0 !== r;) {
			if (o === r.index) {
				let i;
				2 === r.type ? i = new k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new Z(h, this, t)), this._$AV.push(i), r = s[++n];
			}
			o !== r?.index && (h = P.nextNode(), o++);
		}
		return P.currentNode = l, e;
	}
	p(t) {
		let i = 0;
		for (const s of this._$AV) void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
	}
};
var k = class k {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(t, i, s, e) {
		this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
	}
	get parentNode() {
		let t = this._$AA.parentNode;
		const i = this._$AM;
		return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(t, i = this) {
		t = M(this, t, i), a(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== E && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : d(t) ? this.k(t) : this._(t);
	}
	O(t) {
		return this._$AA.parentNode.insertBefore(t, this._$AB);
	}
	T(t) {
		this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
	}
	_(t) {
		this._$AH !== A && a(this._$AH) ? this._$AA.nextSibling.data = t : this.T(l.createTextNode(t)), this._$AH = t;
	}
	$(t) {
		const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = S.createElement(V(s.h, s.h[0]), this.options)), s);
		if (this._$AH?._$AD === e) this._$AH.p(i);
		else {
			const t = new R(e, this), s = t.u(this.options);
			t.p(i), this.T(s), this._$AH = t;
		}
	}
	_$AC(t) {
		let i = C.get(t.strings);
		return void 0 === i && C.set(t.strings, i = new S(t)), i;
	}
	k(t) {
		u(this._$AH) || (this._$AH = [], this._$AR());
		const i = this._$AH;
		let s, e = 0;
		for (const h of t) e === i.length ? i.push(s = new k(this.O(c()), this.O(c()), this, this.options)) : s = i[e], s._$AI(h), e++;
		e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
	}
	_$AR(t = this._$AA.nextSibling, s) {
		for (this._$AP?.(!1, !0, s); t !== this._$AB;) {
			const s = i$1(t).nextSibling;
			i$1(t).remove(), t = s;
		}
	}
	setConnected(t) {
		void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
	}
};
var H = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(t, i, s, e, h) {
		this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(/* @__PURE__ */ new String()), this.strings = s) : this._$AH = A;
	}
	_$AI(t, i = this, s, e) {
		const h = this.strings;
		let o = !1;
		if (void 0 === h) t = M(this, t, i, 0), o = !a(t) || t !== this._$AH && t !== E, o && (this._$AH = t);
		else {
			const e = t;
			let n, r;
			for (t = h[0], n = 0; n < h.length - 1; n++) r = M(this, e[s + n], i, n), r === E && (r = this._$AH[n]), o ||= !a(r) || r !== this._$AH[n], r === A ? t = A : t !== A && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
		}
		o && !e && this.j(t);
	}
	j(t) {
		t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
	}
};
var I = class extends H {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(t) {
		this.element[this.name] = t === A ? void 0 : t;
	}
};
var L = class extends H {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(t) {
		this.element.toggleAttribute(this.name, !!t && t !== A);
	}
};
var z = class extends H {
	constructor(t, i, s, e, h) {
		super(t, i, s, e, h), this.type = 5;
	}
	_$AI(t, i = this) {
		if ((t = M(this, t, i, 0) ?? A) === E) return;
		const s = this._$AH, e = t === A && s !== A || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== A && (s === A || e);
		e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
	}
	handleEvent(t) {
		"function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
	}
};
var Z = class {
	constructor(t, i, s) {
		this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(t) {
		M(this, t);
	}
}, B = t$1.litHtmlPolyfillSupport;
B?.(S, k), (t$1.litHtmlVersions ??= []).push("3.3.3");
var D = (t, i, s) => {
	const e = s?.renderBefore ?? i;
	let h = e._$litPart$;
	if (void 0 === h) {
		const t = s?.renderBefore ?? null;
		e._$litPart$ = h = new k(i.insertBefore(c(), t), t, void 0, s ?? {});
	}
	return h._$AI(t), h;
};
//#endregion
//#region node_modules/lit-element/lit-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var s = globalThis;
var i = class extends y$1 {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		const t = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= t.firstChild, t;
	}
	update(t) {
		const r = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = D(r, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return E;
	}
};
i._$litElement$ = !0, i["finalized"] = !0, s.litElementHydrateSupport?.({ LitElement: i });
var o$1 = s.litElementPolyfillSupport;
o$1?.({ LitElement: i });
(s.litElementVersions ??= []).push("4.2.2");
//#endregion
//#region node_modules/@lit/reactive-element/decorators/custom-element.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t = (t) => (e, o) => {
	void 0 !== o ? o.addInitializer(() => {
		customElements.define(t, e);
	}) : customElements.define(t, e);
};
//#endregion
//#region node_modules/@lit/reactive-element/decorators/property.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ var o = {
	attribute: !0,
	type: String,
	converter: u$1,
	reflect: !1,
	hasChanged: f$1
}, r$1 = (t = o, e, r) => {
	const { kind: n, metadata: i } = r;
	let s = globalThis.litPropertyMetadata.get(i);
	if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
		const { name: o } = r;
		return {
			set(r) {
				const n = e.get.call(this);
				e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
			},
			init(e) {
				return void 0 !== e && this.C(o, void 0, t, e), e;
			}
		};
	}
	if ("setter" === n) {
		const { name: o } = r;
		return function(r) {
			const n = this[o];
			e.call(this, r), this.requestUpdate(o, n, t, !0, r);
		};
	}
	throw Error("Unsupported decorator location: " + n);
};
function n(t) {
	return (e, o) => "object" == typeof o ? r$1(t, e, o) : ((t, e, o) => {
		const r = e.hasOwnProperty(o);
		return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
	})(t, e, o);
}
//#endregion
//#region node_modules/@lit/reactive-element/decorators/state.js
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(r) {
	return n({
		...r,
		state: !0,
		attribute: !1
	});
}
//#endregion
//#region node_modules/typescript-memoize/dist/es2015/memoize-decorator.js
function Memoize(args) {
	let hashFunction;
	let duration;
	let tags;
	if (typeof args === "object") {
		hashFunction = args.hashFunction;
		duration = args.expiring;
		tags = args.tags;
	} else hashFunction = args;
	return (target, propertyKey, descriptor) => {
		if (descriptor.value != null) descriptor.value = getNewFunction(descriptor.value, hashFunction, duration, tags);
		else if (descriptor.get != null) descriptor.get = getNewFunction(descriptor.get, hashFunction, duration, tags);
		else throw "Only put a Memoize() decorator on a method or get accessor.";
	};
}
var clearCacheTagsMap = /* @__PURE__ */ new Map();
function getNewFunction(originalMethod, hashFunction, duration = 0, tags) {
	const propMapName = Symbol(`__memoized_map__`);
	return function(...args) {
		let returnedValue;
		if (!this.hasOwnProperty(propMapName)) Object.defineProperty(this, propMapName, {
			configurable: false,
			enumerable: false,
			writable: false,
			value: /* @__PURE__ */ new Map()
		});
		let myMap = this[propMapName];
		if (Array.isArray(tags)) for (const tag of tags) if (clearCacheTagsMap.has(tag)) clearCacheTagsMap.get(tag).push(myMap);
		else clearCacheTagsMap.set(tag, [myMap]);
		if (hashFunction || args.length > 0 || duration > 0) {
			let hashKey;
			if (hashFunction === true) hashKey = args.map((a) => a.toString()).join("!");
			else if (hashFunction) hashKey = hashFunction.apply(this, args);
			else hashKey = args[0];
			const timestampKey = `${hashKey}__timestamp`;
			let isExpired = false;
			if (duration > 0) if (!myMap.has(timestampKey)) isExpired = true;
			else {
				let timestamp = myMap.get(timestampKey);
				isExpired = Date.now() - timestamp > duration;
			}
			if (myMap.has(hashKey) && !isExpired) returnedValue = myMap.get(hashKey);
			else {
				returnedValue = originalMethod.apply(this, args);
				myMap.set(hashKey, returnedValue);
				if (duration > 0) myMap.set(timestampKey, Date.now());
			}
		} else {
			const hashKey = this;
			if (myMap.has(hashKey)) returnedValue = myMap.get(hashKey);
			else {
				returnedValue = originalMethod.apply(this, args);
				myMap.set(hashKey, returnedValue);
			}
		}
		return returnedValue;
	};
}
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js
var BooleanParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		if (typeof rawValue === "string") {
			const normalized = rawValue.trim().toLowerCase();
			if (normalized === "false" || normalized === "0" || normalized === "no") return false;
			if (normalized === "true" || normalized === "1" || normalized === "yes") return true;
		}
		return Boolean(rawValue);
	}
};
BooleanParser.shared = new BooleanParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js
var NumberParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		if (typeof rawValue === "number") return rawValue;
		if (typeof rawValue === "boolean") return void 0;
		const value = parseFloat(rawValue);
		if (Number.isNaN(value)) return;
		return value;
	}
};
NumberParser.shared = new NumberParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js
/**
* The ByteParser is a unit-specific NumberParser
* that returns a value in bytes
*
* @export
* @class ByteParser
* @implements {FieldParserInterface<Byte>}
*/
var ByteParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		return NumberParser.shared.parseValue(rawValue);
	}
};
ByteParser.shared = new ByteParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js
var DateParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		return this.parseCompactDate(rawValue) || this.parseJSDate(rawValue) || this.parseBracketDate(rawValue);
	}
	parseCompactDate(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		const match = rawValue.trim().match(/^(\d{4})(\d{2})(\d{2})(?:(\d{2})(\d{2})(\d{2}))?$/);
		if (!match) return void 0;
		const [, year, month, day, hour = "00", minute = "00", second = "00"] = match;
		const date = /* @__PURE__ */ new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
		return Number.isNaN(date.getTime()) ? void 0 : date;
	}
	parseBracketDate(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		const yearMatch = rawValue.match(/\[([0-9]{4})\]/);
		if (!yearMatch || yearMatch.length < 2) return;
		return this.parseJSDate(yearMatch[1]);
	}
	parseJSDate(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		let parsedValue = rawValue;
		if (parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)) parsedValue = parsedValue.replace(" ", "T");
		const parsed = Date.parse(parsedValue);
		if (Number.isNaN(parsed)) return;
		let date = new Date(parsedValue);
		if (parsedValue.match(/^[0-9]{4}$/) || parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)) date = new Date(date.getTime() + date.getTimezoneOffset() * 1e3 * 60);
		return date;
	}
};
DateParser.shared = new DateParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js
/**
* Parses duration format to a `Duration` (number of seconds with decimal)
*
* Can parse hh:mm:ss.ms, hh:mm:ss, mm:ss, mm:ss.ms, and s.ms formats
*/
var DurationParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		if (typeof rawValue === "number") return rawValue;
		if (typeof rawValue === "boolean") return void 0;
		const componentArray = rawValue.split(":");
		let seconds;
		if (componentArray.length === 1) seconds = this.parseNumberFormat(componentArray[0]);
		else seconds = this.parseColonSeparatedFormat(componentArray);
		return seconds;
	}
	/**
	* Parse sss.ms format
	*
	* @param rawValue
	* @returns
	*/
	parseNumberFormat(rawValue) {
		let seconds = parseFloat(rawValue);
		if (Number.isNaN(seconds)) seconds = void 0;
		return seconds;
	}
	/**
	* Parse hh:mm:ss.ms format
	*
	* @param componentArray
	* @returns
	*/
	parseColonSeparatedFormat(componentArray) {
		let hasNaNComponent = false;
		const parsedValue = componentArray.map((element, index) => {
			const componentValue = parseFloat(element);
			if (Number.isNaN(componentValue)) {
				hasNaNComponent = true;
				return 0;
			}
			const multiplier = 60 ** (componentArray.length - 1 - index);
			return componentValue * Math.floor(multiplier);
		}).reduce((a, b) => a + b, 0);
		return hasNaNComponent ? void 0 : parsedValue;
	}
};
DurationParser.shared = new DurationParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js
/**
* @deprecated Use `MediaTypeField` from `@internetarchive/iaux-item-metadata`,
* which validates the value against the allowed set instead of casting.
*/
var MediaTypeParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		return rawValue;
	}
};
MediaTypeParser.shared = new MediaTypeParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/list.js
var ListParser = class {
	constructor(parser, options) {
		this.separators = [";", ","];
		this.parser = parser;
		if (options && options.separators) this.separators = options.separators;
	}
	/** @inheritdoc */
	parseValue(rawValue) {
		const stringifiedValue = String(rawValue);
		let results = [];
		for (const separator of this.separators) {
			results = stringifiedValue.split(separator);
			if (results.length > 1) break;
		}
		return this.parseListValues(results);
	}
	parseListValues(rawValues) {
		const parsed = rawValues.map((s) => s.trim()).map((rawValue) => this.parser.parseValue(rawValue));
		const result = [];
		parsed.forEach((p) => {
			if (p !== void 0) result.push(p);
		});
		return result;
	}
};
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js
/**
* @deprecated Use `PageProgressionField` from
* `@internetarchive/iaux-item-metadata`, which validates the value against the
* allowed set instead of casting.
*/
var PageProgressionParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		return rawValue;
	}
};
PageProgressionParser.shared = new PageProgressionParser();
//#endregion
//#region node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js
var StringParser = class {
	/** @inheritdoc */
	parseValue(rawValue) {
		return String(rawValue);
	}
};
StringParser.shared = new StringParser();
//#endregion
//#region dist/src/models/map-field.js
/**
* Returns `make(value)` for the first of `keys` whose raw value is present in
* `raw`, or `undefined` if none are set. `make` runs only on a present value,
* so it never sees `null`/`undefined`. Later keys act as fallbacks, for values
* that arrive under more than one name.
*
* @param raw The raw record to read from
* @param make Builds the result from a present raw value
* @param keys The key(s) to read, in priority order
*/
function mapField(raw, make, ...keys) {
	for (const key of keys) {
		const value = raw[key];
		if (value != null) return make(value);
	}
}
//#endregion
//#region dist/src/models/parse-field.js
/**
* Maps the first present of `keys` through a field parser, or returns
* `undefined` if none are set. A thin wrapper over {@link mapField} for fields
* whose value is a scalar parsed by a `FieldParser` (as opposed to a value
* wrapped in a `MetadataField` class).
*
* @param raw The raw record to read from
* @param parse Parses a present raw value (e.g. `v => DateParser.shared.parseValue(v)`)
* @param keys The key(s) to read, in priority order
*/
function parseField(raw, parse, ...keys) {
	return mapField(raw, (value) => parse(value), ...keys);
}
//#endregion
//#region dist/src/models/file.js
/**
* This represents an Internet Archive File
*
* @export
* @class File
*/
var File = class {
	get name() {
		return this.rawValue.name;
	}
	get source() {
		return this.rawValue.source;
	}
	get btih() {
		return this.rawValue.btih;
	}
	get md5() {
		return this.rawValue.md5;
	}
	get format() {
		return this.rawValue.format;
	}
	get mtime() {
		if (this.rawValue.mtime == null) return;
		const numberValue = NumberParser.shared.parseValue(this.rawValue.mtime);
		if (numberValue) return /* @__PURE__ */ new Date(numberValue * 1e3);
	}
	get crc32() {
		return this.rawValue.crc32;
	}
	get sha1() {
		return this.rawValue.sha1;
	}
	get original() {
		return this.rawValue.original;
	}
	get size() {
		return parseField(this.rawValue, (v) => ByteParser.shared.parseValue(v), "size");
	}
	get title() {
		return this.rawValue.title;
	}
	get length() {
		return parseField(this.rawValue, (v) => DurationParser.shared.parseValue(v), "length");
	}
	get height() {
		return parseField(this.rawValue, (v) => NumberParser.shared.parseValue(v), "height");
	}
	get width() {
		return parseField(this.rawValue, (v) => NumberParser.shared.parseValue(v), "width");
	}
	get track() {
		return parseField(this.rawValue, (v) => NumberParser.shared.parseValue(v), "track");
	}
	get external_identifier() {
		return this.rawValue.external_identifier;
	}
	get creator() {
		return this.rawValue.creator;
	}
	get album() {
		return this.rawValue.album;
	}
	get bitrate() {
		return parseField(this.rawValue, (v) => NumberParser.shared.parseValue(v), "bitrate");
	}
	get private() {
		return parseField(this.rawValue, (v) => BooleanParser.shared.parseValue(v), "private");
	}
	constructor(json = {}) {
		this.rawValue = json;
	}
};
__decorate([Memoize()], File.prototype, "mtime", null);
__decorate([Memoize()], File.prototype, "size", null);
__decorate([Memoize()], File.prototype, "length", null);
__decorate([Memoize()], File.prototype, "height", null);
__decorate([Memoize()], File.prototype, "width", null);
__decorate([Memoize()], File.prototype, "track", null);
__decorate([Memoize()], File.prototype, "bitrate", null);
__decorate([Memoize()], File.prototype, "private", null);
//#endregion
//#region dist/src/models/metadata-fields/metadata-field.js
/**
* The MetadataField is responsible for three things:
* 1. Take in some raw data (strings, arrays, numbers, etc)
* 2. Normalize the input to an array of the input,
*    ie. [string, string], [number, number], [Date, Date], etc
* 3. Cast the values to their expected `Type`
*
* This class gets instiated with a `Type` and a parser of that type. For instance, the
* `DateField` is a subclass of `MetadataField` with a `Type` of `Date` and a `DateParser`.
*
* When using a `DateField`, you can pass it a string date and it will cast it to a javascript Date,
* ie:
*
* ```
* const dateField = new DateField('2020-02-13')
* dateField.value = Date(2020-02-13) // native javascript Date object
* dateField.values = [Date(2020-02-13)] // the normalized array of values
* dateField.rawValue = '2020-02-13' // the raw string that was passed in
* ```
*
* @class MetadataField
* @template Type The type of metadata this is (string, number, Date, etc)
* @template FieldParserInterfaceType The parser for that type (StringParser, NumberParser, etc)
*/
var MetadataField = class {
	/** @inheritdoc */
	get values() {
		return this.parseRawValue();
	}
	/** @inheritdoc */
	get value() {
		return this.values[0];
	}
	constructor(parser, rawValue) {
		this.parser = parser;
		this.rawValue = rawValue;
	}
	parseRawValue() {
		const rawValues = Array.isArray(this.rawValue) ? this.rawValue : [this.rawValue];
		const values = [];
		rawValues.forEach((value) => {
			const parsed = this.parser.parseValue(value);
			if (Array.isArray(parsed)) values.push(...parsed);
			else if (parsed !== void 0) values.push(parsed);
		});
		return values;
	}
};
__decorate([Memoize()], MetadataField.prototype, "values", null);
__decorate([Memoize()], MetadataField.prototype, "value", null);
//#endregion
//#region dist/src/models/metadata-fields/field-types/boolean.js
var BooleanField = class extends MetadataField {
	constructor(rawValue) {
		super(BooleanParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/date.js
var DateField = class extends MetadataField {
	constructor(rawValue) {
		super(DateParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/duration.js
/**
* The DurationField parses different duration formats
* and returns a `Duration`, which is a number in seconds
* with decimals.
*
* @export
* @class DurationField
* @extends {MetadataField<Duration, DurationParser>}
*/
var DurationField = class extends MetadataField {
	constructor(rawValue) {
		super(DurationParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/number.js
var NumberField = class extends MetadataField {
	constructor(rawValue) {
		super(NumberParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/string.js
var StringField = class extends MetadataField {
	constructor(rawValue) {
		super(StringParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/enum.js
/**
* Parses a raw value against a fixed set of allowed string literals.
*
* Unlike the plain `StringParser`, this validates at runtime: any value not in
* the `allowed` set is rejected (returns `undefined`), so the parsed `value` and
* the field's TypeScript type stay in agreement.
*
* @class EnumParser
* @template T The union of allowed string literals (e.g. `'rl' | 'lr'`)
*/
var EnumParser = class {
	constructor(allowed) {
		this.allowed = allowed;
	}
	parseValue(rawValue) {
		return typeof rawValue === "string" && this.allowed.includes(rawValue) ? rawValue : void 0;
	}
};
/**
* A field whose value is restricted to a fixed set of allowed string literals.
*
* Pass a (typically module-level, shared) `EnumParser` so the allowed set is
* defined once:
*
* ```
* const colorParser = new EnumParser<'red' | 'green' | 'blue'>(['red', 'green', 'blue']);
* const field = new EnumField('green', colorParser);
* field.value // 'green'  (typed as 'red' | 'green' | 'blue' | undefined)
* ```
*
* @class EnumField
* @template T The union of allowed string literals
*/
var EnumField = class extends MetadataField {
	constructor(rawValue, parser) {
		super(parser, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/page-progression.js
var pageProgressionParser = new EnumParser(["rl", "lr"]);
/**
* A field whose value is restricted to the allowed `page_progression` values.
*
* Backed by an {@link EnumParser}, so a raw value outside the allowed set is
* rejected: `value` is `undefined` while `rawValue` keeps the original input.
*/
var PageProgressionField = class extends EnumField {
	constructor(rawValue) {
		super(rawValue, pageProgressionParser);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/byte.js
/**
* ByteField is a unit-specific number field that
* returns a value in bytes
*
* @export
* @class ByteField
* @extends {MetadataField<Byte, ByteParser>}
*/
var ByteField = class extends MetadataField {
	constructor(rawValue) {
		super(ByteParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/mediatype.js
var mediaTypeParser = new EnumParser([
	"account",
	"audio",
	"collection",
	"data",
	"etree",
	"image",
	"movies",
	"search",
	"software",
	"texts",
	"web"
]);
/**
* A field whose value is restricted to the allowed `mediatype` values.
*
* Backed by an {@link EnumParser}, so a raw value outside the allowed set is
* rejected: `value` is `undefined` while `rawValue` keeps the original input.
*/
var MediaTypeField = class extends EnumField {
	constructor(rawValue) {
		super(rawValue, mediaTypeParser);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/list.js
/**
* The ListField handles parsing of a list of values.
*
* Certain fields in the metadata, like `subject` typically have a
* comma or semicolon-separated list of values. The `ListField`
* parses the list values independently and aggregates them into
* the main `.values` array.
*/
var ListField = class extends MetadataField {
	constructor(rawValue, parser) {
		super(parser, rawValue);
	}
};
/**
* The StringListField handles parsing of a list of strings.
*/
var StringListField = class extends ListField {
	constructor(rawValue) {
		const parser = new ListParser(StringParser.shared);
		super(rawValue, parser);
	}
};
/**
* The NumberListField handles parsing of a list of numbers.
*/
var NumberListField = class extends ListField {
	constructor(rawValue) {
		const parser = new ListParser(NumberParser.shared);
		super(rawValue, parser);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/aspect-ratio.js
/**
* Parses an aspect ratio expressed as two numbers separated by `:`, `/`, or `x`
* (e.g. `"4:3"`, `"16/9"`, `"16x9"`). Any value that does not match this grammar,
* or that has a zero height, is rejected (returns `undefined`).
*
* @class AspectRatioParser
*/
var AspectRatioParser = class {
	parseValue(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		const match = rawValue.match(/^\s*(\d+(?:\.\d+)?)\s*[:/x]\s*(\d+(?:\.\d+)?)\s*$/i);
		if (!match) return void 0;
		const width = parseFloat(match[1]);
		const height = parseFloat(match[2]);
		if (!height) return void 0;
		return {
			width,
			height,
			decimal: width / height
		};
	}
};
AspectRatioParser.shared = new AspectRatioParser();
/**
* A field whose value is a parsed {@link AspectRatio}.
*
* @class AspectRatioField
*/
var AspectRatioField = class extends MetadataField {
	constructor(rawValue) {
		super(AspectRatioParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/utc-offset.js
/**
* Parses a `±HHMM` UTC offset (an optional sign, one or two hour digits, and
* exactly two minute digits, with an optional `:` separator). Values that do
* not match this grammar are rejected (returns `undefined`).
*
* @class UtcOffsetParser
*/
var UtcOffsetParser = class {
	parseValue(rawValue) {
		const match = String(rawValue).trim().match(/^([+-]?)(\d{1,2}):?(\d{2})$/);
		if (!match) return void 0;
		const sign = match[1] === "-" ? -1 : 1;
		const hours = parseInt(match[2], 10);
		const minutes = parseInt(match[3], 10);
		return {
			hours: sign * hours,
			minutes,
			totalMinutes: sign * (hours * 60 + minutes)
		};
	}
};
UtcOffsetParser.shared = new UtcOffsetParser();
/**
* A field whose value is a parsed {@link UtcOffset}.
*
* @class UtcOffsetField
*/
var UtcOffsetField = class extends MetadataField {
	constructor(rawValue) {
		super(UtcOffsetParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata-fields/field-types/tuner.js
/**
* Parses a tuner string of the form `Channel <n>` with an optional
* `(<freq> MHz)` suffix. Values without a recognizable channel are rejected
* (returns `undefined`).
*
* @class TunerParser
*/
var TunerParser = class {
	parseValue(rawValue) {
		if (typeof rawValue !== "string") return void 0;
		const match = rawValue.match(/Channel\s+(\d+)(?:\s*\(\s*([\d.]+)\s*MHz\s*\))?/i);
		if (!match) return void 0;
		return {
			channel: parseInt(match[1], 10),
			frequencyMhz: match[2] ? parseFloat(match[2]) : void 0
		};
	}
};
TunerParser.shared = new TunerParser();
/**
* A field whose value is a parsed {@link Tuner}.
*
* @class TunerField
*/
var TunerField = class extends MetadataField {
	constructor(rawValue) {
		super(TunerParser.shared, rawValue);
	}
};
//#endregion
//#region dist/src/models/metadata.js
var reviewsAllowedParser = new EnumParser([
	"true",
	"none",
	"frozen"
]);
var soundParser = new EnumParser(["sound", "silent"]);
var colorParser = new EnumParser(["color", "b&w"]);
/**
* Metadata is an expansive model that describes an Item.
*
* The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
*
* Add additional fields as needed.
*
* @export
* @class Metadata
*/
var Metadata = class {
	/**
	* The item identifier.
	*
	* _Note_ This is a plain string instead of a `MetadataField` since it
	* will only ever be a string and not an array.
	*
	* @type {string}
	* @memberof Metadata
	*/
	get identifier() {
		return this.rawMetadata.identifier;
	}
	get access_restricted_item() {
		return this.field(BooleanField, "access-restricted-item");
	}
	get addeddate() {
		return this.field(DateField, "addeddate");
	}
	/**
	* The display aspect ratio, e.g. `"4:3"`, parsed into width, height, and a
	* decimal ratio.
	*/
	get aspect_ratio() {
		return this.field(AspectRatioField, "aspect_ratio");
	}
	get audio_codec() {
		return this.field(StringField, "audio_codec");
	}
	get audio_sample_rate() {
		return this.field(NumberField, "audio_sample_rate");
	}
	get avg_rating() {
		return this.field(NumberField, "avg_rating");
	}
	get backup_location() {
		return this.field(StringField, "backup_location");
	}
	get ccnum() {
		return this.field(StringField, "ccnum");
	}
	/**
	* Whether the broadcast included closed captioning. The raw `"yes"`/`"no"`
	* value is parsed to a boolean.
	*/
	get closed_captioning() {
		return this.field(BooleanField, "closed_captioning");
	}
	/**
	* All of the collections that an Item is in, including
	* all of the side-loaded collections from the ListAPI
	* and SimpleListsAPI like `fav-*`
	*
	* @type {StringField}
	* @memberof Metadata
	*/
	get collection() {
		return this.field(StringField, "collection");
	}
	/**
	* The "natural" collections for an item before augmentation
	* by side-loaded collections like ListsAPI and SimpleLists
	*
	* The `collection` field above includes things like all of
	* the `fav-*` collections, whereas this is only the collections
	* that have been directly added in the hierarchy.
	*
	* @type {StringField}
	* @memberof Metadata
	*/
	get collections_raw() {
		return this.field(StringField, "collections_raw");
	}
	/**
	* The size of a collection in bytes
	*
	* @type {ByteField}
	* @memberof Metadata
	*/
	get collection_size() {
		return this.field(ByteField, "collection_size");
	}
	get color() {
		return mapField(this.rawMetadata, (raw) => new EnumField(raw, colorParser), "color");
	}
	get contact() {
		return this.field(StringField, "contact");
	}
	get contributor() {
		return this.field(StringField, "contributor");
	}
	get coverage() {
		return this.field(StringField, "coverage");
	}
	get creator() {
		return this.field(StringField, "creator");
	}
	get creator_alt_script() {
		return this.field(StringField, "creator-alt-script");
	}
	get credits() {
		return this.field(StringField, "credits");
	}
	get collection_layout() {
		return this.field(StringField, "collection_layout");
	}
	get date() {
		return this.field(DateField, "date");
	}
	get description() {
		return this.field(StringField, "description");
	}
	/**
	* All time download count
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get downloads() {
		return this.field(NumberField, "downloads");
	}
	/**
	* The item duration in seconds
	*
	* @type {DurationField}
	* @memberof Metadata
	*/
	get duration() {
		return this.field(DurationField, "duration");
	}
	get external_identifier() {
		return this.field(StringField, "external-identifier");
	}
	get external_link() {
		return this.field(StringField, "external-link");
	}
	/**
	* The number of files in an item
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get files_count() {
		return this.field(NumberField, "files_count");
	}
	get frames_per_second() {
		return this.field(NumberField, "frames_per_second");
	}
	get identifier_access() {
		return this.field(StringField, "identifier-access");
	}
	get imagecount() {
		return this.field(NumberField, "imagecount");
	}
	get indexdate() {
		return this.field(DateField, "indexdate");
	}
	get isbn() {
		return this.field(StringField, "isbn");
	}
	get issue() {
		return this.field(StringField, "issue");
	}
	/**
	* For collections, the number of items in the collection
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get item_count() {
		return this.field(NumberField, "item_count");
	}
	/**
	* The size of the item in bytes
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get item_size() {
		return this.field(ByteField, "item_size");
	}
	get language() {
		return this.field(StringField, "language");
	}
	get length() {
		return this.field(DurationField, "length");
	}
	get licenseurl() {
		return this.field(StringField, "licenseurl");
	}
	get lineage() {
		return this.field(StringField, "lineage");
	}
	/**
	* The number of downloads in the last month
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get month() {
		return this.field(NumberField, "month");
	}
	get mediatype() {
		return this.field(MediaTypeField, "mediatype");
	}
	get mpeg_program() {
		return this.field(NumberField, "mpeg_program");
	}
	get next_item() {
		return this.field(StringField, "next_item");
	}
	get noindex() {
		return this.field(BooleanField, "noindex");
	}
	get notes() {
		return this.field(StringField, "notes");
	}
	/**
	* The number of users that have favorited the item
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get num_favorites() {
		return this.field(NumberField, "num_favorites");
	}
	get num_reviews() {
		return this.field(NumberField, "num_reviews");
	}
	get openlibrary_edition() {
		return this.field(StringField, "openlibrary_edition");
	}
	get openlibrary_work() {
		return this.field(StringField, "openlibrary_work");
	}
	get page_progression() {
		return this.field(PageProgressionField, "page_progression");
	}
	get paginated() {
		return this.field(BooleanField, "paginated");
	}
	get partner() {
		return this.field(StringField, "partner");
	}
	get post_text() {
		return this.field(StringField, "post_text");
	}
	get ppi() {
		return this.field(NumberField, "ppi");
	}
	get previous_item() {
		return this.field(StringField, "previous_item");
	}
	get program() {
		return this.field(StringField, "program");
	}
	get publicdate() {
		return this.field(DateField, "publicdate");
	}
	get publisher() {
		return this.field(StringField, "publisher");
	}
	get reviewdate() {
		return this.field(DateField, "reviewdate");
	}
	/**
	* Whether reviews may be added to this item. One of `true` (enabled),
	* `none` (disabled), or `frozen` (existing reviews shown, no new ones).
	* Absent for most items, which means reviews are enabled.
	*/
	get reviews_allowed() {
		return mapField(this.rawMetadata, (raw) => new EnumField(raw, reviewsAllowedParser), "reviews-allowed");
	}
	get rights() {
		return this.field(StringField, "rights");
	}
	get rights_holder() {
		return this.field(StringField, "rights-holder", "rights_holder");
	}
	get runtime() {
		return this.field(DurationField, "runtime");
	}
	/**
	* The scan/capture date. Parses compact `YYYYMMDD[HHMMSS]` timestamps in
	* addition to standard date strings.
	*/
	get scandate() {
		return this.field(DateField, "scandate");
	}
	get scanner() {
		return this.field(StringField, "scanner");
	}
	get scanningcenter() {
		return this.field(StringField, "scanningcenter");
	}
	get segments() {
		return this.field(StringField, "segments");
	}
	get shotlist() {
		return this.field(StringField, "shotlist");
	}
	get sound() {
		return mapField(this.rawMetadata, (raw) => new EnumField(raw, soundParser), "sound");
	}
	get source() {
		return this.field(StringField, "source");
	}
	get source_pixel_height() {
		return this.field(NumberField, "source_pixel_height");
	}
	get source_pixel_width() {
		return this.field(NumberField, "source_pixel_width");
	}
	get sponsor() {
		return this.field(StringField, "sponsor");
	}
	get start_localtime() {
		return this.field(DateField, "start_localtime");
	}
	get start_time() {
		return this.field(DateField, "start_time");
	}
	get station_name() {
		return this.field(StringField, "station_name");
	}
	get stop_time() {
		return this.field(DateField, "stop_time");
	}
	get subject() {
		return this.field(StringListField, "subject");
	}
	get taper() {
		return this.field(StringField, "taper");
	}
	get thumbs() {
		return this.field(NumberListField, "thumbs");
	}
	get times() {
		return this.field(NumberListField, "times");
	}
	get title() {
		return this.field(StringField, "title");
	}
	get title_alt_script() {
		return this.field(StringField, "title-alt-script");
	}
	get transferer() {
		return this.field(StringField, "transferer");
	}
	get track() {
		return this.field(NumberField, "track");
	}
	/**
	* The capture tuner setting. Parses the `"Channel <n> (<freq> MHz)"` form
	* into channel and frequency; other formats expose only the raw value.
	*/
	get tuner() {
		return this.field(TunerField, "tuner");
	}
	get type() {
		return this.field(StringField, "type");
	}
	get uploader() {
		return this.field(StringField, "uploader");
	}
	/**
	* The UTC offset encoded as `±HHMM` (e.g. `"-800"`), parsed into hours,
	* minutes, and total signed minutes.
	*/
	get utc_offset() {
		return this.field(UtcOffsetField, "utc_offset");
	}
	get venue() {
		return this.field(StringField, "venue");
	}
	get video_codec() {
		return this.field(StringField, "video_codec");
	}
	get volume() {
		return this.field(StringField, "volume");
	}
	/**
	* The number of downloads in the last week
	*
	* @type {NumberField}
	* @memberof Metadata
	*/
	get week() {
		return this.field(NumberField, "week");
	}
	get year() {
		return this.field(NumberField, "year");
	}
	/**
	* Builds a field from the first of `keys` whose raw value is present,
	* or `undefined` if none are set. Later keys act as fallbacks, for fields
	* that arrive under more than one name.
	*
	* For fields whose class needs more than the raw value (e.g. an `EnumField`
	* needs its parser), call {@link mapField} directly with a factory.
	*
	* @param Ctor A field class taking a single raw value (`DateField`, `StringField`, etc.)
	* @param keys The raw metadata key(s) to read, in priority order
	*/
	field(Ctor, ...keys) {
		return mapField(this.rawMetadata, (raw) => new Ctor(raw), ...keys);
	}
	constructor(json = {}) {
		this.rawMetadata = json;
	}
};
__decorate([Memoize()], Metadata.prototype, "access_restricted_item", null);
__decorate([Memoize()], Metadata.prototype, "addeddate", null);
__decorate([Memoize()], Metadata.prototype, "aspect_ratio", null);
__decorate([Memoize()], Metadata.prototype, "audio_codec", null);
__decorate([Memoize()], Metadata.prototype, "audio_sample_rate", null);
__decorate([Memoize()], Metadata.prototype, "avg_rating", null);
__decorate([Memoize()], Metadata.prototype, "backup_location", null);
__decorate([Memoize()], Metadata.prototype, "ccnum", null);
__decorate([Memoize()], Metadata.prototype, "closed_captioning", null);
__decorate([Memoize()], Metadata.prototype, "collection", null);
__decorate([Memoize()], Metadata.prototype, "collections_raw", null);
__decorate([Memoize()], Metadata.prototype, "collection_size", null);
__decorate([Memoize()], Metadata.prototype, "color", null);
__decorate([Memoize()], Metadata.prototype, "contact", null);
__decorate([Memoize()], Metadata.prototype, "contributor", null);
__decorate([Memoize()], Metadata.prototype, "coverage", null);
__decorate([Memoize()], Metadata.prototype, "creator", null);
__decorate([Memoize()], Metadata.prototype, "creator_alt_script", null);
__decorate([Memoize()], Metadata.prototype, "credits", null);
__decorate([Memoize()], Metadata.prototype, "collection_layout", null);
__decorate([Memoize()], Metadata.prototype, "date", null);
__decorate([Memoize()], Metadata.prototype, "description", null);
__decorate([Memoize()], Metadata.prototype, "downloads", null);
__decorate([Memoize()], Metadata.prototype, "duration", null);
__decorate([Memoize()], Metadata.prototype, "external_identifier", null);
__decorate([Memoize()], Metadata.prototype, "external_link", null);
__decorate([Memoize()], Metadata.prototype, "files_count", null);
__decorate([Memoize()], Metadata.prototype, "frames_per_second", null);
__decorate([Memoize()], Metadata.prototype, "identifier_access", null);
__decorate([Memoize()], Metadata.prototype, "imagecount", null);
__decorate([Memoize()], Metadata.prototype, "indexdate", null);
__decorate([Memoize()], Metadata.prototype, "isbn", null);
__decorate([Memoize()], Metadata.prototype, "issue", null);
__decorate([Memoize()], Metadata.prototype, "item_count", null);
__decorate([Memoize()], Metadata.prototype, "item_size", null);
__decorate([Memoize()], Metadata.prototype, "language", null);
__decorate([Memoize()], Metadata.prototype, "length", null);
__decorate([Memoize()], Metadata.prototype, "licenseurl", null);
__decorate([Memoize()], Metadata.prototype, "lineage", null);
__decorate([Memoize()], Metadata.prototype, "month", null);
__decorate([Memoize()], Metadata.prototype, "mediatype", null);
__decorate([Memoize()], Metadata.prototype, "mpeg_program", null);
__decorate([Memoize()], Metadata.prototype, "next_item", null);
__decorate([Memoize()], Metadata.prototype, "noindex", null);
__decorate([Memoize()], Metadata.prototype, "notes", null);
__decorate([Memoize()], Metadata.prototype, "num_favorites", null);
__decorate([Memoize()], Metadata.prototype, "num_reviews", null);
__decorate([Memoize()], Metadata.prototype, "openlibrary_edition", null);
__decorate([Memoize()], Metadata.prototype, "openlibrary_work", null);
__decorate([Memoize()], Metadata.prototype, "page_progression", null);
__decorate([Memoize()], Metadata.prototype, "paginated", null);
__decorate([Memoize()], Metadata.prototype, "partner", null);
__decorate([Memoize()], Metadata.prototype, "post_text", null);
__decorate([Memoize()], Metadata.prototype, "ppi", null);
__decorate([Memoize()], Metadata.prototype, "previous_item", null);
__decorate([Memoize()], Metadata.prototype, "program", null);
__decorate([Memoize()], Metadata.prototype, "publicdate", null);
__decorate([Memoize()], Metadata.prototype, "publisher", null);
__decorate([Memoize()], Metadata.prototype, "reviewdate", null);
__decorate([Memoize()], Metadata.prototype, "reviews_allowed", null);
__decorate([Memoize()], Metadata.prototype, "rights", null);
__decorate([Memoize()], Metadata.prototype, "rights_holder", null);
__decorate([Memoize()], Metadata.prototype, "runtime", null);
__decorate([Memoize()], Metadata.prototype, "scandate", null);
__decorate([Memoize()], Metadata.prototype, "scanner", null);
__decorate([Memoize()], Metadata.prototype, "scanningcenter", null);
__decorate([Memoize()], Metadata.prototype, "segments", null);
__decorate([Memoize()], Metadata.prototype, "shotlist", null);
__decorate([Memoize()], Metadata.prototype, "sound", null);
__decorate([Memoize()], Metadata.prototype, "source", null);
__decorate([Memoize()], Metadata.prototype, "source_pixel_height", null);
__decorate([Memoize()], Metadata.prototype, "source_pixel_width", null);
__decorate([Memoize()], Metadata.prototype, "sponsor", null);
__decorate([Memoize()], Metadata.prototype, "start_localtime", null);
__decorate([Memoize()], Metadata.prototype, "start_time", null);
__decorate([Memoize()], Metadata.prototype, "station_name", null);
__decorate([Memoize()], Metadata.prototype, "stop_time", null);
__decorate([Memoize()], Metadata.prototype, "subject", null);
__decorate([Memoize()], Metadata.prototype, "taper", null);
__decorate([Memoize()], Metadata.prototype, "thumbs", null);
__decorate([Memoize()], Metadata.prototype, "times", null);
__decorate([Memoize()], Metadata.prototype, "title", null);
__decorate([Memoize()], Metadata.prototype, "title_alt_script", null);
__decorate([Memoize()], Metadata.prototype, "transferer", null);
__decorate([Memoize()], Metadata.prototype, "track", null);
__decorate([Memoize()], Metadata.prototype, "tuner", null);
__decorate([Memoize()], Metadata.prototype, "type", null);
__decorate([Memoize()], Metadata.prototype, "uploader", null);
__decorate([Memoize()], Metadata.prototype, "utc_offset", null);
__decorate([Memoize()], Metadata.prototype, "venue", null);
__decorate([Memoize()], Metadata.prototype, "video_codec", null);
__decorate([Memoize()], Metadata.prototype, "volume", null);
__decorate([Memoize()], Metadata.prototype, "week", null);
__decorate([Memoize()], Metadata.prototype, "year", null);
//#endregion
//#region dist/src/models/review.js
var Review = class {
	get reviewbody() {
		return this.rawValue.reviewbody;
	}
	get reviewtitle() {
		return this.rawValue.reviewtitle;
	}
	get reviewer() {
		return this.rawValue.reviewer;
	}
	get reviewer_itemname() {
		return this.rawValue.reviewer_itemname;
	}
	get reviewdate() {
		return parseField(this.rawValue, (v) => DateParser.shared.parseValue(v), "reviewdate");
	}
	get createdate() {
		return parseField(this.rawValue, (v) => DateParser.shared.parseValue(v), "createdate");
	}
	get stars() {
		return parseField(this.rawValue, (v) => NumberParser.shared.parseValue(v), "stars");
	}
	constructor(json = {}) {
		this.rawValue = json;
	}
};
__decorate([Memoize()], Review.prototype, "reviewdate", null);
__decorate([Memoize()], Review.prototype, "createdate", null);
__decorate([Memoize()], Review.prototype, "stars", null);
//#endregion
//#region dist/demo/app-root.js
/**
* Every field the model exposes, read off `Metadata`'s prototype getters. The
* table is built from this, so a field added to the model shows up in the demo
* without anyone touching this file. Sorted to give the table a stable order.
*/
var MODELED_FIELDS = Object.getOwnPropertyNames(Metadata.prototype).filter((name) => {
	var _a;
	return typeof ((_a = Object.getOwnPropertyDescriptor(Metadata.prototype, name)) === null || _a === void 0 ? void 0 : _a.get) === "function";
}).sort();
/** Reads a field off the model by name. */
function fieldValue(metadata, name) {
	return metadata[name];
}
/** True for parsed field objects (`StringField`, `DateField`, and friends). */
function isMetadataField(value) {
	return typeof value === "object" && value !== null && "rawValue" in value;
}
/**
* The field class that parsed a value, e.g. `DateField`. Read off the
* constructor rather than a lookup table so a new field type names itself,
* which is why the demo build leaves class names unminified.
*/
function fieldTypeName(value) {
	var _a;
	var _b;
	if (value === void 0) return "—";
	if (isMetadataField(value)) return (_b = (_a = value.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "unknown";
	return typeof value;
}
/**
* The raw keys the model reads, collected by handing `Metadata` a Proxy over the
* raw response and then touching every field. Comparing getter names to raw keys
* would miss the cases that matter here: keys that differ from their getter
* (`access-restricted-item`) and fields that fall back across several keys.
*/
function modeledRawKeys(raw) {
	const touched = /* @__PURE__ */ new Set();
	const metadata = new Metadata(new Proxy(raw, { get(target, key) {
		if (typeof key === "string") touched.add(key);
		return Reflect.get(target, key);
	} }));
	for (const name of MODELED_FIELDS) fieldValue(metadata, name);
	return touched;
}
/**
* A few stable archive.org items demonstrating different metadata shapes.
* The last two have multi-value `subject` arrays that exercise the list parser
* (StringListField), so their `subject` row shows `.value` (first) diverging
* from `.values` (all).
*/
var EXAMPLES = [
	"gd73-06-10.sbd.hollister.174.sbeok.shnf",
	"nasa",
	"goody",
	"eventsounds_pack",
	"womeningovernmen0000jame",
	"KGO_20101106_063500_Nightline"
];
/**
* Query params the demo reads on load and keeps up to date, so a link can point
* someone at a particular item with the table already filtered.
*/
var IDENTIFIER_PARAM = "identifier";
var FILTER_PARAM = "filter";
/** A trimmed query param off the current URL, or undefined if absent or blank. */
function paramFromUrl(name) {
	var _a;
	return ((_a = new URLSearchParams(window.location.search).get(name)) === null || _a === void 0 ? void 0 : _a.trim()) || void 0;
}
/**
* The filter split on commas, so `aspect, tuner` narrows to both rather than
* looking for one field with that whole string in its name.
*/
function filterTerms(query) {
	return query.split(",").map((term) => term.trim().toLowerCase()).filter(Boolean);
}
/** True when the filter is empty, or `name` contains any one of its terms. */
function matchesFilter(name, terms) {
	if (!terms.length) return true;
	const lower = name.toLowerCase();
	return terms.some((term) => lower.includes(term));
}
/** Render any parsed value (Date, number, string, array, object) as text. */
function display(value) {
	if (value === void 0 || value === null) return "—";
	if (value instanceof Date) return value.toISOString();
	if (Array.isArray(value)) return value.length ? value.map(display).join(", ") : "—";
	if (typeof value === "object") return JSON.stringify(value);
	return String(value);
}
var AppRoot = class AppRoot extends i {
	constructor() {
		var _a, _b;
		super(...arguments);
		this.identifier = (_a = paramFromUrl(IDENTIFIER_PARAM)) !== null && _a !== void 0 ? _a : EXAMPLES[0];
		this.loading = false;
		/** Raw keys present in the response that no field reads. */
		this.unmodeledKeys = [];
		/** Comma-separated terms; a field shows when its name contains any of them. */
		this.query = (_b = paramFromUrl(FILTER_PARAM)) !== null && _b !== void 0 ? _b : "";
		/** Whether to keep rows for fields the item leaves unset. */
		this.showUnset = false;
	}
	firstUpdated() {
		this.loadFromArchive();
	}
	async loadFromArchive() {
		var _a;
		const identifier = this.identifier.trim();
		if (!identifier) {
			this.error = "Enter an archive.org identifier.";
			return;
		}
		this.loading = true;
		this.error = void 0;
		try {
			const response = await fetch(`https://archive.org/metadata/${encodeURIComponent(identifier)}`);
			if (!response.ok) throw new Error(`Request failed (${response.status})`);
			const json = await response.json();
			if (!json.metadata) throw new Error(`No item found for identifier “${identifier}”.`);
			this.setMetadata(json.metadata);
			this.fileCount = (_a = json.files) === null || _a === void 0 ? void 0 : _a.length;
			this.syncUrl();
		} catch (e) {
			this.metadata = void 0;
			this.fileCount = void 0;
			this.unmodeledKeys = [];
			this.error = e instanceof Error ? e.message : "Failed to load item.";
		} finally {
			this.loading = false;
		}
	}
	/** Builds the model and works out which raw keys it leaves untouched. */
	setMetadata(raw) {
		this.metadata = new Metadata(raw);
		const modeled = modeledRawKeys(raw);
		this.unmodeledKeys = Object.keys(raw).filter((key) => !modeled.has(key)).sort();
	}
	parseJson() {
		var _a;
		var _b, _c;
		const textarea = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("textarea");
		const text = (_b = textarea === null || textarea === void 0 ? void 0 : textarea.value) !== null && _b !== void 0 ? _b : "";
		if (!text.trim()) {
			this.error = "Paste some metadata JSON first.";
			return;
		}
		try {
			const parsed = JSON.parse(text);
			const raw = (_c = parsed.metadata) !== null && _c !== void 0 ? _c : parsed;
			this.setMetadata(raw);
			this.fileCount = void 0;
			this.error = void 0;
		} catch (_d) {
			this.error = "Could not parse that as JSON.";
		}
	}
	render() {
		return b`
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
          ${this.loading ? "Loading…" : "Load item"}
        </button>
      </form>

      <p class="examples">
        Try:
        ${EXAMPLES.map((id) => b`<a
              href=${this.exampleHref(id)}
              @click=${(event) => this.onExampleClick(event, id)}
              >${id}</a
            >`)}
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

      ${this.error ? b`<p class="error" role="alert">${this.error}</p>` : A}
      ${this.metadata ? this.renderResult(this.metadata) : A}
    `;
	}
	renderResult(metadata) {
		const { identifier } = metadata;
		return b`
      <h2>
        ${identifier ? b`<a
              href="https://archive.org/details/${identifier}"
              target="_blank"
              rel="noopener"
              >${identifier}</a
            >` : "Parsed metadata"}
      </h2>
      ${this.fileCount !== void 0 ? b`<p class="meta">${this.fileCount} files in response</p>` : A}

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

      ${this.renderTable(metadata)} ${this.renderUnmodeled()}
    `;
	}
	/**
	* The fields to show: every modeled field, minus the ones this item leaves
	* unset (unless asked for) and the ones the filter excludes.
	*/
	visibleFields(metadata) {
		const terms = filterTerms(this.query);
		return MODELED_FIELDS.filter((name) => {
			if (!matchesFilter(name, terms)) return false;
			return this.showUnset || fieldValue(metadata, name) !== void 0;
		});
	}
	renderTable(metadata) {
		const fields = this.visibleFields(metadata);
		const setCount = MODELED_FIELDS.filter((name) => fieldValue(metadata, name) !== void 0).length;
		return b`
      <p class="meta">
        Showing ${fields.length} of ${MODELED_FIELDS.length} modeled fields.
        ${setCount} set on this item.
      </p>
      ${fields.length ? b`
            <div class="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Parsed as</th>
                    <th><code>.value</code></th>
                    <th><code>.values</code></th>
                    <th><code>.rawValue</code></th>
                  </tr>
                </thead>
                <tbody>
                  ${fields.map((name) => this.renderRow(metadata, name))}
                </tbody>
              </table>
            </div>
          ` : b`<p class="meta">No field names match that filter.</p>`}
    `;
	}
	renderRow(metadata, name) {
		const value = fieldValue(metadata, name);
		const cells = isMetadataField(value) ? [
			display(value.value),
			display(value.values),
			display(value.rawValue)
		] : [
			display(value),
			display(void 0),
			display(void 0)
		];
		return b`
      <tr class=${value === void 0 ? "unset" : ""}>
        <td><code>${name}</code></td>
        <td class="type">${fieldTypeName(value)}</td>
        <td>${cells[0]}</td>
        <td>${cells[1]}</td>
        <td class="raw">${cells[2]}</td>
      </tr>
    `;
	}
	/**
	* Raw keys the model doesn't read, so a field missing from the table above
	* reads as a gap in the model rather than a gap in this demo.
	*/
	renderUnmodeled() {
		if (!this.unmodeledKeys.length) return A;
		const terms = filterTerms(this.query);
		const keys = this.unmodeledKeys.filter((key) => matchesFilter(key, terms));
		return b`
      <details class="unmodeled">
        <summary>
          ${keys.length === this.unmodeledKeys.length ? this.unmodeledKeys.length : `${keys.length} of ${this.unmodeledKeys.length}`}
          raw keys the model doesn't expose
        </summary>
        ${keys.length ? b`<p class="keys">
              ${keys.map((key) => b`<code>${key}</code>`)}
            </p>` : b`<p class="meta">No unmodeled keys match that filter.</p>`}
      </details>
    `;
	}
	onIdentifierInput(event) {
		this.identifier = event.currentTarget.value;
	}
	onQueryInput(event) {
		this.query = event.currentTarget.value;
		this.syncUrl();
	}
	/**
	* Mirrors the loaded item and the field filter into the URL, so the address bar
	* is always a link to what's on screen. Blank values drop out of the query
	* string rather than sitting there empty.
	*/
	syncUrl() {
		const url = new URL(window.location.href);
		const params = {
			[IDENTIFIER_PARAM]: this.identifier,
			[FILTER_PARAM]: filterTerms(this.query).join(",")
		};
		for (const [name, value] of Object.entries(params)) if (value.trim()) url.searchParams.set(name, value.trim());
		else url.searchParams.delete(name);
		const search = url.search.replace(/%2C/g, ",");
		window.history.replaceState({}, "", `${url.origin}${url.pathname}${search}`);
	}
	onShowUnsetChange(event) {
		this.showUnset = event.currentTarget.checked;
	}
	onSubmit(event) {
		event.preventDefault();
		this.loadFromArchive();
	}
	/**
	* Where an example link points: this page with that item loaded, keeping any
	* filter that's already on. Real hrefs so the examples can be opened in a
	* tab or copied like any other link.
	*/
	exampleHref(id) {
		const params = new URLSearchParams({ [IDENTIFIER_PARAM]: id });
		const filter = filterTerms(this.query).join(",");
		if (filter) params.set(FILTER_PARAM, filter);
		return `?${params.toString().replace(/%2C/g, ",")}`;
	}
	onExampleClick(event, id) {
		if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
		event.preventDefault();
		this.identifier = id;
		this.loadFromArchive();
	}
};
AppRoot.styles = i$3`
    :host {
      display: block;
      /* wide enough for the structured values, which run long as JSON */
      max-width: 110rem;
      margin: 0 auto;
      padding: 1rem;
      color: #222;
      line-height: 1.4;
    }

    /* the prose reads badly at the full table width */
    h1,
    :host > p {
      max-width: 60rem;
    }

    /* identifiers are long unbroken tokens and will push the page sideways */
    h2,
    .examples a {
      overflow-wrap: anywhere;
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

    .examples {
      font-size: 0.85rem;
      color: #555;
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: baseline;
    }

    .examples a {
      color: #194880;
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

    /* keep a wide table inside its own scroller rather than stretching the page */
    .table-scroll {
      overflow-x: auto;
      max-width: 100%;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      font-size: 0.9rem;
    }

    td.type {
      color: #555;
      font-family: monospace;
      font-size: 0.8rem;
      white-space: nowrap;
    }

    /* the field name and its type are the anchors, so keep them intact */
    tbody td:first-child {
      white-space: nowrap;
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
  `;
__decorate([r()], AppRoot.prototype, "identifier", void 0);
__decorate([r()], AppRoot.prototype, "metadata", void 0);
__decorate([r()], AppRoot.prototype, "fileCount", void 0);
__decorate([r()], AppRoot.prototype, "loading", void 0);
__decorate([r()], AppRoot.prototype, "error", void 0);
__decorate([r()], AppRoot.prototype, "unmodeledKeys", void 0);
__decorate([r()], AppRoot.prototype, "query", void 0);
__decorate([r()], AppRoot.prototype, "showUnset", void 0);
AppRoot = __decorate([t("app-root")], AppRoot);
//#endregion
