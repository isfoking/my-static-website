var PWAInstallComponent;
(() => {
  "use strict";
  var e = {
      d: (t, a) => {
        for (var i in a)
          e.o(a, i) &&
            !e.o(t, i) &&
            Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      },
      o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
      r: (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      },
    },
    t = {};
  e.r(t), e.d(t, { PWAInstallElement: () => aa });
  var a = {};
  e.r(a), e.d(a, { templates: () => dt });
  var i = {};
  e.r(i), e.d(i, { templates: () => ct });
  var o = {};
  e.r(o), e.d(o, { templates: () => pt });
  var s = {};
  e.r(s), e.d(s, { templates: () => ht });
  var l = {};
  e.r(l), e.d(l, { templates: () => bt });
  var n = {};
  e.r(n), e.d(n, { templates: () => gt });
  var r = {};
  e.r(r), e.d(r, { templates: () => ut });
  var d = {};
  e.r(d), e.d(d, { templates: () => mt });
  var c = {};
  e.r(c), e.d(c, { templates: () => ft });
  var p = {};
  e.r(p), e.d(p, { templates: () => vt });
  var h = {};
  e.r(h), e.d(h, { templates: () => wt });
  var b = {};
  e.r(b), e.d(b, { templates: () => yt });
  var g = {};
  e.r(g), e.d(g, { templates: () => xt });
  var u = {};
  e.r(u), e.d(u, { templates: () => kt });
  var m = {};
  e.r(m), e.d(m, { templates: () => _t });
  var f = {};
  e.r(f), e.d(f, { templates: () => $t });
  var v = {};
  e.r(v), e.d(v, { templates: () => At });
  var w = {};
  e.r(w), e.d(w, { templates: () => St });
  var y = {};
  e.r(y), e.d(y, { templates: () => Et });
  var x = {};
  e.r(x), e.d(x, { templates: () => Dt });
  const k = globalThis,
    _ =
      k.ShadowRoot &&
      (void 0 === k.ShadyCSS || k.ShadyCSS.nativeShadow) &&
      "adoptedStyleSheets" in Document.prototype &&
      "replace" in CSSStyleSheet.prototype,
    $ = Symbol(),
    A = new WeakMap();
  class S {
    constructor(e, t, a) {
      if (((this._$cssResult$ = !0), a !== $))
        throw Error(
          "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
        );
      (this.cssText = e), (this.t = t);
    }
    get styleSheet() {
      let e = this.o;
      const t = this.t;
      if (_ && void 0 === e) {
        const a = void 0 !== t && 1 === t.length;
        a && (e = A.get(t)),
          void 0 === e &&
            ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText),
            a && A.set(t, e));
      }
      return e;
    }
    toString() {
      return this.cssText;
    }
  }
  const E = (e, ...t) => {
      const a =
        1 === e.length
          ? e[0]
          : t.reduce(
              (t, a, i) =>
                t +
                ((e) => {
                  if (!0 === e._$cssResult$) return e.cssText;
                  if ("number" == typeof e) return e;
                  throw Error(
                    "Value passed to 'css' function must be a 'css' function result: " +
                      e +
                      ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                  );
                })(a) +
                e[i + 1],
              e[0]
            );
      return new S(a, e, $);
    },
    D = (e, t) => {
      if (_)
        e.adoptedStyleSheets = t.map((e) =>
          e instanceof CSSStyleSheet ? e : e.styleSheet
        );
      else
        for (const a of t) {
          const t = document.createElement("style"),
            i = k.litNonce;
          void 0 !== i && t.setAttribute("nonce", i),
            (t.textContent = a.cssText),
            e.appendChild(t);
        }
    },
    P = _
      ? (e) => e
      : (e) =>
          e instanceof CSSStyleSheet
            ? ((e) => {
                let t = "";
                for (const a of e.cssRules) t += a.cssText;
                return ((e) =>
                  new S("string" == typeof e ? e : e + "", void 0, $))(t);
              })(e)
            : e,
    {
      is: j,
      defineProperty: z,
      getOwnPropertyDescriptor: C,
      getOwnPropertyNames: R,
      getOwnPropertySymbols: M,
      getPrototypeOf: T,
    } = Object,
    I = globalThis,
    L = I.trustedTypes,
    U = L ? L.emptyScript : "",
    O = I.reactiveElementPolyfillSupport,
    H = (e, t) => e,
    B = {
      toAttribute(e, t) {
        switch (t) {
          case Boolean:
            e = e ? U : null;
            break;
          case Object:
          case Array:
            e = null == e ? e : JSON.stringify(e);
        }
        return e;
      },
      fromAttribute(e, t) {
        let a = e;
        switch (t) {
          case Boolean:
            a = null !== e;
            break;
          case Number:
            a = null === e ? null : Number(e);
            break;
          case Object:
          case Array:
            try {
              a = JSON.parse(e);
            } catch (e) {
              a = null;
            }
        }
        return a;
      },
    },
    N = (e, t) => !j(e, t),
    q = {
      attribute: !0,
      type: String,
      converter: B,
      reflect: !1,
      hasChanged: N,
    };
  (Symbol.metadata ??= Symbol("metadata")),
    (I.litPropertyMetadata ??= new WeakMap());
  class W extends HTMLElement {
    static addInitializer(e) {
      this._$Ei(), (this.l ??= []).push(e);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(e, t = q) {
      if (
        (t.state && (t.attribute = !1),
        this._$Ei(),
        this.elementProperties.set(e, t),
        !t.noAccessor)
      ) {
        const a = Symbol(),
          i = this.getPropertyDescriptor(e, a, t);
        void 0 !== i && z(this.prototype, e, i);
      }
    }
    static getPropertyDescriptor(e, t, a) {
      const { get: i, set: o } = C(this.prototype, e) ?? {
        get() {
          return this[t];
        },
        set(e) {
          this[t] = e;
        },
      };
      return {
        get() {
          return i?.call(this);
        },
        set(t) {
          const s = i?.call(this);
          o.call(this, t), this.requestUpdate(e, s, a);
        },
        configurable: !0,
        enumerable: !0,
      };
    }
    static getPropertyOptions(e) {
      return this.elementProperties.get(e) ?? q;
    }
    static _$Ei() {
      if (this.hasOwnProperty(H("elementProperties"))) return;
      const e = T(this);
      e.finalize(),
        void 0 !== e.l && (this.l = [...e.l]),
        (this.elementProperties = new Map(e.elementProperties));
    }
    static finalize() {
      if (this.hasOwnProperty(H("finalized"))) return;
      if (
        ((this.finalized = !0),
        this._$Ei(),
        this.hasOwnProperty(H("properties")))
      ) {
        const e = this.properties,
          t = [...R(e), ...M(e)];
        for (const a of t) this.createProperty(a, e[a]);
      }
      const e = this[Symbol.metadata];
      if (null !== e) {
        const t = litPropertyMetadata.get(e);
        if (void 0 !== t)
          for (const [e, a] of t) this.elementProperties.set(e, a);
      }
      this._$Eh = new Map();
      for (const [e, t] of this.elementProperties) {
        const a = this._$Eu(e, t);
        void 0 !== a && this._$Eh.set(a, e);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(e) {
      const t = [];
      if (Array.isArray(e)) {
        const a = new Set(e.flat(1 / 0).reverse());
        for (const e of a) t.unshift(P(e));
      } else void 0 !== e && t.push(P(e));
      return t;
    }
    static _$Eu(e, t) {
      const a = t.attribute;
      return !1 === a
        ? void 0
        : "string" == typeof a
        ? a
        : "string" == typeof e
        ? e.toLowerCase()
        : void 0;
    }
    constructor() {
      super(),
        (this._$Ep = void 0),
        (this.isUpdatePending = !1),
        (this.hasUpdated = !1),
        (this._$Em = null),
        this._$Ev();
    }
    _$Ev() {
      (this._$ES = new Promise((e) => (this.enableUpdating = e))),
        (this._$AL = new Map()),
        this._$E_(),
        this.requestUpdate(),
        this.constructor.l?.forEach((e) => e(this));
    }
    addController(e) {
      (this._$EO ??= new Set()).add(e),
        void 0 !== this.renderRoot && this.isConnected && e.hostConnected?.();
    }
    removeController(e) {
      this._$EO?.delete(e);
    }
    _$E_() {
      const e = new Map(),
        t = this.constructor.elementProperties;
      for (const a of t.keys())
        this.hasOwnProperty(a) && (e.set(a, this[a]), delete this[a]);
      e.size > 0 && (this._$Ep = e);
    }
    createRenderRoot() {
      const e =
        this.shadowRoot ??
        this.attachShadow(this.constructor.shadowRootOptions);
      return D(e, this.constructor.elementStyles), e;
    }
    connectedCallback() {
      (this.renderRoot ??= this.createRenderRoot()),
        this.enableUpdating(!0),
        this._$EO?.forEach((e) => e.hostConnected?.());
    }
    enableUpdating(e) {}
    disconnectedCallback() {
      this._$EO?.forEach((e) => e.hostDisconnected?.());
    }
    attributeChangedCallback(e, t, a) {
      this._$AK(e, a);
    }
    _$EC(e, t) {
      const a = this.constructor.elementProperties.get(e),
        i = this.constructor._$Eu(e, a);
      if (void 0 !== i && !0 === a.reflect) {
        const o = (
          void 0 !== a.converter?.toAttribute ? a.converter : B
        ).toAttribute(t, a.type);
        (this._$Em = e),
          null == o ? this.removeAttribute(i) : this.setAttribute(i, o),
          (this._$Em = null);
      }
    }
    _$AK(e, t) {
      const a = this.constructor,
        i = a._$Eh.get(e);
      if (void 0 !== i && this._$Em !== i) {
        const e = a.getPropertyOptions(i),
          o =
            "function" == typeof e.converter
              ? { fromAttribute: e.converter }
              : void 0 !== e.converter?.fromAttribute
              ? e.converter
              : B;
        (this._$Em = i),
          (this[i] = o.fromAttribute(t, e.type)),
          (this._$Em = null);
      }
    }
    requestUpdate(e, t, a) {
      if (void 0 !== e) {
        if (
          ((a ??= this.constructor.getPropertyOptions(e)),
          !(a.hasChanged ?? N)(this[e], t))
        )
          return;
        this.P(e, t, a);
      }
      !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(e, t, a) {
      this._$AL.has(e) || this._$AL.set(e, t),
        !0 === a.reflect && this._$Em !== e && (this._$Ej ??= new Set()).add(e);
    }
    async _$ET() {
      this.isUpdatePending = !0;
      try {
        await this._$ES;
      } catch (e) {
        Promise.reject(e);
      }
      const e = this.scheduleUpdate();
      return null != e && (await e), !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (((this.renderRoot ??= this.createRenderRoot()), this._$Ep)) {
          for (const [e, t] of this._$Ep) this[e] = t;
          this._$Ep = void 0;
        }
        const e = this.constructor.elementProperties;
        if (e.size > 0)
          for (const [t, a] of e)
            !0 !== a.wrapped ||
              this._$AL.has(t) ||
              void 0 === this[t] ||
              this.P(t, this[t], a);
      }
      let e = !1;
      const t = this._$AL;
      try {
        (e = this.shouldUpdate(t)),
          e
            ? (this.willUpdate(t),
              this._$EO?.forEach((e) => e.hostUpdate?.()),
              this.update(t))
            : this._$EU();
      } catch (t) {
        throw ((e = !1), this._$EU(), t);
      }
      e && this._$AE(t);
    }
    willUpdate(e) {}
    _$AE(e) {
      this._$EO?.forEach((e) => e.hostUpdated?.()),
        this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
        this.updated(e);
    }
    _$EU() {
      (this._$AL = new Map()), (this.isUpdatePending = !1);
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(e) {
      return !0;
    }
    update(e) {
      (this._$Ej &&= this._$Ej.forEach((e) => this._$EC(e, this[e]))),
        this._$EU();
    }
    updated(e) {}
    firstUpdated(e) {}
  }
  (W.elementStyles = []),
    (W.shadowRootOptions = { mode: "open" }),
    (W[H("elementProperties")] = new Map()),
    (W[H("finalized")] = new Map()),
    O?.({ ReactiveElement: W }),
    (I.reactiveElementVersions ??= []).push("2.0.4");
  const Z = globalThis,
    V = Z.trustedTypes,
    Y = V ? V.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
    F = "$lit$",
    G = `lit$${Math.random().toFixed(9).slice(2)}$`,
    J = "?" + G,
    K = `<${J}>`,
    Q = document,
    X = () => Q.createComment(""),
    ee = (e) => null === e || ("object" != typeof e && "function" != typeof e),
    te = Array.isArray,
    ae = (e) => te(e) || "function" == typeof e?.[Symbol.iterator],
    ie = "[ \t\n\f\r]",
    oe = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
    se = /-->/g,
    le = />/g,
    ne = RegExp(
      `>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
      "g"
    ),
    re = /'/g,
    de = /"/g,
    ce = /^(?:script|style|textarea|title)$/i,
    pe =
      (e) =>
      (t, ...a) => ({ _$litType$: e, strings: t, values: a }),
    he = pe(1),
    be = (pe(2), pe(3), Symbol.for("lit-noChange")),
    ge = Symbol.for("lit-nothing"),
    ue = new WeakMap(),
    me = Q.createTreeWalker(Q, 129);
  function fe(e, t) {
    if (!te(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return void 0 !== Y ? Y.createHTML(t) : t;
  }
  const ve = (e, t) => {
    const a = e.length - 1,
      i = [];
    let o,
      s = 2 === t ? "<svg>" : 3 === t ? "<math>" : "",
      l = oe;
    for (let t = 0; t < a; t++) {
      const a = e[t];
      let n,
        r,
        d = -1,
        c = 0;
      for (; c < a.length && ((l.lastIndex = c), (r = l.exec(a)), null !== r); )
        (c = l.lastIndex),
          l === oe
            ? "!--" === r[1]
              ? (l = se)
              : void 0 !== r[1]
              ? (l = le)
              : void 0 !== r[2]
              ? (ce.test(r[2]) && (o = RegExp("</" + r[2], "g")), (l = ne))
              : void 0 !== r[3] && (l = ne)
            : l === ne
            ? ">" === r[0]
              ? ((l = o ?? oe), (d = -1))
              : void 0 === r[1]
              ? (d = -2)
              : ((d = l.lastIndex - r[2].length),
                (n = r[1]),
                (l = void 0 === r[3] ? ne : '"' === r[3] ? de : re))
            : l === de || l === re
            ? (l = ne)
            : l === se || l === le
            ? (l = oe)
            : ((l = ne), (o = void 0));
      const p = l === ne && e[t + 1].startsWith("/>") ? " " : "";
      s +=
        l === oe
          ? a + K
          : d >= 0
          ? (i.push(n), a.slice(0, d) + F + a.slice(d) + G + p)
          : a + G + (-2 === d ? t : p);
    }
    return [
      fe(
        e,
        s + (e[a] || "<?>") + (2 === t ? "</svg>" : 3 === t ? "</math>" : "")
      ),
      i,
    ];
  };
  class we {
    constructor({ strings: e, _$litType$: t }, a) {
      let i;
      this.parts = [];
      let o = 0,
        s = 0;
      const l = e.length - 1,
        n = this.parts,
        [r, d] = ve(e, t);
      if (
        ((this.el = we.createElement(r, a)),
        (me.currentNode = this.el.content),
        2 === t || 3 === t)
      ) {
        const e = this.el.content.firstChild;
        e.replaceWith(...e.childNodes);
      }
      for (; null !== (i = me.nextNode()) && n.length < l; ) {
        if (1 === i.nodeType) {
          if (i.hasAttributes())
            for (const e of i.getAttributeNames())
              if (e.endsWith(F)) {
                const t = d[s++],
                  a = i.getAttribute(e).split(G),
                  l = /([.?@])?(.*)/.exec(t);
                n.push({
                  type: 1,
                  index: o,
                  name: l[2],
                  strings: a,
                  ctor:
                    "." === l[1]
                      ? $e
                      : "?" === l[1]
                      ? Ae
                      : "@" === l[1]
                      ? Se
                      : _e,
                }),
                  i.removeAttribute(e);
              } else
                e.startsWith(G) &&
                  (n.push({ type: 6, index: o }), i.removeAttribute(e));
          if (ce.test(i.tagName)) {
            const e = i.textContent.split(G),
              t = e.length - 1;
            if (t > 0) {
              i.textContent = V ? V.emptyScript : "";
              for (let a = 0; a < t; a++)
                i.append(e[a], X()),
                  me.nextNode(),
                  n.push({ type: 2, index: ++o });
              i.append(e[t], X());
            }
          }
        } else if (8 === i.nodeType)
          if (i.data === J) n.push({ type: 2, index: o });
          else {
            let e = -1;
            for (; -1 !== (e = i.data.indexOf(G, e + 1)); )
              n.push({ type: 7, index: o }), (e += G.length - 1);
          }
        o++;
      }
    }
    static createElement(e, t) {
      const a = Q.createElement("template");
      return (a.innerHTML = e), a;
    }
  }
  function ye(e, t, a = e, i) {
    if (t === be) return t;
    let o = void 0 !== i ? a.o?.[i] : a.l;
    const s = ee(t) ? void 0 : t._$litDirective$;
    return (
      o?.constructor !== s &&
        (o?._$AO?.(!1),
        void 0 === s ? (o = void 0) : ((o = new s(e)), o._$AT(e, a, i)),
        void 0 !== i ? ((a.o ??= [])[i] = o) : (a.l = o)),
      void 0 !== o && (t = ye(e, o._$AS(e, t.values), o, i)),
      t
    );
  }
  class xe {
    constructor(e, t) {
      (this._$AV = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const {
          el: { content: t },
          parts: a,
        } = this._$AD,
        i = (e?.creationScope ?? Q).importNode(t, !0);
      me.currentNode = i;
      let o = me.nextNode(),
        s = 0,
        l = 0,
        n = a[0];
      for (; void 0 !== n; ) {
        if (s === n.index) {
          let t;
          2 === n.type
            ? (t = new ke(o, o.nextSibling, this, e))
            : 1 === n.type
            ? (t = new n.ctor(o, n.name, n.strings, this, e))
            : 6 === n.type && (t = new Ee(o, this, e)),
            this._$AV.push(t),
            (n = a[++l]);
        }
        s !== n?.index && ((o = me.nextNode()), s++);
      }
      return (me.currentNode = Q), i;
    }
    p(e) {
      let t = 0;
      for (const a of this._$AV)
        void 0 !== a &&
          (void 0 !== a.strings
            ? (a._$AI(e, a, t), (t += a.strings.length - 2))
            : a._$AI(e[t])),
          t++;
    }
  }
  class ke {
    get _$AU() {
      return this._$AM?._$AU ?? this.v;
    }
    constructor(e, t, a, i) {
      (this.type = 2),
        (this._$AH = ge),
        (this._$AN = void 0),
        (this._$AA = e),
        (this._$AB = t),
        (this._$AM = a),
        (this.options = i),
        (this.v = i?.isConnected ?? !0);
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const t = this._$AM;
      return void 0 !== t && 11 === e?.nodeType && (e = t.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, t = this) {
      (e = ye(this, e, t)),
        ee(e)
          ? e === ge || null == e || "" === e
            ? (this._$AH !== ge && this._$AR(), (this._$AH = ge))
            : e !== this._$AH && e !== be && this._(e)
          : void 0 !== e._$litType$
          ? this.$(e)
          : void 0 !== e.nodeType
          ? this.T(e)
          : ae(e)
          ? this.k(e)
          : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), (this._$AH = this.O(e)));
    }
    _(e) {
      this._$AH !== ge && ee(this._$AH)
        ? (this._$AA.nextSibling.data = e)
        : this.T(Q.createTextNode(e)),
        (this._$AH = e);
    }
    $(e) {
      const { values: t, _$litType$: a } = e,
        i =
          "number" == typeof a
            ? this._$AC(e)
            : (void 0 === a.el &&
                (a.el = we.createElement(fe(a.h, a.h[0]), this.options)),
              a);
      if (this._$AH?._$AD === i) this._$AH.p(t);
      else {
        const e = new xe(i, this),
          a = e.u(this.options);
        e.p(t), this.T(a), (this._$AH = e);
      }
    }
    _$AC(e) {
      let t = ue.get(e.strings);
      return void 0 === t && ue.set(e.strings, (t = new we(e))), t;
    }
    k(e) {
      te(this._$AH) || ((this._$AH = []), this._$AR());
      const t = this._$AH;
      let a,
        i = 0;
      for (const o of e)
        i === t.length
          ? t.push((a = new ke(this.O(X()), this.O(X()), this, this.options)))
          : (a = t[i]),
          a._$AI(o),
          i++;
      i < t.length && (this._$AR(a && a._$AB.nextSibling, i), (t.length = i));
    }
    _$AR(e = this._$AA.nextSibling, t) {
      for (this._$AP?.(!1, !0, t); e && e !== this._$AB; ) {
        const t = e.nextSibling;
        e.remove(), (e = t);
      }
    }
    setConnected(e) {
      void 0 === this._$AM && ((this.v = e), this._$AP?.(e));
    }
  }
  class _e {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, t, a, i, o) {
      (this.type = 1),
        (this._$AH = ge),
        (this._$AN = void 0),
        (this.element = e),
        (this.name = t),
        (this._$AM = i),
        (this.options = o),
        a.length > 2 || "" !== a[0] || "" !== a[1]
          ? ((this._$AH = Array(a.length - 1).fill(new String())),
            (this.strings = a))
          : (this._$AH = ge);
    }
    _$AI(e, t = this, a, i) {
      const o = this.strings;
      let s = !1;
      if (void 0 === o)
        (e = ye(this, e, t, 0)),
          (s = !ee(e) || (e !== this._$AH && e !== be)),
          s && (this._$AH = e);
      else {
        const i = e;
        let l, n;
        for (e = o[0], l = 0; l < o.length - 1; l++)
          (n = ye(this, i[a + l], t, l)),
            n === be && (n = this._$AH[l]),
            (s ||= !ee(n) || n !== this._$AH[l]),
            n === ge ? (e = ge) : e !== ge && (e += (n ?? "") + o[l + 1]),
            (this._$AH[l] = n);
      }
      s && !i && this.j(e);
    }
    j(e) {
      e === ge
        ? this.element.removeAttribute(this.name)
        : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class $e extends _e {
    constructor() {
      super(...arguments), (this.type = 3);
    }
    j(e) {
      this.element[this.name] = e === ge ? void 0 : e;
    }
  }
  class Ae extends _e {
    constructor() {
      super(...arguments), (this.type = 4);
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== ge);
    }
  }
  class Se extends _e {
    constructor(e, t, a, i, o) {
      super(e, t, a, i, o), (this.type = 5);
    }
    _$AI(e, t = this) {
      if ((e = ye(this, e, t, 0) ?? ge) === be) return;
      const a = this._$AH,
        i =
          (e === ge && a !== ge) ||
          e.capture !== a.capture ||
          e.once !== a.once ||
          e.passive !== a.passive,
        o = e !== ge && (a === ge || i);
      i && this.element.removeEventListener(this.name, this, a),
        o && this.element.addEventListener(this.name, this, e),
        (this._$AH = e);
    }
    handleEvent(e) {
      "function" == typeof this._$AH
        ? this._$AH.call(this.options?.host ?? this.element, e)
        : this._$AH.handleEvent(e);
    }
  }
  class Ee {
    constructor(e, t, a) {
      (this.element = e),
        (this.type = 6),
        (this._$AN = void 0),
        (this._$AM = t),
        (this.options = a);
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      ye(this, e);
    }
  }
  const De = Z.litHtmlPolyfillSupport;
  De?.(we, ke), (Z.litHtmlVersions ??= []).push("3.2.0");
  class Pe extends W {
    constructor() {
      super(...arguments),
        (this.renderOptions = { host: this }),
        (this.o = void 0);
    }
    createRenderRoot() {
      const e = super.createRenderRoot();
      return (this.renderOptions.renderBefore ??= e.firstChild), e;
    }
    update(e) {
      const t = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
        super.update(e),
        (this.o = ((e, t, a) => {
          const i = a?.renderBefore ?? t;
          let o = i._$litPart$;
          if (void 0 === o) {
            const e = a?.renderBefore ?? null;
            i._$litPart$ = o = new ke(
              t.insertBefore(X(), e),
              e,
              void 0,
              a ?? {}
            );
          }
          return o._$AI(e), o;
        })(t, this.renderRoot, this.renderOptions));
    }
    connectedCallback() {
      super.connectedCallback(), this.o?.setConnected(!0);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.o?.setConnected(!1);
    }
    render() {
      return be;
    }
  }
  (Pe._$litElement$ = !0),
    (Pe.finalized = !0),
    globalThis.litElementHydrateSupport?.({ LitElement: Pe });
  const je = globalThis.litElementPolyfillSupport;
  je?.({ LitElement: Pe });
  (globalThis.litElementVersions ??= []).push("4.1.0");
  const ze = (e, t, a) => {
      let i = e[0];
      for (let o = 1; o < e.length; o++)
        (i += t[a ? a[o - 1] : o - 1]), (i += e[o]);
      return i;
    },
    Ce = (e) => {
      return "string" != typeof (t = e) && "strTag" in t
        ? ze(e.strings, e.values)
        : e;
      var t;
    };
  let Re = Ce,
    Me = !1;
  const Te = "lit-localize-status";
  class Ie {
    constructor(e) {
      (this.__litLocalizeEventHandler = (e) => {
        "ready" === e.detail.status && this.host.requestUpdate();
      }),
        (this.host = e);
    }
    hostConnected() {
      window.addEventListener(Te, this.__litLocalizeEventHandler);
    }
    hostDisconnected() {
      window.removeEventListener(Te, this.__litLocalizeEventHandler);
    }
  }
  const Le = (e) => e.addController(new Ie(e));
  class Ue {
    constructor() {
      (this.settled = !1),
        (this.promise = new Promise((e, t) => {
          (this._resolve = e), (this._reject = t);
        }));
    }
    resolve(e) {
      (this.settled = !0), this._resolve(e);
    }
    reject(e) {
      (this.settled = !0), this._reject(e);
    }
  }
  const Oe = [];
  for (let e = 0; e < 256; e++)
    Oe[e] = ((e >> 4) & 15).toString(16) + (15 & e).toString(16);
  const He = "",
    Be = "h",
    Ne = "s";
  function qe(e, t) {
    return (
      (t ? Be : Ne) +
      (function (e) {
        let t = 0,
          a = 8997,
          i = 0,
          o = 33826,
          s = 0,
          l = 40164,
          n = 0,
          r = 52210;
        for (let d = 0; d < e.length; d++)
          (a ^= e.charCodeAt(d)),
            (t = 435 * a),
            (i = 435 * o),
            (s = 435 * l),
            (n = 435 * r),
            (s += a << 8),
            (n += o << 8),
            (i += t >>> 16),
            (a = 65535 & t),
            (s += i >>> 16),
            (o = 65535 & i),
            (r = (n + (s >>> 16)) & 65535),
            (l = 65535 & s);
        return (
          Oe[r >> 8] +
          Oe[255 & r] +
          Oe[l >> 8] +
          Oe[255 & l] +
          Oe[o >> 8] +
          Oe[255 & o] +
          Oe[a >> 8] +
          Oe[255 & a]
        );
      })("string" == typeof e ? e : e.join(He))
    );
  }
  const We = new WeakMap(),
    Ze = new Map();
  function Ve(e, t, a) {
    if (e) {
      const i =
          a?.id ??
          (function (e) {
            const t = "string" == typeof e ? e : e.strings;
            let a = Ze.get(t);
            void 0 === a &&
              ((a = qe(t, "string" != typeof e && !("strTag" in e))),
              Ze.set(t, a));
            return a;
          })(t),
        o = e[i];
      if (o) {
        if ("string" == typeof o) return o;
        if ("strTag" in o) return ze(o.strings, t.values, o.values);
        {
          let e = We.get(o);
          return (
            void 0 === e && ((e = o.values), We.set(o, e)),
            { ...o, values: e.map((e) => t.values[e]) }
          );
        }
      }
    }
    return Ce(t);
  }
  function Ye(e) {
    window.dispatchEvent(new CustomEvent(Te, { detail: e }));
  }
  let Fe,
    Ge,
    Je,
    Ke,
    Qe,
    Xe = "",
    et = new Ue();
  et.resolve();
  let tt = 0;
  const at = () => Xe,
    it = (e) => {
      if (e === (Fe ?? Xe)) return et.promise;
      if (!Je || !Ke) throw Error("Internal error");
      if (!Je.has(e)) throw Error("Invalid locale code");
      tt++;
      const t = tt;
      (Fe = e),
        et.settled && (et = new Ue()),
        Ye({ status: "loading", loadingLocale: e });
      return (
        (e === Ge ? Promise.resolve({ templates: void 0 }) : Ke(e)).then(
          (a) => {
            tt === t &&
              ((Xe = e),
              (Fe = void 0),
              (Qe = a.templates),
              Ye({ status: "ready", readyLocale: e }),
              et.resolve());
          },
          (a) => {
            tt === t &&
              (Ye({
                status: "error",
                errorLocale: e,
                errorMessage: a.toString(),
              }),
              et.reject(a));
          }
        ),
        et.promise
      );
    },
    ot = (e) => (t, a) => {
      void 0 !== a
        ? a.addInitializer(() => {
            customElements.define(e, t);
          })
        : customElements.define(e, t);
    },
    st = {
      attribute: !0,
      type: String,
      converter: B,
      reflect: !1,
      hasChanged: N,
    },
    lt = (e = st, t, a) => {
      const { kind: i, metadata: o } = a;
      let s = globalThis.litPropertyMetadata.get(o);
      if (
        (void 0 === s && globalThis.litPropertyMetadata.set(o, (s = new Map())),
        s.set(a.name, e),
        "accessor" === i)
      ) {
        const { name: i } = a;
        return {
          set(a) {
            const o = t.get.call(this);
            t.set.call(this, a), this.requestUpdate(i, o, e);
          },
          init(t) {
            return void 0 !== t && this.P(i, void 0, e), t;
          },
        };
      }
      if ("setter" === i) {
        const { name: i } = a;
        return function (a) {
          const o = this[i];
          t.call(this, a), this.requestUpdate(i, o, e);
        };
      }
      throw Error("Unsupported decorator location: " + i);
    };
  function nt(e) {
    return (t, a) =>
      "object" == typeof a
        ? lt(e, t, a)
        : ((e, t, a) => {
            const i = t.hasOwnProperty(a);
            return (
              t.constructor.createProperty(a, i ? { ...e, wrapped: !0 } : e),
              i ? Object.getOwnPropertyDescriptor(t, a) : void 0
            );
          })(e, t, a);
  }
  const rt = [
      "cs",
      "de",
      "el",
      "es",
      "fr",
      "it",
      "ja",
      "km",
      "ko",
      "nl",
      "no",
      "pl",
      "pt",
      "ru",
      "sr",
      "sv",
      "tr",
      "uk",
      "zh",
      "zh-CN",
    ],
    dt = {
      s182ab2d6c997515f:
        "Добавьте его на главный экран, чтобы получить дополнительные возможности и удобство использования.",
      s1b9047d53d9f9d22: '2) Нажать "Поделиться"',
      s37a9e8aec5713460: "Подробнее",
      s5c6aad7a7e4a1437: '3) Нажать "На экран «Домой»"',
      s6196153c4b0c1ea0: "Установить",
      s922329d6f6213590: "Добавить в Dock",
      sa5ef80b4bb9b39f8: "Свернуть",
      sa7551383d1897fcc: '2) Нажмите "Добавить в Dock"',
      sba52286c21552a4e:
        "Установите это на ваше устройство, чтобы получить дополнительные возможности и удобство использования.",
      sc79fd7641eb9a975: "Спрятать Инструкцию",
      scdaf4bbff76674c8: "На экран «Домой»",
      sdfe23506a3b0cdc8: "1) Открыть в Safari браузере",
      se740f75b95a51807:
        "Добавьте его в Dock, чтобы получить дополнительные возможности и удобство использования.",
      sfea652f6580ff086: "Этот веб-сайт имеет функционал приложения.",
    },
    ct = {
      s182ab2d6c997515f:
        "Daha iyi bir deneyim ve kolay erişim için Ana Ekranınıza ekleyin.",
      s1b9047d53d9f9d22: "2) Gezinme çubuğunda Paylaş'a basın",
      s37a9e8aec5713460: "Daha Fazla",
      s5c6aad7a7e4a1437: "3) Ana Ekrana Ekle'ye basın",
      s6196153c4b0c1ea0: "Yükle",
      s922329d6f6213590: "Dock’a Ekle",
      sa5ef80b4bb9b39f8: "Küçült",
      sa7551383d1897fcc: "2) Dock’a ekleye basın",
      sba52286c21552a4e:
        "Daha iyi bir deneyim ve kolay erişim için cihazınıza yükleyin.",
      sc79fd7641eb9a975: "Talimatları gizle",
      scdaf4bbff76674c8: "Ana Ekrana Ekle",
      sdfe23506a3b0cdc8: "1) Safari tarayıcısında açın",
      se740f75b95a51807:
        "Daha iyi bir deneyim ve kolay erişim için Dock’a ekleyin.",
      sfea652f6580ff086: "Bu site uygulama işlevselliğine sahiptir.",
    },
    pt = {
      s182ab2d6c997515f:
        "Fügen Sie es zu Ihrem Startbildschirm hinzu, um eine umfassende Erfahrung und einen leichten Zugriff zu erhalten.",
      s1b9047d53d9f9d22: "2) Drücken Sie auf Teilen in der Navigationsleiste",
      s37a9e8aec5713460: "Mehr",
      s5c6aad7a7e4a1437: "3) Drücken Sie Hinzufügen zum Startbildschirm",
      s6196153c4b0c1ea0: "Installieren",
      s922329d6f6213590: "Zum Dock hinzufügen",
      sa5ef80b4bb9b39f8: "Weniger",
      sa7551383d1897fcc: "2) Drücken Sie auf Zum Dock hinzufügen",
      sba52286c21552a4e:
        "Installieren Sie es auf Ihrem Gerät für eine umfassende Erfahrung und einen leichten Zugriff.",
      sc79fd7641eb9a975: "Anleitung ausblenden",
      scdaf4bbff76674c8: "Hinzufügen zum Startbildschirm",
      sdfe23506a3b0cdc8: "1) In Safari-Browser öffnen",
      se740f75b95a51807:
        "Fügen Sie es zu Ihrem Dock hinzu, um eine umfassende Erfahrung und einen leichten Zugriff zu erhalten.",
      sfea652f6580ff086: "Diese Website verfügt über App-Funktionalität.",
    },
    ht = {
      s182ab2d6c997515f:
        "Añádelo a tu pantalla de inicio para una experiencia amplia y acceso fácil.",
      s1b9047d53d9f9d22: "2) Presionar Compartir en la barra de direcciones",
      s37a9e8aec5713460: "Más",
      s5c6aad7a7e4a1437: "3) Presionar Añadir a pantalla de inicio",
      s6196153c4b0c1ea0: "Instalar",
      s922329d6f6213590: "Añadir al Dock",
      sa5ef80b4bb9b39f8: "Menos",
      sa7551383d1897fcc: "2) Presionar Añadir al Dock",
      sba52286c21552a4e:
        "Instálalo en tu dispositivo para una experiencia amplia y acceso fácil.",
      sc79fd7641eb9a975: "Esconder instrucciones",
      scdaf4bbff76674c8: "Añadir a pantalla de inicio",
      sdfe23506a3b0cdc8: "1) Abrir en el navegador web Safari",
      se740f75b95a51807:
        "Añádelo a tu Dock para una experiencia amplia y acceso fácil.",
      sfea652f6580ff086: "Este sitio tiene funcionalidad de aplicación.",
    },
    bt = {
      s182ab2d6c997515f:
        "Voeg het toe aan je startscherm voor een uitgebreide ervaring en gemakkelijke toegang.",
      s1b9047d53d9f9d22: "2) Druk op delen in de navigatiebalk",
      s37a9e8aec5713460: "Meer",
      s5c6aad7a7e4a1437: "3) Druk op Toevoegen aan het startscherm",
      s6196153c4b0c1ea0: "Installeren",
      s922329d6f6213590: "Toevoegen aan Dock",
      sa5ef80b4bb9b39f8: "Minder",
      sa7551383d1897fcc: "2) Druk op Toevoegen aan Dock",
      sba52286c21552a4e:
        "Installeer het op je apparaat voor een uitgebreide ervaring en gemakkelijke toegang.",
      sc79fd7641eb9a975: "Instructie verbergen",
      scdaf4bbff76674c8: "Toevoegen aan het startscherm",
      sdfe23506a3b0cdc8: "1) Open in Safari-browser",
      se740f75b95a51807:
        "Voeg het toe aan je Dock voor een uitgebreide ervaring en makkelijke toegang.",
      sfea652f6580ff086: "Deze site heeft app-functionaliteit.",
    },
    gt = {
      s182ab2d6c997515f:
        "Προσθέστε το στην οθόνη Αφετηρίας για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",
      s1b9047d53d9f9d22: "2) Πατήστε Κοινοποίηση στη γραμμή πλοήγησης",
      s37a9e8aec5713460: "Περισσότερα",
      s5c6aad7a7e4a1437: "3) Πατήστε Προσθήκη στην οθόνη Αφετηρίας",
      s6196153c4b0c1ea0: "Εγκατάσταση",
      s922329d6f6213590: "Προσθήκη στην Πρόσβαση",
      sa5ef80b4bb9b39f8: "Λιγότερα",
      sa7551383d1897fcc: "2) Πατήστε Προσθήκη στην Πρόσβαση",
      sba52286c21552a4e:
        "Εγκαταστήστε το στη συσκευή σας για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",
      sc79fd7641eb9a975: "Απόκρυψη Οδηγιών",
      scdaf4bbff76674c8: "Προσθήκη στην Οθόνη Αφετηρίας",
      sdfe23506a3b0cdc8: "1) Ανοίξτε τον περιηγητή Safari",
      se740f75b95a51807:
        "Προσθέστε το στην Πρόσβαση για εκτεταμένη εμπειρία και εύκολη πρόσβαση.",
      sfea652f6580ff086: "Αυτός ο ιστότοπος έχει λειτουργική εφαρμογής.",
    },
    ut = {
      s182ab2d6c997515f:
        "Ajoutez-le à votre écran d'accueil pour une expérience étendue et un accès facile.",
      s1b9047d53d9f9d22: "2) Appuyez sur Partager dans la barre de navigation",
      s37a9e8aec5713460: "Plus",
      s5c6aad7a7e4a1437: "3) Appuyez sur Ajouter à l'écran d'accueil",
      s6196153c4b0c1ea0: "Installer",
      s922329d6f6213590: "Ajouter au Dock",
      sa5ef80b4bb9b39f8: "Moins",
      sa7551383d1897fcc: "2) Appuyez sur Ajouter au Dock",
      sba52286c21552a4e:
        "Installez-le sur votre appareil pour une expérience complète et un accès facile.",
      sc79fd7641eb9a975: "Masquer les instructions",
      scdaf4bbff76674c8: "Ajouter à l'écran d'accueil",
      sdfe23506a3b0cdc8: "1) Ouvrir dans le navigateur Safari",
      se740f75b95a51807:
        "Ajoutez-le à votre Dock pour une expérience étendue et un accès facile.",
      sfea652f6580ff086: "Ce site possède des fonctionnalités d'application.",
    },
    mt = {
      s182ab2d6c997515f:
        "Додајте га на Home Screen за широке могућности и лак приступ.",
      s1b9047d53d9f9d22: "2) Притисните Share у навигационој траци",
      s37a9e8aec5713460: "Више",
      s5c6aad7a7e4a1437: "3) Притисните Add to Home Screen",
      s6196153c4b0c1ea0: "Инсталирај",
      sa5ef80b4bb9b39f8: "Мање",
      sa7551383d1897fcc: "3) Притисните Add to Dock",
      sba52286c21552a4e:
        "Инсталирајте га на вашем уређају за широке могућности и лак приступ.",
      sc79fd7641eb9a975: "Сакриј упутство",
      sdfe23506a3b0cdc8: "1) Отворите у Safari прегледачу",
      se740f75b95a51807:
        "Додајте га у вашу Dock за широке могућности и лак приступ.",
      sfea652f6580ff086: "Овај сајт има функционалност апликације.",
      s922329d6f6213590: "Add to Dock",
      scdaf4bbff76674c8: "Add to Home Screen",
    },
    ft = {
      s182ab2d6c997515f:
        "Dodaj do swojego Ekranu Głównego, aby uzyskać bogate doświadczenie i łatwy dostęp.",
      s1b9047d53d9f9d22: '2) Wybierz "Udostępnij"',
      s37a9e8aec5713460: "Więcej",
      s5c6aad7a7e4a1437: '3) Wybierz "Dodaj do Ekranu Głównego"',
      s6196153c4b0c1ea0: "Zainstaluj",
      s922329d6f6213590: "Dodaj do Docka",
      sa5ef80b4bb9b39f8: "Mniej",
      sa7551383d1897fcc: '2) Wybierz "Dodaj do Docka"',
      sba52286c21552a4e:
        "Zainstaluj na swoim urządzeniu, aby uzyskać bogate doświadczenie i łatwy dostęp.",
      sc79fd7641eb9a975: "Ukryj instrukcję",
      scdaf4bbff76674c8: "Dodaj do Ekranu Głównego",
      sdfe23506a3b0cdc8: "1) Otwórz przeglądarkę Safari",
      se740f75b95a51807:
        "Dodaj do swojego Docka, aby uzyskać bogate doświadczenie i łatwy dostęp.",
      sfea652f6580ff086: "Ta strona posiada funkcje aplikacji.",
    },
    vt = {
      s182ab2d6c997515f:
        "Додайте на Домашній екран для зручного доступу та ширших можливостей.",
      s1b9047d53d9f9d22: "2) Натиснути «Поділитися»",
      s37a9e8aec5713460: "Детальніше",
      s5c6aad7a7e4a1437: "3) Натиснути «На Початковий екран»",
      s6196153c4b0c1ea0: "Встановити",
      s922329d6f6213590: "Додати на Dock",
      sa5ef80b4bb9b39f8: "Згорнути",
      sa7551383d1897fcc: "2) Натиснути «Додати на Dock»",
      sba52286c21552a4e:
        "Встановіть на ваш пристрій для зручного доступу та ширших можливостей.",
      sc79fd7641eb9a975: "Сховати Інструкцію",
      scdaf4bbff76674c8: "На Початковий экран",
      sdfe23506a3b0cdc8: "1) Відкрити в Safari браузері",
      se740f75b95a51807:
        "Додайте на панель Dock для зручного доступу та ширших можливостей.",
      sfea652f6580ff086: "Цей сайт має функції додатку.",
    },
    wt = {
      s182ab2d6c997515f: "將其加入主屏幕，以獲得更豐富的體驗和便捷訪問。",
      s1b9047d53d9f9d22: "2) 點擊列表上的分享按鈕",
      s37a9e8aec5713460: "詳細資訊",
      s5c6aad7a7e4a1437: "3) 點擊加入主畫面",
      s6196153c4b0c1ea0: "安裝",
      s922329d6f6213590: "添加到Dock欄",
      sa5ef80b4bb9b39f8: "簡短資訊",
      sa7551383d1897fcc: "2) 點選添加到Dock欄",
      sba52286c21552a4e: "在您的裝置上安裝它，以獲得更豐富的體驗和便捷訪問。",
      sc79fd7641eb9a975: "隱藏安裝流程",
      scdaf4bbff76674c8: "將App加入主畫面",
      sdfe23506a3b0cdc8: "1) 在Safari上瀏覽此網頁",
      se740f75b95a51807: "將其加入你的Dock欄，以獲得更豐富的體驗和便捷訪問。",
      sfea652f6580ff086: "此網站具有應用程式功能。",
    },
    yt = {
      s182ab2d6c997515f: "将其添加到主屏幕，以享受更全面的体验并便于访问。",
      s1b9047d53d9f9d22: "2) 点击列表上的分享按钮",
      s37a9e8aec5713460: "详细资讯",
      s5c6aad7a7e4a1437: "3) 点击添加到主屏幕",
      s6196153c4b0c1ea0: "安装",
      s922329d6f6213590: "添加到Dock",
      sa5ef80b4bb9b39f8: "简短资讯",
      sa7551383d1897fcc: "2) 按下添加到Dock",
      sba52286c21552a4e: "在您的设备上安装，以享有更全面的体验和便捷的访问。",
      sc79fd7641eb9a975: "隐藏安装流程",
      scdaf4bbff76674c8: "将App添加到主屏幕",
      sdfe23506a3b0cdc8: "1) 在Safari上浏览此网页",
      se740f75b95a51807: "将其添加到您的Dock，以享受更全面的体验并便于访问。",
      sfea652f6580ff086: "此网站具备app的功能性。",
    },
    xt = {
      s182ab2d6c997515f:
        "Aggiungilo alla schermata principale per un'esperienza più completa e un accesso facile.",
      s1b9047d53d9f9d22: "2) Premi Condividi nella barra di navigazione",
      s37a9e8aec5713460: "Più",
      s5c6aad7a7e4a1437: "3) Premi Aggiungi alla schermata principale",
      s6196153c4b0c1ea0: "Installa",
      s922329d6f6213590: "Aggiungi al Dock",
      sa5ef80b4bb9b39f8: "Meno",
      sa7551383d1897fcc: "2) Premi Aggiungi al Dock",
      sba52286c21552a4e:
        "Installalo sul tuo dispositivo per un'esperienza più completa e un accesso facile.",
      sc79fd7641eb9a975: "Nascondi istruzioni",
      scdaf4bbff76674c8: "Aggiungi alla schermata principale",
      sdfe23506a3b0cdc8: "1) Apri nel browser Safari",
      se740f75b95a51807:
        "Aggiungilo al Dock per un'esperienza più completa e un accesso facile.",
      sfea652f6580ff086: "Questo sito ha funzionalità di app.",
    },
    kt = {
      s182ab2d6c997515f:
        "Přidejte jej na plochu pro rozšířené využití a snadný přístup.",
      s1b9047d53d9f9d22: "2) Stiskněte tlačítko Sdílet na navigačním panelu",
      s37a9e8aec5713460: "Vice",
      s5c6aad7a7e4a1437: "3) Stiskněte tlačítko Přidat na plochu",
      s6196153c4b0c1ea0: "Nainstalovat",
      s922329d6f6213590: "Přidat do Docku",
      sa5ef80b4bb9b39f8: "Méně",
      sa7551383d1897fcc: "2) Stiskněte Přidat do Docku",
      sba52286c21552a4e:
        "Nainstalujte si jej na své zařízení pro rozšířené využití a snadný přístup.",
      sc79fd7641eb9a975: "Skrýt instrukce",
      scdaf4bbff76674c8: "Přidat na plochu",
      sdfe23506a3b0cdc8: "1) Otevřete v prohlížeči Safari",
      se740f75b95a51807:
        "Přidejte jej do svého Docku pro rozšířené využití a snadný přístup.",
      sfea652f6580ff086: "Tento web má funkce aplikace.",
    },
    _t = {
      s182ab2d6c997515f:
        "Legg den til på Hjem-skjermen din for å få en bedre brukeropplevelse og raskere tilgang.",
      s1b9047d53d9f9d22: "2) Trykk på Del-knappen i navigasjonslinjen",
      s37a9e8aec5713460: "Mer",
      s5c6aad7a7e4a1437: "3) Velg Legg til på Hjem-skjerm",
      s6196153c4b0c1ea0: "Installer",
      s922329d6f6213590: "Legg til i Dock",
      sa5ef80b4bb9b39f8: "Mindre",
      sa7551383d1897fcc: "2) Velg Legg til i Dock",
      sba52286c21552a4e:
        "Installer den på enheten din for å få en bedre brukeropplevelse og raskere tilgang.",
      sc79fd7641eb9a975: "Skjul instruksjoner",
      scdaf4bbff76674c8: "Legg til på Hjem-skjerm",
      sdfe23506a3b0cdc8: "1) Åpne i Safari",
      se740f75b95a51807:
        "Legg den til i Docken din for å få en bedre brukeropplevelse og raskere tilgang.",
      sfea652f6580ff086: "Denne siden har app-funksjonalitet.",
    },
    $t = {
      s182ab2d6c997515f:
        "Adicione à Tela de Início para uma melhor experiência e mais fácil acesso.",
      s1b9047d53d9f9d22: "2) Pressione Compartilhar na barra de endereço",
      s37a9e8aec5713460: "Mais",
      s5c6aad7a7e4a1437: "3) Pressione Adicionar à Tela de Início",
      s6196153c4b0c1ea0: "Instalar",
      s922329d6f6213590: "Adicionar ao Dock",
      sa5ef80b4bb9b39f8: "Menos",
      sa7551383d1897fcc: "2) Pressione Adicionar ao Dock",
      sba52286c21552a4e:
        "Instale no dispositivo para uma melhor experiência e mais fácil acesso.",
      sc79fd7641eb9a975: "Ocultar Instruções",
      scdaf4bbff76674c8: "Adicionar à Tela de Início",
      sdfe23506a3b0cdc8: "1) Abra no navegador Safari",
      se740f75b95a51807:
        "Adicione ao Dock para uma melhor experiência e mais fácil acesso.",
      sfea652f6580ff086: "Este site possui funcionalidade de aplicativo.",
    },
    At = {
      s182ab2d6c997515f:
        "ホーム画面に追加して、幅広い体験と簡単なアクセスを実現してください。",
      s1b9047d53d9f9d22: "2) ナビゲーションバーで共有を押す",
      s37a9e8aec5713460: "展開",
      s5c6aad7a7e4a1437: "3) 「ホーム画面に追加」を押す",
      s6196153c4b0c1ea0: "インストール",
      s922329d6f6213590: "Dockに追加",
      sa5ef80b4bb9b39f8: "折りたたむ",
      sa7551383d1897fcc: "2) 「Dockに追加」を押す",
      sba52286c21552a4e:
        "デバイスにインストールすることで、より充実した体験と簡単なアクセスを実現できます。",
      sc79fd7641eb9a975: "説明を非表示",
      scdaf4bbff76674c8: "ホーム画面に追加",
      sdfe23506a3b0cdc8: "1) Safariで開く",
      se740f75b95a51807:
        "ドックに追加して、幅広い体験と簡単なアクセスを実現してください。",
      sfea652f6580ff086: "このサイトはアプリ機能があります。",
    },
    St = {
      s182ab2d6c997515f:
        "Lägg till på hemskärmen för att få en bättre användarupplevelse och enklare åtkomst.",
      s1b9047d53d9f9d22: "2) Tryck på Dela-knappen i verktygsfältet",
      s37a9e8aec5713460: "Mer",
      s5c6aad7a7e4a1437: "3) Välj Lägg till på hemskärmen",
      s6196153c4b0c1ea0: "Installera",
      s922329d6f6213590: "Lägg till i Dock",
      sa5ef80b4bb9b39f8: "Mindre",
      sa7551383d1897fcc: "2) Välj Lägg till i Dock",
      sba52286c21552a4e:
        "Installera den på din enhet för att få en bättre användarupplevelse och enklare åtkomst.",
      sc79fd7641eb9a975: "Göm instruktioner",
      scdaf4bbff76674c8: "Lägg till på hemskärmen",
      sdfe23506a3b0cdc8: "1) Öppna i Safari",
      se740f75b95a51807:
        "Lägg till i Dock för att få en bättre användarupplevelse och enklare åtkomst.",
      sfea652f6580ff086: "Denna webbsajt har app-funktionalitet.",
    },
    Et = {
      s182ab2d6c997515f:
        "더 많은 기능과 쉬운 접근을 위해 홈 화면에 추가해주세요.",
      s1b9047d53d9f9d22: "2) 내비게이션 바에서 공유 버튼 누르기",
      s37a9e8aec5713460: "더보기",
      s5c6aad7a7e4a1437: "3) 홈 화면에 추가 버튼 누르기",
      s6196153c4b0c1ea0: "설치",
      s922329d6f6213590: "Dock에 추가",
      sa5ef80b4bb9b39f8: "닫기",
      sa7551383d1897fcc: "2) Dock에 추가 버튼 누르기",
      sba52286c21552a4e: "더 많은 기능과 쉬운 접근을 위해 기기에 설치해주세요.",
      sc79fd7641eb9a975: "안내 숨기기",
      scdaf4bbff76674c8: "홈 화면에 추가",
      sdfe23506a3b0cdc8: "1) Safari 브라우저에서 열기",
      se740f75b95a51807: "더 많은 기능과 쉬운 접근을 위해 Dock에 추가해주세요.",
      sfea652f6580ff086: "이 사이트는 앱 기능을 가지고 있습니다.",
    },
    Dt = {
      s182ab2d6c997515f:
        "បន្ថែមវាទៅកាន់ផ្ទាំងអេក្រង់ដើមដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",
      s1b9047d53d9f9d22: "2) ចុចលើ ប៊ូតុងចែករំលែក នៅក្នុងរបារទិសដៅ",
      s37a9e8aec5713460: "បង្ហាញបន្ថែម",
      s5c6aad7a7e4a1437: "3) ចុចលើ បន្ថែមទៅកាន់ផ្ទាំងអេក្រង់ដើម",
      s6196153c4b0c1ea0: "តំឡើង",
      s922329d6f6213590: "បន្ថែមទៅកាន់ Dock",
      sa5ef80b4bb9b39f8: "បង្ហាញតិច",
      sa7551383d1897fcc: "2) ចុចលើ បន្ថែមទៅកាន់ Dock",
      sba52286c21552a4e:
        "តំឡើងវានៅលើឧបករណ៍របស់អ្នកដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",
      sc79fd7641eb9a975: "បិទការណែនាំ",
      scdaf4bbff76674c8: "បន្ថែមទៅកាន់ផ្ទាំងអេក្រង់ដើម",
      sdfe23506a3b0cdc8: "1) បើកនៅក្នុងកម្មវិធី Safari",
      se740f75b95a51807:
        "បន្ថែមវាទៅកាន់ Dock ដើម្បីទទួលបាននូវបទពិសោធន៍កាន់តែល្អនិងងាយស្រួលប្រើ។",
      sfea652f6580ff086: "គេហទំព័រនេះមានមុខងារជាកម្មវិធី។",
    },
    Pt = new Map([
      ["ru", a],
      ["tr", i],
      ["de", o],
      ["es", s],
      ["nl", l],
      ["el", n],
      ["fr", r],
      ["sr", d],
      ["pl", c],
      ["uk", p],
      ["zh", h],
      ["zh-CN", b],
      ["it", g],
      ["cs", u],
      ["no", m],
      ["pt", f],
      ["ja", v],
      ["sv", w],
      ["ko", y],
      ["km", x],
    ]),
    { getLocale: jt, setLocale: zt } =
      ((Ct = {
        sourceLocale: "en",
        targetLocales: rt,
        loadLocale: async (e) => Pt.get(e),
      }),
      (function (e) {
        if (Me) throw Error("lit-localize can only be configured once");
        (Re = e), (Me = !0);
      })((e, t) => Ve(Qe, e, t)),
      (Xe = Ge = Ct.sourceLocale),
      (Je = new Set(Ct.targetLocales)),
      Je.add(Ct.sourceLocale),
      (Ke = Ct.loadLocale),
      { getLocale: at, setLocale: it });
  var Ct;
  class Rt {
    constructor() {
      (this.icons = [{ src: "" }]),
        (this.screenshots = void 0),
        (this.short_name = "PWA"),
        (this.name = "Progressive web application"),
        (this.description = "Progressive web application");
    }
  }
  const Mt = E`.gallery{position:relative;--scrollbar-background-color:#fff;--scrollbar-thumb-color:rgb(146, 146, 146);--scrollbar-thumb-hover-color:rgb(100, 100, 100);--nav-btn-background-color:#fff;--nav-btn-fill-color:#141414}.gallery .gallery_scroller{scroll-snap-type:x mandatory;overflow-x:auto;overflow-y:hidden;display:flex;align-items:center;padding:10px 13px;padding-bottom:10px;margin:0 10px;-webkit-overflow-scrolling:touch}.gallery .gallery_scroller img{border-radius:6px;max-height:min(45vh,500px);box-shadow:0 3px 10px 0 rgba(0,0,0,.15);scroll-snap-align:center;scroll-snap-stop:always;position:relative}.gallery .gallery_scroller img+img{margin-left:15px}.gallery .gallery_scroller::-webkit-scrollbar{width:4px;height:2px}.gallery .gallery_scroller::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb-color);border-radius:4px}.gallery .gallery_scroller::-webkit-scrollbar-thumb:hover{background:var(--scrollbar-thumb-hover-color)}.gallery .gallery_scroller::-webkit-scrollbar-track{background:var(--scrollbar-background-color);border-radius:4px}.gallery .gallery_scroller .scroller_wrap{display:flex;flex-direction:row;padding-right:13px}.gallery .btn{position:absolute;display:flex;align-items:center;-webkit-user-select:none;user-select:none;top:50%;transform:translateY(-50%);height:30px;width:30px;border-radius:50%;background-color:var(--nav-btn-background-color);box-shadow:rgba(0,0,0,.3) 2px 4px 4px 1px;background-repeat:no-repeat;opacity:.8;z-index:1}.gallery .btn.prev{left:5px}.gallery .btn.prev svg{margin-left:4px}.gallery .btn.next{right:5px}.gallery .btn.next svg{transform:rotate(180deg);margin-left:6px}.gallery .btn:hover{box-shadow:rgba(0,0,0,.5) 2px 4px 4px 1px;cursor:pointer;opacity:1}.gallery .btn svg{width:20px;height:20px}.gallery .btn svg path{fill:var(--nav-btn-fill-color)}.gallery.apple_desktop{--scrollbar-background-color:rgba(0, 0, 0, 0.1);--scrollbar-thumb-color:rgb(100, 100, 100);--scrollbar-thumb-hover-color:rgba(0, 0, 0, 0.85)}.gallery.apple_desktop .gallery_scroller{margin:0;padding-top:15px}.gallery.apple_desktop .btn{height:26px;width:26px;box-shadow:rgba(0,0,0,.3) 0 2px 2px 1px}.gallery.apple_desktop .btn:hover{box-shadow:rgba(0,0,0,.3) 0 2px 2px 1px}.gallery.apple_desktop .btn:active{filter:brightness(95%)}.gallery.apple_desktop .btn:active .svg{filter:brightness(110%)}.gallery.apple_desktop .btn svg{width:12px;height:auto;opacity:1}.gallery.apple_desktop .btn svg{margin-left:7px}.gallery.apple_mobile .btn.prev svg{margin-left:7px}.gallery.apple_mobile .btn svg{width:16px;height:auto}.gallery.apple_desktop .btn,.gallery.apple_mobile .btn{opacity:1}@media(hover:none)and (pointer:coarse){.gallery .btn.next,.gallery .btn.prev{display:none}.gallery_scroller::-webkit-scrollbar{display:none}}@media(prefers-color-scheme:dark){.gallery{--scrollbar-background-color:#424242;--nav-btn-background-color:#555555;--nav-btn-fill-color:#fff}.gallery.apple_desktop{--scrollbar-thumb-color:var(--nav-btn-fill-color);--scrollbar-background-color:var(--nav-btn-background-color);--scrollbar-thumb-hover-color:var(--nav-btn-fill-color)}.gallery.apple_desktop .btn:active{filter:brightness(110%)}.gallery.apple_desktop .btn:active .svg{filter:brightness(90%)}}`,
    Tt = (e, t, a, i) =>
      he`${
        e
          ? he`<div id="paginated_gallery" class="gallery ${t}"><div class="gallery_scroller"><div class="scroller_wrap">${e.map(
              (e) => he`<img draggable="false" src='${e.src}'>`
            )}</div></div><span class="btn prev" @click="${i}">${
              "default" != t
                ? he`<svg id="arrow-left" viewBox="0 0 23.023 18.518"><path fill="currentColor" d="M0 9.253c0 .305.134.586.378.818l8.106 8.093c.244.232.5.342.793.342.598 0 1.075-.44 1.075-1.05 0-.293-.11-.586-.306-.769l-2.734-2.783-4.834-4.407-.256.598 3.93.244h15.442c.635 0 1.075-.451 1.075-1.086s-.44-1.087-1.075-1.087H6.152l-3.93.245.256.61 4.834-4.419 2.734-2.783a1.09 1.09 0 0 0 .306-.77C10.352.44 9.875 0 9.277 0c-.293 0-.549.098-.818.366L.38 8.436c-.247.23-.38.511-.38.816Z"/></svg>`
                : he`<svg id="arrow-left" viewBox="0 0 96 96"><path d="M39.3756,48.0022l30.47-25.39a6.0035,6.0035,0,0,0-7.6878-9.223L26.1563,43.3906a6.0092,6.0092,0,0,0,0,9.2231L62.1578,82.615a6.0035,6.0035,0,0,0,7.6878-9.2231Z" fill="%23999" fill-rule="evenodd"/></svg>`
            }</span><span class="btn next" @click="${a}">${he`<svg height="15" width="15"><use href="./#arrow-left"></use></svg>`}</span></div>`
          : ""
      }`;
  var It = function (e, t, a, i) {
      var o,
        s = arguments.length,
        l =
          s < 3
            ? t
            : null === i
            ? (i = Object.getOwnPropertyDescriptor(t, a))
            : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        l = Reflect.decorate(e, t, a, i);
      else
        for (var n = e.length - 1; n >= 0; n--)
          (o = e[n]) &&
            (l = (s < 3 ? o(l) : s > 3 ? o(t, a, l) : o(t, a)) || l);
      return s > 3 && l && Object.defineProperty(t, a, l), l;
    },
    Lt = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    };
  let Ut = class extends Pe {
    constructor() {
      super(...arguments),
        (this.screenshots = []),
        (this.theme = "default"),
        (this.calcScrollSize = () => {
          const e = this.shadowRoot.querySelector("#paginated_gallery");
          if (!e) return;
          const t = e.querySelector(".gallery_scroller");
          if (!t) return;
          const a = Array.from(t.querySelectorAll("img"));
          if (!a) return;
          const i = a.find((e) => e.offsetWidth + e.offsetLeft >= t.scrollLeft);
          return i ? { scroller: t, item: i } : void 0;
        }),
        (this.scrollToNextPage = () => {
          const e = this.calcScrollSize();
          e &&
            e.item.nextElementSibling &&
            e.scroller.scrollTo({
              top: 0,
              left:
                e.scroller.scrollLeft +
                e.scroller.clientWidth +
                e.item.nextElementSibling.clientWidth / 2,
              behavior: "smooth",
            });
        }),
        (this.scrollToPrevPage = () => {
          const e = this.calcScrollSize();
          e &&
            e.item.previousElementSibling &&
            e.scroller.scrollTo({
              top: 0,
              left:
                e.scroller.scrollLeft -
                e.scroller.clientWidth -
                e.item.previousElementSibling.clientWidth / 2,
              behavior: "smooth",
            });
        }),
        (this._init = () => {});
    }
    static get styles() {
      return Mt;
    }
    firstUpdated() {
      const e = this.calcScrollSize();
      e &&
        setTimeout(() => {
          e.scroller.scrollTo({ top: 0, left: 0 });
        }, 300);
    }
    connectedCallback() {
      super.connectedCallback(), this._init();
    }
    render() {
      return he`${Tt(
        this.screenshots,
        this.theme,
        this.scrollToNextPage,
        this.scrollToPrevPage
      )}`;
    }
  };
  It([nt(), Lt("design:type", Object)], Ut.prototype, "screenshots", void 0),
    It([nt(), Lt("design:type", String)], Ut.prototype, "theme", void 0),
    (Ut = It([ot("pwa-gallery")], Ut));
  const Ot = Ut,
    Ht = (e, t, a, i) =>
      he`<div class="touch-header" id="touch-header"></div><div class="body-header"><div class="icon"><img src="./${a}" alt="icon" class="icon-image"></div><div class="about"><div class="name"><label>${e}</label></div><div class="hostname">${
        location.hostname
      }</div></div><button class="material-button primary install" @click='${i}'>${Re(
        "Install"
      )}</button></div>${t ? he`<div class="description">${t}</div>` : ""}`,
    Bt = (e, t, a) => {
      const i = new CustomEvent(t, { detail: { message: a } });
      e.dispatchEvent(i);
    };
  class Nt {
    static isAppleMobile() {
      return !(
        !(
          ["iPhone", "iPad", "iPod"].includes(navigator.platform) ||
          (navigator.userAgent.match(/Mac/) &&
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2)
        ) || !("serviceWorker" in navigator)
      );
    }
    static isAppleDesktop() {
      const e = navigator.userAgent.toLowerCase();
      if (navigator.maxTouchPoints || !e.match(/macintosh/)) return !1;
      const t = /version\/(\d{2})\./.exec(e);
      if (!(t && t[1] && parseInt(t[1]) >= 17)) return !1;
      const a = !!document
          .createElement("audio")
          .canPlayType('audio/wav; codecs="1"'),
        i = !!new OffscreenCanvas(1, 1).getContext("webgl");
      return a && i;
    }
    static isStandalone() {
      return !!(
        window.matchMedia("(display-mode: standalone)").matches ||
        ("standalone" in navigator && !0 === navigator.standalone)
      );
    }
    static async getInstalledRelatedApps() {
      if ("getInstalledRelatedApps" in navigator)
        try {
          await navigator.getInstalledRelatedApps().then((e) => e);
        } catch (e) {}
      return [];
    }
    static async isRelatedAppsInstalled() {
      return !!(await this.getInstalledRelatedApps()).length;
    }
    static eventInstalledSuccess(e) {
      Bt(
        e,
        "pwa-install-success-event",
        "App install success (Chromium/Android only)"
      );
    }
    static eventInstalledFail(e) {
      Bt(
        e,
        "pwa-install-fail-event",
        "App install failed (Chromium/Android only)"
      );
    }
    static eventUserChoiceResult(e, t) {
      Bt(e, "pwa-user-choice-result-event", t);
    }
    static eventInstallAvailable(e) {
      Bt(e, "pwa-install-available-event", "App install available");
    }
    static eventInstallHowTo(e) {
      Bt(e, "pwa-install-how-to-event", "App install instruction showed");
    }
    static eventGallery(e) {
      Bt(e, "pwa-install-gallery-event", "App install gallery showed");
    }
    static normalizeManifestAssetUrls(e, t) {
      const a = new URL(t, document.location.href);
      [...(e.icons || []), ...(e.screenshots || [])].forEach((e) => {
        e.src = new URL(e.src, a).href;
      });
    }
  }
  var qt = function (e, t, a, i) {
      var o,
        s = arguments.length,
        l =
          s < 3
            ? t
            : null === i
            ? (i = Object.getOwnPropertyDescriptor(t, a))
            : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        l = Reflect.decorate(e, t, a, i);
      else
        for (var n = e.length - 1; n >= 0; n--)
          (o = e[n]) &&
            (l = (s < 3 ? o(l) : s > 3 ? o(t, a, l) : o(t, a)) || l);
      return s > 3 && l && Object.defineProperty(t, a, l), l;
    },
    Wt = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    };
  let Zt = class extends Pe {
    constructor() {
      super(...arguments),
        (this.props = { name: "", description: "", icon: "" }),
        (this.install = { handleEvent: () => {} }),
        (this.hideDialog = () => {}),
        (this.disableClose = !1),
        (this._callInstall = () => {
          this.install.handleEvent();
        }),
        (this._callHide = () => {
          this.hideDialog(), this.setupAppearence();
        }),
        (this.bindedElement = null),
        (this._saveBodyStyle = document.body.style.overscrollBehaviorY),
        (this.dragMobileSheet = (e, t, a) => {
          if (!e || !t || !a) return null;
          let i = 0;
          const o = t.clientHeight + a.clientHeight,
            s = (e) =>
              e.clientY ||
              (e.changedTouches && e.changedTouches.length
                ? e.changedTouches[0].clientY
                : 0),
            l = (e) => {
              window.addEventListener("mouseup", n),
                window.addEventListener("mousemove", r),
                window.addEventListener("touchend", n),
                window.addEventListener("touchmove", r),
                (i = s(e) - t.getBoundingClientRect().top),
                (document.body.style.overscrollBehaviorY = "none");
            },
            n = (t) => {
              if (
                ((document.body.style.overscrollBehaviorY =
                  this._saveBodyStyle),
                !this.disableClose && s(t) >= window.innerHeight - 25)
              )
                d(t, window.innerHeight + 50, !0);
              else if (window.innerHeight - s(t) > e.clientHeight / 2.5) {
                d(t, window.innerHeight - e.clientHeight);
                try {
                  Nt.eventGallery(this.getRootNode().host);
                } catch (t) {}
              } else d(t, window.innerHeight - o - 35);
            },
            r = (t) => {
              const a = s(t);
              (this.disableClose && window.innerHeight - a < 70) ||
                a <= window.innerHeight - e.clientHeight + i ||
                (e.style.setProperty("transition", "none"),
                e.style.setProperty("--translateY", `translateY(${a - i}px)`));
            },
            d = (a, i, d) => {
              window.removeEventListener("mouseup", n),
                window.removeEventListener("mousemove", r),
                window.removeEventListener("touchend", n),
                window.removeEventListener("touchmove", r),
                window.innerWidth >= 768 ||
                  (!i && s(a) >= window.innerHeight - o
                    ? e.style.setProperty(
                        "--translateY",
                        `translateY(calc(100vh - ${o}px))`
                      )
                    : e.style.setProperty(
                        "--translateY",
                        `translateY(${(i || s(a)) + 35}px)`
                      ),
                  e.style.setProperty(
                    "transition",
                    "transform 500ms cubic-bezier(0.4, 0, 0, 1) 0s"
                  ),
                  d &&
                    (t.removeEventListener("mousedown", l),
                    t.removeEventListener("touchstart", l),
                    setTimeout(this._callHide, 250)));
            };
          return (
            t.addEventListener("mousedown", l),
            t.addEventListener("touchstart", l, { passive: !0 }),
            d(new MouseEvent("mouseup"), window.innerHeight - o - 35),
            { touchElement: t, listener: l }
          );
        }),
        (this.setupAppearence = () => {
          this.bindedElement &&
            (this.bindedElement.touchElement.removeEventListener(
              "mousedown",
              this.bindedElement.listener
            ),
            this.bindedElement.touchElement.removeEventListener(
              "touchstart",
              this.bindedElement.listener
            )),
            (this.bindedElement = this.dragMobileSheet(
              this.parentElement?.parentElement,
              this.parentElement?.getElementsByClassName("touch-header")[0],
              this.parentElement?.getElementsByClassName("body-header")[0]
            ));
        }),
        (this._init = () => {
          this.setupAppearence(),
            window.addEventListener("resize", this.setupAppearence);
        });
    }
    firstUpdated() {
      this._init();
    }
    createRenderRoot() {
      return this;
    }
    connectedCallback() {
      super.connectedCallback();
    }
    render() {
      return he`${Ht(
        this.props.name,
        this.props.description,
        this.props.icon,
        this._callInstall
      )}`;
    }
  };
  qt(
    [nt({ type: Object }), Wt("design:type", Object)],
    Zt.prototype,
    "props",
    void 0
  ),
    qt(
      [nt({ type: Object }), Wt("design:type", Object)],
      Zt.prototype,
      "install",
      void 0
    ),
    qt([nt(), Wt("design:type", Object)], Zt.prototype, "hideDialog", void 0),
    qt([nt(), Wt("design:type", Object)], Zt.prototype, "disableClose", void 0),
    (Zt = qt([ot("pwa-bottom-sheet")], Zt));
  const Vt = Zt,
    Yt = E`#pwa-install-element{-webkit-user-select:none;user-select:none}#pwa-install-element .install-dialog{--text-color-normal:#212121;--background-color:#fff;--border-bottom-color:#DBDCDE;--scrollbar-background-color:#fff;font-family:Roboto,"Segoe UI",system-ui;position:fixed;display:inline-block;opacity:0;visibility:hidden;z-index:2147483001}#pwa-install-element .install-dialog.chrome{max-width:380px;width:90%;min-height:90px;margin:0 auto;right:150px;left:auto;background-color:var(--background-color);filter:drop-shadow(0 5px 15px rgba(0, 0, 0, .3));font-size:15px;color:var(--text-color-normal);border-radius:8px;top:-100px;transition:top .5s ease-in-out,opacity .8s ease-in-out,max-height .35s ease-in-out}#pwa-install-element .install-dialog.chrome.available{opacity:1;top:28px;visibility:visible}#pwa-install-element .install-dialog.chrome .dialog-body{display:grid;grid-template-columns:70px 1fr}#pwa-install-element .install-dialog.chrome .dialog-body .icon{display:flex;align-items:flex-start}#pwa-install-element .install-dialog.chrome .dialog-body .icon .icon-image{width:48px;height:48px;margin:0 auto;margin-top:10px;border-radius:6px}#pwa-install-element .install-dialog.chrome .dialog-body .about{display:grid;grid-template-rows:30px auto}#pwa-install-element .install-dialog.chrome .dialog-body .about .hostname,#pwa-install-element .install-dialog.chrome .dialog-body .about .name{padding:0 5px;overflow:hidden}#pwa-install-element .install-dialog.chrome .dialog-body .about .name{font-weight:500;font-size:18px;line-height:24px;margin-top:5px;align-items:flex-start;display:flex}#pwa-install-element .install-dialog.chrome .dialog-body .about .name label{text-overflow:ellipsis;word-break:break-all;white-space:nowrap;overflow:hidden}#pwa-install-element .install-dialog.chrome .dialog-body .about .hostname{font-size:13px;font-weight:400;opacity:.7;line-height:14px;overflow-x:hidden;text-overflow:ellipsis;text-align:left;word-break:break-all;white-space:nowrap}#pwa-install-element .install-dialog.chrome .dialog-body .about+hr{margin-top:10px}#pwa-install-element .install-dialog.chrome .dialog-body .description{font-weight:400;line-height:20px;grid-column:1/3;padding:0 6px;margin:10px 5px 5px;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;max-height:115px;overflow:hidden;overflow-y:auto;text-overflow:ellipsis;text-align:left}#pwa-install-element .install-dialog.chrome .dialog-body .app-description{font-size:13px;margin-bottom:10px}#pwa-install-element .install-dialog.chrome .dialog-body .app-description::-webkit-scrollbar{width:4px;height:4px}#pwa-install-element .install-dialog.chrome .dialog-body .app-description::-webkit-scrollbar-thumb{background:#929292;border-radius:4px}#pwa-install-element .install-dialog.chrome .dialog-body .app-description::-webkit-scrollbar-thumb:hover{background:#646464}#pwa-install-element .install-dialog.chrome .dialog-body .app-description::-webkit-scrollbar-track{background:var(--scrollbar-background-color);border-radius:4px}#pwa-install-element .install-dialog.chrome .dialog-body .install-description{font-size:14px}#pwa-install-element .install-dialog.chrome .dialog-body hr{height:1px;width:100%;grid-column:1/3;background-color:var(--border-bottom-color);border:none;margin:0}#pwa-install-element .install-dialog.chrome .dialog-body .action-buttons{display:grid;grid-template-columns:50% auto;grid-column-start:1;grid-column-end:3;gap:10px;padding:10px 10px}#pwa-install-element .install-dialog.chrome .dialog-body .action-buttons .primary{grid-column-start:2}#pwa-install-element .install-dialog.chrome .dialog-body pwa-gallery{grid-column:1/3;max-height:0;opacity:0;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;overflow:hidden}#pwa-install-element .install-dialog.chrome.gallery pwa-gallery{transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out;max-height:70vh;opacity:1}#pwa-install-element .install-dialog.mobile{--touch-header-color:#DBDCE0;top:0;max-width:414px;width:100%;bottom:auto;left:0;right:0;transition:none;transform:translateY(100vh);border-radius:0;border-top-left-radius:15px;border-top-right-radius:15px;padding-bottom:35px}#pwa-install-element .install-dialog.mobile .dialog-body{grid-template-columns:1fr}#pwa-install-element .install-dialog.mobile .dialog-body .touch-header{height:30px;width:100%;padding-top:10px;box-sizing:border-box;cursor:grab}#pwa-install-element .install-dialog.mobile .dialog-body .touch-header:active{cursor:grabbing}#pwa-install-element .install-dialog.mobile .dialog-body .touch-header::before{content:"";width:40px;height:5px;border-radius:3px;background:var(--touch-header-color);margin:0 auto;display:block}#pwa-install-element .install-dialog.mobile .dialog-body .body-header{display:grid;grid-template-columns:max-content 1fr max-content;grid-gap:15px;padding:18px 20px;padding-top:0;border-bottom:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.mobile .dialog-body .body-header .install{text-transform:capitalize;height:40px;padding:0 23px}#pwa-install-element .install-dialog.mobile .dialog-body .body-header .about{grid-template-rows:auto auto;grid-gap:6px}#pwa-install-element .install-dialog.mobile .dialog-body .body-header .about .name{padding:0;line-height:20px;font-size:16px}#pwa-install-element .install-dialog.mobile .dialog-body .body-header .about .hostname{font-size:14px;font-weight:400;opacity:.7;line-height:14px;overflow-x:hidden;text-overflow:ellipsis;word-break:break-all;white-space:nowrap;padding:0}#pwa-install-element .install-dialog.mobile .dialog-body .body-header .icon .icon-image{margin:0;width:45px;height:45px}#pwa-install-element .install-dialog.mobile .dialog-body .description{padding:15px 20px 0;margin:0;margin-bottom:15px;-webkit-line-clamp:6;max-height:150px}#pwa-install-element .install-dialog.mobile .dialog-body pwa-gallery{max-height:100%;padding-bottom:15px;opacity:1}#pwa-install-element .install-dialog.mobile .material-button{border-radius:20px}#pwa-install-element .install-dialog.mobile.available{--translateY:translateY(calc(100vh - 85px));opacity:1;top:0;visibility:visible;transform:var(--translateY)}#pwa-install-element .material-button{--text-color-primary:#fff;--text-color-secondary:#374fc6;--background-color-primary:#374fc6;--background-color-ripple:#fff;position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:6px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);font-family:Roboto,"Segoe UI",BlinkMacSystemFont,system-ui,-apple-system;font-size:14px;font-weight:500;line-height:37px;overflow:hidden;outline:0;cursor:pointer;transition:box-shadow .2s}#pwa-install-element .material-button.primary{color:var(--text-color-primary);background-color:var(--background-color-primary)}#pwa-install-element .material-button.secondary{background-color:rgba(0,0,0,0);color:var(--text-color-secondary);box-shadow:none}#pwa-install-element .material-button.secondary::after,#pwa-install-element .material-button.secondary::before{background-color:var(--background-color-primary)}#pwa-install-element .material-button.secondary:active,#pwa-install-element .material-button.secondary:hover{box-shadow:none}#pwa-install-element .material-button.secondary.close{height:26px;min-width:26px;line-height:0;margin-right:0;margin-left:auto;padding:0;border-radius:50%}#pwa-install-element .material-button.secondary.close svg{width:16px;fill:var(--text-color-secondary)}#pwa-install-element .material-button.secondary.close::after{width:25px;height:25px;border-radius:50%}#pwa-install-element .material-button.secondary.close::before{border-radius:50%}#pwa-install-element .material-button::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:var(--background-color-ripple);opacity:0;transition:opacity .2s}#pwa-install-element .material-button::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:var(--background-color-ripple);opacity:0;transform:translate(-50%,-50%) scale(1);transition:opacity 1s,transform .5s}#pwa-install-element .material-button:hover{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}#pwa-install-element .material-button:hover::before{opacity:.08}#pwa-install-element .material-button:hover:focus::before{opacity:.3}#pwa-install-element .material-button:active{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}#pwa-install-element .material-button:active::after{opacity:.32;transform:translate(-50%,-50%) scale(0);transition:transform 0s}@media(prefers-color-scheme:dark){#pwa-install-element .install-dialog{--text-color-normal:#fff;--background-color:#1e1e1e;--border-bottom-color:#404140;--scrollbar-background-color:#424242}#pwa-install-element .install-dialog.mobile{--touch-header-color:#3f403f}#pwa-install-element .install-dialog .material-button{--text-color-primary:#1B222C;--text-color-secondary:#a7c7fa;--background-color-primary:#a7c7fa}}@media(max-width:767px)and (min-height:495px){#pwa-install-element .install-dialog.chrome.mobile{display:inline-block}#pwa-install-element .install-dialog.chrome{display:none}}@media(min-width:768px),(max-height:495px){#pwa-install-element .install-dialog.chrome.mobile{display:none}#pwa-install-element .install-dialog.chrome{display:inline-block}}@media(max-height:420px){#pwa-install-element .install-dialog.chrome .dialog-body .description{-webkit-line-clamp:3;max-height:70px}}@media(hover:none)and (pointer:coarse){#pwa-install-element .install-dialog.chrome .dialog-body .description::-webkit-scrollbar{display:none}}`,
    Ft = E`#pwa-install-element .install-dialog.apple{--text-color-normal:#333;--text-color-description:#333;--background-color:rgba(255, 255, 255, 0.8);--text-color-button:#fff;--background-color-button:#fff;--background-color-button-active:#DBDAE0;--border-bottom-color:rgba(0, 0, 0, 0.1);--icon-how-to-color:#527AFB;font-family:system-ui,-apple-system,HelveticaNeue,BlinkMacSystemFont,Roboto,"Segoe UI";max-width:380px;width:auto;margin:0 auto;right:0;left:0;font-size:15px;color:var(--text-color-normal);bottom:0;transition:transform .4s cubic-bezier(.33,1,.66,1),opacity .5s cubic-bezier(1,0,1,-2),border .35s ease-in-out;overflow:hidden;pointer-events:none;opacity:0;visibility:visible;transform:translateY(100%);will-change:opacity,transform}#pwa-install-element .install-dialog.apple.dialog-body{display:grid;grid-template-columns:95px 1fr;grid-template-rows:1fr auto;grid-template-areas:"icon description" "welcome welcome" "how-to how-to" "gallery gallery" "button button";border-radius:10px;border-bottom:1px solid transparent;background-color:var(--background-color);filter:drop-shadow(0 5px 15px rgba(0, 0, 0, .5));backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}#pwa-install-element .install-dialog.apple.dialog-body .icon{display:flex;align-items:center;grid-area:icon;border-bottom:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple.dialog-body .icon .icon-image{width:64px;height:64px;margin:0 auto;border-radius:6px}#pwa-install-element .install-dialog.apple.dialog-body .close{height:26px;min-width:26px;line-height:0;margin-right:7px;margin-top:7px;margin-left:auto;padding:0;border-radius:50%;opacity:.5;outline:0;color:var(--text-color-normal);border:none;background-color:rgba(0,0,0,0);cursor:pointer;transition:opacity .2s ease-in-out,background-color .2s ease-in-out;grid-area:description}#pwa-install-element .install-dialog.apple.dialog-body .close svg{fill:var(--text-color-normal);width:18px}#pwa-install-element .install-dialog.apple.dialog-body .close:active,#pwa-install-element .install-dialog.apple.dialog-body .close:hover{opacity:1;background-color:var(--background-color-button)}#pwa-install-element .install-dialog.apple.dialog-body .about{display:grid;grid-template-rows:35px 60px;border-bottom:1px solid var(--border-bottom-color);grid-area:description}#pwa-install-element .install-dialog.apple.dialog-body .about .description,#pwa-install-element .install-dialog.apple.dialog-body .about .name{padding-right:15px;overflow:hidden}#pwa-install-element .install-dialog.apple.dialog-body .about .name{font-weight:600;padding-top:10px;padding-right:10px;line-height:22px;align-items:flex-start;display:flex}#pwa-install-element .install-dialog.apple.dialog-body .about .description{font-size:12px;line-height:15px;margin-bottom:15px;overflow-y:auto;color:var(--text-color-description)}#pwa-install-element .install-dialog.apple.dialog-body .welcome-to-install{font-size:15px;grid-area:welcome;text-align:left;font-weight:400;padding:15px;width:auto;border-bottom:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple .action-buttons{grid-area:button;grid-column-start:1;grid-column-end:3;padding:15px}#pwa-install-element .install-dialog.apple .dialog-button{display:grid;height:50px;width:100%;line-height:50px;border-radius:8px;color:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .dialog-button.button{border:none;outline:0;font-family:system-ui,-apple-system,HelveticaNeue,BlinkMacSystemFont;cursor:pointer;-webkit-user-select:none;user-select:none;font-weight:400;font-size:17px;padding:0;margin:0;background-color:var(--background-color-button)}#pwa-install-element .install-dialog.apple .dialog-button.button.install{padding:0 15px;text-align:left}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text{opacity:0;display:flex;align-items:center;justify-content:space-between;transition:opacity .4s ease-in-out .1s;overflow:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text>span{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text>svg{flex-shrink:0;width:20px}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text.show{opacity:1;visibility:visible;width:auto;height:auto}#pwa-install-element .install-dialog.apple .dialog-button.button.install .button-text.hide{opacity:0;position:absolute;width:0;height:0;visibility:hidden}#pwa-install-element .install-dialog.apple .dialog-button.button.gallery{display:flex;align-items:center;min-width:50px;width:auto;margin-right:15px}#pwa-install-element .install-dialog.apple .dialog-button.button.gallery #pwa-gallery{margin:0 auto;width:23px;fill:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .dialog-button.button:active{background-color:var(--background-color-button-active)}#pwa-install-element .install-dialog.apple .how-to-body{opacity:0;max-height:0;overflow:hidden;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;grid-area:how-to}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description{display:grid;-webkit-user-select:none;user-select:none;grid-auto-columns:1fr;grid-template-rows:1fr 1fr 1fr;gap:10px;padding:15px;padding-bottom:0}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step{display:inline-flex;flex-direction:row;gap:15px;align-items:center;font-size:14px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap{position:relative;display:inline-flex;flex-shrink:0;color:var(--icon-how-to-color);width:50px;height:50px;align-items:center;border-radius:6px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-add,#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-safari,#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{margin:0 auto}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{margin-bottom:4px;transform:scale(.9)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-add{transform:scale(.8);fill:var(--text-color-normal)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap #pwa-safari{transform:scale(.92)}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .svg-wrap .step-count{position:absolute;line-height:12px;top:3px;left:4px}#pwa-install-element .install-dialog.apple .how-to-body .how-to-description .description-step .step-text{font-weight:600;text-align:left}#pwa-install-element .install-dialog.apple pwa-gallery{grid-column:1/3;max-height:0;opacity:0;transition:opacity ease-in-out .5s,max-height .5s ease-in-out;overflow:hidden}#pwa-install-element .install-dialog.apple pwa-gallery+.action-buttons{display:flex}#pwa-install-element .install-dialog.apple.available{opacity:1;pointer-events:unset;transform:translateY(0);transition:transform .5s cubic-bezier(.33,1,.66,1),border .35s ease-in-out}#pwa-install-element .install-dialog.apple.gallery pwa-gallery{transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out;max-height:70vh;opacity:1}#pwa-install-element .install-dialog.apple.how-to .dialog-body{border-bottom:1px solid #e0e0e0}#pwa-install-element .install-dialog.apple.how-to .how-to-body{opacity:1;max-height:400px;overflow-y:auto;transition:opacity .3s ease-in-out .2s,max-height .5s ease-in-out}#pwa-install-element .install-dialog.apple.desktop{--text-color-normal:rgba(0, 0, 0, 0.85);--text-color-description:rgba(0, 0, 0, 0.85);--icon-how-to-color:rgba(0, 0, 0, 0.50);--background-color:rgb(246 246 246 / 85%);--background-color-button:#c6c1c6;--background-color-button-active:linear-gradient(0deg, rgba(64,121,250,1) 0%, rgba(84,144,251,1) 100%);--border-bottom-color:rgb(185 185 185);grid-template-columns:1fr;grid-template-rows:1fr auto;grid-template-areas:"icon" "description" "welcome" "how-to" "gallery" "button";gap:0;column-gap:0;padding:16px;max-width:260px;background:var(--background-color);border:1px solid var(--border-bottom-color)}#pwa-install-element .install-dialog.apple.desktop .icon{height:64px;padding-bottom:16px}#pwa-install-element .install-dialog.apple.desktop .icon .icon-image{border-radius:10px;width:52px;height:52px;filter:drop-shadow(0 1px 1px rgba(0, 0, 0, .15))}#pwa-install-element .install-dialog.apple.desktop .close{grid-area:icon;background:var(--background-color-button);opacity:1;height:20px;min-width:20px;margin-right:-5px;margin-top:-5px}#pwa-install-element .install-dialog.apple.desktop .close svg{width:14px}#pwa-install-element .install-dialog.apple.desktop .about{display:flex;flex-direction:column;align-items:center}#pwa-install-element .install-dialog.apple.desktop .about .name{font-size:13px;line-height:16px;font-weight:700;padding:0}#pwa-install-element .install-dialog.apple.desktop .about .description{padding:16px 0;margin:0;padding-top:10px;border-bottom:1px solid var(--border-bottom-color);min-width:100%}#pwa-install-element .install-dialog.apple.desktop .about .description,#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{text-align:center;font-size:11px;line-height:14px}#pwa-install-element .install-dialog.apple.desktop .about,#pwa-install-element .install-dialog.apple.desktop .icon,#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{border:none}#pwa-install-element .install-dialog.apple.desktop .welcome-to-install{padding:0;padding-top:16px}#pwa-install-element .install-dialog.apple.desktop .action-buttons{padding:0;padding-top:16px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button{font-size:13px;font-weight:400;padding:6px 8px;border-radius:6px;height:auto;line-height:18px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.install{color:#fff;background:var(--background-color-button-active);transition:background .3s ease-in-out .1s,color .3s ease-in-out}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.install svg{transform:none;width:18px}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.gallery{width:30px;min-width:30px;margin-right:10px;background:var(--background-color-button)}#pwa-install-element .install-dialog.apple.desktop .action-buttons .dialog-button.button.gallery #pwa-gallery{width:14px;transition:transform .4s ease-in-out}#pwa-install-element .install-dialog.apple.desktop .close:active,#pwa-install-element .install-dialog.apple.desktop .dialog-button.button:active{filter:brightness(105%)}#pwa-install-element .install-dialog.apple.desktop .close:active .button-text,#pwa-install-element .install-dialog.apple.desktop .dialog-button.button:active .button-text{filter:brightness(90%)}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description{padding:0;padding-top:16px;grid-template-rows:1fr 1fr}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step{font-size:12px;gap:16px}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap{width:32px;height:32px;color:var(--icon-how-to-color)}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap #pwa-share{width:16px;margin-bottom:2px;transform:none}#pwa-install-element .install-dialog.apple.desktop .how-to-body .how-to-description .description-step .svg-wrap #pwa-add{width:18px;transform:none}#pwa-install-element .install-dialog.apple.desktop.gallery #pwa-gallery{transform:rotate(180deg)}#pwa-install-element .install-dialog.apple.desktop.how-to .action-buttons .dialog-button.button.install{color:var(--text-color-normal);background:var(--background-color-button)}@media(min-width:667px){#pwa-install-element .install-dialog.apple{top:0;bottom:unset;transform:translateY(calc(-100% - 40px));right:28px;left:auto}#pwa-install-element .install-dialog.apple.available{top:28px;bottom:auto;max-height:calc(95vh - 28px)}}@media(min-width:667px)and (max-width:1366px){#pwa-install-element .install-dialog.apple{right:max(28px,env(safe-area-inset-right,28px));left:auto}}@media(max-width:666px){#pwa-install-element .install-dialog.apple .description-step .step-text{font-size:13px}#pwa-install-element .install-dialog.apple.available{bottom:20px;max-height:calc(85vh - 20px)}#pwa-install-element .install-dialog.apple.dialog-body{filter:drop-shadow(rgba(0, 0, 0, .5) 0 0 15px)}}@media(max-width:428px){#pwa-install-element .install-dialog.apple.dialog-body{max-width:100vw;filter:drop-shadow(rgba(0, 0, 0, .5) 0 -5px 10px);border-bottom-left-radius:0;border-bottom-right-radius:0}#pwa-install-element .install-dialog.apple.dialog-body .action-buttons{padding-bottom:max(15px,env(safe-area-inset-bottom))}#pwa-install-element .install-dialog.apple.dialog-body.available{bottom:0;max-height:85vh}}@media(max-height:548px){#pwa-install-element .install-dialog.apple.dialog-body.available{overflow-y:auto;max-height:calc(90vh - 28px - env(safe-area-inset-bottom,0px))}}@media(max-height:600px){#pwa-install-element .install-dialog.apple pwa-gallery{overflow-y:auto}}@media(prefers-color-scheme:dark){#pwa-install-element .install-dialog.apple.dialog-body{--text-color-normal:#fff;--text-color-description:#9E9AA1;--background-color:rgb(25 25 25 / 90%);--background-color-button:#353535;--background-color-button-active:#454545;--border-bottom-color:#353535}#pwa-install-element .install-dialog.apple.dialog-body .close:active,#pwa-install-element .install-dialog.apple.dialog-body .dialog-button.button:active{filter:brightness(105%)}#pwa-install-element .install-dialog.apple.dialog-body .close:active .button-text,#pwa-install-element .install-dialog.apple.dialog-body .dialog-button.button:active .button-text{filter:brightness(90%)}#pwa-install-element .install-dialog.apple.dialog-body.desktop{--text-color-description:var(--text-color-normal);--icon-how-to-color:#bcb8b6;--background-color:rgb(45 45 45 / 90%);--border-bottom-color:#5b5b5b;--background-color-button:#6d6765;--background-color-button-active:linear-gradient(0deg, rgba(59,108,200,1) 0%, rgba(66,123,250,1) 100%);outline:1px solid #1c1c1c;color-scheme:dark}}`,
    Gt = 1;
  class Jt {
    constructor(e) {}
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(e, t, a) {
      (this.t = e), (this._$AM = t), (this.i = a);
    }
    _$AS(e, t) {
      return this.update(e, t);
    }
    update(e, t) {
      return this.render(...t);
    }
  }
  const Kt = (
      (e) =>
      (...t) => ({ _$litDirective$: e, values: t })
    )(
      class extends Jt {
        constructor(e) {
          if (
            (super(e),
            e.type !== Gt || "class" !== e.name || e.strings?.length > 2)
          )
            throw Error(
              "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
            );
        }
        render(e) {
          return (
            " " +
            Object.keys(e)
              .filter((t) => e[t])
              .join(" ") +
            " "
          );
        }
        update(e, [t]) {
          if (void 0 === this.st) {
            (this.st = new Set()),
              void 0 !== e.strings &&
                (this.nt = new Set(
                  e.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((e) => "" !== e)
                ));
            for (const e in t) t[e] && !this.nt?.has(e) && this.st.add(e);
            return this.render(t);
          }
          const a = e.element.classList;
          for (const e of this.st) e in t || (a.remove(e), this.st.delete(e));
          for (const e in t) {
            const i = !!t[e];
            i === this.st.has(e) ||
              this.nt?.has(e) ||
              (i
                ? (a.add(e), this.st.add(e))
                : (a.remove(e), this.st.delete(e)));
          }
          return be;
        }
      }
    ),
    Qt = (e, t, a, i, o, s, l, n, r, d, c, p, h) => {
      const b = () => ({ available: r, gallery: h }),
        g = !o && n.screenshots && n.screenshots.length;
      return he`<div id="pwa-install-element"><div class="install-dialog chrome ${Kt(
        b()
      )}"><div class="dialog-body"><div class="icon"><img src="./${l}" alt="icon" class="icon-image" draggable="false"></div><div class="about"><div class="name"><label>${e}</label>${
        s
          ? ""
          : he`<button class="material-button secondary close" @click='${d}'><svg viewBox="0 0 24 24"><path d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3a1.08 1.08 0 0 0 .7.3 1.08 1.08 0 0 0 .7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"/></svg></button>`
      }</div><div class="hostname">${location.hostname}</div></div>${
        t ? he`<div class="description app-description">${t}</div>` : ""
      } ${
        i
          ? ""
          : he`<hr><div class="description install-description">${
              a ||
              `${Re("This site has app functionality.")} ${Re(
                "Install it on your device for extensive experience and easy access."
              )}`
            }</div>`
      } ${
        g ? he`<pwa-gallery .screenshots=${n.screenshots}></pwa-gallery>` : ""
      }<div class="action-buttons">${
        g
          ? he`<button class="material-button secondary" @click='${p}'>${Re(
              h ? "Less" : "More"
            )}</button>`
          : ""
      }<button class="material-button primary install" @click='${c}'>${Re(
        "Install"
      )}</button></div></div></div><div class="install-dialog chrome mobile ${Kt(
        b()
      )}"><div class="dialog-body"><pwa-bottom-sheet .props=${{
        name: e,
        icon: l,
        description: t,
      }} .disableClose=${s} .install=${c} .hideDialog=${d}></pwa-bottom-sheet>${
        g ? he`<pwa-gallery .screenshots=${n.screenshots}></pwa-gallery>` : ""
      }</div></div></div>`;
    },
    Xt = (e, t, a, i, o, s, l, n, r, d, c, p, h, b, g) => {
      const u = !o && n.screenshots && n.screenshots.length;
      return he`<aside id="pwa-install-element"><article class="install-dialog apple ${Kt(
        { available: r, "how-to": h, gallery: g, desktop: p }
      )} dialog-body"><div class="icon"><img src="./${l}" alt="icon" class="icon-image" draggable="false"></div>${
        s
          ? ""
          : he`<button type="button" title="close" class="close" @click='${d}'><svg viewBox="0 0 24 24"><path d="M5.3 18.7c.2.2.4.3.7.3s.5-.1.7-.3l5.3-5.3 5.3 5.3a1.08 1.08 0 0 0 .7.3 1.08 1.08 0 0 0 .7-.3c.4-.4.4-1 0-1.4L13.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6 6.7 5.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l5.3 5.3-5.3 5.3c-.4.4-.4 1 0 1.4z"/></svg></button>`
      }<div class="about"><div class="name">${e}</div><div class="description">${
        t || location.hostname
      }</div></div>${
        i
          ? ""
          : he`<div class="welcome-to-install">${
              a ||
              `${Re("This site has app functionality.")} ${Re(
                p
                  ? "Add it to your Dock for extensive experience and easy access."
                  : "Add it to your Home Screen for extensive experience and easy access."
              )}`
            }</div>`
      }<div class="how-to-body"><div class="how-to-description">${
        p
          ? ""
          : he`<div class="description-step"><div class="svg-wrap"><svg id="pwa-safari" viewBox="0 0 20.283 19.932" width="24" height="24"><g fill="currentColor"><path d="M9.96 19.922c5.45 0 9.962-4.522 9.962-9.961C19.922 4.51 15.4 0 9.952 0 4.511 0 0 4.512 0 9.96c0 5.44 4.521 9.962 9.96 9.962Zm0-1.66A8.26 8.26 0 0 1 1.67 9.96c0-4.61 3.672-8.3 8.281-8.3 4.61 0 8.31 3.69 8.31 8.3 0 4.61-3.69 8.3-8.3 8.3Z"/><path d="m5.87 14.883 5.605-2.735a1.47 1.47 0 0 0 .683-.673l2.725-5.596c.312-.664-.166-1.182-.85-.84L8.447 7.764c-.302.136-.508.341-.674.673L5.03 14.043c-.312.645.196 1.152.84.84Zm4.09-3.72A1.19 1.19 0 0 1 8.77 9.97c0-.664.527-1.201 1.19-1.201a1.2 1.2 0 0 1 1.202 1.2c0 .655-.537 1.192-1.201 1.192Z"/></g></svg></div><div class="step-text">${Re(
              "1) Open in Safari browser"
            )}</div></div>`
      }<div class="description-step"><div class="svg-wrap"><svg id="pwa-share" width="25" height="32" viewBox="0 0 17.695 26.475"><g fill="currentColor"><path d="M17.334 10.762v9.746c0 2.012-1.025 3.027-3.066 3.027H3.066C1.026 23.535 0 22.52 0 20.508v-9.746C0 8.75 1.025 7.734 3.066 7.734h2.94v1.573h-2.92c-.977 0-1.514.527-1.514 1.543v9.57c0 1.015.537 1.543 1.514 1.543h11.152c.967 0 1.524-.527 1.524-1.543v-9.57c0-1.016-.557-1.543-1.524-1.543h-2.91V7.734h2.94c2.04 0 3.066 1.016 3.066 3.028Z"/><path d="M8.662 15.889c.42 0 .781-.352.781-.762V5.097l-.058-1.464.654.693 1.484 1.582a.698.698 0 0 0 .528.235c.4 0 .713-.293.713-.694 0-.205-.088-.361-.235-.508l-3.3-3.183c-.196-.196-.362-.264-.567-.264-.195 0-.361.069-.566.264L4.795 4.94a.681.681 0 0 0-.225.508c0 .4.293.694.703.694.186 0 .4-.079.538-.235l1.474-1.582.664-.693-.058 1.465v10.029c0 .41.351.762.771.762Z"/></g></svg></div><div class="step-text">${Re(
        "2) Press Share in Navigation bar"
      ).replace(
        p ? "2)" : "0)",
        "1)"
      )}</div></div><div class="description-step"><div class="svg-wrap">${
        p
          ? he`<svg id="pwa-add" viewBox="0 0 23.389 17.979" width="25" height="25"><g fill="currentColor"><path d="M1.045 3.291v1.377h20.937V3.291Zm2.021 14.688h16.895c2.05 0 3.066-1.006 3.066-3.018V3.027C23.027 1.016 22.012 0 19.961 0H3.066C1.026 0 0 1.016 0 3.027v11.934c0 2.012 1.025 3.018 3.066 3.018Zm.02-1.573c-.977 0-1.514-.517-1.514-1.533V3.115c0-1.015.537-1.543 1.514-1.543H19.94c.967 0 1.514.528 1.514 1.543v11.758c0 1.016-.547 1.533-1.514 1.533Z"/><path d="M4.2 14.014c0 .508.35.85.868.85h12.92c.518 0 .87-.343.87-.85v-1.465c0-.508-.352-.85-.87-.85H5.068c-.517 0-.869.342-.869.85Z"/></g></svg>`
          : he`<svg id="pwa-add" width="25" height="25"><g><path d="m23.40492,1.60784c-1.32504,-1.32504 -3.19052,-1.56912 -5.59644,-1.56912l-10.65243,0c-2.33622,0 -4.2017,0.24408 -5.5267,1.56912c-1.32504,1.34243 -1.56911,3.17306 -1.56911,5.50924l0,10.5827c0,2.40596 0.22665,4.254 1.55165,5.57902c1.34246,1.32501 3.19052,1.5691 5.59647,1.5691l10.60013,0c2.40592,0 4.2714,-0.24408 5.59644,-1.5691c1.325,-1.34245 1.55166,-3.17306 1.55166,-5.57902l0,-10.51293c0,-2.40596 -0.22666,-4.25401 -1.55166,-5.57901zm-0.38355,5.21289l0,11.24518c0,1.51681 -0.20924,2.94643 -1.02865,3.78327c-0.83683,0.83685 -2.30134,1.0635 -3.81815,1.0635l-11.33234,0c-1.51681,0 -2.96386,-0.22665 -3.80073,-1.0635c-0.83683,-0.83684 -1.04607,-2.26646 -1.04607,-3.78327l0,-11.19288c0,-1.5517 0.20924,-3.01617 1.02865,-3.85304c0.83687,-0.83683 2.31876,-1.04607 3.87042,-1.04607l11.28007,0c1.51681,0 2.98132,0.22666 3.81815,1.06353c0.81941,0.81941 1.02865,2.26645 1.02865,3.78327zm-10.53039,12.08205c0.64506,0 1.02861,-0.43586 1.02861,-1.13326l0,-4.34117l4.53294,0c0.66252,0 1.13326,-0.36613 1.13326,-0.99376c0,-0.64506 -0.43586,-1.02861 -1.13326,-1.02861l-4.53294,0l0,-4.53294c0,-0.6974 -0.38355,-1.13326 -1.02861,-1.13326c-0.62763,0 -0.99376,0.45332 -0.99376,1.13326l0,4.53294l-4.51552,0c-0.69737,0 -1.15069,0.38355 -1.15069,1.02861c0,0.62763 0.48817,0.99376 1.15069,0.99376l4.51552,0l0,4.34117c0,0.66252 0.36613,1.13326 0.99376,1.13326z"/></g></svg>`
      }</div><div class="step-text">${Re(
        p ? "2) Press Add to Dock" : "3) Press Add to Home Screen"
      )}</div></div></div></div>${
        u
          ? he`<pwa-gallery .screenshots=${n.screenshots} .theme="${
              p ? "apple_desktop" : "apple_mobile"
            }"></pwa-gallery>`
          : ""
      }<div class="action-buttons">${
        u
          ? he`<button class="dialog-button button gallery" @click=${b}>${
              p
                ? he`<svg id="pwa-gallery" viewBox="0 0 10 6"><path d="m1.102 2.21 3.169 3.24c.22.222.462.333.729.333a.94.94 0 0 0 .378-.083 1.19 1.19 0 0 0 .347-.25L8.89 2.21a.8.8 0 0 0 .246-.593.838.838 0 0 0-.118-.44.884.884 0 0 0-.312-.311.84.84 0 0 0-1.063.167L4.854 3.92h.299L2.359 1.033a.868.868 0 0 0-.642-.286.822.822 0 0 0-.43.119.935.935 0 0 0-.312.312.863.863 0 0 0-.115.44c0 .116.02.223.057.32a.898.898 0 0 0 .185.272Z"/></svg>`
                : he`<svg id="pwa-gallery" width="26" height="26" viewBox="0 0 23.538 18.022"><path d="M2.79 18.022h17.958c1.834 0 2.79-.969 2.79-2.778V2.791C23.538.969 22.582 0 20.748 0H2.791C.956 0 0 .956 0 2.79v12.454c0 1.835.956 2.778 2.79 2.778zM.879 2.83C.878 1.55 1.55.88 2.816.88h17.906c1.228 0 1.938.671 1.938 1.95v12.067L16.756 9.47c-.517-.414-.995-.685-1.615-.685-.607 0-1.085.22-1.576.672L8.927 13.59l-1.938-1.796c-.426-.387-.853-.607-1.382-.607-.504 0-.879.207-1.305.594L.878 14.986zm6.46 6.356a2.39 2.39 0 002.377-2.39c0-1.304-1.072-2.39-2.377-2.39a2.401 2.401 0 00-2.39 2.39 2.393 2.393 0 002.39 2.39z"/></svg>`
            }</button>`
          : ""
      }<button class="dialog-button button install" @click=${c}><span class="button-text ${
        h ? "show" : "hide"
      }">${Re("Hide Instruction")}</span><span class="button-text ${
        h ? "hide" : "show"
      }"><span>${Re(
        p ? "Add to Dock" : "Add to Home Screen"
      )}</span><svg viewBox="0 0 25 25"><use href="./#pwa-add"></use></svg></span></button></div></article></aside>`;
    };
  var ea = function (e, t, a, i) {
      var o,
        s = arguments.length,
        l =
          s < 3
            ? t
            : null === i
            ? (i = Object.getOwnPropertyDescriptor(t, a))
            : i;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        l = Reflect.decorate(e, t, a, i);
      else
        for (var n = e.length - 1; n >= 0; n--)
          (o = e[n]) &&
            (l = (s < 3 ? o(l) : s > 3 ? o(t, a, l) : o(t, a)) || l);
      return s > 3 && l && Object.defineProperty(t, a, l), l;
    },
    ta = function (e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    };
  let aa = class extends Pe {
    constructor() {
      super(...arguments),
        (this.manifestUrl = "/manifest.json"),
        (this.icon = ""),
        (this.name = ""),
        (this.description = ""),
        (this.installDescription = ""),
        (this.disableDescription = !1),
        (this.disableScreenshots = !1),
        (this.disableScreenshotsApple = !1),
        (this.disableScreenshotsChrome = !1),
        (this.manualApple = !1),
        (this.manualChrome = !1),
        (this.disableChrome = !1),
        (this.disableClose = !1),
        (this.externalPromptEvent = null),
        (this.platforms = []),
        (this.userChoiceResult = ""),
        (this.isDialogHidden = JSON.parse(
          window.sessionStorage.getItem("pwa-hide-install") || "false"
        )),
        (this.isInstallAvailable = !1),
        (this.isAppleMobilePlatform = !1),
        (this.isAppleDesktopPlatform = !1),
        (this.isUnderStandaloneMode = !1),
        (this.isRelatedAppsInstalled = !1),
        (this._manifest = new Rt()),
        (this._howToRequested = !1),
        (this._galleryRequested = !1),
        (this._install = {
          handleEvent: () => {
            window.defferedPromptEvent &&
              (this.hideDialog(),
              window.defferedPromptEvent.prompt(),
              window.defferedPromptEvent.userChoice
                .then((e) => {
                  (this.userChoiceResult = e.outcome),
                    Nt.eventUserChoiceResult(this, this.userChoiceResult);
                })
                .catch((e) => {
                  Nt.eventInstalledFail(this);
                }),
              (window.defferedPromptEvent = null));
          },
          passive: !0,
        }),
        (this.install = () => {
          this.isAppleMobilePlatform || this.isAppleDesktopPlatform
            ? ((this._howToRequested = !0), this.requestUpdate())
            : this._install.handleEvent();
        }),
        (this._hideDialog = {
          handleEvent: () => {
            (this.isDialogHidden = !0),
              window.sessionStorage.setItem("pwa-hide-install", "true"),
              this.requestUpdate();
          },
          passive: !0,
        }),
        (this._hideDialogUser = () => {
          Nt.eventUserChoiceResult(this, "dismissed"),
            (this.userChoiceResult = "dismissed"),
            this.hideDialog();
        }),
        (this.hideDialog = () => {
          this._hideDialog.handleEvent();
        }),
        (this.showDialog = (e = !1) => {
          (this.isDialogHidden = !1),
            e && (this.isInstallAvailable = !0),
            window.sessionStorage.setItem("pwa-hide-install", "false"),
            this.requestUpdate();
        }),
        (this.getInstalledRelatedApps = async () =>
          await Nt.getInstalledRelatedApps()),
        (this._howToForApple = {
          handleEvent: () => {
            (this._howToRequested = !this._howToRequested),
              this._howToRequested &&
                this._galleryRequested &&
                (this._galleryRequested = !1),
              this.requestUpdate(),
              this._howToRequested && Nt.eventInstallHowTo(this);
          },
          passive: !0,
        }),
        (this._toggleGallery = {
          handleEvent: () => {
            (this._galleryRequested = !this._galleryRequested),
              this._howToRequested &&
                this._galleryRequested &&
                (this._howToRequested = !1),
              this._galleryRequested && Nt.eventGallery(this),
              this.requestUpdate();
          },
          passive: !0,
        }),
        (this._init = async () => {
          if (
            ((window.defferedPromptEvent = null),
            this._checkInstalled(),
            !this.disableChrome)
          ) {
            const e = (e) => {
              (window.defferedPromptEvent = e),
                e.preventDefault(),
                (this.platforms = e.platforms),
                this.isRelatedAppsInstalled || this.isUnderStandaloneMode
                  ? (this.isInstallAvailable = !1)
                  : ((this.isInstallAvailable = !0),
                    Nt.eventInstallAvailable(this)),
                "accepted" === this.userChoiceResult &&
                  ((this.isDialogHidden = !0), Nt.eventInstalledSuccess(this)),
                this.requestUpdate();
            };
            null != this.externalPromptEvent
              ? setTimeout(() => e(this.externalPromptEvent), 300)
              : window.addEventListener("beforeinstallprompt", e);
          }
          window.addEventListener("appinstalled", (e) => {
            (window.defferedPromptEvent = null),
              (this.isInstallAvailable = !1),
              this.requestUpdate(),
              Nt.eventInstalledSuccess(this);
          });
          try {
            const e = await fetch(this.manifestUrl),
              t = await e.json();
            if (!e.ok || !t || !Object.keys(t))
              throw Error("Manifest not found");
            Nt.normalizeManifestAssetUrls(t, this.manifestUrl),
              (this.icon = this.icon || t.icons?.length ? t.icons[0].src : ""),
              (this.name = this.name || t.short_name || t.name || ""),
              (this.description = this.description || t.description || ""),
              (this._manifest = t);
          } catch (e) {
            (this.icon = this.icon || this._manifest.icons?.[0].src || ""),
              (this.name = this.name || this._manifest.short_name || ""),
              (this.description =
                this.description || this._manifest.description || "");
          }
        }),
        (this._requestUpdate = () => {
          this.requestUpdate();
        });
    }
    static get styles() {
      return [Yt, Ft];
    }
    async _checkInstalled() {
      (this.isUnderStandaloneMode = Nt.isStandalone()),
        (this.isRelatedAppsInstalled = await Nt.isRelatedAppsInstalled()),
        (this.isAppleMobilePlatform = Nt.isAppleMobile()),
        (this.isAppleDesktopPlatform = Nt.isAppleDesktop()),
        this.isAppleMobilePlatform || this.isAppleDesktopPlatform
          ? this.isUnderStandaloneMode ||
            (this.manualApple && this.hideDialog(),
            setTimeout(() => {
              (this.isInstallAvailable = !0),
                this.requestUpdate(),
                Nt.eventInstallAvailable(this);
            }, 1e3))
          : this.manualChrome && this.hideDialog();
    }
    connectedCallback() {
      ((e) => {
        "nb" === e.slice(0, 2) && (e = "no");
        try {
          Pt.get(e) ? zt(e) : zt(e.slice(0, 2));
        } catch {}
      })(navigator.language),
        this._init(),
        Ot.finalized,
        Vt.finalized,
        super.connectedCallback();
    }
    willUpdate(e) {
      this.externalPromptEvent &&
        e.has("externalPromptEvent") &&
        "object" == typeof this.externalPromptEvent &&
        this._init();
    }
    render() {
      return this.isAppleMobilePlatform || this.isAppleDesktopPlatform
        ? he`${Xt(
            this.name,
            this.description,
            this.installDescription,
            this.disableDescription,
            this.disableScreenshots || this.disableScreenshotsApple,
            this.disableClose,
            this.icon,
            this._manifest,
            this.isInstallAvailable && !this.isDialogHidden,
            this._hideDialogUser,
            this._howToForApple,
            this.isAppleDesktopPlatform,
            this._howToRequested,
            this._toggleGallery,
            this._galleryRequested
          )}`
        : he`${Qt(
            this.name,
            this.description,
            this.installDescription,
            this.disableDescription,
            this.disableScreenshots || this.disableScreenshotsChrome,
            this.disableClose,
            this.icon,
            this._manifest,
            this.isInstallAvailable && !this.isDialogHidden,
            this._hideDialogUser,
            this._install,
            this._toggleGallery,
            this._galleryRequested
          )}`;
    }
  };
  ea(
    [nt({ attribute: "manifest-url" }), ta("design:type", Object)],
    aa.prototype,
    "manifestUrl",
    void 0
  ),
    ea([nt(), ta("design:type", Object)], aa.prototype, "icon", void 0),
    ea([nt(), ta("design:type", Object)], aa.prototype, "name", void 0),
    ea([nt(), ta("design:type", Object)], aa.prototype, "description", void 0),
    ea(
      [nt({ attribute: "install-description" }), ta("design:type", Object)],
      aa.prototype,
      "installDescription",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-install-description", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableDescription",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-screenshots", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableScreenshots",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-screenshots-apple", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableScreenshotsApple",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-screenshots-chrome", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableScreenshotsChrome",
      void 0
    ),
    ea(
      [
        nt({ attribute: "manual-apple", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "manualApple",
      void 0
    ),
    ea(
      [
        nt({ attribute: "manual-chrome", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "manualChrome",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-chrome", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableChrome",
      void 0
    ),
    ea(
      [
        nt({ attribute: "disable-close", type: Boolean }),
        ta("design:type", Object),
      ],
      aa.prototype,
      "disableClose",
      void 0
    ),
    ea(
      [
        (function (e) {
          return nt({ ...e, state: !0, attribute: !1 });
        })(),
        ta("design:type", Object),
      ],
      aa.prototype,
      "externalPromptEvent",
      void 0
    ),
    (aa = ea([(e, t) => (e.addInitializer(Le), e), ot("pwa-install")], aa)),
    (PWAInstallComponent = t);
})();
//# sourceMappingURL=pwa-install.bundle.js.map
