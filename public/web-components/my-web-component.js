import oe, { createContext as rr, useContext as nr, useEffect as ar, useLayoutEffect as or, useRef as _e, useMemo as ir, useCallback as Ze, useDebugValue as sr } from "react";
import ur from "react-dom";
var Ve = {}, Le = ur;
if (process.env.NODE_ENV === "production")
  Ve.createRoot = Le.createRoot, Ve.hydrateRoot = Le.hydrateRoot;
else {
  var Ye = Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ve.createRoot = function(t, n) {
    Ye.usingClientEntryPoint = !0;
    try {
      return Le.createRoot(t, n);
    } finally {
      Ye.usingClientEntryPoint = !1;
    }
  }, Ve.hydrateRoot = function(t, n, o) {
    Ye.usingClientEntryPoint = !0;
    try {
      return Le.hydrateRoot(t, n, o);
    } finally {
      Ye.usingClientEntryPoint = !1;
    }
  };
}
var it = { exports: {} }, Pe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function cr() {
  if (bt) return Pe;
  bt = 1;
  var t = oe, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(S, d, I) {
    var _, l = {}, v = null, p = null;
    I !== void 0 && (v = "" + I), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (_ in d) s.call(d, _) && !c.hasOwnProperty(_) && (l[_] = d[_]);
    if (S && S.defaultProps) for (_ in d = S.defaultProps, d) l[_] === void 0 && (l[_] = d[_]);
    return { $$typeof: n, type: S, key: v, ref: p, props: l, _owner: i.current };
  }
  return Pe.Fragment = o, Pe.jsx = E, Pe.jsxs = E, Pe;
}
var Ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function lr() {
  return Tt || (Tt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = oe, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), S = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), l = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), U = Symbol.iterator, O = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[O];
      return typeof r == "function" ? r : null;
    }
    var u = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          a[f - 1] = arguments[f];
        L("error", e, a);
      }
    }
    function L(e, r, a) {
      {
        var f = u.ReactDebugCurrentFrame, b = f.getStackAddendum();
        b !== "" && (r += "%s", a = a.concat([b]));
        var x = a.map(function(R) {
          return String(R);
        });
        x.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var g = !1, T = !1, y = !1, B = !1, w = !1, N;
    N = Symbol.for("react.module.reference");
    function $(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === c || w || e === i || e === I || e === _ || B || e === p || g || T || y || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === l || e.$$typeof === E || e.$$typeof === S || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === N || e.getModuleId !== void 0));
    }
    function te(e, r, a) {
      var f = e.displayName;
      if (f)
        return f;
      var b = r.displayName || r.name || "";
      return b !== "" ? a + "(" + b + ")" : a;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case I:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return re(r) + ".Consumer";
          case E:
            var a = e;
            return re(a._context) + ".Provider";
          case d:
            return te(e, e.render, "ForwardRef");
          case l:
            var f = e.displayName || null;
            return f !== null ? f : j(e.type) || "Memo";
          case v: {
            var b = e, x = b._payload, R = b._init;
            try {
              return j(R(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, ve = 0, we, Ce, ie, De, ke, se, ue;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function We() {
      {
        if (ve === 0) {
          we = console.log, Ce = console.info, ie = console.warn, De = console.error, ke = console.group, se = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ve++;
      }
    }
    function Re() {
      {
        if (ve--, ve === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: we
            }),
            info: H({}, e, {
              value: Ce
            }),
            warn: H({}, e, {
              value: ie
            }),
            error: H({}, e, {
              value: De
            }),
            group: H({}, e, {
              value: ke
            }),
            groupCollapsed: H({}, e, {
              value: se
            }),
            groupEnd: H({}, e, {
              value: ue
            })
          });
        }
        ve < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ge = u.ReactCurrentDispatcher, me;
    function Se(e, r, a) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (b) {
            var f = b.stack.trim().match(/\n( *(at )?)/);
            me = f && f[1] || "";
          }
        return `
` + me + e;
      }
    }
    var xe = !1, ne;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new Ue();
    }
    function C(e, r) {
      if (!e || xe)
        return "";
      {
        var a = ne.get(e);
        if (a !== void 0)
          return a;
      }
      var f;
      xe = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ge.current, ge.current = null, We();
      try {
        if (r) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (G) {
              f = G;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (G) {
              f = G;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            f = G;
          }
          e();
        }
      } catch (G) {
        if (G && f && typeof G.stack == "string") {
          for (var h = G.stack.split(`
`), q = f.stack.split(`
`), V = h.length - 1, W = q.length - 1; V >= 1 && W >= 0 && h[V] !== q[W]; )
            W--;
          for (; V >= 1 && W >= 0; V--, W--)
            if (h[V] !== q[W]) {
              if (V !== 1 || W !== 1)
                do
                  if (V--, W--, W < 0 || h[V] !== q[W]) {
                    var X = `
` + h[V].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, X), X;
                  }
                while (V >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ge.current = x, Re(), Error.prepareStackTrace = b;
      }
      var Te = e ? e.displayName || e.name : "", he = Te ? Se(Te) : "";
      return typeof e == "function" && ne.set(e, he), he;
    }
    function D(e, r, a) {
      return C(e, !1);
    }
    function M(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function A(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return C(e, M(e));
      if (typeof e == "string")
        return Se(e);
      switch (e) {
        case I:
          return Se("Suspense");
        case _:
          return Se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return D(e.render);
          case l:
            return A(e.type, r, a);
          case v: {
            var f = e, b = f._payload, x = f._init;
            try {
              return A(x(b), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ce = {}, F = u.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, a = A(e.type, e._source, r ? r.type : null);
        F.setExtraStackFrame(a);
      } else
        F.setExtraStackFrame(null);
    }
    function ee(e, r, a, f, b) {
      {
        var x = Function.call.bind(Y);
        for (var R in e)
          if (x(e, R)) {
            var h = void 0;
            try {
              if (typeof e[R] != "function") {
                var q = Error((f || "React class") + ": " + a + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              h = e[R](r, R, f, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              h = V;
            }
            h && !(h instanceof Error) && (k(b), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", a, R, typeof h), k(null)), h instanceof Error && !(h.message in ce) && (ce[h.message] = !0, k(b), P("Failed %s type: %s", a, h.message), k(null));
          }
      }
    }
    var Me = Array.isArray;
    function ye(e) {
      return Me(e);
    }
    function $e(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function K(e) {
      try {
        return z(e), !1;
      } catch {
        return !0;
      }
    }
    function z(e) {
      return "" + e;
    }
    function Oe(e) {
      if (K(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(e)), z(e);
    }
    var pe = u.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, ht, Ke;
    Ke = {};
    function Wt(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ut(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Mt(e, r) {
      if (typeof e.ref == "string" && pe.current && r && pe.current.stateNode !== r) {
        var a = j(pe.current.type);
        Ke[a] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(pe.current.type), e.ref), Ke[a] = !0);
      }
    }
    function $t(e, r) {
      {
        var a = function() {
          pt || (pt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Yt(e, r) {
      {
        var a = function() {
          ht || (ht = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var qt = function(e, r, a, f, b, x, R) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: R,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Bt(e, r, a, f, b) {
      {
        var x, R = {}, h = null, q = null;
        a !== void 0 && (Oe(a), h = "" + a), Ut(r) && (Oe(r.key), h = "" + r.key), Wt(r) && (q = r.ref, Mt(r, b));
        for (x in r)
          Y.call(r, x) && !Ae.hasOwnProperty(x) && (R[x] = r[x]);
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (x in V)
            R[x] === void 0 && (R[x] = V[x]);
        }
        if (h || q) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && $t(R, W), q && Yt(R, W);
        }
        return qt(e, h, q, b, f, pe.current, R);
      }
    }
    var Ge = u.ReactCurrentOwner, _t = u.ReactDebugCurrentFrame;
    function be(e) {
      if (e) {
        var r = e._owner, a = A(e.type, e._source, r ? r.type : null);
        _t.setExtraStackFrame(a);
      } else
        _t.setExtraStackFrame(null);
    }
    var Je;
    Je = !1;
    function ze(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Rt() {
      {
        if (Ge.current) {
          var e = j(Ge.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ht(e) {
      return "";
    }
    var gt = {};
    function Kt(e) {
      {
        var r = Rt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function mt(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Kt(r);
        if (gt[a])
          return;
        gt[a] = !0;
        var f = "";
        e && e._owner && e._owner !== Ge.current && (f = " It was passed a child from " + j(e._owner.type) + "."), be(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, f), be(null);
      }
    }
    function St(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var a = 0; a < e.length; a++) {
            var f = e[a];
            ze(f) && mt(f, r);
          }
        else if (ze(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = Q(e);
          if (typeof b == "function" && b !== e.entries)
            for (var x = b.call(e), R; !(R = x.next()).done; )
              ze(R.value) && mt(R.value, r);
        }
      }
    }
    function Gt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === l))
          a = r.propTypes;
        else
          return;
        if (a) {
          var f = j(r);
          ee(a, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !Je) {
          Je = !0;
          var b = j(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jt(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var f = r[a];
          if (f !== "children" && f !== "key") {
            be(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), be(null);
            break;
          }
        }
        e.ref !== null && (be(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var yt = {};
    function Ot(e, r, a, f, b, x) {
      {
        var R = $(e);
        if (!R) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = Ht();
          q ? h += q : h += Rt();
          var V;
          e === null ? V = "null" : ye(e) ? V = "array" : e !== void 0 && e.$$typeof === n ? (V = "<" + (j(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : V = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, h);
        }
        var W = Bt(e, r, a, b, x);
        if (W == null)
          return W;
        if (R) {
          var X = r.children;
          if (X !== void 0)
            if (f)
              if (ye(X)) {
                for (var Te = 0; Te < X.length; Te++)
                  St(X[Te], e);
                Object.freeze && Object.freeze(X);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              St(X, e);
        }
        if (Y.call(r, "key")) {
          var he = j(e), G = Object.keys(r).filter(function(tr) {
            return tr !== "key";
          }), Xe = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yt[he + Xe]) {
            var er = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Xe, he, er, he), yt[he + Xe] = !0;
          }
        }
        return e === s ? Jt(W) : Gt(W), W;
      }
    }
    function zt(e, r, a) {
      return Ot(e, r, a, !0);
    }
    function Xt(e, r, a) {
      return Ot(e, r, a, !1);
    }
    var Zt = Xt, Qt = zt;
    Ie.Fragment = s, Ie.jsx = Zt, Ie.jsxs = Qt;
  }()), Ie;
}
process.env.NODE_ENV === "production" ? it.exports = cr() : it.exports = lr();
var Z = it.exports, st = { exports: {} }, Qe = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function fr() {
  if (wt) return Qe;
  wt = 1;
  var t = oe;
  function n(l, v) {
    return l === v && (l !== 0 || 1 / l === 1 / v) || l !== l && v !== v;
  }
  var o = typeof Object.is == "function" ? Object.is : n, s = t.useState, i = t.useEffect, c = t.useLayoutEffect, E = t.useDebugValue;
  function S(l, v) {
    var p = v(), U = s({ inst: { value: p, getSnapshot: v } }), O = U[0].inst, Q = U[1];
    return c(function() {
      O.value = p, O.getSnapshot = v, d(O) && Q({ inst: O });
    }, [l, p, v]), i(function() {
      return d(O) && Q({ inst: O }), l(function() {
        d(O) && Q({ inst: O });
      });
    }, [l]), E(p), p;
  }
  function d(l) {
    var v = l.getSnapshot;
    l = l.value;
    try {
      var p = v();
      return !o(l, p);
    } catch {
      return !0;
    }
  }
  function I(l, v) {
    return v();
  }
  var _ = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? I : S;
  return Qe.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : _, Qe;
}
var et = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function dr() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var t = oe, n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function o(L) {
      {
        for (var g = arguments.length, T = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
          T[y - 1] = arguments[y];
        s("error", L, T);
      }
    }
    function s(L, g, T) {
      {
        var y = n.ReactDebugCurrentFrame, B = y.getStackAddendum();
        B !== "" && (g += "%s", T = T.concat([B]));
        var w = T.map(function(N) {
          return String(N);
        });
        w.unshift("Warning: " + g), Function.prototype.apply.call(console[L], console, w);
      }
    }
    function i(L, g) {
      return L === g && (L !== 0 || 1 / L === 1 / g) || L !== L && g !== g;
    }
    var c = typeof Object.is == "function" ? Object.is : i, E = t.useState, S = t.useEffect, d = t.useLayoutEffect, I = t.useDebugValue, _ = !1, l = !1;
    function v(L, g, T) {
      _ || t.startTransition !== void 0 && (_ = !0, o("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var y = g();
      if (!l) {
        var B = g();
        c(y, B) || (o("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var w = E({
        inst: {
          value: y,
          getSnapshot: g
        }
      }), N = w[0].inst, $ = w[1];
      return d(function() {
        N.value = y, N.getSnapshot = g, p(N) && $({
          inst: N
        });
      }, [L, y, g]), S(function() {
        p(N) && $({
          inst: N
        });
        var te = function() {
          p(N) && $({
            inst: N
          });
        };
        return L(te);
      }, [L]), I(y), y;
    }
    function p(L) {
      var g = L.getSnapshot, T = L.value;
      try {
        var y = g();
        return !c(T, y);
      } catch {
        return !0;
      }
    }
    function U(L, g, T) {
      return g();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Q = !O, u = Q ? U : v, P = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : u;
    et.useSyncExternalStore = P, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), et;
}
process.env.NODE_ENV === "production" ? st.exports = fr() : st.exports = dr();
var vr = st.exports;
const fe = () => {
}, J = (
  /*#__NOINLINE__*/
  fe()
), tt = Object, m = (t) => t === J, ae = (t) => typeof t == "function", de = (t, n) => ({
  ...t,
  ...n
}), Er = (t) => ae(t.then), qe = /* @__PURE__ */ new WeakMap();
let pr = 0;
const Ne = (t) => {
  const n = typeof t, o = t && t.constructor, s = o == Date;
  let i, c;
  if (tt(t) === t && !s && o != RegExp) {
    if (i = qe.get(t), i) return i;
    if (i = ++pr + "~", qe.set(t, i), o == Array) {
      for (i = "@", c = 0; c < t.length; c++)
        i += Ne(t[c]) + ",";
      qe.set(t, i);
    }
    if (o == tt) {
      i = "#";
      const E = tt.keys(t).sort();
      for (; !m(c = E.pop()); )
        m(t[c]) || (i += c + ":" + Ne(t[c]) + ",");
      qe.set(t, i);
    }
  } else
    i = s ? t.toJSON() : n == "symbol" ? t.toString() : n == "string" ? JSON.stringify(t) : "" + t;
  return i;
}, le = /* @__PURE__ */ new WeakMap(), rt = {}, Be = {}, vt = "undefined", He = typeof window != vt, ut = typeof document != vt, hr = () => He && typeof window.requestAnimationFrame != vt, Pt = (t, n) => {
  const o = le.get(t);
  return [
    // Getter
    () => !m(n) && t.get(n) || rt,
    // Setter
    (s) => {
      if (!m(n)) {
        const i = t.get(n);
        n in Be || (Be[n] = i), o[5](n, de(i, s), i || rt);
      }
    },
    // Subscriber
    o[6],
    // Get server cache snapshot
    () => !m(n) && n in Be ? Be[n] : !m(n) && t.get(n) || rt
  ];
};
let ct = !0;
const _r = () => ct, [lt, ft] = He && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  fe,
  fe
], Rr = () => {
  const t = ut && document.visibilityState;
  return m(t) || t !== "hidden";
}, gr = (t) => (ut && document.addEventListener("visibilitychange", t), lt("focus", t), () => {
  ut && document.removeEventListener("visibilitychange", t), ft("focus", t);
}), mr = (t) => {
  const n = () => {
    ct = !0, t();
  }, o = () => {
    ct = !1;
  };
  return lt("online", n), lt("offline", o), () => {
    ft("online", n), ft("offline", o);
  };
}, Sr = {
  isOnline: _r,
  isVisible: Rr
}, yr = {
  initFocus: gr,
  initReconnect: mr
}, Dt = !oe.useId, Fe = !He || "Deno" in window, Or = (t) => hr() ? window.requestAnimationFrame(t) : setTimeout(t, 1), nt = Fe ? ar : or, at = typeof navigator < "u" && navigator.connection, xt = !Fe && at && ([
  "slow-2g",
  "2g"
].includes(at.effectiveType) || at.saveData), Et = (t) => {
  if (ae(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const n = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? Ne(t) : "", [
    t,
    n
  ];
};
let br = 0;
const dt = () => ++br, It = 0, jt = 1, Vt = 2, Tr = 3;
var je = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Tr,
  FOCUS_EVENT: It,
  MUTATE_EVENT: Vt,
  RECONNECT_EVENT: jt
};
async function Nt(...t) {
  const [n, o, s, i] = t, c = de({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let E = c.populateCache;
  const S = c.rollbackOnError;
  let d = c.optimisticData;
  const I = (v) => typeof S == "function" ? S(v) : S !== !1, _ = c.throwOnError;
  if (ae(o)) {
    const v = o, p = [], U = n.keys();
    for (const O of U)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(O) && v(n.get(O)._k) && p.push(O);
    return Promise.all(p.map(l));
  }
  return l(o);
  async function l(v) {
    const [p] = Et(v);
    if (!p) return;
    const [U, O] = Pt(n, p), [Q, u, P, L] = le.get(n), g = () => {
      const j = Q[p];
      return (ae(c.revalidate) ? c.revalidate(U().data, v) : c.revalidate !== !1) && (delete P[p], delete L[p], j && j[0]) ? j[0](Vt).then(() => U().data) : U().data;
    };
    if (t.length < 3)
      return g();
    let T = s, y;
    const B = dt();
    u[p] = [
      B,
      0
    ];
    const w = !m(d), N = U(), $ = N.data, te = N._c, re = m(te) ? $ : te;
    if (w && (d = ae(d) ? d(re, $) : d, O({
      data: d,
      _c: re
    })), ae(T))
      try {
        T = T(re);
      } catch (j) {
        y = j;
      }
    if (T && Er(T))
      if (T = await T.catch((j) => {
        y = j;
      }), B !== u[p][0]) {
        if (y) throw y;
        return T;
      } else y && w && I(y) && (E = !0, O({
        data: re,
        _c: J
      }));
    if (E && !y)
      if (ae(E)) {
        const j = E(T, re);
        O({
          data: j,
          error: J,
          _c: J
        });
      } else
        O({
          data: T,
          error: J,
          _c: J
        });
    if (u[p][1] = dt(), Promise.resolve(g()).then(() => {
      O({
        _c: J
      });
    }), y) {
      if (_) throw y;
      return;
    }
    return T;
  }
}
const At = (t, n) => {
  for (const o in t)
    t[o][0] && t[o][0](n);
}, wr = (t, n) => {
  if (!le.has(t)) {
    const o = de(yr, n), s = {}, i = Nt.bind(J, t);
    let c = fe;
    const E = {}, S = (_, l) => {
      const v = E[_] || [];
      return E[_] = v, v.push(l), () => v.splice(v.indexOf(l), 1);
    }, d = (_, l, v) => {
      t.set(_, l);
      const p = E[_];
      if (p)
        for (const U of p)
          U(l, v);
    }, I = () => {
      if (!le.has(t) && (le.set(t, [
        s,
        {},
        {},
        {},
        i,
        d,
        S
      ]), !Fe)) {
        const _ = o.initFocus(setTimeout.bind(J, At.bind(J, s, It))), l = o.initReconnect(setTimeout.bind(J, At.bind(J, s, jt)));
        c = () => {
          _ && _(), l && l(), le.delete(t);
        };
      }
    };
    return I(), [
      t,
      i,
      I,
      c
    ];
  }
  return [
    t,
    le.get(t)[4]
  ];
}, Cr = (t, n, o, s, i) => {
  const c = o.errorRetryCount, E = i.retryCount, S = ~~((Math.random() + 0.5) * (1 << (E < 8 ? E : 8))) * o.errorRetryInterval;
  !m(c) && E > c || setTimeout(s, S, i);
}, Dr = (t, n) => Ne(t) == Ne(n), [Ft, xr] = wr(/* @__PURE__ */ new Map()), Ar = de(
  {
    // events
    onLoadingSlow: fe,
    onSuccess: fe,
    onError: fe,
    onErrorRetry: Cr,
    onDiscarded: fe,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: xt ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: xt ? 5e3 : 3e3,
    // providers
    compare: Dr,
    isPaused: () => !1,
    cache: Ft,
    mutate: xr,
    fallback: {}
  },
  // use web preset by default
  Sr
), Lr = (t, n) => {
  const o = de(t, n);
  if (n) {
    const { use: s, fallback: i } = t, { use: c, fallback: E } = n;
    s && c && (o.use = s.concat(c)), i && E && (o.fallback = de(i, E));
  }
  return o;
}, Pr = rr({}), Ir = "$inf$", kt = He && window.__SWR_DEVTOOLS_USE__, jr = kt ? window.__SWR_DEVTOOLS_USE__ : [], Vr = () => {
  kt && (window.__SWR_DEVTOOLS_REACT__ = oe);
}, Nr = (t) => ae(t[1]) ? [
  t[0],
  t[1],
  t[2] || {}
] : [
  t[0],
  null,
  (t[1] === null ? t[2] : t[1]) || {}
], Fr = () => de(Ar, nr(Pr)), kr = (t) => (n, o, s) => t(n, o && ((...c) => {
  const [E] = Et(n), [, , , S] = le.get(Ft);
  if (E.startsWith(Ir))
    return o(...c);
  const d = S[E];
  return m(d) ? o(...c) : (delete S[E], d);
}), s), Wr = jr.concat(kr), Ur = (t) => function(...o) {
  const s = Fr(), [i, c, E] = Nr(o), S = Lr(s, E);
  let d = t;
  const { use: I } = S, _ = (I || []).concat(Wr);
  for (let l = _.length; l--; )
    d = _[l](d);
  return d(i, c || S.fetcher || null, S);
}, Mr = (t, n, o) => {
  const s = n[t] || (n[t] = []);
  return s.push(o), () => {
    const i = s.indexOf(o);
    i >= 0 && (s[i] = s[s.length - 1], s.pop());
  };
};
Vr();
const Lt = oe.use || ((t) => {
  if (t.status === "pending")
    throw t;
  if (t.status === "fulfilled")
    return t.value;
  throw t.status === "rejected" ? t.reason : (t.status = "pending", t.then((n) => {
    t.status = "fulfilled", t.value = n;
  }, (n) => {
    t.status = "rejected", t.reason = n;
  }), t);
}), ot = {
  dedupe: !0
}, $r = (t, n, o) => {
  const { cache: s, compare: i, suspense: c, fallbackData: E, revalidateOnMount: S, revalidateIfStale: d, refreshInterval: I, refreshWhenHidden: _, refreshWhenOffline: l, keepPreviousData: v } = o, [p, U, O, Q] = le.get(s), [u, P] = Et(t), L = _e(!1), g = _e(!1), T = _e(u), y = _e(n), B = _e(o), w = () => B.current, N = () => w().isVisible() && w().isOnline(), [$, te, re, j] = Pt(s, u), H = _e({}).current, ve = m(E) ? o.fallback[u] : E, we = (C, D) => {
    for (const M in H) {
      const A = M;
      if (A === "data") {
        if (!i(C[A], D[A]) && (!m(C[A]) || !i(Re, D[A])))
          return !1;
      } else if (D[A] !== C[A])
        return !1;
    }
    return !0;
  }, Ce = ir(() => {
    const C = !u || !n ? !1 : m(S) ? w().isPaused() || c ? !1 : m(d) ? !0 : d : S, D = (k) => {
      const ee = de(k);
      return delete ee._k, C ? {
        isValidating: !0,
        isLoading: !0,
        ...ee
      } : ee;
    }, M = $(), A = j(), Y = D(M), ce = M === A ? Y : D(A);
    let F = Y;
    return [
      () => {
        const k = D($());
        return we(k, F) ? (F.data = k.data, F.isLoading = k.isLoading, F.isValidating = k.isValidating, F.error = k.error, F) : (F = k, k);
      },
      () => ce
    ];
  }, [
    s,
    u
  ]), ie = vr.useSyncExternalStore(Ze(
    (C) => re(u, (D, M) => {
      we(M, D) || C();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      s,
      u
    ]
  ), Ce[0], Ce[1]), De = !L.current, ke = p[u] && p[u].length > 0, se = ie.data, ue = m(se) ? ve : se, Ee = ie.error, We = _e(ue), Re = v ? m(se) ? We.current : se : ue, ge = ke && !m(Ee) ? !1 : De && !m(S) ? S : w().isPaused() ? !1 : c ? m(ue) ? !1 : d : m(ue) || d, me = !!(u && n && De && ge), Se = m(ie.isValidating) ? me : ie.isValidating, xe = m(ie.isLoading) ? me : ie.isLoading, ne = Ze(
    async (C) => {
      const D = y.current;
      if (!u || !D || g.current || w().isPaused())
        return !1;
      let M, A, Y = !0;
      const ce = C || {}, F = !O[u] || !ce.dedupe, k = () => Dt ? !g.current && u === T.current && L.current : u === T.current, ee = {
        isValidating: !1,
        isLoading: !1
      }, Me = () => {
        te(ee);
      }, ye = () => {
        const K = O[u];
        K && K[1] === A && delete O[u];
      }, $e = {
        isValidating: !0
      };
      m($().data) && ($e.isLoading = !0);
      try {
        if (F && (te($e), o.loadingTimeout && m($().data) && setTimeout(() => {
          Y && k() && w().onLoadingSlow(u, o);
        }, o.loadingTimeout), O[u] = [
          D(P),
          dt()
        ]), [M, A] = O[u], M = await M, F && setTimeout(ye, o.dedupingInterval), !O[u] || O[u][1] !== A)
          return F && k() && w().onDiscarded(u), !1;
        ee.error = J;
        const K = U[u];
        if (!m(K) && // case 1
        (A <= K[0] || // case 2
        A <= K[1] || // case 3
        K[1] === 0))
          return Me(), F && k() && w().onDiscarded(u), !1;
        const z = $().data;
        ee.data = i(z, M) ? z : M, F && k() && w().onSuccess(M, u, o);
      } catch (K) {
        ye();
        const z = w(), { shouldRetryOnError: Oe } = z;
        z.isPaused() || (ee.error = K, F && k() && (z.onError(K, u, z), (Oe === !0 || ae(Oe) && Oe(K)) && (!w().revalidateOnFocus || !w().revalidateOnReconnect || N()) && z.onErrorRetry(K, u, z, (pe) => {
          const Ae = p[u];
          Ae && Ae[0] && Ae[0](je.ERROR_REVALIDATE_EVENT, pe);
        }, {
          retryCount: (ce.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Y = !1, Me(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      u,
      s
    ]
  ), Ue = Ze(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...C) => Nt(s, T.current, ...C),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (nt(() => {
    y.current = n, B.current = o, m(se) || (We.current = se);
  }), nt(() => {
    if (!u) return;
    const C = ne.bind(J, ot);
    let D = 0;
    const A = Mr(u, p, (Y, ce = {}) => {
      if (Y == je.FOCUS_EVENT) {
        const F = Date.now();
        w().revalidateOnFocus && F > D && N() && (D = F + w().focusThrottleInterval, C());
      } else if (Y == je.RECONNECT_EVENT)
        w().revalidateOnReconnect && N() && C();
      else {
        if (Y == je.MUTATE_EVENT)
          return ne();
        if (Y == je.ERROR_REVALIDATE_EVENT)
          return ne(ce);
      }
    });
    return g.current = !1, T.current = u, L.current = !0, te({
      _k: P
    }), ge && (m(ue) || Fe ? C() : Or(C)), () => {
      g.current = !0, A();
    };
  }, [
    u
  ]), nt(() => {
    let C;
    function D() {
      const A = ae(I) ? I($().data) : I;
      A && C !== -1 && (C = setTimeout(M, A));
    }
    function M() {
      !$().error && (_ || w().isVisible()) && (l || w().isOnline()) ? ne(ot).then(D) : D();
    }
    return D(), () => {
      C && (clearTimeout(C), C = -1);
    };
  }, [
    I,
    _,
    l,
    u
  ]), sr(Re), c && m(ue) && u) {
    if (!Dt && Fe)
      throw new Error("Fallback data is required when using suspense in SSR.");
    y.current = n, B.current = o, g.current = !1;
    const C = Q[u];
    if (!m(C)) {
      const D = Ue(C);
      Lt(D);
    }
    if (m(Ee)) {
      const D = ne(ot);
      m(Re) || (D.status = "fulfilled", D.value = !0), Lt(D);
    } else
      throw Ee;
  }
  return {
    mutate: Ue,
    get data() {
      return H.data = !0, Re;
    },
    get error() {
      return H.error = !0, Ee;
    },
    get isValidating() {
      return H.isValidating = !0, Se;
    },
    get isLoading() {
      return H.isLoading = !0, xe;
    }
  };
}, Yr = Ur($r), qr = ({ headers: t, rows: n }) => /* @__PURE__ */ Z.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ Z.jsxs("table", { className: "min-w-full divide-y-2 divide-gray-200 bg-white text-sm", children: [
  /* @__PURE__ */ Z.jsx("thead", { className: "ltr:text-left rtl:text-right", children: /* @__PURE__ */ Z.jsx("tr", { children: t.map((o, s) => /* @__PURE__ */ Z.jsx(
    "th",
    {
      className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
      children: o
    },
    s
  )) }) }),
  /* @__PURE__ */ Z.jsxs("tbody", { className: "divide-y divide-gray-200", children: [
    n.map((o, s) => /* @__PURE__ */ Z.jsx("tr", { children: Object.values(o).map((i, c) => /* @__PURE__ */ Z.jsx(
      "td",
      {
        className: "whitespace-nowrap px-4 py-2 text-gray-700",
        children: i
      },
      `row-${s}-${c}`
    )) }, s)),
    " "
  ] })
] }) }), Br = (t) => fetch(t).then((n) => n.json()), Hr = () => {
  oe.useState(1), oe.useState(0);
  const { data: t, isLoading: n, error: o } = Yr(
    "https://www.data.act.gov.au/resource/d56a-2nhi.json",
    Br
  );
  return n ? /* @__PURE__ */ Z.jsx("p", { children: "Loading..." }) : o ? /* @__PURE__ */ Z.jsx("p", { children: "Error..." }) : (t && console.log(t), /* @__PURE__ */ Z.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ Z.jsx(
    qr,
    {
      headers: [
        "Date",
        "Time at Site (in hours)",
        "Description of Site",
        "Camera location",
        "Street",
        "Number Checked",
        "Highest Speed",
        "Average Speed",
        "Posted Speed"
      ],
      rows: t.slice(0, 20)
    }
  ) }));
};
customElements.define(
  "data-card",
  class extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      var o;
      const t = document.createElement("div");
      (o = this.shadowRoot) == null || o.appendChild(t), Ve.createRoot(t).render(
        oe.createElement(Hr, { data: this.getAttribute("data") })
      );
    }
  }
);
