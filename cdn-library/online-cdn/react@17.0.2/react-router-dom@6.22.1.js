/**
 * React Router DOM v6.22.1
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
        ? t(
            exports,
            require("react"),
            require("react-dom"),
            require("react-router"),
            require("@remix-run/router")
        )
        : "function" == typeof define && define.amd
            ? define(
                [
                    "exports",
                    "react",
                    "react-dom",
                    "react-router",
                    "@remix-run/router",
                ],
                t
            )
            : t(
                ((e =
                    "undefined" != typeof globalThis
                        ? globalThis
                        : e || self).ReactRouterDOM = {}),
                e.React,
                e.ReactDOM,
                e.ReactRouter,
                e.RemixRouter
            );
})(this, function (e, t, n, r, o) {
    "use strict";
    function a(e) {
        if (e && e.__esModule) return e;
        var t = Object.create(null);
        return (
            e &&
            Object.keys(e).forEach(function (n) {
                if ("default" !== n) {
                    var r = Object.getOwnPropertyDescriptor(e, n);
                    Object.defineProperty(
                        t,
                        n,
                        r.get
                            ? r
                            : {
                                enumerable: !0,
                                get: function () {
                                    return e[n];
                                },
                            }
                    );
                }
            }),
            (t.default = e),
            Object.freeze(t)
        );
    }
    var i = a(t),
        u = a(n);
    function s() {
        return (
            (s = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                }),
            s.apply(this, arguments)
        );
    }
    function c(e, t) {
        if (null == e) return {};
        var n,
            r,
            o = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
    }
    const l = "get",
        f = "application/x-www-form-urlencoded";
    function d(e) {
        return null != e && "string" == typeof e.tagName;
    }
    function m(e) {
        return (
            void 0 === e && (e = ""),
            new URLSearchParams(
                "string" == typeof e ||
                    Array.isArray(e) ||
                    e instanceof URLSearchParams
                    ? e
                    : Object.keys(e).reduce((t, n) => {
                        let r = e[n];
                        return t.concat(
                            Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]
                        );
                    }, [])
            )
        );
    }
    let p = null;
    const b = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
    ]);
    function h(e) {
        return null == e || b.has(e) ? e : null;
    }
    function v(e, t) {
        let n, r, a, i, u;
        if (d((s = e)) && "form" === s.tagName.toLowerCase()) {
            let u = e.getAttribute("action");
            (r = u ? o.stripBasename(u, t) : null),
                (n = e.getAttribute("method") || l),
                (a = h(e.getAttribute("enctype")) || f),
                (i = new FormData(e));
        } else if (
            (function (e) {
                return d(e) && "button" === e.tagName.toLowerCase();
            })(e) ||
            ((function (e) {
                return d(e) && "input" === e.tagName.toLowerCase();
            })(e) &&
                ("submit" === e.type || "image" === e.type))
        ) {
            let u = e.form;
            if (null == u)
                throw new Error(
                    'Cannot submit a <button> or <input type="submit"> without a <form>'
                );
            let s = e.getAttribute("formaction") || u.getAttribute("action");
            if (
                ((r = s ? o.stripBasename(s, t) : null),
                    (n =
                        e.getAttribute("formmethod") ||
                        u.getAttribute("method") ||
                        l),
                    (a =
                        h(e.getAttribute("formenctype")) ||
                        h(u.getAttribute("enctype")) ||
                        f),
                    (i = new FormData(u, e)),
                    !(function () {
                        if (null === p)
                            try {
                                new FormData(document.createElement("form"), 0),
                                    (p = !1);
                            } catch (e) {
                                p = !0;
                            }
                        return p;
                    })())
            ) {
                let { name: t, type: n, value: r } = e;
                if ("image" === n) {
                    let e = t ? t + "." : "";
                    i.append(e + "x", "0"), i.append(e + "y", "0");
                } else t && i.append(t, r);
            }
        } else {
            if (d(e))
                throw new Error(
                    'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                );
            (n = l), (r = null), (a = f), (u = e);
        }
        var s;
        return (
            i && "text/plain" === a && ((u = i), (i = void 0)),
            {
                action: r,
                method: n.toLowerCase(),
                encType: a,
                formData: i,
                body: u,
            }
        );
    }
    const y = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
    ],
        g = [
            "aria-current",
            "caseSensitive",
            "className",
            "end",
            "style",
            "to",
            "unstable_viewTransition",
            "children",
        ],
        w = [
            "fetcherKey",
            "navigate",
            "reloadDocument",
            "replace",
            "state",
            "method",
            "action",
            "onSubmit",
            "relative",
            "preventScrollReset",
            "unstable_viewTransition",
        ];
    try {
        window.__reactRouterVersion = "6";
    } catch (e) { }
    function R() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = s({}, t, { errors: S(t.errors) })), t;
    }
    function S(e) {
        if (!e) return null;
        let t = Object.entries(e),
            n = {};
        for (let [e, r] of t)
            if (r && "RouteErrorResponse" === r.__type)
                n[e] = new o.UNSAFE_ErrorResponseImpl(
                    r.status,
                    r.statusText,
                    r.data,
                    !0 === r.internal
                );
            else if (r && "Error" === r.__type) {
                if (r.__subType) {
                    let t = window[r.__subType];
                    if ("function" == typeof t)
                        try {
                            let o = new t(r.message);
                            (o.stack = ""), (n[e] = o);
                        } catch (e) { }
                }
                if (null == n[e]) {
                    let t = new Error(r.message);
                    (t.stack = ""), (n[e] = t);
                }
            } else n[e] = r;
        return n;
    }
    const E = i.createContext({ isTransitioning: !1 }),
        P = i.createContext(new Map()),
        _ = i.startTransition,
        O = u.flushSync,
        C = i.useId;
    function x(e) {
        O ? O(e) : e();
    }
    class A {
        constructor() {
            (this.status = "pending"),
                (this.promise = new Promise((e, t) => {
                    (this.resolve = (t) => {
                        "pending" === this.status &&
                            ((this.status = "resolved"), e(t));
                    }),
                        (this.reject = (e) => {
                            "pending" === this.status &&
                                ((this.status = "rejected"), t(e));
                        });
                }));
        }
    }
    function j(e) {
        let { routes: t, future: n, state: o } = e;
        return r.UNSAFE_useRoutesImpl(t, void 0, o, n);
    }
    const N =
        "undefined" != typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
        F = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        L = i.forwardRef(function (e, t) {
            let n,
                {
                    onClick: a,
                    relative: u,
                    reloadDocument: l,
                    replace: f,
                    state: d,
                    target: m,
                    to: p,
                    preventScrollReset: b,
                    unstable_viewTransition: h,
                } = e,
                v = c(e, y),
                { basename: g } = i.useContext(r.UNSAFE_NavigationContext),
                w = !1;
            if ("string" == typeof p && F.test(p) && ((n = p), N))
                try {
                    let e = new URL(window.location.href),
                        t = p.startsWith("//")
                            ? new URL(e.protocol + p)
                            : new URL(p),
                        n = o.stripBasename(t.pathname, g);
                    t.origin === e.origin && null != n
                        ? (p = n + t.search + t.hash)
                        : (w = !0);
                } catch (e) { }
            let R = r.useHref(p, { relative: u }),
                S = H(p, {
                    replace: f,
                    state: d,
                    target: m,
                    preventScrollReset: b,
                    relative: u,
                    unstable_viewTransition: h,
                });
            return i.createElement(
                "a",
                s({}, v, {
                    href: n || R,
                    onClick:
                        w || l
                            ? a
                            : function (e) {
                                a && a(e), e.defaultPrevented || S(e);
                            },
                    ref: t,
                    target: m,
                })
            );
        }),
        T = i.forwardRef(function (e, t) {
            let {
                "aria-current": n = "page",
                caseSensitive: a = !1,
                className: u = "",
                end: l = !1,
                style: f,
                to: d,
                unstable_viewTransition: m,
                children: p,
            } = e,
                b = c(e, g),
                h = r.useResolvedPath(d, { relative: b.relative }),
                v = r.useLocation(),
                y = i.useContext(r.UNSAFE_DataRouterStateContext),
                { navigator: w, basename: R } = i.useContext(
                    r.UNSAFE_NavigationContext
                ),
                S = null != y && J(h) && !0 === m,
                E = w.encodeLocation
                    ? w.encodeLocation(h).pathname
                    : h.pathname,
                P = v.pathname,
                _ =
                    y && y.navigation && y.navigation.location
                        ? y.navigation.location.pathname
                        : null;
            a ||
                ((P = P.toLowerCase()),
                    (_ = _ ? _.toLowerCase() : null),
                    (E = E.toLowerCase())),
                _ && R && (_ = o.stripBasename(_, R) || _);
            const O = "/" !== E && E.endsWith("/") ? E.length - 1 : E.length;
            let C,
                x = P === E || (!l && P.startsWith(E) && "/" === P.charAt(O)),
                A =
                    null != _ &&
                    (_ === E ||
                        (!l && _.startsWith(E) && "/" === _.charAt(E.length))),
                j = { isActive: x, isPending: A, isTransitioning: S },
                N = x ? n : void 0;
            C =
                "function" == typeof u
                    ? u(j)
                    : [
                        u,
                        x ? "active" : null,
                        A ? "pending" : null,
                        S ? "transitioning" : null,
                    ]
                        .filter(Boolean)
                        .join(" ");
            let F = "function" == typeof f ? f(j) : f;
            return i.createElement(
                L,
                s({}, b, {
                    "aria-current": N,
                    className: C,
                    ref: t,
                    style: F,
                    to: d,
                    unstable_viewTransition: m,
                }),
                "function" == typeof p ? p(j) : p
            );
        }),
        U = i.forwardRef((e, t) => {
            let {
                fetcherKey: n,
                navigate: r,
                reloadDocument: o,
                replace: a,
                state: u,
                method: f = l,
                action: d,
                onSubmit: m,
                relative: p,
                preventScrollReset: b,
                unstable_viewTransition: h,
            } = e,
                v = c(e, w),
                y = V(),
                g = z(d, { relative: p }),
                R = "get" === f.toLowerCase() ? "get" : "post";
            return i.createElement(
                "form",
                s(
                    {
                        ref: t,
                        method: R,
                        action: g,
                        onSubmit: o
                            ? m
                            : (e) => {
                                if ((m && m(e), e.defaultPrevented)) return;
                                e.preventDefault();
                                let t = e.nativeEvent.submitter,
                                    o =
                                        (null == t
                                            ? void 0
                                            : t.getAttribute("formmethod")) ||
                                        f;
                                y(t || e.currentTarget, {
                                    fetcherKey: n,
                                    method: o,
                                    navigate: r,
                                    replace: a,
                                    state: u,
                                    relative: p,
                                    preventScrollReset: b,
                                    unstable_viewTransition: h,
                                });
                            },
                    },
                    v
                )
            );
        });
    var D = (function (e) {
        return (
            (e.UseScrollRestoration = "useScrollRestoration"),
            (e.UseSubmit = "useSubmit"),
            (e.UseSubmitFetcher = "useSubmitFetcher"),
            (e.UseFetcher = "useFetcher"),
            (e.useViewTransitionState = "useViewTransitionState"),
            e
        );
    })(D || {}),
        k = (function (e) {
            return (
                (e.UseFetcher = "useFetcher"),
                (e.UseFetchers = "useFetchers"),
                (e.UseScrollRestoration = "useScrollRestoration"),
                e
            );
        })(k || {});
    function M(e) {
        let t = i.useContext(r.UNSAFE_DataRouterContext);
        return t || o.UNSAFE_invariant(!1), t;
    }
    function B(e) {
        let t = i.useContext(r.UNSAFE_DataRouterStateContext);
        return t || o.UNSAFE_invariant(!1), t;
    }
    function H(e, t) {
        let {
            target: n,
            replace: o,
            state: a,
            preventScrollReset: u,
            relative: s,
            unstable_viewTransition: c,
        } = void 0 === t ? {} : t,
            l = r.useNavigate(),
            f = r.useLocation(),
            d = r.useResolvedPath(e, { relative: s });
        return i.useCallback(
            (t) => {
                if (
                    (function (e, t) {
                        return !(
                            0 !== e.button ||
                            (t && "_self" !== t) ||
                            (function (e) {
                                return !!(
                                    e.metaKey ||
                                    e.altKey ||
                                    e.ctrlKey ||
                                    e.shiftKey
                                );
                            })(e)
                        );
                    })(t, n)
                ) {
                    t.preventDefault();
                    let n =
                        void 0 !== o ? o : r.createPath(f) === r.createPath(d);
                    l(e, {
                        replace: n,
                        state: a,
                        preventScrollReset: u,
                        relative: s,
                        unstable_viewTransition: c,
                    });
                }
            },
            [f, l, d, o, a, n, e, u, s, c]
        );
    }
    let K = 0,
        I = () => "__" + String(++K) + "__";
    function V() {
        let { router: e } = M(D.UseSubmit),
            { basename: t } = i.useContext(r.UNSAFE_NavigationContext),
            n = r.UNSAFE_useRouteId();
        return i.useCallback(
            function (r, o) {
                void 0 === o && (o = {}),
                    (function () {
                        if ("undefined" == typeof document)
                            throw new Error(
                                "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
                            );
                    })();
                let {
                    action: a,
                    method: i,
                    encType: u,
                    formData: s,
                    body: c,
                } = v(r, t);
                if (!1 === o.navigate) {
                    let t = o.fetcherKey || I();
                    e.fetch(t, n, o.action || a, {
                        preventScrollReset: o.preventScrollReset,
                        formData: s,
                        body: c,
                        formMethod: o.method || i,
                        formEncType: o.encType || u,
                        unstable_flushSync: o.unstable_flushSync,
                    });
                } else
                    e.navigate(o.action || a, {
                        preventScrollReset: o.preventScrollReset,
                        formData: s,
                        body: c,
                        formMethod: o.method || i,
                        formEncType: o.encType || u,
                        replace: o.replace,
                        state: o.state,
                        fromRouteId: n,
                        unstable_flushSync: o.unstable_flushSync,
                        unstable_viewTransition: o.unstable_viewTransition,
                    });
            },
            [e, t, n]
        );
    }
    function z(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
            { basename: a } = i.useContext(r.UNSAFE_NavigationContext),
            u = i.useContext(r.UNSAFE_RouteContext);
        u || o.UNSAFE_invariant(!1);
        let [c] = u.matches.slice(-1),
            l = s({}, r.useResolvedPath(e || ".", { relative: n })),
            f = r.useLocation();
        if (null == e) {
            l.search = f.search;
            let e = new URLSearchParams(l.search);
            e.has("index") &&
                "" === e.get("index") &&
                (e.delete("index"),
                    (l.search = e.toString() ? "?" + e.toString() : ""));
        }
        return (
            (e && "." !== e) ||
            !c.route.index ||
            (l.search = l.search
                ? l.search.replace(/^\?/, "?index&")
                : "?index"),
            "/" !== a &&
            (l.pathname =
                "/" === l.pathname ? a : o.joinPaths([a, l.pathname])),
            r.createPath(l)
        );
    }
    const q = "react-router-scroll-positions";
    let W = {};
    function Y(e) {
        let { getKey: t, storageKey: n } = void 0 === e ? {} : e,
            { router: a } = M(D.UseScrollRestoration),
            { restoreScrollPosition: u, preventScrollReset: c } = B(
                k.UseScrollRestoration
            ),
            { basename: l } = i.useContext(r.UNSAFE_NavigationContext),
            f = r.useLocation(),
            d = r.useMatches(),
            m = r.useNavigation();
        i.useEffect(
            () => (
                (window.history.scrollRestoration = "manual"),
                () => {
                    window.history.scrollRestoration = "auto";
                }
            ),
            []
        ),
            (function (e, t) {
                let { capture: n } = t || {};
                i.useEffect(() => {
                    let t = null != n ? { capture: n } : void 0;
                    return (
                        window.addEventListener("pagehide", e, t),
                        () => {
                            window.removeEventListener("pagehide", e, t);
                        }
                    );
                }, [e, n]);
            })(
                i.useCallback(() => {
                    if ("idle" === m.state) {
                        let e = (t ? t(f, d) : null) || f.key;
                        W[e] = window.scrollY;
                    }
                    try {
                        sessionStorage.setItem(n || q, JSON.stringify(W));
                    } catch (e) { }
                    window.history.scrollRestoration = "auto";
                }, [n, t, m.state, f, d])
            ),
            "undefined" != typeof document &&
            (i.useLayoutEffect(() => {
                try {
                    let e = sessionStorage.getItem(n || q);
                    e && (W = JSON.parse(e));
                } catch (e) { }
            }, [n]),
                i.useLayoutEffect(() => {
                    let e =
                        t && "/" !== l
                            ? (e, n) =>
                                t(
                                    s({}, e, {
                                        pathname:
                                            o.stripBasename(
                                                e.pathname,
                                                l
                                            ) || e.pathname,
                                    }),
                                    n
                                )
                            : t,
                        n =
                            null == a
                                ? void 0
                                : a.enableScrollRestoration(
                                    W,
                                    () => window.scrollY,
                                    e
                                );
                    return () => n && n();
                }, [a, l, t]),
                i.useLayoutEffect(() => {
                    if (!1 !== u)
                        if ("number" != typeof u) {
                            if (f.hash) {
                                let e = document.getElementById(
                                    decodeURIComponent(f.hash.slice(1))
                                );
                                if (e) return void e.scrollIntoView();
                            }
                            !0 !== c && window.scrollTo(0, 0);
                        } else window.scrollTo(0, u);
                }, [f, u, c]));
    }
    function J(e, t) {
        void 0 === t && (t = {});
        let n = i.useContext(E);
        null == n && o.UNSAFE_invariant(!1);
        let { basename: a } = M(D.useViewTransitionState),
            u = r.useResolvedPath(e, { relative: t.relative });
        if (!n.isTransitioning) return !1;
        let s =
            o.stripBasename(n.currentLocation.pathname, a) ||
            n.currentLocation.pathname,
            c =
                o.stripBasename(n.nextLocation.pathname, a) ||
                n.nextLocation.pathname;
        return (
            null != o.matchPath(u.pathname, c) ||
            null != o.matchPath(u.pathname, s)
        );
    }
    Object.defineProperty(e, "AbortedDeferredError", {
        enumerable: !0,
        get: function () {
            return r.AbortedDeferredError;
        },
    }),
        Object.defineProperty(e, "Await", {
            enumerable: !0,
            get: function () {
                return r.Await;
            },
        }),
        Object.defineProperty(e, "MemoryRouter", {
            enumerable: !0,
            get: function () {
                return r.MemoryRouter;
            },
        }),
        Object.defineProperty(e, "Navigate", {
            enumerable: !0,
            get: function () {
                return r.Navigate;
            },
        }),
        Object.defineProperty(e, "NavigationType", {
            enumerable: !0,
            get: function () {
                return r.NavigationType;
            },
        }),
        Object.defineProperty(e, "Outlet", {
            enumerable: !0,
            get: function () {
                return r.Outlet;
            },
        }),
        Object.defineProperty(e, "Route", {
            enumerable: !0,
            get: function () {
                return r.Route;
            },
        }),
        Object.defineProperty(e, "Router", {
            enumerable: !0,
            get: function () {
                return r.Router;
            },
        }),
        Object.defineProperty(e, "Routes", {
            enumerable: !0,
            get: function () {
                return r.Routes;
            },
        }),
        Object.defineProperty(e, "UNSAFE_DataRouterContext", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_DataRouterContext;
            },
        }),
        Object.defineProperty(e, "UNSAFE_DataRouterStateContext", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_DataRouterStateContext;
            },
        }),
        Object.defineProperty(e, "UNSAFE_LocationContext", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_LocationContext;
            },
        }),
        Object.defineProperty(e, "UNSAFE_NavigationContext", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_NavigationContext;
            },
        }),
        Object.defineProperty(e, "UNSAFE_RouteContext", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_RouteContext;
            },
        }),
        Object.defineProperty(e, "UNSAFE_useRouteId", {
            enumerable: !0,
            get: function () {
                return r.UNSAFE_useRouteId;
            },
        }),
        Object.defineProperty(e, "createMemoryRouter", {
            enumerable: !0,
            get: function () {
                return r.createMemoryRouter;
            },
        }),
        Object.defineProperty(e, "createPath", {
            enumerable: !0,
            get: function () {
                return r.createPath;
            },
        }),
        Object.defineProperty(e, "createRoutesFromChildren", {
            enumerable: !0,
            get: function () {
                return r.createRoutesFromChildren;
            },
        }),
        Object.defineProperty(e, "createRoutesFromElements", {
            enumerable: !0,
            get: function () {
                return r.createRoutesFromElements;
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
        Object.defineProperty(e, "renderMatches", {
            enumerable: !0,
            get: function () {
                return r.renderMatches;
            },
        }),
        Object.defineProperty(e, "resolvePath", {
            enumerable: !0,
            get: function () {
                return r.resolvePath;
            },
        }),
        Object.defineProperty(e, "useActionData", {
            enumerable: !0,
            get: function () {
                return r.useActionData;
            },
        }),
        Object.defineProperty(e, "useAsyncError", {
            enumerable: !0,
            get: function () {
                return r.useAsyncError;
            },
        }),
        Object.defineProperty(e, "useAsyncValue", {
            enumerable: !0,
            get: function () {
                return r.useAsyncValue;
            },
        }),
        Object.defineProperty(e, "useBlocker", {
            enumerable: !0,
            get: function () {
                return r.useBlocker;
            },
        }),
        Object.defineProperty(e, "useHref", {
            enumerable: !0,
            get: function () {
                return r.useHref;
            },
        }),
        Object.defineProperty(e, "useInRouterContext", {
            enumerable: !0,
            get: function () {
                return r.useInRouterContext;
            },
        }),
        Object.defineProperty(e, "useLoaderData", {
            enumerable: !0,
            get: function () {
                return r.useLoaderData;
            },
        }),
        Object.defineProperty(e, "useLocation", {
            enumerable: !0,
            get: function () {
                return r.useLocation;
            },
        }),
        Object.defineProperty(e, "useMatch", {
            enumerable: !0,
            get: function () {
                return r.useMatch;
            },
        }),
        Object.defineProperty(e, "useMatches", {
            enumerable: !0,
            get: function () {
                return r.useMatches;
            },
        }),
        Object.defineProperty(e, "useNavigate", {
            enumerable: !0,
            get: function () {
                return r.useNavigate;
            },
        }),
        Object.defineProperty(e, "useNavigation", {
            enumerable: !0,
            get: function () {
                return r.useNavigation;
            },
        }),
        Object.defineProperty(e, "useNavigationType", {
            enumerable: !0,
            get: function () {
                return r.useNavigationType;
            },
        }),
        Object.defineProperty(e, "useOutlet", {
            enumerable: !0,
            get: function () {
                return r.useOutlet;
            },
        }),
        Object.defineProperty(e, "useOutletContext", {
            enumerable: !0,
            get: function () {
                return r.useOutletContext;
            },
        }),
        Object.defineProperty(e, "useParams", {
            enumerable: !0,
            get: function () {
                return r.useParams;
            },
        }),
        Object.defineProperty(e, "useResolvedPath", {
            enumerable: !0,
            get: function () {
                return r.useResolvedPath;
            },
        }),
        Object.defineProperty(e, "useRevalidator", {
            enumerable: !0,
            get: function () {
                return r.useRevalidator;
            },
        }),
        Object.defineProperty(e, "useRouteError", {
            enumerable: !0,
            get: function () {
                return r.useRouteError;
            },
        }),
        Object.defineProperty(e, "useRouteLoaderData", {
            enumerable: !0,
            get: function () {
                return r.useRouteLoaderData;
            },
        }),
        Object.defineProperty(e, "useRoutes", {
            enumerable: !0,
            get: function () {
                return r.useRoutes;
            },
        }),
        (e.BrowserRouter = function (e) {
            let { basename: t, children: n, future: a, window: u } = e,
                s = i.useRef();
            null == s.current &&
                (s.current = o.createBrowserHistory({
                    window: u,
                    v5Compat: !0,
                }));
            let c = s.current,
                [l, f] = i.useState({ action: c.action, location: c.location }),
                { v7_startTransition: d } = a || {},
                m = i.useCallback(
                    (e) => {
                        d && _ ? _(() => f(e)) : f(e);
                    },
                    [f, d]
                );
            return (
                i.useLayoutEffect(() => c.listen(m), [c, m]),
                i.createElement(r.Router, {
                    basename: t,
                    children: n,
                    location: l.location,
                    navigationType: l.action,
                    navigator: c,
                    future: a,
                })
            );
        }),
        (e.Form = U),
        (e.HashRouter = function (e) {
            let { basename: t, children: n, future: a, window: u } = e,
                s = i.useRef();
            null == s.current &&
                (s.current = o.createHashHistory({ window: u, v5Compat: !0 }));
            let c = s.current,
                [l, f] = i.useState({ action: c.action, location: c.location }),
                { v7_startTransition: d } = a || {},
                m = i.useCallback(
                    (e) => {
                        d && _ ? _(() => f(e)) : f(e);
                    },
                    [f, d]
                );
            return (
                i.useLayoutEffect(() => c.listen(m), [c, m]),
                i.createElement(r.Router, {
                    basename: t,
                    children: n,
                    location: l.location,
                    navigationType: l.action,
                    navigator: c,
                    future: a,
                })
            );
        }),
        (e.Link = L),
        (e.NavLink = T),
        (e.RouterProvider = function (e) {
            let { fallbackElement: t, router: n, future: o } = e,
                [a, u] = i.useState(n.state),
                [s, c] = i.useState(),
                [l, f] = i.useState({ isTransitioning: !1 }),
                [d, m] = i.useState(),
                [p, b] = i.useState(),
                [h, v] = i.useState(),
                y = i.useRef(new Map()),
                { v7_startTransition: g } = o || {},
                w = i.useCallback(
                    (e) => {
                        g
                            ? (function (e) {
                                _ ? _(e) : e();
                            })(e)
                            : e();
                    },
                    [g]
                ),
                R = i.useCallback(
                    (e, t) => {
                        let {
                            deletedFetchers: r,
                            unstable_flushSync: o,
                            unstable_viewTransitionOpts: a,
                        } = t;
                        r.forEach((e) => y.current.delete(e)),
                            e.fetchers.forEach((e, t) => {
                                void 0 !== e.data && y.current.set(t, e.data);
                            });
                        let i =
                            null == n.window ||
                            "function" !=
                            typeof n.window.document.startViewTransition;
                        if (a && !i) {
                            if (o) {
                                x(() => {
                                    p && (d && d.resolve(), p.skipTransition()),
                                        f({
                                            isTransitioning: !0,
                                            flushSync: !0,
                                            currentLocation: a.currentLocation,
                                            nextLocation: a.nextLocation,
                                        });
                                });
                                let t = n.window.document.startViewTransition(
                                    () => {
                                        x(() => u(e));
                                    }
                                );
                                return (
                                    t.finished.finally(() => {
                                        x(() => {
                                            m(void 0),
                                                b(void 0),
                                                c(void 0),
                                                f({ isTransitioning: !1 });
                                        });
                                    }),
                                    void x(() => b(t))
                                );
                            }
                            p
                                ? (d && d.resolve(),
                                    p.skipTransition(),
                                    v({
                                        state: e,
                                        currentLocation: a.currentLocation,
                                        nextLocation: a.nextLocation,
                                    }))
                                : (c(e),
                                    f({
                                        isTransitioning: !0,
                                        flushSync: !1,
                                        currentLocation: a.currentLocation,
                                        nextLocation: a.nextLocation,
                                    }));
                        } else o ? x(() => u(e)) : w(() => u(e));
                    },
                    [n.window, p, d, y, w]
                );
            i.useLayoutEffect(() => n.subscribe(R), [n, R]),
                i.useEffect(() => {
                    l.isTransitioning && !l.flushSync && m(new A());
                }, [l]),
                i.useEffect(() => {
                    if (d && s && n.window) {
                        let e = s,
                            t = d.promise,
                            r = n.window.document.startViewTransition(
                                async () => {
                                    w(() => u(e)), await t;
                                }
                            );
                        r.finished.finally(() => {
                            m(void 0),
                                b(void 0),
                                c(void 0),
                                f({ isTransitioning: !1 });
                        }),
                            b(r);
                    }
                }, [w, s, d, n.window]),
                i.useEffect(() => {
                    d && s && a.location.key === s.location.key && d.resolve();
                }, [d, p, a.location, s]),
                i.useEffect(() => {
                    !l.isTransitioning &&
                        h &&
                        (c(h.state),
                            f({
                                isTransitioning: !0,
                                flushSync: !1,
                                currentLocation: h.currentLocation,
                                nextLocation: h.nextLocation,
                            }),
                            v(void 0));
                }, [l.isTransitioning, h]),
                i.useEffect(() => { }, []);
            let S = i.useMemo(
                () => ({
                    createHref: n.createHref,
                    encodeLocation: n.encodeLocation,
                    go: (e) => n.navigate(e),
                    push: (e, t, r) =>
                        n.navigate(e, {
                            state: t,
                            preventScrollReset:
                                null == r ? void 0 : r.preventScrollReset,
                        }),
                    replace: (e, t, r) =>
                        n.navigate(e, {
                            replace: !0,
                            state: t,
                            preventScrollReset:
                                null == r ? void 0 : r.preventScrollReset,
                        }),
                }),
                [n]
            ),
                O = n.basename || "/",
                C = i.useMemo(
                    () => ({
                        router: n,
                        navigator: S,
                        static: !1,
                        basename: O,
                    }),
                    [n, S, O]
                );
            return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                    r.UNSAFE_DataRouterContext.Provider,
                    { value: C },
                    i.createElement(
                        r.UNSAFE_DataRouterStateContext.Provider,
                        { value: a },
                        i.createElement(
                            P.Provider,
                            { value: y.current },
                            i.createElement(
                                E.Provider,
                                { value: l },
                                i.createElement(
                                    r.Router,
                                    {
                                        basename: O,
                                        location: a.location,
                                        navigationType: a.historyAction,
                                        navigator: S,
                                        future: {
                                            v7_relativeSplatPath:
                                                n.future.v7_relativeSplatPath,
                                        },
                                    },
                                    a.initialized ||
                                        n.future.v7_partialHydration
                                        ? i.createElement(j, {
                                            routes: n.routes,
                                            future: n.future,
                                            state: a,
                                        })
                                        : t
                                )
                            )
                        )
                    )
                ),
                null
            );
        }),
        (e.ScrollRestoration = function (e) {
            let { getKey: t, storageKey: n } = e;
            return Y({ getKey: t, storageKey: n }), null;
        }),
        (e.UNSAFE_FetchersContext = P),
        (e.UNSAFE_ViewTransitionContext = E),
        (e.UNSAFE_useScrollRestoration = Y),
        (e.createBrowserRouter = function (e, t) {
            return o
                .createRouter({
                    basename: null == t ? void 0 : t.basename,
                    future: s({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0,
                    }),
                    history: o.createBrowserHistory({
                        window: null == t ? void 0 : t.window,
                    }),
                    hydrationData:
                        (null == t ? void 0 : t.hydrationData) || R(),
                    routes: e,
                    mapRouteProperties: r.UNSAFE_mapRouteProperties,
                    window: null == t ? void 0 : t.window,
                })
                .initialize();
        }),
        (e.createHashRouter = function (e, t) {
            return o
                .createRouter({
                    basename: null == t ? void 0 : t.basename,
                    future: s({}, null == t ? void 0 : t.future, {
                        v7_prependBasename: !0,
                    }),
                    history: o.createHashHistory({
                        window: null == t ? void 0 : t.window,
                    }),
                    hydrationData:
                        (null == t ? void 0 : t.hydrationData) || R(),
                    routes: e,
                    mapRouteProperties: r.UNSAFE_mapRouteProperties,
                    window: null == t ? void 0 : t.window,
                })
                .initialize();
        }),
        (e.createSearchParams = m),
        (e.unstable_HistoryRouter = function (e) {
            let { basename: t, children: n, future: o, history: a } = e,
                [u, s] = i.useState({ action: a.action, location: a.location }),
                { v7_startTransition: c } = o || {},
                l = i.useCallback(
                    (e) => {
                        c && _ ? _(() => s(e)) : s(e);
                    },
                    [s, c]
                );
            return (
                i.useLayoutEffect(() => a.listen(l), [a, l]),
                i.createElement(r.Router, {
                    basename: t,
                    children: n,
                    location: u.location,
                    navigationType: u.action,
                    navigator: a,
                    future: o,
                })
            );
        }),
        (e.unstable_usePrompt = function (e) {
            let { when: t, message: n } = e,
                o = r.useBlocker(t);
            i.useEffect(() => {
                if ("blocked" === o.state) {
                    window.confirm(n) ? setTimeout(o.proceed, 0) : o.reset();
                }
            }, [o, n]),
                i.useEffect(() => {
                    "blocked" !== o.state || t || o.reset();
                }, [o, t]);
        }),
        (e.unstable_useViewTransitionState = J),
        (e.useBeforeUnload = function (e, t) {
            let { capture: n } = t || {};
            i.useEffect(() => {
                let t = null != n ? { capture: n } : void 0;
                return (
                    window.addEventListener("beforeunload", e, t),
                    () => {
                        window.removeEventListener("beforeunload", e, t);
                    }
                );
            }, [e, n]);
        }),
        (e.useFetcher = function (e) {
            var t;
            let { key: n } = void 0 === e ? {} : e,
                { router: a } = M(D.UseFetcher),
                u = B(k.UseFetcher),
                c = i.useContext(P),
                l = i.useContext(r.UNSAFE_RouteContext),
                f =
                    null == (t = l.matches[l.matches.length - 1])
                        ? void 0
                        : t.route.id;
            c || o.UNSAFE_invariant(!1),
                l || o.UNSAFE_invariant(!1),
                null == f && o.UNSAFE_invariant(!1);
            let d = C ? C() : "",
                [m, p] = i.useState(n || d);
            n && n !== m ? p(n) : m || p(I()),
                i.useEffect(
                    () => (
                        a.getFetcher(m),
                        () => {
                            a.deleteFetcher(m);
                        }
                    ),
                    [a, m]
                );
            let b = i.useCallback(
                (e, t) => {
                    f || o.UNSAFE_invariant(!1), a.fetch(m, f, e, t);
                },
                [m, f, a]
            ),
                h = V(),
                v = i.useCallback(
                    (e, t) => {
                        h(e, s({}, t, { navigate: !1, fetcherKey: m }));
                    },
                    [m, h]
                ),
                y = i.useMemo(
                    () =>
                        i.forwardRef((e, t) =>
                            i.createElement(
                                U,
                                s({}, e, {
                                    navigate: !1,
                                    fetcherKey: m,
                                    ref: t,
                                })
                            )
                        ),
                    [m]
                ),
                g = u.fetchers.get(m) || o.IDLE_FETCHER,
                w = c.get(m);
            return i.useMemo(
                () => s({ Form: y, submit: v, load: b }, g, { data: w }),
                [y, v, b, g, w]
            );
        }),
        (e.useFetchers = function () {
            let e = B(k.UseFetchers);
            return Array.from(e.fetchers.entries()).map((e) => {
                let [t, n] = e;
                return s({}, n, { key: t });
            });
        }),
        (e.useFormAction = z),
        (e.useLinkClickHandler = H),
        (e.useSearchParams = function (e) {
            let t = i.useRef(m(e)),
                n = i.useRef(!1),
                o = r.useLocation(),
                a = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = m(e);
                            return (
                                t &&
                                t.forEach((e, r) => {
                                    n.has(r) ||
                                        t.getAll(r).forEach((e) => {
                                            n.append(r, e);
                                        });
                                }),
                                n
                            );
                        })(o.search, n.current ? null : t.current),
                    [o.search]
                ),
                u = r.useNavigate(),
                s = i.useCallback(
                    (e, t) => {
                        const r = m("function" == typeof e ? e(a) : e);
                        (n.current = !0), u("?" + r, t);
                    },
                    [u, a]
                );
            return [a, s];
        }),
        (e.useSubmit = V),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=react-router-dom.production.min.js.map
