!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? e(exports, require("react-dom"), require("react"))
        : "function" == typeof define && define.amd
        ? define(["exports", "react-dom", "react"], e)
        : e(
              ((t =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : t || self).ReactQuery = {}),
              t.ReactDOM,
              t.React
          );
})(this, function (t, e, s) {
    "use strict";
    function r(t) {
        return t && "object" == typeof t && "default" in t ? t : { default: t };
    }
    function i(t) {
        if (t && t.__esModule) return t;
        var e = Object.create(null);
        return (
            t &&
                Object.keys(t).forEach(function (s) {
                    if ("default" !== s) {
                        var r = Object.getOwnPropertyDescriptor(t, s);
                        Object.defineProperty(
                            e,
                            s,
                            r.get
                                ? r
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return t[s];
                                      },
                                  }
                        );
                    }
                }),
            (e.default = t),
            Object.freeze(e)
        );
    }
    var n = i(e),
        o = r(s),
        u = i(s);
    class a {
        constructor() {
            (this.listeners = new Set()),
                (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(t) {
            const e = { listener: t };
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    }
    const c = "undefined" == typeof window || "Deno" in window;
    function l() {}
    function h(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
    }
    function d(t, e) {
        return t.filter((t) => !e.includes(t));
    }
    function f(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
    }
    function p(t, e, s) {
        return M(t)
            ? "function" == typeof e
                ? { ...s, queryKey: t, queryFn: e }
                : { ...e, queryKey: t }
            : t;
    }
    function y(t, e, s) {
        return M(t)
            ? "function" == typeof e
                ? { ...s, mutationKey: t, mutationFn: e }
                : { ...e, mutationKey: t }
            : "function" == typeof t
            ? { ...e, mutationFn: t }
            : { ...t };
    }
    function v(t, e, s) {
        return M(t) ? [{ ...e, queryKey: t }, s] : [t || {}, e];
    }
    function m(t, e, s) {
        return M(t) ? [{ ...e, mutationKey: t }, s] : [t || {}, e];
    }
    function b(t, e) {
        const {
            type: s = "all",
            exact: r,
            fetchStatus: i,
            predicate: n,
            queryKey: o,
            stale: u,
        } = t;
        if (M(o))
            if (r) {
                if (e.queryHash !== O(o, e.options)) return !1;
            } else if (!R(e.queryKey, o)) return !1;
        if ("all" !== s) {
            const t = e.isActive();
            if ("active" === s && !t) return !1;
            if ("inactive" === s && t) return !1;
        }
        return (
            ("boolean" != typeof u || e.isStale() === u) &&
            (void 0 === i || i === e.state.fetchStatus) &&
            !(n && !n(e))
        );
    }
    function g(t, e) {
        const { exact: s, fetching: r, predicate: i, mutationKey: n } = t;
        if (M(n)) {
            if (!e.options.mutationKey) return !1;
            if (s) {
                if (C(e.options.mutationKey) !== C(n)) return !1;
            } else if (!R(e.options.mutationKey, n)) return !1;
        }
        return (
            ("boolean" != typeof r || ("loading" === e.state.status) === r) &&
            !(i && !i(e))
        );
    }
    function O(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || C)(t);
    }
    function C(t) {
        return JSON.stringify(t, (t, e) =>
            E(e)
                ? Object.keys(e)
                      .sort()
                      .reduce((t, s) => ((t[s] = e[s]), t), {})
                : e
        );
    }
    function R(t, e) {
        return S(t, e);
    }
    function S(t, e) {
        return (
            t === e ||
            (typeof t == typeof e &&
                !(!t || !e || "object" != typeof t || "object" != typeof e) &&
                !Object.keys(e).some((s) => !S(t[s], e[s])))
        );
    }
    function q(t, e) {
        if (t === e) return t;
        const s = Q(t) && Q(e);
        if (s || (E(t) && E(e))) {
            const r = s ? t.length : Object.keys(t).length,
                i = s ? e : Object.keys(e),
                n = i.length,
                o = s ? [] : {};
            let u = 0;
            for (let r = 0; r < n; r++) {
                const n = s ? r : i[r];
                (o[n] = q(t[n], e[n])), o[n] === t[n] && u++;
            }
            return r === n && u === r ? t : o;
        }
        return e;
    }
    function P(t, e) {
        if ((t && !e) || (e && !t)) return !1;
        for (const s in t) if (t[s] !== e[s]) return !1;
        return !0;
    }
    function Q(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
    }
    function E(t) {
        if (!w(t)) return !1;
        const e = t.constructor;
        if (void 0 === e) return !0;
        const s = e.prototype;
        return !!w(s) && !!s.hasOwnProperty("isPrototypeOf");
    }
    function w(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
    }
    function M(t) {
        return Array.isArray(t);
    }
    function x(t) {
        return new Promise((e) => {
            setTimeout(e, t);
        });
    }
    function F(t) {
        x(0).then(t);
    }
    function D(t, e, s) {
        return null != s.isDataEqual && s.isDataEqual(t, e)
            ? t
            : "function" == typeof s.structuralSharing
            ? s.structuralSharing(t, e)
            : !1 !== s.structuralSharing
            ? q(t, e)
            : e;
    }
    const A = new (class extends a {
            constructor() {
                super(),
                    (this.setup = (t) => {
                        if (!c && window.addEventListener) {
                            const e = () => t();
                            return (
                                window.addEventListener(
                                    "visibilitychange",
                                    e,
                                    !1
                                ),
                                window.addEventListener("focus", e, !1),
                                () => {
                                    window.removeEventListener(
                                        "visibilitychange",
                                        e
                                    ),
                                        window.removeEventListener("focus", e);
                                }
                            );
                        }
                    });
            }
            onSubscribe() {
                this.cleanup || this.setEventListener(this.setup);
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() ||
                    (null == (t = this.cleanup) || t.call(this),
                    (this.cleanup = void 0));
            }
            setEventListener(t) {
                var e;
                (this.setup = t),
                    null == (e = this.cleanup) || e.call(this),
                    (this.cleanup = t((t) => {
                        "boolean" == typeof t
                            ? this.setFocused(t)
                            : this.onFocus();
                    }));
            }
            setFocused(t) {
                this.focused !== t && ((this.focused = t), this.onFocus());
            }
            onFocus() {
                this.listeners.forEach(({ listener: t }) => {
                    t();
                });
            }
            isFocused() {
                return "boolean" == typeof this.focused
                    ? this.focused
                    : "undefined" == typeof document ||
                          [void 0, "visible", "prerender"].includes(
                              document.visibilityState
                          );
            }
        })(),
        U = ["online", "offline"];
    const I = new (class extends a {
        constructor() {
            super(),
                (this.setup = (t) => {
                    if (!c && window.addEventListener) {
                        const e = () => t();
                        return (
                            U.forEach((t) => {
                                window.addEventListener(t, e, !1);
                            }),
                            () => {
                                U.forEach((t) => {
                                    window.removeEventListener(t, e);
                                });
                            }
                        );
                    }
                });
        }
        onSubscribe() {
            this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() ||
                (null == (t = this.cleanup) || t.call(this),
                (this.cleanup = void 0));
        }
        setEventListener(t) {
            var e;
            (this.setup = t),
                null == (e = this.cleanup) || e.call(this),
                (this.cleanup = t((t) => {
                    "boolean" == typeof t ? this.setOnline(t) : this.onOnline();
                }));
        }
        setOnline(t) {
            this.online !== t && ((this.online = t), this.onOnline());
        }
        onOnline() {
            this.listeners.forEach(({ listener: t }) => {
                t();
            });
        }
        isOnline() {
            return "boolean" == typeof this.online
                ? this.online
                : "undefined" == typeof navigator ||
                      void 0 === navigator.onLine ||
                      navigator.onLine;
        }
    })();
    function K(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
    }
    function T(t) {
        return "online" !== (null != t ? t : "online") || I.isOnline();
    }
    class k {
        constructor(t) {
            (this.revert = null == t ? void 0 : t.revert),
                (this.silent = null == t ? void 0 : t.silent);
        }
    }
    function L(t) {
        return t instanceof k;
    }
    function j(t) {
        let e,
            s,
            r,
            i = !1,
            n = 0,
            o = !1;
        const u = new Promise((t, e) => {
                (s = t), (r = e);
            }),
            a = () =>
                !A.isFocused() || ("always" !== t.networkMode && !I.isOnline()),
            c = (r) => {
                o ||
                    ((o = !0),
                    null == t.onSuccess || t.onSuccess(r),
                    null == e || e(),
                    s(r));
            },
            l = (s) => {
                o ||
                    ((o = !0),
                    null == t.onError || t.onError(s),
                    null == e || e(),
                    r(s));
            },
            h = () =>
                new Promise((s) => {
                    (e = (t) => {
                        const e = o || !a();
                        return e && s(t), e;
                    }),
                        null == t.onPause || t.onPause();
                }).then(() => {
                    (e = void 0), o || null == t.onContinue || t.onContinue();
                }),
            d = () => {
                if (o) return;
                let e;
                try {
                    e = t.fn();
                } catch (t) {
                    e = Promise.reject(t);
                }
                Promise.resolve(e)
                    .then(c)
                    .catch((e) => {
                        var s, r;
                        if (o) return;
                        const u = null != (s = t.retry) ? s : 3,
                            c = null != (r = t.retryDelay) ? r : K,
                            f = "function" == typeof c ? c(n, e) : c,
                            p =
                                !0 === u ||
                                ("number" == typeof u && n < u) ||
                                ("function" == typeof u && u(n, e));
                        !i && p
                            ? (n++,
                              null == t.onFail || t.onFail(n, e),
                              x(f)
                                  .then(() => {
                                      if (a()) return h();
                                  })
                                  .then(() => {
                                      i ? l(e) : d();
                                  }))
                            : l(e);
                    });
            };
        return (
            T(t.networkMode) ? d() : h().then(d),
            {
                promise: u,
                cancel: (e) => {
                    o || (l(new k(e)), null == t.abort || t.abort());
                },
                continue: () =>
                    (null == e ? void 0 : e()) ? u : Promise.resolve(),
                cancelRetry: () => {
                    i = !0;
                },
                continueRetry: () => {
                    i = !1;
                },
            }
        );
    }
    const H = console;
    const B = (function () {
        let t = [],
            e = 0,
            s = (t) => {
                t();
            },
            r = (t) => {
                t();
            };
        const i = (r) => {
                e
                    ? t.push(r)
                    : F(() => {
                          s(r);
                      });
            },
            n = () => {
                const e = t;
                (t = []),
                    e.length &&
                        F(() => {
                            r(() => {
                                e.forEach((t) => {
                                    s(t);
                                });
                            });
                        });
            };
        return {
            batch: (t) => {
                let s;
                e++;
                try {
                    s = t();
                } finally {
                    e--, e || n();
                }
                return s;
            },
            batchCalls:
                (t) =>
                (...e) => {
                    i(() => {
                        t(...e);
                    });
                },
            schedule: i,
            setNotifyFunction: (t) => {
                s = t;
            },
            setBatchNotifyFunction: (t) => {
                r = t;
            },
        };
    })();
    class N {
        destroy() {
            this.clearGcTimeout();
        }
        scheduleGc() {
            this.clearGcTimeout(),
                h(this.cacheTime) &&
                    (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove();
                    }, this.cacheTime));
        }
        updateCacheTime(t) {
            this.cacheTime = Math.max(
                this.cacheTime || 0,
                null != t ? t : c ? 1 / 0 : 3e5
            );
        }
        clearGcTimeout() {
            this.gcTimeout &&
                (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
    }
    class G extends N {
        constructor(t) {
            super(),
                (this.abortSignalConsumed = !1),
                (this.defaultOptions = t.defaultOptions),
                this.setOptions(t.options),
                (this.observers = []),
                (this.cache = t.cache),
                (this.logger = t.logger || H),
                (this.queryKey = t.queryKey),
                (this.queryHash = t.queryHash),
                (this.initialState =
                    t.state ||
                    (function (t) {
                        const e =
                                "function" == typeof t.initialData
                                    ? t.initialData()
                                    : t.initialData,
                            s = void 0 !== e,
                            r = s
                                ? "function" == typeof t.initialDataUpdatedAt
                                    ? t.initialDataUpdatedAt()
                                    : t.initialDataUpdatedAt
                                : 0;
                        return {
                            data: e,
                            dataUpdateCount: 0,
                            dataUpdatedAt: s ? (null != r ? r : Date.now()) : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: s ? "success" : "loading",
                            fetchStatus: "idle",
                        };
                    })(this.options)),
                (this.state = this.initialState),
                this.scheduleGc();
        }
        get meta() {
            return this.options.meta;
        }
        setOptions(t) {
            (this.options = { ...this.defaultOptions, ...t }),
                this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
            this.observers.length ||
                "idle" !== this.state.fetchStatus ||
                this.cache.remove(this);
        }
        setData(t, e) {
            const s = D(this.state.data, t, this.options);
            return (
                this.dispatch({
                    data: s,
                    type: "success",
                    dataUpdatedAt: null == e ? void 0 : e.updatedAt,
                    manual: null == e ? void 0 : e.manual,
                }),
                s
            );
        }
        setState(t, e) {
            this.dispatch({ type: "setState", state: t, setStateOptions: e });
        }
        cancel(t) {
            var e;
            const s = this.promise;
            return (
                null == (e = this.retryer) || e.cancel(t),
                s ? s.then(l).catch(l) : Promise.resolve()
            );
        }
        destroy() {
            super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
            this.destroy(), this.setState(this.initialState);
        }
        isActive() {
            return this.observers.some((t) => !1 !== t.options.enabled);
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
            return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                this.observers.some((t) => t.getCurrentResult().isStale)
            );
        }
        isStaleByTime(t = 0) {
            return (
                this.state.isInvalidated ||
                !this.state.dataUpdatedAt ||
                !f(this.state.dataUpdatedAt, t)
            );
        }
        onFocus() {
            var t;
            const e = this.observers.find((t) => t.shouldFetchOnWindowFocus());
            e && e.refetch({ cancelRefetch: !1 }),
                null == (t = this.retryer) || t.continue();
        }
        onOnline() {
            var t;
            const e = this.observers.find((t) => t.shouldFetchOnReconnect());
            e && e.refetch({ cancelRefetch: !1 }),
                null == (t = this.retryer) || t.continue();
        }
        addObserver(t) {
            this.observers.includes(t) ||
                (this.observers.push(t),
                this.clearGcTimeout(),
                this.cache.notify({
                    type: "observerAdded",
                    query: this,
                    observer: t,
                }));
        }
        removeObserver(t) {
            this.observers.includes(t) &&
                ((this.observers = this.observers.filter((e) => e !== t)),
                this.observers.length ||
                    (this.retryer &&
                        (this.abortSignalConsumed
                            ? this.retryer.cancel({ revert: !0 })
                            : this.retryer.cancelRetry()),
                    this.scheduleGc()),
                this.cache.notify({
                    type: "observerRemoved",
                    query: this,
                    observer: t,
                }));
        }
        getObserversCount() {
            return this.observers.length;
        }
        invalidate() {
            this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(t, e) {
            var s, r;
            if ("idle" !== this.state.fetchStatus)
                if (this.state.dataUpdatedAt && null != e && e.cancelRefetch)
                    this.cancel({ silent: !0 });
                else if (this.promise) {
                    var i;
                    return (
                        null == (i = this.retryer) || i.continueRetry(),
                        this.promise
                    );
                }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
                const t = this.observers.find((t) => t.options.queryFn);
                t && this.setOptions(t.options);
            }
            const n = (function () {
                    if ("function" == typeof AbortController)
                        return new AbortController();
                })(),
                o = {
                    queryKey: this.queryKey,
                    pageParam: void 0,
                    meta: this.meta,
                },
                u = (t) => {
                    Object.defineProperty(t, "signal", {
                        enumerable: !0,
                        get: () => {
                            if (n)
                                return (
                                    (this.abortSignalConsumed = !0), n.signal
                                );
                        },
                    });
                };
            u(o);
            const a = {
                fetchOptions: e,
                options: this.options,
                queryKey: this.queryKey,
                state: this.state,
                fetchFn: () =>
                    this.options.queryFn
                        ? ((this.abortSignalConsumed = !1),
                          this.options.queryFn(o))
                        : Promise.reject(
                              "Missing queryFn for queryKey '" +
                                  this.options.queryHash +
                                  "'"
                          ),
            };
            var c;
            (u(a),
            null == (s = this.options.behavior) || s.onFetch(a),
            (this.revertState = this.state),
            "idle" === this.state.fetchStatus ||
                this.state.fetchMeta !==
                    (null == (r = a.fetchOptions) ? void 0 : r.meta)) &&
                this.dispatch({
                    type: "fetch",
                    meta: null == (c = a.fetchOptions) ? void 0 : c.meta,
                });
            const l = (t) => {
                var e, s, r, i;
                ((L(t) && t.silent) ||
                    this.dispatch({ type: "error", error: t }),
                L(t)) ||
                    (null == (e = (s = this.cache.config).onError) ||
                        e.call(s, t, this),
                    null == (r = (i = this.cache.config).onSettled) ||
                        r.call(i, this.state.data, t, this));
                this.isFetchingOptimistic || this.scheduleGc(),
                    (this.isFetchingOptimistic = !1);
            };
            return (
                (this.retryer = j({
                    fn: a.fetchFn,
                    abort: null == n ? void 0 : n.abort.bind(n),
                    onSuccess: (t) => {
                        var e, s, r, i;
                        void 0 !== t
                            ? (this.setData(t),
                              null == (e = (s = this.cache.config).onSuccess) ||
                                  e.call(s, t, this),
                              null == (r = (i = this.cache.config).onSettled) ||
                                  r.call(i, t, this.state.error, this),
                              this.isFetchingOptimistic || this.scheduleGc(),
                              (this.isFetchingOptimistic = !1))
                            : l(
                                  new Error(
                                      this.queryHash + " data is undefined"
                                  )
                              );
                    },
                    onError: l,
                    onFail: (t, e) => {
                        this.dispatch({
                            type: "failed",
                            failureCount: t,
                            error: e,
                        });
                    },
                    onPause: () => {
                        this.dispatch({ type: "pause" });
                    },
                    onContinue: () => {
                        this.dispatch({ type: "continue" });
                    },
                    retry: a.options.retry,
                    retryDelay: a.options.retryDelay,
                    networkMode: a.options.networkMode,
                })),
                (this.promise = this.retryer.promise),
                this.promise
            );
        }
        dispatch(t) {
            (this.state = ((e) => {
                var s, r;
                switch (t.type) {
                    case "failed":
                        return {
                            ...e,
                            fetchFailureCount: t.failureCount,
                            fetchFailureReason: t.error,
                        };
                    case "pause":
                        return { ...e, fetchStatus: "paused" };
                    case "continue":
                        return { ...e, fetchStatus: "fetching" };
                    case "fetch":
                        return {
                            ...e,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null != (s = t.meta) ? s : null,
                            fetchStatus: T(this.options.networkMode)
                                ? "fetching"
                                : "paused",
                            ...(!e.dataUpdatedAt && {
                                error: null,
                                status: "loading",
                            }),
                        };
                    case "success":
                        return {
                            ...e,
                            data: t.data,
                            dataUpdateCount: e.dataUpdateCount + 1,
                            dataUpdatedAt:
                                null != (r = t.dataUpdatedAt) ? r : Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...(!t.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                            }),
                        };
                    case "error":
                        const i = t.error;
                        return L(i) && i.revert && this.revertState
                            ? { ...this.revertState, fetchStatus: "idle" }
                            : {
                                  ...e,
                                  error: i,
                                  errorUpdateCount: e.errorUpdateCount + 1,
                                  errorUpdatedAt: Date.now(),
                                  fetchFailureCount: e.fetchFailureCount + 1,
                                  fetchFailureReason: i,
                                  fetchStatus: "idle",
                                  status: "error",
                              };
                    case "invalidate":
                        return { ...e, isInvalidated: !0 };
                    case "setState":
                        return { ...e, ...t.state };
                }
            })(this.state)),
                B.batch(() => {
                    this.observers.forEach((e) => {
                        e.onQueryUpdate(t);
                    }),
                        this.cache.notify({
                            query: this,
                            type: "updated",
                            action: t,
                        });
                });
        }
    }
    class _ extends a {
        constructor(t) {
            super(),
                (this.config = t || {}),
                (this.queries = []),
                (this.queriesMap = {});
        }
        build(t, e, s) {
            var r;
            const i = e.queryKey,
                n = null != (r = e.queryHash) ? r : O(i, e);
            let o = this.get(n);
            return (
                o ||
                    ((o = new G({
                        cache: this,
                        logger: t.getLogger(),
                        queryKey: i,
                        queryHash: n,
                        options: t.defaultQueryOptions(e),
                        state: s,
                        defaultOptions: t.getQueryDefaults(i),
                    })),
                    this.add(o)),
                o
            );
        }
        add(t) {
            this.queriesMap[t.queryHash] ||
                ((this.queriesMap[t.queryHash] = t),
                this.queries.push(t),
                this.notify({ type: "added", query: t }));
        }
        remove(t) {
            const e = this.queriesMap[t.queryHash];
            e &&
                (t.destroy(),
                (this.queries = this.queries.filter((e) => e !== t)),
                e === t && delete this.queriesMap[t.queryHash],
                this.notify({ type: "removed", query: t }));
        }
        clear() {
            B.batch(() => {
                this.queries.forEach((t) => {
                    this.remove(t);
                });
            });
        }
        get(t) {
            return this.queriesMap[t];
        }
        getAll() {
            return this.queries;
        }
        find(t, e) {
            const [s] = v(t, e);
            return (
                void 0 === s.exact && (s.exact = !0),
                this.queries.find((t) => b(s, t))
            );
        }
        findAll(t, e) {
            const [s] = v(t, e);
            return Object.keys(s).length > 0
                ? this.queries.filter((t) => b(s, t))
                : this.queries;
        }
        notify(t) {
            B.batch(() => {
                this.listeners.forEach(({ listener: e }) => {
                    e(t);
                });
            });
        }
        onFocus() {
            B.batch(() => {
                this.queries.forEach((t) => {
                    t.onFocus();
                });
            });
        }
        onOnline() {
            B.batch(() => {
                this.queries.forEach((t) => {
                    t.onOnline();
                });
            });
        }
    }
    class z extends N {
        constructor(t) {
            super(),
                (this.defaultOptions = t.defaultOptions),
                (this.mutationId = t.mutationId),
                (this.mutationCache = t.mutationCache),
                (this.logger = t.logger || H),
                (this.observers = []),
                (this.state = t.state || W()),
                this.setOptions(t.options),
                this.scheduleGc();
        }
        setOptions(t) {
            (this.options = { ...this.defaultOptions, ...t }),
                this.updateCacheTime(this.options.cacheTime);
        }
        get meta() {
            return this.options.meta;
        }
        setState(t) {
            this.dispatch({ type: "setState", state: t });
        }
        addObserver(t) {
            this.observers.includes(t) ||
                (this.observers.push(t),
                this.clearGcTimeout(),
                this.mutationCache.notify({
                    type: "observerAdded",
                    mutation: this,
                    observer: t,
                }));
        }
        removeObserver(t) {
            (this.observers = this.observers.filter((e) => e !== t)),
                this.scheduleGc(),
                this.mutationCache.notify({
                    type: "observerRemoved",
                    mutation: this,
                    observer: t,
                });
        }
        optionalRemove() {
            this.observers.length ||
                ("loading" === this.state.status
                    ? this.scheduleGc()
                    : this.mutationCache.remove(this));
        }
        continue() {
            var t, e;
            return null !=
                (t = null == (e = this.retryer) ? void 0 : e.continue())
                ? t
                : this.execute();
        }
        async execute() {
            const t = () => {
                    var t;
                    return (
                        (this.retryer = j({
                            fn: () =>
                                this.options.mutationFn
                                    ? this.options.mutationFn(
                                          this.state.variables
                                      )
                                    : Promise.reject("No mutationFn found"),
                            onFail: (t, e) => {
                                this.dispatch({
                                    type: "failed",
                                    failureCount: t,
                                    error: e,
                                });
                            },
                            onPause: () => {
                                this.dispatch({ type: "pause" });
                            },
                            onContinue: () => {
                                this.dispatch({ type: "continue" });
                            },
                            retry: null != (t = this.options.retry) ? t : 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                        })),
                        this.retryer.promise
                    );
                },
                e = "loading" === this.state.status;
            try {
                var s, r, i, n, o, u, a, c;
                if (!e) {
                    var l, h, d, f;
                    this.dispatch({
                        type: "loading",
                        variables: this.options.variables,
                    }),
                        await (null ==
                        (l = (h = this.mutationCache.config).onMutate)
                            ? void 0
                            : l.call(h, this.state.variables, this));
                    const t = await (null == (d = (f = this.options).onMutate)
                        ? void 0
                        : d.call(f, this.state.variables));
                    t !== this.state.context &&
                        this.dispatch({
                            type: "loading",
                            context: t,
                            variables: this.state.variables,
                        });
                }
                const p = await t();
                return (
                    await (null ==
                    (s = (r = this.mutationCache.config).onSuccess)
                        ? void 0
                        : s.call(
                              r,
                              p,
                              this.state.variables,
                              this.state.context,
                              this
                          )),
                    await (null == (i = (n = this.options).onSuccess)
                        ? void 0
                        : i.call(
                              n,
                              p,
                              this.state.variables,
                              this.state.context
                          )),
                    await (null ==
                    (o = (u = this.mutationCache.config).onSettled)
                        ? void 0
                        : o.call(
                              u,
                              p,
                              null,
                              this.state.variables,
                              this.state.context,
                              this
                          )),
                    await (null == (a = (c = this.options).onSettled)
                        ? void 0
                        : a.call(
                              c,
                              p,
                              null,
                              this.state.variables,
                              this.state.context
                          )),
                    this.dispatch({ type: "success", data: p }),
                    p
                );
            } catch (t) {
                try {
                    var p, y, v, m, b, g, O, C;
                    throw (
                        (await (null ==
                        (p = (y = this.mutationCache.config).onError)
                            ? void 0
                            : p.call(
                                  y,
                                  t,
                                  this.state.variables,
                                  this.state.context,
                                  this
                              )),
                        await (null == (v = (m = this.options).onError)
                            ? void 0
                            : v.call(
                                  m,
                                  t,
                                  this.state.variables,
                                  this.state.context
                              )),
                        await (null ==
                        (b = (g = this.mutationCache.config).onSettled)
                            ? void 0
                            : b.call(
                                  g,
                                  void 0,
                                  t,
                                  this.state.variables,
                                  this.state.context,
                                  this
                              )),
                        await (null == (O = (C = this.options).onSettled)
                            ? void 0
                            : O.call(
                                  C,
                                  void 0,
                                  t,
                                  this.state.variables,
                                  this.state.context
                              )),
                        t)
                    );
                } finally {
                    this.dispatch({ type: "error", error: t });
                }
            }
        }
        dispatch(t) {
            (this.state = ((e) => {
                switch (t.type) {
                    case "failed":
                        return {
                            ...e,
                            failureCount: t.failureCount,
                            failureReason: t.error,
                        };
                    case "pause":
                        return { ...e, isPaused: !0 };
                    case "continue":
                        return { ...e, isPaused: !1 };
                    case "loading":
                        return {
                            ...e,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: !T(this.options.networkMode),
                            status: "loading",
                            variables: t.variables,
                        };
                    case "success":
                        return {
                            ...e,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1,
                        };
                    case "error":
                        return {
                            ...e,
                            data: void 0,
                            error: t.error,
                            failureCount: e.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error",
                        };
                    case "setState":
                        return { ...e, ...t.state };
                }
            })(this.state)),
                B.batch(() => {
                    this.observers.forEach((e) => {
                        e.onMutationUpdate(t);
                    }),
                        this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: t,
                        });
                });
        }
    }
    function W() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
        };
    }
    class J extends a {
        constructor(t) {
            super(),
                (this.config = t || {}),
                (this.mutations = []),
                (this.mutationId = 0);
        }
        build(t, e, s) {
            const r = new z({
                mutationCache: this,
                logger: t.getLogger(),
                mutationId: ++this.mutationId,
                options: t.defaultMutationOptions(e),
                state: s,
                defaultOptions: e.mutationKey
                    ? t.getMutationDefaults(e.mutationKey)
                    : void 0,
            });
            return this.add(r), r;
        }
        add(t) {
            this.mutations.push(t), this.notify({ type: "added", mutation: t });
        }
        remove(t) {
            (this.mutations = this.mutations.filter((e) => e !== t)),
                this.notify({ type: "removed", mutation: t });
        }
        clear() {
            B.batch(() => {
                this.mutations.forEach((t) => {
                    this.remove(t);
                });
            });
        }
        getAll() {
            return this.mutations;
        }
        find(t) {
            return (
                void 0 === t.exact && (t.exact = !0),
                this.mutations.find((e) => g(t, e))
            );
        }
        findAll(t) {
            return this.mutations.filter((e) => g(t, e));
        }
        notify(t) {
            B.batch(() => {
                this.listeners.forEach(({ listener: e }) => {
                    e(t);
                });
            });
        }
        resumePausedMutations() {
            var t;
            return (
                (this.resuming = (
                    null != (t = this.resuming) ? t : Promise.resolve()
                )
                    .then(() => {
                        const t = this.mutations.filter(
                            (t) => t.state.isPaused
                        );
                        return B.batch(() =>
                            t.reduce(
                                (t, e) => t.then(() => e.continue().catch(l)),
                                Promise.resolve()
                            )
                        );
                    })
                    .then(() => {
                        this.resuming = void 0;
                    })),
                this.resuming
            );
        }
    }
    function V() {
        return {
            onFetch: (t) => {
                t.fetchFn = () => {
                    var e, s, r, i, n, o;
                    const u =
                            null == (e = t.fetchOptions) || null == (s = e.meta)
                                ? void 0
                                : s.refetchPage,
                        a =
                            null == (r = t.fetchOptions) || null == (i = r.meta)
                                ? void 0
                                : i.fetchMore,
                        c = null == a ? void 0 : a.pageParam,
                        l = "forward" === (null == a ? void 0 : a.direction),
                        h = "backward" === (null == a ? void 0 : a.direction),
                        d =
                            (null == (n = t.state.data) ? void 0 : n.pages) ||
                            [],
                        f =
                            (null == (o = t.state.data)
                                ? void 0
                                : o.pageParams) || [];
                    let p = f,
                        y = !1;
                    const v =
                            t.options.queryFn ||
                            (() =>
                                Promise.reject(
                                    "Missing queryFn for queryKey '" +
                                        t.options.queryHash +
                                        "'"
                                )),
                        m = (t, e, s, r) => (
                            (p = r ? [e, ...p] : [...p, e]),
                            r ? [s, ...t] : [...t, s]
                        ),
                        b = (e, s, r, i) => {
                            if (y) return Promise.reject("Cancelled");
                            if (void 0 === r && !s && e.length)
                                return Promise.resolve(e);
                            const n = {
                                queryKey: t.queryKey,
                                pageParam: r,
                                meta: t.options.meta,
                            };
                            var o;
                            (o = n),
                                Object.defineProperty(o, "signal", {
                                    enumerable: !0,
                                    get: () => {
                                        var e, s;
                                        return (
                                            null != (e = t.signal) && e.aborted
                                                ? (y = !0)
                                                : null == (s = t.signal) ||
                                                  s.addEventListener(
                                                      "abort",
                                                      () => {
                                                          y = !0;
                                                      }
                                                  ),
                                            t.signal
                                        );
                                    },
                                });
                            const u = v(n);
                            return Promise.resolve(u).then((t) =>
                                m(e, r, t, i)
                            );
                        };
                    let g;
                    if (d.length)
                        if (l) {
                            const e = void 0 !== c,
                                s = e ? c : X(t.options, d);
                            g = b(d, e, s);
                        } else if (h) {
                            const e = void 0 !== c,
                                s = e ? c : Y(t.options, d);
                            g = b(d, e, s, !0);
                        } else {
                            p = [];
                            const e = void 0 === t.options.getNextPageParam;
                            g =
                                !u || !d[0] || u(d[0], 0, d)
                                    ? b([], e, f[0])
                                    : Promise.resolve(m([], f[0], d[0]));
                            for (let s = 1; s < d.length; s++)
                                g = g.then((r) => {
                                    if (!u || !d[s] || u(d[s], s, d)) {
                                        const i = e ? f[s] : X(t.options, r);
                                        return b(r, e, i);
                                    }
                                    return Promise.resolve(m(r, f[s], d[s]));
                                });
                        }
                    else g = b([]);
                    return g.then((t) => ({ pages: t, pageParams: p }));
                };
            },
        };
    }
    function X(t, e) {
        return null == t.getNextPageParam
            ? void 0
            : t.getNextPageParam(e[e.length - 1], e);
    }
    function Y(t, e) {
        return null == t.getPreviousPageParam
            ? void 0
            : t.getPreviousPageParam(e[0], e);
    }
    function Z(t, e) {
        if (t.getNextPageParam && Array.isArray(e)) {
            const s = X(t, e);
            return null != s && !1 !== s;
        }
    }
    function $(t, e) {
        if (t.getPreviousPageParam && Array.isArray(e)) {
            const s = Y(t, e);
            return null != s && !1 !== s;
        }
    }
    class tt extends a {
        constructor(t, e) {
            super(),
                (this.client = t),
                (this.options = e),
                (this.trackedProps = new Set()),
                (this.selectError = null),
                this.bindMethods(),
                this.setOptions(e);
        }
        bindMethods() {
            (this.remove = this.remove.bind(this)),
                (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
            1 === this.listeners.size &&
                (this.currentQuery.addObserver(this),
                et(this.currentQuery, this.options) && this.executeFetch(),
                this.updateTimers());
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
            return st(
                this.currentQuery,
                this.options,
                this.options.refetchOnReconnect
            );
        }
        shouldFetchOnWindowFocus() {
            return st(
                this.currentQuery,
                this.options,
                this.options.refetchOnWindowFocus
            );
        }
        destroy() {
            (this.listeners = new Set()),
                this.clearStaleTimeout(),
                this.clearRefetchInterval(),
                this.currentQuery.removeObserver(this);
        }
        setOptions(t, e) {
            const s = this.options,
                r = this.currentQuery;
            if (
                ((this.options = this.client.defaultQueryOptions(t)),
                P(s, this.options) ||
                    this.client
                        .getQueryCache()
                        .notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this,
                        }),
                void 0 !== this.options.enabled &&
                    "boolean" != typeof this.options.enabled)
            )
                throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = s.queryKey),
                this.updateQuery();
            const i = this.hasListeners();
            i &&
                rt(this.currentQuery, r, this.options, s) &&
                this.executeFetch(),
                this.updateResult(e),
                !i ||
                    (this.currentQuery === r &&
                        this.options.enabled === s.enabled &&
                        this.options.staleTime === s.staleTime) ||
                    this.updateStaleTimeout();
            const n = this.computeRefetchInterval();
            !i ||
                (this.currentQuery === r &&
                    this.options.enabled === s.enabled &&
                    n === this.currentRefetchInterval) ||
                this.updateRefetchInterval(n);
        }
        getOptimisticResult(t) {
            const e = this.client.getQueryCache().build(this.client, t),
                s = this.createResult(e, t);
            return (
                (function (t, e, s) {
                    if (s.keepPreviousData) return !1;
                    if (void 0 !== s.placeholderData)
                        return e.isPlaceholderData;
                    if (!P(t.getCurrentResult(), e)) return !0;
                    return !1;
                })(this, s, t) &&
                    ((this.currentResult = s),
                    (this.currentResultOptions = this.options),
                    (this.currentResultState = this.currentQuery.state)),
                s
            );
        }
        getCurrentResult() {
            return this.currentResult;
        }
        trackResult(t) {
            const e = {};
            return (
                Object.keys(t).forEach((s) => {
                    Object.defineProperty(e, s, {
                        configurable: !1,
                        enumerable: !0,
                        get: () => (this.trackedProps.add(s), t[s]),
                    });
                }),
                e
            );
        }
        getCurrentQuery() {
            return this.currentQuery;
        }
        remove() {
            this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch({ refetchPage: t, ...e } = {}) {
            return this.fetch({ ...e, meta: { refetchPage: t } });
        }
        fetchOptimistic(t) {
            const e = this.client.defaultQueryOptions(t),
                s = this.client.getQueryCache().build(this.client, e);
            return (
                (s.isFetchingOptimistic = !0),
                s.fetch().then(() => this.createResult(s, e))
            );
        }
        fetch(t) {
            var e;
            return this.executeFetch({
                ...t,
                cancelRefetch: null == (e = t.cancelRefetch) || e,
            }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(t) {
            this.updateQuery();
            let e = this.currentQuery.fetch(this.options, t);
            return (null != t && t.throwOnError) || (e = e.catch(l)), e;
        }
        updateStaleTimeout() {
            if (
                (this.clearStaleTimeout(),
                c || this.currentResult.isStale || !h(this.options.staleTime))
            )
                return;
            const t =
                f(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
            this.staleTimeoutId = setTimeout(() => {
                this.currentResult.isStale || this.updateResult();
            }, t);
        }
        computeRefetchInterval() {
            var t;
            return "function" == typeof this.options.refetchInterval
                ? this.options.refetchInterval(
                      this.currentResult.data,
                      this.currentQuery
                  )
                : null != (t = this.options.refetchInterval) && t;
        }
        updateRefetchInterval(t) {
            this.clearRefetchInterval(),
                (this.currentRefetchInterval = t),
                !c &&
                    !1 !== this.options.enabled &&
                    h(this.currentRefetchInterval) &&
                    0 !== this.currentRefetchInterval &&
                    (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground ||
                            A.isFocused()) &&
                            this.executeFetch();
                    }, this.currentRefetchInterval));
        }
        updateTimers() {
            this.updateStaleTimeout(),
                this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
            this.staleTimeoutId &&
                (clearTimeout(this.staleTimeoutId),
                (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
            this.refetchIntervalId &&
                (clearInterval(this.refetchIntervalId),
                (this.refetchIntervalId = void 0));
        }
        createResult(t, e) {
            const s = this.currentQuery,
                r = this.options,
                i = this.currentResult,
                n = this.currentResultState,
                o = this.currentResultOptions,
                u = t !== s,
                a = u ? t.state : this.currentQueryInitialState,
                c = u ? this.currentResult : this.previousQueryResult,
                { state: l } = t;
            let h,
                {
                    dataUpdatedAt: d,
                    error: f,
                    errorUpdatedAt: p,
                    fetchStatus: y,
                    status: v,
                } = l,
                m = !1,
                b = !1;
            if (e._optimisticResults) {
                const i = this.hasListeners(),
                    n = !i && et(t, e),
                    o = i && rt(t, s, e, r);
                (n || o) &&
                    ((y = T(t.options.networkMode) ? "fetching" : "paused"),
                    d || (v = "loading")),
                    "isRestoring" === e._optimisticResults && (y = "idle");
            }
            if (
                e.keepPreviousData &&
                !l.dataUpdatedAt &&
                null != c &&
                c.isSuccess &&
                "error" !== v
            )
                (h = c.data), (d = c.dataUpdatedAt), (v = c.status), (m = !0);
            else if (e.select && void 0 !== l.data)
                if (
                    i &&
                    l.data === (null == n ? void 0 : n.data) &&
                    e.select === this.selectFn
                )
                    h = this.selectResult;
                else
                    try {
                        (this.selectFn = e.select),
                            (h = e.select(l.data)),
                            (h = D(null == i ? void 0 : i.data, h, e)),
                            (this.selectResult = h),
                            (this.selectError = null);
                    } catch (t) {
                        this.selectError = t;
                    }
            else h = l.data;
            if (
                void 0 !== e.placeholderData &&
                void 0 === h &&
                "loading" === v
            ) {
                let t;
                if (
                    null != i &&
                    i.isPlaceholderData &&
                    e.placeholderData ===
                        (null == o ? void 0 : o.placeholderData)
                )
                    t = i.data;
                else if (
                    ((t =
                        "function" == typeof e.placeholderData
                            ? e.placeholderData()
                            : e.placeholderData),
                    e.select && void 0 !== t)
                )
                    try {
                        (t = e.select(t)), (this.selectError = null);
                    } catch (t) {
                        this.selectError = t;
                    }
                void 0 !== t &&
                    ((v = "success"),
                    (h = D(null == i ? void 0 : i.data, t, e)),
                    (b = !0));
            }
            this.selectError &&
                ((f = this.selectError),
                (h = this.selectResult),
                (p = Date.now()),
                (v = "error"));
            const g = "fetching" === y,
                O = "loading" === v,
                C = "error" === v;
            return {
                status: v,
                fetchStatus: y,
                isLoading: O,
                isSuccess: "success" === v,
                isError: C,
                isInitialLoading: O && g,
                data: h,
                dataUpdatedAt: d,
                error: f,
                errorUpdatedAt: p,
                failureCount: l.fetchFailureCount,
                failureReason: l.fetchFailureReason,
                errorUpdateCount: l.errorUpdateCount,
                isFetched: l.dataUpdateCount > 0 || l.errorUpdateCount > 0,
                isFetchedAfterMount:
                    l.dataUpdateCount > a.dataUpdateCount ||
                    l.errorUpdateCount > a.errorUpdateCount,
                isFetching: g,
                isRefetching: g && !O,
                isLoadingError: C && 0 === l.dataUpdatedAt,
                isPaused: "paused" === y,
                isPlaceholderData: b,
                isPreviousData: m,
                isRefetchError: C && 0 !== l.dataUpdatedAt,
                isStale: it(t, e),
                refetch: this.refetch,
                remove: this.remove,
            };
        }
        updateResult(t) {
            const e = this.currentResult,
                s = this.createResult(this.currentQuery, this.options);
            if (
                ((this.currentResultState = this.currentQuery.state),
                (this.currentResultOptions = this.options),
                P(s, e))
            )
                return;
            this.currentResult = s;
            const r = { cache: !0 };
            !1 !== (null == t ? void 0 : t.listeners) &&
                (() => {
                    if (!e) return !0;
                    const { notifyOnChangeProps: t } = this.options,
                        s = "function" == typeof t ? t() : t;
                    if ("all" === s || (!s && !this.trackedProps.size))
                        return !0;
                    const r = new Set(null != s ? s : this.trackedProps);
                    return (
                        this.options.useErrorBoundary && r.add("error"),
                        Object.keys(this.currentResult).some((t) => {
                            const s = t;
                            return this.currentResult[s] !== e[s] && r.has(s);
                        })
                    );
                })() &&
                (r.listeners = !0),
                this.notify({ ...r, ...t });
        }
        updateQuery() {
            const t = this.client
                .getQueryCache()
                .build(this.client, this.options);
            if (t === this.currentQuery) return;
            const e = this.currentQuery;
            (this.currentQuery = t),
                (this.currentQueryInitialState = t.state),
                (this.previousQueryResult = this.currentResult),
                this.hasListeners() &&
                    (null == e || e.removeObserver(this), t.addObserver(this));
        }
        onQueryUpdate(t) {
            const e = {};
            "success" === t.type
                ? (e.onSuccess = !t.manual)
                : "error" !== t.type || L(t.error) || (e.onError = !0),
                this.updateResult(e),
                this.hasListeners() && this.updateTimers();
        }
        notify(t) {
            B.batch(() => {
                var e, s, r, i;
                if (t.onSuccess)
                    null == (e = (s = this.options).onSuccess) ||
                        e.call(s, this.currentResult.data),
                        null == (r = (i = this.options).onSettled) ||
                            r.call(i, this.currentResult.data, null);
                else if (t.onError) {
                    var n, o, u, a;
                    null == (n = (o = this.options).onError) ||
                        n.call(o, this.currentResult.error),
                        null == (u = (a = this.options).onSettled) ||
                            u.call(a, void 0, this.currentResult.error);
                }
                t.listeners &&
                    this.listeners.forEach(({ listener: t }) => {
                        t(this.currentResult);
                    }),
                    t.cache &&
                        this.client
                            .getQueryCache()
                            .notify({
                                query: this.currentQuery,
                                type: "observerResultsUpdated",
                            });
            });
        }
    }
    function et(t, e) {
        return (
            (function (t, e) {
                return !(
                    !1 === e.enabled ||
                    t.state.dataUpdatedAt ||
                    ("error" === t.state.status && !1 === e.retryOnMount)
                );
            })(t, e) ||
            (t.state.dataUpdatedAt > 0 && st(t, e, e.refetchOnMount))
        );
    }
    function st(t, e, s) {
        if (!1 !== e.enabled) {
            const r = "function" == typeof s ? s(t) : s;
            return "always" === r || (!1 !== r && it(t, e));
        }
        return !1;
    }
    function rt(t, e, s, r) {
        return (
            !1 !== s.enabled &&
            (t !== e || !1 === r.enabled) &&
            (!s.suspense || "error" !== t.state.status) &&
            it(t, s)
        );
    }
    function it(t, e) {
        return t.isStaleByTime(e.staleTime);
    }
    class nt extends a {
        constructor(t, e) {
            super(),
                (this.client = t),
                (this.queries = []),
                (this.result = []),
                (this.observers = []),
                (this.observersMap = {}),
                e && this.setQueries(e);
        }
        onSubscribe() {
            1 === this.listeners.size &&
                this.observers.forEach((t) => {
                    t.subscribe((e) => {
                        this.onUpdate(t, e);
                    });
                });
        }
        onUnsubscribe() {
            this.listeners.size || this.destroy();
        }
        destroy() {
            (this.listeners = new Set()),
                this.observers.forEach((t) => {
                    t.destroy();
                });
        }
        setQueries(t, e) {
            (this.queries = t),
                B.batch(() => {
                    const t = this.observers,
                        s = this.findMatchingObservers(this.queries);
                    s.forEach((t) =>
                        t.observer.setOptions(t.defaultedQueryOptions, e)
                    );
                    const r = s.map((t) => t.observer),
                        i = Object.fromEntries(
                            r.map((t) => [t.options.queryHash, t])
                        ),
                        n = r.map((t) => t.getCurrentResult()),
                        o = r.some((e, s) => e !== t[s]);
                    (t.length !== r.length || o) &&
                        ((this.observers = r),
                        (this.observersMap = i),
                        (this.result = n),
                        this.hasListeners() &&
                            (d(t, r).forEach((t) => {
                                t.destroy();
                            }),
                            d(r, t).forEach((t) => {
                                t.subscribe((e) => {
                                    this.onUpdate(t, e);
                                });
                            }),
                            this.notify()));
                });
        }
        getCurrentResult() {
            return this.result;
        }
        getQueries() {
            return this.observers.map((t) => t.getCurrentQuery());
        }
        getObservers() {
            return this.observers;
        }
        getOptimisticResult(t) {
            return this.findMatchingObservers(t).map((t) =>
                t.observer.getOptimisticResult(t.defaultedQueryOptions)
            );
        }
        findMatchingObservers(t) {
            const e = this.observers,
                s = new Map(e.map((t) => [t.options.queryHash, t])),
                r = t.map((t) => this.client.defaultQueryOptions(t)),
                i = r.flatMap((t) => {
                    const e = s.get(t.queryHash);
                    return null != e
                        ? [{ defaultedQueryOptions: t, observer: e }]
                        : [];
                }),
                n = new Set(i.map((t) => t.defaultedQueryOptions.queryHash)),
                o = r.filter((t) => !n.has(t.queryHash)),
                u = new Set(i.map((t) => t.observer)),
                a = e.filter((t) => !u.has(t)),
                c = (t) => {
                    const e = this.client.defaultQueryOptions(t),
                        s = this.observersMap[e.queryHash];
                    return null != s ? s : new tt(this.client, e);
                },
                l = o.map((t, e) => {
                    if (t.keepPreviousData) {
                        const s = a[e];
                        if (void 0 !== s)
                            return { defaultedQueryOptions: t, observer: s };
                    }
                    return { defaultedQueryOptions: t, observer: c(t) };
                });
            return i
                .concat(l)
                .sort(
                    (t, e) =>
                        r.indexOf(t.defaultedQueryOptions) -
                        r.indexOf(e.defaultedQueryOptions)
                );
        }
        onUpdate(t, e) {
            const s = this.observers.indexOf(t);
            -1 !== s &&
                ((this.result = (function (t, e, s) {
                    const r = t.slice(0);
                    return (r[e] = s), r;
                })(this.result, s, e)),
                this.notify());
        }
        notify() {
            B.batch(() => {
                this.listeners.forEach(({ listener: t }) => {
                    t(this.result);
                });
            });
        }
    }
    class ot extends tt {
        constructor(t, e) {
            super(t, e);
        }
        bindMethods() {
            super.bindMethods(),
                (this.fetchNextPage = this.fetchNextPage.bind(this)),
                (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(t, e) {
            super.setOptions({ ...t, behavior: V() }, e);
        }
        getOptimisticResult(t) {
            return (t.behavior = V()), super.getOptimisticResult(t);
        }
        fetchNextPage({ pageParam: t, ...e } = {}) {
            return this.fetch({
                ...e,
                meta: { fetchMore: { direction: "forward", pageParam: t } },
            });
        }
        fetchPreviousPage({ pageParam: t, ...e } = {}) {
            return this.fetch({
                ...e,
                meta: { fetchMore: { direction: "backward", pageParam: t } },
            });
        }
        createResult(t, e) {
            var s, r, i, n, o, u;
            const { state: a } = t,
                c = super.createResult(t, e),
                { isFetching: l, isRefetching: h } = c,
                d =
                    l &&
                    "forward" ===
                        (null == (s = a.fetchMeta) || null == (r = s.fetchMore)
                            ? void 0
                            : r.direction),
                f =
                    l &&
                    "backward" ===
                        (null == (i = a.fetchMeta) || null == (n = i.fetchMore)
                            ? void 0
                            : n.direction);
            return {
                ...c,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: Z(e, null == (o = a.data) ? void 0 : o.pages),
                hasPreviousPage: $(e, null == (u = a.data) ? void 0 : u.pages),
                isFetchingNextPage: d,
                isFetchingPreviousPage: f,
                isRefetching: h && !d && !f,
            };
        }
    }
    class ut extends a {
        constructor(t, e) {
            super(),
                (this.client = t),
                this.setOptions(e),
                this.bindMethods(),
                this.updateResult();
        }
        bindMethods() {
            (this.mutate = this.mutate.bind(this)),
                (this.reset = this.reset.bind(this));
        }
        setOptions(t) {
            var e;
            const s = this.options;
            (this.options = this.client.defaultMutationOptions(t)),
                P(s, this.options) ||
                    this.client
                        .getMutationCache()
                        .notify({
                            type: "observerOptionsUpdated",
                            mutation: this.currentMutation,
                            observer: this,
                        }),
                null == (e = this.currentMutation) ||
                    e.setOptions(this.options);
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() ||
                null == (t = this.currentMutation) ||
                t.removeObserver(this);
        }
        onMutationUpdate(t) {
            this.updateResult();
            const e = { listeners: !0 };
            "success" === t.type
                ? (e.onSuccess = !0)
                : "error" === t.type && (e.onError = !0),
                this.notify(e);
        }
        getCurrentResult() {
            return this.currentResult;
        }
        reset() {
            (this.currentMutation = void 0),
                this.updateResult(),
                this.notify({ listeners: !0 });
        }
        mutate(t, e) {
            return (
                (this.mutateOptions = e),
                this.currentMutation &&
                    this.currentMutation.removeObserver(this),
                (this.currentMutation = this.client
                    .getMutationCache()
                    .build(this.client, {
                        ...this.options,
                        variables: void 0 !== t ? t : this.options.variables,
                    })),
                this.currentMutation.addObserver(this),
                this.currentMutation.execute()
            );
        }
        updateResult() {
            const t = this.currentMutation
                    ? this.currentMutation.state
                    : {
                          context: void 0,
                          data: void 0,
                          error: null,
                          failureCount: 0,
                          failureReason: null,
                          isPaused: !1,
                          status: "idle",
                          variables: void 0,
                      },
                e = {
                    ...t,
                    isLoading: "loading" === t.status,
                    isSuccess: "success" === t.status,
                    isError: "error" === t.status,
                    isIdle: "idle" === t.status,
                    mutate: this.mutate,
                    reset: this.reset,
                };
            this.currentResult = e;
        }
        notify(t) {
            B.batch(() => {
                var e, s, r, i;
                if (this.mutateOptions && this.hasListeners())
                    if (t.onSuccess)
                        null == (e = (s = this.mutateOptions).onSuccess) ||
                            e.call(
                                s,
                                this.currentResult.data,
                                this.currentResult.variables,
                                this.currentResult.context
                            ),
                            null == (r = (i = this.mutateOptions).onSettled) ||
                                r.call(
                                    i,
                                    this.currentResult.data,
                                    null,
                                    this.currentResult.variables,
                                    this.currentResult.context
                                );
                    else if (t.onError) {
                        var n, o, u, a;
                        null == (n = (o = this.mutateOptions).onError) ||
                            n.call(
                                o,
                                this.currentResult.error,
                                this.currentResult.variables,
                                this.currentResult.context
                            ),
                            null == (u = (a = this.mutateOptions).onSettled) ||
                                u.call(
                                    a,
                                    void 0,
                                    this.currentResult.error,
                                    this.currentResult.variables,
                                    this.currentResult.context
                                );
                    }
                t.listeners &&
                    this.listeners.forEach(({ listener: t }) => {
                        t(this.currentResult);
                    });
            });
        }
    }
    function at(t) {
        return t.state.isPaused;
    }
    function ct(t) {
        return "success" === t.state.status;
    }
    function lt(t, e, s) {
        if ("object" != typeof e || null === e) return;
        const r = t.getMutationCache(),
            i = t.getQueryCache(),
            n = e.mutations || [],
            o = e.queries || [];
        n.forEach((e) => {
            var i;
            r.build(
                t,
                {
                    ...(null == s || null == (i = s.defaultOptions)
                        ? void 0
                        : i.mutations),
                    mutationKey: e.mutationKey,
                },
                e.state
            );
        }),
            o.forEach(({ queryKey: e, state: r, queryHash: n }) => {
                var o;
                const u = i.get(n);
                if (u) {
                    if (u.state.dataUpdatedAt < r.dataUpdatedAt) {
                        const { fetchStatus: t, ...e } = r;
                        u.setState(e);
                    }
                } else
                    i.build(
                        t,
                        {
                            ...(null == s || null == (o = s.defaultOptions)
                                ? void 0
                                : o.queries),
                            queryKey: e,
                            queryHash: n,
                        },
                        { ...r, fetchStatus: "idle" }
                    );
            });
    }
    const ht = n.unstable_batchedUpdates;
    B.setBatchNotifyFunction(ht);
    var dt,
        ft = { exports: {} },
        pt = {};
    !(function (t) {
        t.exports = (function () {
            if (dt) return pt;
            dt = 1;
            var t = o.default,
                e =
                    "function" == typeof Object.is
                        ? Object.is
                        : function (t, e) {
                              return (
                                  (t === e && (0 !== t || 1 / t == 1 / e)) ||
                                  (t != t && e != e)
                              );
                          },
                s = t.useState,
                r = t.useEffect,
                i = t.useLayoutEffect,
                n = t.useDebugValue;
            function u(t) {
                var s = t.getSnapshot;
                t = t.value;
                try {
                    var r = s();
                    return !e(t, r);
                } catch (t) {
                    return !0;
                }
            }
            var a =
                "undefined" == typeof window ||
                void 0 === window.document ||
                void 0 === window.document.createElement
                    ? function (t, e) {
                          return e();
                      }
                    : function (t, e) {
                          var o = e(),
                              a = s({ inst: { value: o, getSnapshot: e } }),
                              c = a[0].inst,
                              l = a[1];
                          return (
                              i(
                                  function () {
                                      (c.value = o),
                                          (c.getSnapshot = e),
                                          u(c) && l({ inst: c });
                                  },
                                  [t, o, e]
                              ),
                              r(
                                  function () {
                                      return (
                                          u(c) && l({ inst: c }),
                                          t(function () {
                                              u(c) && l({ inst: c });
                                          })
                                      );
                                  },
                                  [t]
                              ),
                              n(o),
                              o
                          );
                      };
            return (
                (pt.useSyncExternalStore =
                    void 0 !== t.useSyncExternalStore
                        ? t.useSyncExternalStore
                        : a),
                pt
            );
        })();
    })(ft);
    const yt = ft.exports.useSyncExternalStore,
        vt = u.createContext(void 0),
        mt = u.createContext(!1);
    function bt(t, e) {
        return (
            t ||
            (e && "undefined" != typeof window
                ? (window.ReactQueryClientContext ||
                      (window.ReactQueryClientContext = vt),
                  window.ReactQueryClientContext)
                : vt)
        );
    }
    const gt = ({ context: t } = {}) => {
            const e = u.useContext(bt(t, u.useContext(mt)));
            if (!e)
                throw new Error(
                    "No QueryClient set, use QueryClientProvider to set one"
                );
            return e;
        },
        Ot = u.createContext(!1),
        Ct = () => u.useContext(Ot),
        Rt = Ot.Provider;
    function St() {
        let t = !1;
        return {
            clearReset: () => {
                t = !1;
            },
            reset: () => {
                t = !0;
            },
            isReset: () => t,
        };
    }
    const qt = u.createContext(St()),
        Pt = () => u.useContext(qt);
    function Qt(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
    }
    const Et = (t, e) => {
            (t.suspense || t.useErrorBoundary) &&
                (e.isReset() || (t.retryOnMount = !1));
        },
        wt = (t) => {
            u.useEffect(() => {
                t.clearReset();
            }, [t]);
        },
        Mt = ({
            result: t,
            errorResetBoundary: e,
            useErrorBoundary: s,
            query: r,
        }) => t.isError && !e.isReset() && !t.isFetching && Qt(s, [t.error, r]),
        xt = (t) => {
            t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3);
        },
        Ft = (t, e) => t.isLoading && t.isFetching && !e,
        Dt = (t, e, s) => (null == t ? void 0 : t.suspense) && Ft(e, s),
        At = (t, e, s) =>
            e
                .fetchOptimistic(t)
                .then(({ data: e }) => {
                    null == t.onSuccess || t.onSuccess(e),
                        null == t.onSettled || t.onSettled(e, null);
                })
                .catch((e) => {
                    s.clearReset(),
                        null == t.onError || t.onError(e),
                        null == t.onSettled || t.onSettled(void 0, e);
                });
    function Ut(t, e) {
        const s = gt({ context: t.context }),
            r = Ct(),
            i = Pt(),
            n = s.defaultQueryOptions(t);
        (n._optimisticResults = r ? "isRestoring" : "optimistic"),
            n.onError && (n.onError = B.batchCalls(n.onError)),
            n.onSuccess && (n.onSuccess = B.batchCalls(n.onSuccess)),
            n.onSettled && (n.onSettled = B.batchCalls(n.onSettled)),
            xt(n),
            Et(n, i),
            wt(i);
        const [o] = u.useState(() => new e(s, n)),
            a = o.getOptimisticResult(n);
        if (
            (yt(
                u.useCallback(
                    (t) => {
                        const e = r ? () => {} : o.subscribe(B.batchCalls(t));
                        return o.updateResult(), e;
                    },
                    [o, r]
                ),
                () => o.getCurrentResult(),
                () => o.getCurrentResult()
            ),
            u.useEffect(() => {
                o.setOptions(n, { listeners: !1 });
            }, [n, o]),
            Dt(n, a, r))
        )
            throw At(n, o, i);
        if (
            Mt({
                result: a,
                errorResetBoundary: i,
                useErrorBoundary: n.useErrorBoundary,
                query: o.getCurrentQuery(),
            })
        )
            throw a.error;
        return n.notifyOnChangeProps ? a : o.trackResult(a);
    }
    function It(t, e = {}) {
        const s = gt({ context: e.context }),
            r = u.useRef(e);
        (r.current = e),
            u.useMemo(() => {
                t && lt(s, t, r.current);
            }, [s, t]);
    }
    function Kt() {}
    (t.CancelledError = k),
        (t.Hydrate = ({ children: t, options: e, state: s }) => (It(s, e), t)),
        (t.InfiniteQueryObserver = ot),
        (t.IsRestoringProvider = Rt),
        (t.MutationCache = J),
        (t.MutationObserver = ut),
        (t.QueriesObserver = nt),
        (t.Query = G),
        (t.QueryCache = _),
        (t.QueryClient = class {
            constructor(t = {}) {
                (this.queryCache = t.queryCache || new _()),
                    (this.mutationCache = t.mutationCache || new J()),
                    (this.logger = t.logger || H),
                    (this.defaultOptions = t.defaultOptions || {}),
                    (this.queryDefaults = []),
                    (this.mutationDefaults = []),
                    (this.mountCount = 0);
            }
            mount() {
                this.mountCount++,
                    1 === this.mountCount &&
                        ((this.unsubscribeFocus = A.subscribe(() => {
                            A.isFocused() &&
                                (this.resumePausedMutations(),
                                this.queryCache.onFocus());
                        })),
                        (this.unsubscribeOnline = I.subscribe(() => {
                            I.isOnline() &&
                                (this.resumePausedMutations(),
                                this.queryCache.onOnline());
                        })));
            }
            unmount() {
                var t, e;
                this.mountCount--,
                    0 === this.mountCount &&
                        (null == (t = this.unsubscribeFocus) || t.call(this),
                        (this.unsubscribeFocus = void 0),
                        null == (e = this.unsubscribeOnline) || e.call(this),
                        (this.unsubscribeOnline = void 0));
            }
            isFetching(t, e) {
                const [s] = v(t, e);
                return (
                    (s.fetchStatus = "fetching"),
                    this.queryCache.findAll(s).length
                );
            }
            isMutating(t) {
                return this.mutationCache.findAll({ ...t, fetching: !0 })
                    .length;
            }
            getQueryData(t, e) {
                var s;
                return null == (s = this.queryCache.find(t, e))
                    ? void 0
                    : s.state.data;
            }
            ensureQueryData(t, e, s) {
                const r = p(t, e, s),
                    i = this.getQueryData(r.queryKey);
                return i ? Promise.resolve(i) : this.fetchQuery(r);
            }
            getQueriesData(t) {
                return this.getQueryCache()
                    .findAll(t)
                    .map(({ queryKey: t, state: e }) => [t, e.data]);
            }
            setQueryData(t, e, s) {
                const r = this.queryCache.find(t),
                    i = (function (t, e) {
                        return "function" == typeof t ? t(e) : t;
                    })(e, null == r ? void 0 : r.state.data);
                if (void 0 === i) return;
                const n = p(t),
                    o = this.defaultQueryOptions(n);
                return this.queryCache
                    .build(this, o)
                    .setData(i, { ...s, manual: !0 });
            }
            setQueriesData(t, e, s) {
                return B.batch(() =>
                    this.getQueryCache()
                        .findAll(t)
                        .map(({ queryKey: t }) => [
                            t,
                            this.setQueryData(t, e, s),
                        ])
                );
            }
            getQueryState(t, e) {
                var s;
                return null == (s = this.queryCache.find(t, e))
                    ? void 0
                    : s.state;
            }
            removeQueries(t, e) {
                const [s] = v(t, e),
                    r = this.queryCache;
                B.batch(() => {
                    r.findAll(s).forEach((t) => {
                        r.remove(t);
                    });
                });
            }
            resetQueries(t, e, s) {
                const [r, i] = v(t, e, s),
                    n = this.queryCache,
                    o = { type: "active", ...r };
                return B.batch(
                    () => (
                        n.findAll(r).forEach((t) => {
                            t.reset();
                        }),
                        this.refetchQueries(o, i)
                    )
                );
            }
            cancelQueries(t, e, s) {
                const [r, i = {}] = v(t, e, s);
                void 0 === i.revert && (i.revert = !0);
                const n = B.batch(() =>
                    this.queryCache.findAll(r).map((t) => t.cancel(i))
                );
                return Promise.all(n).then(l).catch(l);
            }
            invalidateQueries(t, e, s) {
                const [r, i] = v(t, e, s);
                return B.batch(() => {
                    var t, e;
                    if (
                        (this.queryCache.findAll(r).forEach((t) => {
                            t.invalidate();
                        }),
                        "none" === r.refetchType)
                    )
                        return Promise.resolve();
                    const s = {
                        ...r,
                        type:
                            null !=
                            (t = null != (e = r.refetchType) ? e : r.type)
                                ? t
                                : "active",
                    };
                    return this.refetchQueries(s, i);
                });
            }
            refetchQueries(t, e, s) {
                const [r, i] = v(t, e, s),
                    n = B.batch(() =>
                        this.queryCache
                            .findAll(r)
                            .filter((t) => !t.isDisabled())
                            .map((t) => {
                                var e;
                                return t.fetch(void 0, {
                                    ...i,
                                    cancelRefetch:
                                        null ==
                                            (e =
                                                null == i
                                                    ? void 0
                                                    : i.cancelRefetch) || e,
                                    meta: { refetchPage: r.refetchPage },
                                });
                            })
                    );
                let o = Promise.all(n).then(l);
                return (null != i && i.throwOnError) || (o = o.catch(l)), o;
            }
            fetchQuery(t, e, s) {
                const r = p(t, e, s),
                    i = this.defaultQueryOptions(r);
                void 0 === i.retry && (i.retry = !1);
                const n = this.queryCache.build(this, i);
                return n.isStaleByTime(i.staleTime)
                    ? n.fetch(i)
                    : Promise.resolve(n.state.data);
            }
            prefetchQuery(t, e, s) {
                return this.fetchQuery(t, e, s).then(l).catch(l);
            }
            fetchInfiniteQuery(t, e, s) {
                const r = p(t, e, s);
                return (r.behavior = V()), this.fetchQuery(r);
            }
            prefetchInfiniteQuery(t, e, s) {
                return this.fetchInfiniteQuery(t, e, s).then(l).catch(l);
            }
            resumePausedMutations() {
                return this.mutationCache.resumePausedMutations();
            }
            getQueryCache() {
                return this.queryCache;
            }
            getMutationCache() {
                return this.mutationCache;
            }
            getLogger() {
                return this.logger;
            }
            getDefaultOptions() {
                return this.defaultOptions;
            }
            setDefaultOptions(t) {
                this.defaultOptions = t;
            }
            setQueryDefaults(t, e) {
                const s = this.queryDefaults.find(
                    (e) => C(t) === C(e.queryKey)
                );
                s
                    ? (s.defaultOptions = e)
                    : this.queryDefaults.push({
                          queryKey: t,
                          defaultOptions: e,
                      });
            }
            getQueryDefaults(t) {
                if (!t) return;
                const e = this.queryDefaults.find((e) => R(t, e.queryKey));
                return null == e ? void 0 : e.defaultOptions;
            }
            setMutationDefaults(t, e) {
                const s = this.mutationDefaults.find(
                    (e) => C(t) === C(e.mutationKey)
                );
                s
                    ? (s.defaultOptions = e)
                    : this.mutationDefaults.push({
                          mutationKey: t,
                          defaultOptions: e,
                      });
            }
            getMutationDefaults(t) {
                if (!t) return;
                const e = this.mutationDefaults.find((e) =>
                    R(t, e.mutationKey)
                );
                return null == e ? void 0 : e.defaultOptions;
            }
            defaultQueryOptions(t) {
                if (null != t && t._defaulted) return t;
                const e = {
                    ...this.defaultOptions.queries,
                    ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
                    ...t,
                    _defaulted: !0,
                };
                return (
                    !e.queryHash &&
                        e.queryKey &&
                        (e.queryHash = O(e.queryKey, e)),
                    void 0 === e.refetchOnReconnect &&
                        (e.refetchOnReconnect = "always" !== e.networkMode),
                    void 0 === e.useErrorBoundary &&
                        (e.useErrorBoundary = !!e.suspense),
                    e
                );
            }
            defaultMutationOptions(t) {
                return null != t && t._defaulted
                    ? t
                    : {
                          ...this.defaultOptions.mutations,
                          ...this.getMutationDefaults(
                              null == t ? void 0 : t.mutationKey
                          ),
                          ...t,
                          _defaulted: !0,
                      };
            }
            clear() {
                this.queryCache.clear(), this.mutationCache.clear();
            }
        }),
        (t.QueryClientProvider = ({
            client: t,
            children: e,
            context: s,
            contextSharing: r = !1,
        }) => {
            u.useEffect(
                () => (
                    t.mount(),
                    () => {
                        t.unmount();
                    }
                ),
                [t]
            );
            const i = bt(s, r);
            return u.createElement(
                mt.Provider,
                { value: !s && r },
                u.createElement(i.Provider, { value: t }, e)
            );
        }),
        (t.QueryErrorResetBoundary = ({ children: t }) => {
            const [e] = u.useState(() => St());
            return u.createElement(
                qt.Provider,
                { value: e },
                "function" == typeof t ? t(e) : t
            );
        }),
        (t.QueryObserver = tt),
        (t.defaultContext = vt),
        (t.defaultShouldDehydrateMutation = at),
        (t.defaultShouldDehydrateQuery = ct),
        (t.dehydrate = function (t, e = {}) {
            const s = [],
                r = [];
            if (!1 !== e.dehydrateMutations) {
                const r = e.shouldDehydrateMutation || at;
                t.getMutationCache()
                    .getAll()
                    .forEach((t) => {
                        r(t) &&
                            s.push(
                                (function (t) {
                                    return {
                                        mutationKey: t.options.mutationKey,
                                        state: t.state,
                                    };
                                })(t)
                            );
                    });
            }
            if (!1 !== e.dehydrateQueries) {
                const s = e.shouldDehydrateQuery || ct;
                t.getQueryCache()
                    .getAll()
                    .forEach((t) => {
                        s(t) &&
                            r.push(
                                (function (t) {
                                    return {
                                        state: t.state,
                                        queryKey: t.queryKey,
                                        queryHash: t.queryHash,
                                    };
                                })(t)
                            );
                    });
            }
            return { mutations: s, queries: r };
        }),
        (t.focusManager = A),
        (t.hashQueryKey = C),
        (t.hydrate = lt),
        (t.isCancelledError = L),
        (t.isError = function (t) {
            return t instanceof Error;
        }),
        (t.isServer = c),
        (t.matchQuery = b),
        (t.notifyManager = B),
        (t.onlineManager = I),
        (t.parseFilterArgs = v),
        (t.parseMutationArgs = y),
        (t.parseMutationFilterArgs = m),
        (t.parseQueryArgs = p),
        (t.replaceEqualDeep = q),
        (t.useHydrate = It),
        (t.useInfiniteQuery = function (t, e, s) {
            return Ut(p(t, e, s), ot);
        }),
        (t.useIsFetching = function (t, e, s) {
            const [r, i = {}] = v(t, e, s),
                n = gt({ context: i.context }),
                o = n.getQueryCache();
            return yt(
                u.useCallback((t) => o.subscribe(B.batchCalls(t)), [o]),
                () => n.isFetching(r),
                () => n.isFetching(r)
            );
        }),
        (t.useIsMutating = function (t, e, s) {
            const [r, i = {}] = m(t, e, s),
                n = gt({ context: i.context }),
                o = n.getMutationCache();
            return yt(
                u.useCallback((t) => o.subscribe(B.batchCalls(t)), [o]),
                () => n.isMutating(r),
                () => n.isMutating(r)
            );
        }),
        (t.useIsRestoring = Ct),
        (t.useMutation = function (t, e, s) {
            const r = y(t, e, s),
                i = gt({ context: r.context }),
                [n] = u.useState(() => new ut(i, r));
            u.useEffect(() => {
                n.setOptions(r);
            }, [n, r]);
            const o = yt(
                    u.useCallback((t) => n.subscribe(B.batchCalls(t)), [n]),
                    () => n.getCurrentResult(),
                    () => n.getCurrentResult()
                ),
                a = u.useCallback(
                    (t, e) => {
                        n.mutate(t, e).catch(Kt);
                    },
                    [n]
                );
            if (o.error && Qt(n.options.useErrorBoundary, [o.error]))
                throw o.error;
            return { ...o, mutate: a, mutateAsync: o.mutate };
        }),
        (t.useQueries = function ({ queries: t, context: e }) {
            const s = gt({ context: e }),
                r = Ct(),
                i = Pt(),
                n = u.useMemo(
                    () =>
                        t.map((t) => {
                            const e = s.defaultQueryOptions(t);
                            return (
                                (e._optimisticResults = r
                                    ? "isRestoring"
                                    : "optimistic"),
                                e
                            );
                        }),
                    [t, s, r]
                );
            n.forEach((t) => {
                xt(t), Et(t, i);
            }),
                wt(i);
            const [o] = u.useState(() => new nt(s, n)),
                a = o.getOptimisticResult(n);
            yt(
                u.useCallback(
                    (t) => (r ? () => {} : o.subscribe(B.batchCalls(t))),
                    [o, r]
                ),
                () => o.getCurrentResult(),
                () => o.getCurrentResult()
            ),
                u.useEffect(() => {
                    o.setQueries(n, { listeners: !1 });
                }, [n, o]);
            const c = a.some((t, e) => Dt(n[e], t, r))
                ? a.flatMap((t, e) => {
                      const s = n[e],
                          u = o.getObservers()[e];
                      if (s && u) {
                          if (Dt(s, t, r)) return At(s, u, i);
                          Ft(t, r) && At(s, u, i);
                      }
                      return [];
                  })
                : [];
            if (c.length > 0) throw Promise.all(c);
            const l = o.getQueries(),
                h = a.find((t, e) => {
                    var s, r;
                    return Mt({
                        result: t,
                        errorResetBoundary: i,
                        useErrorBoundary:
                            null !=
                                (s =
                                    null == (r = n[e])
                                        ? void 0
                                        : r.useErrorBoundary) && s,
                        query: l[e],
                    });
                });
            if (null != h && h.error) throw h.error;
            return a;
        }),
        (t.useQuery = function (t, e, s) {
            return Ut(p(t, e, s), tt);
        }),
        (t.useQueryClient = gt),
        (t.useQueryErrorResetBoundary = Pt),
        Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=index.production.js.map
