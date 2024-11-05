import oe, { createContext as rr, useContext as nr, useEffect as or, useLayoutEffect as ar, useRef as _e, useMemo as ir, useCallback as Xe, useDebugValue as sr } from "react";
import ur from "react-dom";
var Ve = {}, xe = ur;
if (process.env.NODE_ENV === "production")
  Ve.createRoot = xe.createRoot, Ve.hydrateRoot = xe.hydrateRoot;
else {
  var $e = xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Ve.createRoot = function(t, n) {
    $e.usingClientEntryPoint = !0;
    try {
      return xe.createRoot(t, n);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  }, Ve.hydrateRoot = function(t, n, a) {
    $e.usingClientEntryPoint = !0;
    try {
      return xe.hydrateRoot(t, n, a);
    } finally {
      $e.usingClientEntryPoint = !1;
    }
  };
}
var it = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tt;
function cr() {
  if (Tt) return Le;
  Tt = 1;
  var t = oe, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, d, I) {
    var h, u = {}, v = null, p = null;
    I !== void 0 && (v = "" + I), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (p = d.ref);
    for (h in d) l.call(d, h) && !f.hasOwnProperty(h) && (u[h] = d[h]);
    if (m && m.defaultProps) for (h in d = m.defaultProps, d) u[h] === void 0 && (u[h] = d[h]);
    return { $$typeof: n, type: m, key: v, ref: p, props: u, _owner: i.current };
  }
  return Le.Fragment = a, Le.jsx = E, Le.jsxs = E, Le;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function lr() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = oe, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), U = Symbol.iterator, O = "@@iterator";
    function Z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = U && e[U] || e[O];
      return typeof r == "function" ? r : null;
    }
    var s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          o[c - 1] = arguments[c];
        L("error", e, o);
      }
    }
    function L(e, r, o) {
      {
        var c = s.ReactDebugCurrentFrame, T = c.getStackAddendum();
        T !== "" && (r += "%s", o = o.concat([T]));
        var A = o.map(function(R) {
          return String(R);
        });
        A.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, A);
      }
    }
    var g = !1, b = !1, y = !1, B = !1, w = !1, F;
    F = Symbol.for("react.module.reference");
    function $(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === f || w || e === i || e === I || e === h || B || e === p || g || b || y || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === u || e.$$typeof === E || e.$$typeof === m || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === F || e.getModuleId !== void 0));
    }
    function ee(e, r, o) {
      var c = e.displayName;
      if (c)
        return c;
      var T = r.displayName || r.name || "";
      return T !== "" ? o + "(" + T + ")" : o;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case i:
          return "StrictMode";
        case I:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return te(r) + ".Consumer";
          case E:
            var o = e;
            return te(o._context) + ".Provider";
          case d:
            return ee(e, e.render, "ForwardRef");
          case u:
            var c = e.displayName || null;
            return c !== null ? c : V(e.type) || "Memo";
          case v: {
            var T = e, A = T._payload, R = T._init;
            try {
              return V(R(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, de = 0, be, we, ae, Ce, Ne, ie, se;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function ke() {
      {
        if (de === 0) {
          be = console.log, we = console.info, ae = console.warn, Ce = console.error, Ne = console.group, ie = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        de++;
      }
    }
    function he() {
      {
        if (de--, de === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: be
            }),
            info: H({}, e, {
              value: we
            }),
            warn: H({}, e, {
              value: ae
            }),
            error: H({}, e, {
              value: Ce
            }),
            group: H({}, e, {
              value: Ne
            }),
            groupCollapsed: H({}, e, {
              value: ie
            }),
            groupEnd: H({}, e, {
              value: se
            })
          });
        }
        de < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = s.ReactCurrentDispatcher, ge;
    function Se(e, r, o) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (T) {
            var c = T.stack.trim().match(/\n( *(at )?)/);
            ge = c && c[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var De = !1, re;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      re = new We();
    }
    function C(e, r) {
      if (!e || De)
        return "";
      {
        var o = re.get(e);
        if (o !== void 0)
          return o;
      }
      var c;
      De = !0;
      var T = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = Re.current, Re.current = null, ke();
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
              c = G;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (G) {
              c = G;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            c = G;
          }
          e();
        }
      } catch (G) {
        if (G && c && typeof G.stack == "string") {
          for (var _ = G.stack.split(`
`), q = c.stack.split(`
`), j = _.length - 1, W = q.length - 1; j >= 1 && W >= 0 && _[j] !== q[W]; )
            W--;
          for (; j >= 1 && W >= 0; j--, W--)
            if (_[j] !== q[W]) {
              if (j !== 1 || W !== 1)
                do
                  if (j--, W--, W < 0 || _[j] !== q[W]) {
                    var X = `
` + _[j].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, X), X;
                  }
                while (j >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        De = !1, Re.current = A, he(), Error.prepareStackTrace = T;
      }
      var Te = e ? e.displayName || e.name : "", pe = Te ? Se(Te) : "";
      return typeof e == "function" && re.set(e, pe), pe;
    }
    function D(e, r, o) {
      return C(e, !1);
    }
    function M(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function x(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return C(e, M(e));
      if (typeof e == "string")
        return Se(e);
      switch (e) {
        case I:
          return Se("Suspense");
        case h:
          return Se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return D(e.render);
          case u:
            return x(e.type, r, o);
          case v: {
            var c = e, T = c._payload, A = c._init;
            try {
              return x(A(T), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, ue = {}, N = s.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, o = x(e.type, e._source, r ? r.type : null);
        N.setExtraStackFrame(o);
      } else
        N.setExtraStackFrame(null);
    }
    function Q(e, r, o, c, T) {
      {
        var A = Function.call.bind(Y);
        for (var R in e)
          if (A(e, R)) {
            var _ = void 0;
            try {
              if (typeof e[R] != "function") {
                var q = Error((c || "React class") + ": " + o + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw q.name = "Invariant Violation", q;
              }
              _ = e[R](r, R, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              _ = j;
            }
            _ && !(_ instanceof Error) && (k(T), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, R, typeof _), k(null)), _ instanceof Error && !(_.message in ue) && (ue[_.message] = !0, k(T), P("Failed %s type: %s", o, _.message), k(null));
          }
      }
    }
    var Ue = Array.isArray;
    function me(e) {
      return Ue(e);
    }
    function Me(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
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
    function ye(e) {
      if (K(e))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Me(e)), z(e);
    }
    var Ee = s.ReactCurrentOwner, Ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pt, _t, He;
    He = {};
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
      if (typeof e.ref == "string" && Ee.current && r && Ee.current.stateNode !== r) {
        var o = V(Ee.current.type);
        He[o] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(Ee.current.type), e.ref), He[o] = !0);
      }
    }
    function $t(e, r) {
      {
        var o = function() {
          pt || (pt = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Yt(e, r) {
      {
        var o = function() {
          _t || (_t = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var qt = function(e, r, o, c, T, A, R) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: R,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function Bt(e, r, o, c, T) {
      {
        var A, R = {}, _ = null, q = null;
        o !== void 0 && (ye(o), _ = "" + o), Ut(r) && (ye(r.key), _ = "" + r.key), Wt(r) && (q = r.ref, Mt(r, T));
        for (A in r)
          Y.call(r, A) && !Ae.hasOwnProperty(A) && (R[A] = r[A]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (A in j)
            R[A] === void 0 && (R[A] = j[A]);
        }
        if (_ || q) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && $t(R, W), q && Yt(R, W);
        }
        return qt(e, _, q, T, c, Ee.current, R);
      }
    }
    var Ke = s.ReactCurrentOwner, ht = s.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var r = e._owner, o = x(e.type, e._source, r ? r.type : null);
        ht.setExtraStackFrame(o);
      } else
        ht.setExtraStackFrame(null);
    }
    var Ge;
    Ge = !1;
    function Je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Rt() {
      {
        if (Ke.current) {
          var e = V(Ke.current.type);
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
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function St(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Kt(r);
        if (gt[o])
          return;
        gt[o] = !0;
        var c = "";
        e && e._owner && e._owner !== Ke.current && (c = " It was passed a child from " + V(e._owner.type) + "."), Oe(e), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), Oe(null);
      }
    }
    function mt(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var o = 0; o < e.length; o++) {
            var c = e[o];
            Je(c) && St(c, r);
          }
        else if (Je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var T = Z(e);
          if (typeof T == "function" && T !== e.entries)
            for (var A = T.call(e), R; !(R = A.next()).done; )
              Je(R.value) && St(R.value, r);
        }
      }
    }
    function Gt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === u))
          o = r.propTypes;
        else
          return;
        if (o) {
          var c = V(r);
          Q(o, e.props, "prop", c, e);
        } else if (r.PropTypes !== void 0 && !Ge) {
          Ge = !0;
          var T = V(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", T || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Jt(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var c = r[o];
          if (c !== "children" && c !== "key") {
            Oe(e), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), Oe(null);
            break;
          }
        }
        e.ref !== null && (Oe(e), P("Invalid attribute `ref` supplied to `React.Fragment`."), Oe(null));
      }
    }
    var yt = {};
    function Ot(e, r, o, c, T, A) {
      {
        var R = $(e);
        if (!R) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var q = Ht();
          q ? _ += q : _ += Rt();
          var j;
          e === null ? j = "null" : me(e) ? j = "array" : e !== void 0 && e.$$typeof === n ? (j = "<" + (V(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, _);
        }
        var W = Bt(e, r, o, T, A);
        if (W == null)
          return W;
        if (R) {
          var X = r.children;
          if (X !== void 0)
            if (c)
              if (me(X)) {
                for (var Te = 0; Te < X.length; Te++)
                  mt(X[Te], e);
                Object.freeze && Object.freeze(X);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              mt(X, e);
        }
        if (Y.call(r, "key")) {
          var pe = V(e), G = Object.keys(r).filter(function(tr) {
            return tr !== "key";
          }), ze = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!yt[pe + ze]) {
            var er = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            P(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ze, pe, er, pe), yt[pe + ze] = !0;
          }
        }
        return e === l ? Jt(W) : Gt(W), W;
      }
    }
    function zt(e, r, o) {
      return Ot(e, r, o, !0);
    }
    function Xt(e, r, o) {
      return Ot(e, r, o, !1);
    }
    var Zt = Xt, Qt = zt;
    Pe.Fragment = l, Pe.jsx = Zt, Pe.jsxs = Qt;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? it.exports = cr() : it.exports = lr();
var Ze = it.exports, st = { exports: {} }, Qe = {};
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
  function n(u, v) {
    return u === v && (u !== 0 || 1 / u === 1 / v) || u !== u && v !== v;
  }
  var a = typeof Object.is == "function" ? Object.is : n, l = t.useState, i = t.useEffect, f = t.useLayoutEffect, E = t.useDebugValue;
  function m(u, v) {
    var p = v(), U = l({ inst: { value: p, getSnapshot: v } }), O = U[0].inst, Z = U[1];
    return f(function() {
      O.value = p, O.getSnapshot = v, d(O) && Z({ inst: O });
    }, [u, p, v]), i(function() {
      return d(O) && Z({ inst: O }), u(function() {
        d(O) && Z({ inst: O });
      });
    }, [u]), E(p), p;
  }
  function d(u) {
    var v = u.getSnapshot;
    u = u.value;
    try {
      var p = v();
      return !a(u, p);
    } catch {
      return !0;
    }
  }
  function I(u, v) {
    return v();
  }
  var h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? I : m;
  return Qe.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : h, Qe;
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
    function a(L) {
      {
        for (var g = arguments.length, b = new Array(g > 1 ? g - 1 : 0), y = 1; y < g; y++)
          b[y - 1] = arguments[y];
        l("error", L, b);
      }
    }
    function l(L, g, b) {
      {
        var y = n.ReactDebugCurrentFrame, B = y.getStackAddendum();
        B !== "" && (g += "%s", b = b.concat([B]));
        var w = b.map(function(F) {
          return String(F);
        });
        w.unshift("Warning: " + g), Function.prototype.apply.call(console[L], console, w);
      }
    }
    function i(L, g) {
      return L === g && (L !== 0 || 1 / L === 1 / g) || L !== L && g !== g;
    }
    var f = typeof Object.is == "function" ? Object.is : i, E = t.useState, m = t.useEffect, d = t.useLayoutEffect, I = t.useDebugValue, h = !1, u = !1;
    function v(L, g, b) {
      h || t.startTransition !== void 0 && (h = !0, a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var y = g();
      if (!u) {
        var B = g();
        f(y, B) || (a("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var w = E({
        inst: {
          value: y,
          getSnapshot: g
        }
      }), F = w[0].inst, $ = w[1];
      return d(function() {
        F.value = y, F.getSnapshot = g, p(F) && $({
          inst: F
        });
      }, [L, y, g]), m(function() {
        p(F) && $({
          inst: F
        });
        var ee = function() {
          p(F) && $({
            inst: F
          });
        };
        return L(ee);
      }, [L]), I(y), y;
    }
    function p(L) {
      var g = L.getSnapshot, b = L.value;
      try {
        var y = g();
        return !f(b, y);
      } catch {
        return !0;
      }
    }
    function U(L, g, b) {
      return g();
    }
    var O = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Z = !O, s = Z ? U : v, P = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : s;
    et.useSyncExternalStore = P, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), et;
}
process.env.NODE_ENV === "production" ? st.exports = fr() : st.exports = dr();
var vr = st.exports;
const le = () => {
}, J = (
  /*#__NOINLINE__*/
  le()
), tt = Object, S = (t) => t === J, ne = (t) => typeof t == "function", fe = (t, n) => ({
  ...t,
  ...n
}), Er = (t) => ne(t.then), Ye = /* @__PURE__ */ new WeakMap();
let pr = 0;
const je = (t) => {
  const n = typeof t, a = t && t.constructor, l = a == Date;
  let i, f;
  if (tt(t) === t && !l && a != RegExp) {
    if (i = Ye.get(t), i) return i;
    if (i = ++pr + "~", Ye.set(t, i), a == Array) {
      for (i = "@", f = 0; f < t.length; f++)
        i += je(t[f]) + ",";
      Ye.set(t, i);
    }
    if (a == tt) {
      i = "#";
      const E = tt.keys(t).sort();
      for (; !S(f = E.pop()); )
        S(t[f]) || (i += f + ":" + je(t[f]) + ",");
      Ye.set(t, i);
    }
  } else
    i = l ? t.toJSON() : n == "symbol" ? t.toString() : n == "string" ? JSON.stringify(t) : "" + t;
  return i;
}, ce = /* @__PURE__ */ new WeakMap(), rt = {}, qe = {}, vt = "undefined", Be = typeof window != vt, ut = typeof document != vt, _r = () => Be && typeof window.requestAnimationFrame != vt, Pt = (t, n) => {
  const a = ce.get(t);
  return [
    // Getter
    () => !S(n) && t.get(n) || rt,
    // Setter
    (l) => {
      if (!S(n)) {
        const i = t.get(n);
        n in qe || (qe[n] = i), a[5](n, fe(i, l), i || rt);
      }
    },
    // Subscriber
    a[6],
    // Get server cache snapshot
    () => !S(n) && n in qe ? qe[n] : !S(n) && t.get(n) || rt
  ];
};
let ct = !0;
const hr = () => ct, [lt, ft] = Be && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  le,
  le
], Rr = () => {
  const t = ut && document.visibilityState;
  return S(t) || t !== "hidden";
}, gr = (t) => (ut && document.addEventListener("visibilitychange", t), lt("focus", t), () => {
  ut && document.removeEventListener("visibilitychange", t), ft("focus", t);
}), Sr = (t) => {
  const n = () => {
    ct = !0, t();
  }, a = () => {
    ct = !1;
  };
  return lt("online", n), lt("offline", a), () => {
    ft("online", n), ft("offline", a);
  };
}, mr = {
  isOnline: hr,
  isVisible: Rr
}, yr = {
  initFocus: gr,
  initReconnect: Sr
}, Dt = !oe.useId, Fe = !Be || "Deno" in window, Or = (t) => _r() ? window.requestAnimationFrame(t) : setTimeout(t, 1), nt = Fe ? or : ar, ot = typeof navigator < "u" && navigator.connection, At = !Fe && ot && ([
  "slow-2g",
  "2g"
].includes(ot.effectiveType) || ot.saveData), Et = (t) => {
  if (ne(t))
    try {
      t = t();
    } catch {
      t = "";
    }
  const n = t;
  return t = typeof t == "string" ? t : (Array.isArray(t) ? t.length : t) ? je(t) : "", [
    t,
    n
  ];
};
let Tr = 0;
const dt = () => ++Tr, It = 0, Vt = 1, jt = 2, br = 3;
var Ie = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: br,
  FOCUS_EVENT: It,
  MUTATE_EVENT: jt,
  RECONNECT_EVENT: Vt
};
async function Ft(...t) {
  const [n, a, l, i] = t, f = fe({
    populateCache: !0,
    throwOnError: !0
  }, typeof i == "boolean" ? {
    revalidate: i
  } : i || {});
  let E = f.populateCache;
  const m = f.rollbackOnError;
  let d = f.optimisticData;
  const I = (v) => typeof m == "function" ? m(v) : m !== !1, h = f.throwOnError;
  if (ne(a)) {
    const v = a, p = [], U = n.keys();
    for (const O of U)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(O) && v(n.get(O)._k) && p.push(O);
    return Promise.all(p.map(u));
  }
  return u(a);
  async function u(v) {
    const [p] = Et(v);
    if (!p) return;
    const [U, O] = Pt(n, p), [Z, s, P, L] = ce.get(n), g = () => {
      const V = Z[p];
      return (ne(f.revalidate) ? f.revalidate(U().data, v) : f.revalidate !== !1) && (delete P[p], delete L[p], V && V[0]) ? V[0](jt).then(() => U().data) : U().data;
    };
    if (t.length < 3)
      return g();
    let b = l, y;
    const B = dt();
    s[p] = [
      B,
      0
    ];
    const w = !S(d), F = U(), $ = F.data, ee = F._c, te = S(ee) ? $ : ee;
    if (w && (d = ne(d) ? d(te, $) : d, O({
      data: d,
      _c: te
    })), ne(b))
      try {
        b = b(te);
      } catch (V) {
        y = V;
      }
    if (b && Er(b))
      if (b = await b.catch((V) => {
        y = V;
      }), B !== s[p][0]) {
        if (y) throw y;
        return b;
      } else y && w && I(y) && (E = !0, O({
        data: te,
        _c: J
      }));
    if (E && !y)
      if (ne(E)) {
        const V = E(b, te);
        O({
          data: V,
          error: J,
          _c: J
        });
      } else
        O({
          data: b,
          error: J,
          _c: J
        });
    if (s[p][1] = dt(), Promise.resolve(g()).then(() => {
      O({
        _c: J
      });
    }), y) {
      if (h) throw y;
      return;
    }
    return b;
  }
}
const xt = (t, n) => {
  for (const a in t)
    t[a][0] && t[a][0](n);
}, wr = (t, n) => {
  if (!ce.has(t)) {
    const a = fe(yr, n), l = {}, i = Ft.bind(J, t);
    let f = le;
    const E = {}, m = (h, u) => {
      const v = E[h] || [];
      return E[h] = v, v.push(u), () => v.splice(v.indexOf(u), 1);
    }, d = (h, u, v) => {
      t.set(h, u);
      const p = E[h];
      if (p)
        for (const U of p)
          U(u, v);
    }, I = () => {
      if (!ce.has(t) && (ce.set(t, [
        l,
        {},
        {},
        {},
        i,
        d,
        m
      ]), !Fe)) {
        const h = a.initFocus(setTimeout.bind(J, xt.bind(J, l, It))), u = a.initReconnect(setTimeout.bind(J, xt.bind(J, l, Vt)));
        f = () => {
          h && h(), u && u(), ce.delete(t);
        };
      }
    };
    return I(), [
      t,
      i,
      I,
      f
    ];
  }
  return [
    t,
    ce.get(t)[4]
  ];
}, Cr = (t, n, a, l, i) => {
  const f = a.errorRetryCount, E = i.retryCount, m = ~~((Math.random() + 0.5) * (1 << (E < 8 ? E : 8))) * a.errorRetryInterval;
  !S(f) && E > f || setTimeout(l, m, i);
}, Dr = (t, n) => je(t) == je(n), [Nt, Ar] = wr(/* @__PURE__ */ new Map()), xr = fe(
  {
    // events
    onLoadingSlow: le,
    onSuccess: le,
    onError: le,
    onErrorRetry: Cr,
    onDiscarded: le,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: At ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: At ? 5e3 : 3e3,
    // providers
    compare: Dr,
    isPaused: () => !1,
    cache: Nt,
    mutate: Ar,
    fallback: {}
  },
  // use web preset by default
  mr
), Lr = (t, n) => {
  const a = fe(t, n);
  if (n) {
    const { use: l, fallback: i } = t, { use: f, fallback: E } = n;
    l && f && (a.use = l.concat(f)), i && E && (a.fallback = fe(i, E));
  }
  return a;
}, Pr = rr({}), Ir = "$inf$", kt = Be && window.__SWR_DEVTOOLS_USE__, Vr = kt ? window.__SWR_DEVTOOLS_USE__ : [], jr = () => {
  kt && (window.__SWR_DEVTOOLS_REACT__ = oe);
}, Fr = (t) => ne(t[1]) ? [
  t[0],
  t[1],
  t[2] || {}
] : [
  t[0],
  null,
  (t[1] === null ? t[2] : t[1]) || {}
], Nr = () => fe(xr, nr(Pr)), kr = (t) => (n, a, l) => t(n, a && ((...f) => {
  const [E] = Et(n), [, , , m] = ce.get(Nt);
  if (E.startsWith(Ir))
    return a(...f);
  const d = m[E];
  return S(d) ? a(...f) : (delete m[E], d);
}), l), Wr = Vr.concat(kr), Ur = (t) => function(...a) {
  const l = Nr(), [i, f, E] = Fr(a), m = Lr(l, E);
  let d = t;
  const { use: I } = m, h = (I || []).concat(Wr);
  for (let u = h.length; u--; )
    d = h[u](d);
  return d(i, f || m.fetcher || null, m);
}, Mr = (t, n, a) => {
  const l = n[t] || (n[t] = []);
  return l.push(a), () => {
    const i = l.indexOf(a);
    i >= 0 && (l[i] = l[l.length - 1], l.pop());
  };
};
jr();
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
}), at = {
  dedupe: !0
}, $r = (t, n, a) => {
  const { cache: l, compare: i, suspense: f, fallbackData: E, revalidateOnMount: m, revalidateIfStale: d, refreshInterval: I, refreshWhenHidden: h, refreshWhenOffline: u, keepPreviousData: v } = a, [p, U, O, Z] = ce.get(l), [s, P] = Et(t), L = _e(!1), g = _e(!1), b = _e(s), y = _e(n), B = _e(a), w = () => B.current, F = () => w().isVisible() && w().isOnline(), [$, ee, te, V] = Pt(l, s), H = _e({}).current, de = S(E) ? a.fallback[s] : E, be = (C, D) => {
    for (const M in H) {
      const x = M;
      if (x === "data") {
        if (!i(C[x], D[x]) && (!S(C[x]) || !i(he, D[x])))
          return !1;
      } else if (D[x] !== C[x])
        return !1;
    }
    return !0;
  }, we = ir(() => {
    const C = !s || !n ? !1 : S(m) ? w().isPaused() || f ? !1 : S(d) ? !0 : d : m, D = (k) => {
      const Q = fe(k);
      return delete Q._k, C ? {
        isValidating: !0,
        isLoading: !0,
        ...Q
      } : Q;
    }, M = $(), x = V(), Y = D(M), ue = M === x ? Y : D(x);
    let N = Y;
    return [
      () => {
        const k = D($());
        return be(k, N) ? (N.data = k.data, N.isLoading = k.isLoading, N.isValidating = k.isValidating, N.error = k.error, N) : (N = k, k);
      },
      () => ue
    ];
  }, [
    l,
    s
  ]), ae = vr.useSyncExternalStore(Xe(
    (C) => te(s, (D, M) => {
      be(M, D) || C();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      s
    ]
  ), we[0], we[1]), Ce = !L.current, Ne = p[s] && p[s].length > 0, ie = ae.data, se = S(ie) ? de : ie, ve = ae.error, ke = _e(se), he = v ? S(ie) ? ke.current : ie : se, Re = Ne && !S(ve) ? !1 : Ce && !S(m) ? m : w().isPaused() ? !1 : f ? S(se) ? !1 : d : S(se) || d, ge = !!(s && n && Ce && Re), Se = S(ae.isValidating) ? ge : ae.isValidating, De = S(ae.isLoading) ? ge : ae.isLoading, re = Xe(
    async (C) => {
      const D = y.current;
      if (!s || !D || g.current || w().isPaused())
        return !1;
      let M, x, Y = !0;
      const ue = C || {}, N = !O[s] || !ue.dedupe, k = () => Dt ? !g.current && s === b.current && L.current : s === b.current, Q = {
        isValidating: !1,
        isLoading: !1
      }, Ue = () => {
        ee(Q);
      }, me = () => {
        const K = O[s];
        K && K[1] === x && delete O[s];
      }, Me = {
        isValidating: !0
      };
      S($().data) && (Me.isLoading = !0);
      try {
        if (N && (ee(Me), a.loadingTimeout && S($().data) && setTimeout(() => {
          Y && k() && w().onLoadingSlow(s, a);
        }, a.loadingTimeout), O[s] = [
          D(P),
          dt()
        ]), [M, x] = O[s], M = await M, N && setTimeout(me, a.dedupingInterval), !O[s] || O[s][1] !== x)
          return N && k() && w().onDiscarded(s), !1;
        Q.error = J;
        const K = U[s];
        if (!S(K) && // case 1
        (x <= K[0] || // case 2
        x <= K[1] || // case 3
        K[1] === 0))
          return Ue(), N && k() && w().onDiscarded(s), !1;
        const z = $().data;
        Q.data = i(z, M) ? z : M, N && k() && w().onSuccess(M, s, a);
      } catch (K) {
        me();
        const z = w(), { shouldRetryOnError: ye } = z;
        z.isPaused() || (Q.error = K, N && k() && (z.onError(K, s, z), (ye === !0 || ne(ye) && ye(K)) && (!w().revalidateOnFocus || !w().revalidateOnReconnect || F()) && z.onErrorRetry(K, s, z, (Ee) => {
          const Ae = p[s];
          Ae && Ae[0] && Ae[0](Ie.ERROR_REVALIDATE_EVENT, Ee);
        }, {
          retryCount: (ue.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return Y = !1, Ue(), !0;
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
      s,
      l
    ]
  ), We = Xe(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...C) => Ft(l, b.current, ...C),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (nt(() => {
    y.current = n, B.current = a, S(ie) || (ke.current = ie);
  }), nt(() => {
    if (!s) return;
    const C = re.bind(J, at);
    let D = 0;
    const x = Mr(s, p, (Y, ue = {}) => {
      if (Y == Ie.FOCUS_EVENT) {
        const N = Date.now();
        w().revalidateOnFocus && N > D && F() && (D = N + w().focusThrottleInterval, C());
      } else if (Y == Ie.RECONNECT_EVENT)
        w().revalidateOnReconnect && F() && C();
      else {
        if (Y == Ie.MUTATE_EVENT)
          return re();
        if (Y == Ie.ERROR_REVALIDATE_EVENT)
          return re(ue);
      }
    });
    return g.current = !1, b.current = s, L.current = !0, ee({
      _k: P
    }), Re && (S(se) || Fe ? C() : Or(C)), () => {
      g.current = !0, x();
    };
  }, [
    s
  ]), nt(() => {
    let C;
    function D() {
      const x = ne(I) ? I($().data) : I;
      x && C !== -1 && (C = setTimeout(M, x));
    }
    function M() {
      !$().error && (h || w().isVisible()) && (u || w().isOnline()) ? re(at).then(D) : D();
    }
    return D(), () => {
      C && (clearTimeout(C), C = -1);
    };
  }, [
    I,
    h,
    u,
    s
  ]), sr(he), f && S(se) && s) {
    if (!Dt && Fe)
      throw new Error("Fallback data is required when using suspense in SSR.");
    y.current = n, B.current = a, g.current = !1;
    const C = Z[s];
    if (!S(C)) {
      const D = We(C);
      Lt(D);
    }
    if (S(ve)) {
      const D = re(at);
      S(he) || (D.status = "fulfilled", D.value = !0), Lt(D);
    } else
      throw ve;
  }
  return {
    mutate: We,
    get data() {
      return H.data = !0, he;
    },
    get error() {
      return H.error = !0, ve;
    },
    get isValidating() {
      return H.isValidating = !0, Se;
    },
    get isLoading() {
      return H.isLoading = !0, De;
    }
  };
}, Yr = Ur($r), qr = (t) => fetch(t).then((n) => n.json()), Br = () => {
  oe.useState(1), oe.useState(0);
  const { data: t, isLoading: n, error: a } = Yr(
    "https://www.data.act.gov.au/resource/d56a-2nhi.json",
    qr
  );
  return n ? /* @__PURE__ */ Ze.jsx("p", { children: "Loading..." }) : a ? /* @__PURE__ */ Ze.jsx("p", { children: "Error..." }) : (t && console.log(t), /* @__PURE__ */ Ze.jsx("div", { children: "See console.log for the data" }));
};
customElements.define(
  "data-card",
  class extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      var a;
      const t = document.createElement("div");
      (a = this.shadowRoot) == null || a.appendChild(t), Ve.createRoot(t).render(
        oe.createElement(Br, { data: this.getAttribute("data") })
      );
    }
  }
);
