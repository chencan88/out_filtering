(function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: o})
    }, n.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(o, r, function (t) {
            return e[t]
        }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 2)
})({
    "0029": function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, "0185": function (e, t, n) {
        var o = n("e5fa");
        e.exports = function (e) {
            return Object(o(e))
        }
    }, "01f9": function (e, t, n) {
        "use strict";
        var o = n("2d00"), r = n("5ca1"), i = n("2aba"), a = n("32e9"), s = n("84f2"), l = n("41a0"), c = n("7f20"),
            u = n("38fd"), p = n("2b4c")("iterator"), d = !([].keys && "next" in [].keys()), f = "@@iterator",
            m = "keys", h = "values", g = function () {
                return this
            };
        e.exports = function (e, t, n, b, v, x, y) {
            l(n, t, b);
            var k, w, _, S = function (e) {
                    if (!d && e in A) return A[e];
                    switch (e) {
                        case m:
                            return function () {
                                return new n(this, e)
                            };
                        case h:
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, T = t + " Iterator", E = v == h, C = !1, A = e.prototype, O = A[p] || A[f] || v && A[v], P = O || S(v),
                N = v ? E ? S("entries") : P : void 0, L = "Array" == t && A.entries || O;
            if (L && (_ = u(L.call(new e)), _ !== Object.prototype && _.next && (c(_, T, !0), o || "function" == typeof _[p] || a(_, p, g))), E && O && O.name !== h && (C = !0, P = function () {
                return O.call(this)
            }), o && !y || !d && !C && A[p] || a(A, p, P), s[t] = P, s[T] = g, v) if (k = {
                values: E ? P : S(h),
                keys: x ? P : S(m),
                entries: N
            }, y) for (w in k) w in A || i(A, w, k[w]); else r(r.P + r.F * (d || C), t, k);
            return k
        }
    }, "0211": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, "body,html{padding:0;margin:0;background-color:rgba(0,0,0,.5)}body .application{font-family:PingFang SC,Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,sans-serif}.introduction-title{font-size:16px;margin-bottom:9px;color:#666}.introduction-text{line-height:20px;font-size:14px;color:#777}.app-wrapper{position:relative;width:100%;height:100%}.app-wrapper .primary{background-color:#ee4d2d!important}.app-wrapper #app{overflow-x:auto}.app-wrapper .application--wrap{max-width:none}.app-container{width:100%;height:100%;margin:0 auto}", ""])
    }, "02f4": function (e, t, n) {
        var o = n("4588"), r = n("be13");
        e.exports = function (e) {
            return function (t, n) {
                var i, a, s = String(r(t)), l = o(n), c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l), i < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, "0390": function (e, t, n) {
        "use strict";
        var o = n("02f4")(!0);
        e.exports = function (e, t, n) {
            return t + (n ? o(e, t).length : 1)
        }
    }, "0394": function (e, t, n) {
        var o = n("8338");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("57bb494a", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "03ca": function (e, t, n) {
        "use strict";
        var o = n("f2fe");

        function r(e) {
            var t, n;
            this.promise = new e(function (e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
            }), this.resolve = o(t), this.reject = o(n)
        }

        e.exports.f = function (e) {
            return new r(e)
        }
    }, "0789": function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return i
        }), n.d(t, "d", function () {
            return a
        }), n.d(t, "b", function () {
            return s
        }), n.d(t, "c", function () {
            return l
        }), n.d(t, "a", function () {
            return c
        });
        var o = n("80d2"), r = n("163e"),
            i = (Object(o["f"])("bottom-sheet-transition"), Object(o["f"])("carousel-transition"), Object(o["f"])("carousel-reverse-transition"), Object(o["f"])("tab-transition")),
            a = Object(o["f"])("tab-reverse-transition"),
            s = (Object(o["f"])("menu-transition"), Object(o["f"])("fab-transition", "center center", "out-in"), Object(o["f"])("dialog-transition"), Object(o["f"])("dialog-bottom-transition"), Object(o["f"])("fade-transition")),
            l = (Object(o["f"])("scale-transition"), Object(o["f"])("scroll-x-transition"), Object(o["f"])("scroll-x-reverse-transition"), Object(o["f"])("scroll-y-transition"), Object(o["f"])("scroll-y-reverse-transition"), Object(o["f"])("slide-x-transition")),
            c = (Object(o["f"])("slide-x-reverse-transition"), Object(o["f"])("slide-y-transition"), Object(o["f"])("slide-y-reverse-transition"), Object(o["d"])("expand-transition", Object(r["a"])()));
        Object(o["d"])("expand-x-transition", Object(r["a"])("", !0)), Object(o["d"])("row-expand-transition", Object(r["a"])("datatable__expand-col--expanded"))
    }, "097d": function (e, t, n) {
        "use strict";
        var o = n("5ca1"), r = n("8378"), i = n("7726"), a = n("ebd6"), s = n("bcaa");
        o(o.P + o.R, "Promise", {
            finally: function (e) {
                var t = a(this, r.Promise || i.Promise), n = "function" == typeof e;
                return this.then(n ? function (n) {
                    return s(t, e()).then(function () {
                        return n
                    })
                } : e, n ? function (n) {
                    return s(t, e()).then(function () {
                        throw n
                    })
                } : e)
            }
        })
    }, "0a0a": function (e, t, n) {
        var o = n("da3c"), r = n("a7d3"), i = n("b457"), a = n("fda1"), s = n("3adc").f;
        e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, {value: a.f(e)})
        }
    }, "0a74": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".app-step-bar[data-v-4b5d2654]{position:fixed;width:320px;left:50%;bottom:50px;margin-left:-160px;z-index:2}.app-step-bar-wrapper[data-v-4b5d2654]{background-color:#fff;overflow:hidden;border-radius:10px}.app-step-bar-bottom[data-v-4b5d2654],.app-step-bar-content[data-v-4b5d2654]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.app-step-bar-bottom[data-v-4b5d2654]{padding:8px 0}", ""])
    }, "0a91": function (e, t, n) {
        n("b42c"), n("93c4"), e.exports = n("b77f")
    }, "0bfb": function (e, t, n) {
        "use strict";
        var o = n("cb7c");
        e.exports = function () {
            var e = o(this), t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    }, "0d01": function (e, t, n) {
        "use strict";
        var o = n("2b0e"), r = n("3ccf"), i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        t["a"] = o["default"].extend({
            name: "routable",
            directives: {Ripple: r["a"]},
            props: {
                activeClass: String,
                append: Boolean,
                disabled: Boolean,
                exact: {type: Boolean, default: void 0},
                exactActiveClass: String,
                href: [String, Object],
                to: [String, Object],
                nuxt: Boolean,
                replace: Boolean,
                ripple: [Boolean, Object],
                tag: String,
                target: String
            },
            computed: {
                computedRipple: function () {
                    return !(!this.ripple || this.disabled) && this.ripple
                }
            },
            methods: {
                click: function (e) {
                    this.$emit("click", e)
                }, generateRouteLink: function (e) {
                    var t = this.exact, n = void 0, o = a({
                        attrs: {disabled: this.disabled},
                        class: e,
                        props: {},
                        directives: [{name: "ripple", value: this.computedRipple}]
                    }, this.to ? "nativeOn" : "on", i({}, this.$listeners, {click: this.click}));
                    if ("undefined" === typeof this.exact && (t = "/" === this.to || this.to === Object(this.to) && "/" === this.to.path), this.to) {
                        var r = this.activeClass, s = this.exactActiveClass || r;
                        this.proxyClass && (r += " " + this.proxyClass, s += " " + this.proxyClass), n = this.nuxt ? "nuxt-link" : "router-link", Object.assign(o.props, {
                            to: this.to,
                            exact: t,
                            activeClass: r,
                            exactActiveClass: s,
                            append: this.append,
                            replace: this.replace
                        })
                    } else n = (this.href ? "a" : this.tag) || "a", "a" === n && this.href && (o.attrs.href = this.href);
                    return this.target && (o.attrs.target = this.target), {tag: n, data: o}
                }
            }
        })
    }, "0d3d": function (e, t, n) {
        "use strict";

        function o(e, t) {
            var n = t.value, o = t.options || {passive: !0};
            window.addEventListener("resize", n, o), e._onResize = {
                callback: n,
                options: o
            }, t.modifiers && t.modifiers.quiet || n()
        }

        function r(e) {
            if (e._onResize) {
                var t = e._onResize, n = t.callback, o = t.options;
                window.removeEventListener("resize", n, o), delete e._onResize
            }
        }

        t["a"] = {inserted: o, unbind: r}
    }, "0d58": function (e, t, n) {
        var o = n("ce10"), r = n("e11e");
        e.exports = Object.keys || function (e) {
            return o(e, r)
        }
    }, "0e8f": function (e, t, n) {
        "use strict";
        n("db6d");
        var o = n("e8f2");
        t["a"] = Object(o["a"])("flex")
    }, "0ead": function (e) {
        e.exports = {
            setting: "Cài đặt",
            closeFeatureLabel: "Có nên tắt tính năng 'Tải xuống hình ảnh / video' hay không",
            imageDownloadTip: "Tải xuống hình ảnh: Hỗ trợ Shopee, 1688, Taobao, Tmall, Pinduoduo, AliExpress, Lazada, v.v.",
            videoDownloadTip: "Tải xuống video: Hỗ trợ 1688, Tmall, AliExpress, Pinduoduo, v.v."
        }
    }, "0f89": function (e, t, n) {
        var o = n("6f8a");
        e.exports = function (e) {
            if (!o(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, "0fd3": function (e, t, n) {
        e.exports = n.p + "img/sidebar-setting.76622292.png"
    }, "103a": function (e, t, n) {
        var o = n("da3c").document;
        e.exports = o && o.documentElement
    }, "105e": function (e, t, n) {
        e.exports = n.p + "img/popup-shop.bad5c14b.png"
    }, "11e9": function (e, t, n) {
        var o = n("52a7"), r = n("4630"), i = n("6821"), a = n("6a99"), s = n("69a8"), l = n("c69a"),
            c = Object.getOwnPropertyDescriptor;
        t.f = n("9e1e") ? c : function (e, t) {
            if (e = i(e), t = a(t, !0), l) try {
                return c(e, t)
            } catch (n) {
            }
            if (s(e, t)) return r(!o.f.call(e, t), e[t])
        }
    }, "12fd": function (e, t, n) {
        var o = n("6f8a"), r = n("da3c").document, i = o(r) && o(r.createElement);
        e.exports = function (e) {
            return i ? r.createElement(e) : {}
        }
    }, "12fd9": function (e, t) {
    }, "132d": function (e, t, n) {
        "use strict";
        n("44dc");
        var o, r = n("b64a"), i = n("2b0e"), a = i["default"].extend({
            name: "sizeable",
            props: {large: Boolean, medium: Boolean, size: {type: [Number, String]}, small: Boolean, xLarge: Boolean}
        }), s = n("6a18"), l = n("80d2"), c = n("58df"), u = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function p(e) {
            return ["fas", "far", "fal", "fab"].some(function (t) {
                return e.includes(t)
            })
        }

        (function (e) {
            e["small"] = "16px", e["default"] = "24px", e["medium"] = "28px", e["large"] = "36px", e["xLarge"] = "40px"
        })(o || (o = {}));
        var d = Object(c["a"])(r["a"], a, s["a"]).extend({
            name: "v-icon", props: {disabled: Boolean, left: Boolean, right: Boolean}, methods: {
                getIcon: function () {
                    var e = "";
                    return this.$slots.default && (e = this.$slots.default[0].text.trim()), Object(l["r"])(this, e)
                }, getSize: function () {
                    var e = {small: this.small, medium: this.medium, large: this.large, xLarge: this.xLarge},
                        t = Object(l["q"])(e).find(function (t) {
                            return e[t]
                        });
                    return t && o[t] || Object(l["c"])(this.size)
                }, getDefaultData: function () {
                    var e = {
                        staticClass: "v-icon",
                        class: {
                            "v-icon--disabled": this.disabled,
                            "v-icon--left": this.left,
                            "v-icon--link": this.$listeners.click || this.$listeners["!click"],
                            "v-icon--right": this.right
                        },
                        attrs: u({"aria-hidden": !0}, this.$attrs),
                        on: this.$listeners
                    };
                    return e
                }, applyColors: function (e) {
                    e.class = u({}, e.class, this.themeClasses), this.setTextColor(this.color, e)
                }, renderFontIcon: function (e, t) {
                    var n = [], o = this.getDefaultData(), r = "material-icons", i = e.indexOf("-"), a = i <= -1;
                    a ? n.push(e) : (r = e.slice(0, i), p(r) && (r = "")), o.class[r] = !0, o.class[e] = !a;
                    var s = this.getSize();
                    return s && (o.style = {fontSize: s}), this.applyColors(o), t("i", o, n)
                }, renderSvgIcon: function (e, t) {
                    var n = this.getDefaultData();
                    n.class["v-icon--is-component"] = !0;
                    var o = this.getSize();
                    o && (n.style = {fontSize: o, height: o}), this.applyColors(n);
                    var r = e.component;
                    return n.props = e.props, n.nativeOn = n.on, t(r, n)
                }
            }, render: function (e) {
                var t = this.getIcon();
                return "string" === typeof t ? this.renderFontIcon(t, e) : this.renderSvgIcon(t, e)
            }
        });
        t["a"] = i["default"].extend({
            name: "v-icon", $_wrapperFor: d, functional: !0, render: function (e, t) {
                var n = t.data, o = t.children, r = "";
                return n.domProps && (r = n.domProps.textContent || n.domProps.innerHTML || r, delete n.domProps.textContent, delete n.domProps.innerHTML), e(d, n, r ? [r] : o)
            }
        })
    }, 1495: function (e, t, n) {
        var o = n("86cc"), r = n("cb7c"), i = n("0d58");
        e.exports = n("9e1e") ? Object.defineProperties : function (e, t) {
            r(e);
            var n, a = i(t), s = a.length, l = 0;
            while (s > l) o.f(e, n = a[l++], t[n]);
            return e
        }
    }, "163e": function (e, t, n) {
        "use strict";
        var o = n("80d2");

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        t["a"] = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = t ? "width" : "height";
            return {
                beforeEnter: function (e) {
                    e._parent = e.parentNode, e._initialStyle = r({
                        transition: e.style.transition,
                        visibility: e.style.visibility,
                        overflow: e.style.overflow
                    }, n, e.style[n])
                }, enter: function (t) {
                    var r = t._initialStyle;
                    t.style.setProperty("transition", "none", "important"), t.style.visibility = "hidden";
                    var i = t["offset" + Object(o["s"])(n)] + "px";
                    t.style.visibility = r.visibility, t.style.overflow = "hidden", t.style[n] = 0, t.offsetHeight, t.style.transition = r.transition, e && t._parent && t._parent.classList.add(e), requestAnimationFrame(function () {
                        t.style[n] = i
                    })
                }, afterEnter: a, enterCancelled: a, leave: function (e) {
                    e._initialStyle = r({overflow: e.style.overflow}, n, e.style[n]), e.style.overflow = "hidden", e.style[n] = e["offset" + Object(o["s"])(n)] + "px", e.offsetHeight, requestAnimationFrame(function () {
                        return e.style[n] = 0
                    })
                }, afterLeave: i, leaveCancelled: i
            };

            function i(t) {
                e && t._parent && t._parent.classList.remove(e), a(t)
            }

            function a(e) {
                e.style.overflow = e._initialStyle.overflow, e.style[n] = e._initialStyle[n], delete e._initialStyle
            }
        }
    }, "16e7": function (e, t, n) {
        var o = n("d13f"), r = n("7704");
        o(o.G + o.F * (parseInt != r), {parseInt: r})
    }, 1938: function (e, t, n) {
        var o = n("d13f");
        o(o.S, "Array", {isArray: n("b5aa")})
    }, "196c": function (e, t) {
        e.exports = function (e, t, n) {
            var o = void 0 === n;
            switch (t.length) {
                case 0:
                    return o ? e() : e.call(n);
                case 1:
                    return o ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, 1991: function (e, t, n) {
        var o, r, i, a = n("9b43"), s = n("31f4"), l = n("fab2"), c = n("230e"), u = n("7726"), p = u.process,
            d = u.setImmediate, f = u.clearImmediate, m = u.MessageChannel, h = u.Dispatch, g = 0, b = {},
            v = "onreadystatechange", x = function () {
                var e = +this;
                if (b.hasOwnProperty(e)) {
                    var t = b[e];
                    delete b[e], t()
                }
            }, y = function (e) {
                x.call(e.data)
            };
        d && f || (d = function (e) {
            var t = [], n = 1;
            while (arguments.length > n) t.push(arguments[n++]);
            return b[++g] = function () {
                s("function" == typeof e ? e : Function(e), t)
            }, o(g), g
        }, f = function (e) {
            delete b[e]
        }, "process" == n("2d95")(p) ? o = function (e) {
            p.nextTick(a(x, e, 1))
        } : h && h.now ? o = function (e) {
            h.now(a(x, e, 1))
        } : m ? (r = new m, i = r.port2, r.port1.onmessage = y, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function (e) {
            u.postMessage(e + "", "*")
        }, u.addEventListener("message", y, !1)) : o = v in c("script") ? function (e) {
            l.appendChild(c("script"))[v] = function () {
                l.removeChild(this), x.call(e)
            }
        } : function (e) {
            setTimeout(a(x, e, 1), 0)
        }), e.exports = {set: d, clear: f}
    }, "1abe": function (e, t, n) {
        "use strict";
        var o = n("ccaa"), r = n.n(o);
        r.a
    }, "1ac5": function (e) {
        e.exports = {
            setting: "Setting",
            closeFeatureLabel: "Desativar o recurso 'Baixar fotos / vídeos'",
            imageDownloadTip: "Download da imagem: Suporte ao cliente, 1688, Taobao, Tmall, Pinduoduo, AliExpress, Lazada etc.",
            videoDownloadTip: "Download de vídeo: Suporte 1688, Tmall, AliExpress, Pinduoduo, etc."
        }
    }, "1b1d": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".v-progress-circular{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.v-progress-circular svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular--indeterminate svg{-webkit-animation:progress-circular-rotate 1.4s linear infinite;animation:progress-circular-rotate 1.4s linear infinite;-webkit-transform-origin:center center;transform-origin:center center;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{-webkit-animation:progress-circular-dash 1.4s ease-in-out infinite;animation:progress-circular-dash 1.4s ease-in-out infinite;stroke-linecap:round;stroke-dasharray:80,200;stroke-dashoffset:0px}.v-progress-circular__underlay{stroke:rgba(0,0,0,.1);z-index:1}.v-progress-circular__overlay{stroke:currentColor;z-index:2;-webkit-transition:all .6s ease-in-out;transition:all .6s ease-in-out}.v-progress-circular__info{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}@-webkit-keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-125px}}@-webkit-keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes progress-circular-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}", ""])
    }, "1b55": function (e, t, n) {
        var o = n("7772")("wks"), r = n("7b00"), i = n("da3c").Symbol, a = "function" == typeof i,
            s = e.exports = function (e) {
                return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e))
            };
        s.store = o
    }, "1b68": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".theme--light.v-card{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-card{background-color:#424242;border-color:#424242;color:#fff}.v-card{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);text-decoration:none}.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card--flat{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-card--hover{cursor:pointer;-webkit-transition:all .4s cubic-bezier(.25,.8,.25,1);transition:all .4s cubic-bezier(.25,.8,.25,1);-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow,-webkit-box-shadow}.v-card--hover:hover{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card__title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:16px}.v-card__title--primary{padding-top:24px}.v-card__text{padding:16px;width:100%}.v-card__actions{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:8px}.v-card__actions .v-btn,.v-card__actions>*{margin:0}.v-card__actions .v-btn+.v-btn{margin-left:8px}", ""])
    }, "1b8f": function (e, t, n) {
        var o = n("a812"), r = Math.max, i = Math.min;
        e.exports = function (e, t) {
            return e = o(e), e < 0 ? r(e + t, 0) : i(e, t)
        }
    }, "1be4": function (e, t, n) {
        "use strict";
        var o = n("da3c"), r = n("a7d3"), i = n("3adc"), a = n("7d95"), s = n("1b55")("species");
        e.exports = function (e) {
            var t = "function" == typeof r[e] ? r[e] : o[e];
            a && t && !t[s] && i.f(t, s, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, "1fa8": function (e, t, n) {
        var o = n("cb7c");
        e.exports = function (e, t, n, r) {
            try {
                return r ? t(o(n)[0], n[1]) : t(n)
            } catch (a) {
                var i = e["return"];
                throw void 0 !== i && o(i.call(e)), a
            }
        }
    }, 2: function (e, t, n) {
        e.exports = n("c27c")
    }, 2074: function (e, t, n) {
        var o = n("1b1d");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("3905d381", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "214f": function (e, t, n) {
        "use strict";
        n("b0c5");
        var o = n("2aba"), r = n("32e9"), i = n("79e5"), a = n("be13"), s = n("2b4c"), l = n("520a"), c = s("species"),
            u = !i(function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {a: "7"}, e
                }, "7" !== "".replace(e, "$<a>")
            }), p = function () {
                var e = /(?:)/, t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 === n.length && "a" === n[0] && "b" === n[1]
            }();
        e.exports = function (e, t, n) {
            var d = s(e), f = !i(function () {
                var t = {};
                return t[d] = function () {
                    return 7
                }, 7 != ""[e](t)
            }), m = f ? !i(function () {
                var t = !1, n = /a/;
                return n.exec = function () {
                    return t = !0, null
                }, "split" === e && (n.constructor = {}, n.constructor[c] = function () {
                    return n
                }), n[d](""), !t
            }) : void 0;
            if (!f || !m || "replace" === e && !u || "split" === e && !p) {
                var h = /./[d], g = n(a, d, ""[e], function (e, t, n, o, r) {
                    return t.exec === l ? f && !r ? {done: !0, value: h.call(t, n, o)} : {
                        done: !0,
                        value: e.call(n, t, o)
                    } : {done: !1}
                }), b = g[0], v = g[1];
                o(String.prototype, e, b), r(RegExp.prototype, d, 2 == t ? function (e, t) {
                    return v.call(e, this, t)
                } : function (e) {
                    return v.call(e, this)
                })
            }
        }
    }, "230e": function (e, t, n) {
        var o = n("d3f4"), r = n("7726").document, i = o(r) && o(r.createElement);
        e.exports = function (e) {
            return i ? r.createElement(e) : {}
        }
    }, 2310: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".theme--light.v-stepper{background:#fff}.theme--light.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:rgba(0,0,0,.38)}.theme--light.v-stepper .v-stepper__step__step,.theme--light.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--light.v-stepper .v-stepper__header .v-divider{border-color:rgba(0,0,0,.12)}.theme--light.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--editable:hover{background:rgba(0,0,0,.06)}.theme--light.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #000}.theme--light.v-stepper .v-stepper__step--complete .v-stepper__label{color:rgba(0,0,0,.87)}.theme--light.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:rgba(0,0,0,.54)}.theme--light.v-stepper .v-stepper__label{color:rgba(0,0,0,.38)}.theme--light.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--light.v-stepper .v-stepper__label small{color:rgba(0,0,0,.54)}.theme--light.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid rgba(0,0,0,.12)}.theme--dark.v-stepper{background:#303030}.theme--dark.v-stepper .v-stepper__step:not(.v-stepper__step--active):not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__step__step{background:hsla(0,0%,100%,.5)}.theme--dark.v-stepper .v-stepper__step__step,.theme--dark.v-stepper .v-stepper__step__step .v-icon{color:#fff}.theme--dark.v-stepper .v-stepper__header .v-divider{border-color:hsla(0,0%,100%,.12)}.theme--dark.v-stepper .v-stepper__step--active .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--editable:hover{background:hsla(0,0%,100%,.06)}.theme--dark.v-stepper .v-stepper__step--editable:hover .v-stepper__label{text-shadow:0 0 0 #fff}.theme--dark.v-stepper .v-stepper__step--complete .v-stepper__label{color:hsla(0,0%,100%,.87)}.theme--dark.v-stepper .v-stepper__step--inactive.v-stepper__step--editable:not(.v-stepper__step--error):hover .v-stepper__step__step{background:hsla(0,0%,100%,.75)}.theme--dark.v-stepper .v-stepper__label{color:hsla(0,0%,100%,.5)}.theme--dark.v-stepper--non-linear .v-stepper__step:not(.v-stepper__step--complete):not(.v-stepper__step--error) .v-stepper__label,.theme--dark.v-stepper .v-stepper__label small{color:hsla(0,0%,100%,.7)}.theme--dark.v-stepper--vertical .v-stepper__content:not(:last-child){border-left:1px solid hsla(0,0%,100%,.12)}.application--is-rtl .v-stepper .v-stepper__step__step{margin-right:0;margin-left:12px}.v-stepper{overflow:hidden;position:relative}.v-stepper,.v-stepper__header{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-stepper__header{height:72px;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.v-stepper__header .v-divider{-ms-flex-item-align:center;align-self:center;margin:0 -16px}.v-stepper__items{position:relative;overflow:hidden}.v-stepper__step__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:24px;margin-right:8px;min-width:24px;width:24px;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1)}.v-stepper__step__step .v-icon{font-size:18px}.v-stepper__step{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:24px;position:relative}.v-stepper__step--active .v-stepper__label{-webkit-transition:.3s cubic-bezier(.4,0,.6,1);transition:.3s cubic-bezier(.4,0,.6,1)}.v-stepper__step--editable{cursor:pointer}.v-stepper__step.v-stepper__step--error .v-stepper__step__step{background:transparent;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__step__step .v-icon{font-size:24px;color:inherit}.v-stepper__step.v-stepper__step--error .v-stepper__label{color:inherit;text-shadow:none;font-weight:500}.v-stepper__step.v-stepper__step--error .v-stepper__label small{color:inherit}.v-stepper__label{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:left}.v-stepper__label small{font-size:12px;font-weight:300;text-shadow:none}.v-stepper__wrapper{overflow:hidden;-webkit-transition:none;transition:none}.v-stepper__content{top:0;padding:24px 24px 16px 24px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;width:100%}.v-stepper__content>.v-btn{margin:24px 8px 8px 0}.v-stepper--is-booted .v-stepper__content,.v-stepper--is-booted .v-stepper__wrapper{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-stepper--vertical{padding-bottom:36px}.v-stepper--vertical .v-stepper__content{margin:-8px -36px -16px 36px;padding:16px 60px 16px 23px;width:auto}.v-stepper--vertical .v-stepper__step{padding:24px 24px 16px}.v-stepper--vertical .v-stepper__step__step{margin-right:12px}.v-stepper--alt-labels .v-stepper__header{height:auto}.v-stepper--alt-labels .v-stepper__header .v-divider{margin:35px -67px 0;-ms-flex-item-align:start;align-self:flex-start}.v-stepper--alt-labels .v-stepper__step{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:175px;flex-basis:175px}.v-stepper--alt-labels .v-stepper__step small{-ms-flex-item-align:center;align-self:center}.v-stepper--alt-labels .v-stepper__step__step{margin-right:0;margin-bottom:11px}@media only screen and (max-width:959px){.v-stepper:not(.v-stepper--vertical) .v-stepper__label{display:none}.v-stepper:not(.v-stepper--vertical) .v-stepper__step__step{margin-right:0}}", ""])
    }, 2312: function (e, t, n) {
        e.exports = n("8ce0")
    }, 2333: function (e, t, n) {
        var o = n("0a74");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("01300c48", o, !0, {sourceMap: !1, shadowMode: !1})
    }, 2350: function (e, t) {
        function n(e, t) {
            var n = e[1] || "", r = e[3];
            if (!r) return n;
            if (t && "function" === typeof btoa) {
                var i = o(r), a = r.sources.map(function (e) {
                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                });
                return [n].concat(a).concat([i]).join("\n")
            }
            return [n].join("\n")
        }

        function o(e) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
                n = "sourceMappingURL=data:application/json;charset=utf-8;base64," + t;
            return "/*# " + n + " */"
        }

        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var o = n(t, e);
                    return t[2] ? "@media " + t[2] + "{" + o + "}" : o
                }).join("")
            }, t.i = function (e, n) {
                "string" === typeof e && (e = [[null, e, ""]]);
                for (var o = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" === typeof i && (o[i] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    "number" === typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
                }
            }, t
        }
    }, "23bf": function (e, t, n) {
        "use strict";
        var o = n("80d2"), r = n("2b0e");
        t["a"] = r["default"].extend({
            name: "measurable",
            props: {
                height: [Number, String],
                maxHeight: [Number, String],
                maxWidth: [Number, String],
                minHeight: [Number, String],
                minWidth: [Number, String],
                width: [Number, String]
            },
            computed: {
                measurableStyles: function () {
                    var e = {}, t = Object(o["c"])(this.height), n = Object(o["c"])(this.minHeight),
                        r = Object(o["c"])(this.minWidth), i = Object(o["c"])(this.maxHeight),
                        a = Object(o["c"])(this.maxWidth), s = Object(o["c"])(this.width);
                    return t && (e.height = t), n && (e.minHeight = n), r && (e.minWidth = r), i && (e.maxHeight = i), a && (e.maxWidth = a), s && (e.width = s), e
                }
            }
        })
    }, "23c6": function (e, t, n) {
        var o = n("2d95"), r = n("2b4c")("toStringTag"), i = "Arguments" == o(function () {
            return arguments
        }()), a = function (e, t) {
            try {
                return e[t]
            } catch (n) {
            }
        };
        e.exports = function (e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }, 2418: function (e, t, n) {
        var o = n("6a9b"), r = n("a5ab"), i = n("1b8f");
        e.exports = function (e) {
            return function (t, n, a) {
                var s, l = o(t), c = r(l.length), u = i(a, c);
                if (e && n != n) {
                    while (c > u) if (s = l[u++], s != s) return !0
                } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1
            }
        }
    }, "245b": function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e}
        }
    }, 2464: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var o = n("94ab");

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e, t, n) {
            return Object(o["a"])(e, t, n).extend({
                name: "groupable",
                props: {
                    activeClass: {
                        type: String, default: function () {
                            if (this[e]) return this[e].activeClass
                        }
                    }, disabled: Boolean
                },
                data: function () {
                    return {isActive: !1}
                },
                computed: {
                    groupClasses: function () {
                        return this.activeClass ? r({}, this.activeClass, this.isActive) : {}
                    }
                },
                created: function () {
                    this[e] && this[e].register(this)
                },
                beforeDestroy: function () {
                    this[e] && this[e].unregister(this)
                },
                methods: {
                    toggle: function () {
                        this.$emit("change")
                    }
                }
            })
        }

        i("itemGroup")
    }, 2467: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".highlight-box[data-v-6b2617ee]{position:absolute;-webkit-transition:all .3s linear;transition:all .3s linear;z-index:9999}", ""])
    }, "253d": function (e, t, n) {
        var o = n("49c0");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("0e047321", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "261e": function (e, t, n) {
        "use strict";
        var o = n("2b0e"), r = n("80d2");

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        t["a"] = o["default"].extend().extend({
            name: "stackable", data: function () {
                return {
                    stackClass: "unpecified",
                    stackElement: null,
                    stackExclude: null,
                    stackMinZIndex: 0,
                    isActive: !1
                }
            }, computed: {
                activeZIndex: function () {
                    if ("undefined" === typeof window) return 0;
                    var e = this.stackElement || this.$refs.content,
                        t = this.isActive ? this.getMaxZIndex(this.stackExclude || [e]) + 2 : Object(r["m"])(e);
                    return null == t ? t : parseInt(t)
                }
            }, methods: {
                getMaxZIndex: function () {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = this.$el, n = [this.stackMinZIndex, Object(r["m"])(t)], o = [].concat(i(document.getElementsByClassName(this.stackClass))), a = 0; a < o.length; a++) e.includes(o[a]) || n.push(Object(r["m"])(o[a]));
                    return Math.max.apply(Math, n)
                }
            }
        })
    }, 2621: function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, "268f": function (e, t, n) {
        e.exports = n("2a04")
    }, 2695: function (e, t, n) {
        var o = n("43c8"), r = n("6a9b"), i = n("2418")(!1), a = n("5d8f")("IE_PROTO");
        e.exports = function (e, t) {
            var n, s = r(e), l = 0, c = [];
            for (n in s) n != a && o(s, n) && c.push(n);
            while (t.length > l) o(s, n = t[l++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, "27ee": function (e, t, n) {
        var o = n("23c6"), r = n("2b4c")("iterator"), i = n("84f2");
        e.exports = n("8378").getIteratorMethod = function (e) {
            if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)]
        }
    }, 2877: function (e, t, n) {
        "use strict";

        function o(e, t, n, o, r, i, a, s) {
            var l, c = "function" === typeof e ? e.options : e;
            if (t && (c.render = t, c.staticRenderFns = n, c._compiled = !0), o && (c.functional = !0), i && (c._scopeId = "data-v-" + i), a ? (l = function (e) {
                e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(a)
            }, c._ssrRegister = l) : r && (l = s ? function () {
                r.call(this, this.$root.$options.shadowRoot)
            } : r), l) if (c.functional) {
                c._injectStyles = l;
                var u = c.render;
                c.render = function (e, t) {
                    return l.call(t), u(e, t)
                }
            } else {
                var p = c.beforeCreate;
                c.beforeCreate = p ? [].concat(p, l) : [l]
            }
            return {exports: e, options: c}
        }

        n.d(t, "a", function () {
            return o
        })
    }, "28a5": function (e, t, n) {
        "use strict";
        var o = n("aae3"), r = n("cb7c"), i = n("ebd6"), a = n("0390"), s = n("9def"), l = n("5f1b"), c = n("520a"),
            u = n("79e5"), p = Math.min, d = [].push, f = "split", m = "length", h = "lastIndex", g = 4294967295,
            b = !u(function () {
                RegExp(g, "y")
            });
        n("214f")("split", 2, function (e, t, n, u) {
            var v;
            return v = "c" == "abbc"[f](/(b)*/)[1] || 4 != "test"[f](/(?:)/, -1)[m] || 2 != "ab"[f](/(?:ab)*/)[m] || 4 != "."[f](/(.?)(.?)/)[m] || "."[f](/()()/)[m] > 1 || ""[f](/.?/)[m] ? function (e, t) {
                var r = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!o(e)) return n.call(r, e, t);
                var i, a, s, l = [],
                    u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    p = 0, f = void 0 === t ? g : t >>> 0, b = new RegExp(e.source, u + "g");
                while (i = c.call(b, r)) {
                    if (a = b[h], a > p && (l.push(r.slice(p, i.index)), i[m] > 1 && i.index < r[m] && d.apply(l, i.slice(1)), s = i[0][m], p = a, l[m] >= f)) break;
                    b[h] === i.index && b[h]++
                }
                return p === r[m] ? !s && b.test("") || l.push("") : l.push(r.slice(p)), l[m] > f ? l.slice(0, f) : l
            } : "0"[f](void 0, 0)[m] ? function (e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t)
            } : n, [function (n, o) {
                var r = e(this), i = void 0 == n ? void 0 : n[t];
                return void 0 !== i ? i.call(n, r, o) : v.call(String(r), n, o)
            }, function (e, t) {
                var o = u(v, e, this, t, v !== n);
                if (o.done) return o.value;
                var c = r(e), d = String(this), f = i(c, RegExp), m = c.unicode,
                    h = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (b ? "y" : "g"),
                    x = new f(b ? c : "^(?:" + c.source + ")", h), y = void 0 === t ? g : t >>> 0;
                if (0 === y) return [];
                if (0 === d.length) return null === l(x, d) ? [d] : [];
                var k = 0, w = 0, _ = [];
                while (w < d.length) {
                    x.lastIndex = b ? w : 0;
                    var S, T = l(x, b ? d : d.slice(w));
                    if (null === T || (S = p(s(x.lastIndex + (b ? 0 : w)), d.length)) === k) w = a(d, w, m); else {
                        if (_.push(d.slice(k, w)), _.length === y) return _;
                        for (var E = 1; E <= T.length - 1; E++) if (_.push(T[E]), _.length === y) return _;
                        w = k = S
                    }
                }
                return _.push(d.slice(k)), _
            }]
        })
    }, "2a04": function (e, t, n) {
        n("4938");
        var o = n("a7d3").Object;
        e.exports = function (e, t) {
            return o.getOwnPropertyDescriptor(e, t)
        }
    }, "2a4e": function (e, t, n) {
        var o = n("a812"), r = n("e5fa");
        e.exports = function (e) {
            return function (t, n) {
                var i, a, s = String(r(t)), l = o(n), c = s.length;
                return l < 0 || l >= c ? e ? "" : void 0 : (i = s.charCodeAt(l), i < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536)
            }
        }
    }, "2aba": function (e, t, n) {
        var o = n("7726"), r = n("32e9"), i = n("69a8"), a = n("ca5a")("src"), s = n("fa5b"), l = "toString",
            c = ("" + s).split(l);
        n("8378").inspectSource = function (e) {
            return s.call(e)
        }, (e.exports = function (e, t, n, s) {
            var l = "function" == typeof n;
            l && (i(n, "name") || r(n, "name", t)), e[t] !== n && (l && (i(n, a) || r(n, a, e[t] ? "" + e[t] : c.join(String(t)))), e === o ? e[t] = n : s ? e[t] ? e[t] = n : r(e, t, n) : (delete e[t], r(e, t, n)))
        })(Function.prototype, l, function () {
            return "function" == typeof this && this[a] || s.call(this)
        })
    }, "2aeb": function (e, t, n) {
        var o = n("cb7c"), r = n("1495"), i = n("e11e"), a = n("613b")("IE_PROTO"), s = function () {
        }, l = "prototype", c = function () {
            var e, t = n("230e")("iframe"), o = i.length, r = "<", a = ">";
            t.style.display = "none", n("fab2").appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), c = e.F;
            while (o--) delete c[l][i[o]];
            return c()
        };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (s[l] = o(e), n = new s, s[l] = null, n[a] = e) : n = c(), void 0 === t ? n : r(n, t)
        }
    }, "2b0e": function (e, t, n) {
        "use strict";
        n.r(t), function (e) {
            /*!
 * Vue.js v2.6.6
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
            var n = Object.freeze({});

            function o(e) {
                return void 0 === e || null === e
            }

            function r(e) {
                return void 0 !== e && null !== e
            }

            function i(e) {
                return !0 === e
            }

            function a(e) {
                return !1 === e
            }

            function s(e) {
                return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
            }

            function l(e) {
                return null !== e && "object" === typeof e
            }

            var c = Object.prototype.toString;

            function u(e) {
                return "[object Object]" === c.call(e)
            }

            function p(e) {
                return "[object RegExp]" === c.call(e)
            }

            function d(e) {
                var t = parseFloat(String(e));
                return t >= 0 && Math.floor(t) === t && isFinite(e)
            }

            function f(e) {
                return r(e) && "function" === typeof e.then && "function" === typeof e.catch
            }

            function m(e) {
                return null == e ? "" : Array.isArray(e) || u(e) && e.toString === c ? JSON.stringify(e, null, 2) : String(e)
            }

            function h(e) {
                var t = parseFloat(e);
                return isNaN(t) ? e : t
            }

            function g(e, t) {
                for (var n = Object.create(null), o = e.split(","), r = 0; r < o.length; r++) n[o[r]] = !0;
                return t ? function (e) {
                    return n[e.toLowerCase()]
                } : function (e) {
                    return n[e]
                }
            }

            g("slot,component", !0);
            var b = g("key,ref,slot,slot-scope,is");

            function v(e, t) {
                if (e.length) {
                    var n = e.indexOf(t);
                    if (n > -1) return e.splice(n, 1)
                }
            }

            var x = Object.prototype.hasOwnProperty;

            function y(e, t) {
                return x.call(e, t)
            }

            function k(e) {
                var t = Object.create(null);
                return function (n) {
                    var o = t[n];
                    return o || (t[n] = e(n))
                }
            }

            var w = /-(\w)/g, _ = k(function (e) {
                return e.replace(w, function (e, t) {
                    return t ? t.toUpperCase() : ""
                })
            }), S = k(function (e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }), T = /\B([A-Z])/g, E = k(function (e) {
                return e.replace(T, "-$1").toLowerCase()
            });

            function C(e, t) {
                function n(n) {
                    var o = arguments.length;
                    return o ? o > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
                }

                return n._length = e.length, n
            }

            function A(e, t) {
                return e.bind(t)
            }

            var O = Function.prototype.bind ? A : C;

            function P(e, t) {
                t = t || 0;
                var n = e.length - t, o = new Array(n);
                while (n--) o[n] = e[n + t];
                return o
            }

            function N(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function L(e) {
                for (var t = {}, n = 0; n < e.length; n++) e[n] && N(t, e[n]);
                return t
            }

            function I(e, t, n) {
            }

            var F = function (e, t, n) {
                return !1
            }, M = function (e) {
                return e
            };

            function D(e, t) {
                if (e === t) return !0;
                var n = l(e), o = l(t);
                if (!n || !o) return !n && !o && String(e) === String(t);
                try {
                    var r = Array.isArray(e), i = Array.isArray(t);
                    if (r && i) return e.length === t.length && e.every(function (e, n) {
                        return D(e, t[n])
                    });
                    if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
                    if (r || i) return !1;
                    var a = Object.keys(e), s = Object.keys(t);
                    return a.length === s.length && a.every(function (n) {
                        return D(e[n], t[n])
                    })
                } catch (c) {
                    return !1
                }
            }

            function R(e, t) {
                for (var n = 0; n < e.length; n++) if (D(e[n], t)) return n;
                return -1
            }

            function j(e) {
                var t = !1;
                return function () {
                    t || (t = !0, e.apply(this, arguments))
                }
            }

            var B = "data-server-rendered", $ = ["component", "directive", "filter"],
                z = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
                U = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: F,
                    isReservedAttr: F,
                    isUnknownElement: F,
                    getTagNamespace: I,
                    parsePlatformTagName: M,
                    mustUseProp: F,
                    async: !0,
                    _lifecycleHooks: z
                }, H = "a-zA-Z·À-ÖØ-öø-ͽͿ-῿‌-‍‿-⁀⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�";

            function Y(e) {
                var t = (e + "").charCodeAt(0);
                return 36 === t || 95 === t
            }

            function G(e, t, n, o) {
                Object.defineProperty(e, t, {value: n, enumerable: !!o, writable: !0, configurable: !0})
            }

            var V = new RegExp("[^" + H + ".$_\\d]");

            function W(e) {
                if (!V.test(e)) {
                    var t = e.split(".");
                    return function (e) {
                        for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]]
                        }
                        return e
                    }
                }
            }

            var K, q = "__proto__" in {}, X = "undefined" !== typeof window,
                Q = "undefined" !== typeof WXEnvironment && !!WXEnvironment.platform,
                J = Q && WXEnvironment.platform.toLowerCase(), Z = X && window.navigator.userAgent.toLowerCase(),
                ee = Z && /msie|trident/.test(Z), te = Z && Z.indexOf("msie 9.0") > 0, ne = Z && Z.indexOf("edge/") > 0,
                oe = (Z && Z.indexOf("android"), Z && /iphone|ipad|ipod|ios/.test(Z) || "ios" === J),
                re = (Z && /chrome\/\d+/.test(Z), Z && /phantomjs/.test(Z), Z && Z.match(/firefox\/(\d+)/)),
                ie = {}.watch, ae = !1;
            if (X) try {
                var se = {};
                Object.defineProperty(se, "passive", {
                    get: function () {
                        ae = !0
                    }
                }), window.addEventListener("test-passive", null, se)
            } catch (wa) {
            }
            var le = function () {
                return void 0 === K && (K = !X && !Q && "undefined" !== typeof e && (e["process"] && "server" === e["process"].env.VUE_ENV)), K
            }, ce = X && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            function ue(e) {
                return "function" === typeof e && /native code/.test(e.toString())
            }

            var pe,
                de = "undefined" !== typeof Symbol && ue(Symbol) && "undefined" !== typeof Reflect && ue(Reflect.ownKeys);
            pe = "undefined" !== typeof Set && ue(Set) ? Set : function () {
                function e() {
                    this.set = Object.create(null)
                }

                return e.prototype.has = function (e) {
                    return !0 === this.set[e]
                }, e.prototype.add = function (e) {
                    this.set[e] = !0
                }, e.prototype.clear = function () {
                    this.set = Object.create(null)
                }, e
            }();
            var fe = I, me = 0, he = function () {
                this.id = me++, this.subs = []
            };
            he.prototype.addSub = function (e) {
                this.subs.push(e)
            }, he.prototype.removeSub = function (e) {
                v(this.subs, e)
            }, he.prototype.depend = function () {
                he.target && he.target.addDep(this)
            }, he.prototype.notify = function () {
                var e = this.subs.slice();
                for (var t = 0, n = e.length; t < n; t++) e[t].update()
            }, he.target = null;
            var ge = [];

            function be(e) {
                ge.push(e), he.target = e
            }

            function ve() {
                ge.pop(), he.target = ge[ge.length - 1]
            }

            var xe = function (e, t, n, o, r, i, a, s) {
                this.tag = e, this.data = t, this.children = n, this.text = o, this.elm = r, this.ns = void 0, this.context = i, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1
            }, ye = {child: {configurable: !0}};
            ye.child.get = function () {
                return this.componentInstance
            }, Object.defineProperties(xe.prototype, ye);
            var ke = function (e) {
                void 0 === e && (e = "");
                var t = new xe;
                return t.text = e, t.isComment = !0, t
            };

            function we(e) {
                return new xe(void 0, void 0, void 0, String(e))
            }

            function _e(e) {
                var t = new xe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
                return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t
            }

            var Se = Array.prototype, Te = Object.create(Se),
                Ee = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
            Ee.forEach(function (e) {
                var t = Se[e];
                G(Te, e, function () {
                    var n = [], o = arguments.length;
                    while (o--) n[o] = arguments[o];
                    var r, i = t.apply(this, n), a = this.__ob__;
                    switch (e) {
                        case"push":
                        case"unshift":
                            r = n;
                            break;
                        case"splice":
                            r = n.slice(2);
                            break
                    }
                    return r && a.observeArray(r), a.dep.notify(), i
                })
            });
            var Ce = Object.getOwnPropertyNames(Te), Ae = !0;

            function Oe(e) {
                Ae = e
            }

            var Pe = function (e) {
                this.value = e, this.dep = new he, this.vmCount = 0, G(e, "__ob__", this), Array.isArray(e) ? (q ? Ne(e, Te) : Le(e, Te, Ce), this.observeArray(e)) : this.walk(e)
            };

            function Ne(e, t) {
                e.__proto__ = t
            }

            function Le(e, t, n) {
                for (var o = 0, r = n.length; o < r; o++) {
                    var i = n[o];
                    G(e, i, t[i])
                }
            }

            function Ie(e, t) {
                var n;
                if (l(e) && !(e instanceof xe)) return y(e, "__ob__") && e.__ob__ instanceof Pe ? n = e.__ob__ : Ae && !le() && (Array.isArray(e) || u(e)) && Object.isExtensible(e) && !e._isVue && (n = new Pe(e)), t && n && n.vmCount++, n
            }

            function Fe(e, t, n, o, r) {
                var i = new he, a = Object.getOwnPropertyDescriptor(e, t);
                if (!a || !1 !== a.configurable) {
                    var s = a && a.get, l = a && a.set;
                    s && !l || 2 !== arguments.length || (n = e[t]);
                    var c = !r && Ie(n);
                    Object.defineProperty(e, t, {
                        enumerable: !0, configurable: !0, get: function () {
                            var t = s ? s.call(e) : n;
                            return he.target && (i.depend(), c && (c.dep.depend(), Array.isArray(t) && Re(t))), t
                        }, set: function (t) {
                            var o = s ? s.call(e) : n;
                            t === o || t !== t && o !== o || s && !l || (l ? l.call(e, t) : n = t, c = !r && Ie(t), i.notify())
                        }
                    })
                }
            }

            function Me(e, t, n) {
                if (Array.isArray(e) && d(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
                if (t in e && !(t in Object.prototype)) return e[t] = n, n;
                var o = e.__ob__;
                return e._isVue || o && o.vmCount ? n : o ? (Fe(o.value, t, n), o.dep.notify(), n) : (e[t] = n, n)
            }

            function De(e, t) {
                if (Array.isArray(e) && d(t)) e.splice(t, 1); else {
                    var n = e.__ob__;
                    e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify())
                }
            }

            function Re(e) {
                for (var t = void 0, n = 0, o = e.length; n < o; n++) t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && Re(t)
            }

            Pe.prototype.walk = function (e) {
                for (var t = Object.keys(e), n = 0; n < t.length; n++) Fe(e, t[n])
            }, Pe.prototype.observeArray = function (e) {
                for (var t = 0, n = e.length; t < n; t++) Ie(e[t])
            };
            var je = U.optionMergeStrategies;

            function Be(e, t) {
                if (!t) return e;
                for (var n, o, r, i = de ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < i.length; a++) n = i[a], "__ob__" !== n && (o = e[n], r = t[n], y(e, n) ? o !== r && u(o) && u(r) && Be(o, r) : Me(e, n, r));
                return e
            }

            function $e(e, t, n) {
                return n ? function () {
                    var o = "function" === typeof t ? t.call(n, n) : t, r = "function" === typeof e ? e.call(n, n) : e;
                    return o ? Be(o, r) : r
                } : t ? e ? function () {
                    return Be("function" === typeof t ? t.call(this, this) : t, "function" === typeof e ? e.call(this, this) : e)
                } : t : e
            }

            function ze(e, t) {
                var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
                return n ? Ue(n) : n
            }

            function Ue(e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t
            }

            function He(e, t, n, o) {
                var r = Object.create(e || null);
                return t ? N(r, t) : r
            }

            je.data = function (e, t, n) {
                return n ? $e(e, t, n) : t && "function" !== typeof t ? e : $e(e, t)
            }, z.forEach(function (e) {
                je[e] = ze
            }), $.forEach(function (e) {
                je[e + "s"] = He
            }), je.watch = function (e, t, n, o) {
                if (e === ie && (e = void 0), t === ie && (t = void 0), !t) return Object.create(e || null);
                if (!e) return t;
                var r = {};
                for (var i in N(r, e), t) {
                    var a = r[i], s = t[i];
                    a && !Array.isArray(a) && (a = [a]), r[i] = a ? a.concat(s) : Array.isArray(s) ? s : [s]
                }
                return r
            }, je.props = je.methods = je.inject = je.computed = function (e, t, n, o) {
                if (!e) return t;
                var r = Object.create(null);
                return N(r, e), t && N(r, t), r
            }, je.provide = $e;
            var Ye = function (e, t) {
                return void 0 === t ? e : t
            };

            function Ge(e, t) {
                var n = e.props;
                if (n) {
                    var o, r, i, a = {};
                    if (Array.isArray(n)) {
                        o = n.length;
                        while (o--) r = n[o], "string" === typeof r && (i = _(r), a[i] = {type: null})
                    } else if (u(n)) for (var s in n) r = n[s], i = _(s), a[i] = u(r) ? r : {type: r}; else 0;
                    e.props = a
                }
            }

            function Ve(e, t) {
                var n = e.inject;
                if (n) {
                    var o = e.inject = {};
                    if (Array.isArray(n)) for (var r = 0; r < n.length; r++) o[n[r]] = {from: n[r]}; else if (u(n)) for (var i in n) {
                        var a = n[i];
                        o[i] = u(a) ? N({from: i}, a) : {from: a}
                    } else 0
                }
            }

            function We(e) {
                var t = e.directives;
                if (t) for (var n in t) {
                    var o = t[n];
                    "function" === typeof o && (t[n] = {bind: o, update: o})
                }
            }

            function Ke(e, t, n) {
                if ("function" === typeof t && (t = t.options), Ge(t, n), Ve(t, n), We(t), !t._base && (t.extends && (e = Ke(e, t.extends, n)), t.mixins)) for (var o = 0, r = t.mixins.length; o < r; o++) e = Ke(e, t.mixins[o], n);
                var i, a = {};
                for (i in e) s(i);
                for (i in t) y(e, i) || s(i);

                function s(o) {
                    var r = je[o] || Ye;
                    a[o] = r(e[o], t[o], n, o)
                }

                return a
            }

            function qe(e, t, n, o) {
                if ("string" === typeof n) {
                    var r = e[t];
                    if (y(r, n)) return r[n];
                    var i = _(n);
                    if (y(r, i)) return r[i];
                    var a = S(i);
                    if (y(r, a)) return r[a];
                    var s = r[n] || r[i] || r[a];
                    return s
                }
            }

            function Xe(e, t, n, o) {
                var r = t[e], i = !y(n, e), a = n[e], s = et(Boolean, r.type);
                if (s > -1) if (i && !y(r, "default")) a = !1; else if ("" === a || a === E(e)) {
                    var l = et(String, r.type);
                    (l < 0 || s < l) && (a = !0)
                }
                if (void 0 === a) {
                    a = Qe(o, r, e);
                    var c = Ae;
                    Oe(!0), Ie(a), Oe(c)
                }
                return a
            }

            function Qe(e, t, n) {
                if (y(t, "default")) {
                    var o = t.default;
                    return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n] ? e._props[n] : "function" === typeof o && "Function" !== Je(t.type) ? o.call(e) : o
                }
            }

            function Je(e) {
                var t = e && e.toString().match(/^\s*function (\w+)/);
                return t ? t[1] : ""
            }

            function Ze(e, t) {
                return Je(e) === Je(t)
            }

            function et(e, t) {
                if (!Array.isArray(t)) return Ze(t, e) ? 0 : -1;
                for (var n = 0, o = t.length; n < o; n++) if (Ze(t[n], e)) return n;
                return -1
            }

            function tt(e, t, n) {
                if (t) {
                    var o = t;
                    while (o = o.$parent) {
                        var r = o.$options.errorCaptured;
                        if (r) for (var i = 0; i < r.length; i++) try {
                            var a = !1 === r[i].call(o, e, t, n);
                            if (a) return
                        } catch (wa) {
                            ot(wa, o, "errorCaptured hook")
                        }
                    }
                }
                ot(e, t, n)
            }

            function nt(e, t, n, o, r) {
                var i;
                try {
                    i = n ? e.apply(t, n) : e.call(t), i && !i._isVue && f(i) && i.catch(function (e) {
                        return tt(e, o, r + " (Promise/async)")
                    })
                } catch (wa) {
                    tt(wa, o, r)
                }
                return i
            }

            function ot(e, t, n) {
                if (U.errorHandler) try {
                    return U.errorHandler.call(null, e, t, n)
                } catch (wa) {
                    wa !== e && rt(wa, null, "config.errorHandler")
                }
                rt(e, t, n)
            }

            function rt(e, t, n) {
                if (!X && !Q || "undefined" === typeof console) throw e;
                console.error(e)
            }

            var it, at = !1, st = [], lt = !1;

            function ct() {
                lt = !1;
                var e = st.slice(0);
                st.length = 0;
                for (var t = 0; t < e.length; t++) e[t]()
            }

            if ("undefined" !== typeof Promise && ue(Promise)) {
                var ut = Promise.resolve();
                it = function () {
                    ut.then(ct), oe && setTimeout(I)
                }, at = !0
            } else if (ee || "undefined" === typeof MutationObserver || !ue(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) it = "undefined" !== typeof setImmediate && ue(setImmediate) ? function () {
                setImmediate(ct)
            } : function () {
                setTimeout(ct, 0)
            }; else {
                var pt = 1, dt = new MutationObserver(ct), ft = document.createTextNode(String(pt));
                dt.observe(ft, {characterData: !0}), it = function () {
                    pt = (pt + 1) % 2, ft.data = String(pt)
                }, at = !0
            }

            function mt(e, t) {
                var n;
                if (st.push(function () {
                    if (e) try {
                        e.call(t)
                    } catch (wa) {
                        tt(wa, t, "nextTick")
                    } else n && n(t)
                }), lt || (lt = !0, it()), !e && "undefined" !== typeof Promise) return new Promise(function (e) {
                    n = e
                })
            }

            var ht = new pe;

            function gt(e) {
                bt(e, ht), ht.clear()
            }

            function bt(e, t) {
                var n, o, r = Array.isArray(e);
                if (!(!r && !l(e) || Object.isFrozen(e) || e instanceof xe)) {
                    if (e.__ob__) {
                        var i = e.__ob__.dep.id;
                        if (t.has(i)) return;
                        t.add(i)
                    }
                    if (r) {
                        n = e.length;
                        while (n--) bt(e[n], t)
                    } else {
                        o = Object.keys(e), n = o.length;
                        while (n--) bt(e[o[n]], t)
                    }
                }
            }

            var vt = k(function (e) {
                var t = "&" === e.charAt(0);
                e = t ? e.slice(1) : e;
                var n = "~" === e.charAt(0);
                e = n ? e.slice(1) : e;
                var o = "!" === e.charAt(0);
                return e = o ? e.slice(1) : e, {name: e, once: n, capture: o, passive: t}
            });

            function xt(e, t) {
                function n() {
                    var e = arguments, o = n.fns;
                    if (!Array.isArray(o)) return nt(o, null, arguments, t, "v-on handler");
                    for (var r = o.slice(), i = 0; i < r.length; i++) nt(r[i], null, e, t, "v-on handler")
                }

                return n.fns = e, n
            }

            function yt(e, t, n, r, a, s) {
                var l, c, u, p;
                for (l in e) c = e[l], u = t[l], p = vt(l), o(c) || (o(u) ? (o(c.fns) && (c = e[l] = xt(c, s)), i(p.once) && (c = e[l] = a(p.name, c, p.capture)), n(p.name, c, p.capture, p.passive, p.params)) : c !== u && (u.fns = c, e[l] = u));
                for (l in t) o(e[l]) && (p = vt(l), r(p.name, t[l], p.capture))
            }

            function kt(e, t, n) {
                var a;
                e instanceof xe && (e = e.data.hook || (e.data.hook = {}));
                var s = e[t];

                function l() {
                    n.apply(this, arguments), v(a.fns, l)
                }

                o(s) ? a = xt([l]) : r(s.fns) && i(s.merged) ? (a = s, a.fns.push(l)) : a = xt([s, l]), a.merged = !0, e[t] = a
            }

            function wt(e, t, n) {
                var i = t.options.props;
                if (!o(i)) {
                    var a = {}, s = e.attrs, l = e.props;
                    if (r(s) || r(l)) for (var c in i) {
                        var u = E(c);
                        _t(a, l, c, u, !0) || _t(a, s, c, u, !1)
                    }
                    return a
                }
            }

            function _t(e, t, n, o, i) {
                if (r(t)) {
                    if (y(t, n)) return e[n] = t[n], i || delete t[n], !0;
                    if (y(t, o)) return e[n] = t[o], i || delete t[o], !0
                }
                return !1
            }

            function St(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e
            }

            function Tt(e) {
                return s(e) ? [we(e)] : Array.isArray(e) ? Ct(e) : void 0
            }

            function Et(e) {
                return r(e) && r(e.text) && a(e.isComment)
            }

            function Ct(e, t) {
                var n, a, l, c, u = [];
                for (n = 0; n < e.length; n++) a = e[n], o(a) || "boolean" === typeof a || (l = u.length - 1, c = u[l], Array.isArray(a) ? a.length > 0 && (a = Ct(a, (t || "") + "_" + n), Et(a[0]) && Et(c) && (u[l] = we(c.text + a[0].text), a.shift()), u.push.apply(u, a)) : s(a) ? Et(c) ? u[l] = we(c.text + a) : "" !== a && u.push(we(a)) : Et(a) && Et(c) ? u[l] = we(c.text + a.text) : (i(e._isVList) && r(a.tag) && o(a.key) && r(t) && (a.key = "__vlist" + t + "_" + n + "__"), u.push(a)));
                return u
            }

            function At(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" === typeof t ? t.call(e) : t)
            }

            function Ot(e) {
                var t = Pt(e.$options.inject, e);
                t && (Oe(!1), Object.keys(t).forEach(function (n) {
                    Fe(e, n, t[n])
                }), Oe(!0))
            }

            function Pt(e, t) {
                if (e) {
                    for (var n = Object.create(null), o = de ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < o.length; r++) {
                        var i = o[r];
                        if ("__ob__" !== i) {
                            var a = e[i].from, s = t;
                            while (s) {
                                if (s._provided && y(s._provided, a)) {
                                    n[i] = s._provided[a];
                                    break
                                }
                                s = s.$parent
                            }
                            if (!s) if ("default" in e[i]) {
                                var l = e[i].default;
                                n[i] = "function" === typeof l ? l.call(t) : l
                            } else 0
                        }
                    }
                    return n
                }
            }

            function Nt(e, t) {
                if (!e || !e.length) return {};
                for (var n = {}, o = 0, r = e.length; o < r; o++) {
                    var i = e[o], a = i.data;
                    if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, i.context !== t && i.fnContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(i); else {
                        var s = a.slot, l = n[s] || (n[s] = []);
                        "template" === i.tag ? l.push.apply(l, i.children || []) : l.push(i)
                    }
                }
                for (var c in n) n[c].every(Lt) && delete n[c];
                return n
            }

            function Lt(e) {
                return e.isComment && !e.asyncFactory || " " === e.text
            }

            function It(e, t, o) {
                var r;
                if (e) {
                    if (e._normalized) return e._normalized;
                    if (e.$stable && o && o !== n && 0 === Object.keys(t).length) return o;
                    for (var i in r = {}, e) e[i] && "$" !== i[0] && (r[i] = Ft(t, i, e[i]))
                } else r = {};
                for (var a in t) a in r || (r[a] = Mt(t, a));
                return e && Object.isExtensible(e) && (e._normalized = r), G(r, "$stable", !e || !!e.$stable), r
            }

            function Ft(e, t, n) {
                var o = function () {
                    var e = arguments.length ? n.apply(null, arguments) : n({});
                    return e = e && "object" === typeof e && !Array.isArray(e) ? [e] : Tt(e), e && 0 === e.length ? void 0 : e
                };
                return n.proxy && Object.defineProperty(e, t, {get: o, enumerable: !0, configurable: !0}), o
            }

            function Mt(e, t) {
                return function () {
                    return e[t]
                }
            }

            function Dt(e, t) {
                var n, o, i, a, s;
                if (Array.isArray(e) || "string" === typeof e) for (n = new Array(e.length), o = 0, i = e.length; o < i; o++) n[o] = t(e[o], o); else if ("number" === typeof e) for (n = new Array(e), o = 0; o < e; o++) n[o] = t(o + 1, o); else if (l(e)) if (de && e[Symbol.iterator]) {
                    n = [];
                    var c = e[Symbol.iterator](), u = c.next();
                    while (!u.done) n.push(t(u.value, n.length)), u = c.next()
                } else for (a = Object.keys(e), n = new Array(a.length), o = 0, i = a.length; o < i; o++) s = a[o], n[o] = t(e[s], s, o);
                return r(n) || (n = []), n._isVList = !0, n
            }

            function Rt(e, t, n, o) {
                var r, i = this.$scopedSlots[e];
                i ? (n = n || {}, o && (n = N(N({}, o), n)), r = i(n) || t) : r = this.$slots[e] || t;
                var a = n && n.slot;
                return a ? this.$createElement("template", {slot: a}, r) : r
            }

            function jt(e) {
                return qe(this.$options, "filters", e, !0) || M
            }

            function Bt(e, t) {
                return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t
            }

            function $t(e, t, n, o, r) {
                var i = U.keyCodes[t] || n;
                return r && o && !U.keyCodes[t] ? Bt(r, o) : i ? Bt(i, e) : o ? E(o) !== t : void 0
            }

            function zt(e, t, n, o, r) {
                if (n) if (l(n)) {
                    var i;
                    Array.isArray(n) && (n = L(n));
                    var a = function (a) {
                        if ("class" === a || "style" === a || b(a)) i = e; else {
                            var s = e.attrs && e.attrs.type;
                            i = o || U.mustUseProp(t, s, a) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
                        }
                        var l = _(a);
                        if (!(a in i) && !(l in i) && (i[a] = n[a], r)) {
                            var c = e.on || (e.on = {});
                            c["update:" + l] = function (e) {
                                n[a] = e
                            }
                        }
                    };
                    for (var s in n) a(s)
                } else ;
                return e
            }

            function Ut(e, t) {
                var n = this._staticTrees || (this._staticTrees = []), o = n[e];
                return o && !t ? o : (o = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), Yt(o, "__static__" + e, !1), o)
            }

            function Ht(e, t, n) {
                return Yt(e, "__once__" + t + (n ? "_" + n : ""), !0), e
            }

            function Yt(e, t, n) {
                if (Array.isArray(e)) for (var o = 0; o < e.length; o++) e[o] && "string" !== typeof e[o] && Gt(e[o], t + "_" + o, n); else Gt(e, t, n)
            }

            function Gt(e, t, n) {
                e.isStatic = !0, e.key = t, e.isOnce = n
            }

            function Vt(e, t) {
                if (t) if (u(t)) {
                    var n = e.on = e.on ? N({}, e.on) : {};
                    for (var o in t) {
                        var r = n[o], i = t[o];
                        n[o] = r ? [].concat(r, i) : i
                    }
                } else ;
                return e
            }

            function Wt(e, t, n) {
                n = n || {$stable: !t};
                for (var o = 0; o < e.length; o++) {
                    var r = e[o];
                    Array.isArray(r) ? Wt(r, t, n) : r && (r.proxy && (r.fn.proxy = !0), n[r.key] = r.fn)
                }
                return n
            }

            function Kt(e, t) {
                for (var n = 0; n < t.length; n += 2) {
                    var o = t[n];
                    "string" === typeof o && o && (e[t[n]] = t[n + 1])
                }
                return e
            }

            function qt(e, t) {
                return "string" === typeof e ? t + e : e
            }

            function Xt(e) {
                e._o = Ht, e._n = h, e._s = m, e._l = Dt, e._t = Rt, e._q = D, e._i = R, e._m = Ut, e._f = jt, e._k = $t, e._b = zt, e._v = we, e._e = ke, e._u = Wt, e._g = Vt, e._d = Kt, e._p = qt
            }

            function Qt(e, t, o, r, a) {
                var s, l = this, c = a.options;
                y(r, "_uid") ? (s = Object.create(r), s._original = r) : (s = r, r = r._original);
                var u = i(c._compiled), p = !u;
                this.data = e, this.props = t, this.children = o, this.parent = r, this.listeners = e.on || n, this.injections = Pt(c.inject, r), this.slots = function () {
                    return l.$slots || It(e.scopedSlots, l.$slots = Nt(o, r)), l.$slots
                }, Object.defineProperty(this, "scopedSlots", {
                    enumerable: !0, get: function () {
                        return It(e.scopedSlots, this.slots())
                    }
                }), u && (this.$options = c, this.$slots = this.slots(), this.$scopedSlots = It(e.scopedSlots, this.$slots)), c._scopeId ? this._c = function (e, t, n, o) {
                    var i = pn(s, e, t, n, o, p);
                    return i && !Array.isArray(i) && (i.fnScopeId = c._scopeId, i.fnContext = r), i
                } : this._c = function (e, t, n, o) {
                    return pn(s, e, t, n, o, p)
                }
            }

            function Jt(e, t, o, i, a) {
                var s = e.options, l = {}, c = s.props;
                if (r(c)) for (var u in c) l[u] = Xe(u, c, t || n); else r(o.attrs) && en(l, o.attrs), r(o.props) && en(l, o.props);
                var p = new Qt(o, l, a, i, e), d = s.render.call(null, p._c, p);
                if (d instanceof xe) return Zt(d, o, p.parent, s, p);
                if (Array.isArray(d)) {
                    for (var f = Tt(d) || [], m = new Array(f.length), h = 0; h < f.length; h++) m[h] = Zt(f[h], o, p.parent, s, p);
                    return m
                }
            }

            function Zt(e, t, n, o, r) {
                var i = _e(e);
                return i.fnContext = n, i.fnOptions = o, t.slot && ((i.data || (i.data = {})).slot = t.slot), i
            }

            function en(e, t) {
                for (var n in t) e[_(n)] = t[n]
            }

            Xt(Qt.prototype);
            var tn = {
                init: function (e, t) {
                    if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                        var n = e;
                        tn.prepatch(n, n)
                    } else {
                        var o = e.componentInstance = rn(e, Pn);
                        o.$mount(t ? e.elm : void 0, t)
                    }
                }, prepatch: function (e, t) {
                    var n = t.componentOptions, o = t.componentInstance = e.componentInstance;
                    Mn(o, n.propsData, n.listeners, t, n.children)
                }, insert: function (e) {
                    var t = e.context, n = e.componentInstance;
                    n._isMounted || (n._isMounted = !0, Bn(n, "mounted")), e.data.keepAlive && (t._isMounted ? Qn(n) : Rn(n, !0))
                }, destroy: function (e) {
                    var t = e.componentInstance;
                    t._isDestroyed || (e.data.keepAlive ? jn(t, !0) : t.$destroy())
                }
            }, nn = Object.keys(tn);

            function on(e, t, n, a, s) {
                if (!o(e)) {
                    var c = n.$options._base;
                    if (l(e) && (e = c.extend(e)), "function" === typeof e) {
                        var u;
                        if (o(e.cid) && (u = e, e = kn(u, c), void 0 === e)) return yn(u, t, n, a, s);
                        t = t || {}, ko(e), r(t.model) && ln(e.options, t);
                        var p = wt(t, e, s);
                        if (i(e.options.functional)) return Jt(e, p, t, n, a);
                        var d = t.on;
                        if (t.on = t.nativeOn, i(e.options.abstract)) {
                            var f = t.slot;
                            t = {}, f && (t.slot = f)
                        }
                        an(t);
                        var m = e.options.name || s,
                            h = new xe("vue-component-" + e.cid + (m ? "-" + m : ""), t, void 0, void 0, void 0, n, {
                                Ctor: e,
                                propsData: p,
                                listeners: d,
                                tag: s,
                                children: a
                            }, u);
                        return h
                    }
                }
            }

            function rn(e, t) {
                var n = {_isComponent: !0, _parentVnode: e, parent: t}, o = e.data.inlineTemplate;
                return r(o) && (n.render = o.render, n.staticRenderFns = o.staticRenderFns), new e.componentOptions.Ctor(n)
            }

            function an(e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < nn.length; n++) {
                    var o = nn[n], r = t[o], i = tn[o];
                    r === i || r && r._merged || (t[o] = r ? sn(i, r) : i)
                }
            }

            function sn(e, t) {
                var n = function (n, o) {
                    e(n, o), t(n, o)
                };
                return n._merged = !0, n
            }

            function ln(e, t) {
                var n = e.model && e.model.prop || "value", o = e.model && e.model.event || "input";
                (t.attrs || (t.attrs = {}))[n] = t.model.value;
                var i = t.on || (t.on = {}), a = i[o], s = t.model.callback;
                r(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (i[o] = [s].concat(a)) : i[o] = s
            }

            var cn = 1, un = 2;

            function pn(e, t, n, o, r, a) {
                return (Array.isArray(n) || s(n)) && (r = o, o = n, n = void 0), i(a) && (r = un), dn(e, t, n, o, r)
            }

            function dn(e, t, n, o, i) {
                if (r(n) && r(n.__ob__)) return ke();
                if (r(n) && r(n.is) && (t = n.is), !t) return ke();
                var a, s, l;
                (Array.isArray(o) && "function" === typeof o[0] && (n = n || {}, n.scopedSlots = {default: o[0]}, o.length = 0), i === un ? o = Tt(o) : i === cn && (o = St(o)), "string" === typeof t) ? (s = e.$vnode && e.$vnode.ns || U.getTagNamespace(t), a = U.isReservedTag(t) ? new xe(U.parsePlatformTagName(t), n, o, void 0, void 0, e) : n && n.pre || !r(l = qe(e.$options, "components", t)) ? new xe(t, n, o, void 0, void 0, e) : on(l, n, e, o, t)) : a = on(t, n, e, o);
                return Array.isArray(a) ? a : r(a) ? (r(s) && fn(a, s), r(n) && mn(n), a) : ke()
            }

            function fn(e, t, n) {
                if (e.ns = t, "foreignObject" === e.tag && (t = void 0, n = !0), r(e.children)) for (var a = 0, s = e.children.length; a < s; a++) {
                    var l = e.children[a];
                    r(l.tag) && (o(l.ns) || i(n) && "svg" !== l.tag) && fn(l, t, n)
                }
            }

            function mn(e) {
                l(e.style) && gt(e.style), l(e.class) && gt(e.class)
            }

            function hn(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$options, o = e.$vnode = t._parentVnode, r = o && o.context;
                e.$slots = Nt(t._renderChildren, r), e.$scopedSlots = n, e._c = function (t, n, o, r) {
                    return pn(e, t, n, o, r, !1)
                }, e.$createElement = function (t, n, o, r) {
                    return pn(e, t, n, o, r, !0)
                };
                var i = o && o.data;
                Fe(e, "$attrs", i && i.attrs || n, null, !0), Fe(e, "$listeners", t._parentListeners || n, null, !0)
            }

            var gn, bn = null;

            function vn(e) {
                Xt(e.prototype), e.prototype.$nextTick = function (e) {
                    return mt(e, this)
                }, e.prototype._render = function () {
                    var e, t = this, n = t.$options, o = n.render, r = n._parentVnode;
                    r && (t.$scopedSlots = It(r.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = r;
                    try {
                        bn = t, e = o.call(t._renderProxy, t.$createElement)
                    } catch (wa) {
                        tt(wa, t, "render"), e = t._vnode
                    } finally {
                        bn = null
                    }
                    return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof xe || (e = ke()), e.parent = r, e
                }
            }

            function xn(e, t) {
                return (e.__esModule || de && "Module" === e[Symbol.toStringTag]) && (e = e.default), l(e) ? t.extend(e) : e
            }

            function yn(e, t, n, o, r) {
                var i = ke();
                return i.asyncFactory = e, i.asyncMeta = {data: t, context: n, children: o, tag: r}, i
            }

            function kn(e, t) {
                if (i(e.error) && r(e.errorComp)) return e.errorComp;
                if (r(e.resolved)) return e.resolved;
                if (i(e.loading) && r(e.loadingComp)) return e.loadingComp;
                var n = bn;
                if (!r(e.owners)) {
                    var a = e.owners = [n], s = !0, c = function (e) {
                        for (var t = 0, n = a.length; t < n; t++) a[t].$forceUpdate();
                        e && (a.length = 0)
                    }, u = j(function (n) {
                        e.resolved = xn(n, t), s ? a.length = 0 : c(!0)
                    }), p = j(function (t) {
                        r(e.errorComp) && (e.error = !0, c(!0))
                    }), d = e(u, p);
                    return l(d) && (f(d) ? o(e.resolved) && d.then(u, p) : f(d.component) && (d.component.then(u, p), r(d.error) && (e.errorComp = xn(d.error, t)), r(d.loading) && (e.loadingComp = xn(d.loading, t), 0 === d.delay ? e.loading = !0 : setTimeout(function () {
                        o(e.resolved) && o(e.error) && (e.loading = !0, c(!1))
                    }, d.delay || 200)), r(d.timeout) && setTimeout(function () {
                        o(e.resolved) && p(null)
                    }, d.timeout))), s = !1, e.loading ? e.loadingComp : e.resolved
                }
                e.owners.push(n)
            }

            function wn(e) {
                return e.isComment && e.asyncFactory
            }

            function _n(e) {
                if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    if (r(n) && (r(n.componentOptions) || wn(n))) return n
                }
            }

            function Sn(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && An(e, t)
            }

            function Tn(e, t) {
                gn.$on(e, t)
            }

            function En(e, t) {
                gn.$off(e, t)
            }

            function Cn(e, t) {
                var n = gn;
                return function o() {
                    var r = t.apply(null, arguments);
                    null !== r && n.$off(e, o)
                }
            }

            function An(e, t, n) {
                gn = e, yt(t, n || {}, Tn, En, Cn, e), gn = void 0
            }

            function On(e) {
                var t = /^hook:/;
                e.prototype.$on = function (e, n) {
                    var o = this;
                    if (Array.isArray(e)) for (var r = 0, i = e.length; r < i; r++) o.$on(e[r], n); else (o._events[e] || (o._events[e] = [])).push(n), t.test(e) && (o._hasHookEvent = !0);
                    return o
                }, e.prototype.$once = function (e, t) {
                    var n = this;

                    function o() {
                        n.$off(e, o), t.apply(n, arguments)
                    }

                    return o.fn = t, n.$on(e, o), n
                }, e.prototype.$off = function (e, t) {
                    var n = this;
                    if (!arguments.length) return n._events = Object.create(null), n;
                    if (Array.isArray(e)) {
                        for (var o = 0, r = e.length; o < r; o++) n.$off(e[o], t);
                        return n
                    }
                    var i, a = n._events[e];
                    if (!a) return n;
                    if (!t) return n._events[e] = null, n;
                    var s = a.length;
                    while (s--) if (i = a[s], i === t || i.fn === t) {
                        a.splice(s, 1);
                        break
                    }
                    return n
                }, e.prototype.$emit = function (e) {
                    var t = this, n = t._events[e];
                    if (n) {
                        n = n.length > 1 ? P(n) : n;
                        for (var o = P(arguments, 1), r = 'event handler for "' + e + '"', i = 0, a = n.length; i < a; i++) nt(n[i], t, o, t, r)
                    }
                    return t
                }
            }

            var Pn = null;

            function Nn(e) {
                var t = Pn;
                return Pn = e, function () {
                    Pn = t
                }
            }

            function Ln(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    while (n.$options.abstract && n.$parent) n = n.$parent;
                    n.$children.push(e)
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1
            }

            function In(e) {
                e.prototype._update = function (e, t) {
                    var n = this, o = n.$el, r = n._vnode, i = Nn(n);
                    n._vnode = e, n.$el = r ? n.__patch__(r, e) : n.__patch__(n.$el, e, t, !1), i(), o && (o.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
                }, e.prototype.$forceUpdate = function () {
                    var e = this;
                    e._watcher && e._watcher.update()
                }, e.prototype.$destroy = function () {
                    var e = this;
                    if (!e._isBeingDestroyed) {
                        Bn(e, "beforeDestroy"), e._isBeingDestroyed = !0;
                        var t = e.$parent;
                        !t || t._isBeingDestroyed || e.$options.abstract || v(t.$children, e), e._watcher && e._watcher.teardown();
                        var n = e._watchers.length;
                        while (n--) e._watchers[n].teardown();
                        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Bn(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null)
                    }
                }
            }

            function Fn(e, t, n) {
                var o;
                return e.$el = t, e.$options.render || (e.$options.render = ke), Bn(e, "beforeMount"), o = function () {
                    e._update(e._render(), n)
                }, new to(e, o, I, {
                    before: function () {
                        e._isMounted && !e._isDestroyed && Bn(e, "beforeUpdate")
                    }
                }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Bn(e, "mounted")), e
            }

            function Mn(e, t, o, r, i) {
                var a = !!(r.data.scopedSlots && !r.data.scopedSlots.$stable || e.$scopedSlots !== n && !e.$scopedSlots.$stable),
                    s = !!(i || e.$options._renderChildren || a);
                if (e.$options._parentVnode = r, e.$vnode = r, e._vnode && (e._vnode.parent = r), e.$options._renderChildren = i, e.$attrs = r.data.attrs || n, e.$listeners = o || n, t && e.$options.props) {
                    Oe(!1);
                    for (var l = e._props, c = e.$options._propKeys || [], u = 0; u < c.length; u++) {
                        var p = c[u], d = e.$options.props;
                        l[p] = Xe(p, d, t, e)
                    }
                    Oe(!0), e.$options.propsData = t
                }
                o = o || n;
                var f = e.$options._parentListeners;
                e.$options._parentListeners = o, An(e, o, f), s && (e.$slots = Nt(i, r.context), e.$forceUpdate())
            }

            function Dn(e) {
                while (e && (e = e.$parent)) if (e._inactive) return !0;
                return !1
            }

            function Rn(e, t) {
                if (t) {
                    if (e._directInactive = !1, Dn(e)) return
                } else if (e._directInactive) return;
                if (e._inactive || null === e._inactive) {
                    e._inactive = !1;
                    for (var n = 0; n < e.$children.length; n++) Rn(e.$children[n]);
                    Bn(e, "activated")
                }
            }

            function jn(e, t) {
                if ((!t || (e._directInactive = !0, !Dn(e))) && !e._inactive) {
                    e._inactive = !0;
                    for (var n = 0; n < e.$children.length; n++) jn(e.$children[n]);
                    Bn(e, "deactivated")
                }
            }

            function Bn(e, t) {
                be();
                var n = e.$options[t], o = t + " hook";
                if (n) for (var r = 0, i = n.length; r < i; r++) nt(n[r], e, null, e, o);
                e._hasHookEvent && e.$emit("hook:" + t), ve()
            }

            var $n = [], zn = [], Un = {}, Hn = !1, Yn = !1, Gn = 0;

            function Vn() {
                Gn = $n.length = zn.length = 0, Un = {}, Hn = Yn = !1
            }

            var Wn = 0, Kn = Date.now;

            function qn() {
                var e, t;
                for (Wn = Kn(), Yn = !0, $n.sort(function (e, t) {
                    return e.id - t.id
                }), Gn = 0; Gn < $n.length; Gn++) e = $n[Gn], e.before && e.before(), t = e.id, Un[t] = null, e.run();
                var n = zn.slice(), o = $n.slice();
                Vn(), Jn(n), Xn(o), ce && U.devtools && ce.emit("flush")
            }

            function Xn(e) {
                var t = e.length;
                while (t--) {
                    var n = e[t], o = n.vm;
                    o._watcher === n && o._isMounted && !o._isDestroyed && Bn(o, "updated")
                }
            }

            function Qn(e) {
                e._inactive = !1, zn.push(e)
            }

            function Jn(e) {
                for (var t = 0; t < e.length; t++) e[t]._inactive = !0, Rn(e[t], !0)
            }

            function Zn(e) {
                var t = e.id;
                if (null == Un[t]) {
                    if (Un[t] = !0, Yn) {
                        var n = $n.length - 1;
                        while (n > Gn && $n[n].id > e.id) n--;
                        $n.splice(n + 1, 0, e)
                    } else $n.push(e);
                    Hn || (Hn = !0, mt(qn))
                }
            }

            X && Kn() > document.createEvent("Event").timeStamp && (Kn = function () {
                return performance.now()
            });
            var eo = 0, to = function (e, t, n, o, r) {
                this.vm = e, r && (e._watcher = this), e._watchers.push(this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++eo, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new pe, this.newDepIds = new pe, this.expression = "", "function" === typeof t ? this.getter = t : (this.getter = W(t), this.getter || (this.getter = I)), this.value = this.lazy ? void 0 : this.get()
            };
            to.prototype.get = function () {
                var e;
                be(this);
                var t = this.vm;
                try {
                    e = this.getter.call(t, t)
                } catch (wa) {
                    if (!this.user) throw wa;
                    tt(wa, t, 'getter for watcher "' + this.expression + '"')
                } finally {
                    this.deep && gt(e), ve(), this.cleanupDeps()
                }
                return e
            }, to.prototype.addDep = function (e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this))
            }, to.prototype.cleanupDeps = function () {
                var e = this.deps.length;
                while (e--) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this)
                }
                var n = this.depIds;
                this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0
            }, to.prototype.update = function () {
                this.lazy ? this.dirty = !0 : this.sync ? this.run() : Zn(this)
            }, to.prototype.run = function () {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || l(e) || this.deep) {
                        var t = this.value;
                        if (this.value = e, this.user) try {
                            this.cb.call(this.vm, e, t)
                        } catch (wa) {
                            tt(wa, this.vm, 'callback for watcher "' + this.expression + '"')
                        } else this.cb.call(this.vm, e, t)
                    }
                }
            }, to.prototype.evaluate = function () {
                this.value = this.get(), this.dirty = !1
            }, to.prototype.depend = function () {
                var e = this.deps.length;
                while (e--) this.deps[e].depend()
            }, to.prototype.teardown = function () {
                if (this.active) {
                    this.vm._isBeingDestroyed || v(this.vm._watchers, this);
                    var e = this.deps.length;
                    while (e--) this.deps[e].removeSub(this);
                    this.active = !1
                }
            };
            var no = {enumerable: !0, configurable: !0, get: I, set: I};

            function oo(e, t, n) {
                no.get = function () {
                    return this[t][n]
                }, no.set = function (e) {
                    this[t][n] = e
                }, Object.defineProperty(e, n, no)
            }

            function ro(e) {
                e._watchers = [];
                var t = e.$options;
                t.props && io(e, t.props), t.methods && mo(e, t.methods), t.data ? ao(e) : Ie(e._data = {}, !0), t.computed && co(e, t.computed), t.watch && t.watch !== ie && ho(e, t.watch)
            }

            function io(e, t) {
                var n = e.$options.propsData || {}, o = e._props = {}, r = e.$options._propKeys = [], i = !e.$parent;
                i || Oe(!1);
                var a = function (i) {
                    r.push(i);
                    var a = Xe(i, t, n, e);
                    Fe(o, i, a), i in e || oo(e, "_props", i)
                };
                for (var s in t) a(s);
                Oe(!0)
            }

            function ao(e) {
                var t = e.$options.data;
                t = e._data = "function" === typeof t ? so(t, e) : t || {}, u(t) || (t = {});
                var n = Object.keys(t), o = e.$options.props, r = (e.$options.methods, n.length);
                while (r--) {
                    var i = n[r];
                    0, o && y(o, i) || Y(i) || oo(e, "_data", i)
                }
                Ie(t, !0)
            }

            function so(e, t) {
                be();
                try {
                    return e.call(t, t)
                } catch (wa) {
                    return tt(wa, t, "data()"), {}
                } finally {
                    ve()
                }
            }

            var lo = {lazy: !0};

            function co(e, t) {
                var n = e._computedWatchers = Object.create(null), o = le();
                for (var r in t) {
                    var i = t[r], a = "function" === typeof i ? i : i.get;
                    0, o || (n[r] = new to(e, a || I, I, lo)), r in e || uo(e, r, i)
                }
            }

            function uo(e, t, n) {
                var o = !le();
                "function" === typeof n ? (no.get = o ? po(t) : fo(n), no.set = I) : (no.get = n.get ? o && !1 !== n.cache ? po(t) : fo(n.get) : I, no.set = n.set || I), Object.defineProperty(e, t, no)
            }

            function po(e) {
                return function () {
                    var t = this._computedWatchers && this._computedWatchers[e];
                    if (t) return t.dirty && t.evaluate(), he.target && t.depend(), t.value
                }
            }

            function fo(e) {
                return function () {
                    return e.call(this, this)
                }
            }

            function mo(e, t) {
                e.$options.props;
                for (var n in t) e[n] = "function" !== typeof t[n] ? I : O(t[n], e)
            }

            function ho(e, t) {
                for (var n in t) {
                    var o = t[n];
                    if (Array.isArray(o)) for (var r = 0; r < o.length; r++) go(e, n, o[r]); else go(e, n, o)
                }
            }

            function go(e, t, n, o) {
                return u(n) && (o = n, n = n.handler), "string" === typeof n && (n = e[n]), e.$watch(t, n, o)
            }

            function bo(e) {
                var t = {
                    get: function () {
                        return this._data
                    }
                }, n = {
                    get: function () {
                        return this._props
                    }
                };
                Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = Me, e.prototype.$delete = De, e.prototype.$watch = function (e, t, n) {
                    var o = this;
                    if (u(t)) return go(o, e, t, n);
                    n = n || {}, n.user = !0;
                    var r = new to(o, e, t, n);
                    if (n.immediate) try {
                        t.call(o, r.value)
                    } catch (i) {
                        tt(i, o, 'callback for immediate watcher "' + r.expression + '"')
                    }
                    return function () {
                        r.teardown()
                    }
                }
            }

            var vo = 0;

            function xo(e) {
                e.prototype._init = function (e) {
                    var t = this;
                    t._uid = vo++, t._isVue = !0, e && e._isComponent ? yo(t, e) : t.$options = Ke(ko(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, Ln(t), Sn(t), hn(t), Bn(t, "beforeCreate"), Ot(t), ro(t), At(t), Bn(t, "created"), t.$options.el && t.$mount(t.$options.el)
                }
            }

            function yo(e, t) {
                var n = e.$options = Object.create(e.constructor.options), o = t._parentVnode;
                n.parent = t.parent, n._parentVnode = o;
                var r = o.componentOptions;
                n.propsData = r.propsData, n._parentListeners = r.listeners, n._renderChildren = r.children, n._componentTag = r.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns)
            }

            function ko(e) {
                var t = e.options;
                if (e.super) {
                    var n = ko(e.super), o = e.superOptions;
                    if (n !== o) {
                        e.superOptions = n;
                        var r = wo(e);
                        r && N(e.extendOptions, r), t = e.options = Ke(n, e.extendOptions), t.name && (t.components[t.name] = e)
                    }
                }
                return t
            }

            function wo(e) {
                var t, n = e.options, o = e.sealedOptions;
                for (var r in n) n[r] !== o[r] && (t || (t = {}), t[r] = n[r]);
                return t
            }

            function _o(e) {
                this._init(e)
            }

            function So(e) {
                e.use = function (e) {
                    var t = this._installedPlugins || (this._installedPlugins = []);
                    if (t.indexOf(e) > -1) return this;
                    var n = P(arguments, 1);
                    return n.unshift(this), "function" === typeof e.install ? e.install.apply(e, n) : "function" === typeof e && e.apply(null, n), t.push(e), this
                }
            }

            function To(e) {
                e.mixin = function (e) {
                    return this.options = Ke(this.options, e), this
                }
            }

            function Eo(e) {
                e.cid = 0;
                var t = 1;
                e.extend = function (e) {
                    e = e || {};
                    var n = this, o = n.cid, r = e._Ctor || (e._Ctor = {});
                    if (r[o]) return r[o];
                    var i = e.name || n.options.name;
                    var a = function (e) {
                        this._init(e)
                    };
                    return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = t++, a.options = Ke(n.options, e), a["super"] = n, a.options.props && Co(a), a.options.computed && Ao(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, $.forEach(function (e) {
                        a[e] = n[e]
                    }), i && (a.options.components[i] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = N({}, a.options), r[o] = a, a
                }
            }

            function Co(e) {
                var t = e.options.props;
                for (var n in t) oo(e.prototype, "_props", n)
            }

            function Ao(e) {
                var t = e.options.computed;
                for (var n in t) uo(e.prototype, n, t[n])
            }

            function Oo(e) {
                $.forEach(function (t) {
                    e[t] = function (e, n) {
                        return n ? ("component" === t && u(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" === typeof n && (n = {
                            bind: n,
                            update: n
                        }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e]
                    }
                })
            }

            function Po(e) {
                return e && (e.Ctor.options.name || e.tag)
            }

            function No(e, t) {
                return Array.isArray(e) ? e.indexOf(t) > -1 : "string" === typeof e ? e.split(",").indexOf(t) > -1 : !!p(e) && e.test(t)
            }

            function Lo(e, t) {
                var n = e.cache, o = e.keys, r = e._vnode;
                for (var i in n) {
                    var a = n[i];
                    if (a) {
                        var s = Po(a.componentOptions);
                        s && !t(s) && Io(n, i, o, r)
                    }
                }
            }

            function Io(e, t, n, o) {
                var r = e[t];
                !r || o && r.tag === o.tag || r.componentInstance.$destroy(), e[t] = null, v(n, t)
            }

            xo(_o), bo(_o), On(_o), In(_o), vn(_o);
            var Fo = [String, RegExp, Array], Mo = {
                name: "keep-alive",
                abstract: !0,
                props: {include: Fo, exclude: Fo, max: [String, Number]},
                created: function () {
                    this.cache = Object.create(null), this.keys = []
                },
                destroyed: function () {
                    for (var e in this.cache) Io(this.cache, e, this.keys)
                },
                mounted: function () {
                    var e = this;
                    this.$watch("include", function (t) {
                        Lo(e, function (e) {
                            return No(t, e)
                        })
                    }), this.$watch("exclude", function (t) {
                        Lo(e, function (e) {
                            return !No(t, e)
                        })
                    })
                },
                render: function () {
                    var e = this.$slots.default, t = _n(e), n = t && t.componentOptions;
                    if (n) {
                        var o = Po(n), r = this, i = r.include, a = r.exclude;
                        if (i && (!o || !No(i, o)) || a && o && No(a, o)) return t;
                        var s = this, l = s.cache, c = s.keys,
                            u = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
                        l[u] ? (t.componentInstance = l[u].componentInstance, v(c, u), c.push(u)) : (l[u] = t, c.push(u), this.max && c.length > parseInt(this.max) && Io(l, c[0], c, this._vnode)), t.data.keepAlive = !0
                    }
                    return t || e && e[0]
                }
            }, Do = {KeepAlive: Mo};

            function Ro(e) {
                var t = {
                    get: function () {
                        return U
                    }
                };
                Object.defineProperty(e, "config", t), e.util = {
                    warn: fe,
                    extend: N,
                    mergeOptions: Ke,
                    defineReactive: Fe
                }, e.set = Me, e.delete = De, e.nextTick = mt, e.observable = function (e) {
                    return Ie(e), e
                }, e.options = Object.create(null), $.forEach(function (t) {
                    e.options[t + "s"] = Object.create(null)
                }), e.options._base = e, N(e.options.components, Do), So(e), To(e), Eo(e), Oo(e)
            }

            Ro(_o), Object.defineProperty(_o.prototype, "$isServer", {get: le}), Object.defineProperty(_o.prototype, "$ssrContext", {
                get: function () {
                    return this.$vnode && this.$vnode.ssrContext
                }
            }), Object.defineProperty(_o, "FunctionalRenderContext", {value: Qt}), _o.version = "2.6.6";
            var jo = g("style,class"), Bo = g("input,textarea,option,select,progress"), $o = function (e, t, n) {
                    return "value" === n && Bo(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e
                }, zo = g("contenteditable,draggable,spellcheck"), Uo = g("events,caret,typing,plaintext-only"),
                Ho = function (e, t) {
                    return Ko(t) || "false" === t ? "false" : "contenteditable" === e && Uo(t) ? t : "true"
                },
                Yo = g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
                Go = "http://www.w3.org/1999/xlink", Vo = function (e) {
                    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
                }, Wo = function (e) {
                    return Vo(e) ? e.slice(6, e.length) : ""
                }, Ko = function (e) {
                    return null == e || !1 === e
                };

            function qo(e) {
                var t = e.data, n = e, o = e;
                while (r(o.componentInstance)) o = o.componentInstance._vnode, o && o.data && (t = Xo(o.data, t));
                while (r(n = n.parent)) n && n.data && (t = Xo(t, n.data));
                return Qo(t.staticClass, t.class)
            }

            function Xo(e, t) {
                return {staticClass: Jo(e.staticClass, t.staticClass), class: r(e.class) ? [e.class, t.class] : t.class}
            }

            function Qo(e, t) {
                return r(e) || r(t) ? Jo(e, Zo(t)) : ""
            }

            function Jo(e, t) {
                return e ? t ? e + " " + t : e : t || ""
            }

            function Zo(e) {
                return Array.isArray(e) ? er(e) : l(e) ? tr(e) : "string" === typeof e ? e : ""
            }

            function er(e) {
                for (var t, n = "", o = 0, i = e.length; o < i; o++) r(t = Zo(e[o])) && "" !== t && (n && (n += " "), n += t);
                return n
            }

            function tr(e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), t += n);
                return t
            }

            var nr = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
                or = g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
                rr = g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
                ir = function (e) {
                    return or(e) || rr(e)
                };

            function ar(e) {
                return rr(e) ? "svg" : "math" === e ? "math" : void 0
            }

            var sr = Object.create(null);

            function lr(e) {
                if (!X) return !0;
                if (ir(e)) return !1;
                if (e = e.toLowerCase(), null != sr[e]) return sr[e];
                var t = document.createElement(e);
                return e.indexOf("-") > -1 ? sr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : sr[e] = /HTMLUnknownElement/.test(t.toString())
            }

            var cr = g("text,number,password,search,email,tel,url");

            function ur(e) {
                if ("string" === typeof e) {
                    var t = document.querySelector(e);
                    return t || document.createElement("div")
                }
                return e
            }

            function pr(e, t) {
                var n = document.createElement(e);
                return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n)
            }

            function dr(e, t) {
                return document.createElementNS(nr[e], t)
            }

            function fr(e) {
                return document.createTextNode(e)
            }

            function mr(e) {
                return document.createComment(e)
            }

            function hr(e, t, n) {
                e.insertBefore(t, n)
            }

            function gr(e, t) {
                e.removeChild(t)
            }

            function br(e, t) {
                e.appendChild(t)
            }

            function vr(e) {
                return e.parentNode
            }

            function xr(e) {
                return e.nextSibling
            }

            function yr(e) {
                return e.tagName
            }

            function kr(e, t) {
                e.textContent = t
            }

            function wr(e, t) {
                e.setAttribute(t, "")
            }

            var _r = Object.freeze({
                createElement: pr,
                createElementNS: dr,
                createTextNode: fr,
                createComment: mr,
                insertBefore: hr,
                removeChild: gr,
                appendChild: br,
                parentNode: vr,
                nextSibling: xr,
                tagName: yr,
                setTextContent: kr,
                setStyleScope: wr
            }), Sr = {
                create: function (e, t) {
                    Tr(t)
                }, update: function (e, t) {
                    e.data.ref !== t.data.ref && (Tr(e, !0), Tr(t))
                }, destroy: function (e) {
                    Tr(e, !0)
                }
            };

            function Tr(e, t) {
                var n = e.data.ref;
                if (r(n)) {
                    var o = e.context, i = e.componentInstance || e.elm, a = o.$refs;
                    t ? Array.isArray(a[n]) ? v(a[n], i) : a[n] === i && (a[n] = void 0) : e.data.refInFor ? Array.isArray(a[n]) ? a[n].indexOf(i) < 0 && a[n].push(i) : a[n] = [i] : a[n] = i
                }
            }

            var Er = new xe("", {}, []), Cr = ["create", "activate", "update", "remove", "destroy"];

            function Ar(e, t) {
                return e.key === t.key && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && Or(e, t) || i(e.isAsyncPlaceholder) && e.asyncFactory === t.asyncFactory && o(t.asyncFactory.error))
            }

            function Or(e, t) {
                if ("input" !== e.tag) return !0;
                var n, o = r(n = e.data) && r(n = n.attrs) && n.type, i = r(n = t.data) && r(n = n.attrs) && n.type;
                return o === i || cr(o) && cr(i)
            }

            function Pr(e, t, n) {
                var o, i, a = {};
                for (o = t; o <= n; ++o) i = e[o].key, r(i) && (a[i] = o);
                return a
            }

            function Nr(e) {
                var t, n, a = {}, l = e.modules, c = e.nodeOps;
                for (t = 0; t < Cr.length; ++t) for (a[Cr[t]] = [], n = 0; n < l.length; ++n) r(l[n][Cr[t]]) && a[Cr[t]].push(l[n][Cr[t]]);

                function u(e) {
                    return new xe(c.tagName(e).toLowerCase(), {}, [], void 0, e)
                }

                function p(e, t) {
                    function n() {
                        0 === --n.listeners && d(e)
                    }

                    return n.listeners = t, n
                }

                function d(e) {
                    var t = c.parentNode(e);
                    r(t) && c.removeChild(t, e)
                }

                function f(e, t, n, o, a, s, l) {
                    if (r(e.elm) && r(s) && (e = s[l] = _e(e)), e.isRootInsert = !a, !m(e, t, n, o)) {
                        var u = e.data, p = e.children, d = e.tag;
                        r(d) ? (e.elm = e.ns ? c.createElementNS(e.ns, d) : c.createElement(d, e), w(e), x(e, p, t), r(u) && k(e, t), v(n, e.elm, o)) : i(e.isComment) ? (e.elm = c.createComment(e.text), v(n, e.elm, o)) : (e.elm = c.createTextNode(e.text), v(n, e.elm, o))
                    }
                }

                function m(e, t, n, o) {
                    var a = e.data;
                    if (r(a)) {
                        var s = r(e.componentInstance) && a.keepAlive;
                        if (r(a = a.hook) && r(a = a.init) && a(e, !1), r(e.componentInstance)) return h(e, t), v(n, e.elm, o), i(s) && b(e, t, n, o), !0
                    }
                }

                function h(e, t) {
                    r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, y(e) ? (k(e, t), w(e)) : (Tr(e), t.push(e))
                }

                function b(e, t, n, o) {
                    var i, s = e;
                    while (s.componentInstance) if (s = s.componentInstance._vnode, r(i = s.data) && r(i = i.transition)) {
                        for (i = 0; i < a.activate.length; ++i) a.activate[i](Er, s);
                        t.push(s);
                        break
                    }
                    v(n, e.elm, o)
                }

                function v(e, t, n) {
                    r(e) && (r(n) ? c.parentNode(n) === e && c.insertBefore(e, t, n) : c.appendChild(e, t))
                }

                function x(e, t, n) {
                    if (Array.isArray(t)) {
                        0;
                        for (var o = 0; o < t.length; ++o) f(t[o], n, e.elm, null, !0, t, o)
                    } else s(e.text) && c.appendChild(e.elm, c.createTextNode(String(e.text)))
                }

                function y(e) {
                    while (e.componentInstance) e = e.componentInstance._vnode;
                    return r(e.tag)
                }

                function k(e, n) {
                    for (var o = 0; o < a.create.length; ++o) a.create[o](Er, e);
                    t = e.data.hook, r(t) && (r(t.create) && t.create(Er, e), r(t.insert) && n.push(e))
                }

                function w(e) {
                    var t;
                    if (r(t = e.fnScopeId)) c.setStyleScope(e.elm, t); else {
                        var n = e;
                        while (n) r(t = n.context) && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t), n = n.parent
                    }
                    r(t = Pn) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && c.setStyleScope(e.elm, t)
                }

                function _(e, t, n, o, r, i) {
                    for (; o <= r; ++o) f(n[o], i, e, t, !1, n, o)
                }

                function S(e) {
                    var t, n, o = e.data;
                    if (r(o)) for (r(t = o.hook) && r(t = t.destroy) && t(e), t = 0; t < a.destroy.length; ++t) a.destroy[t](e);
                    if (r(t = e.children)) for (n = 0; n < e.children.length; ++n) S(e.children[n])
                }

                function T(e, t, n, o) {
                    for (; n <= o; ++n) {
                        var i = t[n];
                        r(i) && (r(i.tag) ? (E(i), S(i)) : d(i.elm))
                    }
                }

                function E(e, t) {
                    if (r(t) || r(e.data)) {
                        var n, o = a.remove.length + 1;
                        for (r(t) ? t.listeners += o : t = p(e.elm, o), r(n = e.componentInstance) && r(n = n._vnode) && r(n.data) && E(n, t), n = 0; n < a.remove.length; ++n) a.remove[n](e, t);
                        r(n = e.data.hook) && r(n = n.remove) ? n(e, t) : t()
                    } else d(e.elm)
                }

                function C(e, t, n, i, a) {
                    var s, l, u, p, d = 0, m = 0, h = t.length - 1, g = t[0], b = t[h], v = n.length - 1, x = n[0],
                        y = n[v], k = !a;
                    while (d <= h && m <= v) o(g) ? g = t[++d] : o(b) ? b = t[--h] : Ar(g, x) ? (O(g, x, i, n, m), g = t[++d], x = n[++m]) : Ar(b, y) ? (O(b, y, i, n, v), b = t[--h], y = n[--v]) : Ar(g, y) ? (O(g, y, i, n, v), k && c.insertBefore(e, g.elm, c.nextSibling(b.elm)), g = t[++d], y = n[--v]) : Ar(b, x) ? (O(b, x, i, n, m), k && c.insertBefore(e, b.elm, g.elm), b = t[--h], x = n[++m]) : (o(s) && (s = Pr(t, d, h)), l = r(x.key) ? s[x.key] : A(x, t, d, h), o(l) ? f(x, i, e, g.elm, !1, n, m) : (u = t[l], Ar(u, x) ? (O(u, x, i, n, m), t[l] = void 0, k && c.insertBefore(e, u.elm, g.elm)) : f(x, i, e, g.elm, !1, n, m)), x = n[++m]);
                    d > h ? (p = o(n[v + 1]) ? null : n[v + 1].elm, _(e, p, n, m, v, i)) : m > v && T(e, t, d, h)
                }

                function A(e, t, n, o) {
                    for (var i = n; i < o; i++) {
                        var a = t[i];
                        if (r(a) && Ar(e, a)) return i
                    }
                }

                function O(e, t, n, s, l, u) {
                    if (e !== t) {
                        r(t.elm) && r(s) && (t = s[l] = _e(t));
                        var p = t.elm = e.elm;
                        if (i(e.isAsyncPlaceholder)) r(t.asyncFactory.resolved) ? L(e.elm, t, n) : t.isAsyncPlaceholder = !0; else if (i(t.isStatic) && i(e.isStatic) && t.key === e.key && (i(t.isCloned) || i(t.isOnce))) t.componentInstance = e.componentInstance; else {
                            var d, f = t.data;
                            r(f) && r(d = f.hook) && r(d = d.prepatch) && d(e, t);
                            var m = e.children, h = t.children;
                            if (r(f) && y(t)) {
                                for (d = 0; d < a.update.length; ++d) a.update[d](e, t);
                                r(d = f.hook) && r(d = d.update) && d(e, t)
                            }
                            o(t.text) ? r(m) && r(h) ? m !== h && C(p, m, h, n, u) : r(h) ? (r(e.text) && c.setTextContent(p, ""), _(p, null, h, 0, h.length - 1, n)) : r(m) ? T(p, m, 0, m.length - 1) : r(e.text) && c.setTextContent(p, "") : e.text !== t.text && c.setTextContent(p, t.text), r(f) && r(d = f.hook) && r(d = d.postpatch) && d(e, t)
                        }
                    }
                }

                function P(e, t, n) {
                    if (i(n) && r(e.parent)) e.parent.data.pendingInsert = t; else for (var o = 0; o < t.length; ++o) t[o].data.hook.insert(t[o])
                }

                var N = g("attrs,class,staticClass,staticStyle,key");

                function L(e, t, n, o) {
                    var a, s = t.tag, l = t.data, c = t.children;
                    if (o = o || l && l.pre, t.elm = e, i(t.isComment) && r(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
                    if (r(l) && (r(a = l.hook) && r(a = a.init) && a(t, !0), r(a = t.componentInstance))) return h(t, n), !0;
                    if (r(s)) {
                        if (r(c)) if (e.hasChildNodes()) if (r(a = l) && r(a = a.domProps) && r(a = a.innerHTML)) {
                            if (a !== e.innerHTML) return !1
                        } else {
                            for (var u = !0, p = e.firstChild, d = 0; d < c.length; d++) {
                                if (!p || !L(p, c[d], n, o)) {
                                    u = !1;
                                    break
                                }
                                p = p.nextSibling
                            }
                            if (!u || p) return !1
                        } else x(t, c, n);
                        if (r(l)) {
                            var f = !1;
                            for (var m in l) if (!N(m)) {
                                f = !0, k(t, n);
                                break
                            }
                            !f && l["class"] && gt(l["class"])
                        }
                    } else e.data !== t.text && (e.data = t.text);
                    return !0
                }

                return function (e, t, n, s) {
                    if (!o(t)) {
                        var l = !1, p = [];
                        if (o(e)) l = !0, f(t, p); else {
                            var d = r(e.nodeType);
                            if (!d && Ar(e, t)) O(e, t, p, null, null, s); else {
                                if (d) {
                                    if (1 === e.nodeType && e.hasAttribute(B) && (e.removeAttribute(B), n = !0), i(n) && L(e, t, p)) return P(t, p, !0), e;
                                    e = u(e)
                                }
                                var m = e.elm, h = c.parentNode(m);
                                if (f(t, p, m._leaveCb ? null : h, c.nextSibling(m)), r(t.parent)) {
                                    var g = t.parent, b = y(t);
                                    while (g) {
                                        for (var v = 0; v < a.destroy.length; ++v) a.destroy[v](g);
                                        if (g.elm = t.elm, b) {
                                            for (var x = 0; x < a.create.length; ++x) a.create[x](Er, g);
                                            var k = g.data.hook.insert;
                                            if (k.merged) for (var w = 1; w < k.fns.length; w++) k.fns[w]()
                                        } else Tr(g);
                                        g = g.parent
                                    }
                                }
                                r(h) ? T(h, [e], 0, 0) : r(e.tag) && S(e)
                            }
                        }
                        return P(t, p, l), t.elm
                    }
                    r(e) && S(e)
                }
            }

            var Lr = {
                create: Ir, update: Ir, destroy: function (e) {
                    Ir(e, Er)
                }
            };

            function Ir(e, t) {
                (e.data.directives || t.data.directives) && Fr(e, t)
            }

            function Fr(e, t) {
                var n, o, r, i = e === Er, a = t === Er, s = Dr(e.data.directives, e.context),
                    l = Dr(t.data.directives, t.context), c = [], u = [];
                for (n in l) o = s[n], r = l[n], o ? (r.oldValue = o.value, r.oldArg = o.arg, jr(r, "update", t, e), r.def && r.def.componentUpdated && u.push(r)) : (jr(r, "bind", t, e), r.def && r.def.inserted && c.push(r));
                if (c.length) {
                    var p = function () {
                        for (var n = 0; n < c.length; n++) jr(c[n], "inserted", t, e)
                    };
                    i ? kt(t, "insert", p) : p()
                }
                if (u.length && kt(t, "postpatch", function () {
                    for (var n = 0; n < u.length; n++) jr(u[n], "componentUpdated", t, e)
                }), !i) for (n in s) l[n] || jr(s[n], "unbind", e, e, a)
            }

            var Mr = Object.create(null);

            function Dr(e, t) {
                var n, o, r = Object.create(null);
                if (!e) return r;
                for (n = 0; n < e.length; n++) o = e[n], o.modifiers || (o.modifiers = Mr), r[Rr(o)] = o, o.def = qe(t.$options, "directives", o.name, !0);
                return r
            }

            function Rr(e) {
                return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".")
            }

            function jr(e, t, n, o, r) {
                var i = e.def && e.def[t];
                if (i) try {
                    i(n.elm, e, n, o, r)
                } catch (wa) {
                    tt(wa, n.context, "directive " + e.name + " " + t + " hook")
                }
            }

            var Br = [Sr, Lr];

            function $r(e, t) {
                var n = t.componentOptions;
                if ((!r(n) || !1 !== n.Ctor.options.inheritAttrs) && (!o(e.data.attrs) || !o(t.data.attrs))) {
                    var i, a, s, l = t.elm, c = e.data.attrs || {}, u = t.data.attrs || {};
                    for (i in r(u.__ob__) && (u = t.data.attrs = N({}, u)), u) a = u[i], s = c[i], s !== a && zr(l, i, a);
                    for (i in (ee || ne) && u.value !== c.value && zr(l, "value", u.value), c) o(u[i]) && (Vo(i) ? l.removeAttributeNS(Go, Wo(i)) : zo(i) || l.removeAttribute(i))
                }
            }

            function zr(e, t, n) {
                e.tagName.indexOf("-") > -1 ? Ur(e, t, n) : Yo(t) ? Ko(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : zo(t) ? e.setAttribute(t, Ho(t, n)) : Vo(t) ? Ko(n) ? e.removeAttributeNS(Go, Wo(t)) : e.setAttributeNS(Go, t, n) : Ur(e, t, n)
            }

            function Ur(e, t, n) {
                if (Ko(n)) e.removeAttribute(t); else {
                    if (ee && !te && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
                        var o = function (t) {
                            t.stopImmediatePropagation(), e.removeEventListener("input", o)
                        };
                        e.addEventListener("input", o), e.__ieph = !0
                    }
                    e.setAttribute(t, n)
                }
            }

            var Hr = {create: $r, update: $r};

            function Yr(e, t) {
                var n = t.elm, i = t.data, a = e.data;
                if (!(o(i.staticClass) && o(i.class) && (o(a) || o(a.staticClass) && o(a.class)))) {
                    var s = qo(t), l = n._transitionClasses;
                    r(l) && (s = Jo(s, Zo(l))), s !== n._prevClass && (n.setAttribute("class", s), n._prevClass = s)
                }
            }

            var Gr, Vr = {create: Yr, update: Yr}, Wr = "__r", Kr = "__c";

            function qr(e) {
                if (r(e[Wr])) {
                    var t = ee ? "change" : "input";
                    e[t] = [].concat(e[Wr], e[t] || []), delete e[Wr]
                }
                r(e[Kr]) && (e.change = [].concat(e[Kr], e.change || []), delete e[Kr])
            }

            function Xr(e, t, n) {
                var o = Gr;
                return function r() {
                    var i = t.apply(null, arguments);
                    null !== i && Zr(e, r, n, o)
                }
            }

            var Qr = at && !(re && Number(re[1]) <= 53);

            function Jr(e, t, n, o) {
                if (Qr) {
                    var r = Wn, i = t;
                    t = i._wrapper = function (e) {
                        if (e.target === e.currentTarget || e.timeStamp >= r || 0 === e.timeStamp || e.target.ownerDocument !== document) return i.apply(this, arguments)
                    }
                }
                Gr.addEventListener(e, t, ae ? {capture: n, passive: o} : n)
            }

            function Zr(e, t, n, o) {
                (o || Gr).removeEventListener(e, t._wrapper || t, n)
            }

            function ei(e, t) {
                if (!o(e.data.on) || !o(t.data.on)) {
                    var n = t.data.on || {}, r = e.data.on || {};
                    Gr = t.elm, qr(n), yt(n, r, Jr, Zr, Xr, t.context), Gr = void 0
                }
            }

            var ti, ni = {create: ei, update: ei};

            function oi(e, t) {
                if (!o(e.data.domProps) || !o(t.data.domProps)) {
                    var n, i, a = t.elm, s = e.data.domProps || {}, l = t.data.domProps || {};
                    for (n in r(l.__ob__) && (l = t.data.domProps = N({}, l)), s) o(l[n]) && (a[n] = "");
                    for (n in l) {
                        if (i = l[n], "textContent" === n || "innerHTML" === n) {
                            if (t.children && (t.children.length = 0), i === s[n]) continue;
                            1 === a.childNodes.length && a.removeChild(a.childNodes[0])
                        }
                        if ("value" === n || i !== s[n]) if ("value" === n) {
                            a._value = i;
                            var c = o(i) ? "" : String(i);
                            ri(a, c) && (a.value = c)
                        } else if ("innerHTML" === n && rr(a.tagName) && o(a.innerHTML)) {
                            ti = ti || document.createElement("div"), ti.innerHTML = "<svg>" + i + "</svg>";
                            var u = ti.firstChild;
                            while (a.firstChild) a.removeChild(a.firstChild);
                            while (u.firstChild) a.appendChild(u.firstChild)
                        } else a[n] = i
                    }
                }
            }

            function ri(e, t) {
                return !e.composing && ("OPTION" === e.tagName || ii(e, t) || ai(e, t))
            }

            function ii(e, t) {
                var n = !0;
                try {
                    n = document.activeElement !== e
                } catch (wa) {
                }
                return n && e.value !== t
            }

            function ai(e, t) {
                var n = e.value, o = e._vModifiers;
                if (r(o)) {
                    if (o.number) return h(n) !== h(t);
                    if (o.trim) return n.trim() !== t.trim()
                }
                return n !== t
            }

            var si = {create: oi, update: oi}, li = k(function (e) {
                var t = {}, n = /;(?![^(]*\))/g, o = /:(.+)/;
                return e.split(n).forEach(function (e) {
                    if (e) {
                        var n = e.split(o);
                        n.length > 1 && (t[n[0].trim()] = n[1].trim())
                    }
                }), t
            });

            function ci(e) {
                var t = ui(e.style);
                return e.staticStyle ? N(e.staticStyle, t) : t
            }

            function ui(e) {
                return Array.isArray(e) ? L(e) : "string" === typeof e ? li(e) : e
            }

            function pi(e, t) {
                var n, o = {};
                if (t) {
                    var r = e;
                    while (r.componentInstance) r = r.componentInstance._vnode, r && r.data && (n = ci(r.data)) && N(o, n)
                }
                (n = ci(e.data)) && N(o, n);
                var i = e;
                while (i = i.parent) i.data && (n = ci(i.data)) && N(o, n);
                return o
            }

            var di, fi = /^--/, mi = /\s*!important$/, hi = function (e, t, n) {
                if (fi.test(t)) e.style.setProperty(t, n); else if (mi.test(n)) e.style.setProperty(E(t), n.replace(mi, ""), "important"); else {
                    var o = bi(t);
                    if (Array.isArray(n)) for (var r = 0, i = n.length; r < i; r++) e.style[o] = n[r]; else e.style[o] = n
                }
            }, gi = ["Webkit", "Moz", "ms"], bi = k(function (e) {
                if (di = di || document.createElement("div").style, e = _(e), "filter" !== e && e in di) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < gi.length; n++) {
                    var o = gi[n] + t;
                    if (o in di) return o
                }
            });

            function vi(e, t) {
                var n = t.data, i = e.data;
                if (!(o(n.staticStyle) && o(n.style) && o(i.staticStyle) && o(i.style))) {
                    var a, s, l = t.elm, c = i.staticStyle, u = i.normalizedStyle || i.style || {}, p = c || u,
                        d = ui(t.data.style) || {};
                    t.data.normalizedStyle = r(d.__ob__) ? N({}, d) : d;
                    var f = pi(t, !0);
                    for (s in p) o(f[s]) && hi(l, s, "");
                    for (s in f) a = f[s], a !== p[s] && hi(l, s, null == a ? "" : a)
                }
            }

            var xi = {create: vi, update: vi}, yi = /\s+/;

            function ki(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
                    return e.classList.add(t)
                }) : e.classList.add(t); else {
                    var n = " " + (e.getAttribute("class") || "") + " ";
                    n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
                }
            }

            function wi(e, t) {
                if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
                    return e.classList.remove(t)
                }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
                    var n = " " + (e.getAttribute("class") || "") + " ", o = " " + t + " ";
                    while (n.indexOf(o) >= 0) n = n.replace(o, " ");
                    n = n.trim(), n ? e.setAttribute("class", n) : e.removeAttribute("class")
                }
            }

            function _i(e) {
                if (e) {
                    if ("object" === typeof e) {
                        var t = {};
                        return !1 !== e.css && N(t, Si(e.name || "v")), N(t, e), t
                    }
                    return "string" === typeof e ? Si(e) : void 0
                }
            }

            var Si = k(function (e) {
                    return {
                        enterClass: e + "-enter",
                        enterToClass: e + "-enter-to",
                        enterActiveClass: e + "-enter-active",
                        leaveClass: e + "-leave",
                        leaveToClass: e + "-leave-to",
                        leaveActiveClass: e + "-leave-active"
                    }
                }), Ti = X && !te, Ei = "transition", Ci = "animation", Ai = "transition", Oi = "transitionend",
                Pi = "animation", Ni = "animationend";
            Ti && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Ai = "WebkitTransition", Oi = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Pi = "WebkitAnimation", Ni = "webkitAnimationEnd"));
            var Li = X ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
                return e()
            };

            function Ii(e) {
                Li(function () {
                    Li(e)
                })
            }

            function Fi(e, t) {
                var n = e._transitionClasses || (e._transitionClasses = []);
                n.indexOf(t) < 0 && (n.push(t), ki(e, t))
            }

            function Mi(e, t) {
                e._transitionClasses && v(e._transitionClasses, t), wi(e, t)
            }

            function Di(e, t, n) {
                var o = ji(e, t), r = o.type, i = o.timeout, a = o.propCount;
                if (!r) return n();
                var s = r === Ei ? Oi : Ni, l = 0, c = function () {
                    e.removeEventListener(s, u), n()
                }, u = function (t) {
                    t.target === e && ++l >= a && c()
                };
                setTimeout(function () {
                    l < a && c()
                }, i + 1), e.addEventListener(s, u)
            }

            var Ri = /\b(transform|all)(,|$)/;

            function ji(e, t) {
                var n, o = window.getComputedStyle(e), r = (o[Ai + "Delay"] || "").split(", "),
                    i = (o[Ai + "Duration"] || "").split(", "), a = Bi(r, i), s = (o[Pi + "Delay"] || "").split(", "),
                    l = (o[Pi + "Duration"] || "").split(", "), c = Bi(s, l), u = 0, p = 0;
                t === Ei ? a > 0 && (n = Ei, u = a, p = i.length) : t === Ci ? c > 0 && (n = Ci, u = c, p = l.length) : (u = Math.max(a, c), n = u > 0 ? a > c ? Ei : Ci : null, p = n ? n === Ei ? i.length : l.length : 0);
                var d = n === Ei && Ri.test(o[Ai + "Property"]);
                return {type: n, timeout: u, propCount: p, hasTransform: d}
            }

            function Bi(e, t) {
                while (e.length < t.length) e = e.concat(e);
                return Math.max.apply(null, t.map(function (t, n) {
                    return $i(t) + $i(e[n])
                }))
            }

            function $i(e) {
                return 1e3 * Number(e.slice(0, -1).replace(",", "."))
            }

            function zi(e, t) {
                var n = e.elm;
                r(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
                var i = _i(e.data.transition);
                if (!o(i) && !r(n._enterCb) && 1 === n.nodeType) {
                    var a = i.css, s = i.type, c = i.enterClass, u = i.enterToClass, p = i.enterActiveClass,
                        d = i.appearClass, f = i.appearToClass, m = i.appearActiveClass, g = i.beforeEnter, b = i.enter,
                        v = i.afterEnter, x = i.enterCancelled, y = i.beforeAppear, k = i.appear, w = i.afterAppear,
                        _ = i.appearCancelled, S = i.duration, T = Pn, E = Pn.$vnode;
                    while (E && E.parent) E = E.parent, T = E.context;
                    var C = !T._isMounted || !e.isRootInsert;
                    if (!C || k || "" === k) {
                        var A = C && d ? d : c, O = C && m ? m : p, P = C && f ? f : u, N = C && y || g,
                            L = C && "function" === typeof k ? k : b, I = C && w || v, F = C && _ || x,
                            M = h(l(S) ? S.enter : S);
                        0;
                        var D = !1 !== a && !te, R = Yi(L), B = n._enterCb = j(function () {
                            D && (Mi(n, P), Mi(n, O)), B.cancelled ? (D && Mi(n, A), F && F(n)) : I && I(n), n._enterCb = null
                        });
                        e.data.show || kt(e, "insert", function () {
                            var t = n.parentNode, o = t && t._pending && t._pending[e.key];
                            o && o.tag === e.tag && o.elm._leaveCb && o.elm._leaveCb(), L && L(n, B)
                        }), N && N(n), D && (Fi(n, A), Fi(n, O), Ii(function () {
                            Mi(n, A), B.cancelled || (Fi(n, P), R || (Hi(M) ? setTimeout(B, M) : Di(n, s, B)))
                        })), e.data.show && (t && t(), L && L(n, B)), D || R || B()
                    }
                }
            }

            function Ui(e, t) {
                var n = e.elm;
                r(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
                var i = _i(e.data.transition);
                if (o(i) || 1 !== n.nodeType) return t();
                if (!r(n._leaveCb)) {
                    var a = i.css, s = i.type, c = i.leaveClass, u = i.leaveToClass, p = i.leaveActiveClass,
                        d = i.beforeLeave, f = i.leave, m = i.afterLeave, g = i.leaveCancelled, b = i.delayLeave,
                        v = i.duration, x = !1 !== a && !te, y = Yi(f), k = h(l(v) ? v.leave : v);
                    0;
                    var w = n._leaveCb = j(function () {
                        n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null), x && (Mi(n, u), Mi(n, p)), w.cancelled ? (x && Mi(n, c), g && g(n)) : (t(), m && m(n)), n._leaveCb = null
                    });
                    b ? b(_) : _()
                }

                function _() {
                    w.cancelled || (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e), d && d(n), x && (Fi(n, c), Fi(n, p), Ii(function () {
                        Mi(n, c), w.cancelled || (Fi(n, u), y || (Hi(k) ? setTimeout(w, k) : Di(n, s, w)))
                    })), f && f(n, w), x || y || w())
                }
            }

            function Hi(e) {
                return "number" === typeof e && !isNaN(e)
            }

            function Yi(e) {
                if (o(e)) return !1;
                var t = e.fns;
                return r(t) ? Yi(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
            }

            function Gi(e, t) {
                !0 !== t.data.show && zi(t)
            }

            var Vi = X ? {
                create: Gi, activate: Gi, remove: function (e, t) {
                    !0 !== e.data.show ? Ui(e, t) : t()
                }
            } : {}, Wi = [Hr, Vr, ni, si, xi, Vi], Ki = Wi.concat(Br), qi = Nr({nodeOps: _r, modules: Ki});
            te && document.addEventListener("selectionchange", function () {
                var e = document.activeElement;
                e && e.vmodel && oa(e, "input")
            });
            var Xi = {
                inserted: function (e, t, n, o) {
                    "select" === n.tag ? (o.elm && !o.elm._vOptions ? kt(n, "postpatch", function () {
                        Xi.componentUpdated(e, t, n)
                    }) : Qi(e, t, n.context), e._vOptions = [].map.call(e.options, ea)) : ("textarea" === n.tag || cr(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", ta), e.addEventListener("compositionend", na), e.addEventListener("change", na), te && (e.vmodel = !0)))
                }, componentUpdated: function (e, t, n) {
                    if ("select" === n.tag) {
                        Qi(e, t, n.context);
                        var o = e._vOptions, r = e._vOptions = [].map.call(e.options, ea);
                        if (r.some(function (e, t) {
                            return !D(e, o[t])
                        })) {
                            var i = e.multiple ? t.value.some(function (e) {
                                return Zi(e, r)
                            }) : t.value !== t.oldValue && Zi(t.value, r);
                            i && oa(e, "change")
                        }
                    }
                }
            };

            function Qi(e, t, n) {
                Ji(e, t, n), (ee || ne) && setTimeout(function () {
                    Ji(e, t, n)
                }, 0)
            }

            function Ji(e, t, n) {
                var o = t.value, r = e.multiple;
                if (!r || Array.isArray(o)) {
                    for (var i, a, s = 0, l = e.options.length; s < l; s++) if (a = e.options[s], r) i = R(o, ea(a)) > -1, a.selected !== i && (a.selected = i); else if (D(ea(a), o)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
                    r || (e.selectedIndex = -1)
                }
            }

            function Zi(e, t) {
                return t.every(function (t) {
                    return !D(t, e)
                })
            }

            function ea(e) {
                return "_value" in e ? e._value : e.value
            }

            function ta(e) {
                e.target.composing = !0
            }

            function na(e) {
                e.target.composing && (e.target.composing = !1, oa(e.target, "input"))
            }

            function oa(e, t) {
                var n = document.createEvent("HTMLEvents");
                n.initEvent(t, !0, !0), e.dispatchEvent(n)
            }

            function ra(e) {
                return !e.componentInstance || e.data && e.data.transition ? e : ra(e.componentInstance._vnode)
            }

            var ia = {
                bind: function (e, t, n) {
                    var o = t.value;
                    n = ra(n);
                    var r = n.data && n.data.transition,
                        i = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                    o && r ? (n.data.show = !0, zi(n, function () {
                        e.style.display = i
                    })) : e.style.display = o ? i : "none"
                }, update: function (e, t, n) {
                    var o = t.value, r = t.oldValue;
                    if (!o !== !r) {
                        n = ra(n);
                        var i = n.data && n.data.transition;
                        i ? (n.data.show = !0, o ? zi(n, function () {
                            e.style.display = e.__vOriginalDisplay
                        }) : Ui(n, function () {
                            e.style.display = "none"
                        })) : e.style.display = o ? e.__vOriginalDisplay : "none"
                    }
                }, unbind: function (e, t, n, o, r) {
                    r || (e.style.display = e.__vOriginalDisplay)
                }
            }, aa = {model: Xi, show: ia}, sa = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };

            function la(e) {
                var t = e && e.componentOptions;
                return t && t.Ctor.options.abstract ? la(_n(t.children)) : e
            }

            function ca(e) {
                var t = {}, n = e.$options;
                for (var o in n.propsData) t[o] = e[o];
                var r = n._parentListeners;
                for (var i in r) t[_(i)] = r[i];
                return t
            }

            function ua(e, t) {
                if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {props: t.componentOptions.propsData})
            }

            function pa(e) {
                while (e = e.parent) if (e.data.transition) return !0
            }

            function da(e, t) {
                return t.key === e.key && t.tag === e.tag
            }

            var fa = function (e) {
                return e.tag || wn(e)
            }, ma = function (e) {
                return "show" === e.name
            }, ha = {
                name: "transition", props: sa, abstract: !0, render: function (e) {
                    var t = this, n = this.$slots.default;
                    if (n && (n = n.filter(fa), n.length)) {
                        0;
                        var o = this.mode;
                        0;
                        var r = n[0];
                        if (pa(this.$vnode)) return r;
                        var i = la(r);
                        if (!i) return r;
                        if (this._leaving) return ua(e, r);
                        var a = "__transition-" + this._uid + "-";
                        i.key = null == i.key ? i.isComment ? a + "comment" : a + i.tag : s(i.key) ? 0 === String(i.key).indexOf(a) ? i.key : a + i.key : i.key;
                        var l = (i.data || (i.data = {})).transition = ca(this), c = this._vnode, u = la(c);
                        if (i.data.directives && i.data.directives.some(ma) && (i.data.show = !0), u && u.data && !da(i, u) && !wn(u) && (!u.componentInstance || !u.componentInstance._vnode.isComment)) {
                            var p = u.data.transition = N({}, l);
                            if ("out-in" === o) return this._leaving = !0, kt(p, "afterLeave", function () {
                                t._leaving = !1, t.$forceUpdate()
                            }), ua(e, r);
                            if ("in-out" === o) {
                                if (wn(i)) return c;
                                var d, f = function () {
                                    d()
                                };
                                kt(l, "afterEnter", f), kt(l, "enterCancelled", f), kt(p, "delayLeave", function (e) {
                                    d = e
                                })
                            }
                        }
                        return r
                    }
                }
            }, ga = N({tag: String, moveClass: String}, sa);
            delete ga.mode;
            var ba = {
                props: ga, beforeMount: function () {
                    var e = this, t = this._update;
                    this._update = function (n, o) {
                        var r = Nn(e);
                        e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, r(), t.call(e, n, o)
                    }
                }, render: function (e) {
                    for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), o = this.prevChildren = this.children, r = this.$slots.default || [], i = this.children = [], a = ca(this), s = 0; s < r.length; s++) {
                        var l = r[s];
                        if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) i.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = a; else ;
                    }
                    if (o) {
                        for (var c = [], u = [], p = 0; p < o.length; p++) {
                            var d = o[p];
                            d.data.transition = a, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? c.push(d) : u.push(d)
                        }
                        this.kept = e(t, null, c), this.removed = u
                    }
                    return e(t, null, i)
                }, updated: function () {
                    var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                    e.length && this.hasMove(e[0].elm, t) && (e.forEach(va), e.forEach(xa), e.forEach(ya), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
                        if (e.data.moved) {
                            var n = e.elm, o = n.style;
                            Fi(n, t), o.transform = o.WebkitTransform = o.transitionDuration = "", n.addEventListener(Oi, n._moveCb = function e(o) {
                                o && o.target !== n || o && !/transform$/.test(o.propertyName) || (n.removeEventListener(Oi, e), n._moveCb = null, Mi(n, t))
                            })
                        }
                    }))
                }, methods: {
                    hasMove: function (e, t) {
                        if (!Ti) return !1;
                        if (this._hasMove) return this._hasMove;
                        var n = e.cloneNode();
                        e._transitionClasses && e._transitionClasses.forEach(function (e) {
                            wi(n, e)
                        }), ki(n, t), n.style.display = "none", this.$el.appendChild(n);
                        var o = ji(n);
                        return this.$el.removeChild(n), this._hasMove = o.hasTransform
                    }
                }
            };

            function va(e) {
                e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb()
            }

            function xa(e) {
                e.data.newPos = e.elm.getBoundingClientRect()
            }

            function ya(e) {
                var t = e.data.pos, n = e.data.newPos, o = t.left - n.left, r = t.top - n.top;
                if (o || r) {
                    e.data.moved = !0;
                    var i = e.elm.style;
                    i.transform = i.WebkitTransform = "translate(" + o + "px," + r + "px)", i.transitionDuration = "0s"
                }
            }

            var ka = {Transition: ha, TransitionGroup: ba};
            _o.config.mustUseProp = $o, _o.config.isReservedTag = ir, _o.config.isReservedAttr = jo, _o.config.getTagNamespace = ar, _o.config.isUnknownElement = lr, N(_o.options.directives, aa), N(_o.options.components, ka), _o.prototype.__patch__ = X ? qi : I, _o.prototype.$mount = function (e, t) {
                return e = e && X ? ur(e) : void 0, Fn(this, e, t)
            }, X && setTimeout(function () {
                U.devtools && ce && ce.emit("init", _o)
            }, 0), t["default"] = _o
        }.call(this, n("c8ba"))
    }, "2b44": function (e, t, n) {
        var o = n("a35a");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("0f39cc11", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "2b4c": function (e, t, n) {
        var o = n("5537")("wks"), r = n("ca5a"), i = n("7726").Symbol, a = "function" == typeof i,
            s = e.exports = function (e) {
                return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e))
            };
        s.store = o
    }, "2d00": function (e, t) {
        e.exports = !1
    }, "2d95": function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, "2ea1": function (e, t, n) {
        var o = n("6f8a");
        e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, "2f65": function (e, t, n) {
        "use strict";
        var o = n("f580"), r = n.n(o);
        r.a
    }, "2fdb": function (e, t, n) {
        "use strict";
        var o = n("5ca1"), r = n("d2c8"), i = "includes";
        o(o.P + o.F * n("5147")(i), "String", {
            includes: function (e) {
                return !!~r(this, e, i).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, "302f": function (e, t, n) {
        var o = n("0f89"), r = n("f2fe"), i = n("1b55")("species");
        e.exports = function (e, t) {
            var n, a = o(e).constructor;
            return void 0 === a || void 0 == (n = o(a)[i]) ? t : r(n)
        }
    }, "30d4": function (e, t, n) {
        "use strict";
        var o = n("3e79"), r = n("d9bd"),
            i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e) {
            var t = "undefined" === typeof e ? "undefined" : i(e);
            return "boolean" === t || "string" === t || e.nodeType === Node.ELEMENT_NODE
        }

        t["a"] = {
            name: "detachable",
            mixins: [o["a"]],
            props: {attach: {type: null, default: !1, validator: s}, contentClass: {default: ""}},
            data: function () {
                return {hasDetached: !1}
            },
            watch: {
                attach: function () {
                    this.hasDetached = !1, this.initDetach()
                }, hasContent: "initDetach"
            },
            beforeMount: function () {
                var e = this;
                this.$nextTick(function () {
                    if (e.activatorNode) {
                        var t = Array.isArray(e.activatorNode) ? e.activatorNode : [e.activatorNode];
                        t.forEach(function (t) {
                            t.elm && e.$el.parentNode.insertBefore(t.elm, e.$el)
                        })
                    }
                })
            },
            mounted: function () {
                !this.lazy && this.initDetach()
            },
            deactivated: function () {
                this.isActive = !1
            },
            beforeDestroy: function () {
                try {
                    if (this.$refs.content && this.$refs.content.parentNode.removeChild(this.$refs.content), this.activatorNode) {
                        var e = Array.isArray(this.activatorNode) ? this.activatorNode : [this.activatorNode];
                        e.forEach(function (e) {
                            e.elm && e.elm.parentNode.removeChild(e.elm)
                        })
                    }
                } catch (t) {
                    console.log(t)
                }
            },
            methods: {
                getScopeIdAttrs: function () {
                    var e = this.$vnode && this.$vnode.context.$options._scopeId;
                    return e && a({}, e, "")
                }, initDetach: function () {
                    if (!this._isDestroyed && this.$refs.content && !this.hasDetached && "" !== this.attach && !0 !== this.attach && "attach" !== this.attach) {
                        var e = void 0;
                        e = !1 === this.attach ? document.querySelector("[data-app]") : "string" === typeof this.attach ? document.querySelector(this.attach) : this.attach, e ? (e.insertBefore(this.$refs.content, e.firstChild), this.hasDetached = !0) : Object(r["c"])("Unable to locate target " + (this.attach || "[data-app]"), this)
                    }
                }
            }
        }
    }, "31c2": function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, "31f4": function (e, t) {
        e.exports = function (e, t, n) {
            var o = void 0 === n;
            switch (t.length) {
                case 0:
                    return o ? e() : e.call(n);
                case 1:
                    return o ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, "32e9": function (e, t, n) {
        var o = n("86cc"), r = n("4630");
        e.exports = n("9e1e") ? function (e, t, n) {
            return o.f(e, t, r(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, 3383: function (e, t, n) {
        e.exports = n.p + "img/popup-view.bfdaabcd.png"
    }, 3385: function (e, t, n) {
        var o = n("82a7");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("334474fe", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "33a4": function (e, t, n) {
        var o = n("84f2"), r = n("2b4c")("iterator"), i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (o.Array === e || i[r] === e)
        }
    }, "36bd": function (e, t, n) {
        "use strict";
        var o = n("4bf8"), r = n("77f1"), i = n("9def");
        e.exports = function (e) {
            var t = o(this), n = i(t.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n),
                l = a > 2 ? arguments[2] : void 0, c = void 0 === l ? n : r(l, n);
            while (c > s) t[s++] = e;
            return t
        }
    }, "36dc": function (e, t, n) {
        var o = n("da3c"), r = n("df0a").set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process,
            s = o.Promise, l = "process" == n("6e1f")(a);
        e.exports = function () {
            var e, t, n, c = function () {
                var o, r;
                l && (o = a.domain) && o.exit();
                while (e) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (i) {
                        throw e ? n() : t = void 0, i
                    }
                }
                t = void 0, o && o.enter()
            };
            if (l) n = function () {
                a.nextTick(c)
            }; else if (!i || o.navigator && o.navigator.standalone) if (s && s.resolve) {
                var u = s.resolve(void 0);
                n = function () {
                    u.then(c)
                }
            } else n = function () {
                r.call(o, c)
            }; else {
                var p = !0, d = document.createTextNode("");
                new i(c).observe(d, {characterData: !0}), n = function () {
                    d.data = p = !p
                }
            }
            return function (o) {
                var r = {fn: o, next: void 0};
                t && (t.next = r), e || (e = r, n()), t = r
            }
        }
    }, "37c0": function (e, t, n) {
        e.exports = n.p + "img/navigation-bar.f4542cf4.png"
    }, 3846: function (e, t, n) {
        n("9e1e") && "g" != /./g.flags && n("86cc").f(RegExp.prototype, "flags", {configurable: !0, get: n("0bfb")})
    }, "384f": function (e, t, n) {
        e.exports = n.p + "img/detail-menu.43bab093.png"
    }, "386d": function (e, t, n) {
        "use strict";
        var o = n("cb7c"), r = n("83a1"), i = n("5f1b");
        n("214f")("search", 1, function (e, t, n, a) {
            return [function (n) {
                var o = e(this), r = void 0 == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[t](String(o))
            }, function (e) {
                var t = a(n, e, this);
                if (t.done) return t.value;
                var s = o(e), l = String(this), c = s.lastIndex;
                r(c, 0) || (s.lastIndex = 0);
                var u = i(s, l);
                return r(s.lastIndex, c) || (s.lastIndex = c), null === u ? -1 : u.index
            }]
        })
    }, 3880: function (e, t, n) {
        var o = n("4b85");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("08426ce1", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "38fd": function (e, t, n) {
        var o = n("69a8"), r = n("4bf8"), i = n("613b")("IE_PROTO"), a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }, 3904: function (e, t, n) {
        var o = n("8ce0");
        e.exports = function (e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : o(e, r, t[r]);
            return e
        }
    }, "39e3": function (e, t, n) {
        e.exports = n.p + "img/goods-menu.ab7af4cc.png"
    }, "3acf": function (e) {
        e.exports = {
            warningForSendMessageInBulk: "Xin đừng thường hàng loạt bài viết, khiếu nại của người sử dụng hoặc hệ thống một cách dễ dàng xác định là thư rác (phần mềm không chịu bất kỳ trách nhiệm)!",
            inputMessageLabel: "Nhập tin nhắn của bạn",
            sendOver: "{name} gửi thành công, thời gian còn lại nhắn {count}",
            sendFail: "{name} thất bại trong việc gửi",
            pleaseGoToWebchat: "Đến trò chuyện tôm hoạt động tự động nhảy lại 3s",
            pleaseLoginShopeeMainPage: "Tới đồng bộ hóa trang bang xiapibuy đăng nhập, tự động nhảy lại 3s",
            pleaseFillInTheMessage: "Vui lòng điền vào nội dung tin nhắn",
            pleaseSelectUsers: "Chọn người dùng",
            cancelled: "Đã bị hủy",
            sendDone: "Đã hoàn thành",
            runOutOfRemainQuantity: "Số còn lại đã kiệt sức",
            userDisabled: "Shopee đã tắt {name}"
        }
    }, "3adc": function (e, t, n) {
        var o = n("0f89"), r = n("a47f"), i = n("2ea1"), a = Object.defineProperty;
        t.f = n("7d95") ? Object.defineProperty : function (e, t, n) {
            if (o(e), t = i(t, !0), o(n), r) try {
                return a(e, t, n)
            } catch (s) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, "3b8d": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return a
        });
        var o = n("795b"), r = n.n(o);

        function i(e, t, n, o, i, a, s) {
            try {
                var l = e[a](s), c = l.value
            } catch (u) {
                return void n(u)
            }
            l.done ? t(c) : r.a.resolve(c).then(o, i)
        }

        function a(e) {
            return function () {
                var t = this, n = arguments;
                return new r.a(function (o, r) {
                    var a = e.apply(t, n);

                    function s(e) {
                        i(a, o, r, s, l, "next", e)
                    }

                    function l(e) {
                        i(a, o, r, s, l, "throw", e)
                    }

                    s(void 0)
                })
            }
        }
    }, "3ba6": function (e, t, n) {
        e.exports = n.p + "img/brower-icon.2c5792b2.png"
    }, "3ccf": function (e, t, n) {
        "use strict";
        var o = n("d9bd");

        function r(e, t) {
            e.style["transform"] = t, e.style["webkitTransform"] = t
        }

        function i(e, t) {
            e.style["opacity"] = t.toString()
        }

        function a(e) {
            return "TouchEvent" === e.constructor.name
        }

        var s = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = t.getBoundingClientRect(),
                r = a(e) ? e.touches[e.touches.length - 1] : e, i = r.clientX - o.left, s = r.clientY - o.top, l = 0,
                c = .3;
            t._ripple && t._ripple.circle ? (c = .15, l = t.clientWidth / 2, l = n.center ? l : l + Math.sqrt(Math.pow(i - l, 2) + Math.pow(s - l, 2)) / 4) : l = Math.sqrt(Math.pow(t.clientWidth, 2) + Math.pow(t.clientHeight, 2)) / 2;
            var u = (t.clientWidth - 2 * l) / 2 + "px", p = (t.clientHeight - 2 * l) / 2 + "px",
                d = n.center ? u : i - l + "px", f = n.center ? p : s - l + "px";
            return {radius: l, scale: c, x: d, y: f, centerX: u, centerY: p}
        }, l = {
            show: function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (t._ripple && t._ripple.enabled) {
                    var o = document.createElement("span"), a = document.createElement("span");
                    o.appendChild(a), o.className = "v-ripple__container", n.class && (o.className += " " + n.class);
                    var l = s(e, t, n), c = l.radius, u = l.scale, p = l.x, d = l.y, f = l.centerX, m = l.centerY,
                        h = 2 * c + "px";
                    a.className = "v-ripple__animation", a.style.width = h, a.style.height = h, t.appendChild(o);
                    var g = window.getComputedStyle(t);
                    g && "static" === g.position && (t.style.position = "relative", t.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), r(a, "translate(" + p + ", " + d + ") scale3d(" + u + "," + u + "," + u + ")"), i(a, 0), a.dataset.activated = String(performance.now()), setTimeout(function () {
                        a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), r(a, "translate(" + f + ", " + m + ") scale3d(1,1,1)"), i(a, .25)
                    }, 0)
                }
            }, hide: function (e) {
                if (e && e._ripple && e._ripple.enabled) {
                    var t = e.getElementsByClassName("v-ripple__animation");
                    if (0 !== t.length) {
                        var n = t[t.length - 1];
                        if (!n.dataset.isHiding) {
                            n.dataset.isHiding = "true";
                            var o = performance.now() - Number(n.dataset.activated), r = Math.max(250 - o, 0);
                            setTimeout(function () {
                                n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), i(n, 0), setTimeout(function () {
                                    var t = e.getElementsByClassName("v-ripple__animation");
                                    1 === t.length && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), n.parentNode && e.removeChild(n.parentNode)
                                }, 300)
                            }, r)
                        }
                    }
                }
            }
        };

        function c(e) {
            return "undefined" === typeof e || !!e
        }

        function u(e) {
            var t = {}, n = e.currentTarget;
            n && n._ripple && !n._ripple.touched && (a(e) && (n._ripple.touched = !0), t.center = n._ripple.centered, n._ripple.class && (t.class = n._ripple.class), l.show(e, n, t))
        }

        function p(e) {
            var t = e.currentTarget;
            t && (window.setTimeout(function () {
                t._ripple && (t._ripple.touched = !1)
            }), l.hide(t))
        }

        function d(e, t, n) {
            var o = c(t.value);
            o || l.hide(e), e._ripple = e._ripple || {}, e._ripple.enabled = o;
            var r = t.value || {};
            r.center && (e._ripple.centered = !0), r.class && (e._ripple.class = t.value.class), r.circle && (e._ripple.circle = r.circle), o && !n ? (e.addEventListener("touchstart", u, {passive: !0}), e.addEventListener("touchend", p, {passive: !0}), e.addEventListener("touchcancel", p), e.addEventListener("mousedown", u), e.addEventListener("mouseup", p), e.addEventListener("mouseleave", p), e.addEventListener("dragstart", p, {passive: !0})) : !o && n && f(e)
        }

        function f(e) {
            e.removeEventListener("mousedown", u), e.removeEventListener("touchstart", p), e.removeEventListener("touchend", p), e.removeEventListener("touchcancel", p), e.removeEventListener("mouseup", p), e.removeEventListener("mouseleave", p), e.removeEventListener("dragstart", p)
        }

        function m(e, t, n) {
            d(e, t, !1), n.context && n.context.$nextTick(function () {
                var t = window.getComputedStyle(e);
                if (t && "inline" === t.display) {
                    var r = n.fnOptions ? [n.fnOptions, n.context] : [n.componentInstance];
                    o["c"].apply(void 0, ["v-ripple can only be used on block-level elements"].concat(r))
                }
            })
        }

        function h(e) {
            delete e._ripple, f(e)
        }

        function g(e, t) {
            if (t.value !== t.oldValue) {
                var n = c(t.oldValue);
                d(e, t, n)
            }
        }

        t["a"] = {bind: m, unbind: h, update: g}
    }, "3e79": function (e, t, n) {
        "use strict";
        var o = n("2b0e");
        t["a"] = o["default"].extend().extend({
            name: "bootable", props: {lazy: Boolean}, data: function () {
                return {isBooted: !1}
            }, computed: {
                hasContent: function () {
                    return this.isBooted || !this.lazy || this.isActive
                }
            }, watch: {
                isActive: function () {
                    this.isBooted = !0
                }
            }, methods: {
                showLazyContent: function (e) {
                    return this.hasContent ? e : void 0
                }
            }
        })
    }, "41a0": function (e, t, n) {
        "use strict";
        var o = n("2aeb"), r = n("4630"), i = n("7f20"), a = {};
        n("32e9")(a, n("2b4c")("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = o(a, {next: r(1, n)}), i(e, t + " Iterator")
        }
    }, 4226: function (e) {
        e.exports = {
            setting: "Setting",
            closeFeatureLabel: "Whether to turn off the 'Download Pictures/Videos' feature",
            imageDownloadTip: "Image Download: Support Shopee, 1688, Taobao, Tmall, Pinduoduo, AliExpress, Lazada, etc.",
            videoDownloadTip: "Video Download: Support 1688, Tmall, AliExpress, Pinduoduo, etc."
        }
    }, "436c": function (e, t, n) {
        var o = n("1b55")("iterator"), r = !1;
        try {
            var i = [7][o]();
            i["return"] = function () {
                r = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (a) {
        }
        e.exports = function (e, t) {
            if (!t && !r) return !1;
            var n = !1;
            try {
                var i = [7], s = i[o]();
                s.next = function () {
                    return {done: n = !0}
                }, i[o] = function () {
                    return s
                }, e(i)
            } catch (a) {
            }
            return n
        }
    }, "43c8": function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, "448b": function (e) {
        e.exports = {
            warningForSendMessageInBulk: "请勿频繁群发消息，容易被用户投诉或被系统识别为垃圾消息（软件不承担任何责任）！",
            inputMessageLabel: "输入消息内容",
            sendOver: "{name} 发送成功，消息剩余 {count} 次",
            sendFail: "{name} 发送失败",
            pleaseGoToWebchat: "请前往虾皮聊聊进行操作，3s后自动跳转",
            pleaseLoginShopeeMainPage: "请前往xiapibuy页面同步登录态，3s后自动跳转",
            pleaseFillInTheMessage: "请填写消息内容",
            pleaseSelectUsers: "请选择用户",
            cancelled: "已取消",
            sendDone: "已完成",
            runOutOfRemainQuantity: "剩余次数已用完",
            userDisabled: "{name} 被Shopee禁用"
        }
    }, "44dc": function (e, t, n) {
        var o = n("b398");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("76ef7f21", o, !0, {sourceMap: !1, shadowMode: !1})
    }, 4588: function (e, t) {
        var n = Math.ceil, o = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
        }
    }, 4630: function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, "48a0": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '.theme--light.v-list{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-list .v-list--disabled{color:rgba(0,0,0,.38)}.theme--light.v-list .v-list__tile__sub-title{color:rgba(0,0,0,.54)}.theme--light.v-list .v-list__tile__mask{color:rgba(0,0,0,.38);background:#eee}.theme--light.v-list .v-list__group__header:hover,.theme--light.v-list .v-list__tile--highlighted,.theme--light.v-list .v-list__tile--link:hover{background:rgba(0,0,0,.04)}.theme--light.v-list .v-list__group--active:after,.theme--light.v-list .v-list__group--active:before{background:rgba(0,0,0,.12)}.theme--light.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--light.v-list .v-list__group--disabled .v-list__tile{color:rgba(0,0,0,.38)!important}.theme--dark.v-list{background:#424242;color:#fff}.theme--dark.v-list .v-list--disabled{color:hsla(0,0%,100%,.5)}.theme--dark.v-list .v-list__tile__sub-title{color:hsla(0,0%,100%,.7)}.theme--dark.v-list .v-list__tile__mask{color:hsla(0,0%,100%,.5);background:#494949}.theme--dark.v-list .v-list__group__header:hover,.theme--dark.v-list .v-list__tile--highlighted,.theme--dark.v-list .v-list__tile--link:hover{background:hsla(0,0%,100%,.08)}.theme--dark.v-list .v-list__group--active:after,.theme--dark.v-list .v-list__group--active:before{background:hsla(0,0%,100%,.12)}.theme--dark.v-list .v-list__group--disabled .v-list__group__header__prepend-icon .v-icon,.theme--dark.v-list .v-list__group--disabled .v-list__tile{color:hsla(0,0%,100%,.5)!important}.application--is-rtl .v-list__tile__content,.application--is-rtl .v-list__tile__title{text-align:right}.v-list{list-style-type:none;padding:8px 0 8px;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-list>div{-webkit-transition:inherit;transition:inherit}.v-list__tile{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:16px;font-weight:400;height:48px;margin:0;padding:0 16px;position:relative;text-decoration:none;-webkit-transition:background .3s cubic-bezier(.25,.8,.5,1);transition:background .3s cubic-bezier(.25,.8,.5,1)}.v-list__tile--link{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__tile__action,.v-list__tile__content{height:100%}.v-list__tile__sub-title,.v-list__tile__title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__tile__title{height:24px;line-height:24px;position:relative;text-align:left}.v-list__tile__sub-title{font-size:14px}.v-list__tile__action,.v-list__tile__avatar{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:56px}.v-list__tile__action{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.v-list__tile__action .v-btn{padding:0;margin:0}.v-list__tile__action .v-btn--icon{margin:-6px}.v-list__tile__action .v-radio.v-radio{margin:0}.v-list__tile__action .v-input--selection-controls{padding:0;margin:0}.v-list__tile__action .v-input--selection-controls .v-messages{display:none}.v-list__tile__action .v-input--selection-controls .v-input__slot{margin:0}.v-list__tile__action-text{color:#9e9e9e;font-size:12px}.v-list__tile__action--stack{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding-top:8px;padding-bottom:8px;white-space:nowrap;-ms-flex-direction:column;flex-direction:column}.v-list__tile__action--stack,.v-list__tile__content{-webkit-box-orient:vertical;-webkit-box-direction:normal}.v-list__tile__content{text-align:left;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.v-list__tile__content~.v-list__tile__action:not(.v-list__tile__action--stack),.v-list__tile__content~.v-list__tile__avatar{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.v-list__tile--active .v-list__tile__action:first-of-type .v-icon{color:inherit}.v-list__tile--avatar{height:56px}.v-list--dense{padding-top:4px;padding-bottom:4px}.v-list--dense .v-subheader{font-size:13px;height:40px}.v-list--dense .v-list__group .v-subheader{height:40px}.v-list--dense .v-list__tile{font-size:13px}.v-list--dense .v-list__tile--avatar{height:48px}.v-list--dense .v-list__tile:not(.v-list__tile--avatar){height:40px}.v-list--dense .v-list__tile .v-icon{font-size:22px}.v-list--dense .v-list__tile__sub-title{font-size:13px}.v-list--disabled{pointer-events:none}.v-list--two-line .v-list__tile{height:72px}.v-list--two-line.v-list--dense .v-list__tile{height:60px}.v-list--three-line .v-list__tile{height:88px}.v-list--three-line .v-list__tile__avatar{margin-top:-18px}.v-list--three-line .v-list__tile__sub-title{white-space:normal;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box}.v-list--three-line.v-list--dense .v-list__tile{height:76px}.v-list>.v-list__group:before{top:0}.v-list>.v-list__group:before .v-list__tile__avatar{margin-top:-14px}.v-list__group{padding:0;position:relative;-webkit-transition:inherit;transition:inherit}.v-list__group:after,.v-list__group:before{content:"";height:1px;left:0;position:absolute;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-list__group--active~.v-list__group:before{display:none}.v-list__group__header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;list-style-type:none}.v-list__group__header>div:not(.v-list__group__header__prepend-icon):not(.v-list__group__header__append-icon){-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}.v-list__group__header .v-list__group__header__append-icon,.v-list__group__header .v-list__group__header__prepend-icon{padding:0 16px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-list__group__header--sub-group{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.v-list__group__header--sub-group div .v-list__tile{padding-left:0}.v-list__group__header--sub-group .v-list__group__header__prepend-icon{padding:0 0 0 40px;margin-right:8px}.v-list__group__header .v-list__group__header__prepend-icon{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;min-width:56px}.v-list__group__header--active .v-list__group__header__append-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__header--active .v-list__group__header__prepend-icon .v-icon{color:inherit}.v-list__group__header--active.v-list__group__header--sub-group .v-list__group__header__prepend-icon .v-icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}.v-list__group__items{position:relative;padding:0;-webkit-transition:inherit;transition:inherit}.v-list__group__items>div{display:block}.v-list__group__items--no-action .v-list__tile{padding-left:72px}.v-list__group--disabled{pointer-events:none}.v-list--subheader{padding-top:0}', ""])
    }, 4917: function (e, t, n) {
        "use strict";
        var o = n("cb7c"), r = n("9def"), i = n("0390"), a = n("5f1b");
        n("214f")("match", 1, function (e, t, n, s) {
            return [function (n) {
                var o = e(this), r = void 0 == n ? void 0 : n[t];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[t](String(o))
            }, function (e) {
                var t = s(n, e, this);
                if (t.done) return t.value;
                var l = o(e), c = String(this);
                if (!l.global) return a(l, c);
                var u = l.unicode;
                l.lastIndex = 0;
                var p, d = [], f = 0;
                while (null !== (p = a(l, c))) {
                    var m = String(p[0]);
                    d[f] = m, "" === m && (l.lastIndex = i(c, r(l.lastIndex), u)), f++
                }
                return 0 === f ? null : d
            }]
        })
    }, 4926: function (e, t, n) {
        e.exports = n.p + "img/popup-icon.8dc811ae.jpg"
    }, 4938: function (e, t, n) {
        var o = n("6a9b"), r = n("626e").f;
        n("c165")("getOwnPropertyDescriptor", function () {
            return function (e, t) {
                return r(o(e), t)
            }
        })
    }, "499e": function (e, t, n) {
        "use strict";

        function o(e, t) {
            for (var n = [], o = {}, r = 0; r < t.length; r++) {
                var i = t[r], a = i[0], s = i[1], l = i[2], c = i[3],
                    u = {id: e + ":" + r, css: s, media: l, sourceMap: c};
                o[a] ? o[a].parts.push(u) : n.push(o[a] = {id: a, parts: [u]})
            }
            return n
        }

        n.r(t), n.d(t, "default", function () {
            return m
        });
        var r = "undefined" !== typeof document;
        if ("undefined" !== typeof DEBUG && DEBUG && !r) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var i = {}, a = r && (document.head || document.getElementsByTagName("head")[0]), s = null, l = 0, c = !1,
            u = function () {
            }, p = null, d = "data-vue-ssr-id",
            f = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

        function m(e, t, n, r) {
            c = n, p = r || {};
            var a = o(e, t);
            return h(a), function (t) {
                for (var n = [], r = 0; r < a.length; r++) {
                    var s = a[r], l = i[s.id];
                    l.refs--, n.push(l)
                }
                t ? (a = o(e, t), h(a)) : a = [];
                for (r = 0; r < n.length; r++) {
                    l = n[r];
                    if (0 === l.refs) {
                        for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                        delete i[l.id]
                    }
                }
            }
        }

        function h(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t], o = i[n.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
                    for (; r < n.parts.length; r++) o.parts.push(b(n.parts[r]));
                    o.parts.length > n.parts.length && (o.parts.length = n.parts.length)
                } else {
                    var a = [];
                    for (r = 0; r < n.parts.length; r++) a.push(b(n.parts[r]));
                    i[n.id] = {id: n.id, refs: 1, parts: a}
                }
            }
        }

        function g() {
            var e = document.createElement("style");
            return e.type = "text/css", a.appendChild(e), e
        }

        function b(e) {
            var t, n, o = document.querySelector("style[" + d + '~="' + e.id + '"]');
            if (o) {
                if (c) return u;
                o.parentNode.removeChild(o)
            }
            if (f) {
                var r = l++;
                o = s || (s = g()), t = x.bind(null, o, r, !1), n = x.bind(null, o, r, !0)
            } else o = g(), t = y.bind(null, o), n = function () {
                o.parentNode.removeChild(o)
            };
            return t(e), function (o) {
                if (o) {
                    if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
                    t(e = o)
                } else n()
            }
        }

        var v = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }();

        function x(e, t, n, o) {
            var r = n ? "" : o.css;
            if (e.styleSheet) e.styleSheet.cssText = v(t, r); else {
                var i = document.createTextNode(r), a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i)
            }
        }

        function y(e, t) {
            var n = t.css, o = t.media, r = t.sourceMap;
            if (o && e.setAttribute("media", o), p.ssrId && e.setAttribute(d, t.id), r && (n += "\n/*# sourceURL=" + r.sources[0] + " */", n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"), e.styleSheet) e.styleSheet.cssText = n; else {
                while (e.firstChild) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
    }, "49c0": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{-webkit-filter:blur(2px);filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}", ""])
    }, "4a59": function (e, t, n) {
        var o = n("9b43"), r = n("1fa8"), i = n("33a4"), a = n("cb7c"), s = n("9def"), l = n("27ee"), c = {}, u = {};
        t = e.exports = function (e, t, n, p, d) {
            var f, m, h, g, b = d ? function () {
                return e
            } : l(e), v = o(n, p, t ? 2 : 1), x = 0;
            if ("function" != typeof b) throw TypeError(e + " is not iterable!");
            if (i(b)) {
                for (f = s(e.length); f > x; x++) if (g = t ? v(a(m = e[x])[0], m[1]) : v(e[x]), g === c || g === u) return g
            } else for (h = b.call(e); !(m = h.next()).done;) if (g = r(h, v, m.value, t), g === c || g === u) return g
        };
        t.BREAK = c, t.RETURN = u
    }, "4b85": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".v-menu{display:block;vertical-align:middle}.v-menu--inline{display:inline-block}.v-menu__activator{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex}.v-menu__activator *{cursor:pointer}.v-menu__content{position:absolute;display:inline-block;border-radius:2px;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-menu__content--active{pointer-events:none}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list__tile{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list__tile{pointer-events:auto;-webkit-transition-delay:.1s;transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{-webkit-transition:all .3s cubic-bezier(.25,.8,.25,1);transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{-webkit-transition:none!important;transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list__tile{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list__tile--active{opacity:1;-webkit-transform:none!important;transform:none!important;pointer-events:auto}", ""])
    }, "4bf8": function (e, t, n) {
        var o = n("be13");
        e.exports = function (e) {
            return Object(o(e))
        }
    }, "4c34": function (e, t, n) {
        var o = n("98f2");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("2c4357a9", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "4c94": function (e, t, n) {
        var o = n("1b68");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("6c5c4081", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "4d42": function (e, t, n) {
        e.exports = n.p + "img/navigation-bar.a2c0df70.png"
    }, "4fa4": function (e, t, n) {
        var o = n("6f26");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("ce4281be", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "4ffc": function (e, t, n) {
        e.exports = n.p + "img/brower-toolbar.67973c37.png"
    }, 5147: function (e, t, n) {
        var o = n("2b4c")("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (n) {
                try {
                    return t[o] = !1, !"/./"[e](t)
                } catch (r) {
                }
            }
            return !0
        }
    }, "520a": function (e, t, n) {
        "use strict";
        var o = n("0bfb"), r = RegExp.prototype.exec, i = String.prototype.replace, a = r, s = "lastIndex",
            l = function () {
                var e = /a/, t = /b*/g;
                return r.call(e, "a"), r.call(t, "a"), 0 !== e[s] || 0 !== t[s]
            }(), c = void 0 !== /()??/.exec("")[1], u = l || c;
        u && (a = function (e) {
            var t, n, a, u, p = this;
            return c && (n = new RegExp("^" + p.source + "$(?!\\s)", o.call(p))), l && (t = p[s]), a = r.call(p, e), l && a && (p[s] = p.global ? a.index + a[0].length : t), c && a && a.length > 1 && i.call(a[0], n, function () {
                for (u = 1; u < arguments.length - 2; u++) void 0 === arguments[u] && (a[u] = void 0)
            }), a
        }), e.exports = a
    }, "52a7": function (e, t) {
        t.f = {}.propertyIsEnumerable
    }, "54aa": function (e, t, n) {
        n("16e7"), e.exports = n("a7d3").parseInt
    }, "551c": function (e, t, n) {
        "use strict";
        var o, r, i, a, s = n("2d00"), l = n("7726"), c = n("9b43"), u = n("23c6"), p = n("5ca1"), d = n("d3f4"),
            f = n("d8e8"), m = n("f605"), h = n("4a59"), g = n("ebd6"), b = n("1991").set, v = n("8079")(),
            x = n("a5b8"), y = n("9c80"), k = n("a25f"), w = n("bcaa"), _ = "Promise", S = l.TypeError, T = l.process,
            E = T && T.versions, C = E && E.v8 || "", A = l[_], O = "process" == u(T), P = function () {
            }, N = r = x.f, L = !!function () {
                try {
                    var e = A.resolve(1), t = (e.constructor = {})[n("2b4c")("species")] = function (e) {
                        e(P, P)
                    };
                    return (O || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== C.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
                } catch (o) {
                }
            }(), I = function (e) {
                var t;
                return !(!d(e) || "function" != typeof (t = e.then)) && t
            }, F = function (e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    v(function () {
                        var o = e._v, r = 1 == e._s, i = 0, a = function (t) {
                            var n, i, a, s = r ? t.ok : t.fail, l = t.resolve, c = t.reject, u = t.domain;
                            try {
                                s ? (r || (2 == e._h && R(e), e._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === t.promise ? c(S("Promise-chain cycle")) : (i = I(n)) ? i.call(n, l, c) : l(n)) : c(o)
                            } catch (p) {
                                u && !a && u.exit(), c(p)
                            }
                        };
                        while (n.length > i) a(n[i++]);
                        e._c = [], e._n = !1, t && !e._h && M(e)
                    })
                }
            }, M = function (e) {
                b.call(l, function () {
                    var t, n, o, r = e._v, i = D(e);
                    if (i && (t = y(function () {
                        O ? T.emit("unhandledRejection", r, e) : (n = l.onunhandledrejection) ? n({
                            promise: e,
                            reason: r
                        }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", r)
                    }), e._h = O || D(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
                })
            }, D = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            }, R = function (e) {
                b.call(l, function () {
                    var t;
                    O ? T.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({promise: e, reason: e._v})
                })
            }, j = function (e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), F(t, !0))
            }, B = function (e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw S("Promise can't be resolved itself");
                        (t = I(e)) ? v(function () {
                            var o = {_w: n, _d: !1};
                            try {
                                t.call(e, c(B, o, 1), c(j, o, 1))
                            } catch (r) {
                                j.call(o, r)
                            }
                        }) : (n._v = e, n._s = 1, F(n, !1))
                    } catch (o) {
                        j.call({_w: n, _d: !1}, o)
                    }
                }
            };
        L || (A = function (e) {
            m(this, A, _, "_h"), f(e), o.call(this);
            try {
                e(c(B, this, 1), c(j, this, 1))
            } catch (t) {
                j.call(this, t)
            }
        }, o = function (e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, o.prototype = n("dcbc")(A.prototype, {
            then: function (e, t) {
                var n = N(g(this, A));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = O ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), n.promise
            }, catch: function (e) {
                return this.then(void 0, e)
            }
        }), i = function () {
            var e = new o;
            this.promise = e, this.resolve = c(B, e, 1), this.reject = c(j, e, 1)
        }, x.f = N = function (e) {
            return e === A || e === a ? new i(e) : r(e)
        }), p(p.G + p.W + p.F * !L, {Promise: A}), n("7f20")(A, _), n("7a56")(_), a = n("8378")[_], p(p.S + p.F * !L, _, {
            reject: function (e) {
                var t = N(this), n = t.reject;
                return n(e), t.promise
            }
        }), p(p.S + p.F * (s || !L), _, {
            resolve: function (e) {
                return w(s && this === a ? A : this, e)
            }
        }), p(p.S + p.F * !(L && n("5cc5")(function (e) {
            A.all(e)["catch"](P)
        })), _, {
            all: function (e) {
                var t = this, n = N(t), o = n.resolve, r = n.reject, i = y(function () {
                    var n = [], i = 0, a = 1;
                    h(e, !1, function (e) {
                        var s = i++, l = !1;
                        n.push(void 0), a++, t.resolve(e).then(function (e) {
                            l || (l = !0, n[s] = e, --a || o(n))
                        }, r)
                    }), --a || o(n)
                });
                return i.e && r(i.v), n.promise
            }, race: function (e) {
                var t = this, n = N(t), o = n.reject, r = y(function () {
                    h(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, o)
                    })
                });
                return r.e && o(r.v), n.promise
            }
        })
    }, 5537: function (e, t, n) {
        var o = n("8378"), r = n("7726"), i = "__core-js_shared__", a = r[i] || (r[i] = {});
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: o.version,
            mode: n("2d00") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, "560b": function (e, t, n) {
        var o = n("bc25"), r = n("9c93"), i = n("c227"), a = n("0f89"), s = n("a5ab"), l = n("f159"), c = {}, u = {};
        t = e.exports = function (e, t, n, p, d) {
            var f, m, h, g, b = d ? function () {
                return e
            } : l(e), v = o(n, p, t ? 2 : 1), x = 0;
            if ("function" != typeof b) throw TypeError(e + " is not iterable!");
            if (i(b)) {
                for (f = s(e.length); f > x; x++) if (g = t ? v(a(m = e[x])[0], m[1]) : v(e[x]), g === c || g === u) return g
            } else for (h = b.call(e); !(m = h.next()).done;) if (g = r(h, v, m.value, t), g === c || g === u) return g
        };
        t.BREAK = c, t.RETURN = u
    }, 5612: function (e, t, n) {
        e.exports = n.p + "img/sidebar-setting.a6d17e34.png"
    }, "565d": function (e, t, n) {
        var o = n("6a9b"), r = n("d876").f, i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            s = function (e) {
                try {
                    return r(e)
                } catch (t) {
                    return a.slice()
                }
            };
        e.exports.f = function (e) {
            return a && "[object Window]" == i.call(e) ? s(e) : r(o(e))
        }
    }, 5698: function (e, t, n) {
        n("d256"), e.exports = n("a7d3").Object.getOwnPropertySymbols
    }, "58db": function (e, t, n) {
        var o = n("bdfd");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("093de21d", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "58df": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        });
        var o = n("2b0e");

        function r() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return o["default"].extend({mixins: t})
        }
    }, "5b5f": function (e, t, n) {
        "use strict";
        var o, r, i, a, s = n("b457"), l = n("da3c"), c = n("bc25"), u = n("7d8a"), p = n("d13f"), d = n("6f8a"),
            f = n("f2fe"), m = n("b0bc"), h = n("560b"), g = n("302f"), b = n("df0a").set, v = n("36dc")(),
            x = n("03ca"), y = n("75c9"), k = n("8a12"), w = n("decf"), _ = "Promise", S = l.TypeError, T = l.process,
            E = T && T.versions, C = E && E.v8 || "", A = l[_], O = "process" == u(T), P = function () {
            }, N = r = x.f, L = !!function () {
                try {
                    var e = A.resolve(1), t = (e.constructor = {})[n("1b55")("species")] = function (e) {
                        e(P, P)
                    };
                    return (O || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== C.indexOf("6.6") && -1 === k.indexOf("Chrome/66")
                } catch (o) {
                }
            }(), I = function (e) {
                var t;
                return !(!d(e) || "function" != typeof (t = e.then)) && t
            }, F = function (e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    v(function () {
                        var o = e._v, r = 1 == e._s, i = 0, a = function (t) {
                            var n, i, a, s = r ? t.ok : t.fail, l = t.resolve, c = t.reject, u = t.domain;
                            try {
                                s ? (r || (2 == e._h && R(e), e._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === t.promise ? c(S("Promise-chain cycle")) : (i = I(n)) ? i.call(n, l, c) : l(n)) : c(o)
                            } catch (p) {
                                u && !a && u.exit(), c(p)
                            }
                        };
                        while (n.length > i) a(n[i++]);
                        e._c = [], e._n = !1, t && !e._h && M(e)
                    })
                }
            }, M = function (e) {
                b.call(l, function () {
                    var t, n, o, r = e._v, i = D(e);
                    if (i && (t = y(function () {
                        O ? T.emit("unhandledRejection", r, e) : (n = l.onunhandledrejection) ? n({
                            promise: e,
                            reason: r
                        }) : (o = l.console) && o.error && o.error("Unhandled promise rejection", r)
                    }), e._h = O || D(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
                })
            }, D = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length
            }, R = function (e) {
                b.call(l, function () {
                    var t;
                    O ? T.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({promise: e, reason: e._v})
                })
            }, j = function (e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), F(t, !0))
            }, B = function (e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw S("Promise can't be resolved itself");
                        (t = I(e)) ? v(function () {
                            var o = {_w: n, _d: !1};
                            try {
                                t.call(e, c(B, o, 1), c(j, o, 1))
                            } catch (r) {
                                j.call(o, r)
                            }
                        }) : (n._v = e, n._s = 1, F(n, !1))
                    } catch (o) {
                        j.call({_w: n, _d: !1}, o)
                    }
                }
            };
        L || (A = function (e) {
            m(this, A, _, "_h"), f(e), o.call(this);
            try {
                e(c(B, this, 1), c(j, this, 1))
            } catch (t) {
                j.call(this, t)
            }
        }, o = function (e) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }, o.prototype = n("3904")(A.prototype, {
            then: function (e, t) {
                var n = N(g(this, A));
                return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = O ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), n.promise
            }, catch: function (e) {
                return this.then(void 0, e)
            }
        }), i = function () {
            var e = new o;
            this.promise = e, this.resolve = c(B, e, 1), this.reject = c(j, e, 1)
        }, x.f = N = function (e) {
            return e === A || e === a ? new i(e) : r(e)
        }), p(p.G + p.W + p.F * !L, {Promise: A}), n("c0d8")(A, _), n("1be4")(_), a = n("a7d3")[_], p(p.S + p.F * !L, _, {
            reject: function (e) {
                var t = N(this), n = t.reject;
                return n(e), t.promise
            }
        }), p(p.S + p.F * (s || !L), _, {
            resolve: function (e) {
                return w(s && this === a ? A : this, e)
            }
        }), p(p.S + p.F * !(L && n("436c")(function (e) {
            A.all(e)["catch"](P)
        })), _, {
            all: function (e) {
                var t = this, n = N(t), o = n.resolve, r = n.reject, i = y(function () {
                    var n = [], i = 0, a = 1;
                    h(e, !1, function (e) {
                        var s = i++, l = !1;
                        n.push(void 0), a++, t.resolve(e).then(function (e) {
                            l || (l = !0, n[s] = e, --a || o(n))
                        }, r)
                    }), --a || o(n)
                });
                return i.e && r(i.v), n.promise
            }, race: function (e) {
                var t = this, n = N(t), o = n.reject, r = y(function () {
                    h(e, !1, function (e) {
                        t.resolve(e).then(n.resolve, o)
                    })
                });
                return r.e && o(r.v), n.promise
            }
        })
    }, "5be4": function (e, t, n) {
        e.exports = n.p + "img/shopee-home.a8c801c4.png"
    }, "5ca1": function (e, t, n) {
        var o = n("7726"), r = n("8378"), i = n("32e9"), a = n("2aba"), s = n("9b43"), l = "prototype",
            c = function (e, t, n) {
                var u, p, d, f, m = e & c.F, h = e & c.G, g = e & c.S, b = e & c.P, v = e & c.B,
                    x = h ? o : g ? o[t] || (o[t] = {}) : (o[t] || {})[l], y = h ? r : r[t] || (r[t] = {}),
                    k = y[l] || (y[l] = {});
                for (u in h && (n = t), n) p = !m && x && void 0 !== x[u], d = (p ? x : n)[u], f = v && p ? s(d, o) : b && "function" == typeof d ? s(Function.call, d) : d, x && a(x, u, d, e & c.U), y[u] != d && i(y, u, f), b && k[u] != d && (k[u] = d)
            };
        o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
    }, "5cc5": function (e, t, n) {
        var o = n("2b4c")("iterator"), r = !1;
        try {
            var i = [7][o]();
            i["return"] = function () {
                r = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (a) {
        }
        e.exports = function (e, t) {
            if (!t && !r) return !1;
            var n = !1;
            try {
                var i = [7], s = i[o]();
                s.next = function () {
                    return {done: n = !0}
                }, i[o] = function () {
                    return s
                }, e(i)
            } catch (a) {
            }
            return n
        }
    }, "5ce7": function (e, t, n) {
        "use strict";
        var o = n("7108"), r = n("f845"), i = n("c0d8"), a = {};
        n("8ce0")(a, n("1b55")("iterator"), function () {
            return this
        }), e.exports = function (e, t, n) {
            e.prototype = o(a, {next: r(1, n)}), i(e, t + " Iterator")
        }
    }, "5d73": function (e, t, n) {
        e.exports = n("0a91")
    }, "5d8f": function (e, t, n) {
        var o = n("7772")("keys"), r = n("7b00");
        e.exports = function (e) {
            return o[e] || (o[e] = r(e))
        }
    }, "5dbc": function (e, t, n) {
        var o = n("d3f4"), r = n("8b97").set;
        e.exports = function (e, t, n) {
            var i, a = t.constructor;
            return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(e, i), e
        }
    }, "5f1b": function (e, t, n) {
        "use strict";
        var o = n("23c6"), r = RegExp.prototype.exec;
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" === typeof n) {
                var i = n.call(e, t);
                if ("object" !== typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== o(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return r.call(e, t)
        }
    }, "613b": function (e, t, n) {
        var o = n("5537")("keys"), r = n("ca5a");
        e.exports = function (e) {
            return o[e] || (o[e] = r(e))
        }
    }, "626a": function (e, t, n) {
        var o = n("2d95");
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == o(e) ? e.split("") : Object(e)
        }
    }, "626e": function (e, t, n) {
        var o = n("d74e"), r = n("f845"), i = n("6a9b"), a = n("2ea1"), s = n("43c8"), l = n("a47f"),
            c = Object.getOwnPropertyDescriptor;
        t.f = n("7d95") ? c : function (e, t) {
            if (e = i(e), t = a(t, !0), l) try {
                return c(e, t)
            } catch (n) {
            }
            if (s(e, t)) return r(!o.f.call(e, t), e[t])
        }
    }, 6277: function (e, t, n) {
        var o = n("7b00")("meta"), r = n("6f8a"), i = n("43c8"), a = n("3adc").f, s = 0,
            l = Object.isExtensible || function () {
                return !0
            }, c = !n("d782")(function () {
                return l(Object.preventExtensions({}))
            }), u = function (e) {
                a(e, o, {value: {i: "O" + ++s, w: {}}})
            }, p = function (e, t) {
                if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, o)) {
                    if (!l(e)) return "F";
                    if (!t) return "E";
                    u(e)
                }
                return e[o].i
            }, d = function (e, t) {
                if (!i(e, o)) {
                    if (!l(e)) return !0;
                    if (!t) return !1;
                    u(e)
                }
                return e[o].w
            }, f = function (e) {
                return c && m.NEED && l(e) && !i(e, o) && u(e), e
            }, m = e.exports = {KEY: o, NEED: !1, fastKey: p, getWeak: d, onFreeze: f}
    }, "633a": function (e, t, n) {
        var o = n("d13f"), r = n("e5fa"), i = n("d782"), a = n("702a"), s = "[" + a + "]", l = "​",
            c = RegExp("^" + s + s + "*"), u = RegExp(s + s + "*$"), p = function (e, t, n) {
                var r = {}, s = i(function () {
                    return !!a[e]() || l[e]() != l
                }), c = r[e] = s ? t(d) : a[e];
                n && (r[n] = c), o(o.P + o.F * s, "String", r)
            }, d = p.trim = function (e, t) {
                return e = String(r(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
            };
        e.exports = p
    }, "637a": function (e, t, n) {
        var o = n("74bc");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("0e4b2f17", o, !0, {sourceMap: !1, shadowMode: !1})
    }, 6453: function (e, t, n) {
        "use strict";
        e.exports = (e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
    }, "65b4": function (e, t, n) {
        "use strict";
        var o = n("78f6"), r = n.n(o);
        r.a
    }, "660a": function (e, t, n) {
        e.exports = n.p + "img/popup-tool.14632ede.png"
    }, 6762: function (e, t, n) {
        "use strict";
        var o = n("5ca1"), r = n("c366")(!0);
        o(o.P, "Array", {
            includes: function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n("9c6c")("includes")
    }, 6821: function (e, t, n) {
        var o = n("626a"), r = n("be13");
        e.exports = function (e) {
            return o(r(e))
        }
    }, "68d8": function (e) {
        e.exports = {noUpdate: "There is no update", moreData: "Load more data", noData: "No more data!"}
    }, "69a8": function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, "6a18": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i
        });
        var o = n("2b0e"), r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function i(e) {
            var t = r({}, e.props, e.injections), n = a.options.computed.isDark.call(t);
            return a.options.computed.themeClasses.call({isDark: n})
        }

        var a = o["default"].extend().extend({
            name: "themeable",
            provide: function () {
                return {theme: this.themeableProvide}
            },
            inject: {theme: {default: {isDark: !1}}},
            props: {dark: {type: Boolean, default: null}, light: {type: Boolean, default: null}},
            data: function () {
                return {themeableProvide: {isDark: !1}}
            },
            computed: {
                isDark: function () {
                    return !0 === this.dark || !0 !== this.light && this.theme.isDark
                }, themeClasses: function () {
                    return {"theme--dark": this.isDark, "theme--light": !this.isDark}
                }, rootIsDark: function () {
                    return !0 === this.dark || !0 !== this.light && this.$vuetify.dark
                }, rootThemeClasses: function () {
                    return {"theme--dark": this.rootIsDark, "theme--light": !this.rootIsDark}
                }
            },
            watch: {
                isDark: {
                    handler: function (e, t) {
                        e !== t && (this.themeableProvide.isDark = this.isDark)
                    }, immediate: !0
                }
            }
        });
        t["a"] = a
    }, "6a99": function (e, t, n) {
        var o = n("d3f4");
        e.exports = function (e, t) {
            if (!o(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, "6a9b": function (e, t, n) {
        var o = n("8bab"), r = n("e5fa");
        e.exports = function (e) {
            return o(r(e))
        }
    }, "6b54": function (e, t, n) {
        "use strict";
        n("3846");
        var o = n("cb7c"), r = n("0bfb"), i = n("9e1e"), a = "toString", s = /./[a], l = function (e) {
            n("2aba")(RegExp.prototype, a, e, !0)
        };
        n("79e5")(function () {
            return "/a/b" != s.call({source: "a", flags: "b"})
        }) ? l(function () {
            var e = o(this);
            return "/".concat(e.source, "/", "flags" in e ? e.flags : !i && e instanceof RegExp ? r.call(e) : void 0)
        }) : s.name != a && l(function () {
            return s.call(this)
        })
    }, "6c7b": function (e, t, n) {
        var o = n("5ca1");
        o(o.P, "Array", {fill: n("36bd")}), n("9c6c")("fill")
    }, "6d9d": function (e) {
        e.exports = {
            setting: "Pengaturan",
            closeFeatureLabel: "Apakah akan mematikan fitur 'Unduh Gambar / Video'",
            imageDownloadTip: "Unduh Gambar: Dukungan Shopee, 1688, Taobao, Tmall, Pinduoduo, AliExpress, Lazada, dll.",
            videoDownloadTip: "Unduh Video: Dukungan 1688, Tmall, AliExpress, Pinduoduo, dll."
        }
    }, "6e1f": function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, "6f26": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".v-avatar{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;text-align:center;vertical-align:middle}.v-avatar,.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{border-radius:50%;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.v-avatar .v-icon,.v-avatar .v-image,.v-avatar img{height:inherit;width:inherit}.v-avatar--tile,.v-avatar--tile .v-icon,.v-avatar--tile .v-image,.v-avatar--tile img{border-radius:0}", ""])
    }, "6f8a": function (e, t) {
        e.exports = function (e) {
            return "object" === typeof e ? null !== e : "function" === typeof e
        }
    }, "702a": function (e, t) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, 7108: function (e, t, n) {
        var o = n("0f89"), r = n("f568"), i = n("0029"), a = n("5d8f")("IE_PROTO"), s = function () {
        }, l = "prototype", c = function () {
            var e, t = n("12fd")("iframe"), o = i.length, r = "<", a = ">";
            t.style.display = "none", n("103a").appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), c = e.F;
            while (o--) delete c[l][i[o]];
            return c()
        };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (s[l] = o(e), n = new s, s[l] = null, n[a] = e) : n = c(), void 0 === t ? n : r(n, t)
        }
    }, "72bf": function (e, t, n) {
        "use strict";
        const o = n("6453"), r = n("f234");

        function i(e) {
            switch (e.arrayFormat) {
                case"index":
                    return (t, n, o) => {
                        return null === n ? [s(t, e), "[", o, "]"].join("") : [s(t, e), "[", s(o, e), "]=", s(n, e)].join("")
                    };
                case"bracket":
                    return (t, n) => {
                        return null === n ? [s(t, e), "[]"].join("") : [s(t, e), "[]=", s(n, e)].join("")
                    };
                default:
                    return (t, n) => {
                        return null === n ? s(t, e) : [s(t, e), "=", s(n, e)].join("")
                    }
            }
        }

        function a(e) {
            let t;
            switch (e.arrayFormat) {
                case"index":
                    return (e, n, o) => {
                        t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === o[e] && (o[e] = {}), o[e][t[1]] = n) : o[e] = n
                    };
                case"bracket":
                    return (e, n, o) => {
                        t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== o[e] ? o[e] = [].concat(o[e], n) : o[e] = [n] : o[e] = n
                    };
                default:
                    return (e, t, n) => {
                        void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                    }
            }
        }

        function s(e, t) {
            return t.encode ? t.strict ? o(e) : encodeURIComponent(e) : e
        }

        function l(e, t) {
            return t.decode ? r(e) : e
        }

        function c(e) {
            return Array.isArray(e) ? e.sort() : "object" === typeof e ? c(Object.keys(e)).sort((e, t) => Number(e) - Number(t)).map(t => e[t]) : e
        }

        function u(e) {
            const t = e.indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }

        function p(e, t) {
            t = Object.assign({decode: !0, arrayFormat: "none"}, t);
            const n = a(t), o = Object.create(null);
            if ("string" !== typeof e) return o;
            if (e = e.trim().replace(/^[?#&]/, ""), !e) return o;
            for (const r of e.split("&")) {
                let [e, i] = r.replace(/\+/g, " ").split("=");
                i = void 0 === i ? null : l(i, t), n(l(e, t), i, o)
            }
            return Object.keys(o).sort().reduce((e, t) => {
                const n = o[t];
                return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? e[t] = c(n) : e[t] = n, e
            }, Object.create(null))
        }

        t.extract = u, t.parse = p, t.stringify = ((e, t) => {
            if (!e) return "";
            t = Object.assign({encode: !0, strict: !0, arrayFormat: "none"}, t);
            const n = i(t), o = Object.keys(e);
            return !1 !== t.sort && o.sort(t.sort), o.map(o => {
                const r = e[o];
                if (void 0 === r) return "";
                if (null === r) return s(o, t);
                if (Array.isArray(r)) {
                    const e = [];
                    for (const t of r.slice()) void 0 !== t && e.push(n(o, t, e.length));
                    return e.join("&")
                }
                return s(o, t) + "=" + s(r, t)
            }).filter(e => e.length > 0).join("&")
        }), t.parseUrl = ((e, t) => {
            const n = e.indexOf("#");
            return -1 !== n && (e = e.slice(0, n)), {url: e.split("?")[0] || "", query: p(u(e), t)}
        })
    }, 7333: function (e, t, n) {
        "use strict";
        var o = n("0d58"), r = n("2621"), i = n("52a7"), a = n("4bf8"), s = n("626a"), l = Object.assign;
        e.exports = !l || n("79e5")(function () {
            var e = {}, t = {}, n = Symbol(), o = "abcdefghijklmnopqrst";
            return e[n] = 7, o.split("").forEach(function (e) {
                t[e] = e
            }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != o
        }) ? function (e, t) {
            var n = a(e), l = arguments.length, c = 1, u = r.f, p = i.f;
            while (l > c) {
                var d, f = s(arguments[c++]), m = u ? o(f).concat(u(f)) : o(f), h = m.length, g = 0;
                while (h > g) p.call(f, d = m[g++]) && (n[d] = f[d])
            }
            return n
        } : l
    }, 7496: function (e, t, n) {
        "use strict";
        n("3385");
        var o = n("d9bd");

        function r(e) {
            var t = void 0;
            if ("number" === typeof e) t = e; else {
                if ("string" !== typeof e) throw new TypeError("Colors can only be numbers or strings, recieved " + (null == e ? e : e.constructor.name) + " instead");
                var n = "#" === e[0] ? e.substring(1) : e;
                3 === n.length && (n = n.split("").map(function (e) {
                    return e + e
                }).join("")), 6 !== n.length && Object(o["c"])("'" + e + "' is not a valid rgb color"), t = parseInt(n, 16)
            }
            return t < 0 ? (Object(o["c"])("Colors cannot be negative: '" + e + "'"), t = 0) : (t > 16777215 || isNaN(t)) && (Object(o["c"])("'" + e + "' is not a valid rgb color"), t = 16777215), t
        }

        function i(e) {
            var t = e.toString(16);
            return t.length < 6 && (t = "0".repeat(6 - t.length) + t), "#" + t
        }

        function a(e) {
            return i(r(e))
        }

        var s = [[3.2406, -1.5372, -.4986], [-.9689, 1.8758, .0415], [.0557, -.204, 1.057]], l = function (e) {
            return e <= .0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - .055
        }, c = [[.4124, .3576, .1805], [.2126, .7152, .0722], [.0193, .1192, .9505]], u = function (e) {
            return e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        };

        function p(e) {
            return Math.max(0, Math.min(1, e))
        }

        function d(e) {
            for (var t = Array(3), n = l, o = s, r = 0; r < 3; ++r) t[r] = Math.round(255 * p(n(o[r][0] * e[0] + o[r][1] * e[1] + o[r][2] * e[2])));
            return (t[0] << 16) + (t[1] << 8) + (t[2] << 0)
        }

        function f(e) {
            for (var t = [0, 0, 0], n = u, o = c, r = n((e >> 16 & 255) / 255), i = n((e >> 8 & 255) / 255), a = n((e >> 0 & 255) / 255), s = 0; s < 3; ++s) t[s] = o[s][0] * r + o[s][1] * i + o[s][2] * a;
            return t
        }

        var m = .20689655172413793, h = function (e) {
            return e > Math.pow(m, 3) ? Math.cbrt(e) : e / (3 * Math.pow(m, 2)) + 4 / 29
        }, g = function (e) {
            return e > m ? Math.pow(e, 3) : 3 * Math.pow(m, 2) * (e - 4 / 29)
        };

        function b(e) {
            var t = h, n = t(e[1]);
            return [116 * n - 16, 500 * (t(e[0] / .95047) - n), 200 * (n - t(e[2] / 1.08883))]
        }

        function v(e) {
            var t = g, n = (e[0] + 16) / 116;
            return [.95047 * t(n + e[1] / 500), t(n), 1.08883 * t(n - e[2] / 200)]
        }

        var x = function () {
            function e(e, t) {
                var n = [], o = !0, r = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) if (n.push(a.value), t && n.length === t) break
                } catch (l) {
                    r = !0, i = l
                } finally {
                    try {
                        !o && s["return"] && s["return"]()
                    } finally {
                        if (r) throw i
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), y = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        function k(e) {
            for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Object.keys(e), o = {}, i = 0; i < n.length; ++i) {
                var s = n[i], l = e[s];
                t ? ("base" === s || s.startsWith("lighten") || s.startsWith("darken")) && (o[s] = a(l)) : "object" === ("undefined" === typeof l ? "undefined" : y(l)) ? o[s] = k(l, !0) : o[s] = C(s, r(l))
            }
            return o
        }

        var w = function (e, t) {
            return "\n." + e + " {\n  background-color: " + t + " !important;\n  border-color: " + t + " !important;\n}\n." + e + "--text {\n  color: " + t + " !important;\n  caret-color: " + t + " !important;\n}"
        }, _ = function (e, t, n) {
            var o = t.split(/(\d)/, 2), r = x(o, 2), i = r[0], a = r[1];
            return "\n." + e + "." + i + "-" + a + " {\n  background-color: " + n + " !important;\n  border-color: " + n + " !important;\n}\n." + e + "--text.text--" + i + "-" + a + " {\n  color: " + n + " !important;\n  caret-color: " + n + " !important;\n}"
        }, S = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base";
            return "--v-" + e + "-" + t
        }, T = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base";
            return "var(" + S(e, t) + ")"
        };

        function E(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Object.keys(e);
            if (!n.length) return "";
            var o = "", r = "", i = t ? T("primary") : e.primary.base;
            r += "a { color: " + i + "; }";
            for (var a = 0; a < n.length; ++a) {
                var s = n[a], l = e[s];
                if ("object" === ("undefined" === typeof l ? "undefined" : y(l))) {
                    r += w(s, t ? T(s) : l.base), t && (o += "  " + S(s) + ": " + l.base + ";\n");
                    for (var c = Object.keys(l), u = 0; u < c.length; ++u) {
                        var p = c[u], d = l[p];
                        "base" !== p && (r += _(s, p, t ? T(s, p) : d), t && (o += "  " + S(s, p) + ": " + d + ";\n"))
                    }
                }
            }
            return t && (o = ":root {\n" + o + "}\n\n"), o + r
        }

        function C(e, t) {
            for (var n = {base: i(t)}, o = 5; o > 0; --o) n["lighten" + o] = i(A(t, o));
            for (var r = 1; r <= 4; ++r) n["darken" + r] = i(O(t, r));
            return n
        }

        function A(e, t) {
            var n = b(f(e));
            return n[0] = n[0] + 10 * t, d(v(n))
        }

        function O(e, t) {
            var n = b(f(e));
            return n[0] = n[0] - 10 * t, d(v(n))
        }

        var P = {
            data: function () {
                return {style: null}
            }, computed: {
                parsedTheme: function () {
                    return k(this.$vuetify.theme)
                }, generatedStyles: function () {
                    var e = this.parsedTheme, t = void 0;
                    return null != this.$vuetify.options.themeCache && (t = this.$vuetify.options.themeCache.get(e), null != t) ? t : (t = E(e, this.$vuetify.options.customProperties), null != this.$vuetify.options.minifyTheme && (t = this.$vuetify.options.minifyTheme(t)), null != this.$vuetify.options.themeCache && this.$vuetify.options.themeCache.set(e, t), t)
                }, vueMeta: function () {
                    if (!1 === this.$vuetify.theme) return {};
                    var e = {cssText: this.generatedStyles, id: "vuetify-theme-stylesheet", type: "text/css"};
                    return this.$vuetify.options.cspNonce && (e.nonce = this.$vuetify.options.cspNonce), {style: [e]}
                }
            }, metaInfo: function () {
                return this.vueMeta
            }, head: function () {
                return this.vueMeta
            }, watch: {
                generatedStyles: function () {
                    !this.meta && this.applyTheme()
                }
            }, created: function () {
                if (!1 !== this.$vuetify.theme) if (this.$meta) ; else if ("undefined" === typeof document && this.$ssrContext) {
                    var e = this.$vuetify.options.cspNonce ? ' nonce="' + this.$vuetify.options.cspNonce + '"' : "";
                    this.$ssrContext.head = this.$ssrContext.head || "", this.$ssrContext.head += '<style type="text/css" id="vuetify-theme-stylesheet"' + e + ">" + this.generatedStyles + "</style>"
                } else "undefined" !== typeof document && (this.genStyle(), this.applyTheme())
            }, methods: {
                applyTheme: function () {
                    this.style && (this.style.innerHTML = this.generatedStyles)
                }, genStyle: function () {
                    var e = document.getElementById("vuetify-theme-stylesheet");
                    e || (e = document.createElement("style"), e.type = "text/css", e.id = "vuetify-theme-stylesheet", this.$vuetify.options.cspNonce && e.setAttribute("nonce", this.$vuetify.options.cspNonce), document.head.appendChild(e)), this.style = e
                }
            }
        }, N = n("6a18"), L = n("0d3d"), I = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t["a"] = {
            name: "v-app",
            directives: {Resize: L["a"]},
            mixins: [P, N["a"]],
            props: {id: {type: String, default: "app"}, dark: Boolean},
            computed: {
                classes: function () {
                    return I({"application--is-rtl": this.$vuetify.rtl}, this.themeClasses)
                }
            },
            watch: {
                dark: function () {
                    this.$vuetify.dark = this.dark
                }
            },
            mounted: function () {
                this.$vuetify.dark = this.dark
            },
            render: function (e) {
                var t = {
                    staticClass: "application",
                    class: this.classes,
                    attrs: {"data-app": !0},
                    domProps: {id: this.id}
                }, n = e("div", {staticClass: "application--wrap"}, this.$slots.default);
                return e("div", t, [n])
            }
        }
    }, "74bc": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".app-message-box[data-v-3d5d9da3]{-webkit-transition:all .6s linear;transition:all .6s linear}", ""])
    }, "75c9": function (e, t) {
        e.exports = function (e) {
            try {
                return {e: !1, v: e()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, 7625: function (e, t, n) {
        e.exports = n.p + "img/popup-view.6a7696a4.png"
    }, 7633: function (e, t, n) {
        var o = n("2695"), r = n("0029");
        e.exports = Object.keys || function (e) {
            return o(e, r)
        }
    }, "768b": function (e, t, n) {
        "use strict";
        var o = n("a745"), r = n.n(o);

        function i(e) {
            if (r()(e)) return e
        }

        var a = n("5d73"), s = n.n(a);

        function l(e, t) {
            var n = [], o = !0, r = !1, i = void 0;
            try {
                for (var a, l = s()(e); !(o = (a = l.next()).done); o = !0) if (n.push(a.value), t && n.length === t) break
            } catch (c) {
                r = !0, i = c
            } finally {
                try {
                    o || null == l["return"] || l["return"]()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }

        function c() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }

        function u(e, t) {
            return i(e) || l(e, t) || c()
        }

        n.d(t, "a", function () {
            return u
        })
    }, 7704: function (e, t, n) {
        var o = n("da3c").parseInt, r = n("633a").trim, i = n("702a"), a = /^[-+]?0[xX]/;
        e.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function (e, t) {
            var n = r(String(e), 3);
            return o(n, t >>> 0 || (a.test(n) ? 16 : 10))
        } : o
    }, 7726: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, 7772: function (e, t, n) {
        var o = n("a7d3"), r = n("da3c"), i = "__core-js_shared__", a = r[i] || (r[i] = {});
        (e.exports = function (e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: o.version,
            mode: n("b457") ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, "77f1": function (e, t, n) {
        var o = n("4588"), r = Math.max, i = Math.min;
        e.exports = function (e, t) {
            return e = o(e), e < 0 ? r(e + t, 0) : i(e, t)
        }
    }, "784e": function (e) {
        e.exports = {
            warningForSendMessageInBulk: "Jangan sering massa pesan, keluhan dari pengguna atau sistem dengan mudah diidentifikasi sebagai spam (software tidak bertanggung jawab)!",
            inputMessageLabel: "Ketik pesan Anda",
            sendOver: "{name} berhasil dikirim, sisanya pesan kali {count}",
            sendFail: "{name} gagal send",
            pleaseGoToWebchat: "Pergi untuk chatting udang beroperasi secara otomatis melompat kembali 3s",
            pleaseLoginShopeeMainPage: "Pergi ke halaman sinkronisasi negara xiapibuy login, secara otomatis melompat kembali 3s",
            pleaseFillInTheMessage: "Silahkan isi isi pesan",
            pleaseSelectUsers: "Pilih pengguna",
            cancelled: "Telah dibatalkan",
            sendDone: "selesai",
            runOutOfRemainQuantity: "Jumlah sisa telah habis",
            userDisabled: "{name} dinonaktifkan oleh Shopee"
        }
    }, "78f6": function (e, t, n) {
        var o = n("0211");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("67c4b88b", o, !0, {sourceMap: !1, shadowMode: !1})
    }, "795b": function (e, t, n) {
        e.exports = n("dd04")
    }, "79e5": function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, "7a56": function (e, t, n) {
        "use strict";
        var o = n("7726"), r = n("86cc"), i = n("9e1e"), a = n("2b4c")("species");
        e.exports = function (e) {
            var t = o[e];
            i && t && !t[a] && r.f(t, a, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }
    }, "7b00": function (e, t) {
        var n = 0, o = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
        }
    }, "7d8a": function (e, t, n) {
        var o = n("6e1f"), r = n("1b55")("toStringTag"), i = "Arguments" == o(function () {
            return arguments
        }()), a = function (e, t) {
            try {
                return e[t]
            } catch (n) {
            }
        };
        e.exports = function (e) {
            var t, n, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }, "7d95": function (e, t, n) {
        e.exports = !n("d782")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, "7f20": function (e, t, n) {
        var o = n("86cc").f, r = n("69a8"), i = n("2b4c")("toStringTag");
        e.exports = function (e, t, n) {
            e && !r(e = n ? e : e.prototype, i) && o(e, i, {configurable: !0, value: t})
        }
    }, "7f7f": function (e, t, n) {
        var o = n("86cc").f, r = Function.prototype, i = /^\s*function ([^ (]*)/, a = "name";
        a in r || n("9e1e") && o(r, a, {
            configurable: !0, get: function () {
                try {
                    return ("" + this).match(i)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    }, 8079: function (e, t, n) {
        var o = n("7726"), r = n("1991").set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process,
            s = o.Promise, l = "process" == n("2d95")(a);
        e.exports = function () {
            var e, t, n, c = function () {
                var o, r;
                l && (o = a.domain) && o.exit();
                while (e) {
                    r = e.fn, e = e.next;
                    try {
                        r()
                    } catch (i) {
                        throw e ? n() : t = void 0, i
                    }
                }
                t = void 0, o && o.enter()
            };
            if (l) n = function () {
                a.nextTick(c)
            }; else if (!i || o.navigator && o.navigator.standalone) if (s && s.resolve) {
                var u = s.resolve(void 0);
                n = function () {
                    u.then(c)
                }
            } else n = function () {
                r.call(o, c)
            }; else {
                var p = !0, d = document.createTextNode("");
                new i(c).observe(d, {characterData: !0}), n = function () {
                    d.data = p = !p
                }
            }
            return function (o) {
                var r = {fn: o, next: void 0};
                t && (t.next = r), e || (e = r, n()), t = r
            }
        }
    }, "80d2": function (e, t, n) {
        "use strict";
        n.d(t, "e", function () {
            return a
        }), n.d(t, "f", function () {
            return l
        }), n.d(t, "d", function () {
            return c
        }), n.d(t, "a", function () {
            return d
        }), n.d(t, "g", function () {
            return m
        }), n.d(t, "j", function () {
            return h
        }), n.d(t, "k", function () {
            return g
        }), n.d(t, "m", function () {
            return b
        }), n.d(t, "h", function () {
            return x
        }), n.d(t, "i", function () {
            return y
        }), n.d(t, "c", function () {
            return k
        }), n.d(t, "o", function () {
            return w
        }), n.d(t, "n", function () {
            return _
        }), n.d(t, "p", function () {
            return S
        }), n.d(t, "r", function () {
            return E
        }), n.d(t, "q", function () {
            return C
        }), n.d(t, "b", function () {
            return O
        }), n.d(t, "s", function () {
            return P
        }), n.d(t, "l", function () {
            return N
        });
        var o = n("2b0e"), r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "div", n = arguments[2];
            return o["default"].extend({
                name: n || e.replace(/__/g, "-"), functional: !0, render: function (n, o) {
                    var r = o.data, i = o.children;
                    return r.staticClass = (e + " " + (r.staticClass || "")).trim(), n(t, r, i)
                }
            })
        }

        function s(e, t) {
            return Array.isArray(e) ? e.concat(t) : (e && t.push(e), t)
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top center 0", n = arguments[2];
            return {
                name: e,
                functional: !0,
                props: {
                    group: {type: Boolean, default: !1},
                    hideOnLeave: {type: Boolean, default: !1},
                    leaveAbsolute: {type: Boolean, default: !1},
                    mode: {type: String, default: n},
                    origin: {type: String, default: t}
                },
                render: function (t, n) {
                    var o = "transition" + (n.props.group ? "-group" : "");
                    n.data = n.data || {}, n.data.props = {
                        name: e,
                        mode: n.props.mode
                    }, n.data.on = n.data.on || {}, Object.isExtensible(n.data.on) || (n.data.on = i({}, n.data.on));
                    var r = [], a = [], l = function (e) {
                        return e.style.position = "absolute"
                    };
                    r.push(function (e) {
                        e.style.transformOrigin = n.props.origin, e.style.webkitTransformOrigin = n.props.origin
                    }), n.props.leaveAbsolute && a.push(l), n.props.hideOnLeave && a.push(function (e) {
                        return e.style.display = "none"
                    });
                    var c = n.data.on, u = c.beforeEnter, p = c.leave;
                    return n.data.on.beforeEnter = function () {
                        return s(u, r)
                    }, n.data.on.leave = s(p, a), t(o, n.data, n.children)
                }
            }
        }

        function c(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "in-out";
            return {
                name: e, functional: !0, props: {mode: {type: String, default: n}}, render: function (n, o) {
                    var r = {props: i({}, o.props, {name: e}), on: t};
                    return n("transition", r, o.children)
                }
            }
        }

        var u = !1;
        try {
            if ("undefined" !== typeof window) {
                var p = Object.defineProperty({}, "passive", {
                    get: function () {
                        u = !0
                    }
                });
                window.addEventListener("testListener", p, p), window.removeEventListener("testListener", p, p)
            }
        } catch (L) {
            console.warn(L)
        }

        function d(e, t, n, o) {
            e.addEventListener(t, n, !!u && o)
        }

        function f(e, t, n) {
            var o = t.length - 1;
            if (o < 0) return void 0 === e ? n : e;
            for (var r = 0; r < o; r++) {
                if (null == e) return n;
                e = e[t[r]]
            }
            return null == e ? n : void 0 === e[t[o]] ? n : e[t[o]]
        }

        function m(e, t) {
            if (e === t) return !0;
            if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime()) return !1;
            if (e !== Object(e) || t !== Object(t)) return !1;
            var n = Object.keys(e);
            return n.length === Object.keys(t).length && n.every(function (n) {
                return m(e[n], t[n])
            })
        }

        function h(e, t, n) {
            return t && t.constructor === String ? (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), f(e, t.split("."), n)) : n
        }

        function g(e, t, n) {
            if (null == t) return void 0 === e ? n : e;
            if (e !== Object(e)) return void 0 === n ? e : n;
            if ("string" === typeof t) return h(e, t, n);
            if (Array.isArray(t)) return f(e, t, n);
            if ("function" !== typeof t) return n;
            var o = t(e, n);
            return "undefined" === typeof o ? n : o
        }

        function b(e) {
            if (!e || e.nodeType !== Node.ELEMENT_NODE) return 0;
            var t = +window.getComputedStyle(e).getPropertyValue("z-index");
            return t || b(e.parentNode)
        }

        var v = {"&": "&amp;", "<": "&lt;", ">": "&gt;"};

        function x(e) {
            return e.replace(/[&<>]/g, function (e) {
                return v[e] || e
            })
        }

        function y(e, t) {
            for (var n = {}, o = 0; o < t.length; o++) {
                var r = t[o];
                "undefined" !== typeof e[r] && (n[r] = e[r])
            }
            return n
        }

        function k(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "px";
            return null == e || "" === e ? void 0 : isNaN(+e) ? String(e) : "" + Number(e) + t
        }

        function w(e) {
            return (e || "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }

        function _(e) {
            return null !== e && "object" === ("undefined" === typeof e ? "undefined" : r(e))
        }

        var S = Object.freeze({
            enter: 13,
            tab: 9,
            delete: 46,
            esc: 27,
            space: 32,
            up: 38,
            down: 40,
            left: 37,
            right: 39,
            end: 35,
            home: 36,
            del: 46,
            backspace: 8,
            insert: 45,
            pageup: 33,
            pagedown: 34
        }), T = "$vuetify.icons.";

        function E(e, t) {
            return t.startsWith(T) ? h(e, t, t) : t
        }

        function C(e) {
            return Object.keys(e)
        }

        var A = /-(\w)/g, O = function (e) {
            return e.replace(A, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        };

        function P(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        function N(e, t, n) {
            return e.$slots[t] && e.$scopedSlots[t] && e.$scopedSlots[t].name ? n ? "v-slot" : "scoped" : e.$slots[t] ? "normal" : e.$scopedSlots[t] ? "scoped" : void 0
        }
    }, 8212: function (e, t, n) {
        "use strict";
        n("4fa4");
        var o = n("b64a"), r = n("80d2"), i = n("58df"), a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t["a"] = Object(i["a"])(o["a"]).extend({
            name: "v-avatar",
            functional: !0,
            props: {color: String, size: {type: [Number, String], default: 48}, tile: Boolean},
            render: function (e, t) {
                var n = t.data, i = t.props, s = t.children;
                n.staticClass = ("v-avatar " + (n.staticClass || "")).trim(), i.tile && (n.staticClass += " v-avatar--tile");
                var l = Object(r["c"])(i.size);
                return n.style = a({
                    height: l,
                    width: l
                }, n.style), e("div", o["a"].options.methods.setBackgroundColor(i.color, n), s)
            }
        })
    }, "82a7": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".application{display:-webkit-box;display:-ms-flexbox;display:flex}.application a{cursor:pointer}.application--is-rtl{direction:rtl}.application--wrap{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100vh;max-width:100%;position:relative}.theme--light.application{background:#fafafa;color:rgba(0,0,0,.87)}.theme--light.application .text--primary{color:rgba(0,0,0,.87)!important}.theme--light.application .text--secondary{color:rgba(0,0,0,.54)!important}.theme--light.application .text--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.application{background:#303030;color:#fff}.theme--dark.application .text--primary{color:#fff!important}.theme--dark.application .text--secondary{color:hsla(0,0%,100%,.7)!important}.theme--dark.application .text--disabled{color:hsla(0,0%,100%,.5)!important}@-moz-document url-prefix(){@media print{.application,.application--wrap{display:block}}}", ""])
    }, 8336: function (e, t, n) {
        "use strict";
        n("bced");
        var o = n("58df"), r = (n("2074"), n("b64a")), i = Object(o["a"])(r["a"]).extend({
                name: "v-progress-circular",
                props: {
                    button: Boolean,
                    indeterminate: Boolean,
                    rotate: {type: [Number, String], default: 0},
                    size: {type: [Number, String], default: 32},
                    width: {type: [Number, String], default: 4},
                    value: {type: [Number, String], default: 0}
                },
                computed: {
                    calculatedSize: function () {
                        return Number(this.size) + (this.button ? 8 : 0)
                    }, circumference: function () {
                        return 2 * Math.PI * this.radius
                    }, classes: function () {
                        return {
                            "v-progress-circular--indeterminate": this.indeterminate,
                            "v-progress-circular--button": this.button
                        }
                    }, normalizedValue: function () {
                        return this.value < 0 ? 0 : this.value > 100 ? 100 : parseFloat(this.value)
                    }, radius: function () {
                        return 20
                    }, strokeDashArray: function () {
                        return Math.round(1e3 * this.circumference) / 1e3
                    }, strokeDashOffset: function () {
                        return (100 - this.normalizedValue) / 100 * this.circumference + "px"
                    }, strokeWidth: function () {
                        return Number(this.width) / +this.size * this.viewBoxSize * 2
                    }, styles: function () {
                        return {height: this.calculatedSize + "px", width: this.calculatedSize + "px"}
                    }, svgStyles: function () {
                        return {transform: "rotate(" + Number(this.rotate) + "deg)"}
                    }, viewBoxSize: function () {
                        return this.radius / (1 - Number(this.width) / +this.size)
                    }
                },
                methods: {
                    genCircle: function (e, t, n) {
                        return e("circle", {
                            class: "v-progress-circular__" + t,
                            attrs: {
                                fill: "transparent",
                                cx: 2 * this.viewBoxSize,
                                cy: 2 * this.viewBoxSize,
                                r: this.radius,
                                "stroke-width": this.strokeWidth,
                                "stroke-dasharray": this.strokeDashArray,
                                "stroke-dashoffset": n
                            }
                        })
                    }, genSvg: function (e) {
                        var t = [this.indeterminate || this.genCircle(e, "underlay", 0), this.genCircle(e, "overlay", this.strokeDashOffset)];
                        return e("svg", {
                            style: this.svgStyles,
                            attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: this.viewBoxSize + " " + this.viewBoxSize + " " + 2 * this.viewBoxSize + " " + 2 * this.viewBoxSize
                            }
                        }, t)
                    }
                },
                render: function (e) {
                    var t = e("div", {staticClass: "v-progress-circular__info"}, this.$slots.default), n = this.genSvg(e);
                    return e("div", this.setTextColor(this.color, {
                        staticClass: "v-progress-circular",
                        attrs: {
                            role: "progressbar",
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-valuenow": this.indeterminate ? void 0 : this.normalizedValue
                        },
                        class: this.classes,
                        style: this.styles,
                        on: this.$listeners
                    }), [n, t])
                }
            }), a = i, s = n("2464"), l = n("c22b"), c = n("0d01"), u = n("6a18"), p = n("98a1"), d = n("80d2"),
            f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, m = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };

        function h(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var g = Object(o["a"])(r["a"], c["a"], l["a"], u["a"], Object(s["a"])("btnToggle"), Object(p["b"])("inputValue"));
        t["a"] = g.extend().extend({
            name: "v-btn",
            props: {
                activeClass: {type: String, default: "v-btn--active"},
                block: Boolean,
                depressed: Boolean,
                fab: Boolean,
                flat: Boolean,
                icon: Boolean,
                large: Boolean,
                loading: Boolean,
                outline: Boolean,
                ripple: {type: [Boolean, Object], default: null},
                round: Boolean,
                small: Boolean,
                tag: {type: String, default: "button"},
                type: {type: String, default: "button"},
                value: null
            },
            computed: {
                classes: function () {
                    var e;
                    return m((e = {"v-btn": !0}, h(e, this.activeClass, this.isActive), h(e, "v-btn--absolute", this.absolute), h(e, "v-btn--block", this.block), h(e, "v-btn--bottom", this.bottom), h(e, "v-btn--disabled", this.disabled), h(e, "v-btn--flat", this.flat), h(e, "v-btn--floating", this.fab), h(e, "v-btn--fixed", this.fixed), h(e, "v-btn--icon", this.icon), h(e, "v-btn--large", this.large), h(e, "v-btn--left", this.left), h(e, "v-btn--loader", this.loading), h(e, "v-btn--outline", this.outline), h(e, "v-btn--depressed", this.depressed && !this.flat || this.outline), h(e, "v-btn--right", this.right), h(e, "v-btn--round", this.round), h(e, "v-btn--router", this.to), h(e, "v-btn--small", this.small), h(e, "v-btn--top", this.top), e), this.themeClasses)
                }, computedRipple: function () {
                    var e = !this.icon && !this.fab || {circle: !0};
                    return !this.disabled && (null !== this.ripple ? this.ripple : e)
                }
            },
            watch: {$route: "onRouteChange"},
            methods: {
                click: function (e) {
                    !this.fab && e.detail && this.$el.blur(), this.$emit("click", e), this.btnToggle && this.toggle()
                }, genContent: function () {
                    return this.$createElement("div", {class: "v-btn__content"}, this.$slots.default)
                }, genLoader: function () {
                    return this.$createElement("span", {class: "v-btn__loading"}, this.$slots.loader || [this.$createElement(a, {
                        props: {
                            indeterminate: !0,
                            size: 23,
                            width: 2
                        }
                    })])
                }, onRouteChange: function () {
                    var e = this;
                    if (this.to && this.$refs.link) {
                        var t = "_vnode.data.class." + this.activeClass;
                        this.$nextTick(function () {
                            Object(d["j"])(e.$refs.link, t) && e.toggle()
                        })
                    }
                }
            },
            render: function (e) {
                var t = this.outline || this.flat || this.disabled ? this.setTextColor : this.setBackgroundColor,
                    n = this.generateRouteLink(this.classes), o = n.tag, r = n.data,
                    i = [this.genContent(), this.loading && this.genLoader()];
                return "button" === o && (r.attrs.type = this.type), r.attrs.value = ["string", "number"].includes(f(this.value)) ? this.value : JSON.stringify(this.value), this.btnToggle && (r.ref = "link"), e(o, t(this.color, r), i)
            }
        })
    }, 8338: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".menu-guide[data-v-1884f0ac]{width:1500px;height:100%;margin:0 auto}.menu-guide-content[data-v-1884f0ac]{position:relative;width:100%;height:100%}.goods-menu-img-box[data-v-1884f0ac]{top:260px;left:552px}.detail-menu-img-box[data-v-1884f0ac],.goods-menu-img-box[data-v-1884f0ac]{position:absolute;z-index:99;border:2px dashed rgba(253,179,19,.92);cursor:pointer}.detail-menu-img-box[data-v-1884f0ac]{right:-60px;bottom:80px}.end-message[data-v-1884f0ac]{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}", ""])
    }, 8378: function (e, t) {
        var n = e.exports = {version: "2.6.4"};
        "number" == typeof __e && (__e = n)
    }, "83a1": function (e, t) {
        e.exports = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
        }
    }, 8453: function (e, t, n) {
        "use strict";
        var o = n("c6b2"), r = n.n(o);
        r.a
    }, "84f2": function (e, t) {
        e.exports = {}
    }, "85f2": function (e, t, n) {
        e.exports = n("ec5b")
    }, "86cc": function (e, t, n) {
        var o = n("cb7c"), r = n("c69a"), i = n("6a99"), a = Object.defineProperty;
        t.f = n("9e1e") ? Object.defineProperty : function (e, t, n) {
            if (o(e), t = i(t, !0), o(n), r) try {
                return a(e, t, n)
            } catch (s) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, 8860: function (e, t, n) {
        "use strict";
        n("d0cb");
        var o = n("6a18"), r = n("94ab"), i = n("58df"), a = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t["a"] = Object(i["a"])(Object(r["b"])("list"), o["a"]).extend({
            name: "v-list",
            provide: function () {
                return {listClick: this.listClick}
            },
            props: {dense: Boolean, expand: Boolean, subheader: Boolean, threeLine: Boolean, twoLine: Boolean},
            data: function () {
                return {groups: []}
            },
            computed: {
                classes: function () {
                    return a({
                        "v-list--dense": this.dense,
                        "v-list--subheader": this.subheader,
                        "v-list--two-line": this.twoLine,
                        "v-list--three-line": this.threeLine
                    }, this.themeClasses)
                }
            },
            methods: {
                register: function (e) {
                    this.groups.push(e)
                }, unregister: function (e) {
                    var t = this.groups.findIndex(function (t) {
                        return t._uid === e._uid
                    });
                    t > -1 && this.groups.splice(t, 1)
                }, listClick: function (e) {
                    if (!this.expand) {
                        var t = !0, n = !1, o = void 0;
                        try {
                            for (var r, i = this.groups[Symbol.iterator](); !(t = (r = i.next()).done); t = !0) {
                                var a = r.value;
                                a.toggle(e)
                            }
                        } catch (s) {
                            n = !0, o = s
                        } finally {
                            try {
                                !t && i.return && i.return()
                            } finally {
                                if (n) throw o
                            }
                        }
                    }
                }
            },
            render: function (e) {
                var t = {staticClass: "v-list", class: this.classes, attrs: {role: "list"}};
                return e("div", t, [this.$slots.default])
            }
        })
    }, "8a12": function (e, t, n) {
        var o = n("da3c"), r = o.navigator;
        e.exports = r && r.userAgent || ""
    }, "8a5b": function (e, t, n) {
        e.exports = n.p + "img/popup-shop.671ef722.png"
    }, "8b97": function (e, t, n) {
        var o = n("d3f4"), r = n("cb7c"), i = function (e, t) {
            if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, o) {
                try {
                    o = n("9b43")(Function.call, n("11e9").f(Object.prototype, "__proto__").set, 2), o(e, []), t = !(e instanceof Array)
                } catch (r) {
                    t = !0
                }
                return function (e, n) {
                    return i(e, n), t ? e.__proto__ = n : o(e, n), e
                }
            }({}, !1) : void 0), check: i
        }
    }, "8bab": function (e, t, n) {
        var o = n("6e1f");
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == o(e) ? e.split("") : Object(e)
        }
    }, "8ce0": function (e, t, n) {
        var o = n("3adc"), r = n("f845");
        e.exports = n("7d95") ? function (e, t, n) {
            return o.f(e, t, r(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, "8e54": function (e, t, n) {
        e.exports = n.p + "img/detail-menu.9e0a420e.png"
    }, "8ed3": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '@-webkit-keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}@keyframes shake{59%{margin-left:0}60%,80%{margin-left:2px}70%,90%{margin-left:-2px}}.black{background-color:#000!important;border-color:#000!important}.black--text{color:#000!important;caret-color:#000!important}.white{background-color:#fff!important;border-color:#fff!important}.white--text{color:#fff!important;caret-color:#fff!important}.transparent{background-color:transparent!important;border-color:transparent!important}.transparent--text{color:transparent!important;caret-color:transparent!important}.red{background-color:#f44336!important;border-color:#f44336!important}.red--text{color:#f44336!important;caret-color:#f44336!important}.red.lighten-5{background-color:#ffebee!important;border-color:#ffebee!important}.red--text.text--lighten-5{color:#ffebee!important;caret-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important;border-color:#ffcdd2!important}.red--text.text--lighten-4{color:#ffcdd2!important;caret-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important;border-color:#ef9a9a!important}.red--text.text--lighten-3{color:#ef9a9a!important;caret-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important;border-color:#e57373!important}.red--text.text--lighten-2{color:#e57373!important;caret-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important;border-color:#ef5350!important}.red--text.text--lighten-1{color:#ef5350!important;caret-color:#ef5350!important}.red.darken-1{background-color:#e53935!important;border-color:#e53935!important}.red--text.text--darken-1{color:#e53935!important;caret-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important;border-color:#d32f2f!important}.red--text.text--darken-2{color:#d32f2f!important;caret-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important;border-color:#c62828!important}.red--text.text--darken-3{color:#c62828!important;caret-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important;border-color:#b71c1c!important}.red--text.text--darken-4{color:#b71c1c!important;caret-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important;border-color:#ff8a80!important}.red--text.text--accent-1{color:#ff8a80!important;caret-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important;border-color:#ff5252!important}.red--text.text--accent-2{color:#ff5252!important;caret-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important;border-color:#ff1744!important}.red--text.text--accent-3{color:#ff1744!important;caret-color:#ff1744!important}.red.accent-4{background-color:#d50000!important;border-color:#d50000!important}.red--text.text--accent-4{color:#d50000!important;caret-color:#d50000!important}.pink{background-color:#e91e63!important;border-color:#e91e63!important}.pink--text{color:#e91e63!important;caret-color:#e91e63!important}.pink.lighten-5{background-color:#fce4ec!important;border-color:#fce4ec!important}.pink--text.text--lighten-5{color:#fce4ec!important;caret-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important;border-color:#f8bbd0!important}.pink--text.text--lighten-4{color:#f8bbd0!important;caret-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important;border-color:#f48fb1!important}.pink--text.text--lighten-3{color:#f48fb1!important;caret-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important;border-color:#f06292!important}.pink--text.text--lighten-2{color:#f06292!important;caret-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important;border-color:#ec407a!important}.pink--text.text--lighten-1{color:#ec407a!important;caret-color:#ec407a!important}.pink.darken-1{background-color:#d81b60!important;border-color:#d81b60!important}.pink--text.text--darken-1{color:#d81b60!important;caret-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important;border-color:#c2185b!important}.pink--text.text--darken-2{color:#c2185b!important;caret-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important;border-color:#ad1457!important}.pink--text.text--darken-3{color:#ad1457!important;caret-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important;border-color:#880e4f!important}.pink--text.text--darken-4{color:#880e4f!important;caret-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important;border-color:#ff80ab!important}.pink--text.text--accent-1{color:#ff80ab!important;caret-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important;border-color:#ff4081!important}.pink--text.text--accent-2{color:#ff4081!important;caret-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important;border-color:#f50057!important}.pink--text.text--accent-3{color:#f50057!important;caret-color:#f50057!important}.pink.accent-4{background-color:#c51162!important;border-color:#c51162!important}.pink--text.text--accent-4{color:#c51162!important;caret-color:#c51162!important}.purple{background-color:#9c27b0!important;border-color:#9c27b0!important}.purple--text{color:#9c27b0!important;caret-color:#9c27b0!important}.purple.lighten-5{background-color:#f3e5f5!important;border-color:#f3e5f5!important}.purple--text.text--lighten-5{color:#f3e5f5!important;caret-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important;border-color:#e1bee7!important}.purple--text.text--lighten-4{color:#e1bee7!important;caret-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important;border-color:#ce93d8!important}.purple--text.text--lighten-3{color:#ce93d8!important;caret-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important;border-color:#ba68c8!important}.purple--text.text--lighten-2{color:#ba68c8!important;caret-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important;border-color:#ab47bc!important}.purple--text.text--lighten-1{color:#ab47bc!important;caret-color:#ab47bc!important}.purple.darken-1{background-color:#8e24aa!important;border-color:#8e24aa!important}.purple--text.text--darken-1{color:#8e24aa!important;caret-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important;border-color:#7b1fa2!important}.purple--text.text--darken-2{color:#7b1fa2!important;caret-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important;border-color:#6a1b9a!important}.purple--text.text--darken-3{color:#6a1b9a!important;caret-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important;border-color:#4a148c!important}.purple--text.text--darken-4{color:#4a148c!important;caret-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important;border-color:#ea80fc!important}.purple--text.text--accent-1{color:#ea80fc!important;caret-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important;border-color:#e040fb!important}.purple--text.text--accent-2{color:#e040fb!important;caret-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important;border-color:#d500f9!important}.purple--text.text--accent-3{color:#d500f9!important;caret-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important;border-color:#a0f!important}.purple--text.text--accent-4{color:#a0f!important;caret-color:#a0f!important}.deep-purple{background-color:#673ab7!important;border-color:#673ab7!important}.deep-purple--text{color:#673ab7!important;caret-color:#673ab7!important}.deep-purple.lighten-5{background-color:#ede7f6!important;border-color:#ede7f6!important}.deep-purple--text.text--lighten-5{color:#ede7f6!important;caret-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important;border-color:#d1c4e9!important}.deep-purple--text.text--lighten-4{color:#d1c4e9!important;caret-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important;border-color:#b39ddb!important}.deep-purple--text.text--lighten-3{color:#b39ddb!important;caret-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important;border-color:#9575cd!important}.deep-purple--text.text--lighten-2{color:#9575cd!important;caret-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important;border-color:#7e57c2!important}.deep-purple--text.text--lighten-1{color:#7e57c2!important;caret-color:#7e57c2!important}.deep-purple.darken-1{background-color:#5e35b1!important;border-color:#5e35b1!important}.deep-purple--text.text--darken-1{color:#5e35b1!important;caret-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important;border-color:#512da8!important}.deep-purple--text.text--darken-2{color:#512da8!important;caret-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important;border-color:#4527a0!important}.deep-purple--text.text--darken-3{color:#4527a0!important;caret-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important;border-color:#311b92!important}.deep-purple--text.text--darken-4{color:#311b92!important;caret-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important;border-color:#b388ff!important}.deep-purple--text.text--accent-1{color:#b388ff!important;caret-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important;border-color:#7c4dff!important}.deep-purple--text.text--accent-2{color:#7c4dff!important;caret-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important;border-color:#651fff!important}.deep-purple--text.text--accent-3{color:#651fff!important;caret-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important;border-color:#6200ea!important}.deep-purple--text.text--accent-4{color:#6200ea!important;caret-color:#6200ea!important}.indigo{background-color:#3f51b5!important;border-color:#3f51b5!important}.indigo--text{color:#3f51b5!important;caret-color:#3f51b5!important}.indigo.lighten-5{background-color:#e8eaf6!important;border-color:#e8eaf6!important}.indigo--text.text--lighten-5{color:#e8eaf6!important;caret-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important;border-color:#c5cae9!important}.indigo--text.text--lighten-4{color:#c5cae9!important;caret-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important;border-color:#9fa8da!important}.indigo--text.text--lighten-3{color:#9fa8da!important;caret-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important;border-color:#7986cb!important}.indigo--text.text--lighten-2{color:#7986cb!important;caret-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important;border-color:#5c6bc0!important}.indigo--text.text--lighten-1{color:#5c6bc0!important;caret-color:#5c6bc0!important}.indigo.darken-1{background-color:#3949ab!important;border-color:#3949ab!important}.indigo--text.text--darken-1{color:#3949ab!important;caret-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important;border-color:#303f9f!important}.indigo--text.text--darken-2{color:#303f9f!important;caret-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important;border-color:#283593!important}.indigo--text.text--darken-3{color:#283593!important;caret-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important;border-color:#1a237e!important}.indigo--text.text--darken-4{color:#1a237e!important;caret-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important;border-color:#8c9eff!important}.indigo--text.text--accent-1{color:#8c9eff!important;caret-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important;border-color:#536dfe!important}.indigo--text.text--accent-2{color:#536dfe!important;caret-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important;border-color:#3d5afe!important}.indigo--text.text--accent-3{color:#3d5afe!important;caret-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important;border-color:#304ffe!important}.indigo--text.text--accent-4{color:#304ffe!important;caret-color:#304ffe!important}.blue{background-color:#2196f3!important;border-color:#2196f3!important}.blue--text{color:#2196f3!important;caret-color:#2196f3!important}.blue.lighten-5{background-color:#e3f2fd!important;border-color:#e3f2fd!important}.blue--text.text--lighten-5{color:#e3f2fd!important;caret-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important;border-color:#bbdefb!important}.blue--text.text--lighten-4{color:#bbdefb!important;caret-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important;border-color:#90caf9!important}.blue--text.text--lighten-3{color:#90caf9!important;caret-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important;border-color:#64b5f6!important}.blue--text.text--lighten-2{color:#64b5f6!important;caret-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important;border-color:#42a5f5!important}.blue--text.text--lighten-1{color:#42a5f5!important;caret-color:#42a5f5!important}.blue.darken-1{background-color:#1e88e5!important;border-color:#1e88e5!important}.blue--text.text--darken-1{color:#1e88e5!important;caret-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important;border-color:#1976d2!important}.blue--text.text--darken-2{color:#1976d2!important;caret-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important;border-color:#1565c0!important}.blue--text.text--darken-3{color:#1565c0!important;caret-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important;border-color:#0d47a1!important}.blue--text.text--darken-4{color:#0d47a1!important;caret-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important;border-color:#82b1ff!important}.blue--text.text--accent-1{color:#82b1ff!important;caret-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important;border-color:#448aff!important}.blue--text.text--accent-2{color:#448aff!important;caret-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important;border-color:#2979ff!important}.blue--text.text--accent-3{color:#2979ff!important;caret-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important;border-color:#2962ff!important}.blue--text.text--accent-4{color:#2962ff!important;caret-color:#2962ff!important}.light-blue{background-color:#03a9f4!important;border-color:#03a9f4!important}.light-blue--text{color:#03a9f4!important;caret-color:#03a9f4!important}.light-blue.lighten-5{background-color:#e1f5fe!important;border-color:#e1f5fe!important}.light-blue--text.text--lighten-5{color:#e1f5fe!important;caret-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important;border-color:#b3e5fc!important}.light-blue--text.text--lighten-4{color:#b3e5fc!important;caret-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important;border-color:#81d4fa!important}.light-blue--text.text--lighten-3{color:#81d4fa!important;caret-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important;border-color:#4fc3f7!important}.light-blue--text.text--lighten-2{color:#4fc3f7!important;caret-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important;border-color:#29b6f6!important}.light-blue--text.text--lighten-1{color:#29b6f6!important;caret-color:#29b6f6!important}.light-blue.darken-1{background-color:#039be5!important;border-color:#039be5!important}.light-blue--text.text--darken-1{color:#039be5!important;caret-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important;border-color:#0288d1!important}.light-blue--text.text--darken-2{color:#0288d1!important;caret-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important;border-color:#0277bd!important}.light-blue--text.text--darken-3{color:#0277bd!important;caret-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important;border-color:#01579b!important}.light-blue--text.text--darken-4{color:#01579b!important;caret-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important;border-color:#80d8ff!important}.light-blue--text.text--accent-1{color:#80d8ff!important;caret-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important;border-color:#40c4ff!important}.light-blue--text.text--accent-2{color:#40c4ff!important;caret-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important;border-color:#00b0ff!important}.light-blue--text.text--accent-3{color:#00b0ff!important;caret-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important;border-color:#0091ea!important}.light-blue--text.text--accent-4{color:#0091ea!important;caret-color:#0091ea!important}.cyan{background-color:#00bcd4!important;border-color:#00bcd4!important}.cyan--text{color:#00bcd4!important;caret-color:#00bcd4!important}.cyan.lighten-5{background-color:#e0f7fa!important;border-color:#e0f7fa!important}.cyan--text.text--lighten-5{color:#e0f7fa!important;caret-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important;border-color:#b2ebf2!important}.cyan--text.text--lighten-4{color:#b2ebf2!important;caret-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important;border-color:#80deea!important}.cyan--text.text--lighten-3{color:#80deea!important;caret-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important;border-color:#4dd0e1!important}.cyan--text.text--lighten-2{color:#4dd0e1!important;caret-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important;border-color:#26c6da!important}.cyan--text.text--lighten-1{color:#26c6da!important;caret-color:#26c6da!important}.cyan.darken-1{background-color:#00acc1!important;border-color:#00acc1!important}.cyan--text.text--darken-1{color:#00acc1!important;caret-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important;border-color:#0097a7!important}.cyan--text.text--darken-2{color:#0097a7!important;caret-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important;border-color:#00838f!important}.cyan--text.text--darken-3{color:#00838f!important;caret-color:#00838f!important}.cyan.darken-4{background-color:#006064!important;border-color:#006064!important}.cyan--text.text--darken-4{color:#006064!important;caret-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important;border-color:#84ffff!important}.cyan--text.text--accent-1{color:#84ffff!important;caret-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important;border-color:#18ffff!important}.cyan--text.text--accent-2{color:#18ffff!important;caret-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important;border-color:#00e5ff!important}.cyan--text.text--accent-3{color:#00e5ff!important;caret-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important;border-color:#00b8d4!important}.cyan--text.text--accent-4{color:#00b8d4!important;caret-color:#00b8d4!important}.teal{background-color:#009688!important;border-color:#009688!important}.teal--text{color:#009688!important;caret-color:#009688!important}.teal.lighten-5{background-color:#e0f2f1!important;border-color:#e0f2f1!important}.teal--text.text--lighten-5{color:#e0f2f1!important;caret-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important;border-color:#b2dfdb!important}.teal--text.text--lighten-4{color:#b2dfdb!important;caret-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important;border-color:#80cbc4!important}.teal--text.text--lighten-3{color:#80cbc4!important;caret-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important;border-color:#4db6ac!important}.teal--text.text--lighten-2{color:#4db6ac!important;caret-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important;border-color:#26a69a!important}.teal--text.text--lighten-1{color:#26a69a!important;caret-color:#26a69a!important}.teal.darken-1{background-color:#00897b!important;border-color:#00897b!important}.teal--text.text--darken-1{color:#00897b!important;caret-color:#00897b!important}.teal.darken-2{background-color:#00796b!important;border-color:#00796b!important}.teal--text.text--darken-2{color:#00796b!important;caret-color:#00796b!important}.teal.darken-3{background-color:#00695c!important;border-color:#00695c!important}.teal--text.text--darken-3{color:#00695c!important;caret-color:#00695c!important}.teal.darken-4{background-color:#004d40!important;border-color:#004d40!important}.teal--text.text--darken-4{color:#004d40!important;caret-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important;border-color:#a7ffeb!important}.teal--text.text--accent-1{color:#a7ffeb!important;caret-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important;border-color:#64ffda!important}.teal--text.text--accent-2{color:#64ffda!important;caret-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important;border-color:#1de9b6!important}.teal--text.text--accent-3{color:#1de9b6!important;caret-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important;border-color:#00bfa5!important}.teal--text.text--accent-4{color:#00bfa5!important;caret-color:#00bfa5!important}.green{background-color:#4caf50!important;border-color:#4caf50!important}.green--text{color:#4caf50!important;caret-color:#4caf50!important}.green.lighten-5{background-color:#e8f5e9!important;border-color:#e8f5e9!important}.green--text.text--lighten-5{color:#e8f5e9!important;caret-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important;border-color:#c8e6c9!important}.green--text.text--lighten-4{color:#c8e6c9!important;caret-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important;border-color:#a5d6a7!important}.green--text.text--lighten-3{color:#a5d6a7!important;caret-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important;border-color:#81c784!important}.green--text.text--lighten-2{color:#81c784!important;caret-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important;border-color:#66bb6a!important}.green--text.text--lighten-1{color:#66bb6a!important;caret-color:#66bb6a!important}.green.darken-1{background-color:#43a047!important;border-color:#43a047!important}.green--text.text--darken-1{color:#43a047!important;caret-color:#43a047!important}.green.darken-2{background-color:#388e3c!important;border-color:#388e3c!important}.green--text.text--darken-2{color:#388e3c!important;caret-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important;border-color:#2e7d32!important}.green--text.text--darken-3{color:#2e7d32!important;caret-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important;border-color:#1b5e20!important}.green--text.text--darken-4{color:#1b5e20!important;caret-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important;border-color:#b9f6ca!important}.green--text.text--accent-1{color:#b9f6ca!important;caret-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important;border-color:#69f0ae!important}.green--text.text--accent-2{color:#69f0ae!important;caret-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important;border-color:#00e676!important}.green--text.text--accent-3{color:#00e676!important;caret-color:#00e676!important}.green.accent-4{background-color:#00c853!important;border-color:#00c853!important}.green--text.text--accent-4{color:#00c853!important;caret-color:#00c853!important}.light-green{background-color:#8bc34a!important;border-color:#8bc34a!important}.light-green--text{color:#8bc34a!important;caret-color:#8bc34a!important}.light-green.lighten-5{background-color:#f1f8e9!important;border-color:#f1f8e9!important}.light-green--text.text--lighten-5{color:#f1f8e9!important;caret-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important;border-color:#dcedc8!important}.light-green--text.text--lighten-4{color:#dcedc8!important;caret-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important;border-color:#c5e1a5!important}.light-green--text.text--lighten-3{color:#c5e1a5!important;caret-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important;border-color:#aed581!important}.light-green--text.text--lighten-2{color:#aed581!important;caret-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important;border-color:#9ccc65!important}.light-green--text.text--lighten-1{color:#9ccc65!important;caret-color:#9ccc65!important}.light-green.darken-1{background-color:#7cb342!important;border-color:#7cb342!important}.light-green--text.text--darken-1{color:#7cb342!important;caret-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important;border-color:#689f38!important}.light-green--text.text--darken-2{color:#689f38!important;caret-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important;border-color:#558b2f!important}.light-green--text.text--darken-3{color:#558b2f!important;caret-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important;border-color:#33691e!important}.light-green--text.text--darken-4{color:#33691e!important;caret-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important;border-color:#ccff90!important}.light-green--text.text--accent-1{color:#ccff90!important;caret-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important;border-color:#b2ff59!important}.light-green--text.text--accent-2{color:#b2ff59!important;caret-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important;border-color:#76ff03!important}.light-green--text.text--accent-3{color:#76ff03!important;caret-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important;border-color:#64dd17!important}.light-green--text.text--accent-4{color:#64dd17!important;caret-color:#64dd17!important}.lime{background-color:#cddc39!important;border-color:#cddc39!important}.lime--text{color:#cddc39!important;caret-color:#cddc39!important}.lime.lighten-5{background-color:#f9fbe7!important;border-color:#f9fbe7!important}.lime--text.text--lighten-5{color:#f9fbe7!important;caret-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important;border-color:#f0f4c3!important}.lime--text.text--lighten-4{color:#f0f4c3!important;caret-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important;border-color:#e6ee9c!important}.lime--text.text--lighten-3{color:#e6ee9c!important;caret-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important;border-color:#dce775!important}.lime--text.text--lighten-2{color:#dce775!important;caret-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important;border-color:#d4e157!important}.lime--text.text--lighten-1{color:#d4e157!important;caret-color:#d4e157!important}.lime.darken-1{background-color:#c0ca33!important;border-color:#c0ca33!important}.lime--text.text--darken-1{color:#c0ca33!important;caret-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important;border-color:#afb42b!important}.lime--text.text--darken-2{color:#afb42b!important;caret-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important;border-color:#9e9d24!important}.lime--text.text--darken-3{color:#9e9d24!important;caret-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important;border-color:#827717!important}.lime--text.text--darken-4{color:#827717!important;caret-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important;border-color:#f4ff81!important}.lime--text.text--accent-1{color:#f4ff81!important;caret-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important;border-color:#eeff41!important}.lime--text.text--accent-2{color:#eeff41!important;caret-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important;border-color:#c6ff00!important}.lime--text.text--accent-3{color:#c6ff00!important;caret-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important;border-color:#aeea00!important}.lime--text.text--accent-4{color:#aeea00!important;caret-color:#aeea00!important}.yellow{background-color:#ffeb3b!important;border-color:#ffeb3b!important}.yellow--text{color:#ffeb3b!important;caret-color:#ffeb3b!important}.yellow.lighten-5{background-color:#fffde7!important;border-color:#fffde7!important}.yellow--text.text--lighten-5{color:#fffde7!important;caret-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important;border-color:#fff9c4!important}.yellow--text.text--lighten-4{color:#fff9c4!important;caret-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important;border-color:#fff59d!important}.yellow--text.text--lighten-3{color:#fff59d!important;caret-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important;border-color:#fff176!important}.yellow--text.text--lighten-2{color:#fff176!important;caret-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important;border-color:#ffee58!important}.yellow--text.text--lighten-1{color:#ffee58!important;caret-color:#ffee58!important}.yellow.darken-1{background-color:#fdd835!important;border-color:#fdd835!important}.yellow--text.text--darken-1{color:#fdd835!important;caret-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important;border-color:#fbc02d!important}.yellow--text.text--darken-2{color:#fbc02d!important;caret-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important;border-color:#f9a825!important}.yellow--text.text--darken-3{color:#f9a825!important;caret-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important;border-color:#f57f17!important}.yellow--text.text--darken-4{color:#f57f17!important;caret-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important;border-color:#ffff8d!important}.yellow--text.text--accent-1{color:#ffff8d!important;caret-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important;border-color:#ff0!important}.yellow--text.text--accent-2{color:#ff0!important;caret-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important;border-color:#ffea00!important}.yellow--text.text--accent-3{color:#ffea00!important;caret-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important;border-color:#ffd600!important}.yellow--text.text--accent-4{color:#ffd600!important;caret-color:#ffd600!important}.amber{background-color:#ffc107!important;border-color:#ffc107!important}.amber--text{color:#ffc107!important;caret-color:#ffc107!important}.amber.lighten-5{background-color:#fff8e1!important;border-color:#fff8e1!important}.amber--text.text--lighten-5{color:#fff8e1!important;caret-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important;border-color:#ffecb3!important}.amber--text.text--lighten-4{color:#ffecb3!important;caret-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important;border-color:#ffe082!important}.amber--text.text--lighten-3{color:#ffe082!important;caret-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important;border-color:#ffd54f!important}.amber--text.text--lighten-2{color:#ffd54f!important;caret-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important;border-color:#ffca28!important}.amber--text.text--lighten-1{color:#ffca28!important;caret-color:#ffca28!important}.amber.darken-1{background-color:#ffb300!important;border-color:#ffb300!important}.amber--text.text--darken-1{color:#ffb300!important;caret-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important;border-color:#ffa000!important}.amber--text.text--darken-2{color:#ffa000!important;caret-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important;border-color:#ff8f00!important}.amber--text.text--darken-3{color:#ff8f00!important;caret-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important;border-color:#ff6f00!important}.amber--text.text--darken-4{color:#ff6f00!important;caret-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important;border-color:#ffe57f!important}.amber--text.text--accent-1{color:#ffe57f!important;caret-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important;border-color:#ffd740!important}.amber--text.text--accent-2{color:#ffd740!important;caret-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important;border-color:#ffc400!important}.amber--text.text--accent-3{color:#ffc400!important;caret-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important;border-color:#ffab00!important}.amber--text.text--accent-4{color:#ffab00!important;caret-color:#ffab00!important}.orange{background-color:#ff9800!important;border-color:#ff9800!important}.orange--text{color:#ff9800!important;caret-color:#ff9800!important}.orange.lighten-5{background-color:#fff3e0!important;border-color:#fff3e0!important}.orange--text.text--lighten-5{color:#fff3e0!important;caret-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important;border-color:#ffe0b2!important}.orange--text.text--lighten-4{color:#ffe0b2!important;caret-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important;border-color:#ffcc80!important}.orange--text.text--lighten-3{color:#ffcc80!important;caret-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important;border-color:#ffb74d!important}.orange--text.text--lighten-2{color:#ffb74d!important;caret-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important;border-color:#ffa726!important}.orange--text.text--lighten-1{color:#ffa726!important;caret-color:#ffa726!important}.orange.darken-1{background-color:#fb8c00!important;border-color:#fb8c00!important}.orange--text.text--darken-1{color:#fb8c00!important;caret-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important;border-color:#f57c00!important}.orange--text.text--darken-2{color:#f57c00!important;caret-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important;border-color:#ef6c00!important}.orange--text.text--darken-3{color:#ef6c00!important;caret-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important;border-color:#e65100!important}.orange--text.text--darken-4{color:#e65100!important;caret-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important;border-color:#ffd180!important}.orange--text.text--accent-1{color:#ffd180!important;caret-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important;border-color:#ffab40!important}.orange--text.text--accent-2{color:#ffab40!important;caret-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important;border-color:#ff9100!important}.orange--text.text--accent-3{color:#ff9100!important;caret-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important;border-color:#ff6d00!important}.orange--text.text--accent-4{color:#ff6d00!important;caret-color:#ff6d00!important}.deep-orange{background-color:#ff5722!important;border-color:#ff5722!important}.deep-orange--text{color:#ff5722!important;caret-color:#ff5722!important}.deep-orange.lighten-5{background-color:#fbe9e7!important;border-color:#fbe9e7!important}.deep-orange--text.text--lighten-5{color:#fbe9e7!important;caret-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important;border-color:#ffccbc!important}.deep-orange--text.text--lighten-4{color:#ffccbc!important;caret-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important;border-color:#ffab91!important}.deep-orange--text.text--lighten-3{color:#ffab91!important;caret-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important;border-color:#ff8a65!important}.deep-orange--text.text--lighten-2{color:#ff8a65!important;caret-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important;border-color:#ff7043!important}.deep-orange--text.text--lighten-1{color:#ff7043!important;caret-color:#ff7043!important}.deep-orange.darken-1{background-color:#f4511e!important;border-color:#f4511e!important}.deep-orange--text.text--darken-1{color:#f4511e!important;caret-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important;border-color:#e64a19!important}.deep-orange--text.text--darken-2{color:#e64a19!important;caret-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important;border-color:#d84315!important}.deep-orange--text.text--darken-3{color:#d84315!important;caret-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important;border-color:#bf360c!important}.deep-orange--text.text--darken-4{color:#bf360c!important;caret-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important;border-color:#ff9e80!important}.deep-orange--text.text--accent-1{color:#ff9e80!important;caret-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important;border-color:#ff6e40!important}.deep-orange--text.text--accent-2{color:#ff6e40!important;caret-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important;border-color:#ff3d00!important}.deep-orange--text.text--accent-3{color:#ff3d00!important;caret-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important;border-color:#dd2c00!important}.deep-orange--text.text--accent-4{color:#dd2c00!important;caret-color:#dd2c00!important}.brown{background-color:#795548!important;border-color:#795548!important}.brown--text{color:#795548!important;caret-color:#795548!important}.brown.lighten-5{background-color:#efebe9!important;border-color:#efebe9!important}.brown--text.text--lighten-5{color:#efebe9!important;caret-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important;border-color:#d7ccc8!important}.brown--text.text--lighten-4{color:#d7ccc8!important;caret-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important;border-color:#bcaaa4!important}.brown--text.text--lighten-3{color:#bcaaa4!important;caret-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important;border-color:#a1887f!important}.brown--text.text--lighten-2{color:#a1887f!important;caret-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important;border-color:#8d6e63!important}.brown--text.text--lighten-1{color:#8d6e63!important;caret-color:#8d6e63!important}.brown.darken-1{background-color:#6d4c41!important;border-color:#6d4c41!important}.brown--text.text--darken-1{color:#6d4c41!important;caret-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important;border-color:#5d4037!important}.brown--text.text--darken-2{color:#5d4037!important;caret-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important;border-color:#4e342e!important}.brown--text.text--darken-3{color:#4e342e!important;caret-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important;border-color:#3e2723!important}.brown--text.text--darken-4{color:#3e2723!important;caret-color:#3e2723!important}.blue-grey{background-color:#607d8b!important;border-color:#607d8b!important}.blue-grey--text{color:#607d8b!important;caret-color:#607d8b!important}.blue-grey.lighten-5{background-color:#eceff1!important;border-color:#eceff1!important}.blue-grey--text.text--lighten-5{color:#eceff1!important;caret-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important;border-color:#cfd8dc!important}.blue-grey--text.text--lighten-4{color:#cfd8dc!important;caret-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important;border-color:#b0bec5!important}.blue-grey--text.text--lighten-3{color:#b0bec5!important;caret-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important;border-color:#90a4ae!important}.blue-grey--text.text--lighten-2{color:#90a4ae!important;caret-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important;border-color:#78909c!important}.blue-grey--text.text--lighten-1{color:#78909c!important;caret-color:#78909c!important}.blue-grey.darken-1{background-color:#546e7a!important;border-color:#546e7a!important}.blue-grey--text.text--darken-1{color:#546e7a!important;caret-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important;border-color:#455a64!important}.blue-grey--text.text--darken-2{color:#455a64!important;caret-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important;border-color:#37474f!important}.blue-grey--text.text--darken-3{color:#37474f!important;caret-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important;border-color:#263238!important}.blue-grey--text.text--darken-4{color:#263238!important;caret-color:#263238!important}.grey{background-color:#9e9e9e!important;border-color:#9e9e9e!important}.grey--text{color:#9e9e9e!important;caret-color:#9e9e9e!important}.grey.lighten-5{background-color:#fafafa!important;border-color:#fafafa!important}.grey--text.text--lighten-5{color:#fafafa!important;caret-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important;border-color:#f5f5f5!important}.grey--text.text--lighten-4{color:#f5f5f5!important;caret-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important;border-color:#eee!important}.grey--text.text--lighten-3{color:#eee!important;caret-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important;border-color:#e0e0e0!important}.grey--text.text--lighten-2{color:#e0e0e0!important;caret-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important;border-color:#bdbdbd!important}.grey--text.text--lighten-1{color:#bdbdbd!important;caret-color:#bdbdbd!important}.grey.darken-1{background-color:#757575!important;border-color:#757575!important}.grey--text.text--darken-1{color:#757575!important;caret-color:#757575!important}.grey.darken-2{background-color:#616161!important;border-color:#616161!important}.grey--text.text--darken-2{color:#616161!important;caret-color:#616161!important}.grey.darken-3{background-color:#424242!important;border-color:#424242!important}.grey--text.text--darken-3{color:#424242!important;caret-color:#424242!important}.grey.darken-4{background-color:#212121!important;border-color:#212121!important}.grey--text.text--darken-4{color:#212121!important;caret-color:#212121!important}.shades.black{background-color:#000!important;border-color:#000!important}.shades--text.text--black{color:#000!important;caret-color:#000!important}.shades.white{background-color:#fff!important;border-color:#fff!important}.shades--text.text--white{color:#fff!important;caret-color:#fff!important}.shades.transparent{background-color:transparent!important;border-color:transparent!important}.shades--text.text--transparent{color:transparent!important;caret-color:transparent!important}.elevation-0{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important;box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.elevation-1{-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)!important}.elevation-2{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)!important}.elevation-3{-webkit-box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important;box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)!important}.elevation-4{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)!important}.elevation-5{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)!important}.elevation-6{-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important;box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)!important}.elevation-7{-webkit-box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important;box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)!important}.elevation-8{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)!important}.elevation-9{-webkit-box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important;box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)!important}.elevation-10{-webkit-box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important;box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)!important}.elevation-11{-webkit-box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important;box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)!important}.elevation-12{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important}.elevation-13{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important;box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)!important}.elevation-14{-webkit-box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)!important}.elevation-15{-webkit-box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important;box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)!important}.elevation-16{-webkit-box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important;box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)!important}.elevation-17{-webkit-box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important;box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)!important}.elevation-18{-webkit-box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important;box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)!important}.elevation-19{-webkit-box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important;box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)!important}.elevation-20{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important;box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)!important}.elevation-21{-webkit-box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important;box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)!important}.elevation-22{-webkit-box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important;box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)!important}.elevation-23{-webkit-box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important;box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)!important}.elevation-24{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)!important}html{-webkit-box-sizing:border-box;box-sizing:border-box;overflow-y:scroll;-webkit-text-size-adjust:100%}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}*{background-repeat:no-repeat;padding:0;margin:0}audio:not([controls]){display:none;height:0}hr{overflow:visible}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}summary{display:list-item}small{font-size:80%}[hidden],template{display:none}abbr[title]{border-bottom:1px dotted;text-decoration:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}code,kbd,pre,samp{font-family:monospace,monospace}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}input{border-radius:0}[role=button],[type=button],[type=reset],[type=submit],button{cursor:pointer}[disabled]{cursor:default}[type=number]{width:auto}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}textarea{overflow:auto;resize:vertical}button,input,optgroup,select,textarea{font:inherit}optgroup{font-weight:700}button{overflow:visible}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:0;padding:0}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button:-moz-focusring{outline:0;border:0}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}button,select{text-transform:none}button,input,select,textarea{background-color:transparent;border-style:none;color:inherit}select{-moz-appearance:none;-webkit-appearance:none}select::-ms-expand{display:none}select::-ms-value{color:currentColor}legend{border:0;color:inherit;display:table;max-width:100%;white-space:normal}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}img{border-style:none}progress{vertical-align:baseline}svg:not(:root){overflow:hidden}audio,canvas,progress,video{display:inline-block}@media screen{[hidden~=screen]{display:inherit}[hidden~=screen]:not(:active):not(:focus):not(:target){position:absolute!important;clip:rect(0 0 0 0)!important}}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-disabled]{cursor:default}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}.bottom-sheet-transition-enter,.bottom-sheet-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.carousel-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.carousel-transition-leave,.carousel-transition-leave-to{position:absolute;top:0}.carousel-reverse-transition-enter,.carousel-transition-leave,.carousel-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.carousel-reverse-transition-leave,.carousel-reverse-transition-leave-to{position:absolute;top:0;-webkit-transform:translate(100%);transform:translate(100%)}.dialog-transition-enter,.dialog-transition-leave-to{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}.dialog-transition-enter-to,.dialog-transition-leave{opacity:1}.dialog-bottom-transition-enter,.dialog-bottom-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-reverse-transition-enter-active,.picker-reverse-transition-leave-active,.picker-transition-enter-active,.picker-transition-leave-active{-webkit-transition:.3s cubic-bezier(0,0,.2,1);transition:.3s cubic-bezier(0,0,.2,1)}.picker-reverse-transition-enter,.picker-reverse-transition-leave-to,.picker-transition-enter,.picker-transition-leave-to{opacity:0}.picker-reverse-transition-leave,.picker-reverse-transition-leave-active,.picker-reverse-transition-leave-to,.picker-transition-leave,.picker-transition-leave-active,.picker-transition-leave-to{position:absolute!important}.picker-transition-enter{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-reverse-transition-enter,.picker-transition-leave-to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.picker-reverse-transition-leave-to{-webkit-transform:translateY(100%);transform:translateY(100%)}.picker-title-transition-enter-to,.picker-title-transition-leave{-webkit-transform:translate(0);transform:translate(0)}.picker-title-transition-enter{-webkit-transform:translate(-100%);transform:translate(-100%)}.picker-title-transition-leave-to{opacity:0;-webkit-transform:translate(100%);transform:translate(100%)}.picker-title-transition-leave,.picker-title-transition-leave-active,.picker-title-transition-leave-to{position:absolute!important}.tab-transition-enter{-webkit-transform:translate(100%);transform:translate(100%)}.tab-transition-leave,.tab-transition-leave-active{position:absolute;top:0}.tab-transition-leave-to{position:absolute}.tab-reverse-transition-enter,.tab-transition-leave-to{-webkit-transform:translate(-100%);transform:translate(-100%)}.tab-reverse-transition-leave,.tab-reverse-transition-leave-to{top:0;position:absolute;-webkit-transform:translate(100%);transform:translate(100%)}.expand-transition-enter-active,.expand-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.expand-x-transition-enter-active,.expand-x-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.expand-x-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scale-transition-enter-active,.scale-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.scale-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scale-transition-enter,.scale-transition-leave,.scale-transition-leave-to{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.message-transition-enter-active,.message-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.message-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.message-transition-enter,.message-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.message-transition-leave,.message-transition-leave-active{position:absolute}.slide-y-transition-enter-active,.slide-y-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-y-transition-enter,.slide-y-transition-leave-to{opacity:0;-webkit-transform:translateY(-15px);transform:translateY(-15px)}.slide-y-reverse-transition-enter-active,.slide-y-reverse-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-y-reverse-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-y-reverse-transition-enter,.slide-y-reverse-transition-leave-to{opacity:0;-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-transition-enter-active,.scroll-y-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-y-transition-enter,.scroll-y-transition-leave-to{opacity:0}.scroll-y-transition-enter{-webkit-transform:translateY(-15px);transform:translateY(-15px)}.scroll-y-transition-leave-to{-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-reverse-transition-enter-active,.scroll-y-reverse-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-y-reverse-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-y-reverse-transition-enter,.scroll-y-reverse-transition-leave-to{opacity:0}.scroll-y-reverse-transition-enter{-webkit-transform:translateY(15px);transform:translateY(15px)}.scroll-y-reverse-transition-leave-to{-webkit-transform:translateY(-15px);transform:translateY(-15px)}.scroll-x-transition-enter-active,.scroll-x-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-x-transition-enter,.scroll-x-transition-leave-to{opacity:0}.scroll-x-transition-enter{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.scroll-x-transition-leave-to{-webkit-transform:translateX(15px);transform:translateX(15px)}.scroll-x-reverse-transition-enter-active,.scroll-x-reverse-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.scroll-x-reverse-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.scroll-x-reverse-transition-enter,.scroll-x-reverse-transition-leave-to{opacity:0}.scroll-x-reverse-transition-enter{-webkit-transform:translateX(15px);transform:translateX(15px)}.scroll-x-reverse-transition-leave-to{-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-transition-enter-active,.slide-x-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-x-transition-enter,.slide-x-transition-leave-to{opacity:0;-webkit-transform:translateX(-15px);transform:translateX(-15px)}.slide-x-reverse-transition-enter-active,.slide-x-reverse-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.slide-x-reverse-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.slide-x-reverse-transition-enter,.slide-x-reverse-transition-leave-to{opacity:0;-webkit-transform:translateX(15px);transform:translateX(15px)}.fade-transition-enter-active,.fade-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.fade-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.fade-transition-enter,.fade-transition-leave-to{opacity:0}.fab-transition-enter-active,.fab-transition-leave-active{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.fab-transition-move{-webkit-transition:-webkit-transform .6s;transition:-webkit-transform .6s;transition:transform .6s;transition:transform .6s,-webkit-transform .6s}.fab-transition-enter,.fab-transition-leave-to{-webkit-transform:scale(0) rotate(-45deg);transform:scale(0) rotate(-45deg)}.blockquote{padding:16px 0 16px 24px;font-size:18px;font-weight:300}code,kbd{display:inline-block;border-radius:3px;white-space:pre-wrap;font-size:85%;font-weight:900}code:after,code:before,kbd:after,kbd:before{content:"\\A0";letter-spacing:-1px}code{background-color:#f5f5f5;color:#bd4147;-webkit-box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}kbd{background:#616161;color:#fff}html{font-size:14px;overflow-x:hidden;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:rgba(0,0,0,0)}.application{font-family:Roboto,sans-serif;line-height:1.5}::-ms-clear,::-ms-reveal{display:none}ol,ul{padding-left:24px}.display-4{font-size:112px!important;font-weight:300;line-height:1!important;letter-spacing:-.04em!important;font-family:Roboto,sans-serif!important}.display-3{font-size:56px!important;line-height:1.35!important;letter-spacing:-.02em!important}.display-2,.display-3{font-weight:400;font-family:Roboto,sans-serif!important}.display-2{font-size:45px!important;line-height:48px!important;letter-spacing:normal!important}.display-1{font-size:34px!important;line-height:40px!important}.display-1,.headline{font-weight:400;letter-spacing:normal!important;font-family:Roboto,sans-serif!important}.headline{font-size:24px!important;line-height:32px!important}.title{font-size:20px!important;font-weight:500;line-height:1!important;letter-spacing:.02em!important;font-family:Roboto,sans-serif!important}.subheading{font-size:16px!important;font-weight:400}.body-2{font-weight:500}.body-1,.body-2{font-size:14px!important}.body-1,.caption{font-weight:400}.caption{font-size:12px!important}p{margin-bottom:16px}@media only print{.hidden-print-only{display:none!important}}@media only screen{.hidden-screen-only{display:none!important}}@media only screen and (max-width:599px){.hidden-xs-only{display:none!important}}@media only screen and (min-width:600px) and (max-width:959px){.hidden-sm-only{display:none!important}}@media only screen and (max-width:959px){.hidden-sm-and-down{display:none!important}}@media only screen and (min-width:600px){.hidden-sm-and-up{display:none!important}}@media only screen and (min-width:960px) and (max-width:1263px){.hidden-md-only{display:none!important}}@media only screen and (max-width:1263px){.hidden-md-and-down{display:none!important}}@media only screen and (min-width:960px){.hidden-md-and-up{display:none!important}}@media only screen and (min-width:1264px) and (max-width:1903px){.hidden-lg-only{display:none!important}}@media only screen and (max-width:1903px){.hidden-lg-and-down{display:none!important}}@media only screen and (min-width:1264px){.hidden-lg-and-up{display:none!important}}@media only screen and (min-width:1904px){.hidden-xl-only{display:none!important}}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-hidden{overflow-y:hidden}.right{float:right!important}.left{float:left!important}.ma-auto{margin-right:auto!important;margin-left:auto!important}.ma-auto,.my-auto{margin-top:auto!important;margin-bottom:auto!important}.mx-auto{margin-left:auto!important;margin-right:auto!important}.mt-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.mb-auto{margin-bottom:auto!important}.ml-auto{margin-left:auto!important}.ma-0{margin:0 0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.mx-0{margin-left:0!important;margin-right:0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.pa-0{padding:0 0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.px-0{padding-left:0!important;padding-right:0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.ma-1{margin:4px 4px!important}.my-1{margin-top:4px!important;margin-bottom:4px!important}.mx-1{margin-left:4px!important;margin-right:4px!important}.mt-1{margin-top:4px!important}.mr-1{margin-right:4px!important}.mb-1{margin-bottom:4px!important}.ml-1{margin-left:4px!important}.pa-1{padding:4px 4px!important}.py-1{padding-top:4px!important;padding-bottom:4px!important}.px-1{padding-left:4px!important;padding-right:4px!important}.pt-1{padding-top:4px!important}.pr-1{padding-right:4px!important}.pb-1{padding-bottom:4px!important}.pl-1{padding-left:4px!important}.ma-2{margin:8px 8px!important}.my-2{margin-top:8px!important;margin-bottom:8px!important}.mx-2{margin-left:8px!important;margin-right:8px!important}.mt-2{margin-top:8px!important}.mr-2{margin-right:8px!important}.mb-2{margin-bottom:8px!important}.ml-2{margin-left:8px!important}.pa-2{padding:8px 8px!important}.py-2{padding-top:8px!important;padding-bottom:8px!important}.px-2{padding-left:8px!important;padding-right:8px!important}.pt-2{padding-top:8px!important}.pr-2{padding-right:8px!important}.pb-2{padding-bottom:8px!important}.pl-2{padding-left:8px!important}.ma-3{margin:16px 16px!important}.my-3{margin-top:16px!important;margin-bottom:16px!important}.mx-3{margin-left:16px!important;margin-right:16px!important}.mt-3{margin-top:16px!important}.mr-3{margin-right:16px!important}.mb-3{margin-bottom:16px!important}.ml-3{margin-left:16px!important}.pa-3{padding:16px 16px!important}.py-3{padding-top:16px!important;padding-bottom:16px!important}.px-3{padding-left:16px!important;padding-right:16px!important}.pt-3{padding-top:16px!important}.pr-3{padding-right:16px!important}.pb-3{padding-bottom:16px!important}.pl-3{padding-left:16px!important}.ma-4{margin:24px 24px!important}.my-4{margin-top:24px!important;margin-bottom:24px!important}.mx-4{margin-left:24px!important;margin-right:24px!important}.mt-4{margin-top:24px!important}.mr-4{margin-right:24px!important}.mb-4{margin-bottom:24px!important}.ml-4{margin-left:24px!important}.pa-4{padding:24px 24px!important}.py-4{padding-top:24px!important;padding-bottom:24px!important}.px-4{padding-left:24px!important;padding-right:24px!important}.pt-4{padding-top:24px!important}.pr-4{padding-right:24px!important}.pb-4{padding-bottom:24px!important}.pl-4{padding-left:24px!important}.ma-5{margin:48px 48px!important}.my-5{margin-top:48px!important;margin-bottom:48px!important}.mx-5{margin-left:48px!important;margin-right:48px!important}.mt-5{margin-top:48px!important}.mr-5{margin-right:48px!important}.mb-5{margin-bottom:48px!important}.ml-5{margin-left:48px!important}.pa-5{padding:48px 48px!important}.py-5{padding-top:48px!important;padding-bottom:48px!important}.px-5{padding-left:48px!important;padding-right:48px!important}.pt-5{padding-top:48px!important}.pr-5{padding-right:48px!important}.pb-5{padding-bottom:48px!important}.pl-5{padding-left:48px!important}@media (min-width:0){.text-xs-left{text-align:left!important}.text-xs-center{text-align:center!important}.text-xs-right{text-align:right!important}.text-xs-justify{text-align:justify!important}}@media (min-width:600px){.text-sm-left{text-align:left!important}.text-sm-center{text-align:center!important}.text-sm-right{text-align:right!important}.text-sm-justify{text-align:justify!important}}@media (min-width:960px){.text-md-left{text-align:left!important}.text-md-center{text-align:center!important}.text-md-right{text-align:right!important}.text-md-justify{text-align:justify!important}}@media (min-width:1264px){.text-lg-left{text-align:left!important}.text-lg-center{text-align:center!important}.text-lg-right{text-align:right!important}.text-lg-justify{text-align:justify!important}}@media (min-width:1904px){.text-xl-left{text-align:left!important}.text-xl-center{text-align:center!important}.text-xl-right{text-align:right!important}.text-xl-justify{text-align:justify!important}}.font-weight-thin{font-weight:100!important}.font-weight-light{font-weight:300!important}.font-weight-regular{font-weight:400!important}.font-weight-medium{font-weight:500!important}.font-weight-bold{font-weight:700!important}.font-weight-black{font-weight:900!important}.font-italic{font-style:italic!important}.text-capitalize{text-transform:capitalize!important}.text-lowercase{text-transform:lowercase!important}.text-none{text-transform:none!important}.text-uppercase{text-transform:uppercase!important}.text-no-wrap,.text-truncate{white-space:nowrap!important}.text-truncate{overflow:hidden!important;text-overflow:ellipsis!important;line-height:1.1!important}.transition-fast-out-slow-in{-webkit-transition:.3s cubic-bezier(.4,0,.2,1)!important;transition:.3s cubic-bezier(.4,0,.2,1)!important}.transition-linear-out-slow-in{-webkit-transition:.3s cubic-bezier(0,0,.2,1)!important;transition:.3s cubic-bezier(0,0,.2,1)!important}.transition-fast-out-linear-in{-webkit-transition:.3s cubic-bezier(.4,0,1,1)!important;transition:.3s cubic-bezier(.4,0,1,1)!important}.transition-ease-in-out{-webkit-transition:.3s cubic-bezier(.4,0,.6,1)!important;transition:.3s cubic-bezier(.4,0,.6,1)!important}.transition-fast-in-fast-out{-webkit-transition:.3s cubic-bezier(.25,.8,.25,1)!important;transition:.3s cubic-bezier(.25,.8,.25,1)!important}.transition-swing{-webkit-transition:.3s cubic-bezier(.25,.8,.5,1)!important;transition:.3s cubic-bezier(.25,.8,.5,1)!important}', ""])
    }, "8f5d": function (e, t, n) {
        "use strict";
        var o = n("2b44"), r = n.n(o);
        r.a
    }, 9093: function (e, t, n) {
        var o = n("ce10"), r = n("e11e").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return o(e, r)
        }
    }, "90b9": function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "u", function () {
                return x
            }), n.d(t, "w", function () {
                return y
            }), n.d(t, "v", function () {
                return k
            }), n.d(t, "O", function () {
                return w
            }), n.d(t, "k", function () {
                return _
            }), n.d(t, "b", function () {
                return S
            }), n.d(t, "P", function () {
                return T
            }), n.d(t, "s", function () {
                return E
            }), n.d(t, "J", function () {
                return C
            }), n.d(t, "h", function () {
                return A
            }), n.d(t, "t", function () {
                return O
            }), n.d(t, "l", function () {
                return P
            }), n.d(t, "e", function () {
                return N
            }), n.d(t, "V", function () {
                return re
            }), n.d(t, "U", function () {
                return ie
            }), n.d(t, "m", function () {
                return ae
            }), n.d(t, "n", function () {
                return se
            }), n.d(t, "q", function () {
                return le
            }), n.d(t, "M", function () {
                return ce
            }), n.d(t, "T", function () {
                return ue
            }), n.d(t, "G", function () {
                return pe
            }), n.d(t, "N", function () {
                return de
            }), n.d(t, "H", function () {
                return fe
            }), n.d(t, "D", function () {
                return me
            }), n.d(t, "E", function () {
                return he
            }), n.d(t, "C", function () {
                return be
            }), n.d(t, "F", function () {
                return ve
            }), n.d(t, "K", function () {
                return xe
            }), n.d(t, "c", function () {
                return ye
            }), n.d(t, "o", function () {
                return ke
            }), n.d(t, "g", function () {
                return Se
            }), n.d(t, "r", function () {
                return Te
            }), n.d(t, "i", function () {
                return Ee
            }), n.d(t, "j", function () {
                return Ce
            }), n.d(t, "I", function () {
                return Ae
            }), n.d(t, "L", function () {
                return Oe
            }), n.d(t, "x", function () {
                return Pe
            }), n.d(t, "d", function () {
                return Ne
            }), n.d(t, "y", function () {
                return Le
            }), n.d(t, "B", function () {
                return Ie
            }), n.d(t, "f", function () {
                return Fe
            }), n.d(t, "A", function () {
                return Me
            }), n.d(t, "Q", function () {
                return De
            }), n.d(t, "p", function () {
                return Re
            }), n.d(t, "a", function () {
                return je
            }), n.d(t, "z", function () {
                return $e
            }), n.d(t, "S", function () {
                return ze
            }), n.d(t, "R", function () {
                return Ue
            });
            n("7f7f"), n("96cf");
            var o = n("3b8d"), r = (n("6762"), n("2fdb"), n("768b")),
                i = (n("4917"), n("28a5"), n("f559"), n("a481"), n("5d73")), a = n.n(i),
                s = (n("386d"), n("6c7b"), n("e814")), l = n.n(s), c = n("795b"), u = n.n(c),
                p = (n("6b54"), n("c832")), d = n.n(p), f = n("72bf"), m = n.n(f), h = n("9a36"), g = n("f121"),
                b = e.storage.local, v = window.navigator, x = function () {
                    return !1
                }, y = function (e) {
                    return void 0 === e || null === e
                }, k = function (e) {
                    return "function" === typeof e
                }, w = function (e, t) {
                    return Math.floor(Math.random() * (t - e + 1) + e)
                }, _ = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], r = [];
                    if (e <= 0) return r;
                    if (!o && Math.abs(n - t) < e) return r;
                    while (1) {
                        if (r.length >= e) break;
                        var i = w(t, n);
                        o ? r.push(i) : -1 === r.indexOf(i) && r.push(i)
                    }
                    return r
                }, S = function (e) {
                    return new u.a(function (t) {
                        setTimeout(t, e)
                    })
                }, T = function (e, t) {
                    return S(w(e, t))
                }, E = function () {
                    return (new Date).getTime()
                }, C = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    try {
                        var n = l()(e);
                        return isNaN(n) ? t : n
                    } catch (o) {
                        return console.error("[error] parse integer:", o), t
                    }
                }, A = function (e, t, n) {
                    var o = d()(e, t);
                    return void 0 === n ? o : o || n
                }, O = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.tapes,
                        n = void 0 === t ? [] : t, o = e.min, r = void 0 === o ? 3 : o, i = e.max, a = void 0 === i ? 6 : i,
                        s = n ? n.length : 0;
                    if (s < r) return !1;
                    var l = s < a ? s : a, c = n.join(""), u = new Array(l).fill(0).join("");
                    return -1 !== c.search(u)
                }, P = function (e) {
                    return g["a"].shopeeDomainDict[e]
                }, N = function (e, t) {
                    if (!e) return [];
                    var n = ["shopeeSiteDict", e], o = t ? [] : {};
                    return t && n.push(t), A(g["a"], n.join("."), o)
                }, L = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = t.code, o = t.type,
                        r = e || location && location.href || "", i = (n || "").toUpperCase(), s = N(i, o), l = !0, c = !1,
                        u = void 0;
                    try {
                        for (var p, d = a()(s); !(l = (p = d.next()).done); l = !0) {
                            var f = p.value;
                            if (r.indexOf(f) > -1) return !("main" === o && r.indexOf(".".concat(f)) > -1)
                        }
                    } catch (m) {
                        c = !0, u = m
                    } finally {
                        try {
                            l || null == d.return || d.return()
                        } finally {
                            if (c) throw u
                        }
                    }
                    return !1
                }, I = function (e) {
                    return L(e, {code: "TW", type: "main"})
                }, F = function (e) {
                    return L(e, {code: "TW", type: "seller"})
                }, M = function (e) {
                    return I(e) || F(e)
                }, D = function (e) {
                    return L(e, {code: "SG", type: "main"})
                }, R = function (e) {
                    return L(e, {code: "SG", type: "seller"})
                }, j = function (e) {
                    return D(e) || R(e)
                }, B = function (e) {
                    return L(e, {code: "MY", type: "main"})
                }, $ = function (e) {
                    return L(e, {code: "MY", type: "seller"})
                }, z = function (e) {
                    return B(e) || $(e)
                }, U = function (e) {
                    return L(e, {code: "PH", type: "main"})
                }, H = function (e) {
                    return L(e, {code: "PH", type: "seller"})
                }, Y = function (e) {
                    return U(e) || H(e)
                }, G = function (e) {
                    return L(e, {code: "ID", type: "main"})
                }, V = function (e) {
                    return L(e, {code: "ID", type: "seller"})
                }, W = function (e) {
                    return G(e) || V(e)
                }, K = function (e) {
                    return L(e, {code: "TH", type: "main"})
                }, q = function (e) {
                    return L(e, {code: "TH", type: "seller"})
                }, X = function (e) {
                    return K(e) || q(e)
                }, Q = function (e) {
                    return L(e, {code: "VN", type: "main"})
                }, J = function (e) {
                    return L(e, {code: "VN", type: "seller"})
                }, Z = function (e) {
                    return Q(e) || J(e)
                }, ee = function (e) {
                    return L(e, {code: "BR", type: "main"})
                }, te = function (e) {
                    return L(e, {code: "BR", type: "seller"})
                }, ne = function (e) {
                    return ee(e) || te(e)
                }, oe = function (e) {
                    return I(e) || D(e) || B(e) || U(e) || G(e) || K(e) || Q(e) || ee(e)
                }, re = function (e) {
                    return F(e) || R(e) || $(e) || H(e) || V(e) || q(e) || J(e) || te(e)
                }, ie = function (e) {
                    return M(e) || j(e) || z(e) || Y(e) || W(e) || X(e) || Z(e) || ne(e)
                }, ae = function () {
                    if (!ie()) return "";
                    var e = location, t = e.protocol, n = e.host;
                    if (oe(n)) return "".concat(t, "//").concat(n);
                    var o = n.replace("seller.", "").replace("sellertw.", "").replace("banhang.", "");
                    if (o.startsWith("shopeesz.com") ? o = "tw.".concat(o) : o.startsWith("shopee.cn") && (o = "tw.shopeesz.com"), o.indexOf(".shopee.cn") > -1) {
                        var r = o.split(".shopee.cn")[0];
                        o = "".concat(r, ".xiapibuy.com")
                    }
                    return "".concat(t, "//").concat(o)
                }, se = function () {
                    if (!ie()) return "";
                    var e = location, t = e.protocol, n = e.host;
                    if (re(n)) return "".concat(t, "//").concat(n);
                    var o = n;
                    if (I(n) && (o = n.indexOf("shopeesz.com") > -1 ? "sellertw.shopeesz.com" : "seller.".concat(n)), D(n) && (o = "seller.shopee.sg"), B(n) && (o = "seller.shopee.com.my"), U(n) && (o = "seller.shopee.ph"), G(n) && (o = "seller.shopee.co.id"), K(n) && (o = "seller.shopee.co.th"), Q(n) && (o = "banhang.shopee.vn"), ee(n) && (o = "seller.shopee.com.br"), n.indexOf(".xiapibuy.com") > -1) {
                        var r = n.split(".xiapibuy.com")[0];
                        return "".concat(t, "//seller.").concat(r, ".shopee.cn")
                    }
                    return "".concat(t, "//").concat(o)
                }, le = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.shopId,
                        o = void 0 === n ? "" : n, r = t.shopeeMainOrigin, i = t.shopeeSellerOrigin, a = r || ae(),
                        s = i || se(), l = {};
                    return a && (l.mainUrl = a, o && (l.shopUrl = "".concat(a, "/shop/").concat(o), l.shopFollowersUrl = "".concat(a, "/shop/").concat(o, "/followers/"), l.shopFollowingUrl = "".concat(a, "/shop/").concat(o, "/following/"))), s && (l.sellerCenterUrl = s, l.myProductsUrl = "".concat(s, "/portal/product/list/all"), l.mySalesUrl = "".concat(s, "/portal/sale?type=toship"), l.myChatUrl = "".concat(s, "/webchat/conversations"), l.myCategoriesUrl = "".concat(s, "/portal/category"), l.myMarketActivitiesUrl = "".concat(s, "/portal/marketing"), l.myShopSettingUrl = "".concat(s, "/portal/settings/shop/profile"), l.myIncomeUrl = "".concat(s, "/portal/finance/income"), l.myWalletUrl = "".concat(s, "/portal/finance/wallet/cards"), l.myDataUrl = "".concat(s, "/datacenter/dashboard?ADTAG=center")), l
                }, ce = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    if (ie(e)) {
                        var t, n = /\/shop\/([0-9]+)\/following/, o = /\/shop\/([0-9]+)\/followers/;
                        return (t = e.match(o)) ? {type: "followers", shopId: t[1]} : (t = e.match(n)) ? {
                            type: "following",
                            shopId: t[1]
                        } : null
                    }
                }, ue = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = Math.floor(e.length / 2);
                    return t ? "".concat(e.substr(0, t), "***") : e
                }, pe = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t = t || location.protocol, e && e.startsWith("//") ? t + e : e
                }, de = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e;
                    return -1 !== t.indexOf("?") && (t = t.substring(0, t.indexOf("?"))), t
                }, fe = function (e) {
                    var t = de(e), n = t.split("-i.")[1];
                    if (!n) {
                        var o = "", i = "";
                        if (e.indexOf("/product/") > -1 && (e.indexOf("shopee") > -1 || e.indexOf("xiapibuy") > -1)) {
                            var a = new URL(e), s = a.pathname, l = s.split("product/")[1];
                            o = l.split("/")[0], i = l.split("/")[1]
                        }
                        return {shopId: o, itemId: i}
                    }
                    var c = n.split("."), u = Object(r["a"])(c, 2), p = u[0], d = u[1];
                    return -1 !== d.indexOf("/") && (d = d.split("/")[0]), {shopId: p, itemId: d}
                }, me = function (e) {
                    return "".concat(ae()).concat(e)
                }, he = function (e) {
                    return "".concat(se()).concat(e)
                }, ge = function () {
                    return "world" === Object({
                        VUE_APP_PROXY_IP: "https://api.keyouyun.com",
                        NODE_ENV: "production",
                        BASE_URL: "/"
                    }).VUE_APP_VERSION_TYPE
                }, be = function (e) {
                    return ge() ? "".concat(g["a"].api.erpWorldUrl).concat(e) : "".concat(g["a"].api.erpUrl).concat(e)
                }, ve = function (e) {
                    return ge() ? "".concat(g["a"].api.tuiWorldUrl).concat(e) : "".concat(g["a"].api.tuiUrl).concat(e)
                }, xe = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return console.error("parseJSON error:", n), t
                    }
                }, ye = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return "".concat(e.toUpperCase(), "_").concat(t)
                }, ke = function (e) {
                    return M(e) ? "TW" : j(e) ? "SG" : z(e) ? "MY" : Y(e) ? "PH" : W(e) ? "ID" : X(e) ? "TH" : Z(e) ? "VN" : ne(e) ? "BR" : ""
                }, we = function () {
                    var e = location.hostname, t = /\.([^.]*)$/g, n = "";
                    return e.replace(t, function () {
                        n = arguments.length <= 1 ? void 0 : arguments[1]
                    }), n
                }, _e = function () {
                    return v.languages && v.languages[0] || v.language || v.browserLanguage || v.userLanguage || v.systemLanguage
                }, Se = function () {
                    var e = (_e() || "").toUpperCase();
                    return e && "ZH-CN" !== e && "ZH" !== e ? -1 !== e.indexOf("ZH") ? h["u"] : h["p"] : h["t"]
                }, Te = function (e) {
                    return "shopee" === e ? ke() : "1688" === e || "aliExpress" === e || "taobao" === e || "tmall" === e || "pinDuoDuo" === e ? "common" : "lazada" === e ? we() : void 0
                }, Ee = function (e) {
                    return h["Qb"][e] || -1
                }, Ce = function (e) {
                    var t = Te(e);
                    return t && "common" !== t && h["Sb"][t] || -1
                }, Ae = function (e) {
                    if (/\/product\/\w+\/\w+\/?/.test(e)) {
                        var t = e.match(/\/product\/(\w+)\/(\w+)\/?/);
                        if (!t) return;
                        return {shopId: t[1], itemId: t[2]}
                    }
                    var n = e.match(/-i\.\w+\.\w+\/?/);
                    if (!n) return null;
                    var o = n[0], r = o.match(/-i\.(\w+)\.(\w+)\/?/);
                    return r ? {shopId: r[1], itemId: r[2]} : void 0
                }, Oe = function (e) {
                    if (!e) return {};
                    var t = e.indexOf("?");
                    return -1 === t ? {} : m.a.parse(e.substring(t + 1))
                }, Pe = location.host.includes(".yangkeduo.com"), Ne = function (e) {
                    return me("/shop/".concat(e))
                }, Le = function (e) {
                    return e || (e = location.href), e.indexOf("shopee.cn") > -1
                }, Ie = function (e) {
                    return e || (e = location.href), e.indexOf("xiapibuy.com") > -1
                }, Fe = function () {
                    var e = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                        var n, o, r;
                        return regeneratorRuntime.wrap(function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, b.get(h["jc"]);
                                case 2:
                                    if (n = e.sent, o = n[h["jc"]], r = void 0 === o ? {} : o, t) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", r);
                                case 7:
                                    return e.abrupt("return", r[t]);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this)
                    }));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), Me = function (e) {
                    var t = /^(http:|https:)?\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/;
                    return t.test(e)
                }, De = function (e) {
                    return e.indexOf("shopee.tw") > -1 || e.indexOf("xiapibuy.com") > -1 ? "TW" : e.indexOf("shopee.co.id") > -1 ? "ID" : e.indexOf("shopee.co.my") > -1 || e.indexOf("shopee.com.my") > -1 ? "MY" : e.indexOf("shopee.co.sg") > -1 || e.indexOf("shopee.sg") > -1 ? "SG" : e.indexOf("shopee.co.th") > -1 ? "TH" : e.indexOf("shopee.co.vn") > -1 || e.indexOf("shopee.vn") > -1 ? "VN" : e.indexOf("shopee.co.ph") > -1 || e.indexOf("shopee.ph") > -1 ? "PH" : "TW"
                }, Re = function (e) {
                    var t = {
                        TW: {in: "https://xiapi.xiapibuy.com", out: "https://shopee.tw"},
                        ID: {in: "https://id.xiapibuy.com", out: "https://shopee.co.id"},
                        MY: {in: "https://my.xiapibuy.com", out: "https://shopee.com.my"},
                        SG: {in: "https://sg.xiapibuy.com", out: "https://shopee.sg"},
                        TH: {in: "https://th.xiapibuy.com", out: "https://shopee.co.th"},
                        VN: {in: "https://vn.xiapibuy.com", out: "https://shopee.vn"},
                        PH: {in: "https://br.xiapibuy.com", out: "https://shopee.com.br"}
                    };
                    return t[e] || t["TW"]
                };

            function je(e) {
                return Be.apply(this, arguments)
            }

            function Be() {
                return Be = Object(o["a"])(regeneratorRuntime.mark(function e(t) {
                    var n, o, r, i, a = arguments;
                    return regeneratorRuntime.wrap(function (e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                for (e.prev = 0, n = a.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = a[r];
                                return e.next = 4, t.apply(void 0, o);
                            case 4:
                                return i = e.sent, e.abrupt("return", [null, i]);
                            case 8:
                                return e.prev = 8, e.t0 = e["catch"](0), console.log("err", e.t0), e.abrupt("return", [e.t0]);
                            case 12:
                            case"end":
                                return e.stop()
                        }
                    }, e, this, [[0, 8]])
                })), Be.apply(this, arguments)
            }

            var $e = function (e) {
                return "undefined" === typeof e
            };

            function ze(e, t) {
                var n = new DataView(e), o = new TextDecoder(t), r = o.decode(n);
                return r
            }

            function Ue(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t
            }
        }).call(this, n("9845"))
    }, "91e1": function (e, t, n) {
        e.exports = n.p + "img/shopee-goodslist.2b94a3b9.png"
    }, 9224: function (e) {
        e.exports = {
            name: "shopee-fans",
            version: "5.5.3",
            description: "A chrome extension for the shop.",
            private: !0,
            scripts: {
                start: "yarn serve:server-pure-test",
                "serve:server": "yarn install && vue-cli-service build --mode development --watch",
                "serve:server-pure": "cross-env VUE_APP_SERVER_TYPE=pure yarn serve:server",
                "serve:server-pure-test": "cross-env VUE_APP_SERVER_TYPE=pure VUE_APP_PROXY_IP=http://test.api.keyouyun.com yarn serve:server",
                "serve:server-pure-prod": "cross-env VUE_APP_SERVER_TYPE=pure VUE_APP_PROXY_IP=https://api.keyouyun.com yarn serve:server",
                "serve:devtool": "vue-devtools",
                serve: "npm-run-all --parallel serve:server serve:devtool",
                "serve:world": "cross-env VUE_APP_VERSION_TYPE=world yarn serve",
                build: "yarn install && cross-env VUE_APP_PROXY_IP=https://api.keyouyun.com vue-cli-service build",
                "build:test": "yarn install && cross-env VUE_APP_PROXY_IP=http://test.api.keyouyun.com vue-cli-service build",
                "build:world": "cross-env VUE_APP_VERSION_TYPE=world yarn build",
                lint: "vue-cli-service lint",
                "lint:fix": "vue-cli-service lint --fix",
                translate: "chmod 755 ./bin/translate && ./bin/translate/cli.js"
            },
            dependencies: {
                arrive: "^2.4.1",
                axios: "^0.18.0",
                "blueimp-md5": "^2.17.0",
                "chart.js": "^2.9.3",
                "compare-versions": "^3.6.0",
                dayjs: "^1.8.11",
                he: "^1.2.0",
                jquery: "^3.3.1",
                "js-cookie": "^2.2.0",
                localforage: "^1.7.3",
                "lodash.debounce": "^4.0.8",
                "lodash.get": "^4.4.2",
                "lodash.truncate": "^4.4.2",
                nanoid: "^2.0.1",
                "query-string": "^6.2.0",
                "sockjs-client": "^1.0.0",
                sweetalert2: "^9.8.2",
                "uuid-random": "^1.3.0",
                vue: "^2.6.6",
                "vue-chartjs": "^3.5.0",
                "vue-clipboard2": "^0.3.1",
                "vue-i18n": "^8.11.2",
                "vue-infinite-scroll": "^2.0.2",
                "vue-notifyjs": "^0.4.3",
                "vue2-datepicker": "^3.6.2",
                vuetify: "^1.5.16",
                vuex: "^3.1.0",
                "vuex-webextensions": "^1.2.6",
                "webextension-polyfill": "^0.5.0",
                "webstomp-client": "^1.2.6"
            },
            devDependencies: {
                "@vue/cli-plugin-babel": "^3.4.0",
                "@vue/cli-plugin-eslint": "^3.4.0",
                "@vue/cli-service": "^3.4.0",
                "@vue/devtools": "^4.1.5",
                "@vue/eslint-config-standard": "^4.0.0",
                "babel-eslint": "^10.0.1",
                "cross-env": "^6.0.3",
                eslint: "^5.8.0",
                "eslint-plugin-vue": "^5.1.0",
                flat: "^5.0.0",
                "imports-loader": "^0.8.0",
                "lint-staged": "^7.2.2",
                "node-sass": "^4.11.0",
                "npm-run-all": "^4.1.5",
                "sass-loader": "^7.1.0",
                stylus: "^0.54.5",
                "stylus-loader": "^3.0.2",
                "vue-cli-plugin-browser-extension": "^0.19.0",
                "vue-template-compiler": "^2.6.6"
            },
            gitHooks: {"pre-commit": "lint-staged"},
            "lint-staged": {"*.js": ["vue-cli-service lint", "git add"], "*.vue": ["vue-cli-service lint", "git add"]}
        }
    }, "931d": function (e) {
        e.exports = {
            setting: "設置",
            closeFeatureLabel: "是否關閉'下載圖片/視頻'功能",
            imageDownloadTip: "圖片下載：支持蝦皮、1688、淘寶、天貓、拼多多、速賣通、Lazada等平台",
            videoDownloadTip: "視頻下載：支持 1688、天貓、速賣通、拼多多等平台"
        }
    }, 9331: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '.v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{-webkit-transition:none;transition:none}.v-ripple__animation--in{-webkit-transition:opacity .1s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1);transition:opacity .1s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1);transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1),-webkit-transform .25s cubic-bezier(.4,0,.2,1)}.v-ripple__animation--out{-webkit-transition:opacity .3s cubic-bezier(.4,0,.2,1);transition:opacity .3s cubic-bezier(.4,0,.2,1)}.theme--light.v-btn{color:rgba(0,0,0,.87)}.theme--light.v-btn.v-btn--disabled,.theme--light.v-btn.v-btn--disabled .v-btn__loading,.theme--light.v-btn.v-btn--disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--light.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:rgba(0,0,0,.12)!important}.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#f5f5f5}.theme--dark.v-btn{color:#fff}.theme--dark.v-btn.v-btn--disabled,.theme--dark.v-btn.v-btn--disabled .v-btn__loading,.theme--dark.v-btn.v-btn--disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat):not(.v-btn--outline){background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn:not(.v-btn--icon):not(.v-btn--flat){background-color:#212121}.v-btn{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:2px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:36px;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto;font-size:14px;font-weight:500;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:6px 8px;min-width:88px;outline:0;text-transform:uppercase;text-decoration:none;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1),color 1ms;transition:.3s cubic-bezier(.25,.8,.5,1),color 1ms;position:relative;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-btn:before{border-radius:inherit;color:inherit;content:"";position:absolute;left:0;top:0;height:100%;opacity:.12;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-btn{padding:0 16px}.v-btn--active,.v-btn:focus,.v-btn:hover{position:relative}.v-btn--active:before,.v-btn:focus:before,.v-btn:hover:before{background-color:currentColor}@media (hover:none){.v-btn:hover:before{background-color:transparent}}.v-btn__content{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:0 auto;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap;width:inherit}.v-btn--small{font-size:13px;height:28px;padding:0 8px}.v-btn--large{font-size:15px;height:44px;padding:0 32px}.v-btn .v-btn__content .v-icon{color:inherit}.v-btn:not(.v-btn--depressed):not(.v-btn--flat){will-change:box-shadow;-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-btn--icon{background:transparent;-webkit-box-shadow:none!important;box-shadow:none!important;border-radius:50%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-width:0;width:36px}.v-btn--icon.v-btn--small{width:28px}.v-btn--icon.v-btn--large{width:44px}.v-btn--floating,.v-btn--icon:before{border-radius:50%}.v-btn--floating{min-width:0;height:56px;width:56px;padding:0}.v-btn--floating.v-btn--absolute,.v-btn--floating.v-btn--fixed{z-index:4}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat){-webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12);box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-btn--floating:not(.v-btn--depressed):not(.v-btn--flat):active{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.v-btn--floating .v-btn__content{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;margin:0;height:100%}.v-btn--floating:after{border-radius:50%}.v-btn--floating .v-btn__content>:not(:only-child){-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-btn--floating .v-btn__content>:not(:only-child):first-child{opacity:1}.v-btn--floating .v-btn__content>:not(:only-child):last-child{opacity:0;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.v-btn--floating .v-btn__content>:not(:only-child):first-child,.v-btn--floating .v-btn__content>:not(:only-child):last-child{-webkit-backface-visibility:hidden;position:absolute;left:0;top:0}.v-btn--floating.v-btn--active .v-btn__content>:not(:only-child):first-child{opacity:0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-btn--floating.v-btn--active .v-btn__content>:not(:only-child):last-child{opacity:1;-webkit-transform:rotate(0);transform:rotate(0)}.v-btn--floating .v-icon{height:inherit;width:inherit}.v-btn--floating.v-btn--small{height:40px;width:40px}.v-btn--floating.v-btn--small .v-icon{font-size:18px}.v-btn--floating.v-btn--large{height:72px;width:72px}.v-btn--floating.v-btn--large .v-icon{font-size:30px}.v-btn--reverse .v-btn__content{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.v-btn--reverse.v-btn--column .v-btn__content{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.v-btn--absolute,.v-btn--fixed{margin:0}.v-btn.v-btn--absolute{position:absolute}.v-btn.v-btn--fixed{position:fixed}.v-btn--top:not(.v-btn--absolute){top:16px}.v-btn--top.v-btn--absolute{top:-28px}.v-btn--top.v-btn--absolute.v-btn--small{top:-20px}.v-btn--top.v-btn--absolute.v-btn--large{top:-36px}.v-btn--bottom:not(.v-btn--absolute){bottom:16px}.v-btn--bottom.v-btn--absolute{bottom:-28px}.v-btn--bottom.v-btn--absolute.v-btn--small{bottom:-20px}.v-btn--bottom.v-btn--absolute.v-btn--large{bottom:-36px}.v-btn--left{left:16px}.v-btn--right{right:16px}.v-btn.v-btn--disabled{-webkit-box-shadow:none!important;box-shadow:none!important;pointer-events:none}.v-btn:not(.v-btn--disabled):not(.v-btn--floating):not(.v-btn--icon) .v-btn__content .v-icon{-webkit-transition:none;transition:none}.v-btn--icon{padding:0}.v-btn--loader{pointer-events:none}.v-btn--loader .v-btn__content{opacity:0}.v-btn__loading{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__loading .v-icon--left{margin-right:1rem;line-height:inherit}.v-btn__loading .v-icon--right{margin-left:1rem;line-height:inherit}.v-btn.v-btn--outline{border:1px solid currentColor;background:transparent!important}.v-btn.v-btn--outline,.v-btn.v-btn--outline:hover{-webkit-box-shadow:none;box-shadow:none}.v-btn--block{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:6px 0;width:100%}.v-btn--round,.v-btn--round:after{border-radius:28px}.v-btn:not(.v-btn--outline).accent,.v-btn:not(.v-btn--outline).error,.v-btn:not(.v-btn--outline).info,.v-btn:not(.v-btn--outline).primary,.v-btn:not(.v-btn--outline).secondary,.v-btn:not(.v-btn--outline).success,.v-btn:not(.v-btn--outline).warning{color:#fff}', ""])
    }, 9393: function (e) {
        e.exports = {noUpdate: "ไม่มีการอัปเดต", moreData: "โหลดข้อมูลได้มากขึ้น", noData: "ไม่มีข้อมูลอื่น ๆ !"}
    }, "93c4": function (e, t, n) {
        "use strict";
        var o = n("2a4e")(!0);
        n("e4a9")(String, "String", function (e) {
            this._t = String(e), this._i = 0
        }, function () {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {value: void 0, done: !0} : (e = o(t, n), this._i += e.length, {value: e, done: !1})
        })
    }, "94ab": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return s
        }), n.d(t, "b", function () {
            return l
        });
        var o = n("2b0e"), r = n("d9bd");

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e, t) {
            return function () {
                return Object(r["c"])("The " + e + " component must be used inside a " + t)
            }
        }

        function s(e, t, n) {
            var r = t && n ? {register: a(t, n), unregister: a(t, n)} : null;
            return o["default"].extend({name: "registrable-inject", inject: i({}, e, {default: r})})
        }

        function l(e) {
            return o["default"].extend({
                name: "registrable-provide",
                methods: {register: null, unregister: null},
                provide: function () {
                    return i({}, e, {register: this.register, unregister: this.unregister})
                }
            })
        }
    }, "96cf": function (e, t) {
        !function (t) {
            "use strict";
            var n, o = Object.prototype, r = o.hasOwnProperty, i = "function" === typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator",
                l = i.toStringTag || "@@toStringTag", c = "object" === typeof e, u = t.regeneratorRuntime;
            if (u) c && (e.exports = u); else {
                u = t.regeneratorRuntime = c ? e.exports : {}, u.wrap = y;
                var p = "suspendedStart", d = "suspendedYield", f = "executing", m = "completed", h = {}, g = {};
                g[a] = function () {
                    return this
                };
                var b = Object.getPrototypeOf, v = b && b(b(L([])));
                v && v !== o && r.call(v, a) && (g = v);
                var x = S.prototype = w.prototype = Object.create(g);
                _.prototype = x.constructor = S, S.constructor = _, S[l] = _.displayName = "GeneratorFunction", u.isGeneratorFunction = function (e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }, u.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, S) : (e.__proto__ = S, l in e || (e[l] = "GeneratorFunction")), e.prototype = Object.create(x), e
                }, u.awrap = function (e) {
                    return {__await: e}
                }, T(E.prototype), E.prototype[s] = function () {
                    return this
                }, u.AsyncIterator = E, u.async = function (e, t, n, o) {
                    var r = new E(y(e, t, n, o));
                    return u.isGeneratorFunction(t) ? r : r.next().then(function (e) {
                        return e.done ? e.value : r.next()
                    })
                }, T(x), x[l] = "Generator", x[a] = function () {
                    return this
                }, x.toString = function () {
                    return "[object Generator]"
                }, u.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t.reverse(), function n() {
                        while (t.length) {
                            var o = t.pop();
                            if (o in e) return n.value = o, n.done = !1, n
                        }
                        return n.done = !0, n
                    }
                }, u.values = L, N.prototype = {
                    constructor: N, reset: function (e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(P), !e) for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                    }, stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0], t = e.completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;

                        function o(o, r) {
                            return s.type = "throw", s.arg = e, t.next = o, r && (t.method = "next", t.arg = n), !!r
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i], s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"), c = r.call(a, "finallyLoc");
                                if (l && c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, h) : this.complete(a)
                    }, complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                    }, finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), h
                        }
                    }, catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    P(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (e, t, o) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: t,
                            nextLoc: o
                        }, "next" === this.method && (this.arg = n), h
                    }
                }
            }

            function y(e, t, n, o) {
                var r = t && t.prototype instanceof w ? t : w, i = Object.create(r.prototype), a = new N(o || []);
                return i._invoke = C(e, n, a), i
            }

            function k(e, t, n) {
                try {
                    return {type: "normal", arg: e.call(t, n)}
                } catch (o) {
                    return {type: "throw", arg: o}
                }
            }

            function w() {
            }

            function _() {
            }

            function S() {
            }

            function T(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e)
                    }
                })
            }

            function E(e) {
                function t(n, o, i, a) {
                    var s = k(e[n], e, o);
                    if ("throw" !== s.type) {
                        var l = s.arg, c = l.value;
                        return c && "object" === typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then(function (e) {
                            t("next", e, i, a)
                        }, function (e) {
                            t("throw", e, i, a)
                        }) : Promise.resolve(c).then(function (e) {
                            l.value = e, i(l)
                        }, function (e) {
                            return t("throw", e, i, a)
                        })
                    }
                    a(s.arg)
                }

                var n;

                function o(e, o) {
                    function r() {
                        return new Promise(function (n, r) {
                            t(e, o, n, r)
                        })
                    }

                    return n = n ? n.then(r, r) : r()
                }

                this._invoke = o
            }

            function C(e, t, n) {
                var o = p;
                return function (r, i) {
                    if (o === f) throw new Error("Generator is already running");
                    if (o === m) {
                        if ("throw" === r) throw i;
                        return I()
                    }
                    n.method = r, n.arg = i;
                    while (1) {
                        var a = n.delegate;
                        if (a) {
                            var s = A(a, n);
                            if (s) {
                                if (s === h) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if (o === p) throw o = m, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        o = f;
                        var l = k(e, t, n);
                        if ("normal" === l.type) {
                            if (o = n.done ? m : d, l.arg === h) continue;
                            return {value: l.arg, done: n.done}
                        }
                        "throw" === l.type && (o = m, n.method = "throw", n.arg = l.arg)
                    }
                }
            }

            function A(e, t) {
                var o = e.iterator[t.method];
                if (o === n) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = n, A(e, t), "throw" === t.method)) return h;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return h
                }
                var r = k(o, e.iterator, t.arg);
                if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, h;
                var i = r.arg;
                return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = n), t.delegate = null, h) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
            }

            function O(e) {
                var t = {tryLoc: e[0]};
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function P(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function N(e) {
                this.tryEntries = [{tryLoc: "root"}], e.forEach(O, this), this.reset(!0)
            }

            function L(e) {
                if (e) {
                    var t = e[a];
                    if (t) return t.call(e);
                    if ("function" === typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1, i = function t() {
                            while (++o < e.length) if (r.call(e, o)) return t.value = e[o], t.done = !1, t;
                            return t.value = n, t.done = !0, t
                        };
                        return i.next = i
                    }
                }
                return {next: I}
            }

            function I() {
                return {value: n, done: !0}
            }
        }(function () {
            return this || "object" === typeof self && self
        }() || Function("return this")())
    }, 9819: function (e, t, n) {
        var o = n("c7cb");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("19b998ec", o, !0, {sourceMap: !1, shadowMode: !1})
    }, 9845: function (e, t, n) {
        var o, r, i, a = void 0;
        (function (n, a) {
            r = [e], o = a, i = "function" === typeof o ? o.apply(t, r) : o, void 0 === i || (e.exports = i)
        })(0, function (e) {
            "use strict";
            if ("undefined" === typeof a || Object.getPrototypeOf(a) !== Object.prototype) {
                const t = "The message port closed before a response was received.",
                    n = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                    o = e => {
                        const o = {
                            alarms: {
                                clear: {minArgs: 0, maxArgs: 1},
                                clearAll: {minArgs: 0, maxArgs: 0},
                                get: {minArgs: 0, maxArgs: 1},
                                getAll: {minArgs: 0, maxArgs: 0}
                            },
                            bookmarks: {
                                create: {minArgs: 1, maxArgs: 1},
                                get: {minArgs: 1, maxArgs: 1},
                                getChildren: {minArgs: 1, maxArgs: 1},
                                getRecent: {minArgs: 1, maxArgs: 1},
                                getSubTree: {minArgs: 1, maxArgs: 1},
                                getTree: {minArgs: 0, maxArgs: 0},
                                move: {minArgs: 2, maxArgs: 2},
                                remove: {minArgs: 1, maxArgs: 1},
                                removeTree: {minArgs: 1, maxArgs: 1},
                                search: {minArgs: 1, maxArgs: 1},
                                update: {minArgs: 2, maxArgs: 2}
                            },
                            browserAction: {
                                disable: {minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0},
                                enable: {minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0},
                                getBadgeBackgroundColor: {minArgs: 1, maxArgs: 1},
                                getBadgeText: {minArgs: 1, maxArgs: 1},
                                getPopup: {minArgs: 1, maxArgs: 1},
                                getTitle: {minArgs: 1, maxArgs: 1},
                                openPopup: {minArgs: 0, maxArgs: 0},
                                setBadgeBackgroundColor: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                setBadgeText: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                setIcon: {minArgs: 1, maxArgs: 1},
                                setPopup: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                setTitle: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
                            },
                            browsingData: {
                                remove: {minArgs: 2, maxArgs: 2},
                                removeCache: {minArgs: 1, maxArgs: 1},
                                removeCookies: {minArgs: 1, maxArgs: 1},
                                removeDownloads: {minArgs: 1, maxArgs: 1},
                                removeFormData: {minArgs: 1, maxArgs: 1},
                                removeHistory: {minArgs: 1, maxArgs: 1},
                                removeLocalStorage: {minArgs: 1, maxArgs: 1},
                                removePasswords: {minArgs: 1, maxArgs: 1},
                                removePluginData: {minArgs: 1, maxArgs: 1},
                                settings: {minArgs: 0, maxArgs: 0}
                            },
                            commands: {getAll: {minArgs: 0, maxArgs: 0}},
                            contextMenus: {
                                remove: {minArgs: 1, maxArgs: 1},
                                removeAll: {minArgs: 0, maxArgs: 0},
                                update: {minArgs: 2, maxArgs: 2}
                            },
                            cookies: {
                                get: {minArgs: 1, maxArgs: 1},
                                getAll: {minArgs: 1, maxArgs: 1},
                                getAllCookieStores: {minArgs: 0, maxArgs: 0},
                                remove: {minArgs: 1, maxArgs: 1},
                                set: {minArgs: 1, maxArgs: 1}
                            },
                            devtools: {
                                inspectedWindow: {eval: {minArgs: 1, maxArgs: 2, singleCallbackArg: !1}},
                                panels: {create: {minArgs: 3, maxArgs: 3, singleCallbackArg: !0}}
                            },
                            downloads: {
                                cancel: {minArgs: 1, maxArgs: 1},
                                download: {minArgs: 1, maxArgs: 1},
                                erase: {minArgs: 1, maxArgs: 1},
                                getFileIcon: {minArgs: 1, maxArgs: 2},
                                open: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                pause: {minArgs: 1, maxArgs: 1},
                                removeFile: {minArgs: 1, maxArgs: 1},
                                resume: {minArgs: 1, maxArgs: 1},
                                search: {minArgs: 1, maxArgs: 1},
                                show: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
                            },
                            extension: {
                                isAllowedFileSchemeAccess: {minArgs: 0, maxArgs: 0},
                                isAllowedIncognitoAccess: {minArgs: 0, maxArgs: 0}
                            },
                            history: {
                                addUrl: {minArgs: 1, maxArgs: 1},
                                deleteAll: {minArgs: 0, maxArgs: 0},
                                deleteRange: {minArgs: 1, maxArgs: 1},
                                deleteUrl: {minArgs: 1, maxArgs: 1},
                                getVisits: {minArgs: 1, maxArgs: 1},
                                search: {minArgs: 1, maxArgs: 1}
                            },
                            i18n: {
                                detectLanguage: {minArgs: 1, maxArgs: 1},
                                getAcceptLanguages: {minArgs: 0, maxArgs: 0}
                            },
                            identity: {launchWebAuthFlow: {minArgs: 1, maxArgs: 1}},
                            idle: {queryState: {minArgs: 1, maxArgs: 1}},
                            management: {
                                get: {minArgs: 1, maxArgs: 1},
                                getAll: {minArgs: 0, maxArgs: 0},
                                getSelf: {minArgs: 0, maxArgs: 0},
                                setEnabled: {minArgs: 2, maxArgs: 2},
                                uninstallSelf: {minArgs: 0, maxArgs: 1}
                            },
                            notifications: {
                                clear: {minArgs: 1, maxArgs: 1},
                                create: {minArgs: 1, maxArgs: 2},
                                getAll: {minArgs: 0, maxArgs: 0},
                                getPermissionLevel: {minArgs: 0, maxArgs: 0},
                                update: {minArgs: 2, maxArgs: 2}
                            },
                            pageAction: {
                                getPopup: {minArgs: 1, maxArgs: 1},
                                getTitle: {minArgs: 1, maxArgs: 1},
                                hide: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                setIcon: {minArgs: 1, maxArgs: 1},
                                setPopup: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                setTitle: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0},
                                show: {minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0}
                            },
                            permissions: {
                                contains: {minArgs: 1, maxArgs: 1},
                                getAll: {minArgs: 0, maxArgs: 0},
                                remove: {minArgs: 1, maxArgs: 1},
                                request: {minArgs: 1, maxArgs: 1}
                            },
                            runtime: {
                                getBackgroundPage: {minArgs: 0, maxArgs: 0},
                                getPlatformInfo: {minArgs: 0, maxArgs: 0},
                                openOptionsPage: {minArgs: 0, maxArgs: 0},
                                requestUpdateCheck: {minArgs: 0, maxArgs: 0},
                                sendMessage: {minArgs: 1, maxArgs: 3},
                                sendNativeMessage: {minArgs: 2, maxArgs: 2},
                                setUninstallURL: {minArgs: 1, maxArgs: 1}
                            },
                            sessions: {
                                getDevices: {minArgs: 0, maxArgs: 1},
                                getRecentlyClosed: {minArgs: 0, maxArgs: 1},
                                restore: {minArgs: 0, maxArgs: 1}
                            },
                            storage: {
                                local: {
                                    clear: {minArgs: 0, maxArgs: 0},
                                    get: {minArgs: 0, maxArgs: 1},
                                    getBytesInUse: {minArgs: 0, maxArgs: 1},
                                    remove: {minArgs: 1, maxArgs: 1},
                                    set: {minArgs: 1, maxArgs: 1}
                                },
                                managed: {get: {minArgs: 0, maxArgs: 1}, getBytesInUse: {minArgs: 0, maxArgs: 1}},
                                sync: {
                                    clear: {minArgs: 0, maxArgs: 0},
                                    get: {minArgs: 0, maxArgs: 1},
                                    getBytesInUse: {minArgs: 0, maxArgs: 1},
                                    remove: {minArgs: 1, maxArgs: 1},
                                    set: {minArgs: 1, maxArgs: 1}
                                }
                            },
                            tabs: {
                                captureVisibleTab: {minArgs: 0, maxArgs: 2},
                                create: {minArgs: 1, maxArgs: 1},
                                detectLanguage: {minArgs: 0, maxArgs: 1},
                                discard: {minArgs: 0, maxArgs: 1},
                                duplicate: {minArgs: 1, maxArgs: 1},
                                executeScript: {minArgs: 1, maxArgs: 2},
                                get: {minArgs: 1, maxArgs: 1},
                                getCurrent: {minArgs: 0, maxArgs: 0},
                                getZoom: {minArgs: 0, maxArgs: 1},
                                getZoomSettings: {minArgs: 0, maxArgs: 1},
                                highlight: {minArgs: 1, maxArgs: 1},
                                insertCSS: {minArgs: 1, maxArgs: 2},
                                move: {minArgs: 2, maxArgs: 2},
                                query: {minArgs: 1, maxArgs: 1},
                                reload: {minArgs: 0, maxArgs: 2},
                                remove: {minArgs: 1, maxArgs: 1},
                                removeCSS: {minArgs: 1, maxArgs: 2},
                                sendMessage: {minArgs: 2, maxArgs: 3},
                                setZoom: {minArgs: 1, maxArgs: 2},
                                setZoomSettings: {minArgs: 1, maxArgs: 2},
                                update: {minArgs: 1, maxArgs: 2}
                            },
                            topSites: {get: {minArgs: 0, maxArgs: 0}},
                            webNavigation: {getAllFrames: {minArgs: 1, maxArgs: 1}, getFrame: {minArgs: 1, maxArgs: 1}},
                            webRequest: {handlerBehaviorChanged: {minArgs: 0, maxArgs: 0}},
                            windows: {
                                create: {minArgs: 0, maxArgs: 1},
                                get: {minArgs: 1, maxArgs: 2},
                                getAll: {minArgs: 0, maxArgs: 1},
                                getCurrent: {minArgs: 0, maxArgs: 1},
                                getLastFocused: {minArgs: 0, maxArgs: 1},
                                remove: {minArgs: 1, maxArgs: 1},
                                update: {minArgs: 2, maxArgs: 2}
                            }
                        };
                        if (0 === Object.keys(o).length) throw new Error("api-metadata.json has not been included in browser-polyfill");

                        class r extends WeakMap {
                            constructor(e, t) {
                                super(t), this.createItem = e
                            }

                            get(e) {
                                return this.has(e) || this.set(e, this.createItem(e)), super.get(e)
                            }
                        }

                        const i = e => {
                            return e && "object" === typeof e && "function" === typeof e.then
                        }, a = (t, n) => {
                            return (...o) => {
                                e.runtime.lastError ? t.reject(e.runtime.lastError) : n.singleCallbackArg || o.length <= 1 && !1 !== n.singleCallbackArg ? t.resolve(o[0]) : t.resolve(o)
                            }
                        }, s = e => 1 == e ? "argument" : "arguments", l = (e, t) => {
                            return function (n, ...o) {
                                if (o.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${o.length}`);
                                if (o.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${o.length}`);
                                return new Promise((r, i) => {
                                    if (t.fallbackToNoCallback) try {
                                        n[e](...o, a({resolve: r, reject: i}, t))
                                    } catch (s) {
                                        console.warn(`${e} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", s), n[e](...o), t.fallbackToNoCallback = !1, t.noCallback = !0, r()
                                    } else t.noCallback ? (n[e](...o), r()) : n[e](...o, a({resolve: r, reject: i}, t))
                                })
                            }
                        }, c = (e, t, n) => {
                            return new Proxy(t, {
                                apply(t, o, r) {
                                    return n.call(o, e, ...r)
                                }
                            })
                        };
                        let u = Function.call.bind(Object.prototype.hasOwnProperty);
                        const p = (e, t = {}, n = {}) => {
                            let o = Object.create(null), r = {
                                has(t, n) {
                                    return n in e || n in o
                                }, get(r, i, a) {
                                    if (i in o) return o[i];
                                    if (!(i in e)) return;
                                    let s = e[i];
                                    if ("function" === typeof s) if ("function" === typeof t[i]) s = c(e, e[i], t[i]); else if (u(n, i)) {
                                        let t = l(i, n[i]);
                                        s = c(e, e[i], t)
                                    } else s = s.bind(e); else {
                                        if ("object" !== typeof s || null === s || !u(t, i) && !u(n, i)) return Object.defineProperty(o, i, {
                                            configurable: !0,
                                            enumerable: !0,
                                            get() {
                                                return e[i]
                                            },
                                            set(t) {
                                                e[i] = t
                                            }
                                        }), s;
                                        s = p(s, t[i], n[i])
                                    }
                                    return o[i] = s, s
                                }, set(t, n, r, i) {
                                    return n in o ? o[n] = r : e[n] = r, !0
                                }, defineProperty(e, t, n) {
                                    return Reflect.defineProperty(o, t, n)
                                }, deleteProperty(e, t) {
                                    return Reflect.deleteProperty(o, t)
                                }
                            }, i = Object.create(e);
                            return new Proxy(i, r)
                        }, d = e => ({
                            addListener(t, n, ...o) {
                                t.addListener(e.get(n), ...o)
                            }, hasListener(t, n) {
                                return t.hasListener(e.get(n))
                            }, removeListener(t, n) {
                                t.removeListener(e.get(n))
                            }
                        });
                        let f = !1;
                        const m = new r(e => {
                            return "function" !== typeof e ? e : function (t, o, r) {
                                let a, s, l = !1, c = new Promise(e => {
                                    a = function (t) {
                                        f || (console.warn(n, (new Error).stack), f = !0), l = !0, e(t)
                                    }
                                });
                                try {
                                    s = e(t, o, a)
                                } catch (d) {
                                    s = Promise.reject(d)
                                }
                                const u = !0 !== s && i(s);
                                if (!0 !== s && !u && !l) return !1;
                                const p = e => {
                                    e.then(e => {
                                        r(e)
                                    }, e => {
                                        let t;
                                        t = e && (e instanceof Error || "string" === typeof e.message) ? e.message : "An unexpected error occurred", r({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: t
                                        })
                                    }).catch(e => {
                                        console.error("Failed to send onMessage rejected reply", e)
                                    })
                                };
                                return p(u ? s : c), !0
                            }
                        }), h = ({reject: n, resolve: o}, r) => {
                            e.runtime.lastError ? e.runtime.lastError.message === t ? o() : n(e.runtime.lastError) : r && r.__mozWebExtensionPolyfillReject__ ? n(new Error(r.message)) : o(r)
                        }, g = (e, t, n, ...o) => {
                            if (o.length < t.minArgs) throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${o.length}`);
                            if (o.length > t.maxArgs) throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${o.length}`);
                            return new Promise((e, t) => {
                                const r = h.bind(null, {resolve: e, reject: t});
                                o.push(r), n.sendMessage(...o)
                            })
                        }, b = {
                            runtime: {
                                onMessage: d(m),
                                onMessageExternal: d(m),
                                sendMessage: g.bind(null, "sendMessage", {minArgs: 1, maxArgs: 3})
                            }, tabs: {sendMessage: g.bind(null, "sendMessage", {minArgs: 2, maxArgs: 3})}
                        }, v = {
                            clear: {minArgs: 1, maxArgs: 1},
                            get: {minArgs: 1, maxArgs: 1},
                            set: {minArgs: 1, maxArgs: 1}
                        };
                        return o.privacy = {
                            network: {networkPredictionEnabled: v, webRTCIPHandlingPolicy: v},
                            services: {passwordSavingEnabled: v},
                            websites: {hyperlinkAuditingEnabled: v, referrersEnabled: v}
                        }, p(e, b, o)
                    };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                e.exports = o(chrome)
            } else e.exports = a
        })
    }, "98a1": function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return i
        });
        var o = n("2b0e");

        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "value",
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "input";
            return o["default"].extend({
                name: "toggleable",
                model: {prop: t, event: n},
                props: r({}, t, {required: !1}),
                data: function () {
                    return {isActive: !!this[t]}
                },
                watch: (e = {}, r(e, t, function (e) {
                    this.isActive = !!e
                }), r(e, "isActive", function (e) {
                    !!e !== this[t] && this.$emit(n, e)
                }), e)
            })
        }

        var a = i();
        t["a"] = a
    }, "98f2": function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".v-responsive{position:relative;overflow:hidden;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;display:-webkit-box;display:-ms-flexbox;display:flex}.v-responsive__content{-webkit-box-flex:1;-ms-flex:1 0 0px;flex:1 0 0px}.v-responsive__sizer{-webkit-transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);-webkit-box-flex:0;-ms-flex:0 0 0px;flex:0 0 0px}", ""])
    }, "99d9": function (e, t, n) {
        "use strict";
        var o = n("80d2"), r = n("b0af"), i = (n("253d"), n("4c34"), n("23bf")), a = n("58df"),
            s = Object(a["a"])(i["a"]).extend({
                name: "v-responsive",
                props: {aspectRatio: [String, Number]},
                computed: {
                    computedAspectRatio: function () {
                        return Number(this.aspectRatio)
                    }, aspectStyle: function () {
                        return this.computedAspectRatio ? {paddingBottom: 1 / this.computedAspectRatio * 100 + "%"} : void 0
                    }, __cachedSizer: function () {
                        return this.aspectStyle ? this.$createElement("div", {
                            style: this.aspectStyle,
                            staticClass: "v-responsive__sizer"
                        }) : []
                    }
                },
                methods: {
                    genContent: function () {
                        return this.$createElement("div", {staticClass: "v-responsive__content"}, this.$slots.default)
                    }
                },
                render: function (e) {
                    return e("div", {
                        staticClass: "v-responsive",
                        style: this.measurableStyles,
                        on: this.$listeners
                    }, [this.__cachedSizer, this.genContent()])
                }
            }), l = s, c = n("d9bd"), u = l.extend({
                name: "v-img",
                props: {
                    alt: String,
                    contain: Boolean,
                    src: {type: [String, Object], default: ""},
                    gradient: String,
                    lazySrc: String,
                    srcset: String,
                    sizes: String,
                    position: {type: String, default: "center center"},
                    transition: {type: [Boolean, String], default: "fade-transition"}
                },
                data: function () {
                    return {currentSrc: "", image: null, isLoading: !0, calculatedAspectRatio: void 0}
                },
                computed: {
                    computedAspectRatio: function () {
                        return this.normalisedSrc.aspect
                    }, normalisedSrc: function () {
                        return "string" === typeof this.src ? {
                            src: this.src,
                            srcset: this.srcset,
                            lazySrc: this.lazySrc,
                            aspect: Number(this.aspectRatio || this.calculatedAspectRatio)
                        } : {
                            src: this.src.src,
                            srcset: this.srcset || this.src.srcset,
                            lazySrc: this.lazySrc || this.src.lazySrc,
                            aspect: Number(this.aspectRatio || this.src.aspect || this.calculatedAspectRatio)
                        }
                    }, __cachedImage: function () {
                        if (!this.normalisedSrc.src && !this.normalisedSrc.lazySrc) return [];
                        var e = [], t = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
                        this.gradient && e.push("linear-gradient(" + this.gradient + ")"), t && e.push('url("' + t + '")');
                        var n = this.$createElement("div", {
                            staticClass: "v-image__image",
                            class: {
                                "v-image__image--preload": this.isLoading,
                                "v-image__image--contain": this.contain,
                                "v-image__image--cover": !this.contain
                            },
                            style: {backgroundImage: e.join(", "), backgroundPosition: this.position},
                            key: +this.isLoading
                        });
                        return this.transition ? this.$createElement("transition", {
                            attrs: {
                                name: this.transition,
                                mode: "in-out"
                            }
                        }, [n]) : n
                    }
                },
                watch: {
                    src: function () {
                        this.isLoading ? this.loadImage() : this.init()
                    }, "$vuetify.breakpoint.width": "getSrc"
                },
                mounted: function () {
                    this.init()
                },
                methods: {
                    init: function () {
                        if (this.normalisedSrc.lazySrc) {
                            var e = new Image;
                            e.src = this.normalisedSrc.lazySrc, this.pollForSize(e, null)
                        }
                        this.normalisedSrc.src && this.loadImage()
                    }, onLoad: function () {
                        this.getSrc(), this.isLoading = !1, this.$emit("load", this.src)
                    }, onError: function () {
                        Object(c["a"])("Image load failed\n\nsrc: " + this.normalisedSrc.src, this), this.$emit("error", this.src)
                    }, getSrc: function () {
                        this.image && (this.currentSrc = this.image.currentSrc || this.image.src)
                    }, loadImage: function () {
                        var e = this, t = new Image;
                        this.image = t, t.onload = function () {
                            t.decode ? t.decode().catch(function (t) {
                                Object(c["c"])("Failed to decode image, trying to render anyway\n\nsrc: " + e.normalisedSrc.src + (t.message ? "\nOriginal error: " + t.message : ""), e)
                            }).then(e.onLoad) : e.onLoad()
                        }, t.onerror = this.onError, t.src = this.normalisedSrc.src, this.sizes && (t.sizes = this.sizes), this.normalisedSrc.srcset && (t.srcset = this.normalisedSrc.srcset), this.aspectRatio || this.pollForSize(t), this.getSrc()
                    }, pollForSize: function (e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                            o = function o() {
                                var r = e.naturalHeight, i = e.naturalWidth;
                                r || i ? t.calculatedAspectRatio = i / r : null != n && setTimeout(o, n)
                            };
                        o()
                    }, __genPlaceholder: function () {
                        if (this.$slots.placeholder) {
                            var e = this.isLoading ? [this.$createElement("div", {staticClass: "v-image__placeholder"}, this.$slots.placeholder)] : [];
                            return this.transition ? this.$createElement("transition", {attrs: {name: this.transition}}, e) : e[0]
                        }
                    }
                },
                render: function (e) {
                    var t = l.options.render.call(this, e);
                    return t.data.staticClass += " v-image", t.data.attrs = {
                        role: this.alt ? "img" : void 0,
                        "aria-label": this.alt
                    }, t.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()], e(t.tag, t.data, t.children)
                }
            }), p = u.extend({
                name: "v-card-media", mounted: function () {
                    Object(c["d"])("v-card-media", this.src ? "v-img" : "v-responsive", this)
                }
            }), d = n("2b0e"), f = d["default"].extend({
                name: "v-card-title",
                functional: !0,
                props: {primaryTitle: Boolean},
                render: function (e, t) {
                    var n = t.data, o = t.props, r = t.children;
                    return n.staticClass = ("v-card__title " + (n.staticClass || "")).trim(), o.primaryTitle && (n.staticClass += " v-card__title--primary"), e("div", n, r)
                }
            });
        n.d(t, "a", function () {
            return m
        }), n.d(t, "b", function () {
            return h
        });
        var m = Object(o["e"])("v-card__actions"), h = Object(o["e"])("v-card__text");
        r["a"]
    }, "9a36": function (e, t, n) {
        "use strict";
        n.d(t, "f", function () {
            return r
        }), n.d(t, "h", function () {
            return i
        }), n.d(t, "k", function () {
            return a
        }), n.d(t, "e", function () {
            return s
        }), n.d(t, "g", function () {
            return l
        }), n.d(t, "l", function () {
            return c
        }), n.d(t, "j", function () {
            return u
        }), n.d(t, "i", function () {
            return p
        }), n.d(t, "d", function () {
            return d
        }), n.d(t, "c", function () {
            return f
        }), n.d(t, "Xb", function () {
            return m
        }), n.d(t, "Zb", function () {
            return h
        }), n.d(t, "Wb", function () {
            return g
        }), n.d(t, "Vb", function () {
            return b
        }), n.d(t, "Yb", function () {
            return v
        }), n.d(t, "fc", function () {
            return x
        }), n.d(t, "bc", function () {
            return y
        }), n.d(t, "Tb", function () {
            return k
        }), n.d(t, "Ub", function () {
            return w
        }), n.d(t, "ac", function () {
            return _
        }), n.d(t, "ec", function () {
            return S
        }), n.d(t, "cc", function () {
            return T
        }), n.d(t, "dc", function () {
            return E
        }), n.d(t, "m", function () {
            return C
        }), n.d(t, "xc", function () {
            return A
        }), n.d(t, "kc", function () {
            return O
        }), n.d(t, "a", function () {
            return P
        }), n.d(t, "Rb", function () {
            return N
        }), n.d(t, "Qb", function () {
            return L
        }), n.d(t, "Sb", function () {
            return I
        }), n.d(t, "hc", function () {
            return F
        }), n.d(t, "ab", function () {
            return M
        }), n.d(t, "cb", function () {
            return D
        }), n.d(t, "Lb", function () {
            return R
        }), n.d(t, "bb", function () {
            return j
        }), n.d(t, "Nb", function () {
            return B
        }), n.d(t, "Pb", function () {
            return $
        }), n.d(t, "Cb", function () {
            return z
        }), n.d(t, "qb", function () {
            return U
        }), n.d(t, "hb", function () {
            return H
        }), n.d(t, "lb", function () {
            return Y
        }), n.d(t, "eb", function () {
            return G
        }), n.d(t, "fb", function () {
            return V
        }), n.d(t, "Ab", function () {
            return W
        }), n.d(t, "Bb", function () {
            return K
        }), n.d(t, "kb", function () {
            return q
        }), n.d(t, "rb", function () {
            return X
        }), n.d(t, "Jb", function () {
            return Q
        }), n.d(t, "zb", function () {
            return J
        }), n.d(t, "yb", function () {
            return Z
        }), n.d(t, "ib", function () {
            return ee
        }), n.d(t, "gb", function () {
            return te
        }), n.d(t, "jb", function () {
            return ne
        }), n.d(t, "wb", function () {
            return oe
        }), n.d(t, "mb", function () {
            return re
        }), n.d(t, "nb", function () {
            return ie
        }), n.d(t, "V", function () {
            return ae
        }), n.d(t, "R", function () {
            return se
        }), n.d(t, "Y", function () {
            return le
        }), n.d(t, "L", function () {
            return ce
        }), n.d(t, "M", function () {
            return ue
        }), n.d(t, "Z", function () {
            return pe
        }), n.d(t, "Mb", function () {
            return de
        }), n.d(t, "Q", function () {
            return fe
        }), n.d(t, "Ob", function () {
            return me
        }), n.d(t, "J", function () {
            return he
        }), n.d(t, "X", function () {
            return ge
        }), n.d(t, "P", function () {
            return be
        }), n.d(t, "ob", function () {
            return ve
        }), n.d(t, "Gb", function () {
            return xe
        }), n.d(t, "O", function () {
            return ye
        }), n.d(t, "W", function () {
            return ke
        }), n.d(t, "sb", function () {
            return we
        }), n.d(t, "Hb", function () {
            return _e
        }), n.d(t, "Ib", function () {
            return Se
        }), n.d(t, "w", function () {
            return Te
        }), n.d(t, "E", function () {
            return Ee
        }), n.d(t, "C", function () {
            return Ce
        }), n.d(t, "Kb", function () {
            return Ae
        }), n.d(t, "z", function () {
            return Oe
        }), n.d(t, "B", function () {
            return Pe
        }), n.d(t, "y", function () {
            return Ne
        }), n.d(t, "A", function () {
            return Le
        }), n.d(t, "x", function () {
            return Ie
        }), n.d(t, "D", function () {
            return Fe
        }), n.d(t, "vb", function () {
            return Me
        }), n.d(t, "S", function () {
            return De
        }), n.d(t, "ub", function () {
            return Re
        }), n.d(t, "F", function () {
            return je
        }), n.d(t, "Db", function () {
            return Be
        }), n.d(t, "tb", function () {
            return $e
        }), n.d(t, "K", function () {
            return ze
        }), n.d(t, "T", function () {
            return Ue
        }), n.d(t, "U", function () {
            return He
        }), n.d(t, "db", function () {
            return Ye
        }), n.d(t, "xb", function () {
            return Ge
        }), n.d(t, "H", function () {
            return Ve
        }), n.d(t, "I", function () {
            return We
        }), n.d(t, "G", function () {
            return Ke
        }), n.d(t, "N", function () {
            return qe
        }), n.d(t, "Eb", function () {
            return Xe
        }),n.d(t, "Fb", function () {
            return Qe
        }),n.d(t, "pb", function () {
            return Je
        }),n.d(t, "b", function () {
            return Ze
        }),n.d(t, "p", function () {
            return et
        }),n.d(t, "t", function () {
            return tt
        }),n.d(t, "u", function () {
            return nt
        }),n.d(t, "r", function () {
            return ot
        }),n.d(t, "s", function () {
            return rt
        }),n.d(t, "q", function () {
            return it
        }),n.d(t, "o", function () {
            return at
        }),n.d(t, "n", function () {
            return st
        }),n.d(t, "vc", function () {
            return lt
        }),n.d(t, "qc", function () {
            return ct
        }),n.d(t, "mc", function () {
            return ut
        }),n.d(t, "sc", function () {
            return pt
        }),n.d(t, "rc", function () {
            return dt
        }),n.d(t, "lc", function () {
            return ft
        }),n.d(t, "pc", function () {
            return mt
        }),n.d(t, "wc", function () {
            return ht
        }),n.d(t, "oc", function () {
            return gt
        }),n.d(t, "tc", function () {
            return bt
        }),n.d(t, "uc", function () {
            return vt
        }),n.d(t, "nc", function () {
            return xt
        }),n.d(t, "jc", function () {
            return yt
        }),n.d(t, "ic", function () {
            return kt
        }),n.d(t, "v", function () {
            return wt
        }),n.d(t, "gc", function () {
            return _t
        });
        var o = function (e) {
                return "IZL_SF_".concat(e)
            }, r = o("@@ID"), i = o("@@RES_TS"), a = o("EVENT_TRANSLATE"), s = o("EVENT_EXTENSION_STORAGE"),
            l = o("EVENT_REQUEST"), c = o("EVENT_WINDOW_OPENER"), u = "EVENT_SEND_DATA_TO_ERP",
            p = "EVENT_SEND_DATA_TO_CONTENT", d = "EVENT_COLLECT_SUCCESS_CROSS", f = "EVENT_CHANGE_LANGUAGE_CROSS",
            m = "SETTING_COLLECT_NO_REPEAT_IN_DAY", h = "SETTING_COLLECT_REAL_STOCK", g = "SETTING_COLLECT_FIX_STOCK",
            b = "SETTING_COLLECT_DISCOUNT_PRICE", v = "SETTING_COLLECT_PRICING_STRATEGIES",
            x = "SETTING_SHOW_CONTENT_MENUS", y = "SETTING_MESSAGE_NOTIFY", k = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "".concat(e, "_SF@SETTING_CHAT_DISPLAY_SHOPEE_SEND_BTN")
            }, w = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return "".concat(e, "_SF@SETTING_CHAT_OPEN_TRANSLATE")
            }, _ = "SETTING_CURRENCY_CENTER_IS_CLOSED", S = "SETTING_SHOP_MESSAGE_NOTIFY_IS_CLOSED",
            T = "SETTING_NETWORK_LINE", E = "world", C = "IMAGE_DOWNLOAD_SETTING_CLOSED", A = function (e) {
                return "".concat(e, "_PURCHASING_ORDER")
            }, O = "SYNC_PLATFORM_ORDER_KEY",
            P = {MY: "马来西亚", SG: "新加坡", ID: "印度尼西亚", TW: "台湾", TH: "泰国", VN: "越南", PH: "菲律宾", BR: "巴西"}, N = {
                0: "1688",
                1: "taobao",
                2: "lazada",
                3: "aliExpress",
                4: "pinDuoDuo",
                6: "tmall",
                10: "shopee",
                17: "17"
            }, L = {1688: 0, taobao: 1, lazada: 2, aliExpress: 3, pinDuoDuo: 4, tmall: 6, shopee: 10, 17: 17},
            I = {MY: 1, SG: 2, ID: 3, TW: 4, TH: 5, VN: 6, PH: 7, BR: 8}, F = "SHOPEE_FANS@@NOTIFICATION",
            M = "MESSAGE_TYPE_HISTORY_STATE_CHANGE", D = "MESSAGE_TYPE_NOTIFICATION_FETCH",
            R = "MESSAGE_TYPE_TRANSLATE", j = "MESSAGE_TYPE_HTML_FETCH", B = "MESSAGE_TYPE_USER_ERP_FETCH",
            $ = "MESSAGE_TYPE_USER_SHOPEE_FETCH", z = "MESSAGE_TYPE_SHOP_ERP_CHECK", U = "MESSAGE_TYPE_ORDER_FETCH",
            H = "MESSAGE_TYPE_OFFER_COLLECT", Y = "MESSAGE_TYPE_OFFER_SHOPEE_FETCH_BY_URL",
            G = "MESSAGE_TYPE_OFFER_ALI1688_FETCH_BY_DETAIL_URL", V = "MESSAGE_TYPE_OFFER_ALI1688_FETCH_BY_URLS",
            W = "MESSAGE_TYPE_SHOP_COLLECTIONS_GET", K = "MESSAGE_TYPE_SHOP_COLLECTIONS_OFFER_GET",
            q = "MESSAGE_TYPE_OFFER_SHOPEE_FETCH", X = "MESSAGE_TYPE_PLATFORM_COLLECTIONS_OFFER_GET",
            Q = "MESSAGE_TYPE_TARGET_CURRENCY_RATE_GET", J = "MESSAGE_TYPE_SHOPID_GET_BY_SHOPNAME",
            Z = "MESSAGE_TYPE_SHOPEE_USER_INFO_TO_SERVICE", ee = "MESSAGE_TYPE_OFFER_LAZADA_FETCH_BY_URL",
            te = "MESSAGE_TYPE_OFFER_ALIEXPRESS_FETCH_BY_URL", ne = "MESSAGE_TYPE_OFFER_PINDUODUO_FETCH_BY_URL",
            oe = "MESSAGE_TYPE_SET_COOKIE_TO_SHOP", re = "MESSAGE_TYPE_OFFER_TAOBAO_FETCH_BY_DETAIL_URL",
            ie = "MESSAGE_TYPE_OFFER_TMALL_FETCH_BY_DETAIL_URL", ae = "MESSAGE_TYPE_GET_SHOP_MESSAGE_NOTIFY",
            se = "MESSAGE_TYPE_GET_SELLER_COOKIE_BY_URL", le = "MESSAGE_TYPE_GET_USER_ORDER_APP_LIST",
            ce = "MESSAGE_TYPE_DOWNLOAD_IMAGE_BY_URL", ue = "MESSAGE_TYPE_FANS_ELVES_ORDER_QUERY",
            pe = "MESSAGE_TYPE_GET_USER_ORDER_BATCH_COLLECT_INFO", de = "MESSAGE_TYPE_USER_BALANCE_FETCH",
            fe = "MESSAGE_TYPE_GET_REWARD_TASK", me = "MESSAGE_TYPE_USER_RELEASE_TASK",
            he = "MESSAGE_TYPE_COMMIT_TASK_STATUS", ge = "MESSAGE_TYPE_GET_USER_LEVEL",
            be = "MESSAGE_TYPE_GET_PRICING_STRATEGIES", ve = "MESSAGE_TYPE_OPEN_USER_GUIDE",
            xe = "MESSAGE_TYPE_START_PURCHASE_ORDER", ye = "MESSAGE_TYPE_GET_ALL_ORDER",
            ke = "MESSAGE_TYPE_GET_TB_LIST_BOUGGT_ITEMS", we = "MESSAGE_TYPE_PURCHASE_ORDER",
            _e = "MESSAGE_TYPE_START_SYNC_ORDER", Se = "MESSAGE_TYPE_SYNC_ORDER",
            Te = "MESSAGE_CURRENCY_CENTER_OPEN_SETTING_CHANGE", Ee = "MESSAGE_SHOP_MESSAGE_NOTIFY_OPEN_SETTING_CHANGE",
            Ce = "MESSAGE_PRODUCT_BOOST_START", Ae = "MESSAGE_TYPE_TOOL_ORDER_ALL", Oe = "MESSAGE_GET_SHOPEE_USER_INFO",
            Pe = "MESSAGE_GET_USER_ACTIVITIES_NOTIFICATION_LIST", Ne = "MESSAGE_GET_FOLLOWERS",
            Le = "MESSAGE_GET_TOOL_REMAIN_QUANTITY", Ie = "MESSAGE_DEDUCTION_TOOL_QUANTITY",
            Fe = "MESSAGE_REMOVE_SPECIFY_COOKIE", Me = "MESSAGE_TYPE_REQUEST", De = "MESSAGE_TYPE_GET_SFCONFIG",
            Re = "MESSAGE_TYPE_RECIVE_BATCH_COLLECT_PRODUCT_LINKS", je = "MESSAGE_TYPE_ACTIONS_BATCH_COLLECT",
            Be = "MESSAGE_TYPE_SHOW_COLLECTION_BOX", $e = "MESSAGE_TYPE_PUT_SHOPEE_HISTORICAL_DATA",
            ze = "MESSAGE_TYPE_DELETE_SHOPEE_HISTORICAL_DATA", Ue = "MESSAGE_TYPE_GET_SHOPEE_HISTORICAL_DATA",
            He = "MESSAGE_TYPE_GET_SHOPEE_OFFER_BY_LIST", Ye = "MESSAGE_TYPE_OFFER_17_FETCH_BY_DETAIL_URL",
            Ge = "MESSAGE_TYPE_SHOPEE_SHEACH_ITEMS", Ve = "MESSAGE_TYPE_COLLECTION_SHOP_LOCK_ACQUIRE",
            We = "MESSAGE_TYPE_COLLECTION_SHOP_LOCK_RELEASE", Ke = "MESSAGE_TYPE_COLLECTION_PUT_OR_UPDATE",
            qe = "MESSAGE_TYPE_FEATCH_TAOBAO_PAGE", Xe = "MESSAGE_TYPE_SON_WINDOW_COLLECTED",
            Qe = "MESSAGE_TYPE_SON_WINDOW_COLLECTE_FAILED", Je = "MESSAGE_TYPE_OPERATE_COOKIES", Ze = {
                EMITTER_SHOW_ERROR: "EMITTER_SHOW_ERROR",
                EMITTER_HIDE_NOTIFY: "EMITTER_HIDE_NOTIFY",
                EMITTER_SHOW_NOTIFY: "EMITTER_SHOW_NOTIFY",
                EMITTER_CHECK_NOTIFY: "EMITTER_CHECK_NOTIFY",
                EMITTER_HIDE_LIST: "EMITTER_HIDE_LIST",
                EMITTER_HIDE_ITEM: "EMITTER_HIDE_ITEM",
                EMITTER_LAYOUT_SHOPEE: "EMITTER_LAYOUT_SHOPEE",
                EMITTER_HIDE_ITEM_ON_SHOPS_LIST: "EMITTER_HIDE_ITEM_ON_SHOPS_LIST",
                EMITTER_HIDE_ITEM_ON_PLATFORM_LIST: "EMITTER_HIDE_ITEM_ON_PLATFORM_LIST",
                EMITTER_HIDE_ITEM_ON_SHOPS_LIST_1688: "EMITTER_HIDE_ITEM_ON_SHOPS_LIST_1688",
                TARGET_CURRENCY_CHANGE: "TARGET_CURRENCY_CHANGE",
                EMITTER_HIDE_APPS: "EMITTER_HIDE_APPS",
                LANGUAGE_CHANGE: "LANGUAGE_CHANGE",
                EMITTER_SET_USER: "EMITTER_SET_USER",
                EMITTER_HIDE_CHAT_TRANSLATE: "EMITTER_HIDE_CHAT_TRANSLATE",
                EMITTER_SEND_ERP_USER_INFO: "EMITTER_SEND_ERP_USER_INFO",
                EMITTER_SAVE_COLLECTED_TO_INDEXDB: "EMITTER_SAVE_COLLECTED_TO_INDEXDB",
                EMITTER_CHANGE_REMEMBER_COLLECTED: "EMITTER_CHANGE_REMEMBER_COLLECTED",
                ASYNC_APPS_TOP_OFFERS: "ASYNC_APPS_TOP_OFFERS",
                ASYNC_CONTENT_TOP_OFFERS: "ASYNC_CONTENT_TOP_OFFERS",
                HIDE_CHAT_TRANSLATE: "HIDE_CHAT_TRANSLATE",
                EMITTER_CHANGE_SHOW_MENU: "EMITTER_CHANGE_SHOW_MENU",
                EMITTER_FETCH_BALANCE: "EMITTER_FETCH_BALANCE",
                DISPLAY_SHOPEE_SEND_BTN: "DISPLAY_SHOPEE_SEND_BTN",
                OPEN_SPECIFIC_APP: "OPEN_SPECIFIC_APP",
                OPEN_APP_SIDE_BAR: "OPEN_APP_SIDE_BAR"
            }, et = "en-US", tt = "zh-CN", nt = "zh-TW", ot = "TH", rt = "VI", it = "ID", at = "BR",
            st = [{text: "中文 (简体)", value: tt}, {text: "中文 (繁體)", value: nt}, {
                text: "English (US)",
                value: et
            }, {text: "ไทย (TH)", value: ot}, {text: "Tiếng việt nam (VI)", value: rt}, {
                text: "Orang indonesia (ID)",
                value: it
            }, {text: "Português（BR）", value: at}], lt = "SFansElves", ct = "SCurrencyCenter", ut = "SWeChat",
            pt = "STimingTopOffer", dt = "SDownloadImage", ft = "SBatchCollect", mt = "SGeneralSettings",
            ht = "SRewardTask", gt = "SCollectPDD", bt = "SPurchaseOrder", vt = "SSendMessage", xt = "SCollectionBox",
            yt = "STORAGE_SF_CONFIG", kt = "STORAGE_OPERATION_STATE_CACHE", wt = 8e3, _t = {
                TW: "https://s-cf-tw.shopeesz.com",
                ID: "https://s-cf-id.shopeesz.com",
                MY: "https://s-cf-my.shopeesz.com",
                SG: "https://s-cf-sg.shopeesz.com",
                TH: "https://s-cf-th.shopeesz.com",
                VN: "https://s-cf-vn.shopeesz.com",
                PH: "https://s-cf-ph.shopeesz.com"
            }
    }, "9b43": function (e, t, n) {
        var o = n("d8e8");
        e.exports = function (e, t, n) {
            if (o(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, o) {
                        return e.call(t, n, o)
                    };
                case 3:
                    return function (n, o, r) {
                        return e.call(t, n, o, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, "9c6c": function (e, t, n) {
        var o = n("2b4c")("unscopables"), r = Array.prototype;
        void 0 == r[o] && n("32e9")(r, o, {}), e.exports = function (e) {
            r[o][e] = !0
        }
    }, "9c80": function (e, t) {
        e.exports = function (e) {
            try {
                return {e: !1, v: e()}
            } catch (t) {
                return {e: !0, v: t}
            }
        }
    }, "9c93": function (e, t, n) {
        var o = n("0f89");
        e.exports = function (e, t, n, r) {
            try {
                return r ? t(o(n)[0], n[1]) : t(n)
            } catch (a) {
                var i = e["return"];
                throw void 0 !== i && o(i.call(e)), a
            }
        }
    }, "9d26": function (e, t, n) {
        "use strict";
        var o = n("132d");
        t["a"] = o["a"]
    }, "9def": function (e, t, n) {
        var o = n("4588"), r = Math.min;
        e.exports = function (e) {
            return e > 0 ? r(o(e), 9007199254740991) : 0
        }
    }, "9e1e": function (e, t, n) {
        e.exports = !n("79e5")(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, a168: function (e, t, n) {
        e.exports = n.p + "img/shopee-home.b803a0ac.png"
    }, a1b4: function (e) {
        e.exports = {noUpdate: "Tidak ada update", moreData: "Memuat lebih banyak data", noData: "Tidak ada lagi data!"}
    }, a25f: function (e, t, n) {
        var o = n("7726"), r = o.navigator;
        e.exports = r && r.userAgent || ""
    }, a35a: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".app-mask[data-v-9e348828]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:1}", ""])
    }, a47f: function (e, t, n) {
        e.exports = !n("7d95") && !n("d782")(function () {
            return 7 != Object.defineProperty(n("12fd")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, a481: function (e, t, n) {
        "use strict";
        var o = n("cb7c"), r = n("4bf8"), i = n("9def"), a = n("4588"), s = n("0390"), l = n("5f1b"), c = Math.max,
            u = Math.min, p = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, f = /\$([$&`']|\d\d?)/g, m = function (e) {
                return void 0 === e ? e : String(e)
            };
        n("214f")("replace", 2, function (e, t, n, h) {
            return [function (o, r) {
                var i = e(this), a = void 0 == o ? void 0 : o[t];
                return void 0 !== a ? a.call(o, i, r) : n.call(String(i), o, r)
            }, function (e, t) {
                var r = h(n, e, this, t);
                if (r.done) return r.value;
                var p = o(e), d = String(this), f = "function" === typeof t;
                f || (t = String(t));
                var b = p.global;
                if (b) {
                    var v = p.unicode;
                    p.lastIndex = 0
                }
                var x = [];
                while (1) {
                    var y = l(p, d);
                    if (null === y) break;
                    if (x.push(y), !b) break;
                    var k = String(y[0]);
                    "" === k && (p.lastIndex = s(d, i(p.lastIndex), v))
                }
                for (var w = "", _ = 0, S = 0; S < x.length; S++) {
                    y = x[S];
                    for (var T = String(y[0]), E = c(u(a(y.index), d.length), 0), C = [], A = 1; A < y.length; A++) C.push(m(y[A]));
                    var O = y.groups;
                    if (f) {
                        var P = [T].concat(C, E, d);
                        void 0 !== O && P.push(O);
                        var N = String(t.apply(void 0, P))
                    } else N = g(T, d, E, C, O, t);
                    E >= _ && (w += d.slice(_, E) + N, _ = E + T.length)
                }
                return w + d.slice(_)
            }];

            function g(e, t, o, i, a, s) {
                var l = o + e.length, c = i.length, u = f;
                return void 0 !== a && (a = r(a), u = d), n.call(s, u, function (n, r) {
                    var s;
                    switch (r.charAt(0)) {
                        case"$":
                            return "$";
                        case"&":
                            return e;
                        case"`":
                            return t.slice(0, o);
                        case"'":
                            return t.slice(l);
                        case"<":
                            s = a[r.slice(1, -1)];
                            break;
                        default:
                            var u = +r;
                            if (0 === u) return n;
                            if (u > c) {
                                var d = p(u / 10);
                                return 0 === d ? n : d <= c ? void 0 === i[d - 1] ? r.charAt(1) : i[d - 1] + r.charAt(1) : n
                            }
                            s = i[u - 1]
                    }
                    return void 0 === s ? "" : s
                })
            }
        })
    }, a4bb: function (e, t, n) {
        e.exports = n("fda6")
    }, a5ab: function (e, t, n) {
        var o = n("a812"), r = Math.min;
        e.exports = function (e) {
            return e > 0 ? r(o(e), 9007199254740991) : 0
        }
    }, a5b8: function (e, t, n) {
        "use strict";
        var o = n("d8e8");

        function r(e) {
            var t, n;
            this.promise = new e(function (e, o) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = o
            }), this.resolve = o(t), this.reject = o(n)
        }

        e.exports.f = function (e) {
            return new r(e)
        }
    }, a722: function (e, t, n) {
        "use strict";
        n("db6d");
        var o = n("e8f2");
        t["a"] = Object(o["a"])("layout")
    }, a745: function (e, t, n) {
        e.exports = n("d604")
    }, a7d3: function (e, t) {
        var n = e.exports = {version: "2.6.1"};
        "number" == typeof __e && (__e = n)
    }, a812: function (e, t) {
        var n = Math.ceil, o = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
        }
    }, a968: function (e) {
        e.exports = {
            setting: "การตั้งค่า",
            closeFeatureLabel: "ไม่ว่าจะปิดคุณสมบัติ 'ดาวน์โหลดรูปภาพ / วิดีโอ'",
            imageDownloadTip: "ดาวน์โหลดภาพ: รองรับ Shopee, 1688, Taobao, Tmall, Pinduoduo, AliExpress, Lazada, ฯลฯ ",
            videoDownloadTip: "ดาวน์โหลดวิดีโอ: รองรับ 1688, Tmall, AliExpress, Pinduoduo ฯลฯ "
        }
    }, aa77: function (e, t, n) {
        var o = n("5ca1"), r = n("be13"), i = n("79e5"), a = n("fdef"), s = "[" + a + "]", l = "​",
            c = RegExp("^" + s + s + "*"), u = RegExp(s + s + "*$"), p = function (e, t, n) {
                var r = {}, s = i(function () {
                    return !!a[e]() || l[e]() != l
                }), c = r[e] = s ? t(d) : a[e];
                n && (r[n] = c), o(o.P + o.F * s, "String", r)
            }, d = p.trim = function (e, t) {
                return e = String(r(e)), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(u, "")), e
            };
        e.exports = p
    }, aae3: function (e, t, n) {
        var o = n("d3f4"), r = n("2d95"), i = n("2b4c")("match");
        e.exports = function (e) {
            var t;
            return o(e) && (void 0 !== (t = e[i]) ? !!t : "RegExp" == r(e))
        }
    }, b014: function (e) {
        e.exports = {noUpdate: "目前沒有更新", moreData: "加載更多數據", noData: "沒有更多數據！"}
    }, b0af: function (e, t, n) {
        "use strict";
        n("4c94"), n("d0e7");
        var o = n("b64a"), r = n("2b0e");

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var a = r["default"].extend({
            name: "elevatable",
            props: {elevation: [Number, String]},
            computed: {
                computedElevation: function () {
                    return this.elevation
                }, elevationClasses: function () {
                    return this.computedElevation ? i({}, "elevation-" + this.computedElevation, !0) : {}
                }
            }
        }), s = n("23bf"), l = n("6a18"), c = n("58df"), u = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, p = Object(c["a"])(o["a"], a, s["a"], l["a"]).extend({
            name: "v-sheet",
            props: {tag: {type: String, default: "div"}, tile: Boolean},
            computed: {
                classes: function () {
                    return u({"v-sheet": !0, "v-sheet--tile": this.tile}, this.themeClasses, this.elevationClasses)
                }, styles: function () {
                    return this.measurableStyles
                }
            },
            render: function (e) {
                var t = {class: this.classes, style: this.styles, on: this.$listeners};
                return e(this.tag, this.setBackgroundColor(this.color, t), this.$slots.default)
            }
        }), d = p, f = n("0d01"), m = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t["a"] = Object(c["a"])(f["a"], d).extend({
            name: "v-card",
            props: {flat: Boolean, hover: Boolean, img: String, raised: Boolean},
            computed: {
                classes: function () {
                    return m({
                        "v-card": !0,
                        "v-card--flat": this.flat,
                        "v-card--hover": this.hover
                    }, d.options.computed.classes.call(this))
                }, styles: function () {
                    var e = m({}, d.options.computed.styles.call(this));
                    return this.img && (e.background = 'url("' + this.img + '") center center / cover no-repeat'), e
                }
            },
            render: function (e) {
                var t = this.generateRouteLink(this.classes), n = t.tag, o = t.data;
                return o.style = this.styles, e(n, this.setBackgroundColor(this.color, o), this.$slots.default)
            }
        })
    }, b0bc: function (e, t) {
        e.exports = function (e, t, n, o) {
            if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, b0c5: function (e, t, n) {
        "use strict";
        var o = n("520a");
        n("5ca1")({target: "RegExp", proto: !0, forced: o !== /./.exec}, {exec: o})
    }, b157: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, "@-webkit-keyframes poup-icon-scale-data-v-747ac3de{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.4);transform:scale(1.4)}}@keyframes poup-icon-scale-data-v-747ac3de{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(1.4);transform:scale(1.4)}}.app-popup-guide[data-v-747ac3de]{position:absolute;top:12px;right:86px;z-index:99}.app-popup-guide-content[data-v-747ac3de]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.popup-icon[data-v-747ac3de]{width:20px;height:20px;-webkit-animation:poup-icon-scale-data-v-747ac3de 1.2s linear infinite alternate;animation:poup-icon-scale-data-v-747ac3de 1.2s linear infinite alternate;cursor:pointer}.popup-view[data-v-747ac3de]{width:353px;border:2px dashed rgba(253,179,19,.92)}.popup-view .popup-view__img[data-v-747ac3de]{width:100%;height:auto;cursor:pointer}", ""])
    }, b22a: function (e, t) {
        e.exports = {}
    }, b398: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-font-feature-settings:"liga";font-feature-settings:"liga";font-size:24px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1);vertical-align:text-bottom}.v-icon--right{margin-left:16px}.v-icon--left{margin-right:16px}.v-icon.v-icon.v-icon--link{cursor:pointer}.v-icon--disabled{pointer-events:none;opacity:.6}.v-icon--is-component{height:24px}', ""])
    }, b3df: function (e) {
        e.exports = {
            warningForSendMessageInBulk: "請勿頻繁群發消息，容易被用戶投訴或被系統識別為垃圾消息（軟件不承擔任何責任）！",
            inputMessageLabel: "輸入消息內容",
            sendOver: "{name} 發送成功，消息剩餘 {count} 次",
            sendFail: "{name} 發送失敗",
            pleaseGoToWebchat: "請前往蝦皮聊聊進行操作，3s後自動跳轉",
            pleaseLoginShopeeMainPage: "請前往xiapibuy頁面同步登錄態，3s後自動跳轉",
            pleaseFillInTheMessage: "請填寫消息內容",
            pleaseSelectUsers: "請選擇用戶",
            cancelled: "已取消",
            sendDone: "已完成",
            runOutOfRemainQuantity: "剩餘次數已用完",
            userDisabled: "{name} 被Shopee禁用"
        }
    }, b3e7: function (e, t) {
        e.exports = function () {
        }
    }, b42c: function (e, t, n) {
        n("fa54");
        for (var o = n("da3c"), r = n("8ce0"), i = n("b22a"), a = n("1b55")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
            var c = s[l], u = o[c], p = u && u.prototype;
            p && !p[a] && r(p, a, c), i[c] = i.Array
        }
    }, b457: function (e, t) {
        e.exports = !0
    }, b5aa: function (e, t, n) {
        var o = n("6e1f");
        e.exports = Array.isArray || function (e) {
            return "Array" == o(e)
        }
    }, b604: function (e, t, n) {
        "use strict";
        var o = n("d13f"), r = n("a7d3"), i = n("da3c"), a = n("302f"), s = n("decf");
        o(o.P + o.R, "Promise", {
            finally: function (e) {
                var t = a(this, r.Promise || i.Promise), n = "function" == typeof e;
                return this.then(n ? function (n) {
                    return s(t, e()).then(function () {
                        return n
                    })
                } : e, n ? function (n) {
                    return s(t, e()).then(function () {
                        throw n
                    })
                } : e)
            }
        })
    }, b64a: function (e, t, n) {
        "use strict";
        var o = n("2b0e"), r = function () {
            function e(e, t) {
                var n = [], o = !0, r = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(o = (a = s.next()).done); o = !0) if (n.push(a.value), t && n.length === t) break
                } catch (l) {
                    r = !0, i = l
                } finally {
                    try {
                        !o && s["return"] && s["return"]()
                    } finally {
                        if (r) throw i
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(), i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function s(e) {
            return !!e && !!e.match(/^(#|(rgb|hsl)a?\()/)
        }

        t["a"] = o["default"].extend({
            name: "colorable",
            props: {color: String},
            methods: {
                setBackgroundColor: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return s(e) ? t.style = i({}, t.style, {
                        "background-color": "" + e,
                        "border-color": "" + e
                    }) : e && (t.class = i({}, t.class, a({}, e, !0))), t
                }, setTextColor: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (s(e)) t.style = i({}, t.style, {color: "" + e, "caret-color": "" + e}); else if (e) {
                        var n = e.toString().trim().split(" ", 2), o = r(n, 2), l = o[0], c = o[1];
                        t.class = i({}, t.class, a({}, l + "--text", !0)), c && (t.class["text--" + c] = !0)
                    }
                    return t
                }
            }
        })
    }, b77f: function (e, t, n) {
        var o = n("0f89"), r = n("f159");
        e.exports = n("a7d3").getIterator = function (e) {
            var t = r(e);
            if ("function" != typeof t) throw TypeError(e + " is not iterable!");
            return o(t.call(e))
        }
    }, b7e3: function (e, t, n) {
        var o = n("e4b7");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("ec3aeef6", o, !0, {sourceMap: !1, shadowMode: !1})
    }, ba95: function (e, t, n) {
        "use strict";
        var o = n("b64a"), r = n("0d01"), i = n("98a1"), a = n("6a18"), s = n("3ccf"), l = n("58df"),
            c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        t["a"] = Object(l["a"])(o["a"], r["a"], i["a"], a["a"]).extend({
            name: "v-list-tile",
            directives: {Ripple: s["a"]},
            inheritAttrs: !1,
            props: {
                activeClass: {type: String, default: "primary--text"},
                avatar: Boolean,
                inactive: Boolean,
                tag: String
            },
            data: function () {
                return {proxyClass: "v-list__tile--active"}
            },
            computed: {
                listClasses: function () {
                    return this.disabled ? {"v-list--disabled": !0} : void 0
                }, classes: function () {
                    return c({
                        "v-list__tile": !0,
                        "v-list__tile--link": this.isLink && !this.inactive,
                        "v-list__tile--avatar": this.avatar,
                        "v-list__tile--disabled": this.disabled,
                        "v-list__tile--active": !this.to && this.isActive
                    }, this.themeClasses, u({}, this.activeClass, this.isActive))
                }, isLink: function () {
                    var e = this.$listeners && (this.$listeners.click || this.$listeners["!click"]);
                    return Boolean(this.href || this.to || e)
                }
            },
            render: function (e) {
                var t = !this.inactive && this.isLink, n = t ? this.generateRouteLink(this.classes) : {
                    tag: this.tag || "div",
                    data: {class: this.classes}
                }, o = n.tag, r = n.data;
                return r.attrs = Object.assign({}, r.attrs, this.$attrs), e("div", this.setTextColor(!this.disabled && this.isActive && this.color, {
                    class: this.listClasses,
                    attrs: {disabled: this.disabled, role: "listitem"}
                }), [e(o, r, this.$slots.default)])
            }
        })
    }, bb71: function (e, t, n) {
        "use strict";
        var o = {};
        n.r(o), n.d(o, "linear", function () {
            return I
        }), n.d(o, "easeInQuad", function () {
            return F
        }), n.d(o, "easeOutQuad", function () {
            return M
        }), n.d(o, "easeInOutQuad", function () {
            return D
        }), n.d(o, "easeInCubic", function () {
            return R
        }), n.d(o, "easeOutCubic", function () {
            return j
        }), n.d(o, "easeInOutCubic", function () {
            return B
        }), n.d(o, "easeInQuart", function () {
            return $
        }), n.d(o, "easeOutQuart", function () {
            return z
        }), n.d(o, "easeInOutQuart", function () {
            return U
        }), n.d(o, "easeInQuint", function () {
            return H
        }), n.d(o, "easeOutQuint", function () {
            return Y
        }), n.d(o, "easeInOutQuint", function () {
            return G
        });
        var r = n("2b0e");

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var a = {
            bar: 0,
            bottom: 0,
            footer: 0,
            insetFooter: 0,
            left: 0,
            right: 0,
            top: 0,
            components: {bar: {}, bottom: {}, footer: {}, insetFooter: {}, left: {}, right: {}, top: {}},
            bind: function (e, t, n) {
                this.components[t] && (this.components[t] = i({}, e, n), this.update(t))
            },
            unbind: function (e, t) {
                null != this.components[t][e] && (delete this.components[t][e], this.update(t))
            },
            update: function (e) {
                this[e] = Object.values(this.components[e]).reduce(function (e, t) {
                    return e + t
                }, 0)
            }
        }, s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, l = {thresholds: {xs: 600, sm: 960, md: 1280, lg: 1920}, scrollbarWidth: 16};

        function c() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e || (e = {}), r["default"].extend({
                data: function () {
                    return s({clientHeight: p(), clientWidth: u(), resizeTimeout: void 0}, l, e)
                }, computed: {
                    breakpoint: function () {
                        var e = this.clientWidth < this.thresholds.xs, t = this.clientWidth < this.thresholds.sm && !e,
                            n = this.clientWidth < this.thresholds.md - this.scrollbarWidth && !(t || e),
                            o = this.clientWidth < this.thresholds.lg - this.scrollbarWidth && !(n || t || e),
                            r = this.clientWidth >= this.thresholds.lg - this.scrollbarWidth, i = e, a = t,
                            s = (e || t) && !(n || o || r), l = !e && (t || n || o || r), c = n,
                            u = (e || t || n) && !(o || r), p = !(e || t) && (n || o || r), d = o,
                            f = (e || t || n || o) && !r, m = !(e || t || n) && (o || r), h = r, g = void 0;
                        switch (!0) {
                            case e:
                                g = "xs";
                                break;
                            case t:
                                g = "sm";
                                break;
                            case n:
                                g = "md";
                                break;
                            case o:
                                g = "lg";
                                break;
                            default:
                                g = "xl";
                                break
                        }
                        return {
                            xs: e,
                            sm: t,
                            md: n,
                            lg: o,
                            xl: r,
                            name: g,
                            xsOnly: i,
                            smOnly: a,
                            smAndDown: s,
                            smAndUp: l,
                            mdOnly: c,
                            mdAndDown: u,
                            mdAndUp: p,
                            lgOnly: d,
                            lgAndDown: f,
                            lgAndUp: m,
                            xlOnly: h,
                            width: this.clientWidth,
                            height: this.clientHeight,
                            thresholds: this.thresholds,
                            scrollbarWidth: this.scrollbarWidth
                        }
                    }
                }, created: function () {
                    "undefined" !== typeof window && window.addEventListener("resize", this.onResize, {passive: !0})
                }, beforeDestroy: function () {
                    "undefined" !== typeof window && window.removeEventListener("resize", this.onResize)
                }, methods: {
                    onResize: function () {
                        clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(this.setDimensions, 200)
                    }, setDimensions: function () {
                        this.clientHeight = p(), this.clientWidth = u()
                    }
                }
            })
        }

        function u() {
            return "undefined" === typeof document ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        }

        function p() {
            return "undefined" === typeof document ? 0 : Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        }

        var d = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, f = {
            primary: "#1976D2",
            secondary: "#424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00"
        };

        function m() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return !1 !== e && d({}, f, e)
        }

        var h = {
            complete: "check",
            cancel: "cancel",
            close: "close",
            delete: "cancel",
            clear: "clear",
            success: "check_circle",
            info: "info",
            warning: "priority_high",
            error: "warning",
            prev: "chevron_left",
            next: "chevron_right",
            checkboxOn: "check_box",
            checkboxOff: "check_box_outline_blank",
            checkboxIndeterminate: "indeterminate_check_box",
            delimiter: "fiber_manual_record",
            sort: "arrow_upward",
            expand: "keyboard_arrow_down",
            menu: "menu",
            subgroup: "arrow_drop_down",
            dropdown: "arrow_drop_down",
            radioOn: "radio_button_checked",
            radioOff: "radio_button_unchecked",
            edit: "edit",
            ratingEmpty: "star_border",
            ratingFull: "star",
            ratingHalf: "star_half",
            loading: "cached"
        }, g = {
            complete: "mdi-check",
            cancel: "mdi-close-circle",
            close: "mdi-close",
            delete: "mdi-close-circle",
            clear: "mdi-close",
            success: "mdi-check-circle",
            info: "mdi-information",
            warning: "mdi-exclamation",
            error: "mdi-alert",
            prev: "mdi-chevron-left",
            next: "mdi-chevron-right",
            checkboxOn: "mdi-checkbox-marked",
            checkboxOff: "mdi-checkbox-blank-outline",
            checkboxIndeterminate: "mdi-minus-box",
            delimiter: "mdi-circle",
            sort: "mdi-arrow-up",
            expand: "mdi-chevron-down",
            menu: "mdi-menu",
            subgroup: "mdi-menu-down",
            dropdown: "mdi-menu-down",
            radioOn: "mdi-radiobox-marked",
            radioOff: "mdi-radiobox-blank",
            edit: "mdi-pencil",
            ratingEmpty: "mdi-star-outline",
            ratingFull: "mdi-star",
            ratingHalf: "mdi-star-half"
        }, b = {
            complete: "fa fa-check",
            cancel: "fa fa-times-circle",
            close: "fa fa-times",
            delete: "fa fa-times-circle",
            clear: "fa fa-times-circle",
            success: "fa fa-check-circle",
            info: "fa fa-info-circle",
            warning: "fa fa-exclamation",
            error: "fa fa-exclamation-triangle",
            prev: "fa fa-chevron-left",
            next: "fa fa-chevron-right",
            checkboxOn: "fa fa-check-square",
            checkboxOff: "fa fa-square-o",
            checkboxIndeterminate: "fa fa-minus-square",
            delimiter: "fa fa-circle",
            sort: "fa fa-sort-up",
            expand: "fa fa-chevron-down",
            menu: "fa fa-bars",
            subgroup: "fa fa-caret-down",
            dropdown: "fa fa-caret-down",
            radioOn: "fa fa-dot-circle",
            radioOff: "fa fa-circle-o",
            edit: "fa fa-pencil",
            ratingEmpty: "fa fa-star-o",
            ratingFull: "fa fa-star",
            ratingHalf: "fa fa-star-half-o"
        }, v = {
            complete: "fas fa-check",
            cancel: "fas fa-times-circle",
            close: "fas fa-times",
            delete: "fas fa-times-circle",
            clear: "fas fa-times-circle",
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation",
            error: "fas fa-exclamation-triangle",
            prev: "fas fa-chevron-left",
            next: "fas fa-chevron-right",
            checkboxOn: "fas fa-check-square",
            checkboxOff: "far fa-square",
            checkboxIndeterminate: "fas fa-minus-square",
            delimiter: "fas fa-circle",
            sort: "fas fa-sort-up",
            expand: "fas fa-chevron-down",
            menu: "fas fa-bars",
            subgroup: "fas fa-caret-down",
            dropdown: "fas fa-caret-down",
            radioOn: "far fa-dot-circle",
            radioOff: "far fa-circle",
            edit: "fas fa-edit",
            ratingEmpty: "far fa-star",
            ratingFull: "fas fa-star",
            ratingHalf: "fas fa-star-half"
        };

        function x(e, t) {
            var n = {};
            for (var o in t) n[o] = {component: e, props: {icon: t[o].split(" fa-")}};
            return n
        }

        var y = {md: h, mdi: g, fa: v, fa4: b, faSvg: x("font-awesome-icon", v)};

        function k() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "md",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object.assign({}, y[e] || y.md, t)
        }

        var w = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        }, _ = {minifyTheme: null, themeCache: null, customProperties: !1, cspNonce: null};

        function S() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return w({}, _, e)
        }

        var T = {
            dataIterator: {
                rowsPerPageText: "Items per page:",
                rowsPerPageAll: "All",
                pageText: "{0}-{1} of {2}",
                noResultsText: "No matching records found",
                nextPage: "Next page",
                prevPage: "Previous page"
            },
            dataTable: {rowsPerPageText: "Rows per page:"},
            noDataText: "No data available",
            carousel: {prev: "Previous visual", next: "Next visual"}
        }, E = n("80d2"), C = n("d9bd");

        function A(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        var O = "$vuetify.", P = Symbol("Lang fallback");

        function N(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = t.replace(O, ""),
                r = Object(E["j"])(e, o, P);
            return r === P && (n ? (Object(C["a"])('Translation key "' + o + '" not found in fallback'), r = t) : (Object(C["c"])('Translation key "' + o + '" not found, falling back to default'), r = N(T, t, !0))), r
        }

        function L() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return {
                locales: Object.assign({en: T}, e.locales), current: e.current || "en", t: function (t) {
                    for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                    if (!t.startsWith(O)) return t;
                    if (e.t) return e.t.apply(e, [t].concat(A(o)));
                    var i = N(this.locales[this.current], t);
                    return i.replace(/\{(\d+)\}/g, function (e, t) {
                        return String(o[+t])
                    })
                }
            }
        }

        var I = function (e) {
            return e
        }, F = function (e) {
            return e * e
        }, M = function (e) {
            return e * (2 - e)
        }, D = function (e) {
            return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
        }, R = function (e) {
            return e * e * e
        }, j = function (e) {
            return --e * e * e + 1
        }, B = function (e) {
            return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
        }, $ = function (e) {
            return e * e * e * e
        }, z = function (e) {
            return 1 - --e * e * e * e
        }, U = function (e) {
            return e < .5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e
        }, H = function (e) {
            return e * e * e * e * e
        }, Y = function (e) {
            return 1 + --e * e * e * e * e
        }, G = function (e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e
        };

        function V(e) {
            if ("number" === typeof e) return e;
            var t = q(e);
            if (!t) throw"string" === typeof e ? new Error('Target element "' + e + '" not found.') : new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received " + K(e) + " instead.");
            var n = 0;
            while (t) n += t.offsetTop, t = t.offsetParent;
            return n
        }

        function W(e) {
            var t = q(e);
            if (t) return t;
            throw"string" === typeof e ? new Error('Container element "' + e + '" not found.') : new TypeError("Container must be a Selector/HTMLElement/VueComponent, received " + K(e) + " instead.")
        }

        function K(e) {
            return null == e ? e : e.constructor.name
        }

        function q(e) {
            return "string" === typeof e ? document.querySelector(e) : e && e._isVue ? e.$el : e instanceof HTMLElement ? e : null
        }

        var X = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };

        function Q(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = X({
                container: document.scrollingElement || document.body || document.documentElement,
                duration: 500,
                offset: 0,
                easing: "easeInOutCubic",
                appOffset: !0
            }, t), i = W(n.container);
            if (n.appOffset) {
                var a = i.classList.contains("v-navigation-drawer"),
                    s = i.classList.contains("v-navigation-drawer--clipped");
                n.offset += r["default"].prototype.$vuetify.application.bar, a && !s || (n.offset += r["default"].prototype.$vuetify.application.top)
            }
            var l = performance.now(), c = V(e) - n.offset, u = i.scrollTop;
            if (c === u) return Promise.resolve(c);
            var p = "function" === typeof n.easing ? n.easing : o[n.easing];
            if (!p) throw new TypeError('Easing function "' + n.easing + '" not found.');
            return new Promise(function (e) {
                return requestAnimationFrame(function t(o) {
                    var r = o - l, a = Math.abs(n.duration ? Math.min(r / n.duration, 1) : 1);
                    if (i.scrollTop = Math.floor(u + (c - u) * p(a)), 1 === a || i.clientHeight + i.scrollTop === i.scrollHeight) return e(c);
                    requestAnimationFrame(t)
                })
            })
        }

        var J = {
            install: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.installed) {
                    this.installed = !0, r["default"] !== e && Object(C["a"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this"), Z(e);
                    var n = L(t.lang);
                    if (e.prototype.$vuetify = new e({
                        mixins: [c(t.breakpoint)],
                        data: {
                            application: a,
                            dark: !1,
                            icons: k(t.iconfont, t.icons),
                            lang: n,
                            options: S(t.options),
                            rtl: t.rtl,
                            theme: m(t.theme)
                        },
                        methods: {goTo: Q, t: n.t.bind(n)}
                    }), t.directives) for (var o in t.directives) e.directive(o, t.directives[o]);
                    (function t(n) {
                        if (n) {
                            for (var o in n) {
                                var r = n[o];
                                r && !t(r.$_vuetify_subcomponents) && e.component(o, r)
                            }
                            return !0
                        }
                        return !1
                    })(t.components)
                }
            }, version: "1.5.15"
        };

        function Z(e, t) {
            var n = t || "^2.5.18", o = n.split(".", 3).map(function (e) {
                return e.replace(/\D/g, "")
            }).map(Number), r = e.version.split(".", 3).map(function (e) {
                return parseInt(e, 10)
            }), i = r[0] === o[0] && (r[1] > o[1] || r[1] === o[1] && r[2] >= o[2]);
            i || Object(C["c"])("Vuetify requires Vue version " + n)
        }

        var ee = J;
        t["a"] = ee
    }, bc25: function (e, t, n) {
        var o = n("f2fe");
        e.exports = function (e, t, n) {
            if (o(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, o) {
                        return e.call(t, n, o)
                    };
                case 3:
                    return function (n, o, r) {
                        return e.call(t, n, o, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, bc2a: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".app-background-img[data-v-563ab1a0]{position:relative;width:100%;height:100%;max-width:1920px;min-width:1500px;min-height:930px;margin:0 auto}", ""])
    }, bcaa: function (e, t, n) {
        var o = n("cb7c"), r = n("d3f4"), i = n("a5b8");
        e.exports = function (e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = i.f(e), a = n.resolve;
            return a(t), n.promise
        }
    }, bced: function (e, t, n) {
        var o = n("9331");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("2fcaae01", o, !0, {sourceMap: !1, shadowMode: !1})
    }, bcf6: function (e) {
        e.exports = {
            setting: "设置",
            closeFeatureLabel: "是否关闭'下载图片/视频'功能",
            imageDownloadTip: "图片下载：支持虾皮、1688、淘宝、天猫、拼多多、速卖通、Lazada等平台",
            videoDownloadTip: "视频下载：支持 1688、天猫、速卖通、拼多多等平台"
        }
    }, bd45: function (e, t, n) {
        e.exports = n.p + "img/sidebar-applist.15dd69ab.png"
    }, bd86: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i
        });
        var o = n("85f2"), r = n.n(o);

        function i(e, t, n) {
            return t in e ? r()(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
        }
    }, bdfd: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;-webkit-box-flex:1;-ms-flex:1 1 0px;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0 0;-webkit-transition:inherit;transition:inherit}.v-divider--inset:not(.v-divider--vertical){margin-left:72px;max-width:calc(100% - 72px)}.v-divider--vertical{-ms-flex-item-align:stretch;align-self:stretch;border:solid;border-width:0 thin 0 0;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""])
    }, be13: function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, bfc5: function (e, t, n) {
        "use strict";
        var o = n("6a18"), r = n("58df");
        t["a"] = Object(r["a"])(o["a"]).extend({
            name: "theme-provider",
            props: {root: Boolean},
            computed: {
                isDark: function () {
                    return this.root ? this.rootIsDark : o["a"].options.computed.isDark.call(this)
                }
            },
            render: function () {
                return this.$slots.default && this.$slots.default.find(function (e) {
                    return !e.isComment && " " !== e.text
                })
            }
        })
    }, bff6: function (e, t, n) {
        var o = n("2310");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("740734e6", o, !0, {sourceMap: !1, shadowMode: !1})
    }, c001: function (e) {
        e.exports = {
            myFansLabel: "我的粉丝",
            selectAll: "全选",
            fansList: "粉丝列表",
            stopSendMessage: "停止发送",
            sendMessageInBulk: "群发消息"
        }
    }, c0d8: function (e, t, n) {
        var o = n("3adc").f, r = n("43c8"), i = n("1b55")("toStringTag");
        e.exports = function (e, t, n) {
            e && !r(e = n ? e : e.prototype, i) && o(e, i, {configurable: !0, value: t})
        }
    }, c10b: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".container{-webkit-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;margin:auto;padding:24px;width:100%}@media only screen and (min-width:960px){.container{max-width:900px}}@media only screen and (min-width:1264px){.container{max-width:1185px}}@media only screen and (min-width:1904px){.container{max-width:1785px}}@media only screen and (max-width:959px){.container{padding:16px}}.container.fluid{max-width:100%}.container.fill-height{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.container.fill-height>.layout{height:100%;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.container.grid-list-xs .layout .flex{padding:1px}.container.grid-list-xs .layout:only-child{margin:-1px}.container.grid-list-xs .layout:not(:only-child){margin:auto -1px}.container.grid-list-xs :not(:only-child) .layout:first-child{margin-top:-1px}.container.grid-list-xs :not(:only-child) .layout:last-child{margin-bottom:-1px}.container.grid-list-sm .layout .flex{padding:2px}.container.grid-list-sm .layout:only-child{margin:-2px}.container.grid-list-sm .layout:not(:only-child){margin:auto -2px}.container.grid-list-sm :not(:only-child) .layout:first-child{margin-top:-2px}.container.grid-list-sm :not(:only-child) .layout:last-child{margin-bottom:-2px}.container.grid-list-md .layout .flex{padding:4px}.container.grid-list-md .layout:only-child{margin:-4px}.container.grid-list-md .layout:not(:only-child){margin:auto -4px}.container.grid-list-md :not(:only-child) .layout:first-child{margin-top:-4px}.container.grid-list-md :not(:only-child) .layout:last-child{margin-bottom:-4px}.container.grid-list-lg .layout .flex{padding:8px}.container.grid-list-lg .layout:only-child{margin:-8px}.container.grid-list-lg .layout:not(:only-child){margin:auto -8px}.container.grid-list-lg :not(:only-child) .layout:first-child{margin-top:-8px}.container.grid-list-lg :not(:only-child) .layout:last-child{margin-bottom:-8px}.container.grid-list-xl .layout .flex{padding:12px}.container.grid-list-xl .layout:only-child{margin:-12px}.container.grid-list-xl .layout:not(:only-child){margin:auto -12px}.container.grid-list-xl :not(:only-child) .layout:first-child{margin-top:-12px}.container.grid-list-xl :not(:only-child) .layout:last-child{margin-bottom:-12px}.layout{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;min-width:0}.layout.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.layout.row.reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.layout.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.layout.column.reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.layout.column>.flex{max-width:100%}.layout.wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}@media (min-width:0){.flex.xs1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-xs1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.xs2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-xs2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.xs3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-xs3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.xs4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-xs4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.xs5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-xs5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.xs6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-xs6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.xs7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-xs7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.xs8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-xs8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.xs9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-xs9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.xs10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-xs10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.xs11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-xs11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.xs12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-xs12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-xs0{margin-left:0}.flex.offset-xs1{margin-left:8.333333333333332%}.flex.offset-xs2{margin-left:16.666666666666664%}.flex.offset-xs3{margin-left:25%}.flex.offset-xs4{margin-left:33.33333333333333%}.flex.offset-xs5{margin-left:41.66666666666667%}.flex.offset-xs6{margin-left:50%}.flex.offset-xs7{margin-left:58.333333333333336%}.flex.offset-xs8{margin-left:66.66666666666666%}.flex.offset-xs9{margin-left:75%}.flex.offset-xs10{margin-left:83.33333333333334%}.flex.offset-xs11{margin-left:91.66666666666666%}.flex.offset-xs12{margin-left:100%}}@media (min-width:600px){.flex.sm1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-sm1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.sm2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-sm2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.sm3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-sm3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.sm4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-sm4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.sm5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-sm5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.sm6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-sm6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.sm7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-sm7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.sm8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-sm8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.sm9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-sm9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.sm10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-sm10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.sm11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-sm11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.sm12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-sm12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-sm0{margin-left:0}.flex.offset-sm1{margin-left:8.333333333333332%}.flex.offset-sm2{margin-left:16.666666666666664%}.flex.offset-sm3{margin-left:25%}.flex.offset-sm4{margin-left:33.33333333333333%}.flex.offset-sm5{margin-left:41.66666666666667%}.flex.offset-sm6{margin-left:50%}.flex.offset-sm7{margin-left:58.333333333333336%}.flex.offset-sm8{margin-left:66.66666666666666%}.flex.offset-sm9{margin-left:75%}.flex.offset-sm10{margin-left:83.33333333333334%}.flex.offset-sm11{margin-left:91.66666666666666%}.flex.offset-sm12{margin-left:100%}}@media (min-width:960px){.flex.md1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-md1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.md2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-md2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.md3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-md3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.md4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-md4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.md5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-md5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.md6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-md6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.md7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-md7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.md8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-md8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.md9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-md9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.md10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-md10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.md11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-md11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.md12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-md12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-md0{margin-left:0}.flex.offset-md1{margin-left:8.333333333333332%}.flex.offset-md2{margin-left:16.666666666666664%}.flex.offset-md3{margin-left:25%}.flex.offset-md4{margin-left:33.33333333333333%}.flex.offset-md5{margin-left:41.66666666666667%}.flex.offset-md6{margin-left:50%}.flex.offset-md7{margin-left:58.333333333333336%}.flex.offset-md8{margin-left:66.66666666666666%}.flex.offset-md9{margin-left:75%}.flex.offset-md10{margin-left:83.33333333333334%}.flex.offset-md11{margin-left:91.66666666666666%}.flex.offset-md12{margin-left:100%}}@media (min-width:1264px){.flex.lg1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-lg1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.lg2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-lg2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.lg3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-lg3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.lg4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-lg4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.lg5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-lg5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.lg6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-lg6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.lg7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-lg7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.lg8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-lg8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.lg9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-lg9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.lg10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-lg10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.lg11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-lg11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.lg12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-lg12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-lg0{margin-left:0}.flex.offset-lg1{margin-left:8.333333333333332%}.flex.offset-lg2{margin-left:16.666666666666664%}.flex.offset-lg3{margin-left:25%}.flex.offset-lg4{margin-left:33.33333333333333%}.flex.offset-lg5{margin-left:41.66666666666667%}.flex.offset-lg6{margin-left:50%}.flex.offset-lg7{margin-left:58.333333333333336%}.flex.offset-lg8{margin-left:66.66666666666666%}.flex.offset-lg9{margin-left:75%}.flex.offset-lg10{margin-left:83.33333333333334%}.flex.offset-lg11{margin-left:91.66666666666666%}.flex.offset-lg12{margin-left:100%}}@media (min-width:1904px){.flex.xl1{-ms-flex-preferred-size:8.333333333333332%;flex-basis:8.333333333333332%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:8.333333333333332%}.flex.order-xl1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.flex.xl2{-ms-flex-preferred-size:16.666666666666664%;flex-basis:16.666666666666664%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:16.666666666666664%}.flex.order-xl2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.flex.xl3{-ms-flex-preferred-size:25%;flex-basis:25%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:25%}.flex.order-xl3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.flex.xl4{-ms-flex-preferred-size:33.33333333333333%;flex-basis:33.33333333333333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:33.33333333333333%}.flex.order-xl4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.flex.xl5{-ms-flex-preferred-size:41.66666666666667%;flex-basis:41.66666666666667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:41.66666666666667%}.flex.order-xl5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.flex.xl6{-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:50%}.flex.order-xl6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.flex.xl7{-ms-flex-preferred-size:58.333333333333336%;flex-basis:58.333333333333336%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:58.333333333333336%}.flex.order-xl7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.flex.xl8{-ms-flex-preferred-size:66.66666666666666%;flex-basis:66.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:66.66666666666666%}.flex.order-xl8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.flex.xl9{-ms-flex-preferred-size:75%;flex-basis:75%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:75%}.flex.order-xl9{-webkit-box-ordinal-group:10;-ms-flex-order:9;order:9}.flex.xl10{-ms-flex-preferred-size:83.33333333333334%;flex-basis:83.33333333333334%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:83.33333333333334%}.flex.order-xl10{-webkit-box-ordinal-group:11;-ms-flex-order:10;order:10}.flex.xl11{-ms-flex-preferred-size:91.66666666666666%;flex-basis:91.66666666666666%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:91.66666666666666%}.flex.order-xl11{-webkit-box-ordinal-group:12;-ms-flex-order:11;order:11}.flex.xl12{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;max-width:100%}.flex.order-xl12{-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12}.flex.offset-xl0{margin-left:0}.flex.offset-xl1{margin-left:8.333333333333332%}.flex.offset-xl2{margin-left:16.666666666666664%}.flex.offset-xl3{margin-left:25%}.flex.offset-xl4{margin-left:33.33333333333333%}.flex.offset-xl5{margin-left:41.66666666666667%}.flex.offset-xl6{margin-left:50%}.flex.offset-xl7{margin-left:58.333333333333336%}.flex.offset-xl8{margin-left:66.66666666666666%}.flex.offset-xl9{margin-left:75%}.flex.offset-xl10{margin-left:83.33333333333334%}.flex.offset-xl11{margin-left:91.66666666666666%}.flex.offset-xl12{margin-left:100%}}.child-flex>*,.flex{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;max-width:100%}.align-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.align-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.align-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.align-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.align-self-start{-ms-flex-item-align:start;align-self:flex-start}.align-self-end{-ms-flex-item-align:end;align-self:flex-end}.align-self-center{-ms-flex-item-align:center;align-self:center}.align-self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.align-content-start{-ms-flex-line-pack:start;align-content:flex-start}.align-content-end{-ms-flex-line-pack:end;align-content:flex-end}.align-content-center{-ms-flex-line-pack:center;align-content:center}.align-content-space-between{-ms-flex-line-pack:justify;align-content:space-between}.align-content-space-around{-ms-flex-line-pack:distribute;align-content:space-around}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-space-around{-ms-flex-pack:distribute;justify-content:space-around}.justify-space-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-self-start{justify-self:flex-start}.justify-self-end{justify-self:flex-end}.justify-self-center{justify-self:center}.justify-self-baseline{justify-self:baseline}.grow,.spacer{-webkit-box-flex:1!important;-ms-flex-positive:1!important;flex-grow:1!important}.grow{-ms-flex-negative:0!important;flex-shrink:0!important}.shrink{-webkit-box-flex:0!important;-ms-flex-positive:0!important;flex-grow:0!important;-ms-flex-negative:1!important;flex-shrink:1!important}.scroll-y{overflow-y:auto}.fill-height{height:100%}.hide-overflow{overflow:hidden!important}.show-overflow{overflow:visible!important}.ellipsis,.no-wrap{white-space:nowrap}.ellipsis{overflow:hidden;text-overflow:ellipsis}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}.d-flex>*,.d-inline-flex>*{-webkit-box-flex:1!important;-ms-flex:1 1 auto!important;flex:1 1 auto!important}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.d-none{display:none!important}", ""])
    }, c165: function (e, t, n) {
        var o = n("d13f"), r = n("a7d3"), i = n("d782");
        e.exports = function (e, t) {
            var n = (r.Object || {})[e] || Object[e], a = {};
            a[e] = t(n), o(o.S + o.F * i(function () {
                n(1)
            }), "Object", a)
        }
    }, c227: function (e, t, n) {
        var o = n("b22a"), r = n("1b55")("iterator"), i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (o.Array === e || i[r] === e)
        }
    }, c22b: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return a
        });
        var o = n("2b0e"), r = n("80d2"),
            i = {absolute: Boolean, bottom: Boolean, fixed: Boolean, left: Boolean, right: Boolean, top: Boolean};

        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return o["default"].extend({name: "positionable", props: e.length ? Object(r["i"])(i, e) : i})
        }

        t["a"] = a()
    }, c27c: function (e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var o = n("2b0e"), r = (n("da64"), n("b7e3"), n("d3df"), n("d3a4")), i = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-wrapper"}, [n("v-app", [n("app-mask", {attrs: {visible: e.maskVisible}}), n("div", {staticClass: "app-container"}, [n("app-background-img", {
                    attrs: {
                        "bg-img-url": e.backgroundImg,
                        "toolbar-img-url": e.imageURL.browerToolBar,
                        "toolbar-icon-img-url": e.$config.imageURL.browerIcon
                    }
                }, [n("keep-alive", [n(e.component, {
                    tag: "component",
                    attrs: {"image-url": e.imageURL},
                    on: {
                        next: e.handlerNext,
                        previous: e.handlerPrevious,
                        "change-backgroung-img": e.handlerChangeBackgroundImg
                    }
                })], 1)], 1)], 1), n("app-step-bar", {
                    attrs: {step: e.step, "max-step": e.MAX_STEP},
                    on: {input: e.handlerStepInput}
                })], 1)], 1)
            }, a = [], s = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-popup-guide"}, [n("div", {staticClass: "app-popup-guide-content"}, [n("div", {
                    staticClass: "popup-icon",
                    style: e.popupIconStyle
                }), n("div", {staticClass: "popup-view"}, [n("img", {
                    staticClass: "popup-view__img",
                    attrs: {src: e.popupViewImg, alt: "#"}
                })])]), n("app-message-box", {
                    attrs: {position: {left: "-380px", top: "100px"}, width: "370px"},
                    scopedSlots: e._u([{
                        key: "actions", fn: function () {
                            return [n("v-btn", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: e.step > 1,
                                    expression: "step > 1"
                                }], on: {click: e.handlerPrevious}
                            }, [e._v("\n        " + e._s(e.$t("userGuide.previous")) + "\n      ")]), n("v-btn", {
                                staticClass: "primary",
                                on: {click: e.handlerNext}
                            }, [e._v("\n        " + e._s(e.$t("userGuide.next")) + "\n      ")])]
                        }, proxy: !0
                    }])
                }, [1 === e.step ? n("h3", {staticClass: "introduction-title"}, [e._v("\n      " + e._s(e.$t("userGuide.popup.popupTitle")) + "\n    ")]) : e._e(), n("p", {staticClass: "my-0 introduction-text"}, [e._v(e._s(e.messageDict[e.step]))])])], 1)
            }, l = [], c = 4, u = {
                name: "popup-guide", props: {
                    imageUrl: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {step: 1}
                }, computed: {
                    processDone: function () {
                        return this.step >= c
                    }, popupIconStyle: function () {
                        return {background: 'url("'.concat(this.$config.imageURL.popupIcon, '") no-repeat center top / 100%')}
                    }, popupViewImg: function () {
                        return this.popupViewBackGroundImgDict[this.step]
                    }, popupViewBackGroundImgDict: function () {
                        var e = this.imageUrl, t = e.popupView, n = void 0 === t ? "" : t, o = e.popupShop,
                            r = void 0 === o ? "" : o, i = e.popupTool, a = void 0 === i ? "" : i, s = e.popupSetting,
                            l = void 0 === s ? "" : s;
                        return {1: n, 2: r, 3: a, 4: l}
                    }, messageDict: function () {
                        return {
                            1: this.$t("userGuide.popup.popupIntroduction"),
                            2: this.$t("userGuide.popup.shopFeatureIntroduction"),
                            3: this.$t("userGuide.popup.toolFeatureIntroduction"),
                            4: this.$t("userGuide.popup.settingFeatureIntroduction")
                        }
                    }
                }, methods: {
                    handlerNext: function () {
                        this.processDone ? this.$emit("next") : this.step++
                    }, handlerPrevious: function () {
                        this.step--
                    }
                }
            }, p = u, d = (n("1abe"), n("2877")), f = Object(d["a"])(p, s, l, !1, null, "747ac3de", null), m = f.exports,
            h = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "sidebar-guide"}, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.navigationBarVisible,
                        expression: "navigationBarVisible"
                    }], staticClass: "navigation-bar-wrapper"
                }, [n("div", {staticClass: "navigation-bar-img-box"}, [n("img", {
                    attrs: {
                        src: e.imageUrl.navigationBar,
                        alt: "#"
                    }
                })]), n("app-highlight-box", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.highlightBoxVisisble,
                        expression: "highlightBoxVisisble"
                    }],
                    attrs: {
                        position: e.highlightBoxPosition,
                        width: e.highlightBoxSize.width || 0,
                        height: e.highlightBoxSize.height || 0
                    }
                }), n("app-message-box", {
                    attrs: {position: {right: "152px", top: "510px"}, width: "300px"},
                    scopedSlots: e._u([{
                        key: "actions", fn: function () {
                            return [n("div", {staticClass: "display-flex justify-center"}, [n("v-btn", {on: {click: e.handlerPrevious}}, [e._v("\n            " + e._s(e.$t("userGuide.previous")) + "\n          ")]), n("v-btn", {
                                staticClass: "primary",
                                on: {click: e.handlerNext}
                            }, [e._v("\n            " + e._s(e.$t("userGuide.next")) + "\n          ")])], 1)]
                        }, proxy: !0
                    }])
                }, [e.messageTitleDict[e.step] ? n("h3", {staticClass: "introduction-title"}, [e._v("\n        " + e._s(e.messageTitleDict[e.step]) + "\n      ")]) : e._e(), n("p", {staticClass: "my-0 introduction-text"}, [e._v(e._s(e.messageDict[e.step]))])])], 1), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.sidebarImgBoxVisible,
                        expression: "sidebarImgBoxVisible"
                    }], staticClass: "sidebar-wrapper"
                }, [n("div", {staticClass: "sidebar-img-box"}, [n("img", {
                    attrs: {
                        src: e.sidebarImg,
                        alt: "#"
                    }
                })]), n("app-highlight-box", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.highlightBoxVisisble,
                        expression: "highlightBoxVisisble"
                    }], attrs: {position: {left: "117px", top: "79px"}, width: "126px", height: "126px"}
                }), n("app-message-box", {
                    attrs: {position: {top: "110px", left: "-340px"}, width: "300px"},
                    scopedSlots: e._u([{
                        key: "actions", fn: function () {
                            return [n("div", {staticClass: "display-flex justify-center"}, [n("v-btn", {on: {click: e.handlerPrevious}}, [e._v("\n            " + e._s(e.$t("userGuide.previous")) + "\n          ")]), n("v-btn", {
                                staticClass: "primary",
                                on: {click: e.handlerNext}
                            }, [e._v("\n            " + e._s(e.$t("userGuide.next")) + "\n          ")])], 1)]
                        }, proxy: !0
                    }])
                }, [e.messageTitleDict[e.step] ? n("h3", {staticClass: "introduction-title"}, [e._v("\n        " + e._s(e.messageTitleDict[e.step]) + "\n      ")]) : e._e(), n("p", {staticClass: "my-0 introduction-text"}, [e._v(e._s(e.messageDict[e.step]))])])], 1)])
            }, g = [], b = (n("6762"), n("2fdb"), 5), v = {
                name: "sidebar-guide", props: {
                    imageUrl: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {step: 1}
                }, computed: {
                    processDone: function () {
                        return this.step >= b
                    }, messageTitleDict: function () {
                        return {
                            1: this.$t("userGuide.sidebar.navigationBarTitle"),
                            3: this.$t("userGuide.sidebar.appListTitle")
                        }
                    }, messageDict: function () {
                        return {
                            1: this.$t("userGuide.sidebar.navigationBarIntroduction"),
                            2: this.$t("userGuide.sidebar.navigationIconIntroduction"),
                            3: this.$t("userGuide.sidebar.appListIntroduction"),
                            4: this.$t("userGuide.sidebar.appSettingIconIntroduction"),
                            5: this.$t("userGuide.sidebar.appSettingIntroduction")
                        }
                    }, highlightBoxSize: function () {
                        var e = {1: {width: "86px", height: "296px"}, 2: {width: "86px", height: "86px"}};
                        return e[this.step] || {}
                    }, highlightBoxPosition: function () {
                        var e = {1: {right: "60px", top: "498px"}, 2: {right: "60px", top: "440px"}};
                        return e[this.step] || {}
                    }, highlightBoxVisisble: function () {
                        return [1, 2, 4].includes(this.step)
                    }, navigationBarVisible: function () {
                        return this.step < 3
                    }, sidebarImgBoxVisible: function () {
                        return this.step > 2
                    }, sidebarImg: function () {
                        var e = this.imageUrl, t = e.sidebarAppList, n = void 0 === t ? "" : t, o = e.sidebarSetting,
                            r = void 0 === o ? "" : o;
                        return 5 === this.step ? r : n
                    }
                }, methods: {
                    handlerPrevious: function () {
                        1 !== this.step ? this.step-- : this.$emit("previous")
                    }, handlerNext: function () {
                        this.processDone ? this.$emit("next") : this.step++
                    }
                }
            }, x = v, y = (n("cb16"), Object(d["a"])(x, h, g, !1, null, "e69614c6", null)), k = y.exports, w = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "menu-guide"}, [n("div", {staticClass: "menu-guide-content"}, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.goodsMenuImgBoxVisible,
                        expression: "goodsMenuImgBoxVisible"
                    }], staticClass: "goods-menu-img-box"
                }, [n("img", {attrs: {src: e.goodsMenuImg, alt: "#"}})]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.detailMenuImgBoxVisible,
                        expression: "detailMenuImgBoxVisible"
                    }], staticClass: "detail-menu-img-box"
                }, [n("img", {
                    attrs: {
                        src: e.detailMenuImg,
                        alt: "#"
                    }
                })]), n("app-message-box", {
                    class: {"end-message": e.processDone},
                    attrs: {position: e.messageBoxPositon, width: "300px"},
                    scopedSlots: e._u([{
                        key: "actions", fn: function () {
                            return [n("div", {staticClass: "display-flex justify-center"}, [n("v-btn", {on: {click: e.handlerPrevious}}, [e._v("\n            " + e._s(e.$t("userGuide.previous")) + "\n          ")]), n("v-btn", {
                                staticClass: "primary",
                                on: {click: e.handlerNext}
                            }, [e._v("\n            " + e._s(e.processDone ? e.$t("userGuide.done") : e.$t("userGuide.next")) + "\n          ")])], 1)]
                        }, proxy: !0
                    }])
                }, [1 === e.step ? n("h3", {staticClass: "introduction-title"}, [e._v("\n        " + e._s(e.$t("userGuide.menu.functionMenuTitle")) + "\n      ")]) : e._e(), n("p", {staticClass: "my-0 introduction-text"}, [e._v(e._s(e.messageDict[e.step]))])])], 1)])
            }, _ = [], S = 3, T = {
                name: "menu-guide", props: {
                    imageUrl: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {step: 1, backgoroundImgKeyDict: {1: "goodsList", 2: "goodsDetail", 3: "goodsDetail"}}
                }, computed: {
                    goodsMenuImg: function () {
                        return this.imageUrl.goodsMenu || ""
                    }, detailMenuImg: function () {
                        return this.imageUrl.detailMenu || ""
                    }, processDone: function () {
                        return this.step >= S
                    }, messageDict: function () {
                        return {
                            1: this.$t("userGuide.menu.listFunctionMenuIntroduction"),
                            2: this.$t("userGuide.menu.detailFunctionMenuIntroduction"),
                            3: this.$t("userGuide.endMessage")
                        }
                    }, messageBoxPositon: function () {
                        var e = {
                            1: {top: "310px", right: "420px"},
                            2: {bottom: "150px", right: "120px"},
                            3: {top: "50%", left: "50%"}
                        };
                        return e[this.step]
                    }, goodsMenuImgBoxVisible: function () {
                        return 1 === this.step
                    }, detailMenuImgBoxVisible: function () {
                        return 2 === this.step
                    }
                }, methods: {
                    handlerPrevious: function () {
                        1 !== this.step ? (this.step--, this.$emit("change-backgroung-img", this.backgoroundImgKeyDict[this.step])) : this.$emit("previous")
                    }, handlerNext: function () {
                        this.processDone ? this.$emit("next") : (this.step++, this.$emit("change-backgroung-img", this.backgoroundImgKeyDict[this.step]))
                    }
                }
            }, E = T, C = (n("e2b8"), Object(d["a"])(E, w, _, !1, null, "1884f0ac", null)), A = C.exports, O = n("9a36"),
            P = 3, N = {
                name: "App", components: {PopupGuide: m, SidebarGuide: k, MenuGuide: A}, data: function () {
                    return {
                        MAX_STEP: P,
                        maskVisible: !0,
                        step: 1,
                        backgroundImgKey: "home",
                        componentDict: {1: "PopupGuide", 2: "SidebarGuide", 3: "MenuGuide"}
                    }
                }, computed: {
                    imageURL: function () {
                        return this.$i18n.locale === O["p"] ? this.$config.imageURL.en : this.$config.imageURL.zh
                    }, backgroundImgDict: function () {
                        var e = this.imageURL, t = e.shopeeHome, n = e.shopeeGoodsList, o = e.shopeeGoodsDetail;
                        return {home: t, goodsList: n, goodsDetail: o}
                    }, processDone: function () {
                        return this.step === P
                    }, component: function () {
                        return this.componentDict[this.step]
                    }, backgroundImg: function () {
                        var e = this.backgroundImgKey, t = this.backgroundImgDict;
                        return t[e]
                    }
                }, methods: {
                    handlerNext: function () {
                        this.processDone ? window.close() : this.step++
                    }, handlerPrevious: function () {
                        this.step--
                    }, handlerStepInput: function (e) {
                        this.step = e, this.step < 3 ? this.backgroundImgKey = "home" : this.backgroundImgKey = "goodsList"
                    }, handlerChangeBackgroundImg: function (e) {
                        this.backgroundImgKey = e
                    }
                }
            }, L = N, I = (n("65b4"), Object(d["a"])(L, i, a, !1, null, null, null)), F = I.exports, M = n("7496"),
            D = n("b0af"), R = n("99d9"), j = n("8336"), B = (n("bff6"), n("94ab")), $ = n("6a18"), z = n("58df"),
            U = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            }, H = Object(z["a"])(Object(B["b"])("stepper"), $["a"]).extend({
                name: "v-stepper",
                provide: function () {
                    return {stepClick: this.stepClick, isVertical: this.vertical}
                },
                props: {nonLinear: Boolean, altLabels: Boolean, vertical: Boolean, value: [Number, String]},
                data: function () {
                    return {inputValue: null, isBooted: !1, steps: [], content: [], isReverse: !1}
                },
                computed: {
                    classes: function () {
                        return U({
                            "v-stepper": !0,
                            "v-stepper--is-booted": this.isBooted,
                            "v-stepper--vertical": this.vertical,
                            "v-stepper--alt-labels": this.altLabels,
                            "v-stepper--non-linear": this.nonLinear
                        }, this.themeClasses)
                    }
                },
                watch: {
                    inputValue: function (e, t) {
                        this.isReverse = Number(e) < Number(t);
                        for (var n = this.steps.length; --n >= 0;) this.steps[n].toggle(this.inputValue);
                        for (var o = this.content.length; --o >= 0;) this.content[o].toggle(this.inputValue, this.isReverse);
                        this.$emit("input", this.inputValue), t && (this.isBooted = !0)
                    }, value: function () {
                        var e = this;
                        this.$nextTick(function () {
                            return e.inputValue = e.value
                        })
                    }
                },
                mounted: function () {
                    this.inputValue = this.value || this.steps[0].step || 1
                },
                methods: {
                    register: function (e) {
                        "v-stepper-step" === e.$options.name ? this.steps.push(e) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content.push(e))
                    }, unregister: function (e) {
                        "v-stepper-step" === e.$options.name ? this.steps = this.steps.filter(function (t) {
                            return t !== e
                        }) : "v-stepper-content" === e.$options.name && (e.isVertical = this.vertical, this.content = this.content.filter(function (t) {
                            return t !== e
                        }))
                    }, stepClick: function (e) {
                        var t = this;
                        this.$nextTick(function () {
                            return t.inputValue = e
                        })
                    }
                },
                render: function (e) {
                    return e("div", {class: this.classes}, this.$slots.default)
                }
            }), Y = n("80d2"), G = n("9d26"), V = n("b64a"), W = n("3ccf"),
            K = Object(z["a"])(V["a"], Object(B["a"])("stepper", "v-stepper-step", "v-stepper")).extend({
                name: "v-stepper-step",
                directives: {Ripple: W["a"]},
                inject: ["stepClick"],
                props: {
                    color: {type: String, default: "primary"},
                    complete: Boolean,
                    completeIcon: {type: String, default: "$vuetify.icons.complete"},
                    editIcon: {type: String, default: "$vuetify.icons.edit"},
                    errorIcon: {type: String, default: "$vuetify.icons.error"},
                    editable: Boolean,
                    rules: {
                        type: Array, default: function () {
                            return []
                        }
                    },
                    step: [Number, String]
                },
                data: function () {
                    return {isActive: !1, isInactive: !0}
                },
                computed: {
                    classes: function () {
                        return {
                            "v-stepper__step": !0,
                            "v-stepper__step--active": this.isActive,
                            "v-stepper__step--editable": this.editable,
                            "v-stepper__step--inactive": this.isInactive,
                            "v-stepper__step--error": this.hasError,
                            "v-stepper__step--complete": this.complete,
                            "error--text": this.hasError
                        }
                    }, hasError: function () {
                        return this.rules.some(function (e) {
                            return !0 !== e()
                        })
                    }
                },
                mounted: function () {
                    this.stepper && this.stepper.register(this)
                },
                beforeDestroy: function () {
                    this.stepper && this.stepper.unregister(this)
                },
                methods: {
                    click: function (e) {
                        e.stopPropagation(), this.$emit("click", e), this.editable && this.stepClick(this.step)
                    }, toggle: function (e) {
                        this.isActive = e.toString() === this.step.toString(), this.isInactive = Number(e) < Number(this.step)
                    }
                },
                render: function (e) {
                    var t = {
                        class: this.classes,
                        directives: [{name: "ripple", value: this.editable}],
                        on: {click: this.click}
                    }, n = void 0;
                    n = this.hasError ? [e(G["a"], {}, this.errorIcon)] : this.complete ? this.editable ? [e(G["a"], {}, this.editIcon)] : [e(G["a"], {}, this.completeIcon)] : String(this.step);
                    var o = !(this.hasError || !this.complete && !this.isActive) && this.color,
                        r = e("span", this.setBackgroundColor(o, {staticClass: "v-stepper__step__step"}), n),
                        i = e("div", {staticClass: "v-stepper__label"}, this.$slots.default);
                    return e("div", t, [r, i])
                }
            }), q = n("0789"), X = (Object(z["a"])(Object(B["a"])("stepper", "v-stepper-content", "v-stepper")).extend({
                name: "v-stepper-content",
                inject: {isVerticalProvided: {from: "isVertical"}},
                props: {step: {type: [Number, String], required: !0}},
                data: function () {
                    return {height: 0, isActive: null, isReverse: !1, isVertical: this.isVerticalProvided}
                },
                computed: {
                    classes: function () {
                        return {"v-stepper__content": !0}
                    }, computedTransition: function () {
                        return this.isReverse ? q["d"] : q["e"]
                    }, styles: function () {
                        return this.isVertical ? {height: Object(Y["c"])(this.height)} : {}
                    }, wrapperClasses: function () {
                        return {"v-stepper__wrapper": !0}
                    }
                },
                watch: {
                    isActive: function (e, t) {
                        e && null == t ? this.height = "auto" : this.isVertical && (this.isActive ? this.enter() : this.leave())
                    }
                },
                mounted: function () {
                    this.$refs.wrapper.addEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.register(this)
                },
                beforeDestroy: function () {
                    this.$refs.wrapper.removeEventListener("transitionend", this.onTransition, !1), this.stepper && this.stepper.unregister(this)
                },
                methods: {
                    onTransition: function (e) {
                        this.isActive && "height" === e.propertyName && (this.height = "auto")
                    }, enter: function () {
                        var e = this, t = 0;
                        requestAnimationFrame(function () {
                            t = e.$refs.wrapper.scrollHeight
                        }), this.height = 0, setTimeout(function () {
                            return e.isActive && (e.height = t || "auto")
                        }, 450)
                    }, leave: function () {
                        var e = this;
                        this.height = this.$refs.wrapper.clientHeight, setTimeout(function () {
                            return e.height = 0
                        }, 10)
                    }, toggle: function (e, t) {
                        this.isActive = e.toString() === this.step.toString(), this.isReverse = t
                    }
                },
                render: function (e) {
                    var t = {class: this.classes}, n = {class: this.wrapperClasses, style: this.styles, ref: "wrapper"};
                    this.isVertical || (t.directives = [{name: "show", value: this.isActive}]);
                    var o = e("div", n, [this.$slots.default]), r = e("div", t, [o]);
                    return e(this.computedTransition, {on: this.$listeners}, [r])
                }
            }), Object(Y["e"])("v-stepper__header")), Q = (Object(Y["e"])("v-stepper__items"), n("ce7e")), J = n("132d"),
            Z = n("e449"), ee = n("8212"), te = n("8860"), ne = n("ba95"), oe = n("a722"), re = n("0e8f"),
            ie = n("bb71"), ae = {
                VApp: M["a"],
                VCard: D["a"],
                VCardText: R["b"],
                VCardActions: R["a"],
                VBtn: j["a"],
                VStepper: H,
                VStepperHeader: X,
                VStepperStep: K,
                VDivider: Q["a"],
                VIcon: J["a"],
                VMenu: Z["a"],
                VAvatar: ee["a"],
                VList: te["a"],
                VListTile: ne["a"],
                VLayout: oe["a"],
                VFlex: re["a"]
            }, se = {primary: "#ee4d2d", error: "#ff424f"};
        o["default"].use(ie["a"], {components: ae, theme: se, customProperties: !0});
        n("7f7f");
        var le = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-background-img", style: e.style}, [e._t("default")], 2)
            }, ce = [], ue = {
                name: "app-background-img",
                props: {
                    bgImgUrl: {type: String, default: ""},
                    toolbarImgUrl: {type: String, default: ""},
                    toolbarIconImgUrl: {type: String, default: ""}
                },
                computed: {
                    style: function () {
                        return {background: 'url("'.concat(this.bgImgUrl, '") center 67px no-repeat, url("').concat(this.toolbarIconImgUrl, '") right top no-repeat, url("').concat(this.toolbarImgUrl, '") center top / 100% 67px no-repeat')}
                    }
                }
            }, pe = ue, de = (n("2f65"), Object(d["a"])(pe, le, ce, !1, null, "563ab1a0", null)), fe = de.exports,
            me = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-mask", style: {display: e.visible ? "block" : "none"}})
            }, he = [], ge = {name: "app-mask", props: {visible: {type: Boolean, default: !1}}}, be = ge,
            ve = (n("8f5d"), Object(d["a"])(be, me, he, !1, null, "9e348828", null)), xe = ve.exports,
            ye = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("v-card", e._b({
                    staticClass: "app-message-box",
                    style: e.messageBoxStyle
                }, "v-card", e.$attrs, !1), [n("v-card-text", [e._t("default")], 2), n("v-card-actions", [n("div", {staticClass: "flex xs12"}, [n("div", {staticClass: "display-flex justify-center"}, [e._t("actions")], 2), n("div", {staticClass: "display-flex align-center justify-space-between mt-3"}, [n("v-btn", {
                    attrs: {
                        color: "black--text",
                        small: "",
                        flat: ""
                    }, on: {click: e.handleClose}
                }, [e._v(e._s(e.$t("common.skip")))]), n("v-menu", {
                    attrs: {
                        "offset-y": "",
                        left: "",
                        bottom: "",
                        "open-on-hover": ""
                    }
                }, [n("div", {attrs: {slot: "activator"}, slot: "activator"}, [n("v-icon", {
                    attrs: {
                        dark: "",
                        small: "",
                        color: "primary"
                    }
                }, [e._v("language")]), n("span", {staticClass: "text--primary ml-1 caption"}, [e._v(e._s(e.languageText))])], 1), n("v-list", {staticClass: "pa-0 white"}, e._l(e.languageList, function (t) {
                    return n("v-list-tile", {
                        key: t.text, attrs: {ripple: "ripple"}, on: {
                            click: function (n) {
                                return e.changeLanguageList(t)
                            }
                        }
                    }, [n("span", {class: e.formatLanguageItemClazz(t)}, [e._v(e._s(t.text))])])
                }), 1)], 1)], 1)])])], 1)
            }, ke = [], we = n("a4bb"), _e = n.n(we), Se = n("768b"), Te = {
                name: "app-message-box", inheritAttrs: !1, props: {
                    position: {
                        type: Object, default: function () {
                            return {}
                        }
                    }
                }, data: function () {
                    return {languageList: O["n"].slice(0, 3), language: ""}
                }, watch: {
                    "$i18n.locale": function (e) {
                        this.language = e
                    }
                }, computed: {
                    languageText: function () {
                        var e = this.languageList, t = void 0 === e ? [] : e, n = this.language, o = t.filter(function (e) {
                            return e.value === n
                        }), r = Object(Se["a"])(o, 1), i = r[0], a = void 0 === i ? {text: ""} : i;
                        return a.text
                    }, messageBoxStyle: function () {
                        var e = this.position;
                        if (!_e()(e).length) return {};
                        var t = e.top, n = void 0 === t ? "" : t, o = e.right, r = void 0 === o ? "" : o, i = e.bottom,
                            a = void 0 === i ? "" : i, s = e.left, l = void 0 === s ? "" : s;
                        return {position: "absolute", top: n, right: r, bottom: a, left: l, zIndex: "9999"}
                    }
                }, methods: {
                    changeLanguageList: function (e) {
                        this.language = e.value, this.$i18n.locale = e.value
                    }, formatLanguageItemClazz: function (e) {
                        var t = [];
                        return this.language === e.value && t.push("sf-theme-primary--text"), t
                    }, handleClose: function () {
                        window.close()
                    }
                }, created: function () {
                    this.language = this.$i18n.locale
                }
            }, Ee = Te, Ce = (n("cbe2"), Object(d["a"])(Ee, ye, ke, !1, null, "3d5d9da3", null)), Ae = Ce.exports,
            Oe = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "app-step-bar"}, [n("div", {staticClass: "app-step-bar-wrapper"}, [n("div", {staticClass: "app-step-bar-content"}, [n("v-stepper", {
                    staticStyle: {width: "100%"},
                    attrs: {value: e.step},
                    on: {input: e.handlerStepInput}
                }, [n("v-stepper-header", [e._l(e.maxStepNumber, function (t) {
                    return [t % 2 !== 0 ? n("v-stepper-step", {
                        key: t,
                        attrs: {complete: e.step > e.stepDict[t], step: e.stepDict[t]}
                    }, [n("span", {staticClass: "body-1"}, [e._v("Step " + e._s(e.stepDict[t]))])]) : n("v-divider", {key: t})]
                })], 2)], 1)], 1)])])
            }, Pe = [], Ne = (n("c5f6"), {
                name: "app-step-bar",
                model: {prop: "step", event: "input"},
                props: {step: {type: Number, default: 1}, maxStep: {type: Number, default: 0}},
                computed: {
                    processDone: function () {
                        return this.step >= this.maxStep
                    }, stepDict: function () {
                        for (var e = 1, t = {}, n = 1; n <= this.maxStepNumber; n++) n % 2 !== 0 && (t[n] = e, e++);
                        return t
                    }, maxStepNumber: function () {
                        return 2 * this.maxStep - 1
                    }
                },
                methods: {
                    handlerStepInput: function (e) {
                        this.$emit("input", e)
                    }, handlerPrevious: function () {
                        this.$emit("input", this.step - 1)
                    }, handlerNext: function () {
                        this.$emit("input", this.step + 1)
                    }
                }
            }), Le = Ne, Ie = (n("c8eb"), Object(d["a"])(Le, Oe, Pe, !1, null, "4b5d2654", null)), Fe = Ie.exports,
            Me = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "highlight-box", style: Object.assign({}, e.boxStyle, e.borderBoxStyle)})
            }, De = [], Re = n("cebc"), je = {
                name: "AppHighlightBox", props: {
                    position: {
                        type: Object, default: function () {
                            return {}
                        }
                    },
                    width: {type: [String, Number], default: ""},
                    height: {type: [String, Number], default: ""},
                    borderWidth: {type: [String, Number], default: "2px"},
                    borderStyle: {type: String, default: "dashed"},
                    borderColor: {type: String, default: "#fdb313eb"}
                }, computed: {
                    boxStyle: function () {
                        var e = {}, t = this.width, n = this.height;
                        "number" === typeof t && (t = "".concat(t, "px")), "number" === typeof n && (n = "".concat(n, "px"));
                        var o = this.position, r = o.top, i = void 0 === r ? "" : r, a = o.right, s = void 0 === a ? "" : a,
                            l = o.bottom, c = void 0 === l ? "" : l, u = o.left, p = void 0 === u ? "" : u;
                        return e.top = i, e.right = s, e.bottom = c, e.left = p, Object(Re["a"])({
                            width: t,
                            height: n
                        }, e)
                    }, borderBoxStyle: function () {
                        var e = this.borderWidth, t = void 0 === e ? "" : e, n = this.borderStyle,
                            o = void 0 === n ? "" : n, r = this.borderColor, i = void 0 === r ? "" : r;
                        return "number" === typeof t && (t = "".concat(t, "px")), {border: "".concat(t, " ").concat(o, " ").concat(i)}
                    }
                }
            }, Be = je, $e = (n("8453"), Object(d["a"])(Be, Me, De, !1, null, "6b2617ee", null)), ze = $e.exports;
        o["default"].component(fe.name, fe), o["default"].component(xe.name, xe), o["default"].component(Ae.name, Ae), o["default"].component(Fe.name, Fe), o["default"].component(ze.name, ze), o["default"].prototype.$config = {
            imageURL: {
                popupIcon: n("4926"),
                browerIcon: n("3ba6"),
                zh: {
                    browerToolBar: n("f531"),
                    navigationBar: n("4d42"),
                    popupShop: n("105e"),
                    popupTool: n("660a"),
                    popupSetting: n("e7ef"),
                    popupView: n("7625"),
                    sidebarAppList: n("d399"),
                    sidebarSetting: n("0fd3"),
                    shopeeHome: n("5be4"),
                    shopeeGoodsList: n("91e1"),
                    shopeeGoodsDetail: n("fca9"),
                    goodsMenu: n("39e3"),
                    detailMenu: n("8e54")
                },
                en: {
                    browerToolBar: n("4ffc"),
                    navigationBar: n("37c0"),
                    popupShop: n("8a5b"),
                    popupTool: n("edcb"),
                    popupSetting: n("dfb7"),
                    popupView: n("3383"),
                    sidebarAppList: n("bd45"),
                    sidebarSetting: n("5612"),
                    shopeeHome: n("a168"),
                    shopeeGoodsList: n("eefa"),
                    shopeeGoodsDetail: n("cb5e"),
                    goodsMenu: n("ebd9"),
                    detailMenu: n("384f")
                }
            }
        }, o["default"].config.productionTip = !1, new o["default"]({
            el: "#app", i18n: r["a"], render: function (e) {
                return e(F)
            }
        })
    }, c366: function (e, t, n) {
        var o = n("6821"), r = n("9def"), i = n("77f1");
        e.exports = function (e) {
            return function (t, n, a) {
                var s, l = o(t), c = r(l.length), u = i(a, c);
                if (e && n != n) {
                    while (c > u) if (s = l[u++], s != s) return !0
                } else for (; c > u; u++) if ((e || u in l) && l[u] === n) return e || u || 0;
                return !e && -1
            }
        }
    }, c3fa: function (e) {
        e.exports = {noUpdate: "目前没有更新", moreData: "加载更多数据", noData: "没有更多数据！"}
    }, c584: function (e, t, n) {
        "use strict";

        function o() {
            return !1
        }

        function r(e, t, n) {
            n.args = n.args || {};
            var r = n.args.closeConditional || o;
            if (e && !1 !== r(e) && !("isTrusted" in e && !e.isTrusted || "pointerType" in e && !e.pointerType)) {
                var i = (n.args.include || function () {
                    return []
                })();
                i.push(t), !i.some(function (t) {
                    return t.contains(e.target)
                }) && setTimeout(function () {
                    r(e) && n.value && n.value(e)
                }, 0)
            }
        }

        t["a"] = {
            inserted: function (e, t) {
                var n = function (n) {
                    return r(n, e, t)
                }, o = document.querySelector("[data-app]") || document.body;
                o.addEventListener("click", n, !0), e._clickOutside = n
            }, unbind: function (e) {
                if (e._clickOutside) {
                    var t = document.querySelector("[data-app]") || document.body;
                    t && t.removeEventListener("click", e._clickOutside, !0), delete e._clickOutside
                }
            }
        }
    }, c5f6: function (e, t, n) {
        "use strict";
        var o = n("7726"), r = n("69a8"), i = n("2d95"), a = n("5dbc"), s = n("6a99"), l = n("79e5"), c = n("9093").f,
            u = n("11e9").f, p = n("86cc").f, d = n("aa77").trim, f = "Number", m = o[f], h = m, g = m.prototype,
            b = i(n("2aeb")(g)) == f, v = "trim" in String.prototype, x = function (e) {
                var t = s(e, !1);
                if ("string" == typeof t && t.length > 2) {
                    t = v ? t.trim() : d(t, 3);
                    var n, o, r, i = t.charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (n = t.charCodeAt(2), 88 === n || 120 === n) return NaN
                    } else if (48 === i) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +t
                        }
                        for (var a, l = t.slice(2), c = 0, u = l.length; c < u; c++) if (a = l.charCodeAt(c), a < 48 || a > r) return NaN;
                        return parseInt(l, o)
                    }
                }
                return +t
            };
        if (!m(" 0o1") || !m("0b1") || m("+0x1")) {
            m = function (e) {
                var t = arguments.length < 1 ? 0 : e, n = this;
                return n instanceof m && (b ? l(function () {
                    g.valueOf.call(n)
                }) : i(n) != f) ? a(new h(x(t)), n, m) : x(t)
            };
            for (var y, k = n("9e1e") ? c(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; k.length > w; w++) r(h, y = k[w]) && !r(m, y) && p(m, y, u(h, y));
            m.prototype = g, g.constructor = m, n("2aba")(o, f, m)
        }
    }, c609: function (e, t, n) {
        "use strict";
        var o = n("d13f"), r = n("03ca"), i = n("75c9");
        o(o.S, "Promise", {
            try: function (e) {
                var t = r.f(this), n = i(e);
                return (n.e ? t.reject : t.resolve)(n.v), t.promise
            }
        })
    }, c69a: function (e, t, n) {
        e.exports = !n("9e1e") && !n("79e5")(function () {
            return 7 != Object.defineProperty(n("230e")("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, c69d: function (e, t, n) {
        "use strict";
        var o = n("58df");

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e) {
            for (var t = [], n = 0; n < e.length; n++) {
                var o = e[n];
                o.isActive && o.isDependent ? t.push(o) : t.push.apply(t, r(i(o.$children)))
            }
            return t
        }

        t["a"] = Object(o["a"])().extend({
            name: "dependent", data: function () {
                return {closeDependents: !0, isActive: !1, isDependent: !0}
            }, watch: {
                isActive: function (e) {
                    if (!e) for (var t = this.getOpenDependents(), n = 0; n < t.length; n++) t[n].isActive = !1
                }
            }, methods: {
                getOpenDependents: function () {
                    return this.closeDependents ? i(this.$children) : []
                }, getOpenDependentElements: function () {
                    for (var e = [], t = this.getOpenDependents(), n = 0; n < t.length; n++) e.push.apply(e, r(t[n].getClickableDependentElements()));
                    return e
                }, getClickableDependentElements: function () {
                    var e = [this.$el];
                    return this.$refs.content && e.push(this.$refs.content), this.overlay && e.push(this.overlay), e.push.apply(e, r(this.getOpenDependentElements())), e
                }
            }
        })
    }, c6b2: function (e, t, n) {
        var o = n("2467");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("2eebe604", o, !0, {sourceMap: !1, shadowMode: !1})
    }, c7cb: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".sidebar-guide[data-v-e69614c6]{width:100%;height:100%}.sidebar-wrapper[data-v-e69614c6]{position:absolute;right:0;top:0;width:355px;height:100%;z-index:99;background-color:#fff;cursor:pointer}.navigation-bar-wrapper[data-v-e69614c6]{position:relative;width:1500px;height:100%;margin:0 auto}.navigation-bar-wrapper .navigation-bar-img-box[data-v-e69614c6]{position:absolute;top:444px;right:73px;cursor:pointer;z-index:99}.navigation-bar-wrapper .navigation-bar-img-box img[data-v-e69614c6]{width:100%}", ""])
    }, c832: function (e, t, n) {
        (function (t) {
            var n = "Expected a function", o = "__lodash_hash_undefined__", r = 1 / 0, i = "[object Function]",
                a = "[object GeneratorFunction]", s = "[object Symbol]",
                l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, c = /^\w*$/, u = /^\./,
                p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                d = /[\\^$.*+?()[\]{}|]/g, f = /\\(\\)?/g, m = /^\[object .+?Constructor\]$/,
                h = "object" == typeof t && t && t.Object === Object && t,
                g = "object" == typeof self && self && self.Object === Object && self,
                b = h || g || Function("return this")();

            function v(e, t) {
                return null == e ? void 0 : e[t]
            }

            function x(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (n) {
                }
                return t
            }

            var y = Array.prototype, k = Function.prototype, w = Object.prototype, _ = b["__core-js_shared__"],
                S = function () {
                    var e = /[^.]+$/.exec(_ && _.keys && _.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(), T = k.toString, E = w.hasOwnProperty, C = w.toString,
                A = RegExp("^" + T.call(E).replace(d, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                O = b.Symbol, P = y.splice, N = ie(b, "Map"), L = ie(Object, "create"), I = O ? O.prototype : void 0,
                F = I ? I.toString : void 0;

            function M(e) {
                var t = -1, n = e ? e.length : 0;
                this.clear();
                while (++t < n) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }

            function D() {
                this.__data__ = L ? L(null) : {}
            }

            function R(e) {
                return this.has(e) && delete this.__data__[e]
            }

            function j(e) {
                var t = this.__data__;
                if (L) {
                    var n = t[e];
                    return n === o ? void 0 : n
                }
                return E.call(t, e) ? t[e] : void 0
            }

            function B(e) {
                var t = this.__data__;
                return L ? void 0 !== t[e] : E.call(t, e)
            }

            function $(e, t) {
                var n = this.__data__;
                return n[e] = L && void 0 === t ? o : t, this
            }

            function z(e) {
                var t = -1, n = e ? e.length : 0;
                this.clear();
                while (++t < n) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }

            function U() {
                this.__data__ = []
            }

            function H(e) {
                var t = this.__data__, n = Z(t, e);
                if (n < 0) return !1;
                var o = t.length - 1;
                return n == o ? t.pop() : P.call(t, n, 1), !0
            }

            function Y(e) {
                var t = this.__data__, n = Z(t, e);
                return n < 0 ? void 0 : t[n][1]
            }

            function G(e) {
                return Z(this.__data__, e) > -1
            }

            function V(e, t) {
                var n = this.__data__, o = Z(n, e);
                return o < 0 ? n.push([e, t]) : n[o][1] = t, this
            }

            function W(e) {
                var t = -1, n = e ? e.length : 0;
                this.clear();
                while (++t < n) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }

            function K() {
                this.__data__ = {hash: new M, map: new (N || z), string: new M}
            }

            function q(e) {
                return re(this, e)["delete"](e)
            }

            function X(e) {
                return re(this, e).get(e)
            }

            function Q(e) {
                return re(this, e).has(e)
            }

            function J(e, t) {
                return re(this, e).set(e, t), this
            }

            function Z(e, t) {
                var n = e.length;
                while (n--) if (fe(e[n][0], t)) return n;
                return -1
            }

            function ee(e, t) {
                t = ae(t, e) ? [t] : oe(t);
                var n = 0, o = t.length;
                while (null != e && n < o) e = e[ue(t[n++])];
                return n && n == o ? e : void 0
            }

            function te(e) {
                if (!ge(e) || le(e)) return !1;
                var t = he(e) || x(e) ? A : m;
                return t.test(pe(e))
            }

            function ne(e) {
                if ("string" == typeof e) return e;
                if (ve(e)) return F ? F.call(e) : "";
                var t = e + "";
                return "0" == t && 1 / e == -r ? "-0" : t
            }

            function oe(e) {
                return me(e) ? e : ce(e)
            }

            function re(e, t) {
                var n = e.__data__;
                return se(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function ie(e, t) {
                var n = v(e, t);
                return te(n) ? n : void 0
            }

            function ae(e, t) {
                if (me(e)) return !1;
                var n = typeof e;
                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ve(e)) || (c.test(e) || !l.test(e) || null != t && e in Object(t))
            }

            function se(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }

            function le(e) {
                return !!S && S in e
            }

            M.prototype.clear = D, M.prototype["delete"] = R, M.prototype.get = j, M.prototype.has = B, M.prototype.set = $, z.prototype.clear = U, z.prototype["delete"] = H, z.prototype.get = Y, z.prototype.has = G, z.prototype.set = V, W.prototype.clear = K, W.prototype["delete"] = q, W.prototype.get = X, W.prototype.has = Q, W.prototype.set = J;
            var ce = de(function (e) {
                e = xe(e);
                var t = [];
                return u.test(e) && t.push(""), e.replace(p, function (e, n, o, r) {
                    t.push(o ? r.replace(f, "$1") : n || e)
                }), t
            });

            function ue(e) {
                if ("string" == typeof e || ve(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -r ? "-0" : t
            }

            function pe(e) {
                if (null != e) {
                    try {
                        return T.call(e)
                    } catch (t) {
                    }
                    try {
                        return e + ""
                    } catch (t) {
                    }
                }
                return ""
            }

            function de(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(n);
                var o = function () {
                    var n = arguments, r = t ? t.apply(this, n) : n[0], i = o.cache;
                    if (i.has(r)) return i.get(r);
                    var a = e.apply(this, n);
                    return o.cache = i.set(r, a), a
                };
                return o.cache = new (de.Cache || W), o
            }

            function fe(e, t) {
                return e === t || e !== e && t !== t
            }

            de.Cache = W;
            var me = Array.isArray;

            function he(e) {
                var t = ge(e) ? C.call(e) : "";
                return t == i || t == a
            }

            function ge(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function be(e) {
                return !!e && "object" == typeof e
            }

            function ve(e) {
                return "symbol" == typeof e || be(e) && C.call(e) == s
            }

            function xe(e) {
                return null == e ? "" : ne(e)
            }

            function ye(e, t, n) {
                var o = null == e ? void 0 : ee(e, t);
                return void 0 === o ? n : o
            }

            e.exports = ye
        }).call(this, n("c8ba"))
    }, c8ba: function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (o) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, c8eb: function (e, t, n) {
        "use strict";
        var o = n("2333"), r = n.n(o);
        r.a
    }, c973: function (e) {
        e.exports = {noUpdate: "Không có cập nhật", moreData: "Tải nhiều dữ liệu hơn", noData: "Không có thêm dữ liệu!"}
    }, ca5a: function (e, t) {
        var n = 0, o = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
        }
    }, cadf: function (e, t, n) {
        "use strict";
        var o = n("9c6c"), r = n("d53b"), i = n("84f2"), a = n("6821");
        e.exports = n("01f9")(Array, "Array", function (e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, cb16: function (e, t, n) {
        "use strict";
        var o = n("9819"), r = n.n(o);
        r.a
    }, cb5e: function (e, t, n) {
        e.exports = n.p + "img/shopee-goodsdetail.e222b4de.png"
    }, cb7c: function (e, t, n) {
        var o = n("d3f4");
        e.exports = function (e) {
            if (!o(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, cbe2: function (e, t, n) {
        "use strict";
        var o = n("637a"), r = n.n(o);
        r.a
    }, ccaa: function (e, t, n) {
        var o = n("b157");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("5e280b36", o, !0, {sourceMap: !1, shadowMode: !1})
    }, ce10: function (e, t, n) {
        var o = n("69a8"), r = n("6821"), i = n("c366")(!1), a = n("613b")("IE_PROTO");
        e.exports = function (e, t) {
            var n, s = r(e), l = 0, c = [];
            for (n in s) n != a && o(s, n) && c.push(n);
            while (t.length > l) o(s, n = t[l++]) && (~i(c, n) || c.push(n));
            return c
        }
    }, ce7e: function (e, t, n) {
        "use strict";
        n("58db");
        var o = n("6a18"), r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        };
        t["a"] = o["a"].extend({
            name: "v-divider", props: {inset: Boolean, vertical: Boolean}, render: function (e) {
                return e("hr", {
                    class: r({
                        "v-divider": !0,
                        "v-divider--inset": this.inset,
                        "v-divider--vertical": this.vertical
                    }, this.themeClasses), attrs: this.$attrs, on: this.$listeners
                })
            }
        })
    }, cebc: function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return u
        });
        var o = n("268f"), r = n.n(o), i = n("e265"), a = n.n(i), s = n("a4bb"), l = n.n(s), c = n("bd86");

        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, o = l()(n);
                "function" === typeof a.a && (o = o.concat(a()(n).filter(function (e) {
                    return r()(n, e).enumerable
                }))), o.forEach(function (t) {
                    Object(c["a"])(e, t, n[t])
                })
            }
            return e
        }
    }, cef3: function (e) {
        e.exports = {noUpdate: "Não há atualização", moreData: "Carregar mais dados", noData: "Não há mais dados!"}
    }, d0cb: function (e, t, n) {
        var o = n("48a0");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("0af0df41", o, !0, {sourceMap: !1, shadowMode: !1})
    }, d0e7: function (e, t, n) {
        var o = n("ef02");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("406ca701", o, !0, {sourceMap: !1, shadowMode: !1})
    }, d13f: function (e, t, n) {
        var o = n("da3c"), r = n("a7d3"), i = n("bc25"), a = n("8ce0"), s = n("43c8"), l = "prototype",
            c = function (e, t, n) {
                var u, p, d, f = e & c.F, m = e & c.G, h = e & c.S, g = e & c.P, b = e & c.B, v = e & c.W,
                    x = m ? r : r[t] || (r[t] = {}), y = x[l], k = m ? o : h ? o[t] : (o[t] || {})[l];
                for (u in m && (n = t), n) p = !f && k && void 0 !== k[u], p && s(x, u) || (d = p ? k[u] : n[u], x[u] = m && "function" != typeof k[u] ? n[u] : b && p ? i(d, o) : v && k[u] == d ? function (e) {
                    var t = function (t, n, o) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, o)
                        }
                        return e.apply(this, arguments)
                    };
                    return t[l] = e[l], t
                }(d) : g && "function" == typeof d ? i(Function.call, d) : d, g && ((x.virtual || (x.virtual = {}))[u] = d, e & c.R && y && !y[u] && a(y, u, d)))
            };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
    }, d256: function (e, t, n) {
        "use strict";
        var o = n("da3c"), r = n("43c8"), i = n("7d95"), a = n("d13f"), s = n("2312"), l = n("6277").KEY, c = n("d782"),
            u = n("7772"), p = n("c0d8"), d = n("7b00"), f = n("1b55"), m = n("fda1"), h = n("0a0a"), g = n("d2d6"),
            b = n("b5aa"), v = n("0f89"), x = n("6f8a"), y = n("6a9b"), k = n("2ea1"), w = n("f845"), _ = n("7108"),
            S = n("565d"), T = n("626e"), E = n("3adc"), C = n("7633"), A = T.f, O = E.f, P = S.f, N = o.Symbol,
            L = o.JSON, I = L && L.stringify, F = "prototype", M = f("_hidden"), D = f("toPrimitive"),
            R = {}.propertyIsEnumerable, j = u("symbol-registry"), B = u("symbols"), $ = u("op-symbols"), z = Object[F],
            U = "function" == typeof N, H = o.QObject, Y = !H || !H[F] || !H[F].findChild, G = i && c(function () {
                return 7 != _(O({}, "a", {
                    get: function () {
                        return O(this, "a", {value: 7}).a
                    }
                })).a
            }) ? function (e, t, n) {
                var o = A(z, t);
                o && delete z[t], O(e, t, n), o && e !== z && O(z, t, o)
            } : O, V = function (e) {
                var t = B[e] = _(N[F]);
                return t._k = e, t
            }, W = U && "symbol" == typeof N.iterator ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                return e instanceof N
            }, K = function (e, t, n) {
                return e === z && K($, t, n), v(e), t = k(t, !0), v(n), r(B, t) ? (n.enumerable ? (r(e, M) && e[M][t] && (e[M][t] = !1), n = _(n, {enumerable: w(0, !1)})) : (r(e, M) || O(e, M, w(1, {})), e[M][t] = !0), G(e, t, n)) : O(e, t, n)
            }, q = function (e, t) {
                v(e);
                var n, o = g(t = y(t)), r = 0, i = o.length;
                while (i > r) K(e, n = o[r++], t[n]);
                return e
            }, X = function (e, t) {
                return void 0 === t ? _(e) : q(_(e), t)
            }, Q = function (e) {
                var t = R.call(this, e = k(e, !0));
                return !(this === z && r(B, e) && !r($, e)) && (!(t || !r(this, e) || !r(B, e) || r(this, M) && this[M][e]) || t)
            }, J = function (e, t) {
                if (e = y(e), t = k(t, !0), e !== z || !r(B, t) || r($, t)) {
                    var n = A(e, t);
                    return !n || !r(B, t) || r(e, M) && e[M][t] || (n.enumerable = !0), n
                }
            }, Z = function (e) {
                var t, n = P(y(e)), o = [], i = 0;
                while (n.length > i) r(B, t = n[i++]) || t == M || t == l || o.push(t);
                return o
            }, ee = function (e) {
                var t, n = e === z, o = P(n ? $ : y(e)), i = [], a = 0;
                while (o.length > a) !r(B, t = o[a++]) || n && !r(z, t) || i.push(B[t]);
                return i
            };
        U || (N = function () {
            if (this instanceof N) throw TypeError("Symbol is not a constructor!");
            var e = d(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
                this === z && t.call($, n), r(this, M) && r(this[M], e) && (this[M][e] = !1), G(this, e, w(1, n))
            };
            return i && Y && G(z, e, {configurable: !0, set: t}), V(e)
        }, s(N[F], "toString", function () {
            return this._k
        }), T.f = J, E.f = K, n("d876").f = S.f = Z, n("d74e").f = Q, n("31c2").f = ee, i && !n("b457") && s(z, "propertyIsEnumerable", Q, !0), m.f = function (e) {
            return V(f(e))
        }), a(a.G + a.W + a.F * !U, {Symbol: N});
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) f(te[ne++]);
        for (var oe = C(f.store), re = 0; oe.length > re;) h(oe[re++]);
        a(a.S + a.F * !U, "Symbol", {
            for: function (e) {
                return r(j, e += "") ? j[e] : j[e] = N(e)
            }, keyFor: function (e) {
                if (!W(e)) throw TypeError(e + " is not a symbol!");
                for (var t in j) if (j[t] === e) return t
            }, useSetter: function () {
                Y = !0
            }, useSimple: function () {
                Y = !1
            }
        }), a(a.S + a.F * !U, "Object", {
            create: X,
            defineProperty: K,
            defineProperties: q,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: Z,
            getOwnPropertySymbols: ee
        }), L && a(a.S + a.F * (!U || c(function () {
            var e = N();
            return "[null]" != I([e]) || "{}" != I({a: e}) || "{}" != I(Object(e))
        })), "JSON", {
            stringify: function (e) {
                var t, n, o = [e], r = 1;
                while (arguments.length > r) o.push(arguments[r++]);
                if (n = t = o[1], (x(t) || void 0 !== e) && !W(e)) return b(t) || (t = function (e, t) {
                    if ("function" == typeof n && (t = n.call(this, e, t)), !W(t)) return t
                }), o[1] = t, I.apply(L, o)
            }
        }), N[F][D] || n("8ce0")(N[F], D, N[F].valueOf), p(N, "Symbol"), p(Math, "Math", !0), p(o.JSON, "JSON", !0)
    }, d2c8: function (e, t, n) {
        var o = n("aae3"), r = n("be13");
        e.exports = function (e, t, n) {
            if (o(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(r(e))
        }
    }, d2d6: function (e, t, n) {
        var o = n("7633"), r = n("31c2"), i = n("d74e");
        e.exports = function (e) {
            var t = o(e), n = r.f;
            if (n) {
                var a, s = n(e), l = i.f, c = 0;
                while (s.length > c) l.call(e, a = s[c++]) && t.push(a)
            }
            return t
        }
    }, d399: function (e, t, n) {
        e.exports = n.p + "img/sidebar-applist.987018bb.png"
    }, d3a4: function (e, t, n) {
        "use strict";
        var o = n("2b0e"),
            r = ["style", "currency", "currencyDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "localeMatcher", "formatMatcher"];

        /*!
 * vue-i18n v8.11.2
 * (c) 2019 kazuya kawaguchi
 * Released under the MIT License.
 */
        function i(e, t) {
            "undefined" !== typeof console && (console.warn("[vue-i18n] " + e), t && console.warn(t.stack))
        }

        function a(e, t) {
            "undefined" !== typeof console && (console.error("[vue-i18n] " + e), t && console.error(t.stack))
        }

        function s(e) {
            return null !== e && "object" === typeof e
        }

        var l = Object.prototype.toString, c = "[object Object]";

        function u(e) {
            return l.call(e) === c
        }

        function p(e) {
            return null === e || void 0 === e
        }

        function d() {
            var e = [], t = arguments.length;
            while (t--) e[t] = arguments[t];
            var n = null, o = null;
            return 1 === e.length ? s(e[0]) || Array.isArray(e[0]) ? o = e[0] : "string" === typeof e[0] && (n = e[0]) : 2 === e.length && ("string" === typeof e[0] && (n = e[0]), (s(e[1]) || Array.isArray(e[1])) && (o = e[1])), {
                locale: n,
                params: o
            }
        }

        function f(e) {
            return JSON.parse(JSON.stringify(e))
        }

        function m(e, t) {
            if (e.length) {
                var n = e.indexOf(t);
                if (n > -1) return e.splice(n, 1)
            }
        }

        var h = Object.prototype.hasOwnProperty;

        function g(e, t) {
            return h.call(e, t)
        }

        function b(e) {
            for (var t = arguments, n = Object(e), o = 1; o < arguments.length; o++) {
                var r = t[o];
                if (void 0 !== r && null !== r) {
                    var i = void 0;
                    for (i in r) g(r, i) && (s(r[i]) ? n[i] = b(n[i], r[i]) : n[i] = r[i])
                }
            }
            return n
        }

        function v(e, t) {
            if (e === t) return !0;
            var n = s(e), o = s(t);
            if (!n || !o) return !n && !o && String(e) === String(t);
            try {
                var r = Array.isArray(e), i = Array.isArray(t);
                if (r && i) return e.length === t.length && e.every(function (e, n) {
                    return v(e, t[n])
                });
                if (r || i) return !1;
                var a = Object.keys(e), l = Object.keys(t);
                return a.length === l.length && a.every(function (n) {
                    return v(e[n], t[n])
                })
            } catch (c) {
                return !1
            }
        }

        function x(e) {
            e.prototype.hasOwnProperty("$i18n") || Object.defineProperty(e.prototype, "$i18n", {
                get: function () {
                    return this._i18n
                }
            }), e.prototype.$t = function (e) {
                var t = [], n = arguments.length - 1;
                while (n-- > 0) t[n] = arguments[n + 1];
                var o = this.$i18n;
                return o._t.apply(o, [e, o.locale, o._getMessages(), this].concat(t))
            }, e.prototype.$tc = function (e, t) {
                var n = [], o = arguments.length - 2;
                while (o-- > 0) n[o] = arguments[o + 2];
                var r = this.$i18n;
                return r._tc.apply(r, [e, r.locale, r._getMessages(), this, t].concat(n))
            }, e.prototype.$te = function (e, t) {
                var n = this.$i18n;
                return n._te(e, n.locale, n._getMessages(), t)
            }, e.prototype.$d = function (e) {
                var t, n = [], o = arguments.length - 1;
                while (o-- > 0) n[o] = arguments[o + 1];
                return (t = this.$i18n).d.apply(t, [e].concat(n))
            }, e.prototype.$n = function (e) {
                var t, n = [], o = arguments.length - 1;
                while (o-- > 0) n[o] = arguments[o + 1];
                return (t = this.$i18n).n.apply(t, [e].concat(n))
            }
        }

        var y, k = {
            beforeCreate: function () {
                var e = this.$options;
                if (e.i18n = e.i18n || (e.__i18n ? {} : null), e.i18n) if (e.i18n instanceof de) {
                    if (e.__i18n) try {
                        var t = {};
                        e.__i18n.forEach(function (e) {
                            t = b(t, JSON.parse(e))
                        }), Object.keys(t).forEach(function (n) {
                            e.i18n.mergeLocaleMessage(n, t[n])
                        })
                    } catch (o) {
                        0
                    }
                    this._i18n = e.i18n, this._i18nWatcher = this._i18n.watchI18nData()
                } else if (u(e.i18n)) {
                    if (this.$root && this.$root.$i18n && this.$root.$i18n instanceof de && (e.i18n.root = this.$root, e.i18n.formatter = this.$root.$i18n.formatter, e.i18n.fallbackLocale = this.$root.$i18n.fallbackLocale, e.i18n.silentTranslationWarn = this.$root.$i18n.silentTranslationWarn, e.i18n.silentFallbackWarn = this.$root.$i18n.silentFallbackWarn, e.i18n.pluralizationRules = this.$root.$i18n.pluralizationRules, e.i18n.preserveDirectiveContent = this.$root.$i18n.preserveDirectiveContent), e.__i18n) try {
                        var n = {};
                        e.__i18n.forEach(function (e) {
                            n = b(n, JSON.parse(e))
                        }), e.i18n.messages = n
                    } catch (o) {
                        0
                    }
                    this._i18n = new de(e.i18n), this._i18nWatcher = this._i18n.watchI18nData(), (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale())
                } else 0; else this.$root && this.$root.$i18n && this.$root.$i18n instanceof de ? this._i18n = this.$root.$i18n : e.parent && e.parent.$i18n && e.parent.$i18n instanceof de && (this._i18n = e.parent.$i18n)
            }, beforeMount: function () {
                var e = this.$options;
                e.i18n = e.i18n || (e.__i18n ? {} : null), e.i18n ? e.i18n instanceof de ? (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : u(e.i18n) && (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : this.$root && this.$root.$i18n && this.$root.$i18n instanceof de ? (this._i18n.subscribeDataChanging(this), this._subscribing = !0) : e.parent && e.parent.$i18n && e.parent.$i18n instanceof de && (this._i18n.subscribeDataChanging(this), this._subscribing = !0)
            }, beforeDestroy: function () {
                if (this._i18n) {
                    var e = this;
                    this.$nextTick(function () {
                        e._subscribing && (e._i18n.unsubscribeDataChanging(e), delete e._subscribing), e._i18nWatcher && (e._i18nWatcher(), e._i18n.destroyVM(), delete e._i18nWatcher), e._localeWatcher && (e._localeWatcher(), delete e._localeWatcher), e._i18n = null
                    })
                }
            }
        }, w = {
            name: "i18n",
            functional: !0,
            props: {
                tag: {type: String, default: "span"},
                path: {type: String, required: !0},
                locale: {type: String},
                places: {type: [Array, Object]}
            },
            render: function (e, t) {
                var n = t.props, o = t.data, r = t.children, i = t.parent, a = i.$i18n;
                if (r = (r || []).filter(function (e) {
                    return e.tag || (e.text = e.text.trim())
                }), !a) return r;
                var s = n.path, l = n.locale, c = {}, u = n.places || {},
                    p = (Array.isArray(u) ? u.length : Object.keys(u).length, r.every(function (e) {
                        if (e.data && e.data.attrs) {
                            var t = e.data.attrs.place;
                            return "undefined" !== typeof t && "" !== t
                        }
                    }));
                return Array.isArray(u) ? u.forEach(function (e, t) {
                    c[t] = e
                }) : Object.keys(u).forEach(function (e) {
                    c[e] = u[e]
                }), r.forEach(function (e, t) {
                    var n = p ? "" + e.data.attrs.place : "" + t;
                    c[n] = e
                }), e(n.tag, o, a.i(s, l, c))
            }
        }, _ = {
            name: "i18n-n",
            functional: !0,
            props: {
                tag: {type: String, default: "span"},
                value: {type: Number, required: !0},
                format: {type: [String, Object]},
                locale: {type: String}
            },
            render: function (e, t) {
                var n = t.props, o = t.parent, i = t.data, a = o.$i18n;
                if (!a) return null;
                var l = null, c = null;
                "string" === typeof n.format ? l = n.format : s(n.format) && (n.format.key && (l = n.format.key), c = Object.keys(n.format).reduce(function (e, t) {
                    var o;
                    return r.includes(t) ? Object.assign({}, e, (o = {}, o[t] = n.format[t], o)) : e
                }, null));
                var u = n.locale || a.locale, p = a._ntp(n.value, u, l, c), d = p.map(function (e, t) {
                    var n, o = i.scopedSlots && i.scopedSlots[e.type];
                    return o ? o((n = {}, n[e.type] = e.value, n.index = t, n.parts = p, n)) : e.value
                });
                return e(n.tag, {attrs: i.attrs, class: i["class"], staticClass: i.staticClass}, d)
            }
        };

        function S(e, t, n) {
            C(e, n) && O(e, t, n)
        }

        function T(e, t, n, o) {
            if (C(e, n)) {
                var r = n.context.$i18n;
                A(e, n) && v(t.value, t.oldValue) && v(e._localeMessage, r.getLocaleMessage(r.locale)) || O(e, t, n)
            }
        }

        function E(e, t, n, o) {
            var r = n.context;
            if (r) {
                var a = n.context.$i18n || {};
                t.modifiers.preserve || a.preserveDirectiveContent || (e.textContent = ""), e._vt = void 0, delete e["_vt"], e._locale = void 0, delete e["_locale"], e._localeMessage = void 0, delete e["_localeMessage"]
            } else i("Vue instance does not exists in VNode context")
        }

        function C(e, t) {
            var n = t.context;
            return n ? !!n.$i18n || (i("VueI18n instance does not exists in Vue instance"), !1) : (i("Vue instance does not exists in VNode context"), !1)
        }

        function A(e, t) {
            var n = t.context;
            return e._locale === n.$i18n.locale
        }

        function O(e, t, n) {
            var o, r, a = t.value, s = P(a), l = s.path, c = s.locale, u = s.args, p = s.choice;
            if (l || c || u) if (l) {
                var d = n.context;
                e._vt = e.textContent = p ? (o = d.$i18n).tc.apply(o, [l, p].concat(N(c, u))) : (r = d.$i18n).t.apply(r, [l].concat(N(c, u))), e._locale = d.$i18n.locale, e._localeMessage = d.$i18n.getLocaleMessage(d.$i18n.locale)
            } else i("`path` is required in v-t directive"); else i("value type not supported")
        }

        function P(e) {
            var t, n, o, r;
            return "string" === typeof e ? t = e : u(e) && (t = e.path, n = e.locale, o = e.args, r = e.choice), {
                path: t,
                locale: n,
                args: o,
                choice: r
            }
        }

        function N(e, t) {
            var n = [];
            return e && n.push(e), t && (Array.isArray(t) || u(t)) && n.push(t), n
        }

        function L(e) {
            L.installed = !0, y = e;
            y.version && Number(y.version.split(".")[0]);
            x(y), y.mixin(k), y.directive("t", {
                bind: S,
                update: T,
                unbind: E
            }), y.component(w.name, w), y.component(_.name, _);
            var t = y.config.optionMergeStrategies;
            t.i18n = function (e, t) {
                return void 0 === t ? e : t
            }
        }

        var I = function () {
            this._caches = Object.create(null)
        };
        I.prototype.interpolate = function (e, t) {
            if (!t) return [e];
            var n = this._caches[e];
            return n || (n = D(e), this._caches[e] = n), R(n, t)
        };
        var F = /^(?:\d)+/, M = /^(?:\w)+/;

        function D(e) {
            var t = [], n = 0, o = "";
            while (n < e.length) {
                var r = e[n++];
                if ("{" === r) {
                    o && t.push({type: "text", value: o}), o = "";
                    var i = "";
                    r = e[n++];
                    while (void 0 !== r && "}" !== r) i += r, r = e[n++];
                    var a = "}" === r, s = F.test(i) ? "list" : a && M.test(i) ? "named" : "unknown";
                    t.push({value: i, type: s})
                } else "%" === r ? "{" !== e[n] && (o += r) : o += r
            }
            return o && t.push({type: "text", value: o}), t
        }

        function R(e, t) {
            var n = [], o = 0, r = Array.isArray(t) ? "list" : s(t) ? "named" : "unknown";
            if ("unknown" === r) return n;
            while (o < e.length) {
                var i = e[o];
                switch (i.type) {
                    case"text":
                        n.push(i.value);
                        break;
                    case"list":
                        n.push(t[parseInt(i.value, 10)]);
                        break;
                    case"named":
                        "named" === r && n.push(t[i.value]);
                        break;
                    case"unknown":
                        0;
                        break
                }
                o++
            }
            return n
        }

        var j = 0, B = 1, $ = 2, z = 3, U = 0, H = 1, Y = 2, G = 3, V = 4, W = 5, K = 6, q = 7, X = 8, Q = [];
        Q[U] = {ws: [U], ident: [G, j], "[": [V], eof: [q]}, Q[H] = {
            ws: [H],
            ".": [Y],
            "[": [V],
            eof: [q]
        }, Q[Y] = {ws: [Y], ident: [G, j], 0: [G, j], number: [G, j]}, Q[G] = {
            ident: [G, j],
            0: [G, j],
            number: [G, j],
            ws: [H, B],
            ".": [Y, B],
            "[": [V, B],
            eof: [q, B]
        }, Q[V] = {"'": [W, j], '"': [K, j], "[": [V, $], "]": [H, z], eof: X, else: [V, j]}, Q[W] = {
            "'": [V, j],
            eof: X,
            else: [W, j]
        }, Q[K] = {'"': [V, j], eof: X, else: [K, j]};
        var J = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

        function Z(e) {
            return J.test(e)
        }

        function ee(e) {
            var t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
            return t !== n || 34 !== t && 39 !== t ? e : e.slice(1, -1)
        }

        function te(e) {
            if (void 0 === e || null === e) return "eof";
            var t = e.charCodeAt(0);
            switch (t) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                    return e;
                case 95:
                case 36:
                case 45:
                    return "ident";
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
            }
            return "ident"
        }

        function ne(e) {
            var t = e.trim();
            return ("0" !== e.charAt(0) || !isNaN(e)) && (Z(t) ? ee(t) : "*" + t)
        }

        function oe(e) {
            var t, n, o, r, i, a, s, l = [], c = -1, u = U, p = 0, d = [];

            function f() {
                var t = e[c + 1];
                if (u === W && "'" === t || u === K && '"' === t) return c++, o = "\\" + t, d[j](), !0
            }

            d[B] = function () {
                void 0 !== n && (l.push(n), n = void 0)
            }, d[j] = function () {
                void 0 === n ? n = o : n += o
            }, d[$] = function () {
                d[j](), p++
            }, d[z] = function () {
                if (p > 0) p--, u = V, d[j](); else {
                    if (p = 0, n = ne(n), !1 === n) return !1;
                    d[B]()
                }
            };
            while (null !== u) if (c++, t = e[c], "\\" !== t || !f()) {
                if (r = te(t), s = Q[u], i = s[r] || s["else"] || X, i === X) return;
                if (u = i[0], a = d[i[1]], a && (o = i[2], o = void 0 === o ? t : o, !1 === a())) return;
                if (u === q) return l
            }
        }

        var re = function () {
            this._cache = Object.create(null)
        };
        re.prototype.parsePath = function (e) {
            var t = this._cache[e];
            return t || (t = oe(e), t && (this._cache[e] = t)), t || []
        }, re.prototype.getPathValue = function (e, t) {
            if (!s(e)) return null;
            var n = this.parsePath(t);
            if (0 === n.length) return null;
            var o = n.length, r = e, i = 0;
            while (i < o) {
                var a = r[n[i]];
                if (void 0 === a) return null;
                r = a, i++
            }
            return r
        };
        var ie, ae = /<\/?[\w\s="\/.':;#-\/]+>/, se = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g,
            le = /^@(?:\.([a-z]+))?:/, ce = /[()]/g, ue = {
                upper: function (e) {
                    return e.toLocaleUpperCase()
                }, lower: function (e) {
                    return e.toLocaleLowerCase()
                }
            }, pe = new I, de = function (e) {
                var t = this;
                void 0 === e && (e = {}), !y && "undefined" !== typeof window && window.Vue && L(window.Vue);
                var n = e.locale || "en-US", o = e.fallbackLocale || "en-US", r = e.messages || {},
                    i = e.dateTimeFormats || {}, a = e.numberFormats || {};
                this._vm = null, this._formatter = e.formatter || pe, this._missing = e.missing || null, this._root = e.root || null, this._sync = void 0 === e.sync || !!e.sync, this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot, this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && !!e.silentTranslationWarn, this._silentFallbackWarn = void 0 !== e.silentFallbackWarn && !!e.silentFallbackWarn, this._dateTimeFormatters = {}, this._numberFormatters = {}, this._path = new re, this._dataListeners = [], this._preserveDirectiveContent = void 0 !== e.preserveDirectiveContent && !!e.preserveDirectiveContent, this.pluralizationRules = e.pluralizationRules || {}, this._warnHtmlInMessage = e.warnHtmlInMessage || "off", this._exist = function (e, n) {
                    return !(!e || !n) && (!p(t._path.getPathValue(e, n)) || !!e[n])
                }, "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(r).forEach(function (e) {
                    t._checkLocaleMessage(e, t._warnHtmlInMessage, r[e])
                }), this._initVM({locale: n, fallbackLocale: o, messages: r, dateTimeFormats: i, numberFormats: a})
            }, fe = {
                vm: {configurable: !0},
                messages: {configurable: !0},
                dateTimeFormats: {configurable: !0},
                numberFormats: {configurable: !0},
                availableLocales: {configurable: !0},
                locale: {configurable: !0},
                fallbackLocale: {configurable: !0},
                missing: {configurable: !0},
                formatter: {configurable: !0},
                silentTranslationWarn: {configurable: !0},
                silentFallbackWarn: {configurable: !0},
                preserveDirectiveContent: {configurable: !0},
                warnHtmlInMessage: {configurable: !0}
            };
        de.prototype._checkLocaleMessage = function (e, t, n) {
            var o = [], r = function (e, t, n, o) {
                if (u(n)) Object.keys(n).forEach(function (i) {
                    var a = n[i];
                    u(a) ? (o.push(i), o.push("."), r(e, t, a, o), o.pop(), o.pop()) : (o.push(i), r(e, t, a, o), o.pop())
                }); else if (Array.isArray(n)) n.forEach(function (n, i) {
                    u(n) ? (o.push("[" + i + "]"), o.push("."), r(e, t, n, o), o.pop(), o.pop()) : (o.push("[" + i + "]"), r(e, t, n, o), o.pop())
                }); else if ("string" === typeof n) {
                    var s = ae.test(n);
                    if (s) {
                        var l = "Detected HTML in message '" + n + "' of keypath '" + o.join("") + "' at '" + t + "'. Consider component interpolation with '<i18n>' to avoid XSS. See https://bit.ly/2ZqJzkp";
                        "warn" === e ? i(l) : "error" === e && a(l)
                    }
                }
            };
            r(t, e, n, o)
        }, de.prototype._initVM = function (e) {
            var t = y.config.silent;
            y.config.silent = !0, this._vm = new y({data: e}), y.config.silent = t
        }, de.prototype.destroyVM = function () {
            this._vm.$destroy()
        }, de.prototype.subscribeDataChanging = function (e) {
            this._dataListeners.push(e)
        }, de.prototype.unsubscribeDataChanging = function (e) {
            m(this._dataListeners, e)
        }, de.prototype.watchI18nData = function () {
            var e = this;
            return this._vm.$watch("$data", function () {
                var t = e._dataListeners.length;
                while (t--) y.nextTick(function () {
                    e._dataListeners[t] && e._dataListeners[t].$forceUpdate()
                })
            }, {deep: !0})
        }, de.prototype.watchLocale = function () {
            if (!this._sync || !this._root) return null;
            var e = this._vm;
            return this._root.$i18n.vm.$watch("locale", function (t) {
                e.$set(e, "locale", t), e.$forceUpdate()
            }, {immediate: !0})
        }, fe.vm.get = function () {
            return this._vm
        }, fe.messages.get = function () {
            return f(this._getMessages())
        }, fe.dateTimeFormats.get = function () {
            return f(this._getDateTimeFormats())
        }, fe.numberFormats.get = function () {
            return f(this._getNumberFormats())
        }, fe.availableLocales.get = function () {
            return Object.keys(this.messages).sort()
        }, fe.locale.get = function () {
            return this._vm.locale
        }, fe.locale.set = function (e) {
            this._vm.$set(this._vm, "locale", e)
        }, fe.fallbackLocale.get = function () {
            return this._vm.fallbackLocale
        }, fe.fallbackLocale.set = function (e) {
            this._vm.$set(this._vm, "fallbackLocale", e)
        }, fe.missing.get = function () {
            return this._missing
        }, fe.missing.set = function (e) {
            this._missing = e
        }, fe.formatter.get = function () {
            return this._formatter
        }, fe.formatter.set = function (e) {
            this._formatter = e
        }, fe.silentTranslationWarn.get = function () {
            return this._silentTranslationWarn
        }, fe.silentTranslationWarn.set = function (e) {
            this._silentTranslationWarn = e
        }, fe.silentFallbackWarn.get = function () {
            return this._silentFallbackWarn
        }, fe.silentFallbackWarn.set = function (e) {
            this._silentFallbackWarn = e
        }, fe.preserveDirectiveContent.get = function () {
            return this._preserveDirectiveContent
        }, fe.preserveDirectiveContent.set = function (e) {
            this._preserveDirectiveContent = e
        }, fe.warnHtmlInMessage.get = function () {
            return this._warnHtmlInMessage
        }, fe.warnHtmlInMessage.set = function (e) {
            var t = this, n = this._warnHtmlInMessage;
            if (this._warnHtmlInMessage = e, n !== e && ("warn" === e || "error" === e)) {
                var o = this._getMessages();
                Object.keys(o).forEach(function (e) {
                    t._checkLocaleMessage(e, t._warnHtmlInMessage, o[e])
                })
            }
        }, de.prototype._getMessages = function () {
            return this._vm.messages
        }, de.prototype._getDateTimeFormats = function () {
            return this._vm.dateTimeFormats
        }, de.prototype._getNumberFormats = function () {
            return this._vm.numberFormats
        }, de.prototype._warnDefault = function (e, t, n, o, r) {
            if (!p(n)) return n;
            if (this._missing) {
                var i = this._missing.apply(null, [e, t, o, r]);
                if ("string" === typeof i) return i
            } else 0;
            return t
        }, de.prototype._isFallbackRoot = function (e) {
            return !e && !p(this._root) && this._fallbackRoot
        }, de.prototype._isSilentFallback = function (e) {
            return this._silentFallbackWarn && (this._isFallbackRoot() || e !== this.fallbackLocale)
        }, de.prototype._interpolate = function (e, t, n, o, r, i, a) {
            if (!t) return null;
            var s, l = this._path.getPathValue(t, n);
            if (Array.isArray(l) || u(l)) return l;
            if (p(l)) {
                if (!u(t)) return null;
                if (s = t[n], "string" !== typeof s) return null
            } else {
                if ("string" !== typeof l) return null;
                s = l
            }
            return (s.indexOf("@:") >= 0 || s.indexOf("@.") >= 0) && (s = this._link(e, t, s, o, "raw", i, a)), this._render(s, r, i, n)
        }, de.prototype._link = function (e, t, n, o, r, i, a) {
            var s = n, l = s.match(se);
            for (var c in l) if (l.hasOwnProperty(c)) {
                var u = l[c], p = u.match(le), d = p[0], f = p[1], m = u.replace(d, "").replace(ce, "");
                if (a.includes(m)) return s;
                a.push(m);
                var h = this._interpolate(e, t, m, o, "raw" === r ? "string" : r, "raw" === r ? void 0 : i, a);
                if (this._isFallbackRoot(h)) {
                    if (!this._root) throw Error("unexpected error");
                    var g = this._root.$i18n;
                    h = g._translate(g._getMessages(), g.locale, g.fallbackLocale, m, o, r, i)
                }
                h = this._warnDefault(e, m, h, o, Array.isArray(i) ? i : [i]), ue.hasOwnProperty(f) && (h = ue[f](h)), a.pop(), s = h ? s.replace(u, h) : s
            }
            return s
        }, de.prototype._render = function (e, t, n, o) {
            var r = this._formatter.interpolate(e, n, o);
            return r || (r = pe.interpolate(e, n, o)), "string" === t ? r.join("") : r
        }, de.prototype._translate = function (e, t, n, o, r, i, a) {
            var s = this._interpolate(t, e[t], o, r, i, a, [o]);
            return p(s) ? (s = this._interpolate(n, e[n], o, r, i, a, [o]), p(s) ? null : s) : s
        }, de.prototype._t = function (e, t, n, o) {
            var r, i = [], a = arguments.length - 4;
            while (a-- > 0) i[a] = arguments[a + 4];
            if (!e) return "";
            var s = d.apply(void 0, i), l = s.locale || t,
                c = this._translate(n, l, this.fallbackLocale, e, o, "string", s.params);
            if (this._isFallbackRoot(c)) {
                if (!this._root) throw Error("unexpected error");
                return (r = this._root).$t.apply(r, [e].concat(i))
            }
            return this._warnDefault(l, e, c, o, i)
        }, de.prototype.t = function (e) {
            var t, n = [], o = arguments.length - 1;
            while (o-- > 0) n[o] = arguments[o + 1];
            return (t = this)._t.apply(t, [e, this.locale, this._getMessages(), null].concat(n))
        }, de.prototype._i = function (e, t, n, o, r) {
            var i = this._translate(n, t, this.fallbackLocale, e, o, "raw", r);
            if (this._isFallbackRoot(i)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.i(e, t, r)
            }
            return this._warnDefault(t, e, i, o, [r])
        }, de.prototype.i = function (e, t, n) {
            return e ? ("string" !== typeof t && (t = this.locale), this._i(e, t, this._getMessages(), null, n)) : ""
        }, de.prototype._tc = function (e, t, n, o, r) {
            var i, a = [], s = arguments.length - 5;
            while (s-- > 0) a[s] = arguments[s + 5];
            if (!e) return "";
            void 0 === r && (r = 1);
            var l = {count: r, n: r}, c = d.apply(void 0, a);
            return c.params = Object.assign(l, c.params), a = null === c.locale ? [c.params] : [c.locale, c.params], this.fetchChoice((i = this)._t.apply(i, [e, t, n, o].concat(a)), r)
        }, de.prototype.fetchChoice = function (e, t) {
            if (!e && "string" !== typeof e) return null;
            var n = e.split("|");
            return t = this.getChoiceIndex(t, n.length), n[t] ? n[t].trim() : e
        }, de.prototype.getChoiceIndex = function (e, t) {
            var n = function (e, t) {
                return e = Math.abs(e), 2 === t ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
            };
            return this.locale in this.pluralizationRules ? this.pluralizationRules[this.locale].apply(this, [e, t]) : n(e, t)
        }, de.prototype.tc = function (e, t) {
            var n, o = [], r = arguments.length - 2;
            while (r-- > 0) o[r] = arguments[r + 2];
            return (n = this)._tc.apply(n, [e, this.locale, this._getMessages(), null, t].concat(o))
        }, de.prototype._te = function (e, t, n) {
            var o = [], r = arguments.length - 3;
            while (r-- > 0) o[r] = arguments[r + 3];
            var i = d.apply(void 0, o).locale || t;
            return this._exist(n[i], e)
        }, de.prototype.te = function (e, t) {
            return this._te(e, this.locale, this._getMessages(), t)
        }, de.prototype.getLocaleMessage = function (e) {
            return f(this._vm.messages[e] || {})
        }, de.prototype.setLocaleMessage = function (e, t) {
            ("warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || (this._checkLocaleMessage(e, this._warnHtmlInMessage, t), "error" !== this._warnHtmlInMessage)) && this._vm.$set(this._vm.messages, e, t)
        }, de.prototype.mergeLocaleMessage = function (e, t) {
            ("warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || (this._checkLocaleMessage(e, this._warnHtmlInMessage, t), "error" !== this._warnHtmlInMessage)) && this._vm.$set(this._vm.messages, e, b(this._vm.messages[e] || {}, t))
        }, de.prototype.getDateTimeFormat = function (e) {
            return f(this._vm.dateTimeFormats[e] || {})
        }, de.prototype.setDateTimeFormat = function (e, t) {
            this._vm.$set(this._vm.dateTimeFormats, e, t)
        }, de.prototype.mergeDateTimeFormat = function (e, t) {
            this._vm.$set(this._vm.dateTimeFormats, e, b(this._vm.dateTimeFormats[e] || {}, t))
        }, de.prototype._localizeDateTime = function (e, t, n, o, r) {
            var i = t, a = o[i];
            if ((p(a) || p(a[r])) && (i = n, a = o[i]), p(a) || p(a[r])) return null;
            var s = a[r], l = i + "__" + r, c = this._dateTimeFormatters[l];
            return c || (c = this._dateTimeFormatters[l] = new Intl.DateTimeFormat(i, s)), c.format(e)
        }, de.prototype._d = function (e, t, n) {
            if (!n) return new Intl.DateTimeFormat(t).format(e);
            var o = this._localizeDateTime(e, t, this.fallbackLocale, this._getDateTimeFormats(), n);
            if (this._isFallbackRoot(o)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.d(e, n, t)
            }
            return o || ""
        }, de.prototype.d = function (e) {
            var t = [], n = arguments.length - 1;
            while (n-- > 0) t[n] = arguments[n + 1];
            var o = this.locale, r = null;
            return 1 === t.length ? "string" === typeof t[0] ? r = t[0] : s(t[0]) && (t[0].locale && (o = t[0].locale), t[0].key && (r = t[0].key)) : 2 === t.length && ("string" === typeof t[0] && (r = t[0]), "string" === typeof t[1] && (o = t[1])), this._d(e, o, r)
        }, de.prototype.getNumberFormat = function (e) {
            return f(this._vm.numberFormats[e] || {})
        }, de.prototype.setNumberFormat = function (e, t) {
            this._vm.$set(this._vm.numberFormats, e, t)
        }, de.prototype.mergeNumberFormat = function (e, t) {
            this._vm.$set(this._vm.numberFormats, e, b(this._vm.numberFormats[e] || {}, t))
        }, de.prototype._getNumberFormatter = function (e, t, n, o, r, i) {
            var a = t, s = o[a];
            if ((p(s) || p(s[r])) && (a = n, s = o[a]), p(s) || p(s[r])) return null;
            var l, c = s[r];
            if (i) l = new Intl.NumberFormat(a, Object.assign({}, c, i)); else {
                var u = a + "__" + r;
                l = this._numberFormatters[u], l || (l = this._numberFormatters[u] = new Intl.NumberFormat(a, c))
            }
            return l
        }, de.prototype._n = function (e, t, n, o) {
            if (!de.availabilities.numberFormat) return "";
            if (!n) {
                var r = o ? new Intl.NumberFormat(t, o) : new Intl.NumberFormat(t);
                return r.format(e)
            }
            var i = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, o),
                a = i && i.format(e);
            if (this._isFallbackRoot(a)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n.n(e, Object.assign({}, {key: n, locale: t}, o))
            }
            return a || ""
        }, de.prototype.n = function (e) {
            var t = [], n = arguments.length - 1;
            while (n-- > 0) t[n] = arguments[n + 1];
            var o = this.locale, i = null, a = null;
            return 1 === t.length ? "string" === typeof t[0] ? i = t[0] : s(t[0]) && (t[0].locale && (o = t[0].locale), t[0].key && (i = t[0].key), a = Object.keys(t[0]).reduce(function (e, n) {
                var o;
                return r.includes(n) ? Object.assign({}, e, (o = {}, o[n] = t[0][n], o)) : e
            }, null)) : 2 === t.length && ("string" === typeof t[0] && (i = t[0]), "string" === typeof t[1] && (o = t[1])), this._n(e, o, i, a)
        }, de.prototype._ntp = function (e, t, n, o) {
            if (!de.availabilities.numberFormat) return [];
            if (!n) {
                var r = o ? new Intl.NumberFormat(t, o) : new Intl.NumberFormat(t);
                return r.formatToParts(e)
            }
            var i = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, o),
                a = i && i.formatToParts(e);
            if (this._isFallbackRoot(a)) {
                if (!this._root) throw Error("unexpected error");
                return this._root.$i18n._ntp(e, t, n, o)
            }
            return a || []
        }, Object.defineProperties(de.prototype, fe), Object.defineProperty(de, "availabilities", {
            get: function () {
                if (!ie) {
                    var e = "undefined" !== typeof Intl;
                    ie = {
                        dateTimeFormat: e && "undefined" !== typeof Intl.DateTimeFormat,
                        numberFormat: e && "undefined" !== typeof Intl.NumberFormat
                    }
                }
                return ie
            }
        }), de.install = L, de.version = "8.11.2";
        var me, he = de, ge = n("9a36"), be = n("90b9"), ve = n("bd86"), xe = n("cebc"), ye = n("da5b"), ke = n.n(ye),
            we = {
                name: "KeYouYun ERP",
                logo: "KeYouYun",
                slogan: "Edit Once, Post Anywhere, Free Forever",
                back: "Back",
                version: "Permanent Member",
                success: "success",
                failure: "failure",
                skip: "skip",
                save: "Save",
                startBoost: "Start Boost",
                stopBoost: "Stop Boost",
                login: "Log In",
                loginTip: "Please log in to KeYouYun ERP system, if you have logged in, please refresh the page again",
                help: "Help",
                siteList: "Shopee Site List:",
                comingSoon: "Coming",
                loginNow: "Log In",
                notLogIn: "Not logged in to KeYouYun ERP",
                addShop: "Add shop",
                readAndAgree: "Read and agree",
                kyyServicePrivacy: "KeYouYun Service Privacy",
                button: {cancel: "Cancel", ok: "Confirm", sync: "Synchronize", query: "Query"},
                downloadImg: "Download Image",
                downloadVideo: "Download Video",
                orderCenter: "KeYouYun ERP Order Center",
                notOrderedTip: "Currently not ordering this app, please go to the KeYouYun ERP to order",
                unableCollect: "Unable to collect, please {go} to the ordering KeYouYun ERP",
                go: "go",
                unorderMultiSotreManagement: "Unordered multi-store management, please go to Keyouyun ERP to order",
                plaseGoToKeYouYunOrderTool: "Not ordered, please go to the KeYouYun to order!",
                fansElves: "Shop Followers",
                imgAndVedioHelper: "Picture Video Assistant",
                orderForFullFeature: 'Order "{toolName}" and experience the full feature',
                messageNotification: "Message Notification",
                weChat: "WeChat",
                actionSuceess: "Successful operation",
                actionFail: "operation failed",
                dontCloseThePage: "Do not close this page",
                boostWarning: "Adjustment of shrimp skin technology, the old version of the regular pinning that is free to use has stopped maintenance. Please order a new version of pinning. ",
                syncXiapiTip: "Not login the shopee buy page ({hostname})，please click the button below",
                gotoOrderApp: "Click to Buy"
            }, _e = {shop: "Shops", apps: "Apps", setting: "Settings", activation: "Activation"}, Se = {
                MY: "Malaysia",
                SG: "Singapore",
                ID: "Indonesia",
                TW: "Taiwan",
                TH: "Thailand",
                VN: "Vietnam",
                PH: "Philippines",
                BR: "Brazil",
                site: {
                    MY: "Malaysia",
                    SG: "Singapore",
                    ID: "Indonesia",
                    TW: "Taiwan",
                    TH: "Thailand",
                    VN: "Vietnam",
                    PH: "Philippine",
                    BR: "Brazil site"
                }
            }, Te = {http: {500: "System is busy, try again later", 200: "Success"}}, Ee = {
                backgroundRemoval: "Background Removal",
                pictureBeautification: "Photograph Editor",
                qRCodeProduction: "QR Code Generator",
                imageCompression: "Image Compressor",
                keywordAnalysis: "Keyword Tool",
                googleTrends: "Google Trends",
                bannerMaker: "Banner Maker",
                watermarkCropping: "Watermark Cropping"
            }, Ce = {
                usingHelp: "Help",
                feedback: "Feedback",
                problemDescription: "Describe your problem or suggestion...",
                feedbackType: "Feedback Type",
                aboutExtension: "About",
                qq: "QQ Group",
                exitAccount: "Exit",
                member: "Member",
                lasting: "Free",
                submit: "Submit",
                problem: "Problem",
                suggest: "Suggest",
                missingRequiredParameters: "Missing required parameters.",
                contact: "Contact",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, Ae = {
                shopeeSiteList: [{
                    site: "Taiwan (Cross-Border Seller)",
                    url: "https://xiapi.xiapibuy.com/"
                }, {site: "Taiwan (Local Seller)", url: "https://shopee.tw"}, {
                    site: "Malaysia (Cross-Border Seller)",
                    url: "https://my.xiapibuy.com/"
                }, {
                    site: "Malaysia (Local Seller)",
                    url: "https://shopee.com.my"
                }, {
                    site: "Indonesia (Cross-Border Seller)",
                    url: "https://id.xiapibuy.com/"
                }, {site: "Indonesia (Local Seller)", url: "https://shopee.co.id"}, {
                    site: "Thailand (Cross-Border Seller)",
                    url: "https://th.xiapibuy.com/"
                }, {site: "Thailand (Local Seller)", url: "https://shopee.co.th"}, {
                    site: "Singapore (Cross-Border Seller)",
                    url: "https://sg.xiapibuy.com/"
                }, {site: "Singapore (Local Seller)", url: "https://shopee.sg"}, {
                    site: "Vietnam (Cross-Border Seller)",
                    url: "https://vn.xiapibuy.com/"
                }, {site: "Vietnam (Local Seller)", url: "https://shopee.vn"}, {
                    site: "Philippines (Cross-Border Seller)",
                    url: "https://ph.xiapibuy.com/"
                }, {site: "Philippines (Local Seller)", url: "https://shopee.ph"}, {
                    site: "Brazil (mainland seller)",
                    url: "https://br.xiapibuy.com/"
                }, {site: "Brazil (Local Seller)", url: "https://shopee.com.br/"}],
                tw: "Taiwan",
                sg: "Singapore",
                my: "Malaysia",
                ph: "Philippines",
                id: "Indonesia",
                th: "Thailand",
                vn: "Vietnam",
                order: "Shopee-{countryName}-Order Updates",
                offer: "Shopee-{countryName}-Listing Updates",
                activity: "Shopee-{countryName}-Activity",
                evaluation: "Shopee-{countryName}-Rating Updates",
                orderMessage: "You have an order notification from ({shopName}) , e.g. To Ship, Pending Return, Pending Cancellation.",
                offerMessage: "You have an listing notification from ({shopName}) , e.g. Suspended Product, Banned Product, Sold Out Product.",
                activityMessage: "You have an activity notification from ({shopName}) , e.g. Buyer Following, Buyer Liked.",
                evaluationMessage: "You have a rating notification from ({shopName}) , e.g. Pending Rating, Buyer Rated. "
            }, Oe = {
                all: "Select All",
                authorization: "Shopee Shops",
                type: "Tool Type",
                activationCode: "Activation Code",
                inActivation: "activating...",
                activateNow: "Instantly Activate",
                requiredParameter: "The field is required.",
                necessaryInformation: "Missing required parameters.",
                permanentMemberTip: "This account is permanent that does not need to be activated again.",
                shopFollowers: "Shop Followers Tool",
                activationS: "Activation successful, account is permanent.",
                activationSTime: "Activation successful, service end time: {time}",
                nonAuthMessage: 'The shop is not authorized, please go to <a target="_blank" href="{shopAuthUrl}">{name}</a>',
                shopActivationSTimeis: "Shop name: {shopName} End of service: {time}",
                submitTip: "If already bought in the system, skip this step and use it directly."
            }, Pe = {
                shopFollowers: "Shop Followers",
                exchangeCenter: "Exchange Center",
                chatToolkit: "Shopee Chat",
                productBoost: "Product Boost",
                generalSettings: "General Settings",
                rewardHall: "Task Center",
                collectPinDuoDuo: "PinDuoDuo Collect",
                purchaseOrder: "Purchase Order",
                sendMessageInBulk: "Group messaging",
                imageDownload: "Image Download"
            }, Ne = {
                attentionFans: "Follow Shop's Followers",
                attentionFansTip: 'Click "Follow Shop\'s Followers" menu on product, then click the "Shop Followers" tool to start follow.',
                cancelFans: "Shop Unfollow",
                bootOperation: 'Click navigation <a href="{followingUrl}" target="_blank" title="Shop Unfollow Page">"Shop Unfollow"</a>, then click the "Shop Followers" tool to start unfollow.',
                storeInformation: "Shop Information",
                storeName: "Shop Name",
                commodity: "Product",
                responseRate: "Chat Performance",
                evaluation: "Rating",
                cancellationRate: "Cancellation Rate",
                fan: "Followers",
                attention: "Following",
                score: "No Score",
                count: "{shopStarScore} ({shopStarCount})",
                unsubscribe: "Shop Unfollow",
                unsubscribeLabel: "Unfollow Limit",
                unsubscribePlaceholder: "800",
                turnOnUnFollow: "Start Unfollow",
                turnOnUnFollowPending: "Running, Click To Stop Unfollow",
                doNotClose: "Do not close this page",
                error: "Shopee system is busy, please refresh the page and try again",
                unSubStart: "[Start]: Prepare to perform auto-unfollow task",
                unSubWait: "[Wait]: Simulate the browser operation, ready to turn the next page",
                unSubWaitNoData: "[Wait]: No followers",
                unSubEndReadyClose: "[End]: The auto-unfollow task has been aborted, ready to stop the task",
                unSubEndClose: "[End]: The auto-unfollow has been stopped",
                unSubEndCloseSystemBusy: "[End]: Not login the shopee or the shopee system is busy",
                unSubEndComplete: "[End]: The auto-unfollow task has been completed",
                unSubSuccess: "[Unfollow]: {name} success",
                unSubSkipLogin: "[Skip]: Please login the shopee",
                unSubSkip: "[Skip]: {name} invalid user, can not unfollow",
                followFans: "Shop Following",
                subPosition: "Start Position",
                subDefault: "start from the first",
                subQuantityLabel: "Following Limit",
                subscribePlaceholder: "Default is 800",
                filterSeller: "Ignore Seller",
                subSellersNumber: "Product Quantity",
                subSellersNumberPlaceholder: "Default is 50",
                subLastLoginTime: "Last login time",
                subLastLoginTimeDefault: "30",
                subLastLoginTimeDays: "Days ago",
                subNumberOfEvaluations: "Rating Quantity",
                subNumberOfEvaluationsDefault: "0",
                subEvaluationsTime: "",
                subNumberOfFollowers: "User Following Quantity",
                subNumberOfFollowersDefault: "1",
                subNumberOfFollowersUnit: "",
                turnOnAttentionBtn: "Start Following",
                turnOnAttentionBtnPending: "Running, Click To Stop Follow",
                subStartFollow: "[Start]: Preparing to perform auto-follow task",
                subEndFollow: "[End]: The auto-follow has been aborted, ready to stop the task",
                subEndFollowCompleted: "[End]: The auto-follow task has been completed",
                subEndFollowStop: "[End]: The auto-follow has been stopped",
                subEndFollowEnd: "[End]: No more followers",
                subEndFollowEndUpperLimitStore: "[End]: Beyond shop following limit, can not continue to follow",
                subEndFollowEndUpperLimit: "[End]:  Beyond following limit today, can not continue to follow",
                subEndFollowEndWaitSim: "[Wait]: Simulate the browser operation, ready to turn the next page",
                subSkipFollow: "[Skip]: {name} invalid user, can not following",
                subSkipFollowNotLogin: "[Skip]: Not login the shopee, can not auto-following",
                subSkipFollowAlreadyConcerned: "[Skip]: {name} has been followed",
                subSkipFollowIsSeller: "[Skip]: {name} is a seller who has {count} products",
                subSkipFollowLastLogin: "[Skip]: {name} more than {day} days not logged in",
                subSkipFollowPeople: "[Skip]: {name} following count is less than {minFollowingTotal}",
                subSkipFollowEvaluation: "[Skip]: {name} rating count is less than {minEvaluationTotal}",
                subSkipFollowDays: "[Skip]: {name} has been followed within three days, not following again",
                subSkipFollowSuccess: "[Follow]: {name} success",
                followingUserInvalid: "[Skip]: {name} invalid user",
                early: "Early",
                mid: "Mid",
                late: "Late",
                earlyIntroduction: "Rapidly increase followers, improve the popularity of the shop.",
                midIntroduction: "Following real buyers, make buyers to orders.",
                lateIntroduction: "Following active buyer, improve order conversion rate",
                UnFollowCap: "Unfollow the limit today",
                syncXiapiTip: "Not login the shopee buy page ({hostname})，please click the button below",
                autoFollow: "Automatically follow",
                autoUnfollow: "Auto Take Off",
                followTheDynamicList: "Follow the dynamic list",
                sendMessageInBulk: "Group messaging",
                recentFollowYou: "Follow you recently",
                selectAll: "select all"
            }, Le = {
                currentSite: "Current Site",
                targetCurrencyLabel: "Please select the target currency",
                theSameCurrencyTip: "The current currency is the same as the target currency, can not save.",
                currencyList: [{site: "China (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "Taiwan ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "Indonesia (Rp)", currencyCode: "IDR", currencyTag: "Rp"}, {
                    site: "Vietnamese (₫)",
                    currencyCode: "VND",
                    currencyTag: "₫"
                }, {site: "Thailand (฿)", currencyCode: "THB", currencyTag: "฿"}, {
                    site: "Philippines (₱)",
                    currencyCode: "PHP",
                    currencyTag: "₱"
                }, {site: "Malaysia (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "Singapore ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "United States ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "Brazil（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "Currency",
                clickOpen: "Open",
                noLongerDisplay: "Shut Down"
            }, Ie = {
                sellerLanguage: "Seller Language",
                selectLanguageLabel: "Select the language",
                buyerLanguage: "Buyer Language",
                openChatLabel: "whether to open translation",
                messageTranslate: "Message Translate",
                buttonPrompt: "Press Shift + Enter to start a new line",
                sendButton: "Translate and Send",
                languageList: [{name: "Chinese Simplified (China)", code: "zh-CN"}, {
                    name: "Chinese Traditional (China)",
                    code: "zh-TW"
                }, {name: "English (US)", code: "en"}, {
                    name: "Indonesian (Indonesia)",
                    code: "id"
                }, {name: "Thai (Thailand)", code: "th"}, {
                    name: "Vietnamese (Vietnamese)",
                    code: "vi"
                }, {name: "Malay (Malaysia Local)", code: "ms"}, {
                    name: "Tagalog (Philippines Local)",
                    code: "tl"
                }, {name: "Portuguese (Brazil)", code: "pt"}],
                openShopeeDefaultBtn: "Whether to enable the Shopee default message button",
                orderWeChatGetFullFeature: "Order WeChat from KeYouYun to show full translation"
            }, Fe = {
                dataCollection: "Data Collection",
                repeatLabel: "Do not collect repeat within one day",
                navigationSettings: "Navigation settings (< 6 items)",
                navigationSettingsLabel: "please select items",
                navigationItems: [{name: "Seller Center", id: 1}, {name: "My Sales", id: 3}, {
                    name: "New Chat",
                    id: 7
                }, {name: "Shop Home", id: 4}, {name: "Shop Unfollow", id: 6}, {
                    name: "My Products",
                    id: 2
                }, {name: "Shop Followers", id: 5}, {name: "Shop Categories", id: 8}, {
                    name: "Marketing Center",
                    id: 9
                }, {name: "My Income", id: 10}, {name: "My Wallet", id: 11}, {
                    name: "My Data",
                    id: 12
                }, {name: "Shop Settings", id: 13}],
                syncAccount: "Sync Shopee Account",
                syncTip: "Click 'Sync' button will synchronize login status to 'xiapibuy.com' from 'seller.xx.shopee.cn'",
                syncBtn: "Synchronize",
                syncErrorTip: "Not login 'shopee.cn' seller center, can not sync.",
                collectSetTitle: "Collect Settings",
                whetherToCollectDiscountLabel: "Whether to collect discounted prices",
                collectStockSetLabel: "Collect inventory settings",
                collectRealStock: "Collect real stock",
                collectFixStock: "Collect fixed stock",
                selelctPricingStrategies: "Pricing Strategies",
                notificationTitle: "Notification Settings",
                neverShowMessageNotifications: "Shut Down",
                otherFeature: "Others",
                commonFeature: "Common",
                networkLine: "Network",
                networkLineChina: "China",
                networkLineWorld: "International",
                jumpPageTips: "After 3's the page will jump to {url}",
                syncLoginTips: "Please use the store account password to log in, not the parent account login, the parent account login cannot be synchronized.",
                goLocalMain: "You are now logged in to the new version of the seller center, you need to log in to the local front desk site."
            }, Me = {
                sellerCenter: "Seller Center",
                myProducts: "My Products",
                mySales: "My Sales",
                shopHome: "Shop Home",
                shopFollower: "Shop Followers",
                shopUnfollow: "Shop Unfollow",
                newVersionChat: "New Chat",
                shopCategories: "Shop Categories",
                marketingCenter: "Marketing Center",
                myIncome: "My Income",
                myWallet: "My Wallet",
                myData: "My Data",
                shopSettings: "Shop Settings",
                purchaseOrder: "purchase order",
                myFans: "my fans"
            }, De = {
                notPurchased: "Not purchased, can not use.",
                serviceExpired: "Service has expired: {time}.",
                notShopeePage: "Not Shopee pages, can not operate.",
                notLoginShopee: "Not logged in the Shopee Seller Center.",
                notLoginShopeeMainUrl: 'Not login "xiapibuy.com"，please click "Synchronize" button in right panel',
                unauthorized: "The shop of the Shopee seller center is not authorized, please go to {name} to bind.",
                shopAuthorization: "Shop Authorization",
                notOrdered: "Not order or expired, go to KeYouYun to buy.",
                goToERP: "Order Now"
            }, Re = {
                title: "Go to collect on PinDuoDuo.",
                collectDesc: "Start collecting: Click on the item to go to the details page, then click the collection button in the lower right corner."
            }, je = {
                collectTo: "Collect To {name}",
                batchCollectTo: "Batch Collect To {name}",
                findSource: "Find Supplier Of Product",
                followFans: "Follow Shop's Followers",
                viewShop: "Shop Home",
                beingCollected: "collecting...",
                collected: "Have been Collected",
                successfulCollection: "Collect Successful",
                successfulOperation: "Operation Successful",
                successfulCollectionTip: "Collect successful, see the collected data by {msg} later",
                successfulOperationTip: "Operation successful, see the collected data by {msg} later",
                collectedTip: "The product has been collected today, see the collected data by {msg}",
                collectionPage: "Product Collection Page",
                sources1688: "Cheaper Supplier Of Product",
                batchAcquisitionPanel: "Product collecting, Successful: {successedNum}, Failed: {failedNum}",
                batchAcquisitionCompleted: "Collection complete, Total: {total}, Successful: {successedNum}, Failed: {failedNum}",
                notOrderedTip: "Currently not ordering this app, please go to {msg} to upgrade Gold members",
                collectErr: "Collection failed, please refresh the page and try again",
                operationFailed: "Operation failed",
                collectFailTips: 'Collection failed, please log in to "{host}" and try to collect again',
                batchCollectShopTo: "Collect shop to {name}",
                getShopItemCount: "Retrieving store product quantity",
                waitOtherShop: "Wait for other stores to complete the collection",
                collectingShop: 'In the process of collecting, a total of {total} items have been collected, {successedNum} successfully and {failedNum} failed, <a href="javascript:void 0" class="sf-go-collection-box">Go to the collection box to view </a>',
                notFindItems: "No products found in this store",
                collectionShopFail: "Store collection failed"
            }, Be = {
                addToBoost: "Add To Boost List",
                removeFromBoost: "Remove From Boost List",
                boosting: "Boosting",
                addingToBoostList: "Adding to the boost list...",
                addSuccessful: "Add Successful",
                upperLimit: "Product boost limit 5 items."
            }, $e = {
                accountPoints: "Account Credit",
                instantRecharge: "Instant Recharge",
                myTask: "My Task",
                rewardTask: "Reward Task",
                myTaskTip1: "Shopee sellers launch rewards in the form of reward points to seek help from others and efficiently complete store operations.",
                myTaskTip2: "The reward task is authentic and secure, and it protects the seller's suffocation, effectively avoiding data leakage and other people's bad behavior.",
                rewardTaskTip1: "Complete the rewards of others, can help other sellers complete the store operations, and at the same time earn points.",
                rewardTaskTip2: "The reward task is authentic and secure, and it protects the seller's suffocation, effectively avoiding data leakage and other people's bad behavior.",
                createdTask: "Created Task",
                fetchTask: "Fetch Task",
                lookTask: "Looking for a task...",
                lookTaskTip: "Do not close this page and application when the task is executed.",
                integral: "Integral",
                startTask: "Start Task",
                shop: "Shop name:",
                executing: "Executing",
                finished: "Finished",
                cannotTakeTaskTip: "the task has been picked up by others",
                showNoTaskTip: "Nothing found~",
                showCanNotTakeTaskTip: "Please go to the front of the Shopee to do this~",
                addTask: {
                    publishTask: "Publish Task",
                    taskType: "Task Type",
                    likeGrade: "Single praise reward points",
                    fanspoint: "Single fan reward points",
                    releaseNow: "Release",
                    taskTarget: "Task Target",
                    targetCount: "Target Count",
                    targetPage: "Target Page",
                    pleaseTickTerms: "Please tick the terms of service! ",
                    like: "like",
                    Fan: "Fans",
                    generalOffers: "General merchandise",
                    hotOffers: "Most popular goods",
                    newestOffers: "New Products",
                    designatedOffer: "Designated product",
                    targetUrl: "Target Url",
                    mustNumber: "Must Be Positive Integer",
                    mustShopeeOffer: "Please enter a valid current site Shopee product link",
                    insufficientBalance: "Insufficient Balance",
                    releaseSuccess: "Release Success",
                    positiveIntegerDecimal: "Must be a positive integer or a decimal",
                    noItmeTip: "There are no item on this page."
                }
            }, ze = {
                popup: {
                    popupTitle: "ShopeeFans plugin panel",
                    popupIntroduction: "Click on the small icon in the upper right corner of the browser",
                    shopFeatureIntroduction: "Here you can see the stores that have been bound in the Ke You Yun ERP system",
                    toolFeatureIntroduction: "We provide some practical tools",
                    settingFeatureIntroduction: "Here you can see the current Ke You Yun ERP account and related help and setting options"
                },
                sidebar: {
                    navigationBarTitle: "ShopeeFans navigation bar",
                    navigationBarIntroduction: "You can quickly jump to the relevant pages of shopee shrimp skin",
                    navigationIconIntroduction: "Click this icon to expand the application list",
                    appListTitle: "ShopeeFans app list",
                    appListIntroduction: "Click the icon to open the app",
                    appSettingIconIntroduction: "Click this icon to open the application settings",
                    appSettingIntroduction: "Here you can make some settings for the application"
                },
                menu: {
                    functionMenuTitle: "ShopeeFans function menu",
                    listFunctionMenuIntroduction: "Hover the mouse over the goods in the goods list, the menu will be displayed, and click the menu to operate accordingly",
                    detailFunctionMenuIntroduction: "In the lower right corner of the product details page, a menu will also appear"
                },
                endMessage: "Try it now!!!",
                next: "Next step",
                previous: "Previous step",
                done: "complete"
            }, Ue = {
                importantTipsTitle: "Important Hint",
                importantTipsText: "Do not open a new window during the order process to avoid data loss",
                orderInfo: "Order Information",
                orderNo: "Order Number",
                price: "Amount",
                productTotal: "Total number of products",
                messageToSeller: "Buyer message",
                remakes: "Seller Notes",
                currentOrderAssociatedProducts: "Current order associated product",
                sku: "SKU",
                skuCode: "SKU code",
                count: "Quantity",
                currentNotPurchaseOrder: "There are currently no purchase orders"
            }, He = {
                purchaseOrderNumber: "PURCHASE ORDER NO",
                kyyOrderNumber: "KEYOUYUN ORDER NO",
                orderNumber: "KeYouYun Order Number is Required",
                kyyOrderNoRequired: "请填写客优云订单号！",
                orderAssociatedTips: "Are you sure you want to associate this purchase order with the KeYouYun order?",
                associatedToERP: "Link to KeYouYun Order NO",
                syncPlatformOrderTips: "Platform Order NO:<b>{platformOrderNo}</b><br/>Waybill NO:<b>{expressNumber}</b><br/>Are you sure it is related to the corresponding package?",
                getOrderLogisticsInformation: "Getting order logistics information"
            }, Ye = n("68d8"), Ge = n("fac3"), Ve = {vLoadList: Ye, sendMsgToFans: Ge}, We = n("4226"), Ke = {
                collectionBox: "Collection box",
                localCollectionBoxGoods: "Local collection box goods",
                note: "Note",
                maxNumNote: "The maximum number of stored items in the local collection box is {num}. If the number is exceeded, it cannot be stored.",
                restStorable: "Remaining storable quantity",
                tiao: "",
                clearUselessData: "Clear historical useless data as needed",
                keepLastData: "Keep recent {num} data",
                deleteAll: "Delete all",
                all: "All",
                goKeyouYun: "Click to go to {keyouyun} to view the collected products",
                collectUrlError: "Incorrect data collection, please check that the collection URL can be accessed normally!",
                linkCannotCollect: "Links cannot be collected",
                maxCollectNot: "The number of collections exceeds the maximum storage limit and cannot be collected. Please clear historical useless data",
                goodsExist: "Product already exists, repeat collection",
                collectFormLabel: "Single product collection, please enter the product URL, multiple URLs with carriage return",
                startCollect: "Start collection",
                toCollectResult: "View acquisition results",
                urlError: "Link error: {url}",
                collectResult: "Collect results",
                storeLocalNote: "This collection result only exists on the current computer, if you need to edit, please push to {keyouyun}",
                collectStatus: "Acquisition status",
                collecting: "Collecting",
                collectDone: "Collection completed",
                collectTotal: "Total collection",
                collectSuccess: "Successful collection",
                collectFail: "Collection failed",
                collectFailDetail: "Failure details",
                close: "Close",
                goodsName: "product name",
                source: "source",
                status: "status",
                search: "Search",
                success: "Success",
                fail: "Failure",
                batchDel: "Batch deletion",
                questionDel: "Confirm delete?",
                batchPushToKeYouYun: "Batch push to {keyouyun}",
                rowsPerPage: "Rows per page",
                del: "Delete",
                copy: "Copy",
                pushSuccess: "Push successfully",
                pushFail: "Push failed",
                retry: "Retry",
                selectText: "{length} items selected, total {total} items",
                selectAll: "Select all",
                antiSelect: "Anti-election",
                index: "Serial number",
                fromPlatform: "Owning platform",
                image: "Image",
                goodsUrl: "Commodity address",
                pushDone: "Push completed",
                copyed: "Copied to clipboard",
                copyFail: "Copy failed"
            }, qe = {
                commodityHistoricalData: "Commodity historical data",
                addedTime: "Added Time",
                totalSold: "Total Sales",
                skusHistoricalSold: "Historical sales data of product specifications",
                lastMonth: "Current Month",
                currentMonthData: "Data of the month",
                sold: "Sales",
                viewCount: "Views",
                conversionRate: "Conversion Rate",
                category: "Category",
                price: "Price",
                lastOneMonth: "Nearly a month",
                lastTwoMonth: "Nearly two months",
                lastThreeMonth: "Nearly three months",
                custome: "Customize"
            }, Xe = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: _e,
                country: Se,
                errors: Te,
                apps: Ee,
                common: we,
                set: Ce,
                shopee: Ae,
                activation: Oe,
                appList: Pe,
                brushPowder: Ne,
                exchange: Le,
                chat: Ie,
                generalSettings: Fe,
                sidebar: Me,
                appCenter: De,
                collect: je,
                top: Be,
                rewardHall: $e,
                appCollectPdd: Re,
                userGuide: ze,
                appPurchaseOrder: Ue,
                purchaseOrder: He,
                components: Ve,
                imageDownload: We,
                collectionBox: Ke,
                movablePin: qe
            }, Qe = {
                name: "客优云东南亚跨境ERP",
                logo: "客优云",
                slogan: "一键铺货，精准翻译，永久免费",
                back: "返回",
                version: "永久版",
                success: "成功",
                failure: "失败",
                skip: "跳过",
                save: "保存",
                startBoost: "开启置顶",
                stopBoost: "取消置顶",
                login: "登录",
                loginTip: "请登录客优云ERP系统，如已登录，请重新刷新页面",
                help: "帮助文档",
                siteList: "虾皮站点列表：",
                comingSoon: "即将上市",
                loginNow: "立即登录",
                notLogIn: "未登录客优云东南亚跨境ERP",
                addShop: "新增店铺",
                downloadImg: "下载图片",
                readAndAgree: "阅读并同意",
                kyyServicePrivacy: "客优云服务协议",
                button: {cancel: "取消", ok: "确认", sync: "同步", query: "查询"},
                downloadVideo: "下载视频",
                orderCenter: "客优云ERP订购中心",
                notOrderedTip: "未订购此应用，请前往客优云ERP订购",
                unableCollect: "无法采集，请{go}进行订购客优云ERP",
                go: "前往",
                unorderMultiSotreManagement: "未订购多店铺管理，请前往客优云ERP订购",
                plaseGoToKeYouYunOrderTool: "未订购，请前往客优云ERP中订购",
                fansElves: "粉丝精灵",
                imgAndVedioHelper: "图片视频助手",
                orderForFullFeature: '订购"{toolName}",体验完整功能',
                messageNotification: "消息通知",
                weChat: "WeChat",
                actionSuceess: "操作成功",
                actionFail: "操作失败",
                dontCloseThePage: "请勿关闭此界面",
                boostWarning: "虾皮技术调整，免费使用的旧版定时置顶已停止维护，请订购新版置顶。",
                syncXiapiTip: '未登录虾皮前台购物页面({hostname})，请点击 "同步登录态" 按钮快速登录',
                gotoOrderApp: "点击前往订购"
            }, Je = {shop: "店铺", apps: "应用", setting: "设置", activation: "激活"}, Ze = {
                MY: "马来西亚",
                SG: "新加坡",
                ID: "印度尼西亚",
                TW: "台湾",
                TH: "泰国",
                VN: "越南",
                PH: "菲律宾",
                BR: "巴西",
                site: {MY: "马来西亚站", SG: "新加坡站", ID: "印尼站", TW: "台湾站", TH: "泰国站", VN: "越南站", PH: "菲律宾站", BR: "巴西站"}
            }, et = {http: {500: "系统繁忙，请稍后再试", 200: "操作成功"}}, tt = {
                backgroundRemoval: "一键抠图",
                pictureBeautification: "图片美化",
                qRCodeProduction: "二维码制作",
                imageCompression: "图片压缩",
                keywordAnalysis: "关键词分析",
                googleTrends: "谷歌趋势",
                bannerMaker: "海报设计",
                watermarkCropping: "水印裁剪"
            }, nt = {
                usingHelp: "使用帮助",
                feedback: "问题反馈",
                problemDescription: "请描述您的问题或建议，我们会及时跟进解决",
                feedbackType: "反馈类型",
                aboutExtension: "关于插件",
                qq: "官方QQ交流群",
                exitAccount: "退出账号",
                member: "白银会员",
                lasting: "永久",
                submit: "提交",
                problem: "问题",
                suggest: "建议",
                missingRequiredParameters: "请填写反馈类型及描述信息",
                contact: "联系方式",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, ot = {
                shopeeSiteList: [{site: "台湾 (大陆卖家)", url: "https://xiapi.xiapibuy.com/"}, {
                    site: "台湾 (本土卖家)",
                    url: "https://shopee.tw"
                }, {site: "马来西亚 (大陆卖家)", url: "https://my.xiapibuy.com/"}, {
                    site: "马来西亚 (本土卖家)",
                    url: "https://shopee.com.my"
                }, {site: "印度尼西亚 (大陆卖家)", url: "https://id.xiapibuy.com/"}, {
                    site: "印度尼西亚 (本土卖家)",
                    url: "https://shopee.co.id"
                }, {site: "泰国 (大陆卖家)", url: "https://th.xiapibuy.com/"}, {
                    site: "泰国 (本土卖家)",
                    url: "https://shopee.co.th"
                }, {site: "新加坡 (大陆卖家)", url: "https://sg.xiapibuy.com/"}, {
                    site: "新加坡 (本土卖家)",
                    url: "https://shopee.sg"
                }, {site: "越南 (大陆卖家)", url: "https://vn.xiapibuy.com/"}, {
                    site: "越南 (本土卖家)",
                    url: "https://shopee.vn"
                }, {site: "菲律宾 (大陆卖家)", url: "https://ph.xiapibuy.com/"}, {
                    site: "菲律宾 (本土卖家)",
                    url: "https://shopee.ph"
                }, {site: "巴西（大陆卖家）", url: "https://br.xiapibuy.com/"}, {site: "巴西（本土卖家）", url: "https://shopee.com.br/"}],
                tw: "台湾",
                sg: "新加坡",
                my: "马来西亚",
                ph: "菲律宾",
                id: "印度尼西亚",
                th: "泰国",
                vn: "越南",
                order: "虾皮-{countryName}-订单通知",
                offer: "虾皮-{countryName}-商品通知",
                activity: "虾皮-{countryName}-动态通知",
                evaluation: "虾皮-{countryName}-评价通知",
                orderMessage: "店铺 ({shopName}) 有新的订单消息 (新订单/出货/订单取消/聊聊消息)，请注意查看！",
                offerMessage: "店铺 ({shopName}) 有新的商品消息 (下架/超期删除)，请注意查看！",
                activityMessage: "店铺 ({shopName}) 有新的动态消息 (关注/点赞)，请注意查看！",
                evaluationMessage: "店铺 ({shopName}) 有新的评价消息，请注意查看！"
            }, rt = {
                all: "全选店铺",
                authorization: "Shopee授权店铺",
                type: "工具类型",
                activationCode: "激活码",
                inActivation: "正在激活中..",
                activateNow: "立即激活",
                requiredParameter: "必输项",
                necessaryInformation: "请填写必要信息",
                permanentMemberTip: "此账号是刷粉精灵永久会员，无需再次激活",
                shopFollowers: "刷粉工具",
                activationS: "激活成功，永久版",
                activationSTime: "激活成功，服务结束时间： {time}",
                nonAuthMessage: '店铺未授权，请先前往 <a target="_blank" href={shopAuthUrl}>{name}</a> 绑定',
                shopActivationSTimeis: "店铺名称:{shopName} 服务结束时间:{time}",
                submitTip: "若在系统中订购的，请直接使用，无需此激活"
            }, it = {
                shopFollowers: "粉丝关注",
                exchangeCenter: "汇率中心",
                chatToolkit: "聊聊先生",
                productBoost: "定时置顶",
                generalSettings: "常规设置",
                rewardHall: "悬赏大厅",
                collectPinDuoDuo: "拼多多采集",
                purchaseOrder: "采购订单",
                sendMessageInBulk: "群发消息",
                imageDownload: "图片下载"
            }, at = {
                attentionFans: "关注店铺粉丝",
                attentionFansTip: '点击菜单中 "关注店铺粉丝"，再点击刷粉精灵开启关注粉丝。',
                cancelFans: "取消店铺粉丝",
                bootOperation: '点击<a href="{followingUrl}" target="_blank" title="店铺清粉">店铺清粉</a>，再点击刷粉精灵开启取消粉丝。',
                storeInformation: "店铺信息",
                storeName: "店铺名称",
                commodity: "商品",
                responseRate: "聊聊回复率",
                evaluation: "评价",
                cancellationRate: "取消率",
                fan: "粉丝",
                attention: "关注中",
                score: "暂无评分",
                count: "{shopStarScore} ({shopStarCount}個)",
                unsubscribe: "取消关注",
                unsubscribeLabel: "取消关注的数量",
                unsubscribePlaceholder: "默认为800个",
                turnOnUnFollow: "开启取关",
                turnOnUnFollowPending: "正在运行中，点击取消取关",
                doNotClose: "请勿关闭本页面",
                error: "Shopee系统繁忙，请刷新页面再尝试",
                unSubStart: "[开始]：准备执行自动取关任务",
                unSubWait: "[等待]：模拟真实浏览器操作，准备向前翻页",
                unSubWaitNoData: "[等待]：暂无关注者数据",
                unSubEndReadyClose: "[结束]：自动取关已被取消，准备终止任务",
                unSubEndClose: "[结束]：取消关注已终止",
                unSubEndCloseSystemBusy: "[结束]：用户未登录或系统繁忙",
                unSubEndComplete: "[结束]：任务已完成",
                unSubSuccess: "[取关]：{name} 成功",
                unSubSkipLogin: "[跳过]：请登录虾皮购物页面",
                unSubSkip: "[跳过]：{name} 无法取关",
                followFans: "关注粉丝",
                subPosition: "自动关注的开始位置",
                subDefault: "默认从第一个开始",
                subQuantityLabel: "自动关注的数量",
                subscribePlaceholder: "默认为800个",
                filterSeller: "过滤卖家",
                subSellersNumber: "卖家商品数",
                subSellersNumberPlaceholder: "默认为50个",
                subLastLoginTime: "上次登陆时间",
                subLastLoginTimeDefault: "默认小于30天",
                subLastLoginTimeDays: "天前",
                subNumberOfEvaluations: "评价次数",
                subNumberOfEvaluationsDefault: "默认评价超过1次",
                subEvaluationsTime: "次",
                subNumberOfFollowers: "关注数",
                subNumberOfFollowersDefault: "默认关注用户超过1个",
                subNumberOfFollowersUnit: "次",
                turnOnAttentionBtn: "开启关注",
                turnOnAttentionBtnPending: "正在运行中，点击取消关注",
                subStartFollow: "[开始]：准备执行自动关注任务",
                subEndFollow: "[结束]：自动关注被取消，准备终止任务",
                subEndFollowCompleted: "[结束]：任务已完成",
                subEndFollowStop: "[结束]：自动关注已终止",
                subEndFollowEnd: "[结束]：已到末尾，暂无店铺粉丝",
                subEndFollowEndUpperLimitStore: "[结束]：店铺关注数已到上限，无法继续关注",
                subEndFollowEndUpperLimit: "[结束]：今日关注数已到上限，无法继续关注",
                subEndFollowEndWaitSim: "[等待]：模拟真实浏览器操作，准备向下翻页",
                subSkipFollow: "[跳过]：{name} 无法关注",
                subSkipFollowNotLogin: "[跳过]：当前未登陆虾皮，无法关注！",
                subSkipFollowAlreadyConcerned: "[跳过]：{name} 已关注过",
                subSkipFollowIsSeller: "[跳过]：{name} 是卖家，拥有{count}个商品",
                subSkipFollowLastLogin: "[跳过]：{name} 超过{day}天未登录",
                subSkipFollowPeople: "[跳过]：{name} 关注的人数少于{minFollowingTotal}人",
                subSkipFollowEvaluation: "[跳过]：{name} 的评论数少于{minEvaluationTotal}次",
                subSkipFollowDays: "[跳过]：{name} 在三天内已关注，暂不关注",
                subSkipFollowSuccess: "[关注]：{name} 成功",
                followingUserInvalid: "[跳过]: {name} 无效用户 (被停权、被删除等)",
                early: "前期",
                mid: "中期",
                late: "后期",
                earlyIntroduction: "快速涨粉、增加店铺粉丝数为主，提高店铺人气。（可自行调整过滤条件）",
                midIntroduction: "逐渐关注真实买家，转化店铺粉丝为订单。（可自行调整过滤条件）",
                lateIntroduction: "关注活跃买家，提升粉丝订单转化率。（可自行调整过滤条件）",
                UnFollowCap: "今日取消关注达到上限",
                syncXiapiTip: '未登录虾皮前台购物页面({hostname})，请点击 "同步登录态" 按钮快速登录',
                autoFollow: "自动关注",
                autoUnfollow: "自动取关",
                followTheDynamicList: "关注动态列表",
                sendMessageInBulk: "群发消息",
                recentFollowYou: "近期关注你",
                selectAll: "全选"
            }, st = {
                currentSite: "当前站点",
                targetCurrencyLabel: "请选择汇率转换目标货币",
                theSameCurrencyTip: "当前站点货币与转换货币相同，无法保存",
                currencyList: [{site: "中国 (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "台湾 ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "马来西亚 (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "印度尼西亚（Rp）",
                    currencyCode: "IDR",
                    currencyTag: "Rp"
                }, {site: "越南 (₫)", currencyCode: "VND", currencyTag: "₫"}, {
                    site: "泰国 (฿)",
                    currencyCode: "THB",
                    currencyTag: "฿"
                }, {site: "菲律宾 (₱)", currencyCode: "PHP", currencyTag: "₱"}, {
                    site: "新加坡 ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "美国 ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "巴西（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "汇率换算",
                clickOpen: "开启",
                noLongerDisplay: "是否关闭"
            }, lt = {
                sellerLanguage: "卖家语言",
                selectLanguageLabel: "选择语种",
                buyerLanguage: "买家语言",
                openChatLabel: "是否开启聊聊翻译",
                buttonPrompt: "按 Shift + Enter 换行",
                messageTranslate: "消息翻译",
                sendButton: "翻译并发送",
                languageList: [{name: "中文 (简体)", code: "zh-CN"}, {name: "中文 (繁体)", code: "zh-TW"}, {
                    name: "英语 (US)",
                    code: "en"
                }, {name: "印尼语 (印度尼西亚)", code: "id"}, {name: "泰语 (泰国)", code: "th"}, {
                    name: "越南语 (越南)",
                    code: "vi"
                }, {name: "马来语 (马来西亚当地)", code: "ms"}, {name: "塔加路语 (菲律宾当地)", code: "tl"}, {name: "葡萄牙语（巴西）", code: "pt"}],
                openShopeeDefaultBtn: "是否开启Shopee默认消息按钮",
                orderWeChatGetFullFeature: "订购聊聊先生显示完整翻译"
            }, ct = {
                dataCollection: "数据采集",
                repeatLabel: "一天内不重复采集",
                navigationSettings: "导航菜单设置(最多设置5个)",
                navigationSettingsLabel: "请选择展示的导航菜单",
                navigationItems: [{name: "卖家中心", id: 1}, {name: "我的销售", id: 3}, {name: "新版聊聊", id: 7}, {
                    name: "店铺前台",
                    id: 4
                }, {name: "店铺清粉", id: 6}, {name: "我的商品", id: 2}, {name: "店铺粉丝", id: 5}, {
                    name: "店鋪分類",
                    id: 8
                }, {name: "行销活动", id: 9}, {name: "我的进账", id: 10}, {name: "我的钱包", id: 11}, {
                    name: "我的数据",
                    id: 12
                }, {name: "商店设定", id: 13}],
                syncAccount: "账号同步",
                syncTip: '请先在"shopee.cn"中登陆卖家中心，然后点击"同步"按钮，可以解决"xiapibuy.com"无法登陆的问题',
                syncBtn: "同步登录态",
                syncErrorTip: "未登录shopee.cn卖家中心，无法同步",
                collectSetTitle: "采集设置",
                whetherToCollectDiscountLabel: "是否采集折扣价",
                collectStockSetLabel: "库存设置",
                collectRealStock: "采集真实库存",
                collectFixStock: "采集固定库存",
                selelctPricingStrategies: "定价模板",
                notificationTitle: "消息通知",
                neverShowMessageNotifications: "是否关闭",
                otherFeature: "其它",
                commonFeature: "常用",
                networkLine: "网络路线",
                networkLineChina: "中国",
                networkLineWorld: "国际",
                jumpPageTips: "3's 后页面将跳转到 {url}",
                syncLoginTips: "请使用店铺账号密码登录，而非子母账号登录，子母账号登录无法同步登录态。",
                goLocalMain: "您现在登录的是新版卖家中心，需要登录本土前台站点。"
            }, ut = {
                sellerCenter: "卖家中心",
                myProducts: "我的商品",
                mySales: "我的销售",
                shopHome: "店铺前台",
                shopFollower: "店铺粉丝",
                shopUnfollow: "店铺清粉",
                newVersionChat: "新版聊聊",
                shopCategories: "店铺分类",
                marketingCenter: "行销活动",
                myIncome: "我的进账",
                myWallet: "我的钱包",
                myData: "我的数据",
                shopSettings: "商店设定",
                purchaseOrder: "采购订单",
                myFans: "我的粉丝"
            }, pt = {
                notPurchased: "未订购工具，无法使用",
                serviceExpired: "服务时间已到期：{time}",
                notShopeePage: "请进入虾皮购物页面，才能继续操作",
                notLoginShopee: "用户未登录，请登录虾皮卖家中心",
                notLoginShopeeMainUrl: '未登录虾皮购物页面(xiapibuy)，请点击右边面板的"同步登录态"按钮',
                unauthorized: "虾皮卖家中心的店铺未授权到客优云，请前往{name}绑定",
                shopAuthorization: "立即绑定",
                notOrdered: "此应用未订购，请前往erp订购应用",
                goToERP: "立即前往订购"
            }, dt = {title: "去拼多多采集", collectDesc: "开始采集：点击商品进入详情页面，再点击右下角采集按钮。"}, ft = {
                collectTo: "采集到{name}",
                batchCollectTo: "批量采集到{name}",
                findSource: "找货源",
                followFans: "关注店铺粉丝",
                viewShop: "查看店铺",
                beingCollected: "正在采集中",
                collected: "已采集",
                successfulCollection: "采集成功",
                successfulOperation: "操作成功",
                successfulCollectionTip: "采集成功，可稍后前往客优云ERP的 {msg} 查看",
                successfulOperationTip: "操作成功，可稍后前往客优云ERP的 {msg} 查看",
                collectedTip: "此商品今天已采集，可前往客优云ERP的 {msg} 查看",
                collectionPage: "商品采集页面",
                sources1688: "1688低价货源",
                batchAcquisitionPanel: "正在采集中,成功{successedNum}个，失败{failedNum}个",
                batchAcquisitionCompleted: "采集完毕，一共采集{total}个商品，成功{successedNum}个，失败{failedNum}个",
                notOrderedTip: "未订购此应用，请前往 {msg} 升级黄金会员",
                collectErr: "采集失败，请刷新页面重试",
                operationFailed: "操作失败",
                collectFailTips: '采集失败，请登录"{host}"再尝试采集',
                batchCollectShopTo: "采集店铺到{name}",
                getShopItemCount: "正在获取店铺商品数量",
                waitOtherShop: "等待其他店铺采集完成",
                collectingShop: '正在采集中，一共采集{total}个商品，成功{successedNum}个，失败{failedNum}个，<a href="javascript:void 0" class="sf-go-collection-box">前往采集箱查看</a>',
                notFindItems: "此卖场未找到任何商品",
                collectionShopFail: "店铺采集失败"
            }, mt = {
                addToBoost: "添加到定时置顶",
                removeFromBoost: "从定时置顶中移除",
                boosting: "已加入定时置顶",
                addingToBoostList: "正添加至置顶列表...",
                addSuccessful: "添加定时置顶成功",
                upperLimit: "置顶列表已到达5个上限"
            }, ht = {
                accountPoints: "账户积分",
                instantRecharge: "立即充值",
                myTask: "我的任务",
                rewardTask: "悬赏任务",
                myTaskTip1: "虾皮卖家以积分奖赏的方式发起悬赏任务，以寻求他人的帮助，高效完成店铺运营。",
                myTaskTip2: "悬赏任务具有真实性和安全性，安全保护卖家倌息，有效避免了数据泄露和他人跟卖等恶劣行为。",
                rewardTaskTip1: "完成他人的悬赏任务，可以帮助其他卖家完成店铺运营，同时又可以赚取积分。",
                rewardTaskTip2: "悬赏任务具有真实性和安全性，安全保护卖家倌息，有效避免了数据泄露和他人跟卖等恶劣行为。",
                createdTask: "发起任务",
                fetchTask: "探寻任务",
                lookTask: "正在寻找任务...",
                lookTaskTip: "任务执行时，请勿关闭本页面及应用",
                integral: "积分",
                startTask: "点击完成",
                shop: "店铺：",
                executing: "任务执行中",
                finished: "已完成",
                cannotTakeTaskTip: "手慢了，任务已经被别人接走咯~",
                showNoTaskTip: "什么也没找到~",
                showCanNotTakeTaskTip: "请到虾皮前台页面进行此项操作~",
                addTask: {
                    publishTask: "发布任务",
                    taskType: "任务类型",
                    likeGrade: "单个赞悬赏积分",
                    fanspoint: "单个粉丝悬赏积分",
                    releaseNow: "立即发布",
                    taskTarget: "任务目标",
                    targetCount: "目标数量",
                    targetPage: "目标页码",
                    pleaseTickTerms: "请勾选服务条款！",
                    like: "点赞",
                    Fan: "粉丝",
                    generalOffers: "综合商品",
                    hotOffers: "最热销商品",
                    newestOffers: "最新商品",
                    designatedOffer: "指定商品",
                    targetUrl: "目标链接",
                    mustNumber: "必须是正整数",
                    mustShopeeOffer: "请输入有效的当前站点虾皮商品链接",
                    insufficientBalance: "余额不足",
                    releaseSuccess: "发布成功",
                    positiveIntegerDecimal: "必须是正整数或一位小数",
                    noItmeTip: "该页无商品"
                }
            }, gt = {
                popup: {
                    popupTitle: "ShopeeFans插件面板",
                    popupIntroduction: "点击浏览器右上角的小图标,可以打开这个面板",
                    shopFeatureIntroduction: "在这里可以看到已经在客优云ERP系统中绑定好的店铺",
                    toolFeatureIntroduction: "我们提供了一些实用的工具",
                    settingFeatureIntroduction: "在这里可以看到当前的客优云ERP账号和相关的帮助与设置选项"
                },
                sidebar: {
                    navigationBarTitle: "ShopeeFans导航栏",
                    navigationBarIntroduction: "这里提供了一些选项,可以快速跳转到Shopee虾皮的相关页面",
                    navigationIconIntroduction: "点击这个图标可以展开应用列表",
                    appListTitle: "ShopeeFans应用列表",
                    appListIntroduction: "单击图标可以打开应用",
                    appSettingIconIntroduction: "点击这个图标可以打开应用的设置",
                    appSettingIntroduction: "在这里可以对应用进行一些设置"
                },
                menu: {
                    functionMenuTitle: "ShopeeFans功能菜单",
                    listFunctionMenuIntroduction: "将鼠标悬停在商品列表中的商品上，会显示这个菜单，鼠标单击菜单进行相应操作",
                    detailFunctionMenuIntroduction: "在商品详情页的右下角，也会出现一个菜单"
                },
                endMessage: "赶紧去试试吧！！！",
                next: "下一步",
                previous: "上一步",
                done: "完成"
            }, bt = {
                importantTipsTitle: "重要提示",
                importantTipsText: "下单过程中请勿打开新的窗口下单，以免数据丢失",
                orderInfo: "订单信息",
                orderNo: "订单号",
                price: "金额",
                productTotal: "商品总数量",
                messageToSeller: "买家留言",
                remakes: "卖家备注",
                currentOrderAssociatedProducts: "当前订单关联商品",
                sku: "SKU",
                skuCode: "SKU编码",
                count: "数量",
                currentNotPurchaseOrder: "当前没有正在采购的订单"
            }, vt = {
                purchaseOrderNumber: "采购订单号",
                kyyOrderNumber: "客优云ERP订单号",
                kyyOrderNoRequired: "请填写客优云订单号！",
                orderNumber: "订单号：{platformOrderNo}",
                orderAssociatedTips: "确定将该采购订单关联到当前客优云订单吗？",
                associatedToERP: "关联到客优云ERP的订单",
                syncPlatformOrderTips: "平台订单号：<b>{platformOrderNo}</b><br/>物流单号: <b>{expressNumber}</b><br/>确定关联到对应的包裹？",
                getOrderLogisticsInformation: "正在获取订单物流信息"
            }, xt = n("c3fa"), yt = n("448b"), kt = {vLoadList: xt, sendMsgToFans: yt}, wt = n("c001"), _t = n("bcf6"),
            St = {
                collectionBox: "采集箱",
                localCollectionBoxGoods: "本地采集箱商品",
                note: "注意",
                maxNumNote: "本地采集箱最大存储条数为{num}条，超出条数将无法存储。",
                restStorable: "剩余可存储数量",
                tiao: "条",
                clearUselessData: "按需清除历史无用数据",
                keepLastData: "保留最近{num}条数据",
                deleteAll: "全部删除",
                all: "全部",
                goKeyouYun: "点击前往 {keyouyun} 查看采集商品",
                collectUrlError: "采集数据错误，请检查采集URL能被正常访问！",
                linkCannotCollect: "链接不可采集",
                maxCollectNot: "采集数量超出存储最大限制，无法采集，请清除历史无用数据",
                goodsExist: "商品已存在，重复采集",
                collectFormLabel: "单品采集，请输入产品网址，多个网址用回车换行",
                startCollect: "开始采集",
                toCollectResult: "查看采集结果",
                urlError: "链接错误: {url}",
                collectResult: "采集结果",
                storeLocalNote: "此采集结果只存在于当前电脑上，如需编辑，请先推送到{keyouyun}",
                collectStatus: "采集状态",
                collecting: "采集中",
                collectDone: "采集完成",
                collectTotal: "采集总数",
                collectSuccess: "采集成功",
                collectFail: "采集失败",
                collectFailDetail: "失败详情",
                close: "关闭",
                goodsName: "商品名称",
                source: "来源",
                status: "状态",
                search: "搜索",
                success: "成功",
                fail: "失败",
                batchDel: "批量删除",
                questionDel: "确定删除？",
                batchPushToKeYouYun: "批量推送到{keyouyun}",
                rowsPerPage: "每页条数",
                del: "删除",
                copy: "复制",
                pushSuccess: "推送成功",
                pushFail: "推送失败",
                retry: "重试",
                selectText: "已选择{length}项， 共{total}项",
                selectAll: "全选",
                antiSelect: "反选",
                index: "序号",
                fromPlatform: "所属平台",
                image: "图片",
                goodsUrl: "商品地址",
                pushDone: "推送完成",
                copyed: "已复制到剪贴板",
                copyFail: "复制失败"
            }, Tt = {
                commodityHistoricalData: "商品历史数据",
                addedTime: "上架时间",
                totalSold: "总销量",
                skusHistoricalSold: "商品规格历史销量数据",
                lastMonth: "当月",
                currentMonthData: "当月数据",
                sold: "销量",
                viewCount: "访问量",
                conversionRate: "转化率",
                category: "类目",
                price: "价格",
                lastOneMonth: "近一个月",
                lastTwoMonth: "近两个月",
                lastThreeMonth: "近三个月",
                custome: "自定义"
            }, Et = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: Je,
                country: Ze,
                errors: et,
                apps: tt,
                common: Qe,
                set: nt,
                shopee: ot,
                activation: rt,
                appList: it,
                brushPowder: at,
                exchange: st,
                chat: lt,
                generalSettings: ct,
                sidebar: ut,
                appCenter: pt,
                collect: ft,
                top: mt,
                rewardHall: ht,
                appCollectPdd: dt,
                userGuide: gt,
                appPurchaseOrder: bt,
                purchaseOrder: vt,
                components: kt,
                appSendMessage: wt,
                imageDownload: _t,
                collectionBox: St,
                movablePin: Tt
            }, Ct = {
                name: "客優雲東南亞跨境ERP",
                logo: "客優雲",
                slogan: "一鍵鋪貨，精準翻譯，永久免費",
                back: "返回",
                version: "永久版",
                success: "成功",
                failure: "失敗",
                skip: "跳過",
                save: "保存",
                startBoost: "開啟置頂",
                stopBoost: "取消置頂",
                login: "登錄",
                loginTip: "請登錄客優雲ERP系統，如已登錄，請重新刷新頁面",
                help: "幫助文檔",
                siteList: "蝦皮站點列表：",
                comingSoon: "即將上市",
                loginNow: "立即登錄",
                notLogIn: "未登錄客優雲東南亞跨境ERP",
                addShop: "新增店鋪",
                downloadImg: "下載圖片",
                readAndAgree: "閱讀並同意",
                kyyServicePrivacy: "客優雲服務協議",
                button: {cancel: "取消", ok: "確認", sync: "同步", query: "查詢"},
                downloadVideo: "下載視頻",
                orderCenter: "客優雲ERP訂購中心",
                notOrderedTip: "未訂購此應用，請前往客優雲ERP訂購",
                unableCollect: "無法採集，請{go}進行訂購客優雲ERP",
                go: "前往",
                unorderMultiSotreManagement: "未訂購多店舖管理，請前往客優雲ERP訂購",
                plaseGoToKeYouYunOrderTool: "未訂購，請前往客優雲ERP中訂購",
                fansElves: "粉絲精靈",
                imgAndVedioHelper: "圖片視頻助手",
                orderForFullFeature: '訂購"{toolName}",體驗完整功能',
                messageNotification: "消息通知",
                weChat: "聊聊先生",
                actionFail: "操作失敗",
                dontCloseThePage: "請勿關閉此界面",
                boostWarning: "蝦皮技術調整，免費使用的舊版定時置頂已停止維護，請訂購新版置頂。",
                syncXiapiTip: '未登錄蝦皮前台購物頁面（{hostname}），請單擊"同步登錄態"按鈕快速登錄',
                gotoOrderApp: "點擊前往訂購"
            }, At = {shop: "店鋪", apps: "應用", setting: "設置", activation: "激活"}, Ot = {
                MY: "馬來西亞",
                SG: "新加坡",
                ID: "印度尼西亞",
                TW: "台灣",
                TH: "泰國",
                VN: "越南",
                PH: "菲律賓",
                BR: "巴西",
                site: {MY: "馬來西亞站", SG: "新加坡站", ID: "印尼站", TW: "台灣站", TH: "泰國站", VN: "越南站", PH: "菲律賓站", BR: "巴西站"}
            }, Pt = {http: {500: "系統繁忙，請稍後再試", 200: "操作成功"}}, Nt = {
                backgroundRemoval: "一鍵摳圖",
                pictureBeautification: "圖片美化",
                qRCodeProduction: "二維碼製作",
                imageCompression: "圖片壓縮",
                keywordAnalysis: "關鍵詞分析",
                googleTrends: "谷歌趨勢",
                bannerMaker: "海報設計",
                watermarkCropping: "水印裁剪"
            }, Lt = {
                usingHelp: "使用幫助",
                feedback: "問題反饋",
                problemDescription: "請描述您的問題或建議，我們會及時跟進解決",
                feedbackType: "反饋類型",
                aboutExtension: "關於插件",
                qq: "官方QQ交流群",
                exitAccount: "退出賬號",
                member: "白銀會員",
                lasting: "永久",
                submit: "提交",
                problem: "問題",
                suggest: "建議",
                missingRequiredParameters: "請填寫反饋類型及描述信息",
                contact: "聯繫方式",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, It = {
                shopeeSiteList: [{site: "台灣 (大陸賣家)", url: "https://xiapi.xiapibuy.com/"}, {
                    site: "台灣 (本土賣家)",
                    url: "https://shopee.tw"
                }, {site: "馬來西亞 (大陸賣家)", url: "https://my.xiapibuy.com/"}, {
                    site: "馬來西亞 (本土賣家)",
                    url: "https://shopee.com.my"
                }, {site: "印度尼西亞 (大陸賣家)", url: "https://id.xiapibuy.com/"}, {
                    site: "印度尼西亞 (本土賣家)",
                    url: "https://shopee.co.id"
                }, {site: "泰國 (大陸賣家)", url: "https://th.xiapibuy.com/"}, {
                    site: "泰國 (本土賣家)",
                    url: "https://shopee.co.th"
                }, {site: "新加坡 (大陸賣家)", url: "https://sg.xiapibuy.com/"}, {
                    site: "新加坡 (本土賣家)",
                    url: "https://shopee.sg"
                }, {site: "越南 (大陸賣家)", url: "https://vn.xiapibuy.com/"}, {
                    site: "越南 (本土賣家)",
                    url: "https://shopee.vn"
                }, {site: "菲律賓 (大陸賣家)", url: "https://ph.xiapibuy.com/"}, {
                    site: "菲律賓 (本土賣家)",
                    url: "https://shopee.ph"
                }, {site: "巴西（大陸賣家）", url: "https://br.xiapibuy.com/"}, {site: "巴西（本土賣家）", url: "https://shopee.com.br/"}],
                tw: "台灣",
                sg: "新加坡",
                my: "馬來西亞",
                ph: "菲律賓",
                id: "印度尼西亞",
                th: "泰國",
                vn: "越南",
                order: "蝦皮-{countryName}-訂單通知",
                offer: "蝦皮-{countryName}-商品通知",
                activity: "蝦皮-{countryName}-動態通知",
                evaluation: "蝦皮-{countryName}-評價通知",
                orderMessage: "店舖 ({shopName}) 有新的訂單消息 (新訂單/出貨/訂單取消/聊聊消息)，請注意查看！ ",
                offerMessage: "店舖 ({shopName}) 有新的商品消息 (下架/超期刪除)，請注意查看！ ",
                activityMessage: "店舖 ({shopName}) 有新的動態消息 (關注/點贊)，請注意查看！ ",
                evaluationMessage: "店舖 ({shopName}) 有新的評價消息，請注意查看！ "
            }, Ft = {
                all: "全選店鋪",
                authorization: "Shopee授權店鋪",
                type: "工具類型",
                activationCode: "激活碼",
                inActivation: "正在激活中..",
                activateNow: "立即激活",
                requiredParameter: "必輸項",
                necessaryInformation: "請填寫必要信息",
                permanentMemberTip: "此賬號是刷粉精靈永久會員，無需再次激活",
                shopFollowers: "刷粉工具",
                activationS: "激活成功，永久版",
                activationSTime: "激活成功，服务结束时间： {time}",
                nonAuthMessage: '店鋪未授權，請先前往 <a target="_blank" href={shopAuthUrl}>{name}</a> 綁定',
                shopActivationSTimeis: "店鋪名稱:{shopName} 服務結束時間:{time}",
                submitTip: "若在系統中訂購的，請直接使用，無需此激活"
            }, Mt = {
                shopFollowers: "粉絲關注",
                exchangeCenter: "匯率中心",
                chatToolkit: "聊聊先生",
                productBoost: "定時置頂",
                generalSettings: "常規設置",
                rewardHall: "懸賞大廳",
                collectPinDuoDuo: "拼多多採集",
                purchaseOrder: "採購訂單",
                sendMessageInBulk: "群發消息",
                imageDownload: "圖片下載"
            }, Dt = {
                attentionFans: "關注店鋪粉絲",
                attentionFansTip: '點擊菜单 "關注店鋪粉絲"，再點擊刷粉精靈開啟關注粉絲。',
                cancelFans: "取消店鋪粉絲",
                bootOperation: '點擊<a href="{followingUrl}" target="_blank" title="店铺清粉">店铺清粉</a>，再點擊刷粉精靈開啟取消粉絲。',
                storeInformation: "店鋪信息",
                storeName: "店鋪名稱",
                commodity: "商品",
                responseRate: "聊聊回复率",
                evaluation: "評價",
                cancellationRate: "取消率",
                fan: "粉絲",
                attention: "關注中",
                score: "暫無評分",
                count: "{shopStarScore} ({shopStarCount}个)",
                unsubscribe: "取消關注",
                unsubscribeLabel: "取消關注的數量",
                unsubscribePlaceholder: "默認為800個",
                turnOnUnFollow: "開啟取關",
                turnOnUnFollowPending: "正在運行中，點擊取消取關",
                doNotClose: "請勿關閉本頁面",
                error: "Shopee系統繁忙，請刷新頁面再嘗試",
                unSubStart: "[開始]：準備執行自動取關任務",
                unSubWait: "[等待]：模擬真實瀏覽器操作，準備向前翻頁",
                unSubWaitNoData: "[等待]：暫無關注者數據",
                unSubEndReadyClose: "[結束]：自動取關已被取消，準備終止任務",
                unSubEndClose: "[結束]：取消關注已終止",
                unSubEndCloseSystemBusy: "[結束]：用戶未登錄或系統繁忙",
                unSubEndComplete: "[結束]：任務已完成",
                unSubSuccess: "[取關]：{name} 成功",
                unSubSkipLogin: "[跳過]：請登錄蝦皮購物頁面",
                unSubSkip: "[跳過]：{name} 無法取關",
                followFans: "關注粉絲",
                subPosition: "自動關注的開始位置",
                subDefault: "默認從第一個開始",
                subQuantityLabel: "自動關注的數量",
                subscribePlaceholder: "默認為800個",
                filterSeller: "過濾賣家",
                subSellersNumber: "賣家商品數",
                subSellersNumberPlaceholder: "默認為50個",
                subLastLoginTime: "上次登陸時間",
                subLastLoginTimeDefault: "默認小於30天",
                subLastLoginTimeDays: "天前",
                subNumberOfEvaluations: "評價次數",
                subNumberOfEvaluationsDefault: "默認評價超過1次",
                subEvaluationsTime: "次",
                subNumberOfFollowers: "關注數",
                subNumberOfFollowersDefault: "默認關注用戶超過1個",
                subNumberOfFollowersUnit: "次",
                turnOnAttentionBtn: "開啟關注",
                turnOnAttentionBtnPending: "正在運行中，點擊取消關注",
                subStartFollow: "[開始]：準備執行自動關注任務",
                subEndFollow: "[結束]：自動關注被取消，準備終止任務",
                subEndFollowCompleted: "[結束]：任務已完成",
                subEndFollowStop: "[結束]：自動關注已終止",
                subEndFollowEnd: "[結束]：已到末尾，暫無店鋪粉絲",
                subEndFollowEndUpperLimitStore: "[結束]：店鋪關注數已到上限，無法繼續關注",
                subEndFollowEndUpperLimit: "[結束]：今日關注數已到上限，無法繼續關注",
                subEndFollowEndWaitSim: "[等待]：模擬真實瀏覽器操作，準備向下翻頁",
                subSkipFollow: "[跳過]：{name} 無法關注",
                subSkipFollowNotLogin: "[跳過]：當前未登陸蝦皮，無法關注！",
                subSkipFollowAlreadyConcerned: "[跳過]：{name} 已關注過",
                subSkipFollowIsSeller: "[跳過]：{name} 是賣家，擁有{count}個商品",
                subSkipFollowLastLogin: "[跳過]：{name} 超過{day}天未登陸",
                subSkipFollowPeople: "[跳過]：{name} 關注的人數少於{minFollowingTotal}人",
                subSkipFollowEvaluation: "[跳過]：{name} 的評論數少於{minEvaluationTotal}次",
                subSkipFollowDays: "[跳過]：{name} 在三天內已關注，暫不關注",
                subSkipFollowSuccess: "[關注]：{name} 成功",
                followingUserInvalid: "[跳過]: {name} 無效用戶 (被停權、被刪除等)",
                early: "前期",
                mid: "中期",
                late: "後期",
                earlyIntroduction: "快速漲粉、增加店鋪粉絲數為主，提高店鋪人氣。 （可自行調整過濾條件）",
                midIntroduction: "逐漸關注真實買家，轉化店鋪粉絲為訂單。 （可自行調整過濾條件）",
                lateIntroduction: "關注活躍買家，提升粉絲訂單轉化率。 （可自行調整過濾條件）",
                UnFollowCap: "今日取消關注達到上限",
                syncXiapiTip: '未登錄蝦皮前台購物頁面（{hostname}），請單擊"同步登錄態"按鈕快速登錄',
                autoFollow: "自動關注",
                autoUnfollow: "自動取關",
                followTheDynamicList: "關注動態列表",
                sendMessageInBulk: "群發消息",
                recentFollowYou: "近期關注你",
                selectAll: "全選"
            }, Rt = {
                currentSite: "當前站點",
                targetCurrencyLabel: "請選擇匯率轉換目標貨幣",
                theSameCurrencyTip: "當前站點貨幣與轉換貨幣相同，無法保存",
                currencyList: [{site: "中國 (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "台灣 ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "馬來西亞 (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "印度尼西亞（Rp）",
                    currencyCode: "IDR",
                    currencyTag: "Rp"
                }, {site: "越南 (₫)", currencyCode: "VND", currencyTag: "₫"}, {
                    site: "泰國 (฿)",
                    currencyCode: "THB",
                    currencyTag: "฿"
                }, {site: "菲律賓 (₱)", currencyCode: "PHP", currencyTag: "₱"}, {
                    site: "新加坡 ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "美國 ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "巴西（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "匯率換算",
                clickOpen: "開啟",
                noLongerDisplay: "是否關閉"
            }, jt = {
                sellerLanguage: "賣家語言",
                selectLanguageLabel: "選擇語種",
                buyerLanguage: "買家語言",
                openChatLabel: "是否開啟聊聊翻譯",
                buttonPrompt: "按 Shift Enter 換行",
                messageTranslate: "消息翻譯",
                sendButton: "翻譯並發送",
                languageList: [{name: "中文 (簡體)", code: "zh-CN"}, {name: "中文 (繁體)", code: "zh-TW"}, {
                    name: "英語 (US)",
                    code: "en"
                }, {name: "印尼語 (印度尼西亞)", code: "id"}, {name: "泰語 (泰國)", code: "th"}, {
                    name: "越南語 (越南)",
                    code: "vi"
                }, {name: "馬來語 (馬來西亞當地)", code: "ms"}, {name: "塔加路語 (菲律賓當地)", code: "tl"}, {name: "葡萄牙語（巴西）", code: "pt"}],
                openShopeeDefaultBtn: "是否開啟Shopee默認消息按鈕",
                orderWeChatGetFullFeature: "訂購聊聊先生顯示完整翻譯"
            }, Bt = {
                dataCollection: "數據採集",
                repeatLabel: "一天內不重複採集",
                navigationSettings: "導航菜單設置 (最多設置5個)",
                navigationSettingsLabel: "請選擇展示的導航菜單",
                navigationItems: [{name: "賣家中心", id: 1}, {name: "我的銷售", id: 3}, {name: "新版聊聊", id: 7}, {
                    name: "店舖前台",
                    id: 4
                }, {name: "店鋪清粉", id: 6}, {name: "我的商品", id: 2}, {name: "店鋪粉絲", id: 5}, {
                    name: "店鋪分類",
                    id: 8
                }, {name: "行銷活動", id: 9}, {name: "我的進賬", id: 10}, {name: "我的錢包", id: 11}, {
                    name: "我的數據",
                    id: 12
                }, {name: "商店設定", id: 13}],
                syncAccount: "賬號同步",
                syncTip: '請先在"shopee.cn"中登陸賣家中心，然後點擊"同步"按鈕，解決"xiapibuy.com"無法登陸的問題',
                syncBtn: "同步登錄態",
                syncErrorTip: "未登錄shopee.cn賣家中心，無法同步",
                collectSetTitle: "採集設置",
                whetherToCollectDiscountLabel: "是否採集折扣價",
                collectStockSetLabel: "庫存設置",
                collectRealStock: "採集真實庫存",
                collectFixStock: "採集固定庫存",
                selelctPricingStrategies: "定價模板",
                notificationTitle: "消息通知",
                neverShowMessageNotifications: "是否關閉",
                otherFeature: "其它",
                commonFeature: "常用",
                networkLine: "網絡路線",
                networkLineChina: "中國",
                networkLineWorld: "國際",
                jumpPageTips: "3's 後頁面將跳轉到 {url}",
                syncLoginTips: "請使用店鋪賬號密碼登錄，而非子母賬號登錄，子母賬號登錄無法同步登錄態。",
                goLocalMain: "您現在登錄的是新版賣家中心，需要登錄本土前台站點。"
            }, $t = {
                sellerCenter: "賣家中心",
                myProducts: "我的商品",
                mySales: "我的銷售",
                shopHome: "店舖前台",
                shopFollower: "店鋪粉絲",
                shopUnfollow: "店鋪清粉",
                newVersionChat: "新版聊聊",
                shopCategories: "店鋪分類",
                marketingCenter: "行銷活動",
                myIncome: "我的進賬",
                myWallet: "我的錢包",
                myData: "我的數據",
                shopSettings: "商店設定",
                purchaseOrder: "採購訂單",
                myFans: "我的粉絲"
            }, zt = {
                notPurchased: "未訂購工具，無法使用",
                serviceExpired: "服務時間已到期：{time}",
                notShopeePage: "請進入蝦皮購物頁面，才能繼續操作",
                notLoginShopee: "用戶未登錄，請登錄蝦皮賣家中心",
                notLoginShopeeMainUrl: '未登錄蝦皮購物頁面(xiapibuy)，請點擊右邊面板的"同步登錄態"按鈕',
                unauthorized: "蝦皮賣家中心的店鋪未授權到客優雲，請前往{name}綁定",
                shopAuthorization: "立即綁定",
                notOrdered: "此應用未訂購，請前往erp訂購應用",
                goToERP: "立即前往訂購"
            }, Ut = {title: "去拼多多採集", collectDesc: "開始採集：點擊商品進入詳情頁面，再點擊右下角採集按鈕。"}, Ht = {
                collectTo: "採集到{name}",
                batchCollectTo: "批量採集到{name}",
                findSource: "找貨源",
                followFans: "關注店鋪粉絲",
                viewShop: "查看店鋪",
                beingCollected: "正在採集中",
                collected: "已採集",
                successfulCollection: "採集成功",
                successfulOperation: "操作成功",
                successfulCollectionTip: "採集成功，可稍後前往客優雲ERP的 {msg} 查看",
                successfulOperationTip: "操作成功，可稍後前往客優雲ERP的 {msg} 查看",
                collectedTip: "此商品今天已採集，可前往客優雲ERP的 {msg} 查看",
                collectionPage: "商品採集頁面",
                sources1688: "1688低價貨源",
                batchAcquisitionPanel: "正在採集中,成功{successedNum}個，失敗{failedNum}個",
                batchAcquisitionCompleted: "採集完畢，一共採集{total}個商品，成功{successedNum}個，失敗{failedNum}個",
                notOrderedTip: "未訂購此應用，請前往 {msg} 升級黃金會員",
                collectErr: "採集失敗，請刷新頁面重試",
                operationFailed: "操作失敗",
                collectFailTips: '採集失敗，請登錄"{host}"再嘗試採集',
                batchCollectShopTo: "採集店鋪到{name}",
                getShopItemCount: "正在獲取店鋪商品數量",
                waitOtherShop: "等待其他店鋪採集完成",
                collectingShop: '正在採集中，一共採集{total}個商品，成功{successedNum}個，失敗{failedNum}個，<a href="javascript:void 0" class="sf-go-collection-box">前往採集箱查看</a>',
                notFindItems: "此賣場未找到任何商品",
                collectionShopFail: "店鋪採集失敗"
            }, Yt = {
                addToBoost: "添加到定時置頂",
                removeFromBoost: "从定時置頂中移除",
                boosting: "已加入定時置頂",
                addingToBoostList: "正添加至置頂列表...",
                addSuccessful: "添加定時置頂成功",
                upperLimit: "置頂列表已到達5個上限"
            }, Gt = {
                accountPoints: "賬戶積分",
                instantRecharge: "立即充值",
                myTask: "我的任務",
                rewardTask: "懸賞任務",
                myTaskTip1: "蝦皮賣家以積分獎賞的方式發起懸賞任務，以尋求他人的幫助，高效完成店鋪運營。",
                myTaskTip2: "懸賞任務具有真實性和安全性，安全保護賣家倌息，有效避免了數據洩露和他人跟賣等惡劣行為。",
                rewardTaskTip1: "完成他人的懸賞任務，可以幫助其他賣家完成店鋪運營，同時又可以賺取積分。",
                rewardTaskTip2: "懸賞任務具有真實性和安全性，安全保護賣家倌息，有效避免了數據洩露和他人跟賣等惡劣行為。",
                createdTask: "發起任務",
                fetchTask: "探尋任務",
                lookTask: "正在尋找任務...",
                lookTaskTip: "任務執行時，請勿關閉本頁面及應用",
                integral: "積分",
                startTask: "點擊完成",
                shop: "店鋪：",
                executing: "任務執行中",
                finished: "已完成",
                cannotTakeTaskTip: "手慢了，任務已經被別人接走咯~",
                showNoTaskTip: "什麼也沒找到~",
                showCanNotTakeTaskTip: "請到蝦皮前台页面進行此項操作~",
                addTask: {
                    publishTask: "發布任務",
                    taskType: "任務類型",
                    likeGrade: "單個贊懸賞積分",
                    fanspoint: "單個粉絲懸賞積分",
                    releaseNow: "立即發布",
                    taskTarget: "任務目標",
                    targetCount: "目標數量",
                    targetPage: "目標頁碼",
                    pleaseTickTerms: "請勾選服務條款！ ",
                    like: "點贊",
                    Fan: "粉絲",
                    generalOffers: "綜合商品",
                    hotOffers: "最熱銷商品",
                    newestOffers: "最新商品",
                    designatedOffer: "指定商品",
                    targetUrl: "目標鏈接",
                    mustNumber: "必須是正整數",
                    mustShopeeOffer: "請輸入有效的當前站點蝦皮商品鏈接",
                    insufficientBalance: "餘額不足",
                    releaseSuccess: "發布成功",
                    positiveIntegerDecimal: "必須是正整數或一位小數",
                    noItmeTip: "該頁無商品"
                }
            }, Vt = {
                popup: {
                    popupTitle: "ShopeeFans挿件面板",
                    popupIntroduction: "點擊瀏覽器右上角的小圖標",
                    shopFeatureIntroduction: "在這裡可以看到已經在客優雲ERP系統中綁定好的店鋪",
                    toolFeatureIntroduction: "我們提供了一些實用的工具",
                    settingFeatureIntroduction: "在這裡可以看到當前的客優雲ERP帳號和相關的幫助與設定選項"
                },
                sidebar: {
                    navigationBarTitle: "ShopeeFans巡覽列",
                    navigationBarIntroduction: "可以快速跳轉到Shopee蝦皮的相關頁面",
                    navigationIconIntroduction: "點擊這個圖標可以展開應用清單",
                    appListTitle: "ShopeeFans應用清單",
                    appListIntroduction: "按一下圖標可以打開應用",
                    appSettingIconIntroduction: "點擊這個圖標可以打開應用的設定",
                    appSettingIntroduction: "在這裡可以對應用進行一些設定"
                },
                menu: {
                    functionMenuTitle: "ShopeeFans功能選單",
                    listFunctionMenuIntroduction: "將滑鼠懸停在商品列表中的商品上，會顯示這個選單，滑鼠按一下選單進行相應操作",
                    detailFunctionMenuIntroduction: "在商品詳情頁的右下角，也會出現一個選單"
                },
                endMessage: "趕緊去試試吧！！！",
                next: "下一步",
                previous: "上一步",
                done: "完成"
            }, Wt = {
                importantTipsTitle: "重要提示",
                importantTipsText: "下單過程中請勿打開新的窗口下單，以免數據丟失",
                orderInfo: "訂單信息",
                orderNo: "訂單號",
                price: "金額",
                productTotal: "商品總數量",
                messageToSeller: "買家留言",
                remakes: "賣家備註",
                currentOrderAssociatedProducts: "當前訂單關聯商品",
                sku: "SKU",
                skuCode: "SKU編碼",
                count: "數量",
                currentNotPurchaseOrder: "當前沒有正在採購的訂單"
            }, Kt = {
                purchaseOrderNumber: "採購訂單號",
                kyyOrderNumber: "客優雲ERP訂單號",
                orderNumber: "訂單號：{platformOrderNo}",
                kyyOrderNoRequired: "請填寫客優雲訂單號！ ",
                orderAssociatedTips: "確定將該採購訂單關聯到當前客優雲訂單嗎？ ",
                associatedToERP: "關聯到客優雲ERP的訂單",
                syncPlatformOrderTips: "平台訂單號：<b>{platformOrderNo}</b><br/>物流單號:<b>{expressNumber}</b><br/>確定關聯到對應的包裹？",
                getOrderLogisticsInformation: "正在獲取訂單物流信息"
            }, qt = n("b014"), Xt = n("b3df"), Qt = {vLoadList: qt, sendMsgToFans: Xt}, Jt = n("931d"), Zt = {
                collectionBox: "採集箱",
                localCollectionBoxGoods: "本地採集箱商品",
                note: "注意",
                maxNumNote: "本地採集箱最大存儲條數為{num}條，超出條數將無法存儲。",
                restStorable: "剩餘可存儲數量",
                tiao: "條",
                clearUselessData: "按需清除歷史無用數據",
                keepLastData: "保留最近{num}條數據",
                deleteAll: "全部刪除",
                all: "全部",
                goKeyouYun: "點擊前往 {keyouyun} 查看採集商品",
                collectUrlError: "採集數據錯誤，請檢查採集URL能被正常訪問！",
                linkCannotCollect: "鏈接不可採集",
                maxCollectNot: "採集數量超出存儲最大限制，無法採集，請清除歷史無用數據",
                goodsExist: "商品已存在，重複採集",
                collectFormLabel: "單品採集，請輸入產品網址，多個​​網址用回車換行",
                startCollect: "開始採集",
                toCollectResult: "查看採集結果",
                urlError: "鏈接錯誤: {url}",
                collectResult: "採集結果",
                storeLocalNote: "此採集結果只存在於當前電腦上，如需編輯，請先推送到{keyouyun}",
                collectStatus: "採集狀態",
                collecting: "採集中",
                collectDone: "採集完成",
                collectTotal: "採集總數",
                collectSuccess: "採集成功",
                collectFail: "採集失敗",
                collectFailDetail: "失敗詳情",
                close: "關閉",
                goodsName: "商品名稱",
                source: "來源",
                status: "狀態",
                search: "搜索",
                success: "成功",
                fail: "失敗",
                batchDel: "批量刪除",
                questionDel: "確定刪除？",
                batchPushToKeYouYun: "批量推送到{keyouyun}",
                rowsPerPage: "每頁條數",
                del: "刪除",
                copy: "複製",
                pushSuccess: "推送成功",
                pushFail: "推送失敗",
                retry: "重試",
                selectText: "已選擇{length}項， 共{total}項",
                selectAll: "全選",
                antiSelect: "反選",
                index: "序號",
                fromPlatform: "所屬平台",
                image: "圖片",
                goodsUrl: "商品地址",
                pushDone: "推送完成",
                copyed: "已復製到剪貼板",
                copyFail: "複製失敗"
            }, en = {
                commodityHistoricalData: "商品歷史數據",
                addedTime: "上架時間",
                totalSold: "總銷量",
                skusHistoricalSold: "商品規格歷史銷量數據",
                lastMonth: "當月",
                currentMonthData: "當月數據",
                sold: "銷量",
                viewCount: "訪問量",
                conversionRate: "轉化率",
                category: "類目",
                price: "價格",
                lastOneMonth: "近一個月",
                lastTwoMonth: "近兩個月",
                lastThreeMonth: "近三個月",
                custome: "自定義"
            }, tn = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: At,
                country: Ot,
                errors: Pt,
                apps: Nt,
                common: Ct,
                set: Lt,
                shopee: It,
                activation: Ft,
                appList: Mt,
                brushPowder: Dt,
                exchange: Rt,
                chat: jt,
                generalSettings: Bt,
                sidebar: $t,
                appCenter: zt,
                collect: Ht,
                top: Yt,
                rewardHall: Gt,
                appCollectPdd: Ut,
                userGuide: Vt,
                appPurchaseOrder: Wt,
                purchaseOrder: Kt,
                components: Qt,
                imageDownload: Jt,
                collectionBox: Zt,
                movablePin: en
            }, nn = {
                name: "ERP ข้ามพรมแดนของ Keyou Cloud Southeast Asia",
                logo: "KeYouYun",
                slogan: "คลิกเดียวการกระจายการแปลที่ถูกต้องถาวรฟรี",
                back: "กลับ",
                version: "รุ่นถาวร",
                success: "ความสำเร็จ",
                failure: "ความล้มเหลว",
                skip: "กระโดด",
                save: "บันทึก",
                startBoost: "เปิดด้านบน",
                stopBoost: "unstuck",
                login: "เข้าสู่ระบบ",
                loginTip: "กรุณาเข้าสู่ระบบ KeYouYun ERP หากคุณได้เข้าสู่ระบบกรุณารีเฟรชหน้านี้อีกครั้ง",
                help: "เอกสารช่วยเหลือ",
                siteList: "รายชื่อเว็บไซต์กุ้งผิว:",
                comingSoon: "เร็ว ๆ นี้",
                loginNow: "ลงชื่อเข้าใช้ตอนนี้",
                notLogIn: "ไม่ได้ลงชื่อเข้าใช้ Youyou Cloud Southeast Asia ERP ข้ามพรมแดน",
                addShop: "เพิ่มร้านค้า",
                downloadImg: "ดาวน์โหลดภาพ",
                readAndAgree: "อ่านและยอมรับ",
                kyyServicePrivacy: "ข้อตกลงการบริการของ Keyou Cloud",
                button: {cancel: "ยกเลิก", ok: "ยืนยัน", sync: "การประสานข้อมูล", query: "สอบถาม"},
                downloadVideo: "ดาวน์โหลดวิดีโอ",
                orderCenter: "ศูนย์สั่งซื้อ ERP ของ Keyou cloud",
                notOrderedTip: "หากคุณยังไม่ได้สั่งแอปพลิเคชันนี้โปรดไปที่คลาวด์ลูกค้า ERP เพื่อสั่งซื้อ",
                unableCollect: "ไม่สามารถรวบรวมได้โปรด {go} เพื่อสั่งซื้อคลาวด์ลูกค้า ERP",
                go: "ไปที่",
                unorderMultiSotreManagement: "การจัดการหลายร้านที่ไม่ได้จัดลำดับโปรดไปที่ Keyouyun ERP เพื่อสั่งซื้อ",
                plaseGoToKeYouYunOrderTool: "ไม่ได้รับคำสั่งโปรดไปที่ KeYouYun เพื่อสั่งซื้อ",
                fansElves: "แฟนเอลฟ์",
                imgAndVedioHelper: "ผู้ช่วยภาพวิดีโอ",
                orderForFullFeature: 'สั่งซื้อ "{toolName}" และสัมผัสกับฟังก์ชั่นการทำงานเต็มรูปแบบ',
                messageNotification: "ข้อความแจ้งเตือน",
                weChat: "WeChat",
                actionSuceess: "การดำเนินการประสบความสำเร็จ",
                actionFail: "การดำเนินการล้มเหลว",
                dontCloseThePage: "อย่าปิดส่วนต่อประสานนี้",
                boostWarning: "การปรับเทคโนโลยีสกินกุ้งซึ่งเป็นเวอร์ชั่นเก่าของการปักหมุดปกติที่ใช้งานฟรีหยุดการบำรุงรักษาโปรดสั่งการปักหมุดใหม่ ",
                syncXiapiTip: "ไม่เข้าสู่ระบบหน้าการซื้อของ shopee ({hostname})，กรุณาคลิกที่ปุ่มด้านล่าง",
                gotoOrderApp: "คลิกเพื่อซื้อ"
            }, on = {shop: "ร้านขายของ", apps: "ใบสมัคร", setting: "จัดตั้งขึ้น", activation: "การกระตุ้น"}, rn = {
                MY: "ประเทศมาเลเซีย",
                SG: "สิงคโปร์",
                ID: "อินโดนีเซีย",
                TW: "ไต้หวัน",
                TH: "ประเทศไทย",
                VN: "เวียดนาม",
                PH: "ฟิลิปปินส์",
                BR: "บราซิล",
                site: {
                    MY: "สถานีมาเลเซีย",
                    SG: "สถานีสิงคโปร์",
                    ID: "สถานีอินโดนีเซีย",
                    TW: "สถานีไต้หวัน",
                    TH: "สถานีไทย",
                    VN: "สถานีเวียดนาม",
                    PH: "สถานีฟิลิปปินส์",
                    BR: "เว็บไซต์บราซิล"
                }
            }, an = {http: {500: "ระบบไม่ว่างโปรดลองอีกครั้งในภายหลัง", 200: "การดำเนินการที่ประสบความสำเร็จ"}}, sn = {
                backgroundRemoval: "แผนที่เดียว",
                pictureBeautification: "ตกแต่งรูปภาพ",
                qRCodeProduction: "การผลิตรหัส QR",
                imageCompression: "การบีบอัดรูปภาพ",
                keywordAnalysis: "การวิเคราะห์คำหลัก",
                googleTrends: "Google Trends",
                bannerMaker: "การออกแบบโปสเตอร์",
                watermarkCropping: "การปลูกพืชลายน้ำ"
            }, ln = {
                usingHelp: "ใช้ความช่วยเหลือ",
                feedback: "ข้อเสนอแนะปัญหา",
                problemDescription: "กรุณาอธิบายปัญหาหรือข้อเสนอแนะของคุณเราจะติดตามเวลาในการแก้ไข",
                feedbackType: "ข้อเสนอแนะประเภท",
                aboutExtension: "เกี่ยวกับปลั๊กอิน",
                qq: "กลุ่มแลกเปลี่ยน QQ อย่างเป็นทางการ",
                exitAccount: "ออกจากบัญชี",
                member: "สมาชิกซิลเวอร์",
                lasting: "ถาวร",
                submit: "เสนอ",
                problem: "ปัญหา",
                suggest: "ข้อเสนอ",
                missingRequiredParameters: "กรุณากรอกประเภทข้อเสนอแนะและคำอธิบาย",
                contact: "ข้อมูลการติดต่อ",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, cn = {
                shopeeSiteList: [{
                    site: "ไต้หวัน (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://xiapi.xiapibuy.com/"
                }, {site: "ไต้หวัน (ผู้ขายในท้องถิ่น)", url: "https://shopee.tw"}, {
                    site: "มาเลเซีย (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://my.xiapibuy.com/"
                }, {
                    site: "มาเลเซีย (ผู้ขายในท้องถิ่น)",
                    url: "https://shopee.com.my"
                }, {
                    site: "อินโดนีเซีย (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://id.xiapibuy.com/"
                }, {
                    site: "อินโดนีเซีย (ผู้ขายในท้องถิ่น)",
                    url: "https://shopee.co.id"
                }, {
                    site: "ประเทศไทย (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://th.xiapibuy.com/"
                }, {
                    site: "ประเทศไทย (ผู้ขายในท้องถิ่น)",
                    url: "https://shopee.co.th"
                }, {
                    site: "สิงคโปร์ (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://sg.xiapibuy.com/"
                }, {site: "สิงคโปร์ (ผู้ขายในท้องถิ่น)", url: "https://shopee.sg"}, {
                    site: "เวียดนาม (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://vn.xiapibuy.com/"
                }, {site: "เวียดนาม (ผู้ขายในท้องถิ่น)", url: "https://shopee.vn"}, {
                    site: "ฟิลิปปินส์ (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://ph.xiapibuy.com/"
                }, {site: "ฟิลิปปินส์ (ผู้ขายในพื้นที่)", url: "https://shopee.ph"}, {
                    site: "บราซิล (ผู้ขายแผ่นดินใหญ่)",
                    url: "https://br.xiapibuy.com/"
                }, {site: "บราซิล (ผู้ขายในพื้นที่)", url: "https://shopee.com.br/"}],
                tw: "ไต้หวัน",
                sg: "สิงคโปร์",
                my: "ประเทศมาเลเซีย",
                ph: "ฟิลิปปินส์",
                id: "อินโดนีเซีย",
                th: "ประเทศไทย",
                vn: "เวียดนาม",
                order: "Shrimp skin- {countryName} - แจ้งให้ทราบล่วงหน้าเพื่อ",
                offer: "Shrimp skin- {countryName} - ประกาศเกี่ยวกับสินค้า",
                activity: "Shrimp skin- {countryName} - การแจ้งเตือนแบบไดนามิก",
                evaluation: "Shrimp skin- {countryName} - การแจ้งเตือนการประเมินค่า",
                orderMessage: "ร้านค้า ({shopName}) มีข้อความสั่งซื้อใหม่ (คำสั่งซื้อใหม่ / การจัดส่ง / การยกเลิกคำสั่งซื้อ / ข้อความพูดคุย) โปรดตรวจสอบออก!",
                offerMessage: "ร้านค้า ({shopName}) มีข้อความผลิตภัณฑ์ใหม่ (ภายใต้ / ลบเกินกำหนด) โปรดระวัง!",
                activityMessage: "ร้านค้า ({shopName}) มีข่าวใหม่ (ติดตาม / ชอบ) โปรดตรวจสอบ!",
                evaluationMessage: "ร้านค้า ({shopName}) มีรีวิวใหม่โปรดตรวจสอบ!"
            }, un = {
                all: "เลือกร้านค้า",
                authorization: "ร้านค้าที่ได้รับอนุญาต Shopee",
                type: "ประเภทเครื่องมือ",
                activationCode: "รหัสเปิดใช้งาน",
                inActivation: "การเปิดใช้งาน ..",
                activateNow: "เปิดใช้งานทันที",
                requiredParameter: "จะต้องเข้า",
                necessaryInformation: "กรุณากรอกข้อมูลที่จำเป็น",
                permanentMemberTip: "บัญชีนี้เป็นสมาชิกถาวรของ Brushing Elf และไม่จำเป็นต้องเปิดใช้งานอีกครั้ง",
                shopFollowers: "เครื่องมือแปรง",
                activationS: "การเปิดใช้งานสำเร็จเวอร์ชันถาวร",
                activationSTime: "การเปิดใช้งานสำเร็จเวลาสิ้นสุดการให้บริการ： {time}",
                nonAuthMessage: 'ร้านค้าไม่ได้รับอนุญาตโปรดไปก่อน <a target="_blank" href={shopAuthUrl}>{name}</a> ผูกพัน',
                shopActivationSTimeis: "ชื่อร้านค้า: {shopName} สิ้นสุดการให้บริการ: {time}",
                submitTip: "หากซื้อในระบบแล้วให้ข้ามขั้นตอนนี้และใช้โดยตรง"
            }, pn = {
                shopFollowers: "แปรงช่วยสร้างผง",
                exchangeCenter: "ศูนย์อัตราแลกเปลี่ยน",
                chatToolkit: "Shopee Chat",
                productBoost: "ด้านบนกำหนดเวลา",
                generalSettings: "การตั้งค่าทั่วไป",
                rewardHall: "ห้องโถงรางวัล",
                collectPinDuoDuo: "ใช้เงินสะสมเพิ่มขึ้น",
                purchaseOrder: "สั่งซื้อ",
                sendMessageInBulk: "การส่งข้อความกลุ่ม",
                imageDownload: "ดาวน์โหลดรูปภาพ"
            }, dn = {
                attentionFans: "ใส่ใจกับแฟน ๆ ร้านค้า",
                attentionFansTip: 'คลิกที่ "Follow Shop Fans" ในเมนูจากนั้นคลิกที่ Brush Powder Wizard เพื่อเริ่มติดตามแฟน ๆ',
                cancelFans: "ยกเลิกแฟน ๆ ร้าน",
                bootOperation: 'คลิกที่<a href="{followingUrl}" target="_blank" title="ร้านค้าทำความสะอาด">ร้านค้าทำความสะอาด</a>，คลิกที่ตัวช่วยสร้างแปรงปัดฝุ่นเพื่อเปิดพัดลม。',
                storeInformation: "เก็บข้อมูล",
                storeName: "ชื่อร้าน",
                commodity: "สินค้า",
                responseRate: "อัตราการตอบกลับการแชท",
                evaluation: "ประเมินผล",
                cancellationRate: "อัตราการยกเลิก",
                fan: "แฟน ๆ",
                attention: "ดังต่อไปนี้",
                score: "ยังไม่มีคะแนน",
                count: "{shopStarScore} ({shopStarCount}ขึ้น)",
                unsubscribe: "เลิก",
                unsubscribeLabel: "จำนวนการยกเลิกการติดตาม",
                unsubscribePlaceholder: "ค่าเริ่มต้นคือ 800",
                turnOnUnFollow: "เปิดประตู",
                turnOnUnFollowPending: "วิ่งคลิกยกเลิกเพื่อปิด",
                doNotClose: "อย่าปิดหน้านี้",
                error: "Shopee ระบบไม่ว่างโปรดรีเฟรชหน้าและลองอีกครั้ง",
                unSubStart: "[เริ่ม]: การเตรียมการเพื่อทำงานอัตโนมัติ",
                unSubWait: "[รอ]: จำลองการทำงานของเบราว์เซอร์จริงพร้อมที่จะเลื่อนไปข้างหน้า",
                unSubWaitNoData: "[รอ]: ไม่มีข้อมูลผู้ติดตาม",
                unSubEndReadyClose: "[สิ้นสุด]: การล้างอัตโนมัติได้ถูกยกเลิกพร้อมที่จะยกเลิกงาน",
                unSubEndClose: "[สิ้นสุด]: ยกเลิกความสนใจถูกยกเลิก",
                unSubEndCloseSystemBusy: "[สิ้นสุด]: ผู้ใช้ไม่ได้เข้าสู่ระบบหรือระบบไม่ว่าง",
                unSubEndComplete: "[สิ้นสุด]: งานเสร็จสมบูรณ์",
                unSubSuccess: "[ปิด]: {name} สำเร็จ",
                unSubSkipLogin: "[ข้าม]: โปรดเข้าสู่หน้าช็อปปิ้งกุ้ง",
                unSubSkip: "[ข้าม]: {name} ไม่สามารถถอดได้",
                followFans: "ติดตามแฟน ๆ",
                subPosition: "ตำแหน่งเริ่มต้นของความสนใจอัตโนมัติ",
                subDefault: "เริ่มต้นจากคนแรก",
                subQuantityLabel: "จำนวนผู้ติดตามอัตโนมัติ",
                subscribePlaceholder: "ค่าเริ่มต้นคือ 800",
                filterSeller: "กรองผู้ขาย",
                subSellersNumber: "จำนวนผู้ขาย",
                subSellersNumberPlaceholder: "ค่าเริ่มต้นคือ 50",
                subLastLoginTime: "เวลาเข้าสู่ระบบล่าสุด",
                subLastLoginTimeDefault: "ค่าเริ่มต้นน้อยกว่า 30 วัน",
                subLastLoginTimeDays: "วันก่อน",
                subNumberOfEvaluations: "จำนวนการประเมินผล",
                subNumberOfEvaluationsDefault: "การประเมินผลเริ่มต้นมากกว่า 1 ครั้ง",
                subEvaluationsTime: "รอง",
                subNumberOfFollowers: "จำนวนผู้ติดตาม",
                subNumberOfFollowersDefault: "ให้ความสนใจเริ่มต้นกับผู้ใช้มากกว่า 1 ราย",
                subNumberOfFollowersUnit: "รอง",
                turnOnAttentionBtn: "เปิดความสนใจ",
                turnOnAttentionBtnPending: "วิ่งคลิกเพื่อยกเลิกการติดตาม",
                subStartFollow: "[เริ่ม]: การเตรียมการเพื่อดำเนินการงานดูแลอัตโนมัติ",
                subEndFollow: "[สิ้นสุด]: ความสนใจอัตโนมัติถูกยกเลิกพร้อมที่จะยกเลิกงาน",
                subEndFollowCompleted: "[สิ้นสุด]: งานเสร็จสมบูรณ์",
                subEndFollowStop: "[สิ้นสุด]: ความสนใจอัตโนมัติถูกยกเลิก",
                subEndFollowEnd: "[สิ้นสุด]: ในตอนท้ายไม่มีแฟนสโตร์",
                subEndFollowEndUpperLimitStore: "[สิ้นสุด]: จำนวนข้อกังวลของร้านค้าถึงจำนวนสูงสุดและไม่สามารถติดตามได้",
                subEndFollowEndUpperLimit: "[สิ้นสุด]: วันนี้ความสนใจมาถึงขีด จำกัด สูงสุดแล้วและไม่สามารถติดตามได้",
                subEndFollowEndWaitSim: "[รอ]: จำลองการทำงานของเบราว์เซอร์จริงพร้อมที่จะเลื่อนหน้าลง",
                subSkipFollow: "[ข้าม]: {name} ไม่สามารถติดตามได้",
                subSkipFollowNotLogin: "[ข้าม]: หนังกุ้งไม่ได้ลงทะเบียนและคุณไม่สามารถให้ความสนใจได้!",
                subSkipFollowAlreadyConcerned: "[ข้าม]: {name} ได้ติดตาม",
                subSkipFollowIsSeller: "[ข้าม]: {name} เป็นผู้ขายที่มี {จำนวน} รายการ",
                subSkipFollowLastLogin: "[ข้าม]: {name} ไม่ได้ลงชื่อเข้าใช้เกินกว่า {day} วัน",
                subSkipFollowPeople: "[ข้าม]: {name} น้อยกว่า {minFollowingTotal}",
                subSkipFollowEvaluation: "[ข้าม]: {name} มีความคิดเห็นน้อยกว่า {minEvaluationTotal}",
                subSkipFollowDays: "[ข้าม]: {name} มีการติดตามในสามวันโดยไม่สนใจ",
                subSkipFollowSuccess: "[ติดตาม]: {name} สำเร็จ",
                followingUserInvalid: "[ข้าม]: {name} ผู้ใช้ที่ไม่ถูกต้อง (ยกเลิก, ถูกลบ, ฯลฯ )",
                early: "ช่วงแรก ๆ",
                mid: "ระยะปานกลาง",
                late: "ปลายมือ",
                earlyIntroduction: "เพิ่มผงอย่างรวดเร็วเพิ่มจำนวนแฟน ๆ ในร้านและเพิ่มความนิยมของร้าน (คุณสามารถปรับเงื่อนไขการกรองได้ด้วยตนเอง)",
                midIntroduction: "ค่อยๆมุ่งเน้นไปที่ผู้ซื้อจริงและแปลงแฟน ๆ ร้านค้าเป็นคำสั่ง (คุณสามารถปรับเงื่อนไขการกรองได้ด้วยตนเอง)",
                lateIntroduction: "มุ่งเน้นไปที่ผู้ซื้อที่ใช้งานและเพิ่มอัตราการแปลงคำสั่งซื้อแฟน (คุณสามารถปรับเงื่อนไขการกรองได้ด้วยตนเอง)",
                UnFollowCap: "เลิกติดตามขีด จำกัด วันนี้",
                syncXiapiTip: "ไม่เข้าสู่ระบบหน้าการซื้อของ shopee ({hostname})，กรุณาคลิกที่ปุ่มด้านล่าง",
                autoFollow: "ติดตามโดยอัตโนมัติ",
                autoUnfollow: "ปิดเครื่องอัตโนมัติ",
                followTheDynamicList: "ติดตามรายการแบบไดนามิก",
                sendMessageInBulk: "การส่งข้อความกลุ่ม",
                recentFollowYou: "ติดตามคุณเร็ว ๆ นี้",
                selectAll: "เลือกทั้งหมด"
            }, fn = {
                currentSite: "เว็บไซต์ปัจจุบัน",
                targetCurrencyLabel: "โปรดเลือกสกุลเงินเป้าหมายการแปลงอัตราแลกเปลี่ยน",
                theSameCurrencyTip: "สกุลเงินของไซต์ปัจจุบันเหมือนกับสกุลเงินการแปลงและไม่สามารถบันทึกได้",
                currencyList: [{site: "ประเทศจีน (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "ไต้หวัน ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "ประเทศมาเลเซีย (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "อินโดนีเซีย (Rp)",
                    currencyCode: "IDR",
                    currencyTag: "Rp"
                }, {site: "เวียดนาม (₫)", currencyCode: "VND", currencyTag: "₫"}, {
                    site: "ประเทศไทย (฿)",
                    currencyCode: "THB",
                    currencyTag: "฿"
                }, {site: "ฟิลิปปินส์ (₱)", currencyCode: "PHP", currencyTag: "₱"}, {
                    site: "สิงคโปร์ ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "สหรัฐอเมริกา ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "บราซิล（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "เงินตรา",
                clickOpen: "เปิด",
                noLongerDisplay: "ปิดเครื่อง"
            }, mn = {
                sellerLanguage: "ภาษาผู้ขาย",
                selectLanguageLabel: "เลือกภาษา",
                buyerLanguage: "ภาษาของผู้ซื้อ",
                openChatLabel: "ไม่ว่าจะเปิดแชทแชท",
                buttonPrompt: "กด Shift + Enter เพื่อตัด",
                messageTranslate: "การแปลข้อความ",
                sendButton: "แปลและส่ง",
                languageList: [{name: "ภาษาจีน (ประยุกต์)", code: "zh-CN"}, {
                    name: "จีน (ดั้งเดิม)",
                    code: "zh-TW"
                }, {name: "อังกฤษ (US)", code: "en"}, {
                    name: "อินโดนีเซีย (อินโดนีเซีย)",
                    code: "id"
                }, {name: "ไทย (ประเทศไทย)", code: "th"}, {
                    name: "เวียตนาม (เวียดนาม)",
                    code: "vi"
                }, {name: "มาเลย์ (ท้องถิ่นมาเลเซีย)", code: "ms"}, {
                    name: "ตากาล็อก (ท้องถิ่นในฟิลิปปินส์)",
                    code: "tl"
                }, {name: "โปรตุเกส (บราซิล)", code: "pt"}],
                openShopeeDefaultBtn: "เปิดใช้งานปุ่มข้อความ Shopee หรือไม่",
                orderWeChatGetFullFeature: "สั่ง WeChat แสดงการแปลแบบเต็ม"
            }, hn = {
                dataCollection: "การเก็บข้อมูล",
                repeatLabel: "อย่าเก็บซ้ำภายในหนึ่งวัน",
                navigationSettings: "การตั้งค่าเมนูนำทาง (<6 รายการ)",
                navigationSettingsLabel: "โปรดเลือกเมนูนำทางของการแสดง",
                navigationItems: [{name: "ศูนย์ผู้ขาย", id: 1}, {name: "ยอดขายของฉัน", id: 3}, {
                    name: "ใหม่แชท",
                    id: 7
                }, {name: "แผนกต้อนรับส่วนหน้าร้าน", id: 4}, {name: "ร้านค้าทำความสะอาด", id: 6}, {
                    name: "สินค้าของฉัน",
                    id: 2
                }, {name: "ร้านค้าแฟน ๆ", id: 5}, {name: "การจำแนกประเภทร้านค้า", id: 8}, {
                    name: "กิจกรรมการตลาด",
                    id: 9
                }, {name: "เครดิตของฉัน", id: 10}, {name: "กระเป๋าเงินของฉัน", id: 11}, {
                    name: "ข้อมูลของฉัน",
                    id: 12
                }, {name: "การตั้งค่าร้านค้า", id: 13}],
                syncAccount: "ประสานบัญชี",
                syncTip: 'เพื่อแก้ปัญหาที่ xiapibuy.com ไม่สามารถเข้าสู่ระบบได้โปรดคลิกที่ปุ่ม "ซิงโครไนซ์" ก่อนเข้าสู่ศูนย์ผู้ขายใน shopee.cn',
                syncBtn: "สถานะการเข้าสู่ระบบแบบซิงโครนัส",
                syncErrorTip: "ไม่ได้ลงทะเบียนใน shopee.cn ศูนย์ขายไม่สามารถซิงค์ได้",
                collectSetTitle: "การตั้งค่าการได้มา",
                whetherToCollectDiscountLabel: "ไม่ว่าจะเก็บราคาลด",
                collectStockSetLabel: "รวบรวมการตั้งค่าสินค้าคงคลัง",
                collectRealStock: "รวบรวมสินค้าจริง",
                collectFixStock: "รวบรวมสต็อกคงที่",
                selelctPricingStrategies: "เทมเพลตการกำหนดราคา",
                notificationTitle: "การตั้งค่าการแจ้งเตือน",
                neverShowMessageNotifications: "ปิดระบบ",
                otherFeature: "คนอื่น ๆ",
                commonFeature: "ร่วมกัน",
                networkLine: "เครือข่าย",
                networkLineChina: "ประเทศจีน",
                networkLineWorld: "ระหว่างประเทศ",
                jumpPageTips: "หลังจาก 3 หน้าจะข้ามไปที่ {url}",
                syncLoginTips: "โปรดใช้รหัสผ่านบัญชีร้านค้าเพื่อเข้าสู่ระบบไม่ใช่เข้าสู่ระบบบัญชีแม่ไม่สามารถซิงโครไนซ์บัญชีแม่",
                goLocalMain: "ขณะนี้คุณได้เข้าสู่ระบบศูนย์ผู้ขายเวอร์ชันใหม่แล้วคุณต้องลงชื่อเข้าใช้ไซต์แผนกต้อนรับในพื้นที่"
            }, gn = {
                sellerCenter: "ศูนย์ผู้ขาย",
                myProducts: "สินค้าของฉัน",
                mySales: "ยอดขายของฉัน",
                shopHome: "แผนกต้อนรับส่วนหน้าร้าน",
                shopFollower: "ร้านค้าแฟน ๆ",
                shopUnfollow: "ร้านค้าทำความสะอาด",
                newVersionChat: "ใหม่แชท",
                shopCategories: "การจำแนกประเภทร้านค้า",
                marketingCenter: "กิจกรรมการตลาด",
                myIncome: "เครดิตของฉัน",
                myWallet: "กระเป๋าเงินของฉัน",
                myData: "ข้อมูลของฉัน",
                shopSettings: "การตั้งค่าร้านค้า",
                purchaseOrder: "สั่งซื้อ",
                myFans: "แฟนของฉัน"
            }, bn = {
                notPurchased: "เครื่องมือที่ยกเลิกการสมัครไม่สามารถใช้งานได้",
                serviceExpired: "เวลาบริการหมดอายุแล้ว：{time}",
                notShopeePage: "โปรดไปที่หน้าช็อปปิ้งของกุ้งเพื่อดำเนินการต่อ",
                notLoginShopee: "ไม่ได้ลงชื่อเข้าใช้ใน Shopee Seller Center",
                notLoginShopeeMainUrl: 'ไม่ใช่เข้าสู่ระบบ "xiapibuy.com"， โปรดคลิกปุ่ม "ซิงโครไนซ์" ในแผงด้านขวา',
                unauthorized: "ร้านค้าของศูนย์ผู้ขาย Shopee ไม่ได้รับอนุญาตโปรดไปที่ {name} เพื่อเชื่อมโยง",
                shopAuthorization: "ผูกทันที",
                notOrdered: "แอปนี้ยังไม่ได้รับคำสั่งโปรดไปที่ erp เพื่อสั่งซื้อแอพ",
                goToERP: "สั่งซื้อเลย"
            }, vn = {
                title: "ไปและต่อสู้กับของสะสมมากมาย",
                collectDesc: "เริ่มการรวบรวม: คลิกที่รายการเพื่อไปที่หน้ารายละเอียดจากนั้นคลิกที่ปุ่มการรวบรวมที่มุมล่างขวา"
            }, xn = {
                collectTo: "รวบรวมไปยัง {name}",
                batchCollectTo: "ชุดการรวบรวมเป็น {name}",
                findSource: "ค้นหาแหล่งจัดหา",
                followFans: "ใส่ใจกับแฟน ๆ ร้านค้า",
                viewShop: "ดูร้านค้า",
                beingCollected: "กำลังรวบรวม",
                collected: "มันได้รับการเก็บรวบรวม",
                successfulCollection: "ประสบความสำเร็จในการซื้อกิจการ",
                successfulOperation: "การดำเนินการที่ประสบความสำเร็จ",
                successfulCollectionTip: "รวบรวมสำเร็จคุณสามารถไปที่ ERP ระบบคลาวด์ของลูกค้าได้ในภายหลัง {msg} ดู",
                successfulOperationTip: "การดำเนินการที่ประสบความสำเร็จคุณสามารถไปที่ ERP ระบบคลาวด์ของลูกค้าได้ในภายหลัง {msg} ดู",
                collectedTip: "รายการนี้ได้รับการรวบรวมในวันนี้สามารถไปที่ลูกค้า Cloud ERP {msg} ดู",
                collectionPage: "หน้ารวบรวมผลิตภัณฑ์",
                sources1688: "1688 แหล่งต้นทุนต่ำ",
                batchAcquisitionPanel: "ในกระบวนการได้มาซึ่งประสบความสำเร็จ {successedNum}, ล้มเหลว {failedNum}",
                batchAcquisitionCompleted: "หลังจากการรวบรวมเสร็จสมบูรณ์จะมีการรวบรวมทั้งหมด {รายการ} รายการ {successedNum}, {failedNum}",
                notOrderedTip: "หากคุณยังไม่ได้สั่งแอพนี้โปรดไปที่ {msg} เพื่ออัปเกรดสถานะสมาชิก Gold ของคุณ",
                collectErr: "การรวบรวมล้มเหลวโปรดรีเฟรชหน้าเว็บแล้วลองอีกครั้ง",
                operationFailed: "การดำเนินการล้มเหลว",
                collectFailTips: 'การรวบรวมล้มเหลวโปรดเข้าสู่ "{host}" แล้วลองรวบรวมอีกครั้ง',
                batchCollectShopTo: "รวบรวมร้านค้าเพื่อ {name}",
                getShopItemCount: "การดึงข้อมูลปริมาณสินค้าที่จัดเก็บ",
                waitOtherShop: "รอร้านอื่น ๆ เก็บครบ",
                collectingShop: 'ในขั้นตอนการรวบรวมมีการรวบรวมรายการทั้งหมด {total} รายการสำเร็จ {successedNum} และล้มเหลว {failedNum} <a href="javascript:void 0" class="sf-go-collection-box"> ไป ไปที่ช่องคอลเลกชันเพื่อดู </a>',
                notFindItems: "ไม่พบสินค้าในร้านนี้",
                collectionShopFail: "การรวบรวมร้านค้าล้มเหลว"
            }, yn = {
                addToBoost: "เพิ่มไปที่เวลาด้านบน",
                removeFromBoost: "ลบออกจากด้านบนหมดเวลา",
                boosting: "เพิ่มเวลาแล้ว",
                addingToBoostList: "เพิ่มไปยังรายการด้านบน...",
                addSuccessful: "เพิ่มเวลาในการตั้งค่าให้สำเร็จ",
                upperLimit: "รายการด้านบนมีจำนวนสูงสุด 5 แคป"
            }, kn = {
                accountPoints: "เครดิตบัญชี",
                instantRecharge: "เติมเงินทันที",
                myTask: "ภารกิจของฉัน",
                rewardTask: "งานรางวัล",
                myTaskTip1: "ผู้ขายหนังกุ้งเริ่มต้นรับรางวัลในรูปแบบของคะแนนสะสมเพื่อขอความช่วยเหลือจากผู้อื่นและดำเนินการจัดเก็บอย่างมีประสิทธิภาพ",
                myTaskTip2: "งานรางวัลมีความถูกต้องและปลอดภัยและป้องกันการสำลักของผู้ขายหลีกเลี่ยงการรั่วไหลของข้อมูลและพฤติกรรมที่ไม่ดีของผู้อื่น",
                rewardTaskTip1: "การให้รางวัลของผู้อื่นให้สำเร็จช่วยให้ผู้ขายรายอื่นดำเนินงานร้านค้าให้เสร็จในขณะที่รับคะแนน",
                rewardTaskTip2: "งานรางวัลมีความถูกต้องและปลอดภัยและป้องกันการสำลักของผู้ขายหลีกเลี่ยงการรั่วไหลของข้อมูลและพฤติกรรมที่ไม่ดีของผู้อื่น",
                createdTask: "เริ่มภารกิจ",
                fetchTask: "ค้นหาภารกิจ",
                lookTask: "กำลังมองหางาน...",
                lookTaskTip: "อย่าปิดหน้านี้และแอปพลิเคชันเมื่อมีการดำเนินงาน",
                integral: "บูรณาการ",
                startTask: "คลิกเพื่อให้สมบูรณ์",
                shop: "ร้าน:",
                executing: "การดำเนินงาน",
                finished: "เสร็จ",
                cannotTakeTaskTip: "มือช้างานที่คนอื่นหยิบขึ้นมา~",
                showNoTaskTip: "ไม่พบอะไรเลย~",
                showCanNotTakeTaskTip: "โปรดไปที่หน้าด้านหน้าของหนังกุ้งเพื่อทำสิ่งนี้~",
                addTask: {
                    publishTask: "เผยแพร่งาน",
                    taskType: "ประเภทงาน",
                    likeGrade: "คะแนนรางวัลสรรเสริญเดี่ยว",
                    fanspoint: "คะแนนสะสมแฟนเดี่ยว",
                    releaseNow: "เผยแพร่ทันที",
                    taskTarget: "เป้าหมายภารกิจ",
                    targetCount: "ปริมาณเป้าหมาย",
                    targetPage: "หมายเลขหน้าเป้าหมาย",
                    pleaseTickTerms: "กรุณาเลือกเงื่อนไขการให้บริการ!",
                    like: "ยกนิ้ว",
                    Fan: "แฟน ๆ",
                    generalOffers: "สินค้าทั่วไป",
                    hotOffers: "สินค้ายอดนิยม",
                    newestOffers: "ผลิตภัณฑ์ล่าสุด",
                    designatedOffer: "ผลิตภัณฑ์ที่กำหนด",
                    targetUrl: "ลิงก์เป้าหมาย",
                    mustNumber: "ต้องเป็นจำนวนเต็มบวก",
                    mustShopeeOffer: "โปรดป้อนลิงค์ผลิตภัณฑ์กุ้งปัจจุบันที่ถูกต้อง",
                    insufficientBalance: "ยอดเงินไม่เพียงพอ",
                    releaseSuccess: "ประสบความสำเร็จในการเปิดตัว",
                    positiveIntegerDecimal: "ต้องเป็นจำนวนเต็มบวกหรือทศนิยม",
                    noItmeTip: "ไม่มีสินค้าในหน้านี้"
                }
            }, wn = {
                importantTipsTitle: "หมายเหตุสำคัญ",
                importantTipsText: "อย่าเปิดหน้าต่างใหม่ในระหว่างกระบวนการสั่งซื้อเพื่อหลีกเลี่ยงการสูญเสียข้อมูล",
                orderInfo: "ข้อมูลการสั่งซื้อ",
                orderNo: "หมายเลขสั่งซื้อ",
                price: "เงิน",
                productTotal: "จำนวนผลิตภัณฑ์ทั้งหมด",
                messageToSeller: "ข้อความของผู้ซื้อ",
                remakes: "หมายเหตุผู้ขาย",
                currentOrderAssociatedProducts: "ผลิตภัณฑ์ที่เกี่ยวข้องกับคำสั่งซื้อปัจจุบัน",
                sku: "SKU",
                skuCode: "รหัส SKU",
                count: "ปริมาณ",
                currentNotPurchaseOrder: "ขณะนี้ไม่มีคำสั่งซื้อ"
            }, _n = {
                purchaseOrderNumber: "หมายเลขสั่งซื้อ",
                kyyOrderNumber: "หมายเลขการสั่งซื้อ KEYOUYUN",
                orderNumber: "หมายเลขสั่งซื้อ: {platformOrderNo}",
                kyyOrderNoRequired: "ต้องระบุหมายเลขการสั่งซื้อ KeYouYun",
                orderAssociatedTips: "คุณแน่ใจหรือไม่ว่าต้องการเชื่อมโยงคำสั่งซื้อนี้กับคำสั่งซื้อ KEYOUYUN",
                associatedToERP: "เชื่อมโยงไปยังการสั่งซื้อ KEYOUYUN",
                syncPlatformOrderTips: "หมายเลขการสั่งซื้อแพลตฟอร์ม:<b>{platformOrderNo}</b><br/>หมายเลขโลจิสติกส์:<b>{expressNumber}</b><br/>คุณแน่ใจหรือว่าเกี่ยวข้องกับแพ็คเกจที่เกี่ยวข้อง",
                getOrderLogisticsInformation: "รับข้อมูลโลจิสติกส์เพื่อ"
            }, Sn = n("9393"), Tn = n("d4e5"), En = {vLoadList: Sn, sendMsgToFans: Tn}, Cn = n("a968"), An = {
                collectionBox: "กล่องสะสม",
                localCollectionBoxGoods: "สินค้าท้องถิ่นกล่องคอลเลกชัน",
                note: "บันทึก",
                maxNumNote: "จำนวนสูงสุดของรายการที่เก็บไว้ในกล่อง Local Collection คือ {num} หากเกินจำนวนจะไม่สามารถจัดเก็บได้",
                restStorable: "ปริมาณที่เหลือเก็บได้",
                tiao: "บทความ",
                clearUselessData: "ล้างข้อมูลที่ไร้ประโยชน์ในอดีตตามต้องการ",
                keepLastData: "เก็บข้อมูล {num} ล่าสุด",
                deleteAll: "ลบทั้งหมด",
                all: "ทั้งหมด",
                goKeyouYun: "คลิกเพื่อไปที่ {keyouyun} เพื่อดูผลิตภัณฑ์ที่รวบรวม",
                collectUrlError: "การรวบรวมข้อมูลไม่ถูกต้องโปรดตรวจสอบว่า URL การรวบรวมสามารถเข้าถึงได้ตามปกติ!",
                linkCannotCollect: "ลิงก์ไม่สามารถรวบรวมได้",
                maxCollectNot: "จำนวนคอลเล็กชันเกินขีด จำกัด ที่เก็บสูงสุดและไม่สามารถรวบรวมได้ โปรดล้างข้อมูลที่ไม่มีประโยชน์ในอดีต",
                goodsExist: "มีสินค้าอยู่แล้วให้รวบรวมซ้ำ",
                collectFormLabel: "การรวบรวมผลิตภัณฑ์เดี่ยวโปรดป้อน URL ผลิตภัณฑ์หลาย URL พร้อมการคืนสินค้า",
                startCollect: "เริ่มการรวบรวม",
                toCollectResult: "ดูผลการได้มา",
                urlError: "ข้อผิดพลาดในการเชื่อมโยง: {url}",
                collectResult: "รวบรวมผลลัพธ์",
                storeLocalNote: "ผลลัพธ์การรวบรวมนี้มีอยู่ในคอมพิวเตอร์ปัจจุบันเท่านั้นหากคุณต้องการแก้ไขโปรดกดไปที่ {keyouyun}",
                collectStatus: "สถานะการได้มา",
                collecting: "การจัดเก็บภาษี",
                collectDone: "การรวบรวมเสร็จสมบูรณ์",
                collectTotal: "รวมทั้งหมด",
                collectSuccess: "คอลเลกชันที่ประสบความสำเร็จ",
                collectFail: "การรวบรวมล้มเหลว",
                collectFailDetail: "รายละเอียดล้มเหลว",
                close: "ปิด",
                goodsName: "ชื่อผลิตภัณฑ์",
                source: "แหล่ง",
                status: "สถานะ",
                search: "ค้นหา",
                success: "ความสำเร็จ",
                fail: "ความล้มเหลว",
                batchDel: "การลบแบทช์",
                questionDel: "ยืนยันการลบ?",
                batchPushToKeYouYun: "ผลักดันเป็นกลุ่มเพื่อ {keyouyun}",
                rowsPerPage: "แถวต่อหน้า",
                del: "ลบ",
                copy: "สำเนา",
                pushSuccess: "ดันสำเร็จ",
                pushFail: "การผลักดันล้มเหลว",
                retry: "ลองใหม่",
                selectText: "เลือก {length} รายการทั้งหมด {total} รายการ",
                selectAll: "เลือกทั้งหมด",
                antiSelect: "ต่อต้านการเลือกตั้ง",
                index: "หมายเลขซีเรียล",
                fromPlatform: "เป็นเจ้าของแพลตฟอร์ม",
                image: "ภาพ",
                goodsUrl: "ที่อยู่สินค้า",
                pushDone: "กดเสร็จสิ้น",
                copyed: "คัดลอกไปที่คลิปบอร์ดแล้ว",
                copyFail: "การคัดลอกล้มเหลว"
            }, On = {
                commodityHistoricalData: "ข้อมูลประวัติสินค้า",
                addedTime: "เพิ่มเวลา",
                totalSold: "ยอดขายทั้งหมด",
                skusHistoricalSold: "ข้อมูลการขายในอดีตของข้อกำหนดผลิตภัณฑ์",
                lastMonth: "เดือนนี้",
                currentMonthData: "ข้อมูลของเดือน",
                sold: "ขาย",
                viewCount: "เข้าชม",
                conversionRate: "อัตราการแปลง",
                category: "ประเภท",
                price: "ราคา",
                lastOneMonth: "เกือบหนึ่งเดือน",
                lastTwoMonth: "เกือบสองเดือน",
                lastThreeMonth: "เกือบสามเดือน",
                custome: "ปรับแต่ง"
            }, Pn = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: on,
                country: rn,
                errors: an,
                apps: sn,
                common: nn,
                set: ln,
                shopee: cn,
                activation: un,
                appList: pn,
                brushPowder: dn,
                exchange: fn,
                chat: mn,
                generalSettings: hn,
                sidebar: gn,
                appCenter: bn,
                collect: xn,
                top: yn,
                rewardHall: kn,
                appCollectPdd: vn,
                appPurchaseOrder: wn,
                purchaseOrder: _n,
                components: En,
                imageDownload: Cn,
                collectionBox: An,
                movablePin: On
            }, Nn = {
                name: "Keyou Cloud Đông Nam Á ERP xuyên biên giới",
                logo: "KeYouYun",
                slogan: "Phân phối một lần nhấp, dịch chính xác, miễn phí vĩnh viễn",
                back: "Trở về",
                version: "Phiên bản thường trực",
                success: "Thành công",
                failure: "Thất bại",
                skip: "Bỏ qua",
                save: "Lưu lại",
                startBoost: "Mở đầu",
                stopBoost: "Bỏ ghim",
                login: "Đăng nhập",
                loginTip: "Vui lòng đăng nhập hệ thống KeYouYun ERP, nếu đã đăng nhập vui lòng refresh lại trang",
                help: "Tài liệu trợ giúp",
                siteList: "Danh sách trang web da tôm:",
                comingSoon: "Sắp có",
                loginNow: "Đăng nhập ngay",
                notLogIn: "Chưa đăng nhập vào Youyou Cloud Đông Nam Á ERP xuyên biên giới",
                addShop: "Thêm cửa hàng",
                downloadImg: "Tải hình ảnh",
                readAndAgree: "Đọc và đồng ý",
                kyyServicePrivacy: "Thỏa thuận dịch vụ đám mây Keyou",
                button: {cancel: "Hủy bỏ", ok: "Xác nhận", sync: "Đồng bộ hóa", query: "Truy vấn"},
                downloadVideo: "Tải video",
                orderCenter: "Trung tâm đặt hàng Keyou đám mây ERP",
                notOrderedTip: "Nếu bạn chưa đặt hàng ứng dụng này, vui lòng truy cập ERP đám mây khách hàng để đặt hàng",
                unableCollect: "Không thể thu thập, vui lòng {go} để đặt hàng đám mây khách hàng ERP",
                go: "Đi đến",
                unorderMultiSotreManagement: "Quản lý nhiều cửa hàng chưa được sắp xếp, vui lòng truy cập Keyouyun ERP để đặt hàng",
                plaseGoToKeYouYunOrderTool: "Chưa đặt hàng, vui lòng đến KeYouYun để đặt hàng",
                fansElves: "Yêu tinh",
                imgAndVedioHelper: "Trợ lý video hình ảnh",
                orderForFullFeature: 'Đặt hàng "{toolName}" và trải nghiệm chức năng đầy đủ',
                messageNotification: "Thông báo tin nhắn",
                weChat: "WeChat",
                actionSuceess: "Hoạt động thành công",
                actionFail: "Hoạt động thất bại",
                dontCloseThePage: "Không đóng giao diện này",
                boostWarning: "Điều chỉnh công nghệ da tôm, phiên bản cũ của ghim thông thường miễn phí sử dụng đã ngừng bảo trì. Vui lòng đặt hàng phiên bản ghim mới. ",
                syncXiapiTip: "Không đăng nhập trang mua hàng của shopee ({hostname}) vui lòng nhấp vào nút bên dưới",
                gotoOrderApp: "Nhấn vào đây để mua"
            }, Ln = {shop: "Cửa hàng", apps: "Ứng dụng", setting: "Cài đặt", activation: "Kích hoạt"}, In = {
                MY: "Malaysia",
                SG: "Singapore",
                ID: "Indonesia",
                TW: "Đài Loan",
                TH: "Thái Lan",
                VN: "Việt nam",
                PH: "Philippines",
                BR: "Brazil",
                site: {
                    MY: "Ga Malaysia",
                    SG: "Ga Singapore",
                    ID: "Ga Indonesia",
                    TW: "Ga Đài Loan",
                    TH: "Ga Thái Lan",
                    VN: "Trạm việt nam",
                    PH: "Ga Philippines",
                    BR: "Ga Brazil"
                }
            }, Fn = {http: {500: "Hệ thống đang bận, vui lòng thử lại sau", 200: "Hoạt động thành công"}}, Mn = {
                backgroundRemoval: "Bản đồ một cú nhấp chuột",
                pictureBeautification: "Làm đẹp hình ảnh",
                qRCodeProduction: "Sản xuất mã QR",
                imageCompression: "Nén hình ảnh",
                keywordAnalysis: "Phân tích từ khóa",
                googleTrends: "Xu hướng của Google",
                bannerMaker: "Thiết kế poster",
                watermarkCropping: "Cắt thủy ấn"
            }, Dn = {
                usingHelp: "Sử dụng trợ giúp",
                feedback: "Vấn đề phản hồi",
                problemDescription: "Vui lòng mô tả vấn đề hoặc đề xuất của bạn, chúng tôi sẽ theo dõi kịp thời để giải quyết",
                feedbackType: "Loại phản hồi",
                aboutExtension: "Giới thiệu về plugin",
                qq: "Nhóm trao đổi QQ chính thức",
                exitAccount: "Thoát tài khoản",
                member: "Thành viên bạc",
                lasting: "Vĩnh viễn",
                submit: "Gửi",
                problem: "Vấn đề",
                suggest: "Gợi ý",
                missingRequiredParameters: "Vui lòng điền vào loại phản hồi và mô tả",
                contact: "Thông tin liên lạc",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, Rn = {
                shopeeSiteList: [{
                    site: "Đài Loan (người bán hàng lục địa)",
                    url: "https://xiapi.xiapibuy.com/"
                }, {
                    site: "Đài Loan (người bán hàng địa phương)",
                    url: "https://shopee.tw"
                }, {
                    site: "Malaysia (người bán hàng lục địa)",
                    url: "https://my.xiapibuy.com/"
                }, {
                    site: "Malaysia (người bán hàng địa phương)",
                    url: "https://shopee.com.my"
                }, {
                    site: "Indonesia (người bán lục địa)",
                    url: "https://id.xiapibuy.com/"
                }, {
                    site: "Indonesia (người bán hàng địa phương)",
                    url: "https://shopee.co.id"
                }, {
                    site: "Thái Lan (người bán lục địa)",
                    url: "https://th.xiapibuy.com/"
                }, {
                    site: "Thái Lan (người bán hàng địa phương)",
                    url: "https://shopee.co.th"
                }, {
                    site: "Singapore (người bán hàng lục địa)",
                    url: "https://sg.xiapibuy.com/"
                }, {
                    site: "Singapore (người bán hàng địa phương)",
                    url: "https://shopee.sg"
                }, {
                    site: "Việt Nam (người bán hàng lục địa)",
                    url: "https://vn.xiapibuy.com/"
                }, {
                    site: "Việt Nam (người bán hàng địa phương)",
                    url: "https://shopee.vn"
                }, {
                    site: "Philippines (người bán hàng lục địa)",
                    url: "https://ph.xiapibuy.com/"
                }, {
                    site: "Philippines (người bán hàng địa phương)",
                    url: "https://shopee.ph"
                }, {
                    site: "Brazil (người bán đại lục)",
                    url: "https://br.xiapibuy.com/"
                }, {site: "Brazil (Người bán hàng địa phương)", url: "https://shopee.com.br/"}],
                tw: "Đài Loan",
                sg: "Singapore",
                my: "Malaysia",
                ph: "Philippines",
                id: "Indonesia",
                th: "Thái Lan",
                vn: "Việt nam",
                order: "Da tôm- {countryName} - thông báo đặt hàng",
                offer: "Da tôm- {countryName} -Thông báo hàng hóa",
                activity: "Da tôm- {countryName} - thông báo về tên",
                evaluation: "Da tôm- {countryName} - thông báo đánh giá",
                orderMessage: "Cửa hàng ({shopName}) có thông báo đơn hàng mới (đơn hàng mới / giao hàng / hủy đơn hàng / tin nhắn nói chuyện), vui lòng kiểm tra xem!",
                offerMessage: "Cửa hàng ({shopName}) có thông báo sản phẩm mới (Xóa / Quá hạn xóa), vui lòng chú ý!",
                activityMessage: "Cửa hàng ({shopName}) có tin tức mới (Theo dõi / Thích), vui lòng kiểm tra!",
                evaluationMessage: "Cửa hàng ({shopName}) có đánh giá mới, vui lòng kiểm tra!"
            }, jn = {
                all: "Chọn cửa hàng",
                authorization: "Cửa hàng ủy quyền",
                type: "Loại công cụ",
                activationCode: "Mã kích hoạt",
                inActivation: "Đang hoạt động..",
                activateNow: "Kích hoạt ngay",
                requiredParameter: "Phải nhập",
                necessaryInformation: "Vui lòng điền thông tin cần thiết",
                permanentMemberTip: "Tài khoản này là thành viên thường trực của Brushing Elf và không cần phải kích hoạt lại.",
                shopFollowers: "Công cụ đánh răng",
                activationS: "Kích hoạt thành công, phiên bản vĩnh viễn",
                activationSTime: "Kích hoạt thành công, thời gian kết thúc dịch vụ: {time}",
                nonAuthMessage: 'Cửa hàng không được ủy quyền, vui lòng đi trước <a target="_blank" href={shopAuthUrl}>{name}</a> Ràng buộc',
                shopActivationSTimeis: "Tên cửa hàng: {shopName} Kết thúc dịch vụ: {time}",
                submitTip: "Nếu đã mua trong hệ thống, bỏ qua bước này và sử dụng trực tiếp."
            }, Bn = {
                shopFollowers: "Hướng dẫn sử dụng cọ bột",
                exchangeCenter: "Trung tâm tỷ giá",
                chatToolkit: "Shopee Chat",
                productBoost: "Thời gian",
                generalSettings: "Cài đặt chung",
                rewardHall: "Hội trường khen thưởng",
                collectPinDuoDuo: "Chi thêm bộ sưu tập",
                purchaseOrder: "Đơn đặt hàng",
                sendMessageInBulk: "Nhắn tin nhóm",
                imageDownload: "Tải hình ảnh"
            }, $n = {
                attentionFans: "Chú ý đến người hâm mộ cửa hàng",
                attentionFansTip: 'Nhấp vào "Theo dõi người hâm mộ cửa hàng" trong menu, sau đó nhấp vào Brush Powder Wizard để bắt đầu theo dõi người hâm mộ.',
                cancelFans: "Hủy bỏ người hâm mộ cửa hàng",
                bootOperation: 'Nhấp vào<a href="{followingUrl}" target="_blank" title="Vệ sinh cửa hàng">Vệ sinh cửa hàng</a>, sau đó nhấp vào trình hướng dẫn bột cọ để mở quạt.',
                storeInformation: "Lưu trữ thông tin",
                storeName: "Tên cửa hàng",
                commodity: "Hàng hóa",
                responseRate: "Tỷ lệ phản hồi trò chuyện",
                evaluation: "Đánh giá",
                cancellationRate: "Tỷ lệ hủy",
                fan: "Quạt",
                attention: "Chú ý",
                score: "Chưa có xếp hạng",
                count: "{shopStarScore} ({shopStarCount}Một)",
                unsubscribe: "Hủy theo dõi",
                unsubscribeLabel: "Số lượng không theo dõi",
                unsubscribePlaceholder: "Mặc định là 800",
                turnOnUnFollow: "Mở cổng",
                turnOnUnFollowPending: "Đang chạy, bấm Hủy để đóng",
                doNotClose: "Không đóng trang này",
                error: "Hệ thống Shopee đang bận, vui lòng làm mới trang và thử lại",
                unSubStart: "[Bắt đầu]: Chuẩn bị thực hiện tác vụ tự động",
                unSubWait: "[Đợi]: Mô phỏng hoạt động của trình duyệt thực, sẵn sàng chuyển tiếp trang",
                unSubWaitNoData: "[Đợi]: Không có dữ liệu người theo dõi",
                unSubEndReadyClose: "[Kết thúc]: Tự động xóa đã bị hủy, sẵn sàng chấm dứt tác vụ",
                unSubEndClose: "[Hết]: Hủy bỏ sự chú ý đã bị chấm dứt",
                unSubEndCloseSystemBusy: "[Kết thúc]: Người dùng chưa đăng nhập hoặc hệ thống đang bận",
                unSubEndComplete: "[Kết thúc]: Nhiệm vụ đã hoàn thành",
                unSubSuccess: "[Tắt]: {name} thành công",
                unSubSkipLogin: "[Bỏ qua]: Vui lòng đăng nhập vào trang mua sắm da tôm",
                unSubSkip: "[Bỏ qua]: {name} không thể cất cánh",
                followFans: "Theo dõi người hâm mộ",
                subPosition: "Vị trí bắt đầu của sự chú ý tự động",
                subDefault: "Mặc định từ cái đầu tiên",
                subQuantityLabel: "Số lượng người theo dõi tự động",
                subscribePlaceholder: "Mặc định là 800",
                filterSeller: "Người bán bộ lọc",
                subSellersNumber: "Số lượng người bán",
                subSellersNumberPlaceholder: "Mặc định là 50",
                subLastLoginTime: "Lần đăng nhập cuối cùng",
                subLastLoginTimeDefault: "Mặc định là ít hơn 30 ngày",
                subLastLoginTimeDays: "Ngày trước",
                subNumberOfEvaluations: "Số lượng đánh giá",
                subNumberOfEvaluationsDefault: "Đánh giá mặc định hơn 1 lần",
                subEvaluationsTime: "Thời đại",
                subNumberOfFollowers: "Số lượng người theo dõi",
                subNumberOfFollowersDefault: "Sự chú ý mặc định cho hơn 1 người dùng",
                subNumberOfFollowersUnit: "Thời đại",
                turnOnAttentionBtn: "Bật sự chú ý",
                turnOnAttentionBtnPending: "Chạy, bấm để hủy theo dõi",
                subStartFollow: "[Bắt đầu]: Chuẩn bị thực hiện một nhiệm vụ chú ý tự động",
                subEndFollow: "[Kết thúc]: Tự động chú ý bị hủy, sẵn sàng chấm dứt tác vụ",
                subEndFollowCompleted: "[Kết thúc]: Nhiệm vụ đã hoàn thành",
                subEndFollowStop: "[Hết]: Tự động chú ý đã bị chấm dứt",
                subEndFollowEnd: "[Hết]: Cuối cùng, không có người hâm mộ cửa hàng",
                subEndFollowEndUpperLimitStore: "[Hết]: Số lượng mối quan tâm của cửa hàng đã đạt đến giới hạn trên và không thể tiếp tục theo dõi.",
                subEndFollowEndUpperLimit: "[Hết]: Hôm nay sự chú ý của nhóm đã đạt đến giới hạn trên và không thể tiếp tục theo dõi.",
                subEndFollowEndWaitSim: "[Đợi]: Mô phỏng hoạt động của trình duyệt thực, sẵn sàng để trang xuống",
                subSkipFollow: "[Bỏ qua]: {name} có thể theo dõi",
                subSkipFollowNotLogin: "[Bỏ qua]: Da tôm hiện chưa được đăng ký và bạn không thể chú ý!",
                subSkipFollowAlreadyConcerned: "[Bỏ qua]: {name} đã theo dõi",
                subSkipFollowIsSeller: "[Bỏ qua]: {name} là người bán có các mặt hàng {count}",
                subSkipFollowLastLogin: "[Bỏ qua]: {name} không được đăng nhập quá {day} ngày",
                subSkipFollowPeople: "[Bỏ qua]: {name} nhỏ hơn {minFollowingTotal}",
                subSkipFollowEvaluation: "[Bỏ qua]: {name} có ít hơn {minEvalvalTotal} nhận xét",
                subSkipFollowDays: "[Bỏ qua]: {name} đã theo dõi trong ba ngày, không chú ý",
                subSkipFollowSuccess: "[Theo dõi]: {name} thành công",
                followingUserInvalid: "[Bỏ qua]: {name} Người dùng không hợp lệ (đã ngừng, đã xóa, v.v.)",
                early: "Giai đoạn đầu",
                mid: "Trung hạn",
                late: "Trễ",
                earlyIntroduction: "Tăng nhanh bột, tăng số lượng người hâm mộ trong cửa hàng, và tăng sự phổ biến của cửa hàng. (Bạn có thể tự điều chỉnh các điều kiện lọc)",
                midIntroduction: "Ngày càng quan tâm đến người mua thực, quạt cửa hàng quy đổi ra đơn đặt hàng. (Bạn có thể tự điều chỉnh các điều kiện lọc)",
                lateIntroduction: "Người mua tích cực chú ý, để tăng cường các fan đặt tỷ lệ chuyển đổi. (Bạn có thể tự điều chỉnh các điều kiện lọc)",
                UnFollowCap: "Hủy theo dõi giới hạn ngày hôm nay",
                syncXiapiTip: "Không đăng nhập trang mua hàng của shopee ({hostname}) vui lòng nhấp vào nút bên dưới",
                autoFollow: "Tự động làm theo",
                autoUnfollow: "Tự động cất cánh",
                followTheDynamicList: "Theo dõi danh sách động",
                sendMessageInBulk: "Nhắn tin nhóm",
                recentFollowYou: "Theo dõi bạn gần đây",
                selectAll: "Chọn tất cả"
            }, zn = {
                currentSite: "Trang web hiện tại",
                targetCurrencyLabel: "Vui lòng chọn loại tiền mục tiêu chuyển đổi tỷ giá hối đoái",
                theSameCurrencyTip: "Tiền tệ trang web hiện tại giống như tiền tệ chuyển đổi và không thể được lưu",
                currencyList: [{site: "Trung quốc (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "Đài Loan ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "Malaysia (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "Indonesia（Rp）",
                    currencyCode: "IDR",
                    currencyTag: "Rp"
                }, {site: "Việt nam (₫)", currencyCode: "VND", currencyTag: "₫"}, {
                    site: "Thái Lan (฿)",
                    currencyCode: "THB",
                    currencyTag: "฿"
                }, {site: "Philippines (₱)", currencyCode: "PHP", currencyTag: "₱"}, {
                    site: "Singapore ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "Hoa Kỳ ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "Brazil（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "Tiền tệ",
                clickOpen: "Mở",
                noLongerDisplay: "Tắt máy"
            }, Un = {
                sellerLanguage: "Ngôn ngữ người bán",
                selectLanguageLabel: "Chọn ngôn ngữ",
                buyerLanguage: "Ngôn ngữ người mua",
                openChatLabel: "Có nên mở trò chuyện trò chuyện không",
                buttonPrompt: "Nhấn Shift + Enter Bọc",
                messageTranslate: "Tin nhắn dịch",
                sendButton: "Dịch và gửi",
                languageList: [{name: "Tiếng Trung (Đơn giản hóa)", code: "zh-CN"}, {
                    name: "Trung Quốc (truyền thống)",
                    code: "zh-TW"
                }, {name: "Tiếng anh (US)", code: "en"}, {name: "Indonesia (Indonesia)", code: "id"}, {
                    name: "Thái Lan",
                    code: "th"
                }, {name: "Việt nam", code: "vi"}, {
                    name: "Malay (địa phương Malaysia)",
                    code: "ms"
                }, {name: "Tagalog (địa phương ở Philippines)", code: "tl"}, {name: "Bồ Đào Nha (Brazil)", code: "pt"}],
                openShopeeDefaultBtn: "Có bật nút thông báo mặc định của Shopee không",
                orderWeChatGetFullFeature: "Đặt hàng WeChat để hiển thị bản dịch đầy đủ"
            }, Hn = {
                dataCollection: "Thu thập dữ liệu",
                repeatLabel: "Không lặp lại bộ sưu tập trong vòng một ngày",
                navigationSettings: "Cài đặt menu điều hướng (<6 bài)",
                navigationSettingsLabel: "Vui lòng chọn menu điều hướng của chương trình",
                navigationItems: [{name: "Trung tâm bán hàng", id: 1}, {
                    name: "Bán hàng của tôi",
                    id: 3
                }, {name: "Trò chuyện mới", id: 7}, {name: "Cửa hàng trước", id: 4}, {
                    name: "Vệ sinh cửa hàng",
                    id: 6
                }, {name: "Hàng của tôi", id: 2}, {name: "Người hâm mộ cửa hàng", id: 5}, {
                    name: "Phân loại cửa hàng",
                    id: 8
                }, {name: "Hoạt động tiếp thị", id: 9}, {name: "Tín dụng của tôi", id: 10}, {
                    name: "Ví của tôi",
                    id: 11
                }, {name: "Dữ liệu của tôi", id: 12}, {name: "Cài đặt cửa hàng", id: 13}],
                syncAccount: "Đồng bộ hóa tài khoản",
                syncTip: 'Để giải quyết vấn đề mà xiapibuy.com không thể đăng nhập, vui lòng nhấp vào nút "Đồng bộ hóa" trước khi shopee.cn Trung tâm bán hàng Trung Quốc hạ cánh',
                syncBtn: "Trạng thái đăng nhập đồng bộ",
                syncErrorTip: "Chưa đăng nhập shopee.cn Trung tâm người bán, không thể đồng bộ hóa",
                collectSetTitle: "Cài đặt mua lại",
                whetherToCollectDiscountLabel: "Có nên thu giá chiết khấu",
                collectStockSetLabel: "Thu thập cài đặt hàng tồn kho",
                collectRealStock: "Thu thập cổ phiếu thật",
                collectFixStock: "Thu thập cổ phiếu cố định",
                selelctPricingStrategies: "Mẫu giá",
                notificationTitle: "Cài đặt thông báo",
                neverShowMessageNotifications: "Shutdown",
                otherFeature: "Khác",
                commonFeature: "Chung",
                networkLine: "Mạng",
                networkLineChina: "Trung Quốc",
                networkLineWorld: "Quốc tế",
                jumpPageTips: "Sau 3 giây, trang sẽ chuyển sang {url}",
                syncLoginTips: "Vui lòng sử dụng mật khẩu tài khoản cửa hàng để đăng nhập, không phải đăng nhập tài khoản mẹ, đăng nhập tài khoản mẹ không thể được đồng bộ hóa.",
                goLocalMain: "Bây giờ bạn đã đăng nhập vào phiên bản mới của trung tâm người bán, bạn cần đăng nhập vào trang web quầy lễ tân địa phương."
            }, Yn = {
                sellerCenter: "Trung tâm bán hàng",
                myProducts: "Hàng của tôi",
                mySales: "Bán hàng của tôi",
                shopHome: "Cửa hàng trước",
                shopFollower: "Người hâm mộ cửa hàng",
                shopUnfollow: "Vệ sinh cửa hàng",
                newVersionChat: "Trò chuyện mới",
                shopCategories: "Phân loại cửa hàng",
                marketingCenter: "Hoạt động tiếp thị",
                myIncome: "Tín dụng của tôi",
                myWallet: "Ví của tôi",
                myData: "Dữ liệu của tôi",
                shopSettings: "Cài đặt cửa hàng",
                purchaseOrder: "Đơn đặt hàng",
                myFans: "Người hâm mộ của tôi"
            }, Gn = {
                notPurchased: "Công cụ chưa đăng ký, không thể được sử dụng",
                serviceExpired: "Thời gian phục vụ đã hết hạn:{time}",
                notShopeePage: "Vui lòng vào trang mua sắm da tôm để tiếp tục hoạt động",
                notLoginShopee: "Chưa đăng nhập vào Trung tâm người bán Shopee",
                notLoginShopeeMainUrl: 'Không đăng nhập "xiapibuy.com" ， vui lòng nhấp vào nút "Đồng bộ hóa" trong bảng bên phải',
                unauthorized: "Cửa hàng của trung tâm người bán Shopee không được ủy quyền, vui lòng truy cập {name} để liên kết.",
                shopAuthorization: "Ràng buộc ngay lập tức",
                notOrdered: "Ứng dụng này chưa được đặt hàng. Vui lòng truy cập erp để đặt hàng ứng dụng.",
                goToERP: "Đặt hàng ngay"
            }, Vn = {
                title: "Đi và chiến đấu rất nhiều bộ sưu tập",
                collectDesc: "Bắt đầu thu thập: Nhấp vào mục để chuyển đến trang chi tiết, sau đó nhấp vào nút thu thập ở góc dưới bên phải."
            }, Wn = {
                collectTo: "Sưu tầm{name}",
                batchCollectTo: "Mua lại hàng loạt{name}",
                findSource: "Tìm nguồn cung cấp",
                followFans: "Chú ý đến người hâm mộ cửa hàng",
                viewShop: "Xem cửa hàng",
                beingCollected: "Đang được thu thập",
                collected: "Sưu tầm",
                successfulCollection: "Mua lại thành công",
                successfulOperation: "Hoạt động thành công",
                successfulCollectionTip: "Đã thu thập thành công, bạn có thể truy cập {dir} của Keyou Cloud ERP sau đó.",
                successfulOperationTip: "Hoạt động thành công, bạn có thể truy cập {dir} của đám mây khách hàng ERP sau này.",
                collectedTip: "Mục này đã được thu thập ngày hôm nay và có thể được xem tại {dir} của Keyou Cloud ERP",
                collectionPage: "Trang bộ sưu tập sản phẩm",
                sources1688: "1688 nguồn chi phí thấp",
                batchAcquisitionPanel: "Được thu thập, thành công{successedNum}Thất bại{failedNum}Một",
                batchAcquisitionCompleted: "Sau khi bộ sưu tập hoàn thành, tổng số bộ sưu tập{total}Hàng hóa, thành công{successedNum}Thất bại{failedNum}Một",
                notOrderedTip: "Không đặt hàng ứng dụng này, xin vui lòng đi {msg} Nâng cấp thành viên vàng",
                collectErr: "Bộ sưu tập thất bại, vui lòng làm mới trang và thử lại",
                operationFailed: "Hoạt động thất bại",
                collectFailTips: 'Bộ sưu tập không thành công, vui lòng đăng nhập vào "{host}" và thử thu thập lại',
                batchCollectShopTo: "Thu thập cửa hàng cho {name}",
                getShopItemCount: "Truy xuất số lượng sản phẩm của cửa hàng",
                waitOtherShop: "Chờ các cửa hàng khác hoàn thành bộ sưu tập",
                collectingShop: 'Trong quá trình thu thập, tổng số {total} mục đã được thu thập, {successedNum} thành công và {failNum} không thành công, <a href="javascript:void 0" class="sf-go-collection-box"> Bắt đầu vào hộp bộ sưu tập để xem </a>',
                notFindItems: "Không có sản phẩm nào được tìm thấy trong cửa hàng này",
                collectionShopFail: "Bộ sưu tập cửa hàng không thành công"
            }, Kn = {
                addToBoost: "Thêm vào đầu thời gian",
                removeFromBoost: "Xóa khỏi đầu thời gian",
                boosting: "Thời gian đã được thêm vào",
                addingToBoostList: "Thêm vào danh sách hàng đầu...",
                addSuccessful: "Thêm thời gian để đặt đầu thành công",
                upperLimit: "Danh sách hàng đầu đã đạt 5 mũ"
            }, qn = {
                accountPoints: "Tài khoản tín dụng",
                instantRecharge: "Nạp tiền ngay lập tức",
                myTask: "Nhiệm vụ của tôi",
                rewardTask: "Nhiệm vụ khen thưởng",
                myTaskTip1: "Người bán da tôm bắt đầu phần thưởng dưới dạng điểm thưởng để tìm kiếm sự giúp đỡ từ người khác và hoàn thành hiệu quả các hoạt động của cửa hàng.",
                myTaskTip2: "Nhiệm vụ phần thưởng có tính xác thực và bảo mật và bảo vệ sự nghẹt thở của người bán, tránh hiệu quả rò rỉ dữ liệu và hành vi xấu của người khác.",
                rewardTaskTip1: "Hoàn thành phần thưởng của người khác có thể giúp người bán khác hoàn thành các hoạt động của cửa hàng trong khi kiếm được điểm.",
                rewardTaskTip2: "Nhiệm vụ phần thưởng có tính xác thực và bảo mật và bảo vệ sự nghẹt thở của người bán, tránh hiệu quả rò rỉ dữ liệu và hành vi xấu của người khác.",
                createdTask: "Bắt đầu một nhiệm vụ",
                fetchTask: "Nhiệm vụ tìm kiếm",
                lookTask: "Tìm kiếm một nhiệm vụ...",
                lookTaskTip: "Không đóng trang này và ứng dụng khi tác vụ được thực thi.",
                integral: "Điểm",
                startTask: "Nhấn vào đây để hoàn thành",
                shop: "Cửa hàng:",
                executing: "Thực hiện nhiệm vụ",
                finished: "Đã hoàn thành",
                cannotTakeTaskTip: "Tay chậm, nhiệm vụ đã được người khác nhặt lên.~",
                showNoTaskTip: "Không tìm thấy gì~",
                showCanNotTakeTaskTip: "Vui lòng vào trang đầu da tôm để làm điều này.~",
                addTask: {
                    publishTask: "Nhiệm vụ xuất bản",
                    taskType: "Loại nhiệm vụ",
                    likeGrade: "Điểm khen thưởng duy nhất",
                    fanspoint: "Điểm thưởng của người hâm mộ",
                    releaseNow: "Xuất bản ngay",
                    taskTarget: "Mục tiêu nhiệm vụ",
                    targetCount: "Số lượng mục tiêu",
                    targetPage: "Số trang đích",
                    pleaseTickTerms: "Vui lòng đánh dấu vào các điều khoản dịch vụ!",
                    like: "Thích",
                    Fan: "Quạt",
                    generalOffers: "Hàng hóa tổng hợp",
                    hotOffers: "Hàng hóa phổ biến nhất",
                    newestOffers: "Sản phẩm mới nhất",
                    designatedOffer: "Sản phẩm được chỉ định",
                    targetUrl: "Liên kết mục tiêu",
                    mustNumber: "Phải là số nguyên dương",
                    mustShopeeOffer: "Vui lòng nhập một liên kết sản phẩm tôm trang web hiện tại hợp lệ",
                    insufficientBalance: "Số dư không đủ",
                    releaseSuccess: "Phát hành thành công",
                    positiveIntegerDecimal: "Phải là số nguyên dương hoặc số thập phân",
                    noItmeTip: "Không có sản phẩm trên trang này."
                }
            }, Xn = {
                importantTipsTitle: "Lưu ý quan trọng",
                importantTipsText: "Không mở một cửa sổ mới trong quá trình đặt hàng để tránh mất dữ liệu",
                orderInfo: "Thông tin đặt hàng",
                orderNo: "Số thứ tự",
                price: "Số tiền",
                productTotal: "Tổng số sản phẩm",
                messageToSeller: "Tin nhắn của người mua",
                remakes: "Ghi chú người bán",
                currentOrderAssociatedProducts: "Đơn hàng hiện tại liên quan",
                sku: "SKU",
                skuCode: "Mã SKU",
                count: "Số lượng",
                currentNotPurchaseOrder: "Hiện tại không có đơn đặt hàng"
            }, Qn = {
                purchaseOrderNumber: "SỐ ĐẶT HÀNG",
                kyyOrderNumber: "SỐ ĐƠN HÀNG KEYOUYUN",
                orderNumber: "SỐ ĐẶT HÀNG: {platformOrderNo}",
                kyyOrderNoRequired: "Số thứ tự KeYouYun là bắt buộc",
                orderAssociatedTips: "Bạn có chắc chắn muốn liên kết đơn hàng này với đơn hàng KEYOUYUN không?",
                associatedToERP: "Liên kết với đơn hàng KeYouYun KHÔNG",
                syncPlatformOrderTips: "Số thứ tự nền tảng:<b>{platformOrderNo}</b><br/>Số hậu cần:<b>{expressNumber}</b><br/>Bạn có chắc chắn nó có liên quan đến gói tương ứng?",
                getOrderLogisticsInformation: "Nhận thông tin hậu cần đặt hàng"
            }, Jn = n("c973"), Zn = n("3acf"), eo = {vLoadList: Jn, sendMsgToFans: Zn}, to = n("0ead"), no = {
                collectionBox: "Bộ sưu tập hộp",
                localCollectionBoxGoods: "Hàng thu gom nội địa",
                note: "Ghi chú",
                maxNumNote: "Số lượng mục được lưu trữ tối đa trong hộp bộ sưu tập cục bộ là {num}. Nếu vượt quá số lượng, nó không thể được lưu trữ.",
                restStorable: "Số lượng còn lại lưu trữ",
                tiao: "Bài báo",
                clearUselessData: "Xóa dữ liệu vô dụng lịch sử khi cần thiết",
                keepLastData: "Giữ dữ liệu {num} gần đây",
                deleteAll: "Xóa hết",
                all: "Tất cả",
                goKeyouYun: "Nhấp để truy cập {keyouyun} để xem các sản phẩm được thu thập",
                collectUrlError: "Thu thập dữ liệu không chính xác, vui lòng kiểm tra xem URL bộ sưu tập có thể được truy cập bình thường không!",
                linkCannotCollect: "Liên kết không thể được thu thập",
                maxCollectNot: "Số lượng bộ sưu tập vượt quá giới hạn lưu trữ tối đa và không thể được thu thập. Vui lòng xóa dữ liệu vô dụng lịch sử",
                goodsExist: "Sản phẩm đã tồn tại, lặp lại bộ sưu tập",
                collectFormLabel: "Bộ sưu tập sản phẩm, vui lòng nhập URL sản phẩm, nhiều URL có trả lại vận chuyển",
                startCollect: "Bắt đầu thu",
                toCollectResult: "Xem kết quả mua lại",
                urlError: "Lỗi liên kết: {url}",
                collectResult: "Thu thập kết quả",
                storeLocalNote: "Kết quả bộ sưu tập này chỉ tồn tại trên máy tính hiện tại, nếu bạn cần chỉnh sửa, vui lòng nhấn vào {keyouyun} ",
                collectStatus: "Tình trạng mua lại",
                collecting: "Sưu tập",
                collectDone: "Bộ sưu tập hoàn thành",
                collectTotal: "Tổng số bộ sưu tập",
                collectSuccess: "Bộ sưu tập thành công",
                collectFail: "Bộ sưu tập thất bại",
                collectFailDetail: "Chi tiết thất bại",
                close: "Đóng",
                goodsName: "tên sản phẩm",
                source: "nguồn",
                status: "trạng thái",
                search: "Tìm kiếm",
                success: "Sự thành công",
                fail: "Sự thất bại",
                batchDel: "Xóa hàng loạt",
                questionDel: "Xác nhận xóa?",
                batchPushToKeYouYun: "Batch đẩy tới {keyouyun}",
                rowsPerPage: "Hàng trên mỗi trang",
                del: "Xóa bỏ",
                copy: "Sao chép",
                pushSuccess: "Đẩy thành công",
                pushFail: "Đẩy thất bại",
                retry: "Thử lại",
                selectText: "{length} mục được chọn, tổng số {total} mục",
                selectAll: "Chọn tất cả",
                antiSelect: "Chống bầu cử",
                index: "Số sê-ri",
                fromPlatform: "Nền tảng sở hữu",
                image: "Hình ảnh",
                goodsUrl: "Địa chỉ hàng hóa",
                pushDone: "Đẩy xong",
                copyed: "Sao chép vào clipboard",
                copyFail: "Sao chép thất bại"
            }, oo = {
                commodityHistoricalData: "Dữ liệu lịch sử hàng hóa",
                addedTime: "Đã thêm thời gian",
                totalSold: "Tổng doanh số",
                skusHistoricalSold: "Dữ liệu lịch sử bán hàng của thông số kỹ thuật sản phẩm",
                lastMonth: "Tháng này",
                currentMonthData: "Dữ liệu của tháng",
                sold: "Bán hàng",
                viewCount: "Lượt xem",
                conversionRate: "Tỷ lệ chuyển đổi",
                category: "thể loại",
                price: "Giá bán",
                lastOneMonth: "Gần một tháng",
                lastTwoMonth: "Gần hai tháng",
                lastThreeMonth: "Gần ba tháng",
                custome: "Tùy chỉnh"
            }, ro = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: Ln,
                country: In,
                errors: Fn,
                apps: Mn,
                common: Nn,
                set: Dn,
                shopee: Rn,
                activation: jn,
                appList: Bn,
                brushPowder: $n,
                exchange: zn,
                chat: Un,
                generalSettings: Hn,
                sidebar: Yn,
                appCenter: Gn,
                collect: Wn,
                top: Kn,
                rewardHall: qn,
                appCollectPdd: Vn,
                appPurchaseOrder: Xn,
                purchaseOrder: Qn,
                components: eo,
                imageDownload: to,
                collectionBox: no,
                movablePin: oo
            }, io = {
                name: "Keyou Cloud ERP Lintas Batas Asia Tenggara",
                logo: "KeYouYun",
                slogan: "Distribusi satu klik, terjemahan akurat, permanen gratis",
                back: "Kembali",
                version: "Versi permanen",
                success: "Sukses",
                failure: "Kegagalan",
                skip: "Lewati",
                save: "Simpan",
                startBoost: "Buka atas",
                stopBoost: "Lepas sematan",
                login: "Login",
                loginTip: "Silakan masuk ke sistem ERP KeYouYun, jika Anda telah masuk, harap segarkan halaman lagi",
                help: "Dokumen bantuan",
                siteList: "Daftar situs kulit udang:",
                comingSoon: "Segera hadir",
                loginNow: "Masuk sekarang",
                notLogIn: "Tidak masuk ke ERP Youyou Cloud Southeast Asia Cross-border",
                addShop: "Tambahkan toko",
                downloadImg: "Unduh gambar",
                readAndAgree: "Baca dan setujui",
                kyyServicePrivacy: "Perjanjian Layanan Cloud Keyou",
                button: {cancel: "Batalkan", ok: "Konfirmasi", sync: "Sinkronkan", query: "Pertanyaan"},
                downloadVideo: "Unduh video",
                orderCenter: "Pusat pesanan ERP Keyou cloud",
                notOrderedTip: "Jika Anda belum memesan aplikasi ini, silakan kunjungi pelanggan cloud ERP untuk memesan",
                unableCollect: "Tolong, tidak bisa mengumpulkan{go}Memesan cloud pelanggan ERP",
                go: "Pergi ke",
                unorderMultiSotreManagement: "Tidak dipesan, silakan pergi ke KeYouYun untuk memesan!",
                plaseGoToKeYouYunOrderTool: "buka Keyou Cloud untuk memesan {toolName}",
                fansElves: "Shop Followers",
                imgAndVedioHelper: "Asisten Video Gambar",
                orderForFullFeature: 'Pesan "{toolName}" dan alami fungsionalitas penuh',
                messageNotification: "Pemberitahuan pesan",
                weChat: "WeChat",
                actionSuceess: "Operasi berhasil",
                actionFail: "Operasi gagal",
                dontCloseThePage: "Jangan tutup antarmuka ini",
                boostWarning: "Penyesuaian teknologi kulit udang, versi lama dari pinning biasa yang bebas digunakan telah menghentikan pemeliharaan. Silakan pesan pinning versi baru. ",
                syncXiapiTip: "Tidak masuk ke halaman pembelian shopee ({hostname}) ， silakan klik tombol di bawah ini",
                gotoOrderApp: "Klik untuk membeli"
            }, ao = {shop: "Berbelanja", apps: "Aplikasi", setting: "Pengaturan", activation: "Aktifkan"}, so = {
                MY: "Malaysia",
                SG: "Singapura",
                ID: "Indonesia",
                TW: "Taiwan",
                TH: "Thailand",
                VN: "Vietnam",
                PH: "Filipina",
                BR: "Brasil",
                site: {
                    MY: "Stasiun Malaysia",
                    SG: "Stasiun Singapura",
                    ID: "Stasiun Indonesia",
                    TW: "Stasiun Taiwan",
                    TH: "Stasiun Thailand",
                    VN: "Stasiun Vietnam",
                    PH: "Stasiun Filipina",
                    BR: "Stasiun Brasil"
                }
            }, lo = {http: {500: "Sistem sedang sibuk, silakan coba lagi nanti", 200: "Operasi yang sukses"}}, co = {
                backgroundRemoval: "Peta sekali klik",
                pictureBeautification: "Keindahan gambar",
                qRCodeProduction: "Produksi kode QR",
                imageCompression: "Kompresi gambar",
                keywordAnalysis: "Analisis kata kunci",
                googleTrends: "Google Trends",
                bannerMaker: "Desain poster",
                watermarkCropping: "Pemotongan tanda air"
            }, uo = {
                usingHelp: "Gunakan bantuan",
                feedback: "Umpan balik masalah",
                problemDescription: "Tolong jelaskan masalah atau saran Anda, kami akan menindaklanjuti pada waktunya untuk menyelesaikannya",
                feedbackType: "Jenis umpan balik",
                aboutExtension: "Tentang plugin",
                qq: "Kelompok pertukaran QQ resmi",
                exitAccount: "Keluar dari akun",
                member: "Anggota perak",
                lasting: "Permanen",
                submit: "Kirim",
                problem: "Masalah",
                suggest: "Saran",
                missingRequiredParameters: "Silakan isi jenis dan deskripsi umpan balik",
                contact: "Informasi kontak",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, po = {
                shopeeSiteList: [{
                    site: "Taiwan (penjual kontinental)",
                    url: "https://xiapi.xiapibuy.com/"
                }, {site: "Taiwan (penjual lokal)", url: "https://shopee.tw"}, {
                    site: "Malaysia (penjual kontinental)",
                    url: "https://my.xiapibuy.com/"
                }, {
                    site: "Malaysia (penjual lokal)",
                    url: "https://shopee.com.my"
                }, {
                    site: "Indonesia (Penjual Kontinental)",
                    url: "https://id.xiapibuy.com/"
                }, {
                    site: "Indonesia (penjual lokal)",
                    url: "https://shopee.co.id"
                }, {
                    site: "Thailand (Penjual Kontinental)",
                    url: "https://th.xiapibuy.com/"
                }, {
                    site: "Thailand (penjual lokal)",
                    url: "https://shopee.co.th"
                }, {
                    site: "Singapura (Penjual Kontinental)",
                    url: "https://sg.xiapibuy.com/"
                }, {site: "Singapura (penjual lokal)", url: "https://shopee.sg"}, {
                    site: "Vietnam (penjual kontinental)",
                    url: "https://vn.xiapibuy.com/"
                }, {site: "Vietnam (penjual lokal)", url: "https://shopee.vn"}, {
                    site: "Filipina (penjual kontinental)",
                    url: "https://ph.xiapibuy.com/"
                }, {site: "Filipina (penjual lokal)", url: "https://shopee.ph"}, {
                    situs: "Brazil (penjual daratan)",
                    url: "https://br.xiapibuy.com/"
                }, {situs: "Brazil (Penjual Lokal)", url: "https://shopee.com.br/"}],
                tw: "Taiwan",
                sg: "Singapura",
                my: "Malaysia",
                ph: "Filipina",
                id: "Indonesia",
                th: "Thailand",
                vn: "Vietnam",
                order: "Kulit udang-{countryName}-Pemberitahuan pesanan",
                offer: "Kulit udang-{countryName}-Pemberitahuan komoditas",
                activity: "Kulit udang-{countryName}-Pemberitahuan dinamis",
                evaluation: "Kulit udang-{countryName}-Pemberitahuan evaluasi",
                orderMessage: "Berbelanja ({shopName}) Ada pesan pesanan baru (pesanan baru / pengiriman / pembatalan pesanan / pesan obrolan), harap memperhatikan tampilan！",
                offerMessage: "Berbelanja ({shopName}) Ada berita produk baru (penghapusan Under / Overdue), harap perhatikan！",
                activityMessage: "Berbelanja ({shopName}) Punya pesan dinamis baru (Ikuti / Suka), silakan periksa!",
                evaluationMessage: "Berbelanja ({shopName}) Punya pesan ulasan baru, harap perhatikan untuk melihat！"
            }, fo = {
                all: "Pilih toko",
                authorization: "Shopee toko resmi",
                type: "Jenis alat",
                activationCode: "Kode aktivasi",
                inActivation: "Aktif..",
                activateNow: "Aktifkan sekarang",
                requiredParameter: "Harus masuk",
                necessaryInformation: "Silakan isi informasi yang diperlukan",
                permanentMemberTip: "Akun ini adalah anggota tetap Elf Sapu dan tidak perlu diaktifkan lagi.",
                shopFollowers: "Alat menyikat",
                activationS: "Aktivasi berhasil, versi permanen",
                activationSTime: "Aktivasi berhasil, waktu selesai layanan: {time}",
                nonAuthMessage: 'Toko tidak diotorisasi, silakan pergi dulu <a target="_blank" href={shopAuthUrl}>{name}</a> Mengikat',
                shopActivationSTimeis: "Nama toko: {shopName} Akhir layanan: {time}",
                submitTip: "Jika sudah membeli dalam sistem, lewati langkah ini dan gunakan secara langsung."
            }, mo = {
                shopFollowers: "Wisaya serbuk sikat",
                exchangeCenter: "Pusat nilai tukar",
                chatToolkit: "Shopee Chat",
                productBoost: "Pengaturan waktu",
                generalSettings: "Pengaturan umum",
                rewardHall: "Balai hadiah",
                collectPinDuoDuo: "Habiskan lebih banyak koleksi",
                purchaseOrder: "Pesanan pembelian",
                sendMessageInBulk: "Olahpesan grup",
                imageDownload: "Unduhan gambar"
            }, ho = {
                attentionFans: "Perhatikan penggemar toko",
                attentionFansTip: 'Klik "Ikuti Penggemar Toko" di menu, lalu klik pada Brush Powder Wizard untuk mulai mengikuti penggemar.',
                cancelFans: "Batalkan penggemar toko",
                bootOperation: 'Klik<a href="{followingUrl}" target="_blank" title="Pembersihan toko">Pembersihan toko</a>, lalu klik pada wisaya bubuk kuas untuk membuka kipas.',
                storeInformation: "Simpan informasi",
                storeName: "Nama toko",
                commodity: "Barang",
                responseRate: "Tingkat respons obrolan",
                evaluation: "Evaluasi",
                cancellationRate: "Tingkat pembatalan",
                fan: "Kipas angin",
                attention: "Perhatian",
                score: "Belum ada peringkat",
                count: "{shopStarScore} ({shopStarCount}Satu)",
                unsubscribe: "Berhenti mengikuti",
                unsubscribeLabel: "Jumlah yang tidak diikuti",
                unsubscribePlaceholder: "Standarnya adalah 800",
                turnOnUnFollow: "Buka gerbang",
                turnOnUnFollowPending: "Berjalan, klik Batal untuk menutup",
                doNotClose: "Jangan tutup halaman ini",
                error: "Sistem Shopee sedang sibuk, segarkan halaman dan coba lagi",
                unSubStart: "[Mulai]: Bersiap untuk melakukan tugas otomatis",
                unSubWait: "[Tunggu]: Simulasikan operasi browser sungguhan, siap untuk maju ke depan",
                unSubWaitNoData: "[Tunggu]: Tidak ada data pengikut",
                unSubEndReadyClose: "[Akhir]: Kliring otomatis telah dibatalkan, siap untuk mengakhiri tugas",
                unSubEndClose: "[Akhir]: Batalkan perhatian telah dihentikan",
                unSubEndCloseSystemBusy: "[Akhir]: Pengguna tidak masuk atau sistem sedang sibuk",
                unSubEndComplete: "[Akhir]: Tugas telah selesai",
                unSubSuccess: "[Mati]: {name} sukses",
                unSubSkipLogin: "[Lewati]: Silakan masuk ke halaman belanja kulit udang",
                unSubSkip: "[Lewati]: {name} tidak bisa lepas landas",
                followFans: "Ikuti penggemar",
                subPosition: "Posisi awal perhatian otomatis",
                subDefault: "Default dari yang pertama",
                subQuantityLabel: "Jumlah pengikut otomatis",
                subscribePlaceholder: "Standarnya adalah 800",
                filterSeller: "Penjual filter",
                subSellersNumber: "Jumlah penjual",
                subSellersNumberPlaceholder: "Standarnya adalah 50",
                subLastLoginTime: "Waktu login terakhir",
                subLastLoginTimeDefault: "Defaultnya kurang dari 30 hari",
                subLastLoginTimeDays: "Beberapa hari yang lalu",
                subNumberOfEvaluations: "Jumlah evaluasi",
                subNumberOfEvaluationsDefault: "Evaluasi standar lebih dari 1 kali",
                subEvaluationsTime: "Waktu",
                subNumberOfFollowers: "Jumlah pengikut",
                subNumberOfFollowersDefault: "Perhatian default untuk lebih dari 1 pengguna",
                subNumberOfFollowersUnit: "Waktu",
                turnOnAttentionBtn: "Hidupkan perhatian",
                turnOnAttentionBtnPending: "Berjalan, klik untuk membatalkan ikuti",
                subStartFollow: "[Mulai]: Bersiap untuk melakukan tugas perhatian otomatis",
                subEndFollow: "[Akhir]: Perhatian otomatis dibatalkan, siap untuk mengakhiri tugas",
                subEndFollowCompleted: "[Akhir]: Tugas telah selesai",
                subEndFollowStop: "[Akhir]: Perhatian otomatis telah dihentikan",
                subEndFollowEnd: "[Akhir]: Pada akhirnya, tidak ada penggemar toko",
                subEndFollowEndUpperLimitStore: "[Akhir]: Jumlah kekhawatiran toko telah mencapai batas atas dan tidak dapat terus mengikuti.",
                subEndFollowEndUpperLimit: "[Akhir]: Perhatian hari ini telah mencapai batas atas dan tidak dapat terus mengikuti.",
                subEndFollowEndWaitSim: "[Tunggu]: Simulasikan operasi browser sungguhan, siap untuk turun halaman",
                subSkipFollow: "[Lewati]: {name} tidak bisa mengikuti",
                subSkipFollowNotLogin: "[Lewati]: Kulit udang saat ini tidak terdaftar, dan Anda tidak dapat memperhatikan!",
                subSkipFollowAlreadyConcerned: "[Lewati]: {name} telah diikuti",
                subSkipFollowIsSeller: "[Lewati]: {name} adalah penjual dengan {count} item",
                subSkipFollowLastLogin: "[Lewati]: {name} tidak masuk lebih dari {hari} hari",
                subSkipFollowPeople: "[Lewati]: {name} kurang dari {minFollowingTotal}",
                subSkipFollowEvaluation: "[Lewati]: {name} memiliki kurang dari {minEvaluationTotal} komentar",
                subSkipFollowDays: "[Lewati]: {name} telah mengikuti dalam tiga hari, tidak memperhatikan",
                subSkipFollowSuccess: "[Ikuti]: {name} sukses",
                followingUserInvalid: "[Lewati]: {name} Pengguna tidak valid (dihentikan, dihapus, dll.)",
                early: "Tahap awal",
                mid: "Jangka menengah",
                late: "Terlambat",
                earlyIntroduction: "Cepat tingkatkan bubuk, tingkatkan jumlah penggemar di toko, dan tingkatkan popularitas toko. (Anda dapat menyesuaikan sendiri kondisi filter)",
                midIntroduction: "Berangsur-angsur fokus pada pembeli nyata dan mengonversi penggemar toko menjadi pesanan. (Anda dapat menyesuaikan sendiri kondisi filter)",
                lateIntroduction: "Fokus pada pembeli aktif dan tingkatkan tingkat konversi pesanan penggemar. (Anda dapat menyesuaikan sendiri kondisi filter)",
                UnFollowCap: "Batalkan ikuti batas hari ini",
                syncXiapiTip: "Tidak masuk ke halaman pembelian shopee ({hostname}) ， silakan klik tombol di bawah ini",
                autoFollow: "Secara otomatis mengikuti",
                autoUnfollow: "Lepas Otomatis",
                followTheDynamicList: "Ikuti daftar dinamis",
                sendMessageInBulk: "Olahpesan grup",
                recentFollowYou: "Ikuti Anda baru-baru ini",
                selectAll: "Pilih semua"
            }, go = {
                currentSite: "Situs saat ini",
                targetCurrencyLabel: "Silakan pilih mata uang target konversi konversi nilai tukar",
                theSameCurrencyTip: "Mata uang situs saat ini sama dengan mata uang konversi dan tidak dapat disimpan",
                currencyList: [{site: "Cina (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "Taiwan ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "Malaysia (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "Indonesia（Rp）",
                    currencyCode: "IDR",
                    currencyTag: "Rp"
                }, {site: "Vietnam (₫)", currencyCode: "VND", currencyTag: "₫"}, {
                    site: "Thailand (฿)",
                    currencyCode: "THB",
                    currencyTag: "฿"
                }, {site: "Filipina (₱)", currencyCode: "PHP", currencyTag: "₱"}, {
                    site: "Singapura ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "Amerika Serikat ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "Brazil（R$）",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "Mata uang",
                clickOpen: "Buka",
                noLongerDisplay: "Shut Down"
            }, bo = {
                sellerLanguage: "Bahasa penjual",
                selectLanguageLabel: "Pilih bahasa",
                buyerLanguage: "Bahasa pembeli",
                openChatLabel: "Apakah akan membuka obrolan obrolan",
                buttonPrompt: "Tekan Shift + Enter untuk membungkus",
                messageTranslate: "Terjemahan pesan",
                sendButton: "Terjemahkan dan kirim",
                languageList: [{name: "Mandarin (Aks. Sederhana)", code: "zh-CN"}, {
                    name: "Mandarin (Tradisional)",
                    code: "zh-TW"
                }, {name: "Bahasa inggris (US)", code: "en"}, {
                    name: "Orang indonesia",
                    code: "id"
                }, {name: "Thailand (Thailand)", code: "th"}, {
                    name: "Vietnam (Vietnam)",
                    code: "vi"
                }, {name: "Melayu (Malaysia lokal)", code: "ms"}, {
                    name: "Tagalog (lokal di Filipina)",
                    code: "tl"
                }, {name: "Portugis (Brasil)", code: "pt"}],
                openShopeeDefaultBtn: "Apakah akan mengaktifkan tombol pesan default Shopee",
                orderWeChatGetFullFeature: "Pesan Tn. Obrolan untuk menunjukkan terjemahan lengkap"
            }, vo = {
                dataCollection: "Pengumpulan data",
                repeatLabel: "Jangan ulangi koleksi dalam satu hari",
                navigationSettings: "Pengaturan menu navigasi (< 6 items)",
                navigationSettingsLabel: "Silakan pilih menu navigasi pertunjukan",
                navigationItems: [{name: "Pusat penjual", id: 1}, {name: "Penjualan saya", id: 3}, {
                    name: "Obrolan baru",
                    id: 7
                }, {name: "Toko meja depan", id: 4}, {name: "Pembersihan toko", id: 6}, {
                    name: "Barang saya",
                    id: 2
                }, {name: "Penggemar toko", id: 5}, {name: "Klasifikasi toko", id: 8}, {
                    name: "Kegiatan pemasaran",
                    id: 9
                }, {name: "Kredit saya", id: 10}, {name: "Dompet saya", id: 11}, {
                    name: "Data saya",
                    id: 12
                }, {name: "Pengaturan toko", id: 13}],
                syncAccount: "Sinkronisasi akun",
                syncTip: 'Pecahkan xiapibuy.com Tidak dapat masuk, silakan klik tombol "Sinkronisasi" sebelumnya shopee.cn Pusat Penjual Pendaratan China',
                syncBtn: "Status login sinkron",
                syncErrorTip: "Belum masuk shopee.cn Pusat Penjual, tidak dapat disinkronkan",
                collectSetTitle: "Pengaturan akuisisi",
                whetherToCollectDiscountLabel: "Apakah akan mengumpulkan harga diskon",
                collectStockSetLabel: "Kumpulkan pengaturan inventaris",
                collectRealStock: "Kumpulkan stok asli",
                collectFixStock: "Kumpulkan stok tetap",
                selelctPricingStrategies: "Templat penetapan harga",
                notificationTitle: "Pengaturan Pemberitahuan",
                neverShowMessageNotifications: "Shut Down",
                otherFeature: "Lainnya",
                commonFeature: "Umum",
                networkLine: "Jaringan",
                networkLineChina: "Cina",
                networkLineWorld: "Internasional",
                jumpPageTips: "Setelah 3 halaman akan melompat ke {url}",
                syncLoginTips: "Silakan gunakan kata sandi akun toko untuk masuk, bukan login akun orang tua, login akun orang tua tidak dapat disinkronkan.",
                goLocalMain: "Anda sekarang masuk ke versi baru pusat penjual, Anda harus masuk ke situs meja depan lokal."
            }, xo = {
                sellerCenter: "Pusat penjual",
                myProducts: "Barang saya",
                mySales: "Penjualan saya",
                shopHome: "Toko meja depan",
                shopFollower: "Penggemar toko",
                shopUnfollow: "Pembersihan toko",
                newVersionChat: "Obrolan baru",
                shopCategories: "Klasifikasi toko",
                marketingCenter: "Kegiatan pemasaran",
                myIncome: "Kredit saya",
                myWallet: "Dompet saya",
                myData: "Data saya",
                shopSettings: "Pengaturan toko",
                purchaseOrder: "Pesanan pembelian",
                myFans: "Penggemar saya"
            }, yo = {
                notPurchased: "Alat yang tidak berlangganan, tidak dapat digunakan",
                serviceExpired: "Waktu layanan telah kedaluwarsa:{time}",
                notShopeePage: "Silakan buka halaman belanja kulit udang untuk melanjutkan operasi",
                notLoginShopee: "Tidak masuk ke Pusat Penjual Shopee",
                notLoginShopeeMainUrl: 'Tidak masuk "xiapibuy.com", silakan klik tombol "Sinkronisasi" di panel kanan',
                unauthorized: "Toko pusat penjual Shopee tidak diotorisasi, silakan kunjungi {name} untuk mengikat.",
                shopAuthorization: "Segera mengikat",
                notOrdered: "Aplikasi ini belum dipesan. Buka erp untuk memesan aplikasi.",
                goToERP: "Pesan sekarang"
            }, ko = {
                title: "Pergi dan bertarung banyak koleksi",
                collectDesc: "Mulai mengumpulkan: Klik pada item untuk pergi ke halaman detail, lalu klik tombol koleksi di sudut kanan bawah."
            }, wo = {
                collectTo: "Dikumpulkan ke {name}",
                batchCollectTo: "Koleksi kumpulan ke {name}",
                findSource: "Temukan sumber persediaan",
                followFans: "Perhatikan penggemar toko",
                viewShop: "Lihat toko",
                beingCollected: "Dikumpulkan",
                collected: "Telah dikumpulkan",
                successfulCollection: "Akuisisi yang sukses",
                successfulOperation: "Operasi yang sukses",
                successfulCollectionTip: "Berhasil dikumpulkan, Anda dapat pergi ke {msg} dari Keyou Cloud ERP nanti.",
                successfulOperationTip: "Operasi berhasil, Anda dapat pergi ke {msg} dari cloud pelanggan ERP nanti.",
                collectedTip: "Item ini telah dikumpulkan hari ini dan dapat dilihat di {msg} dari Keyou Cloud ERP",
                collectionPage: "Halaman pengumpulan produk",
                sources1688: "1688 sumber murah",
                batchAcquisitionPanel: "Dalam proses akuisisi, berhasil {successedNum}, gagal {failedNum}",
                batchAcquisitionCompleted: "Setelah pengumpulan selesai, total {total} item dikumpulkan, {successedNum}, {failedNum}",
                notOrderedTip: "Jika Anda belum memesan aplikasi ini, silakan kunjungi {msg} untuk meningkatkan keanggotaan Gold Anda.",
                collectErr: "Koleksi gagal, segarkan halaman dan coba lagi",
                operationFailed: "Operasi gagal",
                collectFailTips: 'Koleksi gagal, silakan masuk ke "{host}" dan coba kumpulkan lagi',
                batchCollectShopTo: "Kumpulkan toko ke {name}",
                getShopItemCount: "Mengambil kuantitas produk toko",
                waitOtherShop: "Tunggu toko lain melengkapi koleksinya",
                collectingShop: 'Dalam proses pengumpulan, total {total} item telah terkumpul, {successedNum} berhasil dan {failedNum}, <a href="javascript:void 0" class="sf-go-collection-box"> Buka ke kotak koleksi untuk melihat </a>',
                notFindItems: "Tidak ada produk yang ditemukan di toko ini",
                collectionShopFail: "Koleksi toko gagal"
            }, _o = {
                addToBoost: "Tambahkan ke atas waktu",
                removeFromBoost: "Hapus dari atas waktunya",
                boosting: "Waktu telah ditambahkan",
                addingToBoostList: "Menambah daftar teratas...",
                addSuccessful: "Tambahkan waktu untuk mengatur atas berhasil",
                upperLimit: "Daftar teratas telah mencapai 5 caps"
            }, So = {
                accountPoints: "Kredit akun",
                instantRecharge: "Isi ulang instan",
                myTask: "Misi saya",
                rewardTask: "Tugas hadiah",
                myTaskTip1: "Penjual kulit udang memulai hadiah dalam bentuk poin hadiah untuk mencari bantuan dari orang lain dan menyelesaikan operasi toko secara efisien.",
                myTaskTip2: "Tugas hadiah memiliki keaslian dan keamanan, dan melindungi mati lemas penjual, secara efektif menghindari kebocoran data dan perilaku buruk orang lain.",
                rewardTaskTip1: "Menyelesaikan hadiah orang lain dapat membantu penjual lain menyelesaikan operasi toko sambil mendapatkan poin.",
                rewardTaskTip2: "Tugas hadiah memiliki keaslian dan keamanan, dan melindungi mati lemas penjual, secara efektif menghindari kebocoran data dan perilaku buruk orang lain.",
                createdTask: "Memulai tugas",
                fetchTask: "Misi pencarian",
                lookTask: "Mencari tugas...",
                lookTaskTip: "Jangan tutup halaman dan aplikasi ini saat tugas dijalankan.",
                integral: "Poin",
                startTask: "Klik untuk menyelesaikan",
                shop: "Toko:",
                executing: "Eksekusi tugas",
                finished: "Selesai",
                cannotTakeTaskTip: "Tangannya lambat, tugas telah diambil oleh orang lain.~",
                showNoTaskTip: "Tidak ada yang ditemukan~",
                showCanNotTakeTaskTip: "Silakan buka halaman depan kulit udang untuk melakukan ini.~",
                addTask: {
                    publishTask: "Publikasikan tugas",
                    taskType: "Jenis tugas",
                    likeGrade: "Poin penghargaan pujian tunggal",
                    fanspoint: "Poin hadiah penggemar tunggal",
                    releaseNow: "Terbitkan sekarang",
                    taskTarget: "Tujuan misi",
                    targetCount: "Kuantitas target",
                    targetPage: "Nomor halaman target",
                    pleaseTickTerms: "Silakan centang persyaratan layanan!",
                    like: "Seperti",
                    Fan: "Kipas angin",
                    generalOffers: "Barang umum",
                    hotOffers: "Barang paling populer",
                    newestOffers: "Produk terbaru",
                    designatedOffer: "Produk yang ditunjuk",
                    targetUrl: "Tautan target",
                    mustNumber: "Harus berupa bilangan bulat positif",
                    mustShopeeOffer: "Silakan masukkan tautan produk udang situs saat ini yang valid",
                    insufficientBalance: "Saldo tidak mencukupi",
                    releaseSuccess: "Berhasil dirilis",
                    positiveIntegerDecimal: "Harus bilangan bulat positif atau desimal",
                    noItmeTip: "Tidak ada produk di halaman ini."
                }
            }, To = {
                importantTipsTitle: "Catatan penting",
                importantTipsText: "Jangan membuka jendela baru selama proses pemesanan untuk menghindari kehilangan data",
                orderInfo: "Informasi pemesanan",
                orderNo: "Nomor pesanan",
                price: "Jumlah",
                productTotal: "Total jumlah produk",
                messageToSeller: "Pesan pembeli",
                remakes: "Catatan Penjual",
                currentOrderAssociatedProducts: "Pesanan saat ini terkait produk",
                sku: "SKU",
                skuCode: "Kode SKU",
                count: "Jumlah",
                currentNotPurchaseOrder: "Saat ini tidak ada pesanan pembelian"
            }, Eo = {
                purchaseOrderNumber: "ORDER NUMBER NO",
                kyyOrderNumber: "KEYOUYUN ORDER NO",
                orderNumber: "ORDER NO: {platformOrderNo}",
                kyyOrderNoRequired: "Nomor Pesanan KeYouYun Diperlukan",
                orderAssociatedTips: "Apakah Anda yakin ingin mengaitkan pesanan ini dengan pesanan KeYouYun?",
                associatedToERP: "Tautan ke KeYouYun Order",
                syncPlatformOrderTips: "Nomor pesanan platform:<b>{platformOrderNo}</b><br/>Nomor logistik:<b>{expressNumber}</b><br/>Apakah Anda yakin itu terkait dengan paket yang sesuai?",
                getOrderLogisticsInformation: "Mendapatkan informasi logistik pesanan"
            }, Co = n("a1b4"), Ao = n("784e"), Oo = {vLoadList: Co, sendMsgToFans: Ao}, Po = n("6d9d"), No = {
                collectionBox: "Kotak koleksi",
                localCollectionBoxGoods: "Barang kotak koleksi tempatan",
                note: "Nota",
                maxNumNote: "Jumlah maksimum item yang disimpan di kotak koleksi tempatan adalah {num}. Sekiranya jumlahnya terlampaui, ia tidak dapat disimpan.",
                restStorable: "Baki kuantiti yang tetap",
                tiao: "",
                clearUselessData: "Hapus data sejarah yang tidak berguna jika diperlukan",
                keepLastData: "Simpan data {num} terkini",
                deleteAll: "Memadam semua",
                all: "Semua",
                goKeyouYun: "Klik untuk pergi ke {keyouyun} untuk melihat produk yang dikumpulkan",
                collectUrlError: "Pengumpulan data tidak betul, periksa bahawa URL pengumpulan dapat diakses seperti biasa!",
                linkCannotCollect: "Pautan tidak dapat dikumpulkan",
                maxCollectNot: "Jumlah koleksi melebihi had simpanan maksimum dan tidak dapat dikumpulkan. Sila kosongkan data sejarah yang tidak berguna",
                goodsExist: "Produk sudah ada, koleksi berulang",
                collectFormLabel: "Koleksi produk tunggal, sila masukkan URL produk, berbilang URL dengan carriage return",
                startCollect: "Mulakan koleksi",
                toCollectResult: "Lihat hasil pemerolehan",
                urlError: "Ralat pautan: {url}",
                collectResult: "Kumpulkan hasil",
                storeLocalNote: "Hasil pengumpulan ini hanya ada pada komputer semasa, jika anda perlu mengedit, tekan ke {keyouyun}",
                collectStatus: "Status pemerolehan",
                collecting: "Mengumpul",
                collectDone: "Koleksi selesai",
                collectTotal: "Jumlah koleksi",
                collectSuccess: "Koleksi berjaya",
                collectFail: "Pengumpulan gagal",
                collectFailDetail: "Perincian kegagalan",
                close: "Tutup",
                goodsName: "Nama Produk",
                source: "sumber",
                status: "status",
                search: "Cari",
                success: "Kejayaan",
                fail: "Kegagalan",
                batchDel: "Penghapusan kumpulan",
                questionDel: "Sahkan padam?",
                batchPushToKeYouYun: "Batch push ke {keyouyun}",
                rowsPerPage: "Baris setiap halaman",
                del: "Padam",
                copy: "Salinan",
                pushSuccess: "Tolak berjaya",
                pushFail: "Tolak gagal",
                retry: "Cuba lagi",
                selectText: "{length} item dipilih, jumlah {total} item",
                selectAll: "Pilih semua",
                antiSelect: "Anti pilihan raya",
                index: "Nombor siri",
                fromPlatform: "Memiliki platform",
                image: "Imej",
                goodsUrl: "Alamat komoditi",
                pushDone: "Tolak selesai",
                copyed: "Disalin ke papan keratan",
                copyFail: "Salinan gagal"
            }, Lo = {
                commodityHistoricalData: "Data historis komoditas",
                addedTime: "Waktu tambahan",
                totalSold: "Total penjualan",
                skusHistoricalSold: "Data penjualan historis dari spesifikasi produk",
                lastMonth: "Bulan berjalan",
                currentMonthData: "Data bulan ini",
                sold: "Penjualan",
                viewCount: "Tampilan",
                conversionRate: "Tingkat konversi",
                category: "Kategori",
                price: "Harga",
                lastOneMonth: "Hampir sebulan",
                lastTwoMonth: "Hampir dua bulan",
                lastThreeMonth: "Hampir tiga bulan",
                custome: "Sesuaikan"
            }, Io = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: ao,
                country: so,
                errors: lo,
                apps: co,
                common: io,
                set: uo,
                shopee: po,
                activation: fo,
                appList: mo,
                brushPowder: ho,
                exchange: go,
                chat: bo,
                generalSettings: vo,
                sidebar: xo,
                appCenter: yo,
                collect: wo,
                top: _o,
                rewardHall: So,
                appCollectPdd: ko,
                appPurchaseOrder: To,
                purchaseOrder: Eo,
                components: Oo,
                imageDownload: Po,
                collectionBox: No,
                movablePin: Lo
            }, Fo = {
                name: "KeYouYun ERP",
                logo: "KeYouYun",
                slogan: "Editar uma vez, Publicar em qualquer lugar, Free Forever",
                back: "Costas",
                version: "Membro Permanente",
                success: "sucesso",
                failure: "fracasso",
                skip: "pular",
                save: "Salve",
                startBoost: "Start Boost",
                stopBoost: "Stop Boost",
                login: "Conecte-se",
                loginTip: "Por favor, logue no sistema KeYouYun ERP, se você estiver logado, por favor atualize a página novamente",
                help: "Socorro",
                siteList: "Lista de sites de compradores:",
                comingSoon: "Chegando",
                loginNow: "Conecte-se",
                notLogIn: "Não está logado no KeYouYun ERP",
                addShop: "Adicionar loja",
                readAndAgree: "Leia e concorde",
                kyyServicePrivacy: "Privacidade do Serviço KeYouYun",
                button: {cancel: "Cancelar", ok: "Confirme", sync: "Sincronizar", query: "Inquerir"},
                downloadImg: "Baixar imagem",
                downloadVideo: "Baixar video",
                orderCenter: "KeYouYun ERP Order Center",
                notOrderedTip: "Atualmente não está solicitando este aplicativo, acesse o KeYouYun ERP para solicitar",
                unableCollect: "Não é possível coletar, {vá} para o KeYouYun ERP",
                go: "ir",
                unorderMultiSotreManagement: "Gerenciamento de várias lojas desordenado, vá para Keyouyun ERP para pedir",
                plaseGoToKeYouYunOrderTool: "Não solicitado, vá para o KeYouYun para fazer o pedido!",
                fansElves: "Seguidores da loja",
                imgAndVedioHelper: "Picture Video Assistant",
                orderForFullFeature: 'Peça "{toolName}" e experimente o recurso completo',
                messageNotification: "Notificação de mensagem",
                weChat: "WeChat",
                actionSuceess: "Operação bem sucedida",
                actionFail: "Operação falhou",
                dontCloseThePage: "Não feche esta página",
                boostWarning: "O ajuste da tecnologia de pele de camarão, a versão antiga da fixação regular, que é livre de usar, interrompeu a manutenção. Encomende uma nova versão do pinning.",
                syncXiapiTip: 'Você não está logado na página inicial das peles de camarão ({hostname}), clique no botão "Status de login sincronizado" para fazer login rapidamente',
                gotoOrderApp: "Clique para comprar"
            }, Mo = {shop: "Lojas", apps: "Apps", setting: "Configurações", activation: "Ativação"}, Do = {
                MY: "Malásia",
                SG: "Cingapura",
                ID: "Indonésia",
                TW: "Taiwan",
                TH: "Tailândia",
                VN: "Vietnã",
                PH: "Filipinas",
                BR: "Brasil",
                site: {
                    MY: "Malásia",
                    SG: "Cingapura",
                    ID: "Indonésia",
                    TW: "Taiwan",
                    TH: "Tailândia",
                    VN: "Vietnã",
                    PH: "Filipino",
                    BR: "Site do Brasil"
                }
            }, Ro = {http: {500: "O sistema está ocupado, tente novamente mais tarde", 200: "Sucesso"}}, jo = {
                backgroundRemoval: "Remoção de fundo",
                pictureBeautification: "Editor de fotografia",
                qRCodeProduction: "QR Code Generator",
                imageCompression: "Image Compressor",
                keywordAnalysis: "Ferramenta de palavras-chave",
                googleTrends: "Tendências do Google",
                bannerMaker: "Banner Maker",
                watermarkCropping: "Corte de marca d'água "
            }, Bo = {
                usingHelp: "Socorro",
                feedback: "Comentários",
                problemDescription: "Descreva seu problema ou sugestão ...",
                feedbackType: "Tipo de feedback",
                aboutExtension: "Sobre",
                qq: "Grupo QQ",
                exitAccount: "Saída",
                member: "Membro",
                lasting: "Livre",
                submit: "Enviar",
                problem: "Problema",
                suggest: "Suggest",
                missingRequiredParameters: "Faltam parâmetros necessários.",
                contact: "Contato",
                serviceEmail: "kf@izhiliu.com",
                faceBook: "Facebook"
            }, $o = {
                shopeeSiteList: [{
                    site: "Taiwan (vendedor transfronteiriço)",
                    url: "https://xiapi.xiapibuy.com/"
                }, {
                    site: "Taiwan (vendedor local)",
                    url: "https://shopee.tw"
                }, {
                    site: "Malásia (vendedor transfronteiriço)",
                    url: "https://my.xiapibuy.com/"
                }, {
                    site: "Malásia (vendedor local)",
                    url: "https://shopee.com.my"
                }, {
                    site: "Indonésia (vendedor transfronteiriço)",
                    url: "https://id.xiapibuy.com/"
                }, {
                    site: "Indonésia (vendedor local)",
                    url: "https://shopee.co.id"
                }, {
                    site: "Tailândia (vendedor transfronteiriço)",
                    url: "https://th.xiapibuy.com/"
                }, {
                    site: "Tailândia (vendedor local)",
                    url: "https://shopee.co.th"
                }, {
                    site: "Singapura (vendedor transfronteiriço)",
                    url: "https://sg.xiapibuy.com/"
                }, {
                    site: "Singapura (vendedor local)",
                    url: "https://shopee.sg"
                }, {
                    site: "Vietname (vendedor transfronteiriço)",
                    url: "https://vn.xiapibuy.com/"
                }, {
                    site: "Vietname (vendedor local)",
                    url: "https://shopee.vn"
                }, {
                    site: "Filipinas (vendedor transfronteiriço)",
                    url: "https://ph.xiapibuy.com/"
                }, {site: "Filipinas (vendedor local)", url: "https://shopee.ph"}, {
                    site: "Brasil (vendedor do continente)",
                    url: "https://br.xiapibuy.com/"
                }, {site: "Brasil (vendedor local)", url: "https://shopee.com.br/"}],
                tw: "Taiwan",
                sg: "Singapore",
                my: "Malaysia",
                ph: "Philippines",
                id: "Indonesia",
                th: "Thailand",
                vn: "Vietnam",
                order: "Shopee-{countryName}-Order Updates",
                offer: "Shopee-{countryName}-Listing Updates",
                activity: "Shopee-{countryName}-Activity",
                evaluation: "Shopee-{countryName}-Rating Updates",
                orderMessage: "You have an order notification from ({shopName}) , e.g. To Ship, Pending Return, Pending Cancellation.",
                offerMessage: "You have an listing notification from ({shopName}) , e.g. Suspended Product, Banned Product, Sold Out Product.",
                activityMessage: "You have an activity notification from ({shopName}) , e.g. Buyer Following, Buyer Liked.",
                evaluationMessage: "You have a rating notification from ({shopName}) , e.g. Pending Rating, Buyer Rated. "
            }, zo = {
                all: "Selecionar tudo",
                authorization: "Shopee Shops",
                type: "Tipo de ferramenta",
                activationCode: "Código de ativação",
                inActivation: "ativando ...",
                activateNow: "Ativar instantaneamente",
                requiredParameter: "O campo é obrigatório.",
                necessaryInformation: "Faltam parâmetros necessários.",
                permanentMemberTip: "Essa conta é permanente e não precisa ser ativada novamente.",
                shopFollowers: "Ferramenta de seguidores da loja",
                activationS: "Ativação bem-sucedida, a conta é permanente.",
                activationSTime: "Ativação bem-sucedida, horário de término do serviço: {time}",
                nonAuthMessage: 'A loja não está autorizada, vá para <a target="_blank" href="{shopAuthUrl}"> {name} </a>',
                shopActivationSTimeis: "Nome da loja: {shopName} Fim do serviço: {time}",
                submitTip: "Se já comprou no sistema, pule esta etapa e use-a diretamente. "
            }, Uo = {
                shopFollowers: "Seguidores da loja",
                exchangeCenter: "Exchange Center",
                chatToolkit: "Chat do comprador",
                productBoost: "Impulso do produto",
                generalSettings: "Configurações Gerais",
                rewardHall: "Task Center ",
                collectPinDuoDuo: "PinDuoDuo Collect ",
                purchaseOrder: "Ordem de Compra",
                sendMessageInBulk: "Mensagens em grupo",
                imageDownload: "Download da imagem"
            }, Ho = {
                attentionFans: "Siga os fãs da loja",
                attentionFansTip: 'Clique em "Seguir fãs da loja" no menu e, em seguida, clique em "Assistente de ventilador em pó" para começar a seguir os fãs.',
                cancelFans: "Cancelar fãs da loja",
                bootOperation: 'Clique em <a href="{followingUrl}" target="_blank" title=" Limpador de compras"> Limpador de lojas </a> e clique no Assistente de pincel para abrir e cancelar os fãs.',
                storeInformation: "Informações da loja",
                storeName: "Nome da loja",
                commodity: "Mercadorias",
                responseRate: "Taxa de bate-papo",
                evaluation: "Avaliação",
                cancellationRate: "Taxa de cancelamento",
                fan: "Silk",
                attention: "Seguindo",
                score: "Ainda não existem classificações",
                count: "{shopStarScore} ({shopStarCount})",
                unsubscribe: "Deixar de seguir",
                unsubscribeLabel: "Número de descontinuidades",
                unsubscribePlaceholder: "800 'por padrão",
                turnOnUnFollow: "Open Take Off",
                turnOnUnFollowPending: "Em execução, clique em Cancelar para sair",
                doNotClose: "Não feche esta página",
                error: "O sistema de compradores está ocupado, atualize a página e tente novamente",
                unSubStart: "[Iniciar]: Pronto para executar a tarefa de liberação automática",
                unSubWait: "[Aguardando]: simula a operação de um navegador real, pronto para avançar",
                unSubWaitNoData: "[Aguardando]: sem dados do seguidor",
                unSubEndReadyClose: "[Fim]: a liberação automática foi cancelada, pronta para terminar a missão",
                unSubEndClose: "[Fim]: Deixou de seguir",
                unSubEndCloseSystemBusy: "[Fim]: o usuário não está logado ou o sistema está ocupado",
                unSubEndComplete: "[Fim]: a tarefa foi concluída",
                unSubSuccess: "[Decolar]: {nome} sucesso",
                unSubSkipLogin: "[Pular]: faça login na página de compras de peles de camarão",
                unSubSkip: "[Ignorar]: {nome} não pode aceitar o passe",
                followFans: "Siga os fãs",
                subPosition: "Posição inicial automática",
                subDefault: "Comece do primeiro por padrão",
                subQuantityLabel: "Número de seguidores automáticos",
                subscribePlaceholder: "800 'por padrão",
                filterSeller: "Filtrar vendedor",
                subSellersNumber: "Número de vendedores",
                subSellersNumberPlaceholder: "O padrão é 50",
                subLastLoginTime: "Última hora de login",
                subLastLoginTimeDefault: "O padrão é inferior a 30 dias",
                subLastLoginTimeDays: "Dias atrás",
                subNumberOfEvaluations: "Número de comentários",
                subNumberOfEvaluationsDefault: "Classificação padrão superior a 1",
                subEvaluationsTime: "Times",
                subNumberOfFollowers: "Seguidores",
                subNumberOfFollowersDefault: "Mais de 1 usuário por padrão",
                subNumberOfFollowersUnit: "Times",
                turnOnAttentionBtn: "Comece a seguir",
                turnOnAttentionBtnPending: "Em execução, clique em Deixar de seguir",
                subStartFollow: "[Iniciar]: Pronto para executar a tarefa de atenção automática",
                subEndFollow: "[Fim]: a atenção automática foi cancelada, pronta para finalizar a tarefa",
                subEndFollowCompleted: "[Fim]: a tarefa foi concluída",
                subEndFollowStop: "[Fim]: a atenção automática foi encerrada",
                subEndFollowEnd: "[Fim]: no final, não há fãs de lojas",
                subEndFollowEndUpperLimitStore: "[Fim]: o número de seguidores na loja atingiu o limite superior e os seguidores não podem continuar a seguir",
                subEndFollowEndUpperLimit: "[Fim]: o número de seguidores atingiu o limite superior hoje e não pode mais ser seguido",
                subEndFollowEndWaitSim: "[Aguardando]: simula a operação de um navegador real, pronto para descer na página",
                subSkipFollow: "[Ignorar]: {nome} não pode seguir",
                subSkipFollowNotLogin: "[Pular]: Você não está logado no momento, não pode seguir!",
                subSkipFollowAlreadyConcerned: "[Skip]: {name} seguiu",
                subSkipFollowIsSeller: "[Skip]: {name} é um vendedor com {count} itens",
                subSkipFollowLastLogin: "[Skip]: {name} não está conectado há mais de {day} dias,",
                subSkipFollowPeople: "[Ignorar]: {name} segue menos de {minFollowingTotal} pessoas",
                subSkipFollowEvaluation: "[Skip]: {name} possui menos de {minEvaluationTotal} comentários",
                subSkipFollowDays: "[Skip]: {name} foi seguido por três dias e não será seguido por enquanto",
                subSkipFollowSuccess: "[Seguir]: {nome} sucesso",
                followingUserInvalid: "[Ignorar]: {nome} usuário inválido (suspenso, excluído etc.)",
                early: "Early",
                mid: "Período",
                late: "Late",
                earlyIntroduction: "Aumente rapidamente o número de fãs, aumente o número de fãs na loja e aumente a popularidade da loja. (Pode ajustar as condições do filtro por conta própria)",
                midIntroduction: "Gradualmente, concentre-se em compradores reais e transforme os fãs da loja em pedidos. (Pode ajustar as condições do filtro por conta própria)",
                lateIntroduction: "Concentre-se em compradores ativos e aumente as taxas de conversão de pedidos de fãs. (Pode ajustar as condições do filtro por conta própria)",
                UnFollowCap: "Hoje, o não-atingido atingiu o teto",
                syncXiapiTip: 'Você não está logado na página inicial das peles de camarão ({hostname}), clique no botão "Status de login sincronizado" para fazer login rapidamente',
                autoFollow: "Seguir automaticamente",
                autoUnfollow: "Descolagem automática",
                followTheDynamicList: "Siga a lista dinâmica",
                sendMessageInBulk: "Mensagens em grupo",
                recentFollowYou: "Segui-lo recentemente",
                selectAll: "selecionar tudo"
            }, Yo = {
                currentSite: "Site atual",
                targetCurrencyLabel: "Selecione a moeda de destino",
                theSameCurrencyTip: "A moeda atual é igual à moeda de destino, não é possível salvar.",
                currencyList: [{site: "China (¥)", currencyCode: "CNY", currencyTag: "¥"}, {
                    site: "Taiwan ($)",
                    currencyCode: "TWD",
                    currencyTag: "$"
                }, {site: "Indonésia (Rp)", currencyCode: "IDR", currencyTag: "Rp"}, {
                    site: "Vietnamita (₫)",
                    currencyCode: "VND",
                    currencyTag: "₫"
                }, {site: "Tailândia (฿)", currencyCode: "THB", currencyTag: "฿"}, {
                    site: "Filipinas (₱)",
                    currencyCode: "PHP",
                    currencyTag: "₱"
                }, {site: "Malásia (RM)", currencyCode: "MYR", currencyTag: "RM"}, {
                    site: "Singapura ($)",
                    currencyCode: "SGD",
                    currencyTag: "$"
                }, {site: "Estados Unidos ($)", currencyCode: "USD", currencyTag: "$"}, {
                    site: "Brasil R $ $",
                    currencyCode: "BRL",
                    currencyTag: "R$"
                }],
                realTimePrice: "Moeda",
                clickOpen: "Aberto",
                noLongerDisplay: "Desligar"
            }, Go = {
                sellerLanguage: "Idioma do vendedor",
                selectLanguageLabel: "Selecione o idioma",
                buyerLanguage: "Idioma do comprador",
                openChatLabel: "abrir a tradução",
                messageTranslate: "Message Translate",
                buttonPrompt: "Pressione Shift + Enter para iniciar uma nova linha",
                sendButton: "Traduzir e enviar",
                languageList: [{name: "Chinês simplificado (China)", code: "zh-CN"}, {
                    name: "Chinês Tradicional (China)",
                    code: "zh-TW"
                }, {name: "Inglês (EUA)", code: "en"}, {
                    name: "Indonésia (Indonésia)",
                    code: "id"
                }, {name: "Tailandês (Tailândia)", code: "th"}, {
                    name: "Vietnamita (vietnamita)",
                    code: "vi"
                }, {name: "Malaio (local da Malásia)", code: "ms"}, {
                    name: "Tagalo (local das Filipinas)",
                    code: "tl"
                }, {name: "Português (Brasil)", code: "pt"}],
                openShopeeDefaultBtn: "Se deseja ativar o botão de mensagem padrão do Comprador",
                orderWeChatGetFullFeature: "Ordem WeChat de KeYouYun para mostrar tradução completa"
            }, Vo = {
                dataCollection: "Coleção de dados",
                repeatLabel: "Não colete repetições dentro de um dia",
                navigationSettings: "Configurações de navegação (<6 itens)",
                navigationSettingsLabel: "selecione itens",
                navigationItems: [{name: "Seller Center", id: 1}, {name: "Minhas vendas", id: 3}, {
                    name: "Novo chat",
                    id: 7
                }, {name: "Shop Home", id: 4}, {name: "Deixar de seguir", id: 6}, {
                    name: "Meus produtos",
                    id: 2
                }, {name: "Seguidores da loja", id: 5}, {name: "Categorias da loja", id: 8}, {
                    name: "Marketing Center",
                    id: 9
                }, {name: "Minha renda", id: 10}, {name: "Minha carteira", id: 11}, {
                    name: "Meus dados",
                    id: 12
                }, {name: "Configurações da loja", id: 13}],
                syncAccount: "Sincronizar conta do comprador",
                syncTip: "Clique no botão 'Sincronizar' para sincronizar o status do login com 'xiapibuy.com ' em 'seller.xx.shopee.cn '",
                syncBtn: "Sincronizar",
                syncErrorTip: "Não é possível acessar o 'shopee.cn ' vendedor, não é possível sincronizar.",
                collectSetTitle: "Coletar configurações",
                whetherToCollectDiscountLabel: "Se deseja coletar preços com desconto",
                collectStockSetLabel: "Coletar configurações de inventário",
                collectRealStock: "Coletar estoque real",
                collectFixStock: "Coletar estoque fixo",
                selelctPricingStrategies: "Estratégias de preços",
                notificationTitle: "Configurações de notificação",
                neverShowMessageNotifications: "Desligar",
                otherFeature: "Outras",
                commonFeature: "Comum",
                networkLine: "Rede",
                networkLineChina: "China",
                networkLineWorld: "Internacional",
                jumpPageTips: "Após 3 anos, a página passará para {url}",
                syncLoginTips: "Use a senha da conta da loja para efetuar login, não o login da conta pai, o login da conta pai não pode ser sincronizado.",
                goLocalMain: "Agora você está conectado à nova versão da central de vendedores, você precisa fazer login no site da recepção local."
            }, Wo = {
                sellerCenter: "Seller Center",
                myProducts: "Meus produtos",
                mySales: "Minhas vendas",
                shopHome: "Shop Home",
                shopFollower: "Seguidores da loja",
                shopUnfollow: "Deixar de seguir",
                newVersionChat: "Novo chat",
                shopCategories: "Categorias da loja",
                marketingCenter: "Marketing Center",
                myIncome: "Minha renda",
                myWallet: "Minha carteira",
                myData: "Meus dados",
                shopSettings: "Configurações da loja",
                purchaseOrder: "Ordem de Compra",
                myFans: "Meus fãs"
            }, Ko = {
                notPurchased: "Não comprado, não pode usar.",
                serviceExpired: "O serviço expirou: {time}.",
                notShopeePage: "As páginas do Shopee não podem funcionar.",
                notLoginShopee: "Não está logado no Shopee Seller Center.",
                notLoginShopeeMainUrl: 'Não faça login "xiapibuy.com"; clique no botão "Sincronizar" no painel direito',
                unauthorized: "A loja do vendedor vendedor não está autorizada, vá para {name} para vincular.",
                shopAuthorization: "Autorização de compra",
                notOrdered: "Não encomendou ou expirou, vá para o KeYouYun para comprar.",
                goToERP: "Peça agora"
            }, qo = {
                title: "Vá coletar no PinDuoDuo.",
                collectDesc: "Comece a coletar: clique no item para ir para a página de detalhes e clique no botão de coleta no canto inferior direito."
            }, Xo = {
                collectTo: "Coletar para {name}",
                batchCollectTo: "Coleta em lote para {name}",
                findSource: "Encontre fornecedor de produto",
                followFans: "Siga os seguidores da loja",
                viewShop: "Shop Home",
                beingCollected: "coletando ...",
                collected: "Foram coletados",
                successfulCollection: "Coletar com êxito",
                successfulOperation: "Operação bem sucedida",
                successfulCollectionTip: "Coleta bem-sucedida, veja os dados coletados até {msg} mais tarde",
                successfulOperationTip: "Operação bem-sucedida, veja os dados coletados até {msg} depois",
                collectedTip: "O produto foi coletado hoje, veja os dados coletados por {msg}",
                collectionPage: "Página de coleção de produtos",
                sources1688: "Fornecedor mais barato do produto",
                batchAcquisitionPanel: "Coleta de produtos, Bem-sucedido: {successedNum}, Falha: {failedNum}",
                batchAcquisitionCompleted: "Coleção concluída, Total: {total}, Bem-sucedida: {successedNum}, Falha: {failedNum}",
                notOrderedTip: "No momento, não está comprando este aplicativo, vá para {msg} para atualizar os membros Gold",
                collectErr: "A coleção falhou. Atualize a página e tente novamente",
                operationFailed: "Operação falhou",
                batchCollectShopTo: "Recolha a loja para {name}",
                getShopItemCount: "Recuperando a quantidade do produto da loja",
                waitOtherShop: "Espere que outras lojas completem a coleção",
                collectingShop: 'No processo de coleta, um total de {total} itens foram coletados, {successedNum} com sucesso e {failedNum} falhou, <a href="javascript:void 0" class="sf-go-collection-box"> Go para a caixa de coleção para ver </a>',
                notFindItems: "Nenhum produto encontrado nesta loja",
                collectionShopFail: "Falha na coleta da loja"
            }, Qo = {
                addToBoost: "Adicionar à lista de reforços",
                removeFromBoost: "Remover da Lista de Boost",
                boosting: "Impulsionar",
                addingToBoostList: "Adicionando à lista de impulso ...",
                addSuccessful: "Adicionar êxito",
                upperLimit: "Limite de aumento de produto em 5 itens."
            }, Jo = {
                accountPoints: "Crédito na conta",
                instantRecharge: "Recarga instantânea",
                myTask: "Minha tarefa",
                rewardTask: "Tarefa de recompensa",
                myTaskTip1: "Os vendedores de lojas lançam recompensas na forma de pontos de recompensa para procurar ajuda de outras pessoas e concluir com eficiência as operações da loja.",
                myTaskTip2: "A tarefa de recompensa é autêntica e segura e protege a asfixia do vendedor, evitando efetivamente o vazamento de dados e o mau comportamento de outras pessoas.",
                rewardTaskTip1: "Complete as recompensas de outros, pode ajudar outros vendedores a concluir as operações da loja e, ao mesmo tempo, ganhar pontos.",
                rewardTaskTip2: "A tarefa de recompensa é autêntica e segura e protege a asfixia do vendedor, evitando efetivamente o vazamento de dados e o mau comportamento de outras pessoas.",
                createdTask: "Tarefa criada",
                fetchTask: "Buscar Tarefa",
                lookTask: "Procurando uma tarefa ...",
                lookTaskTip: "Não feche esta página e aplicativo quando a tarefa for executada.",
                integral: "Integrante",
                startTask: "Iniciar tarefa",
                shop: "Nome da loja:",
                executing: "Executando",
                finished: "Acabado",
                cannotTakeTaskTip: "a tarefa foi escolhida por outras pessoas",
                showNoTaskTip: "Nada encontrado ~",
                showCanNotTakeTaskTip: "Por favor, vá para a frente do comprador para fazer isso ~",
                addTask: {
                    publishTask: "Publicar tarefa",
                    taskType: "Tipo de tarefa",
                    likeGrade: "Pontos de recompensa de louvor único",
                    fanspoint: "Pontos de recompensa para um único fã",
                    releaseNow: "Liberação",
                    taskTarget: "Alvo da tarefa",
                    targetCount: "Contagem de alvos",
                    targetPage: "Página de destino",
                    pleaseTickTerms: "Marque os termos de serviço!",
                    like: "gostar",
                    Fan: "Fãs",
                    generalOffers: "Mercadoria geral",
                    hotOffers: "Bens mais populares",
                    newestOffers: "Novos Produtos",
                    designatedOffer: "Produto designado",
                    targetUrl: "Alvo URL",
                    mustNumber: "Deve ser um número inteiro positivo",
                    mustShopeeOffer: "Insira um link de produto válido para o site atual válido",
                    insufficientBalance: "Saldo insuficiente",
                    releaseSuccess: "Release Success",
                    positiveIntegerDecimal: "Deve ser um número inteiro positivo ou um decimal",
                    noItmeTip: "Não há itens nesta página"
                }
            }, Zo = {
                popup: {
                    popupTitle: "Painel de plugins ShopeeFans",
                    popupIntroduction: "Clique no pequeno ícone no canto superior direito do navegador",
                    shopFeatureIntroduction: "Aqui você pode ver as lojas vinculadas no sistema Ke You Yun ERP",
                    toolFeatureIntroduction: "Nós fornecemos algumas ferramentas práticas",
                    settingFeatureIntroduction: "Aqui você pode ver a conta atual do ERP Ke You Yun e a ajuda relacionada e as opções de configuração "
                },
                sidebar: {
                    navigationBarTitle: "Barra de navegação ShopeeFans",
                    navigationBarIntroduction: "Você pode pular rapidamente para as páginas relevantes da pele do camarão da loja",
                    navigationIconIntroduction: "Clique neste ícone para expandir a lista de aplicativos",
                    appListTitle: "Lista de aplicativos do ShopeeFans",
                    appListIntroduction: "Clique no ícone para abrir o aplicativo",
                    appSettingIconIntroduction: "Clique neste ícone para abrir as configurações do aplicativo",
                    appSettingIntroduction: "Aqui você pode fazer algumas configurações para o aplicativo "
                },
                menu: {
                    functionMenuTitle: "Menu de funções ShopeeFans",
                    listFunctionMenuIntroduction: "Passe o mouse sobre as mercadorias na lista de mercadorias, o menu será exibido e clique no menu para operar adequadamente",
                    detailFunctionMenuIntroduction: "No canto inferior direito da página de detalhes do produto, um menu também será exibido "
                },
                endMessage: "Tente agora!!!",
                next: "Próxima Etapa",
                previous: "Passo anterior",
                done: "completo"
            }, er = {
                importantTipsTitle: "Important Hint",
                importantTipsText: "Do not open a new window during the order process to avoid data loss",
                orderInfo: "Order Information",
                orderNo: "Order Number",
                price: "Amount",
                productTotal: "Total number of products",
                messageToSeller: "Buyer message",
                remakes: "Seller Notes",
                currentOrderAssociatedProducts: "Current order associated product",
                sku: "SKU",
                skuCode: "SKU code",
                count: "Quantity",
                currentNotPurchaseOrder: "There are currently no purchase orders"
            }, tr = {
                purchaseOrderNumber: "PEDIDO DE COMPRA NO",
                kyyOrderNumber: "KEYOUYUN ORDER NO",
                orderNumber: "O número do pedido KeYouYun é obrigatório",
                kyyOrderNoRequired: "Por favor, preencha o número do pedido KEYOUYUN!",
                orderAssociatedTips: "Tem certeza de que deseja associar este pedido de compra ao pedido do KeYouYun?",
                associatedToERP: "Link para KeYouYun Order NO",
                syncPlatformOrderTips: "Pedido de plataforma NO: <b> {platformOrderNo} </b> <br/> Conhecimento de transporte NO: <b> {expressNumber} </b> <br/> Você tem certeza de que está relacionado ao pacote correspondente?",
                getOrderLogisticsInformation: "Obtendo informações de logística de pedidos"
            }, nr = n("cef3"), or = n("d722"), rr = {vLoadList: nr, sendMsgToFans: or}, ir = n("1ac5"), ar = {
                collectionBox: "Caixa de coleção",
                localCollectionBoxGoods: "Bens de caixa de coleta local",
                note: "Nota",
                maxNumNote: "O número máximo de itens armazenados na caixa de coleta local é {num}. Se o número for excedido, ele não poderá ser armazenado.",
                restStorable: "Quantidade armazenável restante",
                tiao: "",
                clearUselessData: "Limpar dados históricos inúteis, conforme necessário",
                keepLastData: "Manter {num} dados recentes",
                deleteAll: "Excluir tudo",
                all: "Tudo",
                goKeyouYun: "Clique para ir para {keyouyun} para visualizar os produtos coletados",
                collectUrlError: "Coleta de dados incorreta, verifique se o URL da coleção pode ser acessado normalmente!",
                linkCannotCollect: "Os links não podem ser coletados",
                maxCollectNot: "O número de coleções excede o limite máximo de armazenamento e não pode ser coletado. Limpe os dados históricos inúteis",
                goodsExist: "O produto já existe, coleção repetida",
                collectFormLabel: "Coleção de produtos únicos, insira o URL do produto, vários URLs com retorno de carro",
                startCollect: "Iniciar coleção",
                toCollectResult: "Ver resultados da aquisição",
                urlError: "Erro no link: {url}",
                collectResult: "Coletar resultados",
                storeLocalNote: "Este resultado da coleção existe apenas no computador atual. Se você precisar editar, pressione para {keyouyun}",
                collectStatus: "Status de aquisição",
                collecting: "Coletando",
                collectDone: "Coleção concluída",
                collectTotal: "Coleção total",
                collectSuccess: "Coleção de sucesso",
                collectFail: "Falha na coleção",
                collectFailDetail: "Detalhes da falha",
                close: "Perto",
                goodsName: "Nome do Produto",
                source: "fonte",
                status: "status",
                search: "Procurar",
                success: "Sucesso",
                fail: "Falha",
                batchDel: "Exclusão em lote",
                questionDel: "Confirmar exclusão?",
                batchPushToKeYouYun: "Envio em lote para {keyouyun}",
                rowsPerPage: "Linhas por página",
                del: "Excluir",
                copy: "cópia de",
                pushSuccess: "Empurre com sucesso",
                pushFail: "O envio falhou",
                retry: "Repetir",
                selectText: "{length} itens selecionados, total {total} itens",
                selectAll: "Selecionar tudo",
                antiSelect: "Anti-eleição",
                index: "Número de série",
                fromPlatform: "Possuir plataforma",
                image: "Imagem",
                goodsUrl: "Endereço de mercadoria",
                pushDone: "Push concluído",
                copyed: "Copiado para a área de transferência",
                copyFail: "Falha na cópia"
            }, sr = {
                commodityHistoricalData: "Dados históricos de commodities",
                addedTime: "Tempo adicionado",
                totalSold: "Vendas totais",
                skusHistoricalSold: "Dados históricos de vendas das especificações do produto",
                lastMonth: "Mês atual",
                currentMonthData: "Dados do mês",
                sold: "Vendas",
                viewCount: "Visualizações",
                conversionRate: "Taxa de conversão",
                category: "Categoria",
                price: "Preço",
                lastOneMonth: "Quase um mês",
                lastTwoMonth: "Quase dois meses",
                lastThreeMonth: "Quase três meses",
                custome: "Customizar"
            }, lr = {
                $vuetify: Object(xe["a"])({}, ke.a),
                tab: Mo,
                country: Do,
                errors: Ro,
                apps: jo,
                common: Fo,
                set: Bo,
                shopee: $o,
                activation: zo,
                appList: Uo,
                brushPowder: Ho,
                exchange: Yo,
                chat: Go,
                generalSettings: Vo,
                sidebar: Wo,
                appCenter: Ko,
                collect: Xo,
                top: Qo,
                rewardHall: Jo,
                appCollectPdd: qo,
                userGuide: Zo,
                appPurchaseOrder: er,
                purchaseOrder: tr,
                components: rr,
                imageDownload: ir,
                collectionBox: ar,
                movablePin: sr
            },
            cr = (me = {}, Object(ve["a"])(me, ge["p"], Xe), Object(ve["a"])(me, ge["t"], Et), Object(ve["a"])(me, ge["u"], tn), Object(ve["a"])(me, ge["r"], Pn), Object(ve["a"])(me, ge["s"], ro), Object(ve["a"])(me, ge["q"], Io), Object(ve["a"])(me, ge["o"], lr), me);
        o["default"].use(he);
        var ur = Object(be["g"])(), pr = new he({locale: ur, fallbackLocale: ge["t"], messages: cr});
        t["a"] = pr
    }, d3df: function (e, t, n) {
        var o = n("d74d");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("e31b3354", o, !0, {sourceMap: !1, shadowMode: !1})
    }, d3f4: function (e, t) {
        e.exports = function (e) {
            return "object" === typeof e ? null !== e : "function" === typeof e
        }
    }, d4e5: function (e) {
        e.exports = {
            warningForSendMessageInBulk: "กรุณาอย่าบ่อยมวลข้อความร้องเรียนจากผู้ใช้หรือระบบระบุได้อย่างง่ายดายเป็นสแปม (ซอฟต์แวร์ไม่รับผิดชอบใด ๆ )!",
            inputMessageLabel: "พิมพ์ข้อความของคุณ",
            sendOver: "{name} ส่งเรียบร้อยแล้วส่วนที่เหลือข้อความครั้ง {count}",
            sendFail: "{name} ล้มเหลวในการส่ง",
            pleaseGoToWebchat: "ไปที่แชทกุ้งดำเนินงานโดยอัตโนมัติกระโดดกลับ 3s",
            pleaseLoginShopeeMainPage: "ไปที่หน้าการประสานรัฐ xiapibuy เข้าสู่ระบบโดยอัตโนมัติกระโดดกลับ 3s",
            pleaseFillInTheMessage: "กรุณากรอกข้อมูลลงในเนื้อหาข้อความ",
            pleaseSelectUsers: "เลือกผู้ใช้",
            cancelled: "ได้ถูกยกเลิกแล้ว",
            sendDone: "เสร็จ",
            runOutOfRemainQuantity: "จำนวนที่เหลือได้หมด",
            userDisabled: "Shopee ปิดการใช้งาน {name}"
        }
    }, d53b: function (e, t) {
        e.exports = function (e, t) {
            return {value: t, done: !!e}
        }
    }, d604: function (e, t, n) {
        n("1938"), e.exports = n("a7d3").Array.isArray
    }, d722: function (e) {
        e.exports = {
            warningForSendMessageInBulk: "Por favor, não muitas vezes em massa mensagens, reclamações de usuários ou sistema facilmente identificadas como spam (software não assume qualquer responsabilidade)!",
            inputMessageLabel: "Digite sua mensagem",
            sendOver: "{name} enviada com sucesso, tempos de descanso mensagem {count}",
            sendFail: "{name} não conseguiu enviar",
            pleaseGoToWebchat: "Ir para camarão conversar opera automaticamente saltar para trás 3s",
            pleaseLoginShopeeMainPage: "Ir para sincronização página estado de login xiapibuy, automaticamente saltar para trás 3s",
            pleaseFillInTheMessage: "Por favor, preencha o conteúdo da mensagem",
            pleaseSelectUsers: "Escolha um usuário",
            cancelled: "Foi cancelada",
            sendDone: "concluído",
            runOutOfRemainQuantity: "O número remanescente tem sido esgotado",
            userDisabled: "{name} foi desativado pelo Shopee"
        }
    }, d74d: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, '.material-icons{font-family:Material Icons;font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:"liga";font-feature-settings:"liga";font-display:block}@font-face{font-family:Material Icons;font-style:normal;font-weight:400;src:url(https://cdn1.keyouyun.com/fonts/MaterialIcons-Regular.eot);src:local("Material Icons"),local("MaterialIcons-Regular"),url(https://cdn1.keyouyun.com/fonts/MaterialIcons-Regular.woff2) format("woff2"),url(https://cdn1.keyouyun.com/fonts/MaterialIcons-Regular.woff) format("woff"),url(https://cdn1.keyouyun.com/fonts/MaterialIcons-Regular.ttf) format("truetype")}', ""])
    }, d74e: function (e, t) {
        t.f = {}.propertyIsEnumerable
    }, d782: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, d876: function (e, t, n) {
        var o = n("2695"), r = n("0029").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return o(e, r)
        }
    }, d8e8: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, d9bd: function (e, t, n) {
        "use strict";

        function o(e, t, n) {
            if (n && (t = {_isVue: !0, $parent: n, $options: t}), t) {
                if (t.$_alreadyWarned = t.$_alreadyWarned || [], t.$_alreadyWarned.includes(e)) return;
                t.$_alreadyWarned.push(e)
            }
            return "[Vuetify] " + e + (t ? p(t) : "")
        }

        function r(e, t, n) {
            var r = o(e, t, n);
            null != r && console.info(r)
        }

        function i(e, t, n) {
            var r = o(e, t, n);
            null != r && console.warn(r)
        }

        function a(e, t, n) {
            var r = o(e, t, n);
            null != r && console.error(r)
        }

        function s(e, t, n, o) {
            i("'" + e + "' is deprecated, use '" + t + "' instead", n, o)
        }

        n.d(t, "b", function () {
            return r
        }), n.d(t, "c", function () {
            return i
        }), n.d(t, "a", function () {
            return a
        }), n.d(t, "d", function () {
            return s
        });
        var l = /(?:^|[-_])(\w)/g, c = function (e) {
            return e.replace(l, function (e) {
                return e.toUpperCase()
            }).replace(/[-_]/g, "")
        };

        function u(e, t) {
            if (e.$root === e) return "<Root>";
            var n = "function" === typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e || {},
                o = n.name || n._componentTag, r = n.__file;
            if (!o && r) {
                var i = r.match(/([^\/\\]+)\.vue$/);
                o = i && i[1]
            }
            return (o ? "<" + c(o) + ">" : "<Anonymous>") + (r && !1 !== t ? " at " + r : "")
        }

        function p(e) {
            if (e._isVue && e.$parent) {
                var t = [], n = 0;
                while (e) {
                    if (t.length > 0) {
                        var o = t[t.length - 1];
                        if (o.constructor === e.constructor) {
                            n++, e = e.$parent;
                            continue
                        }
                        n > 0 && (t[t.length - 1] = [o, n], n = 0)
                    }
                    t.push(e), e = e.$parent
                }
                return "\n\nfound in\n\n" + t.map(function (e, t) {
                    return "" + (0 === t ? "---\x3e " : " ".repeat(5 + 2 * t)) + (Array.isArray(e) ? u(e[0]) + "... (" + e[1] + " recursive calls)" : u(e))
                }).join("\n")
            }
            return "\n\n(found in " + u(e) + ")"
        }
    }, da3c: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, da5b: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
            dataIterator: {
                rowsPerPageText: "Items per page:",
                rowsPerPageAll: "All",
                pageText: "{0}-{1} of {2}",
                noResultsText: "No matching records found",
                nextPage: "Next page",
                prevPage: "Previous page"
            },
            dataTable: {rowsPerPageText: "Rows per page:"},
            noDataText: "No data available",
            carousel: {prev: "Previous visual", next: "Next visual"}
        }
    }, da64: function (e, t, n) {
        var o = n("8ed3");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("0bfe5e90", o, !0, {sourceMap: !1, shadowMode: !1})
    }, db6d: function (e, t, n) {
        var o = n("c10b");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("043178f6", o, !0, {sourceMap: !1, shadowMode: !1})
    }, dcbc: function (e, t, n) {
        var o = n("2aba");
        e.exports = function (e, t, n) {
            for (var r in t) o(e, r, t[r], n);
            return e
        }
    }, dd04: function (e, t, n) {
        n("12fd9"), n("93c4"), n("b42c"), n("5b5f"), n("b604"), n("c609"), e.exports = n("a7d3").Promise
    }, decf: function (e, t, n) {
        var o = n("0f89"), r = n("6f8a"), i = n("03ca");
        e.exports = function (e, t) {
            if (o(e), r(t) && t.constructor === e) return t;
            var n = i.f(e), a = n.resolve;
            return a(t), n.promise
        }
    }, df0a: function (e, t, n) {
        var o, r, i, a = n("bc25"), s = n("196c"), l = n("103a"), c = n("12fd"), u = n("da3c"), p = u.process,
            d = u.setImmediate, f = u.clearImmediate, m = u.MessageChannel, h = u.Dispatch, g = 0, b = {},
            v = "onreadystatechange", x = function () {
                var e = +this;
                if (b.hasOwnProperty(e)) {
                    var t = b[e];
                    delete b[e], t()
                }
            }, y = function (e) {
                x.call(e.data)
            };
        d && f || (d = function (e) {
            var t = [], n = 1;
            while (arguments.length > n) t.push(arguments[n++]);
            return b[++g] = function () {
                s("function" == typeof e ? e : Function(e), t)
            }, o(g), g
        }, f = function (e) {
            delete b[e]
        }, "process" == n("6e1f")(p) ? o = function (e) {
            p.nextTick(a(x, e, 1))
        } : h && h.now ? o = function (e) {
            h.now(a(x, e, 1))
        } : m ? (r = new m, i = r.port2, r.port1.onmessage = y, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function (e) {
            u.postMessage(e + "", "*")
        }, u.addEventListener("message", y, !1)) : o = v in c("script") ? function (e) {
            l.appendChild(c("script"))[v] = function () {
                l.removeChild(this), x.call(e)
            }
        } : function (e) {
            setTimeout(a(x, e, 1), 0)
        }), e.exports = {set: d, clear: f}
    }, dfb7: function (e, t, n) {
        e.exports = n.p + "img/popup-setting.9bee5741.png"
    }, e11e: function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, e265: function (e, t, n) {
        e.exports = n("5698")
    }, e2b8: function (e, t, n) {
        "use strict";
        var o = n("0394"), r = n.n(o);
        r.a
    }, e341: function (e, t, n) {
        var o = n("d13f");
        o(o.S + o.F * !n("7d95"), "Object", {defineProperty: n("3adc").f})
    }, e449: function (e, t, n) {
        "use strict";
        n("3880");
        var o = n("2b0e"), r = o["default"].extend().extend({
                name: "delayable",
                props: {openDelay: {type: [Number, String], default: 0}, closeDelay: {type: [Number, String], default: 0}},
                data: function () {
                    return {openTimeout: void 0, closeTimeout: void 0}
                },
                methods: {
                    clearDelay: function () {
                        clearTimeout(this.openTimeout), clearTimeout(this.closeTimeout)
                    }, runDelay: function (e, t) {
                        var n = this;
                        this.clearDelay();
                        var o = parseInt(this[e + "Delay"], 10);
                        this[e + "Timeout"] = setTimeout(t || function () {
                            n.isActive = {open: !0, close: !1}[e]
                        }, o)
                    }
                }
            }), i = n("c69d"), a = n("30d4"), s = n("c22b"), l = n("261e"),
            c = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, u = {
                activator: {top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, offsetTop: 0, scrollHeight: 0},
                content: {top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, offsetTop: 0, scrollHeight: 0},
                hasWindow: !1
            }, p = o["default"].extend({
                name: "menuable", mixins: [s["a"], l["a"]], props: {
                    activator: {
                        default: null, validator: function (e) {
                            return ["string", "object"].includes("undefined" === typeof e ? "undefined" : c(e))
                        }
                    },
                    allowOverflow: Boolean,
                    inputActivator: Boolean,
                    light: Boolean,
                    dark: Boolean,
                    maxWidth: {type: [Number, String], default: "auto"},
                    minWidth: [Number, String],
                    nudgeBottom: {type: [Number, String], default: 0},
                    nudgeLeft: {type: [Number, String], default: 0},
                    nudgeRight: {type: [Number, String], default: 0},
                    nudgeTop: {type: [Number, String], default: 0},
                    nudgeWidth: {type: [Number, String], default: 0},
                    offsetOverflow: Boolean,
                    positionX: {type: Number, default: null},
                    positionY: {type: Number, default: null},
                    zIndex: {type: [Number, String], default: null}
                }, data: function () {
                    return {
                        absoluteX: 0,
                        absoluteY: 0,
                        activatorFixed: !1,
                        dimensions: Object.assign({}, u),
                        isContentActive: !1,
                        pageWidth: 0,
                        pageYOffset: 0,
                        stackClass: "v-menu__content--active",
                        stackMinZIndex: 6
                    }
                }, computed: {
                    computedLeft: function () {
                        var e = this.dimensions.activator, t = this.dimensions.content,
                            n = (this.isAttached ? e.offsetLeft : e.left) || 0, o = Math.max(e.width, t.width), r = 0;
                        if (r += this.left ? n - (o - e.width) : n, this.offsetX) {
                            var i = isNaN(this.maxWidth) ? e.width : Math.min(e.width, this.maxWidth);
                            r += this.left ? -i : e.width
                        }
                        return this.nudgeLeft && (r -= parseInt(this.nudgeLeft)), this.nudgeRight && (r += parseInt(this.nudgeRight)), r
                    }, computedTop: function () {
                        var e = this.dimensions.activator, t = this.dimensions.content, n = 0;
                        return this.top && (n += e.height - t.height), this.isAttached ? n += e.offsetTop : n += e.top + this.pageYOffset, this.offsetY && (n += this.top ? -e.height : e.height), this.nudgeTop && (n -= parseInt(this.nudgeTop)), this.nudgeBottom && (n += parseInt(this.nudgeBottom)), n
                    }, hasActivator: function () {
                        return !!this.$slots.activator || !!this.$scopedSlots.activator || this.activator || this.inputActivator
                    }, isAttached: function () {
                        return !1 !== this.attach
                    }
                }, watch: {
                    disabled: function (e) {
                        e && this.callDeactivate()
                    }, isActive: function (e) {
                        this.disabled || (e ? this.callActivate() : this.callDeactivate())
                    }, positionX: "updateDimensions", positionY: "updateDimensions"
                }, beforeMount: function () {
                    this.checkForWindow()
                }, methods: {
                    absolutePosition: function () {
                        return {
                            offsetTop: 0,
                            offsetLeft: 0,
                            scrollHeight: 0,
                            top: this.positionY || this.absoluteY,
                            bottom: this.positionY || this.absoluteY,
                            left: this.positionX || this.absoluteX,
                            right: this.positionX || this.absoluteX,
                            height: 0,
                            width: 0
                        }
                    }, activate: function () {
                    }, calcLeft: function (e) {
                        return (this.isAttached ? this.computedLeft : this.calcXOverflow(this.computedLeft, e)) + "px"
                    }, calcTop: function () {
                        return (this.isAttached ? this.computedTop : this.calcYOverflow(this.computedTop)) + "px"
                    }, calcXOverflow: function (e, t) {
                        var n = e + t - this.pageWidth + 12;
                        return e = (!this.left || this.right) && n > 0 ? Math.max(e - n, 0) : Math.max(e, 12), e + this.getOffsetLeft()
                    }, calcYOverflow: function (e) {
                        var t = this.getInnerHeight(), n = this.pageYOffset + t, o = this.dimensions.activator,
                            r = this.dimensions.content.height, i = e + r, a = n < i;
                        return a && this.offsetOverflow && o.top > r ? e = this.pageYOffset + (o.top - r) : a && !this.allowOverflow ? e = n - r - 12 : e < this.pageYOffset && !this.allowOverflow && (e = this.pageYOffset + 12), e < 12 ? 12 : e
                    }, callActivate: function () {
                        this.hasWindow && this.activate()
                    }, callDeactivate: function () {
                        this.isContentActive = !1, this.deactivate()
                    }, checkForWindow: function () {
                        this.hasWindow || (this.hasWindow = "undefined" !== typeof window)
                    }, checkForPageYOffset: function () {
                        this.hasWindow && (this.pageYOffset = this.activatorFixed ? 0 : this.getOffsetTop())
                    }, checkActivatorFixed: function () {
                        if (!1 === this.attach) {
                            var e = this.getActivator();
                            while (e) {
                                if ("fixed" === window.getComputedStyle(e).position) return void (this.activatorFixed = !0);
                                e = e.offsetParent
                            }
                            this.activatorFixed = !1
                        }
                    }, deactivate: function () {
                    }, getActivator: function (e) {
                        if (this.inputActivator) return this.$el.querySelector(".v-input__slot");
                        if (this.activator) return "string" === typeof this.activator ? document.querySelector(this.activator) : this.activator;
                        if (this.$refs.activator) return this.$refs.activator.children.length > 0 ? this.$refs.activator.children[0] : this.$refs.activator;
                        if (e) return this.activatedBy = e.currentTarget || e.target, this.activatedBy;
                        if (this.activatedBy) return this.activatedBy;
                        if (this.activatorNode) {
                            var t = Array.isArray(this.activatorNode) ? this.activatorNode[0] : this.activatorNode,
                                n = t && t.elm;
                            if (n) return n
                        }
                    }, getInnerHeight: function () {
                        return this.hasWindow ? window.innerHeight || document.documentElement.clientHeight : 0
                    }, getOffsetLeft: function () {
                        return this.hasWindow ? window.pageXOffset || document.documentElement.scrollLeft : 0
                    }, getOffsetTop: function () {
                        return this.hasWindow ? window.pageYOffset || document.documentElement.scrollTop : 0
                    }, getRoundedBoundedClientRect: function (e) {
                        var t = e.getBoundingClientRect();
                        return {
                            top: Math.round(t.top),
                            left: Math.round(t.left),
                            bottom: Math.round(t.bottom),
                            right: Math.round(t.right),
                            width: Math.round(t.width),
                            height: Math.round(t.height)
                        }
                    }, measure: function (e) {
                        if (!e || !this.hasWindow) return null;
                        var t = this.getRoundedBoundedClientRect(e);
                        if (this.isAttached) {
                            var n = window.getComputedStyle(e);
                            t.left = parseInt(n.marginLeft), t.top = parseInt(n.marginTop)
                        }
                        return t
                    }, sneakPeek: function (e) {
                        var t = this;
                        requestAnimationFrame(function () {
                            var n = t.$refs.content;
                            if (!n || t.isShown(n)) return e();
                            n.style.display = "inline-block", e(), n.style.display = "none"
                        })
                    }, startTransition: function () {
                        var e = this;
                        return new Promise(function (t) {
                            return requestAnimationFrame(function () {
                                e.isContentActive = e.hasJustFocused = e.isActive, t()
                            })
                        })
                    }, isShown: function (e) {
                        return "none" !== e.style.display
                    }, updateDimensions: function () {
                        var e = this;
                        this.checkForWindow(), this.checkActivatorFixed(), this.checkForPageYOffset(), this.pageWidth = document.documentElement.clientWidth;
                        var t = {};
                        if (!this.hasActivator || this.absolute) t.activator = this.absolutePosition(); else {
                            var n = this.getActivator();
                            t.activator = this.measure(n), t.activator.offsetLeft = n.offsetLeft, this.isAttached ? t.activator.offsetTop = n.offsetTop : t.activator.offsetTop = 0
                        }
                        this.sneakPeek(function () {
                            t.content = e.measure(e.$refs.content), e.dimensions = t
                        })
                    }
                }
            }), d = n("e949"), f = n("98a1"), m = n("6a18"), h = {
                methods: {
                    activatorClickHandler: function (e) {
                        this.openOnClick && !this.isActive ? (this.getActivator(e).focus(), this.isActive = !0, this.absoluteX = e.clientX, this.absoluteY = e.clientY) : this.closeOnClick && this.isActive && (this.getActivator(e).blur(), this.isActive = !1)
                    }, mouseEnterHandler: function () {
                        var e = this;
                        this.runDelay("open", function () {
                            e.hasJustFocused || (e.hasJustFocused = !0, e.isActive = !0)
                        })
                    }, mouseLeaveHandler: function (e) {
                        var t = this;
                        this.runDelay("close", function () {
                            t.$refs.content.contains(e.relatedTarget) || requestAnimationFrame(function () {
                                t.isActive = !1, t.callDeactivate()
                            })
                        })
                    }, addActivatorEvents: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        e && !this.disabled && e.addEventListener("click", this.activatorClickHandler)
                    }, removeActivatorEvents: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        e && e.removeEventListener("click", this.activatorClickHandler)
                    }
                }
            }, g = n("80d2"), b = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            };

        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function x(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        var y = {
            methods: {
                genActivator: function () {
                    if (!this.$slots.activator && !this.$scopedSlots.activator) return null;
                    var e = {};
                    if (this.disabled || (this.openOnHover ? (e.mouseenter = this.mouseEnterHandler, e.mouseleave = this.mouseLeaveHandler) : this.openOnClick && (e.click = this.activatorClickHandler)), "scoped" === Object(g["l"])(this, "activator")) {
                        e.keydown = this.onKeyDown;
                        var t = this.$scopedSlots.activator({on: e});
                        return this.activatorNode = t, t
                    }
                    return this.$createElement("div", {
                        staticClass: "v-menu__activator",
                        class: {
                            "v-menu__activator--active": this.hasJustFocused || this.isActive,
                            "v-menu__activator--disabled": this.disabled
                        },
                        ref: "activator",
                        on: e
                    }, this.$slots.activator)
                }, genTransition: function () {
                    return this.transition ? this.$createElement("transition", {props: {name: this.transition}}, [this.genContent()]) : this.genContent()
                }, genDirectives: function () {
                    var e = this, t = !this.openOnHover && this.closeOnClick ? [{
                        name: "click-outside", value: function () {
                            e.isActive = !1
                        }, args: {
                            closeConditional: this.closeConditional, include: function () {
                                return [e.$el].concat(x(e.getOpenDependentElements()))
                            }
                        }
                    }] : [];
                    return t.push({name: "show", value: this.isContentActive}), t
                }, genContent: function () {
                    var e = this, t = {
                        attrs: this.getScopeIdAttrs(),
                        staticClass: "v-menu__content",
                        class: b({}, this.rootThemeClasses, v({
                            "v-menu__content--auto": this.auto,
                            "v-menu__content--fixed": this.activatorFixed,
                            menuable__content__active: this.isActive
                        }, this.contentClass.trim(), !0)),
                        style: this.styles,
                        directives: this.genDirectives(),
                        ref: "content",
                        on: {
                            click: function (t) {
                                t.stopPropagation(), t.target.getAttribute("disabled") || e.closeOnContentClick && (e.isActive = !1)
                            }, keydown: this.onKeyDown
                        }
                    };
                    return !this.disabled && this.openOnHover && (t.on.mouseenter = this.mouseEnterHandler), this.openOnHover && (t.on.mouseleave = this.mouseLeaveHandler), this.$createElement("div", t, this.showLazyContent(this.$slots.default))
                }
            }
        }, k = {
            props: {disableKeys: Boolean}, data: function () {
                return {listIndex: -1, tiles: []}
            }, watch: {
                isActive: function (e) {
                    e || (this.listIndex = -1)
                }, listIndex: function (e, t) {
                    if (e in this.tiles) {
                        var n = this.tiles[e];
                        n.classList.add("v-list__tile--highlighted"), this.$refs.content.scrollTop = n.offsetTop - n.clientHeight
                    }
                    t in this.tiles && this.tiles[t].classList.remove("v-list__tile--highlighted")
                }
            }, methods: {
                onKeyDown: function (e) {
                    var t = this;
                    if (e.keyCode === g["p"].esc) {
                        setTimeout(function () {
                            t.isActive = !1
                        });
                        var n = this.getActivator();
                        this.$nextTick(function () {
                            return n && n.focus()
                        })
                    } else e.keyCode === g["p"].tab ? setTimeout(function () {
                        t.$refs.content.contains(document.activeElement) || (t.isActive = !1)
                    }) : this.changeListIndex(e)
                }, changeListIndex: function (e) {
                    if (this.getTiles(), e.keyCode === g["p"].down && this.listIndex < this.tiles.length - 1) this.listIndex++; else if (e.keyCode === g["p"].up && this.listIndex > -1) this.listIndex--; else {
                        if (e.keyCode !== g["p"].enter || -1 === this.listIndex) return;
                        this.tiles[this.listIndex].click()
                    }
                    e.preventDefault()
                }, getTiles: function () {
                    this.tiles = this.$refs.content.querySelectorAll(".v-list__tile")
                }
            }
        }, w = {
            data: function () {
                return {calculatedTopAuto: 0}
            }, methods: {
                calcScrollPosition: function () {
                    var e = this.$refs.content, t = e.querySelector(".v-list__tile--active"),
                        n = e.scrollHeight - e.offsetHeight;
                    return t ? Math.min(n, Math.max(0, t.offsetTop - e.offsetHeight / 2 + t.offsetHeight / 2)) : e.scrollTop
                }, calcLeftAuto: function () {
                    return this.isAttached ? 0 : parseInt(this.dimensions.activator.left - 2 * this.defaultOffset)
                }, calcTopAuto: function () {
                    var e = this.$refs.content, t = e.querySelector(".v-list__tile--active");
                    if (t || (this.selectedIndex = null), this.offsetY || !t) return this.computedTop;
                    this.selectedIndex = Array.from(this.tiles).indexOf(t);
                    var n = t.offsetTop - this.calcScrollPosition(), o = e.querySelector(".v-list__tile").offsetTop;
                    return this.computedTop - n - o
                }
            }
        }, _ = n("c584"), S = n("0d3d"), T = n("bfc5"), E = n("d9bd");
        t["a"] = o["default"].extend({
            name: "v-menu",
            provide: function () {
                return {theme: this.theme}
            },
            directives: {ClickOutside: _["a"], Resize: S["a"]},
            mixins: [h, i["a"], r, a["a"], y, k, p, w, d["a"], f["a"], m["a"]],
            props: {
                auto: Boolean,
                closeOnClick: {type: Boolean, default: !0},
                closeOnContentClick: {type: Boolean, default: !0},
                disabled: Boolean,
                fullWidth: Boolean,
                maxHeight: {default: "auto"},
                openOnClick: {type: Boolean, default: !0},
                offsetX: Boolean,
                offsetY: Boolean,
                openOnHover: Boolean,
                origin: {type: String, default: "top left"},
                transition: {type: [Boolean, String], default: "v-menu-transition"}
            },
            data: function () {
                return {defaultOffset: 8, hasJustFocused: !1, resizeTimeout: null}
            },
            computed: {
                calculatedLeft: function () {
                    var e = Math.max(this.dimensions.content.width, parseFloat(this.calculatedMinWidth));
                    return this.auto ? this.calcXOverflow(this.calcLeftAuto(), e) + "px" : this.calcLeft(e)
                }, calculatedMaxHeight: function () {
                    return this.auto ? "200px" : Object(g["c"])(this.maxHeight)
                }, calculatedMaxWidth: function () {
                    return isNaN(this.maxWidth) ? this.maxWidth : this.maxWidth + "px"
                }, calculatedMinWidth: function () {
                    if (this.minWidth) return isNaN(this.minWidth) ? this.minWidth : this.minWidth + "px";
                    var e = Math.min(this.dimensions.activator.width + this.nudgeWidth + (this.auto ? 16 : 0), Math.max(this.pageWidth - 24, 0)),
                        t = isNaN(parseInt(this.calculatedMaxWidth)) ? e : parseInt(this.calculatedMaxWidth);
                    return Math.min(t, e) + "px"
                }, calculatedTop: function () {
                    return !this.auto || this.isAttached ? this.calcTop() : this.calcYOverflow(this.calculatedTopAuto) + "px"
                }, styles: function () {
                    return {
                        maxHeight: this.calculatedMaxHeight,
                        minWidth: this.calculatedMinWidth,
                        maxWidth: this.calculatedMaxWidth,
                        top: this.calculatedTop,
                        left: this.calculatedLeft,
                        transformOrigin: this.origin,
                        zIndex: this.zIndex || this.activeZIndex
                    }
                }
            },
            watch: {
                activator: function (e, t) {
                    this.removeActivatorEvents(t), this.addActivatorEvents(e)
                }, disabled: function (e) {
                    this.activator && (e ? this.removeActivatorEvents(this.activator) : this.addActivatorEvents(this.activator))
                }, isContentActive: function (e) {
                    this.hasJustFocused = e
                }
            },
            mounted: function () {
                this.isActive && this.activate(), "v-slot" === Object(g["l"])(this, "activator", !0) && Object(E["a"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'", this)
            },
            methods: {
                activate: function () {
                    var e = this;
                    this.getTiles(), this.updateDimensions(), requestAnimationFrame(function () {
                        e.startTransition().then(function () {
                            e.$refs.content && (e.calculatedTopAuto = e.calcTopAuto(), e.auto && (e.$refs.content.scrollTop = e.calcScrollPosition()))
                        })
                    })
                }, closeConditional: function (e) {
                    return this.isActive && this.closeOnClick && !this.$refs.content.contains(e.target)
                }, onResize: function () {
                    this.isActive && (this.$refs.content.offsetWidth, this.updateDimensions(), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(this.updateDimensions, 100))
                }
            },
            render: function (e) {
                var t = {
                    staticClass: "v-menu",
                    class: {"v-menu--inline": !this.fullWidth && this.$slots.activator},
                    directives: [{arg: 500, name: "resize", value: this.onResize}],
                    on: this.disableKeys ? void 0 : {keydown: this.onKeyDown}
                };
                return e("div", t, [this.genActivator(), this.$createElement(T["a"], {
                    props: {
                        root: !0,
                        light: this.light,
                        dark: this.dark
                    }
                }, [this.genTransition()])])
            }
        })
    }, e4a9: function (e, t, n) {
        "use strict";
        var o = n("b457"), r = n("d13f"), i = n("2312"), a = n("8ce0"), s = n("b22a"), l = n("5ce7"), c = n("c0d8"),
            u = n("ff0c"), p = n("1b55")("iterator"), d = !([].keys && "next" in [].keys()), f = "@@iterator",
            m = "keys", h = "values", g = function () {
                return this
            };
        e.exports = function (e, t, n, b, v, x, y) {
            l(n, t, b);
            var k, w, _, S = function (e) {
                    if (!d && e in A) return A[e];
                    switch (e) {
                        case m:
                            return function () {
                                return new n(this, e)
                            };
                        case h:
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, T = t + " Iterator", E = v == h, C = !1, A = e.prototype, O = A[p] || A[f] || v && A[v], P = O || S(v),
                N = v ? E ? S("entries") : P : void 0, L = "Array" == t && A.entries || O;
            if (L && (_ = u(L.call(new e)), _ !== Object.prototype && _.next && (c(_, T, !0), o || "function" == typeof _[p] || a(_, p, g))), E && O && O.name !== h && (C = !0, P = function () {
                return O.call(this)
            }), o && !y || !d && !C && A[p] || a(A, p, P), s[t] = P, s[T] = g, v) if (k = {
                values: E ? P : S(h),
                keys: x ? P : S(m),
                entries: N
            }, y) for (w in k) w in A || i(A, w, k[w]); else r(r.P + r.F * (d || C), t, k);
            return k
        }
    }, e4b7: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".display-flex{display:-webkit-box;display:-ms-flexbox;display:flex}.display-none{display:none}.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.decoration-none{text-decoration:none}.cursor-pointer{cursor:pointer}.fill-width{width:100%}.sf-theme-primary{background-color:#ee4d2d}.sf-theme-primary--text{color:#ee4d2d}.layout.wrap{-webkit-transform:initial;transform:none}", ""])
    }, e5fa: function (e, t) {
        e.exports = function (e) {
            if (void 0 == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, e7ef: function (e, t, n) {
        e.exports = n.p + "img/popup-setting.ec4f4cfb.png"
    }, e814: function (e, t, n) {
        e.exports = n("54aa")
    }, e8f2: function (e, t, n) {
        "use strict";

        function o(e) {
            return {
                name: "v-" + e,
                functional: !0,
                props: {id: String, tag: {type: String, default: "div"}},
                render: function (t, n) {
                    var o = n.props, r = n.data, i = n.children;
                    r.staticClass = (e + " " + (r.staticClass || "")).trim();
                    var a = r.attrs;
                    if (a) {
                        r.attrs = {};
                        var s = Object.keys(a).filter(function (e) {
                            if ("slot" === e) return !1;
                            var t = a[e];
                            return e.startsWith("data-") ? (r.attrs[e] = t, !1) : t || "string" === typeof t
                        });
                        s.length && (r.staticClass += " " + s.join(" "))
                    }
                    return o.id && (r.domProps = r.domProps || {}, r.domProps.id = o.id), t(o.tag, r, i)
                }
            }
        }

        n.d(t, "a", function () {
            return o
        })
    }, e949: function (e, t, n) {
        "use strict";
        var o = n("2b0e");
        t["a"] = o["default"].extend({
            name: "returnable", props: {returnValue: null}, data: function () {
                return {isActive: !1, originalValue: null}
            }, watch: {
                isActive: function (e) {
                    e ? this.originalValue = this.returnValue : this.$emit("update:returnValue", this.originalValue)
                }
            }, methods: {
                save: function (e) {
                    var t = this;
                    this.originalValue = e, setTimeout(function () {
                        t.isActive = !1
                    })
                }
            }
        })
    }, ebd6: function (e, t, n) {
        var o = n("cb7c"), r = n("d8e8"), i = n("2b4c")("species");
        e.exports = function (e, t) {
            var n, a = o(e).constructor;
            return void 0 === a || void 0 == (n = o(a)[i]) ? t : r(n)
        }
    }, ebd9: function (e, t, n) {
        e.exports = n.p + "img/goods-menu.88ad01ff.png"
    }, ec5b: function (e, t, n) {
        n("e341");
        var o = n("a7d3").Object;
        e.exports = function (e, t, n) {
            return o.defineProperty(e, t, n)
        }
    }, edcb: function (e, t, n) {
        e.exports = n.p + "img/popup-tool.c00f5d7a.png"
    }, eefa: function (e, t, n) {
        e.exports = n.p + "img/shopee-goodslist.cf59be78.png"
    }, ef02: function (e, t, n) {
        t = e.exports = n("2350")(!1), t.push([e.i, ".theme--light.v-sheet{background-color:#fff;border-color:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-sheet{background-color:#424242;border-color:#424242;color:#fff}.v-sheet{display:block;border-radius:2px;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-sheet--tile{border-radius:0}", ""])
    }, f121: function (e, t, n) {
        "use strict";
        n("f559");
        var o = n("9224"),
            r = Object({VUE_APP_PROXY_IP: "https://api.keyouyun.com", NODE_ENV: "production", BASE_URL: "/"}),
            i = r.NODE_ENV, a = r.VUE_APP_PROXY_IP, s = r.VUE_APP_PROXY_PORT, l = "production" !== i, c = s || "8080",
            u = a || "127.0.0.1";
        u.startsWith("http") || (c && (u = "".concat(u, ":").concat(c)), u = "http://".concat(u)), l && console.log("erp url:", u);
        var p = function (e) {
            var t = l ? "http://test.erp.keyouyun.com" : "https://erp.keyouyun.com";
            return "".concat(t).concat(e)
        }, d = {
            name: "Shopee Fans",
            markAuthor: "by ShopeeFans - 虾皮助手",
            version: o.version,
            imgLogo: "https://cdn1.keyouyun.com/images/common/shopee-fans__logo--pure.png",
            helpUrl: "https://www.keyouyun.com/category/shopee-fans/",
            aboutUrl: "https://www.keyouyun.com/shopee-fans/",
            qqGroupUrl: "https://shang.qq.com/wpa/qunwpa?idkey=a5f5f02a7eea0d8854768d8592e1c128a08d624d26088b0f96080612197da827",
            facebookGroupUrl: "https://www.facebook.com/plugins/group/join/popup/?group_id=318881685637794&source=email_campaign_plugin",
            userGuideUrl: "user-guide/index.html",
            collectionBoxUrl: "collection-box/index.html",
            serviceEmail: "kf@izhiliu.com",
            copyright: "Shopee Fans v".concat(o.version, " All Rights Reserved"),
            orderAppIntroUrl: "https://www.keyouyun.com/erp-feature-order/",
            erp: {
                imgLogo: "https://cdn1.keyouyun.com/images/apps/logo/keyouyun__primary.png",
                host: u,
                homeUrl: p("/"),
                loginUrl: p("/login"),
                shopAuthUrl: p("/open"),
                shopOrderUrl: p("/recharge/order"),
                rechargeUrl: p("/recharge/home"),
                rechargeOrderCenterUrl: p("/recharge/order/center/plugin"),
                orderHome: p("/orders/home"),
                shopeeFansCurrencyCenter: "https://www.keyouyun.com/shopee-fans-currency-center"
            },
            api: {
                erpUrl: u,
                erpWorldUrl: "https://erp2.keyouyun.com",
                tuiUrl: "https://tui.izhiliu.com",
                tuiWorldUrl: "https://erp2.keyouyun.com",
                erpLoginUrl: p("/login"),
                erpCollectUrl: p("/offers/collections/platform/10")
            },
            storageKey: {target: "targetCurrency", exchange: "exchangeRate"},
            shopeeCookieLoginName: "SPC_EC",
            shopeeDomainDict: {
                "shopee.tw": ".shopee.tw",
                "tw.shopeesz.com": "tw.shopeesz.com",
                "xiapi.xiapibuy.com": "xiapi.xiapibuy.com",
                "seller.shopee.tw": ".shopee.tw",
                "seller.shopee.cn": "seller.shopee.cn",
                "sellertw.shopeesz.com": "sellertw.shopeesz.com",
                "seller.xiapi.shopee.cn": ".xiapi.shopee.cn",
                "shopee.sg": ".shopee.sg",
                "sg.xiapibuy.com": "sg.xiapibuy.com",
                "seller.shopee.sg": ".shopee.sg",
                "seller.sg.shopee.cn": ".sg.shopee.cn",
                "shopee.com.my": ".shopee.com.my",
                "my.xiapibuy.com": "my.xiapibuy.com",
                "seller.shopee.com.my": ".shopee.com.my",
                "seller.my.shopee.cn": ".my.shopee.cn",
                "shopee.ph": ".shopee.ph",
                "ph.xiapibuy.com": "ph.xiapibuy.com",
                "seller.shopee.ph": ".shopee.ph",
                "seller.ph.shopee.cn": ".ph.shopee.cn",
                "shopee.co.id": ".shopee.co.id",
                "id.xiapibuy.com": "id.xiapibuy.com",
                "seller.shopee.co.id": ".shopee.co.id",
                "seller.id.shopee.cn": ".id.shopee.cn",
                "shopee.co.th": ".shopee.co.th",
                "th.xiapibuy.com": "th.xiapibuy.com",
                "seller.shopee.co.th": ".shopee.co.th",
                "seller.th.shopee.cn": ".th.shopee.cn",
                "shopee.vn": ".shopee.vn",
                "vn.xiapibuy.com": "vn.xiapibuy.com",
                "banhang.shopee.vn": ".shopee.vn",
                "seller.vn.shopee.cn": ".vn.shopee.cn",
                "seller.shopee.com.br": ".shopee.com.br",
                "shopee.com.br": ".shopee.com.br",
                "seller.br.shopee.cn": ".br.shopee.cn",
                "br.xiapibuy.com": "br.xiapibuy.com"
            },
            shopeeSiteDict: {
                TW: {
                    main: ["shopee.tw", "tw.shopeesz.com", "xiapi.xiapibuy.com"],
                    seller: ["seller.shopee.tw", "seller.shopee.cn", "sellertw.shopeesz.com", "seller.xiapi.shopee.cn"]
                },
                SG: {main: ["shopee.sg", "sg.xiapibuy.com"], seller: ["seller.shopee.sg", "seller.sg.shopee.cn"]},
                MY: {
                    main: ["shopee.com.my", "my.xiapibuy.com"],
                    seller: ["seller.shopee.com.my", "seller.my.shopee.cn"]
                },
                PH: {main: ["shopee.ph", "ph.xiapibuy.com"], seller: ["seller.shopee.ph", "seller.ph.shopee.cn"]},
                ID: {main: ["shopee.co.id", "id.xiapibuy.com"], seller: ["seller.shopee.co.id", "seller.id.shopee.cn"]},
                TH: {main: ["shopee.co.th", "th.xiapibuy.com"], seller: ["seller.shopee.co.th", "seller.th.shopee.cn"]},
                VN: {main: ["shopee.vn", "vn.xiapibuy.com"], seller: ["banhang.shopee.vn", "seller.vn.shopee.cn"]},
                BR: {
                    main: ["shopee.com.br", "br.xiapibuy.com"],
                    seller: ["seller.shopee.com.br", "seller.br.shopee.cn"]
                }
            },
            siteCurrencyDict: {ID: "IDR", TW: "TWD", VN: "VND", TH: "THB", PH: "PHP", MY: "MYR", SG: "SGD", BR: "BRL"}
        };
        t["a"] = d
    }, f159: function (e, t, n) {
        var o = n("7d8a"), r = n("1b55")("iterator"), i = n("b22a");
        e.exports = n("a7d3").getIteratorMethod = function (e) {
            if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)]
        }
    }, f234: function (e, t, n) {
        "use strict";
        var o = "%[a-f0-9]{2}", r = new RegExp(o, "gi"), i = new RegExp("(" + o + ")+", "gi");

        function a(e, t) {
            try {
                return decodeURIComponent(e.join(""))
            } catch (r) {
            }
            if (1 === e.length) return e;
            t = t || 1;
            var n = e.slice(0, t), o = e.slice(t);
            return Array.prototype.concat.call([], a(n), a(o))
        }

        function s(e) {
            try {
                return decodeURIComponent(e)
            } catch (o) {
                for (var t = e.match(r), n = 1; n < t.length; n++) e = a(t, n).join(""), t = e.match(r);
                return e
            }
        }

        function l(e) {
            var t = {"%FE%FF": "��", "%FF%FE": "��"}, n = i.exec(e);
            while (n) {
                try {
                    t[n[0]] = decodeURIComponent(n[0])
                } catch (c) {
                    var o = s(n[0]);
                    o !== n[0] && (t[n[0]] = o)
                }
                n = i.exec(e)
            }
            t["%C2"] = "�";
            for (var r = Object.keys(t), a = 0; a < r.length; a++) {
                var l = r[a];
                e = e.replace(new RegExp(l, "g"), t[l])
            }
            return e
        }

        e.exports = function (e) {
            if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e)
            } catch (t) {
                return l(e)
            }
        }
    }, f2fe: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, f3e0: function (e, t, n) {
        var o = n("0185"), r = n("7633");
        n("c165")("keys", function () {
            return function (e) {
                return r(o(e))
            }
        })
    }, f531: function (e, t, n) {
        e.exports = n.p + "img/brower-toolbar.2702795d.png"
    }, f559: function (e, t, n) {
        "use strict";
        var o = n("5ca1"), r = n("9def"), i = n("d2c8"), a = "startsWith", s = ""[a];
        o(o.P + o.F * n("5147")(a), "String", {
            startsWith: function (e) {
                var t = i(this, e, a), n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                    o = String(e);
                return s ? s.call(t, o, n) : t.slice(n, n + o.length) === o
            }
        })
    }, f568: function (e, t, n) {
        var o = n("3adc"), r = n("0f89"), i = n("7633");
        e.exports = n("7d95") ? Object.defineProperties : function (e, t) {
            r(e);
            var n, a = i(t), s = a.length, l = 0;
            while (s > l) o.f(e, n = a[l++], t[n]);
            return e
        }
    }, f580: function (e, t, n) {
        var o = n("bc2a");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var r = n("499e").default;
        r("3e232429", o, !0, {sourceMap: !1, shadowMode: !1})
    }, f605: function (e, t) {
        e.exports = function (e, t, n, o) {
            if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }
    }, f751: function (e, t, n) {
        var o = n("5ca1");
        o(o.S + o.F, "Object", {assign: n("7333")})
    }, f845: function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, fa54: function (e, t, n) {
        "use strict";
        var o = n("b3e7"), r = n("245b"), i = n("b22a"), a = n("6a9b");
        e.exports = n("e4a9")(Array, "Array", function (e, t) {
            this._t = a(e), this._i = 0, this._k = t
        }, function () {
            var e = this._t, t = this._k, n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, fa5b: function (e, t, n) {
        e.exports = n("5537")("native-function-to-string", Function.toString)
    }, fab2: function (e, t, n) {
        var o = n("7726").document;
        e.exports = o && o.documentElement
    }, fac3: function (e) {
        e.exports = {
            warningForSendMessageInBulk: "Please do not often mass messages, complaints from users or system easily identified as spam (software does not assume any responsibility)!",
            inputMessageLabel: "Type your message",
            sendOver: "{name} successfully sent, message rest times {count}",
            sendFail: "{name} failed to send",
            pleaseGoToWebchat: "Go to chat shrimp operates automatically jump back 3s",
            pleaseLoginShopeeMainPage: "Go to page synchronization xiapibuy login state, automatically jump back 3s",
            pleaseFillInTheMessage: "Please fill in the message content",
            pleaseSelectUsers: "Choose a user",
            cancelled: "Cancelled",
            sendDone: "completed",
            runOutOfRemainQuantity: "The remaining number has been exhausted",
            userDisabled: "{name} is disabled by Shopee"
        }
    }, fca9: function (e, t, n) {
        e.exports = n.p + "img/shopee-goodsdetail.f2e176e8.png"
    }, fda1: function (e, t, n) {
        t.f = n("1b55")
    }, fda6: function (e, t, n) {
        n("f3e0"), e.exports = n("a7d3").Object.keys
    }, fdef: function (e, t) {
        e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, ff0c: function (e, t, n) {
        var o = n("43c8"), r = n("0185"), i = n("5d8f")("IE_PROTO"), a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }
});