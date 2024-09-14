const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["./index-CqFhiEtL.js", "assets/index-CpEq9FWA.css"])
) => i.map((i) => d[i]);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && o(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
/**
 * @vue/shared v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Pl(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const Le = {},
  fo = [],
  xt = () => {},
  zp = () => !1,
  Ai = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  El = (e) => e.startsWith("onUpdate:"),
  Xe = Object.assign,
  Tl = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ip = Object.prototype.hasOwnProperty,
  _e = (e, t) => Ip.call(e, t),
  ue = Array.isArray,
  ho = (e) => Mi(e) === "[object Map]",
  id = (e) => Mi(e) === "[object Set]",
  ve = (e) => typeof e == "function",
  je = (e) => typeof e == "string",
  Cn = (e) => typeof e == "symbol",
  Ie = (e) => e !== null && typeof e == "object",
  sd = (e) => (Ie(e) || ve(e)) && ve(e.then) && ve(e.catch),
  ld = Object.prototype.toString,
  Mi = (e) => ld.call(e),
  kp = (e) => Mi(e).slice(8, -1),
  ad = (e) => Mi(e) === "[object Object]",
  Ol = (e) =>
    je(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  Uo = Pl(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  zi = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Bp = /-(\w)/g,
  Tt = zi((e) => e.replace(Bp, (t, n) => (n ? n.toUpperCase() : ""))),
  Lp = /\B([A-Z])/g,
  Xn = zi((e) => e.replace(Lp, "-$1").toLowerCase()),
  Ii = zi((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  us = zi((e) => (e ? `on${Ii(e)}` : "")),
  bn = (e, t) => !Object.is(e, t),
  ds = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  },
  cd = (e, t, n, o = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: o,
      value: n,
    });
  },
  Hp = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Fp = (e) => {
    const t = je(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Ta;
const ud = () =>
  Ta ||
  (Ta =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
function Rl(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n],
        r = je(o) ? Wp(o) : Rl(o);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (je(e) || Ie(e)) return e;
}
const jp = /;(?![^(]*\))/g,
  Dp = /:([^]+)/,
  Np = /\/\*[^]*?\*\//g;
function Wp(e) {
  const t = {};
  return (
    e
      .replace(Np, "")
      .split(jp)
      .forEach((n) => {
        if (n) {
          const o = n.split(Dp);
          o.length > 1 && (t[o[0].trim()] = o[1].trim());
        }
      }),
    t
  );
}
function Al(e) {
  let t = "";
  if (je(e)) t = e;
  else if (ue(e))
    for (let n = 0; n < e.length; n++) {
      const o = Al(e[n]);
      o && (t += o + " ");
    }
  else if (Ie(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Kp =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Vp = Pl(Kp);
function dd(e) {
  return !!e || e === "";
}
const fd = (e) => !!(e && e.__v_isRef === !0),
  hd = (e) =>
    je(e)
      ? e
      : e == null
      ? ""
      : ue(e) || (Ie(e) && (e.toString === ld || !ve(e.toString)))
      ? fd(e)
        ? hd(e.value)
        : JSON.stringify(e, pd, 2)
      : String(e),
  pd = (e, t) =>
    fd(t)
      ? pd(e, t.value)
      : ho(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [o, r], i) => ((n[fs(o, i) + " =>"] = r), n),
            {}
          ),
        }
      : id(t)
      ? { [`Set(${t.size})`]: [...t.values()].map((n) => fs(n)) }
      : Cn(t)
      ? fs(t)
      : Ie(t) && !ue(t) && !ad(t)
      ? String(t)
      : t,
  fs = (e, t = "") => {
    var n;
    return Cn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
/**
 * @vue/reactivity v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let ft;
class gd {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ft),
      !t && ft && (this.index = (ft.scopes || (ft.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ft;
      try {
        return (ft = this), t();
      } finally {
        ft = n;
      }
    }
  }
  on() {
    ft = this;
  }
  off() {
    ft = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function vd(e) {
  return new gd(e);
}
function Up(e, t = ft) {
  t && t.active && t.effects.push(e);
}
function md() {
  return ft;
}
function Gp(e) {
  ft && ft.cleanups.push(e);
}
let Ln;
class Ml {
  constructor(t, n, o, r) {
    (this.fn = t),
      (this.trigger = n),
      (this.scheduler = o),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      Up(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      (this._dirtyLevel = 1), Sn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (qp(n.computed), this._dirtyLevel >= 4)) break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), _n();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn();
    let t = gn,
      n = Ln;
    try {
      return (gn = !0), (Ln = this), this._runnings++, Oa(this), this.fn();
    } finally {
      Ra(this), this._runnings--, (Ln = n), (gn = t);
    }
  }
  stop() {
    this.active &&
      (Oa(this), Ra(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function qp(e) {
  return e.value;
}
function Oa(e) {
  e._trackId++, (e._depsLength = 0);
}
function Ra(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) bd(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function bd(e, t) {
  const n = e.get(t);
  n !== void 0 &&
    t._trackId !== n &&
    (e.delete(t), e.size === 0 && e.cleanup());
}
let gn = !0,
  Ns = 0;
const yd = [];
function Sn() {
  yd.push(gn), (gn = !1);
}
function _n() {
  const e = yd.pop();
  gn = e === void 0 ? !0 : e;
}
function zl() {
  Ns++;
}
function Il() {
  for (Ns--; !Ns && Ws.length; ) Ws.shift()();
}
function xd(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && bd(o, e), (e.deps[e._depsLength++] = t)) : e._depsLength++;
  }
}
const Ws = [];
function wd(e, t, n) {
  zl();
  for (const o of e.keys()) {
    let r;
    o._dirtyLevel < t &&
      (r ?? (r = e.get(o) === o._trackId)) &&
      (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0),
      (o._dirtyLevel = t)),
      o._shouldSchedule &&
        (r ?? (r = e.get(o) === o._trackId)) &&
        (o.trigger(),
        (!o._runnings || o.allowRecurse) &&
          o._dirtyLevel !== 2 &&
          ((o._shouldSchedule = !1), o.scheduler && Ws.push(o.scheduler)));
  }
  Il();
}
const Cd = (e, t) => {
    const n = new Map();
    return (n.cleanup = e), (n.computed = t), n;
  },
  ci = new WeakMap(),
  Hn = Symbol(""),
  Ks = Symbol("");
function dt(e, t, n) {
  if (gn && Ln) {
    let o = ci.get(e);
    o || ci.set(e, (o = new Map()));
    let r = o.get(n);
    r || o.set(n, (r = Cd(() => o.delete(n)))), xd(Ln, r);
  }
}
function qt(e, t, n, o, r, i) {
  const s = ci.get(e);
  if (!s) return;
  let l = [];
  if (t === "clear") l = [...s.values()];
  else if (n === "length" && ue(e)) {
    const a = Number(o);
    s.forEach((c, u) => {
      (u === "length" || (!Cn(u) && u >= a)) && l.push(c);
    });
  } else
    switch ((n !== void 0 && l.push(s.get(n)), t)) {
      case "add":
        ue(e)
          ? Ol(n) && l.push(s.get("length"))
          : (l.push(s.get(Hn)), ho(e) && l.push(s.get(Ks)));
        break;
      case "delete":
        ue(e) || (l.push(s.get(Hn)), ho(e) && l.push(s.get(Ks)));
        break;
      case "set":
        ho(e) && l.push(s.get(Hn));
        break;
    }
  zl();
  for (const a of l) a && wd(a, 4);
  Il();
}
function Xp(e, t) {
  const n = ci.get(e);
  return n && n.get(t);
}
const Yp = Pl("__proto__,__v_isRef,__isVue"),
  Sd = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Cn)
  ),
  Aa = Zp();
function Zp() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const o = we(this);
        for (let i = 0, s = this.length; i < s; i++) dt(o, "get", i + "");
        const r = o[t](...n);
        return r === -1 || r === !1 ? o[t](...n.map(we)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        Sn(), zl();
        const o = we(this)[t].apply(this, n);
        return Il(), _n(), o;
      };
    }),
    e
  );
}
function Jp(e) {
  Cn(e) || (e = String(e));
  const t = we(this);
  return dt(t, "has", e), t.hasOwnProperty(e);
}
class _d {
  constructor(t = !1, n = !1) {
    (this._isReadonly = t), (this._isShallow = n);
  }
  get(t, n, o) {
    const r = this._isReadonly,
      i = this._isShallow;
    if (n === "__v_isReactive") return !r;
    if (n === "__v_isReadonly") return r;
    if (n === "__v_isShallow") return i;
    if (n === "__v_raw")
      return o === (r ? (i ? dg : Td) : i ? Ed : Pd).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(o)
        ? t
        : void 0;
    const s = ue(t);
    if (!r) {
      if (s && _e(Aa, n)) return Reflect.get(Aa, n, o);
      if (n === "hasOwnProperty") return Jp;
    }
    const l = Reflect.get(t, n, o);
    return (Cn(n) ? Sd.has(n) : Yp(n)) || (r || dt(t, "get", n), i)
      ? l
      : We(l)
      ? s && Ol(n)
        ? l
        : l.value
      : Ie(l)
      ? r
        ? Ft(l)
        : Xt(l)
      : l;
  }
}
class $d extends _d {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Nn(i);
      if (
        (!yo(o) && !Nn(o) && ((i = we(i)), (o = we(o))),
        !ue(t) && We(i) && !We(o))
      )
        return a ? !1 : ((i.value = o), !0);
    }
    const s = ue(t) && Ol(n) ? Number(n) < t.length : _e(t, n),
      l = Reflect.set(t, n, o, r);
    return (
      t === we(r) && (s ? bn(o, i) && qt(t, "set", n, o) : qt(t, "add", n, o)),
      l
    );
  }
  deleteProperty(t, n) {
    const o = _e(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && o && qt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Cn(n) || !Sd.has(n)) && dt(t, "has", n), o;
  }
  ownKeys(t) {
    return dt(t, "iterate", ue(t) ? "length" : Hn), Reflect.ownKeys(t);
  }
}
class Qp extends _d {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const eg = new $d(),
  tg = new Qp(),
  ng = new $d(!0);
const kl = (e) => e,
  ki = (e) => Reflect.getPrototypeOf(e);
function zr(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = we(e),
    i = we(t);
  n || (bn(t, i) && dt(r, "get", t), dt(r, "get", i));
  const { has: s } = ki(r),
    l = o ? kl : n ? Hl : lr;
  if (s.call(r, t)) return l(e.get(t));
  if (s.call(r, i)) return l(e.get(i));
  e !== r && e.get(t);
}
function Ir(e, t = !1) {
  const n = this.__v_raw,
    o = we(n),
    r = we(e);
  return (
    t || (bn(e, r) && dt(o, "has", e), dt(o, "has", r)),
    e === r ? n.has(e) : n.has(e) || n.has(r)
  );
}
function kr(e, t = !1) {
  return (
    (e = e.__v_raw), !t && dt(we(e), "iterate", Hn), Reflect.get(e, "size", e)
  );
}
function Ma(e, t = !1) {
  !t && !yo(e) && !Nn(e) && (e = we(e));
  const n = we(this);
  return ki(n).has.call(n, e) || (n.add(e), qt(n, "add", e, e)), this;
}
function za(e, t, n = !1) {
  !n && !yo(t) && !Nn(t) && (t = we(t));
  const o = we(this),
    { has: r, get: i } = ki(o);
  let s = r.call(o, e);
  s || ((e = we(e)), (s = r.call(o, e)));
  const l = i.call(o, e);
  return (
    o.set(e, t), s ? bn(t, l) && qt(o, "set", e, t) : qt(o, "add", e, t), this
  );
}
function Ia(e) {
  const t = we(this),
    { has: n, get: o } = ki(t);
  let r = n.call(t, e);
  r || ((e = we(e)), (r = n.call(t, e))), o && o.call(t, e);
  const i = t.delete(e);
  return r && qt(t, "delete", e, void 0), i;
}
function ka() {
  const e = we(this),
    t = e.size !== 0,
    n = e.clear();
  return t && qt(e, "clear", void 0, void 0), n;
}
function Br(e, t) {
  return function (o, r) {
    const i = this,
      s = i.__v_raw,
      l = we(s),
      a = t ? kl : e ? Hl : lr;
    return (
      !e && dt(l, "iterate", Hn), s.forEach((c, u) => o.call(r, a(c), a(u), i))
    );
  };
}
function Lr(e, t, n) {
  return function (...o) {
    const r = this.__v_raw,
      i = we(r),
      s = ho(i),
      l = e === "entries" || (e === Symbol.iterator && s),
      a = e === "keys" && s,
      c = r[e](...o),
      u = n ? kl : t ? Hl : lr;
    return (
      !t && dt(i, "iterate", a ? Ks : Hn),
      {
        next() {
          const { value: d, done: f } = c.next();
          return f
            ? { value: d, done: f }
            : { value: l ? [u(d[0]), u(d[1])] : u(d), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function en(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function og() {
  const e = {
      get(i) {
        return zr(this, i);
      },
      get size() {
        return kr(this);
      },
      has: Ir,
      add: Ma,
      set: za,
      delete: Ia,
      clear: ka,
      forEach: Br(!1, !1),
    },
    t = {
      get(i) {
        return zr(this, i, !1, !0);
      },
      get size() {
        return kr(this);
      },
      has: Ir,
      add(i) {
        return Ma.call(this, i, !0);
      },
      set(i, s) {
        return za.call(this, i, s, !0);
      },
      delete: Ia,
      clear: ka,
      forEach: Br(!1, !0),
    },
    n = {
      get(i) {
        return zr(this, i, !0);
      },
      get size() {
        return kr(this, !0);
      },
      has(i) {
        return Ir.call(this, i, !0);
      },
      add: en("add"),
      set: en("set"),
      delete: en("delete"),
      clear: en("clear"),
      forEach: Br(!0, !1),
    },
    o = {
      get(i) {
        return zr(this, i, !0, !0);
      },
      get size() {
        return kr(this, !0);
      },
      has(i) {
        return Ir.call(this, i, !0);
      },
      add: en("add"),
      set: en("set"),
      delete: en("delete"),
      clear: en("clear"),
      forEach: Br(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (e[i] = Lr(i, !1, !1)),
        (n[i] = Lr(i, !0, !1)),
        (t[i] = Lr(i, !1, !0)),
        (o[i] = Lr(i, !0, !0));
    }),
    [e, n, t, o]
  );
}
const [rg, ig, sg, lg] = og();
function Bl(e, t) {
  const n = t ? (e ? lg : sg) : e ? ig : rg;
  return (o, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
      ? e
      : r === "__v_raw"
      ? o
      : Reflect.get(_e(n, r) && r in o ? n : o, r, i);
}
const ag = { get: Bl(!1, !1) },
  cg = { get: Bl(!1, !0) },
  ug = { get: Bl(!0, !1) };
const Pd = new WeakMap(),
  Ed = new WeakMap(),
  Td = new WeakMap(),
  dg = new WeakMap();
function fg(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hg(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fg(kp(e));
}
function Xt(e) {
  return Nn(e) ? e : Ll(e, !1, eg, ag, Pd);
}
function Od(e) {
  return Ll(e, !1, ng, cg, Ed);
}
function Ft(e) {
  return Ll(e, !0, tg, ug, Td);
}
function Ll(e, t, n, o, r) {
  if (!Ie(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const s = hg(e);
  if (s === 0) return e;
  const l = new Proxy(e, s === 2 ? o : n);
  return r.set(e, l), l;
}
function Fn(e) {
  return Nn(e) ? Fn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Nn(e) {
  return !!(e && e.__v_isReadonly);
}
function yo(e) {
  return !!(e && e.__v_isShallow);
}
function Rd(e) {
  return e ? !!e.__v_raw : !1;
}
function we(e) {
  const t = e && e.__v_raw;
  return t ? we(t) : e;
}
function sr(e) {
  return Object.isExtensible(e) && cd(e, "__v_skip", !0), e;
}
const lr = (e) => (Ie(e) ? Xt(e) : e),
  Hl = (e) => (Ie(e) ? Ft(e) : e);
class Ad {
  constructor(t, n, o, r) {
    (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new Ml(
        () => t(this._value),
        () => ni(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = o);
  }
  get value() {
    const t = we(this);
    return (
      (!t._cacheable || t.effect.dirty) &&
        bn(t._value, (t._value = t.effect.run())) &&
        ni(t, 4),
      Md(t),
      t.effect._dirtyLevel >= 2 && ni(t, 2),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
}
function pg(e, t, n = !1) {
  let o, r;
  const i = ve(e);
  return (
    i ? ((o = e), (r = xt)) : ((o = e.get), (r = e.set)),
    new Ad(o, r, i || !r, n)
  );
}
function Md(e) {
  var t;
  gn &&
    Ln &&
    ((e = we(e)),
    xd(
      Ln,
      (t = e.dep) != null
        ? t
        : (e.dep = Cd(() => (e.dep = void 0), e instanceof Ad ? e : void 0))
    ));
}
function ni(e, t = 4, n, o) {
  e = we(e);
  const r = e.dep;
  r && wd(r, t);
}
function We(e) {
  return !!(e && e.__v_isRef === !0);
}
function Q(e) {
  return Id(e, !1);
}
function zd(e) {
  return Id(e, !0);
}
function Id(e, t) {
  return We(e) ? e : new gg(e, t);
}
class gg {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : we(t)),
      (this._value = n ? t : lr(t));
  }
  get value() {
    return Md(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yo(t) || Nn(t);
    (t = n ? t : we(t)),
      bn(t, this._rawValue) &&
        (this._rawValue,
        (this._rawValue = t),
        (this._value = n ? t : lr(t)),
        ni(this, 4));
  }
}
function po(e) {
  return We(e) ? e.value : e;
}
const vg = {
  get: (e, t, n) => po(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return We(r) && !We(n) ? ((r.value = n), !0) : Reflect.set(e, t, n, o);
  },
};
function kd(e) {
  return Fn(e) ? e : new Proxy(e, vg);
}
function mg(e) {
  const t = ue(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = Bd(e, n);
  return t;
}
class bg {
  constructor(t, n, o) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = o),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Xp(we(this._object), this._key);
  }
}
class yg {
  constructor(t) {
    (this._getter = t), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function Be(e, t, n) {
  return We(e)
    ? e
    : ve(e)
    ? new yg(e)
    : Ie(e) && arguments.length > 1
    ? Bd(e, t, n)
    : Q(e);
}
function Bd(e, t, n) {
  const o = e[t];
  return We(o) ? o : new bg(e, t, n);
}
/**
 * @vue/runtime-core v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function vn(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Bi(r, t, n);
  }
}
function wt(e, t, n, o) {
  if (ve(e)) {
    const r = vn(e, t, n, o);
    return (
      r &&
        sd(r) &&
        r.catch((i) => {
          Bi(i, t, n);
        }),
      r
    );
  }
  if (ue(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(wt(e[i], t, n, o));
    return r;
  }
}
function Bi(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy,
      l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const c = i.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, s, l) === !1) return;
      }
      i = i.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Sn(), vn(a, null, 10, [e, s, l]), _n();
      return;
    }
  }
  xg(e, n, r, o);
}
function xg(e, t, n, o = !0) {
  console.error(e);
}
let ar = !1,
  Vs = !1;
const nt = [];
let Lt = 0;
const go = [];
let cn = null,
  Mn = 0;
const Ld = Promise.resolve();
let Fl = null;
function yn(e) {
  const t = Fl || Ld;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function wg(e) {
  let t = Lt + 1,
    n = nt.length;
  for (; t < n; ) {
    const o = (t + n) >>> 1,
      r = nt[o],
      i = cr(r);
    i < e || (i === e && r.pre) ? (t = o + 1) : (n = o);
  }
  return t;
}
function jl(e) {
  (!nt.length || !nt.includes(e, ar && e.allowRecurse ? Lt + 1 : Lt)) &&
    (e.id == null ? nt.push(e) : nt.splice(wg(e.id), 0, e), Hd());
}
function Hd() {
  !ar && !Vs && ((Vs = !0), (Fl = Ld.then(jd)));
}
function Cg(e) {
  const t = nt.indexOf(e);
  t > Lt && nt.splice(t, 1);
}
function Sg(e) {
  ue(e)
    ? go.push(...e)
    : (!cn || !cn.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && go.push(e),
    Hd();
}
function Ba(e, t, n = ar ? Lt + 1 : 0) {
  for (; n < nt.length; n++) {
    const o = nt[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid) continue;
      nt.splice(n, 1), n--, o();
    }
  }
}
function Fd(e) {
  if (go.length) {
    const t = [...new Set(go)].sort((n, o) => cr(n) - cr(o));
    if (((go.length = 0), cn)) {
      cn.push(...t);
      return;
    }
    for (cn = t, Mn = 0; Mn < cn.length; Mn++) {
      const n = cn[Mn];
      n.active !== !1 && n();
    }
    (cn = null), (Mn = 0);
  }
}
const cr = (e) => (e.id == null ? 1 / 0 : e.id),
  _g = (e, t) => {
    const n = cr(e) - cr(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function jd(e) {
  (Vs = !1), (ar = !0), nt.sort(_g);
  try {
    for (Lt = 0; Lt < nt.length; Lt++) {
      const t = nt[Lt];
      t && t.active !== !1 && vn(t, t.i, t.i ? 15 : 14);
    }
  } finally {
    (Lt = 0),
      (nt.length = 0),
      Fd(),
      (ar = !1),
      (Fl = null),
      (nt.length || go.length) && jd();
  }
}
let qe = null,
  Dd = null;
function ui(e) {
  const t = qe;
  return (qe = e), (Dd = (e && e.type.__scopeId) || null), t;
}
function It(e, t = qe, n) {
  if (!t || e._n) return e;
  const o = (...r) => {
    o._d && Za(-1);
    const i = ui(t);
    let s;
    try {
      s = e(...r);
    } finally {
      ui(i), o._d && Za(1);
    }
    return s;
  };
  return (o._n = !0), (o._c = !0), (o._d = !0), o;
}
function Wn(e, t) {
  if (qe === null) return e;
  const n = Di(qe),
    o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, l, a = Le] = t[r];
    i &&
      (ve(i) && (i = { mounted: i, updated: i }),
      i.deep && pn(s),
      o.push({
        dir: i,
        instance: n,
        value: s,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function En(e, t, n, o) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[o];
    a && (Sn(), wt(a, n, 8, [e.el, l, e, t]), _n());
  }
}
const un = Symbol("_leaveCb"),
  Hr = Symbol("_enterCb");
function Nd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    _t(() => {
      e.isMounted = !0;
    }),
    Qe(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const bt = [Function, Array],
  Wd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: bt,
    onEnter: bt,
    onAfterEnter: bt,
    onEnterCancelled: bt,
    onBeforeLeave: bt,
    onLeave: bt,
    onAfterLeave: bt,
    onLeaveCancelled: bt,
    onBeforeAppear: bt,
    onAppear: bt,
    onAfterAppear: bt,
    onAppearCancelled: bt,
  },
  Kd = (e) => {
    const t = e.subTree;
    return t.component ? Kd(t.component) : t;
  },
  $g = {
    name: "BaseTransition",
    props: Wd,
    setup(e, { slots: t }) {
      const n = Pr(),
        o = Nd();
      return () => {
        const r = t.default && Dl(t.default(), !0);
        if (!r || !r.length) return;
        let i = r[0];
        if (r.length > 1) {
          for (const f of r)
            if (f.type !== Je) {
              i = f;
              break;
            }
        }
        const s = we(e),
          { mode: l } = s;
        if (o.isLeaving) return hs(i);
        const a = La(i);
        if (!a) return hs(i);
        let c = ur(a, s, o, n, (f) => (c = f));
        xo(a, c);
        const u = n.subTree,
          d = u && La(u);
        if (d && d.type !== Je && !zn(a, d) && Kd(n).type !== Je) {
          const f = ur(d, s, o, n);
          if ((xo(d, f), l === "out-in" && a.type !== Je))
            return (
              (o.isLeaving = !0),
              (f.afterLeave = () => {
                (o.isLeaving = !1),
                  n.update.active !== !1 && ((n.effect.dirty = !0), n.update());
              }),
              hs(i)
            );
          l === "in-out" &&
            a.type !== Je &&
            (f.delayLeave = (p, h, b) => {
              const y = Vd(o, d);
              (y[String(d.key)] = d),
                (p[un] = () => {
                  h(), (p[un] = void 0), delete c.delayedLeave;
                }),
                (c.delayedLeave = b);
            });
        }
        return i;
      };
    },
  },
  Pg = $g;
function Vd(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || ((o = Object.create(null)), n.set(t.type, o)), o;
}
function ur(e, t, n, o, r) {
  const {
      appear: i,
      mode: s,
      persisted: l = !1,
      onBeforeEnter: a,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: d,
      onBeforeLeave: f,
      onLeave: p,
      onAfterLeave: h,
      onLeaveCancelled: b,
      onBeforeAppear: y,
      onAppear: g,
      onAfterAppear: C,
      onAppearCancelled: A,
    } = t,
    _ = String(e.key),
    E = Vd(n, e),
    P = ($, O) => {
      $ && wt($, o, 9, O);
    },
    v = ($, O) => {
      const F = O[1];
      P($, O),
        ue($) ? $.every((T) => T.length <= 1) && F() : $.length <= 1 && F();
    },
    S = {
      mode: s,
      persisted: l,
      beforeEnter($) {
        let O = a;
        if (!n.isMounted)
          if (i) O = y || a;
          else return;
        $[un] && $[un](!0);
        const F = E[_];
        F && zn(e, F) && F.el[un] && F.el[un](), P(O, [$]);
      },
      enter($) {
        let O = c,
          F = u,
          T = d;
        if (!n.isMounted)
          if (i) (O = g || c), (F = C || u), (T = A || d);
          else return;
        let W = !1;
        const q = ($[Hr] = (I) => {
          W ||
            ((W = !0),
            I ? P(T, [$]) : P(F, [$]),
            S.delayedLeave && S.delayedLeave(),
            ($[Hr] = void 0));
        });
        O ? v(O, [$, q]) : q();
      },
      leave($, O) {
        const F = String(e.key);
        if (($[Hr] && $[Hr](!0), n.isUnmounting)) return O();
        P(f, [$]);
        let T = !1;
        const W = ($[un] = (q) => {
          T ||
            ((T = !0),
            O(),
            q ? P(b, [$]) : P(h, [$]),
            ($[un] = void 0),
            E[F] === e && delete E[F]);
        });
        (E[F] = e), p ? v(p, [$, W]) : W();
      },
      clone($) {
        const O = ur($, t, n, o, r);
        return r && r(O), O;
      },
    };
  return S;
}
function hs(e) {
  if (Li(e)) return (e = jt(e)), (e.children = null), e;
}
function La(e) {
  if (!Li(e)) return e;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16) return n[0];
    if (t & 32 && ve(n.default)) return n.default();
  }
}
function xo(e, t) {
  e.shapeFlag & 6 && e.component
    ? xo(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function Dl(e, t = !1, n) {
  let o = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
    s.type === He
      ? (s.patchFlag & 128 && r++, (o = o.concat(Dl(s.children, t, l))))
      : (t || s.type !== Je) && o.push(l != null ? jt(s, { key: l }) : s);
  }
  if (r > 1) for (let i = 0; i < o.length; i++) o[i].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */ function pe(e, t) {
  return ve(e) ? Xe({ name: e.name }, t, { setup: e }) : e;
}
const Go = (e) => !!e.type.__asyncLoader,
  Li = (e) => e.type.__isKeepAlive;
function Ud(e, t) {
  qd(e, "a", t);
}
function Gd(e, t) {
  qd(e, "da", t);
}
function qd(e, t, n = Ye) {
  const o =
    e.__wdc ||
    (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
  if ((Hi(t, o, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      Li(r.parent.vnode) && Eg(o, t, n, r), (r = r.parent);
  }
}
function Eg(e, t, n, o) {
  const r = Hi(t, e, o, !0);
  Yd(() => {
    Tl(o[t], r);
  }, n);
}
function Hi(e, t, n = Ye, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...s) => {
          Sn();
          const l = Er(n),
            a = wt(t, n, e, s);
          return l(), _n(), a;
        });
    return o ? r.unshift(i) : r.push(i), i;
  }
}
const Yt =
    (e) =>
    (t, n = Ye) => {
      (!ji || e === "sp") && Hi(e, (...o) => t(...o), n);
    },
  $n = Yt("bm"),
  _t = Yt("m"),
  Tg = Yt("bu"),
  Xd = Yt("u"),
  Qe = Yt("bum"),
  Yd = Yt("um"),
  Og = Yt("sp"),
  Rg = Yt("rtg"),
  Ag = Yt("rtc");
function Mg(e, t = Ye) {
  Hi("ec", e, t);
}
const Zd = "components";
function Jd(e, t) {
  return ef(Zd, e, !0, t) || e;
}
const Qd = Symbol.for("v-ndc");
function zg(e) {
  return je(e) ? ef(Zd, e, !1) || e : e || Qd;
}
function ef(e, t, n = !0, o = !1) {
  const r = qe || Ye;
  if (r) {
    const i = r.type;
    {
      const l = _v(i, !1);
      if (l && (l === t || l === Tt(t) || l === Ii(Tt(t)))) return i;
    }
    const s = Ha(r[e] || i[e], t) || Ha(r.appContext[e], t);
    return !s && o ? i : s;
  }
}
function Ha(e, t) {
  return e && (e[t] || e[Tt(t)] || e[Ii(Tt(t))]);
}
function Ig(e, t, n = {}, o, r) {
  if (qe.isCE || (qe.parent && Go(qe.parent) && qe.parent.isCE))
    return ze("slot", n, o);
  let i = e[t];
  i && i._c && (i._d = !1), dr();
  const s = i && tf(i(n)),
    l = hr(
      He,
      { key: (n.key || (s && s.key) || `_${t}`) + (!s && o ? "_fb" : "") },
      s || [],
      s && e._ === 1 ? 64 : -2
    );
  return (
    l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    i && i._c && (i._d = !0),
    l
  );
}
function tf(e) {
  return e.some((t) =>
    pr(t) ? !(t.type === Je || (t.type === He && !tf(t.children))) : !0
  )
    ? e
    : null;
}
const Us = (e) => (e ? (wf(e) ? Di(e) : Us(e.parent)) : null),
  qo = Xe(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Us(e.parent),
    $root: (e) => Us(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Nl(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        (e.effect.dirty = !0), jl(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = yn.bind(e.proxy)),
    $watch: (e) => iv.bind(e),
  }),
  ps = (e, t) => e !== Le && !e.__isScriptSetup && _e(e, t),
  kg = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: n,
        setupState: o,
        data: r,
        props: i,
        accessCache: s,
        type: l,
        appContext: a,
      } = e;
      let c;
      if (t[0] !== "$") {
        const p = s[t];
        if (p !== void 0)
          switch (p) {
            case 1:
              return o[t];
            case 2:
              return r[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (ps(o, t)) return (s[t] = 1), o[t];
          if (r !== Le && _e(r, t)) return (s[t] = 2), r[t];
          if ((c = e.propsOptions[0]) && _e(c, t)) return (s[t] = 3), i[t];
          if (n !== Le && _e(n, t)) return (s[t] = 4), n[t];
          Gs && (s[t] = 0);
        }
      }
      const u = qo[t];
      let d, f;
      if (u) return t === "$attrs" && dt(e.attrs, "get", ""), u(e);
      if ((d = l.__cssModules) && (d = d[t])) return d;
      if (n !== Le && _e(n, t)) return (s[t] = 4), n[t];
      if (((f = a.config.globalProperties), _e(f, t))) return f[t];
    },
    set({ _: e }, t, n) {
      const { data: o, setupState: r, ctx: i } = e;
      return ps(r, t)
        ? ((r[t] = n), !0)
        : o !== Le && _e(o, t)
        ? ((o[t] = n), !0)
        : _e(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((i[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: o,
          appContext: r,
          propsOptions: i,
        },
      },
      s
    ) {
      let l;
      return (
        !!n[s] ||
        (e !== Le && _e(e, s)) ||
        ps(t, s) ||
        ((l = i[0]) && _e(l, s)) ||
        _e(o, s) ||
        _e(qo, s) ||
        _e(r.config.globalProperties, s)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : _e(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function Fa(e) {
  return ue(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e;
}
let Gs = !0;
function Bg(e) {
  const t = Nl(e),
    n = e.proxy,
    o = e.ctx;
  (Gs = !1), t.beforeCreate && ja(t.beforeCreate, e, "bc");
  const {
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: p,
    updated: h,
    activated: b,
    deactivated: y,
    beforeDestroy: g,
    beforeUnmount: C,
    destroyed: A,
    unmounted: _,
    render: E,
    renderTracked: P,
    renderTriggered: v,
    errorCaptured: S,
    serverPrefetch: $,
    expose: O,
    inheritAttrs: F,
    components: T,
    directives: W,
    filters: q,
  } = t;
  if ((c && Lg(c, o, null), s))
    for (const z in s) {
      const X = s[z];
      ve(X) && (o[z] = X.bind(n));
    }
  if (r) {
    const z = r.call(n, n);
    Ie(z) && (e.data = Xt(z));
  }
  if (((Gs = !0), i))
    for (const z in i) {
      const X = i[z],
        de = ve(X) ? X.bind(n, n) : ve(X.get) ? X.get.bind(n, n) : xt,
        ce = !ve(X) && ve(X.set) ? X.set.bind(n) : xt,
        Ce = K({ get: de, set: ce });
      Object.defineProperty(o, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ce.value,
        set: (ye) => (Ce.value = ye),
      });
    }
  if (l) for (const z in l) nf(l[z], o, n, z);
  if (a) {
    const z = ve(a) ? a.call(n) : a;
    Reflect.ownKeys(z).forEach((X) => {
      Pe(X, z[X]);
    });
  }
  u && ja(u, e, "c");
  function U(z, X) {
    ue(X) ? X.forEach((de) => z(de.bind(n))) : X && z(X.bind(n));
  }
  if (
    (U($n, d),
    U(_t, f),
    U(Tg, p),
    U(Xd, h),
    U(Ud, b),
    U(Gd, y),
    U(Mg, S),
    U(Ag, P),
    U(Rg, v),
    U(Qe, C),
    U(Yd, _),
    U(Og, $),
    ue(O))
  )
    if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((X) => {
        Object.defineProperty(z, X, {
          get: () => n[X],
          set: (de) => (n[X] = de),
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === xt && (e.render = E),
    F != null && (e.inheritAttrs = F),
    T && (e.components = T),
    W && (e.directives = W);
}
function Lg(e, t, n = xt) {
  ue(e) && (e = qs(e));
  for (const o in e) {
    const r = e[o];
    let i;
    Ie(r)
      ? "default" in r
        ? (i = me(r.from || o, r.default, !0))
        : (i = me(r.from || o))
      : (i = me(r)),
      We(i)
        ? Object.defineProperty(t, o, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: (s) => (i.value = s),
          })
        : (t[o] = i);
  }
}
function ja(e, t, n) {
  wt(ue(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function nf(e, t, n, o) {
  const r = o.includes(".") ? mf(n, o) : () => n[o];
  if (je(e)) {
    const i = t[e];
    ve(i) && Ne(r, i);
  } else if (ve(e)) Ne(r, e.bind(n));
  else if (Ie(e))
    if (ue(e)) e.forEach((i) => nf(i, t, n, o));
    else {
      const i = ve(e.handler) ? e.handler.bind(n) : t[e.handler];
      ve(i) && Ne(r, i, e);
    }
}
function Nl(e) {
  const t = e.type,
    { mixins: n, extends: o } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !n && !o
      ? (a = t)
      : ((a = {}), r.length && r.forEach((c) => di(a, c, s, !0)), di(a, t, s)),
    Ie(t) && i.set(t, a),
    a
  );
}
function di(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && di(e, i, n, !0), r && r.forEach((s) => di(e, s, n, !0));
  for (const s in t)
    if (!(o && s === "expose")) {
      const l = Hg[s] || (n && n[s]);
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Hg = {
  data: Da,
  props: Na,
  emits: Na,
  methods: No,
  computed: No,
  beforeCreate: rt,
  created: rt,
  beforeMount: rt,
  mounted: rt,
  beforeUpdate: rt,
  updated: rt,
  beforeDestroy: rt,
  beforeUnmount: rt,
  destroyed: rt,
  unmounted: rt,
  activated: rt,
  deactivated: rt,
  errorCaptured: rt,
  serverPrefetch: rt,
  components: No,
  directives: No,
  watch: jg,
  provide: Da,
  inject: Fg,
};
function Da(e, t) {
  return t
    ? e
      ? function () {
          return Xe(
            ve(e) ? e.call(this, this) : e,
            ve(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Fg(e, t) {
  return No(qs(e), qs(t));
}
function qs(e) {
  if (ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function No(e, t) {
  return e ? Xe(Object.create(null), e, t) : t;
}
function Na(e, t) {
  return e
    ? ue(e) && ue(t)
      ? [...new Set([...e, ...t])]
      : Xe(Object.create(null), Fa(e), Fa(t ?? {}))
    : t;
}
function jg(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Xe(Object.create(null), e);
  for (const o in t) n[o] = rt(e[o], t[o]);
  return n;
}
function of() {
  return {
    app: null,
    config: {
      isNativeTag: zp,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Dg = 0;
function Ng(e, t) {
  return function (o, r = null) {
    ve(o) || (o = Xe({}, o)), r != null && !Ie(r) && (r = null);
    const i = of(),
      s = new WeakSet();
    let l = !1;
    const a = (i.app = {
      _uid: Dg++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Pv,
      get config() {
        return i.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          s.has(c) ||
            (c && ve(c.install)
              ? (s.add(c), c.install(a, ...u))
              : ve(c) && (s.add(c), c(a, ...u))),
          a
        );
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), a;
      },
      component(c, u) {
        return u ? ((i.components[c] = u), a) : i.components[c];
      },
      directive(c, u) {
        return u ? ((i.directives[c] = u), a) : i.directives[c];
      },
      mount(c, u, d) {
        if (!l) {
          const f = ze(o, r);
          return (
            (f.appContext = i),
            d === !0 ? (d = "svg") : d === !1 && (d = void 0),
            u && t ? t(f, c) : e(f, c, d),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            Di(f.component)
          );
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__);
      },
      provide(c, u) {
        return (i.provides[c] = u), a;
      },
      runWithContext(c) {
        const u = vo;
        vo = a;
        try {
          return c();
        } finally {
          vo = u;
        }
      },
    });
    return a;
  };
}
let vo = null;
function Pe(e, t) {
  if (Ye) {
    let n = Ye.provides;
    const o = Ye.parent && Ye.parent.provides;
    o === n && (n = Ye.provides = Object.create(o)), (n[e] = t);
  }
}
function me(e, t, n = !1) {
  const o = Ye || qe;
  if (o || vo) {
    const r = o
      ? o.parent == null
        ? o.vnode.appContext && o.vnode.appContext.provides
        : o.parent.provides
      : vo._context.provides;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return n && ve(t) ? t.call(o && o.proxy) : t;
  }
}
function Wg() {
  return !!(Ye || qe || vo);
}
const rf = {},
  sf = () => Object.create(rf),
  lf = (e) => Object.getPrototypeOf(e) === rf;
function Kg(e, t, n, o = !1) {
  const r = {},
    i = sf();
  (e.propsDefaults = Object.create(null)), af(e, t, r, i);
  for (const s in e.propsOptions[0]) s in r || (r[s] = void 0);
  n ? (e.props = o ? r : Od(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i);
}
function Vg(e, t, n, o) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: s },
    } = e,
    l = we(r),
    [a] = e.propsOptions;
  let c = !1;
  if ((o || s > 0) && !(s & 16)) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Fi(e.emitsOptions, f)) continue;
        const p = t[f];
        if (a)
          if (_e(i, f)) p !== i[f] && ((i[f] = p), (c = !0));
          else {
            const h = Tt(f);
            r[h] = Xs(a, l, h, p, e, !1);
          }
        else p !== i[f] && ((i[f] = p), (c = !0));
      }
    }
  } else {
    af(e, t, r, i) && (c = !0);
    let u;
    for (const d in l)
      (!t || (!_e(t, d) && ((u = Xn(d)) === d || !_e(t, u)))) &&
        (a
          ? n &&
            (n[d] !== void 0 || n[u] !== void 0) &&
            (r[d] = Xs(a, l, d, void 0, e, !0))
          : delete r[d]);
    if (i !== l)
      for (const d in i) (!t || !_e(t, d)) && (delete i[d], (c = !0));
  }
  c && qt(e.attrs, "set", "");
}
function af(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1,
    l;
  if (t)
    for (let a in t) {
      if (Uo(a)) continue;
      const c = t[a];
      let u;
      r && _e(r, (u = Tt(a)))
        ? !i || !i.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Fi(e.emitsOptions, a) ||
          ((!(a in o) || c !== o[a]) && ((o[a] = c), (s = !0)));
    }
  if (i) {
    const a = we(n),
      c = l || Le;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Xs(r, a, d, c[d], e, !_e(c, d));
    }
  }
  return s;
}
function Xs(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = _e(s, "default");
    if (l && o === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && ve(a)) {
        const { propsDefaults: c } = r;
        if (n in c) o = c[n];
        else {
          const u = Er(r);
          (o = c[n] = a.call(null, t)), u();
        }
      } else o = a;
    }
    s[0] &&
      (i && !l ? (o = !1) : s[1] && (o === "" || o === Xn(n)) && (o = !0));
  }
  return o;
}
const Ug = new WeakMap();
function cf(e, t, n = !1) {
  const o = n ? Ug : t.propsCache,
    r = o.get(e);
  if (r) return r;
  const i = e.props,
    s = {},
    l = [];
  let a = !1;
  if (!ve(e)) {
    const u = (d) => {
      a = !0;
      const [f, p] = cf(d, t, !0);
      Xe(s, f), p && l.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a) return Ie(e) && o.set(e, fo), fo;
  if (ue(i))
    for (let u = 0; u < i.length; u++) {
      const d = Tt(i[u]);
      Wa(d) && (s[d] = Le);
    }
  else if (i)
    for (const u in i) {
      const d = Tt(u);
      if (Wa(d)) {
        const f = i[u],
          p = (s[d] = ue(f) || ve(f) ? { type: f } : Xe({}, f));
        if (p) {
          const h = Ua(Boolean, p.type),
            b = Ua(String, p.type);
          (p[0] = h > -1),
            (p[1] = b < 0 || h < b),
            (h > -1 || _e(p, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return Ie(e) && o.set(e, c), c;
}
function Wa(e) {
  return e[0] !== "$" && !Uo(e);
}
function Ka(e) {
  return e === null
    ? "null"
    : typeof e == "function"
    ? e.name || ""
    : (typeof e == "object" && e.constructor && e.constructor.name) || "";
}
function Va(e, t) {
  return Ka(e) === Ka(t);
}
function Ua(e, t) {
  return ue(t) ? t.findIndex((n) => Va(n, e)) : ve(t) && Va(t, e) ? 0 : -1;
}
const uf = (e) => e[0] === "_" || e === "$stable",
  Wl = (e) => (ue(e) ? e.map(kt) : [kt(e)]),
  Gg = (e, t, n) => {
    if (t._n) return t;
    const o = It((...r) => Wl(t(...r)), n);
    return (o._c = !1), o;
  },
  df = (e, t, n) => {
    const o = e._ctx;
    for (const r in e) {
      if (uf(r)) continue;
      const i = e[r];
      if (ve(i)) t[r] = Gg(r, i, o);
      else if (i != null) {
        const s = Wl(i);
        t[r] = () => s;
      }
    }
  },
  ff = (e, t) => {
    const n = Wl(t);
    e.slots.default = () => n;
  },
  hf = (e, t, n) => {
    for (const o in t) (n || o !== "_") && (e[o] = t[o]);
  },
  qg = (e, t, n) => {
    const o = (e.slots = sf());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (hf(o, t, n), n && cd(o, "_", r, !0)) : df(t, o);
    } else t && ff(e, t);
  },
  Xg = (e, t, n) => {
    const { vnode: o, slots: r } = e;
    let i = !0,
      s = Le;
    if (o.shapeFlag & 32) {
      const l = t._;
      l
        ? n && l === 1
          ? (i = !1)
          : hf(r, t, n)
        : ((i = !t.$stable), df(t, r)),
        (s = t);
    } else t && (ff(e, t), (s = { default: 1 }));
    if (i) for (const l in r) !uf(l) && s[l] == null && delete r[l];
  };
function Ys(e, t, n, o, r = !1) {
  if (ue(e)) {
    e.forEach((f, p) => Ys(f, t && (ue(t) ? t[p] : t), n, o, r));
    return;
  }
  if (Go(o) && !r) return;
  const i = o.shapeFlag & 4 ? Di(o.component) : o.el,
    s = r ? null : i,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === Le ? (l.refs = {}) : l.refs,
    d = l.setupState;
  if (
    (c != null &&
      c !== a &&
      (je(c)
        ? ((u[c] = null), _e(d, c) && (d[c] = null))
        : We(c) && (c.value = null)),
    ve(a))
  )
    vn(a, l, 12, [s, u]);
  else {
    const f = je(a),
      p = We(a);
    if (f || p) {
      const h = () => {
        if (e.f) {
          const b = f ? (_e(d, a) ? d[a] : u[a]) : a.value;
          r
            ? ue(b) && Tl(b, i)
            : ue(b)
            ? b.includes(i) || b.push(i)
            : f
            ? ((u[a] = [i]), _e(d, a) && (d[a] = u[a]))
            : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          f
            ? ((u[a] = s), _e(d, a) && (d[a] = s))
            : p && ((a.value = s), e.k && (u[e.k] = s));
      };
      s ? ((h.id = -1), at(h, n)) : h();
    }
  }
}
const pf = Symbol("_vte"),
  Yg = (e) => e.__isTeleport,
  Xo = (e) => e && (e.disabled || e.disabled === ""),
  Ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
  qa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement,
  Zs = (e, t) => {
    const n = e && e.to;
    return je(n) ? (t ? t(n) : null) : n;
  },
  Zg = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, o, r, i, s, l, a, c) {
      const {
          mc: u,
          pc: d,
          pbc: f,
          o: { insert: p, querySelector: h, createText: b, createComment: y },
        } = c,
        g = Xo(t.props);
      let { shapeFlag: C, children: A, dynamicChildren: _ } = t;
      if (e == null) {
        const E = (t.el = b("")),
          P = (t.anchor = b("")),
          v = (t.target = Zs(t.props, h)),
          S = (t.targetStart = b("")),
          $ = (t.targetAnchor = b(""));
        p(E, n, o),
          p(P, n, o),
          (S[pf] = $),
          v &&
            (p(S, v),
            p($, v),
            s === "svg" || Ga(v)
              ? (s = "svg")
              : (s === "mathml" || qa(v)) && (s = "mathml"));
        const O = (F, T) => {
          C & 16 && u(A, F, T, r, i, s, l, a);
        };
        g ? O(n, P) : v && O(v, $);
      } else {
        (t.el = e.el), (t.targetStart = e.targetStart);
        const E = (t.anchor = e.anchor),
          P = (t.target = e.target),
          v = (t.targetAnchor = e.targetAnchor),
          S = Xo(e.props),
          $ = S ? n : P,
          O = S ? E : v;
        if (
          (s === "svg" || Ga(P)
            ? (s = "svg")
            : (s === "mathml" || qa(P)) && (s = "mathml"),
          _
            ? (f(e.dynamicChildren, _, $, r, i, s, l), Vl(e, t, !0))
            : a || d(e, t, $, O, r, i, s, l, !1),
          g)
        )
          S
            ? t.props &&
              e.props &&
              t.props.to !== e.props.to &&
              (t.props.to = e.props.to)
            : Fr(t, n, E, c, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const F = (t.target = Zs(t.props, h));
          F && Fr(t, F, null, c, 0);
        } else S && Fr(t, P, v, c, 1);
      }
      gf(t);
    },
    remove(e, t, n, { um: o, o: { remove: r } }, i) {
      const {
        shapeFlag: s,
        children: l,
        anchor: a,
        targetStart: c,
        targetAnchor: u,
        target: d,
        props: f,
      } = e;
      if ((d && (r(c), r(u)), i && r(a), s & 16)) {
        const p = i || !Xo(f);
        for (let h = 0; h < l.length; h++) {
          const b = l[h];
          o(b, t, n, p, !!b.dynamicChildren);
        }
      }
    },
    move: Fr,
    hydrate: Jg,
  };
function Fr(e, t, n, { o: { insert: o }, m: r }, i = 2) {
  i === 0 && o(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: a, children: c, props: u } = e,
    d = i === 2;
  if ((d && o(s, t, n), (!d || Xo(u)) && a & 16))
    for (let f = 0; f < c.length; f++) r(c[f], t, n, 2);
  d && o(l, t, n);
}
function Jg(
  e,
  t,
  n,
  o,
  r,
  i,
  { o: { nextSibling: s, parentNode: l, querySelector: a } },
  c
) {
  const u = (t.target = Zs(t.props, a));
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (Xo(t.props))
        (t.anchor = c(s(e), t, l(e), n, o, r, i)), (t.targetAnchor = d);
      else {
        t.anchor = s(e);
        let f = d;
        for (; f; )
          if (
            ((f = s(f)), f && f.nodeType === 8 && f.data === "teleport anchor")
          ) {
            (t.targetAnchor = f),
              (u._lpa = t.targetAnchor && s(t.targetAnchor));
            break;
          }
        c(d, t, u, n, o, r, i);
      }
    gf(t);
  }
  return t.anchor && s(t.anchor);
}
const Kl = Zg;
function gf(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const at = hv;
function Qg(e) {
  return ev(e);
}
function ev(e, t) {
  const n = ud();
  n.__VUE__ = !0;
  const {
      insert: o,
      remove: r,
      patchProp: i,
      createElement: s,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: f,
      setScopeId: p = xt,
      insertStaticContent: h,
    } = e,
    b = (
      m,
      x,
      R,
      L = null,
      k = null,
      G = null,
      Z = void 0,
      D = null,
      V = !!x.dynamicChildren
    ) => {
      if (m === x) return;
      m && !zn(m, x) && ((L = M(m)), ye(m, k, G, !0), (m = null)),
        x.patchFlag === -2 && ((V = !1), (x.dynamicChildren = null));
      const { type: j, ref: ne, shapeFlag: se } = x;
      switch (j) {
        case $r:
          y(m, x, R, L);
          break;
        case Je:
          g(m, x, R, L);
          break;
        case oi:
          m == null && C(x, R, L, Z);
          break;
        case He:
          T(m, x, R, L, k, G, Z, D, V);
          break;
        default:
          se & 1
            ? E(m, x, R, L, k, G, Z, D, V)
            : se & 6
            ? W(m, x, R, L, k, G, Z, D, V)
            : (se & 64 || se & 128) && j.process(m, x, R, L, k, G, Z, D, V, ie);
      }
      ne != null && k && Ys(ne, m && m.ref, G, x || m, !x);
    },
    y = (m, x, R, L) => {
      if (m == null) o((x.el = l(x.children)), R, L);
      else {
        const k = (x.el = m.el);
        x.children !== m.children && c(k, x.children);
      }
    },
    g = (m, x, R, L) => {
      m == null ? o((x.el = a(x.children || "")), R, L) : (x.el = m.el);
    },
    C = (m, x, R, L) => {
      [m.el, m.anchor] = h(m.children, x, R, L, m.el, m.anchor);
    },
    A = ({ el: m, anchor: x }, R, L) => {
      let k;
      for (; m && m !== x; ) (k = f(m)), o(m, R, L), (m = k);
      o(x, R, L);
    },
    _ = ({ el: m, anchor: x }) => {
      let R;
      for (; m && m !== x; ) (R = f(m)), r(m), (m = R);
      r(x);
    },
    E = (m, x, R, L, k, G, Z, D, V) => {
      x.type === "svg" ? (Z = "svg") : x.type === "math" && (Z = "mathml"),
        m == null ? P(x, R, L, k, G, Z, D, V) : $(m, x, k, G, Z, D, V);
    },
    P = (m, x, R, L, k, G, Z, D) => {
      let V, j;
      const { props: ne, shapeFlag: se, transition: re, dirs: he } = m;
      if (
        ((V = m.el = s(m.type, G, ne && ne.is, ne)),
        se & 8
          ? u(V, m.children)
          : se & 16 && S(m.children, V, null, L, k, gs(m, G), Z, D),
        he && En(m, null, L, "created"),
        v(V, m, m.scopeId, Z, L),
        ne)
      ) {
        for (const Ee in ne)
          Ee !== "value" && !Uo(Ee) && i(V, Ee, null, ne[Ee], G, L);
        "value" in ne && i(V, "value", null, ne.value, G),
          (j = ne.onVnodeBeforeMount) && At(j, L, m);
      }
      he && En(m, null, L, "beforeMount");
      const be = tv(k, re);
      be && re.beforeEnter(V),
        o(V, x, R),
        ((j = ne && ne.onVnodeMounted) || be || he) &&
          at(() => {
            j && At(j, L, m),
              be && re.enter(V),
              he && En(m, null, L, "mounted");
          }, k);
    },
    v = (m, x, R, L, k) => {
      if ((R && p(m, R), L)) for (let G = 0; G < L.length; G++) p(m, L[G]);
      if (k) {
        let G = k.subTree;
        if (x === G) {
          const Z = k.vnode;
          v(m, Z, Z.scopeId, Z.slotScopeIds, k.parent);
        }
      }
    },
    S = (m, x, R, L, k, G, Z, D, V = 0) => {
      for (let j = V; j < m.length; j++) {
        const ne = (m[j] = D ? dn(m[j]) : kt(m[j]));
        b(null, ne, x, R, L, k, G, Z, D);
      }
    },
    $ = (m, x, R, L, k, G, Z) => {
      const D = (x.el = m.el);
      let { patchFlag: V, dynamicChildren: j, dirs: ne } = x;
      V |= m.patchFlag & 16;
      const se = m.props || Le,
        re = x.props || Le;
      let he;
      if (
        (R && Tn(R, !1),
        (he = re.onVnodeBeforeUpdate) && At(he, R, x, m),
        ne && En(x, m, R, "beforeUpdate"),
        R && Tn(R, !0),
        ((se.innerHTML && re.innerHTML == null) ||
          (se.textContent && re.textContent == null)) &&
          u(D, ""),
        j
          ? O(m.dynamicChildren, j, D, R, L, gs(x, k), G)
          : Z || X(m, x, D, null, R, L, gs(x, k), G, !1),
        V > 0)
      ) {
        if (V & 16) F(D, se, re, R, k);
        else if (
          (V & 2 && se.class !== re.class && i(D, "class", null, re.class, k),
          V & 4 && i(D, "style", se.style, re.style, k),
          V & 8)
        ) {
          const be = x.dynamicProps;
          for (let Ee = 0; Ee < be.length; Ee++) {
            const Se = be[Ee],
              De = se[Se],
              ot = re[Se];
            (ot !== De || Se === "value") && i(D, Se, De, ot, k, R);
          }
        }
        V & 1 && m.children !== x.children && u(D, x.children);
      } else !Z && j == null && F(D, se, re, R, k);
      ((he = re.onVnodeUpdated) || ne) &&
        at(() => {
          he && At(he, R, x, m), ne && En(x, m, R, "updated");
        }, L);
    },
    O = (m, x, R, L, k, G, Z) => {
      for (let D = 0; D < x.length; D++) {
        const V = m[D],
          j = x[D],
          ne =
            V.el && (V.type === He || !zn(V, j) || V.shapeFlag & 70)
              ? d(V.el)
              : R;
        b(V, j, ne, null, L, k, G, Z, !0);
      }
    },
    F = (m, x, R, L, k) => {
      if (x !== R) {
        if (x !== Le)
          for (const G in x) !Uo(G) && !(G in R) && i(m, G, x[G], null, k, L);
        for (const G in R) {
          if (Uo(G)) continue;
          const Z = R[G],
            D = x[G];
          Z !== D && G !== "value" && i(m, G, D, Z, k, L);
        }
        "value" in R && i(m, "value", x.value, R.value, k);
      }
    },
    T = (m, x, R, L, k, G, Z, D, V) => {
      const j = (x.el = m ? m.el : l("")),
        ne = (x.anchor = m ? m.anchor : l(""));
      let { patchFlag: se, dynamicChildren: re, slotScopeIds: he } = x;
      he && (D = D ? D.concat(he) : he),
        m == null
          ? (o(j, R, L), o(ne, R, L), S(x.children || [], R, ne, k, G, Z, D, V))
          : se > 0 && se & 64 && re && m.dynamicChildren
          ? (O(m.dynamicChildren, re, R, k, G, Z, D),
            (x.key != null || (k && x === k.subTree)) && Vl(m, x, !0))
          : X(m, x, R, ne, k, G, Z, D, V);
    },
    W = (m, x, R, L, k, G, Z, D, V) => {
      (x.slotScopeIds = D),
        m == null
          ? x.shapeFlag & 512
            ? k.ctx.activate(x, R, L, Z, V)
            : q(x, R, L, k, G, Z, V)
          : I(m, x, V);
    },
    q = (m, x, R, L, k, G, Z) => {
      const D = (m.component = yv(m, L, k));
      if ((Li(m) && (D.ctx.renderer = ie), xv(D, !1, Z), D.asyncDep)) {
        if ((k && k.registerDep(D, U, Z), !m.el)) {
          const V = (D.subTree = ze(Je));
          g(null, V, x, R);
        }
      } else U(D, m, x, R, k, G, Z);
    },
    I = (m, x, R) => {
      const L = (x.component = m.component);
      if (uv(m, x, R))
        if (L.asyncDep && !L.asyncResolved) {
          z(L, x, R);
          return;
        } else (L.next = x), Cg(L.update), (L.effect.dirty = !0), L.update();
      else (x.el = m.el), (L.vnode = x);
    },
    U = (m, x, R, L, k, G, Z) => {
      const D = () => {
          if (m.isMounted) {
            let { next: ne, bu: se, u: re, parent: he, vnode: be } = m;
            {
              const Rt = vf(m);
              if (Rt) {
                ne && ((ne.el = be.el), z(m, ne, Z)),
                  Rt.asyncDep.then(() => {
                    m.isUnmounted || D();
                  });
                return;
              }
            }
            let Ee = ne,
              Se;
            Tn(m, !1),
              ne ? ((ne.el = be.el), z(m, ne, Z)) : (ne = be),
              se && ds(se),
              (Se = ne.props && ne.props.onVnodeBeforeUpdate) &&
                At(Se, he, ne, be),
              Tn(m, !0);
            const De = vs(m),
              ot = m.subTree;
            (m.subTree = De),
              b(ot, De, d(ot.el), M(ot), m, k, G),
              (ne.el = De.el),
              Ee === null && dv(m, De.el),
              re && at(re, k),
              (Se = ne.props && ne.props.onVnodeUpdated) &&
                at(() => At(Se, he, ne, be), k);
          } else {
            let ne;
            const { el: se, props: re } = x,
              { bm: he, m: be, parent: Ee } = m,
              Se = Go(x);
            if (
              (Tn(m, !1),
              he && ds(he),
              !Se && (ne = re && re.onVnodeBeforeMount) && At(ne, Ee, x),
              Tn(m, !0),
              se && Oe)
            ) {
              const De = () => {
                (m.subTree = vs(m)), Oe(se, m.subTree, m, k, null);
              };
              Se
                ? x.type.__asyncLoader().then(() => !m.isUnmounted && De())
                : De();
            } else {
              const De = (m.subTree = vs(m));
              b(null, De, R, L, m, k, G), (x.el = De.el);
            }
            if ((be && at(be, k), !Se && (ne = re && re.onVnodeMounted))) {
              const De = x;
              at(() => At(ne, Ee, De), k);
            }
            (x.shapeFlag & 256 ||
              (Ee && Go(Ee.vnode) && Ee.vnode.shapeFlag & 256)) &&
              m.a &&
              at(m.a, k),
              (m.isMounted = !0),
              (x = R = L = null);
          }
        },
        V = (m.effect = new Ml(D, xt, () => jl(j), m.scope)),
        j = (m.update = () => {
          V.dirty && V.run();
        });
      (j.i = m), (j.id = m.uid), Tn(m, !0), j();
    },
    z = (m, x, R) => {
      x.component = m;
      const L = m.vnode.props;
      (m.vnode = x),
        (m.next = null),
        Vg(m, x.props, L, R),
        Xg(m, x.children, R),
        Sn(),
        Ba(m),
        _n();
    },
    X = (m, x, R, L, k, G, Z, D, V = !1) => {
      const j = m && m.children,
        ne = m ? m.shapeFlag : 0,
        se = x.children,
        { patchFlag: re, shapeFlag: he } = x;
      if (re > 0) {
        if (re & 128) {
          ce(j, se, R, L, k, G, Z, D, V);
          return;
        } else if (re & 256) {
          de(j, se, R, L, k, G, Z, D, V);
          return;
        }
      }
      he & 8
        ? (ne & 16 && ge(j, k, G), se !== j && u(R, se))
        : ne & 16
        ? he & 16
          ? ce(j, se, R, L, k, G, Z, D, V)
          : ge(j, k, G, !0)
        : (ne & 8 && u(R, ""), he & 16 && S(se, R, L, k, G, Z, D, V));
    },
    de = (m, x, R, L, k, G, Z, D, V) => {
      (m = m || fo), (x = x || fo);
      const j = m.length,
        ne = x.length,
        se = Math.min(j, ne);
      let re;
      for (re = 0; re < se; re++) {
        const he = (x[re] = V ? dn(x[re]) : kt(x[re]));
        b(m[re], he, R, null, k, G, Z, D, V);
      }
      j > ne ? ge(m, k, G, !0, !1, se) : S(x, R, L, k, G, Z, D, V, se);
    },
    ce = (m, x, R, L, k, G, Z, D, V) => {
      let j = 0;
      const ne = x.length;
      let se = m.length - 1,
        re = ne - 1;
      for (; j <= se && j <= re; ) {
        const he = m[j],
          be = (x[j] = V ? dn(x[j]) : kt(x[j]));
        if (zn(he, be)) b(he, be, R, null, k, G, Z, D, V);
        else break;
        j++;
      }
      for (; j <= se && j <= re; ) {
        const he = m[se],
          be = (x[re] = V ? dn(x[re]) : kt(x[re]));
        if (zn(he, be)) b(he, be, R, null, k, G, Z, D, V);
        else break;
        se--, re--;
      }
      if (j > se) {
        if (j <= re) {
          const he = re + 1,
            be = he < ne ? x[he].el : L;
          for (; j <= re; )
            b(null, (x[j] = V ? dn(x[j]) : kt(x[j])), R, be, k, G, Z, D, V),
              j++;
        }
      } else if (j > re) for (; j <= se; ) ye(m[j], k, G, !0), j++;
      else {
        const he = j,
          be = j,
          Ee = new Map();
        for (j = be; j <= re; j++) {
          const N = (x[j] = V ? dn(x[j]) : kt(x[j]));
          N.key != null && Ee.set(N.key, j);
        }
        let Se,
          De = 0;
        const ot = re - be + 1;
        let Rt = !1,
          Ao = 0;
        const mt = new Array(ot);
        for (j = 0; j < ot; j++) mt[j] = 0;
        for (j = he; j <= se; j++) {
          const N = m[j];
          if (De >= ot) {
            ye(N, k, G, !0);
            continue;
          }
          let oe;
          if (N.key != null) oe = Ee.get(N.key);
          else
            for (Se = be; Se <= re; Se++)
              if (mt[Se - be] === 0 && zn(N, x[Se])) {
                oe = Se;
                break;
              }
          oe === void 0
            ? ye(N, k, G, !0)
            : ((mt[oe - be] = j + 1),
              oe >= Ao ? (Ao = oe) : (Rt = !0),
              b(N, x[oe], R, null, k, G, Z, D, V),
              De++);
        }
        const cs = Rt ? nv(mt) : fo;
        for (Se = cs.length - 1, j = ot - 1; j >= 0; j--) {
          const N = be + j,
            oe = x[N],
            fe = N + 1 < ne ? x[N + 1].el : L;
          mt[j] === 0
            ? b(null, oe, R, fe, k, G, Z, D, V)
            : Rt && (Se < 0 || j !== cs[Se] ? Ce(oe, R, fe, 2) : Se--);
        }
      }
    },
    Ce = (m, x, R, L, k = null) => {
      const { el: G, type: Z, transition: D, children: V, shapeFlag: j } = m;
      if (j & 6) {
        Ce(m.component.subTree, x, R, L);
        return;
      }
      if (j & 128) {
        m.suspense.move(x, R, L);
        return;
      }
      if (j & 64) {
        Z.move(m, x, R, ie);
        return;
      }
      if (Z === He) {
        o(G, x, R);
        for (let se = 0; se < V.length; se++) Ce(V[se], x, R, L);
        o(m.anchor, x, R);
        return;
      }
      if (Z === oi) {
        A(m, x, R);
        return;
      }
      if (L !== 2 && j & 1 && D)
        if (L === 0) D.beforeEnter(G), o(G, x, R), at(() => D.enter(G), k);
        else {
          const { leave: se, delayLeave: re, afterLeave: he } = D,
            be = () => o(G, x, R),
            Ee = () => {
              se(G, () => {
                be(), he && he();
              });
            };
          re ? re(G, be, Ee) : Ee();
        }
      else o(G, x, R);
    },
    ye = (m, x, R, L = !1, k = !1) => {
      const {
        type: G,
        props: Z,
        ref: D,
        children: V,
        dynamicChildren: j,
        shapeFlag: ne,
        patchFlag: se,
        dirs: re,
        cacheIndex: he,
      } = m;
      if (
        (se === -2 && (k = !1),
        D != null && Ys(D, null, R, m, !0),
        he != null && (x.renderCache[he] = void 0),
        ne & 256)
      ) {
        x.ctx.deactivate(m);
        return;
      }
      const be = ne & 1 && re,
        Ee = !Go(m);
      let Se;
      if ((Ee && (Se = Z && Z.onVnodeBeforeUnmount) && At(Se, x, m), ne & 6))
        vt(m.component, R, L);
      else {
        if (ne & 128) {
          m.suspense.unmount(R, L);
          return;
        }
        be && En(m, null, x, "beforeUnmount"),
          ne & 64
            ? m.type.remove(m, x, R, ie, L)
            : j && !j.hasOnce && (G !== He || (se > 0 && se & 64))
            ? ge(j, x, R, !1, !0)
            : ((G === He && se & 384) || (!k && ne & 16)) && ge(V, x, R),
          L && Ke(m);
      }
      ((Ee && (Se = Z && Z.onVnodeUnmounted)) || be) &&
        at(() => {
          Se && At(Se, x, m), be && En(m, null, x, "unmounted");
        }, R);
    },
    Ke = (m) => {
      const { type: x, el: R, anchor: L, transition: k } = m;
      if (x === He) {
        Ve(R, L);
        return;
      }
      if (x === oi) {
        _(m);
        return;
      }
      const G = () => {
        r(R), k && !k.persisted && k.afterLeave && k.afterLeave();
      };
      if (m.shapeFlag & 1 && k && !k.persisted) {
        const { leave: Z, delayLeave: D } = k,
          V = () => Z(R, G);
        D ? D(m.el, G, V) : V();
      } else G();
    },
    Ve = (m, x) => {
      let R;
      for (; m !== x; ) (R = f(m)), r(m), (m = R);
      r(x);
    },
    vt = (m, x, R) => {
      const { bum: L, scope: k, update: G, subTree: Z, um: D, m: V, a: j } = m;
      Xa(V),
        Xa(j),
        L && ds(L),
        k.stop(),
        G && ((G.active = !1), ye(Z, m, x, R)),
        D && at(D, x),
        at(() => {
          m.isUnmounted = !0;
        }, x),
        x &&
          x.pendingBranch &&
          !x.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === x.pendingId &&
          (x.deps--, x.deps === 0 && x.resolve());
    },
    ge = (m, x, R, L = !1, k = !1, G = 0) => {
      for (let Z = G; Z < m.length; Z++) ye(m[Z], x, R, L, k);
    },
    M = (m) => {
      if (m.shapeFlag & 6) return M(m.component.subTree);
      if (m.shapeFlag & 128) return m.suspense.next();
      const x = f(m.anchor || m.el),
        R = x && x[pf];
      return R ? f(R) : x;
    };
  let te = !1;
  const H = (m, x, R) => {
      m == null
        ? x._vnode && ye(x._vnode, null, null, !0)
        : b(x._vnode || null, m, x, null, null, null, R),
        te || ((te = !0), Ba(), Fd(), (te = !1)),
        (x._vnode = m);
    },
    ie = {
      p: b,
      um: ye,
      m: Ce,
      r: Ke,
      mt: q,
      mc: S,
      pc: X,
      pbc: O,
      n: M,
      o: e,
    };
  let xe, Oe;
  return { render: H, hydrate: xe, createApp: Ng(H, xe) };
}
function gs({ type: e, props: t }, n) {
  return (n === "svg" && e === "foreignObject") ||
    (n === "mathml" &&
      e === "annotation-xml" &&
      t &&
      t.encoding &&
      t.encoding.includes("html"))
    ? void 0
    : n;
}
function Tn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function tv(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Vl(e, t, n = !1) {
  const o = e.children,
    r = t.children;
  if (ue(o) && ue(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = dn(r[i])), (l.el = s.el)),
        !n && l.patchFlag !== -2 && Vl(s, l)),
        l.type === $r && (l.el = s.el);
    }
}
function nv(e) {
  const t = e.slice(),
    n = [0];
  let o, r, i, s, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const c = e[o];
    if (c !== 0) {
      if (((r = n[n.length - 1]), e[r] < c)) {
        (t[o] = r), n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        (l = (i + s) >> 1), e[n[l]] < c ? (i = l + 1) : (s = l);
      c < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), (n[i] = o));
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; ) (n[i] = s), (s = t[s]);
  return n;
}
function vf(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : vf(t);
}
function Xa(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const ov = Symbol.for("v-scx"),
  rv = () => me(ov);
function Yn(e, t) {
  return Ul(e, null, t);
}
const jr = {};
function Ne(e, t, n) {
  return Ul(e, t, n);
}
function Ul(
  e,
  t,
  { immediate: n, deep: o, flush: r, once: i, onTrack: s, onTrigger: l } = Le
) {
  if (t && i) {
    const P = t;
    t = (...v) => {
      P(...v), E();
    };
  }
  const a = Ye,
    c = (P) => (o === !0 ? P : pn(P, o === !1 ? 1 : void 0));
  let u,
    d = !1,
    f = !1;
  if (
    (We(e)
      ? ((u = () => e.value), (d = yo(e)))
      : Fn(e)
      ? ((u = () => c(e)), (d = !0))
      : ue(e)
      ? ((f = !0),
        (d = e.some((P) => Fn(P) || yo(P))),
        (u = () =>
          e.map((P) => {
            if (We(P)) return P.value;
            if (Fn(P)) return c(P);
            if (ve(P)) return vn(P, a, 2);
          })))
      : ve(e)
      ? t
        ? (u = () => vn(e, a, 2))
        : (u = () => (p && p(), wt(e, a, 3, [h])))
      : (u = xt),
    t && o)
  ) {
    const P = u;
    u = () => pn(P());
  }
  let p,
    h = (P) => {
      p = A.onStop = () => {
        vn(P, a, 4), (p = A.onStop = void 0);
      };
    },
    b;
  if (ji)
    if (
      ((h = xt),
      t ? n && wt(t, a, 3, [u(), f ? [] : void 0, h]) : u(),
      r === "sync")
    ) {
      const P = rv();
      b = P.__watcherHandles || (P.__watcherHandles = []);
    } else return xt;
  let y = f ? new Array(e.length).fill(jr) : jr;
  const g = () => {
    if (!(!A.active || !A.dirty))
      if (t) {
        const P = A.run();
        (o || d || (f ? P.some((v, S) => bn(v, y[S])) : bn(P, y))) &&
          (p && p(),
          wt(t, a, 3, [P, y === jr ? void 0 : f && y[0] === jr ? [] : y, h]),
          (y = P));
      } else A.run();
  };
  g.allowRecurse = !!t;
  let C;
  r === "sync"
    ? (C = g)
    : r === "post"
    ? (C = () => at(g, a && a.suspense))
    : ((g.pre = !0), a && (g.id = a.uid), (C = () => jl(g)));
  const A = new Ml(u, xt, C),
    _ = md(),
    E = () => {
      A.stop(), _ && Tl(_.effects, A);
    };
  return (
    t
      ? n
        ? g()
        : (y = A.run())
      : r === "post"
      ? at(A.run.bind(A), a && a.suspense)
      : A.run(),
    b && b.push(E),
    E
  );
}
function iv(e, t, n) {
  const o = this.proxy,
    r = je(e) ? (e.includes(".") ? mf(o, e) : () => o[e]) : e.bind(o, o);
  let i;
  ve(t) ? (i = t) : ((i = t.handler), (n = t));
  const s = Er(this),
    l = Ul(r, i.bind(o), n);
  return s(), l;
}
function mf(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++) o = o[n[r]];
    return o;
  };
}
function pn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ie(e) || e.__v_skip || ((n = n || new Set()), n.has(e)))
    return e;
  if ((n.add(e), t--, We(e))) pn(e.value, t, n);
  else if (ue(e)) for (let o = 0; o < e.length; o++) pn(e[o], t, n);
  else if (id(e) || ho(e))
    e.forEach((o) => {
      pn(o, t, n);
    });
  else if (ad(e)) {
    for (const o in e) pn(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && pn(e[o], t, n);
  }
  return e;
}
const sv = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${Tt(t)}Modifiers`] || e[`${Xn(t)}Modifiers`];
function lv(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Le;
  let r = n;
  const i = t.startsWith("update:"),
    s = i && sv(o, t.slice(7));
  s &&
    (s.trim && (r = n.map((u) => (je(u) ? u.trim() : u))),
    s.number && (r = n.map(Hp)));
  let l,
    a = o[(l = us(t))] || o[(l = us(Tt(t)))];
  !a && i && (a = o[(l = us(Xn(t)))]), a && wt(a, e, 6, r);
  const c = o[l + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    (e.emitted[l] = !0), wt(c, e, 6, r);
  }
}
function bf(e, t, n = !1) {
  const o = t.emitsCache,
    r = o.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let s = {},
    l = !1;
  if (!ve(e)) {
    const a = (c) => {
      const u = bf(c, t, !0);
      u && ((l = !0), Xe(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a);
  }
  return !i && !l
    ? (Ie(e) && o.set(e, null), null)
    : (ue(i) ? i.forEach((a) => (s[a] = null)) : Xe(s, i),
      Ie(e) && o.set(e, s),
      s);
}
function Fi(e, t) {
  return !e || !Ai(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      _e(e, t[0].toLowerCase() + t.slice(1)) || _e(e, Xn(t)) || _e(e, t));
}
function vs(e) {
  const {
      type: t,
      vnode: n,
      proxy: o,
      withProxy: r,
      propsOptions: [i],
      slots: s,
      attrs: l,
      emit: a,
      render: c,
      renderCache: u,
      props: d,
      data: f,
      setupState: p,
      ctx: h,
      inheritAttrs: b,
    } = e,
    y = ui(e);
  let g, C;
  try {
    if (n.shapeFlag & 4) {
      const _ = r || o,
        E = _;
      (g = kt(c.call(E, _, u, d, p, f, h))), (C = l);
    } else {
      const _ = t;
      (g = kt(
        _.length > 1 ? _(d, { attrs: l, slots: s, emit: a }) : _(d, null)
      )),
        (C = t.props ? l : av(l));
    }
  } catch (_) {
    (Yo.length = 0), Bi(_, e, 1), (g = ze(Je));
  }
  let A = g;
  if (C && b !== !1) {
    const _ = Object.keys(C),
      { shapeFlag: E } = A;
    _.length &&
      E & 7 &&
      (i && _.some(El) && (C = cv(C, i)), (A = jt(A, C, !1, !0)));
  }
  return (
    n.dirs &&
      ((A = jt(A, null, !1, !0)),
      (A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (A.transition = n.transition),
    (g = A),
    ui(y),
    g
  );
}
const av = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Ai(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  cv = (e, t) => {
    const n = {};
    for (const o in e) (!El(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
    return n;
  };
function uv(e, t, n) {
  const { props: o, children: r, component: i } = e,
    { props: s, children: l, patchFlag: a } = t,
    c = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return o ? Ya(o, s, c) : !!s;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (s[f] !== o[f] && !Fi(c, f)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : o === s
      ? !1
      : o
      ? s
        ? Ya(o, s, c)
        : !0
      : !!s;
  return !1;
}
function Ya(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Fi(n, i)) return !0;
  }
  return !1;
}
function dv({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if ((o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e))
      ((e = t.vnode).el = n), (t = t.parent);
    else break;
  }
}
const fv = (e) => e.__isSuspense;
function hv(e, t) {
  t && t.pendingBranch
    ? ue(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Sg(e);
}
const He = Symbol.for("v-fgt"),
  $r = Symbol.for("v-txt"),
  Je = Symbol.for("v-cmt"),
  oi = Symbol.for("v-stc"),
  Yo = [];
let ht = null;
function dr(e = !1) {
  Yo.push((ht = e ? null : []));
}
function pv() {
  Yo.pop(), (ht = Yo[Yo.length - 1] || null);
}
let fr = 1;
function Za(e) {
  (fr += e), e < 0 && ht && (ht.hasOnce = !0);
}
function yf(e) {
  return (
    (e.dynamicChildren = fr > 0 ? ht || fo : null),
    pv(),
    fr > 0 && ht && ht.push(e),
    e
  );
}
function lE(e, t, n, o, r, i) {
  return yf(fi(e, t, n, o, r, i, !0));
}
function hr(e, t, n, o, r) {
  return yf(ze(e, t, n, o, r, !0));
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const xf = ({ key: e }) => e ?? null,
  ri = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? je(e) || We(e) || ve(e)
        ? { i: qe, r: e, k: t, f: !!n }
        : e
      : null
  );
function fi(
  e,
  t = null,
  n = null,
  o = 0,
  r = null,
  i = e === He ? 0 : 1,
  s = !1,
  l = !1
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xf(t),
    ref: t && ri(t),
    scopeId: Dd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: qe,
  };
  return (
    l
      ? (Gl(a, n), i & 128 && e.normalize(a))
      : n && (a.shapeFlag |= je(n) ? 8 : 16),
    fr > 0 &&
      !s &&
      ht &&
      (a.patchFlag > 0 || i & 6) &&
      a.patchFlag !== 32 &&
      ht.push(a),
    a
  );
}
const ze = gv;
function gv(e, t = null, n = null, o = 0, r = null, i = !1) {
  if (((!e || e === Qd) && (e = Je), pr(e))) {
    const l = jt(e, t, !0);
    return (
      n && Gl(l, n),
      fr > 0 &&
        !i &&
        ht &&
        (l.shapeFlag & 6 ? (ht[ht.indexOf(e)] = l) : ht.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if (($v(e) && (e = e.__vccOpts), t)) {
    t = vv(t);
    let { class: l, style: a } = t;
    l && !je(l) && (t.class = Al(l)),
      Ie(a) && (Rd(a) && !ue(a) && (a = Xe({}, a)), (t.style = Rl(a)));
  }
  const s = je(e) ? 1 : fv(e) ? 128 : Yg(e) ? 64 : Ie(e) ? 4 : ve(e) ? 2 : 0;
  return fi(e, t, n, o, r, s, i, !0);
}
function vv(e) {
  return e ? (Rd(e) || lf(e) ? Xe({}, e) : e) : null;
}
function jt(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: l, transition: a } = e,
    c = t ? Zn(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: c,
      key: c && xf(c),
      ref:
        t && t.ref
          ? n && i
            ? ue(i)
              ? i.concat(ri(t))
              : [i, ri(t)]
            : ri(t)
          : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== He ? (s === -1 ? 16 : s | 16) : s,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && jt(e.ssContent),
      ssFallback: e.ssFallback && jt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return a && o && xo(u, a.clone(u)), u;
}
function gr(e = " ", t = 0) {
  return ze($r, null, e, t);
}
function aE(e, t) {
  const n = ze(oi, null, e);
  return (n.staticCount = t), n;
}
function cE(e = "", t = !1) {
  return t ? (dr(), hr(Je, null, e)) : ze(Je, null, e);
}
function kt(e) {
  return e == null || typeof e == "boolean"
    ? ze(Je)
    : ue(e)
    ? ze(He, null, e.slice())
    : typeof e == "object"
    ? dn(e)
    : ze($r, null, String(e));
}
function dn(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : jt(e);
}
function Gl(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null) t = null;
  else if (ue(t)) n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Gl(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !lf(t)
        ? (t._ctx = qe)
        : r === 3 &&
          qe &&
          (qe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    ve(t)
      ? ((t = { default: t, _ctx: qe }), (n = 32))
      : ((t = String(t)), o & 64 ? ((n = 16), (t = [gr(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Zn(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Al([t.class, o.class]));
      else if (r === "style") t.style = Rl([t.style, o.style]);
      else if (Ai(r)) {
        const i = t[r],
          s = o[r];
        s &&
          i !== s &&
          !(ue(i) && i.includes(s)) &&
          (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function At(e, t, n, o = null) {
  wt(e, t, 7, [n, o]);
}
const mv = of();
let bv = 0;
function yv(e, t, n) {
  const o = e.type,
    r = (t ? t.appContext : e.appContext) || mv,
    i = {
      uid: bv++,
      vnode: e,
      type: o,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new gd(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: cf(o, r),
      emitsOptions: bf(o, r),
      emit: null,
      emitted: null,
      propsDefaults: Le,
      inheritAttrs: o.inheritAttrs,
      ctx: Le,
      data: Le,
      props: Le,
      attrs: Le,
      slots: Le,
      refs: Le,
      setupState: Le,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = t ? t.root : i),
    (i.emit = lv.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let Ye = null;
const Pr = () => Ye || qe;
let hi, Js;
{
  const e = ud(),
    t = (n, o) => {
      let r;
      return (
        (r = e[n]) || (r = e[n] = []),
        r.push(o),
        (i) => {
          r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
        }
      );
    };
  (hi = t("__VUE_INSTANCE_SETTERS__", (n) => (Ye = n))),
    (Js = t("__VUE_SSR_SETTERS__", (n) => (ji = n)));
}
const Er = (e) => {
    const t = Ye;
    return (
      hi(e),
      e.scope.on(),
      () => {
        e.scope.off(), hi(t);
      }
    );
  },
  Ja = () => {
    Ye && Ye.scope.off(), hi(null);
  };
function wf(e) {
  return e.vnode.shapeFlag & 4;
}
let ji = !1;
function xv(e, t = !1, n = !1) {
  t && Js(t);
  const { props: o, children: r } = e.vnode,
    i = wf(e);
  Kg(e, o, i, t), qg(e, r, n);
  const s = i ? wv(e, t) : void 0;
  return t && Js(!1), s;
}
function wv(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, kg));
  const { setup: o } = n;
  if (o) {
    const r = (e.setupContext = o.length > 1 ? Sv(e) : null),
      i = Er(e);
    Sn();
    const s = vn(o, e, 0, [e.props, r]);
    if ((_n(), i(), sd(s))) {
      if ((s.then(Ja, Ja), t))
        return s
          .then((l) => {
            Qa(e, l, t);
          })
          .catch((l) => {
            Bi(l, e, 0);
          });
      e.asyncDep = s;
    } else Qa(e, s, t);
  } else Cf(e, t);
}
function Qa(e, t, n) {
  ve(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ie(t) && (e.setupState = kd(t)),
    Cf(e, n);
}
let ec;
function Cf(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && ec && !o.render) {
      const r = o.template || Nl(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = o,
          c = Xe(Xe({ isCustomElement: i, delimiters: l }, s), a);
        o.render = ec(r, c);
      }
    }
    e.render = o.render || xt;
  }
  {
    const r = Er(e);
    Sn();
    try {
      Bg(e);
    } finally {
      _n(), r();
    }
  }
}
const Cv = {
  get(e, t) {
    return dt(e, "get", ""), e[t];
  },
};
function Sv(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Cv),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Di(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(kd(sr(e.exposed)), {
          get(t, n) {
            if (n in t) return t[n];
            if (n in qo) return qo[n](e);
          },
          has(t, n) {
            return n in t || n in qo;
          },
        }))
    : e.proxy;
}
function _v(e, t = !0) {
  return ve(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function $v(e) {
  return ve(e) && "__vccOpts" in e;
}
const K = (e, t) => pg(e, t, ji);
function w(e, t, n) {
  const o = arguments.length;
  return o === 2
    ? Ie(t) && !ue(t)
      ? pr(t)
        ? ze(e, null, [t])
        : ze(e, t)
      : ze(e, null, t)
    : (o > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : o === 3 && pr(n) && (n = [n]),
      ze(e, t, n));
}
const Pv = "3.4.34";
/**
 * @vue/runtime-dom v3.4.34
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ev = "http://www.w3.org/2000/svg",
  Tv = "http://www.w3.org/1998/Math/MathML",
  Ut = typeof document < "u" ? document : null,
  tc = Ut && Ut.createElement("template"),
  Ov = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, o) => {
      const r =
        t === "svg"
          ? Ut.createElementNS(Ev, e)
          : t === "mathml"
          ? Ut.createElementNS(Tv, e)
          : n
          ? Ut.createElement(e, { is: n })
          : Ut.createElement(e);
      return (
        e === "select" &&
          o &&
          o.multiple != null &&
          r.setAttribute("multiple", o.multiple),
        r
      );
    },
    createText: (e) => Ut.createTextNode(e),
    createComment: (e) => Ut.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ut.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, o, r, i) {
      const s = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          t.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        tc.innerHTML =
          o === "svg"
            ? `<svg>${e}</svg>`
            : o === "mathml"
            ? `<math>${e}</math>`
            : e;
        const l = tc.content;
        if (o === "svg" || o === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, n);
      }
      return [
        s ? s.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  tn = "transition",
  zo = "animation",
  wo = Symbol("_vtc"),
  pt = (e, { slots: t }) => w(Pg, _f(e), t);
pt.displayName = "Transition";
const Sf = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  Rv = (pt.props = Xe({}, Wd, Sf)),
  On = (e, t = []) => {
    ue(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  nc = (e) => (e ? (ue(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function _f(e) {
  const t = {};
  for (const T in e) T in Sf || (t[T] = e[T]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: o,
      duration: r,
      enterFromClass: i = `${n}-enter-from`,
      enterActiveClass: s = `${n}-enter-active`,
      enterToClass: l = `${n}-enter-to`,
      appearFromClass: a = i,
      appearActiveClass: c = s,
      appearToClass: u = l,
      leaveFromClass: d = `${n}-leave-from`,
      leaveActiveClass: f = `${n}-leave-active`,
      leaveToClass: p = `${n}-leave-to`,
    } = e,
    h = Av(r),
    b = h && h[0],
    y = h && h[1],
    {
      onBeforeEnter: g,
      onEnter: C,
      onEnterCancelled: A,
      onLeave: _,
      onLeaveCancelled: E,
      onBeforeAppear: P = g,
      onAppear: v = C,
      onAppearCancelled: S = A,
    } = t,
    $ = (T, W, q) => {
      ln(T, W ? u : l), ln(T, W ? c : s), q && q();
    },
    O = (T, W) => {
      (T._isLeaving = !1), ln(T, d), ln(T, p), ln(T, f), W && W();
    },
    F = (T) => (W, q) => {
      const I = T ? v : C,
        U = () => $(W, T, q);
      On(I, [W, U]),
        oc(() => {
          ln(W, T ? a : i), Vt(W, T ? u : l), nc(I) || rc(W, o, b, U);
        });
    };
  return Xe(t, {
    onBeforeEnter(T) {
      On(g, [T]), Vt(T, i), Vt(T, s);
    },
    onBeforeAppear(T) {
      On(P, [T]), Vt(T, a), Vt(T, c);
    },
    onEnter: F(!1),
    onAppear: F(!0),
    onLeave(T, W) {
      T._isLeaving = !0;
      const q = () => O(T, W);
      Vt(T, d),
        Vt(T, f),
        Pf(),
        oc(() => {
          T._isLeaving && (ln(T, d), Vt(T, p), nc(_) || rc(T, o, y, q));
        }),
        On(_, [T, q]);
    },
    onEnterCancelled(T) {
      $(T, !1), On(A, [T]);
    },
    onAppearCancelled(T) {
      $(T, !0), On(S, [T]);
    },
    onLeaveCancelled(T) {
      O(T), On(E, [T]);
    },
  });
}
function Av(e) {
  if (e == null) return null;
  if (Ie(e)) return [ms(e.enter), ms(e.leave)];
  {
    const t = ms(e);
    return [t, t];
  }
}
function ms(e) {
  return Fp(e);
}
function Vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e[wo] || (e[wo] = new Set())).add(t);
}
function ln(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[wo];
  n && (n.delete(t), n.size || (e[wo] = void 0));
}
function oc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Mv = 0;
function rc(e, t, n, o) {
  const r = (e._endId = ++Mv),
    i = () => {
      r === e._endId && o();
    };
  if (n) return setTimeout(i, n);
  const { type: s, timeout: l, propCount: a } = $f(e, t);
  if (!s) return o();
  const c = s + "end";
  let u = 0;
  const d = () => {
      e.removeEventListener(c, f), i();
    },
    f = (p) => {
      p.target === e && ++u >= a && d();
    };
  setTimeout(() => {
    u < a && d();
  }, l + 1),
    e.addEventListener(c, f);
}
function $f(e, t) {
  const n = window.getComputedStyle(e),
    o = (h) => (n[h] || "").split(", "),
    r = o(`${tn}Delay`),
    i = o(`${tn}Duration`),
    s = ic(r, i),
    l = o(`${zo}Delay`),
    a = o(`${zo}Duration`),
    c = ic(l, a);
  let u = null,
    d = 0,
    f = 0;
  t === tn
    ? s > 0 && ((u = tn), (d = s), (f = i.length))
    : t === zo
    ? c > 0 && ((u = zo), (d = c), (f = a.length))
    : ((d = Math.max(s, c)),
      (u = d > 0 ? (s > c ? tn : zo) : null),
      (f = u ? (u === tn ? i.length : a.length) : 0));
  const p =
    u === tn && /\b(transform|all)(,|$)/.test(o(`${tn}Property`).toString());
  return { type: u, timeout: d, propCount: f, hasTransform: p };
}
function ic(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, o) => sc(n) + sc(e[o])));
}
function sc(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pf() {
  return document.body.offsetHeight;
}
function zv(e, t, n) {
  const o = e[wo];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
const pi = Symbol("_vod"),
  Ef = Symbol("_vsh"),
  Qs = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[pi] = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Io(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: o }) {
      !t != !n &&
        (o
          ? t
            ? (o.beforeEnter(e), Io(e, !0), o.enter(e))
            : o.leave(e, () => {
                Io(e, !1);
              })
          : Io(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Io(e, t);
    },
  };
function Io(e, t) {
  (e.style.display = t ? e[pi] : "none"), (e[Ef] = !t);
}
const Iv = Symbol(""),
  kv = /(^|;)\s*display\s*:/;
function Bv(e, t, n) {
  const o = e.style,
    r = je(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (je(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && ii(o, l, "");
        }
      else for (const s in t) n[s] == null && ii(o, s, "");
    for (const s in n) s === "display" && (i = !0), ii(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[Iv];
      s && (n += ";" + s), (o.cssText = n), (i = kv.test(n));
    }
  } else t && e.removeAttribute("style");
  pi in e && ((e[pi] = i ? o.display : ""), e[Ef] && (o.display = "none"));
}
const lc = /\s*!important$/;
function ii(e, t, n) {
  if (ue(n)) n.forEach((o) => ii(e, t, o));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const o = Lv(e, t);
    lc.test(n)
      ? e.setProperty(Xn(o), n.replace(lc, ""), "important")
      : (e[o] = n);
  }
}
const ac = ["Webkit", "Moz", "ms"],
  bs = {};
function Lv(e, t) {
  const n = bs[t];
  if (n) return n;
  let o = Tt(t);
  if (o !== "filter" && o in e) return (bs[t] = o);
  o = Ii(o);
  for (let r = 0; r < ac.length; r++) {
    const i = ac[r] + o;
    if (i in e) return (bs[t] = i);
  }
  return t;
}
const cc = "http://www.w3.org/1999/xlink";
function uc(e, t, n, o, r, i = Vp(t)) {
  o && t.startsWith("xlink:")
    ? n == null
      ? e.removeAttributeNS(cc, t.slice(6, t.length))
      : e.setAttributeNS(cc, t, n)
    : n == null || (i && !dd(n))
    ? e.removeAttribute(t)
    : e.setAttribute(t, i ? "" : Cn(n) ? String(n) : n);
}
function Hv(e, t, n, o) {
  if (t === "innerHTML" || t === "textContent") {
    if (n == null) return;
    e[t] = n;
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
    const s = r === "OPTION" ? e.getAttribute("value") || "" : e.value,
      l = n == null ? "" : String(n);
    (s !== l || !("_value" in e)) && (e.value = l),
      n == null && e.removeAttribute(t),
      (e._value = n);
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const s = typeof e[t];
    s === "boolean"
      ? (n = dd(n))
      : n == null && s === "string"
      ? ((n = ""), (i = !0))
      : s === "number" && ((n = 0), (i = !0));
  }
  try {
    e[t] = n;
  } catch {}
  i && e.removeAttribute(t);
}
function Fv(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function jv(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const dc = Symbol("_vei");
function Dv(e, t, n, o, r = null) {
  const i = e[dc] || (e[dc] = {}),
    s = i[t];
  if (o && s) s.value = o;
  else {
    const [l, a] = Nv(t);
    if (o) {
      const c = (i[t] = Vv(o, r));
      Fv(e, l, c, a);
    } else s && (jv(e, l, s, a), (i[t] = void 0));
  }
}
const fc = /(?:Once|Passive|Capture)$/;
function Nv(e) {
  let t;
  if (fc.test(e)) {
    t = {};
    let o;
    for (; (o = e.match(fc)); )
      (e = e.slice(0, e.length - o[0].length)), (t[o[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Xn(e.slice(2)), t];
}
let ys = 0;
const Wv = Promise.resolve(),
  Kv = () => ys || (Wv.then(() => (ys = 0)), (ys = Date.now()));
function Vv(e, t) {
  const n = (o) => {
    if (!o._vts) o._vts = Date.now();
    else if (o._vts <= n.attached) return;
    wt(Uv(o, n.value), t, 5, [o]);
  };
  return (n.value = e), (n.attached = Kv()), n;
}
function Uv(e, t) {
  if (ue(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((o) => (r) => !r._stopped && o && o(r))
    );
  } else return t;
}
const hc = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Gv = (e, t, n, o, r, i) => {
    const s = r === "svg";
    t === "class"
      ? zv(e, o, s)
      : t === "style"
      ? Bv(e, n, o)
      : Ai(t)
      ? El(t) || Dv(e, t, n, o, i)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : qv(e, t, o, s)
        )
      ? (Hv(e, t, o),
        !e.tagName.includes("-") &&
          (t === "value" || t === "checked" || t === "selected") &&
          uc(e, t, o, s, i, t !== "value"))
      : (t === "true-value"
          ? (e._trueValue = o)
          : t === "false-value" && (e._falseValue = o),
        uc(e, t, o, s));
  };
function qv(e, t, n, o) {
  if (o)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && hc(t) && ve(n))
    );
  if (
    t === "spellcheck" ||
    t === "draggable" ||
    t === "translate" ||
    t === "form" ||
    (t === "list" && e.tagName === "INPUT") ||
    (t === "type" && e.tagName === "TEXTAREA")
  )
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return hc(t) && je(n) ? !1 : t in e;
}
const Tf = new WeakMap(),
  Of = new WeakMap(),
  gi = Symbol("_moveCb"),
  pc = Symbol("_enterCb"),
  Rf = {
    name: "TransitionGroup",
    props: Xe({}, Rv, { tag: String, moveClass: String }),
    setup(e, { slots: t }) {
      const n = Pr(),
        o = Nd();
      let r, i;
      return (
        Xd(() => {
          if (!r.length) return;
          const s = e.moveClass || `${e.name || "v"}-move`;
          if (!em(r[0].el, n.vnode.el, s)) return;
          r.forEach(Zv), r.forEach(Jv);
          const l = r.filter(Qv);
          Pf(),
            l.forEach((a) => {
              const c = a.el,
                u = c.style;
              Vt(c, s),
                (u.transform = u.webkitTransform = u.transitionDuration = "");
              const d = (c[gi] = (f) => {
                (f && f.target !== c) ||
                  ((!f || /transform$/.test(f.propertyName)) &&
                    (c.removeEventListener("transitionend", d),
                    (c[gi] = null),
                    ln(c, s)));
              });
              c.addEventListener("transitionend", d);
            });
        }),
        () => {
          const s = we(e),
            l = _f(s);
          let a = s.tag || He;
          if (((r = []), i))
            for (let c = 0; c < i.length; c++) {
              const u = i[c];
              u.el &&
                u.el instanceof Element &&
                (r.push(u),
                xo(u, ur(u, l, o, n)),
                Tf.set(u, u.el.getBoundingClientRect()));
            }
          i = t.default ? Dl(t.default()) : [];
          for (let c = 0; c < i.length; c++) {
            const u = i[c];
            u.key != null && xo(u, ur(u, l, o, n));
          }
          return ze(a, null, i);
        }
      );
    },
  },
  Xv = (e) => delete e.mode;
Rf.props;
const Yv = Rf;
function Zv(e) {
  const t = e.el;
  t[gi] && t[gi](), t[pc] && t[pc]();
}
function Jv(e) {
  Of.set(e, e.el.getBoundingClientRect());
}
function Qv(e) {
  const t = Tf.get(e),
    n = Of.get(e),
    o = t.left - n.left,
    r = t.top - n.top;
  if (o || r) {
    const i = e.el.style;
    return (
      (i.transform = i.webkitTransform = `translate(${o}px,${r}px)`),
      (i.transitionDuration = "0s"),
      e
    );
  }
}
function em(e, t, n) {
  const o = e.cloneNode(),
    r = e[wo];
  r &&
    r.forEach((l) => {
      l.split(/\s+/).forEach((a) => a && o.classList.remove(a));
    }),
    n.split(/\s+/).forEach((l) => l && o.classList.add(l)),
    (o.style.display = "none");
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(o);
  const { hasTransform: s } = $f(o);
  return i.removeChild(o), s;
}
const tm = ["ctrl", "shift", "alt", "meta"],
  nm = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => tm.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  om = (e, t) => {
    const n = e._withMods || (e._withMods = {}),
      o = t.join(".");
    return (
      n[o] ||
      (n[o] = (r, ...i) => {
        for (let s = 0; s < t.length; s++) {
          const l = nm[t[s]];
          if (l && l(r, t)) return;
        }
        return e(r, ...i);
      })
    );
  },
  rm = Xe({ patchProp: Gv }, Ov);
let gc;
function im() {
  return gc || (gc = Qg(rm));
}
const sm = (...e) => {
  const t = im().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (o) => {
      const r = am(o);
      if (!r) return;
      const i = t._component;
      !ve(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = "");
      const s = n(r, !1, lm(r));
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        s
      );
    }),
    t
  );
};
function lm(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function am(e) {
  return je(e) ? document.querySelector(e) : e;
}
var cm = !1;
/*!
 * pinia v2.2.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ let Af;
const Ni = (e) => (Af = e),
  Mf = Symbol();
function el(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var Zo;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(Zo || (Zo = {}));
function um() {
  const e = vd(!0),
    t = e.run(() => Q({}));
  let n = [],
    o = [];
  const r = sr({
    install(i) {
      Ni(r),
        (r._a = i),
        i.provide(Mf, r),
        (i.config.globalProperties.$pinia = r),
        o.forEach((s) => n.push(s)),
        (o = []);
    },
    use(i) {
      return !this._a && !cm ? o.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return r;
}
const zf = () => {};
function vc(e, t, n, o = zf) {
  e.push(t);
  const r = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), o());
  };
  return !n && md() && Gp(r), r;
}
function no(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const dm = (e) => e(),
  mc = Symbol(),
  xs = Symbol();
function tl(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((n, o) => e.set(o, n))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const o = t[n],
      r = e[n];
    el(r) && el(o) && e.hasOwnProperty(n) && !We(o) && !Fn(o)
      ? (e[n] = tl(r, o))
      : (e[n] = o);
  }
  return e;
}
const fm = Symbol();
function hm(e) {
  return !el(e) || !e.hasOwnProperty(fm);
}
const { assign: an } = Object;
function pm(e) {
  return !!(We(e) && e.effect);
}
function gm(e, t, n, o) {
  const { state: r, actions: i, getters: s } = t,
    l = n.state.value[e];
  let a;
  function c() {
    l || (n.state.value[e] = r ? r() : {});
    const u = mg(n.state.value[e]);
    return an(
      u,
      i,
      Object.keys(s || {}).reduce(
        (d, f) => (
          (d[f] = sr(
            K(() => {
              Ni(n);
              const p = n._s.get(e);
              return s[f].call(p, p);
            })
          )),
          d
        ),
        {}
      )
    );
  }
  return (a = If(e, c, t, n, o, !0)), a;
}
function If(e, t, n = {}, o, r, i) {
  let s;
  const l = an({ actions: {} }, n),
    a = { deep: !0 };
  let c,
    u,
    d = [],
    f = [],
    p;
  const h = o.state.value[e];
  !i && !h && (o.state.value[e] = {}), Q({});
  let b;
  function y(S) {
    let $;
    (c = u = !1),
      typeof S == "function"
        ? (S(o.state.value[e]),
          ($ = { type: Zo.patchFunction, storeId: e, events: p }))
        : (tl(o.state.value[e], S),
          ($ = { type: Zo.patchObject, payload: S, storeId: e, events: p }));
    const O = (b = Symbol());
    yn().then(() => {
      b === O && (c = !0);
    }),
      (u = !0),
      no(d, $, o.state.value[e]);
  }
  const g = i
    ? function () {
        const { state: $ } = n,
          O = $ ? $() : {};
        this.$patch((F) => {
          an(F, O);
        });
      }
    : zf;
  function C() {
    s.stop(), (d = []), (f = []), o._s.delete(e);
  }
  const A = (S, $ = "") => {
      if (mc in S) return (S[xs] = $), S;
      const O = function () {
        Ni(o);
        const F = Array.from(arguments),
          T = [],
          W = [];
        function q(z) {
          T.push(z);
        }
        function I(z) {
          W.push(z);
        }
        no(f, { args: F, name: O[xs], store: E, after: q, onError: I });
        let U;
        try {
          U = S.apply(this && this.$id === e ? this : E, F);
        } catch (z) {
          throw (no(W, z), z);
        }
        return U instanceof Promise
          ? U.then((z) => (no(T, z), z)).catch(
              (z) => (no(W, z), Promise.reject(z))
            )
          : (no(T, U), U);
      };
      return (O[mc] = !0), (O[xs] = $), O;
    },
    _ = {
      _p: o,
      $id: e,
      $onAction: vc.bind(null, f),
      $patch: y,
      $reset: g,
      $subscribe(S, $ = {}) {
        const O = vc(d, S, $.detached, () => F()),
          F = s.run(() =>
            Ne(
              () => o.state.value[e],
              (T) => {
                ($.flush === "sync" ? u : c) &&
                  S({ storeId: e, type: Zo.direct, events: p }, T);
              },
              an({}, a, $)
            )
          );
        return O;
      },
      $dispose: C,
    },
    E = Xt(_);
  o._s.set(e, E);
  const v = ((o._a && o._a.runWithContext) || dm)(() =>
    o._e.run(() => (s = vd()).run(() => t({ action: A })))
  );
  for (const S in v) {
    const $ = v[S];
    if ((We($) && !pm($)) || Fn($))
      i ||
        (h && hm($) && (We($) ? ($.value = h[S]) : tl($, h[S])),
        (o.state.value[e][S] = $));
    else if (typeof $ == "function") {
      const O = A($, S);
      (v[S] = O), (l.actions[S] = $);
    }
  }
  return (
    an(E, v),
    an(we(E), v),
    Object.defineProperty(E, "$state", {
      get: () => o.state.value[e],
      set: (S) => {
        y(($) => {
          an($, S);
        });
      },
    }),
    o._p.forEach((S) => {
      an(
        E,
        s.run(() => S({ store: E, app: o._a, pinia: o, options: l }))
      );
    }),
    h && i && n.hydrate && n.hydrate(E.$state, h),
    (c = !0),
    (u = !0),
    E
  );
}
function vm(e, t, n) {
  let o, r;
  const i = typeof t == "function";
  (o = e), (r = i ? n : t);
  function s(l, a) {
    const c = Wg();
    return (
      (l = l || (c ? me(Mf, null) : null)),
      l && Ni(l),
      (l = Af),
      l._s.has(o) || (i ? If(o, t, r, l) : gm(o, r, l)),
      l._s.get(o)
    );
  }
  return (s.$id = o), s;
}
function mm(e, t) {
  return Array.isArray(t)
    ? t.reduce(
        (n, o) => (
          (n[o] = function () {
            return e(this.$pinia)[o];
          }),
          n
        ),
        {}
      )
    : Object.keys(t).reduce(
        (n, o) => (
          (n[o] = function () {
            const r = e(this.$pinia),
              i = t[o];
            return typeof i == "function" ? i.call(this, r) : r[i];
          }),
          n
        ),
        {}
      );
}
/*!
 * vue-router v4.4.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const co = typeof document < "u";
function bm(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const $e = Object.assign;
function ws(e, t) {
  const n = {};
  for (const o in t) {
    const r = t[o];
    n[o] = Ot(r) ? r.map(e) : e(r);
  }
  return n;
}
const Jo = () => {},
  Ot = Array.isArray,
  kf = /#/g,
  ym = /&/g,
  xm = /\//g,
  wm = /=/g,
  Cm = /\?/g,
  Bf = /\+/g,
  Sm = /%5B/g,
  _m = /%5D/g,
  Lf = /%5E/g,
  $m = /%60/g,
  Hf = /%7B/g,
  Pm = /%7C/g,
  Ff = /%7D/g,
  Em = /%20/g;
function ql(e) {
  return encodeURI("" + e)
    .replace(Pm, "|")
    .replace(Sm, "[")
    .replace(_m, "]");
}
function Tm(e) {
  return ql(e).replace(Hf, "{").replace(Ff, "}").replace(Lf, "^");
}
function nl(e) {
  return ql(e)
    .replace(Bf, "%2B")
    .replace(Em, "+")
    .replace(kf, "%23")
    .replace(ym, "%26")
    .replace($m, "`")
    .replace(Hf, "{")
    .replace(Ff, "}")
    .replace(Lf, "^");
}
function Om(e) {
  return nl(e).replace(wm, "%3D");
}
function Rm(e) {
  return ql(e).replace(kf, "%23").replace(Cm, "%3F");
}
function Am(e) {
  return e == null ? "" : Rm(e).replace(xm, "%2F");
}
function vr(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
const Mm = /\/$/,
  zm = (e) => e.replace(Mm, "");
function Cs(e, t, n = "/") {
  let o,
    r = {},
    i = "",
    s = "";
  const l = t.indexOf("#");
  let a = t.indexOf("?");
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((o = t.slice(0, a)),
      (i = t.slice(a + 1, l > -1 ? l : t.length)),
      (r = e(i))),
    l > -1 && ((o = o || t.slice(0, l)), (s = t.slice(l, t.length))),
    (o = Lm(o ?? t, n)),
    { fullPath: o + (i && "?") + i + s, path: o, query: r, hash: vr(s) }
  );
}
function Im(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function bc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function km(e, t, n) {
  const o = t.matched.length - 1,
    r = n.matched.length - 1;
  return (
    o > -1 &&
    o === r &&
    Co(t.matched[o], n.matched[r]) &&
    jf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Co(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function jf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!Bm(e[n], t[n])) return !1;
  return !0;
}
function Bm(e, t) {
  return Ot(e) ? yc(e, t) : Ot(t) ? yc(t, e) : e === t;
}
function yc(e, t) {
  return Ot(t)
    ? e.length === t.length && e.every((n, o) => n === t[o])
    : e.length === 1 && e[0] === t;
}
function Lm(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    o = e.split("/"),
    r = o[o.length - 1];
  (r === ".." || r === ".") && o.push("");
  let i = n.length - 1,
    s,
    l;
  for (s = 0; s < o.length; s++)
    if (((l = o[s]), l !== "."))
      if (l === "..") i > 1 && i--;
      else break;
  return n.slice(0, i).join("/") + "/" + o.slice(s).join("/");
}
const nn = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var mr;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(mr || (mr = {}));
var Qo;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Qo || (Qo = {}));
function Hm(e) {
  if (!e)
    if (co) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), zm(e);
}
const Fm = /^[^#]+#/;
function jm(e, t) {
  return e.replace(Fm, "#") + t;
}
function Dm(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0),
  };
}
const Wi = () => ({ left: window.scrollX, top: window.scrollY });
function Nm(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      o = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? o
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    t = Dm(r, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY
      );
}
function xc(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const ol = new Map();
function Wm(e, t) {
  ol.set(e, t);
}
function Km(e) {
  const t = ol.get(e);
  return ol.delete(e), t;
}
let Vm = () => location.protocol + "//" + location.host;
function Df(e, t) {
  const { pathname: n, search: o, hash: r } = t,
    i = e.indexOf("#");
  if (i > -1) {
    let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
      a = r.slice(l);
    return a[0] !== "/" && (a = "/" + a), bc(a, "");
  }
  return bc(n, e) + o + r;
}
function Um(e, t, n, o) {
  let r = [],
    i = [],
    s = null;
  const l = ({ state: f }) => {
    const p = Df(e, location),
      h = n.value,
      b = t.value;
    let y = 0;
    if (f) {
      if (((n.value = p), (t.value = f), s && s === h)) {
        s = null;
        return;
      }
      y = b ? f.position - b.position : 0;
    } else o(p);
    r.forEach((g) => {
      g(n.value, h, {
        delta: y,
        type: mr.pop,
        direction: y ? (y > 0 ? Qo.forward : Qo.back) : Qo.unknown,
      });
    });
  };
  function a() {
    s = n.value;
  }
  function c(f) {
    r.push(f);
    const p = () => {
      const h = r.indexOf(f);
      h > -1 && r.splice(h, 1);
    };
    return i.push(p), p;
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState($e({}, f.state, { scroll: Wi() }), "");
  }
  function d() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener("popstate", l),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", l),
    window.addEventListener("beforeunload", u, { passive: !0 }),
    { pauseListeners: a, listen: c, destroy: d }
  );
}
function wc(e, t, n, o = !1, r = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: r ? Wi() : null,
  };
}
function Gm(e) {
  const { history: t, location: n } = window,
    o = { value: Df(e, n) },
    r = { value: t.state };
  r.value ||
    i(
      o.value,
      {
        back: null,
        current: o.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(a, c, u) {
    const d = e.indexOf("#"),
      f =
        d > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(d)) + a
          : Vm() + e + a;
    try {
      t[u ? "replaceState" : "pushState"](c, "", f), (r.value = c);
    } catch (p) {
      console.error(p), n[u ? "replace" : "assign"](f);
    }
  }
  function s(a, c) {
    const u = $e({}, t.state, wc(r.value.back, a, r.value.forward, !0), c, {
      position: r.value.position,
    });
    i(a, u, !0), (o.value = a);
  }
  function l(a, c) {
    const u = $e({}, r.value, t.state, { forward: a, scroll: Wi() });
    i(u.current, u, !0);
    const d = $e({}, wc(o.value, a, null), { position: u.position + 1 }, c);
    i(a, d, !1), (o.value = a);
  }
  return { location: o, state: r, push: l, replace: s };
}
function qm(e) {
  e = Hm(e);
  const t = Gm(e),
    n = Um(e, t.state, t.location, t.replace);
  function o(i, s = !0) {
    s || n.pauseListeners(), history.go(i);
  }
  const r = $e(
    { location: "", base: e, go: o, createHref: jm.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    r
  );
}
function Xm(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ""),
    e.includes("#") || (e += "#"),
    qm(e)
  );
}
function Ym(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Nf(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Wf = Symbol("");
var Cc;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Cc || (Cc = {}));
function So(e, t) {
  return $e(new Error(), { type: e, [Wf]: !0 }, t);
}
function Wt(e, t) {
  return e instanceof Error && Wf in e && (t == null || !!(e.type & t));
}
const Sc = "[^/]+?",
  Zm = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Jm = /[.+*?^${}()[\]/\\]/g;
function Qm(e, t) {
  const n = $e({}, Zm, t),
    o = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (r += "/");
    for (let d = 0; d < c.length; d++) {
      const f = c[d];
      let p = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (r += "/"), (r += f.value.replace(Jm, "\\$&")), (p += 40);
      else if (f.type === 1) {
        const { value: h, repeatable: b, optional: y, regexp: g } = f;
        i.push({ name: h, repeatable: b, optional: y });
        const C = g || Sc;
        if (C !== Sc) {
          p += 10;
          try {
            new RegExp(`(${C})`);
          } catch (_) {
            throw new Error(
              `Invalid custom RegExp for param "${h}" (${C}): ` + _.message
            );
          }
        }
        let A = b ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
        d || (A = y && c.length < 2 ? `(?:/${A})` : "/" + A),
          y && (A += "?"),
          (r += A),
          (p += 20),
          y && (p += -8),
          b && (p += -20),
          C === ".*" && (p += -50);
      }
      u.push(p);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const c = o.length - 1;
    o[c][o[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const s = new RegExp(r, n.sensitive ? "" : "i");
  function l(c) {
    const u = c.match(s),
      d = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const p = u[f] || "",
        h = i[f - 1];
      d[h.name] = p && h.repeatable ? p.split("/") : p;
    }
    return d;
  }
  function a(c) {
    let u = "",
      d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), (d = !1);
      for (const p of f)
        if (p.type === 0) u += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: b, optional: y } = p,
            g = h in c ? c[h] : "";
          if (Ot(g) && !b)
            throw new Error(
              `Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`
            );
          const C = Ot(g) ? g.join("/") : g;
          if (!C)
            if (y)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (d = !0));
            else throw new Error(`Missing required param "${h}"`);
          u += C;
        }
    }
    return u || "/";
  }
  return { re: s, score: o, keys: i, parse: l, stringify: a };
}
function eb(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o) return o;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 80
      ? 1
      : -1
    : 0;
}
function Kf(e, t) {
  let n = 0;
  const o = e.score,
    r = t.score;
  for (; n < o.length && n < r.length; ) {
    const i = eb(o[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - o.length) === 1) {
    if (_c(o)) return 1;
    if (_c(r)) return -1;
  }
  return r.length - o.length;
}
function _c(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const tb = { type: 0, value: "" },
  nb = /[a-zA-Z0-9_]/;
function ob(e) {
  if (!e) return [[]];
  if (e === "/") return [[tb]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(p) {
    throw new Error(`ERR (${n})/"${c}": ${p}`);
  }
  let n = 0,
    o = n;
  const r = [];
  let i;
  function s() {
    i && r.push(i), (i = []);
  }
  let l = 0,
    a,
    c = "",
    u = "";
  function d() {
    c &&
      (n === 0
        ? i.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (a === "*" || a === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: a === "*" || a === "+",
            optional: a === "*" || a === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function f() {
    c += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === "\\" && n !== 2)) {
      (o = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        a === "/" ? (c && d(), s()) : a === ":" ? (d(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = o);
        break;
      case 1:
        a === "("
          ? (n = 2)
          : nb.test(a)
          ? f()
          : (d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--);
        break;
      case 2:
        a === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + a)
            : (n = 3)
          : (u += a);
        break;
      case 3:
        d(), (n = 0), a !== "*" && a !== "?" && a !== "+" && l--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), s(), r;
}
function rb(e, t, n) {
  const o = Qm(ob(e.path), n),
    r = $e(o, { record: e, parent: t, children: [], alias: [] });
  return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r;
}
function ib(e, t) {
  const n = [],
    o = new Map();
  t = Ec({ strict: !1, end: !0, sensitive: !1 }, t);
  function r(d) {
    return o.get(d);
  }
  function i(d, f, p) {
    const h = !p,
      b = sb(d);
    b.aliasOf = p && p.record;
    const y = Ec(t, d),
      g = [b];
    if ("alias" in d) {
      const _ = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const E of _)
        g.push(
          $e({}, b, {
            components: p ? p.record.components : b.components,
            path: E,
            aliasOf: p ? p.record : b,
          })
        );
    }
    let C, A;
    for (const _ of g) {
      const { path: E } = _;
      if (f && E[0] !== "/") {
        const P = f.record.path,
          v = P[P.length - 1] === "/" ? "" : "/";
        _.path = f.record.path + (E && v + E);
      }
      if (
        ((C = rb(_, f, y)),
        p
          ? p.alias.push(C)
          : ((A = A || C),
            A !== C && A.alias.push(C),
            h && d.name && !Pc(C) && s(d.name)),
        Vf(C) && a(C),
        b.children)
      ) {
        const P = b.children;
        for (let v = 0; v < P.length; v++) i(P[v], C, p && p.children[v]);
      }
      p = p || C;
    }
    return A
      ? () => {
          s(A);
        }
      : Jo;
  }
  function s(d) {
    if (Nf(d)) {
      const f = o.get(d);
      f &&
        (o.delete(d),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(s),
        f.alias.forEach(s));
    } else {
      const f = n.indexOf(d);
      f > -1 &&
        (n.splice(f, 1),
        d.record.name && o.delete(d.record.name),
        d.children.forEach(s),
        d.alias.forEach(s));
    }
  }
  function l() {
    return n;
  }
  function a(d) {
    const f = cb(d, n);
    n.splice(f, 0, d), d.record.name && !Pc(d) && o.set(d.record.name, d);
  }
  function c(d, f) {
    let p,
      h = {},
      b,
      y;
    if ("name" in d && d.name) {
      if (((p = o.get(d.name)), !p)) throw So(1, { location: d });
      (y = p.record.name),
        (h = $e(
          $c(
            f.params,
            p.keys
              .filter((A) => !A.optional)
              .concat(p.parent ? p.parent.keys.filter((A) => A.optional) : [])
              .map((A) => A.name)
          ),
          d.params &&
            $c(
              d.params,
              p.keys.map((A) => A.name)
            )
        )),
        (b = p.stringify(h));
    } else if (d.path != null)
      (b = d.path),
        (p = n.find((A) => A.re.test(b))),
        p && ((h = p.parse(b)), (y = p.record.name));
    else {
      if (((p = f.name ? o.get(f.name) : n.find((A) => A.re.test(f.path))), !p))
        throw So(1, { location: d, currentLocation: f });
      (y = p.record.name),
        (h = $e({}, f.params, d.params)),
        (b = p.stringify(h));
    }
    const g = [];
    let C = p;
    for (; C; ) g.unshift(C.record), (C = C.parent);
    return { name: y, path: b, params: h, matched: g, meta: ab(g) };
  }
  e.forEach((d) => i(d));
  function u() {
    (n.length = 0), o.clear();
  }
  return {
    addRoute: i,
    resolve: c,
    removeRoute: s,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: r,
  };
}
function $c(e, t) {
  const n = {};
  for (const o of t) o in e && (n[o] = e[o]);
  return n;
}
function sb(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: lb(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function lb(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Pc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ab(e) {
  return e.reduce((t, n) => $e(t, n.meta), {});
}
function Ec(e, t) {
  const n = {};
  for (const o in e) n[o] = o in t ? t[o] : e[o];
  return n;
}
function cb(e, t) {
  let n = 0,
    o = t.length;
  for (; n !== o; ) {
    const i = (n + o) >> 1;
    Kf(e, t[i]) < 0 ? (o = i) : (n = i + 1);
  }
  const r = ub(e);
  return r && (o = t.lastIndexOf(r, o - 1)), o;
}
function ub(e) {
  let t = e;
  for (; (t = t.parent); ) if (Vf(t) && Kf(e, t) === 0) return t;
}
function Vf({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function db(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let r = 0; r < o.length; ++r) {
    const i = o[r].replace(Bf, " "),
      s = i.indexOf("="),
      l = vr(s < 0 ? i : i.slice(0, s)),
      a = s < 0 ? null : vr(i.slice(s + 1));
    if (l in t) {
      let c = t[l];
      Ot(c) || (c = t[l] = [c]), c.push(a);
    } else t[l] = a;
  }
  return t;
}
function Tc(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (((n = Om(n)), o == null)) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ot(o) ? o.map((i) => i && nl(i)) : [o && nl(o)]).forEach((i) => {
      i !== void 0 &&
        ((t += (t.length ? "&" : "") + n), i != null && (t += "=" + i));
    });
  }
  return t;
}
function fb(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 &&
      (t[n] = Ot(o)
        ? o.map((r) => (r == null ? null : "" + r))
        : o == null
        ? o
        : "" + o);
  }
  return t;
}
const hb = Symbol(""),
  Oc = Symbol(""),
  Xl = Symbol(""),
  Uf = Symbol(""),
  rl = Symbol("");
function ko() {
  let e = [];
  function t(o) {
    return (
      e.push(o),
      () => {
        const r = e.indexOf(o);
        r > -1 && e.splice(r, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: n };
}
function fn(e, t, n, o, r, i = (s) => s()) {
  const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
  return () =>
    new Promise((l, a) => {
      const c = (f) => {
          f === !1
            ? a(So(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : Ym(f)
            ? a(So(2, { from: t, to: f }))
            : (s &&
                o.enterCallbacks[r] === s &&
                typeof f == "function" &&
                s.push(f),
              l());
        },
        u = i(() => e.call(o && o.instances[r], t, n, c));
      let d = Promise.resolve(u);
      e.length < 3 && (d = d.then(c)), d.catch((f) => a(f));
    });
}
function Ss(e, t, n, o, r = (i) => i()) {
  const i = [];
  for (const s of e)
    for (const l in s.components) {
      let a = s.components[l];
      if (!(t !== "beforeRouteEnter" && !s.instances[l]))
        if (pb(a)) {
          const u = (a.__vccOpts || a)[t];
          u && i.push(fn(u, n, o, s, l, r));
        } else {
          let c = a();
          i.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${l}" at "${s.path}"`)
                );
              const d = bm(u) ? u.default : u;
              s.components[l] = d;
              const p = (d.__vccOpts || d)[t];
              return p && fn(p, n, o, s, l, r)();
            })
          );
        }
    }
  return i;
}
function pb(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Rc(e) {
  const t = me(Xl),
    n = me(Uf),
    o = K(() => {
      const a = po(e.to);
      return t.resolve(a);
    }),
    r = K(() => {
      const { matched: a } = o.value,
        { length: c } = a,
        u = a[c - 1],
        d = n.matched;
      if (!u || !d.length) return -1;
      const f = d.findIndex(Co.bind(null, u));
      if (f > -1) return f;
      const p = Ac(a[c - 2]);
      return c > 1 && Ac(u) === p && d[d.length - 1].path !== p
        ? d.findIndex(Co.bind(null, a[c - 2]))
        : f;
    }),
    i = K(() => r.value > -1 && bb(n.params, o.value.params)),
    s = K(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        jf(n.params, o.value.params)
    );
  function l(a = {}) {
    return mb(a)
      ? t[po(e.replace) ? "replace" : "push"](po(e.to)).catch(Jo)
      : Promise.resolve();
  }
  return {
    route: o,
    href: K(() => o.value.href),
    isActive: i,
    isExactActive: s,
    navigate: l,
  };
}
const gb = pe({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Rc,
    setup(e, { slots: t }) {
      const n = Xt(Rc(e)),
        { options: o } = me(Xl),
        r = K(() => ({
          [Mc(e.activeClass, o.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Mc(
            e.exactActiveClass,
            o.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = t.default && t.default(n);
        return e.custom
          ? i
          : w(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            );
      };
    },
  }),
  vb = gb;
function mb(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function bb(e, t) {
  for (const n in t) {
    const o = t[n],
      r = e[n];
    if (typeof o == "string") {
      if (o !== r) return !1;
    } else if (!Ot(r) || r.length !== o.length || o.some((i, s) => i !== r[s]))
      return !1;
  }
  return !0;
}
function Ac(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Mc = (e, t, n) => e ?? t ?? n,
  yb = pe({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const o = me(rl),
        r = K(() => e.route || o.value),
        i = me(Oc, 0),
        s = K(() => {
          let c = po(i);
          const { matched: u } = r.value;
          let d;
          for (; (d = u[c]) && !d.components; ) c++;
          return c;
        }),
        l = K(() => r.value.matched[s.value]);
      Pe(
        Oc,
        K(() => s.value + 1)
      ),
        Pe(hb, l),
        Pe(rl, r);
      const a = Q();
      return (
        Ne(
          () => [a.value, l.value, e.name],
          ([c, u, d], [f, p, h]) => {
            u &&
              ((u.instances[d] = c),
              p &&
                p !== u &&
                c &&
                c === f &&
                (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards),
                u.updateGuards.size || (u.updateGuards = p.updateGuards))),
              c &&
                u &&
                (!p || !Co(u, p) || !f) &&
                (u.enterCallbacks[d] || []).forEach((b) => b(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = r.value,
            u = e.name,
            d = l.value,
            f = d && d.components[u];
          if (!f) return zc(n.default, { Component: f, route: c });
          const p = d.props[u],
            h = p
              ? p === !0
                ? c.params
                : typeof p == "function"
                ? p(c)
                : p
              : null,
            y = w(
              f,
              $e({}, h, t, {
                onVnodeUnmounted: (g) => {
                  g.component.isUnmounted && (d.instances[u] = null);
                },
                ref: a,
              })
            );
          return zc(n.default, { Component: y, route: c }) || y;
        }
      );
    },
  });
function zc(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const xb = yb;
function wb(e) {
  const t = ib(e.routes, e),
    n = e.parseQuery || db,
    o = e.stringifyQuery || Tc,
    r = e.history,
    i = ko(),
    s = ko(),
    l = ko(),
    a = zd(nn);
  let c = nn;
  co &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = ws.bind(null, (M) => "" + M),
    d = ws.bind(null, Am),
    f = ws.bind(null, vr);
  function p(M, te) {
    let H, ie;
    return (
      Nf(M) ? ((H = t.getRecordMatcher(M)), (ie = te)) : (ie = M),
      t.addRoute(ie, H)
    );
  }
  function h(M) {
    const te = t.getRecordMatcher(M);
    te && t.removeRoute(te);
  }
  function b() {
    return t.getRoutes().map((M) => M.record);
  }
  function y(M) {
    return !!t.getRecordMatcher(M);
  }
  function g(M, te) {
    if (((te = $e({}, te || a.value)), typeof M == "string")) {
      const x = Cs(n, M, te.path),
        R = t.resolve({ path: x.path }, te),
        L = r.createHref(x.fullPath);
      return $e(x, R, {
        params: f(R.params),
        hash: vr(x.hash),
        redirectedFrom: void 0,
        href: L,
      });
    }
    let H;
    if (M.path != null) H = $e({}, M, { path: Cs(n, M.path, te.path).path });
    else {
      const x = $e({}, M.params);
      for (const R in x) x[R] == null && delete x[R];
      (H = $e({}, M, { params: d(x) })), (te.params = d(te.params));
    }
    const ie = t.resolve(H, te),
      xe = M.hash || "";
    ie.params = u(f(ie.params));
    const Oe = Im(o, $e({}, M, { hash: Tm(xe), path: ie.path })),
      m = r.createHref(Oe);
    return $e(
      { fullPath: Oe, hash: xe, query: o === Tc ? fb(M.query) : M.query || {} },
      ie,
      { redirectedFrom: void 0, href: m }
    );
  }
  function C(M) {
    return typeof M == "string" ? Cs(n, M, a.value.path) : $e({}, M);
  }
  function A(M, te) {
    if (c !== M) return So(8, { from: te, to: M });
  }
  function _(M) {
    return v(M);
  }
  function E(M) {
    return _($e(C(M), { replace: !0 }));
  }
  function P(M) {
    const te = M.matched[M.matched.length - 1];
    if (te && te.redirect) {
      const { redirect: H } = te;
      let ie = typeof H == "function" ? H(M) : H;
      return (
        typeof ie == "string" &&
          ((ie =
            ie.includes("?") || ie.includes("#") ? (ie = C(ie)) : { path: ie }),
          (ie.params = {})),
        $e(
          {
            query: M.query,
            hash: M.hash,
            params: ie.path != null ? {} : M.params,
          },
          ie
        )
      );
    }
  }
  function v(M, te) {
    const H = (c = g(M)),
      ie = a.value,
      xe = M.state,
      Oe = M.force,
      m = M.replace === !0,
      x = P(H);
    if (x)
      return v(
        $e(C(x), {
          state: typeof x == "object" ? $e({}, xe, x.state) : xe,
          force: Oe,
          replace: m,
        }),
        te || H
      );
    const R = H;
    R.redirectedFrom = te;
    let L;
    return (
      !Oe &&
        km(o, ie, H) &&
        ((L = So(16, { to: R, from: ie })), Ce(ie, ie, !0, !1)),
      (L ? Promise.resolve(L) : O(R, ie))
        .catch((k) => (Wt(k) ? (Wt(k, 2) ? k : ce(k)) : X(k, R, ie)))
        .then((k) => {
          if (k) {
            if (Wt(k, 2))
              return v(
                $e({ replace: m }, C(k.to), {
                  state: typeof k.to == "object" ? $e({}, xe, k.to.state) : xe,
                  force: Oe,
                }),
                te || R
              );
          } else k = T(R, ie, !0, m, xe);
          return F(R, ie, k), k;
        })
    );
  }
  function S(M, te) {
    const H = A(M, te);
    return H ? Promise.reject(H) : Promise.resolve();
  }
  function $(M) {
    const te = Ve.values().next().value;
    return te && typeof te.runWithContext == "function"
      ? te.runWithContext(M)
      : M();
  }
  function O(M, te) {
    let H;
    const [ie, xe, Oe] = Cb(M, te);
    H = Ss(ie.reverse(), "beforeRouteLeave", M, te);
    for (const x of ie)
      x.leaveGuards.forEach((R) => {
        H.push(fn(R, M, te));
      });
    const m = S.bind(null, M, te);
    return (
      H.push(m),
      ge(H)
        .then(() => {
          H = [];
          for (const x of i.list()) H.push(fn(x, M, te));
          return H.push(m), ge(H);
        })
        .then(() => {
          H = Ss(xe, "beforeRouteUpdate", M, te);
          for (const x of xe)
            x.updateGuards.forEach((R) => {
              H.push(fn(R, M, te));
            });
          return H.push(m), ge(H);
        })
        .then(() => {
          H = [];
          for (const x of Oe)
            if (x.beforeEnter)
              if (Ot(x.beforeEnter))
                for (const R of x.beforeEnter) H.push(fn(R, M, te));
              else H.push(fn(x.beforeEnter, M, te));
          return H.push(m), ge(H);
        })
        .then(
          () => (
            M.matched.forEach((x) => (x.enterCallbacks = {})),
            (H = Ss(Oe, "beforeRouteEnter", M, te, $)),
            H.push(m),
            ge(H)
          )
        )
        .then(() => {
          H = [];
          for (const x of s.list()) H.push(fn(x, M, te));
          return H.push(m), ge(H);
        })
        .catch((x) => (Wt(x, 8) ? x : Promise.reject(x)))
    );
  }
  function F(M, te, H) {
    l.list().forEach((ie) => $(() => ie(M, te, H)));
  }
  function T(M, te, H, ie, xe) {
    const Oe = A(M, te);
    if (Oe) return Oe;
    const m = te === nn,
      x = co ? history.state : {};
    H &&
      (ie || m
        ? r.replace(M.fullPath, $e({ scroll: m && x && x.scroll }, xe))
        : r.push(M.fullPath, xe)),
      (a.value = M),
      Ce(M, te, H, m),
      ce();
  }
  let W;
  function q() {
    W ||
      (W = r.listen((M, te, H) => {
        if (!vt.listening) return;
        const ie = g(M),
          xe = P(ie);
        if (xe) {
          v($e(xe, { replace: !0 }), ie).catch(Jo);
          return;
        }
        c = ie;
        const Oe = a.value;
        co && Wm(xc(Oe.fullPath, H.delta), Wi()),
          O(ie, Oe)
            .catch((m) =>
              Wt(m, 12)
                ? m
                : Wt(m, 2)
                ? (v(m.to, ie)
                    .then((x) => {
                      Wt(x, 20) &&
                        !H.delta &&
                        H.type === mr.pop &&
                        r.go(-1, !1);
                    })
                    .catch(Jo),
                  Promise.reject())
                : (H.delta && r.go(-H.delta, !1), X(m, ie, Oe))
            )
            .then((m) => {
              (m = m || T(ie, Oe, !1)),
                m &&
                  (H.delta && !Wt(m, 8)
                    ? r.go(-H.delta, !1)
                    : H.type === mr.pop && Wt(m, 20) && r.go(-1, !1)),
                F(ie, Oe, m);
            })
            .catch(Jo);
      }));
  }
  let I = ko(),
    U = ko(),
    z;
  function X(M, te, H) {
    ce(M);
    const ie = U.list();
    return (
      ie.length ? ie.forEach((xe) => xe(M, te, H)) : console.error(M),
      Promise.reject(M)
    );
  }
  function de() {
    return z && a.value !== nn
      ? Promise.resolve()
      : new Promise((M, te) => {
          I.add([M, te]);
        });
  }
  function ce(M) {
    return (
      z ||
        ((z = !M),
        q(),
        I.list().forEach(([te, H]) => (M ? H(M) : te())),
        I.reset()),
      M
    );
  }
  function Ce(M, te, H, ie) {
    const { scrollBehavior: xe } = e;
    if (!co || !xe) return Promise.resolve();
    const Oe =
      (!H && Km(xc(M.fullPath, 0))) ||
      ((ie || !H) && history.state && history.state.scroll) ||
      null;
    return yn()
      .then(() => xe(M, te, Oe))
      .then((m) => m && Nm(m))
      .catch((m) => X(m, M, te));
  }
  const ye = (M) => r.go(M);
  let Ke;
  const Ve = new Set(),
    vt = {
      currentRoute: a,
      listening: !0,
      addRoute: p,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: y,
      getRoutes: b,
      resolve: g,
      options: e,
      push: _,
      replace: E,
      go: ye,
      back: () => ye(-1),
      forward: () => ye(1),
      beforeEach: i.add,
      beforeResolve: s.add,
      afterEach: l.add,
      onError: U.add,
      isReady: de,
      install(M) {
        const te = this;
        M.component("RouterLink", vb),
          M.component("RouterView", xb),
          (M.config.globalProperties.$router = te),
          Object.defineProperty(M.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => po(a),
          }),
          co &&
            !Ke &&
            a.value === nn &&
            ((Ke = !0), _(r.location).catch((xe) => {}));
        const H = {};
        for (const xe in nn)
          Object.defineProperty(H, xe, {
            get: () => a.value[xe],
            enumerable: !0,
          });
        M.provide(Xl, te), M.provide(Uf, Od(H)), M.provide(rl, a);
        const ie = M.unmount;
        Ve.add(M),
          (M.unmount = function () {
            Ve.delete(M),
              Ve.size < 1 &&
                ((c = nn),
                W && W(),
                (W = null),
                (a.value = nn),
                (Ke = !1),
                (z = !1)),
              ie();
          });
      },
    };
  function ge(M) {
    return M.reduce((te, H) => te.then(() => $(H)), Promise.resolve());
  }
  return vt;
}
function Cb(e, t) {
  const n = [],
    o = [],
    r = [],
    i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const l = t.matched[s];
    l && (e.matched.find((c) => Co(c, l)) ? o.push(l) : n.push(l));
    const a = e.matched[s];
    a && (t.matched.find((c) => Co(c, a)) || r.push(a));
  }
  return [n, o, r];
}
const Sb = "modulepreload",
  _b = function (e) {
    return "/" + e;
  },
  Ic = {},
  kc = function (t, n, o) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        s =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      r = Promise.all(
        n.map((l) => {
          if (((l = _b(l)), l in Ic)) return;
          Ic[l] = !0;
          const a = l.endsWith(".css"),
            c = a ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = a ? "stylesheet" : Sb),
            a || ((u.as = "script"), (u.crossOrigin = "")),
            (u.href = l),
            s && u.setAttribute("nonce", s),
            document.head.appendChild(u),
            a)
          )
            return new Promise((d, f) => {
              u.addEventListener("load", d),
                u.addEventListener("error", () =>
                  f(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return r
      .then(() => t())
      .catch((i) => {
        const s = new Event("vite:preloadError", { cancelable: !0 });
        if (((s.payload = i), window.dispatchEvent(s), !s.defaultPrevented))
          throw i;
      });
  },
  $b = [
    {
      path: "/index",
      component: () =>
        kc(() => import("./index-CqFhiEtL.js"), __vite__mapDeps([0, 1])),
    },
    {
      path: "/helloworld",
      component: () => kc(() => import("./index-DObC8IMK.js"), []),
    },
  ],
  Gf = wb({ routes: $b, history: Xm() });
Gf.beforeEach((e, t) => {
  if (!e.matched.length) return "/index";
  if (e.fullPath === t.fullPath) return !1;
});
const qf = vm("app", { state: () => ({}), actions: {} });
window.mapState = (e) => mm(qf, e);
const Bo = (e) => `${e}`.padStart(2, "0");
function Pb(e, t = "yyyy-MM-dd hh:mm:ss") {
  if (typeof t != "string" || !e) return "--";
  let n = +e;
  if (isNaN(n)) {
    let c = +new Date(e);
    if (
      (isNaN(c) && typeof e == "string"
        ? (e = +new Date(e.replace(/-/g, "/")))
        : (e = c),
      isNaN(e))
    )
      return "--";
    e = new Date(e);
  } else if (n > 0) e = new Date(n > 1e10 ? n : n * 1e3);
  else return "--";
  let o = e.getFullYear(),
    r = Bo(e.getMonth() + 1),
    i = Bo(e.getDate()),
    s = Bo(e.getHours()),
    l = Bo(e.getMinutes()),
    a = Bo(e.getSeconds());
  return t
    .replace(/yyyy/g, o)
    .replace(/MM/g, r)
    .replace(/dd/g, i)
    .replace(/hh/g, s)
    .replace(/mm/g, l)
    .replace(/ss/g, a);
}
let vi = [];
const Xf = new WeakMap();
function Eb() {
  vi.forEach((e) => e(...Xf.get(e))), (vi = []);
}
function Tb(e, ...t) {
  Xf.set(e, t),
    !vi.includes(e) && vi.push(e) === 1 && requestAnimationFrame(Eb);
}
function Bc(e, t) {
  let { target: n } = e;
  for (; n; ) {
    if (n.dataset && n.dataset[t] !== void 0) return !0;
    n = n.parentElement;
  }
  return !1;
}
function br(e) {
  return e.composedPath()[0] || null;
}
function Lc(e) {
  return typeof e == "string"
    ? e.endsWith("px")
      ? Number(e.slice(0, e.length - 2))
      : Number(e)
    : e;
}
function Ob(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Ki(e, t) {
  const n = e.trim().split(/\s+/g),
    o = { top: n[0] };
  switch (n.length) {
    case 1:
      (o.right = n[0]), (o.bottom = n[0]), (o.left = n[0]);
      break;
    case 2:
      (o.right = n[1]), (o.left = n[1]), (o.bottom = n[0]);
      break;
    case 3:
      (o.right = n[1]), (o.bottom = n[2]), (o.left = n[1]);
      break;
    case 4:
      (o.right = n[1]), (o.bottom = n[2]), (o.left = n[3]);
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return o;
}
const Hc = {
    black: "#000",
    silver: "#C0C0C0",
    gray: "#808080",
    white: "#FFF",
    maroon: "#800000",
    red: "#F00",
    purple: "#800080",
    fuchsia: "#F0F",
    green: "#008000",
    lime: "#0F0",
    olive: "#808000",
    yellow: "#FF0",
    navy: "#000080",
    blue: "#00F",
    teal: "#008080",
    aqua: "#0FF",
    transparent: "#0000",
  },
  Eo = "^\\s*",
  To = "\\s*$",
  In = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",
  kn = "([0-9A-Fa-f])",
  Bn = "([0-9A-Fa-f]{2})",
  Rb = new RegExp(`${Eo}rgb\\s*\\(${In},${In},${In}\\)${To}`),
  Ab = new RegExp(`${Eo}rgba\\s*\\(${In},${In},${In},${In}\\)${To}`),
  Mb = new RegExp(`${Eo}#${kn}${kn}${kn}${To}`),
  zb = new RegExp(`${Eo}#${Bn}${Bn}${Bn}${To}`),
  Ib = new RegExp(`${Eo}#${kn}${kn}${kn}${kn}${To}`),
  kb = new RegExp(`${Eo}#${Bn}${Bn}${Bn}${Bn}${To}`);
function lt(e) {
  return parseInt(e, 16);
}
function Kn(e) {
  try {
    let t;
    if ((t = zb.exec(e))) return [lt(t[1]), lt(t[2]), lt(t[3]), 1];
    if ((t = Rb.exec(e))) return [tt(t[1]), tt(t[5]), tt(t[9]), 1];
    if ((t = Ab.exec(e))) return [tt(t[1]), tt(t[5]), tt(t[9]), er(t[13])];
    if ((t = Mb.exec(e)))
      return [lt(t[1] + t[1]), lt(t[2] + t[2]), lt(t[3] + t[3]), 1];
    if ((t = kb.exec(e)))
      return [lt(t[1]), lt(t[2]), lt(t[3]), er(lt(t[4]) / 255)];
    if ((t = Ib.exec(e)))
      return [
        lt(t[1] + t[1]),
        lt(t[2] + t[2]),
        lt(t[3] + t[3]),
        er(lt(t[4] + t[4]) / 255),
      ];
    if (e in Hc) return Kn(Hc[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Bb(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function il(e, t, n, o) {
  return `rgba(${tt(e)}, ${tt(t)}, ${tt(n)}, ${Bb(o)})`;
}
function _s(e, t, n, o, r) {
  return tt((e * t * (1 - o) + n * o) / r);
}
function _o(e, t) {
  Array.isArray(e) || (e = Kn(e)), Array.isArray(t) || (t = Kn(t));
  const n = e[3],
    o = t[3],
    r = er(n + o - n * o);
  return il(
    _s(e[0], n, t[0], o, r),
    _s(e[1], n, t[1], o, r),
    _s(e[2], n, t[2], o, r),
    r
  );
}
function Wo(e, t) {
  const [n, o, r, i = 1] = Array.isArray(e) ? e : Kn(e);
  return t.alpha ? il(n, o, r, t.alpha) : il(n, o, r, i);
}
function Dr(e, t) {
  const [n, o, r, i = 1] = Array.isArray(e) ? e : Kn(e),
    { lightness: s = 1, alpha: l = 1 } = t;
  return Lb([n * s, o * s, r * s, i * l]);
}
function er(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function tt(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Lb(e) {
  const [t, n, o] = e;
  return 3 in e
    ? `rgba(${tt(t)}, ${tt(n)}, ${tt(o)}, ${er(e[3])})`
    : `rgba(${tt(t)}, ${tt(n)}, ${tt(o)}, 1)`;
}
function Vi(e = 8) {
  return Math.random()
    .toString(16)
    .slice(2, 2 + e);
}
function Vn(e, t = [], n) {
  const o = {};
  return (
    t.forEach((r) => {
      o[r] = e[r];
    }),
    Object.assign(o, n)
  );
}
function Yl(e, t = [], n) {
  const o = {};
  return (
    Object.getOwnPropertyNames(e).forEach((i) => {
      t.includes(i) || (o[i] = e[i]);
    }),
    Object.assign(o, n)
  );
}
function sl(e, t = !0, n = []) {
  return (
    e.forEach((o) => {
      if (o !== null) {
        if (typeof o != "object") {
          (typeof o == "string" || typeof o == "number") &&
            n.push(gr(String(o)));
          return;
        }
        if (Array.isArray(o)) {
          sl(o, t, n);
          return;
        }
        if (o.type === He) {
          if (o.children === null) return;
          Array.isArray(o.children) && sl(o.children, t, n);
        } else {
          if (o.type === Je && t) return;
          n.push(o);
        }
      }
    }),
    n
  );
}
function ut(e, ...t) {
  if (Array.isArray(e)) e.forEach((n) => ut(n, ...t));
  else return e(...t);
}
function Ui(e) {
  return Object.keys(e);
}
function Ze(e, ...t) {
  return typeof e == "function"
    ? e(...t)
    : typeof e == "string"
    ? gr(e)
    : typeof e == "number"
    ? gr(String(e))
    : null;
}
function $o(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Zl(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ll(e, t = "default", n = void 0) {
  const o = e[t];
  if (!o) return $o("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const r = sl(o(n));
  return r.length === 1
    ? r[0]
    : ($o("getFirstSlotVNode", `slot[${t}] should have exactly one child`),
      null);
}
function Hb(e) {
  return (t) => {
    t ? (e.value = t.$el) : (e.value = null);
  };
}
function Bt(e) {
  return e.some((t) =>
    pr(t) ? !(t.type === Je || (t.type === He && !Bt(t.children))) : !0
  )
    ? e
    : null;
}
function Fc(e, t) {
  return (e && Bt(e())) || t();
}
function ct(e, t) {
  const n = e && Bt(e());
  return t(n || null);
}
function al(e) {
  return !(e && Bt(e()));
}
const jc = pe({
    render() {
      var e, t;
      return (t = (e = this.$slots).default) === null || t === void 0
        ? void 0
        : t.call(e);
    },
  }),
  Fb = /^(\d|\.)+$/,
  Dc = /(\d|\.)+/;
function si(e, { c: t = 1, offset: n = 0, attachPx: o = !0 } = {}) {
  if (typeof e == "number") {
    const r = (e + n) * t;
    return r === 0 ? "0" : `${r}px`;
  } else if (typeof e == "string")
    if (Fb.test(e)) {
      const r = (Number(e) + n) * t;
      return o ? (r === 0 ? "0" : `${r}px`) : `${r}`;
    } else {
      const r = Dc.exec(e);
      return r ? e.replace(Dc, String((Number(r[0]) + n) * t)) : e;
    }
  return e;
}
function Nc(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function jb(e) {
  const { left: t, right: n, top: o, bottom: r } = Ki(e);
  return `${o} ${n} ${r} ${t}`;
}
function Db(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n) e[n] === "&" && ++t;
  return t;
}
const Yf = /\s*,(?![^(]*\))\s*/g,
  Nb = /\s+/g;
function Wb(e, t) {
  const n = [];
  return (
    t.split(Yf).forEach((o) => {
      let r = Db(o);
      if (r) {
        if (r === 1) {
          e.forEach((s) => {
            n.push(o.replace("&", s));
          });
          return;
        }
      } else {
        e.forEach((s) => {
          n.push((s && s + " ") + o);
        });
        return;
      }
      let i = [o];
      for (; r--; ) {
        const s = [];
        i.forEach((l) => {
          e.forEach((a) => {
            s.push(l.replace("&", a));
          });
        }),
          (i = s);
      }
      i.forEach((s) => n.push(s));
    }),
    n
  );
}
function Kb(e, t) {
  const n = [];
  return (
    t.split(Yf).forEach((o) => {
      e.forEach((r) => {
        n.push((r && r + " ") + o);
      });
    }),
    n
  );
}
function Vb(e) {
  let t = [""];
  return (
    e.forEach((n) => {
      (n = n && n.trim()),
        n && (n.includes("&") ? (t = Wb(t, n)) : (t = Kb(t, n)));
    }),
    t.join(", ").replace(Nb, " ")
  );
}
function Wc(e) {
  if (!e) return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Gi(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ub(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Nr(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Gb = /[A-Z]/g;
function Zf(e) {
  return e.replace(Gb, (t) => "-" + t.toLowerCase());
}
function qb(e, t = "  ") {
  return typeof e == "object" && e !== null
    ? ` {
` +
        Object.entries(e).map((n) => t + `  ${Zf(n[0])}: ${n[1]};`).join(`
`) +
        `
` +
        t +
        "}"
    : `: ${e};`;
}
function Xb(e, t, n) {
  return typeof e == "function" ? e({ context: t.context, props: n }) : e;
}
function Kc(e, t, n, o) {
  if (!t) return "";
  const r = Xb(t, n, o);
  if (!r) return "";
  if (typeof r == "string")
    return `${e} {
${r}
}`;
  const i = Object.keys(r);
  if (i.length === 0)
    return n.config.keepEmptyBlock
      ? e +
          ` {
}`
      : "";
  const s = e ? [e + " {"] : [];
  return (
    i.forEach((l) => {
      const a = r[l];
      if (l === "raw") {
        s.push(
          `
` +
            a +
            `
`
        );
        return;
      }
      (l = Zf(l)), a != null && s.push(`  ${l}${qb(a)}`);
    }),
    e && s.push("}"),
    s.join(`
`)
  );
}
function cl(e, t, n) {
  e &&
    e.forEach((o) => {
      if (Array.isArray(o)) cl(o, t, n);
      else if (typeof o == "function") {
        const r = o(t);
        Array.isArray(r) ? cl(r, t, n) : r && n(r);
      } else o && n(o);
    });
}
function Jf(e, t, n, o, r) {
  const i = e.$;
  let s = "";
  if (!i || typeof i == "string") Nr(i) ? (s = i) : t.push(i);
  else if (typeof i == "function") {
    const c = i({ context: o.context, props: r });
    Nr(c) ? (s = c) : t.push(c);
  } else if ((i.before && i.before(o.context), !i.$ || typeof i.$ == "string"))
    Nr(i.$) ? (s = i.$) : t.push(i.$);
  else if (i.$) {
    const c = i.$({ context: o.context, props: r });
    Nr(c) ? (s = c) : t.push(c);
  }
  const l = Vb(t),
    a = Kc(l, e.props, o, r);
  s ? n.push(`${s} {`) : a.length && n.push(a),
    e.children &&
      cl(e.children, { context: o.context, props: r }, (c) => {
        if (typeof c == "string") {
          const u = Kc(l, { raw: c }, o, r);
          n.push(u);
        } else Jf(c, t, n, o, r);
      }),
    t.pop(),
    s && n.push("}"),
    i && i.after && i.after(o.context);
}
function Yb(e, t, n) {
  const o = [];
  return (
    Jf(e, [], o, t, n),
    o.join(`

`)
  );
}
function yr(e) {
  for (var t = 0, n, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    (n =
      (e.charCodeAt(o) & 255) |
      ((e.charCodeAt(++o) & 255) << 8) |
      ((e.charCodeAt(++o) & 255) << 16) |
      ((e.charCodeAt(++o) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(o) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
typeof window < "u" && (window.__cssrContext = {});
function Zb(e, t, n, o) {
  const { els: r } = t;
  if (n === void 0) r.forEach(Wc), (t.els = []);
  else {
    const i = Gi(n, o);
    i && r.includes(i) && (Wc(i), (t.els = r.filter((s) => s !== i)));
  }
}
function Vc(e, t) {
  e.push(t);
}
function Jb(e, t, n, o, r, i, s, l, a) {
  let c;
  if ((n === void 0 && ((c = t.render(o)), (n = yr(c))), a)) {
    a.adapter(n, c ?? t.render(o));
    return;
  }
  l === void 0 && (l = document.head);
  const u = Gi(n, l);
  if (u !== null && !i) return u;
  const d = u ?? Ub(n);
  if ((c === void 0 && (c = t.render(o)), (d.textContent = c), u !== null))
    return u;
  if (s) {
    const f = l.querySelector(`meta[name="${s}"]`);
    if (f) return l.insertBefore(d, f), Vc(t.els, d), d;
  }
  return (
    r ? l.insertBefore(d, l.querySelector("style, link")) : l.appendChild(d),
    Vc(t.els, d),
    d
  );
}
function Qb(e) {
  return Yb(this, this.instance, e);
}
function ey(e = {}) {
  const {
    id: t,
    ssr: n,
    props: o,
    head: r = !1,
    force: i = !1,
    anchorMetaName: s,
    parent: l,
  } = e;
  return Jb(this.instance, this, t, o, r, i, s, l, n);
}
function ty(e = {}) {
  const { id: t, parent: n } = e;
  Zb(this.instance, this, t, n);
}
const Wr = function (e, t, n, o) {
    return {
      instance: e,
      $: t,
      props: n,
      children: o,
      els: [],
      render: Qb,
      mount: ey,
      unmount: ty,
    };
  },
  ny = function (e, t, n, o) {
    return Array.isArray(t)
      ? Wr(e, { $: null }, null, t)
      : Array.isArray(n)
      ? Wr(e, t, null, n)
      : Array.isArray(o)
      ? Wr(e, t, n, o)
      : Wr(e, t, n, null);
  };
function Qf(e = {}) {
  const t = {
    c: (...n) => ny(t, ...n),
    use: (n, ...o) => n.install(t, ...o),
    find: Gi,
    context: {},
    config: e,
  };
  return t;
}
function oy(e, t) {
  if (e === void 0) return !1;
  if (t) {
    const {
      context: { ids: n },
    } = t;
    return n.has(e);
  }
  return Gi(e) !== null;
}
function ry(e) {
  let t = ".",
    n = "__",
    o = "--",
    r;
  if (e) {
    let h = e.blockPrefix;
    h && (t = h),
      (h = e.elementPrefix),
      h && (n = h),
      (h = e.modifierPrefix),
      h && (o = h);
  }
  const i = {
    install(h) {
      r = h.c;
      const b = h.context;
      (b.bem = {}), (b.bem.b = null), (b.bem.els = null);
    },
  };
  function s(h) {
    let b, y;
    return {
      before(g) {
        (b = g.bem.b), (y = g.bem.els), (g.bem.els = null);
      },
      after(g) {
        (g.bem.b = b), (g.bem.els = y);
      },
      $({ context: g, props: C }) {
        return (
          (h = typeof h == "string" ? h : h({ context: g, props: C })),
          (g.bem.b = h),
          `${(C == null ? void 0 : C.bPrefix) || t}${g.bem.b}`
        );
      },
    };
  }
  function l(h) {
    let b;
    return {
      before(y) {
        b = y.bem.els;
      },
      after(y) {
        y.bem.els = b;
      },
      $({ context: y, props: g }) {
        return (
          (h = typeof h == "string" ? h : h({ context: y, props: g })),
          (y.bem.els = h.split(",").map((C) => C.trim())),
          y.bem.els
            .map(
              (C) =>
                `${(g == null ? void 0 : g.bPrefix) || t}${y.bem.b}${n}${C}`
            )
            .join(", ")
        );
      },
    };
  }
  function a(h) {
    return {
      $({ context: b, props: y }) {
        h = typeof h == "string" ? h : h({ context: b, props: y });
        const g = h.split(",").map((_) => _.trim());
        function C(_) {
          return g
            .map(
              (E) =>
                `&${(y == null ? void 0 : y.bPrefix) || t}${b.bem.b}${
                  _ !== void 0 ? `${n}${_}` : ""
                }${o}${E}`
            )
            .join(", ");
        }
        const A = b.bem.els;
        return A !== null ? C(A[0]) : C();
      },
    };
  }
  function c(h) {
    return {
      $({ context: b, props: y }) {
        h = typeof h == "string" ? h : h({ context: b, props: y });
        const g = b.bem.els;
        return `&:not(${(y == null ? void 0 : y.bPrefix) || t}${b.bem.b}${
          g !== null && g.length > 0 ? `${n}${g[0]}` : ""
        }${o}${h})`;
      },
    };
  }
  return (
    Object.assign(i, {
      cB: (...h) => r(s(h[0]), h[1], h[2]),
      cE: (...h) => r(l(h[0]), h[1], h[2]),
      cM: (...h) => r(a(h[0]), h[1], h[2]),
      cNotM: (...h) => r(c(h[0]), h[1], h[2]),
    }),
    i
  );
}
const iy = "n",
  xr = `.${iy}-`,
  sy = "__",
  ly = "--",
  eh = Qf(),
  th = ry({ blockPrefix: xr, elementPrefix: sy, modifierPrefix: ly });
eh.use(th);
const { c: B, find: uE } = eh,
  { cB: Y, cE: ee, cM: J, cNotM: mn } = th;
function nh(e) {
  return B(
    ({ props: { bPrefix: t } }) => `${t || xr}modal, ${t || xr}drawer`,
    [e]
  );
}
function ay(e) {
  return B(({ props: { bPrefix: t } }) => `${t || xr}popover`, [e]);
}
function oh(e) {
  return B(({ props: { bPrefix: t } }) => `&${t || xr}modal`, e);
}
const cy = (...e) => B(">", [Y(...e)]);
function le(e, t) {
  return (
    e + (t === "default" ? "" : t.replace(/^[a-z]/, (n) => n.toUpperCase()))
  );
}
let $s;
function uy() {
  return (
    $s === void 0 &&
      ($s =
        navigator.userAgent.includes("Node.js") ||
        navigator.userAgent.includes("jsdom")),
    $s
  );
}
const Tr = typeof document < "u" && typeof window < "u",
  dy = new WeakSet();
function fy(e) {
  return !dy.has(e);
}
function hy(e, t, n) {
  const o = Q(e.value);
  let r = null;
  return (
    Ne(e, (i) => {
      r !== null && window.clearTimeout(r),
        i === !0
          ? n && !n.value
            ? (o.value = !0)
            : (r = window.setTimeout(() => {
                o.value = !0;
              }, t))
          : (o.value = !1);
    }),
    o
  );
}
function py(e) {
  const t = Q(!!e.value);
  if (t.value) return Ft(t);
  const n = Ne(e, (o) => {
    o && ((t.value = !0), n());
  });
  return Ft(t);
}
function Ct(e) {
  const t = K(e),
    n = Q(t.value);
  return (
    Ne(t, (o) => {
      n.value = o;
    }),
    typeof e == "function"
      ? n
      : {
          __v_isRef: !0,
          get value() {
            return n.value;
          },
          set value(o) {
            e.set(o);
          },
        }
  );
}
function Jl() {
  return Pr() !== null;
}
const Ql = typeof window < "u";
let mo, tr;
const gy = () => {
  var e, t;
  (mo = Ql
    ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) ===
        null || t === void 0
      ? void 0
      : t.ready
    : void 0),
    (tr = !1),
    mo !== void 0
      ? mo.then(() => {
          tr = !0;
        })
      : (tr = !0);
};
gy();
function vy(e) {
  if (tr) return;
  let t = !1;
  _t(() => {
    tr ||
      mo == null ||
      mo.then(() => {
        t || e();
      });
  }),
    Qe(() => {
      t = !0;
    });
}
function li(e) {
  return e.composedPath()[0];
}
const my = { mousemoveoutside: new WeakMap(), clickoutside: new WeakMap() };
function by(e, t, n) {
  if (e === "mousemoveoutside") {
    const o = (r) => {
      t.contains(li(r)) || n(r);
    };
    return { mousemove: o, touchstart: o };
  } else if (e === "clickoutside") {
    let o = !1;
    const r = (s) => {
        o = !t.contains(li(s));
      },
      i = (s) => {
        o && (t.contains(li(s)) || n(s));
      };
    return { mousedown: r, mouseup: i, touchstart: r, touchend: i };
  }
  return (
    console.error(
      `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
    ),
    {}
  );
}
function rh(e, t, n) {
  const o = my[e];
  let r = o.get(t);
  r === void 0 && o.set(t, (r = new WeakMap()));
  let i = r.get(n);
  return i === void 0 && r.set(n, (i = by(e, t, n))), i;
}
function yy(e, t, n, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = rh(e, t, n);
    return (
      Object.keys(r).forEach((i) => {
        Fe(i, document, r[i], o);
      }),
      !0
    );
  }
  return !1;
}
function xy(e, t, n, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = rh(e, t, n);
    return (
      Object.keys(r).forEach((i) => {
        Re(i, document, r[i], o);
      }),
      !0
    );
  }
  return !1;
}
function wy() {
  if (typeof window > "u") return { on: () => {}, off: () => {} };
  const e = new WeakMap(),
    t = new WeakMap();
  function n() {
    e.set(this, !0);
  }
  function o() {
    e.set(this, !0), t.set(this, !0);
  }
  function r(v, S, $) {
    const O = v[S];
    return (
      (v[S] = function () {
        return $.apply(v, arguments), O.apply(v, arguments);
      }),
      v
    );
  }
  function i(v, S) {
    v[S] = Event.prototype[S];
  }
  const s = new WeakMap(),
    l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function a() {
    var v;
    return (v = s.get(this)) !== null && v !== void 0 ? v : null;
  }
  function c(v, S) {
    l !== void 0 &&
      Object.defineProperty(v, "currentTarget", {
        configurable: !0,
        enumerable: !0,
        get: S ?? l.get,
      });
  }
  const u = { bubble: {}, capture: {} },
    d = {};
  function f() {
    const v = function (S) {
      const { type: $, eventPhase: O, bubbles: F } = S,
        T = li(S);
      if (O === 2) return;
      const W = O === 1 ? "capture" : "bubble";
      let q = T;
      const I = [];
      for (; q === null && (q = window), I.push(q), q !== window; )
        q = q.parentNode || null;
      const U = u.capture[$],
        z = u.bubble[$];
      if (
        (r(S, "stopPropagation", n),
        r(S, "stopImmediatePropagation", o),
        c(S, a),
        W === "capture")
      ) {
        if (U === void 0) return;
        for (let X = I.length - 1; X >= 0 && !e.has(S); --X) {
          const de = I[X],
            ce = U.get(de);
          if (ce !== void 0) {
            s.set(S, de);
            for (const Ce of ce) {
              if (t.has(S)) break;
              Ce(S);
            }
          }
          if (X === 0 && !F && z !== void 0) {
            const Ce = z.get(de);
            if (Ce !== void 0)
              for (const ye of Ce) {
                if (t.has(S)) break;
                ye(S);
              }
          }
        }
      } else if (W === "bubble") {
        if (z === void 0) return;
        for (let X = 0; X < I.length && !e.has(S); ++X) {
          const de = I[X],
            ce = z.get(de);
          if (ce !== void 0) {
            s.set(S, de);
            for (const Ce of ce) {
              if (t.has(S)) break;
              Ce(S);
            }
          }
        }
      }
      i(S, "stopPropagation"), i(S, "stopImmediatePropagation"), c(S);
    };
    return (v.displayName = "evtdUnifiedHandler"), v;
  }
  function p() {
    const v = function (S) {
      const { type: $, eventPhase: O } = S;
      if (O !== 2) return;
      const F = d[$];
      F !== void 0 && F.forEach((T) => T(S));
    };
    return (v.displayName = "evtdUnifiedWindowEventHandler"), v;
  }
  const h = f(),
    b = p();
  function y(v, S) {
    const $ = u[v];
    return (
      $[S] === void 0 &&
        (($[S] = new Map()), window.addEventListener(S, h, v === "capture")),
      $[S]
    );
  }
  function g(v) {
    return (
      d[v] === void 0 && ((d[v] = new Set()), window.addEventListener(v, b)),
      d[v]
    );
  }
  function C(v, S) {
    let $ = v.get(S);
    return $ === void 0 && v.set(S, ($ = new Set())), $;
  }
  function A(v, S, $, O) {
    const F = u[S][$];
    if (F !== void 0) {
      const T = F.get(v);
      if (T !== void 0 && T.has(O)) return !0;
    }
    return !1;
  }
  function _(v, S) {
    const $ = d[v];
    return !!($ !== void 0 && $.has(S));
  }
  function E(v, S, $, O) {
    let F;
    if (
      (typeof O == "object" && O.once === !0
        ? (F = (U) => {
            P(v, S, F, O), $(U);
          })
        : (F = $),
      yy(v, S, F, O))
    )
      return;
    const W =
        O === !0 || (typeof O == "object" && O.capture === !0)
          ? "capture"
          : "bubble",
      q = y(W, v),
      I = C(q, S);
    if ((I.has(F) || I.add(F), S === window)) {
      const U = g(v);
      U.has(F) || U.add(F);
    }
  }
  function P(v, S, $, O) {
    if (xy(v, S, $, O)) return;
    const T = O === !0 || (typeof O == "object" && O.capture === !0),
      W = T ? "capture" : "bubble",
      q = y(W, v),
      I = C(q, S);
    if (S === window && !A(S, T ? "bubble" : "capture", v, $) && _(v, $)) {
      const z = d[v];
      z.delete($),
        z.size === 0 && (window.removeEventListener(v, b), (d[v] = void 0));
    }
    I.has($) && I.delete($),
      I.size === 0 && q.delete(S),
      q.size === 0 &&
        (window.removeEventListener(v, h, W === "capture"), (u[W][v] = void 0));
  }
  return { on: E, off: P };
}
const { on: Fe, off: Re } = wy(),
  Ko = Q(null);
function Uc(e) {
  if (e.clientX > 0 || e.clientY > 0) Ko.value = { x: e.clientX, y: e.clientY };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const {
        left: n,
        top: o,
        width: r,
        height: i,
      } = t.getBoundingClientRect();
      n > 0 || o > 0
        ? (Ko.value = { x: n + r / 2, y: o + i / 2 })
        : (Ko.value = { x: 0, y: 0 });
    } else Ko.value = null;
  }
}
let Kr = 0,
  Gc = !0;
function ih() {
  if (!Ql) return Ft(Q(null));
  Kr === 0 && Fe("click", document, Uc, !0);
  const e = () => {
    Kr += 1;
  };
  return (
    Gc && (Gc = Jl())
      ? ($n(e),
        Qe(() => {
          (Kr -= 1), Kr === 0 && Re("click", document, Uc, !0);
        }))
      : e(),
    Ft(Ko)
  );
}
const Cy = Q(void 0);
let Vr = 0;
function qc() {
  Cy.value = Date.now();
}
let Xc = !0;
function sh(e) {
  if (!Ql) return Ft(Q(!1));
  const t = Q(!1);
  let n = null;
  function o() {
    n !== null && window.clearTimeout(n);
  }
  function r() {
    o(),
      (t.value = !0),
      (n = window.setTimeout(() => {
        t.value = !1;
      }, e));
  }
  Vr === 0 && Fe("click", window, qc, !0);
  const i = () => {
    (Vr += 1), Fe("click", window, r, !0);
  };
  return (
    Xc && (Xc = Jl())
      ? ($n(i),
        Qe(() => {
          (Vr -= 1),
            Vr === 0 && Re("click", window, qc, !0),
            Re("click", window, r, !0),
            o();
        }))
      : i(),
    Ft(t)
  );
}
function lh(e, t) {
  return (
    Ne(e, (n) => {
      n !== void 0 && (t.value = n);
    }),
    K(() => (e.value === void 0 ? t.value : e.value))
  );
}
function qi() {
  const e = Q(!1);
  return (
    _t(() => {
      e.value = !0;
    }),
    Ft(e)
  );
}
function ah(e, t) {
  return K(() => {
    for (const n of t) if (e[n] !== void 0) return e[n];
    return e[t[t.length - 1]];
  });
}
const Sy =
  (typeof window > "u"
    ? !1
    : /iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
  !window.MSStream;
function _y() {
  return Sy;
}
function $y(e = {}, t) {
  const n = Xt({ ctrl: !1, command: !1, win: !1, shift: !1, tab: !1 }),
    { keydown: o, keyup: r } = e,
    i = (a) => {
      switch (a.key) {
        case "Control":
          n.ctrl = !0;
          break;
        case "Meta":
          (n.command = !0), (n.win = !0);
          break;
        case "Shift":
          n.shift = !0;
          break;
        case "Tab":
          n.tab = !0;
          break;
      }
      o !== void 0 &&
        Object.keys(o).forEach((c) => {
          if (c !== a.key) return;
          const u = o[c];
          if (typeof u == "function") u(a);
          else {
            const { stop: d = !1, prevent: f = !1 } = u;
            d && a.stopPropagation(), f && a.preventDefault(), u.handler(a);
          }
        });
    },
    s = (a) => {
      switch (a.key) {
        case "Control":
          n.ctrl = !1;
          break;
        case "Meta":
          (n.command = !1), (n.win = !1);
          break;
        case "Shift":
          n.shift = !1;
          break;
        case "Tab":
          n.tab = !1;
          break;
      }
      r !== void 0 &&
        Object.keys(r).forEach((c) => {
          if (c !== a.key) return;
          const u = r[c];
          if (typeof u == "function") u(a);
          else {
            const { stop: d = !1, prevent: f = !1 } = u;
            d && a.stopPropagation(), f && a.preventDefault(), u.handler(a);
          }
        });
    },
    l = () => {
      (t === void 0 || t.value) &&
        (Fe("keydown", document, i), Fe("keyup", document, s)),
        t !== void 0 &&
          Ne(t, (a) => {
            a
              ? (Fe("keydown", document, i), Fe("keyup", document, s))
              : (Re("keydown", document, i), Re("keyup", document, s));
          });
    };
  return (
    Jl()
      ? ($n(l),
        Qe(() => {
          (t === void 0 || t.value) &&
            (Re("keydown", document, i), Re("keyup", document, s));
        }))
      : l(),
    Ft(n)
  );
}
const Py = "n-internal-select-menu-body",
  Xi = "n-modal-body",
  Ey = "n-modal-provider",
  ch = "n-modal",
  Yi = "n-drawer-body",
  Or = "n-popover-body",
  uh = "__disabled__";
function Po(e) {
  const t = me(Xi, null),
    n = me(Yi, null),
    o = me(Or, null),
    r = me(Py, null),
    i = Q();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const s = () => {
      i.value = document.fullscreenElement;
    };
    _t(() => {
      Fe("fullscreenchange", document, s);
    }),
      Qe(() => {
        Re("fullscreenchange", document, s);
      });
  }
  return Ct(() => {
    var s;
    const { to: l } = e;
    return l !== void 0
      ? l === !1
        ? uh
        : l === !0
        ? i.value || "body"
        : l
      : t != null && t.value
      ? (s = t.value.$el) !== null && s !== void 0
        ? s
        : t.value
      : n != null && n.value
      ? n.value
      : o != null && o.value
      ? o.value
      : r != null && r.value
      ? r.value
      : l ?? (i.value || "body");
  });
}
Po.tdkey = uh;
Po.propTo = { type: [String, Object, Boolean], default: void 0 };
function ul(e, t, n = "default") {
  const o = t[n];
  if (o === void 0) throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return o();
}
function dl(e, t = !0, n = []) {
  return (
    e.forEach((o) => {
      if (o !== null) {
        if (typeof o != "object") {
          (typeof o == "string" || typeof o == "number") &&
            n.push(gr(String(o)));
          return;
        }
        if (Array.isArray(o)) {
          dl(o, t, n);
          return;
        }
        if (o.type === He) {
          if (o.children === null) return;
          Array.isArray(o.children) && dl(o.children, t, n);
        } else o.type !== Je && n.push(o);
      }
    }),
    n
  );
}
function Yc(e, t, n = "default") {
  const o = t[n];
  if (o === void 0) throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const r = dl(o());
  if (r.length === 1) return r[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let on = null;
function dh() {
  if (
    on === null &&
    ((on = document.getElementById("v-binder-view-measurer")), on === null)
  ) {
    (on = document.createElement("div")), (on.id = "v-binder-view-measurer");
    const { style: e } = on;
    (e.position = "fixed"),
      (e.left = "0"),
      (e.right = "0"),
      (e.top = "0"),
      (e.bottom = "0"),
      (e.pointerEvents = "none"),
      (e.visibility = "hidden"),
      document.body.appendChild(on);
  }
  return on.getBoundingClientRect();
}
function Ty(e, t) {
  const n = dh();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t,
  };
}
function Ps(e) {
  const t = e.getBoundingClientRect(),
    n = dh();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height,
  };
}
function Oy(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function fh(e) {
  if (e === null) return null;
  const t = Oy(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: o, overflowY: r } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + r + o)) return t;
  }
  return fh(t);
}
const hh = pe({
    name: "Binder",
    props: {
      syncTargetWithParent: Boolean,
      syncTarget: { type: Boolean, default: !0 },
    },
    setup(e) {
      var t;
      Pe("VBinder", (t = Pr()) === null || t === void 0 ? void 0 : t.proxy);
      const n = me("VBinder", null),
        o = Q(null),
        r = (g) => {
          (o.value = g), n && e.syncTargetWithParent && n.setTargetRef(g);
        };
      let i = [];
      const s = () => {
          let g = o.value;
          for (; (g = fh(g)), g !== null; ) i.push(g);
          for (const C of i) Fe("scroll", C, d, !0);
        },
        l = () => {
          for (const g of i) Re("scroll", g, d, !0);
          i = [];
        },
        a = new Set(),
        c = (g) => {
          a.size === 0 && s(), a.has(g) || a.add(g);
        },
        u = (g) => {
          a.has(g) && a.delete(g), a.size === 0 && l();
        },
        d = () => {
          Tb(f);
        },
        f = () => {
          a.forEach((g) => g());
        },
        p = new Set(),
        h = (g) => {
          p.size === 0 && Fe("resize", window, y), p.has(g) || p.add(g);
        },
        b = (g) => {
          p.has(g) && p.delete(g), p.size === 0 && Re("resize", window, y);
        },
        y = () => {
          p.forEach((g) => g());
        };
      return (
        Qe(() => {
          Re("resize", window, y), l();
        }),
        {
          targetRef: o,
          setTargetRef: r,
          addScrollListener: c,
          removeScrollListener: u,
          addResizeListener: h,
          removeResizeListener: b,
        }
      );
    },
    render() {
      return ul("binder", this.$slots);
    },
  }),
  ph = pe({
    name: "Target",
    setup() {
      const { setTargetRef: e, syncTarget: t } = me("VBinder");
      return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
    },
    render() {
      const { syncTarget: e, setTargetDirective: t } = this;
      return e
        ? Wn(Yc("follower", this.$slots), [[t]])
        : Yc("follower", this.$slots);
    },
  }),
  oo = "@@mmoContext",
  Ry = {
    mounted(e, { value: t }) {
      (e[oo] = { handler: void 0 }),
        typeof t == "function" &&
          ((e[oo].handler = t), Fe("mousemoveoutside", e, t));
    },
    updated(e, { value: t }) {
      const n = e[oo];
      typeof t == "function"
        ? n.handler
          ? n.handler !== t &&
            (Re("mousemoveoutside", e, n.handler),
            (n.handler = t),
            Fe("mousemoveoutside", e, t))
          : ((e[oo].handler = t), Fe("mousemoveoutside", e, t))
        : n.handler &&
          (Re("mousemoveoutside", e, n.handler), (n.handler = void 0));
    },
    unmounted(e) {
      const { handler: t } = e[oo];
      t && Re("mousemoveoutside", e, t), (e[oo].handler = void 0);
    },
  },
  ro = "@@coContext",
  fl = {
    mounted(e, { value: t, modifiers: n }) {
      (e[ro] = { handler: void 0 }),
        typeof t == "function" &&
          ((e[ro].handler = t),
          Fe("clickoutside", e, t, { capture: n.capture }));
    },
    updated(e, { value: t, modifiers: n }) {
      const o = e[ro];
      typeof t == "function"
        ? o.handler
          ? o.handler !== t &&
            (Re("clickoutside", e, o.handler, { capture: n.capture }),
            (o.handler = t),
            Fe("clickoutside", e, t, { capture: n.capture }))
          : ((e[ro].handler = t),
            Fe("clickoutside", e, t, { capture: n.capture }))
        : o.handler &&
          (Re("clickoutside", e, o.handler, { capture: n.capture }),
          (o.handler = void 0));
    },
    unmounted(e, { modifiers: t }) {
      const { handler: n } = e[ro];
      n && Re("clickoutside", e, n, { capture: t.capture }),
        (e[ro].handler = void 0);
    },
  };
function Ay(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class My {
  constructor() {
    (this.elementZIndex = new Map()), (this.nextZIndex = 2e3);
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(t, n) {
    const { elementZIndex: o } = this;
    if (n !== void 0) {
      (t.style.zIndex = `${n}`), o.delete(t);
      return;
    }
    const { nextZIndex: r } = this;
    (o.has(t) && o.get(t) + 1 === this.nextZIndex) ||
      ((t.style.zIndex = `${r}`),
      o.set(t, r),
      (this.nextZIndex = r + 1),
      this.squashState());
  }
  unregister(t, n) {
    const { elementZIndex: o } = this;
    o.has(t)
      ? o.delete(t)
      : n === void 0 &&
        Ay(
          "z-index-manager/unregister-element",
          "Element not found when unregistering."
        ),
      this.squashState();
  }
  squashState() {
    const { elementCount: t } = this;
    t || (this.nextZIndex = 2e3),
      this.nextZIndex - t > 2500 && this.rearrange();
  }
  rearrange() {
    const t = Array.from(this.elementZIndex.entries());
    t.sort((n, o) => n[1] - o[1]),
      (this.nextZIndex = 2e3),
      t.forEach((n) => {
        const o = n[0],
          r = this.nextZIndex++;
        `${r}` !== o.style.zIndex && (o.style.zIndex = `${r}`);
      });
  }
}
const Es = new My(),
  io = "@@ziContext",
  ea = {
    mounted(e, t) {
      const { value: n = {} } = t,
        { zIndex: o, enabled: r } = n;
      (e[io] = { enabled: !!r, initialized: !1 }),
        r && (Es.ensureZIndex(e, o), (e[io].initialized = !0));
    },
    updated(e, t) {
      const { value: n = {} } = t,
        { zIndex: o, enabled: r } = n,
        i = e[io].enabled;
      r && !i && (Es.ensureZIndex(e, o), (e[io].initialized = !0)),
        (e[io].enabled = !!r);
    },
    unmounted(e, t) {
      if (!e[io].initialized) return;
      const { value: n = {} } = t,
        { zIndex: o } = n;
      Es.unregister(e, o);
    },
  },
  zy = "@css-render/vue3-ssr";
function Iy(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function ky(e, t, n) {
  const { styles: o, ids: r } = n;
  r.has(e) || (o !== null && (r.add(e), o.push(Iy(e, t))));
}
const By = typeof document < "u";
function Rr() {
  if (By) return;
  const e = me(zy, null);
  if (e !== null) return { adapter: (t, n) => ky(t, n, e), context: e };
}
function Zc(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Ur } = Qf(),
  Ly = "vueuc-style";
function Jc(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const gh = pe({
    name: "LazyTeleport",
    props: {
      to: { type: [String, Object], default: void 0 },
      disabled: Boolean,
      show: { type: Boolean, required: !0 },
    },
    setup(e) {
      return {
        showTeleport: py(Be(e, "show")),
        mergedTo: K(() => {
          const { to: t } = e;
          return t ?? "body";
        }),
      };
    },
    render() {
      return this.showTeleport
        ? this.disabled
          ? ul("lazy-teleport", this.$slots)
          : w(
              Kl,
              { disabled: this.disabled, to: this.mergedTo },
              ul("lazy-teleport", this.$slots)
            )
        : null;
    },
  }),
  Gr = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Qc = { start: "end", center: "center", end: "start" },
  Ts = { top: "height", bottom: "height", left: "width", right: "width" },
  Hy = {
    "bottom-start": "top left",
    bottom: "top center",
    "bottom-end": "top right",
    "top-start": "bottom left",
    top: "bottom center",
    "top-end": "bottom right",
    "right-start": "top left",
    right: "center left",
    "right-end": "bottom left",
    "left-start": "top right",
    left: "center right",
    "left-end": "bottom right",
  },
  Fy = {
    "bottom-start": "bottom left",
    bottom: "bottom center",
    "bottom-end": "bottom right",
    "top-start": "top left",
    top: "top center",
    "top-end": "top right",
    "right-start": "top right",
    right: "center right",
    "right-end": "bottom right",
    "left-start": "top left",
    left: "center left",
    "left-end": "bottom left",
  },
  jy = {
    "bottom-start": "right",
    "bottom-end": "left",
    "top-start": "right",
    "top-end": "left",
    "right-start": "bottom",
    "right-end": "top",
    "left-start": "bottom",
    "left-end": "top",
  },
  eu = { top: !0, bottom: !1, left: !0, right: !1 },
  tu = { top: "end", bottom: "start", left: "end", right: "start" };
function Dy(e, t, n, o, r, i) {
  if (!r || i) return { placement: e, top: 0, left: 0 };
  const [s, l] = e.split("-");
  let a = l ?? "center",
    c = { top: 0, left: 0 };
  const u = (p, h, b) => {
      let y = 0,
        g = 0;
      const C = n[p] - t[h] - t[p];
      return (
        C > 0 && o && (b ? (g = eu[h] ? C : -C) : (y = eu[h] ? C : -C)),
        { left: y, top: g }
      );
    },
    d = s === "left" || s === "right";
  if (a !== "center") {
    const p = jy[e],
      h = Gr[p],
      b = Ts[p];
    if (n[b] > t[b]) {
      if (t[p] + t[b] < n[b]) {
        const y = (n[b] - t[b]) / 2;
        t[p] < y || t[h] < y
          ? t[p] < t[h]
            ? ((a = Qc[l]), (c = u(b, h, d)))
            : (c = u(b, p, d))
          : (a = "center");
      }
    } else n[b] < t[b] && t[h] < 0 && t[p] > t[h] && (a = Qc[l]);
  } else {
    const p = s === "bottom" || s === "top" ? "left" : "top",
      h = Gr[p],
      b = Ts[p],
      y = (n[b] - t[b]) / 2;
    (t[p] < y || t[h] < y) &&
      (t[p] > t[h]
        ? ((a = tu[p]), (c = u(b, p, d)))
        : ((a = tu[h]), (c = u(b, h, d))));
  }
  let f = s;
  return (
    t[s] < n[Ts[s]] && t[s] < t[Gr[s]] && (f = Gr[s]),
    { placement: a !== "center" ? `${f}-${a}` : f, left: c.left, top: c.top }
  );
}
function Ny(e, t) {
  return t ? Fy[e] : Hy[e];
}
function Wy(e, t, n, o, r, i) {
  if (i)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)",
        };
      case "bottom-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "top-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "",
        };
      case "top-end":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)",
        };
      case "right-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)",
        };
      case "right-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "left-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "",
        };
      case "left-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)",
        };
      case "top":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%)",
        };
      case "right":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-50%)",
        };
      case "left":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-50%)",
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)",
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(n.top - t.top + n.height + o)}px`,
        left: `${Math.round(n.left - t.left + r)}px`,
        transform: "",
      };
    case "bottom-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + o)}px`,
        left: `${Math.round(n.left - t.left + n.width + r)}px`,
        transform: "translateX(-100%)",
      };
    case "top-start":
      return {
        top: `${Math.round(n.top - t.top + o)}px`,
        left: `${Math.round(n.left - t.left + r)}px`,
        transform: "translateY(-100%)",
      };
    case "top-end":
      return {
        top: `${Math.round(n.top - t.top + o)}px`,
        left: `${Math.round(n.left - t.left + n.width + r)}px`,
        transform: "translateX(-100%) translateY(-100%)",
      };
    case "right-start":
      return {
        top: `${Math.round(n.top - t.top + o)}px`,
        left: `${Math.round(n.left - t.left + n.width + r)}px`,
        transform: "",
      };
    case "right-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + o)}px`,
        left: `${Math.round(n.left - t.left + n.width + r)}px`,
        transform: "translateY(-100%)",
      };
    case "left-start":
      return {
        top: `${Math.round(n.top - t.top + o)}px`,
        left: `${Math.round(n.left - t.left + r)}px`,
        transform: "translateX(-100%)",
      };
    case "left-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + o)}px`,
        left: `${Math.round(n.left - t.left + r)}px`,
        transform: "translateX(-100%) translateY(-100%)",
      };
    case "top":
      return {
        top: `${Math.round(n.top - t.top + o)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
        transform: "translateY(-100%) translateX(-50%)",
      };
    case "right":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
        left: `${Math.round(n.left - t.left + n.width + r)}px`,
        transform: "translateY(-50%)",
      };
    case "left":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + o)}px`,
        left: `${Math.round(n.left - t.left + r)}px`,
        transform: "translateY(-50%) translateX(-100%)",
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(n.top - t.top + n.height + o)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + r)}px`,
        transform: "translateX(-50%)",
      };
  }
}
const Ky = Ur([
    Ur(".v-binder-follower-container", {
      position: "absolute",
      left: "0",
      right: "0",
      top: "0",
      height: "0",
      pointerEvents: "none",
      zIndex: "auto",
    }),
    Ur(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [
      Ur("> *", { pointerEvents: "all" }),
    ]),
  ]),
  vh = pe({
    name: "Follower",
    inheritAttrs: !1,
    props: {
      show: Boolean,
      enabled: { type: Boolean, default: void 0 },
      placement: { type: String, default: "bottom" },
      syncTrigger: { type: Array, default: ["resize", "scroll"] },
      to: [String, Object],
      flip: { type: Boolean, default: !0 },
      internalShift: Boolean,
      x: Number,
      y: Number,
      width: String,
      minWidth: String,
      containerClass: String,
      teleportDisabled: Boolean,
      zindexable: { type: Boolean, default: !0 },
      zIndex: Number,
      overlap: Boolean,
    },
    setup(e) {
      const t = me("VBinder"),
        n = Ct(() => (e.enabled !== void 0 ? e.enabled : e.show)),
        o = Q(null),
        r = Q(null),
        i = () => {
          const { syncTrigger: f } = e;
          f.includes("scroll") && t.addScrollListener(a),
            f.includes("resize") && t.addResizeListener(a);
        },
        s = () => {
          t.removeScrollListener(a), t.removeResizeListener(a);
        };
      _t(() => {
        n.value && (a(), i());
      });
      const l = Rr();
      Ky.mount({ id: "vueuc/binder", head: !0, anchorMetaName: Ly, ssr: l }),
        Qe(() => {
          s();
        }),
        vy(() => {
          n.value && a();
        });
      const a = () => {
        if (!n.value) return;
        const f = o.value;
        if (f === null) return;
        const p = t.targetRef,
          { x: h, y: b, overlap: y } = e,
          g = h !== void 0 && b !== void 0 ? Ty(h, b) : Ps(p);
        f.style.setProperty("--v-target-width", `${Math.round(g.width)}px`),
          f.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
        const {
          width: C,
          minWidth: A,
          placement: _,
          internalShift: E,
          flip: P,
        } = e;
        f.setAttribute("v-placement", _),
          y ? f.setAttribute("v-overlap", "") : f.removeAttribute("v-overlap");
        const { style: v } = f;
        C === "target"
          ? (v.width = `${g.width}px`)
          : C !== void 0
          ? (v.width = C)
          : (v.width = ""),
          A === "target"
            ? (v.minWidth = `${g.width}px`)
            : A !== void 0
            ? (v.minWidth = A)
            : (v.minWidth = "");
        const S = Ps(f),
          $ = Ps(r.value),
          { left: O, top: F, placement: T } = Dy(_, g, S, E, P, y),
          W = Ny(T, y),
          { left: q, top: I, transform: U } = Wy(T, $, g, F, O, y);
        f.setAttribute("v-placement", T),
          f.style.setProperty("--v-offset-left", `${Math.round(O)}px`),
          f.style.setProperty("--v-offset-top", `${Math.round(F)}px`),
          (f.style.transform = `translateX(${q}) translateY(${I}) ${U}`),
          f.style.setProperty("--v-transform-origin", W),
          (f.style.transformOrigin = W);
      };
      Ne(n, (f) => {
        f ? (i(), c()) : s();
      });
      const c = () => {
        yn()
          .then(a)
          .catch((f) => console.error(f));
      };
      [
        "placement",
        "x",
        "y",
        "internalShift",
        "flip",
        "width",
        "overlap",
        "minWidth",
      ].forEach((f) => {
        Ne(Be(e, f), a);
      }),
        ["teleportDisabled"].forEach((f) => {
          Ne(Be(e, f), c);
        }),
        Ne(Be(e, "syncTrigger"), (f) => {
          f.includes("resize")
            ? t.addResizeListener(a)
            : t.removeResizeListener(a),
            f.includes("scroll")
              ? t.addScrollListener(a)
              : t.removeScrollListener(a);
        });
      const u = qi(),
        d = Ct(() => {
          const { to: f } = e;
          if (f !== void 0) return f;
          u.value;
        });
      return {
        VBinder: t,
        mergedEnabled: n,
        offsetContainerRef: r,
        followerRef: o,
        mergedTo: d,
        syncPosition: a,
      };
    },
    render() {
      return w(
        gh,
        { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled },
        {
          default: () => {
            var e, t;
            const n = w(
              "div",
              {
                class: ["v-binder-follower-container", this.containerClass],
                ref: "offsetContainerRef",
              },
              [
                w(
                  "div",
                  { class: "v-binder-follower-content", ref: "followerRef" },
                  (t = (e = this.$slots).default) === null || t === void 0
                    ? void 0
                    : t.call(e)
                ),
              ]
            );
            return this.zindexable
              ? Wn(n, [
                  [ea, { enabled: this.mergedEnabled, zIndex: this.zIndex }],
                ])
              : n;
          },
        }
      );
    },
  });
var jn = [],
  Vy = function () {
    return jn.some(function (e) {
      return e.activeTargets.length > 0;
    });
  },
  Uy = function () {
    return jn.some(function (e) {
      return e.skippedTargets.length > 0;
    });
  },
  nu = "ResizeObserver loop completed with undelivered notifications.",
  Gy = function () {
    var e;
    typeof ErrorEvent == "function"
      ? (e = new ErrorEvent("error", { message: nu }))
      : ((e = document.createEvent("Event")),
        e.initEvent("error", !1, !1),
        (e.message = nu)),
      window.dispatchEvent(e);
  },
  wr;
(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(wr || (wr = {}));
var Dn = function (e) {
    return Object.freeze(e);
  },
  qy = (function () {
    function e(t, n) {
      (this.inlineSize = t), (this.blockSize = n), Dn(this);
    }
    return e;
  })(),
  mh = (function () {
    function e(t, n, o, r) {
      return (
        (this.x = t),
        (this.y = n),
        (this.width = o),
        (this.height = r),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        Dn(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var t = this,
          n = t.x,
          o = t.y,
          r = t.top,
          i = t.right,
          s = t.bottom,
          l = t.left,
          a = t.width,
          c = t.height;
        return {
          x: n,
          y: o,
          top: r,
          right: i,
          bottom: s,
          left: l,
          width: a,
          height: c,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  ta = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  bh = function (e) {
    if (ta(e)) {
      var t = e.getBBox(),
        n = t.width,
        o = t.height;
      return !n && !o;
    }
    var r = e,
      i = r.offsetWidth,
      s = r.offsetHeight;
    return !(i || s || e.getClientRects().length);
  },
  ou = function (e) {
    var t;
    if (e instanceof Element) return !0;
    var n =
      (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0
        ? void 0
        : t.defaultView;
    return !!(n && e instanceof n.Element);
  },
  Xy = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0;
    }
    return !1;
  },
  nr = typeof window < "u" ? window : {},
  qr = new WeakMap(),
  ru = /auto|scroll/,
  Yy = /^tb|vertical/,
  Zy = /msie|trident/i.test(nr.navigator && nr.navigator.userAgent),
  Mt = function (e) {
    return parseFloat(e || "0");
  },
  bo = function (e, t, n) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      n === void 0 && (n = !1),
      new qy((n ? t : e) || 0, (n ? e : t) || 0)
    );
  },
  iu = Dn({
    devicePixelContentBoxSize: bo(),
    borderBoxSize: bo(),
    contentBoxSize: bo(),
    contentRect: new mh(0, 0, 0, 0),
  }),
  yh = function (e, t) {
    if ((t === void 0 && (t = !1), qr.has(e) && !t)) return qr.get(e);
    if (bh(e)) return qr.set(e, iu), iu;
    var n = getComputedStyle(e),
      o = ta(e) && e.ownerSVGElement && e.getBBox(),
      r = !Zy && n.boxSizing === "border-box",
      i = Yy.test(n.writingMode || ""),
      s = !o && ru.test(n.overflowY || ""),
      l = !o && ru.test(n.overflowX || ""),
      a = o ? 0 : Mt(n.paddingTop),
      c = o ? 0 : Mt(n.paddingRight),
      u = o ? 0 : Mt(n.paddingBottom),
      d = o ? 0 : Mt(n.paddingLeft),
      f = o ? 0 : Mt(n.borderTopWidth),
      p = o ? 0 : Mt(n.borderRightWidth),
      h = o ? 0 : Mt(n.borderBottomWidth),
      b = o ? 0 : Mt(n.borderLeftWidth),
      y = d + c,
      g = a + u,
      C = b + p,
      A = f + h,
      _ = l ? e.offsetHeight - A - e.clientHeight : 0,
      E = s ? e.offsetWidth - C - e.clientWidth : 0,
      P = r ? y + C : 0,
      v = r ? g + A : 0,
      S = o ? o.width : Mt(n.width) - P - E,
      $ = o ? o.height : Mt(n.height) - v - _,
      O = S + y + E + C,
      F = $ + g + _ + A,
      T = Dn({
        devicePixelContentBoxSize: bo(
          Math.round(S * devicePixelRatio),
          Math.round($ * devicePixelRatio),
          i
        ),
        borderBoxSize: bo(O, F, i),
        contentBoxSize: bo(S, $, i),
        contentRect: new mh(d, a, S, $),
      });
    return qr.set(e, T), T;
  },
  xh = function (e, t, n) {
    var o = yh(e, n),
      r = o.borderBoxSize,
      i = o.contentBoxSize,
      s = o.devicePixelContentBoxSize;
    switch (t) {
      case wr.DEVICE_PIXEL_CONTENT_BOX:
        return s;
      case wr.BORDER_BOX:
        return r;
      default:
        return i;
    }
  },
  Jy = (function () {
    function e(t) {
      var n = yh(t);
      (this.target = t),
        (this.contentRect = n.contentRect),
        (this.borderBoxSize = Dn([n.borderBoxSize])),
        (this.contentBoxSize = Dn([n.contentBoxSize])),
        (this.devicePixelContentBoxSize = Dn([n.devicePixelContentBoxSize]));
    }
    return e;
  })(),
  wh = function (e) {
    if (bh(e)) return 1 / 0;
    for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
    return t;
  },
  Qy = function () {
    var e = 1 / 0,
      t = [];
    jn.forEach(function (s) {
      if (s.activeTargets.length !== 0) {
        var l = [];
        s.activeTargets.forEach(function (c) {
          var u = new Jy(c.target),
            d = wh(c.target);
          l.push(u),
            (c.lastReportedSize = xh(c.target, c.observedBox)),
            d < e && (e = d);
        }),
          t.push(function () {
            s.callback.call(s.observer, l, s.observer);
          }),
          s.activeTargets.splice(0, s.activeTargets.length);
      }
    });
    for (var n = 0, o = t; n < o.length; n++) {
      var r = o[n];
      r();
    }
    return e;
  },
  su = function (e) {
    jn.forEach(function (n) {
      n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function (r) {
          r.isActive() &&
            (wh(r.target) > e
              ? n.activeTargets.push(r)
              : n.skippedTargets.push(r));
        });
    });
  },
  e0 = function () {
    var e = 0;
    for (su(e); Vy(); ) (e = Qy()), su(e);
    return Uy() && Gy(), e > 0;
  },
  Os,
  Ch = [],
  t0 = function () {
    return Ch.splice(0).forEach(function (e) {
      return e();
    });
  },
  n0 = function (e) {
    if (!Os) {
      var t = 0,
        n = document.createTextNode(""),
        o = { characterData: !0 };
      new MutationObserver(function () {
        return t0();
      }).observe(n, o),
        (Os = function () {
          n.textContent = "".concat(t ? t-- : t++);
        });
    }
    Ch.push(e), Os();
  },
  o0 = function (e) {
    n0(function () {
      requestAnimationFrame(e);
    });
  },
  ai = 0,
  r0 = function () {
    return !!ai;
  },
  i0 = 250,
  s0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  lu = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  au = function (e) {
    return e === void 0 && (e = 0), Date.now() + e;
  },
  Rs = !1,
  l0 = (function () {
    function e() {
      var t = this;
      (this.stopped = !0),
        (this.listener = function () {
          return t.schedule();
        });
    }
    return (
      (e.prototype.run = function (t) {
        var n = this;
        if ((t === void 0 && (t = i0), !Rs)) {
          Rs = !0;
          var o = au(t);
          o0(function () {
            var r = !1;
            try {
              r = e0();
            } finally {
              if (((Rs = !1), (t = o - au()), !r0())) return;
              r ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
            }
          });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var t = this,
          n = function () {
            return t.observer && t.observer.observe(document.body, s0);
          };
        document.body ? n() : nr.addEventListener("DOMContentLoaded", n);
      }),
      (e.prototype.start = function () {
        var t = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          lu.forEach(function (n) {
            return nr.addEventListener(n, t.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var t = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          lu.forEach(function (n) {
            return nr.removeEventListener(n, t.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })(),
  hl = new l0(),
  cu = function (e) {
    !ai && e > 0 && hl.start(), (ai += e), !ai && hl.stop();
  },
  a0 = function (e) {
    return !ta(e) && !Xy(e) && getComputedStyle(e).display === "inline";
  },
  c0 = (function () {
    function e(t, n) {
      (this.target = t),
        (this.observedBox = n || wr.CONTENT_BOX),
        (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
    }
    return (
      (e.prototype.isActive = function () {
        var t = xh(this.target, this.observedBox, !0);
        return (
          a0(this.target) && (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      e
    );
  })(),
  u0 = (function () {
    function e(t, n) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = n);
    }
    return e;
  })(),
  Xr = new WeakMap(),
  uu = function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
    return -1;
  },
  Yr = (function () {
    function e() {}
    return (
      (e.connect = function (t, n) {
        var o = new u0(t, n);
        Xr.set(t, o);
      }),
      (e.observe = function (t, n, o) {
        var r = Xr.get(t),
          i = r.observationTargets.length === 0;
        uu(r.observationTargets, n) < 0 &&
          (i && jn.push(r),
          r.observationTargets.push(new c0(n, o && o.box)),
          cu(1),
          hl.schedule());
      }),
      (e.unobserve = function (t, n) {
        var o = Xr.get(t),
          r = uu(o.observationTargets, n),
          i = o.observationTargets.length === 1;
        r >= 0 &&
          (i && jn.splice(jn.indexOf(o), 1),
          o.observationTargets.splice(r, 1),
          cu(-1));
      }),
      (e.disconnect = function (t) {
        var n = this,
          o = Xr.get(t);
        o.observationTargets.slice().forEach(function (r) {
          return n.unobserve(t, r.target);
        }),
          o.activeTargets.splice(0, o.activeTargets.length);
      }),
      e
    );
  })(),
  d0 = (function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if (typeof t != "function")
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      Yr.connect(this, t);
    }
    return (
      (e.prototype.observe = function (t, n) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!ou(t))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        Yr.observe(this, t, n);
      }),
      (e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!ou(t))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        Yr.unobserve(this, t);
      }),
      (e.prototype.disconnect = function () {
        Yr.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();
class f0 {
  constructor() {
    (this.handleResize = this.handleResize.bind(this)),
      (this.observer = new ((typeof window < "u" && window.ResizeObserver) ||
        d0)(this.handleResize)),
      (this.elHandlersMap = new Map());
  }
  handleResize(t) {
    for (const n of t) {
      const o = this.elHandlersMap.get(n.target);
      o !== void 0 && o(n);
    }
  }
  registerHandler(t, n) {
    this.elHandlersMap.set(t, n), this.observer.observe(t);
  }
  unregisterHandler(t) {
    this.elHandlersMap.has(t) &&
      (this.elHandlersMap.delete(t), this.observer.unobserve(t));
  }
}
const du = new f0(),
  fu = pe({
    name: "ResizeObserver",
    props: { onResize: Function },
    setup(e) {
      let t = !1;
      const n = Pr().proxy;
      function o(r) {
        const { onResize: i } = e;
        i !== void 0 && i(r);
      }
      _t(() => {
        const r = n.$el;
        if (r === void 0) {
          Zc("resize-observer", "$el does not exist.");
          return;
        }
        if (
          r.nextElementSibling !== r.nextSibling &&
          r.nodeType === 3 &&
          r.nodeValue !== ""
        ) {
          Zc(
            "resize-observer",
            "$el can not be observed (it may be a text node)."
          );
          return;
        }
        r.nextElementSibling !== null &&
          (du.registerHandler(r.nextElementSibling, o), (t = !0));
      }),
        Qe(() => {
          t && du.unregisterHandler(n.$el.nextElementSibling);
        });
    },
    render() {
      return Ig(this.$slots, "default");
    },
  });
function Sh(e) {
  return e instanceof HTMLElement;
}
function _h(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (Sh(n) && (Ph(n) || _h(n))) return !0;
  }
  return !1;
}
function $h(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (Sh(n) && (Ph(n) || $h(n))) return !0;
  }
  return !1;
}
function Ph(e) {
  if (!h0(e)) return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {}
  return document.activeElement === e;
}
function h0(e) {
  if (
    e.tabIndex > 0 ||
    (e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
  )
    return !0;
  if (e.getAttribute("disabled")) return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return e.type !== "hidden" && e.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let Lo = [];
const Eh = pe({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: { type: Boolean, default: !0 },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: { type: Boolean, default: !0 },
  },
  setup(e) {
    const t = Vi(),
      n = Q(null),
      o = Q(null);
    let r = !1,
      i = !1;
    const s = typeof document > "u" ? null : document.activeElement;
    function l() {
      return Lo[Lo.length - 1] === t;
    }
    function a(y) {
      var g;
      y.code === "Escape" &&
        l() &&
        ((g = e.onEsc) === null || g === void 0 || g.call(e, y));
    }
    _t(() => {
      Ne(
        () => e.active,
        (y) => {
          y
            ? (d(), Fe("keydown", document, a))
            : (Re("keydown", document, a), r && f());
        },
        { immediate: !0 }
      );
    }),
      Qe(() => {
        Re("keydown", document, a), r && f();
      });
    function c(y) {
      if (!i && l()) {
        const g = u();
        if (g === null || g.contains(br(y))) return;
        p("first");
      }
    }
    function u() {
      const y = n.value;
      if (y === null) return null;
      let g = y;
      for (
        ;
        (g = g.nextSibling),
          !(g === null || (g instanceof Element && g.tagName === "DIV"));

      );
      return g;
    }
    function d() {
      var y;
      if (!e.disabled) {
        if ((Lo.push(t), e.autoFocus)) {
          const { initialFocusTo: g } = e;
          g === void 0
            ? p("first")
            : (y = Jc(g)) === null ||
              y === void 0 ||
              y.focus({ preventScroll: !0 });
        }
        (r = !0), document.addEventListener("focus", c, !0);
      }
    }
    function f() {
      var y;
      if (
        e.disabled ||
        (document.removeEventListener("focus", c, !0),
        (Lo = Lo.filter((C) => C !== t)),
        l())
      )
        return;
      const { finalFocusTo: g } = e;
      g !== void 0
        ? (y = Jc(g)) === null || y === void 0 || y.focus({ preventScroll: !0 })
        : e.returnFocusOnDeactivated &&
          s instanceof HTMLElement &&
          ((i = !0), s.focus({ preventScroll: !0 }), (i = !1));
    }
    function p(y) {
      if (l() && e.active) {
        const g = n.value,
          C = o.value;
        if (g !== null && C !== null) {
          const A = u();
          if (A == null || A === C) {
            (i = !0), g.focus({ preventScroll: !0 }), (i = !1);
            return;
          }
          i = !0;
          const _ = y === "first" ? _h(A) : $h(A);
          (i = !1), _ || ((i = !0), g.focus({ preventScroll: !0 }), (i = !1));
        }
      }
    }
    function h(y) {
      if (i) return;
      const g = u();
      g !== null &&
        (y.relatedTarget !== null && g.contains(y.relatedTarget)
          ? p("last")
          : p("first"));
    }
    function b(y) {
      i ||
        (y.relatedTarget !== null && y.relatedTarget === n.value
          ? p("last")
          : p("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: h,
      handleEndFocus: b,
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0) return null;
    if (this.disabled) return e();
    const { active: t, focusableStyle: n } = this;
    return w(He, null, [
      w("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus,
      }),
      e(),
      w("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus,
      }),
    ]);
  },
});
let so = 0,
  hu = "",
  pu = "",
  gu = "",
  vu = "";
const mu = Q("0px");
function p0(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let n,
    o = !1;
  const r = () => {
    (t.style.marginRight = hu),
      (t.style.overflow = pu),
      (t.style.overflowX = gu),
      (t.style.overflowY = vu),
      (mu.value = "0px");
  };
  _t(() => {
    n = Ne(
      e,
      (i) => {
        if (i) {
          if (!so) {
            const s = window.innerWidth - t.offsetWidth;
            s > 0 &&
              ((hu = t.style.marginRight),
              (t.style.marginRight = `${s}px`),
              (mu.value = `${s}px`)),
              (pu = t.style.overflow),
              (gu = t.style.overflowX),
              (vu = t.style.overflowY),
              (t.style.overflow = "hidden"),
              (t.style.overflowX = "hidden"),
              (t.style.overflowY = "hidden");
          }
          (o = !0), so++;
        } else so--, so || r(), (o = !1);
      },
      { immediate: !0 }
    );
  }),
    Qe(() => {
      n == null || n(), o && (so--, so || r(), (o = !1));
    });
}
const na = Q(!1);
function bu() {
  na.value = !0;
}
function yu() {
  na.value = !1;
}
let Ho = 0;
function g0() {
  return (
    Tr &&
      ($n(() => {
        Ho ||
          (window.addEventListener("compositionstart", bu),
          window.addEventListener("compositionend", yu)),
          Ho++;
      }),
      Qe(() => {
        Ho <= 1
          ? (window.removeEventListener("compositionstart", bu),
            window.removeEventListener("compositionend", yu),
            (Ho = 0))
          : Ho--;
      })),
    na
  );
}
function Th(e) {
  const t = { isDeactivated: !1 };
  let n = !1;
  return (
    Ud(() => {
      if (((t.isDeactivated = !1), !n)) {
        n = !0;
        return;
      }
      e();
    }),
    Gd(() => {
      (t.isDeactivated = !0), n || (n = !0);
    }),
    t
  );
}
const xu = "n-form-item";
function v0(
  e,
  { defaultSize: t = "medium", mergedSize: n, mergedDisabled: o } = {}
) {
  const r = me(xu, null);
  Pe(xu, null);
  const i = K(
      n
        ? () => n(r)
        : () => {
            const { size: a } = e;
            if (a) return a;
            if (r) {
              const { mergedSize: c } = r;
              if (c.value !== void 0) return c.value;
            }
            return t;
          }
    ),
    s = K(
      o
        ? () => o(r)
        : () => {
            const { disabled: a } = e;
            return a !== void 0 ? a : r ? r.disabled.value : !1;
          }
    ),
    l = K(() => {
      const { status: a } = e;
      return a || (r == null ? void 0 : r.mergedValidationStatus.value);
    });
  return (
    Qe(() => {
      r && r.restoreValidation();
    }),
    {
      mergedSizeRef: i,
      mergedDisabledRef: s,
      mergedStatusRef: l,
      nTriggerFormBlur() {
        r && r.handleContentBlur();
      },
      nTriggerFormChange() {
        r && r.handleContentChange();
      },
      nTriggerFormFocus() {
        r && r.handleContentFocus();
      },
      nTriggerFormInput() {
        r && r.handleContentInput();
      },
    }
  );
}
var Oh =
    typeof global == "object" && global && global.Object === Object && global,
  m0 = typeof self == "object" && self && self.Object === Object && self,
  Nt = Oh || m0 || Function("return this")(),
  xn = Nt.Symbol,
  Rh = Object.prototype,
  b0 = Rh.hasOwnProperty,
  y0 = Rh.toString,
  Fo = xn ? xn.toStringTag : void 0;
function x0(e) {
  var t = b0.call(e, Fo),
    n = e[Fo];
  try {
    e[Fo] = void 0;
    var o = !0;
  } catch {}
  var r = y0.call(e);
  return o && (t ? (e[Fo] = n) : delete e[Fo]), r;
}
var w0 = Object.prototype,
  C0 = w0.toString;
function S0(e) {
  return C0.call(e);
}
var _0 = "[object Null]",
  $0 = "[object Undefined]",
  wu = xn ? xn.toStringTag : void 0;
function Jn(e) {
  return e == null
    ? e === void 0
      ? $0
      : _0
    : wu && wu in Object(e)
    ? x0(e)
    : S0(e);
}
function wn(e) {
  return e != null && typeof e == "object";
}
var P0 = "[object Symbol]";
function oa(e) {
  return typeof e == "symbol" || (wn(e) && Jn(e) == P0);
}
function Ah(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o; )
    r[n] = t(e[n], n, e);
  return r;
}
var St = Array.isArray,
  E0 = 1 / 0,
  Cu = xn ? xn.prototype : void 0,
  Su = Cu ? Cu.toString : void 0;
function Mh(e) {
  if (typeof e == "string") return e;
  if (St(e)) return Ah(e, Mh) + "";
  if (oa(e)) return Su ? Su.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -E0 ? "-0" : t;
}
function Pn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ra(e) {
  return e;
}
var T0 = "[object AsyncFunction]",
  O0 = "[object Function]",
  R0 = "[object GeneratorFunction]",
  A0 = "[object Proxy]";
function ia(e) {
  if (!Pn(e)) return !1;
  var t = Jn(e);
  return t == O0 || t == R0 || t == T0 || t == A0;
}
var As = Nt["__core-js_shared__"],
  _u = (function () {
    var e = /[^.]+$/.exec((As && As.keys && As.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function M0(e) {
  return !!_u && _u in e;
}
var z0 = Function.prototype,
  I0 = z0.toString;
function Qn(e) {
  if (e != null) {
    try {
      return I0.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var k0 = /[\\^$.*+?()[\]{}|]/g,
  B0 = /^\[object .+?Constructor\]$/,
  L0 = Function.prototype,
  H0 = Object.prototype,
  F0 = L0.toString,
  j0 = H0.hasOwnProperty,
  D0 = RegExp(
    "^" +
      F0.call(j0)
        .replace(k0, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function N0(e) {
  if (!Pn(e) || M0(e)) return !1;
  var t = ia(e) ? D0 : B0;
  return t.test(Qn(e));
}
function W0(e, t) {
  return e == null ? void 0 : e[t];
}
function eo(e, t) {
  var n = W0(e, t);
  return N0(n) ? n : void 0;
}
var pl = eo(Nt, "WeakMap"),
  $u = Object.create,
  K0 = (function () {
    function e() {}
    return function (t) {
      if (!Pn(t)) return {};
      if ($u) return $u(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
function V0(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function U0(e, t) {
  var n = -1,
    o = e.length;
  for (t || (t = Array(o)); ++n < o; ) t[n] = e[n];
  return t;
}
var G0 = 800,
  q0 = 16,
  X0 = Date.now;
function Y0(e) {
  var t = 0,
    n = 0;
  return function () {
    var o = X0(),
      r = q0 - (o - n);
    if (((n = o), r > 0)) {
      if (++t >= G0) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
function Z0(e) {
  return function () {
    return e;
  };
}
var mi = (function () {
    try {
      var e = eo(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  J0 = mi
    ? function (e, t) {
        return mi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Z0(t),
          writable: !0,
        });
      }
    : ra,
  Q0 = Y0(J0),
  ex = 9007199254740991,
  tx = /^(?:0|[1-9]\d*)$/;
function sa(e, t) {
  var n = typeof e;
  return (
    (t = t ?? ex),
    !!t &&
      (n == "number" || (n != "symbol" && tx.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
function la(e, t, n) {
  t == "__proto__" && mi
    ? mi(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
function Ar(e, t) {
  return e === t || (e !== e && t !== t);
}
var nx = Object.prototype,
  ox = nx.hasOwnProperty;
function rx(e, t, n) {
  var o = e[t];
  (!(ox.call(e, t) && Ar(o, n)) || (n === void 0 && !(t in e))) && la(e, t, n);
}
function ix(e, t, n, o) {
  var r = !n;
  n || (n = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var l = t[i],
      a = void 0;
    a === void 0 && (a = e[l]), r ? la(n, l, a) : rx(n, l, a);
  }
  return n;
}
var Pu = Math.max;
function sx(e, t, n) {
  return (
    (t = Pu(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var o = arguments, r = -1, i = Pu(o.length - t, 0), s = Array(i);
        ++r < i;

      )
        s[r] = o[t + r];
      r = -1;
      for (var l = Array(t + 1); ++r < t; ) l[r] = o[r];
      return (l[t] = n(s)), V0(e, this, l);
    }
  );
}
function lx(e, t) {
  return Q0(sx(e, t, ra), e + "");
}
var ax = 9007199254740991;
function aa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ax;
}
function Oo(e) {
  return e != null && aa(e.length) && !ia(e);
}
function cx(e, t, n) {
  if (!Pn(n)) return !1;
  var o = typeof t;
  return (o == "number" ? Oo(n) && sa(t, n.length) : o == "string" && t in n)
    ? Ar(n[t], e)
    : !1;
}
function ux(e) {
  return lx(function (t, n) {
    var o = -1,
      r = n.length,
      i = r > 1 ? n[r - 1] : void 0,
      s = r > 2 ? n[2] : void 0;
    for (
      i = e.length > 3 && typeof i == "function" ? (r--, i) : void 0,
        s && cx(n[0], n[1], s) && ((i = r < 3 ? void 0 : i), (r = 1)),
        t = Object(t);
      ++o < r;

    ) {
      var l = n[o];
      l && e(t, l, o, i);
    }
    return t;
  });
}
var dx = Object.prototype;
function ca(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || dx;
  return e === n;
}
function fx(e, t) {
  for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
  return o;
}
var hx = "[object Arguments]";
function Eu(e) {
  return wn(e) && Jn(e) == hx;
}
var zh = Object.prototype,
  px = zh.hasOwnProperty,
  gx = zh.propertyIsEnumerable,
  bi = Eu(
    (function () {
      return arguments;
    })()
  )
    ? Eu
    : function (e) {
        return wn(e) && px.call(e, "callee") && !gx.call(e, "callee");
      };
function vx() {
  return !1;
}
var Ih = typeof exports == "object" && exports && !exports.nodeType && exports,
  Tu = Ih && typeof module == "object" && module && !module.nodeType && module,
  mx = Tu && Tu.exports === Ih,
  Ou = mx ? Nt.Buffer : void 0,
  bx = Ou ? Ou.isBuffer : void 0,
  yi = bx || vx,
  yx = "[object Arguments]",
  xx = "[object Array]",
  wx = "[object Boolean]",
  Cx = "[object Date]",
  Sx = "[object Error]",
  _x = "[object Function]",
  $x = "[object Map]",
  Px = "[object Number]",
  Ex = "[object Object]",
  Tx = "[object RegExp]",
  Ox = "[object Set]",
  Rx = "[object String]",
  Ax = "[object WeakMap]",
  Mx = "[object ArrayBuffer]",
  zx = "[object DataView]",
  Ix = "[object Float32Array]",
  kx = "[object Float64Array]",
  Bx = "[object Int8Array]",
  Lx = "[object Int16Array]",
  Hx = "[object Int32Array]",
  Fx = "[object Uint8Array]",
  jx = "[object Uint8ClampedArray]",
  Dx = "[object Uint16Array]",
  Nx = "[object Uint32Array]",
  Me = {};
Me[Ix] =
  Me[kx] =
  Me[Bx] =
  Me[Lx] =
  Me[Hx] =
  Me[Fx] =
  Me[jx] =
  Me[Dx] =
  Me[Nx] =
    !0;
Me[yx] =
  Me[xx] =
  Me[Mx] =
  Me[wx] =
  Me[zx] =
  Me[Cx] =
  Me[Sx] =
  Me[_x] =
  Me[$x] =
  Me[Px] =
  Me[Ex] =
  Me[Tx] =
  Me[Ox] =
  Me[Rx] =
  Me[Ax] =
    !1;
function Wx(e) {
  return wn(e) && aa(e.length) && !!Me[Jn(e)];
}
function Kx(e) {
  return function (t) {
    return e(t);
  };
}
var kh = typeof exports == "object" && exports && !exports.nodeType && exports,
  or = kh && typeof module == "object" && module && !module.nodeType && module,
  Vx = or && or.exports === kh,
  Ms = Vx && Oh.process,
  Ru = (function () {
    try {
      var e = or && or.require && or.require("util").types;
      return e || (Ms && Ms.binding && Ms.binding("util"));
    } catch {}
  })(),
  Au = Ru && Ru.isTypedArray,
  ua = Au ? Kx(Au) : Wx,
  Ux = Object.prototype,
  Gx = Ux.hasOwnProperty;
function Bh(e, t) {
  var n = St(e),
    o = !n && bi(e),
    r = !n && !o && yi(e),
    i = !n && !o && !r && ua(e),
    s = n || o || r || i,
    l = s ? fx(e.length, String) : [],
    a = l.length;
  for (var c in e)
    (t || Gx.call(e, c)) &&
      !(
        s &&
        (c == "length" ||
          (r && (c == "offset" || c == "parent")) ||
          (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
          sa(c, a))
      ) &&
      l.push(c);
  return l;
}
function Lh(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var qx = Lh(Object.keys, Object),
  Xx = Object.prototype,
  Yx = Xx.hasOwnProperty;
function Zx(e) {
  if (!ca(e)) return qx(e);
  var t = [];
  for (var n in Object(e)) Yx.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function da(e) {
  return Oo(e) ? Bh(e) : Zx(e);
}
function Jx(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var Qx = Object.prototype,
  ew = Qx.hasOwnProperty;
function tw(e) {
  if (!Pn(e)) return Jx(e);
  var t = ca(e),
    n = [];
  for (var o in e) (o == "constructor" && (t || !ew.call(e, o))) || n.push(o);
  return n;
}
function Hh(e) {
  return Oo(e) ? Bh(e, !0) : tw(e);
}
var nw = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  ow = /^\w*$/;
function fa(e, t) {
  if (St(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || oa(e)
    ? !0
    : ow.test(e) || !nw.test(e) || (t != null && e in Object(t));
}
var Cr = eo(Object, "create");
function rw() {
  (this.__data__ = Cr ? Cr(null) : {}), (this.size = 0);
}
function iw(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var sw = "__lodash_hash_undefined__",
  lw = Object.prototype,
  aw = lw.hasOwnProperty;
function cw(e) {
  var t = this.__data__;
  if (Cr) {
    var n = t[e];
    return n === sw ? void 0 : n;
  }
  return aw.call(t, e) ? t[e] : void 0;
}
var uw = Object.prototype,
  dw = uw.hasOwnProperty;
function fw(e) {
  var t = this.__data__;
  return Cr ? t[e] !== void 0 : dw.call(t, e);
}
var hw = "__lodash_hash_undefined__";
function pw(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Cr && t === void 0 ? hw : t),
    this
  );
}
function Un(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Un.prototype.clear = rw;
Un.prototype.delete = iw;
Un.prototype.get = cw;
Un.prototype.has = fw;
Un.prototype.set = pw;
function gw() {
  (this.__data__ = []), (this.size = 0);
}
function Zi(e, t) {
  for (var n = e.length; n--; ) if (Ar(e[n][0], t)) return n;
  return -1;
}
var vw = Array.prototype,
  mw = vw.splice;
function bw(e) {
  var t = this.__data__,
    n = Zi(t, e);
  if (n < 0) return !1;
  var o = t.length - 1;
  return n == o ? t.pop() : mw.call(t, n, 1), --this.size, !0;
}
function yw(e) {
  var t = this.__data__,
    n = Zi(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function xw(e) {
  return Zi(this.__data__, e) > -1;
}
function ww(e, t) {
  var n = this.__data__,
    o = Zi(n, e);
  return o < 0 ? (++this.size, n.push([e, t])) : (n[o][1] = t), this;
}
function Zt(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Zt.prototype.clear = gw;
Zt.prototype.delete = bw;
Zt.prototype.get = yw;
Zt.prototype.has = xw;
Zt.prototype.set = ww;
var Sr = eo(Nt, "Map");
function Cw() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Un(),
      map: new (Sr || Zt)(),
      string: new Un(),
    });
}
function Sw(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function Ji(e, t) {
  var n = e.__data__;
  return Sw(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _w(e) {
  var t = Ji(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function $w(e) {
  return Ji(this, e).get(e);
}
function Pw(e) {
  return Ji(this, e).has(e);
}
function Ew(e, t) {
  var n = Ji(this, e),
    o = n.size;
  return n.set(e, t), (this.size += n.size == o ? 0 : 1), this;
}
function Jt(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jt.prototype.clear = Cw;
Jt.prototype.delete = _w;
Jt.prototype.get = $w;
Jt.prototype.has = Pw;
Jt.prototype.set = Ew;
var Tw = "Expected a function";
function ha(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(Tw);
  var n = function () {
    var o = arguments,
      r = t ? t.apply(this, o) : o[0],
      i = n.cache;
    if (i.has(r)) return i.get(r);
    var s = e.apply(this, o);
    return (n.cache = i.set(r, s) || i), s;
  };
  return (n.cache = new (ha.Cache || Jt)()), n;
}
ha.Cache = Jt;
var Ow = 500;
function Rw(e) {
  var t = ha(e, function (o) {
      return n.size === Ow && n.clear(), o;
    }),
    n = t.cache;
  return t;
}
var Aw =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  Mw = /\\(\\)?/g,
  zw = Rw(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(Aw, function (n, o, r, i) {
        t.push(r ? i.replace(Mw, "$1") : o || n);
      }),
      t
    );
  });
function Fh(e) {
  return e == null ? "" : Mh(e);
}
function jh(e, t) {
  return St(e) ? e : fa(e, t) ? [e] : zw(Fh(e));
}
var Iw = 1 / 0;
function Qi(e) {
  if (typeof e == "string" || oa(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -Iw ? "-0" : t;
}
function Dh(e, t) {
  t = jh(t, e);
  for (var n = 0, o = t.length; e != null && n < o; ) e = e[Qi(t[n++])];
  return n && n == o ? e : void 0;
}
function kw(e, t, n) {
  var o = e == null ? void 0 : Dh(e, t);
  return o === void 0 ? n : o;
}
function Bw(e, t) {
  for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
  return e;
}
var Nh = Lh(Object.getPrototypeOf, Object),
  Lw = "[object Object]",
  Hw = Function.prototype,
  Fw = Object.prototype,
  Wh = Hw.toString,
  jw = Fw.hasOwnProperty,
  Dw = Wh.call(Object);
function Nw(e) {
  if (!wn(e) || Jn(e) != Lw) return !1;
  var t = Nh(e);
  if (t === null) return !0;
  var n = jw.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Wh.call(n) == Dw;
}
function Ww(e, t, n) {
  var o = -1,
    r = e.length;
  t < 0 && (t = -t > r ? 0 : r + t),
    (n = n > r ? r : n),
    n < 0 && (n += r),
    (r = t > n ? 0 : (n - t) >>> 0),
    (t >>>= 0);
  for (var i = Array(r); ++o < r; ) i[o] = e[o + t];
  return i;
}
function Kw(e, t, n) {
  var o = e.length;
  return (n = n === void 0 ? o : n), !t && n >= o ? e : Ww(e, t, n);
}
var Vw = "\\ud800-\\udfff",
  Uw = "\\u0300-\\u036f",
  Gw = "\\ufe20-\\ufe2f",
  qw = "\\u20d0-\\u20ff",
  Xw = Uw + Gw + qw,
  Yw = "\\ufe0e\\ufe0f",
  Zw = "\\u200d",
  Jw = RegExp("[" + Zw + Vw + Xw + Yw + "]");
function Kh(e) {
  return Jw.test(e);
}
function Qw(e) {
  return e.split("");
}
var Vh = "\\ud800-\\udfff",
  eC = "\\u0300-\\u036f",
  tC = "\\ufe20-\\ufe2f",
  nC = "\\u20d0-\\u20ff",
  oC = eC + tC + nC,
  rC = "\\ufe0e\\ufe0f",
  iC = "[" + Vh + "]",
  gl = "[" + oC + "]",
  vl = "\\ud83c[\\udffb-\\udfff]",
  sC = "(?:" + gl + "|" + vl + ")",
  Uh = "[^" + Vh + "]",
  Gh = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  qh = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  lC = "\\u200d",
  Xh = sC + "?",
  Yh = "[" + rC + "]?",
  aC = "(?:" + lC + "(?:" + [Uh, Gh, qh].join("|") + ")" + Yh + Xh + ")*",
  cC = Yh + Xh + aC,
  uC = "(?:" + [Uh + gl + "?", gl, Gh, qh, iC].join("|") + ")",
  dC = RegExp(vl + "(?=" + vl + ")|" + uC + cC, "g");
function fC(e) {
  return e.match(dC) || [];
}
function hC(e) {
  return Kh(e) ? fC(e) : Qw(e);
}
function pC(e) {
  return function (t) {
    t = Fh(t);
    var n = Kh(t) ? hC(t) : void 0,
      o = n ? n[0] : t.charAt(0),
      r = n ? Kw(n, 1).join("") : t.slice(1);
    return o[e]() + r;
  };
}
var gC = pC("toUpperCase");
function vC() {
  (this.__data__ = new Zt()), (this.size = 0);
}
function mC(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function bC(e) {
  return this.__data__.get(e);
}
function yC(e) {
  return this.__data__.has(e);
}
var xC = 200;
function wC(e, t) {
  var n = this.__data__;
  if (n instanceof Zt) {
    var o = n.__data__;
    if (!Sr || o.length < xC - 1)
      return o.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new Jt(o);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function Ht(e) {
  var t = (this.__data__ = new Zt(e));
  this.size = t.size;
}
Ht.prototype.clear = vC;
Ht.prototype.delete = mC;
Ht.prototype.get = bC;
Ht.prototype.has = yC;
Ht.prototype.set = wC;
var Zh = typeof exports == "object" && exports && !exports.nodeType && exports,
  Mu = Zh && typeof module == "object" && module && !module.nodeType && module,
  CC = Mu && Mu.exports === Zh,
  zu = CC ? Nt.Buffer : void 0;
zu && zu.allocUnsafe;
function SC(e, t) {
  return e.slice();
}
function _C(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o; ) {
    var s = e[n];
    t(s, n, e) && (i[r++] = s);
  }
  return i;
}
function $C() {
  return [];
}
var PC = Object.prototype,
  EC = PC.propertyIsEnumerable,
  Iu = Object.getOwnPropertySymbols,
  TC = Iu
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            _C(Iu(e), function (t) {
              return EC.call(e, t);
            }));
      }
    : $C;
function OC(e, t, n) {
  var o = t(e);
  return St(e) ? o : Bw(o, n(e));
}
function ku(e) {
  return OC(e, da, TC);
}
var ml = eo(Nt, "DataView"),
  bl = eo(Nt, "Promise"),
  yl = eo(Nt, "Set"),
  Bu = "[object Map]",
  RC = "[object Object]",
  Lu = "[object Promise]",
  Hu = "[object Set]",
  Fu = "[object WeakMap]",
  ju = "[object DataView]",
  AC = Qn(ml),
  MC = Qn(Sr),
  zC = Qn(bl),
  IC = Qn(yl),
  kC = Qn(pl),
  hn = Jn;
((ml && hn(new ml(new ArrayBuffer(1))) != ju) ||
  (Sr && hn(new Sr()) != Bu) ||
  (bl && hn(bl.resolve()) != Lu) ||
  (yl && hn(new yl()) != Hu) ||
  (pl && hn(new pl()) != Fu)) &&
  (hn = function (e) {
    var t = Jn(e),
      n = t == RC ? e.constructor : void 0,
      o = n ? Qn(n) : "";
    if (o)
      switch (o) {
        case AC:
          return ju;
        case MC:
          return Bu;
        case zC:
          return Lu;
        case IC:
          return Hu;
        case kC:
          return Fu;
      }
    return t;
  });
var xi = Nt.Uint8Array;
function BC(e) {
  var t = new e.constructor(e.byteLength);
  return new xi(t).set(new xi(e)), t;
}
function LC(e, t) {
  var n = BC(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function HC(e) {
  return typeof e.constructor == "function" && !ca(e) ? K0(Nh(e)) : {};
}
var FC = "__lodash_hash_undefined__";
function jC(e) {
  return this.__data__.set(e, FC), this;
}
function DC(e) {
  return this.__data__.has(e);
}
function wi(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Jt(); ++t < n; ) this.add(e[t]);
}
wi.prototype.add = wi.prototype.push = jC;
wi.prototype.has = DC;
function NC(e, t) {
  for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function WC(e, t) {
  return e.has(t);
}
var KC = 1,
  VC = 2;
function Jh(e, t, n, o, r, i) {
  var s = n & KC,
    l = e.length,
    a = t.length;
  if (l != a && !(s && a > l)) return !1;
  var c = i.get(e),
    u = i.get(t);
  if (c && u) return c == t && u == e;
  var d = -1,
    f = !0,
    p = n & VC ? new wi() : void 0;
  for (i.set(e, t), i.set(t, e); ++d < l; ) {
    var h = e[d],
      b = t[d];
    if (o) var y = s ? o(b, h, d, t, e, i) : o(h, b, d, e, t, i);
    if (y !== void 0) {
      if (y) continue;
      f = !1;
      break;
    }
    if (p) {
      if (
        !NC(t, function (g, C) {
          if (!WC(p, C) && (h === g || r(h, g, n, o, i))) return p.push(C);
        })
      ) {
        f = !1;
        break;
      }
    } else if (!(h === b || r(h, b, n, o, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), f;
}
function UC(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (o, r) {
      n[++t] = [r, o];
    }),
    n
  );
}
function GC(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (o) {
      n[++t] = o;
    }),
    n
  );
}
var qC = 1,
  XC = 2,
  YC = "[object Boolean]",
  ZC = "[object Date]",
  JC = "[object Error]",
  QC = "[object Map]",
  e1 = "[object Number]",
  t1 = "[object RegExp]",
  n1 = "[object Set]",
  o1 = "[object String]",
  r1 = "[object Symbol]",
  i1 = "[object ArrayBuffer]",
  s1 = "[object DataView]",
  Du = xn ? xn.prototype : void 0,
  zs = Du ? Du.valueOf : void 0;
function l1(e, t, n, o, r, i, s) {
  switch (n) {
    case s1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case i1:
      return !(e.byteLength != t.byteLength || !i(new xi(e), new xi(t)));
    case YC:
    case ZC:
    case e1:
      return Ar(+e, +t);
    case JC:
      return e.name == t.name && e.message == t.message;
    case t1:
    case o1:
      return e == t + "";
    case QC:
      var l = UC;
    case n1:
      var a = o & qC;
      if ((l || (l = GC), e.size != t.size && !a)) return !1;
      var c = s.get(e);
      if (c) return c == t;
      (o |= XC), s.set(e, t);
      var u = Jh(l(e), l(t), o, r, i, s);
      return s.delete(e), u;
    case r1:
      if (zs) return zs.call(e) == zs.call(t);
  }
  return !1;
}
var a1 = 1,
  c1 = Object.prototype,
  u1 = c1.hasOwnProperty;
function d1(e, t, n, o, r, i) {
  var s = n & a1,
    l = ku(e),
    a = l.length,
    c = ku(t),
    u = c.length;
  if (a != u && !s) return !1;
  for (var d = a; d--; ) {
    var f = l[d];
    if (!(s ? f in t : u1.call(t, f))) return !1;
  }
  var p = i.get(e),
    h = i.get(t);
  if (p && h) return p == t && h == e;
  var b = !0;
  i.set(e, t), i.set(t, e);
  for (var y = s; ++d < a; ) {
    f = l[d];
    var g = e[f],
      C = t[f];
    if (o) var A = s ? o(C, g, f, t, e, i) : o(g, C, f, e, t, i);
    if (!(A === void 0 ? g === C || r(g, C, n, o, i) : A)) {
      b = !1;
      break;
    }
    y || (y = f == "constructor");
  }
  if (b && !y) {
    var _ = e.constructor,
      E = t.constructor;
    _ != E &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof _ == "function" &&
        _ instanceof _ &&
        typeof E == "function" &&
        E instanceof E
      ) &&
      (b = !1);
  }
  return i.delete(e), i.delete(t), b;
}
var f1 = 1,
  Nu = "[object Arguments]",
  Wu = "[object Array]",
  Zr = "[object Object]",
  h1 = Object.prototype,
  Ku = h1.hasOwnProperty;
function p1(e, t, n, o, r, i) {
  var s = St(e),
    l = St(t),
    a = s ? Wu : hn(e),
    c = l ? Wu : hn(t);
  (a = a == Nu ? Zr : a), (c = c == Nu ? Zr : c);
  var u = a == Zr,
    d = c == Zr,
    f = a == c;
  if (f && yi(e)) {
    if (!yi(t)) return !1;
    (s = !0), (u = !1);
  }
  if (f && !u)
    return (
      i || (i = new Ht()),
      s || ua(e) ? Jh(e, t, n, o, r, i) : l1(e, t, a, n, o, r, i)
    );
  if (!(n & f1)) {
    var p = u && Ku.call(e, "__wrapped__"),
      h = d && Ku.call(t, "__wrapped__");
    if (p || h) {
      var b = p ? e.value() : e,
        y = h ? t.value() : t;
      return i || (i = new Ht()), r(b, y, n, o, i);
    }
  }
  return f ? (i || (i = new Ht()), d1(e, t, n, o, r, i)) : !1;
}
function pa(e, t, n, o, r) {
  return e === t
    ? !0
    : e == null || t == null || (!wn(e) && !wn(t))
    ? e !== e && t !== t
    : p1(e, t, n, o, pa, r);
}
var g1 = 1,
  v1 = 2;
function m1(e, t, n, o) {
  var r = n.length,
    i = r;
  if (e == null) return !i;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++r < i; ) {
    s = n[r];
    var l = s[0],
      a = e[l],
      c = s[1];
    if (s[2]) {
      if (a === void 0 && !(l in e)) return !1;
    } else {
      var u = new Ht(),
        d;
      if (!(d === void 0 ? pa(c, a, g1 | v1, o, u) : d)) return !1;
    }
  }
  return !0;
}
function Qh(e) {
  return e === e && !Pn(e);
}
function b1(e) {
  for (var t = da(e), n = t.length; n--; ) {
    var o = t[n],
      r = e[o];
    t[n] = [o, r, Qh(r)];
  }
  return t;
}
function ep(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function y1(e) {
  var t = b1(e);
  return t.length == 1 && t[0][2]
    ? ep(t[0][0], t[0][1])
    : function (n) {
        return n === e || m1(n, e, t);
      };
}
function x1(e, t) {
  return e != null && t in Object(e);
}
function w1(e, t, n) {
  t = jh(t, e);
  for (var o = -1, r = t.length, i = !1; ++o < r; ) {
    var s = Qi(t[o]);
    if (!(i = e != null && n(e, s))) break;
    e = e[s];
  }
  return i || ++o != r
    ? i
    : ((r = e == null ? 0 : e.length),
      !!r && aa(r) && sa(s, r) && (St(e) || bi(e)));
}
function C1(e, t) {
  return e != null && w1(e, t, x1);
}
var S1 = 1,
  _1 = 2;
function $1(e, t) {
  return fa(e) && Qh(t)
    ? ep(Qi(e), t)
    : function (n) {
        var o = kw(n, e);
        return o === void 0 && o === t ? C1(n, e) : pa(t, o, S1 | _1);
      };
}
function P1(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function E1(e) {
  return function (t) {
    return Dh(t, e);
  };
}
function T1(e) {
  return fa(e) ? P1(Qi(e)) : E1(e);
}
function O1(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? ra
    : typeof e == "object"
    ? St(e)
      ? $1(e[0], e[1])
      : y1(e)
    : T1(e);
}
function R1(e) {
  return function (t, n, o) {
    for (var r = -1, i = Object(t), s = o(t), l = s.length; l--; ) {
      var a = s[++r];
      if (n(i[a], a, i) === !1) break;
    }
    return t;
  };
}
var tp = R1();
function A1(e, t) {
  return e && tp(e, t, da);
}
function M1(e, t) {
  return function (n, o) {
    if (n == null) return n;
    if (!Oo(n)) return e(n, o);
    for (
      var r = n.length, i = -1, s = Object(n);
      ++i < r && o(s[i], i, s) !== !1;

    );
    return n;
  };
}
var z1 = M1(A1);
function xl(e, t, n) {
  ((n !== void 0 && !Ar(e[t], n)) || (n === void 0 && !(t in e))) &&
    la(e, t, n);
}
function I1(e) {
  return wn(e) && Oo(e);
}
function wl(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function k1(e) {
  return ix(e, Hh(e));
}
function B1(e, t, n, o, r, i, s) {
  var l = wl(e, n),
    a = wl(t, n),
    c = s.get(a);
  if (c) {
    xl(e, n, c);
    return;
  }
  var u = i ? i(l, a, n + "", e, t, s) : void 0,
    d = u === void 0;
  if (d) {
    var f = St(a),
      p = !f && yi(a),
      h = !f && !p && ua(a);
    (u = a),
      f || p || h
        ? St(l)
          ? (u = l)
          : I1(l)
          ? (u = U0(l))
          : p
          ? ((d = !1), (u = SC(a)))
          : h
          ? ((d = !1), (u = LC(a)))
          : (u = [])
        : Nw(a) || bi(a)
        ? ((u = l), bi(l) ? (u = k1(l)) : (!Pn(l) || ia(l)) && (u = HC(a)))
        : (d = !1);
  }
  d && (s.set(a, u), r(u, a, o, i, s), s.delete(a)), xl(e, n, u);
}
function np(e, t, n, o, r) {
  e !== t &&
    tp(
      t,
      function (i, s) {
        if ((r || (r = new Ht()), Pn(i))) B1(e, t, s, n, np, o, r);
        else {
          var l = o ? o(wl(e, s), i, s + "", e, t, r) : void 0;
          l === void 0 && (l = i), xl(e, s, l);
        }
      },
      Hh
    );
}
function L1(e, t) {
  var n = -1,
    o = Oo(e) ? Array(e.length) : [];
  return (
    z1(e, function (r, i, s) {
      o[++n] = t(r, i, s);
    }),
    o
  );
}
function H1(e, t) {
  var n = St(e) ? Ah : L1;
  return n(e, O1(t));
}
var Vo = ux(function (e, t, n) {
  np(e, t, n);
});
const to = {
    fontFamily:
      'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontFamilyMono:
      "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
    fontWeight: "400",
    fontWeightStrong: "500",
    cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
    cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
    cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
    borderRadius: "3px",
    borderRadiusSmall: "2px",
    fontSize: "14px",
    fontSizeMini: "12px",
    fontSizeTiny: "12px",
    fontSizeSmall: "14px",
    fontSizeMedium: "14px",
    fontSizeLarge: "15px",
    fontSizeHuge: "16px",
    lineHeight: "1.6",
    heightMini: "16px",
    heightTiny: "22px",
    heightSmall: "28px",
    heightMedium: "34px",
    heightLarge: "40px",
    heightHuge: "46px",
  },
  { fontSize: F1, fontFamily: j1, lineHeight: D1 } = to,
  op = B(
    "body",
    `
 margin: 0;
 font-size: ${F1};
 font-family: ${j1};
 line-height: ${D1};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,
    [
      B(
        "input",
        `
 font-family: inherit;
 font-size: inherit;
 `
      ),
    ]
  ),
  Gn = "n-config-provider",
  _r = "naive-ui-style";
function Te(e, t, n, o, r, i) {
  const s = Rr(),
    l = me(Gn, null);
  if (n) {
    const c = () => {
      const u = i == null ? void 0 : i.value;
      n.mount({
        id: u === void 0 ? t : u + t,
        head: !0,
        props: { bPrefix: u ? `.${u}-` : void 0 },
        anchorMetaName: _r,
        ssr: s,
      }),
        (l != null && l.preflightStyleDisabled) ||
          op.mount({ id: "n-global", head: !0, anchorMetaName: _r, ssr: s });
    };
    s ? c() : $n(c);
  }
  return K(() => {
    var c;
    const {
        theme: { common: u, self: d, peers: f = {} } = {},
        themeOverrides: p = {},
        builtinThemeOverrides: h = {},
      } = r,
      { common: b, peers: y } = p,
      {
        common: g = void 0,
        [e]: { common: C = void 0, self: A = void 0, peers: _ = {} } = {},
      } = (l == null ? void 0 : l.mergedThemeRef.value) || {},
      { common: E = void 0, [e]: P = {} } =
        (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {},
      { common: v, peers: S = {} } = P,
      $ = Vo({}, u || C || g || o.common, E, v, b),
      O = Vo(
        (c = d || A || o.self) === null || c === void 0 ? void 0 : c($),
        h,
        P,
        p
      );
    return {
      common: $,
      self: O,
      peers: Vo({}, o.peers, _, f),
      peerOverrides: Vo({}, h.peers, S, y),
    };
  });
}
Te.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object,
};
const Ci = "n";
function it(e = {}, t = { defaultBordered: !0 }) {
  const n = me(Gn, null);
  return {
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: K(() => {
      var o, r;
      const { bordered: i } = e;
      return i !== void 0
        ? i
        : (r =
            (o = n == null ? void 0 : n.mergedBorderedRef.value) !== null &&
            o !== void 0
              ? o
              : t.defaultBordered) !== null && r !== void 0
        ? r
        : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : zd(Ci),
    namespaceRef: K(() => (n == null ? void 0 : n.mergedNamespaceRef.value)),
  };
}
const N1 = {
  name: "zh-CN",
  global: { undo: "撤销", redo: "重做", confirm: "确认", clear: "清除" },
  Popconfirm: { positiveText: "确认", negativeText: "取消" },
  Cascader: {
    placeholder: "请选择",
    loading: "加载中",
    loadingRequiredMessage: (e) => `加载全部 ${e} 的子节点后才可选中`,
  },
  Time: { dateFormat: "yyyy-MM-dd", dateTimeFormat: "yyyy-MM-dd HH:mm:ss" },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "RRRR-w周",
    clear: "清除",
    now: "此刻",
    confirm: "确认",
    selectTime: "选择时间",
    selectDate: "选择日期",
    datePlaceholder: "选择日期",
    datetimePlaceholder: "选择日期时间",
    monthPlaceholder: "选择月份",
    yearPlaceholder: "选择年份",
    quarterPlaceholder: "选择季度",
    weekPlaceholder: "选择周",
    startDatePlaceholder: "开始日期",
    endDatePlaceholder: "结束日期",
    startDatetimePlaceholder: "开始日期时间",
    endDatetimePlaceholder: "结束日期时间",
    startMonthPlaceholder: "开始月份",
    endMonthPlaceholder: "结束月份",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今天",
  },
  DataTable: {
    checkTableAll: "选择全部表格数据",
    uncheckTableAll: "取消选择全部表格数据",
    confirm: "确认",
    clear: "重置",
  },
  LegacyTransfer: { sourceTitle: "源项", targetTitle: "目标项" },
  Transfer: {
    selectAll: "全选",
    clearAll: "清除",
    unselectAll: "取消全选",
    total: (e) => `共 ${e} 项`,
    selected: (e) => `已选 ${e} 项`,
  },
  Empty: { description: "无数据" },
  Select: { placeholder: "请选择" },
  TimePicker: {
    placeholder: "请选择时间",
    positiveText: "确认",
    negativeText: "取消",
    now: "此刻",
    clear: "清除",
  },
  Pagination: { goto: "跳至", selectionSuffix: "页" },
  DynamicTags: { add: "添加" },
  Log: { loading: "加载中" },
  Input: { placeholder: "请输入" },
  InputNumber: { placeholder: "请输入" },
  DynamicInput: { create: "添加" },
  ThemeEditor: {
    title: "主题编辑器",
    clearAllVars: "清除全部变量",
    clearSearch: "清除搜索",
    filterCompName: "过滤组件名",
    filterVarName: "过滤变量名",
    import: "导入",
    export: "导出",
    restore: "恢复默认",
  },
  Image: {
    tipPrevious: "上一张（←）",
    tipNext: "下一张（→）",
    tipCounterclockwise: "向左旋转",
    tipClockwise: "向右旋转",
    tipZoomOut: "缩小",
    tipZoomIn: "放大",
    tipDownload: "下载",
    tipClose: "关闭（Esc）",
    tipOriginalSize: "缩放到原始尺寸",
  },
};
var W1 = {
    lessThanXSeconds: { one: "不到 1 秒", other: "不到 {{count}} 秒" },
    xSeconds: { one: "1 秒", other: "{{count}} 秒" },
    halfAMinute: "半分钟",
    lessThanXMinutes: { one: "不到 1 分钟", other: "不到 {{count}} 分钟" },
    xMinutes: { one: "1 分钟", other: "{{count}} 分钟" },
    xHours: { one: "1 小时", other: "{{count}} 小时" },
    aboutXHours: { one: "大约 1 小时", other: "大约 {{count}} 小时" },
    xDays: { one: "1 天", other: "{{count}} 天" },
    aboutXWeeks: { one: "大约 1 个星期", other: "大约 {{count}} 个星期" },
    xWeeks: { one: "1 个星期", other: "{{count}} 个星期" },
    aboutXMonths: { one: "大约 1 个月", other: "大约 {{count}} 个月" },
    xMonths: { one: "1 个月", other: "{{count}} 个月" },
    aboutXYears: { one: "大约 1 年", other: "大约 {{count}} 年" },
    xYears: { one: "1 年", other: "{{count}} 年" },
    overXYears: { one: "超过 1 年", other: "超过 {{count}} 年" },
    almostXYears: { one: "将近 1 年", other: "将近 {{count}} 年" },
  },
  K1 = function (t, n, o) {
    var r,
      i = W1[t];
    return (
      typeof i == "string"
        ? (r = i)
        : n === 1
        ? (r = i.one)
        : (r = i.other.replace("{{count}}", String(n))),
      o != null && o.addSuffix
        ? o.comparison && o.comparison > 0
          ? r + "内"
          : r + "前"
        : r
    );
  };
function Is(e) {
  return function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.width ? String(t.width) : e.defaultWidth,
      o = e.formats[n] || e.formats[e.defaultWidth];
    return o;
  };
}
var V1 = {
    full: "y'年'M'月'd'日' EEEE",
    long: "y'年'M'月'd'日'",
    medium: "yyyy-MM-dd",
    short: "yy-MM-dd",
  },
  U1 = {
    full: "zzzz a h:mm:ss",
    long: "z a h:mm:ss",
    medium: "a h:mm:ss",
    short: "a h:mm",
  },
  G1 = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}",
  },
  q1 = {
    date: Is({ formats: V1, defaultWidth: "full" }),
    time: Is({ formats: U1, defaultWidth: "full" }),
    dateTime: Is({ formats: G1, defaultWidth: "full" }),
  };
function ga(e, t) {
  if (t.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        t.length +
        " present"
    );
}
function Cl(e) {
  "@babel/helpers - typeof";
  return (
    (Cl =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Cl(e)
  );
}
function X1(e) {
  ga(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || (Cl(e) === "object" && t === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || t === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || t === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function Y1(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
var Z1 = {};
function J1() {
  return Z1;
}
function Vu(e, t) {
  var n, o, r, i, s, l, a, c;
  ga(1, arguments);
  var u = J1(),
    d = Y1(
      (n =
        (o =
          (r =
            (i = t == null ? void 0 : t.weekStartsOn) !== null && i !== void 0
              ? i
              : t == null ||
                (s = t.locale) === null ||
                s === void 0 ||
                (l = s.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && r !== void 0
            ? r
            : u.weekStartsOn) !== null && o !== void 0
          ? o
          : (a = u.locale) === null ||
            a === void 0 ||
            (c = a.options) === null ||
            c === void 0
          ? void 0
          : c.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = X1(e),
    p = f.getUTCDay(),
    h = (p < d ? 7 : 0) + p - d;
  return f.setUTCDate(f.getUTCDate() - h), f.setUTCHours(0, 0, 0, 0), f;
}
function Q1(e, t, n) {
  ga(2, arguments);
  var o = Vu(e, n),
    r = Vu(t, n);
  return o.getTime() === r.getTime();
}
function Uu(e, t, n) {
  var o = "eeee p";
  return Q1(e, t, n)
    ? o
    : e.getTime() > t.getTime()
    ? "'下个'" + o
    : "'上个'" + o;
}
var eS = {
    lastWeek: Uu,
    yesterday: "'昨天' p",
    today: "'今天' p",
    tomorrow: "'明天' p",
    nextWeek: Uu,
    other: "PP p",
  },
  tS = function (t, n, o, r) {
    var i = eS[t];
    return typeof i == "function" ? i(n, o, r) : i;
  };
function jo(e) {
  return function (t, n) {
    var o = n != null && n.context ? String(n.context) : "standalone",
      r;
    if (o === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        s = n != null && n.width ? String(n.width) : i;
      r = e.formattingValues[s] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth,
        a = n != null && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[a] || e.values[l];
    }
    var c = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[c];
  };
}
var nS = {
    narrow: ["前", "公元"],
    abbreviated: ["前", "公元"],
    wide: ["公元前", "公元"],
  },
  oS = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["第一季", "第二季", "第三季", "第四季"],
    wide: ["第一季度", "第二季度", "第三季度", "第四季度"],
  },
  rS = {
    narrow: [
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "十",
      "十一",
      "十二",
    ],
    abbreviated: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    wide: [
      "一月",
      "二月",
      "三月",
      "四月",
      "五月",
      "六月",
      "七月",
      "八月",
      "九月",
      "十月",
      "十一月",
      "十二月",
    ],
  },
  iS = {
    narrow: ["日", "一", "二", "三", "四", "五", "六"],
    short: ["日", "一", "二", "三", "四", "五", "六"],
    abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    wide: [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ],
  },
  sS = {
    narrow: {
      am: "上",
      pm: "下",
      midnight: "凌晨",
      noon: "午",
      morning: "早",
      afternoon: "下午",
      evening: "晚",
      night: "夜",
    },
    abbreviated: {
      am: "上午",
      pm: "下午",
      midnight: "凌晨",
      noon: "中午",
      morning: "早晨",
      afternoon: "中午",
      evening: "晚上",
      night: "夜间",
    },
    wide: {
      am: "上午",
      pm: "下午",
      midnight: "凌晨",
      noon: "中午",
      morning: "早晨",
      afternoon: "中午",
      evening: "晚上",
      night: "夜间",
    },
  },
  lS = {
    narrow: {
      am: "上",
      pm: "下",
      midnight: "凌晨",
      noon: "午",
      morning: "早",
      afternoon: "下午",
      evening: "晚",
      night: "夜",
    },
    abbreviated: {
      am: "上午",
      pm: "下午",
      midnight: "凌晨",
      noon: "中午",
      morning: "早晨",
      afternoon: "中午",
      evening: "晚上",
      night: "夜间",
    },
    wide: {
      am: "上午",
      pm: "下午",
      midnight: "凌晨",
      noon: "中午",
      morning: "早晨",
      afternoon: "中午",
      evening: "晚上",
      night: "夜间",
    },
  },
  aS = function (t, n) {
    var o = Number(t);
    switch (n == null ? void 0 : n.unit) {
      case "date":
        return o.toString() + "日";
      case "hour":
        return o.toString() + "时";
      case "minute":
        return o.toString() + "分";
      case "second":
        return o.toString() + "秒";
      default:
        return "第 " + o.toString();
    }
  },
  cS = {
    ordinalNumber: aS,
    era: jo({ values: nS, defaultWidth: "wide" }),
    quarter: jo({
      values: oS,
      defaultWidth: "wide",
      argumentCallback: function (t) {
        return t - 1;
      },
    }),
    month: jo({ values: rS, defaultWidth: "wide" }),
    day: jo({ values: iS, defaultWidth: "wide" }),
    dayPeriod: jo({
      values: sS,
      defaultWidth: "wide",
      formattingValues: lS,
      defaultFormattingWidth: "wide",
    }),
  };
function Do(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = n.width,
      r = (o && e.matchPatterns[o]) || e.matchPatterns[e.defaultMatchWidth],
      i = t.match(r);
    if (!i) return null;
    var s = i[0],
      l = (o && e.parsePatterns[o]) || e.parsePatterns[e.defaultParseWidth],
      a = Array.isArray(l)
        ? dS(l, function (d) {
            return d.test(s);
          })
        : uS(l, function (d) {
            return d.test(s);
          }),
      c;
    (c = e.valueCallback ? e.valueCallback(a) : a),
      (c = n.valueCallback ? n.valueCallback(c) : c);
    var u = t.slice(s.length);
    return { value: c, rest: u };
  };
}
function uS(e, t) {
  for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function dS(e, t) {
  for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
function fS(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = t.match(e.matchPattern);
    if (!o) return null;
    var r = o[0],
      i = t.match(e.parsePattern);
    if (!i) return null;
    var s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    var l = t.slice(r.length);
    return { value: s, rest: l };
  };
}
var hS = /^(第\s*)?\d+(日|时|分|秒)?/i,
  pS = /\d+/i,
  gS = { narrow: /^(前)/i, abbreviated: /^(前)/i, wide: /^(公元前|公元)/i },
  vS = { any: [/^(前)/i, /^(公元)/i] },
  mS = {
    narrow: /^[1234]/i,
    abbreviated: /^第[一二三四]刻/i,
    wide: /^第[一二三四]刻钟/i,
  },
  bS = { any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i] },
  yS = {
    narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
    abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
    wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i,
  },
  xS = {
    narrow: [
      /^一/i,
      /^二/i,
      /^三/i,
      /^四/i,
      /^五/i,
      /^六/i,
      /^七/i,
      /^八/i,
      /^九/i,
      /^十(?!(一|二))/i,
      /^十一/i,
      /^十二/i,
    ],
    any: [
      /^一|1/i,
      /^二|2/i,
      /^三|3/i,
      /^四|4/i,
      /^五|5/i,
      /^六|6/i,
      /^七|7/i,
      /^八|8/i,
      /^九|9/i,
      /^十(?!(一|二))|10/i,
      /^十一|11/i,
      /^十二|12/i,
    ],
  },
  wS = {
    narrow: /^[一二三四五六日]/i,
    short: /^[一二三四五六日]/i,
    abbreviated: /^周[一二三四五六日]/i,
    wide: /^星期[一二三四五六日]/i,
  },
  CS = { any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i] },
  SS = { any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i },
  _S = {
    any: {
      am: /^上午?/i,
      pm: /^下午?/i,
      midnight: /^午夜/i,
      noon: /^[中正]午/i,
      morning: /^早上/i,
      afternoon: /^下午/i,
      evening: /^晚上?/i,
      night: /^凌晨/i,
    },
  },
  $S = {
    ordinalNumber: fS({
      matchPattern: hS,
      parsePattern: pS,
      valueCallback: function (t) {
        return parseInt(t, 10);
      },
    }),
    era: Do({
      matchPatterns: gS,
      defaultMatchWidth: "wide",
      parsePatterns: vS,
      defaultParseWidth: "any",
    }),
    quarter: Do({
      matchPatterns: mS,
      defaultMatchWidth: "wide",
      parsePatterns: bS,
      defaultParseWidth: "any",
      valueCallback: function (t) {
        return t + 1;
      },
    }),
    month: Do({
      matchPatterns: yS,
      defaultMatchWidth: "wide",
      parsePatterns: xS,
      defaultParseWidth: "any",
    }),
    day: Do({
      matchPatterns: wS,
      defaultMatchWidth: "wide",
      parsePatterns: CS,
      defaultParseWidth: "any",
    }),
    dayPeriod: Do({
      matchPatterns: SS,
      defaultMatchWidth: "any",
      parsePatterns: _S,
      defaultParseWidth: "any",
    }),
  },
  PS = {
    code: "zh-CN",
    formatDistance: K1,
    formatLong: q1,
    formatRelative: tS,
    localize: cS,
    match: $S,
    options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
  };
const ES = { name: "zh-CN", locale: PS };
function es(e, t, n) {
  if (!t) return;
  const o = Rr(),
    r = me(Gn, null),
    i = () => {
      const s = n.value;
      t.mount({
        id: s === void 0 ? e : s + e,
        head: !0,
        anchorMetaName: _r,
        props: { bPrefix: s ? `.${s}-` : void 0 },
        ssr: o,
      }),
        (r != null && r.preflightStyleDisabled) ||
          op.mount({ id: "n-global", head: !0, anchorMetaName: _r, ssr: o });
    };
  o ? i() : $n(i);
}
function $t(e, t, n, o) {
  var r;
  n || Zl("useThemeClass", "cssVarsRef is not passed");
  const i =
      (r = me(Gn, null)) === null || r === void 0
        ? void 0
        : r.mergedThemeHashRef,
    s = Q(""),
    l = Rr();
  let a;
  const c = `__${e}`,
    u = () => {
      let d = c;
      const f = t ? t.value : void 0,
        p = i == null ? void 0 : i.value;
      p && (d += `-${p}`), f && (d += `-${f}`);
      const { themeOverrides: h, builtinThemeOverrides: b } = o;
      h && (d += `-${yr(JSON.stringify(h))}`),
        b && (d += `-${yr(JSON.stringify(b))}`),
        (s.value = d),
        (a = () => {
          const y = n.value;
          let g = "";
          for (const C in y) g += `${C}: ${y[C]};`;
          B(`.${d}`, g).mount({ id: d, ssr: l }), (a = void 0);
        });
    };
  return (
    Yn(() => {
      u();
    }),
    {
      themeClass: s,
      onRender: () => {
        a == null || a();
      },
    }
  );
}
function Ro(e, t, n) {
  if (!t) return;
  const o = Rr(),
    r = K(() => {
      const { value: s } = t;
      if (!s) return;
      const l = s[e];
      if (l) return l;
    }),
    i = () => {
      Yn(() => {
        const { value: s } = n,
          l = `${s}${e}Rtl`;
        if (oy(l, o)) return;
        const { value: a } = r;
        a &&
          a.style.mount({
            id: l,
            head: !0,
            anchorMetaName: _r,
            props: { bPrefix: s ? `.${s}-` : void 0 },
            ssr: o,
          });
      });
    };
  return o ? i() : $n(i), r;
}
function Mr(e, t) {
  return pe({
    name: gC(e),
    setup() {
      var n;
      const o =
        (n = me(Gn, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var r;
        const i =
          (r = o == null ? void 0 : o.value) === null || r === void 0
            ? void 0
            : r[e];
        return i ? i() : t;
      };
    },
  });
}
const TS = pe({
    name: "ChevronRight",
    render() {
      return w(
        "svg",
        {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        w("path", {
          d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
          fill: "currentColor",
        })
      );
    },
  }),
  OS = Mr(
    "close",
    w(
      "svg",
      {
        viewBox: "0 0 12 12",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": !0,
      },
      w(
        "g",
        {
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd",
        },
        w(
          "g",
          { fill: "currentColor", "fill-rule": "nonzero" },
          w("path", {
            d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z",
          })
        )
      )
    )
  ),
  va = Mr(
    "error",
    w(
      "svg",
      {
        viewBox: "0 0 48 48",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      },
      w(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        w(
          "g",
          { "fill-rule": "nonzero" },
          w("path", {
            d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z",
          })
        )
      )
    )
  ),
  Si = Mr(
    "info",
    w(
      "svg",
      {
        viewBox: "0 0 28 28",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      },
      w(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        w(
          "g",
          { "fill-rule": "nonzero" },
          w("path", {
            d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z",
          })
        )
      )
    )
  ),
  ma = Mr(
    "success",
    w(
      "svg",
      {
        viewBox: "0 0 48 48",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      },
      w(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        w(
          "g",
          { "fill-rule": "nonzero" },
          w("path", {
            d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z",
          })
        )
      )
    )
  ),
  ba = Mr(
    "warning",
    w(
      "svg",
      {
        viewBox: "0 0 24 24",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
      },
      w(
        "g",
        { stroke: "none", "stroke-width": "1", "fill-rule": "evenodd" },
        w(
          "g",
          { "fill-rule": "nonzero" },
          w("path", {
            d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z",
          })
        )
      )
    )
  ),
  ya = pe({
    name: "BaseIconSwitchTransition",
    setup(e, { slots: t }) {
      const n = qi();
      return () =>
        w(pt, { name: "icon-switch-transition", appear: n.value }, t);
    },
  }),
  rp = pe({
    name: "FadeInExpandTransition",
    props: {
      appear: Boolean,
      group: Boolean,
      mode: String,
      onLeave: Function,
      onAfterLeave: Function,
      onAfterEnter: Function,
      width: Boolean,
      reverse: Boolean,
    },
    setup(e, { slots: t }) {
      function n(l) {
        e.width
          ? (l.style.maxWidth = `${l.offsetWidth}px`)
          : (l.style.maxHeight = `${l.offsetHeight}px`),
          l.offsetWidth;
      }
      function o(l) {
        e.width ? (l.style.maxWidth = "0") : (l.style.maxHeight = "0"),
          l.offsetWidth;
        const { onLeave: a } = e;
        a && a();
      }
      function r(l) {
        e.width ? (l.style.maxWidth = "") : (l.style.maxHeight = "");
        const { onAfterLeave: a } = e;
        a && a();
      }
      function i(l) {
        if (((l.style.transition = "none"), e.width)) {
          const a = l.offsetWidth;
          (l.style.maxWidth = "0"),
            l.offsetWidth,
            (l.style.transition = ""),
            (l.style.maxWidth = `${a}px`);
        } else if (e.reverse)
          (l.style.maxHeight = `${l.offsetHeight}px`),
            l.offsetHeight,
            (l.style.transition = ""),
            (l.style.maxHeight = "0");
        else {
          const a = l.offsetHeight;
          (l.style.maxHeight = "0"),
            l.offsetWidth,
            (l.style.transition = ""),
            (l.style.maxHeight = `${a}px`);
        }
        l.offsetWidth;
      }
      function s(l) {
        var a;
        e.width
          ? (l.style.maxWidth = "")
          : e.reverse || (l.style.maxHeight = ""),
          (a = e.onAfterEnter) === null || a === void 0 || a.call(e);
      }
      return () => {
        const { group: l, width: a, appear: c, mode: u } = e,
          d = l ? Yv : pt,
          f = {
            name: a
              ? "fade-in-width-expand-transition"
              : "fade-in-height-expand-transition",
            appear: c,
            onEnter: i,
            onAfterEnter: s,
            onBeforeLeave: n,
            onLeave: o,
            onAfterLeave: r,
          };
        return l || (f.mode = u), w(d, f, t);
      };
    },
  }),
  RS = Y(
    "base-icon",
    `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
    [
      B(
        "svg",
        `
 height: 1em;
 width: 1em;
 `
      ),
    ]
  ),
  ts = pe({
    name: "BaseIcon",
    props: {
      role: String,
      ariaLabel: String,
      ariaDisabled: { type: Boolean, default: void 0 },
      ariaHidden: { type: Boolean, default: void 0 },
      clsPrefix: { type: String, required: !0 },
      onClick: Function,
      onMousedown: Function,
      onMouseup: Function,
    },
    setup(e) {
      es("-base-icon", RS, Be(e, "clsPrefix"));
    },
    render() {
      return w(
        "i",
        {
          class: `${this.clsPrefix}-base-icon`,
          onClick: this.onClick,
          onMousedown: this.onMousedown,
          onMouseup: this.onMouseup,
          role: this.role,
          "aria-label": this.ariaLabel,
          "aria-hidden": this.ariaHidden,
          "aria-disabled": this.ariaDisabled,
        },
        this.$slots
      );
    },
  }),
  AS = Y(
    "base-close",
    `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,
    [
      J(
        "absolute",
        `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `
      ),
      B(
        "&::before",
        `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `
      ),
      mn("disabled", [
        B(
          "&:hover",
          `
 color: var(--n-close-icon-color-hover);
 `
        ),
        B(
          "&:hover::before",
          `
 background-color: var(--n-close-color-hover);
 `
        ),
        B(
          "&:focus::before",
          `
 background-color: var(--n-close-color-hover);
 `
        ),
        B(
          "&:active",
          `
 color: var(--n-close-icon-color-pressed);
 `
        ),
        B(
          "&:active::before",
          `
 background-color: var(--n-close-color-pressed);
 `
        ),
      ]),
      J(
        "disabled",
        `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `
      ),
      J("round", [
        B(
          "&::before",
          `
 border-radius: 50%;
 `
        ),
      ]),
    ]
  ),
  ns = pe({
    name: "BaseClose",
    props: {
      isButtonTag: { type: Boolean, default: !0 },
      clsPrefix: { type: String, required: !0 },
      disabled: { type: Boolean, default: void 0 },
      focusable: { type: Boolean, default: !0 },
      round: Boolean,
      onClick: Function,
      absolute: Boolean,
    },
    setup(e) {
      return (
        es("-base-close", AS, Be(e, "clsPrefix")),
        () => {
          const {
            clsPrefix: t,
            disabled: n,
            absolute: o,
            round: r,
            isButtonTag: i,
          } = e;
          return w(
            i ? "button" : "div",
            {
              type: i ? "button" : void 0,
              tabindex: n || !e.focusable ? -1 : 0,
              "aria-disabled": n,
              "aria-label": "close",
              role: i ? void 0 : "button",
              disabled: n,
              class: [
                `${t}-base-close`,
                o && `${t}-base-close--absolute`,
                n && `${t}-base-close--disabled`,
                r && `${t}-base-close--round`,
              ],
              onMousedown: (l) => {
                e.focusable || l.preventDefault();
              },
              onClick: e.onClick,
            },
            w(ts, { clsPrefix: t }, { default: () => w(OS, null) })
          );
        }
      );
    },
  }),
  { cubicBezierEaseInOut: MS } = to;
function _i({
  originalTransform: e = "",
  left: t = 0,
  top: n = 0,
  transition: o = `all .3s ${MS} !important`,
} = {}) {
  return [
    B(
      "&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",
      { transform: `${e} scale(0.75)`, left: t, top: n, opacity: 0 }
    ),
    B(
      "&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",
      { transform: `scale(1) ${e}`, left: t, top: n, opacity: 1 }
    ),
    B(
      "&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",
      {
        transformOrigin: "center",
        position: "absolute",
        left: t,
        top: n,
        transition: o,
      }
    ),
  ];
}
const zS = B([
    B(
      "@keyframes rotator",
      `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`
    ),
    Y(
      "base-loading",
      `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,
      [
        ee(
          "transition-wrapper",
          `
 position: absolute;
 width: 100%;
 height: 100%;
 `,
          [_i()]
        ),
        ee(
          "placeholder",
          `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
          [
            _i({
              left: "50%",
              top: "50%",
              originalTransform: "translateX(-50%) translateY(-50%)",
            }),
          ]
        ),
        ee(
          "container",
          `
 animation: rotator 3s linear infinite both;
 `,
          [
            ee(
              "icon",
              `
 height: 1em;
 width: 1em;
 `
            ),
          ]
        ),
      ]
    ),
  ]),
  ks = "1.6s",
  IS = {
    strokeWidth: { type: Number, default: 28 },
    stroke: { type: String, default: void 0 },
  },
  xa = pe({
    name: "BaseLoading",
    props: Object.assign(
      {
        clsPrefix: { type: String, required: !0 },
        show: { type: Boolean, default: !0 },
        scale: { type: Number, default: 1 },
        radius: { type: Number, default: 100 },
      },
      IS
    ),
    setup(e) {
      es("-base-loading", zS, Be(e, "clsPrefix"));
    },
    render() {
      const {
          clsPrefix: e,
          radius: t,
          strokeWidth: n,
          stroke: o,
          scale: r,
        } = this,
        i = t / r;
      return w(
        "div",
        { class: `${e}-base-loading`, role: "img", "aria-label": "loading" },
        w(ya, null, {
          default: () =>
            this.show
              ? w(
                  "div",
                  {
                    key: "icon",
                    class: `${e}-base-loading__transition-wrapper`,
                  },
                  w(
                    "div",
                    { class: `${e}-base-loading__container` },
                    w(
                      "svg",
                      {
                        class: `${e}-base-loading__icon`,
                        viewBox: `0 0 ${2 * i} ${2 * i}`,
                        xmlns: "http://www.w3.org/2000/svg",
                        style: { color: o },
                      },
                      w(
                        "g",
                        null,
                        w("animateTransform", {
                          attributeName: "transform",
                          type: "rotate",
                          values: `0 ${i} ${i};270 ${i} ${i}`,
                          begin: "0s",
                          dur: ks,
                          fill: "freeze",
                          repeatCount: "indefinite",
                        }),
                        w(
                          "circle",
                          {
                            class: `${e}-base-loading__icon`,
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-width": n,
                            "stroke-linecap": "round",
                            cx: i,
                            cy: i,
                            r: t - n / 2,
                            "stroke-dasharray": 5.67 * t,
                            "stroke-dashoffset": 18.48 * t,
                          },
                          w("animateTransform", {
                            attributeName: "transform",
                            type: "rotate",
                            values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,
                            begin: "0s",
                            dur: ks,
                            fill: "freeze",
                            repeatCount: "indefinite",
                          }),
                          w("animate", {
                            attributeName: "stroke-dashoffset",
                            values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
                            begin: "0s",
                            dur: ks,
                            fill: "freeze",
                            repeatCount: "indefinite",
                          })
                        )
                      )
                    )
                  )
                )
              : w(
                  "div",
                  {
                    key: "placeholder",
                    class: `${e}-base-loading__placeholder`,
                  },
                  this.$slots
                ),
        })
      );
    },
  });
function Gu(e) {
  return Array.isArray(e) ? e : [e];
}
const Sl = { STOP: "STOP" };
function ip(e, t) {
  const n = t(e);
  e.children !== void 0 && n !== Sl.STOP && e.children.forEach((o) => ip(o, t));
}
function kS(e, t = {}) {
  const { preserveGroup: n = !1 } = t,
    o = [],
    r = n
      ? (s) => {
          s.isLeaf || (o.push(s.key), i(s.children));
        }
      : (s) => {
          s.isLeaf || (s.isGroup || o.push(s.key), i(s.children));
        };
  function i(s) {
    s.forEach(r);
  }
  return i(e), o;
}
function BS(e, t) {
  const { isLeaf: n } = e;
  return n !== void 0 ? n : !t(e);
}
function LS(e) {
  return e.children;
}
function HS(e) {
  return e.key;
}
function FS() {
  return !1;
}
function jS(e, t) {
  const { isLeaf: n } = e;
  return !(n === !1 && !Array.isArray(t(e)));
}
function DS(e) {
  return e.disabled === !0;
}
function NS(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Bs(e) {
  var t;
  return e == null
    ? []
    : Array.isArray(e)
    ? e
    : (t = e.checkedKeys) !== null && t !== void 0
    ? t
    : [];
}
function Ls(e) {
  var t;
  return e == null || Array.isArray(e)
    ? []
    : (t = e.indeterminateKeys) !== null && t !== void 0
    ? t
    : [];
}
function WS(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) || n.add(o);
    }),
    Array.from(n)
  );
}
function KS(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) && n.delete(o);
    }),
    Array.from(n)
  );
}
function VS(e) {
  return (e == null ? void 0 : e.type) === "group";
}
class US extends Error {
  constructor() {
    super(),
      (this.message =
        "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
  }
}
function GS(e, t, n, o) {
  return $i(t.concat(e), n, o, !1);
}
function qS(e, t) {
  const n = new Set();
  return (
    e.forEach((o) => {
      const r = t.treeNodeMap.get(o);
      if (r !== void 0) {
        let i = r.parent;
        for (; i !== null && !(i.disabled || n.has(i.key)); )
          n.add(i.key), (i = i.parent);
      }
    }),
    n
  );
}
function XS(e, t, n, o) {
  const r = $i(t, n, o, !1),
    i = $i(e, n, o, !0),
    s = qS(e, n),
    l = [];
  return (
    r.forEach((a) => {
      (i.has(a) || s.has(a)) && l.push(a);
    }),
    l.forEach((a) => r.delete(a)),
    r
  );
}
function Hs(e, t) {
  const {
    checkedKeys: n,
    keysToCheck: o,
    keysToUncheck: r,
    indeterminateKeys: i,
    cascade: s,
    leafOnly: l,
    checkStrategy: a,
    allowNotLoaded: c,
  } = e;
  if (!s)
    return o !== void 0
      ? { checkedKeys: WS(n, o), indeterminateKeys: Array.from(i) }
      : r !== void 0
      ? { checkedKeys: KS(n, r), indeterminateKeys: Array.from(i) }
      : { checkedKeys: Array.from(n), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: u } = t;
  let d;
  r !== void 0
    ? (d = XS(r, n, t, c))
    : o !== void 0
    ? (d = GS(o, n, t, c))
    : (d = $i(n, t, c, !1));
  const f = a === "parent",
    p = a === "child" || l,
    h = d,
    b = new Set(),
    y = Math.max.apply(null, Array.from(u.keys()));
  for (let g = y; g >= 0; g -= 1) {
    const C = g === 0,
      A = u.get(g);
    for (const _ of A) {
      if (_.isLeaf) continue;
      const { key: E, shallowLoaded: P } = _;
      if (
        (p &&
          P &&
          _.children.forEach((O) => {
            !O.disabled &&
              !O.isLeaf &&
              O.shallowLoaded &&
              h.has(O.key) &&
              h.delete(O.key);
          }),
        _.disabled || !P)
      )
        continue;
      let v = !0,
        S = !1,
        $ = !0;
      for (const O of _.children) {
        const F = O.key;
        if (!O.disabled) {
          if (($ && ($ = !1), h.has(F))) S = !0;
          else if (b.has(F)) {
            (S = !0), (v = !1);
            break;
          } else if (((v = !1), S)) break;
        }
      }
      v && !$
        ? (f &&
            _.children.forEach((O) => {
              !O.disabled && h.has(O.key) && h.delete(O.key);
            }),
          h.add(E))
        : S && b.add(E),
        C && p && h.has(E) && h.delete(E);
    }
  }
  return { checkedKeys: Array.from(h), indeterminateKeys: Array.from(b) };
}
function $i(e, t, n, o) {
  const { treeNodeMap: r, getChildren: i } = t,
    s = new Set(),
    l = new Set(e);
  return (
    e.forEach((a) => {
      const c = r.get(a);
      c !== void 0 &&
        ip(c, (u) => {
          if (u.disabled) return Sl.STOP;
          const { key: d } = u;
          if (!s.has(d) && (s.add(d), l.add(d), NS(u.rawNode, i))) {
            if (o) return Sl.STOP;
            if (!n) throw new US();
          }
        });
    }),
    l
  );
}
function YS(e, { includeGroup: t = !1, includeSelf: n = !0 }, o) {
  var r;
  const i = o.treeNodeMap;
  let s = e == null ? null : (r = i.get(e)) !== null && r !== void 0 ? r : null;
  const l = { keyPath: [], treeNodePath: [], treeNode: s };
  if (s != null && s.ignored) return (l.treeNode = null), l;
  for (; s; )
    !s.ignored && (t || !s.isGroup) && l.treeNodePath.push(s), (s = s.parent);
  return (
    l.treeNodePath.reverse(),
    n || l.treeNodePath.pop(),
    (l.keyPath = l.treeNodePath.map((a) => a.key)),
    l
  );
}
function ZS(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function JS(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1];
}
function qu(e, t, { loop: n = !1, includeDisabled: o = !1 } = {}) {
  const r = t === "prev" ? QS : JS,
    i = { reverse: t === "prev" };
  let s = !1,
    l = null;
  function a(c) {
    if (c !== null) {
      if (c === e) {
        if (!s) s = !0;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!c.disabled || o) && !c.ignored && !c.isGroup) {
        l = c;
        return;
      }
      if (c.isGroup) {
        const u = wa(c, i);
        u !== null ? (l = u) : a(r(c, n));
      } else {
        const u = r(c, !1);
        if (u !== null) a(u);
        else {
          const d = e_(c);
          d != null && d.isGroup ? a(r(d, n)) : n && a(r(c, !0));
        }
      }
    }
  }
  return a(e), l;
}
function QS(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r - 1 + o) % o] : r === 0 ? null : n[r - 1];
}
function e_(e) {
  return e.parent;
}
function wa(e, t = {}) {
  const { reverse: n = !1 } = t,
    { children: o } = e;
  if (o) {
    const { length: r } = o,
      i = n ? r - 1 : 0,
      s = n ? -1 : r,
      l = n ? -1 : 1;
    for (let a = i; a !== s; a += l) {
      const c = o[a];
      if (!c.disabled && !c.ignored)
        if (c.isGroup) {
          const u = wa(c, t);
          if (u !== null) return u;
        } else return c;
    }
  }
  return null;
}
const t_ = {
  getChild() {
    return this.ignored ? null : wa(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return qu(this, "next", e);
  },
  getPrev(e = {}) {
    return qu(this, "prev", e);
  },
};
function n_(e, t) {
  const n = t ? new Set(t) : void 0,
    o = [];
  function r(i) {
    i.forEach((s) => {
      o.push(s),
        !(s.isLeaf || !s.children || s.ignored) &&
          (s.isGroup || n === void 0 || n.has(s.key)) &&
          r(s.children);
    });
  }
  return r(e), o;
}
function o_(e, t) {
  const n = e.key;
  for (; t; ) {
    if (t.key === n) return !0;
    t = t.parent;
  }
  return !1;
}
function sp(e, t, n, o, r, i = null, s = 0) {
  const l = [];
  return (
    e.forEach((a, c) => {
      var u;
      const d = Object.create(o);
      if (
        ((d.rawNode = a),
        (d.siblings = l),
        (d.level = s),
        (d.index = c),
        (d.isFirstChild = c === 0),
        (d.isLastChild = c + 1 === e.length),
        (d.parent = i),
        !d.ignored)
      ) {
        const f = r(a);
        Array.isArray(f) && (d.children = sp(f, t, n, o, r, d, s + 1));
      }
      l.push(d),
        t.set(d.key, d),
        n.has(s) || n.set(s, []),
        (u = n.get(s)) === null || u === void 0 || u.push(d);
    }),
    l
  );
}
function r_(e, t = {}) {
  var n;
  const o = new Map(),
    r = new Map(),
    {
      getDisabled: i = DS,
      getIgnored: s = FS,
      getIsGroup: l = VS,
      getKey: a = HS,
    } = t,
    c = (n = t.getChildren) !== null && n !== void 0 ? n : LS,
    u = t.ignoreEmptyChildren
      ? (_) => {
          const E = c(_);
          return Array.isArray(E) ? (E.length ? E : null) : E;
        }
      : c,
    d = Object.assign(
      {
        get key() {
          return a(this.rawNode);
        },
        get disabled() {
          return i(this.rawNode);
        },
        get isGroup() {
          return l(this.rawNode);
        },
        get isLeaf() {
          return BS(this.rawNode, u);
        },
        get shallowLoaded() {
          return jS(this.rawNode, u);
        },
        get ignored() {
          return s(this.rawNode);
        },
        contains(_) {
          return o_(this, _);
        },
      },
      t_
    ),
    f = sp(e, o, r, d, u);
  function p(_) {
    if (_ == null) return null;
    const E = o.get(_);
    return E && !E.isGroup && !E.ignored ? E : null;
  }
  function h(_) {
    if (_ == null) return null;
    const E = o.get(_);
    return E && !E.ignored ? E : null;
  }
  function b(_, E) {
    const P = h(_);
    return P ? P.getPrev(E) : null;
  }
  function y(_, E) {
    const P = h(_);
    return P ? P.getNext(E) : null;
  }
  function g(_) {
    const E = h(_);
    return E ? E.getParent() : null;
  }
  function C(_) {
    const E = h(_);
    return E ? E.getChild() : null;
  }
  const A = {
    treeNodes: f,
    treeNodeMap: o,
    levelTreeNodeMap: r,
    maxLevel: Math.max(...r.keys()),
    getChildren: u,
    getFlattenedNodes(_) {
      return n_(f, _);
    },
    getNode: p,
    getPrev: b,
    getNext: y,
    getParent: g,
    getChild: C,
    getFirstAvailableNode() {
      return ZS(f);
    },
    getPath(_, E = {}) {
      return YS(_, E, A);
    },
    getCheckedKeys(_, E = {}) {
      const {
        cascade: P = !0,
        leafOnly: v = !1,
        checkStrategy: S = "all",
        allowNotLoaded: $ = !1,
      } = E;
      return Hs(
        {
          checkedKeys: Bs(_),
          indeterminateKeys: Ls(_),
          cascade: P,
          leafOnly: v,
          checkStrategy: S,
          allowNotLoaded: $,
        },
        A
      );
    },
    check(_, E, P = {}) {
      const {
        cascade: v = !0,
        leafOnly: S = !1,
        checkStrategy: $ = "all",
        allowNotLoaded: O = !1,
      } = P;
      return Hs(
        {
          checkedKeys: Bs(E),
          indeterminateKeys: Ls(E),
          keysToCheck: _ == null ? [] : Gu(_),
          cascade: v,
          leafOnly: S,
          checkStrategy: $,
          allowNotLoaded: O,
        },
        A
      );
    },
    uncheck(_, E, P = {}) {
      const {
        cascade: v = !0,
        leafOnly: S = !1,
        checkStrategy: $ = "all",
        allowNotLoaded: O = !1,
      } = P;
      return Hs(
        {
          checkedKeys: Bs(E),
          indeterminateKeys: Ls(E),
          keysToUncheck: _ == null ? [] : Gu(_),
          cascade: v,
          leafOnly: S,
          checkStrategy: $,
          allowNotLoaded: O,
        },
        A
      );
    },
    getNonLeafKeys(_ = {}) {
      return kS(f, _);
    },
  };
  return A;
}
const ae = {
    neutralBase: "#FFF",
    neutralInvertBase: "#000",
    neutralTextBase: "#000",
    neutralPopover: "#fff",
    neutralCard: "#fff",
    neutralModal: "#fff",
    neutralBody: "#fff",
    alpha1: "0.82",
    alpha2: "0.72",
    alpha3: "0.38",
    alpha4: "0.24",
    alpha5: "0.18",
    alphaClose: "0.6",
    alphaDisabled: "0.5",
    alphaDisabledInput: "0.02",
    alphaPending: "0.05",
    alphaTablePending: "0.02",
    alphaPressed: "0.07",
    alphaAvatar: "0.2",
    alphaRail: "0.14",
    alphaProgressRail: ".08",
    alphaBorder: "0.12",
    alphaDivider: "0.06",
    alphaInput: "0",
    alphaAction: "0.02",
    alphaTab: "0.04",
    alphaScrollbar: "0.25",
    alphaScrollbarHover: "0.4",
    alphaCode: "0.05",
    alphaTag: "0.02",
    primaryHover: "#36ad6a",
    primaryDefault: "#18a058",
    primaryActive: "#0c7a43",
    primarySuppl: "#36ad6a",
    infoHover: "#4098fc",
    infoDefault: "#2080f0",
    infoActive: "#1060c9",
    infoSuppl: "#4098fc",
    errorHover: "#de576d",
    errorDefault: "#d03050",
    errorActive: "#ab1f3f",
    errorSuppl: "#de576d",
    warningHover: "#fcb040",
    warningDefault: "#f0a020",
    warningActive: "#c97c10",
    warningSuppl: "#fcb040",
    successHover: "#36ad6a",
    successDefault: "#18a058",
    successActive: "#0c7a43",
    successSuppl: "#36ad6a",
  },
  i_ = Kn(ae.neutralBase),
  lp = Kn(ae.neutralInvertBase),
  s_ = `rgba(${lp.slice(0, 3).join(", ")}, `;
function Xu(e) {
  return `${s_ + String(e)})`;
}
function et(e) {
  const t = Array.from(lp);
  return (t[3] = Number(e)), _o(i_, t);
}
const gt = Object.assign(Object.assign({ name: "common" }, to), {
    baseColor: ae.neutralBase,
    primaryColor: ae.primaryDefault,
    primaryColorHover: ae.primaryHover,
    primaryColorPressed: ae.primaryActive,
    primaryColorSuppl: ae.primarySuppl,
    infoColor: ae.infoDefault,
    infoColorHover: ae.infoHover,
    infoColorPressed: ae.infoActive,
    infoColorSuppl: ae.infoSuppl,
    successColor: ae.successDefault,
    successColorHover: ae.successHover,
    successColorPressed: ae.successActive,
    successColorSuppl: ae.successSuppl,
    warningColor: ae.warningDefault,
    warningColorHover: ae.warningHover,
    warningColorPressed: ae.warningActive,
    warningColorSuppl: ae.warningSuppl,
    errorColor: ae.errorDefault,
    errorColorHover: ae.errorHover,
    errorColorPressed: ae.errorActive,
    errorColorSuppl: ae.errorSuppl,
    textColorBase: ae.neutralTextBase,
    textColor1: "rgb(31, 34, 37)",
    textColor2: "rgb(51, 54, 57)",
    textColor3: "rgb(118, 124, 130)",
    textColorDisabled: et(ae.alpha4),
    placeholderColor: et(ae.alpha4),
    placeholderColorDisabled: et(ae.alpha5),
    iconColor: et(ae.alpha4),
    iconColorHover: Dr(et(ae.alpha4), { lightness: 0.75 }),
    iconColorPressed: Dr(et(ae.alpha4), { lightness: 0.9 }),
    iconColorDisabled: et(ae.alpha5),
    opacity1: ae.alpha1,
    opacity2: ae.alpha2,
    opacity3: ae.alpha3,
    opacity4: ae.alpha4,
    opacity5: ae.alpha5,
    dividerColor: "rgb(239, 239, 245)",
    borderColor: "rgb(224, 224, 230)",
    closeIconColor: et(Number(ae.alphaClose)),
    closeIconColorHover: et(Number(ae.alphaClose)),
    closeIconColorPressed: et(Number(ae.alphaClose)),
    closeColorHover: "rgba(0, 0, 0, .09)",
    closeColorPressed: "rgba(0, 0, 0, .13)",
    clearColor: et(ae.alpha4),
    clearColorHover: Dr(et(ae.alpha4), { lightness: 0.75 }),
    clearColorPressed: Dr(et(ae.alpha4), { lightness: 0.9 }),
    scrollbarColor: Xu(ae.alphaScrollbar),
    scrollbarColorHover: Xu(ae.alphaScrollbarHover),
    scrollbarWidth: "5px",
    scrollbarHeight: "5px",
    scrollbarBorderRadius: "5px",
    progressRailColor: et(ae.alphaProgressRail),
    railColor: "rgb(219, 219, 223)",
    popoverColor: ae.neutralPopover,
    tableColor: ae.neutralCard,
    cardColor: ae.neutralCard,
    modalColor: ae.neutralModal,
    bodyColor: ae.neutralBody,
    tagColor: "#eee",
    avatarColor: et(ae.alphaAvatar),
    invertedColor: "rgb(0, 20, 40)",
    inputColor: et(ae.alphaInput),
    codeColor: "rgb(244, 244, 248)",
    tabColor: "rgb(247, 247, 250)",
    actionColor: "rgb(250, 250, 252)",
    tableHeaderColor: "rgb(250, 250, 252)",
    hoverColor: "rgb(243, 243, 245)",
    tableColorHover: "rgba(0, 0, 100, 0.03)",
    tableColorStriped: "rgba(0, 0, 100, 0.02)",
    pressedColor: "rgb(237, 237, 239)",
    opacityDisabled: ae.alphaDisabled,
    inputColorDisabled: "rgb(250, 250, 252)",
    buttonColor2: "rgba(46, 51, 56, .05)",
    buttonColor2Hover: "rgba(46, 51, 56, .09)",
    buttonColor2Pressed: "rgba(46, 51, 56, .13)",
    boxShadow1:
      "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
    boxShadow2:
      "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
    boxShadow3:
      "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
  }),
  l_ = {
    railInsetHorizontal: "auto 2px 4px 2px",
    railInsetVertical: "2px 4px 2px auto",
    railColor: "transparent",
  };
function a_(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: o,
    scrollbarWidth: r,
    scrollbarBorderRadius: i,
  } = e;
  return Object.assign(Object.assign({}, l_), {
    height: o,
    width: r,
    borderRadius: i,
    color: t,
    colorHover: n,
  });
}
const os = { name: "Scrollbar", common: gt, self: a_ },
  { cubicBezierEaseInOut: Yu } = to;
function Ca({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: o = Yu,
  leaveCubicBezier: r = Yu,
} = {}) {
  return [
    B(`&.${e}-transition-enter-active`, {
      transition: `all ${t} ${o}!important`,
    }),
    B(`&.${e}-transition-leave-active`, {
      transition: `all ${n} ${r}!important`,
    }),
    B(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
      opacity: 0,
    }),
    B(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
      opacity: 1,
    }),
  ];
}
const c_ = Y(
    "scrollbar",
    `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,
    [
      B(">", [
        Y(
          "scrollbar-container",
          `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `,
          [
            B(
              "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
              `
 width: 0;
 height: 0;
 display: none;
 `
            ),
            B(">", [
              Y(
                "scrollbar-content",
                `
 box-sizing: border-box;
 min-width: 100%;
 `
              ),
            ]),
          ]
        ),
      ]),
      B(">, +", [
        Y(
          "scrollbar-rail",
          `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `,
          [
            J(
              "horizontal",
              `
 inset: var(--n-scrollbar-rail-inset-horizontal);
 height: var(--n-scrollbar-height);
 `,
              [
                B(">", [
                  ee(
                    "scrollbar",
                    `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `
                  ),
                ]),
              ]
            ),
            J(
              "vertical",
              `
 inset: var(--n-scrollbar-rail-inset-vertical);
 width: var(--n-scrollbar-width);
 `,
              [
                B(">", [
                  ee(
                    "scrollbar",
                    `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `
                  ),
                ]),
              ]
            ),
            J("disabled", [B(">", [ee("scrollbar", "pointer-events: none;")])]),
            B(">", [
              ee(
                "scrollbar",
                `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,
                [
                  Ca(),
                  B(
                    "&:hover",
                    "background-color: var(--n-scrollbar-color-hover);"
                  ),
                ]
              ),
            ]),
          ]
        ),
      ]),
    ]
  ),
  u_ = Object.assign(Object.assign({}, Te.props), {
    duration: { type: Number, default: 0 },
    scrollable: { type: Boolean, default: !0 },
    xScrollable: Boolean,
    trigger: { type: String, default: "hover" },
    useUnifiedContainer: Boolean,
    triggerDisplayManually: Boolean,
    container: Function,
    content: Function,
    containerClass: String,
    containerStyle: [String, Object],
    contentClass: [String, Array],
    contentStyle: [String, Object],
    horizontalRailStyle: [String, Object],
    verticalRailStyle: [String, Object],
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    internalOnUpdateScrollLeft: Function,
    internalHoistYRail: Boolean,
  }),
  rs = pe({
    name: "Scrollbar",
    props: u_,
    inheritAttrs: !1,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          inlineThemeDisabled: n,
          mergedRtlRef: o,
        } = it(e),
        r = Ro("Scrollbar", o, t),
        i = Q(null),
        s = Q(null),
        l = Q(null),
        a = Q(null),
        c = Q(null),
        u = Q(null),
        d = Q(null),
        f = Q(null),
        p = Q(null),
        h = Q(null),
        b = Q(null),
        y = Q(0),
        g = Q(0),
        C = Q(!1),
        A = Q(!1);
      let _ = !1,
        E = !1,
        P,
        v,
        S = 0,
        $ = 0,
        O = 0,
        F = 0;
      const T = _y(),
        W = Te("Scrollbar", "-scrollbar", c_, os, e, t),
        q = K(() => {
          const { value: N } = f,
            { value: oe } = u,
            { value: fe } = h;
          return N === null || oe === null || fe === null
            ? 0
            : Math.min(N, (fe * N) / oe + Lc(W.value.self.width) * 1.5);
        }),
        I = K(() => `${q.value}px`),
        U = K(() => {
          const { value: N } = p,
            { value: oe } = d,
            { value: fe } = b;
          return N === null || oe === null || fe === null
            ? 0
            : (fe * N) / oe + Lc(W.value.self.height) * 1.5;
        }),
        z = K(() => `${U.value}px`),
        X = K(() => {
          const { value: N } = f,
            { value: oe } = y,
            { value: fe } = u,
            { value: Ae } = h;
          if (N === null || fe === null || Ae === null) return 0;
          {
            const Ue = fe - N;
            return Ue ? (oe / Ue) * (Ae - q.value) : 0;
          }
        }),
        de = K(() => `${X.value}px`),
        ce = K(() => {
          const { value: N } = p,
            { value: oe } = g,
            { value: fe } = d,
            { value: Ae } = b;
          if (N === null || fe === null || Ae === null) return 0;
          {
            const Ue = fe - N;
            return Ue ? (oe / Ue) * (Ae - U.value) : 0;
          }
        }),
        Ce = K(() => `${ce.value}px`),
        ye = K(() => {
          const { value: N } = f,
            { value: oe } = u;
          return N !== null && oe !== null && oe > N;
        }),
        Ke = K(() => {
          const { value: N } = p,
            { value: oe } = d;
          return N !== null && oe !== null && oe > N;
        }),
        Ve = K(() => {
          const { trigger: N } = e;
          return N === "none" || C.value;
        }),
        vt = K(() => {
          const { trigger: N } = e;
          return N === "none" || A.value;
        }),
        ge = K(() => {
          const { container: N } = e;
          return N ? N() : s.value;
        }),
        M = K(() => {
          const { content: N } = e;
          return N ? N() : l.value;
        }),
        te = (N, oe) => {
          if (!e.scrollable) return;
          if (typeof N == "number") {
            m(N, oe ?? 0, 0, !1, "auto");
            return;
          }
          const {
            left: fe,
            top: Ae,
            index: Ue,
            elSize: st,
            position: Pt,
            behavior: ke,
            el: Et,
            debounce: Mo = !0,
          } = N;
          (fe !== void 0 || Ae !== void 0) && m(fe ?? 0, Ae ?? 0, 0, !1, ke),
            Et !== void 0
              ? m(0, Et.offsetTop, Et.offsetHeight, Mo, ke)
              : Ue !== void 0 && st !== void 0
              ? m(0, Ue * st, st, Mo, ke)
              : Pt === "bottom"
              ? m(0, Number.MAX_SAFE_INTEGER, 0, !1, ke)
              : Pt === "top" && m(0, 0, 0, !1, ke);
        },
        H = Th(() => {
          e.container || te({ top: y.value, left: g.value });
        }),
        ie = () => {
          H.isDeactivated || re();
        },
        xe = (N) => {
          if (H.isDeactivated) return;
          const { onResize: oe } = e;
          oe && oe(N), re();
        },
        Oe = (N, oe) => {
          if (!e.scrollable) return;
          const { value: fe } = ge;
          fe &&
            (typeof N == "object" ? fe.scrollBy(N) : fe.scrollBy(N, oe || 0));
        };
      function m(N, oe, fe, Ae, Ue) {
        const { value: st } = ge;
        if (st) {
          if (Ae) {
            const { scrollTop: Pt, offsetHeight: ke } = st;
            if (oe > Pt) {
              oe + fe <= Pt + ke ||
                st.scrollTo({ left: N, top: oe + fe - ke, behavior: Ue });
              return;
            }
          }
          st.scrollTo({ left: N, top: oe, behavior: Ue });
        }
      }
      function x() {
        Z(), D(), re();
      }
      function R() {
        L();
      }
      function L() {
        k(), G();
      }
      function k() {
        v !== void 0 && window.clearTimeout(v),
          (v = window.setTimeout(() => {
            A.value = !1;
          }, e.duration));
      }
      function G() {
        P !== void 0 && window.clearTimeout(P),
          (P = window.setTimeout(() => {
            C.value = !1;
          }, e.duration));
      }
      function Z() {
        P !== void 0 && window.clearTimeout(P), (C.value = !0);
      }
      function D() {
        v !== void 0 && window.clearTimeout(v), (A.value = !0);
      }
      function V(N) {
        const { onScroll: oe } = e;
        oe && oe(N), j();
      }
      function j() {
        const { value: N } = ge;
        N &&
          ((y.value = N.scrollTop),
          (g.value = N.scrollLeft * (r != null && r.value ? -1 : 1)));
      }
      function ne() {
        const { value: N } = M;
        N && ((u.value = N.offsetHeight), (d.value = N.offsetWidth));
        const { value: oe } = ge;
        oe && ((f.value = oe.offsetHeight), (p.value = oe.offsetWidth));
        const { value: fe } = c,
          { value: Ae } = a;
        fe && (b.value = fe.offsetWidth), Ae && (h.value = Ae.offsetHeight);
      }
      function se() {
        const { value: N } = ge;
        N &&
          ((y.value = N.scrollTop),
          (g.value = N.scrollLeft * (r != null && r.value ? -1 : 1)),
          (f.value = N.offsetHeight),
          (p.value = N.offsetWidth),
          (u.value = N.scrollHeight),
          (d.value = N.scrollWidth));
        const { value: oe } = c,
          { value: fe } = a;
        oe && (b.value = oe.offsetWidth), fe && (h.value = fe.offsetHeight);
      }
      function re() {
        e.scrollable && (e.useUnifiedContainer ? se() : (ne(), j()));
      }
      function he(N) {
        var oe;
        return !(
          !((oe = i.value) === null || oe === void 0) && oe.contains(br(N))
        );
      }
      function be(N) {
        N.preventDefault(),
          N.stopPropagation(),
          (E = !0),
          Fe("mousemove", window, Ee, !0),
          Fe("mouseup", window, Se, !0),
          ($ = g.value),
          (O =
            r != null && r.value ? window.innerWidth - N.clientX : N.clientX);
      }
      function Ee(N) {
        if (!E) return;
        P !== void 0 && window.clearTimeout(P),
          v !== void 0 && window.clearTimeout(v);
        const { value: oe } = p,
          { value: fe } = d,
          { value: Ae } = U;
        if (oe === null || fe === null) return;
        const st =
            ((r != null && r.value
              ? window.innerWidth - N.clientX - O
              : N.clientX - O) *
              (fe - oe)) /
            (oe - Ae),
          Pt = fe - oe;
        let ke = $ + st;
        (ke = Math.min(Pt, ke)), (ke = Math.max(ke, 0));
        const { value: Et } = ge;
        if (Et) {
          Et.scrollLeft = ke * (r != null && r.value ? -1 : 1);
          const { internalOnUpdateScrollLeft: Mo } = e;
          Mo && Mo(ke);
        }
      }
      function Se(N) {
        N.preventDefault(),
          N.stopPropagation(),
          Re("mousemove", window, Ee, !0),
          Re("mouseup", window, Se, !0),
          (E = !1),
          re(),
          he(N) && L();
      }
      function De(N) {
        N.preventDefault(),
          N.stopPropagation(),
          (_ = !0),
          Fe("mousemove", window, ot, !0),
          Fe("mouseup", window, Rt, !0),
          (S = y.value),
          (F = N.clientY);
      }
      function ot(N) {
        if (!_) return;
        P !== void 0 && window.clearTimeout(P),
          v !== void 0 && window.clearTimeout(v);
        const { value: oe } = f,
          { value: fe } = u,
          { value: Ae } = q;
        if (oe === null || fe === null) return;
        const st = ((N.clientY - F) * (fe - oe)) / (oe - Ae),
          Pt = fe - oe;
        let ke = S + st;
        (ke = Math.min(Pt, ke)), (ke = Math.max(ke, 0));
        const { value: Et } = ge;
        Et && (Et.scrollTop = ke);
      }
      function Rt(N) {
        N.preventDefault(),
          N.stopPropagation(),
          Re("mousemove", window, ot, !0),
          Re("mouseup", window, Rt, !0),
          (_ = !1),
          re(),
          he(N) && L();
      }
      Yn(() => {
        const { value: N } = Ke,
          { value: oe } = ye,
          { value: fe } = t,
          { value: Ae } = c,
          { value: Ue } = a;
        Ae &&
          (N
            ? Ae.classList.remove(`${fe}-scrollbar-rail--disabled`)
            : Ae.classList.add(`${fe}-scrollbar-rail--disabled`)),
          Ue &&
            (oe
              ? Ue.classList.remove(`${fe}-scrollbar-rail--disabled`)
              : Ue.classList.add(`${fe}-scrollbar-rail--disabled`));
      }),
        _t(() => {
          e.container || re();
        }),
        Qe(() => {
          P !== void 0 && window.clearTimeout(P),
            v !== void 0 && window.clearTimeout(v),
            Re("mousemove", window, ot, !0),
            Re("mouseup", window, Rt, !0);
        });
      const Ao = K(() => {
          const {
            common: { cubicBezierEaseInOut: N },
            self: {
              color: oe,
              colorHover: fe,
              height: Ae,
              width: Ue,
              borderRadius: st,
              railInsetHorizontal: Pt,
              railInsetVertical: ke,
              railColor: Et,
            },
          } = W.value;
          return {
            "--n-scrollbar-bezier": N,
            "--n-scrollbar-color": oe,
            "--n-scrollbar-color-hover": fe,
            "--n-scrollbar-border-radius": st,
            "--n-scrollbar-width": Ue,
            "--n-scrollbar-height": Ae,
            "--n-scrollbar-rail-inset-horizontal": Pt,
            "--n-scrollbar-rail-inset-vertical":
              r != null && r.value ? jb(ke) : ke,
            "--n-scrollbar-rail-color": Et,
          };
        }),
        mt = n ? $t("scrollbar", void 0, Ao, e) : void 0;
      return Object.assign(
        Object.assign(
          {},
          {
            scrollTo: te,
            scrollBy: Oe,
            sync: re,
            syncUnifiedContainer: se,
            handleMouseEnterWrapper: x,
            handleMouseLeaveWrapper: R,
          }
        ),
        {
          mergedClsPrefix: t,
          rtlEnabled: r,
          containerScrollTop: y,
          wrapperRef: i,
          containerRef: s,
          contentRef: l,
          yRailRef: a,
          xRailRef: c,
          needYBar: ye,
          needXBar: Ke,
          yBarSizePx: I,
          xBarSizePx: z,
          yBarTopPx: de,
          xBarLeftPx: Ce,
          isShowXBar: Ve,
          isShowYBar: vt,
          isIos: T,
          handleScroll: V,
          handleContentResize: ie,
          handleContainerResize: xe,
          handleYScrollMouseDown: De,
          handleXScrollMouseDown: be,
          cssVars: n ? void 0 : Ao,
          themeClass: mt == null ? void 0 : mt.themeClass,
          onRender: mt == null ? void 0 : mt.onRender,
        }
      );
    },
    render() {
      var e;
      const {
        $slots: t,
        mergedClsPrefix: n,
        triggerDisplayManually: o,
        rtlEnabled: r,
        internalHoistYRail: i,
      } = this;
      if (!this.scrollable)
        return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
      const s = this.trigger === "none",
        l = (u, d) =>
          w(
            "div",
            {
              ref: "yRailRef",
              class: [
                `${n}-scrollbar-rail`,
                `${n}-scrollbar-rail--vertical`,
                u,
              ],
              "data-scrollbar-rail": !0,
              style: [d || "", this.verticalRailStyle],
              "aria-hidden": !0,
            },
            w(s ? jc : pt, s ? null : { name: "fade-in-transition" }, {
              default: () =>
                this.needYBar && this.isShowYBar && !this.isIos
                  ? w("div", {
                      class: `${n}-scrollbar-rail__scrollbar`,
                      style: { height: this.yBarSizePx, top: this.yBarTopPx },
                      onMousedown: this.handleYScrollMouseDown,
                    })
                  : null,
            })
          ),
        a = () => {
          var u, d;
          return (
            (u = this.onRender) === null || u === void 0 || u.call(this),
            w(
              "div",
              Zn(this.$attrs, {
                role: "none",
                ref: "wrapperRef",
                class: [
                  `${n}-scrollbar`,
                  this.themeClass,
                  r && `${n}-scrollbar--rtl`,
                ],
                style: this.cssVars,
                onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
                onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper,
              }),
              [
                this.container
                  ? (d = t.default) === null || d === void 0
                    ? void 0
                    : d.call(t)
                  : w(
                      "div",
                      {
                        role: "none",
                        ref: "containerRef",
                        class: [
                          `${n}-scrollbar-container`,
                          this.containerClass,
                        ],
                        style: this.containerStyle,
                        onScroll: this.handleScroll,
                        onWheel: this.onWheel,
                      },
                      w(
                        fu,
                        { onResize: this.handleContentResize },
                        {
                          default: () =>
                            w(
                              "div",
                              {
                                ref: "contentRef",
                                role: "none",
                                style: [
                                  {
                                    width: this.xScrollable
                                      ? "fit-content"
                                      : null,
                                  },
                                  this.contentStyle,
                                ],
                                class: [
                                  `${n}-scrollbar-content`,
                                  this.contentClass,
                                ],
                              },
                              t
                            ),
                        }
                      )
                    ),
                i ? null : l(void 0, void 0),
                this.xScrollable &&
                  w(
                    "div",
                    {
                      ref: "xRailRef",
                      class: [
                        `${n}-scrollbar-rail`,
                        `${n}-scrollbar-rail--horizontal`,
                      ],
                      style: this.horizontalRailStyle,
                      "data-scrollbar-rail": !0,
                      "aria-hidden": !0,
                    },
                    w(s ? jc : pt, s ? null : { name: "fade-in-transition" }, {
                      default: () =>
                        this.needXBar && this.isShowXBar && !this.isIos
                          ? w("div", {
                              class: `${n}-scrollbar-rail__scrollbar`,
                              style: {
                                width: this.xBarSizePx,
                                right: r ? this.xBarLeftPx : void 0,
                                left: r ? void 0 : this.xBarLeftPx,
                              },
                              onMousedown: this.handleXScrollMouseDown,
                            })
                          : null,
                    })
                  ),
              ]
            )
          );
        },
        c = this.container
          ? a()
          : w(fu, { onResize: this.handleContainerResize }, { default: a });
      return i ? w(He, null, c, l(this.themeClass, this.cssVars)) : c;
    },
  }),
  ap = rs,
  { cubicBezierEaseIn: Zu, cubicBezierEaseOut: Ju } = to;
function cp({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: n = ".9",
  originalTransform: o = "",
  originalTransition: r = "",
} = {}) {
  return [
    B("&.fade-in-scale-up-transition-leave-active", {
      transformOrigin: e,
      transition: `opacity ${t} ${Zu}, transform ${t} ${Zu} ${r && `,${r}`}`,
    }),
    B("&.fade-in-scale-up-transition-enter-active", {
      transformOrigin: e,
      transition: `opacity ${t} ${Ju}, transform ${t} ${Ju} ${r && `,${r}`}`,
    }),
    B(
      "&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",
      { opacity: 0, transform: `${o} scale(${n})` }
    ),
    B(
      "&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",
      { opacity: 1, transform: `${o} scale(1)` }
    ),
  ];
}
const d_ = Y(
    "base-wave",
    `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`
  ),
  f_ = pe({
    name: "BaseWave",
    props: { clsPrefix: { type: String, required: !0 } },
    setup(e) {
      es("-base-wave", d_, Be(e, "clsPrefix"));
      const t = Q(null),
        n = Q(!1);
      let o = null;
      return (
        Qe(() => {
          o !== null && window.clearTimeout(o);
        }),
        {
          active: n,
          selfRef: t,
          play() {
            o !== null && (window.clearTimeout(o), (n.value = !1), (o = null)),
              yn(() => {
                var r;
                (r = t.value) === null || r === void 0 || r.offsetHeight,
                  (n.value = !0),
                  (o = window.setTimeout(() => {
                    (n.value = !1), (o = null);
                  }, 1e3));
              });
          },
        }
      );
    },
    render() {
      const { clsPrefix: e } = this;
      return w("div", {
        ref: "selfRef",
        "aria-hidden": !0,
        class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`],
      });
    },
  }),
  h_ = {
    space: "6px",
    spaceArrow: "10px",
    arrowOffset: "10px",
    arrowOffsetVertical: "10px",
    arrowHeight: "6px",
    padding: "8px 14px",
  };
function p_(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: o,
    borderRadius: r,
    fontSize: i,
    dividerColor: s,
  } = e;
  return Object.assign(Object.assign({}, h_), {
    fontSize: i,
    borderRadius: r,
    color: n,
    dividerColor: s,
    textColor: o,
    boxShadow: t,
  });
}
const Sa = { name: "Popover", common: gt, self: p_ },
  Fs = { top: "bottom", bottom: "top", left: "right", right: "left" },
  Ge = "var(--n-arrow-height) * 1.414",
  g_ = B([
    Y(
      "popover",
      `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,
      [
        B(">", [
          Y(
            "scrollbar",
            `
 height: inherit;
 max-height: inherit;
 `
          ),
        ]),
        mn(
          "raw",
          `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,
          [
            mn("scrollable", [
              mn("show-header-or-footer", "padding: var(--n-padding);"),
            ]),
          ]
        ),
        ee(
          "header",
          `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `
        ),
        ee(
          "footer",
          `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `
        ),
        J("scrollable, show-header-or-footer", [
          ee(
            "content",
            `
 padding: var(--n-padding);
 `
          ),
        ]),
      ]
    ),
    Y(
      "popover-shared",
      `
 transform-origin: inherit;
 `,
      [
        Y(
          "popover-arrow-wrapper",
          `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,
          [
            Y(
              "popover-arrow",
              `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ge});
 height: calc(${Ge});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `
            ),
          ]
        ),
        B(
          "&.popover-transition-enter-from, &.popover-transition-leave-to",
          `
 opacity: 0;
 transform: scale(.85);
 `
        ),
        B(
          "&.popover-transition-enter-to, &.popover-transition-leave-from",
          `
 transform: scale(1);
 opacity: 1;
 `
        ),
        B(
          "&.popover-transition-enter-active",
          `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `
        ),
        B(
          "&.popover-transition-leave-active",
          `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `
        ),
      ]
    ),
    yt(
      "top-start",
      `
 top: calc(${Ge} / -2);
 left: calc(${Kt("top-start")} - var(--v-offset-left));
 `
    ),
    yt(
      "top",
      `
 top: calc(${Ge} / -2);
 transform: translateX(calc(${Ge} / -2)) rotate(45deg);
 left: 50%;
 `
    ),
    yt(
      "top-end",
      `
 top: calc(${Ge} / -2);
 right: calc(${Kt("top-end")} + var(--v-offset-left));
 `
    ),
    yt(
      "bottom-start",
      `
 bottom: calc(${Ge} / -2);
 left: calc(${Kt("bottom-start")} - var(--v-offset-left));
 `
    ),
    yt(
      "bottom",
      `
 bottom: calc(${Ge} / -2);
 transform: translateX(calc(${Ge} / -2)) rotate(45deg);
 left: 50%;
 `
    ),
    yt(
      "bottom-end",
      `
 bottom: calc(${Ge} / -2);
 right: calc(${Kt("bottom-end")} + var(--v-offset-left));
 `
    ),
    yt(
      "left-start",
      `
 left: calc(${Ge} / -2);
 top: calc(${Kt("left-start")} - var(--v-offset-top));
 `
    ),
    yt(
      "left",
      `
 left: calc(${Ge} / -2);
 transform: translateY(calc(${Ge} / -2)) rotate(45deg);
 top: 50%;
 `
    ),
    yt(
      "left-end",
      `
 left: calc(${Ge} / -2);
 bottom: calc(${Kt("left-end")} + var(--v-offset-top));
 `
    ),
    yt(
      "right-start",
      `
 right: calc(${Ge} / -2);
 top: calc(${Kt("right-start")} - var(--v-offset-top));
 `
    ),
    yt(
      "right",
      `
 right: calc(${Ge} / -2);
 transform: translateY(calc(${Ge} / -2)) rotate(45deg);
 top: 50%;
 `
    ),
    yt(
      "right-end",
      `
 right: calc(${Ge} / -2);
 bottom: calc(${Kt("right-end")} + var(--v-offset-top));
 `
    ),
    ...H1(
      {
        top: ["right-start", "left-start"],
        right: ["top-end", "bottom-end"],
        bottom: ["right-end", "left-end"],
        left: ["top-start", "bottom-start"],
      },
      (e, t) => {
        const n = ["right", "left"].includes(t),
          o = n ? "width" : "height";
        return e.map((r) => {
          const i = r.split("-")[1] === "end",
            l = `calc((${`var(--v-target-${o}, 0px)`} - ${Ge}) / 2)`,
            a = Kt(r);
          return B(`[v-placement="${r}"] >`, [
            Y("popover-shared", [
              J("center-arrow", [
                Y(
                  "popover-arrow",
                  `${t}: calc(max(${l}, ${a}) ${i ? "+" : "-"} var(--v-offset-${
                    n ? "left" : "top"
                  }));`
                ),
              ]),
            ]),
          ]);
        });
      }
    ),
  ]);
function Kt(e) {
  return ["top", "bottom"].includes(e.split("-")[0])
    ? "var(--n-arrow-offset)"
    : "var(--n-arrow-offset-vertical)";
}
function yt(e, t) {
  const n = e.split("-")[0],
    o = ["top", "bottom"].includes(n)
      ? "height: var(--n-space-arrow);"
      : "width: var(--n-space-arrow);";
  return B(`[v-placement="${e}"] >`, [
    Y(
      "popover-shared",
      `
 margin-${Fs[n]}: var(--n-space);
 `,
      [
        J(
          "show-arrow",
          `
 margin-${Fs[n]}: var(--n-space-arrow);
 `
        ),
        J(
          "overlap",
          `
 margin: 0;
 `
        ),
        cy(
          "popover-arrow-wrapper",
          `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Fs[n]}: auto;
 ${o}
 `,
          [Y("popover-arrow", t)]
        ),
      ]
    ),
  ]);
}
const up = Object.assign(Object.assign({}, Te.props), {
  to: Po.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  minWidth: Number,
  maxWidth: Number,
});
function dp({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: n,
  arrowWrapperStyle: o,
  clsPrefix: r,
}) {
  return w(
    "div",
    {
      key: "__popover-arrow__",
      style: o,
      class: [`${r}-popover-arrow-wrapper`, n],
    },
    w("div", { class: [`${r}-popover-arrow`, e], style: t })
  );
}
const v_ = pe({
    name: "PopoverBody",
    inheritAttrs: !1,
    props: up,
    setup(e, { slots: t, attrs: n }) {
      const {
          namespaceRef: o,
          mergedClsPrefixRef: r,
          inlineThemeDisabled: i,
        } = it(e),
        s = Te("Popover", "-popover", g_, Sa, e, r),
        l = Q(null),
        a = me("NPopover"),
        c = Q(null),
        u = Q(e.show),
        d = Q(!1);
      Yn(() => {
        const { show: v } = e;
        v && !uy() && !e.internalDeactivateImmediately && (d.value = !0);
      });
      const f = K(() => {
          const { trigger: v, onClickoutside: S } = e,
            $ = [],
            {
              positionManuallyRef: { value: O },
            } = a;
          return (
            O ||
              (v === "click" && !S && $.push([fl, _, void 0, { capture: !0 }]),
              v === "hover" && $.push([Ry, A])),
            S && $.push([fl, _, void 0, { capture: !0 }]),
            (e.displayDirective === "show" || (e.animated && d.value)) &&
              $.push([Qs, e.show]),
            $
          );
        }),
        p = K(() => {
          const {
            common: {
              cubicBezierEaseInOut: v,
              cubicBezierEaseIn: S,
              cubicBezierEaseOut: $,
            },
            self: {
              space: O,
              spaceArrow: F,
              padding: T,
              fontSize: W,
              textColor: q,
              dividerColor: I,
              color: U,
              boxShadow: z,
              borderRadius: X,
              arrowHeight: de,
              arrowOffset: ce,
              arrowOffsetVertical: Ce,
            },
          } = s.value;
          return {
            "--n-box-shadow": z,
            "--n-bezier": v,
            "--n-bezier-ease-in": S,
            "--n-bezier-ease-out": $,
            "--n-font-size": W,
            "--n-text-color": q,
            "--n-color": U,
            "--n-divider-color": I,
            "--n-border-radius": X,
            "--n-arrow-height": de,
            "--n-arrow-offset": ce,
            "--n-arrow-offset-vertical": Ce,
            "--n-padding": T,
            "--n-space": O,
            "--n-space-arrow": F,
          };
        }),
        h = K(() => {
          const v = e.width === "trigger" ? void 0 : si(e.width),
            S = [];
          v && S.push({ width: v });
          const { maxWidth: $, minWidth: O } = e;
          return (
            $ && S.push({ maxWidth: si($) }),
            O && S.push({ maxWidth: si(O) }),
            i || S.push(p.value),
            S
          );
        }),
        b = i ? $t("popover", void 0, p, e) : void 0;
      a.setBodyInstance({ syncPosition: y }),
        Qe(() => {
          a.setBodyInstance(null);
        }),
        Ne(Be(e, "show"), (v) => {
          e.animated || (v ? (u.value = !0) : (u.value = !1));
        });
      function y() {
        var v;
        (v = l.value) === null || v === void 0 || v.syncPosition();
      }
      function g(v) {
        e.trigger === "hover" &&
          e.keepAliveOnHover &&
          e.show &&
          a.handleMouseEnter(v);
      }
      function C(v) {
        e.trigger === "hover" && e.keepAliveOnHover && a.handleMouseLeave(v);
      }
      function A(v) {
        e.trigger === "hover" &&
          !E().contains(br(v)) &&
          a.handleMouseMoveOutside(v);
      }
      function _(v) {
        ((e.trigger === "click" && !E().contains(br(v))) || e.onClickoutside) &&
          a.handleClickOutside(v);
      }
      function E() {
        return a.getTriggerElement();
      }
      Pe(Or, c), Pe(Yi, null), Pe(Xi, null);
      function P() {
        if (
          (b == null || b.onRender(),
          !(e.displayDirective === "show" || e.show || (e.animated && d.value)))
        )
          return null;
        let S;
        const $ = a.internalRenderBodyRef.value,
          { value: O } = r;
        if ($)
          S = $(
            [
              `${O}-popover-shared`,
              b == null ? void 0 : b.themeClass.value,
              e.overlap && `${O}-popover-shared--overlap`,
              e.showArrow && `${O}-popover-shared--show-arrow`,
              e.arrowPointToCenter && `${O}-popover-shared--center-arrow`,
            ],
            c,
            h.value,
            g,
            C
          );
        else {
          const { value: F } = a.extraClassRef,
            { internalTrapFocus: T } = e,
            W = !al(t.header) || !al(t.footer),
            q = () => {
              var I, U;
              const z = W
                  ? w(
                      He,
                      null,
                      ct(t.header, (ce) =>
                        ce
                          ? w(
                              "div",
                              {
                                class: [`${O}-popover__header`, e.headerClass],
                                style: e.headerStyle,
                              },
                              ce
                            )
                          : null
                      ),
                      ct(t.default, (ce) =>
                        ce
                          ? w(
                              "div",
                              {
                                class: [
                                  `${O}-popover__content`,
                                  e.contentClass,
                                ],
                                style: e.contentStyle,
                              },
                              t
                            )
                          : null
                      ),
                      ct(t.footer, (ce) =>
                        ce
                          ? w(
                              "div",
                              {
                                class: [`${O}-popover__footer`, e.footerClass],
                                style: e.footerStyle,
                              },
                              ce
                            )
                          : null
                      )
                    )
                  : e.scrollable
                  ? (I = t.default) === null || I === void 0
                    ? void 0
                    : I.call(t)
                  : w(
                      "div",
                      {
                        class: [`${O}-popover__content`, e.contentClass],
                        style: e.contentStyle,
                      },
                      t
                    ),
                X = e.scrollable
                  ? w(
                      ap,
                      {
                        contentClass: W
                          ? void 0
                          : `${O}-popover__content ${
                              (U = e.contentClass) !== null && U !== void 0
                                ? U
                                : ""
                            }`,
                        contentStyle: W ? void 0 : e.contentStyle,
                      },
                      { default: () => z }
                    )
                  : z,
                de = e.showArrow
                  ? dp({
                      arrowClass: e.arrowClass,
                      arrowStyle: e.arrowStyle,
                      arrowWrapperClass: e.arrowWrapperClass,
                      arrowWrapperStyle: e.arrowWrapperStyle,
                      clsPrefix: O,
                    })
                  : null;
              return [X, de];
            };
          S = w(
            "div",
            Zn(
              {
                class: [
                  `${O}-popover`,
                  `${O}-popover-shared`,
                  b == null ? void 0 : b.themeClass.value,
                  F.map((I) => `${O}-${I}`),
                  {
                    [`${O}-popover--scrollable`]: e.scrollable,
                    [`${O}-popover--show-header-or-footer`]: W,
                    [`${O}-popover--raw`]: e.raw,
                    [`${O}-popover-shared--overlap`]: e.overlap,
                    [`${O}-popover-shared--show-arrow`]: e.showArrow,
                    [`${O}-popover-shared--center-arrow`]: e.arrowPointToCenter,
                  },
                ],
                ref: c,
                style: h.value,
                onKeydown: a.handleKeydown,
                onMouseenter: g,
                onMouseleave: C,
              },
              n
            ),
            T ? w(Eh, { active: e.show, autoFocus: !0 }, { default: q }) : q()
          );
        }
        return Wn(S, f.value);
      }
      return {
        displayed: d,
        namespace: o,
        isMounted: a.isMountedRef,
        zIndex: a.zIndexRef,
        followerRef: l,
        adjustedTo: Po(e),
        followerEnabled: u,
        renderContentNode: P,
      };
    },
    render() {
      return w(
        vh,
        {
          ref: "followerRef",
          zIndex: this.zIndex,
          show: this.show,
          enabled: this.followerEnabled,
          to: this.adjustedTo,
          x: this.x,
          y: this.y,
          flip: this.flip,
          placement: this.placement,
          containerClass: this.namespace,
          overlap: this.overlap,
          width: this.width === "trigger" ? "target" : void 0,
          teleportDisabled: this.adjustedTo === Po.tdkey,
        },
        {
          default: () =>
            this.animated
              ? w(
                  pt,
                  {
                    name: "popover-transition",
                    appear: this.isMounted,
                    onEnter: () => {
                      this.followerEnabled = !0;
                    },
                    onAfterLeave: () => {
                      var e;
                      (e = this.internalOnAfterLeave) === null ||
                        e === void 0 ||
                        e.call(this),
                        (this.followerEnabled = !1),
                        (this.displayed = !1);
                    },
                  },
                  { default: this.renderContentNode }
                )
              : this.renderContentNode(),
        }
      );
    },
  }),
  m_ = Object.keys(up),
  b_ = {
    focus: ["onFocus", "onBlur"],
    click: ["onClick"],
    hover: ["onMouseenter", "onMouseleave"],
    manual: [],
    nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"],
  };
function y_(e, t, n) {
  b_[t].forEach((o) => {
    e.props ? (e.props = Object.assign({}, e.props)) : (e.props = {});
    const r = e.props[o],
      i = n[o];
    r
      ? (e.props[o] = (...s) => {
          r(...s), i(...s);
        })
      : (e.props[o] = i);
  });
}
const is = {
    show: { type: Boolean, default: void 0 },
    defaultShow: Boolean,
    showArrow: { type: Boolean, default: !0 },
    trigger: { type: String, default: "hover" },
    delay: { type: Number, default: 100 },
    duration: { type: Number, default: 100 },
    raw: Boolean,
    placement: { type: String, default: "top" },
    x: Number,
    y: Number,
    arrowPointToCenter: Boolean,
    disabled: Boolean,
    getDisabled: Function,
    displayDirective: { type: String, default: "if" },
    arrowClass: String,
    arrowStyle: [String, Object],
    arrowWrapperClass: String,
    arrowWrapperStyle: [String, Object],
    flip: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 },
    width: { type: [Number, String], default: void 0 },
    overlap: Boolean,
    keepAliveOnHover: { type: Boolean, default: !0 },
    zIndex: Number,
    to: Po.propTo,
    scrollable: Boolean,
    contentClass: String,
    contentStyle: [Object, String],
    headerClass: String,
    headerStyle: [Object, String],
    footerClass: String,
    footerStyle: [Object, String],
    onClickoutside: Function,
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    internalDeactivateImmediately: Boolean,
    internalSyncTargetWithParent: Boolean,
    internalInheritedEventHandlers: { type: Array, default: () => [] },
    internalTrapFocus: Boolean,
    internalExtraClass: { type: Array, default: () => [] },
    onShow: [Function, Array],
    onHide: [Function, Array],
    arrow: { type: Boolean, default: void 0 },
    minWidth: Number,
    maxWidth: Number,
  },
  x_ = Object.assign(Object.assign(Object.assign({}, Te.props), is), {
    internalOnAfterLeave: Function,
    internalRenderBody: Function,
  }),
  fp = pe({
    name: "Popover",
    inheritAttrs: !1,
    props: x_,
    __popover__: !0,
    setup(e) {
      const t = qi(),
        n = Q(null),
        o = K(() => e.show),
        r = Q(e.defaultShow),
        i = lh(o, r),
        s = Ct(() => (e.disabled ? !1 : i.value)),
        l = () => {
          if (e.disabled) return !0;
          const { getDisabled: I } = e;
          return !!(I != null && I());
        },
        a = () => (l() ? !1 : i.value),
        c = ah(e, ["arrow", "showArrow"]),
        u = K(() => (e.overlap ? !1 : c.value));
      let d = null;
      const f = Q(null),
        p = Q(null),
        h = Ct(() => e.x !== void 0 && e.y !== void 0);
      function b(I) {
        const {
          "onUpdate:show": U,
          onUpdateShow: z,
          onShow: X,
          onHide: de,
        } = e;
        (r.value = I),
          U && ut(U, I),
          z && ut(z, I),
          I && X && ut(X, !0),
          I && de && ut(de, !1);
      }
      function y() {
        d && d.syncPosition();
      }
      function g() {
        const { value: I } = f;
        I && (window.clearTimeout(I), (f.value = null));
      }
      function C() {
        const { value: I } = p;
        I && (window.clearTimeout(I), (p.value = null));
      }
      function A() {
        const I = l();
        if (e.trigger === "focus" && !I) {
          if (a()) return;
          b(!0);
        }
      }
      function _() {
        const I = l();
        if (e.trigger === "focus" && !I) {
          if (!a()) return;
          b(!1);
        }
      }
      function E() {
        const I = l();
        if (e.trigger === "hover" && !I) {
          if ((C(), f.value !== null || a())) return;
          const U = () => {
              b(!0), (f.value = null);
            },
            { delay: z } = e;
          z === 0 ? U() : (f.value = window.setTimeout(U, z));
        }
      }
      function P() {
        const I = l();
        if (e.trigger === "hover" && !I) {
          if ((g(), p.value !== null || !a())) return;
          const U = () => {
              b(!1), (p.value = null);
            },
            { duration: z } = e;
          z === 0 ? U() : (p.value = window.setTimeout(U, z));
        }
      }
      function v() {
        P();
      }
      function S(I) {
        var U;
        a() &&
          (e.trigger === "click" && (g(), C(), b(!1)),
          (U = e.onClickoutside) === null || U === void 0 || U.call(e, I));
      }
      function $() {
        if (e.trigger === "click" && !l()) {
          g(), C();
          const I = !a();
          b(I);
        }
      }
      function O(I) {
        e.internalTrapFocus && I.key === "Escape" && (g(), C(), b(!1));
      }
      function F(I) {
        r.value = I;
      }
      function T() {
        var I;
        return (I = n.value) === null || I === void 0 ? void 0 : I.targetRef;
      }
      function W(I) {
        d = I;
      }
      return (
        Pe("NPopover", {
          getTriggerElement: T,
          handleKeydown: O,
          handleMouseEnter: E,
          handleMouseLeave: P,
          handleClickOutside: S,
          handleMouseMoveOutside: v,
          setBodyInstance: W,
          positionManuallyRef: h,
          isMountedRef: t,
          zIndexRef: Be(e, "zIndex"),
          extraClassRef: Be(e, "internalExtraClass"),
          internalRenderBodyRef: Be(e, "internalRenderBody"),
        }),
        Yn(() => {
          i.value && l() && b(!1);
        }),
        {
          binderInstRef: n,
          positionManually: h,
          mergedShowConsideringDisabledProp: s,
          uncontrolledShow: r,
          mergedShowArrow: u,
          getMergedShow: a,
          setShow: F,
          handleClick: $,
          handleMouseEnter: E,
          handleMouseLeave: P,
          handleFocus: A,
          handleBlur: _,
          syncPosition: y,
        }
      );
    },
    render() {
      var e;
      const { positionManually: t, $slots: n } = this;
      let o,
        r = !1;
      if (
        !t &&
        (n.activator ? (o = ll(n, "activator")) : (o = ll(n, "trigger")), o)
      ) {
        (o = jt(o)), (o = o.type === $r ? w("span", [o]) : o);
        const i = {
          onClick: this.handleClick,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
        };
        if (!((e = o.type) === null || e === void 0) && e.__popover__)
          (r = !0),
            o.props ||
              (o.props = {
                internalSyncTargetWithParent: !0,
                internalInheritedEventHandlers: [],
              }),
            (o.props.internalSyncTargetWithParent = !0),
            o.props.internalInheritedEventHandlers
              ? (o.props.internalInheritedEventHandlers = [
                  i,
                  ...o.props.internalInheritedEventHandlers,
                ])
              : (o.props.internalInheritedEventHandlers = [i]);
        else {
          const { internalInheritedEventHandlers: s } = this,
            l = [i, ...s],
            a = {
              onBlur: (c) => {
                l.forEach((u) => {
                  u.onBlur(c);
                });
              },
              onFocus: (c) => {
                l.forEach((u) => {
                  u.onFocus(c);
                });
              },
              onClick: (c) => {
                l.forEach((u) => {
                  u.onClick(c);
                });
              },
              onMouseenter: (c) => {
                l.forEach((u) => {
                  u.onMouseenter(c);
                });
              },
              onMouseleave: (c) => {
                l.forEach((u) => {
                  u.onMouseleave(c);
                });
              },
            };
          y_(o, s ? "nested" : t ? "manual" : this.trigger, a);
        }
      }
      return w(
        hh,
        {
          ref: "binderInstRef",
          syncTarget: !r,
          syncTargetWithParent: this.internalSyncTargetWithParent,
        },
        {
          default: () => {
            this.mergedShowConsideringDisabledProp;
            const i = this.getMergedShow();
            return [
              this.internalTrapFocus && i
                ? Wn(w("div", { style: { position: "fixed", inset: 0 } }), [
                    [ea, { enabled: i, zIndex: this.zIndex }],
                  ])
                : null,
              t ? null : w(ph, null, { default: () => o }),
              w(
                v_,
                Vn(
                  this.$props,
                  m_,
                  Object.assign(Object.assign({}, this.$attrs), {
                    showArrow: this.mergedShowArrow,
                    show: i,
                  })
                ),
                {
                  default: () => {
                    var s, l;
                    return (l = (s = this.$slots).default) === null ||
                      l === void 0
                      ? void 0
                      : l.call(s);
                  },
                  header: () => {
                    var s, l;
                    return (l = (s = this.$slots).header) === null ||
                      l === void 0
                      ? void 0
                      : l.call(s);
                  },
                  footer: () => {
                    var s, l;
                    return (l = (s = this.$slots).footer) === null ||
                      l === void 0
                      ? void 0
                      : l.call(s);
                  },
                }
              ),
            ];
          },
        }
      );
    },
  }),
  { cubicBezierEaseInOut: rn } = to;
function w_({ duration: e = ".2s", delay: t = ".1s" } = {}) {
  return [
    B(
      "&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",
      { opacity: 1 }
    ),
    B(
      "&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",
      `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `
    ),
    B(
      "&.fade-in-width-expand-transition-leave-active",
      `
 overflow: hidden;
 transition:
 opacity ${e} ${rn},
 max-width ${e} ${rn} ${t},
 margin-left ${e} ${rn} ${t},
 margin-right ${e} ${rn} ${t};
 `
    ),
    B(
      "&.fade-in-width-expand-transition-enter-active",
      `
 overflow: hidden;
 transition:
 opacity ${e} ${rn} ${t},
 max-width ${e} ${rn},
 margin-left ${e} ${rn},
 margin-right ${e} ${rn};
 `
    ),
  ];
}
const {
  cubicBezierEaseInOut: zt,
  cubicBezierEaseOut: C_,
  cubicBezierEaseIn: S_,
} = to;
function __({
  overflow: e = "hidden",
  duration: t = ".3s",
  originalTransition: n = "",
  leavingDelay: o = "0s",
  foldPadding: r = !1,
  enterToProps: i = void 0,
  leaveToProps: s = void 0,
  reverse: l = !1,
} = {}) {
  const a = l ? "leave" : "enter",
    c = l ? "enter" : "leave";
  return [
    B(
      `&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${a}-to`,
      Object.assign(Object.assign({}, i), { opacity: 1 })
    ),
    B(
      `&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${a}-from`,
      Object.assign(Object.assign({}, s), {
        opacity: 0,
        marginTop: "0 !important",
        marginBottom: "0 !important",
        paddingTop: r ? "0 !important" : void 0,
        paddingBottom: r ? "0 !important" : void 0,
      })
    ),
    B(
      `&.fade-in-height-expand-transition-${c}-active`,
      `
 overflow: ${e};
 transition:
 max-height ${t} ${zt} ${o},
 opacity ${t} ${C_} ${o},
 margin-top ${t} ${zt} ${o},
 margin-bottom ${t} ${zt} ${o},
 padding-top ${t} ${zt} ${o},
 padding-bottom ${t} ${zt} ${o}
 ${n ? `,${n}` : ""}
 `
    ),
    B(
      `&.fade-in-height-expand-transition-${a}-active`,
      `
 overflow: ${e};
 transition:
 max-height ${t} ${zt},
 opacity ${t} ${S_},
 margin-top ${t} ${zt},
 margin-bottom ${t} ${zt},
 padding-top ${t} ${zt},
 padding-bottom ${t} ${zt}
 ${n ? `,${n}` : ""}
 `
    ),
  ];
}
const $_ = Tr && "chrome" in window;
Tr && navigator.userAgent.includes("Firefox");
const P_ = Tr && navigator.userAgent.includes("Safari") && !$_;
function Rn(e) {
  return _o(e, [255, 255, 255, 0.16]);
}
function Jr(e) {
  return _o(e, [0, 0, 0, 0.12]);
}
const E_ = "n-button-group",
  T_ = {
    paddingTiny: "0 6px",
    paddingSmall: "0 10px",
    paddingMedium: "0 14px",
    paddingLarge: "0 18px",
    paddingRoundTiny: "0 10px",
    paddingRoundSmall: "0 14px",
    paddingRoundMedium: "0 18px",
    paddingRoundLarge: "0 22px",
    iconMarginTiny: "6px",
    iconMarginSmall: "6px",
    iconMarginMedium: "6px",
    iconMarginLarge: "6px",
    iconSizeTiny: "14px",
    iconSizeSmall: "18px",
    iconSizeMedium: "18px",
    iconSizeLarge: "20px",
    rippleDuration: ".6s",
  };
function O_(e) {
  const {
    heightTiny: t,
    heightSmall: n,
    heightMedium: o,
    heightLarge: r,
    borderRadius: i,
    fontSizeTiny: s,
    fontSizeSmall: l,
    fontSizeMedium: a,
    fontSizeLarge: c,
    opacityDisabled: u,
    textColor2: d,
    textColor3: f,
    primaryColorHover: p,
    primaryColorPressed: h,
    borderColor: b,
    primaryColor: y,
    baseColor: g,
    infoColor: C,
    infoColorHover: A,
    infoColorPressed: _,
    successColor: E,
    successColorHover: P,
    successColorPressed: v,
    warningColor: S,
    warningColorHover: $,
    warningColorPressed: O,
    errorColor: F,
    errorColorHover: T,
    errorColorPressed: W,
    fontWeight: q,
    buttonColor2: I,
    buttonColor2Hover: U,
    buttonColor2Pressed: z,
    fontWeightStrong: X,
  } = e;
  return Object.assign(Object.assign({}, T_), {
    heightTiny: t,
    heightSmall: n,
    heightMedium: o,
    heightLarge: r,
    borderRadiusTiny: i,
    borderRadiusSmall: i,
    borderRadiusMedium: i,
    borderRadiusLarge: i,
    fontSizeTiny: s,
    fontSizeSmall: l,
    fontSizeMedium: a,
    fontSizeLarge: c,
    opacityDisabled: u,
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: I,
    colorSecondaryHover: U,
    colorSecondaryPressed: z,
    colorTertiary: I,
    colorTertiaryHover: U,
    colorTertiaryPressed: z,
    colorQuaternary: "#0000",
    colorQuaternaryHover: U,
    colorQuaternaryPressed: z,
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: d,
    textColorTertiary: f,
    textColorHover: p,
    textColorPressed: h,
    textColorFocus: p,
    textColorDisabled: d,
    textColorText: d,
    textColorTextHover: p,
    textColorTextPressed: h,
    textColorTextFocus: p,
    textColorTextDisabled: d,
    textColorGhost: d,
    textColorGhostHover: p,
    textColorGhostPressed: h,
    textColorGhostFocus: p,
    textColorGhostDisabled: d,
    border: `1px solid ${b}`,
    borderHover: `1px solid ${p}`,
    borderPressed: `1px solid ${h}`,
    borderFocus: `1px solid ${p}`,
    borderDisabled: `1px solid ${b}`,
    rippleColor: y,
    colorPrimary: y,
    colorHoverPrimary: p,
    colorPressedPrimary: h,
    colorFocusPrimary: p,
    colorDisabledPrimary: y,
    textColorPrimary: g,
    textColorHoverPrimary: g,
    textColorPressedPrimary: g,
    textColorFocusPrimary: g,
    textColorDisabledPrimary: g,
    textColorTextPrimary: y,
    textColorTextHoverPrimary: p,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: p,
    textColorTextDisabledPrimary: d,
    textColorGhostPrimary: y,
    textColorGhostHoverPrimary: p,
    textColorGhostPressedPrimary: h,
    textColorGhostFocusPrimary: p,
    textColorGhostDisabledPrimary: y,
    borderPrimary: `1px solid ${y}`,
    borderHoverPrimary: `1px solid ${p}`,
    borderPressedPrimary: `1px solid ${h}`,
    borderFocusPrimary: `1px solid ${p}`,
    borderDisabledPrimary: `1px solid ${y}`,
    rippleColorPrimary: y,
    colorInfo: C,
    colorHoverInfo: A,
    colorPressedInfo: _,
    colorFocusInfo: A,
    colorDisabledInfo: C,
    textColorInfo: g,
    textColorHoverInfo: g,
    textColorPressedInfo: g,
    textColorFocusInfo: g,
    textColorDisabledInfo: g,
    textColorTextInfo: C,
    textColorTextHoverInfo: A,
    textColorTextPressedInfo: _,
    textColorTextFocusInfo: A,
    textColorTextDisabledInfo: d,
    textColorGhostInfo: C,
    textColorGhostHoverInfo: A,
    textColorGhostPressedInfo: _,
    textColorGhostFocusInfo: A,
    textColorGhostDisabledInfo: C,
    borderInfo: `1px solid ${C}`,
    borderHoverInfo: `1px solid ${A}`,
    borderPressedInfo: `1px solid ${_}`,
    borderFocusInfo: `1px solid ${A}`,
    borderDisabledInfo: `1px solid ${C}`,
    rippleColorInfo: C,
    colorSuccess: E,
    colorHoverSuccess: P,
    colorPressedSuccess: v,
    colorFocusSuccess: P,
    colorDisabledSuccess: E,
    textColorSuccess: g,
    textColorHoverSuccess: g,
    textColorPressedSuccess: g,
    textColorFocusSuccess: g,
    textColorDisabledSuccess: g,
    textColorTextSuccess: E,
    textColorTextHoverSuccess: P,
    textColorTextPressedSuccess: v,
    textColorTextFocusSuccess: P,
    textColorTextDisabledSuccess: d,
    textColorGhostSuccess: E,
    textColorGhostHoverSuccess: P,
    textColorGhostPressedSuccess: v,
    textColorGhostFocusSuccess: P,
    textColorGhostDisabledSuccess: E,
    borderSuccess: `1px solid ${E}`,
    borderHoverSuccess: `1px solid ${P}`,
    borderPressedSuccess: `1px solid ${v}`,
    borderFocusSuccess: `1px solid ${P}`,
    borderDisabledSuccess: `1px solid ${E}`,
    rippleColorSuccess: E,
    colorWarning: S,
    colorHoverWarning: $,
    colorPressedWarning: O,
    colorFocusWarning: $,
    colorDisabledWarning: S,
    textColorWarning: g,
    textColorHoverWarning: g,
    textColorPressedWarning: g,
    textColorFocusWarning: g,
    textColorDisabledWarning: g,
    textColorTextWarning: S,
    textColorTextHoverWarning: $,
    textColorTextPressedWarning: O,
    textColorTextFocusWarning: $,
    textColorTextDisabledWarning: d,
    textColorGhostWarning: S,
    textColorGhostHoverWarning: $,
    textColorGhostPressedWarning: O,
    textColorGhostFocusWarning: $,
    textColorGhostDisabledWarning: S,
    borderWarning: `1px solid ${S}`,
    borderHoverWarning: `1px solid ${$}`,
    borderPressedWarning: `1px solid ${O}`,
    borderFocusWarning: `1px solid ${$}`,
    borderDisabledWarning: `1px solid ${S}`,
    rippleColorWarning: S,
    colorError: F,
    colorHoverError: T,
    colorPressedError: W,
    colorFocusError: T,
    colorDisabledError: F,
    textColorError: g,
    textColorHoverError: g,
    textColorPressedError: g,
    textColorFocusError: g,
    textColorDisabledError: g,
    textColorTextError: F,
    textColorTextHoverError: T,
    textColorTextPressedError: W,
    textColorTextFocusError: T,
    textColorTextDisabledError: d,
    textColorGhostError: F,
    textColorGhostHoverError: T,
    textColorGhostPressedError: W,
    textColorGhostFocusError: T,
    textColorGhostDisabledError: F,
    borderError: `1px solid ${F}`,
    borderHoverError: `1px solid ${T}`,
    borderPressedError: `1px solid ${W}`,
    borderFocusError: `1px solid ${T}`,
    borderDisabledError: `1px solid ${F}`,
    rippleColorError: F,
    waveOpacity: "0.6",
    fontWeight: q,
    fontWeightStrong: X,
  });
}
const hp = { name: "Button", common: gt, self: O_ },
  R_ = B([
    Y(
      "button",
      `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
      [
        J("color", [
          ee("border", { borderColor: "var(--n-border-color)" }),
          J("disabled", [
            ee("border", { borderColor: "var(--n-border-color-disabled)" }),
          ]),
          mn("disabled", [
            B("&:focus", [
              ee("state-border", {
                borderColor: "var(--n-border-color-focus)",
              }),
            ]),
            B("&:hover", [
              ee("state-border", {
                borderColor: "var(--n-border-color-hover)",
              }),
            ]),
            B("&:active", [
              ee("state-border", {
                borderColor: "var(--n-border-color-pressed)",
              }),
            ]),
            J("pressed", [
              ee("state-border", {
                borderColor: "var(--n-border-color-pressed)",
              }),
            ]),
          ]),
        ]),
        J(
          "disabled",
          {
            backgroundColor: "var(--n-color-disabled)",
            color: "var(--n-text-color-disabled)",
          },
          [ee("border", { border: "var(--n-border-disabled)" })]
        ),
        mn("disabled", [
          B(
            "&:focus",
            {
              backgroundColor: "var(--n-color-focus)",
              color: "var(--n-text-color-focus)",
            },
            [ee("state-border", { border: "var(--n-border-focus)" })]
          ),
          B(
            "&:hover",
            {
              backgroundColor: "var(--n-color-hover)",
              color: "var(--n-text-color-hover)",
            },
            [ee("state-border", { border: "var(--n-border-hover)" })]
          ),
          B(
            "&:active",
            {
              backgroundColor: "var(--n-color-pressed)",
              color: "var(--n-text-color-pressed)",
            },
            [ee("state-border", { border: "var(--n-border-pressed)" })]
          ),
          J(
            "pressed",
            {
              backgroundColor: "var(--n-color-pressed)",
              color: "var(--n-text-color-pressed)",
            },
            [ee("state-border", { border: "var(--n-border-pressed)" })]
          ),
        ]),
        J("loading", "cursor: wait;"),
        Y(
          "base-wave",
          `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,
          [
            J("active", {
              zIndex: 1,
              animationName: "button-wave-spread, button-wave-opacity",
            }),
          ]
        ),
        Tr && "MozBoxSizing" in document.createElement("div").style
          ? B("&::moz-focus-inner", { border: 0 })
          : null,
        ee(
          "border, state-border",
          `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `
        ),
        ee("border", { border: "var(--n-border)" }),
        ee("state-border", {
          border: "var(--n-border)",
          borderColor: "#0000",
          zIndex: 1,
        }),
        ee(
          "icon",
          `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,
          [
            Y(
              "icon-slot",
              `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,
              [_i({ top: "50%", originalTransform: "translateY(-50%)" })]
            ),
            w_(),
          ]
        ),
        ee(
          "content",
          `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,
          [
            B("~", [
              ee("icon", { margin: "var(--n-icon-margin)", marginRight: 0 }),
            ]),
          ]
        ),
        J(
          "block",
          `
 display: flex;
 width: 100%;
 `
        ),
        J("dashed", [
          ee("border, state-border", { borderStyle: "dashed !important" }),
        ]),
        J("disabled", {
          cursor: "not-allowed",
          opacity: "var(--n-opacity-disabled)",
        }),
      ]
    ),
    B("@keyframes button-wave-spread", {
      from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" },
      to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" },
    }),
    B("@keyframes button-wave-opacity", {
      from: { opacity: "var(--n-wave-opacity)" },
      to: { opacity: 0 },
    }),
  ]),
  A_ = Object.assign(Object.assign({}, Te.props), {
    color: String,
    textColor: String,
    text: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
    circle: Boolean,
    size: String,
    ghost: Boolean,
    round: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    quaternary: Boolean,
    strong: Boolean,
    focusable: { type: Boolean, default: !0 },
    keyboard: { type: Boolean, default: !0 },
    tag: { type: String, default: "button" },
    type: { type: String, default: "default" },
    dashed: Boolean,
    renderIcon: Function,
    iconPlacement: { type: String, default: "left" },
    attrType: { type: String, default: "button" },
    bordered: { type: Boolean, default: !0 },
    onClick: [Function, Array],
    nativeFocusBehavior: { type: Boolean, default: !P_ },
  }),
  _l = pe({
    name: "Button",
    props: A_,
    setup(e) {
      const t = Q(null),
        n = Q(null),
        o = Q(!1),
        r = Ct(
          () =>
            !e.quaternary &&
            !e.tertiary &&
            !e.secondary &&
            !e.text &&
            (!e.color || e.ghost || e.dashed) &&
            e.bordered
        ),
        i = me(E_, {}),
        { mergedSizeRef: s } = v0(
          {},
          {
            defaultSize: "medium",
            mergedSize: (_) => {
              const { size: E } = e;
              if (E) return E;
              const { size: P } = i;
              if (P) return P;
              const { mergedSize: v } = _ || {};
              return v ? v.value : "medium";
            },
          }
        ),
        l = K(() => e.focusable && !e.disabled),
        a = (_) => {
          var E;
          l.value || _.preventDefault(),
            !e.nativeFocusBehavior &&
              (_.preventDefault(),
              !e.disabled &&
                l.value &&
                ((E = t.value) === null ||
                  E === void 0 ||
                  E.focus({ preventScroll: !0 })));
        },
        c = (_) => {
          var E;
          if (!e.disabled && !e.loading) {
            const { onClick: P } = e;
            P && ut(P, _),
              e.text || (E = n.value) === null || E === void 0 || E.play();
          }
        },
        u = (_) => {
          switch (_.key) {
            case "Enter":
              if (!e.keyboard) return;
              o.value = !1;
          }
        },
        d = (_) => {
          switch (_.key) {
            case "Enter":
              if (!e.keyboard || e.loading) {
                _.preventDefault();
                return;
              }
              o.value = !0;
          }
        },
        f = () => {
          o.value = !1;
        },
        {
          inlineThemeDisabled: p,
          mergedClsPrefixRef: h,
          mergedRtlRef: b,
        } = it(e),
        y = Te("Button", "-button", R_, hp, e, h),
        g = Ro("Button", b, h),
        C = K(() => {
          const _ = y.value,
            {
              common: { cubicBezierEaseInOut: E, cubicBezierEaseOut: P },
              self: v,
            } = _,
            {
              rippleDuration: S,
              opacityDisabled: $,
              fontWeight: O,
              fontWeightStrong: F,
            } = v,
            T = s.value,
            {
              dashed: W,
              type: q,
              ghost: I,
              text: U,
              color: z,
              round: X,
              circle: de,
              textColor: ce,
              secondary: Ce,
              tertiary: ye,
              quaternary: Ke,
              strong: Ve,
            } = e,
            vt = { "font-weight": Ve ? F : O };
          let ge = {
            "--n-color": "initial",
            "--n-color-hover": "initial",
            "--n-color-pressed": "initial",
            "--n-color-focus": "initial",
            "--n-color-disabled": "initial",
            "--n-ripple-color": "initial",
            "--n-text-color": "initial",
            "--n-text-color-hover": "initial",
            "--n-text-color-pressed": "initial",
            "--n-text-color-focus": "initial",
            "--n-text-color-disabled": "initial",
          };
          const M = q === "tertiary",
            te = q === "default",
            H = M ? "default" : q;
          if (U) {
            const D = ce || z;
            ge = {
              "--n-color": "#0000",
              "--n-color-hover": "#0000",
              "--n-color-pressed": "#0000",
              "--n-color-focus": "#0000",
              "--n-color-disabled": "#0000",
              "--n-ripple-color": "#0000",
              "--n-text-color": D || v[le("textColorText", H)],
              "--n-text-color-hover": D
                ? Rn(D)
                : v[le("textColorTextHover", H)],
              "--n-text-color-pressed": D
                ? Jr(D)
                : v[le("textColorTextPressed", H)],
              "--n-text-color-focus": D
                ? Rn(D)
                : v[le("textColorTextHover", H)],
              "--n-text-color-disabled": D || v[le("textColorTextDisabled", H)],
            };
          } else if (I || W) {
            const D = ce || z;
            ge = {
              "--n-color": "#0000",
              "--n-color-hover": "#0000",
              "--n-color-pressed": "#0000",
              "--n-color-focus": "#0000",
              "--n-color-disabled": "#0000",
              "--n-ripple-color": z || v[le("rippleColor", H)],
              "--n-text-color": D || v[le("textColorGhost", H)],
              "--n-text-color-hover": D
                ? Rn(D)
                : v[le("textColorGhostHover", H)],
              "--n-text-color-pressed": D
                ? Jr(D)
                : v[le("textColorGhostPressed", H)],
              "--n-text-color-focus": D
                ? Rn(D)
                : v[le("textColorGhostHover", H)],
              "--n-text-color-disabled":
                D || v[le("textColorGhostDisabled", H)],
            };
          } else if (Ce) {
            const D = te
                ? v.textColor
                : M
                ? v.textColorTertiary
                : v[le("color", H)],
              V = z || D,
              j = q !== "default" && q !== "tertiary";
            ge = {
              "--n-color": j
                ? Wo(V, { alpha: Number(v.colorOpacitySecondary) })
                : v.colorSecondary,
              "--n-color-hover": j
                ? Wo(V, { alpha: Number(v.colorOpacitySecondaryHover) })
                : v.colorSecondaryHover,
              "--n-color-pressed": j
                ? Wo(V, { alpha: Number(v.colorOpacitySecondaryPressed) })
                : v.colorSecondaryPressed,
              "--n-color-focus": j
                ? Wo(V, { alpha: Number(v.colorOpacitySecondaryHover) })
                : v.colorSecondaryHover,
              "--n-color-disabled": v.colorSecondary,
              "--n-ripple-color": "#0000",
              "--n-text-color": V,
              "--n-text-color-hover": V,
              "--n-text-color-pressed": V,
              "--n-text-color-focus": V,
              "--n-text-color-disabled": V,
            };
          } else if (ye || Ke) {
            const D = te
                ? v.textColor
                : M
                ? v.textColorTertiary
                : v[le("color", H)],
              V = z || D;
            ye
              ? ((ge["--n-color"] = v.colorTertiary),
                (ge["--n-color-hover"] = v.colorTertiaryHover),
                (ge["--n-color-pressed"] = v.colorTertiaryPressed),
                (ge["--n-color-focus"] = v.colorSecondaryHover),
                (ge["--n-color-disabled"] = v.colorTertiary))
              : ((ge["--n-color"] = v.colorQuaternary),
                (ge["--n-color-hover"] = v.colorQuaternaryHover),
                (ge["--n-color-pressed"] = v.colorQuaternaryPressed),
                (ge["--n-color-focus"] = v.colorQuaternaryHover),
                (ge["--n-color-disabled"] = v.colorQuaternary)),
              (ge["--n-ripple-color"] = "#0000"),
              (ge["--n-text-color"] = V),
              (ge["--n-text-color-hover"] = V),
              (ge["--n-text-color-pressed"] = V),
              (ge["--n-text-color-focus"] = V),
              (ge["--n-text-color-disabled"] = V);
          } else
            ge = {
              "--n-color": z || v[le("color", H)],
              "--n-color-hover": z ? Rn(z) : v[le("colorHover", H)],
              "--n-color-pressed": z ? Jr(z) : v[le("colorPressed", H)],
              "--n-color-focus": z ? Rn(z) : v[le("colorFocus", H)],
              "--n-color-disabled": z || v[le("colorDisabled", H)],
              "--n-ripple-color": z || v[le("rippleColor", H)],
              "--n-text-color":
                ce ||
                (z
                  ? v.textColorPrimary
                  : M
                  ? v.textColorTertiary
                  : v[le("textColor", H)]),
              "--n-text-color-hover":
                ce ||
                (z ? v.textColorHoverPrimary : v[le("textColorHover", H)]),
              "--n-text-color-pressed":
                ce ||
                (z ? v.textColorPressedPrimary : v[le("textColorPressed", H)]),
              "--n-text-color-focus":
                ce ||
                (z ? v.textColorFocusPrimary : v[le("textColorFocus", H)]),
              "--n-text-color-disabled":
                ce ||
                (z
                  ? v.textColorDisabledPrimary
                  : v[le("textColorDisabled", H)]),
            };
          let ie = {
            "--n-border": "initial",
            "--n-border-hover": "initial",
            "--n-border-pressed": "initial",
            "--n-border-focus": "initial",
            "--n-border-disabled": "initial",
          };
          U
            ? (ie = {
                "--n-border": "none",
                "--n-border-hover": "none",
                "--n-border-pressed": "none",
                "--n-border-focus": "none",
                "--n-border-disabled": "none",
              })
            : (ie = {
                "--n-border": v[le("border", H)],
                "--n-border-hover": v[le("borderHover", H)],
                "--n-border-pressed": v[le("borderPressed", H)],
                "--n-border-focus": v[le("borderFocus", H)],
                "--n-border-disabled": v[le("borderDisabled", H)],
              });
          const {
              [le("height", T)]: xe,
              [le("fontSize", T)]: Oe,
              [le("padding", T)]: m,
              [le("paddingRound", T)]: x,
              [le("iconSize", T)]: R,
              [le("borderRadius", T)]: L,
              [le("iconMargin", T)]: k,
              waveOpacity: G,
            } = v,
            Z = {
              "--n-width": de && !U ? xe : "initial",
              "--n-height": U ? "initial" : xe,
              "--n-font-size": Oe,
              "--n-padding": de || U ? "initial" : X ? x : m,
              "--n-icon-size": R,
              "--n-icon-margin": k,
              "--n-border-radius": U ? "initial" : de || X ? xe : L,
            };
          return Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {
                    "--n-bezier": E,
                    "--n-bezier-ease-out": P,
                    "--n-ripple-duration": S,
                    "--n-opacity-disabled": $,
                    "--n-wave-opacity": G,
                  },
                  vt
                ),
                ge
              ),
              ie
            ),
            Z
          );
        }),
        A = p
          ? $t(
              "button",
              K(() => {
                let _ = "";
                const {
                  dashed: E,
                  type: P,
                  ghost: v,
                  text: S,
                  color: $,
                  round: O,
                  circle: F,
                  textColor: T,
                  secondary: W,
                  tertiary: q,
                  quaternary: I,
                  strong: U,
                } = e;
                E && (_ += "a"),
                  v && (_ += "b"),
                  S && (_ += "c"),
                  O && (_ += "d"),
                  F && (_ += "e"),
                  W && (_ += "f"),
                  q && (_ += "g"),
                  I && (_ += "h"),
                  U && (_ += "i"),
                  $ && (_ += `j${Nc($)}`),
                  T && (_ += `k${Nc(T)}`);
                const { value: z } = s;
                return (_ += `l${z[0]}`), (_ += `m${P[0]}`), _;
              }),
              C,
              e
            )
          : void 0;
      return {
        selfElRef: t,
        waveElRef: n,
        mergedClsPrefix: h,
        mergedFocusable: l,
        mergedSize: s,
        showBorder: r,
        enterPressed: o,
        rtlEnabled: g,
        handleMousedown: a,
        handleKeydown: d,
        handleBlur: f,
        handleKeyup: u,
        handleClick: c,
        customColorCssVars: K(() => {
          const { color: _ } = e;
          if (!_) return null;
          const E = Rn(_);
          return {
            "--n-border-color": _,
            "--n-border-color-hover": E,
            "--n-border-color-pressed": Jr(_),
            "--n-border-color-focus": E,
            "--n-border-color-disabled": _,
          };
        }),
        cssVars: p ? void 0 : C,
        themeClass: A == null ? void 0 : A.themeClass,
        onRender: A == null ? void 0 : A.onRender,
      };
    },
    render() {
      const { mergedClsPrefix: e, tag: t, onRender: n } = this;
      n == null || n();
      const o = ct(
        this.$slots.default,
        (r) => r && w("span", { class: `${e}-button__content` }, r)
      );
      return w(
        t,
        {
          ref: "selfElRef",
          class: [
            this.themeClass,
            `${e}-button`,
            `${e}-button--${this.type}-type`,
            `${e}-button--${this.mergedSize}-type`,
            this.rtlEnabled && `${e}-button--rtl`,
            this.disabled && `${e}-button--disabled`,
            this.block && `${e}-button--block`,
            this.enterPressed && `${e}-button--pressed`,
            !this.text && this.dashed && `${e}-button--dashed`,
            this.color && `${e}-button--color`,
            this.secondary && `${e}-button--secondary`,
            this.loading && `${e}-button--loading`,
            this.ghost && `${e}-button--ghost`,
          ],
          tabindex: this.mergedFocusable ? 0 : -1,
          type: this.attrType,
          style: this.cssVars,
          disabled: this.disabled,
          onClick: this.handleClick,
          onBlur: this.handleBlur,
          onMousedown: this.handleMousedown,
          onKeyup: this.handleKeyup,
          onKeydown: this.handleKeydown,
        },
        this.iconPlacement === "right" && o,
        w(
          rp,
          { width: !0 },
          {
            default: () =>
              ct(
                this.$slots.icon,
                (r) =>
                  (this.loading || this.renderIcon || r) &&
                  w(
                    "span",
                    {
                      class: `${e}-button__icon`,
                      style: { margin: al(this.$slots.default) ? "0" : "" },
                    },
                    w(ya, null, {
                      default: () =>
                        this.loading
                          ? w(xa, {
                              clsPrefix: e,
                              key: "loading",
                              class: `${e}-icon-slot`,
                              strokeWidth: 20,
                            })
                          : w(
                              "div",
                              {
                                key: "icon",
                                class: `${e}-icon-slot`,
                                role: "none",
                              },
                              this.renderIcon ? this.renderIcon() : r
                            ),
                    })
                  )
              ),
          }
        ),
        this.iconPlacement === "left" && o,
        this.text ? null : w(f_, { ref: "waveElRef", clsPrefix: e }),
        this.showBorder
          ? w("div", {
              "aria-hidden": !0,
              class: `${e}-button__border`,
              style: this.customColorCssVars,
            })
          : null,
        this.showBorder
          ? w("div", {
              "aria-hidden": !0,
              class: `${e}-button__state-border`,
              style: this.customColorCssVars,
            })
          : null
      );
    },
  }),
  M_ = {
    paddingSmall: "12px 16px 12px",
    paddingMedium: "19px 24px 20px",
    paddingLarge: "23px 32px 24px",
    paddingHuge: "27px 40px 28px",
    titleFontSizeSmall: "16px",
    titleFontSizeMedium: "18px",
    titleFontSizeLarge: "18px",
    titleFontSizeHuge: "18px",
    closeIconSize: "18px",
    closeSize: "22px",
  };
function z_(e) {
  const {
    primaryColor: t,
    borderRadius: n,
    lineHeight: o,
    fontSize: r,
    cardColor: i,
    textColor2: s,
    textColor1: l,
    dividerColor: a,
    fontWeightStrong: c,
    closeIconColor: u,
    closeIconColorHover: d,
    closeIconColorPressed: f,
    closeColorHover: p,
    closeColorPressed: h,
    modalColor: b,
    boxShadow1: y,
    popoverColor: g,
    actionColor: C,
  } = e;
  return Object.assign(Object.assign({}, M_), {
    lineHeight: o,
    color: i,
    colorModal: b,
    colorPopover: g,
    colorTarget: t,
    colorEmbedded: C,
    colorEmbeddedModal: C,
    colorEmbeddedPopover: C,
    textColor: s,
    titleTextColor: l,
    borderColor: a,
    actionColor: C,
    titleFontWeight: c,
    closeColorHover: p,
    closeColorPressed: h,
    closeBorderRadius: n,
    closeIconColor: u,
    closeIconColorHover: d,
    closeIconColorPressed: f,
    fontSizeSmall: r,
    fontSizeMedium: r,
    fontSizeLarge: r,
    fontSizeHuge: r,
    boxShadow: y,
    borderRadius: n,
  });
}
const pp = { name: "Card", common: gt, self: z_ },
  I_ = B([
    Y(
      "card",
      `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
      [
        oh({ background: "var(--n-color-modal)" }),
        J("hoverable", [B("&:hover", "box-shadow: var(--n-box-shadow);")]),
        J("content-segmented", [
          B(">", [ee("content", { paddingTop: "var(--n-padding-bottom)" })]),
        ]),
        J("content-soft-segmented", [
          B(">", [
            ee(
              "content",
              `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `
            ),
          ]),
        ]),
        J("footer-segmented", [
          B(">", [ee("footer", { paddingTop: "var(--n-padding-bottom)" })]),
        ]),
        J("footer-soft-segmented", [
          B(">", [
            ee(
              "footer",
              `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `
            ),
          ]),
        ]),
        B(">", [
          Y(
            "card-header",
            `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,
            [
              ee(
                "main",
                `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `
              ),
              ee(
                "extra",
                `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `
              ),
              ee(
                "close",
                `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
              ),
            ]
          ),
          ee(
            "action",
            `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `
          ),
          ee("content", "flex: 1; min-width: 0;"),
          ee(
            "content, footer",
            `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,
            [B("&:first-child", { paddingTop: "var(--n-padding-bottom)" })]
          ),
          ee(
            "action",
            `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `
          ),
        ]),
        Y(
          "card-cover",
          `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,
          [
            B(
              "img",
              `
 display: block;
 width: 100%;
 `
            ),
          ]
        ),
        J(
          "bordered",
          `
 border: 1px solid var(--n-border-color);
 `,
          [B("&:target", "border-color: var(--n-color-target);")]
        ),
        J("action-segmented", [
          B(">", [
            ee("action", [
              B("&:not(:first-child)", {
                borderTop: "1px solid var(--n-border-color)",
              }),
            ]),
          ]),
        ]),
        J("content-segmented, content-soft-segmented", [
          B(">", [
            ee("content", { transition: "border-color 0.3s var(--n-bezier)" }, [
              B("&:not(:first-child)", {
                borderTop: "1px solid var(--n-border-color)",
              }),
            ]),
          ]),
        ]),
        J("footer-segmented, footer-soft-segmented", [
          B(">", [
            ee("footer", { transition: "border-color 0.3s var(--n-bezier)" }, [
              B("&:not(:first-child)", {
                borderTop: "1px solid var(--n-border-color)",
              }),
            ]),
          ]),
        ]),
        J(
          "embedded",
          `
 background-color: var(--n-color-embedded);
 `
        ),
      ]
    ),
    nh(
      Y(
        "card",
        `
 background: var(--n-color-modal);
 `,
        [
          J(
            "embedded",
            `
 background-color: var(--n-color-embedded-modal);
 `
          ),
        ]
      )
    ),
    ay(
      Y(
        "card",
        `
 background: var(--n-color-popover);
 `,
        [
          J(
            "embedded",
            `
 background-color: var(--n-color-embedded-popover);
 `
          ),
        ]
      )
    ),
  ]),
  _a = {
    title: [String, Function],
    contentClass: String,
    contentStyle: [Object, String],
    headerClass: String,
    headerStyle: [Object, String],
    headerExtraClass: String,
    headerExtraStyle: [Object, String],
    footerClass: String,
    footerStyle: [Object, String],
    embedded: Boolean,
    segmented: { type: [Boolean, Object], default: !1 },
    size: { type: String, default: "medium" },
    bordered: { type: Boolean, default: !0 },
    closable: Boolean,
    hoverable: Boolean,
    role: String,
    onClose: [Function, Array],
    tag: { type: String, default: "div" },
    cover: Function,
    content: [String, Function],
    footer: Function,
    action: Function,
    headerExtra: Function,
  },
  k_ = Ui(_a),
  B_ = Object.assign(Object.assign({}, Te.props), _a),
  L_ = pe({
    name: "Card",
    props: B_,
    setup(e) {
      const t = () => {
          const { onClose: c } = e;
          c && ut(c);
        },
        {
          inlineThemeDisabled: n,
          mergedClsPrefixRef: o,
          mergedRtlRef: r,
        } = it(e),
        i = Te("Card", "-card", I_, pp, e, o),
        s = Ro("Card", r, o),
        l = K(() => {
          const { size: c } = e,
            {
              self: {
                color: u,
                colorModal: d,
                colorTarget: f,
                textColor: p,
                titleTextColor: h,
                titleFontWeight: b,
                borderColor: y,
                actionColor: g,
                borderRadius: C,
                lineHeight: A,
                closeIconColor: _,
                closeIconColorHover: E,
                closeIconColorPressed: P,
                closeColorHover: v,
                closeColorPressed: S,
                closeBorderRadius: $,
                closeIconSize: O,
                closeSize: F,
                boxShadow: T,
                colorPopover: W,
                colorEmbedded: q,
                colorEmbeddedModal: I,
                colorEmbeddedPopover: U,
                [le("padding", c)]: z,
                [le("fontSize", c)]: X,
                [le("titleFontSize", c)]: de,
              },
              common: { cubicBezierEaseInOut: ce },
            } = i.value,
            { top: Ce, left: ye, bottom: Ke } = Ki(z);
          return {
            "--n-bezier": ce,
            "--n-border-radius": C,
            "--n-color": u,
            "--n-color-modal": d,
            "--n-color-popover": W,
            "--n-color-embedded": q,
            "--n-color-embedded-modal": I,
            "--n-color-embedded-popover": U,
            "--n-color-target": f,
            "--n-text-color": p,
            "--n-line-height": A,
            "--n-action-color": g,
            "--n-title-text-color": h,
            "--n-title-font-weight": b,
            "--n-close-icon-color": _,
            "--n-close-icon-color-hover": E,
            "--n-close-icon-color-pressed": P,
            "--n-close-color-hover": v,
            "--n-close-color-pressed": S,
            "--n-border-color": y,
            "--n-box-shadow": T,
            "--n-padding-top": Ce,
            "--n-padding-bottom": Ke,
            "--n-padding-left": ye,
            "--n-font-size": X,
            "--n-title-font-size": de,
            "--n-close-size": F,
            "--n-close-icon-size": O,
            "--n-close-border-radius": $,
          };
        }),
        a = n
          ? $t(
              "card",
              K(() => e.size[0]),
              l,
              e
            )
          : void 0;
      return {
        rtlEnabled: s,
        mergedClsPrefix: o,
        mergedTheme: i,
        handleCloseClick: t,
        cssVars: n ? void 0 : l,
        themeClass: a == null ? void 0 : a.themeClass,
        onRender: a == null ? void 0 : a.onRender,
      };
    },
    render() {
      const {
        segmented: e,
        bordered: t,
        hoverable: n,
        mergedClsPrefix: o,
        rtlEnabled: r,
        onRender: i,
        embedded: s,
        tag: l,
        $slots: a,
      } = this;
      return (
        i == null || i(),
        w(
          l,
          {
            class: [
              `${o}-card`,
              this.themeClass,
              s && `${o}-card--embedded`,
              {
                [`${o}-card--rtl`]: r,
                [`${o}-card--content${
                  typeof e != "boolean" && e.content === "soft" ? "-soft" : ""
                }-segmented`]: e === !0 || (e !== !1 && e.content),
                [`${o}-card--footer${
                  typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""
                }-segmented`]: e === !0 || (e !== !1 && e.footer),
                [`${o}-card--action-segmented`]:
                  e === !0 || (e !== !1 && e.action),
                [`${o}-card--bordered`]: t,
                [`${o}-card--hoverable`]: n,
              },
            ],
            style: this.cssVars,
            role: this.role,
          },
          ct(a.cover, (c) => {
            const u = this.cover ? Bt([this.cover()]) : c;
            return u && w("div", { class: `${o}-card-cover`, role: "none" }, u);
          }),
          ct(a.header, (c) => {
            const { title: u } = this,
              d = u ? Bt(typeof u == "function" ? [u()] : [u]) : c;
            return d || this.closable
              ? w(
                  "div",
                  {
                    class: [`${o}-card-header`, this.headerClass],
                    style: this.headerStyle,
                    role: "heading",
                  },
                  w(
                    "div",
                    { class: `${o}-card-header__main`, role: "heading" },
                    d
                  ),
                  ct(a["header-extra"], (f) => {
                    const p = this.headerExtra ? Bt([this.headerExtra()]) : f;
                    return (
                      p &&
                      w(
                        "div",
                        {
                          class: [
                            `${o}-card-header__extra`,
                            this.headerExtraClass,
                          ],
                          style: this.headerExtraStyle,
                        },
                        p
                      )
                    );
                  }),
                  this.closable &&
                    w(ns, {
                      clsPrefix: o,
                      class: `${o}-card-header__close`,
                      onClick: this.handleCloseClick,
                      absolute: !0,
                    })
                )
              : null;
          }),
          ct(a.default, (c) => {
            const { content: u } = this,
              d = u ? Bt(typeof u == "function" ? [u()] : [u]) : c;
            return (
              d &&
              w(
                "div",
                {
                  class: [`${o}-card__content`, this.contentClass],
                  style: this.contentStyle,
                  role: "none",
                },
                d
              )
            );
          }),
          ct(a.footer, (c) => {
            const u = this.footer ? Bt([this.footer()]) : c;
            return (
              u &&
              w(
                "div",
                {
                  class: [`${o}-card__footer`, this.footerClass],
                  style: this.footerStyle,
                  role: "none",
                },
                u
              )
            );
          }),
          ct(a.action, (c) => {
            const u = this.action ? Bt([this.action()]) : c;
            return (
              u && w("div", { class: `${o}-card__action`, role: "none" }, u)
            );
          })
        )
      );
    },
  }),
  H_ = {
    abstract: Boolean,
    bordered: { type: Boolean, default: void 0 },
    clsPrefix: { type: String, default: Ci },
    locale: Object,
    dateLocale: Object,
    namespace: String,
    rtl: Array,
    tag: { type: String, default: "div" },
    hljs: Object,
    katex: Object,
    theme: Object,
    themeOverrides: Object,
    componentOptions: Object,
    icons: Object,
    breakpoints: Object,
    preflightStyleDisabled: Boolean,
    inlineThemeDisabled: { type: Boolean, default: void 0 },
    as: {
      type: String,
      validator: () => (
        $o("config-provider", "`as` is deprecated, please use `tag` instead."),
        !0
      ),
      default: void 0,
    },
  },
  F_ = pe({
    name: "ConfigProvider",
    alias: ["App"],
    props: H_,
    setup(e) {
      const t = me(Gn, null),
        n = K(() => {
          const { theme: h } = e;
          if (h === null) return;
          const b = t == null ? void 0 : t.mergedThemeRef.value;
          return h === void 0 ? b : b === void 0 ? h : Object.assign({}, b, h);
        }),
        o = K(() => {
          const { themeOverrides: h } = e;
          if (h !== null) {
            if (h === void 0)
              return t == null ? void 0 : t.mergedThemeOverridesRef.value;
            {
              const b = t == null ? void 0 : t.mergedThemeOverridesRef.value;
              return b === void 0 ? h : Vo({}, b, h);
            }
          }
        }),
        r = Ct(() => {
          const { namespace: h } = e;
          return h === void 0
            ? t == null
              ? void 0
              : t.mergedNamespaceRef.value
            : h;
        }),
        i = Ct(() => {
          const { bordered: h } = e;
          return h === void 0
            ? t == null
              ? void 0
              : t.mergedBorderedRef.value
            : h;
        }),
        s = K(() => {
          const { icons: h } = e;
          return h === void 0
            ? t == null
              ? void 0
              : t.mergedIconsRef.value
            : h;
        }),
        l = K(() => {
          const { componentOptions: h } = e;
          return h !== void 0
            ? h
            : t == null
            ? void 0
            : t.mergedComponentPropsRef.value;
        }),
        a = K(() => {
          const { clsPrefix: h } = e;
          return h !== void 0 ? h : t ? t.mergedClsPrefixRef.value : Ci;
        }),
        c = K(() => {
          var h;
          const { rtl: b } = e;
          if (b === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
          const y = {};
          for (const g of b)
            (y[g.name] = sr(g)),
              (h = g.peers) === null ||
                h === void 0 ||
                h.forEach((C) => {
                  C.name in y || (y[C.name] = sr(C));
                });
          return y;
        }),
        u = K(
          () =>
            e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)
        ),
        d =
          e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled),
        f =
          e.preflightStyleDisabled ||
          (t == null ? void 0 : t.preflightStyleDisabled),
        p = K(() => {
          const { value: h } = n,
            { value: b } = o,
            y = b && Object.keys(b).length !== 0,
            g = h == null ? void 0 : h.name;
          return g
            ? y
              ? `${g}-${yr(JSON.stringify(o.value))}`
              : g
            : y
            ? yr(JSON.stringify(o.value))
            : "";
        });
      return (
        Pe(Gn, {
          mergedThemeHashRef: p,
          mergedBreakpointsRef: u,
          mergedRtlRef: c,
          mergedIconsRef: s,
          mergedComponentPropsRef: l,
          mergedBorderedRef: i,
          mergedNamespaceRef: r,
          mergedClsPrefixRef: a,
          mergedLocaleRef: K(() => {
            const { locale: h } = e;
            if (h !== null)
              return h === void 0
                ? t == null
                  ? void 0
                  : t.mergedLocaleRef.value
                : h;
          }),
          mergedDateLocaleRef: K(() => {
            const { dateLocale: h } = e;
            if (h !== null)
              return h === void 0
                ? t == null
                  ? void 0
                  : t.mergedDateLocaleRef.value
                : h;
          }),
          mergedHljsRef: K(() => {
            const { hljs: h } = e;
            return h === void 0
              ? t == null
                ? void 0
                : t.mergedHljsRef.value
              : h;
          }),
          mergedKatexRef: K(() => {
            const { katex: h } = e;
            return h === void 0
              ? t == null
                ? void 0
                : t.mergedKatexRef.value
              : h;
          }),
          mergedThemeRef: n,
          mergedThemeOverridesRef: o,
          inlineThemeDisabled: d || !1,
          preflightStyleDisabled: f || !1,
        }),
        {
          mergedClsPrefix: a,
          mergedBordered: i,
          mergedNamespace: r,
          mergedTheme: n,
          mergedThemeOverrides: o,
        }
      );
    },
    render() {
      var e, t, n, o;
      return this.abstract
        ? (o = (n = this.$slots).default) === null || o === void 0
          ? void 0
          : o.call(n)
        : w(
            this.as || this.tag,
            { class: `${this.mergedClsPrefix || Ci}-config-provider` },
            (t = (e = this.$slots).default) === null || t === void 0
              ? void 0
              : t.call(e)
          );
    },
  }),
  j_ = { padding: "8px 14px" };
function D_(e) {
  const { borderRadius: t, boxShadow2: n, baseColor: o } = e;
  return Object.assign(Object.assign({}, j_), {
    borderRadius: t,
    boxShadow: n,
    color: _o(o, "rgba(0, 0, 0, .85)"),
    textColor: o,
  });
}
const N_ = { name: "Tooltip", common: gt, peers: { Popover: Sa }, self: D_ },
  W_ = {
    padding: "4px 0",
    optionIconSizeSmall: "14px",
    optionIconSizeMedium: "16px",
    optionIconSizeLarge: "16px",
    optionIconSizeHuge: "18px",
    optionSuffixWidthSmall: "14px",
    optionSuffixWidthMedium: "14px",
    optionSuffixWidthLarge: "16px",
    optionSuffixWidthHuge: "16px",
    optionIconSuffixWidthSmall: "32px",
    optionIconSuffixWidthMedium: "32px",
    optionIconSuffixWidthLarge: "36px",
    optionIconSuffixWidthHuge: "36px",
    optionPrefixWidthSmall: "14px",
    optionPrefixWidthMedium: "14px",
    optionPrefixWidthLarge: "16px",
    optionPrefixWidthHuge: "16px",
    optionIconPrefixWidthSmall: "36px",
    optionIconPrefixWidthMedium: "36px",
    optionIconPrefixWidthLarge: "40px",
    optionIconPrefixWidthHuge: "40px",
  };
function K_(e) {
  const {
    primaryColor: t,
    textColor2: n,
    dividerColor: o,
    hoverColor: r,
    popoverColor: i,
    invertedColor: s,
    borderRadius: l,
    fontSizeSmall: a,
    fontSizeMedium: c,
    fontSizeLarge: u,
    fontSizeHuge: d,
    heightSmall: f,
    heightMedium: p,
    heightLarge: h,
    heightHuge: b,
    textColor3: y,
    opacityDisabled: g,
  } = e;
  return Object.assign(Object.assign({}, W_), {
    optionHeightSmall: f,
    optionHeightMedium: p,
    optionHeightLarge: h,
    optionHeightHuge: b,
    borderRadius: l,
    fontSizeSmall: a,
    fontSizeMedium: c,
    fontSizeLarge: u,
    fontSizeHuge: d,
    optionTextColor: n,
    optionTextColorHover: n,
    optionTextColorActive: t,
    optionTextColorChildActive: t,
    color: i,
    dividerColor: o,
    suffixColor: n,
    prefixColor: n,
    optionColorHover: r,
    optionColorActive: Wo(t, { alpha: 0.1 }),
    groupHeaderTextColor: y,
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: s,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: t,
    optionColorActiveInverted: t,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: g,
  });
}
const V_ = { name: "Dropdown", common: gt, peers: { Popover: Sa }, self: K_ },
  U_ = Object.assign(Object.assign({}, is), Te.props),
  G_ = pe({
    name: "Tooltip",
    props: U_,
    __popover__: !0,
    setup(e) {
      const { mergedClsPrefixRef: t } = it(e),
        n = Te("Tooltip", "-tooltip", void 0, N_, e, t),
        o = Q(null);
      return Object.assign(
        Object.assign(
          {},
          {
            syncPosition() {
              o.value.syncPosition();
            },
            setShow(i) {
              o.value.setShow(i);
            },
          }
        ),
        {
          popoverRef: o,
          mergedTheme: n,
          popoverThemeOverrides: K(() => n.value.self),
        }
      );
    },
    render() {
      const { mergedTheme: e, internalExtraClass: t } = this;
      return w(
        fp,
        Object.assign(Object.assign({}, this.$props), {
          theme: e.peers.Popover,
          themeOverrides: e.peerOverrides.Popover,
          builtinThemeOverrides: this.popoverThemeOverrides,
          internalExtraClass: t.concat("tooltip"),
          ref: "popoverRef",
        }),
        this.$slots
      );
    },
  }),
  gp = pe({
    name: "DropdownDivider",
    props: { clsPrefix: { type: String, required: !0 } },
    render() {
      return w("div", { class: `${this.clsPrefix}-dropdown-divider` });
    },
  });
function q_(e) {
  const {
    textColorBase: t,
    opacity1: n,
    opacity2: o,
    opacity3: r,
    opacity4: i,
    opacity5: s,
  } = e;
  return {
    color: t,
    opacity1Depth: n,
    opacity2Depth: o,
    opacity3Depth: r,
    opacity4Depth: i,
    opacity5Depth: s,
  };
}
const X_ = { name: "Icon", common: gt, self: q_ },
  Y_ = Y(
    "icon",
    `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
    [
      J("color-transition", { transition: "color .3s var(--n-bezier)" }),
      J("depth", { color: "var(--n-color)" }, [
        B("svg", {
          opacity: "var(--n-opacity)",
          transition: "opacity .3s var(--n-bezier)",
        }),
      ]),
      B("svg", { height: "1em", width: "1em" }),
    ]
  ),
  Z_ = Object.assign(Object.assign({}, Te.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: Object,
  }),
  vp = pe({
    _n_icon__: !0,
    name: "Icon",
    inheritAttrs: !1,
    props: Z_,
    setup(e) {
      const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = it(e),
        o = Te("Icon", "-icon", Y_, X_, e, t),
        r = K(() => {
          const { depth: s } = e,
            {
              common: { cubicBezierEaseInOut: l },
              self: a,
            } = o.value;
          if (s !== void 0) {
            const { color: c, [`opacity${s}Depth`]: u } = a;
            return { "--n-bezier": l, "--n-color": c, "--n-opacity": u };
          }
          return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
        }),
        i = n
          ? $t(
              "icon",
              K(() => `${e.depth || "d"}`),
              r,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: t,
        mergedStyle: K(() => {
          const { size: s, color: l } = e;
          return { fontSize: si(s), color: l };
        }),
        cssVars: n ? void 0 : r,
        themeClass: i == null ? void 0 : i.themeClass,
        onRender: i == null ? void 0 : i.onRender,
      };
    },
    render() {
      var e;
      const {
        $parent: t,
        depth: n,
        mergedClsPrefix: o,
        component: r,
        onRender: i,
        themeClass: s,
      } = this;
      return (
        !((e = t == null ? void 0 : t.$options) === null || e === void 0) &&
          e._n_icon__ &&
          $o("icon", "don't wrap `n-icon` inside `n-icon`"),
        i == null || i(),
        w(
          "i",
          Zn(this.$attrs, {
            role: "img",
            class: [
              `${o}-icon`,
              s,
              {
                [`${o}-icon--depth`]: n,
                [`${o}-icon--color-transition`]: n !== void 0,
              },
            ],
            style: [this.cssVars, this.mergedStyle],
          }),
          r ? w(r) : this.$slots
        )
      );
    },
  }),
  $a = "n-dropdown-menu",
  ss = "n-dropdown",
  Qu = "n-dropdown-option";
function $l(e, t) {
  return e.type === "submenu" || (e.type === void 0 && e[t] !== void 0);
}
function J_(e) {
  return e.type === "group";
}
function mp(e) {
  return e.type === "divider";
}
function Q_(e) {
  return e.type === "render";
}
const bp = pe({
    name: "DropdownOption",
    props: {
      clsPrefix: { type: String, required: !0 },
      tmNode: { type: Object, required: !0 },
      parentKey: { type: [String, Number], default: null },
      placement: { type: String, default: "right-start" },
      props: Object,
      scrollable: Boolean,
    },
    setup(e) {
      const t = me(ss),
        {
          hoverKeyRef: n,
          keyboardKeyRef: o,
          lastToggledSubmenuKeyRef: r,
          pendingKeyPathRef: i,
          activeKeyPathRef: s,
          animatedRef: l,
          mergedShowRef: a,
          renderLabelRef: c,
          renderIconRef: u,
          labelFieldRef: d,
          childrenFieldRef: f,
          renderOptionRef: p,
          nodePropsRef: h,
          menuPropsRef: b,
        } = t,
        y = me(Qu, null),
        g = me($a),
        C = me(Or),
        A = K(() => e.tmNode.rawNode),
        _ = K(() => {
          const { value: z } = f;
          return $l(e.tmNode.rawNode, z);
        }),
        E = K(() => {
          const { disabled: z } = e.tmNode;
          return z;
        }),
        P = K(() => {
          if (!_.value) return !1;
          const { key: z, disabled: X } = e.tmNode;
          if (X) return !1;
          const { value: de } = n,
            { value: ce } = o,
            { value: Ce } = r,
            { value: ye } = i;
          return de !== null
            ? ye.includes(z)
            : ce !== null
            ? ye.includes(z) && ye[ye.length - 1] !== z
            : Ce !== null
            ? ye.includes(z)
            : !1;
        }),
        v = K(() => o.value === null && !l.value),
        S = hy(P, 300, v),
        $ = K(() => !!(y != null && y.enteringSubmenuRef.value)),
        O = Q(!1);
      Pe(Qu, { enteringSubmenuRef: O });
      function F() {
        O.value = !0;
      }
      function T() {
        O.value = !1;
      }
      function W() {
        const { parentKey: z, tmNode: X } = e;
        X.disabled ||
          (a.value && ((r.value = z), (o.value = null), (n.value = X.key)));
      }
      function q() {
        const { tmNode: z } = e;
        z.disabled || (a.value && n.value !== z.key && W());
      }
      function I(z) {
        if (e.tmNode.disabled || !a.value) return;
        const { relatedTarget: X } = z;
        X &&
          !Bc({ target: X }, "dropdownOption") &&
          !Bc({ target: X }, "scrollbarRail") &&
          (n.value = null);
      }
      function U() {
        const { value: z } = _,
          { tmNode: X } = e;
        a.value &&
          !z &&
          !X.disabled &&
          (t.doSelect(X.key, X.rawNode), t.doUpdateShow(!1));
      }
      return {
        labelField: d,
        renderLabel: c,
        renderIcon: u,
        siblingHasIcon: g.showIconRef,
        siblingHasSubmenu: g.hasSubmenuRef,
        menuProps: b,
        popoverBody: C,
        animated: l,
        mergedShowSubmenu: K(() => S.value && !$.value),
        rawNode: A,
        hasSubmenu: _,
        pending: Ct(() => {
          const { value: z } = i,
            { key: X } = e.tmNode;
          return z.includes(X);
        }),
        childActive: Ct(() => {
          const { value: z } = s,
            { key: X } = e.tmNode,
            de = z.findIndex((ce) => X === ce);
          return de === -1 ? !1 : de < z.length - 1;
        }),
        active: Ct(() => {
          const { value: z } = s,
            { key: X } = e.tmNode,
            de = z.findIndex((ce) => X === ce);
          return de === -1 ? !1 : de === z.length - 1;
        }),
        mergedDisabled: E,
        renderOption: p,
        nodeProps: h,
        handleClick: U,
        handleMouseMove: q,
        handleMouseEnter: W,
        handleMouseLeave: I,
        handleSubmenuBeforeEnter: F,
        handleSubmenuAfterEnter: T,
      };
    },
    render() {
      var e, t;
      const {
        animated: n,
        rawNode: o,
        mergedShowSubmenu: r,
        clsPrefix: i,
        siblingHasIcon: s,
        siblingHasSubmenu: l,
        renderLabel: a,
        renderIcon: c,
        renderOption: u,
        nodeProps: d,
        props: f,
        scrollable: p,
      } = this;
      let h = null;
      if (r) {
        const C =
          (e = this.menuProps) === null || e === void 0
            ? void 0
            : e.call(this, o, o.children);
        h = w(
          yp,
          Object.assign({}, C, {
            clsPrefix: i,
            scrollable: this.scrollable,
            tmNodes: this.tmNode.children,
            parentKey: this.tmNode.key,
          })
        );
      }
      const b = {
          class: [
            `${i}-dropdown-option-body`,
            this.pending && `${i}-dropdown-option-body--pending`,
            this.active && `${i}-dropdown-option-body--active`,
            this.childActive && `${i}-dropdown-option-body--child-active`,
            this.mergedDisabled && `${i}-dropdown-option-body--disabled`,
          ],
          onMousemove: this.handleMouseMove,
          onMouseenter: this.handleMouseEnter,
          onMouseleave: this.handleMouseLeave,
          onClick: this.handleClick,
        },
        y = d == null ? void 0 : d(o),
        g = w(
          "div",
          Object.assign(
            {
              class: [`${i}-dropdown-option`, y == null ? void 0 : y.class],
              "data-dropdown-option": !0,
            },
            y
          ),
          w("div", Zn(b, f), [
            w(
              "div",
              {
                class: [
                  `${i}-dropdown-option-body__prefix`,
                  s && `${i}-dropdown-option-body__prefix--show-icon`,
                ],
              },
              [c ? c(o) : Ze(o.icon)]
            ),
            w(
              "div",
              {
                "data-dropdown-option": !0,
                class: `${i}-dropdown-option-body__label`,
              },
              a
                ? a(o)
                : Ze(
                    (t = o[this.labelField]) !== null && t !== void 0
                      ? t
                      : o.title
                  )
            ),
            w(
              "div",
              {
                "data-dropdown-option": !0,
                class: [
                  `${i}-dropdown-option-body__suffix`,
                  l && `${i}-dropdown-option-body__suffix--has-submenu`,
                ],
              },
              this.hasSubmenu
                ? w(vp, null, { default: () => w(TS, null) })
                : null
            ),
          ]),
          this.hasSubmenu
            ? w(hh, null, {
                default: () => [
                  w(ph, null, {
                    default: () =>
                      w(
                        "div",
                        { class: `${i}-dropdown-offset-container` },
                        w(
                          vh,
                          {
                            show: this.mergedShowSubmenu,
                            placement: this.placement,
                            to: (p && this.popoverBody) || void 0,
                            teleportDisabled: !p,
                          },
                          {
                            default: () =>
                              w(
                                "div",
                                { class: `${i}-dropdown-menu-wrapper` },
                                n
                                  ? w(
                                      pt,
                                      {
                                        onBeforeEnter:
                                          this.handleSubmenuBeforeEnter,
                                        onAfterEnter:
                                          this.handleSubmenuAfterEnter,
                                        name: "fade-in-scale-up-transition",
                                        appear: !0,
                                      },
                                      { default: () => h }
                                    )
                                  : h
                              ),
                          }
                        )
                      ),
                  }),
                ],
              })
            : null
        );
      return u ? u({ node: g, option: o }) : g;
    },
  }),
  e$ = pe({
    name: "DropdownGroupHeader",
    props: {
      clsPrefix: { type: String, required: !0 },
      tmNode: { type: Object, required: !0 },
    },
    setup() {
      const { showIconRef: e, hasSubmenuRef: t } = me($a),
        {
          renderLabelRef: n,
          labelFieldRef: o,
          nodePropsRef: r,
          renderOptionRef: i,
        } = me(ss);
      return {
        labelField: o,
        showIcon: e,
        hasSubmenu: t,
        renderLabel: n,
        nodeProps: r,
        renderOption: i,
      };
    },
    render() {
      var e;
      const {
          clsPrefix: t,
          hasSubmenu: n,
          showIcon: o,
          nodeProps: r,
          renderLabel: i,
          renderOption: s,
        } = this,
        { rawNode: l } = this.tmNode,
        a = w(
          "div",
          Object.assign(
            { class: `${t}-dropdown-option` },
            r == null ? void 0 : r(l)
          ),
          w(
            "div",
            {
              class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`,
            },
            w(
              "div",
              {
                "data-dropdown-option": !0,
                class: [
                  `${t}-dropdown-option-body__prefix`,
                  o && `${t}-dropdown-option-body__prefix--show-icon`,
                ],
              },
              Ze(l.icon)
            ),
            w(
              "div",
              {
                class: `${t}-dropdown-option-body__label`,
                "data-dropdown-option": !0,
              },
              i
                ? i(l)
                : Ze(
                    (e = l.title) !== null && e !== void 0
                      ? e
                      : l[this.labelField]
                  )
            ),
            w("div", {
              class: [
                `${t}-dropdown-option-body__suffix`,
                n && `${t}-dropdown-option-body__suffix--has-submenu`,
              ],
              "data-dropdown-option": !0,
            })
          )
        );
      return s ? s({ node: a, option: l }) : a;
    },
  }),
  t$ = pe({
    name: "NDropdownGroup",
    props: {
      clsPrefix: { type: String, required: !0 },
      tmNode: { type: Object, required: !0 },
      parentKey: { type: [String, Number], default: null },
    },
    render() {
      const { tmNode: e, parentKey: t, clsPrefix: n } = this,
        { children: o } = e;
      return w(
        He,
        null,
        w(e$, { clsPrefix: n, tmNode: e, key: e.key }),
        o == null
          ? void 0
          : o.map((r) => {
              const { rawNode: i } = r;
              return i.show === !1
                ? null
                : mp(i)
                ? w(gp, { clsPrefix: n, key: r.key })
                : r.isGroup
                ? ($o(
                    "dropdown",
                    "`group` node is not allowed to be put in `group` node."
                  ),
                  null)
                : w(bp, { clsPrefix: n, tmNode: r, parentKey: t, key: r.key });
            })
      );
    },
  }),
  n$ = pe({
    name: "DropdownRenderOption",
    props: { tmNode: { type: Object, required: !0 } },
    render() {
      const {
        rawNode: { render: e, props: t },
      } = this.tmNode;
      return w("div", t, [e == null ? void 0 : e()]);
    },
  }),
  yp = pe({
    name: "DropdownMenu",
    props: {
      scrollable: Boolean,
      showArrow: Boolean,
      arrowStyle: [String, Object],
      clsPrefix: { type: String, required: !0 },
      tmNodes: { type: Array, default: () => [] },
      parentKey: { type: [String, Number], default: null },
    },
    setup(e) {
      const { renderIconRef: t, childrenFieldRef: n } = me(ss);
      Pe($a, {
        showIconRef: K(() => {
          const r = t.value;
          return e.tmNodes.some((i) => {
            var s;
            if (i.isGroup)
              return (s = i.children) === null || s === void 0
                ? void 0
                : s.some(({ rawNode: a }) => (r ? r(a) : a.icon));
            const { rawNode: l } = i;
            return r ? r(l) : l.icon;
          });
        }),
        hasSubmenuRef: K(() => {
          const { value: r } = n;
          return e.tmNodes.some((i) => {
            var s;
            if (i.isGroup)
              return (s = i.children) === null || s === void 0
                ? void 0
                : s.some(({ rawNode: a }) => $l(a, r));
            const { rawNode: l } = i;
            return $l(l, r);
          });
        }),
      });
      const o = Q(null);
      return Pe(Xi, null), Pe(Yi, null), Pe(Or, o), { bodyRef: o };
    },
    render() {
      const { parentKey: e, clsPrefix: t, scrollable: n } = this,
        o = this.tmNodes.map((r) => {
          const { rawNode: i } = r;
          return i.show === !1
            ? null
            : Q_(i)
            ? w(n$, { tmNode: r, key: r.key })
            : mp(i)
            ? w(gp, { clsPrefix: t, key: r.key })
            : J_(i)
            ? w(t$, { clsPrefix: t, tmNode: r, parentKey: e, key: r.key })
            : w(bp, {
                clsPrefix: t,
                tmNode: r,
                parentKey: e,
                key: r.key,
                props: i.props,
                scrollable: n,
              });
        });
      return w(
        "div",
        {
          class: [`${t}-dropdown-menu`, n && `${t}-dropdown-menu--scrollable`],
          ref: "bodyRef",
        },
        n
          ? w(
              ap,
              { contentClass: `${t}-dropdown-menu__content` },
              { default: () => o }
            )
          : o,
        this.showArrow
          ? dp({
              clsPrefix: t,
              arrowStyle: this.arrowStyle,
              arrowClass: void 0,
              arrowWrapperClass: void 0,
              arrowWrapperStyle: void 0,
            })
          : null
      );
    },
  }),
  o$ = Y(
    "dropdown-menu",
    `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,
    [
      cp(),
      Y(
        "dropdown-option",
        `
 position: relative;
 `,
        [
          B(
            "a",
            `
 text-decoration: none;
 color: inherit;
 outline: none;
 `,
            [
              B(
                "&::before",
                `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `
              ),
            ]
          ),
          Y(
            "dropdown-option-body",
            `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,
            [
              B(
                "&::before",
                `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `
              ),
              mn("disabled", [
                J(
                  "pending",
                  `
 color: var(--n-option-text-color-hover);
 `,
                  [
                    ee(
                      "prefix, suffix",
                      `
 color: var(--n-option-text-color-hover);
 `
                    ),
                    B(
                      "&::before",
                      "background-color: var(--n-option-color-hover);"
                    ),
                  ]
                ),
                J(
                  "active",
                  `
 color: var(--n-option-text-color-active);
 `,
                  [
                    ee(
                      "prefix, suffix",
                      `
 color: var(--n-option-text-color-active);
 `
                    ),
                    B(
                      "&::before",
                      "background-color: var(--n-option-color-active);"
                    ),
                  ]
                ),
                J(
                  "child-active",
                  `
 color: var(--n-option-text-color-child-active);
 `,
                  [
                    ee(
                      "prefix, suffix",
                      `
 color: var(--n-option-text-color-child-active);
 `
                    ),
                  ]
                ),
              ]),
              J(
                "disabled",
                `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `
              ),
              J(
                "group",
                `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,
                [
                  ee(
                    "prefix",
                    `
 width: calc(var(--n-option-prefix-width) / 2);
 `,
                    [
                      J(
                        "show-icon",
                        `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `
                      ),
                    ]
                  ),
                ]
              ),
              ee(
                "prefix",
                `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,
                [
                  J(
                    "show-icon",
                    `
 width: var(--n-option-icon-prefix-width);
 `
                  ),
                  Y(
                    "icon",
                    `
 font-size: var(--n-option-icon-size);
 `
                  ),
                ]
              ),
              ee(
                "label",
                `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `
              ),
              ee(
                "suffix",
                `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,
                [
                  J(
                    "has-submenu",
                    `
 width: var(--n-option-icon-suffix-width);
 `
                  ),
                  Y(
                    "icon",
                    `
 font-size: var(--n-option-icon-size);
 `
                  ),
                ]
              ),
              Y("dropdown-menu", "pointer-events: all;"),
            ]
          ),
          Y(
            "dropdown-offset-container",
            `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `
          ),
        ]
      ),
      Y(
        "dropdown-divider",
        `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `
      ),
      Y(
        "dropdown-menu-wrapper",
        `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `
      ),
      B(">", [
        Y(
          "scrollbar",
          `
 height: inherit;
 max-height: inherit;
 `
        ),
      ]),
      mn(
        "scrollable",
        `
 padding: var(--n-padding);
 `
      ),
      J("scrollable", [
        ee(
          "content",
          `
 padding: var(--n-padding);
 `
        ),
      ]),
    ]
  ),
  r$ = {
    animated: { type: Boolean, default: !0 },
    keyboard: { type: Boolean, default: !0 },
    size: { type: String, default: "medium" },
    inverted: Boolean,
    placement: { type: String, default: "bottom" },
    onSelect: [Function, Array],
    options: { type: Array, default: () => [] },
    menuProps: Function,
    showArrow: Boolean,
    renderLabel: Function,
    renderIcon: Function,
    renderOption: Function,
    nodeProps: Function,
    labelField: { type: String, default: "label" },
    keyField: { type: String, default: "key" },
    childrenField: { type: String, default: "children" },
    value: [String, Number],
  },
  i$ = Object.keys(is),
  s$ = Object.assign(Object.assign(Object.assign({}, is), r$), Te.props),
  l$ = pe({
    name: "Dropdown",
    inheritAttrs: !1,
    props: s$,
    setup(e) {
      const t = Q(!1),
        n = lh(Be(e, "show"), t),
        o = K(() => {
          const { keyField: T, childrenField: W } = e;
          return r_(e.options, {
            getKey(q) {
              return q[T];
            },
            getDisabled(q) {
              return q.disabled === !0;
            },
            getIgnored(q) {
              return q.type === "divider" || q.type === "render";
            },
            getChildren(q) {
              return q[W];
            },
          });
        }),
        r = K(() => o.value.treeNodes),
        i = Q(null),
        s = Q(null),
        l = Q(null),
        a = K(() => {
          var T, W, q;
          return (q =
            (W = (T = i.value) !== null && T !== void 0 ? T : s.value) !==
              null && W !== void 0
              ? W
              : l.value) !== null && q !== void 0
            ? q
            : null;
        }),
        c = K(() => o.value.getPath(a.value).keyPath),
        u = K(() => o.value.getPath(e.value).keyPath),
        d = Ct(() => e.keyboard && n.value);
      $y(
        {
          keydown: {
            ArrowUp: { prevent: !0, handler: E },
            ArrowRight: { prevent: !0, handler: _ },
            ArrowDown: { prevent: !0, handler: P },
            ArrowLeft: { prevent: !0, handler: A },
            Enter: { prevent: !0, handler: v },
            Escape: C,
          },
        },
        d
      );
      const { mergedClsPrefixRef: f, inlineThemeDisabled: p } = it(e),
        h = Te("Dropdown", "-dropdown", o$, V_, e, f);
      Pe(ss, {
        labelFieldRef: Be(e, "labelField"),
        childrenFieldRef: Be(e, "childrenField"),
        renderLabelRef: Be(e, "renderLabel"),
        renderIconRef: Be(e, "renderIcon"),
        hoverKeyRef: i,
        keyboardKeyRef: s,
        lastToggledSubmenuKeyRef: l,
        pendingKeyPathRef: c,
        activeKeyPathRef: u,
        animatedRef: Be(e, "animated"),
        mergedShowRef: n,
        nodePropsRef: Be(e, "nodeProps"),
        renderOptionRef: Be(e, "renderOption"),
        menuPropsRef: Be(e, "menuProps"),
        doSelect: b,
        doUpdateShow: y,
      }),
        Ne(n, (T) => {
          !e.animated && !T && g();
        });
      function b(T, W) {
        const { onSelect: q } = e;
        q && ut(q, T, W);
      }
      function y(T) {
        const { "onUpdate:show": W, onUpdateShow: q } = e;
        W && ut(W, T), q && ut(q, T), (t.value = T);
      }
      function g() {
        (i.value = null), (s.value = null), (l.value = null);
      }
      function C() {
        y(!1);
      }
      function A() {
        $("left");
      }
      function _() {
        $("right");
      }
      function E() {
        $("up");
      }
      function P() {
        $("down");
      }
      function v() {
        const T = S();
        T != null && T.isLeaf && n.value && (b(T.key, T.rawNode), y(!1));
      }
      function S() {
        var T;
        const { value: W } = o,
          { value: q } = a;
        return !W || q === null
          ? null
          : (T = W.getNode(q)) !== null && T !== void 0
          ? T
          : null;
      }
      function $(T) {
        const { value: W } = a,
          {
            value: { getFirstAvailableNode: q },
          } = o;
        let I = null;
        if (W === null) {
          const U = q();
          U !== null && (I = U.key);
        } else {
          const U = S();
          if (U) {
            let z;
            switch (T) {
              case "down":
                z = U.getNext();
                break;
              case "up":
                z = U.getPrev();
                break;
              case "right":
                z = U.getChild();
                break;
              case "left":
                z = U.getParent();
                break;
            }
            z && (I = z.key);
          }
        }
        I !== null && ((i.value = null), (s.value = I));
      }
      const O = K(() => {
          const { size: T, inverted: W } = e,
            {
              common: { cubicBezierEaseInOut: q },
              self: I,
            } = h.value,
            {
              padding: U,
              dividerColor: z,
              borderRadius: X,
              optionOpacityDisabled: de,
              [le("optionIconSuffixWidth", T)]: ce,
              [le("optionSuffixWidth", T)]: Ce,
              [le("optionIconPrefixWidth", T)]: ye,
              [le("optionPrefixWidth", T)]: Ke,
              [le("fontSize", T)]: Ve,
              [le("optionHeight", T)]: vt,
              [le("optionIconSize", T)]: ge,
            } = I,
            M = {
              "--n-bezier": q,
              "--n-font-size": Ve,
              "--n-padding": U,
              "--n-border-radius": X,
              "--n-option-height": vt,
              "--n-option-prefix-width": Ke,
              "--n-option-icon-prefix-width": ye,
              "--n-option-suffix-width": Ce,
              "--n-option-icon-suffix-width": ce,
              "--n-option-icon-size": ge,
              "--n-divider-color": z,
              "--n-option-opacity-disabled": de,
            };
          return (
            W
              ? ((M["--n-color"] = I.colorInverted),
                (M["--n-option-color-hover"] = I.optionColorHoverInverted),
                (M["--n-option-color-active"] = I.optionColorActiveInverted),
                (M["--n-option-text-color"] = I.optionTextColorInverted),
                (M["--n-option-text-color-hover"] =
                  I.optionTextColorHoverInverted),
                (M["--n-option-text-color-active"] =
                  I.optionTextColorActiveInverted),
                (M["--n-option-text-color-child-active"] =
                  I.optionTextColorChildActiveInverted),
                (M["--n-prefix-color"] = I.prefixColorInverted),
                (M["--n-suffix-color"] = I.suffixColorInverted),
                (M["--n-group-header-text-color"] =
                  I.groupHeaderTextColorInverted))
              : ((M["--n-color"] = I.color),
                (M["--n-option-color-hover"] = I.optionColorHover),
                (M["--n-option-color-active"] = I.optionColorActive),
                (M["--n-option-text-color"] = I.optionTextColor),
                (M["--n-option-text-color-hover"] = I.optionTextColorHover),
                (M["--n-option-text-color-active"] = I.optionTextColorActive),
                (M["--n-option-text-color-child-active"] =
                  I.optionTextColorChildActive),
                (M["--n-prefix-color"] = I.prefixColor),
                (M["--n-suffix-color"] = I.suffixColor),
                (M["--n-group-header-text-color"] = I.groupHeaderTextColor)),
            M
          );
        }),
        F = p
          ? $t(
              "dropdown",
              K(() => `${e.size[0]}${e.inverted ? "i" : ""}`),
              O,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: f,
        mergedTheme: h,
        tmNodes: r,
        mergedShow: n,
        handleAfterLeave: () => {
          e.animated && g();
        },
        doUpdateShow: y,
        cssVars: p ? void 0 : O,
        themeClass: F == null ? void 0 : F.themeClass,
        onRender: F == null ? void 0 : F.onRender,
      };
    },
    render() {
      const e = (o, r, i, s, l) => {
          var a;
          const { mergedClsPrefix: c, menuProps: u } = this;
          (a = this.onRender) === null || a === void 0 || a.call(this);
          const d =
              (u == null
                ? void 0
                : u(
                    void 0,
                    this.tmNodes.map((p) => p.rawNode)
                  )) || {},
            f = {
              ref: Hb(r),
              class: [o, `${c}-dropdown`, this.themeClass],
              clsPrefix: c,
              tmNodes: this.tmNodes,
              style: [...i, this.cssVars],
              showArrow: this.showArrow,
              arrowStyle: this.arrowStyle,
              scrollable: this.scrollable,
              onMouseenter: s,
              onMouseleave: l,
            };
          return w(yp, Zn(this.$attrs, f, d));
        },
        { mergedTheme: t } = this,
        n = {
          show: this.mergedShow,
          theme: t.peers.Popover,
          themeOverrides: t.peerOverrides.Popover,
          internalOnAfterLeave: this.handleAfterLeave,
          internalRenderBody: e,
          onUpdateShow: this.doUpdateShow,
          "onUpdate:show": void 0,
        };
      return w(fp, Object.assign({}, Vn(this.$props, i$), n), {
        trigger: () => {
          var o, r;
          return (r = (o = this.$slots).default) === null || r === void 0
            ? void 0
            : r.call(o);
        },
      });
    },
  }),
  a$ = {
    titleFontSize: "18px",
    padding: "16px 28px 20px 28px",
    iconSize: "28px",
    actionSpace: "12px",
    contentMargin: "8px 0 16px 0",
    iconMargin: "0 4px 0 0",
    iconMarginIconTop: "4px 0 8px 0",
    closeSize: "22px",
    closeIconSize: "18px",
    closeMargin: "20px 26px 0 0",
    closeMarginIconTop: "10px 16px 0 0",
  };
function c$(e) {
  const {
    textColor1: t,
    textColor2: n,
    modalColor: o,
    closeIconColor: r,
    closeIconColorHover: i,
    closeIconColorPressed: s,
    closeColorHover: l,
    closeColorPressed: a,
    infoColor: c,
    successColor: u,
    warningColor: d,
    errorColor: f,
    primaryColor: p,
    dividerColor: h,
    borderRadius: b,
    fontWeightStrong: y,
    lineHeight: g,
    fontSize: C,
  } = e;
  return Object.assign(Object.assign({}, a$), {
    fontSize: C,
    lineHeight: g,
    border: `1px solid ${h}`,
    titleTextColor: t,
    textColor: n,
    color: o,
    closeColorHover: l,
    closeColorPressed: a,
    closeIconColor: r,
    closeIconColorHover: i,
    closeIconColorPressed: s,
    closeBorderRadius: b,
    iconColor: p,
    iconColorInfo: c,
    iconColorSuccess: u,
    iconColorWarning: d,
    iconColorError: f,
    borderRadius: b,
    titleFontWeight: y,
  });
}
const xp = { name: "Dialog", common: gt, peers: { Button: hp }, self: c$ },
  ls = {
    icon: Function,
    type: { type: String, default: "default" },
    title: [String, Function],
    closable: { type: Boolean, default: !0 },
    negativeText: String,
    positiveText: String,
    positiveButtonProps: Object,
    negativeButtonProps: Object,
    content: [String, Function],
    action: Function,
    showIcon: { type: Boolean, default: !0 },
    loading: Boolean,
    bordered: Boolean,
    iconPlacement: String,
    titleClass: [String, Array],
    titleStyle: [String, Object],
    contentClass: [String, Array],
    contentStyle: [String, Object],
    actionClass: [String, Array],
    actionStyle: [String, Object],
    onPositiveClick: Function,
    onNegativeClick: Function,
    onClose: Function,
  },
  wp = Ui(ls),
  u$ = B([
    Y(
      "dialog",
      `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `,
      [
        ee("icon", { color: "var(--n-icon-color)" }),
        J("bordered", { border: "var(--n-border)" }),
        J("icon-top", [
          ee("close", { margin: "var(--n-close-margin)" }),
          ee("icon", { margin: "var(--n-icon-margin)" }),
          ee("content", { textAlign: "center" }),
          ee("title", { justifyContent: "center" }),
          ee("action", { justifyContent: "center" }),
        ]),
        J("icon-left", [
          ee("icon", { margin: "var(--n-icon-margin)" }),
          J("closable", [
            ee(
              "title",
              `
 padding-right: calc(var(--n-close-size) + 6px);
 `
            ),
          ]),
        ]),
        ee(
          "close",
          `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `
        ),
        ee(
          "content",
          `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `,
          [J("last", "margin-bottom: 0;")]
        ),
        ee(
          "action",
          `
 display: flex;
 justify-content: flex-end;
 `,
          [
            B(
              "> *:not(:last-child)",
              `
 margin-right: var(--n-action-space);
 `
            ),
          ]
        ),
        ee(
          "icon",
          `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `
        ),
        ee(
          "title",
          `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `
        ),
        Y(
          "dialog-icon-container",
          `
 display: flex;
 justify-content: center;
 `
        ),
      ]
    ),
    nh(
      Y(
        "dialog",
        `
 width: 446px;
 max-width: calc(100vw - 32px);
 `
      )
    ),
    Y("dialog", [
      oh(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `),
    ]),
  ]),
  d$ = {
    default: () => w(Si, null),
    info: () => w(Si, null),
    success: () => w(ma, null),
    warning: () => w(ba, null),
    error: () => w(va, null),
  },
  Cp = pe({
    name: "Dialog",
    alias: ["NimbusConfirmCard", "Confirm"],
    props: Object.assign(Object.assign({}, Te.props), ls),
    setup(e) {
      const {
          mergedComponentPropsRef: t,
          mergedClsPrefixRef: n,
          inlineThemeDisabled: o,
          mergedRtlRef: r,
        } = it(e),
        i = Ro("Dialog", r, n),
        s = K(() => {
          var p, h;
          const { iconPlacement: b } = e;
          return (
            b ||
            ((h =
              (p = t == null ? void 0 : t.value) === null || p === void 0
                ? void 0
                : p.Dialog) === null || h === void 0
              ? void 0
              : h.iconPlacement) ||
            "left"
          );
        });
      function l(p) {
        const { onPositiveClick: h } = e;
        h && h(p);
      }
      function a(p) {
        const { onNegativeClick: h } = e;
        h && h(p);
      }
      function c() {
        const { onClose: p } = e;
        p && p();
      }
      const u = Te("Dialog", "-dialog", u$, xp, e, n),
        d = K(() => {
          const { type: p } = e,
            h = s.value,
            {
              common: { cubicBezierEaseInOut: b },
              self: {
                fontSize: y,
                lineHeight: g,
                border: C,
                titleTextColor: A,
                textColor: _,
                color: E,
                closeBorderRadius: P,
                closeColorHover: v,
                closeColorPressed: S,
                closeIconColor: $,
                closeIconColorHover: O,
                closeIconColorPressed: F,
                closeIconSize: T,
                borderRadius: W,
                titleFontWeight: q,
                titleFontSize: I,
                padding: U,
                iconSize: z,
                actionSpace: X,
                contentMargin: de,
                closeSize: ce,
                [h === "top" ? "iconMarginIconTop" : "iconMargin"]: Ce,
                [h === "top" ? "closeMarginIconTop" : "closeMargin"]: ye,
                [le("iconColor", p)]: Ke,
              },
            } = u.value,
            Ve = Ki(Ce);
          return {
            "--n-font-size": y,
            "--n-icon-color": Ke,
            "--n-bezier": b,
            "--n-close-margin": ye,
            "--n-icon-margin-top": Ve.top,
            "--n-icon-margin-right": Ve.right,
            "--n-icon-margin-bottom": Ve.bottom,
            "--n-icon-margin-left": Ve.left,
            "--n-icon-size": z,
            "--n-close-size": ce,
            "--n-close-icon-size": T,
            "--n-close-border-radius": P,
            "--n-close-color-hover": v,
            "--n-close-color-pressed": S,
            "--n-close-icon-color": $,
            "--n-close-icon-color-hover": O,
            "--n-close-icon-color-pressed": F,
            "--n-color": E,
            "--n-text-color": _,
            "--n-border-radius": W,
            "--n-padding": U,
            "--n-line-height": g,
            "--n-border": C,
            "--n-content-margin": de,
            "--n-title-font-size": I,
            "--n-title-font-weight": q,
            "--n-title-text-color": A,
            "--n-action-space": X,
          };
        }),
        f = o
          ? $t(
              "dialog",
              K(() => `${e.type[0]}${s.value[0]}`),
              d,
              e
            )
          : void 0;
      return {
        mergedClsPrefix: n,
        rtlEnabled: i,
        mergedIconPlacement: s,
        mergedTheme: u,
        handlePositiveClick: l,
        handleNegativeClick: a,
        handleCloseClick: c,
        cssVars: o ? void 0 : d,
        themeClass: f == null ? void 0 : f.themeClass,
        onRender: f == null ? void 0 : f.onRender,
      };
    },
    render() {
      var e;
      const {
        bordered: t,
        mergedIconPlacement: n,
        cssVars: o,
        closable: r,
        showIcon: i,
        title: s,
        content: l,
        action: a,
        negativeText: c,
        positiveText: u,
        positiveButtonProps: d,
        negativeButtonProps: f,
        handlePositiveClick: p,
        handleNegativeClick: h,
        mergedTheme: b,
        loading: y,
        type: g,
        mergedClsPrefix: C,
      } = this;
      (e = this.onRender) === null || e === void 0 || e.call(this);
      const A = i
          ? w(
              ts,
              { clsPrefix: C, class: `${C}-dialog__icon` },
              {
                default: () =>
                  ct(
                    this.$slots.icon,
                    (E) => E || (this.icon ? Ze(this.icon) : d$[this.type]())
                  ),
              }
            )
          : null,
        _ = ct(this.$slots.action, (E) =>
          E || u || c || a
            ? w(
                "div",
                {
                  class: [`${C}-dialog__action`, this.actionClass],
                  style: this.actionStyle,
                },
                E ||
                  (a
                    ? [Ze(a)]
                    : [
                        this.negativeText &&
                          w(
                            _l,
                            Object.assign(
                              {
                                theme: b.peers.Button,
                                themeOverrides: b.peerOverrides.Button,
                                ghost: !0,
                                size: "small",
                                onClick: h,
                              },
                              f
                            ),
                            { default: () => Ze(this.negativeText) }
                          ),
                        this.positiveText &&
                          w(
                            _l,
                            Object.assign(
                              {
                                theme: b.peers.Button,
                                themeOverrides: b.peerOverrides.Button,
                                size: "small",
                                type: g === "default" ? "primary" : g,
                                disabled: y,
                                loading: y,
                                onClick: p,
                              },
                              d
                            ),
                            { default: () => Ze(this.positiveText) }
                          ),
                      ])
              )
            : null
        );
      return w(
        "div",
        {
          class: [
            `${C}-dialog`,
            this.themeClass,
            this.closable && `${C}-dialog--closable`,
            `${C}-dialog--icon-${n}`,
            t && `${C}-dialog--bordered`,
            this.rtlEnabled && `${C}-dialog--rtl`,
          ],
          style: o,
          role: "dialog",
        },
        r
          ? ct(this.$slots.close, (E) => {
              const P = [
                `${C}-dialog__close`,
                this.rtlEnabled && `${C}-dialog--rtl`,
              ];
              return E
                ? w("div", { class: P }, E)
                : w(ns, {
                    clsPrefix: C,
                    class: P,
                    onClick: this.handleCloseClick,
                  });
            })
          : null,
        i && n === "top"
          ? w("div", { class: `${C}-dialog-icon-container` }, A)
          : null,
        w(
          "div",
          {
            class: [`${C}-dialog__title`, this.titleClass],
            style: this.titleStyle,
          },
          i && n === "left" ? A : null,
          Fc(this.$slots.header, () => [Ze(s)])
        ),
        w(
          "div",
          {
            class: [
              `${C}-dialog__content`,
              _ ? "" : `${C}-dialog__content--last`,
              this.contentClass,
            ],
            style: this.contentStyle,
          },
          Fc(this.$slots.default, () => [Ze(l)])
        ),
        _
      );
    },
  }),
  Sp = "n-dialog-provider",
  _p = "n-dialog-api",
  f$ = "n-dialog-reactive-list";
function h$(e) {
  const { modalColor: t, textColor2: n, boxShadow3: o } = e;
  return { color: t, textColor: n, boxShadow: o };
}
const p$ = {
    name: "Modal",
    common: gt,
    peers: { Scrollbar: os, Dialog: xp, Card: pp },
    self: h$,
  },
  Pa = Object.assign(Object.assign({}, _a), ls),
  g$ = Ui(Pa),
  v$ = pe({
    name: "ModalBody",
    inheritAttrs: !1,
    props: Object.assign(
      Object.assign(
        {
          show: { type: Boolean, required: !0 },
          preset: String,
          displayDirective: { type: String, required: !0 },
          trapFocus: { type: Boolean, default: !0 },
          autoFocus: { type: Boolean, default: !0 },
          blockScroll: Boolean,
        },
        Pa
      ),
      {
        renderMask: Function,
        onClickoutside: Function,
        onBeforeLeave: { type: Function, required: !0 },
        onAfterLeave: { type: Function, required: !0 },
        onPositiveClick: { type: Function, required: !0 },
        onNegativeClick: { type: Function, required: !0 },
        onClose: { type: Function, required: !0 },
        onAfterEnter: Function,
        onEsc: Function,
      }
    ),
    setup(e) {
      const t = Q(null),
        n = Q(null),
        o = Q(e.show),
        r = Q(null),
        i = Q(null);
      Ne(Be(e, "show"), (y) => {
        y && (o.value = !0);
      }),
        p0(K(() => e.blockScroll && o.value));
      const s = me(ch);
      function l() {
        if (s.transformOriginRef.value === "center") return "";
        const { value: y } = r,
          { value: g } = i;
        if (y === null || g === null) return "";
        if (n.value) {
          const C = n.value.containerScrollTop;
          return `${y}px ${g + C}px`;
        }
        return "";
      }
      function a(y) {
        if (s.transformOriginRef.value === "center") return;
        const g = s.getMousePosition();
        if (!g || !n.value) return;
        const C = n.value.containerScrollTop,
          { offsetLeft: A, offsetTop: _ } = y;
        if (g) {
          const E = g.y,
            P = g.x;
          (r.value = -(A - P)), (i.value = -(_ - E - C));
        }
        y.style.transformOrigin = l();
      }
      function c(y) {
        yn(() => {
          a(y);
        });
      }
      function u(y) {
        (y.style.transformOrigin = l()), e.onBeforeLeave();
      }
      function d() {
        (o.value = !1), (r.value = null), (i.value = null), e.onAfterLeave();
      }
      function f() {
        const { onClose: y } = e;
        y && y();
      }
      function p() {
        e.onNegativeClick();
      }
      function h() {
        e.onPositiveClick();
      }
      const b = Q(null);
      return (
        Ne(b, (y) => {
          y &&
            yn(() => {
              const g = y.el;
              g && t.value !== g && (t.value = g);
            });
        }),
        Pe(Xi, t),
        Pe(Yi, null),
        Pe(Or, null),
        {
          mergedTheme: s.mergedThemeRef,
          appear: s.appearRef,
          isMounted: s.isMountedRef,
          mergedClsPrefix: s.mergedClsPrefixRef,
          bodyRef: t,
          scrollbarRef: n,
          displayed: o,
          childNodeRef: b,
          handlePositiveClick: h,
          handleNegativeClick: p,
          handleCloseClick: f,
          handleAfterLeave: d,
          handleBeforeLeave: u,
          handleEnter: c,
        }
      );
    },
    render() {
      const {
        $slots: e,
        $attrs: t,
        handleEnter: n,
        handleAfterLeave: o,
        handleBeforeLeave: r,
        preset: i,
        mergedClsPrefix: s,
      } = this;
      let l = null;
      if (!i) {
        if (((l = ll(e)), !l)) {
          $o("modal", "default slot is empty");
          return;
        }
        (l = jt(l)), (l.props = Zn({ class: `${s}-modal` }, t, l.props || {}));
      }
      return this.displayDirective === "show" || this.displayed || this.show
        ? Wn(
            w(
              "div",
              { role: "none", class: `${s}-modal-body-wrapper` },
              w(
                rs,
                {
                  ref: "scrollbarRef",
                  theme: this.mergedTheme.peers.Scrollbar,
                  themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                  contentClass: `${s}-modal-scroll-content`,
                },
                {
                  default: () => {
                    var a;
                    return [
                      (a = this.renderMask) === null || a === void 0
                        ? void 0
                        : a.call(this),
                      w(
                        Eh,
                        {
                          disabled: !this.trapFocus,
                          active: this.show,
                          onEsc: this.onEsc,
                          autoFocus: this.autoFocus,
                        },
                        {
                          default: () => {
                            var c;
                            return w(
                              pt,
                              {
                                name: "fade-in-scale-up-transition",
                                appear:
                                  (c = this.appear) !== null && c !== void 0
                                    ? c
                                    : this.isMounted,
                                onEnter: n,
                                onAfterEnter: this.onAfterEnter,
                                onAfterLeave: o,
                                onBeforeLeave: r,
                              },
                              {
                                default: () => {
                                  const u = [[Qs, this.show]],
                                    { onClickoutside: d } = this;
                                  return (
                                    d &&
                                      u.push([
                                        fl,
                                        this.onClickoutside,
                                        void 0,
                                        { capture: !0 },
                                      ]),
                                    Wn(
                                      this.preset === "confirm" ||
                                        this.preset === "dialog"
                                        ? w(
                                            Cp,
                                            Object.assign(
                                              {},
                                              this.$attrs,
                                              {
                                                class: [
                                                  `${s}-modal`,
                                                  this.$attrs.class,
                                                ],
                                                ref: "bodyRef",
                                                theme:
                                                  this.mergedTheme.peers.Dialog,
                                                themeOverrides:
                                                  this.mergedTheme.peerOverrides
                                                    .Dialog,
                                              },
                                              Vn(this.$props, wp),
                                              { "aria-modal": "true" }
                                            ),
                                            e
                                          )
                                        : this.preset === "card"
                                        ? w(
                                            L_,
                                            Object.assign(
                                              {},
                                              this.$attrs,
                                              {
                                                ref: "bodyRef",
                                                class: [
                                                  `${s}-modal`,
                                                  this.$attrs.class,
                                                ],
                                                theme:
                                                  this.mergedTheme.peers.Card,
                                                themeOverrides:
                                                  this.mergedTheme.peerOverrides
                                                    .Card,
                                              },
                                              Vn(this.$props, k_),
                                              {
                                                "aria-modal": "true",
                                                role: "dialog",
                                              }
                                            ),
                                            e
                                          )
                                        : (this.childNodeRef = l),
                                      u
                                    )
                                  );
                                },
                              }
                            );
                          },
                        }
                      ),
                    ];
                  },
                }
              )
            ),
            [
              [
                Qs,
                this.displayDirective === "if" || this.displayed || this.show,
              ],
            ]
          )
        : null;
    },
  }),
  m$ = B([
    Y(
      "modal-container",
      `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `
    ),
    Y(
      "modal-mask",
      `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `,
      [
        Ca({
          enterDuration: ".25s",
          leaveDuration: ".25s",
          enterCubicBezier: "var(--n-bezier-ease-out)",
          leaveCubicBezier: "var(--n-bezier-ease-out)",
        }),
      ]
    ),
    Y(
      "modal-body-wrapper",
      `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `,
      [
        Y(
          "modal-scroll-content",
          `
 min-height: 100%;
 display: flex;
 position: relative;
 `
        ),
      ]
    ),
    Y(
      "modal",
      `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `,
      [cp({ duration: ".25s", enterScale: ".5" })]
    ),
  ]),
  b$ = Object.assign(
    Object.assign(
      Object.assign(Object.assign({}, Te.props), {
        show: Boolean,
        unstableShowMask: { type: Boolean, default: !0 },
        maskClosable: { type: Boolean, default: !0 },
        preset: String,
        to: [String, Object],
        displayDirective: { type: String, default: "if" },
        transformOrigin: { type: String, default: "mouse" },
        zIndex: Number,
        autoFocus: { type: Boolean, default: !0 },
        trapFocus: { type: Boolean, default: !0 },
        closeOnEsc: { type: Boolean, default: !0 },
        blockScroll: { type: Boolean, default: !0 },
      }),
      Pa
    ),
    {
      onEsc: Function,
      "onUpdate:show": [Function, Array],
      onUpdateShow: [Function, Array],
      onAfterEnter: Function,
      onBeforeLeave: Function,
      onAfterLeave: Function,
      onClose: Function,
      onPositiveClick: Function,
      onNegativeClick: Function,
      onMaskClick: Function,
      internalDialog: Boolean,
      internalModal: Boolean,
      internalAppear: { type: Boolean, default: void 0 },
      overlayStyle: [String, Object],
      onBeforeHide: Function,
      onAfterHide: Function,
      onHide: Function,
    }
  ),
  $p = pe({
    name: "Modal",
    inheritAttrs: !1,
    props: b$,
    setup(e) {
      const t = Q(null),
        {
          mergedClsPrefixRef: n,
          namespaceRef: o,
          inlineThemeDisabled: r,
        } = it(e),
        i = Te("Modal", "-modal", m$, p$, e, n),
        s = sh(64),
        l = ih(),
        a = qi(),
        c = e.internalDialog ? me(Sp, null) : null,
        u = e.internalModal ? me(Ey, null) : null,
        d = g0();
      function f(P) {
        const { onUpdateShow: v, "onUpdate:show": S, onHide: $ } = e;
        v && ut(v, P), S && ut(S, P), $ && !P && $(P);
      }
      function p() {
        const { onClose: P } = e;
        P
          ? Promise.resolve(P()).then((v) => {
              v !== !1 && f(!1);
            })
          : f(!1);
      }
      function h() {
        const { onPositiveClick: P } = e;
        P
          ? Promise.resolve(P()).then((v) => {
              v !== !1 && f(!1);
            })
          : f(!1);
      }
      function b() {
        const { onNegativeClick: P } = e;
        P
          ? Promise.resolve(P()).then((v) => {
              v !== !1 && f(!1);
            })
          : f(!1);
      }
      function y() {
        const { onBeforeLeave: P, onBeforeHide: v } = e;
        P && ut(P), v && v();
      }
      function g() {
        const { onAfterLeave: P, onAfterHide: v } = e;
        P && ut(P), v && v();
      }
      function C(P) {
        var v;
        const { onMaskClick: S } = e;
        S && S(P),
          e.maskClosable &&
            !((v = t.value) === null || v === void 0) &&
            v.contains(br(P)) &&
            f(!1);
      }
      function A(P) {
        var v;
        (v = e.onEsc) === null || v === void 0 || v.call(e),
          e.show && e.closeOnEsc && fy(P) && (d.value || f(!1));
      }
      Pe(ch, {
        getMousePosition: () => {
          const P = c || u;
          if (P) {
            const { clickedRef: v, clickedPositionRef: S } = P;
            if (v.value && S.value) return S.value;
          }
          return s.value ? l.value : null;
        },
        mergedClsPrefixRef: n,
        mergedThemeRef: i,
        isMountedRef: a,
        appearRef: Be(e, "internalAppear"),
        transformOriginRef: Be(e, "transformOrigin"),
      });
      const _ = K(() => {
          const {
            common: { cubicBezierEaseOut: P },
            self: { boxShadow: v, color: S, textColor: $ },
          } = i.value;
          return {
            "--n-bezier-ease-out": P,
            "--n-box-shadow": v,
            "--n-color": S,
            "--n-text-color": $,
          };
        }),
        E = r ? $t("theme-class", void 0, _, e) : void 0;
      return {
        mergedClsPrefix: n,
        namespace: o,
        isMounted: a,
        containerRef: t,
        presetProps: K(() => Vn(e, g$)),
        handleEsc: A,
        handleAfterLeave: g,
        handleClickoutside: C,
        handleBeforeLeave: y,
        doUpdateShow: f,
        handleNegativeClick: b,
        handlePositiveClick: h,
        handleCloseClick: p,
        cssVars: r ? void 0 : _,
        themeClass: E == null ? void 0 : E.themeClass,
        onRender: E == null ? void 0 : E.onRender,
      };
    },
    render() {
      const { mergedClsPrefix: e } = this;
      return w(
        gh,
        { to: this.to, show: this.show },
        {
          default: () => {
            var t;
            (t = this.onRender) === null || t === void 0 || t.call(this);
            const { unstableShowMask: n } = this;
            return Wn(
              w(
                "div",
                {
                  role: "none",
                  ref: "containerRef",
                  class: [
                    `${e}-modal-container`,
                    this.themeClass,
                    this.namespace,
                  ],
                  style: this.cssVars,
                },
                w(
                  v$,
                  Object.assign(
                    { style: this.overlayStyle },
                    this.$attrs,
                    {
                      ref: "bodyWrapper",
                      displayDirective: this.displayDirective,
                      show: this.show,
                      preset: this.preset,
                      autoFocus: this.autoFocus,
                      trapFocus: this.trapFocus,
                      blockScroll: this.blockScroll,
                    },
                    this.presetProps,
                    {
                      onEsc: this.handleEsc,
                      onClose: this.handleCloseClick,
                      onNegativeClick: this.handleNegativeClick,
                      onPositiveClick: this.handlePositiveClick,
                      onBeforeLeave: this.handleBeforeLeave,
                      onAfterEnter: this.onAfterEnter,
                      onAfterLeave: this.handleAfterLeave,
                      onClickoutside: n ? void 0 : this.handleClickoutside,
                      renderMask: n
                        ? () => {
                            var o;
                            return w(
                              pt,
                              {
                                name: "fade-in-transition",
                                key: "mask",
                                appear:
                                  (o = this.internalAppear) !== null &&
                                  o !== void 0
                                    ? o
                                    : this.isMounted,
                              },
                              {
                                default: () =>
                                  this.show
                                    ? w("div", {
                                        "aria-hidden": !0,
                                        ref: "containerRef",
                                        class: `${e}-modal-mask`,
                                        onClick: this.handleClickoutside,
                                      })
                                    : null,
                              }
                            );
                          }
                        : void 0,
                    }
                  ),
                  this.$slots
                )
              ),
              [[ea, { zIndex: this.zIndex, enabled: this.show }]]
            );
          },
        }
      );
    },
  }),
  y$ = Object.assign(Object.assign({}, ls), {
    onAfterEnter: Function,
    onAfterLeave: Function,
    transformOrigin: String,
    blockScroll: { type: Boolean, default: !0 },
    closeOnEsc: { type: Boolean, default: !0 },
    onEsc: Function,
    autoFocus: { type: Boolean, default: !0 },
    internalStyle: [String, Object],
    maskClosable: { type: Boolean, default: !0 },
    onPositiveClick: Function,
    onNegativeClick: Function,
    onClose: Function,
    onMaskClick: Function,
  }),
  x$ = pe({
    name: "DialogEnvironment",
    props: Object.assign(Object.assign({}, y$), {
      internalKey: { type: String, required: !0 },
      to: [String, Object],
      onInternalAfterLeave: { type: Function, required: !0 },
    }),
    setup(e) {
      const t = Q(!0);
      function n() {
        const { onInternalAfterLeave: u, internalKey: d, onAfterLeave: f } = e;
        u && u(d), f && f();
      }
      function o(u) {
        const { onPositiveClick: d } = e;
        d
          ? Promise.resolve(d(u)).then((f) => {
              f !== !1 && a();
            })
          : a();
      }
      function r(u) {
        const { onNegativeClick: d } = e;
        d
          ? Promise.resolve(d(u)).then((f) => {
              f !== !1 && a();
            })
          : a();
      }
      function i() {
        const { onClose: u } = e;
        u
          ? Promise.resolve(u()).then((d) => {
              d !== !1 && a();
            })
          : a();
      }
      function s(u) {
        const { onMaskClick: d, maskClosable: f } = e;
        d && (d(u), f && a());
      }
      function l() {
        const { onEsc: u } = e;
        u && u();
      }
      function a() {
        t.value = !1;
      }
      function c(u) {
        t.value = u;
      }
      return {
        show: t,
        hide: a,
        handleUpdateShow: c,
        handleAfterLeave: n,
        handleCloseClick: i,
        handleNegativeClick: r,
        handlePositiveClick: o,
        handleMaskClick: s,
        handleEsc: l,
      };
    },
    render() {
      const {
        handlePositiveClick: e,
        handleUpdateShow: t,
        handleNegativeClick: n,
        handleCloseClick: o,
        handleAfterLeave: r,
        handleMaskClick: i,
        handleEsc: s,
        to: l,
        maskClosable: a,
        show: c,
      } = this;
      return w(
        $p,
        {
          show: c,
          onUpdateShow: t,
          onMaskClick: i,
          onEsc: s,
          to: l,
          maskClosable: a,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: r,
          closeOnEsc: this.closeOnEsc,
          blockScroll: this.blockScroll,
          autoFocus: this.autoFocus,
          transformOrigin: this.transformOrigin,
          internalAppear: !0,
          internalDialog: !0,
        },
        {
          default: () =>
            w(
              Cp,
              Object.assign({}, Vn(this.$props, wp), {
                style: this.internalStyle,
                onClose: o,
                onNegativeClick: n,
                onPositiveClick: e,
              })
            ),
        }
      );
    },
  }),
  w$ = { injectionKey: String, to: [String, Object] },
  C$ = pe({
    name: "DialogProvider",
    props: w$,
    setup() {
      const e = Q([]),
        t = {};
      function n(l = {}) {
        const a = Vi(),
          c = Xt(
            Object.assign(Object.assign({}, l), {
              key: a,
              destroy: () => {
                var u;
                (u = t[`n-dialog-${a}`]) === null || u === void 0 || u.hide();
              },
            })
          );
        return e.value.push(c), c;
      }
      const o = ["info", "success", "warning", "error"].map(
        (l) => (a) => n(Object.assign(Object.assign({}, a), { type: l }))
      );
      function r(l) {
        const { value: a } = e;
        a.splice(
          a.findIndex((c) => c.key === l),
          1
        );
      }
      function i() {
        Object.values(t).forEach((l) => {
          l == null || l.hide();
        });
      }
      const s = {
        create: n,
        destroyAll: i,
        info: o[0],
        success: o[1],
        warning: o[2],
        error: o[3],
      };
      return (
        Pe(_p, s),
        Pe(Sp, { clickedRef: sh(64), clickedPositionRef: ih() }),
        Pe(f$, e),
        Object.assign(Object.assign({}, s), {
          dialogList: e,
          dialogInstRefs: t,
          handleAfterLeave: r,
        })
      );
    },
    render() {
      var e, t;
      return w(He, null, [
        this.dialogList.map((n) =>
          w(
            x$,
            Yl(n, ["destroy", "style"], {
              internalStyle: n.style,
              to: this.to,
              ref: (o) => {
                o === null
                  ? delete this.dialogInstRefs[`n-dialog-${n.key}`]
                  : (this.dialogInstRefs[`n-dialog-${n.key}`] = o);
              },
              internalKey: n.key,
              onInternalAfterLeave: this.handleAfterLeave,
            })
          )
        ),
        (t = (e = this.$slots).default) === null || t === void 0
          ? void 0
          : t.call(e),
      ]);
    },
  });
function S$() {
  const e = me(_p, null);
  return (
    e === null && Zl("use-dialog", "No outer <n-dialog-provider /> founded."), e
  );
}
const _$ = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px",
};
function $$(e) {
  const {
    textColor2: t,
    successColor: n,
    infoColor: o,
    warningColor: r,
    errorColor: i,
    popoverColor: s,
    closeIconColor: l,
    closeIconColorHover: a,
    closeIconColorPressed: c,
    closeColorHover: u,
    closeColorPressed: d,
    textColor1: f,
    textColor3: p,
    borderRadius: h,
    fontWeightStrong: b,
    boxShadow2: y,
    lineHeight: g,
    fontSize: C,
  } = e;
  return Object.assign(Object.assign({}, _$), {
    borderRadius: h,
    lineHeight: g,
    fontSize: C,
    headerFontWeight: b,
    iconColor: t,
    iconColorSuccess: n,
    iconColorInfo: o,
    iconColorWarning: r,
    iconColorError: i,
    color: s,
    textColor: t,
    closeIconColor: l,
    closeIconColorHover: a,
    closeIconColorPressed: c,
    closeBorderRadius: h,
    closeColorHover: u,
    closeColorPressed: d,
    headerTextColor: f,
    descriptionTextColor: p,
    actionTextColor: t,
    boxShadow: y,
  });
}
const P$ = {
    name: "Notification",
    common: gt,
    peers: { Scrollbar: os },
    self: $$,
  },
  E$ = {
    margin: "0 0 8px 0",
    padding: "10px 20px",
    maxWidth: "720px",
    minWidth: "420px",
    iconMargin: "0 10px 0 0",
    closeMargin: "0 0 0 10px",
    closeSize: "20px",
    closeIconSize: "16px",
    iconSize: "20px",
    fontSize: "14px",
  };
function T$(e) {
  const {
    textColor2: t,
    closeIconColor: n,
    closeIconColorHover: o,
    closeIconColorPressed: r,
    infoColor: i,
    successColor: s,
    errorColor: l,
    warningColor: a,
    popoverColor: c,
    boxShadow2: u,
    primaryColor: d,
    lineHeight: f,
    borderRadius: p,
    closeColorHover: h,
    closeColorPressed: b,
  } = e;
  return Object.assign(Object.assign({}, E$), {
    closeBorderRadius: p,
    textColor: t,
    textColorInfo: t,
    textColorSuccess: t,
    textColorError: t,
    textColorWarning: t,
    textColorLoading: t,
    color: c,
    colorInfo: c,
    colorSuccess: c,
    colorError: c,
    colorWarning: c,
    colorLoading: c,
    boxShadow: u,
    boxShadowInfo: u,
    boxShadowSuccess: u,
    boxShadowError: u,
    boxShadowWarning: u,
    boxShadowLoading: u,
    iconColor: t,
    iconColorInfo: i,
    iconColorSuccess: s,
    iconColorWarning: a,
    iconColorError: l,
    iconColorLoading: d,
    closeColorHover: h,
    closeColorPressed: b,
    closeIconColor: n,
    closeIconColorHover: o,
    closeIconColorPressed: r,
    closeColorHoverInfo: h,
    closeColorPressedInfo: b,
    closeIconColorInfo: n,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: r,
    closeColorHoverSuccess: h,
    closeColorPressedSuccess: b,
    closeIconColorSuccess: n,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: r,
    closeColorHoverError: h,
    closeColorPressedError: b,
    closeIconColorError: n,
    closeIconColorHoverError: o,
    closeIconColorPressedError: r,
    closeColorHoverWarning: h,
    closeColorPressedWarning: b,
    closeIconColorWarning: n,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: r,
    closeColorHoverLoading: h,
    closeColorPressedLoading: b,
    closeIconColorLoading: n,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: r,
    loadingColor: d,
    lineHeight: f,
    borderRadius: p,
  });
}
const O$ = { name: "Message", common: gt, self: T$ };
function R$(e) {
  const {
    baseColor: t,
    textColor2: n,
    bodyColor: o,
    cardColor: r,
    dividerColor: i,
    actionColor: s,
    scrollbarColor: l,
    scrollbarColorHover: a,
    invertedColor: c,
  } = e;
  return {
    textColor: n,
    textColorInverted: "#FFF",
    color: o,
    colorEmbedded: s,
    headerColor: r,
    headerColorInverted: c,
    footerColor: s,
    footerColorInverted: c,
    headerBorderColor: i,
    headerBorderColorInverted: c,
    footerBorderColor: i,
    footerBorderColorInverted: c,
    siderBorderColor: i,
    siderBorderColorInverted: c,
    siderColor: r,
    siderColorInverted: c,
    siderToggleButtonBorder: `1px solid ${i}`,
    siderToggleButtonColor: t,
    siderToggleButtonIconColor: n,
    siderToggleButtonIconColorInverted: n,
    siderToggleBarColor: _o(o, l),
    siderToggleBarColorHover: _o(o, a),
    __invertScrollbar: "true",
  };
}
const A$ = { name: "Layout", common: gt, peers: { Scrollbar: os }, self: R$ };
function M$(e) {
  const {
    opacityDisabled: t,
    heightTiny: n,
    heightSmall: o,
    heightMedium: r,
    heightLarge: i,
    heightHuge: s,
    primaryColor: l,
    fontSize: a,
  } = e;
  return {
    fontSize: a,
    textColor: l,
    sizeTiny: n,
    sizeSmall: o,
    sizeMedium: r,
    sizeLarge: i,
    sizeHuge: s,
    color: l,
    opacitySpinning: t,
  };
}
const z$ = { name: "Spin", common: gt, self: M$ },
  I$ = { type: String, default: "static" },
  k$ = Y(
    "layout",
    `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,
    [
      Y(
        "layout-scroll-container",
        `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `
      ),
      J(
        "absolute-positioned",
        `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `
      ),
    ]
  ),
  B$ = {
    embedded: Boolean,
    position: I$,
    nativeScrollbar: { type: Boolean, default: !0 },
    scrollbarProps: Object,
    onScroll: Function,
    contentClass: String,
    contentStyle: { type: [String, Object], default: "" },
    hasSider: Boolean,
    siderPlacement: { type: String, default: "left" },
  },
  L$ = "n-layout";
function H$(e) {
  return pe({
    name: "Layout",
    props: Object.assign(Object.assign({}, Te.props), B$),
    setup(t) {
      const n = Q(null),
        o = Q(null),
        { mergedClsPrefixRef: r, inlineThemeDisabled: i } = it(t),
        s = Te("Layout", "-layout", k$, A$, t, r);
      function l(b, y) {
        if (t.nativeScrollbar) {
          const { value: g } = n;
          g && (y === void 0 ? g.scrollTo(b) : g.scrollTo(b, y));
        } else {
          const { value: g } = o;
          g && g.scrollTo(b, y);
        }
      }
      Pe(L$, t);
      let a = 0,
        c = 0;
      const u = (b) => {
        var y;
        const g = b.target;
        (a = g.scrollLeft),
          (c = g.scrollTop),
          (y = t.onScroll) === null || y === void 0 || y.call(t, b);
      };
      Th(() => {
        if (t.nativeScrollbar) {
          const b = n.value;
          b && ((b.scrollTop = c), (b.scrollLeft = a));
        }
      });
      const d = {
          display: "flex",
          flexWrap: "nowrap",
          width: "100%",
          flexDirection: "row",
        },
        f = { scrollTo: l },
        p = K(() => {
          const {
            common: { cubicBezierEaseInOut: b },
            self: y,
          } = s.value;
          return {
            "--n-bezier": b,
            "--n-color": t.embedded ? y.colorEmbedded : y.color,
            "--n-text-color": y.textColor,
          };
        }),
        h = i
          ? $t(
              "layout",
              K(() => (t.embedded ? "e" : "")),
              p,
              t
            )
          : void 0;
      return Object.assign(
        {
          mergedClsPrefix: r,
          scrollableElRef: n,
          scrollbarInstRef: o,
          hasSiderStyle: d,
          mergedTheme: s,
          handleNativeElScroll: u,
          cssVars: i ? void 0 : p,
          themeClass: h == null ? void 0 : h.themeClass,
          onRender: h == null ? void 0 : h.onRender,
        },
        f
      );
    },
    render() {
      var t;
      const { mergedClsPrefix: n, hasSider: o } = this;
      (t = this.onRender) === null || t === void 0 || t.call(this);
      const r = o ? this.hasSiderStyle : void 0,
        i = [
          this.themeClass,
          e,
          `${n}-layout`,
          `${n}-layout--${this.position}-positioned`,
        ];
      return w(
        "div",
        { class: i, style: this.cssVars },
        this.nativeScrollbar
          ? w(
              "div",
              {
                ref: "scrollableElRef",
                class: [`${n}-layout-scroll-container`, this.contentClass],
                style: [this.contentStyle, r],
                onScroll: this.handleNativeElScroll,
              },
              this.$slots
            )
          : w(
              rs,
              Object.assign({}, this.scrollbarProps, {
                onScroll: this.onScroll,
                ref: "scrollbarInstRef",
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentClass: this.contentClass,
                contentStyle: [this.contentStyle, r],
              }),
              this.$slots
            )
      );
    },
  });
}
const F$ = H$(!1),
  Pp = {
    icon: Function,
    type: { type: String, default: "info" },
    content: [String, Number, Function],
    showIcon: { type: Boolean, default: !0 },
    closable: Boolean,
    keepAliveOnHover: Boolean,
    onClose: Function,
    onMouseenter: Function,
    onMouseleave: Function,
  },
  Ep = "n-message-api",
  Tp = "n-message-provider",
  j$ = B([
    Y(
      "message-wrapper",
      `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,
      [
        __({
          overflow: "visible",
          originalTransition: "transform .3s var(--n-bezier)",
          enterToProps: { transform: "scale(1)" },
          leaveToProps: { transform: "scale(0.85)" },
        }),
      ]
    ),
    Y(
      "message",
      `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,
      [
        ee(
          "content",
          `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `
        ),
        ee(
          "icon",
          `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,
          [
            ["default", "info", "success", "warning", "error", "loading"].map(
              (e) =>
                J(`${e}-type`, [
                  B(
                    "> *",
                    `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `
                  ),
                ])
            ),
            B(
              "> *",
              `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,
              [_i()]
            ),
          ]
        ),
        ee(
          "close",
          `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,
          [
            B(
              "&:hover",
              `
 color: var(--n-close-icon-color-hover);
 `
            ),
            B(
              "&:active",
              `
 color: var(--n-close-icon-color-pressed);
 `
            ),
          ]
        ),
      ]
    ),
    Y(
      "message-container",
      `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,
      [
        J(
          "top",
          `
 top: 12px;
 left: 0;
 right: 0;
 `
        ),
        J(
          "top-left",
          `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `
        ),
        J(
          "top-right",
          `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `
        ),
        J(
          "bottom",
          `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `
        ),
        J(
          "bottom-left",
          `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `
        ),
        J(
          "bottom-right",
          `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `
        ),
      ]
    ),
  ]),
  D$ = {
    info: () => w(Si, null),
    success: () => w(ma, null),
    warning: () => w(ba, null),
    error: () => w(va, null),
    default: () => null,
  },
  N$ = pe({
    name: "Message",
    props: Object.assign(Object.assign({}, Pp), { render: Function }),
    setup(e) {
      const { inlineThemeDisabled: t, mergedRtlRef: n } = it(e),
        { props: o, mergedClsPrefixRef: r } = me(Tp),
        i = Ro("Message", n, r),
        s = Te("Message", "-message", j$, O$, o, r),
        l = K(() => {
          const { type: c } = e,
            {
              common: { cubicBezierEaseInOut: u },
              self: {
                padding: d,
                margin: f,
                maxWidth: p,
                iconMargin: h,
                closeMargin: b,
                closeSize: y,
                iconSize: g,
                fontSize: C,
                lineHeight: A,
                borderRadius: _,
                iconColorInfo: E,
                iconColorSuccess: P,
                iconColorWarning: v,
                iconColorError: S,
                iconColorLoading: $,
                closeIconSize: O,
                closeBorderRadius: F,
                [le("textColor", c)]: T,
                [le("boxShadow", c)]: W,
                [le("color", c)]: q,
                [le("closeColorHover", c)]: I,
                [le("closeColorPressed", c)]: U,
                [le("closeIconColor", c)]: z,
                [le("closeIconColorPressed", c)]: X,
                [le("closeIconColorHover", c)]: de,
              },
            } = s.value;
          return {
            "--n-bezier": u,
            "--n-margin": f,
            "--n-padding": d,
            "--n-max-width": p,
            "--n-font-size": C,
            "--n-icon-margin": h,
            "--n-icon-size": g,
            "--n-close-icon-size": O,
            "--n-close-border-radius": F,
            "--n-close-size": y,
            "--n-close-margin": b,
            "--n-text-color": T,
            "--n-color": q,
            "--n-box-shadow": W,
            "--n-icon-color-info": E,
            "--n-icon-color-success": P,
            "--n-icon-color-warning": v,
            "--n-icon-color-error": S,
            "--n-icon-color-loading": $,
            "--n-close-color-hover": I,
            "--n-close-color-pressed": U,
            "--n-close-icon-color": z,
            "--n-close-icon-color-pressed": X,
            "--n-close-icon-color-hover": de,
            "--n-line-height": A,
            "--n-border-radius": _,
          };
        }),
        a = t
          ? $t(
              "message",
              K(() => e.type[0]),
              l,
              {}
            )
          : void 0;
      return {
        mergedClsPrefix: r,
        rtlEnabled: i,
        messageProviderProps: o,
        handleClose() {
          var c;
          (c = e.onClose) === null || c === void 0 || c.call(e);
        },
        cssVars: t ? void 0 : l,
        themeClass: a == null ? void 0 : a.themeClass,
        onRender: a == null ? void 0 : a.onRender,
        placement: o.placement,
      };
    },
    render() {
      const {
        render: e,
        type: t,
        closable: n,
        content: o,
        mergedClsPrefix: r,
        cssVars: i,
        themeClass: s,
        onRender: l,
        icon: a,
        handleClose: c,
        showIcon: u,
      } = this;
      l == null || l();
      let d;
      return w(
        "div",
        {
          class: [`${r}-message-wrapper`, s],
          onMouseenter: this.onMouseenter,
          onMouseleave: this.onMouseleave,
          style: [
            {
              alignItems: this.placement.startsWith("top")
                ? "flex-start"
                : "flex-end",
            },
            i,
          ],
        },
        e
          ? e(this.$props)
          : w(
              "div",
              {
                class: [
                  `${r}-message ${r}-message--${t}-type`,
                  this.rtlEnabled && `${r}-message--rtl`,
                ],
              },
              (d = W$(a, t, r)) && u
                ? w(
                    "div",
                    {
                      class: `${r}-message__icon ${r}-message__icon--${t}-type`,
                    },
                    w(ya, null, { default: () => d })
                  )
                : null,
              w("div", { class: `${r}-message__content` }, Ze(o)),
              n
                ? w(ns, {
                    clsPrefix: r,
                    class: `${r}-message__close`,
                    onClick: c,
                    absolute: !0,
                  })
                : null
            )
      );
    },
  });
function W$(e, t, n) {
  if (typeof e == "function") return e();
  {
    const o =
      t === "loading"
        ? w(xa, { clsPrefix: n, strokeWidth: 24, scale: 0.85 })
        : D$[t]();
    return o ? w(ts, { clsPrefix: n, key: t }, { default: () => o }) : null;
  }
}
const K$ = pe({
    name: "MessageEnvironment",
    props: Object.assign(Object.assign({}, Pp), {
      duration: { type: Number, default: 3e3 },
      onAfterLeave: Function,
      onLeave: Function,
      internalKey: { type: String, required: !0 },
      onInternalAfterLeave: Function,
      onHide: Function,
      onAfterHide: Function,
    }),
    setup(e) {
      let t = null;
      const n = Q(!0);
      _t(() => {
        o();
      });
      function o() {
        const { duration: u } = e;
        u && (t = window.setTimeout(s, u));
      }
      function r(u) {
        u.currentTarget === u.target &&
          t !== null &&
          (window.clearTimeout(t), (t = null));
      }
      function i(u) {
        u.currentTarget === u.target && o();
      }
      function s() {
        const { onHide: u } = e;
        (n.value = !1), t && (window.clearTimeout(t), (t = null)), u && u();
      }
      function l() {
        const { onClose: u } = e;
        u && u(), s();
      }
      function a() {
        const {
          onAfterLeave: u,
          onInternalAfterLeave: d,
          onAfterHide: f,
          internalKey: p,
        } = e;
        u && u(), d && d(p), f && f();
      }
      function c() {
        s();
      }
      return {
        show: n,
        hide: s,
        handleClose: l,
        handleAfterLeave: a,
        handleMouseleave: i,
        handleMouseenter: r,
        deactivate: c,
      };
    },
    render() {
      return w(
        rp,
        {
          appear: !0,
          onAfterLeave: this.handleAfterLeave,
          onLeave: this.onLeave,
        },
        {
          default: () => [
            this.show
              ? w(N$, {
                  content: this.content,
                  type: this.type,
                  icon: this.icon,
                  showIcon: this.showIcon,
                  closable: this.closable,
                  onClose: this.handleClose,
                  onMouseenter: this.keepAliveOnHover
                    ? this.handleMouseenter
                    : void 0,
                  onMouseleave: this.keepAliveOnHover
                    ? this.handleMouseleave
                    : void 0,
                })
              : null,
          ],
        }
      );
    },
  }),
  V$ = Object.assign(Object.assign({}, Te.props), {
    to: [String, Object],
    duration: { type: Number, default: 3e3 },
    keepAliveOnHover: Boolean,
    max: Number,
    placement: { type: String, default: "top" },
    closable: Boolean,
    containerClass: String,
    containerStyle: [String, Object],
  }),
  U$ = pe({
    name: "MessageProvider",
    props: V$,
    setup(e) {
      const { mergedClsPrefixRef: t } = it(e),
        n = Q([]),
        o = Q({}),
        r = {
          create(a, c) {
            return i(a, Object.assign({ type: "default" }, c));
          },
          info(a, c) {
            return i(a, Object.assign(Object.assign({}, c), { type: "info" }));
          },
          success(a, c) {
            return i(
              a,
              Object.assign(Object.assign({}, c), { type: "success" })
            );
          },
          warning(a, c) {
            return i(
              a,
              Object.assign(Object.assign({}, c), { type: "warning" })
            );
          },
          error(a, c) {
            return i(a, Object.assign(Object.assign({}, c), { type: "error" }));
          },
          loading(a, c) {
            return i(
              a,
              Object.assign(Object.assign({}, c), { type: "loading" })
            );
          },
          destroyAll: l,
        };
      Pe(Tp, { props: e, mergedClsPrefixRef: t }), Pe(Ep, r);
      function i(a, c) {
        const u = Vi(),
          d = Xt(
            Object.assign(Object.assign({}, c), {
              content: a,
              key: u,
              destroy: () => {
                var p;
                (p = o.value[u]) === null || p === void 0 || p.hide();
              },
            })
          ),
          { max: f } = e;
        return f && n.value.length >= f && n.value.shift(), n.value.push(d), d;
      }
      function s(a) {
        n.value.splice(
          n.value.findIndex((c) => c.key === a),
          1
        ),
          delete o.value[a];
      }
      function l() {
        Object.values(o.value).forEach((a) => {
          a.hide();
        });
      }
      return Object.assign(
        {
          mergedClsPrefix: t,
          messageRefs: o,
          messageList: n,
          handleAfterLeave: s,
        },
        r
      );
    },
    render() {
      var e, t, n;
      return w(
        He,
        null,
        (t = (e = this.$slots).default) === null || t === void 0
          ? void 0
          : t.call(e),
        this.messageList.length
          ? w(
              Kl,
              { to: (n = this.to) !== null && n !== void 0 ? n : "body" },
              w(
                "div",
                {
                  class: [
                    `${this.mergedClsPrefix}-message-container`,
                    `${this.mergedClsPrefix}-message-container--${this.placement}`,
                    this.containerClass,
                  ],
                  key: "message-container",
                  style: this.containerStyle,
                },
                this.messageList.map((o) =>
                  w(
                    K$,
                    Object.assign(
                      {
                        ref: (r) => {
                          r && (this.messageRefs[o.key] = r);
                        },
                        internalKey: o.key,
                        onInternalAfterLeave: this.handleAfterLeave,
                      },
                      Yl(o, ["destroy"], void 0),
                      {
                        duration:
                          o.duration === void 0 ? this.duration : o.duration,
                        keepAliveOnHover:
                          o.keepAliveOnHover === void 0
                            ? this.keepAliveOnHover
                            : o.keepAliveOnHover,
                        closable:
                          o.closable === void 0 ? this.closable : o.closable,
                      }
                    )
                  )
                )
              )
            )
          : null
      );
    },
  });
function G$() {
  const e = me(Ep, null);
  return (
    e === null &&
      Zl(
        "use-message",
        "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."
      ),
    e
  );
}
const as = "n-notification-provider",
  q$ = pe({
    name: "NotificationContainer",
    props: {
      scrollable: { type: Boolean, required: !0 },
      placement: { type: String, required: !0 },
    },
    setup() {
      const {
          mergedThemeRef: e,
          mergedClsPrefixRef: t,
          wipTransitionCountRef: n,
        } = me(as),
        o = Q(null);
      return (
        Yn(() => {
          var r, i;
          n.value > 0
            ? (r = o == null ? void 0 : o.value) === null ||
              r === void 0 ||
              r.classList.add("transitioning")
            : (i = o == null ? void 0 : o.value) === null ||
              i === void 0 ||
              i.classList.remove("transitioning");
        }),
        { selfRef: o, mergedTheme: e, mergedClsPrefix: t, transitioning: n }
      );
    },
    render() {
      const {
        $slots: e,
        scrollable: t,
        mergedClsPrefix: n,
        mergedTheme: o,
        placement: r,
      } = this;
      return w(
        "div",
        {
          ref: "selfRef",
          class: [
            `${n}-notification-container`,
            t && `${n}-notification-container--scrollable`,
            `${n}-notification-container--${r}`,
          ],
        },
        t
          ? w(
              rs,
              {
                theme: o.peers.Scrollbar,
                themeOverrides: o.peerOverrides.Scrollbar,
                contentStyle: { overflow: "hidden" },
              },
              e
            )
          : e
      );
    },
  }),
  X$ = {
    info: () => w(Si, null),
    success: () => w(ma, null),
    warning: () => w(ba, null),
    error: () => w(va, null),
    default: () => null,
  },
  Ea = {
    closable: { type: Boolean, default: !0 },
    type: { type: String, default: "default" },
    avatar: Function,
    title: [String, Function],
    description: [String, Function],
    content: [String, Function],
    meta: [String, Function],
    action: [String, Function],
    onClose: { type: Function, required: !0 },
    keepAliveOnHover: Boolean,
    onMouseenter: Function,
    onMouseleave: Function,
  },
  Y$ = Ui(Ea),
  Z$ = pe({
    name: "Notification",
    props: Ea,
    setup(e) {
      const { mergedClsPrefixRef: t, mergedThemeRef: n, props: o } = me(as),
        { inlineThemeDisabled: r, mergedRtlRef: i } = it(),
        s = Ro("Notification", i, t),
        l = K(() => {
          const { type: c } = e,
            {
              self: {
                color: u,
                textColor: d,
                closeIconColor: f,
                closeIconColorHover: p,
                closeIconColorPressed: h,
                headerTextColor: b,
                descriptionTextColor: y,
                actionTextColor: g,
                borderRadius: C,
                headerFontWeight: A,
                boxShadow: _,
                lineHeight: E,
                fontSize: P,
                closeMargin: v,
                closeSize: S,
                width: $,
                padding: O,
                closeIconSize: F,
                closeBorderRadius: T,
                closeColorHover: W,
                closeColorPressed: q,
                titleFontSize: I,
                metaFontSize: U,
                descriptionFontSize: z,
                [le("iconColor", c)]: X,
              },
              common: {
                cubicBezierEaseOut: de,
                cubicBezierEaseIn: ce,
                cubicBezierEaseInOut: Ce,
              },
            } = n.value,
            { left: ye, right: Ke, top: Ve, bottom: vt } = Ki(O);
          return {
            "--n-color": u,
            "--n-font-size": P,
            "--n-text-color": d,
            "--n-description-text-color": y,
            "--n-action-text-color": g,
            "--n-title-text-color": b,
            "--n-title-font-weight": A,
            "--n-bezier": Ce,
            "--n-bezier-ease-out": de,
            "--n-bezier-ease-in": ce,
            "--n-border-radius": C,
            "--n-box-shadow": _,
            "--n-close-border-radius": T,
            "--n-close-color-hover": W,
            "--n-close-color-pressed": q,
            "--n-close-icon-color": f,
            "--n-close-icon-color-hover": p,
            "--n-close-icon-color-pressed": h,
            "--n-line-height": E,
            "--n-icon-color": X,
            "--n-close-margin": v,
            "--n-close-size": S,
            "--n-close-icon-size": F,
            "--n-width": $,
            "--n-padding-left": ye,
            "--n-padding-right": Ke,
            "--n-padding-top": Ve,
            "--n-padding-bottom": vt,
            "--n-title-font-size": I,
            "--n-meta-font-size": U,
            "--n-description-font-size": z,
          };
        }),
        a = r
          ? $t(
              "notification",
              K(() => e.type[0]),
              l,
              o
            )
          : void 0;
      return {
        mergedClsPrefix: t,
        showAvatar: K(() => e.avatar || e.type !== "default"),
        handleCloseClick() {
          e.onClose();
        },
        rtlEnabled: s,
        cssVars: r ? void 0 : l,
        themeClass: a == null ? void 0 : a.themeClass,
        onRender: a == null ? void 0 : a.onRender,
      };
    },
    render() {
      var e;
      const { mergedClsPrefix: t } = this;
      return (
        (e = this.onRender) === null || e === void 0 || e.call(this),
        w(
          "div",
          {
            class: [`${t}-notification-wrapper`, this.themeClass],
            onMouseenter: this.onMouseenter,
            onMouseleave: this.onMouseleave,
            style: this.cssVars,
          },
          w(
            "div",
            {
              class: [
                `${t}-notification`,
                this.rtlEnabled && `${t}-notification--rtl`,
                this.themeClass,
                {
                  [`${t}-notification--closable`]: this.closable,
                  [`${t}-notification--show-avatar`]: this.showAvatar,
                },
              ],
              style: this.cssVars,
            },
            this.showAvatar
              ? w(
                  "div",
                  { class: `${t}-notification__avatar` },
                  this.avatar
                    ? Ze(this.avatar)
                    : this.type !== "default"
                    ? w(
                        ts,
                        { clsPrefix: t },
                        { default: () => X$[this.type]() }
                      )
                    : null
                )
              : null,
            this.closable
              ? w(ns, {
                  clsPrefix: t,
                  class: `${t}-notification__close`,
                  onClick: this.handleCloseClick,
                })
              : null,
            w(
              "div",
              { ref: "bodyRef", class: `${t}-notification-main` },
              this.title
                ? w(
                    "div",
                    { class: `${t}-notification-main__header` },
                    Ze(this.title)
                  )
                : null,
              this.description
                ? w(
                    "div",
                    { class: `${t}-notification-main__description` },
                    Ze(this.description)
                  )
                : null,
              this.content
                ? w(
                    "pre",
                    { class: `${t}-notification-main__content` },
                    Ze(this.content)
                  )
                : null,
              this.meta || this.action
                ? w(
                    "div",
                    { class: `${t}-notification-main-footer` },
                    this.meta
                      ? w(
                          "div",
                          { class: `${t}-notification-main-footer__meta` },
                          Ze(this.meta)
                        )
                      : null,
                    this.action
                      ? w(
                          "div",
                          { class: `${t}-notification-main-footer__action` },
                          Ze(this.action)
                        )
                      : null
                  )
                : null
            )
          )
        )
      );
    },
  }),
  J$ = Object.assign(Object.assign({}, Ea), {
    duration: Number,
    onClose: Function,
    onLeave: Function,
    onAfterEnter: Function,
    onAfterLeave: Function,
    onHide: Function,
    onAfterShow: Function,
    onAfterHide: Function,
  }),
  Q$ = pe({
    name: "NotificationEnvironment",
    props: Object.assign(Object.assign({}, J$), {
      internalKey: { type: String, required: !0 },
      onInternalAfterLeave: { type: Function, required: !0 },
    }),
    setup(e) {
      const { wipTransitionCountRef: t } = me(as),
        n = Q(!0);
      let o = null;
      function r() {
        (n.value = !1), o && window.clearTimeout(o);
      }
      function i(h) {
        t.value++,
          yn(() => {
            (h.style.height = `${h.offsetHeight}px`),
              (h.style.maxHeight = "0"),
              (h.style.transition = "none"),
              h.offsetHeight,
              (h.style.transition = ""),
              (h.style.maxHeight = h.style.height);
          });
      }
      function s(h) {
        t.value--, (h.style.height = ""), (h.style.maxHeight = "");
        const { onAfterEnter: b, onAfterShow: y } = e;
        b && b(), y && y();
      }
      function l(h) {
        t.value++,
          (h.style.maxHeight = `${h.offsetHeight}px`),
          (h.style.height = `${h.offsetHeight}px`),
          h.offsetHeight;
      }
      function a(h) {
        const { onHide: b } = e;
        b && b(), (h.style.maxHeight = "0"), h.offsetHeight;
      }
      function c() {
        t.value--;
        const {
          onAfterLeave: h,
          onInternalAfterLeave: b,
          onAfterHide: y,
          internalKey: g,
        } = e;
        h && h(), b(g), y && y();
      }
      function u() {
        const { duration: h } = e;
        h && (o = window.setTimeout(r, h));
      }
      function d(h) {
        h.currentTarget === h.target &&
          o !== null &&
          (window.clearTimeout(o), (o = null));
      }
      function f(h) {
        h.currentTarget === h.target && u();
      }
      function p() {
        const { onClose: h } = e;
        h
          ? Promise.resolve(h()).then((b) => {
              b !== !1 && r();
            })
          : r();
      }
      return (
        _t(() => {
          e.duration && (o = window.setTimeout(r, e.duration));
        }),
        {
          show: n,
          hide: r,
          handleClose: p,
          handleAfterLeave: c,
          handleLeave: a,
          handleBeforeLeave: l,
          handleAfterEnter: s,
          handleBeforeEnter: i,
          handleMouseenter: d,
          handleMouseleave: f,
        }
      );
    },
    render() {
      return w(
        pt,
        {
          name: "notification-transition",
          appear: !0,
          onBeforeEnter: this.handleBeforeEnter,
          onAfterEnter: this.handleAfterEnter,
          onBeforeLeave: this.handleBeforeLeave,
          onLeave: this.handleLeave,
          onAfterLeave: this.handleAfterLeave,
        },
        {
          default: () =>
            this.show
              ? w(
                  Z$,
                  Object.assign({}, Vn(this.$props, Y$), {
                    onClose: this.handleClose,
                    onMouseenter:
                      this.duration && this.keepAliveOnHover
                        ? this.handleMouseenter
                        : void 0,
                    onMouseleave:
                      this.duration && this.keepAliveOnHover
                        ? this.handleMouseleave
                        : void 0,
                  })
                )
              : null,
        }
      );
    },
  }),
  eP = B([
    Y(
      "notification-container",
      `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,
      [
        B(">", [
          Y(
            "scrollbar",
            `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,
            [
              B(">", [
                Y(
                  "scrollbar-container",
                  `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,
                  [
                    Y(
                      "scrollbar-content",
                      `
 padding-top: 12px;
 padding-bottom: 33px;
 `
                    ),
                  ]
                ),
              ]),
            ]
          ),
        ]),
        J(
          "top, top-right, top-left",
          `
 top: 12px;
 `,
          [
            B("&.transitioning >", [
              Y("scrollbar", [
                B(">", [
                  Y(
                    "scrollbar-container",
                    `
 min-height: 100vh !important;
 `
                  ),
                ]),
              ]),
            ]),
          ]
        ),
        J(
          "bottom, bottom-right, bottom-left",
          `
 bottom: 12px;
 `,
          [
            B(">", [
              Y("scrollbar", [
                B(">", [
                  Y("scrollbar-container", [
                    Y(
                      "scrollbar-content",
                      `
 padding-bottom: 12px;
 `
                    ),
                  ]),
                ]),
              ]),
            ]),
            Y(
              "notification-wrapper",
              `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `
            ),
          ]
        ),
        J(
          "top, bottom",
          `
 left: 50%;
 transform: translateX(-50%);
 `,
          [
            Y("notification-wrapper", [
              B(
                "&.notification-transition-enter-from, &.notification-transition-leave-to",
                `
 transform: scale(0.85);
 `
              ),
              B(
                "&.notification-transition-leave-from, &.notification-transition-enter-to",
                `
 transform: scale(1);
 `
              ),
            ]),
          ]
        ),
        J("top", [
          Y(
            "notification-wrapper",
            `
 transform-origin: top center;
 `
          ),
        ]),
        J("bottom", [
          Y(
            "notification-wrapper",
            `
 transform-origin: bottom center;
 `
          ),
        ]),
        J("top-right, bottom-right", [
          Y(
            "notification",
            `
 margin-left: 28px;
 margin-right: 16px;
 `
          ),
        ]),
        J("top-left, bottom-left", [
          Y(
            "notification",
            `
 margin-left: 16px;
 margin-right: 28px;
 `
          ),
        ]),
        J(
          "top-right",
          `
 right: 0;
 `,
          [Qr("top-right")]
        ),
        J(
          "top-left",
          `
 left: 0;
 `,
          [Qr("top-left")]
        ),
        J(
          "bottom-right",
          `
 right: 0;
 `,
          [Qr("bottom-right")]
        ),
        J(
          "bottom-left",
          `
 left: 0;
 `,
          [Qr("bottom-left")]
        ),
        J("scrollable", [
          J(
            "top-right",
            `
 top: 0;
 `
          ),
          J(
            "top-left",
            `
 top: 0;
 `
          ),
          J(
            "bottom-right",
            `
 bottom: 0;
 `
          ),
          J(
            "bottom-left",
            `
 bottom: 0;
 `
          ),
        ]),
        Y(
          "notification-wrapper",
          `
 margin-bottom: 12px;
 `,
          [
            B(
              "&.notification-transition-enter-from, &.notification-transition-leave-to",
              `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `
            ),
            B(
              "&.notification-transition-leave-from, &.notification-transition-enter-to",
              `
 opacity: 1;
 `
            ),
            B(
              "&.notification-transition-leave-active",
              `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `
            ),
            B(
              "&.notification-transition-enter-active",
              `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `
            ),
          ]
        ),
        Y(
          "notification",
          `
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,
          [
            ee("avatar", [
              Y(
                "icon",
                `
 color: var(--n-icon-color);
 `
              ),
              Y(
                "base-icon",
                `
 color: var(--n-icon-color);
 `
              ),
            ]),
            J("show-avatar", [
              Y(
                "notification-main",
                `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `
              ),
            ]),
            J("closable", [
              Y("notification-main", [
                B(
                  "> *:first-child",
                  `
 padding-right: 20px;
 `
                ),
              ]),
              ee(
                "close",
                `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
              ),
            ]),
            ee(
              "avatar",
              `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,
              [Y("icon", "transition: color .3s var(--n-bezier);")]
            ),
            Y(
              "notification-main",
              `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,
              [
                Y(
                  "notification-main-footer",
                  `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,
                  [
                    ee(
                      "meta",
                      `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `
                    ),
                    ee(
                      "action",
                      `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `
                    ),
                  ]
                ),
                ee(
                  "header",
                  `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `
                ),
                ee(
                  "description",
                  `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `
                ),
                ee(
                  "content",
                  `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,
                  [B("&:first-child", "margin: 0;")]
                ),
              ]
            ),
          ]
        ),
      ]
    ),
  ]);
function Qr(e) {
  const n = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return Y("notification-wrapper", [
    B(
      "&.notification-transition-enter-from, &.notification-transition-leave-to",
      `
 transform: translate(${n}, 0);
 `
    ),
    B(
      "&.notification-transition-leave-from, &.notification-transition-enter-to",
      `
 transform: translate(0, 0);
 `
    ),
  ]);
}
const tP = "n-notification-api",
  nP = Object.assign(Object.assign({}, Te.props), {
    containerClass: String,
    containerStyle: [String, Object],
    to: [String, Object],
    scrollable: { type: Boolean, default: !0 },
    max: Number,
    placement: { type: String, default: "top-right" },
    keepAliveOnHover: Boolean,
  }),
  oP = pe({
    name: "NotificationProvider",
    props: nP,
    setup(e) {
      const { mergedClsPrefixRef: t } = it(e),
        n = Q([]),
        o = {},
        r = new Set();
      function i(p) {
        const h = Vi(),
          b = () => {
            r.add(h), o[h] && o[h].hide();
          },
          y = Xt(
            Object.assign(Object.assign({}, p), {
              key: h,
              destroy: b,
              hide: b,
              deactivate: b,
            })
          ),
          { max: g } = e;
        if (g && n.value.length - r.size >= g) {
          let C = !1,
            A = 0;
          for (const _ of n.value) {
            if (!r.has(_.key)) {
              o[_.key] && (_.destroy(), (C = !0));
              break;
            }
            A++;
          }
          C || n.value.splice(A, 1);
        }
        return n.value.push(y), y;
      }
      const s = ["info", "success", "warning", "error"].map(
        (p) => (h) => i(Object.assign(Object.assign({}, h), { type: p }))
      );
      function l(p) {
        r.delete(p),
          n.value.splice(
            n.value.findIndex((h) => h.key === p),
            1
          );
      }
      const a = Te("Notification", "-notification", eP, P$, e, t),
        c = {
          create: i,
          info: s[0],
          success: s[1],
          warning: s[2],
          error: s[3],
          open: d,
          destroyAll: f,
        },
        u = Q(0);
      Pe(tP, c),
        Pe(as, {
          props: e,
          mergedClsPrefixRef: t,
          mergedThemeRef: a,
          wipTransitionCountRef: u,
        });
      function d(p) {
        return i(p);
      }
      function f() {
        Object.values(n.value).forEach((p) => {
          p.hide();
        });
      }
      return Object.assign(
        {
          mergedClsPrefix: t,
          notificationList: n,
          notificationRefs: o,
          handleAfterLeave: l,
        },
        c
      );
    },
    render() {
      var e, t, n;
      const { placement: o } = this;
      return w(
        He,
        null,
        (t = (e = this.$slots).default) === null || t === void 0
          ? void 0
          : t.call(e),
        this.notificationList.length
          ? w(
              Kl,
              { to: (n = this.to) !== null && n !== void 0 ? n : "body" },
              w(
                q$,
                {
                  class: this.containerClass,
                  style: this.containerStyle,
                  scrollable: this.scrollable && o !== "top" && o !== "bottom",
                  placement: o,
                },
                {
                  default: () =>
                    this.notificationList.map((r) =>
                      w(
                        Q$,
                        Object.assign(
                          {
                            ref: (i) => {
                              const s = r.key;
                              i === null
                                ? delete this.notificationRefs[s]
                                : (this.notificationRefs[s] = i);
                            },
                          },
                          Yl(r, ["destroy", "hide", "deactivate"]),
                          {
                            internalKey: r.key,
                            onInternalAfterLeave: this.handleAfterLeave,
                            keepAliveOnHover:
                              r.keepAliveOnHover === void 0
                                ? this.keepAliveOnHover
                                : r.keepAliveOnHover,
                          }
                        )
                      )
                    ),
                }
              )
            )
          : null
      );
    },
  }),
  rP = B([
    B(
      "@keyframes spin-rotate",
      `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `
    ),
    Y(
      "spin-container",
      `
 position: relative;
 `,
      [
        Y(
          "spin-body",
          `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
          [Ca()]
        ),
      ]
    ),
    Y(
      "spin-body",
      `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `
    ),
    Y(
      "spin",
      `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,
      [
        J(
          "rotate",
          `
 animation: spin-rotate 2s linear infinite;
 `
        ),
      ]
    ),
    Y(
      "spin-description",
      `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `
    ),
    Y(
      "spin-content",
      `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,
      [
        J(
          "spinning",
          `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `
        ),
      ]
    ),
  ]),
  iP = { small: 20, medium: 18, large: 16 },
  sP = Object.assign(Object.assign({}, Te.props), {
    contentClass: String,
    contentStyle: [Object, String],
    description: String,
    stroke: String,
    size: { type: [String, Number], default: "medium" },
    show: { type: Boolean, default: !0 },
    strokeWidth: Number,
    rotate: { type: Boolean, default: !0 },
    spinning: { type: Boolean, validator: () => !0, default: void 0 },
    delay: Number,
  }),
  lP = pe({
    name: "Spin",
    props: sP,
    setup(e) {
      const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = it(e),
        o = Te("Spin", "-spin", rP, z$, e, t),
        r = K(() => {
          const { size: a } = e,
            {
              common: { cubicBezierEaseInOut: c },
              self: u,
            } = o.value,
            { opacitySpinning: d, color: f, textColor: p } = u,
            h = typeof a == "number" ? Ob(a) : u[le("size", a)];
          return {
            "--n-bezier": c,
            "--n-opacity-spinning": d,
            "--n-size": h,
            "--n-color": f,
            "--n-text-color": p,
          };
        }),
        i = n
          ? $t(
              "spin",
              K(() => {
                const { size: a } = e;
                return typeof a == "number" ? String(a) : a[0];
              }),
              r,
              e
            )
          : void 0,
        s = ah(e, ["spinning", "show"]),
        l = Q(!1);
      return (
        Yn((a) => {
          let c;
          if (s.value) {
            const { delay: u } = e;
            if (u) {
              (c = window.setTimeout(() => {
                l.value = !0;
              }, u)),
                a(() => {
                  clearTimeout(c);
                });
              return;
            }
          }
          l.value = s.value;
        }),
        {
          mergedClsPrefix: t,
          active: l,
          mergedStrokeWidth: K(() => {
            const { strokeWidth: a } = e;
            if (a !== void 0) return a;
            const { size: c } = e;
            return iP[typeof c == "number" ? "medium" : c];
          }),
          cssVars: n ? void 0 : r,
          themeClass: i == null ? void 0 : i.themeClass,
          onRender: i == null ? void 0 : i.onRender,
        }
      );
    },
    render() {
      var e, t;
      const { $slots: n, mergedClsPrefix: o, description: r } = this,
        i = n.icon && this.rotate,
        s =
          (r || n.description) &&
          w(
            "div",
            { class: `${o}-spin-description` },
            r ||
              ((e = n.description) === null || e === void 0
                ? void 0
                : e.call(n))
          ),
        l = n.icon
          ? w(
              "div",
              { class: [`${o}-spin-body`, this.themeClass] },
              w(
                "div",
                {
                  class: [`${o}-spin`, i && `${o}-spin--rotate`],
                  style: n.default ? "" : this.cssVars,
                },
                n.icon()
              ),
              s
            )
          : w(
              "div",
              { class: [`${o}-spin-body`, this.themeClass] },
              w(xa, {
                clsPrefix: o,
                style: n.default ? "" : this.cssVars,
                stroke: this.stroke,
                "stroke-width": this.mergedStrokeWidth,
                class: `${o}-spin`,
              }),
              s
            );
      return (
        (t = this.onRender) === null || t === void 0 || t.call(this),
        n.default
          ? w(
              "div",
              {
                class: [`${o}-spin-container`, this.themeClass],
                style: this.cssVars,
              },
              w(
                "div",
                {
                  class: [
                    `${o}-spin-content`,
                    this.active && `${o}-spin-content--spinning`,
                    this.contentClass,
                  ],
                  style: this.contentStyle,
                },
                n
              ),
              w(
                pt,
                { name: "fade-in-transition" },
                { default: () => (this.active ? l : null) }
              )
            )
          : l
      );
    },
  });
function aP(e, t) {
  let { icon: n, tips: o } = e;
  delete e.icon,
    delete e.tips,
    (e.size = e.size || (t ? "small" : "tiny")),
    (e.type = e.type || "primary");
  let r = w(_l, e, {
    icon: n ? () => w(vp, { component: n }) : void 0,
    default: () => t,
  });
  return o ? w(G_, {}, { default: () => o, trigger: () => r }) : r;
}
const sn = new WeakMap(),
  An = new WeakMap(),
  Gt = new WeakMap();
var cP = {};
const Pi = Symbol("anyProducer"),
  ed = Promise.resolve(),
  Ei = Symbol("listenerAdded"),
  Ti = Symbol("listenerRemoved");
let Oi = !1,
  js = !1;
const Ri = (e) =>
  typeof e == "string" || typeof e == "symbol" || typeof e == "number";
function lo(e) {
  if (!Ri(e))
    throw new TypeError("`eventName` must be a string, symbol, or number");
}
function ei(e) {
  if (typeof e != "function")
    throw new TypeError("listener must be a function");
}
function ao(e, t) {
  const n = An.get(e);
  if (n.has(t)) return n.get(t);
}
function rr(e, t) {
  const n = Ri(t) ? t : Pi,
    o = Gt.get(e);
  if (o.has(n)) return o.get(n);
}
function uP(e, t, n) {
  const o = Gt.get(e);
  if (o.has(t)) for (const r of o.get(t)) r.enqueue(n);
  if (o.has(Pi)) {
    const r = Promise.all([t, n]);
    for (const i of o.get(Pi)) i.enqueue(r);
  }
}
function td(e, t) {
  t = Array.isArray(t) ? t : [t];
  let n = !1,
    o = () => {},
    r = [];
  const i = {
    enqueue(s) {
      r.push(s), o();
    },
    finish() {
      (n = !0), o();
    },
  };
  for (const s of t) {
    let l = rr(e, s);
    l || ((l = new Set()), Gt.get(e).set(s, l)), l.add(i);
  }
  return {
    async next() {
      return r
        ? r.length === 0
          ? n
            ? ((r = void 0), this.next())
            : (await new Promise((s) => {
                o = s;
              }),
              this.next())
          : { done: !1, value: await r.shift() }
        : { done: !0 };
    },
    async return(s) {
      r = void 0;
      for (const l of t) {
        const a = rr(e, l);
        a && (a.delete(i), a.size === 0 && Gt.get(e).delete(l));
      }
      return (
        o(), arguments.length > 0 ? { done: !0, value: await s } : { done: !0 }
      );
    },
    [Symbol.asyncIterator]() {
      return this;
    },
  };
}
function nd(e) {
  if (e === void 0) return od;
  if (!Array.isArray(e))
    throw new TypeError("`methodNames` must be an array of strings");
  for (const t of e)
    if (!od.includes(t))
      throw typeof t != "string"
        ? new TypeError("`methodNames` element must be a string")
        : new Error(`${t} is not Emittery method`);
  return e;
}
const uo = (e) => e === Ei || e === Ti;
function ti(e, t, n) {
  if (uo(t))
    try {
      (Oi = !0), e.emit(t, n);
    } finally {
      Oi = !1;
    }
}
class qn {
  static mixin(t, n) {
    return (
      (n = nd(n)),
      (o) => {
        if (typeof o != "function")
          throw new TypeError("`target` must be function");
        for (const s of n)
          if (o.prototype[s] !== void 0)
            throw new Error(
              `The property \`${s}\` already exists on \`target\``
            );
        function r() {
          return (
            Object.defineProperty(this, t, { enumerable: !1, value: new qn() }),
            this[t]
          );
        }
        Object.defineProperty(o.prototype, t, { enumerable: !1, get: r });
        const i = (s) =>
          function (...l) {
            return this[t][s](...l);
          };
        for (const s of n)
          Object.defineProperty(o.prototype, s, {
            enumerable: !1,
            value: i(s),
          });
        return o;
      }
    );
  }
  static get isDebugEnabled() {
    if (typeof cP != "object") return js;
    const { env: t } = globalThis.process ?? { env: {} };
    return t.DEBUG === "emittery" || t.DEBUG === "*" || js;
  }
  static set isDebugEnabled(t) {
    js = t;
  }
  constructor(t = {}) {
    sn.set(this, new Set()),
      An.set(this, new Map()),
      Gt.set(this, new Map()),
      Gt.get(this).set(Pi, new Set()),
      (this.debug = t.debug ?? {}),
      this.debug.enabled === void 0 && (this.debug.enabled = !1),
      this.debug.logger ||
        (this.debug.logger = (n, o, r, i) => {
          try {
            i = JSON.stringify(i);
          } catch {
            i = `Object with the following keys failed to stringify: ${Object.keys(
              i
            ).join(",")}`;
          }
          (typeof r == "symbol" || typeof r == "number") && (r = r.toString());
          const s = new Date(),
            l = `${s.getHours()}:${s.getMinutes()}:${s.getSeconds()}.${s.getMilliseconds()}`;
          console.log(`[${l}][emittery:${n}][${o}] Event Name: ${r}
	data: ${i}`);
        });
  }
  logIfDebugEnabled(t, n, o) {
    (qn.isDebugEnabled || this.debug.enabled) &&
      this.debug.logger(t, this.debug.name, n, o);
  }
  on(t, n) {
    ei(n), (t = Array.isArray(t) ? t : [t]);
    for (const o of t) {
      lo(o);
      let r = ao(this, o);
      r || ((r = new Set()), An.get(this).set(o, r)),
        r.add(n),
        this.logIfDebugEnabled("subscribe", o, void 0),
        uo(o) || ti(this, Ei, { eventName: o, listener: n });
    }
    return this.off.bind(this, t, n);
  }
  off(t, n) {
    ei(n), (t = Array.isArray(t) ? t : [t]);
    for (const o of t) {
      lo(o);
      const r = ao(this, o);
      r && (r.delete(n), r.size === 0 && An.get(this).delete(o)),
        this.logIfDebugEnabled("unsubscribe", o, void 0),
        uo(o) || ti(this, Ti, { eventName: o, listener: n });
    }
  }
  once(t) {
    let n;
    const o = new Promise((r) => {
      n = this.on(t, (i) => {
        n(), r(i);
      });
    });
    return (o.off = n), o;
  }
  events(t) {
    t = Array.isArray(t) ? t : [t];
    for (const n of t) lo(n);
    return td(this, t);
  }
  async emit(t, n) {
    if ((lo(t), uo(t) && !Oi))
      throw new TypeError(
        "`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`"
      );
    this.logIfDebugEnabled("emit", t, n), uP(this, t, n);
    const o = ao(this, t) ?? new Set(),
      r = sn.get(this),
      i = [...o],
      s = uo(t) ? [] : [...r];
    await ed,
      await Promise.all([
        ...i.map(async (l) => {
          if (o.has(l)) return l(n);
        }),
        ...s.map(async (l) => {
          if (r.has(l)) return l(t, n);
        }),
      ]);
  }
  async emitSerial(t, n) {
    if ((lo(t), uo(t) && !Oi))
      throw new TypeError(
        "`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`"
      );
    this.logIfDebugEnabled("emitSerial", t, n);
    const o = ao(this, t) ?? new Set(),
      r = sn.get(this),
      i = [...o],
      s = [...r];
    await ed;
    for (const l of i) o.has(l) && (await l(n));
    for (const l of s) r.has(l) && (await l(t, n));
  }
  onAny(t) {
    return (
      ei(t),
      this.logIfDebugEnabled("subscribeAny", void 0, void 0),
      sn.get(this).add(t),
      ti(this, Ei, { listener: t }),
      this.offAny.bind(this, t)
    );
  }
  anyEvent() {
    return td(this);
  }
  offAny(t) {
    ei(t),
      this.logIfDebugEnabled("unsubscribeAny", void 0, void 0),
      ti(this, Ti, { listener: t }),
      sn.get(this).delete(t);
  }
  clearListeners(t) {
    t = Array.isArray(t) ? t : [t];
    for (const n of t)
      if ((this.logIfDebugEnabled("clear", n, void 0), Ri(n))) {
        const o = ao(this, n);
        o && o.clear();
        const r = rr(this, n);
        if (r) {
          for (const i of r) i.finish();
          r.clear();
        }
      } else {
        sn.get(this).clear();
        for (const [o, r] of An.get(this).entries())
          r.clear(), An.get(this).delete(o);
        for (const [o, r] of Gt.get(this).entries()) {
          for (const i of r) i.finish();
          r.clear(), Gt.get(this).delete(o);
        }
      }
  }
  listenerCount(t) {
    var o, r, i;
    t = Array.isArray(t) ? t : [t];
    let n = 0;
    for (const s of t) {
      if (Ri(s)) {
        n +=
          sn.get(this).size +
          (((o = ao(this, s)) == null ? void 0 : o.size) ?? 0) +
          (((r = rr(this, s)) == null ? void 0 : r.size) ?? 0) +
          (((i = rr(this)) == null ? void 0 : i.size) ?? 0);
        continue;
      }
      s !== void 0 && lo(s), (n += sn.get(this).size);
      for (const l of An.get(this).values()) n += l.size;
      for (const l of Gt.get(this).values()) n += l.size;
    }
    return n;
  }
  bindMethods(t, n) {
    if (typeof t != "object" || t === null)
      throw new TypeError("`target` must be an object");
    n = nd(n);
    for (const o of n) {
      if (t[o] !== void 0)
        throw new Error(`The property \`${o}\` already exists on \`target\``);
      Object.defineProperty(t, o, {
        enumerable: !1,
        value: this[o].bind(this),
      });
    }
  }
}
const od = Object.getOwnPropertyNames(qn.prototype).filter(
  (e) => e !== "constructor"
);
Object.defineProperty(qn, "listenerAdded", {
  value: Ei,
  writable: !1,
  enumerable: !0,
  configurable: !1,
});
Object.defineProperty(qn, "listenerRemoved", {
  value: Ti,
  writable: !1,
  enumerable: !0,
  configurable: !1,
});
class dP extends qn {
  emit(t, ...n) {
    return new Promise((o, r) =>
      super.emit(t, { params: n, resolve: o, reject: r })
    );
  }
  on(t, n) {
    return super.on(t, async (o) => {
      try {
        o.resolve(await n(...o.params));
      } catch (r) {
        o.reject(r);
      }
    });
  }
}
const Dt = new dP(),
  fP = {
    is_show: !1,
    is_hard: !1,
    show(e, t = "") {
      (this.is_hard = (this.is_hard || e === !0) && e !== !1),
        (this.is_show = !0),
        Dt.emit("spin", !0, t);
    },
    hide(e) {
      (this.is_hard && e !== !0) ||
        ((this.is_show = this.is_hard = !1), Dt.emit("spin", !1, ""));
    },
  },
  hP = new Proxy(
    {},
    {
      get: (e, t) => (n) =>
        new Promise((o, r) => {
          if (t === "destroyAll") return Dt.emit("dialog", t, null, () => {});
          let i = typeof n == "string" || typeof n == "function",
            s = i ? n : n.content;
          (n = i ? { content: s } : n),
            t === "confirm"
              ? ((t = "warning"), (n.reject_text = n.reject_text || "取消"))
              : t === "risk" &&
                ((t = "error"), (n.reject_text = n.reject_text || "取消")),
            (n.title = n.title || "温馨提示"),
            (n.class = `g-base-dialog g-base-dialog_${t}`),
            (n.positiveText = n.resolve_text || "确认"),
            (n.negativeText = n.reject_text);
          let l;
          const a = (c) => (l = c);
          (n.onPositiveClick = () => (
            n.resolve ? n.resolve(l) : o(), !n.resolve
          )),
            (n.onNegativeClick = () => (
              n.reject ? n.reject(l) : r(), !n.reject
            )),
            Dt.emit("dialog", t, n, a);
        }),
    }
  ),
  pP = new Proxy(
    {},
    {
      get: (e, t) => (n) => {
        let o = typeof n == "string" || typeof n == "function",
          r = o ? n : n.content;
        return (
          (n = o ? {} : n),
          (n.duration = n.duration ?? (n.closable ? 0 : 4e3)),
          Dt.emit("message", t, r, n)
        );
      },
    }
  );
function gP(e, t) {
  return new Promise((n) => Dt.emit("menu", e, t, n));
}
const vP = {
    __name: "content",
    setup(e) {
      const t = S$();
      Dt.on("dialog", (o, r, i) => i(t[o](r)));
      const n = G$();
      return (
        Dt.on("message", (o, r, i) => n[o](r, i)),
        (o, r) => {
          const i = Jd("router-view");
          return (
            dr(),
            hr(i, null, {
              default: It(({ Component: s }) => [
                ze(
                  pt,
                  { name: "fade", mode: "in-out" },
                  { default: It(() => [(dr(), hr(zg(s)))]), _: 2 },
                  1024
                ),
              ]),
              _: 1,
            })
          );
        }
      );
    },
  },
  mP = {
    errorColor: "#fa2a2d",
    primaryColor: "#007dff",
    primaryColorHover: "#0070e6",
    primaryColorSuppl: "#0070e6",
    primaryColorPressed: "#3397ff",
  },
  bP = { textColorDisabled: "#707070" },
  yP = {
    thColor: "#f5f6fa",
    borderColor: "#ddd",
    borderColorModal: "#ddd",
    thTextColor: "#1c1c1c",
    thIconColor: "#1c1c1c",
    tdColorHover: "#f2f8ff",
  },
  xP = { borderColor: "#ddd", borderColorModal: "#ddd" },
  wP = { optionTextColorActive: "#1c3c7d", optionColorActive: "#e5f3fb" },
  CP = { labelTextColor: "#707070" },
  SP = { fillColor: "#007dff" },
  _P = {
    itemIconColorChildActive: "#06c",
    itemIconColorChildActiveHover: "#06c",
    arrowColorChildActive: "#06c",
    arrowColorChildActiveHover: "#06c",
    itemTextColorChildActive: "#06c",
    itemTextColorChildActiveHover: "#06c",
    itemTextColorActive: "#06c",
    itemTextColorActiveHover: "#06c",
    itemColorActive: "#f2f8ff",
  },
  $P = {
    common: mP,
    Checkbox: bP,
    DataTable: yP,
    Descriptions: xP,
    Dropdown: wP,
    Form: CP,
    Progress: SP,
    Menu: _P,
  },
  PP =
    ".container_frame_header.n-layout-header{background:#06c}.container_frame_menu.n-menu .n-menu-item-content.n-menu-item-content--selected:before{border-color:#0066cb}.g-title{background:#f2f8ff}.g-title:before{background:linear-gradient(to right,#007dff 50%,#a9d3ff 50%)}.g-bg{background:#f5f6fa}.g-color{color:#007dff}.g-color-red{color:#fa2a2d}.g-base-dialog_info .g-color{color:#0ae}.n-descriptions.n-descriptions--bordered .n-descriptions-table-wrapper .n-descriptions-table .n-descriptions-table-row .n-descriptions-table-header{background-color:#f5f6fa}",
  EP = {
    errorColor: "#fa2a2d",
    primaryColor: "#1d8b3d",
    primaryColorHover: "#1a7d37",
    primaryColorSuppl: "#1a7d37",
    primaryColorPressed: "#4aa263",
  },
  TP = { textColorDisabled: "#000" },
  OP = {
    thColor: "#f0f0f0",
    borderColor: "#d6e7d6",
    borderColorModal: "#d6e7d6",
    thTextColor: "#1c1c1c",
    thIconColor: "#1c1c1c",
    tdColorHover: "#f0f9f3",
  },
  RP = { borderColor: "#d6e7d6", borderColorModal: "#d6e7d6" },
  AP = { optionTextColorActive: "#1d8b3d", optionColorActive: "#eafaef" },
  MP = { labelTextColor: "#000" },
  zP = { fillColor: "#1d8b3d" },
  IP = {
    itemIconColorChildActive: "#1d8b3d",
    itemIconColorChildActiveHover: "#1d8b3d",
    arrowColorChildActive: "#1d8b3d",
    arrowColorChildActiveHover: "#1d8b3d",
    itemTextColorChildActive: "#1d8b3d",
    itemTextColorChildActiveHover: "#1d8b3d",
    itemTextColorActive: "#1d8b3d",
    itemTextColorActiveHover: "#1d8b3d",
    itemColorActive: "#eafaef",
  },
  kP = {
    common: EP,
    Checkbox: TP,
    DataTable: OP,
    Descriptions: RP,
    Dropdown: AP,
    Form: MP,
    Progress: zP,
    Menu: IP,
  },
  BP =
    ".container_frame_header.n-layout-header{background:#1d8b3d}.container_frame_menu.n-menu .n-menu-item-content.n-menu-item-content--selected:before{border-color:#1d8b3d}.g-title,.g-bg{background:#f0f9f3}.g-title:before{background:linear-gradient(to right,#1d8b3d 50%,#b1e5c1 50%)}.g-color{color:#1d8b3d}.g-color-red{color:#da4a4a}.n-descriptions.n-descriptions--bordered .n-descriptions-table-wrapper .n-descriptions-table .n-descriptions-table-row .n-descriptions-table-header{background-color:#f0f7f1}",
  LP = {
    textColorBase: "#1c1c1c",
    inputColorDisabled: "#f3f3f3",
    placeholderColorDisabled: "#949494",
    borderRadius: "4px",
    heightMedium: "32px",
  },
  HP = { paddingMedium: "20px", titleFontSizeMedium: "18px" },
  FP = {
    emptyPadding: "40px 0",
    tdPaddingMedium: "12px 8px",
    thPaddingMedium: "10px 8px",
  },
  jP = { itemTextColorDisabled: "#ababae" },
  DP = { borderRadius: "0", thTextColor: "#000" },
  NP = { actionSpace: "0" },
  WP = { textColor: "#c2c2c2" },
  KP = { gapMedium: "8px 10px" },
  VP = { textColorDisabled: "#1c1c1c" },
  UP = { ItemHeight: "48px" },
  GP = { dotColorDisabled: "#8b8b8b" },
  qP = { gapMedium: "8px 10px" },
  XP = { heightMedium: "26px" },
  rd = {
    common: LP,
    Card: HP,
    DataTable: FP,
    DatePicker: jP,
    Descriptions: DP,
    Dialog: NP,
    Empty: WP,
    Flex: KP,
    Input: VP,
    Menu: UP,
    Radio: GP,
    Space: qP,
    Tag: XP,
  },
  YP = { paddingMedium: "14px 16px" },
  ZP = { Card: YP };
function Op(...e) {
  let t = {};
  return (
    new Set(e.map((n) => Object.keys(n)).flat()).forEach((n) => {
      t[n] = Object.assign({}, ...e.map((o) => o[n] || {}));
    }),
    t
  );
}
const ir = {};
let Ds;
const Rp = document.createElement("style");
document.head.appendChild(Rp);
const JP = innerWidth < 540 ? Op(rd, ZP) : rd;
function Ap(e, t, n) {
  return (
    (e = e || {}),
    {
      theme: e.theme && !t ? e.theme : Op(e.theme || JP, t),
      style: [e.style || "", n].filter((o) => o).join(`\r
`),
    }
  );
}
function QP(e, t) {
  return (
    Ds && document.body.classList.remove(`theme_${Ds}`),
    document.body.classList.add(`theme_${e}`),
    (Ds = e),
    (Rp.innerHTML = t.style),
    t.theme
  );
}
function Mp(e, t, n) {
  return (ir[e] = Ap(ir[e], t, n)), ir[e];
}
function eE(e, t, n) {
  return ir[e] ? QP(e, Ap(ir[e], t, n)) : null;
}
Mp("blue", $P, PP);
Mp("green", kP, BP);
const tE = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [o, r] of t) n[o] = r;
    return n;
  },
  nE = {
    data: () => ({
      zhCN: N1,
      dateZhCN: ES,
      spin_desc: "",
      show_spin: !1,
      menu_x: 0,
      menu_y: 0,
      menu_list: [],
      show_menu: !1,
    }),
    computed: {
      theme_config() {
        return eE("blue");
      },
    },
    methods: {
      MenuTodo(e, t) {
        this.HideMenu(), this.MenuResult(t);
      },
      HideMenu() {
        this.hide_menu_able && (this.show_menu = !1);
      },
    },
    components: { ContainerContent: vP },
    created() {
      Dt.on("spin", (e, t) => {
        (this.spin_desc = t), (this.show_spin = e);
      }),
        Dt.on("menu", (e, t, n) => {
          e.preventDefault(),
            (this.menu_x = e.clientX),
            (this.menu_y = e.clientY),
            (this.menu_list = t),
            (this.show_menu = !0),
            (this.hide_menu_able = !1),
            setTimeout(() => (this.hide_menu_able = !0), 300),
            (this.MenuResult = n);
        });
    },
  },
  oE = { style: { "box-shadow": "none" } },
  rE = { style: { color: "#f2f2f2", "font-size": "14px" } };
function iE(e, t, n, o, r, i) {
  const s = Jd("container-content"),
    l = F$,
    a = oP,
    c = U$,
    u = C$,
    d = l$,
    f = lP,
    p = $p,
    h = F_;
  return (
    dr(),
    hr(
      h,
      {
        abstract: "",
        "inline-theme-disabled": "",
        locale: e.zhCN,
        "date-locale": e.dateZhCN,
        "theme-overrides": i.theme_config,
      },
      {
        default: It(() => [
          ze(u, null, {
            default: It(() => [
              ze(
                c,
                { "keep-alive-on-hover": "" },
                {
                  default: It(() => [
                    ze(
                      a,
                      { "keep-alive-on-hover": "" },
                      {
                        default: It(() => [
                          ze(l, null, { default: It(() => [ze(s)]), _: 1 }),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }),
          ze(
            d,
            {
              trigger: "manual",
              placement: "bottom-start",
              x: e.menu_x,
              y: e.menu_y,
              options: e.menu_list,
              show: e.show_menu,
              onContextmenu: t[0] || (t[0] = om(() => {}, ["prevent"])),
              onSelect: i.MenuTodo,
              onClickoutside: i.HideMenu,
            },
            null,
            8,
            ["x", "y", "options", "show", "onSelect", "onClickoutside"]
          ),
          ze(
            p,
            { "z-index": 9999, show: e.show_spin },
            {
              default: It(() => [
                fi("div", oE, [
                  ze(f, null, {
                    description: It(() => [fi("span", rE, hd(e.spin_desc), 1)]),
                    _: 1,
                  }),
                ]),
              ]),
              _: 1,
            },
            8,
            ["show"]
          ),
        ]),
        _: 1,
      },
      8,
      ["locale", "date-locale", "theme-overrides"]
    )
  );
}
const sE = tE(nE, [["render", iE]]),
  Qt = sm(sE);
Qt.use(um()).use(Gf);
Qt.config.globalProperties.$spin = fP;
Qt.config.globalProperties.$dialog = hP;
Qt.config.globalProperties.$time = Pb;
Qt.config.globalProperties.$menu = gP;
Qt.config.globalProperties.$message = pP;
Qt.config.globalProperties.$button = aP;
Qt.config.globalProperties.$store = qf();
Qt.mount("#app");
export { He as F, tE as _, fi as a, cE as b, lE as c, aE as d, dr as o };
