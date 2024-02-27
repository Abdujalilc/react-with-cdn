/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("react"), require("@remix-run/router"))
        : "function" == typeof define && define.amd
        ? define(["exports", "react", "@remix-run/router"], t)
        : t(
              ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).ReactRouter = {}),
              e.React,
              e.RemixRouter
          );
})(this, function (e, t, r) {
    "use strict";
    function n(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
                Object.keys(e).forEach(function (r) {
                    if ("default" !== r) {
                        var n = Object.getOwnPropertyDescriptor(e, r);
                        Object.defineProperty(
                            t,
                            r,
                            n.get
                                ? n
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return e[r];
                                      },
                                  }
                        );
                    }
                }),
            (t.default = e),
            Object.freeze(t)
        );
    }
    var a = n(t);
    function o() {
        return (
            (o = Object.assign
                ? Object.assign.bind()
                : function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var r = arguments[t];
                          for (var n in r)
                              Object.prototype.hasOwnProperty.call(r, n) &&
                                  (e[n] = r[n]);
                      }
                      return e;
                  }),
            o.apply(this, arguments)
        );
    }
    const i = a.createContext(null),
        u = a.createContext(null),
        l = a.createContext(null),
        s = a.createContext(null),
        c = a.createContext(null),
        d = a.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        p = a.createContext(null);
    function f() {
        return null != a.useContext(c);
    }
    function m() {
        return f() || r.UNSAFE_invariant(!1), a.useContext(c).location;
    }
    function v(e) {
        a.useContext(s).static || a.useLayoutEffect(e);
    }
    function h() {
        let { isDataRoute: e } = a.useContext(d);
        return e
            ? (function () {
                  let { router: e } = O(_.UseNavigateStable),
                      t = j(N.UseNavigateStable),
                      r = a.useRef(!1);
                  return (
                      v(() => {
                          r.current = !0;
                      }),
                      a.useCallback(
                          function (n, a) {
                              void 0 === a && (a = {}),
                                  r.current &&
                                      ("number" == typeof n
                                          ? e.navigate(n)
                                          : e.navigate(
                                                n,
                                                o({ fromRouteId: t }, a)
                                            ));
                          },
                          [e, t]
                      )
                  );
              })()
            : (function () {
                  f() || r.UNSAFE_invariant(!1);
                  let e = a.useContext(i),
                      {
                          basename: t,
                          future: n,
                          navigator: o,
                      } = a.useContext(s),
                      { matches: u } = a.useContext(d),
                      { pathname: l } = m(),
                      c = JSON.stringify(
                          r.UNSAFE_getResolveToMatches(
                              u,
                              n.v7_relativeSplatPath
                          )
                      ),
                      p = a.useRef(!1);
                  return (
                      v(() => {
                          p.current = !0;
                      }),
                      a.useCallback(
                          function (n, a) {
                              if ((void 0 === a && (a = {}), !p.current))
                                  return;
                              if ("number" == typeof n) return void o.go(n);
                              let i = r.resolveTo(
                                  n,
                                  JSON.parse(c),
                                  l,
                                  "path" === a.relative
                              );
                              null == e &&
                                  "/" !== t &&
                                  (i.pathname =
                                      "/" === i.pathname
                                          ? t
                                          : r.joinPaths([t, i.pathname])),
                                  (a.replace ? o.replace : o.push)(
                                      i,
                                      a.state,
                                      a
                                  );
                          },
                          [t, o, c, l, e]
                      )
                  );
              })();
    }
    const E = a.createContext(null);
    function g(e) {
        let t = a.useContext(d).outlet;
        return t ? a.createElement(E.Provider, { value: e }, t) : t;
    }
    function y(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
            { future: o } = a.useContext(s),
            { matches: i } = a.useContext(d),
            { pathname: u } = m(),
            l = JSON.stringify(
                r.UNSAFE_getResolveToMatches(i, o.v7_relativeSplatPath)
            );
        return a.useMemo(
            () => r.resolveTo(e, JSON.parse(l), u, "path" === n),
            [e, l, u, n]
        );
    }
    function b(e, t) {
        return R(e, t);
    }
    function R(e, t, n, i) {
        f() || r.UNSAFE_invariant(!1);
        let { navigator: u } = a.useContext(s),
            { matches: l } = a.useContext(d),
            p = l[l.length - 1],
            v = p ? p.params : {};
        !p || p.pathname;
        let h = p ? p.pathnameBase : "/";
        p && p.route;
        let E,
            g = m();
        if (t) {
            var y;
            let e = "string" == typeof t ? r.parsePath(t) : t;
            "/" === h ||
                (null == (y = e.pathname) ? void 0 : y.startsWith(h)) ||
                r.UNSAFE_invariant(!1),
                (E = e);
        } else E = g;
        let b = E.pathname || "/",
            R = b;
        if ("/" !== h) {
            let e = h.replace(/^\//, "").split("/");
            R = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let P = r.matchRoutes(e, { pathname: R }),
            x = U(
                P &&
                    P.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, v, e.params),
                            pathname: r.joinPaths([
                                h,
                                u.encodeLocation
                                    ? u.encodeLocation(e.pathname).pathname
                                    : e.pathname,
                            ]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? h
                                    : r.joinPaths([
                                          h,
                                          u.encodeLocation
                                              ? u.encodeLocation(e.pathnameBase)
                                                    .pathname
                                              : e.pathnameBase,
                                      ]),
                        })
                    ),
                l,
                n,
                i
            );
        return t && x
            ? a.createElement(
                  c.Provider,
                  {
                      value: {
                          location: o(
                              {
                                  pathname: "/",
                                  search: "",
                                  hash: "",
                                  state: null,
                                  key: "default",
                              },
                              E
                          ),
                          navigationType: r.Action.Pop,
                      },
                  },
                  x
              )
            : x;
    }
    function P() {
        let e = F(),
            t = r.isRouteErrorResponse(e)
                ? e.status + " " + e.statusText
                : e instanceof Error
                ? e.message
                : JSON.stringify(e),
            n = e instanceof Error ? e.stack : null,
            o = {
                padding: "0.5rem",
                backgroundColor: "rgba(200,200,200, 0.5)",
            };
        return a.createElement(
            a.Fragment,
            null,
            a.createElement("h2", null, "Unexpected Application Error!"),
            a.createElement("h3", { style: { fontStyle: "italic" } }, t),
            n ? a.createElement("pre", { style: o }, n) : null,
            null
        );
    }
    const x = a.createElement(P, null);
    class C extends a.Component {
        constructor(e) {
            super(e),
                (this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error,
                });
        }
        static getDerivedStateFromError(e) {
            return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
            return t.location !== e.location ||
                ("idle" !== t.revalidation && "idle" === e.revalidation)
                ? {
                      error: e.error,
                      location: e.location,
                      revalidation: e.revalidation,
                  }
                : {
                      error: void 0 !== e.error ? e.error : t.error,
                      location: t.location,
                      revalidation: e.revalidation || t.revalidation,
                  };
        }
        componentDidCatch(e, t) {
            console.error(
                "React Router caught the following error during render",
                e,
                t
            );
        }
        render() {
            return void 0 !== this.state.error
                ? a.createElement(
                      d.Provider,
                      { value: this.props.routeContext },
                      a.createElement(p.Provider, {
                          value: this.state.error,
                          children: this.props.component,
                      })
                  )
                : this.props.children;
        }
    }
    function S(e) {
        let { routeContext: t, match: r, children: n } = e,
            o = a.useContext(i);
        return (
            o &&
                o.static &&
                o.staticContext &&
                (r.route.errorElement || r.route.ErrorBoundary) &&
                (o.staticContext._deepestRenderedBoundaryId = r.route.id),
            a.createElement(d.Provider, { value: t }, n)
        );
    }
    function U(e, t, n, o) {
        var i;
        if (
            (void 0 === t && (t = []),
            void 0 === n && (n = null),
            void 0 === o && (o = null),
            null == e)
        ) {
            var u;
            if (null == (u = n) || !u.errors) return null;
            e = n.matches;
        }
        let l = e,
            s = null == (i = n) ? void 0 : i.errors;
        if (null != s) {
            let e = l.findIndex(
                (e) => e.route.id && (null == s ? void 0 : s[e.route.id])
            );
            e >= 0 || r.UNSAFE_invariant(!1),
                (l = l.slice(0, Math.min(l.length, e + 1)));
        }
        let c = !1,
            d = -1;
        if (n && o && o.v7_partialHydration)
            for (let e = 0; e < l.length; e++) {
                let t = l[e];
                if (
                    ((t.route.HydrateFallback ||
                        t.route.hydrateFallbackElement) &&
                        (d = e),
                    t.route.id)
                ) {
                    let { loaderData: e, errors: r } = n,
                        a =
                            t.route.loader &&
                            void 0 === e[t.route.id] &&
                            (!r || void 0 === r[t.route.id]);
                    if (t.route.lazy || a) {
                        (c = !0), (l = d >= 0 ? l.slice(0, d + 1) : [l[0]]);
                        break;
                    }
                }
            }
        return l.reduceRight((e, r, o) => {
            let i,
                u = !1,
                p = null,
                f = null;
            var m;
            n &&
                ((i = s && r.route.id ? s[r.route.id] : void 0),
                (p = r.route.errorElement || x),
                c &&
                    (d < 0 && 0 === o
                        ? ((m = "route-fallback"),
                          !1 || B[m] || (B[m] = !0),
                          (u = !0),
                          (f = null))
                        : d === o &&
                          ((u = !0),
                          (f = r.route.hydrateFallbackElement || null))));
            let v = t.concat(l.slice(0, o + 1)),
                h = () => {
                    let t;
                    return (
                        (t = i
                            ? p
                            : u
                            ? f
                            : r.route.Component
                            ? a.createElement(r.route.Component, null)
                            : r.route.element
                            ? r.route.element
                            : e),
                        a.createElement(S, {
                            match: r,
                            routeContext: {
                                outlet: e,
                                matches: v,
                                isDataRoute: null != n,
                            },
                            children: t,
                        })
                    );
                };
            return n &&
                (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
                ? a.createElement(C, {
                      location: n.location,
                      revalidation: n.revalidation,
                      component: p,
                      error: i,
                      children: h(),
                      routeContext: {
                          outlet: null,
                          matches: v,
                          isDataRoute: !0,
                      },
                  })
                : h();
        }, null);
    }
    var _ = (function (e) {
            return (
                (e.UseBlocker = "useBlocker"),
                (e.UseRevalidator = "useRevalidator"),
                (e.UseNavigateStable = "useNavigate"),
                e
            );
        })(_ || {}),
        N = (function (e) {
            return (
                (e.UseBlocker = "useBlocker"),
                (e.UseLoaderData = "useLoaderData"),
                (e.UseActionData = "useActionData"),
                (e.UseRouteError = "useRouteError"),
                (e.UseNavigation = "useNavigation"),
                (e.UseRouteLoaderData = "useRouteLoaderData"),
                (e.UseMatches = "useMatches"),
                (e.UseRevalidator = "useRevalidator"),
                (e.UseNavigateStable = "useNavigate"),
                (e.UseRouteId = "useRouteId"),
                e
            );
        })(N || {});
    function O(e) {
        let t = a.useContext(i);
        return t || r.UNSAFE_invariant(!1), t;
    }
    function A(e) {
        let t = a.useContext(u);
        return t || r.UNSAFE_invariant(!1), t;
    }
    function j(e) {
        let t = (function (e) {
                let t = a.useContext(d);
                return t || r.UNSAFE_invariant(!1), t;
            })(),
            n = t.matches[t.matches.length - 1];
        return n.route.id || r.UNSAFE_invariant(!1), n.route.id;
    }
    function F() {
        var e;
        let t = a.useContext(p),
            r = A(N.UseRouteError),
            n = j(N.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n];
    }
    function D() {
        let e = a.useContext(l);
        return null == e ? void 0 : e._data;
    }
    let k = 0;
    const B = {};
    const L = a.startTransition;
    function M(e) {
        let { routes: t, future: r, state: n } = e;
        return R(t, void 0, n, r);
    }
    function T(e) {
        r.UNSAFE_invariant(!1);
    }
    function I(e) {
        let {
            basename: t = "/",
            children: n = null,
            location: i,
            navigationType: u = r.Action.Pop,
            navigator: l,
            static: d = !1,
            future: p,
        } = e;
        f() && r.UNSAFE_invariant(!1);
        let m = t.replace(/^\/*/, "/"),
            v = a.useMemo(
                () => ({
                    basename: m,
                    navigator: l,
                    static: d,
                    future: o({ v7_relativeSplatPath: !1 }, p),
                }),
                [m, p, l, d]
            );
        "string" == typeof i && (i = r.parsePath(i));
        let {
                pathname: h = "/",
                search: E = "",
                hash: g = "",
                state: y = null,
                key: b = "default",
            } = i,
            R = a.useMemo(() => {
                let e = r.stripBasename(h, m);
                return null == e
                    ? null
                    : {
                          location: {
                              pathname: e,
                              search: E,
                              hash: g,
                              state: y,
                              key: b,
                          },
                          navigationType: u,
                      };
            }, [m, h, E, g, y, b, u]);
        return null == R
            ? null
            : a.createElement(
                  s.Provider,
                  { value: v },
                  a.createElement(c.Provider, { children: n, value: R })
              );
    }
    var H = (function (e) {
        return (
            (e[(e.pending = 0)] = "pending"),
            (e[(e.success = 1)] = "success"),
            (e[(e.error = 2)] = "error"),
            e
        );
    })(H || {});
    const w = new Promise(() => {});
    class J extends a.Component {
        constructor(e) {
            super(e), (this.state = { error: null });
        }
        static getDerivedStateFromError(e) {
            return { error: e };
        }
        componentDidCatch(e, t) {
            console.error(
                "<Await> caught the following error during render",
                e,
                t
            );
        }
        render() {
            let { children: e, errorElement: t, resolve: n } = this.props,
                o = null,
                i = H.pending;
            if (n instanceof Promise)
                if (this.state.error) {
                    i = H.error;
                    let e = this.state.error;
                    (o = Promise.reject().catch(() => {})),
                        Object.defineProperty(o, "_tracked", { get: () => !0 }),
                        Object.defineProperty(o, "_error", { get: () => e });
                } else
                    n._tracked
                        ? ((o = n),
                          (i =
                              void 0 !== o._error
                                  ? H.error
                                  : void 0 !== o._data
                                  ? H.success
                                  : H.pending))
                        : ((i = H.pending),
                          Object.defineProperty(n, "_tracked", {
                              get: () => !0,
                          }),
                          (o = n.then(
                              (e) =>
                                  Object.defineProperty(n, "_data", {
                                      get: () => e,
                                  }),
                              (e) =>
                                  Object.defineProperty(n, "_error", {
                                      get: () => e,
                                  })
                          )));
            else
                (i = H.success),
                    (o = Promise.resolve()),
                    Object.defineProperty(o, "_tracked", { get: () => !0 }),
                    Object.defineProperty(o, "_data", { get: () => n });
            if (i === H.error && o._error instanceof r.AbortedDeferredError)
                throw w;
            if (i === H.error && !t) throw o._error;
            if (i === H.error)
                return a.createElement(l.Provider, { value: o, children: t });
            if (i === H.success)
                return a.createElement(l.Provider, { value: o, children: e });
            throw o;
        }
    }
    function z(e) {
        let { children: t } = e,
            r = D(),
            n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n);
    }
    function q(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
            a.Children.forEach(e, (e, o) => {
                if (!a.isValidElement(e)) return;
                let i = [...t, o];
                if (e.type === a.Fragment)
                    return void n.push.apply(n, q(e.props.children, i));
                e.type !== T && r.UNSAFE_invariant(!1),
                    e.props.index && e.props.children && r.UNSAFE_invariant(!1);
                let u = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary:
                        null != e.props.ErrorBoundary ||
                        null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy,
                };
                e.props.children && (u.children = q(e.props.children, i)),
                    n.push(u);
            }),
            n
        );
    }
    function V(e) {
        let t = {
            hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
            e.Component &&
                Object.assign(t, {
                    element: a.createElement(e.Component),
                    Component: void 0,
                }),
            e.HydrateFallback &&
                Object.assign(t, {
                    hydrateFallbackElement: a.createElement(e.HydrateFallback),
                    HydrateFallback: void 0,
                }),
            e.ErrorBoundary &&
                Object.assign(t, {
                    errorElement: a.createElement(e.ErrorBoundary),
                    ErrorBoundary: void 0,
                }),
            t
        );
    }
    Object.defineProperty(e, "AbortedDeferredError", {
        enumerable: !0,
        get: function () {
            return r.AbortedDeferredError;
        },
    }),
        Object.defineProperty(e, "NavigationType", {
            enumerable: !0,
            get: function () {
                return r.Action;
            },
        }),
        Object.defineProperty(e, "createPath", {
            enumerable: !0,
            get: function () {
                return r.createPath;
            },
        }),
        Object.defineProperty(e, "defer", {
            enumerable: !0,
            get: function () {
                return r.defer;
            },
        }),
        Object.defineProperty(e, "generatePath", {
            enumerable: !0,
            get: function () {
                return r.generatePath;
            },
        }),
        Object.defineProperty(e, "isRouteErrorResponse", {
            enumerable: !0,
            get: function () {
                return r.isRouteErrorResponse;
            },
        }),
        Object.defineProperty(e, "json", {
            enumerable: !0,
            get: function () {
                return r.json;
            },
        }),
        Object.defineProperty(e, "matchPath", {
            enumerable: !0,
            get: function () {
                return r.matchPath;
            },
        }),
        Object.defineProperty(e, "matchRoutes", {
            enumerable: !0,
            get: function () {
                return r.matchRoutes;
            },
        }),
        Object.defineProperty(e, "parsePath", {
            enumerable: !0,
            get: function () {
                return r.parsePath;
            },
        }),
        Object.defineProperty(e, "redirect", {
            enumerable: !0,
            get: function () {
                return r.redirect;
            },
        }),
        Object.defineProperty(e, "redirectDocument", {
            enumerable: !0,
            get: function () {
                return r.redirectDocument;
            },
        }),
        Object.defineProperty(e, "resolvePath", {
            enumerable: !0,
            get: function () {
                return r.resolvePath;
            },
        }),
        (e.Await = function (e) {
            let { children: t, errorElement: r, resolve: n } = e;
            return a.createElement(
                J,
                { resolve: n, errorElement: r },
                a.createElement(z, null, t)
            );
        }),
        (e.MemoryRouter = function (e) {
            let {
                    basename: t,
                    children: n,
                    initialEntries: o,
                    initialIndex: i,
                    future: u,
                } = e,
                l = a.useRef();
            null == l.current &&
                (l.current = r.createMemoryHistory({
                    initialEntries: o,
                    initialIndex: i,
                    v5Compat: !0,
                }));
            let s = l.current,
                [c, d] = a.useState({ action: s.action, location: s.location }),
                { v7_startTransition: p } = u || {},
                f = a.useCallback(
                    (e) => {
                        p && L ? L(() => d(e)) : d(e);
                    },
                    [d, p]
                );
            return (
                a.useLayoutEffect(() => s.listen(f), [s, f]),
                a.createElement(I, {
                    basename: t,
                    children: n,
                    location: c.location,
                    navigationType: c.action,
                    navigator: s,
                    future: u,
                })
            );
        }),
        (e.Navigate = function (e) {
            let { to: t, replace: n, state: o, relative: i } = e;
            f() || r.UNSAFE_invariant(!1);
            let { future: u, static: l } = a.useContext(s),
                { matches: c } = a.useContext(d),
                { pathname: p } = m(),
                v = h(),
                E = r.resolveTo(
                    t,
                    r.UNSAFE_getResolveToMatches(c, u.v7_relativeSplatPath),
                    p,
                    "path" === i
                ),
                g = JSON.stringify(E);
            return (
                a.useEffect(
                    () =>
                        v(JSON.parse(g), { replace: n, state: o, relative: i }),
                    [v, g, i, n, o]
                ),
                null
            );
        }),
        (e.Outlet = function (e) {
            return g(e.context);
        }),
        (e.Route = T),
        (e.Router = I),
        (e.RouterProvider = function (e) {
            let { fallbackElement: t, router: r, future: n } = e,
                [o, l] = a.useState(r.state),
                { v7_startTransition: s } = n || {},
                c = a.useCallback(
                    (e) => {
                        s && L ? L(() => l(e)) : l(e);
                    },
                    [l, s]
                );
            a.useLayoutEffect(() => r.subscribe(c), [r, c]),
                a.useEffect(() => {}, []);
            let d = a.useMemo(
                    () => ({
                        createHref: r.createHref,
                        encodeLocation: r.encodeLocation,
                        go: (e) => r.navigate(e),
                        push: (e, t, n) =>
                            r.navigate(e, {
                                state: t,
                                preventScrollReset:
                                    null == n ? void 0 : n.preventScrollReset,
                            }),
                        replace: (e, t, n) =>
                            r.navigate(e, {
                                replace: !0,
                                state: t,
                                preventScrollReset:
                                    null == n ? void 0 : n.preventScrollReset,
                            }),
                    }),
                    [r]
                ),
                p = r.basename || "/",
                f = a.useMemo(
                    () => ({
                        router: r,
                        navigator: d,
                        static: !1,
                        basename: p,
                    }),
                    [r, d, p]
                );
            return a.createElement(
                a.Fragment,
                null,
                a.createElement(
                    i.Provider,
                    { value: f },
                    a.createElement(
                        u.Provider,
                        { value: o },
                        a.createElement(
                            I,
                            {
                                basename: p,
                                location: o.location,
                                navigationType: o.historyAction,
                                navigator: d,
                                future: {
                                    v7_relativeSplatPath:
                                        r.future.v7_relativeSplatPath,
                                },
                            },
                            o.initialized || r.future.v7_partialHydration
                                ? a.createElement(M, {
                                      routes: r.routes,
                                      future: r.future,
                                      state: o,
                                  })
                                : t
                        )
                    )
                ),
                null
            );
        }),
        (e.Routes = function (e) {
            let { children: t, location: r } = e;
            return b(q(t), r);
        }),
        (e.UNSAFE_DataRouterContext = i),
        (e.UNSAFE_DataRouterStateContext = u),
        (e.UNSAFE_LocationContext = c),
        (e.UNSAFE_NavigationContext = s),
        (e.UNSAFE_RouteContext = d),
        (e.UNSAFE_mapRouteProperties = V),
        (e.UNSAFE_useRouteId = function () {
            return j(N.UseRouteId);
        }),
        (e.UNSAFE_useRoutesImpl = R),
        (e.createMemoryRouter = function (e, t) {
            return r
                .createRouter({
                    basename: null == t ? void 0 : t.basename,
                    future: o({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0,
                    }),
                    history: r.createMemoryHistory({
                        initialEntries: null == t ? void 0 : t.initialEntries,
                        initialIndex: null == t ? void 0 : t.initialIndex,
                    }),
                    hydrationData: null == t ? void 0 : t.hydrationData,
                    routes: e,
                    mapRouteProperties: V,
                })
                .initialize();
        }),
        (e.createRoutesFromChildren = q),
        (e.createRoutesFromElements = q),
        (e.renderMatches = function (e) {
            return U(e);
        }),
        (e.useActionData = function () {
            let e = A(N.UseActionData),
                t = j(N.UseLoaderData);
            return e.actionData ? e.actionData[t] : void 0;
        }),
        (e.useAsyncError = function () {
            let e = a.useContext(l);
            return null == e ? void 0 : e._error;
        }),
        (e.useAsyncValue = D),
        (e.useBlocker = function (e) {
            let { router: t, basename: n } = O(_.UseBlocker),
                i = A(N.UseBlocker),
                [u, l] = a.useState(""),
                s = a.useCallback(
                    (t) => {
                        if ("function" != typeof e) return !!e;
                        if ("/" === n) return e(t);
                        let {
                            currentLocation: a,
                            nextLocation: i,
                            historyAction: u,
                        } = t;
                        return e({
                            currentLocation: o({}, a, {
                                pathname:
                                    r.stripBasename(a.pathname, n) ||
                                    a.pathname,
                            }),
                            nextLocation: o({}, i, {
                                pathname:
                                    r.stripBasename(i.pathname, n) ||
                                    i.pathname,
                            }),
                            historyAction: u,
                        });
                    },
                    [n, e]
                );
            return (
                a.useEffect(() => {
                    let e = String(++k);
                    return l(e), () => t.deleteBlocker(e);
                }, [t]),
                a.useEffect(() => {
                    "" !== u && t.getBlocker(u, s);
                }, [t, u, s]),
                u && i.blockers.has(u) ? i.blockers.get(u) : r.IDLE_BLOCKER
            );
        }),
        (e.useHref = function (e, t) {
            let { relative: n } = void 0 === t ? {} : t;
            f() || r.UNSAFE_invariant(!1);
            let { basename: o, navigator: i } = a.useContext(s),
                { hash: u, pathname: l, search: c } = y(e, { relative: n }),
                d = l;
            return (
                "/" !== o && (d = "/" === l ? o : r.joinPaths([o, l])),
                i.createHref({ pathname: d, search: c, hash: u })
            );
        }),
        (e.useInRouterContext = f),
        (e.useLoaderData = function () {
            let e = A(N.UseLoaderData),
                t = j(N.UseLoaderData);
            if (!e.errors || null == e.errors[t]) return e.loaderData[t];
            console.error(
                "You cannot `useLoaderData` in an errorElement (routeId: " +
                    t +
                    ")"
            );
        }),
        (e.useLocation = m),
        (e.useMatch = function (e) {
            f() || r.UNSAFE_invariant(!1);
            let { pathname: t } = m();
            return a.useMemo(() => r.matchPath(e, t), [t, e]);
        }),
        (e.useMatches = function () {
            let { matches: e, loaderData: t } = A(N.UseMatches);
            return a.useMemo(
                () => e.map((e) => r.UNSAFE_convertRouteMatchToUiMatch(e, t)),
                [e, t]
            );
        }),
        (e.useNavigate = h),
        (e.useNavigation = function () {
            return A(N.UseNavigation).navigation;
        }),
        (e.useNavigationType = function () {
            return a.useContext(c).navigationType;
        }),
        (e.useOutlet = g),
        (e.useOutletContext = function () {
            return a.useContext(E);
        }),
        (e.useParams = function () {
            let { matches: e } = a.useContext(d),
                t = e[e.length - 1];
            return t ? t.params : {};
        }),
        (e.useResolvedPath = y),
        (e.useRevalidator = function () {
            let e = O(_.UseRevalidator),
                t = A(N.UseRevalidator);
            return a.useMemo(
                () => ({
                    revalidate: e.router.revalidate,
                    state: t.revalidation,
                }),
                [e.router.revalidate, t.revalidation]
            );
        }),
        (e.useRouteError = F),
        (e.useRouteLoaderData = function (e) {
            return A(N.UseRouteLoaderData).loaderData[e];
        }),
        (e.useRoutes = b),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=react-router.production.min.js.map
