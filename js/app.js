(() => {
    "use strict";
    var __webpack_modules__ = {
        551: (__unused_webpack_module, exports, __webpack_require__) => {
            /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            var aa = __webpack_require__(540), ca = __webpack_require__(982);
            function p(a) {
                for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
                return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
            }
            var da = new Set, ea = {};
            function fa(a, b) {
                ha(a, b);
                ha(a + "Capture", b);
            }
            function ha(a, b) {
                ea[a] = b;
                for (a = 0; a < b.length; a++) da.add(b[a]);
            }
            var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
            function oa(a) {
                if (ja.call(ma, a)) return !0;
                if (ja.call(la, a)) return !1;
                if (ka.test(a)) return ma[a] = !0;
                la[a] = !0;
                return !1;
            }
            function pa(a, b, c, d) {
                if (null !== c && 0 === c.type) return !1;
                switch (typeof b) {
                  case "function":
                  case "symbol":
                    return !0;

                  case "boolean":
                    if (d) return !1;
                    if (null !== c) return !c.acceptsBooleans;
                    a = a.toLowerCase().slice(0, 5);
                    return "data-" !== a && "aria-" !== a;

                  default:
                    return !1;
                }
            }
            function qa(a, b, c, d) {
                if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return !0;
                if (d) return !1;
                if (null !== c) switch (c.type) {
                  case 3:
                    return !b;

                  case 4:
                    return !1 === b;

                  case 5:
                    return isNaN(b);

                  case 6:
                    return isNaN(b) || 1 > b;
                }
                return !1;
            }
            function v(a, b, c, d, e, f, g) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                this.attributeName = d;
                this.attributeNamespace = e;
                this.mustUseProperty = c;
                this.propertyName = a;
                this.type = b;
                this.sanitizeURL = f;
                this.removeEmptyString = g;
            }
            var z = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(a) {
                z[a] = new v(a, 0, !1, a, null, !1, !1);
            }));
            [ [ "acceptCharset", "accept-charset" ], [ "className", "class" ], [ "htmlFor", "for" ], [ "httpEquiv", "http-equiv" ] ].forEach((function(a) {
                var b = a[0];
                z[b] = new v(b, 1, !1, a[1], null, !1, !1);
            }));
            [ "contentEditable", "draggable", "spellCheck", "value" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha" ].forEach((function(a) {
                z[a] = new v(a, 2, !1, a, null, !1, !1);
            }));
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(a) {
                z[a] = new v(a, 3, !1, a.toLowerCase(), null, !1, !1);
            }));
            [ "checked", "multiple", "muted", "selected" ].forEach((function(a) {
                z[a] = new v(a, 3, !0, a, null, !1, !1);
            }));
            [ "capture", "download" ].forEach((function(a) {
                z[a] = new v(a, 4, !1, a, null, !1, !1);
            }));
            [ "cols", "rows", "size", "span" ].forEach((function(a) {
                z[a] = new v(a, 6, !1, a, null, !1, !1);
            }));
            [ "rowSpan", "start" ].forEach((function(a) {
                z[a] = new v(a, 5, !1, a.toLowerCase(), null, !1, !1);
            }));
            var ra = /[\-:]([a-z])/g;
            function sa(a) {
                return a[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, null, !1, !1);
            }));
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            }));
            [ "xml:base", "xml:lang", "xml:space" ].forEach((function(a) {
                var b = a.replace(ra, sa);
                z[b] = new v(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            }));
            [ "tabIndex", "crossOrigin" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !1, !1);
            }));
            z.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            [ "src", "href", "action", "formAction" ].forEach((function(a) {
                z[a] = new v(a, 1, !1, a.toLowerCase(), null, !0, !0);
            }));
            function ta(a, b, c, d) {
                var e = z.hasOwnProperty(b) ? z[b] : null;
                if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), 
                d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, 
                d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, 
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
            }
            var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
            Symbol.for("react.scope");
            Symbol.for("react.debug_trace_mode");
            var Ia = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden");
            Symbol.for("react.cache");
            Symbol.for("react.tracing_marker");
            var Ja = Symbol.iterator;
            function Ka(a) {
                if (null === a || "object" !== typeof a) return null;
                a = Ja && a[Ja] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var La, A = Object.assign;
            function Ma(a) {
                if (void 0 === La) try {
                    throw Error();
                } catch (c) {
                    var b = c.stack.trim().match(/\n( *(at )?)/);
                    La = b && b[1] || "";
                }
                return "\n" + La + a;
            }
            var Na = !1;
            function Oa(a, b) {
                if (!a || Na) return "";
                Na = !0;
                var c = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (b) if (b = function() {
                        throw Error();
                    }, Object.defineProperty(b.prototype, "props", {
                        set: function() {
                            throw Error();
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(b, []);
                        } catch (l) {
                            var d = l;
                        }
                        Reflect.construct(a, [], b);
                    } else {
                        try {
                            b.call();
                        } catch (l) {
                            d = l;
                        }
                        a.call(b.prototype);
                    } else {
                        try {
                            throw Error();
                        } catch (l) {
                            d = l;
                        }
                        a();
                    }
                } catch (l) {
                    if (l && d && "string" === typeof l.stack) {
                        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
                        for (;1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
                            if (1 !== g || 1 !== h) do {
                                if (g--, h--, 0 > h || e[g] !== f[h]) {
                                    var k = "\n" + e[g].replace(" at new ", " at ");
                                    a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                                    return k;
                                }
                            } while (1 <= g && 0 <= h);
                            break;
                        }
                    }
                } finally {
                    Na = !1, Error.prepareStackTrace = c;
                }
                return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
            }
            function Pa(a) {
                switch (a.tag) {
                  case 5:
                    return Ma(a.type);

                  case 16:
                    return Ma("Lazy");

                  case 13:
                    return Ma("Suspense");

                  case 19:
                    return Ma("SuspenseList");

                  case 0:
                  case 2:
                  case 15:
                    return a = Oa(a.type, !1), a;

                  case 11:
                    return a = Oa(a.type.render, !1), a;

                  case 1:
                    return a = Oa(a.type, !0), a;

                  default:
                    return "";
                }
            }
            function Qa(a) {
                if (null == a) return null;
                if ("function" === typeof a) return a.displayName || a.name || null;
                if ("string" === typeof a) return a;
                switch (a) {
                  case ya:
                    return "Fragment";

                  case wa:
                    return "Portal";

                  case Aa:
                    return "Profiler";

                  case za:
                    return "StrictMode";

                  case Ea:
                    return "Suspense";

                  case Fa:
                    return "SuspenseList";
                }
                if ("object" === typeof a) switch (a.$$typeof) {
                  case Ca:
                    return (a.displayName || "Context") + ".Consumer";

                  case Ba:
                    return (a._context.displayName || "Context") + ".Provider";

                  case Da:
                    var b = a.render;
                    a = a.displayName;
                    a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
                    return a;

                  case Ga:
                    return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";

                  case Ha:
                    b = a._payload;
                    a = a._init;
                    try {
                        return Qa(a(b));
                    } catch (c) {}
                }
                return null;
            }
            function Ra(a) {
                var b = a.type;
                switch (a.tag) {
                  case 24:
                    return "Cache";

                  case 9:
                    return (b.displayName || "Context") + ".Consumer";

                  case 10:
                    return (b._context.displayName || "Context") + ".Provider";

                  case 18:
                    return "DehydratedFragment";

                  case 11:
                    return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

                  case 7:
                    return "Fragment";

                  case 5:
                    return b;

                  case 4:
                    return "Portal";

                  case 3:
                    return "Root";

                  case 6:
                    return "Text";

                  case 16:
                    return Qa(b);

                  case 8:
                    return b === za ? "StrictMode" : "Mode";

                  case 22:
                    return "Offscreen";

                  case 12:
                    return "Profiler";

                  case 21:
                    return "Scope";

                  case 13:
                    return "Suspense";

                  case 19:
                    return "SuspenseList";

                  case 25:
                    return "TracingMarker";

                  case 1:
                  case 0:
                  case 17:
                  case 2:
                  case 14:
                  case 15:
                    if ("function" === typeof b) return b.displayName || b.name || null;
                    if ("string" === typeof b) return b;
                }
                return null;
            }
            function Sa(a) {
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                  case "undefined":
                    return a;

                  case "object":
                    return a;

                  default:
                    return "";
                }
            }
            function Ta(a) {
                var b = a.type;
                return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
            }
            function Ua(a) {
                var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
                if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
                    var e = c.get, f = c.set;
                    Object.defineProperty(a, b, {
                        configurable: !0,
                        get: function() {
                            return e.call(this);
                        },
                        set: function(a) {
                            d = "" + a;
                            f.call(this, a);
                        }
                    });
                    Object.defineProperty(a, b, {
                        enumerable: c.enumerable
                    });
                    return {
                        getValue: function() {
                            return d;
                        },
                        setValue: function(a) {
                            d = "" + a;
                        },
                        stopTracking: function() {
                            a._valueTracker = null;
                            delete a[b];
                        }
                    };
                }
            }
            function Va(a) {
                a._valueTracker || (a._valueTracker = Ua(a));
            }
            function Wa(a) {
                if (!a) return !1;
                var b = a._valueTracker;
                if (!b) return !0;
                var c = b.getValue();
                var d = "";
                a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
                a = d;
                return a !== c ? (b.setValue(a), !0) : !1;
            }
            function Xa(a) {
                a = a || ("undefined" !== typeof document ? document : void 0);
                if ("undefined" === typeof a) return null;
                try {
                    return a.activeElement || a.body;
                } catch (b) {
                    return a.body;
                }
            }
            function Ya(a, b) {
                var c = b.checked;
                return A({}, b, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != c ? c : a._wrapperState.initialChecked
                });
            }
            function Za(a, b) {
                var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
                c = Sa(null != b.value ? b.value : c);
                a._wrapperState = {
                    initialChecked: d,
                    initialValue: c,
                    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
                };
            }
            function ab(a, b) {
                b = b.checked;
                null != b && ta(a, "checked", b, !1);
            }
            function bb(a, b) {
                ab(a, b);
                var c = Sa(b.value), d = b.type;
                if (null != c) if ("number" === d) {
                    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
                } else a.value !== "" + c && (a.value = "" + c); else if ("submit" === d || "reset" === d) {
                    a.removeAttribute("value");
                    return;
                }
                b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
                null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
            }
            function db(a, b, c) {
                if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
                    var d = b.type;
                    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
                    b = "" + a._wrapperState.initialValue;
                    c || b === a.value || (a.value = b);
                    a.defaultValue = b;
                }
                c = a.name;
                "" !== c && (a.name = "");
                a.defaultChecked = !!a._wrapperState.initialChecked;
                "" !== c && (a.name = c);
            }
            function cb(a, b, c) {
                if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
            }
            var eb = Array.isArray;
            function fb(a, b, c, d) {
                a = a.options;
                if (b) {
                    b = {};
                    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;
                    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), 
                    e && d && (a[c].defaultSelected = !0);
                } else {
                    c = "" + Sa(c);
                    b = null;
                    for (e = 0; e < a.length; e++) {
                        if (a[e].value === c) {
                            a[e].selected = !0;
                            d && (a[e].defaultSelected = !0);
                            return;
                        }
                        null !== b || a[e].disabled || (b = a[e]);
                    }
                    null !== b && (b.selected = !0);
                }
            }
            function gb(a, b) {
                if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
                return A({}, b, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + a._wrapperState.initialValue
                });
            }
            function hb(a, b) {
                var c = b.value;
                if (null == c) {
                    c = b.children;
                    b = b.defaultValue;
                    if (null != c) {
                        if (null != b) throw Error(p(92));
                        if (eb(c)) {
                            if (1 < c.length) throw Error(p(93));
                            c = c[0];
                        }
                        b = c;
                    }
                    null == b && (b = "");
                    c = b;
                }
                a._wrapperState = {
                    initialValue: Sa(c)
                };
            }
            function ib(a, b) {
                var c = Sa(b.value), d = Sa(b.defaultValue);
                null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
                null != d && (a.defaultValue = "" + d);
            }
            function jb(a) {
                var b = a.textContent;
                b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
            }
            function kb(a) {
                switch (a) {
                  case "svg":
                    return "http://www.w3.org/2000/svg";

                  case "math":
                    return "http://www.w3.org/1998/Math/MathML";

                  default:
                    return "http://www.w3.org/1999/xhtml";
                }
            }
            function lb(a, b) {
                return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
            }
            var mb, nb = function(a) {
                return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return a(b, c, d, e);
                    }));
                } : a;
            }((function(a, b) {
                if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b; else {
                    mb = mb || document.createElement("div");
                    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
                    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
                    for (;b.firstChild; ) a.appendChild(b.firstChild);
                }
            }));
            function ob(a, b) {
                if (b) {
                    var c = a.firstChild;
                    if (c && c === a.lastChild && 3 === c.nodeType) {
                        c.nodeValue = b;
                        return;
                    }
                }
                a.textContent = b;
            }
            var pb = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, qb = [ "Webkit", "ms", "Moz", "O" ];
            Object.keys(pb).forEach((function(a) {
                qb.forEach((function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1);
                    pb[b] = pb[a];
                }));
            }));
            function rb(a, b, c) {
                return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
            }
            function sb(a, b) {
                a = a.style;
                for (var c in b) if (b.hasOwnProperty(c)) {
                    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
                    "float" === c && (c = "cssFloat");
                    d ? a.setProperty(c, e) : a[c] = e;
                }
            }
            var tb = A({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function ub(a, b) {
                if (b) {
                    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
                    if (null != b.dangerouslySetInnerHTML) {
                        if (null != b.children) throw Error(p(60));
                        if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
                    }
                    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
                }
            }
            function vb(a, b) {
                if (-1 === a.indexOf("-")) return "string" === typeof b.is;
                switch (a) {
                  case "annotation-xml":
                  case "color-profile":
                  case "font-face":
                  case "font-face-src":
                  case "font-face-uri":
                  case "font-face-format":
                  case "font-face-name":
                  case "missing-glyph":
                    return !1;

                  default:
                    return !0;
                }
            }
            var wb = null;
            function xb(a) {
                a = a.target || a.srcElement || window;
                a.correspondingUseElement && (a = a.correspondingUseElement);
                return 3 === a.nodeType ? a.parentNode : a;
            }
            var yb = null, zb = null, Ab = null;
            function Bb(a) {
                if (a = Cb(a)) {
                    if ("function" !== typeof yb) throw Error(p(280));
                    var b = a.stateNode;
                    b && (b = Db(b), yb(a.stateNode, a.type, b));
                }
            }
            function Eb(a) {
                zb ? Ab ? Ab.push(a) : Ab = [ a ] : zb = a;
            }
            function Fb() {
                if (zb) {
                    var a = zb, b = Ab;
                    Ab = zb = null;
                    Bb(a);
                    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
                }
            }
            function Gb(a, b) {
                return a(b);
            }
            function Hb() {}
            var Ib = !1;
            function Jb(a, b, c) {
                if (Ib) return a(b, c);
                Ib = !0;
                try {
                    return Gb(a, b, c);
                } finally {
                    if (Ib = !1, null !== zb || null !== Ab) Hb(), Fb();
                }
            }
            function Kb(a, b) {
                var c = a.stateNode;
                if (null === c) return null;
                var d = Db(c);
                if (null === d) return null;
                c = d[b];
                a: switch (b) {
                  case "onClick":
                  case "onClickCapture":
                  case "onDoubleClick":
                  case "onDoubleClickCapture":
                  case "onMouseDown":
                  case "onMouseDownCapture":
                  case "onMouseMove":
                  case "onMouseMoveCapture":
                  case "onMouseUp":
                  case "onMouseUpCapture":
                  case "onMouseEnter":
                    (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
                    a = !d;
                    break a;

                  default:
                    a = !1;
                }
                if (a) return null;
                if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
                return c;
            }
            var Lb = !1;
            if (ia) try {
                var Mb = {};
                Object.defineProperty(Mb, "passive", {
                    get: function() {
                        Lb = !0;
                    }
                });
                window.addEventListener("test", Mb, Mb);
                window.removeEventListener("test", Mb, Mb);
            } catch (a) {
                Lb = !1;
            }
            function Nb(a, b, c, d, e, f, g, h, k) {
                var l = Array.prototype.slice.call(arguments, 3);
                try {
                    b.apply(c, l);
                } catch (m) {
                    this.onError(m);
                }
            }
            var Ob = !1, Pb = null, Qb = !1, Rb = null, Sb = {
                onError: function(a) {
                    Ob = !0;
                    Pb = a;
                }
            };
            function Tb(a, b, c, d, e, f, g, h, k) {
                Ob = !1;
                Pb = null;
                Nb.apply(Sb, arguments);
            }
            function Ub(a, b, c, d, e, f, g, h, k) {
                Tb.apply(this, arguments);
                if (Ob) {
                    if (Ob) {
                        var l = Pb;
                        Ob = !1;
                        Pb = null;
                    } else throw Error(p(198));
                    Qb || (Qb = !0, Rb = l);
                }
            }
            function Vb(a) {
                var b = a, c = a;
                if (a.alternate) for (;b.return; ) b = b.return; else {
                    a = b;
                    do {
                        b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
                    } while (a);
                }
                return 3 === b.tag ? c : null;
            }
            function Wb(a) {
                if (13 === a.tag) {
                    var b = a.memoizedState;
                    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
                    if (null !== b) return b.dehydrated;
                }
                return null;
            }
            function Xb(a) {
                if (Vb(a) !== a) throw Error(p(188));
            }
            function Yb(a) {
                var b = a.alternate;
                if (!b) {
                    b = Vb(a);
                    if (null === b) throw Error(p(188));
                    return b !== a ? null : a;
                }
                for (var c = a, d = b; ;) {
                    var e = c.return;
                    if (null === e) break;
                    var f = e.alternate;
                    if (null === f) {
                        d = e.return;
                        if (null !== d) {
                            c = d;
                            continue;
                        }
                        break;
                    }
                    if (e.child === f.child) {
                        for (f = e.child; f; ) {
                            if (f === c) return Xb(e), a;
                            if (f === d) return Xb(e), b;
                            f = f.sibling;
                        }
                        throw Error(p(188));
                    }
                    if (c.return !== d.return) c = e, d = f; else {
                        for (var g = !1, h = e.child; h; ) {
                            if (h === c) {
                                g = !0;
                                c = e;
                                d = f;
                                break;
                            }
                            if (h === d) {
                                g = !0;
                                d = e;
                                c = f;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!g) {
                            for (h = f.child; h; ) {
                                if (h === c) {
                                    g = !0;
                                    c = f;
                                    d = e;
                                    break;
                                }
                                if (h === d) {
                                    g = !0;
                                    d = f;
                                    c = e;
                                    break;
                                }
                                h = h.sibling;
                            }
                            if (!g) throw Error(p(189));
                        }
                    }
                    if (c.alternate !== d) throw Error(p(190));
                }
                if (3 !== c.tag) throw Error(p(188));
                return c.stateNode.current === c ? a : b;
            }
            function Zb(a) {
                a = Yb(a);
                return null !== a ? $b(a) : null;
            }
            function $b(a) {
                if (5 === a.tag || 6 === a.tag) return a;
                for (a = a.child; null !== a; ) {
                    var b = $b(a);
                    if (null !== b) return b;
                    a = a.sibling;
                }
                return null;
            }
            var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
            function mc(a) {
                if (lc && "function" === typeof lc.onCommitFiberRoot) try {
                    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
                } catch (b) {}
            }
            var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
            function nc(a) {
                a >>>= 0;
                return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
            }
            var rc = 64, sc = 4194304;
            function tc(a) {
                switch (a & -a) {
                  case 1:
                    return 1;

                  case 2:
                    return 2;

                  case 4:
                    return 4;

                  case 8:
                    return 8;

                  case 16:
                    return 16;

                  case 32:
                    return 32;

                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return a & 4194240;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return a & 130023424;

                  case 134217728:
                    return 134217728;

                  case 268435456:
                    return 268435456;

                  case 536870912:
                    return 536870912;

                  case 1073741824:
                    return 1073741824;

                  default:
                    return a;
                }
            }
            function uc(a, b) {
                var c = a.pendingLanes;
                if (0 === c) return 0;
                var d = 0, e = a.suspendedLanes, f = a.pingedLanes, g = c & 268435455;
                if (0 !== g) {
                    var h = g & ~e;
                    0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
                } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
                if (0 === d) return 0;
                if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
                0 !== (d & 4) && (d |= c & 16);
                b = a.entangledLanes;
                if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, 
                d |= a[c], b &= ~e;
                return d;
            }
            function vc(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 4:
                    return b + 250;

                  case 8:
                  case 16:
                  case 32:
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                    return b + 5e3;

                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    return -1;

                  case 134217728:
                  case 268435456:
                  case 536870912:
                  case 1073741824:
                    return -1;

                  default:
                    return -1;
                }
            }
            function wc(a, b) {
                for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f; ) {
                    var g = 31 - oc(f), h = 1 << g, k = e[g];
                    if (-1 === k) {
                        if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
                    } else k <= b && (a.expiredLanes |= h);
                    f &= ~h;
                }
            }
            function xc(a) {
                a = a.pendingLanes & -1073741825;
                return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
            }
            function yc() {
                var a = rc;
                rc <<= 1;
                0 === (rc & 4194240) && (rc = 64);
                return a;
            }
            function zc(a) {
                for (var b = [], c = 0; 31 > c; c++) b.push(a);
                return b;
            }
            function Ac(a, b, c) {
                a.pendingLanes |= b;
                536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
                a = a.eventTimes;
                b = 31 - oc(b);
                a[b] = c;
            }
            function Bc(a, b) {
                var c = a.pendingLanes & ~b;
                a.pendingLanes = b;
                a.suspendedLanes = 0;
                a.pingedLanes = 0;
                a.expiredLanes &= b;
                a.mutableReadLanes &= b;
                a.entangledLanes &= b;
                b = a.entanglements;
                var d = a.eventTimes;
                for (a = a.expirationTimes; 0 < c; ) {
                    var e = 31 - oc(c), f = 1 << e;
                    b[e] = 0;
                    d[e] = -1;
                    a[e] = -1;
                    c &= ~f;
                }
            }
            function Cc(a, b) {
                var c = a.entangledLanes |= b;
                for (a = a.entanglements; c; ) {
                    var d = 31 - oc(c), e = 1 << d;
                    e & b | a[d] & b && (a[d] |= b);
                    c &= ~e;
                }
            }
            var C = 0;
            function Dc(a) {
                a &= -a;
                return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
            }
            var Ec, Fc, Gc, Hc, Ic, Jc = !1, Kc = [], Lc = null, Mc = null, Nc = null, Oc = new Map, Pc = new Map, Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function Sc(a, b) {
                switch (a) {
                  case "focusin":
                  case "focusout":
                    Lc = null;
                    break;

                  case "dragenter":
                  case "dragleave":
                    Mc = null;
                    break;

                  case "mouseover":
                  case "mouseout":
                    Nc = null;
                    break;

                  case "pointerover":
                  case "pointerout":
                    Oc.delete(b.pointerId);
                    break;

                  case "gotpointercapture":
                  case "lostpointercapture":
                    Pc.delete(b.pointerId);
                }
            }
            function Tc(a, b, c, d, e, f) {
                if (null === a || a.nativeEvent !== f) return a = {
                    blockedOn: b,
                    domEventName: c,
                    eventSystemFlags: d,
                    nativeEvent: f,
                    targetContainers: [ e ]
                }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
                a.eventSystemFlags |= d;
                b = a.targetContainers;
                null !== e && -1 === b.indexOf(e) && b.push(e);
                return a;
            }
            function Uc(a, b, c, d, e) {
                switch (b) {
                  case "focusin":
                    return Lc = Tc(Lc, a, b, c, d, e), !0;

                  case "dragenter":
                    return Mc = Tc(Mc, a, b, c, d, e), !0;

                  case "mouseover":
                    return Nc = Tc(Nc, a, b, c, d, e), !0;

                  case "pointerover":
                    var f = e.pointerId;
                    Oc.set(f, Tc(Oc.get(f) || null, a, b, c, d, e));
                    return !0;

                  case "gotpointercapture":
                    return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a, b, c, d, e)), !0;
                }
                return !1;
            }
            function Vc(a) {
                var b = Wc(a.target);
                if (null !== b) {
                    var c = Vb(b);
                    if (null !== c) if (b = c.tag, 13 === b) {
                        if (b = Wb(c), null !== b) {
                            a.blockedOn = b;
                            Ic(a.priority, (function() {
                                Gc(c);
                            }));
                            return;
                        }
                    } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
                        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
                        return;
                    }
                }
                a.blockedOn = null;
            }
            function Xc(a) {
                if (null !== a.blockedOn) return !1;
                for (var b = a.targetContainers; 0 < b.length; ) {
                    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
                    if (null === c) {
                        c = a.nativeEvent;
                        var d = new c.constructor(c.type, c);
                        wb = d;
                        c.target.dispatchEvent(d);
                        wb = null;
                    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, !1;
                    b.shift();
                }
                return !0;
            }
            function Zc(a, b, c) {
                Xc(a) && c.delete(b);
            }
            function $c() {
                Jc = !1;
                null !== Lc && Xc(Lc) && (Lc = null);
                null !== Mc && Xc(Mc) && (Mc = null);
                null !== Nc && Xc(Nc) && (Nc = null);
                Oc.forEach(Zc);
                Pc.forEach(Zc);
            }
            function ad(a, b) {
                a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = !0, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
            }
            function bd(a) {
                function b(b) {
                    return ad(b, a);
                }
                if (0 < Kc.length) {
                    ad(Kc[0], a);
                    for (var c = 1; c < Kc.length; c++) {
                        var d = Kc[c];
                        d.blockedOn === a && (d.blockedOn = null);
                    }
                }
                null !== Lc && ad(Lc, a);
                null !== Mc && ad(Mc, a);
                null !== Nc && ad(Nc, a);
                Oc.forEach(b);
                Pc.forEach(b);
                for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
                for (;0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
            }
            var cd = ua.ReactCurrentBatchConfig, dd = !0;
            function ed(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 1, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function gd(a, b, c, d) {
                var e = C, f = cd.transition;
                cd.transition = null;
                try {
                    C = 4, fd(a, b, c, d);
                } finally {
                    C = e, cd.transition = f;
                }
            }
            function fd(a, b, c, d) {
                if (dd) {
                    var e = Yc(a, b, c, d);
                    if (null === e) hd(a, b, d, id, c), Sc(a, d); else if (Uc(e, a, b, c, d)) d.stopPropagation(); else if (Sc(a, d), 
                    b & 4 && -1 < Rc.indexOf(a)) {
                        for (;null !== e; ) {
                            var f = Cb(e);
                            null !== f && Ec(f);
                            f = Yc(a, b, c, d);
                            null === f && hd(a, b, d, id, c);
                            if (f === e) break;
                            e = f;
                        }
                        null !== e && d.stopPropagation();
                    } else hd(a, b, d, null, c);
                }
            }
            var id = null;
            function Yc(a, b, c, d) {
                id = null;
                a = xb(d);
                a = Wc(a);
                if (null !== a) if (b = Vb(a), null === b) a = null; else if (c = b.tag, 13 === c) {
                    a = Wb(b);
                    if (null !== a) return a;
                    a = null;
                } else if (3 === c) {
                    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
                    a = null;
                } else b !== a && (a = null);
                id = a;
                return null;
            }
            function jd(a) {
                switch (a) {
                  case "cancel":
                  case "click":
                  case "close":
                  case "contextmenu":
                  case "copy":
                  case "cut":
                  case "auxclick":
                  case "dblclick":
                  case "dragend":
                  case "dragstart":
                  case "drop":
                  case "focusin":
                  case "focusout":
                  case "input":
                  case "invalid":
                  case "keydown":
                  case "keypress":
                  case "keyup":
                  case "mousedown":
                  case "mouseup":
                  case "paste":
                  case "pause":
                  case "play":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointerup":
                  case "ratechange":
                  case "reset":
                  case "resize":
                  case "seeked":
                  case "submit":
                  case "touchcancel":
                  case "touchend":
                  case "touchstart":
                  case "volumechange":
                  case "change":
                  case "selectionchange":
                  case "textInput":
                  case "compositionstart":
                  case "compositionend":
                  case "compositionupdate":
                  case "beforeblur":
                  case "afterblur":
                  case "beforeinput":
                  case "blur":
                  case "fullscreenchange":
                  case "focus":
                  case "hashchange":
                  case "popstate":
                  case "select":
                  case "selectstart":
                    return 1;

                  case "drag":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "mousemove":
                  case "mouseout":
                  case "mouseover":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "scroll":
                  case "toggle":
                  case "touchmove":
                  case "wheel":
                  case "mouseenter":
                  case "mouseleave":
                  case "pointerenter":
                  case "pointerleave":
                    return 4;

                  case "message":
                    switch (ec()) {
                      case fc:
                        return 1;

                      case gc:
                        return 4;

                      case hc:
                      case ic:
                        return 16;

                      case jc:
                        return 536870912;

                      default:
                        return 16;
                    }

                  default:
                    return 16;
                }
            }
            var kd = null, ld = null, md = null;
            function nd() {
                if (md) return md;
                var a, d, b = ld, c = b.length, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
                for (a = 0; a < c && b[a] === e[a]; a++) ;
                var g = c - a;
                for (d = 1; d <= g && b[c - d] === e[f - d]; d++) ;
                return md = e.slice(a, 1 < d ? 1 - d : void 0);
            }
            function od(a) {
                var b = a.keyCode;
                "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
                10 === a && (a = 13);
                return 32 <= a || 13 === a ? a : 0;
            }
            function pd() {
                return !0;
            }
            function qd() {
                return !1;
            }
            function rd(a) {
                function b(b, d, e, f, g) {
                    this._reactName = b;
                    this._targetInst = e;
                    this.type = d;
                    this.nativeEvent = f;
                    this.target = g;
                    this.currentTarget = null;
                    for (var c in a) a.hasOwnProperty(c) && (b = a[c], this[c] = b ? b(f) : f[c]);
                    this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue) ? pd : qd;
                    this.isPropagationStopped = qd;
                    return this;
                }
                A(b.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var a = this.nativeEvent;
                        a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), 
                        this.isDefaultPrevented = pd);
                    },
                    stopPropagation: function() {
                        var a = this.nativeEvent;
                        a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), 
                        this.isPropagationStopped = pd);
                    },
                    persist: function() {},
                    isPersistent: pd
                });
                return b;
            }
            var wd, xd, yd, sd = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(a) {
                    return a.timeStamp || Date.now();
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, td = rd(sd), ud = A({}, sd, {
                view: 0,
                detail: 0
            }), vd = rd(ud), Ad = A({}, ud, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: zd,
                button: 0,
                buttons: 0,
                relatedTarget: function(a) {
                    return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
                },
                movementX: function(a) {
                    if ("movementX" in a) return a.movementX;
                    a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, 
                    yd = a);
                    return wd;
                },
                movementY: function(a) {
                    return "movementY" in a ? a.movementY : xd;
                }
            }), Bd = rd(Ad), Cd = A({}, Ad, {
                dataTransfer: 0
            }), Dd = rd(Cd), Ed = A({}, ud, {
                relatedTarget: 0
            }), Fd = rd(Ed), Gd = A({}, sd, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Hd = rd(Gd), Id = A({}, sd, {
                clipboardData: function(a) {
                    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
                }
            }), Jd = rd(Id), Kd = A({}, sd, {
                data: 0
            }), Ld = rd(Kd), Md = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, Nd = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Od = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Pd(a) {
                var b = this.nativeEvent;
                return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : !1;
            }
            function zd() {
                return Pd;
            }
            var Qd = A({}, ud, {
                key: function(a) {
                    if (a.key) {
                        var b = Md[a.key] || a.key;
                        if ("Unidentified" !== b) return b;
                    }
                    return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: zd,
                charCode: function(a) {
                    return "keypress" === a.type ? od(a) : 0;
                },
                keyCode: function(a) {
                    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                },
                which: function(a) {
                    return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
                }
            }), Rd = rd(Qd), Sd = A({}, Ad, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }), Td = rd(Sd), Ud = A({}, ud, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: zd
            }), Vd = rd(Ud), Wd = A({}, sd, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }), Xd = rd(Wd), Yd = A({}, Ad, {
                deltaX: function(a) {
                    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
                },
                deltaY: function(a) {
                    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
                },
                deltaZ: 0,
                deltaMode: 0
            }), Zd = rd(Yd), $d = [ 9, 13, 27, 32 ], ae = ia && "CompositionEvent" in window, be = null;
            ia && "documentMode" in document && (be = document.documentMode);
            var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = !1;
            function ge(a, b) {
                switch (a) {
                  case "keyup":
                    return -1 !== $d.indexOf(b.keyCode);

                  case "keydown":
                    return 229 !== b.keyCode;

                  case "keypress":
                  case "mousedown":
                  case "focusout":
                    return !0;

                  default:
                    return !1;
                }
            }
            function he(a) {
                a = a.detail;
                return "object" === typeof a && "data" in a ? a.data : null;
            }
            var ie = !1;
            function je(a, b) {
                switch (a) {
                  case "compositionend":
                    return he(b);

                  case "keypress":
                    if (32 !== b.which) return null;
                    fe = !0;
                    return ee;

                  case "textInput":
                    return a = b.data, a === ee && fe ? null : a;

                  default:
                    return null;
                }
            }
            function ke(a, b) {
                if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, 
                ie = !1, a) : null;
                switch (a) {
                  case "paste":
                    return null;

                  case "keypress":
                    if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
                        if (b.char && 1 < b.char.length) return b.char;
                        if (b.which) return String.fromCharCode(b.which);
                    }
                    return null;

                  case "compositionend":
                    return de && "ko" !== b.locale ? null : b.data;

                  default:
                    return null;
                }
            }
            var le = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function me(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return "input" === b ? !!le[a.type] : "textarea" === b ? !0 : !1;
            }
            function ne(a, b, c, d) {
                Eb(d);
                b = oe(b, "onChange");
                0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({
                    event: c,
                    listeners: b
                }));
            }
            var pe = null, qe = null;
            function re(a) {
                se(a, 0);
            }
            function te(a) {
                var b = ue(a);
                if (Wa(b)) return a;
            }
            function ve(a, b) {
                if ("change" === a) return b;
            }
            var we = !1;
            if (ia) {
                var xe;
                if (ia) {
                    var ye = "oninput" in document;
                    if (!ye) {
                        var ze = document.createElement("div");
                        ze.setAttribute("oninput", "return;");
                        ye = "function" === typeof ze.oninput;
                    }
                    xe = ye;
                } else xe = !1;
                we = xe && (!document.documentMode || 9 < document.documentMode);
            }
            function Ae() {
                pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
            }
            function Be(a) {
                if ("value" === a.propertyName && te(qe)) {
                    var b = [];
                    ne(b, qe, a, xb(a));
                    Jb(re, b);
                }
            }
            function Ce(a, b, c) {
                "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
            }
            function De(a) {
                if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
            }
            function Ee(a, b) {
                if ("click" === a) return te(b);
            }
            function Fe(a, b) {
                if ("input" === a || "change" === a) return te(b);
            }
            function Ge(a, b) {
                return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
            }
            var He = "function" === typeof Object.is ? Object.is : Ge;
            function Ie(a, b) {
                if (He(a, b)) return !0;
                if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
                var c = Object.keys(a), d = Object.keys(b);
                if (c.length !== d.length) return !1;
                for (d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (!ja.call(b, e) || !He(a[e], b[e])) return !1;
                }
                return !0;
            }
            function Je(a) {
                for (;a && a.firstChild; ) a = a.firstChild;
                return a;
            }
            function Ke(a, b) {
                var c = Je(a);
                a = 0;
                for (var d; c; ) {
                    if (3 === c.nodeType) {
                        d = a + c.textContent.length;
                        if (a <= b && d >= b) return {
                            node: c,
                            offset: b - a
                        };
                        a = d;
                    }
                    a: {
                        for (;c; ) {
                            if (c.nextSibling) {
                                c = c.nextSibling;
                                break a;
                            }
                            c = c.parentNode;
                        }
                        c = void 0;
                    }
                    c = Je(c);
                }
            }
            function Le(a, b) {
                return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
            }
            function Me() {
                for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
                    try {
                        var c = "string" === typeof b.contentWindow.location.href;
                    } catch (d) {
                        c = !1;
                    }
                    if (c) a = b.contentWindow; else break;
                    b = Xa(a.document);
                }
                return b;
            }
            function Ne(a) {
                var b = a && a.nodeName && a.nodeName.toLowerCase();
                return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
            }
            function Oe(a) {
                var b = Me(), c = a.focusedElem, d = a.selectionRange;
                if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
                    if (null !== d && Ne(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, 
                    c.selectionEnd = Math.min(a, c.value.length); else if (a = (b = c.ownerDocument || document) && b.defaultView || window, 
                    a.getSelection) {
                        a = a.getSelection();
                        var e = c.textContent.length, f = Math.min(d.start, e);
                        d = void 0 === d.end ? f : Math.min(d.end, e);
                        !a.extend && f > d && (e = d, d = f, f = e);
                        e = Ke(c, f);
                        var g = Ke(c, d);
                        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), 
                        b.setStart(e.node, e.offset), a.removeAllRanges(), f > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), 
                        a.addRange(b)));
                    }
                    b = [];
                    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({
                        element: a,
                        left: a.scrollLeft,
                        top: a.scrollTop
                    });
                    "function" === typeof c.focus && c.focus();
                    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
                }
            }
            var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = !1;
            function Ue(a, b, c) {
                var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
                Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = {
                    start: d.selectionStart,
                    end: d.selectionEnd
                } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), 
                d = {
                    anchorNode: d.anchorNode,
                    anchorOffset: d.anchorOffset,
                    focusNode: d.focusNode,
                    focusOffset: d.focusOffset
                }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), 
                a.push({
                    event: b,
                    listeners: d
                }), b.target = Qe)));
            }
            function Ve(a, b) {
                var c = {};
                c[a.toLowerCase()] = b.toLowerCase();
                c["Webkit" + a] = "webkit" + b;
                c["Moz" + a] = "moz" + b;
                return c;
            }
            var We = {
                animationend: Ve("Animation", "AnimationEnd"),
                animationiteration: Ve("Animation", "AnimationIteration"),
                animationstart: Ve("Animation", "AnimationStart"),
                transitionend: Ve("Transition", "TransitionEnd")
            }, Xe = {}, Ye = {};
            ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, 
            delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
            function Ze(a) {
                if (Xe[a]) return Xe[a];
                if (!We[a]) return a;
                var c, b = We[a];
                for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
                return a;
            }
            var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = new Map, ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
            function ff(a, b) {
                df.set(a, b);
                fa(b, [ a ]);
            }
            for (var gf = 0; gf < ef.length; gf++) {
                var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
                ff(jf, "on" + kf);
            }
            ff($e, "onAnimationEnd");
            ff(af, "onAnimationIteration");
            ff(bf, "onAnimationStart");
            ff("dblclick", "onDoubleClick");
            ff("focusin", "onFocus");
            ff("focusout", "onBlur");
            ff(cf, "onTransitionEnd");
            ha("onMouseEnter", [ "mouseout", "mouseover" ]);
            ha("onMouseLeave", [ "mouseout", "mouseover" ]);
            ha("onPointerEnter", [ "pointerout", "pointerover" ]);
            ha("onPointerLeave", [ "pointerout", "pointerover" ]);
            fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
            fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
            fa("onBeforeInput", [ "compositionend", "keypress", "textInput", "paste" ]);
            fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
            fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
            function nf(a, b, c) {
                var d = a.type || "unknown-event";
                a.currentTarget = c;
                Ub(d, b, void 0, a);
                a.currentTarget = null;
            }
            function se(a, b) {
                b = 0 !== (b & 4);
                for (var c = 0; c < a.length; c++) {
                    var d = a[c], e = d.event;
                    d = d.listeners;
                    a: {
                        var f = void 0;
                        if (b) for (var g = d.length - 1; 0 <= g; g--) {
                            var h = d[g], k = h.instance, l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        } else for (g = 0; g < d.length; g++) {
                            h = d[g];
                            k = h.instance;
                            l = h.currentTarget;
                            h = h.listener;
                            if (k !== f && e.isPropagationStopped()) break a;
                            nf(e, h, l);
                            f = k;
                        }
                    }
                }
                if (Qb) throw a = Rb, Qb = !1, Rb = null, a;
            }
            function D(a, b) {
                var c = b[of];
                void 0 === c && (c = b[of] = new Set);
                var d = a + "__bubble";
                c.has(d) || (pf(b, a, 2, !1), c.add(d));
            }
            function qf(a, b, c) {
                var d = 0;
                b && (d |= 4);
                pf(c, a, d, b);
            }
            var rf = "_reactListening" + Math.random().toString(36).slice(2);
            function sf(a) {
                if (!a[rf]) {
                    a[rf] = !0;
                    da.forEach((function(b) {
                        "selectionchange" !== b && (mf.has(b) || qf(b, !1, a), qf(b, !0, a));
                    }));
                    var b = 9 === a.nodeType ? a : a.ownerDocument;
                    null === b || b[rf] || (b[rf] = !0, qf("selectionchange", !1, b));
                }
            }
            function pf(a, b, c, d) {
                switch (jd(b)) {
                  case 1:
                    var e = ed;
                    break;

                  case 4:
                    e = gd;
                    break;

                  default:
                    e = fd;
                }
                c = e.bind(null, b, c, a);
                e = void 0;
                !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = !0);
                d ? void 0 !== e ? a.addEventListener(b, c, {
                    capture: !0,
                    passive: e
                }) : a.addEventListener(b, c, !0) : void 0 !== e ? a.addEventListener(b, c, {
                    passive: e
                }) : a.addEventListener(b, c, !1);
            }
            function hd(a, b, c, d, e) {
                var f = d;
                if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (;;) {
                    if (null === d) return;
                    var g = d.tag;
                    if (3 === g || 4 === g) {
                        var h = d.stateNode.containerInfo;
                        if (h === e || 8 === h.nodeType && h.parentNode === e) break;
                        if (4 === g) for (g = d.return; null !== g; ) {
                            var k = g.tag;
                            if (3 === k || 4 === k) if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
                            g = g.return;
                        }
                        for (;null !== h; ) {
                            g = Wc(h);
                            if (null === g) return;
                            k = g.tag;
                            if (5 === k || 6 === k) {
                                d = f = g;
                                continue a;
                            }
                            h = h.parentNode;
                        }
                    }
                    d = d.return;
                }
                Jb((function() {
                    var d = f, e = xb(c), g = [];
                    a: {
                        var h = df.get(a);
                        if (void 0 !== h) {
                            var k = td, n = a;
                            switch (a) {
                              case "keypress":
                                if (0 === od(c)) break a;

                              case "keydown":
                              case "keyup":
                                k = Rd;
                                break;

                              case "focusin":
                                n = "focus";
                                k = Fd;
                                break;

                              case "focusout":
                                n = "blur";
                                k = Fd;
                                break;

                              case "beforeblur":
                              case "afterblur":
                                k = Fd;
                                break;

                              case "click":
                                if (2 === c.button) break a;

                              case "auxclick":
                              case "dblclick":
                              case "mousedown":
                              case "mousemove":
                              case "mouseup":
                              case "mouseout":
                              case "mouseover":
                              case "contextmenu":
                                k = Bd;
                                break;

                              case "drag":
                              case "dragend":
                              case "dragenter":
                              case "dragexit":
                              case "dragleave":
                              case "dragover":
                              case "dragstart":
                              case "drop":
                                k = Dd;
                                break;

                              case "touchcancel":
                              case "touchend":
                              case "touchmove":
                              case "touchstart":
                                k = Vd;
                                break;

                              case $e:
                              case af:
                              case bf:
                                k = Hd;
                                break;

                              case cf:
                                k = Xd;
                                break;

                              case "scroll":
                                k = vd;
                                break;

                              case "wheel":
                                k = Zd;
                                break;

                              case "copy":
                              case "cut":
                              case "paste":
                                k = Jd;
                                break;

                              case "gotpointercapture":
                              case "lostpointercapture":
                              case "pointercancel":
                              case "pointerdown":
                              case "pointermove":
                              case "pointerout":
                              case "pointerover":
                              case "pointerup":
                                k = Td;
                            }
                            var t = 0 !== (b & 4), J = !t && "scroll" === a, x = t ? null !== h ? h + "Capture" : null : h;
                            t = [];
                            for (var u, w = d; null !== w; ) {
                                u = w;
                                var F = u.stateNode;
                                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                                if (J) break;
                                w = w.return;
                            }
                            0 < t.length && (h = new k(h, n, null, c, e), g.push({
                                event: h,
                                listeners: t
                            }));
                        }
                    }
                    if (0 === (b & 7)) {
                        a: {
                            h = "mouseover" === a || "pointerover" === a;
                            k = "mouseout" === a || "pointerout" === a;
                            if (h && c !== wb && (n = c.relatedTarget || c.fromElement) && (Wc(n) || n[uf])) break a;
                            if (k || h) {
                                h = e.window === e ? e : (h = e.ownerDocument) ? h.defaultView || h.parentWindow : window;
                                if (k) {
                                    if (n = c.relatedTarget || c.toElement, k = d, n = n ? Wc(n) : null, null !== n && (J = Vb(n), 
                                    n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                                } else k = null, n = d;
                                if (k !== n) {
                                    t = Bd;
                                    F = "onMouseLeave";
                                    x = "onMouseEnter";
                                    w = "mouse";
                                    if ("pointerout" === a || "pointerover" === a) t = Td, F = "onPointerLeave", x = "onPointerEnter", 
                                    w = "pointer";
                                    J = null == k ? h : ue(k);
                                    u = null == n ? h : ue(n);
                                    h = new t(F, w + "leave", k, c, e);
                                    h.target = J;
                                    h.relatedTarget = u;
                                    F = null;
                                    Wc(e) === d && (t = new t(x, w + "enter", n, c, e), t.target = u, t.relatedTarget = J, 
                                    F = t);
                                    J = F;
                                    if (k && n) b: {
                                        t = k;
                                        x = n;
                                        w = 0;
                                        for (u = t; u; u = vf(u)) w++;
                                        u = 0;
                                        for (F = x; F; F = vf(F)) u++;
                                        for (;0 < w - u; ) t = vf(t), w--;
                                        for (;0 < u - w; ) x = vf(x), u--;
                                        for (;w--; ) {
                                            if (t === x || null !== x && t === x.alternate) break b;
                                            t = vf(t);
                                            x = vf(x);
                                        }
                                        t = null;
                                    } else t = null;
                                    null !== k && wf(g, h, k, t, !1);
                                    null !== n && null !== J && wf(g, J, n, t, !0);
                                }
                            }
                        }
                        a: {
                            h = d ? ue(d) : window;
                            k = h.nodeName && h.nodeName.toLowerCase();
                            if ("select" === k || "input" === k && "file" === h.type) var na = ve; else if (me(h)) if (we) na = Fe; else {
                                na = De;
                                var xa = Ce;
                            } else (k = h.nodeName) && "input" === k.toLowerCase() && ("checkbox" === h.type || "radio" === h.type) && (na = Ee);
                            if (na && (na = na(a, d))) {
                                ne(g, na, c, e);
                                break a;
                            }
                            xa && xa(a, h, d);
                            "focusout" === a && (xa = h._wrapperState) && xa.controlled && "number" === h.type && cb(h, "number", h.value);
                        }
                        xa = d ? ue(d) : window;
                        switch (a) {
                          case "focusin":
                            if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d, Se = null;
                            break;

                          case "focusout":
                            Se = Re = Qe = null;
                            break;

                          case "mousedown":
                            Te = !0;
                            break;

                          case "contextmenu":
                          case "mouseup":
                          case "dragend":
                            Te = !1;
                            Ue(g, c, e);
                            break;

                          case "selectionchange":
                            if (Pe) break;

                          case "keydown":
                          case "keyup":
                            Ue(g, c, e);
                        }
                        var $a;
                        if (ae) b: {
                            switch (a) {
                              case "compositionstart":
                                var ba = "onCompositionStart";
                                break b;

                              case "compositionend":
                                ba = "onCompositionEnd";
                                break b;

                              case "compositionupdate":
                                ba = "onCompositionUpdate";
                                break b;
                            }
                            ba = void 0;
                        } else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
                        ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e, 
                        ld = "value" in kd ? kd.value : kd.textContent, ie = !0)), xa = oe(d, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e), 
                        g.push({
                            event: ba,
                            listeners: xa
                        }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
                        if ($a = ce ? je(a, c) : ke(a, c)) d = oe(d, "onBeforeInput"), 0 < d.length && (e = new Ld("onBeforeInput", "beforeinput", null, c, e), 
                        g.push({
                            event: e,
                            listeners: d
                        }), e.data = $a);
                    }
                    se(g, b);
                }));
            }
            function tf(a, b, c) {
                return {
                    instance: a,
                    listener: b,
                    currentTarget: c
                };
            }
            function oe(a, b) {
                for (var c = b + "Capture", d = []; null !== a; ) {
                    var e = a, f = e.stateNode;
                    5 === e.tag && null !== f && (e = f, f = Kb(a, c), null != f && d.unshift(tf(a, f, e)), 
                    f = Kb(a, b), null != f && d.push(tf(a, f, e)));
                    a = a.return;
                }
                return d;
            }
            function vf(a) {
                if (null === a) return null;
                do {
                    a = a.return;
                } while (a && 5 !== a.tag);
                return a ? a : null;
            }
            function wf(a, b, c, d, e) {
                for (var f = b._reactName, g = []; null !== c && c !== d; ) {
                    var h = c, k = h.alternate, l = h.stateNode;
                    if (null !== k && k === d) break;
                    5 === h.tag && null !== l && (h = l, e ? (k = Kb(c, f), null != k && g.unshift(tf(c, k, h))) : e || (k = Kb(c, f), 
                    null != k && g.push(tf(c, k, h))));
                    c = c.return;
                }
                0 !== g.length && a.push({
                    event: b,
                    listeners: g
                });
            }
            var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
            function zf(a) {
                return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
            }
            function Af(a, b, c) {
                b = zf(b);
                if (zf(a) !== b && c) throw Error(p(425));
            }
            function Bf() {}
            var Cf = null, Df = null;
            function Ef(a, b) {
                return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
            }
            var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
                return Hf.resolve(null).then(a).catch(If);
            } : Ff;
            function If(a) {
                setTimeout((function() {
                    throw a;
                }));
            }
            function Kf(a, b) {
                var c = b, d = 0;
                do {
                    var e = c.nextSibling;
                    a.removeChild(c);
                    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
                        if (0 === d) {
                            a.removeChild(e);
                            bd(b);
                            return;
                        }
                        d--;
                    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
                    c = e;
                } while (c);
                bd(b);
            }
            function Lf(a) {
                for (;null != a; a = a.nextSibling) {
                    var b = a.nodeType;
                    if (1 === b || 3 === b) break;
                    if (8 === b) {
                        b = a.data;
                        if ("$" === b || "$!" === b || "$?" === b) break;
                        if ("/$" === b) return null;
                    }
                }
                return a;
            }
            function Mf(a) {
                a = a.previousSibling;
                for (var b = 0; a; ) {
                    if (8 === a.nodeType) {
                        var c = a.data;
                        if ("$" === c || "$!" === c || "$?" === c) {
                            if (0 === b) return a;
                            b--;
                        } else "/$" === c && b++;
                    }
                    a = a.previousSibling;
                }
                return null;
            }
            var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
            function Wc(a) {
                var b = a[Of];
                if (b) return b;
                for (var c = a.parentNode; c; ) {
                    if (b = c[uf] || c[Of]) {
                        c = b.alternate;
                        if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
                            if (c = a[Of]) return c;
                            a = Mf(a);
                        }
                        return b;
                    }
                    a = c;
                    c = a.parentNode;
                }
                return null;
            }
            function Cb(a) {
                a = a[Of] || a[uf];
                return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
            }
            function ue(a) {
                if (5 === a.tag || 6 === a.tag) return a.stateNode;
                throw Error(p(33));
            }
            function Db(a) {
                return a[Pf] || null;
            }
            var Sf = [], Tf = -1;
            function Uf(a) {
                return {
                    current: a
                };
            }
            function E(a) {
                0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
            }
            function G(a, b) {
                Tf++;
                Sf[Tf] = a.current;
                a.current = b;
            }
            var Vf = {}, H = Uf(Vf), Wf = Uf(!1), Xf = Vf;
            function Yf(a, b) {
                var c = a.type.contextTypes;
                if (!c) return Vf;
                var d = a.stateNode;
                if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
                var f, e = {};
                for (f in c) e[f] = b[f];
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
                return e;
            }
            function Zf(a) {
                a = a.childContextTypes;
                return null !== a && void 0 !== a;
            }
            function $f() {
                E(Wf);
                E(H);
            }
            function ag(a, b, c) {
                if (H.current !== Vf) throw Error(p(168));
                G(H, b);
                G(Wf, c);
            }
            function bg(a, b, c) {
                var d = a.stateNode;
                b = b.childContextTypes;
                if ("function" !== typeof d.getChildContext) return c;
                d = d.getChildContext();
                for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
                return A({}, c, d);
            }
            function cg(a) {
                a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
                Xf = H.current;
                G(H, a);
                G(Wf, Wf.current);
                return !0;
            }
            function dg(a, b, c) {
                var d = a.stateNode;
                if (!d) throw Error(p(169));
                c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), 
                G(H, a)) : E(Wf);
                G(Wf, c);
            }
            var eg = null, fg = !1, gg = !1;
            function hg(a) {
                null === eg ? eg = [ a ] : eg.push(a);
            }
            function ig(a) {
                fg = !0;
                hg(a);
            }
            function jg() {
                if (!gg && null !== eg) {
                    gg = !0;
                    var a = 0, b = C;
                    try {
                        var c = eg;
                        for (C = 1; a < c.length; a++) {
                            var d = c[a];
                            do {
                                d = d(!0);
                            } while (null !== d);
                        }
                        eg = null;
                        fg = !1;
                    } catch (e) {
                        throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
                    } finally {
                        C = b, gg = !1;
                    }
                }
                return null;
            }
            var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
            function tg(a, b) {
                kg[lg++] = ng;
                kg[lg++] = mg;
                mg = a;
                ng = b;
            }
            function ug(a, b, c) {
                og[pg++] = rg;
                og[pg++] = sg;
                og[pg++] = qg;
                qg = a;
                var d = rg;
                a = sg;
                var e = 32 - oc(d) - 1;
                d &= ~(1 << e);
                c += 1;
                var f = 32 - oc(b) + e;
                if (30 < f) {
                    var g = e - e % 5;
                    f = (d & (1 << g) - 1).toString(32);
                    d >>= g;
                    e -= g;
                    rg = 1 << 32 - oc(b) + e | c << e | d;
                    sg = f + a;
                } else rg = 1 << f | c << e | d, sg = a;
            }
            function vg(a) {
                null !== a.return && (tg(a, 1), ug(a, 1, 0));
            }
            function wg(a) {
                for (;a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
                for (;a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], 
                og[pg] = null;
            }
            var xg = null, yg = null, I = !1, zg = null;
            function Ag(a, b) {
                var c = Bg(5, null, null, 0);
                c.elementType = "DELETED";
                c.stateNode = b;
                c.return = a;
                b = a.deletions;
                null === b ? (a.deletions = [ c ], a.flags |= 16) : b.push(c);
            }
            function Cg(a, b) {
                switch (a.tag) {
                  case 5:
                    var c = a.type;
                    b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
                    return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), !0) : !1;

                  case 6:
                    return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, 
                    xg = a, yg = null, !0) : !1;

                  case 13:
                    return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? {
                        id: rg,
                        overflow: sg
                    } : null, a.memoizedState = {
                        dehydrated: b,
                        treeContext: c,
                        retryLane: 1073741824
                    }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, 
                    yg = null, !0) : !1;

                  default:
                    return !1;
                }
            }
            function Dg(a) {
                return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
            }
            function Eg(a) {
                if (I) {
                    var b = yg;
                    if (b) {
                        var c = b;
                        if (!Cg(a, b)) {
                            if (Dg(a)) throw Error(p(418));
                            b = Lf(c.nextSibling);
                            var d = xg;
                            b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = !1, xg = a);
                        }
                    } else {
                        if (Dg(a)) throw Error(p(418));
                        a.flags = a.flags & -4097 | 2;
                        I = !1;
                        xg = a;
                    }
                }
            }
            function Fg(a) {
                for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
                xg = a;
            }
            function Gg(a) {
                if (a !== xg) return !1;
                if (!I) return Fg(a), I = !0, !1;
                var b;
                (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
                if (b && (b = yg)) {
                    if (Dg(a)) throw Hg(), Error(p(418));
                    for (;b; ) Ag(a, b), b = Lf(b.nextSibling);
                }
                Fg(a);
                if (13 === a.tag) {
                    a = a.memoizedState;
                    a = null !== a ? a.dehydrated : null;
                    if (!a) throw Error(p(317));
                    a: {
                        a = a.nextSibling;
                        for (b = 0; a; ) {
                            if (8 === a.nodeType) {
                                var c = a.data;
                                if ("/$" === c) {
                                    if (0 === b) {
                                        yg = Lf(a.nextSibling);
                                        break a;
                                    }
                                    b--;
                                } else "$" !== c && "$!" !== c && "$?" !== c || b++;
                            }
                            a = a.nextSibling;
                        }
                        yg = null;
                    }
                } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
                return !0;
            }
            function Hg() {
                for (var a = yg; a; ) a = Lf(a.nextSibling);
            }
            function Ig() {
                yg = xg = null;
                I = !1;
            }
            function Jg(a) {
                null === zg ? zg = [ a ] : zg.push(a);
            }
            var Kg = ua.ReactCurrentBatchConfig;
            function Lg(a, b, c) {
                a = c.ref;
                if (null !== a && "function" !== typeof a && "object" !== typeof a) {
                    if (c._owner) {
                        c = c._owner;
                        if (c) {
                            if (1 !== c.tag) throw Error(p(309));
                            var d = c.stateNode;
                        }
                        if (!d) throw Error(p(147, a));
                        var e = d, f = "" + a;
                        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;
                        b = function(a) {
                            var b = e.refs;
                            null === a ? delete b[f] : b[f] = a;
                        };
                        b._stringRef = f;
                        return b;
                    }
                    if ("string" !== typeof a) throw Error(p(284));
                    if (!c._owner) throw Error(p(290, a));
                }
                return a;
            }
            function Mg(a, b) {
                a = Object.prototype.toString.call(b);
                throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
            }
            function Ng(a) {
                var b = a._init;
                return b(a._payload);
            }
            function Og(a) {
                function b(b, c) {
                    if (a) {
                        var d = b.deletions;
                        null === d ? (b.deletions = [ c ], b.flags |= 16) : d.push(c);
                    }
                }
                function c(c, d) {
                    if (!a) return null;
                    for (;null !== d; ) b(c, d), d = d.sibling;
                    return null;
                }
                function d(a, b) {
                    for (a = new Map; null !== b; ) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), 
                    b = b.sibling;
                    return a;
                }
                function e(a, b) {
                    a = Pg(a, b);
                    a.index = 0;
                    a.sibling = null;
                    return a;
                }
                function f(b, c, d) {
                    b.index = d;
                    if (!a) return b.flags |= 1048576, c;
                    d = b.alternate;
                    if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
                    b.flags |= 2;
                    return c;
                }
                function g(b) {
                    a && null === b.alternate && (b.flags |= 2);
                    return b;
                }
                function h(a, b, c, d) {
                    if (null === b || 6 !== b.tag) return b = Qg(c, a.mode, d), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function k(a, b, c, d) {
                    var f = c.type;
                    if (f === ya) return m(a, b, c.props.children, d, c.key);
                    if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === Ha && Ng(f) === b.type)) return d = e(b, c.props), 
                    d.ref = Lg(a, b, c), d.return = a, d;
                    d = Rg(c.type, c.key, c.props, null, a.mode, d);
                    d.ref = Lg(a, b, c);
                    d.return = a;
                    return d;
                }
                function l(a, b, c, d) {
                    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Sg(c, a.mode, d), 
                    b.return = a, b;
                    b = e(b, c.children || []);
                    b.return = a;
                    return b;
                }
                function m(a, b, c, d, f) {
                    if (null === b || 7 !== b.tag) return b = Tg(c, a.mode, d, f), b.return = a, b;
                    b = e(b, c);
                    b.return = a;
                    return b;
                }
                function q(a, b, c) {
                    if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Qg("" + b, a.mode, c), 
                    b.return = a, b;
                    if ("object" === typeof b && null !== b) {
                        switch (b.$$typeof) {
                          case va:
                            return c = Rg(b.type, b.key, b.props, null, a.mode, c), c.ref = Lg(a, null, b), 
                            c.return = a, c;

                          case wa:
                            return b = Sg(b, a.mode, c), b.return = a, b;

                          case Ha:
                            var d = b._init;
                            return q(a, d(b._payload), c);
                        }
                        if (eb(b) || Ka(b)) return b = Tg(b, a.mode, c, null), b.return = a, b;
                        Mg(a, b);
                    }
                    return null;
                }
                function r(a, b, c, d) {
                    var e = null !== b ? b.key : null;
                    if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
                    if ("object" === typeof c && null !== c) {
                        switch (c.$$typeof) {
                          case va:
                            return c.key === e ? k(a, b, c, d) : null;

                          case wa:
                            return c.key === e ? l(a, b, c, d) : null;

                          case Ha:
                            return e = c._init, r(a, b, e(c._payload), d);
                        }
                        if (eb(c) || Ka(c)) return null !== e ? null : m(a, b, c, d, null);
                        Mg(a, c);
                    }
                    return null;
                }
                function y(a, b, c, d, e) {
                    if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, 
                    h(b, a, "" + d, e);
                    if ("object" === typeof d && null !== d) {
                        switch (d.$$typeof) {
                          case va:
                            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

                          case wa:
                            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

                          case Ha:
                            var f = d._init;
                            return y(a, b, c, f(d._payload), e);
                        }
                        if (eb(d) || Ka(d)) return a = a.get(c) || null, m(b, a, d, e, null);
                        Mg(b, d);
                    }
                    return null;
                }
                function n(e, g, h, k) {
                    for (var l = null, m = null, u = g, w = g = 0, x = null; null !== u && w < h.length; w++) {
                        u.index > w ? (x = u, u = null) : x = u.sibling;
                        var n = r(e, u, h[w], k);
                        if (null === n) {
                            null === u && (u = x);
                            break;
                        }
                        a && u && null === n.alternate && b(e, u);
                        g = f(n, g, w);
                        null === m ? l = n : m.sibling = n;
                        m = n;
                        u = x;
                    }
                    if (w === h.length) return c(e, u), I && tg(e, w), l;
                    if (null === u) {
                        for (;w < h.length; w++) u = q(e, h[w], k), null !== u && (g = f(u, g, w), null === m ? l = u : m.sibling = u, 
                        m = u);
                        I && tg(e, w);
                        return l;
                    }
                    for (u = d(e, u); w < h.length; w++) x = y(u, e, w, h[w], k), null !== x && (a && null !== x.alternate && u.delete(null === x.key ? w : x.key), 
                    g = f(x, g, w), null === m ? l = x : m.sibling = x, m = x);
                    a && u.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function t(e, g, h, k) {
                    var l = Ka(h);
                    if ("function" !== typeof l) throw Error(p(150));
                    h = l.call(h);
                    if (null == h) throw Error(p(151));
                    for (var u = l = null, m = g, w = g = 0, x = null, n = h.next(); null !== m && !n.done; w++, 
                    n = h.next()) {
                        m.index > w ? (x = m, m = null) : x = m.sibling;
                        var t = r(e, m, n.value, k);
                        if (null === t) {
                            null === m && (m = x);
                            break;
                        }
                        a && m && null === t.alternate && b(e, m);
                        g = f(t, g, w);
                        null === u ? l = t : u.sibling = t;
                        u = t;
                        m = x;
                    }
                    if (n.done) return c(e, m), I && tg(e, w), l;
                    if (null === m) {
                        for (;!n.done; w++, n = h.next()) n = q(e, n.value, k), null !== n && (g = f(n, g, w), 
                        null === u ? l = n : u.sibling = n, u = n);
                        I && tg(e, w);
                        return l;
                    }
                    for (m = d(e, m); !n.done; w++, n = h.next()) n = y(m, e, w, n.value, k), null !== n && (a && null !== n.alternate && m.delete(null === n.key ? w : n.key), 
                    g = f(n, g, w), null === u ? l = n : u.sibling = n, u = n);
                    a && m.forEach((function(a) {
                        return b(e, a);
                    }));
                    I && tg(e, w);
                    return l;
                }
                function J(a, d, f, h) {
                    "object" === typeof f && null !== f && f.type === ya && null === f.key && (f = f.props.children);
                    if ("object" === typeof f && null !== f) {
                        switch (f.$$typeof) {
                          case va:
                            a: {
                                for (var k = f.key, l = d; null !== l; ) {
                                    if (l.key === k) {
                                        k = f.type;
                                        if (k === ya) {
                                            if (7 === l.tag) {
                                                c(a, l.sibling);
                                                d = e(l, f.props.children);
                                                d.return = a;
                                                a = d;
                                                break a;
                                            }
                                        } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === Ha && Ng(k) === l.type) {
                                            c(a, l.sibling);
                                            d = e(l, f.props);
                                            d.ref = Lg(a, l, f);
                                            d.return = a;
                                            a = d;
                                            break a;
                                        }
                                        c(a, l);
                                        break;
                                    } else b(a, l);
                                    l = l.sibling;
                                }
                                f.type === ya ? (d = Tg(f.props.children, a.mode, h, f.key), d.return = a, a = d) : (h = Rg(f.type, f.key, f.props, null, a.mode, h), 
                                h.ref = Lg(a, d, f), h.return = a, a = h);
                            }
                            return g(a);

                          case wa:
                            a: {
                                for (l = f.key; null !== d; ) {
                                    if (d.key === l) if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                        c(a, d.sibling);
                                        d = e(d, f.children || []);
                                        d.return = a;
                                        a = d;
                                        break a;
                                    } else {
                                        c(a, d);
                                        break;
                                    } else b(a, d);
                                    d = d.sibling;
                                }
                                d = Sg(f, a.mode, h);
                                d.return = a;
                                a = d;
                            }
                            return g(a);

                          case Ha:
                            return l = f._init, J(a, d, l(f._payload), h);
                        }
                        if (eb(f)) return n(a, d, f, h);
                        if (Ka(f)) return t(a, d, f, h);
                        Mg(a, f);
                    }
                    return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, 
                    null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d.return = a, a = d) : (c(a, d), 
                    d = Qg(f, a.mode, h), d.return = a, a = d), g(a)) : c(a, d);
                }
                return J;
            }
            var Ug = Og(!0), Vg = Og(!1), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
            function $g() {
                Zg = Yg = Xg = null;
            }
            function ah(a) {
                var b = Wg.current;
                E(Wg);
                a._currentValue = b;
            }
            function bh(a, b, c) {
                for (;null !== a; ) {
                    var d = a.alternate;
                    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
                    if (a === c) break;
                    a = a.return;
                }
            }
            function ch(a, b) {
                Xg = a;
                Zg = Yg = null;
                a = a.dependencies;
                null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = !0), a.firstContext = null);
            }
            function eh(a) {
                var b = a._currentValue;
                if (Zg !== a) if (a = {
                    context: a,
                    memoizedValue: b,
                    next: null
                }, null === Yg) {
                    if (null === Xg) throw Error(p(308));
                    Yg = a;
                    Xg.dependencies = {
                        lanes: 0,
                        firstContext: a
                    };
                } else Yg = Yg.next = a;
                return b;
            }
            var fh = null;
            function gh(a) {
                null === fh ? fh = [ a ] : fh.push(a);
            }
            function hh(a, b, c, d) {
                var e = b.interleaved;
                null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
                b.interleaved = c;
                return ih(a, d);
            }
            function ih(a, b) {
                a.lanes |= b;
                var c = a.alternate;
                null !== c && (c.lanes |= b);
                c = a;
                for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), 
                c = a, a = a.return;
                return 3 === c.tag ? c.stateNode : null;
            }
            var jh = !1;
            function kh(a) {
                a.updateQueue = {
                    baseState: a.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        interleaved: null,
                        lanes: 0
                    },
                    effects: null
                };
            }
            function lh(a, b) {
                a = a.updateQueue;
                b.updateQueue === a && (b.updateQueue = {
                    baseState: a.baseState,
                    firstBaseUpdate: a.firstBaseUpdate,
                    lastBaseUpdate: a.lastBaseUpdate,
                    shared: a.shared,
                    effects: a.effects
                });
            }
            function mh(a, b) {
                return {
                    eventTime: a,
                    lane: b,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                };
            }
            function nh(a, b, c) {
                var d = a.updateQueue;
                if (null === d) return null;
                d = d.shared;
                if (0 !== (K & 2)) {
                    var e = d.pending;
                    null === e ? b.next = b : (b.next = e.next, e.next = b);
                    d.pending = b;
                    return ih(a, c);
                }
                e = d.interleaved;
                null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
                d.interleaved = b;
                return ih(a, c);
            }
            function oh(a, b, c) {
                b = b.updateQueue;
                if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            function ph(a, b) {
                var c = a.updateQueue, d = a.alternate;
                if (null !== d && (d = d.updateQueue, c === d)) {
                    var e = null, f = null;
                    c = c.firstBaseUpdate;
                    if (null !== c) {
                        do {
                            var g = {
                                eventTime: c.eventTime,
                                lane: c.lane,
                                tag: c.tag,
                                payload: c.payload,
                                callback: c.callback,
                                next: null
                            };
                            null === f ? e = f = g : f = f.next = g;
                            c = c.next;
                        } while (null !== c);
                        null === f ? e = f = b : f = f.next = b;
                    } else e = f = b;
                    c = {
                        baseState: d.baseState,
                        firstBaseUpdate: e,
                        lastBaseUpdate: f,
                        shared: d.shared,
                        effects: d.effects
                    };
                    a.updateQueue = c;
                    return;
                }
                a = c.lastBaseUpdate;
                null === a ? c.firstBaseUpdate = b : a.next = b;
                c.lastBaseUpdate = b;
            }
            function qh(a, b, c, d) {
                var e = a.updateQueue;
                jh = !1;
                var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
                if (null !== h) {
                    e.shared.pending = null;
                    var k = h, l = k.next;
                    k.next = null;
                    null === g ? f = l : g.next = l;
                    g = k;
                    var m = a.alternate;
                    null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, 
                    m.lastBaseUpdate = k));
                }
                if (null !== f) {
                    var q = e.baseState;
                    g = 0;
                    m = l = k = null;
                    h = f;
                    do {
                        var r = h.lane, y = h.eventTime;
                        if ((d & r) === r) {
                            null !== m && (m = m.next = {
                                eventTime: y,
                                lane: 0,
                                tag: h.tag,
                                payload: h.payload,
                                callback: h.callback,
                                next: null
                            });
                            a: {
                                var n = a, t = h;
                                r = b;
                                y = c;
                                switch (t.tag) {
                                  case 1:
                                    n = t.payload;
                                    if ("function" === typeof n) {
                                        q = n.call(y, q, r);
                                        break a;
                                    }
                                    q = n;
                                    break a;

                                  case 3:
                                    n.flags = n.flags & -65537 | 128;

                                  case 0:
                                    n = t.payload;
                                    r = "function" === typeof n ? n.call(y, q, r) : n;
                                    if (null === r || void 0 === r) break a;
                                    q = A({}, q, r);
                                    break a;

                                  case 2:
                                    jh = !0;
                                }
                            }
                            null !== h.callback && 0 !== h.lane && (a.flags |= 64, r = e.effects, null === r ? e.effects = [ h ] : r.push(h));
                        } else y = {
                            eventTime: y,
                            lane: r,
                            tag: h.tag,
                            payload: h.payload,
                            callback: h.callback,
                            next: null
                        }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
                        h = h.next;
                        if (null === h) if (h = e.shared.pending, null === h) break; else r = h, h = r.next, 
                        r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
                    } while (1);
                    null === m && (k = q);
                    e.baseState = k;
                    e.firstBaseUpdate = l;
                    e.lastBaseUpdate = m;
                    b = e.shared.interleaved;
                    if (null !== b) {
                        e = b;
                        do {
                            g |= e.lane, e = e.next;
                        } while (e !== b);
                    } else null === f && (e.shared.lanes = 0);
                    rh |= g;
                    a.lanes = g;
                    a.memoizedState = q;
                }
            }
            function sh(a, b, c) {
                a = b.effects;
                b.effects = null;
                if (null !== a) for (b = 0; b < a.length; b++) {
                    var d = a[b], e = d.callback;
                    if (null !== e) {
                        d.callback = null;
                        d = c;
                        if ("function" !== typeof e) throw Error(p(191, e));
                        e.call(d);
                    }
                }
            }
            var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
            function xh(a) {
                if (a === th) throw Error(p(174));
                return a;
            }
            function yh(a, b) {
                G(wh, b);
                G(vh, a);
                G(uh, th);
                a = b.nodeType;
                switch (a) {
                  case 9:
                  case 11:
                    b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
                    break;

                  default:
                    a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
                }
                E(uh);
                G(uh, b);
            }
            function zh() {
                E(uh);
                E(vh);
                E(wh);
            }
            function Ah(a) {
                xh(wh.current);
                var b = xh(uh.current);
                var c = lb(b, a.type);
                b !== c && (G(vh, a), G(uh, c));
            }
            function Bh(a) {
                vh.current === a && (E(uh), E(vh));
            }
            var L = Uf(0);
            function Ch(a) {
                for (var b = a; null !== b; ) {
                    if (13 === b.tag) {
                        var c = b.memoizedState;
                        if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
                    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
                        if (0 !== (b.flags & 128)) return b;
                    } else if (null !== b.child) {
                        b.child.return = b;
                        b = b.child;
                        continue;
                    }
                    if (b === a) break;
                    for (;null === b.sibling; ) {
                        if (null === b.return || b.return === a) return null;
                        b = b.return;
                    }
                    b.sibling.return = b.return;
                    b = b.sibling;
                }
                return null;
            }
            var Dh = [];
            function Eh() {
                for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
                Dh.length = 0;
            }
            var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = !1, Jh = !1, Kh = 0, Lh = 0;
            function P() {
                throw Error(p(321));
            }
            function Mh(a, b) {
                if (null === b) return !1;
                for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return !1;
                return !0;
            }
            function Nh(a, b, c, d, e, f) {
                Hh = f;
                M = b;
                b.memoizedState = null;
                b.updateQueue = null;
                b.lanes = 0;
                Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
                a = c(d, e);
                if (Jh) {
                    f = 0;
                    do {
                        Jh = !1;
                        Kh = 0;
                        if (25 <= f) throw Error(p(301));
                        f += 1;
                        O = N = null;
                        b.updateQueue = null;
                        Fh.current = Qh;
                        a = c(d, e);
                    } while (Jh);
                }
                Fh.current = Rh;
                b = null !== N && null !== N.next;
                Hh = 0;
                O = N = M = null;
                Ih = !1;
                if (b) throw Error(p(300));
                return a;
            }
            function Sh() {
                var a = 0 !== Kh;
                Kh = 0;
                return a;
            }
            function Th() {
                var a = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                null === O ? M.memoizedState = O = a : O = O.next = a;
                return O;
            }
            function Uh() {
                if (null === N) {
                    var a = M.alternate;
                    a = null !== a ? a.memoizedState : null;
                } else a = N.next;
                var b = null === O ? M.memoizedState : O.next;
                if (null !== b) O = b, N = a; else {
                    if (null === a) throw Error(p(310));
                    N = a;
                    a = {
                        memoizedState: N.memoizedState,
                        baseState: N.baseState,
                        baseQueue: N.baseQueue,
                        queue: N.queue,
                        next: null
                    };
                    null === O ? M.memoizedState = O = a : O = O.next = a;
                }
                return O;
            }
            function Vh(a, b) {
                return "function" === typeof b ? b(a) : b;
            }
            function Wh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = N, e = d.baseQueue, f = c.pending;
                if (null !== f) {
                    if (null !== e) {
                        var g = e.next;
                        e.next = f.next;
                        f.next = g;
                    }
                    d.baseQueue = e = f;
                    c.pending = null;
                }
                if (null !== e) {
                    f = e.next;
                    d = d.baseState;
                    var h = g = null, k = null, l = f;
                    do {
                        var m = l.lane;
                        if ((Hh & m) === m) null !== k && (k = k.next = {
                            lane: 0,
                            action: l.action,
                            hasEagerState: l.hasEagerState,
                            eagerState: l.eagerState,
                            next: null
                        }), d = l.hasEagerState ? l.eagerState : a(d, l.action); else {
                            var q = {
                                lane: m,
                                action: l.action,
                                hasEagerState: l.hasEagerState,
                                eagerState: l.eagerState,
                                next: null
                            };
                            null === k ? (h = k = q, g = d) : k = k.next = q;
                            M.lanes |= m;
                            rh |= m;
                        }
                        l = l.next;
                    } while (null !== l && l !== f);
                    null === k ? g = d : k.next = h;
                    He(d, b.memoizedState) || (dh = !0);
                    b.memoizedState = d;
                    b.baseState = g;
                    b.baseQueue = k;
                    c.lastRenderedState = d;
                }
                a = c.interleaved;
                if (null !== a) {
                    e = a;
                    do {
                        f = e.lane, M.lanes |= f, rh |= f, e = e.next;
                    } while (e !== a);
                } else null === e && (c.lanes = 0);
                return [ b.memoizedState, c.dispatch ];
            }
            function Xh(a) {
                var b = Uh(), c = b.queue;
                if (null === c) throw Error(p(311));
                c.lastRenderedReducer = a;
                var d = c.dispatch, e = c.pending, f = b.memoizedState;
                if (null !== e) {
                    c.pending = null;
                    var g = e = e.next;
                    do {
                        f = a(f, g.action), g = g.next;
                    } while (g !== e);
                    He(f, b.memoizedState) || (dh = !0);
                    b.memoizedState = f;
                    null === b.baseQueue && (b.baseState = f);
                    c.lastRenderedState = f;
                }
                return [ f, d ];
            }
            function Yh() {}
            function Zh(a, b) {
                var c = M, d = Uh(), e = b(), f = !He(d.memoizedState, e);
                f && (d.memoizedState = e, dh = !0);
                d = d.queue;
                $h(ai.bind(null, c, d, a), [ a ]);
                if (d.getSnapshot !== b || f || null !== O && O.memoizedState.tag & 1) {
                    c.flags |= 2048;
                    bi(9, ci.bind(null, c, d, e, b), void 0, null);
                    if (null === Q) throw Error(p(349));
                    0 !== (Hh & 30) || di(c, b, e);
                }
                return e;
            }
            function di(a, b, c) {
                a.flags |= 16384;
                a = {
                    getSnapshot: b,
                    value: c
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.stores = [ a ]) : (c = b.stores, null === c ? b.stores = [ a ] : c.push(a));
            }
            function ci(a, b, c, d) {
                b.value = c;
                b.getSnapshot = d;
                ei(b) && fi(a);
            }
            function ai(a, b, c) {
                return c((function() {
                    ei(b) && fi(a);
                }));
            }
            function ei(a) {
                var b = a.getSnapshot;
                a = a.value;
                try {
                    var c = b();
                    return !He(a, c);
                } catch (d) {
                    return !0;
                }
            }
            function fi(a) {
                var b = ih(a, 1);
                null !== b && gi(b, a, 1, -1);
            }
            function hi(a) {
                var b = Th();
                "function" === typeof a && (a = a());
                b.memoizedState = b.baseState = a;
                a = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Vh,
                    lastRenderedState: a
                };
                b.queue = a;
                a = a.dispatch = ii.bind(null, M, a);
                return [ b.memoizedState, a ];
            }
            function bi(a, b, c, d) {
                a = {
                    tag: a,
                    create: b,
                    destroy: c,
                    deps: d,
                    next: null
                };
                b = M.updateQueue;
                null === b ? (b = {
                    lastEffect: null,
                    stores: null
                }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, 
                c.next = a, a.next = d, b.lastEffect = a));
                return a;
            }
            function ji() {
                return Uh().memoizedState;
            }
            function ki(a, b, c, d) {
                var e = Th();
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
            }
            function li(a, b, c, d) {
                var e = Uh();
                d = void 0 === d ? null : d;
                var f = void 0;
                if (null !== N) {
                    var g = N.memoizedState;
                    f = g.destroy;
                    if (null !== d && Mh(d, g.deps)) {
                        e.memoizedState = bi(b, c, f, d);
                        return;
                    }
                }
                M.flags |= a;
                e.memoizedState = bi(1 | b, c, f, d);
            }
            function mi(a, b) {
                return ki(8390656, 8, a, b);
            }
            function $h(a, b) {
                return li(2048, 8, a, b);
            }
            function ni(a, b) {
                return li(4, 2, a, b);
            }
            function oi(a, b) {
                return li(4, 4, a, b);
            }
            function pi(a, b) {
                if ("function" === typeof b) return a = a(), b(a), function() {
                    b(null);
                };
                if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
                    b.current = null;
                };
            }
            function qi(a, b, c) {
                c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                return li(4, 4, pi.bind(null, b, a), c);
            }
            function ri() {}
            function si(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                c.memoizedState = [ a, b ];
                return a;
            }
            function ti(a, b) {
                var c = Uh();
                b = void 0 === b ? null : b;
                var d = c.memoizedState;
                if (null !== d && null !== b && Mh(b, d[1])) return d[0];
                a = a();
                c.memoizedState = [ a, b ];
                return a;
            }
            function ui(a, b, c) {
                if (0 === (Hh & 21)) return a.baseState && (a.baseState = !1, dh = !0), a.memoizedState = c;
                He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = !0);
                return b;
            }
            function vi(a, b) {
                var c = C;
                C = 0 !== c && 4 > c ? c : 4;
                a(!0);
                var d = Gh.transition;
                Gh.transition = {};
                try {
                    a(!1), b();
                } finally {
                    C = c, Gh.transition = d;
                }
            }
            function wi() {
                return Uh().memoizedState;
            }
            function xi(a, b, c) {
                var d = yi(a);
                c = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, c); else if (c = hh(a, b, c, d), null !== c) {
                    var e = R();
                    gi(c, a, d, e);
                    Bi(c, b, d);
                }
            }
            function ii(a, b, c) {
                var d = yi(a), e = {
                    lane: d,
                    action: c,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (zi(a)) Ai(b, e); else {
                    var f = a.alternate;
                    if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, 
                    null !== f)) try {
                        var g = b.lastRenderedState, h = f(g, c);
                        e.hasEagerState = !0;
                        e.eagerState = h;
                        if (He(h, g)) {
                            var k = b.interleaved;
                            null === k ? (e.next = e, gh(b)) : (e.next = k.next, k.next = e);
                            b.interleaved = e;
                            return;
                        }
                    } catch (l) {}
                    c = hh(a, b, e, d);
                    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
                }
            }
            function zi(a) {
                var b = a.alternate;
                return a === M || null !== b && b === M;
            }
            function Ai(a, b) {
                Jh = Ih = !0;
                var c = a.pending;
                null === c ? b.next = b : (b.next = c.next, c.next = b);
                a.pending = b;
            }
            function Bi(a, b, c) {
                if (0 !== (c & 4194240)) {
                    var d = b.lanes;
                    d &= a.pendingLanes;
                    c |= d;
                    b.lanes = c;
                    Cc(a, c);
                }
            }
            var Rh = {
                readContext: eh,
                useCallback: P,
                useContext: P,
                useEffect: P,
                useImperativeHandle: P,
                useInsertionEffect: P,
                useLayoutEffect: P,
                useMemo: P,
                useReducer: P,
                useRef: P,
                useState: P,
                useDebugValue: P,
                useDeferredValue: P,
                useTransition: P,
                useMutableSource: P,
                useSyncExternalStore: P,
                useId: P,
                unstable_isNewReconciler: !1
            }, Oh = {
                readContext: eh,
                useCallback: function(a, b) {
                    Th().memoizedState = [ a, void 0 === b ? null : b ];
                    return a;
                },
                useContext: eh,
                useEffect: mi,
                useImperativeHandle: function(a, b, c) {
                    c = null !== c && void 0 !== c ? c.concat([ a ]) : null;
                    return ki(4194308, 4, pi.bind(null, b, a), c);
                },
                useLayoutEffect: function(a, b) {
                    return ki(4194308, 4, a, b);
                },
                useInsertionEffect: function(a, b) {
                    return ki(4, 2, a, b);
                },
                useMemo: function(a, b) {
                    var c = Th();
                    b = void 0 === b ? null : b;
                    a = a();
                    c.memoizedState = [ a, b ];
                    return a;
                },
                useReducer: function(a, b, c) {
                    var d = Th();
                    b = void 0 !== c ? c(b) : b;
                    d.memoizedState = d.baseState = b;
                    a = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: a,
                        lastRenderedState: b
                    };
                    d.queue = a;
                    a = a.dispatch = xi.bind(null, M, a);
                    return [ d.memoizedState, a ];
                },
                useRef: function(a) {
                    var b = Th();
                    a = {
                        current: a
                    };
                    return b.memoizedState = a;
                },
                useState: hi,
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    return Th().memoizedState = a;
                },
                useTransition: function() {
                    var a = hi(!1), b = a[0];
                    a = vi.bind(null, a[1]);
                    Th().memoizedState = a;
                    return [ b, a ];
                },
                useMutableSource: function() {},
                useSyncExternalStore: function(a, b, c) {
                    var d = M, e = Th();
                    if (I) {
                        if (void 0 === c) throw Error(p(407));
                        c = c();
                    } else {
                        c = b();
                        if (null === Q) throw Error(p(349));
                        0 !== (Hh & 30) || di(d, b, c);
                    }
                    e.memoizedState = c;
                    var f = {
                        value: c,
                        getSnapshot: b
                    };
                    e.queue = f;
                    mi(ai.bind(null, d, f, a), [ a ]);
                    d.flags |= 2048;
                    bi(9, ci.bind(null, d, f, c, b), void 0, null);
                    return c;
                },
                useId: function() {
                    var a = Th(), b = Q.identifierPrefix;
                    if (I) {
                        var c = sg;
                        var d = rg;
                        c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
                        b = ":" + b + "R" + c;
                        c = Kh++;
                        0 < c && (b += "H" + c.toString(32));
                        b += ":";
                    } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
                    return a.memoizedState = b;
                },
                unstable_isNewReconciler: !1
            }, Ph = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Wh,
                useRef: ji,
                useState: function() {
                    return Wh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Wh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            }, Qh = {
                readContext: eh,
                useCallback: si,
                useContext: eh,
                useEffect: $h,
                useImperativeHandle: qi,
                useInsertionEffect: ni,
                useLayoutEffect: oi,
                useMemo: ti,
                useReducer: Xh,
                useRef: ji,
                useState: function() {
                    return Xh(Vh);
                },
                useDebugValue: ri,
                useDeferredValue: function(a) {
                    var b = Uh();
                    return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
                },
                useTransition: function() {
                    var a = Xh(Vh)[0], b = Uh().memoizedState;
                    return [ a, b ];
                },
                useMutableSource: Yh,
                useSyncExternalStore: Zh,
                useId: wi,
                unstable_isNewReconciler: !1
            };
            function Ci(a, b) {
                if (a && a.defaultProps) {
                    b = A({}, b);
                    a = a.defaultProps;
                    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
                    return b;
                }
                return b;
            }
            function Di(a, b, c, d) {
                b = a.memoizedState;
                c = c(d, b);
                c = null === c || void 0 === c ? b : A({}, b, c);
                a.memoizedState = c;
                0 === a.lanes && (a.updateQueue.baseState = c);
            }
            var Ei = {
                isMounted: function(a) {
                    return (a = a._reactInternals) ? Vb(a) === a : !1;
                },
                enqueueSetState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueReplaceState: function(a, b, c) {
                    a = a._reactInternals;
                    var d = R(), e = yi(a), f = mh(d, e);
                    f.tag = 1;
                    f.payload = b;
                    void 0 !== c && null !== c && (f.callback = c);
                    b = nh(a, f, e);
                    null !== b && (gi(b, a, e, d), oh(b, a, e));
                },
                enqueueForceUpdate: function(a, b) {
                    a = a._reactInternals;
                    var c = R(), d = yi(a), e = mh(c, d);
                    e.tag = 2;
                    void 0 !== b && null !== b && (e.callback = b);
                    b = nh(a, e, d);
                    null !== b && (gi(b, a, d, c), oh(b, a, d));
                }
            };
            function Fi(a, b, c, d, e, f, g) {
                a = a.stateNode;
                return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f) : !0;
            }
            function Gi(a, b, c) {
                var d = !1, e = Vf;
                var f = b.contextType;
                "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, 
                f = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
                b = new b(c, f);
                a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
                b.updater = Ei;
                a.stateNode = b;
                b._reactInternals = a;
                d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
                return b;
            }
            function Hi(a, b, c, d) {
                a = b.state;
                "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
                "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
                b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
            }
            function Ii(a, b, c, d) {
                var e = a.stateNode;
                e.props = c;
                e.state = a.memoizedState;
                e.refs = {};
                kh(a);
                var f = b.contextType;
                "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b) ? Xf : H.current, 
                e.context = Yf(a, f));
                e.state = a.memoizedState;
                f = b.getDerivedStateFromProps;
                "function" === typeof f && (Di(a, b, f, c), e.state = a.memoizedState);
                "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, 
                "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), 
                b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
                "function" === typeof e.componentDidMount && (a.flags |= 4194308);
            }
            function Ji(a, b) {
                try {
                    var c = "", d = b;
                    do {
                        c += Pa(d), d = d.return;
                    } while (d);
                    var e = c;
                } catch (f) {
                    e = "\nError generating stack: " + f.message + "\n" + f.stack;
                }
                return {
                    value: a,
                    source: b,
                    stack: e,
                    digest: null
                };
            }
            function Ki(a, b, c) {
                return {
                    value: a,
                    source: null,
                    stack: null != c ? c : null,
                    digest: null != b ? b : null
                };
            }
            function Li(a, b) {
                try {
                    console.error(b.value);
                } catch (c) {
                    setTimeout((function() {
                        throw c;
                    }));
                }
            }
            var Mi = "function" === typeof WeakMap ? WeakMap : Map;
            function Ni(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                c.payload = {
                    element: null
                };
                var d = b.value;
                c.callback = function() {
                    Oi || (Oi = !0, Pi = d);
                    Li(a, b);
                };
                return c;
            }
            function Qi(a, b, c) {
                c = mh(-1, c);
                c.tag = 3;
                var d = a.type.getDerivedStateFromError;
                if ("function" === typeof d) {
                    var e = b.value;
                    c.payload = function() {
                        return d(e);
                    };
                    c.callback = function() {
                        Li(a, b);
                    };
                }
                var f = a.stateNode;
                null !== f && "function" === typeof f.componentDidCatch && (c.callback = function() {
                    Li(a, b);
                    "function" !== typeof d && (null === Ri ? Ri = new Set([ this ]) : Ri.add(this));
                    var c = b.stack;
                    this.componentDidCatch(b.value, {
                        componentStack: null !== c ? c : ""
                    });
                });
                return c;
            }
            function Si(a, b, c) {
                var d = a.pingCache;
                if (null === d) {
                    d = a.pingCache = new Mi;
                    var e = new Set;
                    d.set(b, e);
                } else e = d.get(b), void 0 === e && (e = new Set, d.set(b, e));
                e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
            }
            function Ui(a) {
                do {
                    var b;
                    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
                    if (b) return a;
                    a = a.return;
                } while (null !== a);
                return null;
            }
            function Vi(a, b, c, d, e) {
                if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, 
                c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), 
                b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
                a.flags |= 65536;
                a.lanes = e;
                return a;
            }
            var Wi = ua.ReactCurrentOwner, dh = !1;
            function Xi(a, b, c, d) {
                b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
            }
            function Yi(a, b, c, d, e) {
                c = c.render;
                var f = b.ref;
                ch(b, e);
                d = Nh(a, b, c, d, f, e);
                c = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && c && vg(b);
                b.flags |= 1;
                Xi(a, b, d, e);
                return b.child;
            }
            function $i(a, b, c, d, e) {
                if (null === a) {
                    var f = c.type;
                    if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, 
                    b.type = f, bj(a, b, f, d, e);
                    a = Rg(c.type, null, d, b, b.mode, e);
                    a.ref = b.ref;
                    a.return = b;
                    return b.child = a;
                }
                f = a.child;
                if (0 === (a.lanes & e)) {
                    var g = f.memoizedProps;
                    c = c.compare;
                    c = null !== c ? c : Ie;
                    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
                }
                b.flags |= 1;
                a = Pg(f, d);
                a.ref = b.ref;
                a.return = b;
                return b.child = a;
            }
            function bj(a, b, c, d, e) {
                if (null !== a) {
                    var f = a.memoizedProps;
                    if (Ie(f, d) && a.ref === b.ref) if (dh = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = !0); else return b.lanes = a.lanes, 
                    Zi(a, b, e);
                }
                return cj(a, b, c, d, e);
            }
            function dj(a, b, c) {
                var d = b.pendingProps, e = d.children, f = null !== a ? a.memoizedState : null;
                if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                }, G(ej, fj), fj |= c; else {
                    if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, 
                    b.memoizedState = {
                        baseLanes: a,
                        cachePool: null,
                        transitions: null
                    }, b.updateQueue = null, G(ej, fj), fj |= a, null;
                    b.memoizedState = {
                        baseLanes: 0,
                        cachePool: null,
                        transitions: null
                    };
                    d = null !== f ? f.baseLanes : c;
                    G(ej, fj);
                    fj |= d;
                } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), 
                fj |= d;
                Xi(a, b, e, c);
                return b.child;
            }
            function gj(a, b) {
                var c = b.ref;
                if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
            }
            function cj(a, b, c, d, e) {
                var f = Zf(c) ? Xf : H.current;
                f = Yf(b, f);
                ch(b, e);
                c = Nh(a, b, c, d, f, e);
                d = Sh();
                if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, 
                Zi(a, b, e);
                I && d && vg(b);
                b.flags |= 1;
                Xi(a, b, c, e);
                return b.child;
            }
            function hj(a, b, c, d, e) {
                if (Zf(c)) {
                    var f = !0;
                    cg(b);
                } else f = !1;
                ch(b, e);
                if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = !0; else if (null === a) {
                    var g = b.stateNode, h = b.memoizedProps;
                    g.props = h;
                    var k = g.context, l = c.contextType;
                    "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c) ? Xf : H.current, l = Yf(b, l));
                    var m = c.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
                    q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
                    jh = !1;
                    var r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    k = b.memoizedState;
                    h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b, c, m, d), 
                    k = b.memoizedState), (h = jh || Fi(b, c, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), 
                    "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), 
                    "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), 
                    b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, 
                    d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
                } else {
                    g = b.stateNode;
                    lh(a, b);
                    h = b.memoizedProps;
                    l = b.type === b.elementType ? h : Ci(b.type, h);
                    g.props = l;
                    q = b.pendingProps;
                    r = g.context;
                    k = c.contextType;
                    "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c) ? Xf : H.current, k = Yf(b, k));
                    var y = c.getDerivedStateFromProps;
                    (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b, g, d, k);
                    jh = !1;
                    r = b.memoizedState;
                    g.state = r;
                    qh(b, d, g, e);
                    var n = b.memoizedState;
                    h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b, c, y, d), 
                    n = b.memoizedState), (l = jh || Fi(b, c, l, d, r, n, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), 
                    "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), 
                    "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    b.memoizedProps = d, b.memoizedState = n), g.props = d, g.state = n, g.context = k, 
                    d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 4), 
                    "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r === a.memoizedState || (b.flags |= 1024), 
                    d = !1);
                }
                return jj(a, b, c, d, f, e);
            }
            function jj(a, b, c, d, e, f) {
                gj(a, b);
                var g = 0 !== (b.flags & 128);
                if (!d && !g) return e && dg(b, c, !1), Zi(a, b, f);
                d = b.stateNode;
                Wi.current = b;
                var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
                b.flags |= 1;
                null !== a && g ? (b.child = Ug(b, a.child, null, f), b.child = Ug(b, null, h, f)) : Xi(a, b, h, f);
                b.memoizedState = d.state;
                e && dg(b, c, !0);
                return b.child;
            }
            function kj(a) {
                var b = a.stateNode;
                b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, !1);
                yh(a, b.containerInfo);
            }
            function lj(a, b, c, d, e) {
                Ig();
                Jg(e);
                b.flags |= 256;
                Xi(a, b, c, d);
                return b.child;
            }
            var mj = {
                dehydrated: null,
                treeContext: null,
                retryLane: 0
            };
            function nj(a) {
                return {
                    baseLanes: a,
                    cachePool: null,
                    transitions: null
                };
            }
            function oj(a, b, c) {
                var h, d = b.pendingProps, e = L.current, f = !1, g = 0 !== (b.flags & 128);
                (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
                if (h) f = !0, b.flags &= -129; else if (null === a || null !== a.memoizedState) e |= 1;
                G(L, e & 1);
                if (null === a) {
                    Eg(b);
                    a = b.memoizedState;
                    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, 
                    null;
                    g = d.children;
                    a = d.fallback;
                    return f ? (d = b.mode, f = b.child, g = {
                        mode: "hidden",
                        children: g
                    }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), 
                    a = Tg(a, d, c, null), f.return = b, a.return = b, f.sibling = a, b.child = f, b.child.memoizedState = nj(c), 
                    b.memoizedState = mj, a) : qj(b, g);
                }
                e = a.memoizedState;
                if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
                if (f) {
                    f = d.fallback;
                    g = b.mode;
                    e = a.child;
                    h = e.sibling;
                    var k = {
                        mode: "hidden",
                        children: d.children
                    };
                    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, 
                    b.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
                    null !== h ? f = Pg(h, f) : (f = Tg(f, g, c, null), f.flags |= 2);
                    f.return = b;
                    d.return = b;
                    d.sibling = f;
                    b.child = d;
                    d = f;
                    f = b.child;
                    g = a.child.memoizedState;
                    g = null === g ? nj(c) : {
                        baseLanes: g.baseLanes | c,
                        cachePool: null,
                        transitions: g.transitions
                    };
                    f.memoizedState = g;
                    f.childLanes = a.childLanes & ~c;
                    b.memoizedState = mj;
                    return d;
                }
                f = a.child;
                a = f.sibling;
                d = Pg(f, {
                    mode: "visible",
                    children: d.children
                });
                0 === (b.mode & 1) && (d.lanes = c);
                d.return = b;
                d.sibling = null;
                null !== a && (c = b.deletions, null === c ? (b.deletions = [ a ], b.flags |= 16) : c.push(a));
                b.child = d;
                b.memoizedState = null;
                return d;
            }
            function qj(a, b) {
                b = pj({
                    mode: "visible",
                    children: b
                }, a.mode, 0, null);
                b.return = a;
                return a.child = b;
            }
            function sj(a, b, c, d) {
                null !== d && Jg(d);
                Ug(b, a.child, null, c);
                a = qj(b, b.pendingProps.children);
                a.flags |= 2;
                b.memoizedState = null;
                return a;
            }
            function rj(a, b, c, d, e, f, g) {
                if (c) {
                    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
                    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
                    f = d.fallback;
                    e = b.mode;
                    d = pj({
                        mode: "visible",
                        children: d.children
                    }, e, 0, null);
                    f = Tg(f, e, g, null);
                    f.flags |= 2;
                    d.return = b;
                    f.return = b;
                    d.sibling = f;
                    b.child = d;
                    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
                    b.child.memoizedState = nj(g);
                    b.memoizedState = mj;
                    return f;
                }
                if (0 === (b.mode & 1)) return sj(a, b, g, null);
                if ("$!" === e.data) {
                    d = e.nextSibling && e.nextSibling.dataset;
                    if (d) var h = d.dgst;
                    d = h;
                    f = Error(p(419));
                    d = Ki(f, d, void 0);
                    return sj(a, b, g, d);
                }
                h = 0 !== (g & a.childLanes);
                if (dh || h) {
                    d = Q;
                    if (null !== d) {
                        switch (g & -g) {
                          case 4:
                            e = 2;
                            break;

                          case 16:
                            e = 8;
                            break;

                          case 64:
                          case 128:
                          case 256:
                          case 512:
                          case 1024:
                          case 2048:
                          case 4096:
                          case 8192:
                          case 16384:
                          case 32768:
                          case 65536:
                          case 131072:
                          case 262144:
                          case 524288:
                          case 1048576:
                          case 2097152:
                          case 4194304:
                          case 8388608:
                          case 16777216:
                          case 33554432:
                          case 67108864:
                            e = 32;
                            break;

                          case 536870912:
                            e = 268435456;
                            break;

                          default:
                            e = 0;
                        }
                        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
                        0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a, e), gi(d, a, e, -1));
                    }
                    tj();
                    d = Ki(Error(p(421)));
                    return sj(a, b, g, d);
                }
                if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), 
                e._reactRetry = b, null;
                a = f.treeContext;
                yg = Lf(e.nextSibling);
                xg = b;
                I = !0;
                zg = null;
                null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, 
                qg = b);
                b = qj(b, d.children);
                b.flags |= 4096;
                return b;
            }
            function vj(a, b, c) {
                a.lanes |= b;
                var d = a.alternate;
                null !== d && (d.lanes |= b);
                bh(a.return, b, c);
            }
            function wj(a, b, c, d, e) {
                var f = a.memoizedState;
                null === f ? a.memoizedState = {
                    isBackwards: b,
                    rendering: null,
                    renderingStartTime: 0,
                    last: d,
                    tail: c,
                    tailMode: e
                } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, 
                f.tail = c, f.tailMode = e);
            }
            function xj(a, b, c) {
                var d = b.pendingProps, e = d.revealOrder, f = d.tail;
                Xi(a, b, d.children, c);
                d = L.current;
                if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128; else {
                    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
                        if (13 === a.tag) null !== a.memoizedState && vj(a, c, b); else if (19 === a.tag) vj(a, c, b); else if (null !== a.child) {
                            a.child.return = a;
                            a = a.child;
                            continue;
                        }
                        if (a === b) break a;
                        for (;null === a.sibling; ) {
                            if (null === a.return || a.return === b) break a;
                            a = a.return;
                        }
                        a.sibling.return = a.return;
                        a = a.sibling;
                    }
                    d &= 1;
                }
                G(L, d);
                if (0 === (b.mode & 1)) b.memoizedState = null; else switch (e) {
                  case "forwards":
                    c = b.child;
                    for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), 
                    c = c.sibling;
                    c = e;
                    null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
                    wj(b, !1, e, c, f);
                    break;

                  case "backwards":
                    c = null;
                    e = b.child;
                    for (b.child = null; null !== e; ) {
                        a = e.alternate;
                        if (null !== a && null === Ch(a)) {
                            b.child = e;
                            break;
                        }
                        a = e.sibling;
                        e.sibling = c;
                        c = e;
                        e = a;
                    }
                    wj(b, !0, c, null, f);
                    break;

                  case "together":
                    wj(b, !1, null, null, void 0);
                    break;

                  default:
                    b.memoizedState = null;
                }
                return b.child;
            }
            function ij(a, b) {
                0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
            }
            function Zi(a, b, c) {
                null !== a && (b.dependencies = a.dependencies);
                rh |= b.lanes;
                if (0 === (c & b.childLanes)) return null;
                if (null !== a && b.child !== a.child) throw Error(p(153));
                if (null !== b.child) {
                    a = b.child;
                    c = Pg(a, a.pendingProps);
                    b.child = c;
                    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), 
                    c.return = b;
                    c.sibling = null;
                }
                return b.child;
            }
            function yj(a, b, c) {
                switch (b.tag) {
                  case 3:
                    kj(b);
                    Ig();
                    break;

                  case 5:
                    Ah(b);
                    break;

                  case 1:
                    Zf(b.type) && cg(b);
                    break;

                  case 4:
                    yh(b, b.stateNode.containerInfo);
                    break;

                  case 10:
                    var d = b.type._context, e = b.memoizedProps.value;
                    G(Wg, d._currentValue);
                    d._currentValue = e;
                    break;

                  case 13:
                    d = b.memoizedState;
                    if (null !== d) {
                        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
                        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
                        G(L, L.current & 1);
                        a = Zi(a, b, c);
                        return null !== a ? a.sibling : null;
                    }
                    G(L, L.current & 1);
                    break;

                  case 19:
                    d = 0 !== (c & b.childLanes);
                    if (0 !== (a.flags & 128)) {
                        if (d) return xj(a, b, c);
                        b.flags |= 128;
                    }
                    e = b.memoizedState;
                    null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
                    G(L, L.current);
                    if (d) break; else return null;

                  case 22:
                  case 23:
                    return b.lanes = 0, dj(a, b, c);
                }
                return Zi(a, b, c);
            }
            var zj, Aj, Bj, Cj;
            zj = function(a, b) {
                for (var c = b.child; null !== c; ) {
                    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode); else if (4 !== c.tag && null !== c.child) {
                        c.child.return = c;
                        c = c.child;
                        continue;
                    }
                    if (c === b) break;
                    for (;null === c.sibling; ) {
                        if (null === c.return || c.return === b) return;
                        c = c.return;
                    }
                    c.sibling.return = c.return;
                    c = c.sibling;
                }
            };
            Aj = function() {};
            Bj = function(a, b, c, d) {
                var e = a.memoizedProps;
                if (e !== d) {
                    a = b.stateNode;
                    xh(uh.current);
                    var f = null;
                    switch (c) {
                      case "input":
                        e = Ya(a, e);
                        d = Ya(a, d);
                        f = [];
                        break;

                      case "select":
                        e = A({}, e, {
                            value: void 0
                        });
                        d = A({}, d, {
                            value: void 0
                        });
                        f = [];
                        break;

                      case "textarea":
                        e = gb(a, e);
                        d = gb(a, d);
                        f = [];
                        break;

                      default:
                        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
                    }
                    ub(c, d);
                    var g;
                    c = null;
                    for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
                        var h = e[l];
                        for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
                    } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
                    for (l in d) {
                        var k = d[l];
                        h = null != e ? e[l] : void 0;
                        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
                            for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c || (c = {}), 
                            c[g] = "");
                            for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c || (c = {}), c[g] = k[g]);
                        } else c || (f || (f = []), f.push(l, c)), c = k; else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, 
                        h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a), 
                        f || h === k || (f = [])) : (f = f || []).push(l, k));
                    }
                    c && (f = f || []).push("style", c);
                    var l = f;
                    if (b.updateQueue = l) b.flags |= 4;
                }
            };
            Cj = function(a, b, c, d) {
                c !== d && (b.flags |= 4);
            };
            function Dj(a, b) {
                if (!I) switch (a.tailMode) {
                  case "hidden":
                    b = a.tail;
                    for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
                    null === c ? a.tail = null : c.sibling = null;
                    break;

                  case "collapsed":
                    c = a.tail;
                    for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
                    null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
                }
            }
            function S(a) {
                var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
                if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, 
                d |= e.flags & 14680064, e.return = a, e = e.sibling; else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, 
                d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
                a.subtreeFlags |= d;
                a.childLanes = c;
                return b;
            }
            function Ej(a, b, c) {
                var d = b.pendingProps;
                wg(b);
                switch (b.tag) {
                  case 2:
                  case 16:
                  case 15:
                  case 0:
                  case 11:
                  case 7:
                  case 8:
                  case 12:
                  case 9:
                  case 14:
                    return S(b), null;

                  case 1:
                    return Zf(b.type) && $f(), S(b), null;

                  case 3:
                    d = b.stateNode;
                    zh();
                    E(Wf);
                    E(H);
                    Eh();
                    d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
                    if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, 
                    null !== zg && (Fj(zg), zg = null));
                    Aj(a, b);
                    S(b);
                    return null;

                  case 5:
                    Bh(b);
                    var e = xh(wh.current);
                    c = b.type;
                    if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, 
                    b.flags |= 2097152); else {
                        if (!d) {
                            if (null === b.stateNode) throw Error(p(166));
                            S(b);
                            return null;
                        }
                        a = xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.type;
                            var f = b.memoizedProps;
                            d[Of] = b;
                            d[Pf] = f;
                            a = 0 !== (b.mode & 1);
                            switch (c) {
                              case "dialog":
                                D("cancel", d);
                                D("close", d);
                                break;

                              case "iframe":
                              case "object":
                              case "embed":
                                D("load", d);
                                break;

                              case "video":
                              case "audio":
                                for (e = 0; e < lf.length; e++) D(lf[e], d);
                                break;

                              case "source":
                                D("error", d);
                                break;

                              case "img":
                              case "image":
                              case "link":
                                D("error", d);
                                D("load", d);
                                break;

                              case "details":
                                D("toggle", d);
                                break;

                              case "input":
                                Za(d, f);
                                D("invalid", d);
                                break;

                              case "select":
                                d._wrapperState = {
                                    wasMultiple: !!f.multiple
                                };
                                D("invalid", d);
                                break;

                              case "textarea":
                                hb(d, f), D("invalid", d);
                            }
                            ub(c, f);
                            e = null;
                            for (var g in f) if (f.hasOwnProperty(g)) {
                                var h = f[g];
                                "children" === g ? "string" === typeof h ? d.textContent !== h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", h ]) : "number" === typeof h && d.textContent !== "" + h && (!0 !== f.suppressHydrationWarning && Af(d.textContent, h, a), 
                                e = [ "children", "" + h ]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                            }
                            switch (c) {
                              case "input":
                                Va(d);
                                db(d, f, !0);
                                break;

                              case "textarea":
                                Va(d);
                                jb(d);
                                break;

                              case "select":
                              case "option":
                                break;

                              default:
                                "function" === typeof f.onClick && (d.onclick = Bf);
                            }
                            d = e;
                            b.updateQueue = d;
                            null !== d && (b.flags |= 4);
                        } else {
                            g = 9 === e.nodeType ? e : e.ownerDocument;
                            "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
                            "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), 
                            a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, {
                                is: d.is
                            }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = !0 : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
                            a[Of] = b;
                            a[Pf] = d;
                            zj(a, b, !1, !1);
                            b.stateNode = a;
                            a: {
                                g = vb(c, d);
                                switch (c) {
                                  case "dialog":
                                    D("cancel", a);
                                    D("close", a);
                                    e = d;
                                    break;

                                  case "iframe":
                                  case "object":
                                  case "embed":
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "video":
                                  case "audio":
                                    for (e = 0; e < lf.length; e++) D(lf[e], a);
                                    e = d;
                                    break;

                                  case "source":
                                    D("error", a);
                                    e = d;
                                    break;

                                  case "img":
                                  case "image":
                                  case "link":
                                    D("error", a);
                                    D("load", a);
                                    e = d;
                                    break;

                                  case "details":
                                    D("toggle", a);
                                    e = d;
                                    break;

                                  case "input":
                                    Za(a, d);
                                    e = Ya(a, d);
                                    D("invalid", a);
                                    break;

                                  case "option":
                                    e = d;
                                    break;

                                  case "select":
                                    a._wrapperState = {
                                        wasMultiple: !!d.multiple
                                    };
                                    e = A({}, d, {
                                        value: void 0
                                    });
                                    D("invalid", a);
                                    break;

                                  case "textarea":
                                    hb(a, d);
                                    e = gb(a, d);
                                    D("invalid", a);
                                    break;

                                  default:
                                    e = d;
                                }
                                ub(c, e);
                                h = e;
                                for (f in h) if (h.hasOwnProperty(f)) {
                                    var k = h[f];
                                    "style" === f ? sb(a, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, 
                                    null != k && nb(a, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c || "" !== k) && ob(a, k) : "number" === typeof k && ob(a, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a) : null != k && ta(a, f, k, g));
                                }
                                switch (c) {
                                  case "input":
                                    Va(a);
                                    db(a, d, !1);
                                    break;

                                  case "textarea":
                                    Va(a);
                                    jb(a);
                                    break;

                                  case "option":
                                    null != d.value && a.setAttribute("value", "" + Sa(d.value));
                                    break;

                                  case "select":
                                    a.multiple = !!d.multiple;
                                    f = d.value;
                                    null != f ? fb(a, !!d.multiple, f, !1) : null != d.defaultValue && fb(a, !!d.multiple, d.defaultValue, !0);
                                    break;

                                  default:
                                    "function" === typeof e.onClick && (a.onclick = Bf);
                                }
                                switch (c) {
                                  case "button":
                                  case "input":
                                  case "select":
                                  case "textarea":
                                    d = !!d.autoFocus;
                                    break a;

                                  case "img":
                                    d = !0;
                                    break a;

                                  default:
                                    d = !1;
                                }
                            }
                            d && (b.flags |= 4);
                        }
                        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
                    }
                    S(b);
                    return null;

                  case 6:
                    if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d); else {
                        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
                        c = xh(wh.current);
                        xh(uh.current);
                        if (Gg(b)) {
                            d = b.stateNode;
                            c = b.memoizedProps;
                            d[Of] = b;
                            if (f = d.nodeValue !== c) if (a = xg, null !== a) switch (a.tag) {
                              case 3:
                                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                                break;

                              case 5:
                                !0 !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
                            }
                            f && (b.flags |= 4);
                        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, 
                        b.stateNode = d;
                    }
                    S(b);
                    return null;

                  case 13:
                    E(L);
                    d = b.memoizedState;
                    if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
                        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), 
                        b.flags |= 98560, f = !1; else if (f = Gg(b), null !== d && null !== d.dehydrated) {
                            if (null === a) {
                                if (!f) throw Error(p(318));
                                f = b.memoizedState;
                                f = null !== f ? f.dehydrated : null;
                                if (!f) throw Error(p(317));
                                f[Of] = b;
                            } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                            S(b);
                            f = !1;
                        } else null !== zg && (Fj(zg), zg = null), f = !0;
                        if (!f) return b.flags & 65536 ? b : null;
                    }
                    if (0 !== (b.flags & 128)) return b.lanes = c, b;
                    d = null !== d;
                    d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
                    null !== b.updateQueue && (b.flags |= 4);
                    S(b);
                    return null;

                  case 4:
                    return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;

                  case 10:
                    return ah(b.type._context), S(b), null;

                  case 17:
                    return Zf(b.type) && $f(), S(b), null;

                  case 19:
                    E(L);
                    f = b.memoizedState;
                    if (null === f) return S(b), null;
                    d = 0 !== (b.flags & 128);
                    g = f.rendering;
                    if (null === g) if (d) Dj(f, !1); else {
                        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
                            g = Ch(a);
                            if (null !== g) {
                                b.flags |= 128;
                                Dj(f, !1);
                                d = g.updateQueue;
                                null !== d && (b.updateQueue = d, b.flags |= 4);
                                b.subtreeFlags = 0;
                                d = c;
                                for (c = b.child; null !== c; ) f = c, a = d, f.flags &= 14680066, g = f.alternate, 
                                null === g ? (f.childLanes = 0, f.lanes = a, f.child = null, f.subtreeFlags = 0, 
                                f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, 
                                f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, 
                                f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, 
                                f.updateQueue = g.updateQueue, f.type = g.type, a = g.dependencies, f.dependencies = null === a ? null : {
                                    lanes: a.lanes,
                                    firstContext: a.firstContext
                                }), c = c.sibling;
                                G(L, L.current & 1 | 2);
                                return b.child;
                            }
                            a = a.sibling;
                        }
                        null !== f.tail && B() > Gj && (b.flags |= 128, d = !0, Dj(f, !1), b.lanes = 4194304);
                    } else {
                        if (!d) if (a = Ch(g), null !== a) {
                            if (b.flags |= 128, d = !0, c = a.updateQueue, null !== c && (b.updateQueue = c, 
                            b.flags |= 4), Dj(f, !0), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b), 
                            null;
                        } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, 
                        d = !0, Dj(f, !1), b.lanes = 4194304);
                        f.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f.last, null !== c ? c.sibling = g : b.child = g, 
                        f.last = g);
                    }
                    if (null !== f.tail) return b = f.tail, f.rendering = b, f.tail = b.sibling, f.renderingStartTime = B(), 
                    b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
                    S(b);
                    return null;

                  case 22:
                  case 23:
                    return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), 
                    d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), 
                    null;

                  case 24:
                    return null;

                  case 25:
                    return null;
                }
                throw Error(p(156, b.tag));
            }
            function Ij(a, b) {
                wg(b);
                switch (b.tag) {
                  case 1:
                    return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 3:
                    return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, 
                    b) : null;

                  case 5:
                    return Bh(b), null;

                  case 13:
                    E(L);
                    a = b.memoizedState;
                    if (null !== a && null !== a.dehydrated) {
                        if (null === b.alternate) throw Error(p(340));
                        Ig();
                    }
                    a = b.flags;
                    return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

                  case 19:
                    return E(L), null;

                  case 4:
                    return zh(), null;

                  case 10:
                    return ah(b.type._context), null;

                  case 22:
                  case 23:
                    return Hj(), null;

                  case 24:
                    return null;

                  default:
                    return null;
                }
            }
            var Jj = !1, U = !1, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
            function Lj(a, b) {
                var c = a.ref;
                if (null !== c) if ("function" === typeof c) try {
                    c(null);
                } catch (d) {
                    W(a, b, d);
                } else c.current = null;
            }
            function Mj(a, b, c) {
                try {
                    c();
                } catch (d) {
                    W(a, b, d);
                }
            }
            var Nj = !1;
            function Oj(a, b) {
                Cf = dd;
                a = Me();
                if (Ne(a)) {
                    if ("selectionStart" in a) var c = {
                        start: a.selectionStart,
                        end: a.selectionEnd
                    }; else a: {
                        c = (c = a.ownerDocument) && c.defaultView || window;
                        var d = c.getSelection && c.getSelection();
                        if (d && 0 !== d.rangeCount) {
                            c = d.anchorNode;
                            var e = d.anchorOffset, f = d.focusNode;
                            d = d.focusOffset;
                            try {
                                c.nodeType, f.nodeType;
                            } catch (F) {
                                c = null;
                                break a;
                            }
                            var g = 0, h = -1, k = -1, l = 0, m = 0, q = a, r = null;
                            b: for (;;) {
                                for (var y; ;) {
                                    q !== c || 0 !== e && 3 !== q.nodeType || (h = g + e);
                                    q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                                    3 === q.nodeType && (g += q.nodeValue.length);
                                    if (null === (y = q.firstChild)) break;
                                    r = q;
                                    q = y;
                                }
                                for (;;) {
                                    if (q === a) break b;
                                    r === c && ++l === e && (h = g);
                                    r === f && ++m === d && (k = g);
                                    if (null !== (y = q.nextSibling)) break;
                                    q = r;
                                    r = q.parentNode;
                                }
                                q = y;
                            }
                            c = -1 === h || -1 === k ? null : {
                                start: h,
                                end: k
                            };
                        } else c = null;
                    }
                    c = c || {
                        start: 0,
                        end: 0
                    };
                } else c = null;
                Df = {
                    focusedElem: a,
                    selectionRange: c
                };
                dd = !1;
                for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, 
                V = a; else for (;null !== V; ) {
                    b = V;
                    try {
                        var n = b.alternate;
                        if (0 !== (b.flags & 1024)) switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            break;

                          case 1:
                            if (null !== n) {
                                var t = n.memoizedProps, J = n.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t : Ci(b.type, t), J);
                                x.__reactInternalSnapshotBeforeUpdate = w;
                            }
                            break;

                          case 3:
                            var u = b.stateNode.containerInfo;
                            1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                            break;

                          case 5:
                          case 6:
                          case 4:
                          case 17:
                            break;

                          default:
                            throw Error(p(163));
                        }
                    } catch (F) {
                        W(b, b.return, F);
                    }
                    a = b.sibling;
                    if (null !== a) {
                        a.return = b.return;
                        V = a;
                        break;
                    }
                    V = b.return;
                }
                n = Nj;
                Nj = !1;
                return n;
            }
            function Pj(a, b, c) {
                var d = b.updateQueue;
                d = null !== d ? d.lastEffect : null;
                if (null !== d) {
                    var e = d = d.next;
                    do {
                        if ((e.tag & a) === a) {
                            var f = e.destroy;
                            e.destroy = void 0;
                            void 0 !== f && Mj(b, c, f);
                        }
                        e = e.next;
                    } while (e !== d);
                }
            }
            function Qj(a, b) {
                b = b.updateQueue;
                b = null !== b ? b.lastEffect : null;
                if (null !== b) {
                    var c = b = b.next;
                    do {
                        if ((c.tag & a) === a) {
                            var d = c.create;
                            c.destroy = d();
                        }
                        c = c.next;
                    } while (c !== b);
                }
            }
            function Rj(a) {
                var b = a.ref;
                if (null !== b) {
                    var c = a.stateNode;
                    switch (a.tag) {
                      case 5:
                        a = c;
                        break;

                      default:
                        a = c;
                    }
                    "function" === typeof b ? b(a) : b.current = a;
                }
            }
            function Sj(a) {
                var b = a.alternate;
                null !== b && (a.alternate = null, Sj(b));
                a.child = null;
                a.deletions = null;
                a.sibling = null;
                5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], 
                delete b[Qf], delete b[Rf]));
                a.stateNode = null;
                a.return = null;
                a.dependencies = null;
                a.memoizedProps = null;
                a.memoizedState = null;
                a.pendingProps = null;
                a.stateNode = null;
                a.updateQueue = null;
            }
            function Tj(a) {
                return 5 === a.tag || 3 === a.tag || 4 === a.tag;
            }
            function Uj(a) {
                a: for (;;) {
                    for (;null === a.sibling; ) {
                        if (null === a.return || Tj(a.return)) return null;
                        a = a.return;
                    }
                    a.sibling.return = a.return;
                    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                        if (a.flags & 2) continue a;
                        if (null === a.child || 4 === a.tag) continue a; else a.child.return = a, a = a.child;
                    }
                    if (!(a.flags & 2)) return a.stateNode;
                }
            }
            function Vj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, 
                b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf)); else if (4 !== d && (a = a.child, 
                null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
            }
            function Wj(a, b, c) {
                var d = a.tag;
                if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a); else if (4 !== d && (a = a.child, 
                null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
            }
            var X = null, Xj = !1;
            function Yj(a, b, c) {
                for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
            }
            function Zj(a, b, c) {
                if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
                    lc.onCommitFiberUnmount(kc, c);
                } catch (h) {}
                switch (c.tag) {
                  case 5:
                    U || Lj(c, b);

                  case 6:
                    var d = X, e = Xj;
                    X = null;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
                    break;

                  case 18:
                    null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), 
                    bd(a)) : Kf(X, c.stateNode));
                    break;

                  case 4:
                    d = X;
                    e = Xj;
                    X = c.stateNode.containerInfo;
                    Xj = !0;
                    Yj(a, b, c);
                    X = d;
                    Xj = e;
                    break;

                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
                        e = d = d.next;
                        do {
                            var f = e, g = f.destroy;
                            f = f.tag;
                            void 0 !== g && (0 !== (f & 2) ? Mj(c, b, g) : 0 !== (f & 4) && Mj(c, b, g));
                            e = e.next;
                        } while (e !== d);
                    }
                    Yj(a, b, c);
                    break;

                  case 1:
                    if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
                        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
                    } catch (h) {
                        W(c, b, h);
                    }
                    Yj(a, b, c);
                    break;

                  case 21:
                    Yj(a, b, c);
                    break;

                  case 22:
                    c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
                    break;

                  default:
                    Yj(a, b, c);
                }
            }
            function ak(a) {
                var b = a.updateQueue;
                if (null !== b) {
                    a.updateQueue = null;
                    var c = a.stateNode;
                    null === c && (c = a.stateNode = new Kj);
                    b.forEach((function(b) {
                        var d = bk.bind(null, a, b);
                        c.has(b) || (c.add(b), b.then(d, d));
                    }));
                }
            }
            function ck(a, b) {
                var c = b.deletions;
                if (null !== c) for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    try {
                        var f = a, g = b, h = g;
                        a: for (;null !== h; ) {
                            switch (h.tag) {
                              case 5:
                                X = h.stateNode;
                                Xj = !1;
                                break a;

                              case 3:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;

                              case 4:
                                X = h.stateNode.containerInfo;
                                Xj = !0;
                                break a;
                            }
                            h = h.return;
                        }
                        if (null === X) throw Error(p(160));
                        Zj(f, g, e);
                        X = null;
                        Xj = !1;
                        var k = e.alternate;
                        null !== k && (k.return = null);
                        e.return = null;
                    } catch (l) {
                        W(e, b, l);
                    }
                }
                if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
            }
            function dk(a, b) {
                var c = a.alternate, d = a.flags;
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        try {
                            Pj(3, a, a.return), Qj(3, a);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                        try {
                            Pj(5, a, a.return);
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 1:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    break;

                  case 5:
                    ck(b, a);
                    ek(a);
                    d & 512 && null !== c && Lj(c, c.return);
                    if (a.flags & 32) {
                        var e = a.stateNode;
                        try {
                            ob(e, "");
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    if (d & 4 && (e = a.stateNode, null != e)) {
                        var f = a.memoizedProps, g = null !== c ? c.memoizedProps : f, h = a.type, k = a.updateQueue;
                        a.updateQueue = null;
                        if (null !== k) try {
                            "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                            vb(h, g);
                            var l = vb(h, f);
                            for (g = 0; g < k.length; g += 2) {
                                var m = k[g], q = k[g + 1];
                                "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                            }
                            switch (h) {
                              case "input":
                                bb(e, f);
                                break;

                              case "textarea":
                                ib(e, f);
                                break;

                              case "select":
                                var r = e._wrapperState.wasMultiple;
                                e._wrapperState.wasMultiple = !!f.multiple;
                                var y = f.value;
                                null != y ? fb(e, !!f.multiple, y, !1) : r !== !!f.multiple && (null != f.defaultValue ? fb(e, !!f.multiple, f.defaultValue, !0) : fb(e, !!f.multiple, f.multiple ? [] : "", !1));
                            }
                            e[Pf] = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 6:
                    ck(b, a);
                    ek(a);
                    if (d & 4) {
                        if (null === a.stateNode) throw Error(p(162));
                        e = a.stateNode;
                        f = a.memoizedProps;
                        try {
                            e.nodeValue = f;
                        } catch (t) {
                            W(a, a.return, t);
                        }
                    }
                    break;

                  case 3:
                    ck(b, a);
                    ek(a);
                    if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
                        bd(b.containerInfo);
                    } catch (t) {
                        W(a, a.return, t);
                    }
                    break;

                  case 4:
                    ck(b, a);
                    ek(a);
                    break;

                  case 13:
                    ck(b, a);
                    ek(a);
                    e = a.child;
                    e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
                    d & 4 && ak(a);
                    break;

                  case 22:
                    m = null !== c && null !== c.memoizedState;
                    a.mode & 1 ? (U = (l = U) || m, ck(b, a), U = l) : ck(b, a);
                    ek(a);
                    if (d & 8192) {
                        l = null !== a.memoizedState;
                        if ((a.stateNode.isHidden = l) && !m && 0 !== (a.mode & 1)) for (V = a, m = a.child; null !== m; ) {
                            for (q = V = m; null !== V; ) {
                                r = V;
                                y = r.child;
                                switch (r.tag) {
                                  case 0:
                                  case 11:
                                  case 14:
                                  case 15:
                                    Pj(4, r, r.return);
                                    break;

                                  case 1:
                                    Lj(r, r.return);
                                    var n = r.stateNode;
                                    if ("function" === typeof n.componentWillUnmount) {
                                        d = r;
                                        c = r.return;
                                        try {
                                            b = d, n.props = b.memoizedProps, n.state = b.memoizedState, n.componentWillUnmount();
                                        } catch (t) {
                                            W(d, c, t);
                                        }
                                    }
                                    break;

                                  case 5:
                                    Lj(r, r.return);
                                    break;

                                  case 22:
                                    if (null !== r.memoizedState) {
                                        gk(q);
                                        continue;
                                    }
                                }
                                null !== y ? (y.return = r, V = y) : gk(q);
                            }
                            m = m.sibling;
                        }
                        a: for (m = null, q = a; ;) {
                            if (5 === q.tag) {
                                if (null === m) {
                                    m = q;
                                    try {
                                        e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, 
                                        k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, 
                                        h.style.display = rb("display", g));
                                    } catch (t) {
                                        W(a, a.return, t);
                                    }
                                }
                            } else if (6 === q.tag) {
                                if (null === m) try {
                                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                                } catch (t) {
                                    W(a, a.return, t);
                                }
                            } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a) && null !== q.child) {
                                q.child.return = q;
                                q = q.child;
                                continue;
                            }
                            if (q === a) break a;
                            for (;null === q.sibling; ) {
                                if (null === q.return || q.return === a) break a;
                                m === q && (m = null);
                                q = q.return;
                            }
                            m === q && (m = null);
                            q.sibling.return = q.return;
                            q = q.sibling;
                        }
                    }
                    break;

                  case 19:
                    ck(b, a);
                    ek(a);
                    d & 4 && ak(a);
                    break;

                  case 21:
                    break;

                  default:
                    ck(b, a), ek(a);
                }
            }
            function ek(a) {
                var b = a.flags;
                if (b & 2) {
                    try {
                        a: {
                            for (var c = a.return; null !== c; ) {
                                if (Tj(c)) {
                                    var d = c;
                                    break a;
                                }
                                c = c.return;
                            }
                            throw Error(p(160));
                        }
                        switch (d.tag) {
                          case 5:
                            var e = d.stateNode;
                            d.flags & 32 && (ob(e, ""), d.flags &= -33);
                            var f = Uj(a);
                            Wj(a, f, e);
                            break;

                          case 3:
                          case 4:
                            var g = d.stateNode.containerInfo, h = Uj(a);
                            Vj(a, h, g);
                            break;

                          default:
                            throw Error(p(161));
                        }
                    } catch (k) {
                        W(a, a.return, k);
                    }
                    a.flags &= -3;
                }
                b & 4096 && (a.flags &= -4097);
            }
            function hk(a, b, c) {
                V = a;
                ik(a, b, c);
            }
            function ik(a, b, c) {
                for (var d = 0 !== (a.mode & 1); null !== V; ) {
                    var e = V, f = e.child;
                    if (22 === e.tag && d) {
                        var g = null !== e.memoizedState || Jj;
                        if (!g) {
                            var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
                            h = Jj;
                            var l = U;
                            Jj = g;
                            if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, 
                            V = k) : jk(e);
                            for (;null !== f; ) V = f, ik(f, b, c), f = f.sibling;
                            V = e;
                            Jj = h;
                            U = l;
                        }
                        kk(a, b, c);
                    } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a, b, c);
                }
            }
            function kk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (0 !== (b.flags & 8772)) {
                        var c = b.alternate;
                        try {
                            if (0 !== (b.flags & 8772)) switch (b.tag) {
                              case 0:
                              case 11:
                              case 15:
                                U || Qj(5, b);
                                break;

                              case 1:
                                var d = b.stateNode;
                                if (b.flags & 4 && !U) if (null === c) d.componentDidMount(); else {
                                    var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
                                    d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                                }
                                var f = b.updateQueue;
                                null !== f && sh(b, f, d);
                                break;

                              case 3:
                                var g = b.updateQueue;
                                if (null !== g) {
                                    c = null;
                                    if (null !== b.child) switch (b.child.tag) {
                                      case 5:
                                        c = b.child.stateNode;
                                        break;

                                      case 1:
                                        c = b.child.stateNode;
                                    }
                                    sh(b, g, c);
                                }
                                break;

                              case 5:
                                var h = b.stateNode;
                                if (null === c && b.flags & 4) {
                                    c = h;
                                    var k = b.memoizedProps;
                                    switch (b.type) {
                                      case "button":
                                      case "input":
                                      case "select":
                                      case "textarea":
                                        k.autoFocus && c.focus();
                                        break;

                                      case "img":
                                        k.src && (c.src = k.src);
                                    }
                                }
                                break;

                              case 6:
                                break;

                              case 4:
                                break;

                              case 12:
                                break;

                              case 13:
                                if (null === b.memoizedState) {
                                    var l = b.alternate;
                                    if (null !== l) {
                                        var m = l.memoizedState;
                                        if (null !== m) {
                                            var q = m.dehydrated;
                                            null !== q && bd(q);
                                        }
                                    }
                                }
                                break;

                              case 19:
                              case 17:
                              case 21:
                              case 22:
                              case 23:
                              case 25:
                                break;

                              default:
                                throw Error(p(163));
                            }
                            U || b.flags & 512 && Rj(b);
                        } catch (r) {
                            W(b, b.return, r);
                        }
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function gk(a) {
                for (;null !== V; ) {
                    var b = V;
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var c = b.sibling;
                    if (null !== c) {
                        c.return = b.return;
                        V = c;
                        break;
                    }
                    V = b.return;
                }
            }
            function jk(a) {
                for (;null !== V; ) {
                    var b = V;
                    try {
                        switch (b.tag) {
                          case 0:
                          case 11:
                          case 15:
                            var c = b.return;
                            try {
                                Qj(4, b);
                            } catch (k) {
                                W(b, c, k);
                            }
                            break;

                          case 1:
                            var d = b.stateNode;
                            if ("function" === typeof d.componentDidMount) {
                                var e = b.return;
                                try {
                                    d.componentDidMount();
                                } catch (k) {
                                    W(b, e, k);
                                }
                            }
                            var f = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, f, k);
                            }
                            break;

                          case 5:
                            var g = b.return;
                            try {
                                Rj(b);
                            } catch (k) {
                                W(b, g, k);
                            }
                        }
                    } catch (k) {
                        W(b, b.return, k);
                    }
                    if (b === a) {
                        V = null;
                        break;
                    }
                    var h = b.sibling;
                    if (null !== h) {
                        h.return = b.return;
                        V = h;
                        break;
                    }
                    V = b.return;
                }
            }
            var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = 1 / 0, uk = null, Oi = !1, Pi = null, Ri = null, vk = !1, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
            function R() {
                return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
            }
            function yi(a) {
                if (0 === (a.mode & 1)) return 1;
                if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
                if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
                a = C;
                if (0 !== a) return a;
                a = window.event;
                a = void 0 === a ? 16 : jd(a.type);
                return a;
            }
            function gi(a, b, c, d) {
                if (50 < yk) throw yk = 0, zk = null, Error(p(185));
                Ac(a, c, d);
                if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), 
                Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
            }
            function Dk(a, b) {
                var c = a.callbackNode;
                wc(a, b);
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0; else if (b = d & -d, 
                a.callbackPriority !== b) {
                    null != c && bc(c);
                    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf((function() {
                        0 === (K & 6) && jg();
                    })), c = null; else {
                        switch (Dc(d)) {
                          case 1:
                            c = fc;
                            break;

                          case 4:
                            c = gc;
                            break;

                          case 16:
                            c = hc;
                            break;

                          case 536870912:
                            c = jc;
                            break;

                          default:
                            c = hc;
                        }
                        c = Fk(c, Gk.bind(null, a));
                    }
                    a.callbackPriority = b;
                    a.callbackNode = c;
                }
            }
            function Gk(a, b) {
                Ak = -1;
                Bk = 0;
                if (0 !== (K & 6)) throw Error(p(327));
                var c = a.callbackNode;
                if (Hk() && a.callbackNode !== c) return null;
                var d = uc(a, a === Q ? Z : 0);
                if (0 === d) return null;
                if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d); else {
                    b = d;
                    var e = K;
                    K |= 2;
                    var f = Jk();
                    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
                    do {
                        try {
                            Lk();
                            break;
                        } catch (h) {
                            Mk(a, h);
                        }
                    } while (1);
                    $g();
                    mk.current = f;
                    K = e;
                    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
                }
                if (0 !== b) {
                    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
                    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                    if (6 === b) Ck(a, d); else {
                        e = a.current.alternate;
                        if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f = xc(a), 0 !== f && (d = f, 
                        b = Nk(a, f))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
                        a.finishedWork = e;
                        a.finishedLanes = d;
                        switch (b) {
                          case 0:
                          case 1:
                            throw Error(p(345));

                          case 2:
                            Pk(a, tk, uk);
                            break;

                          case 3:
                            Ck(a, d);
                            if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                                if (0 !== uc(a, 0)) break;
                                e = a.suspendedLanes;
                                if ((e & d) !== d) {
                                    R();
                                    a.pingedLanes |= a.suspendedLanes & e;
                                    break;
                                }
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 4:
                            Ck(a, d);
                            if ((d & 4194240) === d) break;
                            b = a.eventTimes;
                            for (e = -1; 0 < d; ) {
                                var g = 31 - oc(d);
                                f = 1 << g;
                                g = b[g];
                                g > e && (e = g);
                                d &= ~f;
                            }
                            d = e;
                            d = B() - d;
                            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                            if (10 < d) {
                                a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
                                break;
                            }
                            Pk(a, tk, uk);
                            break;

                          case 5:
                            Pk(a, tk, uk);
                            break;

                          default:
                            throw Error(p(329));
                        }
                    }
                }
                Dk(a, B());
                return a.callbackNode === c ? Gk.bind(null, a) : null;
            }
            function Nk(a, b) {
                var c = sk;
                a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
                a = Ik(a, b);
                2 !== a && (b = tk, tk = c, null !== b && Fj(b));
                return a;
            }
            function Fj(a) {
                null === tk ? tk = a : tk.push.apply(tk, a);
            }
            function Ok(a) {
                for (var b = a; ;) {
                    if (b.flags & 16384) {
                        var c = b.updateQueue;
                        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
                            var e = c[d], f = e.getSnapshot;
                            e = e.value;
                            try {
                                if (!He(f(), e)) return !1;
                            } catch (g) {
                                return !1;
                            }
                        }
                    }
                    c = b.child;
                    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c; else {
                        if (b === a) break;
                        for (;null === b.sibling; ) {
                            if (null === b.return || b.return === a) return !0;
                            b = b.return;
                        }
                        b.sibling.return = b.return;
                        b = b.sibling;
                    }
                }
                return !0;
            }
            function Ck(a, b) {
                b &= ~rk;
                b &= ~qk;
                a.suspendedLanes |= b;
                a.pingedLanes &= ~b;
                for (a = a.expirationTimes; 0 < b; ) {
                    var c = 31 - oc(b), d = 1 << c;
                    a[c] = -1;
                    b &= ~d;
                }
            }
            function Ek(a) {
                if (0 !== (K & 6)) throw Error(p(327));
                Hk();
                var b = uc(a, 0);
                if (0 === (b & 1)) return Dk(a, B()), null;
                var c = Ik(a, b);
                if (0 !== a.tag && 2 === c) {
                    var d = xc(a);
                    0 !== d && (b = d, c = Nk(a, d));
                }
                if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
                if (6 === c) throw Error(p(345));
                a.finishedWork = a.current.alternate;
                a.finishedLanes = b;
                Pk(a, tk, uk);
                Dk(a, B());
                return null;
            }
            function Qk(a, b) {
                var c = K;
                K |= 1;
                try {
                    return a(b);
                } finally {
                    K = c, 0 === K && (Gj = B() + 500, fg && jg());
                }
            }
            function Rk(a) {
                null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
                var b = K;
                K |= 1;
                var c = ok.transition, d = C;
                try {
                    if (ok.transition = null, C = 1, a) return a();
                } finally {
                    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
                }
            }
            function Hj() {
                fj = ej.current;
                E(ej);
            }
            function Kk(a, b) {
                a.finishedWork = null;
                a.finishedLanes = 0;
                var c = a.timeoutHandle;
                -1 !== c && (a.timeoutHandle = -1, Gf(c));
                if (null !== Y) for (c = Y.return; null !== c; ) {
                    var d = c;
                    wg(d);
                    switch (d.tag) {
                      case 1:
                        d = d.type.childContextTypes;
                        null !== d && void 0 !== d && $f();
                        break;

                      case 3:
                        zh();
                        E(Wf);
                        E(H);
                        Eh();
                        break;

                      case 5:
                        Bh(d);
                        break;

                      case 4:
                        zh();
                        break;

                      case 13:
                        E(L);
                        break;

                      case 19:
                        E(L);
                        break;

                      case 10:
                        ah(d.type._context);
                        break;

                      case 22:
                      case 23:
                        Hj();
                    }
                    c = c.return;
                }
                Q = a;
                Y = a = Pg(a.current, null);
                Z = fj = b;
                T = 0;
                pk = null;
                rk = qk = rh = 0;
                tk = sk = null;
                if (null !== fh) {
                    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
                        c.interleaved = null;
                        var e = d.next, f = c.pending;
                        if (null !== f) {
                            var g = f.next;
                            f.next = e;
                            d.next = g;
                        }
                        c.pending = d;
                    }
                    fh = null;
                }
                return a;
            }
            function Mk(a, b) {
                do {
                    var c = Y;
                    try {
                        $g();
                        Fh.current = Rh;
                        if (Ih) {
                            for (var d = M.memoizedState; null !== d; ) {
                                var e = d.queue;
                                null !== e && (e.pending = null);
                                d = d.next;
                            }
                            Ih = !1;
                        }
                        Hh = 0;
                        O = N = M = null;
                        Jh = !1;
                        Kh = 0;
                        nk.current = null;
                        if (null === c || null === c.return) {
                            T = 1;
                            pk = b;
                            Y = null;
                            break;
                        }
                        a: {
                            var f = a, g = c.return, h = c, k = b;
                            b = Z;
                            h.flags |= 32768;
                            if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                                var l = k, m = h, q = m.tag;
                                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                                    var r = m.alternate;
                                    r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, 
                                    m.memoizedState = null);
                                }
                                var y = Ui(g);
                                if (null !== y) {
                                    y.flags &= -257;
                                    Vi(y, g, h, f, b);
                                    y.mode & 1 && Si(f, l, b);
                                    b = y;
                                    k = l;
                                    var n = b.updateQueue;
                                    if (null === n) {
                                        var t = new Set;
                                        t.add(k);
                                        b.updateQueue = t;
                                    } else n.add(k);
                                    break a;
                                } else {
                                    if (0 === (b & 1)) {
                                        Si(f, l, b);
                                        tj();
                                        break a;
                                    }
                                    k = Error(p(426));
                                }
                            } else if (I && h.mode & 1) {
                                var J = Ui(g);
                                if (null !== J) {
                                    0 === (J.flags & 65536) && (J.flags |= 256);
                                    Vi(J, g, h, f, b);
                                    Jg(Ji(k, h));
                                    break a;
                                }
                            }
                            f = k = Ji(k, h);
                            4 !== T && (T = 2);
                            null === sk ? sk = [ f ] : sk.push(f);
                            f = g;
                            do {
                                switch (f.tag) {
                                  case 3:
                                    f.flags |= 65536;
                                    b &= -b;
                                    f.lanes |= b;
                                    var x = Ni(f, k, b);
                                    ph(f, x);
                                    break a;

                                  case 1:
                                    h = k;
                                    var w = f.type, u = f.stateNode;
                                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                                        f.flags |= 65536;
                                        b &= -b;
                                        f.lanes |= b;
                                        var F = Qi(f, h, b);
                                        ph(f, F);
                                        break a;
                                    }
                                }
                                f = f.return;
                            } while (null !== f);
                        }
                        Sk(c);
                    } catch (na) {
                        b = na;
                        Y === c && null !== c && (Y = c = c.return);
                        continue;
                    }
                    break;
                } while (1);
            }
            function Jk() {
                var a = mk.current;
                mk.current = Rh;
                return null === a ? Rh : a;
            }
            function tj() {
                if (0 === T || 3 === T || 2 === T) T = 4;
                null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
            }
            function Ik(a, b) {
                var c = K;
                K |= 2;
                var d = Jk();
                if (Q !== a || Z !== b) uk = null, Kk(a, b);
                do {
                    try {
                        Tk();
                        break;
                    } catch (e) {
                        Mk(a, e);
                    }
                } while (1);
                $g();
                K = c;
                mk.current = d;
                if (null !== Y) throw Error(p(261));
                Q = null;
                Z = 0;
                return T;
            }
            function Tk() {
                for (;null !== Y; ) Uk(Y);
            }
            function Lk() {
                for (;null !== Y && !cc(); ) Uk(Y);
            }
            function Uk(a) {
                var b = Vk(a.alternate, a, fj);
                a.memoizedProps = a.pendingProps;
                null === b ? Sk(a) : Y = b;
                nk.current = null;
            }
            function Sk(a) {
                var b = a;
                do {
                    var c = b.alternate;
                    a = b.return;
                    if (0 === (b.flags & 32768)) {
                        if (c = Ej(c, b, fj), null !== c) {
                            Y = c;
                            return;
                        }
                    } else {
                        c = Ij(c, b);
                        if (null !== c) {
                            c.flags &= 32767;
                            Y = c;
                            return;
                        }
                        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null; else {
                            T = 6;
                            Y = null;
                            return;
                        }
                    }
                    b = b.sibling;
                    if (null !== b) {
                        Y = b;
                        return;
                    }
                    Y = b = a;
                } while (null !== b);
                0 === T && (T = 5);
            }
            function Pk(a, b, c) {
                var d = C, e = ok.transition;
                try {
                    ok.transition = null, C = 1, Wk(a, b, c, d);
                } finally {
                    ok.transition = e, C = d;
                }
                return null;
            }
            function Wk(a, b, c, d) {
                do {
                    Hk();
                } while (null !== wk);
                if (0 !== (K & 6)) throw Error(p(327));
                c = a.finishedWork;
                var e = a.finishedLanes;
                if (null === c) return null;
                a.finishedWork = null;
                a.finishedLanes = 0;
                if (c === a.current) throw Error(p(177));
                a.callbackNode = null;
                a.callbackPriority = 0;
                var f = c.lanes | c.childLanes;
                Bc(a, f);
                a === Q && (Y = Q = null, Z = 0);
                0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = !0, Fk(hc, (function() {
                    Hk();
                    return null;
                })));
                f = 0 !== (c.flags & 15990);
                if (0 !== (c.subtreeFlags & 15990) || f) {
                    f = ok.transition;
                    ok.transition = null;
                    var g = C;
                    C = 1;
                    var h = K;
                    K |= 4;
                    nk.current = null;
                    Oj(a, c);
                    dk(c, a);
                    Oe(Df);
                    dd = !!Cf;
                    Df = Cf = null;
                    a.current = c;
                    hk(c, a, e);
                    dc();
                    K = h;
                    C = g;
                    ok.transition = f;
                } else a.current = c;
                vk && (vk = !1, wk = a, xk = e);
                f = a.pendingLanes;
                0 === f && (Ri = null);
                mc(c.stateNode, d);
                Dk(a, B());
                if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], 
                d(e.value, {
                    componentStack: e.stack,
                    digest: e.digest
                });
                if (Oi) throw Oi = !1, a = Pi, Pi = null, a;
                0 !== (xk & 1) && 0 !== a.tag && Hk();
                f = a.pendingLanes;
                0 !== (f & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
                jg();
                return null;
            }
            function Hk() {
                if (null !== wk) {
                    var a = Dc(xk), b = ok.transition, c = C;
                    try {
                        ok.transition = null;
                        C = 16 > a ? 16 : a;
                        if (null === wk) var d = !1; else {
                            a = wk;
                            wk = null;
                            xk = 0;
                            if (0 !== (K & 6)) throw Error(p(331));
                            var e = K;
                            K |= 4;
                            for (V = a.current; null !== V; ) {
                                var f = V, g = f.child;
                                if (0 !== (V.flags & 16)) {
                                    var h = f.deletions;
                                    if (null !== h) {
                                        for (var k = 0; k < h.length; k++) {
                                            var l = h[k];
                                            for (V = l; null !== V; ) {
                                                var m = V;
                                                switch (m.tag) {
                                                  case 0:
                                                  case 11:
                                                  case 15:
                                                    Pj(8, m, f);
                                                }
                                                var q = m.child;
                                                if (null !== q) q.return = m, V = q; else for (;null !== V; ) {
                                                    m = V;
                                                    var r = m.sibling, y = m.return;
                                                    Sj(m);
                                                    if (m === l) {
                                                        V = null;
                                                        break;
                                                    }
                                                    if (null !== r) {
                                                        r.return = y;
                                                        V = r;
                                                        break;
                                                    }
                                                    V = y;
                                                }
                                            }
                                        }
                                        var n = f.alternate;
                                        if (null !== n) {
                                            var t = n.child;
                                            if (null !== t) {
                                                n.child = null;
                                                do {
                                                    var J = t.sibling;
                                                    t.sibling = null;
                                                    t = J;
                                                } while (null !== t);
                                            }
                                        }
                                        V = f;
                                    }
                                }
                                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g; else b: for (;null !== V; ) {
                                    f = V;
                                    if (0 !== (f.flags & 2048)) switch (f.tag) {
                                      case 0:
                                      case 11:
                                      case 15:
                                        Pj(9, f, f.return);
                                    }
                                    var x = f.sibling;
                                    if (null !== x) {
                                        x.return = f.return;
                                        V = x;
                                        break b;
                                    }
                                    V = f.return;
                                }
                            }
                            var w = a.current;
                            for (V = w; null !== V; ) {
                                g = V;
                                var u = g.child;
                                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u; else b: for (g = w; null !== V; ) {
                                    h = V;
                                    if (0 !== (h.flags & 2048)) try {
                                        switch (h.tag) {
                                          case 0:
                                          case 11:
                                          case 15:
                                            Qj(9, h);
                                        }
                                    } catch (na) {
                                        W(h, h.return, na);
                                    }
                                    if (h === g) {
                                        V = null;
                                        break b;
                                    }
                                    var F = h.sibling;
                                    if (null !== F) {
                                        F.return = h.return;
                                        V = F;
                                        break b;
                                    }
                                    V = h.return;
                                }
                            }
                            K = e;
                            jg();
                            if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                                lc.onPostCommitFiberRoot(kc, a);
                            } catch (na) {}
                            d = !0;
                        }
                        return d;
                    } finally {
                        C = c, ok.transition = b;
                    }
                }
                return !1;
            }
            function Xk(a, b, c) {
                b = Ji(c, b);
                b = Ni(a, b, 1);
                a = nh(a, b, 1);
                b = R();
                null !== a && (Ac(a, 1, b), Dk(a, b));
            }
            function W(a, b, c) {
                if (3 === a.tag) Xk(a, a, c); else for (;null !== b; ) {
                    if (3 === b.tag) {
                        Xk(b, a, c);
                        break;
                    } else if (1 === b.tag) {
                        var d = b.stateNode;
                        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
                            a = Ji(c, a);
                            a = Qi(b, a, 1);
                            b = nh(b, a, 1);
                            a = R();
                            null !== b && (Ac(b, 1, a), Dk(b, a));
                            break;
                        }
                    }
                    b = b.return;
                }
            }
            function Ti(a, b, c) {
                var d = a.pingCache;
                null !== d && d.delete(b);
                b = R();
                a.pingedLanes |= a.suspendedLanes & c;
                Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
                Dk(a, b);
            }
            function Yk(a, b) {
                0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
                var c = R();
                a = ih(a, b);
                null !== a && (Ac(a, b, c), Dk(a, c));
            }
            function uj(a) {
                var b = a.memoizedState, c = 0;
                null !== b && (c = b.retryLane);
                Yk(a, c);
            }
            function bk(a, b) {
                var c = 0;
                switch (a.tag) {
                  case 13:
                    var d = a.stateNode;
                    var e = a.memoizedState;
                    null !== e && (c = e.retryLane);
                    break;

                  case 19:
                    d = a.stateNode;
                    break;

                  default:
                    throw Error(p(314));
                }
                null !== d && d.delete(b);
                Yk(a, c);
            }
            var Vk;
            Vk = function(a, b, c) {
                if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = !0; else {
                    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = !1, yj(a, b, c);
                    dh = 0 !== (a.flags & 131072) ? !0 : !1;
                } else dh = !1, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
                b.lanes = 0;
                switch (b.tag) {
                  case 2:
                    var d = b.type;
                    ij(a, b);
                    a = b.pendingProps;
                    var e = Yf(b, H.current);
                    ch(b, c);
                    e = Nh(null, b, d, a, e, c);
                    var f = Sh();
                    b.flags |= 1;
                    "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, 
                    b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f = !0, cg(b)) : f = !1, 
                    b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), 
                    e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, !0, f, c)) : (b.tag = 0, 
                    I && f && vg(b), Xi(null, b, e, c), b = b.child);
                    return b;

                  case 16:
                    d = b.elementType;
                    a: {
                        ij(a, b);
                        a = b.pendingProps;
                        e = d._init;
                        d = e(d._payload);
                        b.type = d;
                        e = b.tag = Zk(d);
                        a = Ci(d, a);
                        switch (e) {
                          case 0:
                            b = cj(null, b, d, a, c);
                            break a;

                          case 1:
                            b = hj(null, b, d, a, c);
                            break a;

                          case 11:
                            b = Yi(null, b, d, a, c);
                            break a;

                          case 14:
                            b = $i(null, b, d, Ci(d.type, a), c);
                            break a;
                        }
                        throw Error(p(306, d, ""));
                    }
                    return b;

                  case 0:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);

                  case 1:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);

                  case 3:
                    a: {
                        kj(b);
                        if (null === a) throw Error(p(387));
                        d = b.pendingProps;
                        f = b.memoizedState;
                        e = f.element;
                        lh(a, b);
                        qh(b, d, null, c);
                        var g = b.memoizedState;
                        d = g.element;
                        if (f.isDehydrated) if (f = {
                            element: d,
                            isDehydrated: !1,
                            cache: g.cache,
                            pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                            transitions: g.transitions
                        }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
                            e = Ji(Error(p(423)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else if (d !== e) {
                            e = Ji(Error(p(424)), b);
                            b = lj(a, b, d, c, e);
                            break a;
                        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = !0, zg = null, 
                        c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling; else {
                            Ig();
                            if (d === e) {
                                b = Zi(a, b, c);
                                break a;
                            }
                            Xi(a, b, d, c);
                        }
                        b = b.child;
                    }
                    return b;

                  case 5:
                    return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, 
                    g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b.flags |= 32), 
                    gj(a, b), Xi(a, b, g, c), b.child;

                  case 6:
                    return null === a && Eg(b), null;

                  case 13:
                    return oj(a, b, c);

                  case 4:
                    return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), 
                    b.child;

                  case 11:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);

                  case 7:
                    return Xi(a, b, b.pendingProps, c), b.child;

                  case 8:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 12:
                    return Xi(a, b, b.pendingProps.children, c), b.child;

                  case 10:
                    a: {
                        d = b.type._context;
                        e = b.pendingProps;
                        f = b.memoizedProps;
                        g = e.value;
                        G(Wg, d._currentValue);
                        d._currentValue = g;
                        if (null !== f) if (He(f.value, g)) {
                            if (f.children === e.children && !Wf.current) {
                                b = Zi(a, b, c);
                                break a;
                            }
                        } else for (f = b.child, null !== f && (f.return = b); null !== f; ) {
                            var h = f.dependencies;
                            if (null !== h) {
                                g = f.child;
                                for (var k = h.firstContext; null !== k; ) {
                                    if (k.context === d) {
                                        if (1 === f.tag) {
                                            k = mh(-1, c & -c);
                                            k.tag = 2;
                                            var l = f.updateQueue;
                                            if (null !== l) {
                                                l = l.shared;
                                                var m = l.pending;
                                                null === m ? k.next = k : (k.next = m.next, m.next = k);
                                                l.pending = k;
                                            }
                                        }
                                        f.lanes |= c;
                                        k = f.alternate;
                                        null !== k && (k.lanes |= c);
                                        bh(f.return, c, b);
                                        h.lanes |= c;
                                        break;
                                    }
                                    k = k.next;
                                }
                            } else if (10 === f.tag) g = f.type === b.type ? null : f.child; else if (18 === f.tag) {
                                g = f.return;
                                if (null === g) throw Error(p(341));
                                g.lanes |= c;
                                h = g.alternate;
                                null !== h && (h.lanes |= c);
                                bh(g, c, b);
                                g = f.sibling;
                            } else g = f.child;
                            if (null !== g) g.return = f; else for (g = f; null !== g; ) {
                                if (g === b) {
                                    g = null;
                                    break;
                                }
                                f = g.sibling;
                                if (null !== f) {
                                    f.return = g.return;
                                    g = f;
                                    break;
                                }
                                g = g.return;
                            }
                            f = g;
                        }
                        Xi(a, b, e.children, c);
                        b = b.child;
                    }
                    return b;

                  case 9:
                    return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, 
                    Xi(a, b, d, c), b.child;

                  case 14:
                    return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);

                  case 15:
                    return bj(a, b, b.type, b.pendingProps, c);

                  case 17:
                    return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), 
                    b.tag = 1, Zf(d) ? (a = !0, cg(b)) : a = !1, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), 
                    jj(null, b, d, !0, a, c);

                  case 19:
                    return xj(a, b, c);

                  case 22:
                    return dj(a, b, c);
                }
                throw Error(p(156, b.tag));
            };
            function Fk(a, b) {
                return ac(a, b);
            }
            function $k(a, b, c, d) {
                this.tag = a;
                this.key = c;
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
                this.index = 0;
                this.ref = null;
                this.pendingProps = b;
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
                this.mode = d;
                this.subtreeFlags = this.flags = 0;
                this.deletions = null;
                this.childLanes = this.lanes = 0;
                this.alternate = null;
            }
            function Bg(a, b, c, d) {
                return new $k(a, b, c, d);
            }
            function aj(a) {
                a = a.prototype;
                return !(!a || !a.isReactComponent);
            }
            function Zk(a) {
                if ("function" === typeof a) return aj(a) ? 1 : 0;
                if (void 0 !== a && null !== a) {
                    a = a.$$typeof;
                    if (a === Da) return 11;
                    if (a === Ga) return 14;
                }
                return 2;
            }
            function Pg(a, b) {
                var c = a.alternate;
                null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, 
                c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, 
                c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
                c.flags = a.flags & 14680064;
                c.childLanes = a.childLanes;
                c.lanes = a.lanes;
                c.child = a.child;
                c.memoizedProps = a.memoizedProps;
                c.memoizedState = a.memoizedState;
                c.updateQueue = a.updateQueue;
                b = a.dependencies;
                c.dependencies = null === b ? null : {
                    lanes: b.lanes,
                    firstContext: b.firstContext
                };
                c.sibling = a.sibling;
                c.index = a.index;
                c.ref = a.ref;
                return c;
            }
            function Rg(a, b, c, d, e, f) {
                var g = 2;
                d = a;
                if ("function" === typeof a) aj(a) && (g = 1); else if ("string" === typeof a) g = 5; else a: switch (a) {
                  case ya:
                    return Tg(c.children, e, f, b);

                  case za:
                    g = 8;
                    e |= 8;
                    break;

                  case Aa:
                    return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f, a;

                  case Ea:
                    return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f, a;

                  case Fa:
                    return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f, a;

                  case Ia:
                    return pj(c, e, f, b);

                  default:
                    if ("object" === typeof a && null !== a) switch (a.$$typeof) {
                      case Ba:
                        g = 10;
                        break a;

                      case Ca:
                        g = 9;
                        break a;

                      case Da:
                        g = 11;
                        break a;

                      case Ga:
                        g = 14;
                        break a;

                      case Ha:
                        g = 16;
                        d = null;
                        break a;
                    }
                    throw Error(p(130, null == a ? a : typeof a, ""));
                }
                b = Bg(g, c, b, e);
                b.elementType = a;
                b.type = d;
                b.lanes = f;
                return b;
            }
            function Tg(a, b, c, d) {
                a = Bg(7, a, d, b);
                a.lanes = c;
                return a;
            }
            function pj(a, b, c, d) {
                a = Bg(22, a, d, b);
                a.elementType = Ia;
                a.lanes = c;
                a.stateNode = {
                    isHidden: !1
                };
                return a;
            }
            function Qg(a, b, c) {
                a = Bg(6, a, null, b);
                a.lanes = c;
                return a;
            }
            function Sg(a, b, c) {
                b = Bg(4, null !== a.children ? a.children : [], a.key, b);
                b.lanes = c;
                b.stateNode = {
                    containerInfo: a.containerInfo,
                    pendingChildren: null,
                    implementation: a.implementation
                };
                return b;
            }
            function al(a, b, c, d, e) {
                this.tag = b;
                this.containerInfo = a;
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
                this.timeoutHandle = -1;
                this.callbackNode = this.pendingContext = this.context = null;
                this.callbackPriority = 0;
                this.eventTimes = zc(0);
                this.expirationTimes = zc(-1);
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
                this.entanglements = zc(0);
                this.identifierPrefix = d;
                this.onRecoverableError = e;
                this.mutableSourceEagerHydrationData = null;
            }
            function bl(a, b, c, d, e, f, g, h, k) {
                a = new al(a, b, c, h, k);
                1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
                f = Bg(3, null, null, b);
                a.current = f;
                f.stateNode = a;
                f.memoizedState = {
                    element: d,
                    isDehydrated: c,
                    cache: null,
                    transitions: null,
                    pendingSuspenseBoundaries: null
                };
                kh(f);
                return a;
            }
            function cl(a, b, c) {
                var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: wa,
                    key: null == d ? null : "" + d,
                    children: a,
                    containerInfo: b,
                    implementation: c
                };
            }
            function dl(a) {
                if (!a) return Vf;
                a = a._reactInternals;
                a: {
                    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
                    var b = a;
                    do {
                        switch (b.tag) {
                          case 3:
                            b = b.stateNode.context;
                            break a;

                          case 1:
                            if (Zf(b.type)) {
                                b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                                break a;
                            }
                        }
                        b = b.return;
                    } while (null !== b);
                    throw Error(p(171));
                }
                if (1 === a.tag) {
                    var c = a.type;
                    if (Zf(c)) return bg(a, c, b);
                }
                return b;
            }
            function el(a, b, c, d, e, f, g, h, k) {
                a = bl(c, d, !0, a, e, f, g, h, k);
                a.context = dl(null);
                c = a.current;
                d = R();
                e = yi(c);
                f = mh(d, e);
                f.callback = void 0 !== b && null !== b ? b : null;
                nh(c, f, e);
                a.current.lanes = e;
                Ac(a, e, d);
                Dk(a, d);
                return a;
            }
            function fl(a, b, c, d) {
                var e = b.current, f = R(), g = yi(e);
                c = dl(c);
                null === b.context ? b.context = c : b.pendingContext = c;
                b = mh(f, g);
                b.payload = {
                    element: a
                };
                d = void 0 === d ? null : d;
                null !== d && (b.callback = d);
                a = nh(e, b, g);
                null !== a && (gi(a, e, g, f), oh(a, e, g));
                return g;
            }
            function gl(a) {
                a = a.current;
                if (!a.child) return null;
                switch (a.child.tag) {
                  case 5:
                    return a.child.stateNode;

                  default:
                    return a.child.stateNode;
                }
            }
            function hl(a, b) {
                a = a.memoizedState;
                if (null !== a && null !== a.dehydrated) {
                    var c = a.retryLane;
                    a.retryLane = 0 !== c && c < b ? c : b;
                }
            }
            function il(a, b) {
                hl(a, b);
                (a = a.alternate) && hl(a, b);
            }
            function jl() {
                return null;
            }
            var kl = "function" === typeof reportError ? reportError : function(a) {
                console.error(a);
            };
            function ll(a) {
                this._internalRoot = a;
            }
            ml.prototype.render = ll.prototype.render = function(a) {
                var b = this._internalRoot;
                if (null === b) throw Error(p(409));
                fl(a, b, null, null);
            };
            ml.prototype.unmount = ll.prototype.unmount = function() {
                var a = this._internalRoot;
                if (null !== a) {
                    this._internalRoot = null;
                    var b = a.containerInfo;
                    Rk((function() {
                        fl(null, a, null, null);
                    }));
                    b[uf] = null;
                }
            };
            function ml(a) {
                this._internalRoot = a;
            }
            ml.prototype.unstable_scheduleHydration = function(a) {
                if (a) {
                    var b = Hc();
                    a = {
                        blockedOn: null,
                        target: a,
                        priority: b
                    };
                    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
                    Qc.splice(c, 0, a);
                    0 === c && Vc(a);
                }
            };
            function nl(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
            }
            function ol(a) {
                return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
            }
            function pl() {}
            function ql(a, b, c, d, e) {
                if (e) {
                    if ("function" === typeof d) {
                        var f = d;
                        d = function() {
                            var a = gl(g);
                            f.call(a);
                        };
                    }
                    var g = el(b, d, a, 0, null, !1, !1, "", pl);
                    a._reactRootContainer = g;
                    a[uf] = g.current;
                    sf(8 === a.nodeType ? a.parentNode : a);
                    Rk();
                    return g;
                }
                for (;e = a.lastChild; ) a.removeChild(e);
                if ("function" === typeof d) {
                    var h = d;
                    d = function() {
                        var a = gl(k);
                        h.call(a);
                    };
                }
                var k = bl(a, 0, !1, null, null, !1, !1, "", pl);
                a._reactRootContainer = k;
                a[uf] = k.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                Rk((function() {
                    fl(b, k, c, d);
                }));
                return k;
            }
            function rl(a, b, c, d, e) {
                var f = c._reactRootContainer;
                if (f) {
                    var g = f;
                    if ("function" === typeof e) {
                        var h = e;
                        e = function() {
                            var a = gl(g);
                            h.call(a);
                        };
                    }
                    fl(b, g, a, e);
                } else g = ql(c, b, a, e, d);
                return gl(g);
            }
            Ec = function(a) {
                switch (a.tag) {
                  case 3:
                    var b = a.stateNode;
                    if (b.current.memoizedState.isDehydrated) {
                        var c = tc(b.pendingLanes);
                        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
                    }
                    break;

                  case 13:
                    Rk((function() {
                        var b = ih(a, 1);
                        if (null !== b) {
                            var c = R();
                            gi(b, a, 1, c);
                        }
                    })), il(a, 1);
                }
            };
            Fc = function(a) {
                if (13 === a.tag) {
                    var b = ih(a, 134217728);
                    if (null !== b) {
                        var c = R();
                        gi(b, a, 134217728, c);
                    }
                    il(a, 134217728);
                }
            };
            Gc = function(a) {
                if (13 === a.tag) {
                    var b = yi(a), c = ih(a, b);
                    if (null !== c) {
                        var d = R();
                        gi(c, a, b, d);
                    }
                    il(a, b);
                }
            };
            Hc = function() {
                return C;
            };
            Ic = function(a, b) {
                var c = C;
                try {
                    return C = a, b();
                } finally {
                    C = c;
                }
            };
            yb = function(a, b, c) {
                switch (b) {
                  case "input":
                    bb(a, c);
                    b = c.name;
                    if ("radio" === c.type && null != b) {
                        for (c = a; c.parentNode; ) c = c.parentNode;
                        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
                        for (b = 0; b < c.length; b++) {
                            var d = c[b];
                            if (d !== a && d.form === a.form) {
                                var e = Db(d);
                                if (!e) throw Error(p(90));
                                Wa(d);
                                bb(d, e);
                            }
                        }
                    }
                    break;

                  case "textarea":
                    ib(a, c);
                    break;

                  case "select":
                    b = c.value, null != b && fb(a, !!c.multiple, b, !1);
                }
            };
            Gb = Qk;
            Hb = Rk;
            var sl = {
                usingClientEntryPoint: !1,
                Events: [ Cb, ue, Db, Eb, Fb, Qk ]
            }, tl = {
                findFiberByHostInstance: Wc,
                bundleType: 0,
                version: "18.3.1",
                rendererPackageName: "react-dom"
            };
            var ul = {
                bundleType: tl.bundleType,
                version: tl.version,
                rendererPackageName: tl.rendererPackageName,
                rendererConfig: tl.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: ua.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(a) {
                    a = Zb(a);
                    return null === a ? null : a.stateNode;
                },
                findFiberByHostInstance: tl.findFiberByHostInstance || jl,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!vl.isDisabled && vl.supportsFiber) try {
                    kc = vl.inject(ul), lc = vl;
                } catch (a) {}
            }
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
            exports.createPortal = function(a, b) {
                var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!nl(b)) throw Error(p(200));
                return cl(a, b, null, c);
            };
            exports.createRoot = function(a, b) {
                if (!nl(a)) throw Error(p(299));
                var c = !1, d = "", e = kl;
                null !== b && void 0 !== b && (!0 === b.unstable_strictMode && (c = !0), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), 
                void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
                b = bl(a, 1, !1, null, null, c, !1, d, e);
                a[uf] = b.current;
                sf(8 === a.nodeType ? a.parentNode : a);
                return new ll(b);
            };
            exports.findDOMNode = function(a) {
                if (null == a) return null;
                if (1 === a.nodeType) return a;
                var b = a._reactInternals;
                if (void 0 === b) {
                    if ("function" === typeof a.render) throw Error(p(188));
                    a = Object.keys(a).join(",");
                    throw Error(p(268, a));
                }
                a = Zb(b);
                a = null === a ? null : a.stateNode;
                return a;
            };
            exports.flushSync = function(a) {
                return Rk(a);
            };
            exports.hydrate = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !0, c);
            };
            exports.hydrateRoot = function(a, b, c) {
                if (!nl(a)) throw Error(p(405));
                var d = null != c && c.hydratedSources || null, e = !1, f = "", g = kl;
                null !== c && void 0 !== c && (!0 === c.unstable_strictMode && (e = !0), void 0 !== c.identifierPrefix && (f = c.identifierPrefix), 
                void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
                b = el(b, null, a, 1, null != c ? c : null, e, !1, f, g);
                a[uf] = b.current;
                sf(a);
                if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), 
                null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [ c, e ] : b.mutableSourceEagerHydrationData.push(c, e);
                return new ml(b);
            };
            exports.render = function(a, b, c) {
                if (!ol(b)) throw Error(p(200));
                return rl(null, a, b, !1, c);
            };
            exports.unmountComponentAtNode = function(a) {
                if (!ol(a)) throw Error(p(40));
                return a._reactRootContainer ? (Rk((function() {
                    rl(null, null, a, !1, (function() {
                        a._reactRootContainer = null;
                        a[uf] = null;
                    }));
                })), !0) : !1;
            };
            exports.unstable_batchedUpdates = Qk;
            exports.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
                if (!ol(c)) throw Error(p(200));
                if (null == a || void 0 === a._reactInternals) throw Error(p(38));
                return rl(a, b, c, !1, d);
            };
            exports.version = "18.3.1-next-f1338f8080-20240426";
        },
        338: (__unused_webpack_module, exports, __webpack_require__) => {
            var m = __webpack_require__(961);
            if (true) {
                exports.createRoot = m.createRoot;
                exports.hydrateRoot = m.hydrateRoot;
            } else ;
        },
        961: (module, __unused_webpack_exports, __webpack_require__) => {
            function checkDCE() {
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
                if (false) ;
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
                } catch (err) {
                    console.error(err);
                }
            }
            if (true) {
                checkDCE();
                module.exports = __webpack_require__(551);
            }
        },
        287: (__unused_webpack_module, exports) => {
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                a = z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F;
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, (function(a) {
                    return b[a];
                }));
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ("undefined" === k || "boolean" === k) a = null;
                var h = !1;
                if (null === a) h = !0; else switch (k) {
                  case "string":
                  case "number":
                    h = !0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        h = !0;
                    }
                }
                if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", 
                null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), 
                b.push(c)), 1;
                h = 0;
                d = "" === d ? "." : d + ":";
                if (I(a)) for (var g = 0; g < a.length; g++) {
                    k = a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done; ) k = k.value, 
                f = d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw b = String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                }));
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b = b();
                    b.then((function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                    }), (function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                    }));
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            exports.Children = {
                map: S,
                forEach: function(a, b, e) {
                    S(a, (function() {
                        b.apply(this, arguments);
                    }), e);
                },
                count: function(a) {
                    var b = 0;
                    S(a, (function() {
                        b++;
                    }));
                    return b;
                },
                toArray: function(a) {
                    return S(a, (function(a) {
                        return a;
                    })) || [];
                },
                only: function(a) {
                    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                    return a;
                }
            };
            exports.Component = E;
            exports.Fragment = p;
            exports.Profiler = r;
            exports.PureComponent = G;
            exports.StrictMode = q;
            exports.Suspense = w;
            exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
            exports.act = X;
            exports.cloneElement = function(a, b, e) {
                if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
                var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
                if (null != b) {
                    void 0 !== b.ref && (k = b.ref, h = K.current);
                    void 0 !== b.key && (c = "" + b.key);
                    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
                }
                var f = arguments.length - 2;
                if (1 === f) d.children = e; else if (1 < f) {
                    g = Array(f);
                    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
                    d.children = g;
                }
                return {
                    $$typeof: l,
                    type: a.type,
                    key: c,
                    ref: k,
                    props: d,
                    _owner: h
                };
            };
            exports.createContext = function(a) {
                a = {
                    $$typeof: u,
                    _currentValue: a,
                    _currentValue2: a,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                };
                a.Provider = {
                    $$typeof: t,
                    _context: a
                };
                return a.Consumer = a;
            };
            exports.createElement = M;
            exports.createFactory = function(a) {
                var b = M.bind(null, a);
                b.type = a;
                return b;
            };
            exports.createRef = function() {
                return {
                    current: null
                };
            };
            exports.forwardRef = function(a) {
                return {
                    $$typeof: v,
                    render: a
                };
            };
            exports.isValidElement = O;
            exports.lazy = function(a) {
                return {
                    $$typeof: y,
                    _payload: {
                        _status: -1,
                        _result: a
                    },
                    _init: T
                };
            };
            exports.memo = function(a, b) {
                return {
                    $$typeof: x,
                    type: a,
                    compare: void 0 === b ? null : b
                };
            };
            exports.startTransition = function(a) {
                var b = V.transition;
                V.transition = {};
                try {
                    a();
                } finally {
                    V.transition = b;
                }
            };
            exports.unstable_act = X;
            exports.useCallback = function(a, b) {
                return U.current.useCallback(a, b);
            };
            exports.useContext = function(a) {
                return U.current.useContext(a);
            };
            exports.useDebugValue = function() {};
            exports.useDeferredValue = function(a) {
                return U.current.useDeferredValue(a);
            };
            exports.useEffect = function(a, b) {
                return U.current.useEffect(a, b);
            };
            exports.useId = function() {
                return U.current.useId();
            };
            exports.useImperativeHandle = function(a, b, e) {
                return U.current.useImperativeHandle(a, b, e);
            };
            exports.useInsertionEffect = function(a, b) {
                return U.current.useInsertionEffect(a, b);
            };
            exports.useLayoutEffect = function(a, b) {
                return U.current.useLayoutEffect(a, b);
            };
            exports.useMemo = function(a, b) {
                return U.current.useMemo(a, b);
            };
            exports.useReducer = function(a, b, e) {
                return U.current.useReducer(a, b, e);
            };
            exports.useRef = function(a) {
                return U.current.useRef(a);
            };
            exports.useState = function(a) {
                return U.current.useState(a);
            };
            exports.useSyncExternalStore = function(a, b, e) {
                return U.current.useSyncExternalStore(a, b, e);
            };
            exports.useTransition = function() {
                return U.current.useTransition();
            };
            exports.version = "18.3.1";
        },
        540: (module, __unused_webpack_exports, __webpack_require__) => {
            if (true) module.exports = __webpack_require__(287);
        },
        463: (__unused_webpack_module, exports) => {
            /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            function f(a, b) {
                var c = a.length;
                a.push(b);
                a: for (;0 < c; ) {
                    var d = c - 1 >>> 1, e = a[d];
                    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d; else break a;
                }
            }
            function h(a) {
                return 0 === a.length ? null : a[0];
            }
            function k(a) {
                if (0 === a.length) return null;
                var b = a[0], c = a.pop();
                if (c !== b) {
                    a[0] = c;
                    a: for (var d = 0, e = a.length, w = e >>> 1; d < w; ) {
                        var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
                        if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, 
                        a[m] = c, d = m); else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n; else break a;
                    }
                }
                return b;
            }
            function g(a, b) {
                var c = a.sortIndex - b.sortIndex;
                return 0 !== c ? c : a.id - b.id;
            }
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var l = performance;
                exports.unstable_now = function() {
                    return l.now();
                };
            } else {
                var p = Date, q = p.now();
                exports.unstable_now = function() {
                    return p.now() - q;
                };
            }
            var r = [], t = [], u = 1, v = null, y = 3, z = !1, A = !1, B = !1, D = "function" === typeof setTimeout ? setTimeout : null, E = "function" === typeof clearTimeout ? clearTimeout : null, F = "undefined" !== typeof setImmediate ? setImmediate : null;
            "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
            function G(a) {
                for (var b = h(t); null !== b; ) {
                    if (null === b.callback) k(t); else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, 
                    f(r, b); else break;
                    b = h(t);
                }
            }
            function H(a) {
                B = !1;
                G(a);
                if (!A) if (null !== h(r)) A = !0, I(J); else {
                    var b = h(t);
                    null !== b && K(H, b.startTime - a);
                }
            }
            function J(a, b) {
                A = !1;
                B && (B = !1, E(L), L = -1);
                z = !0;
                var c = y;
                try {
                    G(b);
                    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M()); ) {
                        var d = v.callback;
                        if ("function" === typeof d) {
                            v.callback = null;
                            y = v.priorityLevel;
                            var e = d(v.expirationTime <= b);
                            b = exports.unstable_now();
                            "function" === typeof e ? v.callback = e : v === h(r) && k(r);
                            G(b);
                        } else k(r);
                        v = h(r);
                    }
                    if (null !== v) var w = !0; else {
                        var m = h(t);
                        null !== m && K(H, m.startTime - b);
                        w = !1;
                    }
                    return w;
                } finally {
                    v = null, y = c, z = !1;
                }
            }
            var N = !1, O = null, L = -1, P = 5, Q = -1;
            function M() {
                return exports.unstable_now() - Q < P ? !1 : !0;
            }
            function R() {
                if (null !== O) {
                    var a = exports.unstable_now();
                    Q = a;
                    var b = !0;
                    try {
                        b = O(!0, a);
                    } finally {
                        b ? S() : (N = !1, O = null);
                    }
                } else N = !1;
            }
            var S;
            if ("function" === typeof F) S = function() {
                F(R);
            }; else if ("undefined" !== typeof MessageChannel) {
                var T = new MessageChannel, U = T.port2;
                T.port1.onmessage = R;
                S = function() {
                    U.postMessage(null);
                };
            } else S = function() {
                D(R, 0);
            };
            function I(a) {
                O = a;
                N || (N = !0, S());
            }
            function K(a, b) {
                L = D((function() {
                    a(exports.unstable_now());
                }), b);
            }
            exports.unstable_IdlePriority = 5;
            exports.unstable_ImmediatePriority = 1;
            exports.unstable_LowPriority = 4;
            exports.unstable_NormalPriority = 3;
            exports.unstable_Profiling = null;
            exports.unstable_UserBlockingPriority = 2;
            exports.unstable_cancelCallback = function(a) {
                a.callback = null;
            };
            exports.unstable_continueExecution = function() {
                A || z || (A = !0, I(J));
            };
            exports.unstable_forceFrameRate = function(a) {
                0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
            };
            exports.unstable_getCurrentPriorityLevel = function() {
                return y;
            };
            exports.unstable_getFirstCallbackNode = function() {
                return h(r);
            };
            exports.unstable_next = function(a) {
                switch (y) {
                  case 1:
                  case 2:
                  case 3:
                    var b = 3;
                    break;

                  default:
                    b = y;
                }
                var c = y;
                y = b;
                try {
                    return a();
                } finally {
                    y = c;
                }
            };
            exports.unstable_pauseExecution = function() {};
            exports.unstable_requestPaint = function() {};
            exports.unstable_runWithPriority = function(a, b) {
                switch (a) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;

                  default:
                    a = 3;
                }
                var c = y;
                y = a;
                try {
                    return b();
                } finally {
                    y = c;
                }
            };
            exports.unstable_scheduleCallback = function(a, b, c) {
                var d = exports.unstable_now();
                "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
                switch (a) {
                  case 1:
                    var e = -1;
                    break;

                  case 2:
                    e = 250;
                    break;

                  case 5:
                    e = 1073741823;
                    break;

                  case 4:
                    e = 1e4;
                    break;

                  default:
                    e = 5e3;
                }
                e = c + e;
                a = {
                    id: u++,
                    callback: b,
                    priorityLevel: a,
                    startTime: c,
                    expirationTime: e,
                    sortIndex: -1
                };
                c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, 
                K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
                return a;
            };
            exports.unstable_shouldYield = M;
            exports.unstable_wrapCallback = function(a) {
                var b = y;
                return function() {
                    var c = y;
                    y = b;
                    try {
                        return a.apply(this, arguments);
                    } finally {
                        y = c;
                    }
                };
            };
        },
        982: (module, __unused_webpack_exports, __webpack_require__) => {
            if (true) module.exports = __webpack_require__(463);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        var getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__;
        var leafPrototypes;
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = this(value);
            if (mode & 8) return value;
            if (typeof value === "object" && value) {
                if (mode & 4 && value.__esModule) return value;
                if (mode & 16 && typeof value.then === "function") return value;
            }
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            var def = {};
            leafPrototypes = leafPrototypes || [ null, getProto({}), getProto([]), getProto(getProto) ];
            for (var current = mode & 2 && value; typeof current == "object" && !~leafPrototypes.indexOf(current); current = getProto(current)) Object.getOwnPropertyNames(current).forEach((key => def[key] = () => value[key]));
            def["default"] = () => value;
            __webpack_require__.d(ns, def);
            return ns;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        var common_utils_namespaceObject = {};
        __webpack_require__.r(common_utils_namespaceObject);
        __webpack_require__.d(common_utils_namespaceObject, {
            hasBrowserEnv: () => hasBrowserEnv,
            hasStandardBrowserEnv: () => hasStandardBrowserEnv,
            hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
            origin: () => origin
        });
        var react = __webpack_require__(540);
        var react_namespaceObject = __webpack_require__.t(react, 2);
        var client = __webpack_require__(338);
        var react_dom = __webpack_require__(961);
        var react_dom_namespaceObject = __webpack_require__.t(react_dom, 2);
        /**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
        function _extends() {
            _extends = Object.assign ? Object.assign.bind() : function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return _extends.apply(this, arguments);
        }
        var Action;
        (function(Action) {
            Action["Pop"] = "POP";
            Action["Push"] = "PUSH";
            Action["Replace"] = "REPLACE";
        })(Action || (Action = {}));
        const PopStateEventType = "popstate";
        function router_createBrowserHistory(options) {
            if (options === void 0) options = {};
            function createBrowserLocation(window, globalHistory) {
                let {pathname, search, hash} = window.location;
                return createLocation("", {
                    pathname,
                    search,
                    hash
                }, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
            }
            function createBrowserHref(window, to) {
                return typeof to === "string" ? to : router_createPath(to);
            }
            return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
        }
        function invariant(value, message) {
            if (value === false || value === null || typeof value === "undefined") throw new Error(message);
        }
        function warning(cond, message) {
            if (!cond) {
                if (typeof console !== "undefined") console.warn(message);
                try {
                    throw new Error(message);
                } catch (e) {}
            }
        }
        function createKey() {
            return Math.random().toString(36).substr(2, 8);
        }
        function getHistoryState(location, index) {
            return {
                usr: location.state,
                key: location.key,
                idx: index
            };
        }
        function createLocation(current, to, state, key) {
            if (state === void 0) state = null;
            let location = _extends({
                pathname: typeof current === "string" ? current : current.pathname,
                search: "",
                hash: ""
            }, typeof to === "string" ? parsePath(to) : to, {
                state,
                key: to && to.key || key || createKey()
            });
            return location;
        }
        function router_createPath(_ref) {
            let {pathname = "/", search = "", hash = ""} = _ref;
            if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
            if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
            return pathname;
        }
        function parsePath(path) {
            let parsedPath = {};
            if (path) {
                let hashIndex = path.indexOf("#");
                if (hashIndex >= 0) {
                    parsedPath.hash = path.substr(hashIndex);
                    path = path.substr(0, hashIndex);
                }
                let searchIndex = path.indexOf("?");
                if (searchIndex >= 0) {
                    parsedPath.search = path.substr(searchIndex);
                    path = path.substr(0, searchIndex);
                }
                if (path) parsedPath.pathname = path;
            }
            return parsedPath;
        }
        function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
            if (options === void 0) options = {};
            let {window = document.defaultView, v5Compat = false} = options;
            let globalHistory = window.history;
            let action = Action.Pop;
            let listener = null;
            let index = getIndex();
            if (index == null) {
                index = 0;
                globalHistory.replaceState(_extends({}, globalHistory.state, {
                    idx: index
                }), "");
            }
            function getIndex() {
                let state = globalHistory.state || {
                    idx: null
                };
                return state.idx;
            }
            function handlePop() {
                action = Action.Pop;
                let nextIndex = getIndex();
                let delta = nextIndex == null ? null : nextIndex - index;
                index = nextIndex;
                if (listener) listener({
                    action,
                    location: history.location,
                    delta
                });
            }
            function push(to, state) {
                action = Action.Push;
                let location = createLocation(history.location, to, state);
                if (validateLocation) validateLocation(location, to);
                index = getIndex() + 1;
                let historyState = getHistoryState(location, index);
                let url = history.createHref(location);
                try {
                    globalHistory.pushState(historyState, "", url);
                } catch (error) {
                    if (error instanceof DOMException && error.name === "DataCloneError") throw error;
                    window.location.assign(url);
                }
                if (v5Compat && listener) listener({
                    action,
                    location: history.location,
                    delta: 1
                });
            }
            function replace(to, state) {
                action = Action.Replace;
                let location = createLocation(history.location, to, state);
                if (validateLocation) validateLocation(location, to);
                index = getIndex();
                let historyState = getHistoryState(location, index);
                let url = history.createHref(location);
                globalHistory.replaceState(historyState, "", url);
                if (v5Compat && listener) listener({
                    action,
                    location: history.location,
                    delta: 0
                });
            }
            function createURL(to) {
                let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
                let href = typeof to === "string" ? to : router_createPath(to);
                href = href.replace(/ $/, "%20");
                invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
                return new URL(href, base);
            }
            let history = {
                get action() {
                    return action;
                },
                get location() {
                    return getLocation(window, globalHistory);
                },
                listen(fn) {
                    if (listener) throw new Error("A history only accepts one active listener");
                    window.addEventListener(PopStateEventType, handlePop);
                    listener = fn;
                    return () => {
                        window.removeEventListener(PopStateEventType, handlePop);
                        listener = null;
                    };
                },
                createHref(to) {
                    return createHref(window, to);
                },
                createURL,
                encodeLocation(to) {
                    let url = createURL(to);
                    return {
                        pathname: url.pathname,
                        search: url.search,
                        hash: url.hash
                    };
                },
                push,
                replace,
                go(n) {
                    return globalHistory.go(n);
                }
            };
            return history;
        }
        var ResultType;
        (function(ResultType) {
            ResultType["data"] = "data";
            ResultType["deferred"] = "deferred";
            ResultType["redirect"] = "redirect";
            ResultType["error"] = "error";
        })(ResultType || (ResultType = {}));
        new Set([ "lazy", "caseSensitive", "path", "id", "index", "children" ]);
        function matchRoutes(routes, locationArg, basename) {
            if (basename === void 0) basename = "/";
            let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
            let pathname = router_stripBasename(location.pathname || "/", basename);
            if (pathname == null) return null;
            let branches = flattenRoutes(routes);
            rankRouteBranches(branches);
            let matches = null;
            for (let i = 0; matches == null && i < branches.length; ++i) {
                let decoded = decodePath(pathname);
                matches = matchRouteBranch(branches[i], decoded);
            }
            return matches;
        }
        function flattenRoutes(routes, branches, parentsMeta, parentPath) {
            if (branches === void 0) branches = [];
            if (parentsMeta === void 0) parentsMeta = [];
            if (parentPath === void 0) parentPath = "";
            let flattenRoute = (route, index, relativePath) => {
                let meta = {
                    relativePath: relativePath === void 0 ? route.path || "" : relativePath,
                    caseSensitive: route.caseSensitive === true,
                    childrenIndex: index,
                    route
                };
                if (meta.relativePath.startsWith("/")) {
                    invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + '"' + parentPath + '" is not valid. An absolute child route path ' + "must start with the combined path of all its parent routes.");
                    meta.relativePath = meta.relativePath.slice(parentPath.length);
                }
                let path = router_joinPaths([ parentPath, meta.relativePath ]);
                let routesMeta = parentsMeta.concat(meta);
                if (route.children && route.children.length > 0) {
                    invariant(route.index !== true, "Index routes must not have child routes. Please remove " + 'all child routes from route path "' + path + '".');
                    flattenRoutes(route.children, branches, routesMeta, path);
                }
                if (route.path == null && !route.index) return;
                branches.push({
                    path,
                    score: computeScore(path, route.index),
                    routesMeta
                });
            };
            routes.forEach(((route, index) => {
                var _route$path;
                if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) flattenRoute(route, index); else for (let exploded of explodeOptionalSegments(route.path)) flattenRoute(route, index, exploded);
            }));
            return branches;
        }
        function explodeOptionalSegments(path) {
            let segments = path.split("/");
            if (segments.length === 0) return [];
            let [first, ...rest] = segments;
            let isOptional = first.endsWith("?");
            let required = first.replace(/\?$/, "");
            if (rest.length === 0) return isOptional ? [ required, "" ] : [ required ];
            let restExploded = explodeOptionalSegments(rest.join("/"));
            let result = [];
            result.push(...restExploded.map((subpath => subpath === "" ? required : [ required, subpath ].join("/"))));
            if (isOptional) result.push(...restExploded);
            return result.map((exploded => path.startsWith("/") && exploded === "" ? "/" : exploded));
        }
        function rankRouteBranches(branches) {
            branches.sort(((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta => meta.childrenIndex)), b.routesMeta.map((meta => meta.childrenIndex)))));
        }
        const paramRe = /^:[\w-]+$/;
        const dynamicSegmentValue = 3;
        const indexRouteValue = 2;
        const emptySegmentValue = 1;
        const staticSegmentValue = 10;
        const splatPenalty = -2;
        const isSplat = s => s === "*";
        function computeScore(path, index) {
            let segments = path.split("/");
            let initialScore = segments.length;
            if (segments.some(isSplat)) initialScore += splatPenalty;
            if (index) initialScore += indexRouteValue;
            return segments.filter((s => !isSplat(s))).reduce(((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue)), initialScore);
        }
        function compareIndexes(a, b) {
            let siblings = a.length === b.length && a.slice(0, -1).every(((n, i) => n === b[i]));
            return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
        }
        function matchRouteBranch(branch, pathname) {
            let {routesMeta} = branch;
            let matchedParams = {};
            let matchedPathname = "/";
            let matches = [];
            for (let i = 0; i < routesMeta.length; ++i) {
                let meta = routesMeta[i];
                let end = i === routesMeta.length - 1;
                let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
                let match = router_matchPath({
                    path: meta.relativePath,
                    caseSensitive: meta.caseSensitive,
                    end
                }, remainingPathname);
                if (!match) return null;
                Object.assign(matchedParams, match.params);
                let route = meta.route;
                matches.push({
                    params: matchedParams,
                    pathname: router_joinPaths([ matchedPathname, match.pathname ]),
                    pathnameBase: normalizePathname(router_joinPaths([ matchedPathname, match.pathnameBase ])),
                    route
                });
                if (match.pathnameBase !== "/") matchedPathname = router_joinPaths([ matchedPathname, match.pathnameBase ]);
            }
            return matches;
        }
        function router_matchPath(pattern, pathname) {
            if (typeof pattern === "string") pattern = {
                path: pattern,
                caseSensitive: false,
                end: true
            };
            let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
            let match = pathname.match(matcher);
            if (!match) return null;
            let matchedPathname = match[0];
            let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
            let captureGroups = match.slice(1);
            let params = compiledParams.reduce(((memo, _ref, index) => {
                let {paramName, isOptional} = _ref;
                if (paramName === "*") {
                    let splatValue = captureGroups[index] || "";
                    pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
                }
                const value = captureGroups[index];
                if (isOptional && !value) memo[paramName] = void 0; else memo[paramName] = (value || "").replace(/%2F/g, "/");
                return memo;
            }), {});
            return {
                params,
                pathname: matchedPathname,
                pathnameBase,
                pattern
            };
        }
        function compilePath(path, caseSensitive, end) {
            if (caseSensitive === void 0) caseSensitive = false;
            if (end === void 0) end = true;
            warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + '"' + path.replace(/\*$/, "/*") + '" because the `*` character must ' + "always follow a `/` in the pattern. To get rid of this warning, " + 'please change the route path to "' + path.replace(/\*$/, "/*") + '".');
            let params = [];
            let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((_, paramName, isOptional) => {
                params.push({
                    paramName,
                    isOptional: isOptional != null
                });
                return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
            }));
            if (path.endsWith("*")) {
                params.push({
                    paramName: "*"
                });
                regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
            } else if (end) regexpSource += "\\/*$"; else if (path !== "" && path !== "/") regexpSource += "(?:(?=\\/|$))";
            let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
            return [ matcher, params ];
        }
        function decodePath(value) {
            try {
                return value.split("/").map((v => decodeURIComponent(v).replace(/\//g, "%2F"))).join("/");
            } catch (error) {
                warning(false, 'The URL path "' + value + '" could not be decoded because it is is a ' + "malformed URL segment. This is probably due to a bad percent " + "encoding (" + error + ").");
                return value;
            }
        }
        function router_stripBasename(pathname, basename) {
            if (basename === "/") return pathname;
            if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
            let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
            let nextChar = pathname.charAt(startIndex);
            if (nextChar && nextChar !== "/") return null;
            return pathname.slice(startIndex) || "/";
        }
        function resolvePath(to, fromPathname) {
            if (fromPathname === void 0) fromPathname = "/";
            let {pathname: toPathname, search = "", hash = ""} = typeof to === "string" ? parsePath(to) : to;
            let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
            return {
                pathname,
                search: normalizeSearch(search),
                hash: normalizeHash(hash)
            };
        }
        function resolvePathname(relativePath, fromPathname) {
            let segments = fromPathname.replace(/\/+$/, "").split("/");
            let relativeSegments = relativePath.split("/");
            relativeSegments.forEach((segment => {
                if (segment === "..") {
                    if (segments.length > 1) segments.pop();
                } else if (segment !== ".") segments.push(segment);
            }));
            return segments.length > 1 ? segments.join("/") : "/";
        }
        function getInvalidPathError(char, field, dest, path) {
            return "Cannot include a '" + char + "' character in a manually specified " + "`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the " + "`to." + dest + "` field. Alternatively you may provide the full path as " + 'a string in <Link to="..."> and the router will parse it for you.';
        }
        function getPathContributingMatches(matches) {
            return matches.filter(((match, index) => index === 0 || match.route.path && match.route.path.length > 0));
        }
        function getResolveToMatches(matches, v7_relativeSplatPath) {
            let pathMatches = getPathContributingMatches(matches);
            if (v7_relativeSplatPath) return pathMatches.map(((match, idx) => idx === matches.length - 1 ? match.pathname : match.pathnameBase));
            return pathMatches.map((match => match.pathnameBase));
        }
        function router_resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
            if (isPathRelative === void 0) isPathRelative = false;
            let to;
            if (typeof toArg === "string") to = parsePath(toArg); else {
                to = _extends({}, toArg);
                invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
                invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
                invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
            }
            let isEmptyPath = toArg === "" || to.pathname === "";
            let toPathname = isEmptyPath ? "/" : to.pathname;
            let from;
            if (toPathname == null) from = locationPathname; else {
                let routePathnameIndex = routePathnames.length - 1;
                if (!isPathRelative && toPathname.startsWith("..")) {
                    let toSegments = toPathname.split("/");
                    while (toSegments[0] === "..") {
                        toSegments.shift();
                        routePathnameIndex -= 1;
                    }
                    to.pathname = toSegments.join("/");
                }
                from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
            }
            let path = resolvePath(to, from);
            let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
            let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
            if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
            return path;
        }
        const router_joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
        const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
        const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
        const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
        Error;
        function isRouteErrorResponse(error) {
            return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
        }
        const validMutationMethodsArr = [ "post", "put", "patch", "delete" ];
        new Set(validMutationMethodsArr);
        const validRequestMethodsArr = [ "get", ...validMutationMethodsArr ];
        new Set(validRequestMethodsArr);
        new Set([ 301, 302, 303, 307, 308 ]);
        new Set([ 307, 308 ]);
        Symbol("deferred");
        /**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
        function dist_extends() {
            dist_extends = Object.assign ? Object.assign.bind() : function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return dist_extends.apply(this, arguments);
        }
        const DataRouterContext = react.createContext(null);
        if (false) ;
        const DataRouterStateContext = react.createContext(null);
        if (false) ;
        react.createContext(null);
        if (false) ;
        const NavigationContext = react.createContext(null);
        if (false) ;
        const LocationContext = react.createContext(null);
        if (false) ;
        const RouteContext = react.createContext({
            outlet: null,
            matches: [],
            isDataRoute: false
        });
        if (false) ;
        const RouteErrorContext = react.createContext(null);
        if (false) ;
        function useHref(to, _temp) {
            let {relative} = _temp === void 0 ? {} : _temp;
            !useInRouterContext() ? false ? 0 : invariant(false) : void 0;
            let {basename, navigator} = react.useContext(NavigationContext);
            let {hash, pathname, search} = dist_useResolvedPath(to, {
                relative
            });
            let joinedPathname = pathname;
            if (basename !== "/") joinedPathname = pathname === "/" ? basename : router_joinPaths([ basename, pathname ]);
            return navigator.createHref({
                pathname: joinedPathname,
                search,
                hash
            });
        }
        function useInRouterContext() {
            return react.useContext(LocationContext) != null;
        }
        function dist_useLocation() {
            !useInRouterContext() ? false ? 0 : invariant(false) : void 0;
            return react.useContext(LocationContext).location;
        }
        function useIsomorphicLayoutEffect(cb) {
            let isStatic = react.useContext(NavigationContext).static;
            if (!isStatic) react.useLayoutEffect(cb);
        }
        function dist_useNavigate() {
            let {isDataRoute} = react.useContext(RouteContext);
            return isDataRoute ? useNavigateStable() : useNavigateUnstable();
        }
        function useNavigateUnstable() {
            !useInRouterContext() ? false ? 0 : invariant(false) : void 0;
            let dataRouterContext = react.useContext(DataRouterContext);
            let {basename, future, navigator} = react.useContext(NavigationContext);
            let {matches} = react.useContext(RouteContext);
            let {pathname: locationPathname} = dist_useLocation();
            let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
            let activeRef = react.useRef(false);
            useIsomorphicLayoutEffect((() => {
                activeRef.current = true;
            }));
            let navigate = react.useCallback((function(to, options) {
                if (options === void 0) options = {};
                false ? 0 : void 0;
                if (!activeRef.current) return;
                if (typeof to === "number") {
                    navigator.go(to);
                    return;
                }
                let path = router_resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
                if (dataRouterContext == null && basename !== "/") path.pathname = path.pathname === "/" ? basename : router_joinPaths([ basename, path.pathname ]);
                (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
            }), [ basename, navigator, routePathnamesJson, locationPathname, dataRouterContext ]);
            return navigate;
        }
        null && React.createContext(null);
        function dist_useResolvedPath(to, _temp2) {
            let {relative} = _temp2 === void 0 ? {} : _temp2;
            let {future} = react.useContext(NavigationContext);
            let {matches} = react.useContext(RouteContext);
            let {pathname: locationPathname} = dist_useLocation();
            let routePathnamesJson = JSON.stringify(getResolveToMatches(matches, future.v7_relativeSplatPath));
            return react.useMemo((() => router_resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path")), [ to, routePathnamesJson, locationPathname, relative ]);
        }
        function useRoutes(routes, locationArg) {
            return useRoutesImpl(routes, locationArg);
        }
        function useRoutesImpl(routes, locationArg, dataRouterState, future) {
            !useInRouterContext() ? false ? 0 : invariant(false) : void 0;
            let {navigator} = react.useContext(NavigationContext);
            let {matches: parentMatches} = react.useContext(RouteContext);
            let routeMatch = parentMatches[parentMatches.length - 1];
            let parentParams = routeMatch ? routeMatch.params : {};
            routeMatch && routeMatch.pathname;
            let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
            routeMatch && routeMatch.route;
            if (false) ;
            let locationFromContext = dist_useLocation();
            let location;
            if (locationArg) {
                var _parsedLocationArg$pa;
                let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
                !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? false ? 0 : invariant(false) : void 0;
                location = parsedLocationArg;
            } else location = locationFromContext;
            let pathname = location.pathname || "/";
            let remainingPathname = pathname;
            if (parentPathnameBase !== "/") {
                let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
                let segments = pathname.replace(/^\//, "").split("/");
                remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
            }
            let matches = matchRoutes(routes, {
                pathname: remainingPathname
            });
            if (false) ;
            let renderedMatches = _renderMatches(matches && matches.map((match => Object.assign({}, match, {
                params: Object.assign({}, parentParams, match.params),
                pathname: router_joinPaths([ parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname ]),
                pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : router_joinPaths([ parentPathnameBase, navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase ])
            }))), parentMatches, dataRouterState, future);
            if (locationArg && renderedMatches) return react.createElement(LocationContext.Provider, {
                value: {
                    location: dist_extends({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, location),
                    navigationType: Action.Pop
                }
            }, renderedMatches);
            return renderedMatches;
        }
        function DefaultErrorComponent() {
            let error = useRouteError();
            let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
            let stack = error instanceof Error ? error.stack : null;
            let lightgrey = "rgba(200,200,200, 0.5)";
            let preStyles = {
                padding: "0.5rem",
                backgroundColor: lightgrey
            };
            let devInfo = null;
            if (false) ;
            return react.createElement(react.Fragment, null, react.createElement("h2", null, "Unexpected Application Error!"), react.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, message), stack ? react.createElement("pre", {
                style: preStyles
            }, stack) : null, devInfo);
        }
        const defaultErrorElement = react.createElement(DefaultErrorComponent, null);
        class RenderErrorBoundary extends react.Component {
            constructor(props) {
                super(props);
                this.state = {
                    location: props.location,
                    revalidation: props.revalidation,
                    error: props.error
                };
            }
            static getDerivedStateFromError(error) {
                return {
                    error
                };
            }
            static getDerivedStateFromProps(props, state) {
                if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") return {
                    error: props.error,
                    location: props.location,
                    revalidation: props.revalidation
                };
                return {
                    error: props.error !== void 0 ? props.error : state.error,
                    location: state.location,
                    revalidation: props.revalidation || state.revalidation
                };
            }
            componentDidCatch(error, errorInfo) {
                console.error("React Router caught the following error during render", error, errorInfo);
            }
            render() {
                return this.state.error !== void 0 ? react.createElement(RouteContext.Provider, {
                    value: this.props.routeContext
                }, react.createElement(RouteErrorContext.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children;
            }
        }
        function RenderedRoute(_ref) {
            let {routeContext, match, children} = _ref;
            let dataRouterContext = react.useContext(DataRouterContext);
            if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
            return react.createElement(RouteContext.Provider, {
                value: routeContext
            }, children);
        }
        function _renderMatches(matches, parentMatches, dataRouterState, future) {
            var _dataRouterState2;
            if (parentMatches === void 0) parentMatches = [];
            if (dataRouterState === void 0) dataRouterState = null;
            if (future === void 0) future = null;
            if (matches == null) {
                var _dataRouterState;
                if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) matches = dataRouterState.matches; else return null;
            }
            let renderedMatches = matches;
            let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
            if (errors != null) {
                let errorIndex = renderedMatches.findIndex((m => m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== void 0));
                !(errorIndex >= 0) ? false ? 0 : invariant(false) : void 0;
                renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
            }
            let renderFallback = false;
            let fallbackIndex = -1;
            if (dataRouterState && future && future.v7_partialHydration) for (let i = 0; i < renderedMatches.length; i++) {
                let match = renderedMatches[i];
                if (match.route.HydrateFallback || match.route.hydrateFallbackElement) fallbackIndex = i;
                if (match.route.id) {
                    let {loaderData, errors} = dataRouterState;
                    let needsToRunLoader = match.route.loader && loaderData[match.route.id] === void 0 && (!errors || errors[match.route.id] === void 0);
                    if (match.route.lazy || needsToRunLoader) {
                        renderFallback = true;
                        if (fallbackIndex >= 0) renderedMatches = renderedMatches.slice(0, fallbackIndex + 1); else renderedMatches = [ renderedMatches[0] ];
                        break;
                    }
                }
            }
            return renderedMatches.reduceRight(((outlet, match, index) => {
                let error;
                let shouldRenderHydrateFallback = false;
                let errorElement = null;
                let hydrateFallbackElement = null;
                if (dataRouterState) {
                    error = errors && match.route.id ? errors[match.route.id] : void 0;
                    errorElement = match.route.errorElement || defaultErrorElement;
                    if (renderFallback) if (fallbackIndex < 0 && index === 0) {
                        warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = null;
                    } else if (fallbackIndex === index) {
                        shouldRenderHydrateFallback = true;
                        hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                    }
                }
                let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
                let getChildren = () => {
                    let children;
                    if (error) children = errorElement; else if (shouldRenderHydrateFallback) children = hydrateFallbackElement; else if (match.route.Component) children = react.createElement(match.route.Component, null); else if (match.route.element) children = match.route.element; else children = outlet;
                    return react.createElement(RenderedRoute, {
                        match,
                        routeContext: {
                            outlet,
                            matches,
                            isDataRoute: dataRouterState != null
                        },
                        children
                    });
                };
                return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? react.createElement(RenderErrorBoundary, {
                    location: dataRouterState.location,
                    revalidation: dataRouterState.revalidation,
                    component: errorElement,
                    error,
                    children: getChildren(),
                    routeContext: {
                        outlet: null,
                        matches,
                        isDataRoute: true
                    }
                }) : getChildren();
            }), null);
        }
        var DataRouterHook = function(DataRouterHook) {
            DataRouterHook["UseBlocker"] = "useBlocker";
            DataRouterHook["UseRevalidator"] = "useRevalidator";
            DataRouterHook["UseNavigateStable"] = "useNavigate";
            return DataRouterHook;
        }(DataRouterHook || {});
        var DataRouterStateHook = function(DataRouterStateHook) {
            DataRouterStateHook["UseBlocker"] = "useBlocker";
            DataRouterStateHook["UseLoaderData"] = "useLoaderData";
            DataRouterStateHook["UseActionData"] = "useActionData";
            DataRouterStateHook["UseRouteError"] = "useRouteError";
            DataRouterStateHook["UseNavigation"] = "useNavigation";
            DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
            DataRouterStateHook["UseMatches"] = "useMatches";
            DataRouterStateHook["UseRevalidator"] = "useRevalidator";
            DataRouterStateHook["UseNavigateStable"] = "useNavigate";
            DataRouterStateHook["UseRouteId"] = "useRouteId";
            return DataRouterStateHook;
        }(DataRouterStateHook || {});
        function useDataRouterContext(hookName) {
            let ctx = react.useContext(DataRouterContext);
            !ctx ? false ? 0 : invariant(false) : void 0;
            return ctx;
        }
        function useDataRouterState(hookName) {
            let state = react.useContext(DataRouterStateContext);
            !state ? false ? 0 : invariant(false) : void 0;
            return state;
        }
        function useRouteContext(hookName) {
            let route = react.useContext(RouteContext);
            !route ? false ? 0 : invariant(false) : void 0;
            return route;
        }
        function useCurrentRouteId(hookName) {
            let route = useRouteContext(hookName);
            let thisRoute = route.matches[route.matches.length - 1];
            !thisRoute.route.id ? false ? 0 : invariant(false) : void 0;
            return thisRoute.route.id;
        }
        function useRouteError() {
            var _state$errors;
            let error = react.useContext(RouteErrorContext);
            let state = useDataRouterState(DataRouterStateHook.UseRouteError);
            let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
            if (error !== void 0) return error;
            return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
        }
        function useNavigateStable() {
            let {router} = useDataRouterContext(DataRouterHook.UseNavigateStable);
            let id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
            let activeRef = react.useRef(false);
            useIsomorphicLayoutEffect((() => {
                activeRef.current = true;
            }));
            let navigate = react.useCallback((function(to, options) {
                if (options === void 0) options = {};
                false ? 0 : void 0;
                if (!activeRef.current) return;
                if (typeof to === "number") router.navigate(to); else router.navigate(to, dist_extends({
                    fromRouteId: id
                }, options));
            }), [ router, id ]);
            return navigate;
        }
        const alreadyWarned = {};
        function warningOnce(key, cond, message) {
            if (!cond && !alreadyWarned[key]) {
                alreadyWarned[key] = true;
                false ? 0 : void 0;
            }
        }
        const START_TRANSITION = "startTransition";
        react_namespaceObject[START_TRANSITION];
        function Route(_props) {
            false ? 0 : invariant(false);
        }
        function dist_Router(_ref5) {
            let {basename: basenameProp = "/", children = null, location: locationProp, navigationType = Action.Pop, navigator, static: staticProp = false, future} = _ref5;
            !!useInRouterContext() ? false ? 0 : invariant(false) : void 0;
            let basename = basenameProp.replace(/^\/*/, "/");
            let navigationContext = react.useMemo((() => ({
                basename,
                navigator,
                static: staticProp,
                future: dist_extends({
                    v7_relativeSplatPath: false
                }, future)
            })), [ basename, future, navigator, staticProp ]);
            if (typeof locationProp === "string") locationProp = parsePath(locationProp);
            let {pathname = "/", search = "", hash = "", state = null, key = "default"} = locationProp;
            let locationContext = react.useMemo((() => {
                let trailingPathname = router_stripBasename(pathname, basename);
                if (trailingPathname == null) return null;
                return {
                    location: {
                        pathname: trailingPathname,
                        search,
                        hash,
                        state,
                        key
                    },
                    navigationType
                };
            }), [ basename, pathname, search, hash, state, key, navigationType ]);
            false ? 0 : void 0;
            if (locationContext == null) return null;
            return react.createElement(NavigationContext.Provider, {
                value: navigationContext
            }, react.createElement(LocationContext.Provider, {
                children,
                value: locationContext
            }));
        }
        function Routes(_ref6) {
            let {children, location} = _ref6;
            return useRoutes(createRoutesFromChildren(children), location);
        }
        var AwaitRenderStatus = function(AwaitRenderStatus) {
            AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
            AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
            AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
            return AwaitRenderStatus;
        }(AwaitRenderStatus || {});
        new Promise((() => {}));
        react.Component;
        function createRoutesFromChildren(children, parentPath) {
            if (parentPath === void 0) parentPath = [];
            let routes = [];
            react.Children.forEach(children, ((element, index) => {
                if (!react.isValidElement(element)) return;
                let treePath = [ ...parentPath, index ];
                if (element.type === react.Fragment) {
                    routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
                    return;
                }
                !(element.type === Route) ? false ? 0 : invariant(false) : void 0;
                !(!element.props.index || !element.props.children) ? false ? 0 : invariant(false) : void 0;
                let route = {
                    id: element.props.id || treePath.join("-"),
                    caseSensitive: element.props.caseSensitive,
                    element: element.props.element,
                    Component: element.props.Component,
                    index: element.props.index,
                    path: element.props.path,
                    loader: element.props.loader,
                    action: element.props.action,
                    errorElement: element.props.errorElement,
                    ErrorBoundary: element.props.ErrorBoundary,
                    hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
                    shouldRevalidate: element.props.shouldRevalidate,
                    handle: element.props.handle,
                    lazy: element.props.lazy
                };
                if (element.props.children) route.children = createRoutesFromChildren(element.props.children, treePath);
                routes.push(route);
            }));
            return routes;
        }
        /**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
        function react_router_dom_dist_extends() {
            react_router_dom_dist_extends = Object.assign ? Object.assign.bind() : function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
                }
                return target;
            };
            return react_router_dom_dist_extends.apply(this, arguments);
        }
        function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;
            for (i = 0; i < sourceKeys.length; i++) {
                key = sourceKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                target[key] = source[key];
            }
            return target;
        }
        const defaultMethod = "get";
        const defaultEncType = "application/x-www-form-urlencoded";
        function isHtmlElement(object) {
            return object != null && typeof object.tagName === "string";
        }
        function isButtonElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
        }
        function isFormElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
        }
        function isInputElement(object) {
            return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
        }
        function isModifiedEvent(event) {
            return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
        }
        function shouldProcessLinkClick(event, target) {
            return event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event);
        }
        let _formDataSupportsSubmitter = null;
        function isFormDataSubmitterSupported() {
            if (_formDataSupportsSubmitter === null) try {
                new FormData(document.createElement("form"), 0);
                _formDataSupportsSubmitter = false;
            } catch (e) {
                _formDataSupportsSubmitter = true;
            }
            return _formDataSupportsSubmitter;
        }
        const supportedFormEncTypes = new Set([ "application/x-www-form-urlencoded", "multipart/form-data", "text/plain" ]);
        function getFormEncType(encType) {
            if (encType != null && !supportedFormEncTypes.has(encType)) {
                false ? 0 : void 0;
                return null;
            }
            return encType;
        }
        function getFormSubmissionInfo(target, basename) {
            let method;
            let action;
            let encType;
            let formData;
            let body;
            if (isFormElement(target)) {
                let attr = target.getAttribute("action");
                action = attr ? stripBasename(attr, basename) : null;
                method = target.getAttribute("method") || defaultMethod;
                encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
                formData = new FormData(target);
            } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
                let form = target.form;
                if (form == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                let attr = target.getAttribute("formaction") || form.getAttribute("action");
                action = attr ? stripBasename(attr, basename) : null;
                method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
                encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
                formData = new FormData(form, target);
                if (!isFormDataSubmitterSupported()) {
                    let {name, type, value} = target;
                    if (type === "image") {
                        let prefix = name ? name + "." : "";
                        formData.append(prefix + "x", "0");
                        formData.append(prefix + "y", "0");
                    } else if (name) formData.append(name, value);
                }
            } else if (isHtmlElement(target)) throw new Error("Cannot submit element that is not <form>, <button>, or " + '<input type="submit|image">'); else {
                method = defaultMethod;
                action = null;
                encType = defaultEncType;
                body = target;
            }
            if (formData && encType === "text/plain") {
                body = formData;
                formData = void 0;
            }
            return {
                action,
                method: method.toLowerCase(),
                encType,
                formData,
                body
            };
        }
        const _excluded = [ "onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition" ], _excluded2 = null && [ "aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children" ], _excluded3 = null && [ "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition" ];
        const REACT_ROUTER_VERSION = "6";
        try {
            window.__reactRouterVersion = REACT_ROUTER_VERSION;
        } catch (e) {}
        const ViewTransitionContext = react.createContext({
            isTransitioning: false
        });
        if (false) ;
        react.createContext(new Map);
        if (false) ;
        const dist_START_TRANSITION = "startTransition";
        const dist_startTransitionImpl = react_namespaceObject[dist_START_TRANSITION];
        const FLUSH_SYNC = "flushSync";
        react_dom_namespaceObject[FLUSH_SYNC];
        const USE_ID = "useId";
        react_namespaceObject[USE_ID];
        function BrowserRouter(_ref4) {
            let {basename, children, future, window} = _ref4;
            let historyRef = react.useRef();
            if (historyRef.current == null) historyRef.current = router_createBrowserHistory({
                window,
                v5Compat: true
            });
            let history = historyRef.current;
            let [state, setStateImpl] = react.useState({
                action: history.action,
                location: history.location
            });
            let {v7_startTransition} = future || {};
            let setState = react.useCallback((newState => {
                v7_startTransition && dist_startTransitionImpl ? dist_startTransitionImpl((() => setStateImpl(newState))) : setStateImpl(newState);
            }), [ setStateImpl, v7_startTransition ]);
            react.useLayoutEffect((() => history.listen(setState)), [ history, setState ]);
            return react.createElement(dist_Router, {
                basename,
                children,
                location: state.location,
                navigationType: state.action,
                navigator: history,
                future
            });
        }
        if (false) ;
        const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
        const dist_ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
        const Link = react.forwardRef((function LinkWithRef(_ref7, ref) {
            let {onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset, unstable_viewTransition} = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
            let {basename} = react.useContext(NavigationContext);
            let absoluteHref;
            let isExternal = false;
            if (typeof to === "string" && dist_ABSOLUTE_URL_REGEX.test(to)) {
                absoluteHref = to;
                if (isBrowser) try {
                    let currentUrl = new URL(window.location.href);
                    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                    let path = router_stripBasename(targetUrl.pathname, basename);
                    if (targetUrl.origin === currentUrl.origin && path != null) to = path + targetUrl.search + targetUrl.hash; else isExternal = true;
                } catch (e) {
                    false ? 0 : void 0;
                }
            }
            let href = useHref(to, {
                relative
            });
            let internalOnClick = useLinkClickHandler(to, {
                replace,
                state,
                target,
                preventScrollReset,
                relative,
                unstable_viewTransition
            });
            function handleClick(event) {
                if (onClick) onClick(event);
                if (!event.defaultPrevented) internalOnClick(event);
            }
            return react.createElement("a", react_router_dom_dist_extends({}, rest, {
                href: absoluteHref || href,
                onClick: isExternal || reloadDocument ? onClick : handleClick,
                ref,
                target
            }));
        }));
        if (false) ;
        null && React.forwardRef((function NavLinkWithRef(_ref8, ref) {
            let {"aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, unstable_viewTransition, children} = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
            let path = useResolvedPath(to, {
                relative: rest.relative
            });
            let location = useLocation();
            let routerState = React.useContext(UNSAFE_DataRouterStateContext);
            let {navigator, basename} = React.useContext(UNSAFE_NavigationContext);
            let isTransitioning = routerState != null && useViewTransitionState(path) && unstable_viewTransition === true;
            let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
            let locationPathname = location.pathname;
            let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
            if (!caseSensitive) {
                locationPathname = locationPathname.toLowerCase();
                nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
                toPathname = toPathname.toLowerCase();
            }
            if (nextLocationPathname && basename) nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
            const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
            let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
            let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
            let renderProps = {
                isActive,
                isPending,
                isTransitioning
            };
            let ariaCurrent = isActive ? ariaCurrentProp : void 0;
            let className;
            if (typeof classNameProp === "function") className = classNameProp(renderProps); else className = [ classNameProp, isActive ? "active" : null, isPending ? "pending" : null, isTransitioning ? "transitioning" : null ].filter(Boolean).join(" ");
            let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
            return React.createElement(Link, react_router_dom_dist_extends({}, rest, {
                "aria-current": ariaCurrent,
                className,
                ref,
                style,
                to,
                unstable_viewTransition
            }), typeof children === "function" ? children(renderProps) : children);
        }));
        if (false) ;
        null && React.forwardRef(((_ref9, forwardedRef) => {
            let {fetcherKey, navigate, reloadDocument, replace, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, unstable_viewTransition} = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
            let submit = useSubmit();
            let formAction = useFormAction(action, {
                relative
            });
            let formMethod = method.toLowerCase() === "get" ? "get" : "post";
            let submitHandler = event => {
                onSubmit && onSubmit(event);
                if (event.defaultPrevented) return;
                event.preventDefault();
                let submitter = event.nativeEvent.submitter;
                let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
                submit(submitter || event.currentTarget, {
                    fetcherKey,
                    method: submitMethod,
                    navigate,
                    replace,
                    state,
                    relative,
                    preventScrollReset,
                    unstable_viewTransition
                });
            };
            return React.createElement("form", react_router_dom_dist_extends({
                ref: forwardedRef,
                method: formMethod,
                action: formAction,
                onSubmit: reloadDocument ? onSubmit : submitHandler
            }, props));
        }));
        if (false) ;
        if (false) ;
        var dist_DataRouterHook;
        (function(DataRouterHook) {
            DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
            DataRouterHook["UseSubmit"] = "useSubmit";
            DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
            DataRouterHook["UseFetcher"] = "useFetcher";
            DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
        })(dist_DataRouterHook || (dist_DataRouterHook = {}));
        var dist_DataRouterStateHook;
        (function(DataRouterStateHook) {
            DataRouterStateHook["UseFetcher"] = "useFetcher";
            DataRouterStateHook["UseFetchers"] = "useFetchers";
            DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
        })(dist_DataRouterStateHook || (dist_DataRouterStateHook = {}));
        function dist_useDataRouterContext(hookName) {
            let ctx = React.useContext(UNSAFE_DataRouterContext);
            !ctx ? false ? 0 : UNSAFE_invariant(false) : void 0;
            return ctx;
        }
        function useLinkClickHandler(to, _temp) {
            let {target, replace: replaceProp, state, preventScrollReset, relative, unstable_viewTransition} = _temp === void 0 ? {} : _temp;
            let navigate = dist_useNavigate();
            let location = dist_useLocation();
            let path = dist_useResolvedPath(to, {
                relative
            });
            return react.useCallback((event => {
                if (shouldProcessLinkClick(event, target)) {
                    event.preventDefault();
                    let replace = replaceProp !== void 0 ? replaceProp : router_createPath(location) === router_createPath(path);
                    navigate(to, {
                        replace,
                        state,
                        preventScrollReset,
                        relative,
                        unstable_viewTransition
                    });
                }
            }), [ location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative, unstable_viewTransition ]);
        }
        function validateClientSideSubmission() {
            if (typeof document === "undefined") throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
        }
        let fetcherId = 0;
        let getUniqueFetcherId = () => "__" + String(++fetcherId) + "__";
        function useSubmit() {
            let {router} = dist_useDataRouterContext(dist_DataRouterHook.UseSubmit);
            let {basename} = React.useContext(UNSAFE_NavigationContext);
            let currentRouteId = UNSAFE_useRouteId();
            return React.useCallback((function(target, options) {
                if (options === void 0) options = {};
                validateClientSideSubmission();
                let {action, method, encType, formData, body} = getFormSubmissionInfo(target, basename);
                if (options.navigate === false) {
                    let key = options.fetcherKey || getUniqueFetcherId();
                    router.fetch(key, currentRouteId, options.action || action, {
                        preventScrollReset: options.preventScrollReset,
                        formData,
                        body,
                        formMethod: options.method || method,
                        formEncType: options.encType || encType,
                        unstable_flushSync: options.unstable_flushSync
                    });
                } else router.navigate(options.action || action, {
                    preventScrollReset: options.preventScrollReset,
                    formData,
                    body,
                    formMethod: options.method || method,
                    formEncType: options.encType || encType,
                    replace: options.replace,
                    state: options.state,
                    fromRouteId: currentRouteId,
                    unstable_flushSync: options.unstable_flushSync,
                    unstable_viewTransition: options.unstable_viewTransition
                });
            }), [ router, basename, currentRouteId ]);
        }
        function useFormAction(action, _temp2) {
            let {relative} = _temp2 === void 0 ? {} : _temp2;
            let {basename} = React.useContext(UNSAFE_NavigationContext);
            let routeContext = React.useContext(UNSAFE_RouteContext);
            !routeContext ? false ? 0 : UNSAFE_invariant(false) : void 0;
            let [match] = routeContext.matches.slice(-1);
            let path = react_router_dom_dist_extends({}, useResolvedPath(action ? action : ".", {
                relative
            }));
            let location = useLocation();
            if (action == null) {
                path.search = location.search;
                let params = new URLSearchParams(path.search);
                if (params.has("index") && params.get("index") === "") {
                    params.delete("index");
                    path.search = params.toString() ? "?" + params.toString() : "";
                }
            }
            if ((!action || action === ".") && match.route.index) path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
            if (basename !== "/") path.pathname = path.pathname === "/" ? basename : joinPaths([ basename, path.pathname ]);
            return createPath(path);
        }
        function useViewTransitionState(to, opts) {
            if (opts === void 0) opts = {};
            let vtContext = React.useContext(ViewTransitionContext);
            !(vtContext != null) ? false ? 0 : UNSAFE_invariant(false) : void 0;
            let {basename} = dist_useDataRouterContext(dist_DataRouterHook.useViewTransitionState);
            let path = useResolvedPath(to, {
                relative: opts.relative
            });
            if (!vtContext.isTransitioning) return false;
            let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
            let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
            return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
        }
        const AppContext = (0, react.createContext)({});
        const context = AppContext;
        const useCart = () => {
            const {cartItems, setCartItems} = (0, react.useContext)(context);
            const totalPrice = cartItems.reduce(((sum, obj) => obj.cost + sum), 0);
            return {
                cartItems,
                setCartItems,
                totalPrice
            };
        };
        function Header(props) {
            const {totalPrice} = useCart();
            return react.createElement("header", {
                className: "header"
            }, react.createElement("div", {
                className: "header__container"
            }, react.createElement(Link, {
                to: "/"
            }, react.createElement("div", {
                className: "header__left"
            }, react.createElement("div", {
                className: "header__img"
            }, react.createElement("img", {
                src: "img/logo.svg",
                alt: "logo"
            })), react.createElement("div", {
                className: "header__title-block"
            }, react.createElement("h2", {
                className: "header__title"
            }, "REACT SNEAKERS"), react.createElement("div", {
                className: "header__text"
            }, "Магазин лучших кроссовок")))), react.createElement("div", {
                className: "header__actions actions-header"
            }, react.createElement("div", {
                onClick: props.onview,
                className: "actions-header__item actions-header__item_cart"
            }, react.createElement("div", {
                className: "actions-header__img"
            }, react.createElement("img", {
                src: "img/cart.svg",
                alt: "cart"
            })), react.createElement("span", {
                className: "actions-header__text"
            }, react.createElement("strong", null, totalPrice, " руб."))), react.createElement(Link, {
                to: "/favorites"
            }, react.createElement("div", {
                className: "actions-header__item"
            }, react.createElement("div", {
                className: "actions-header__img"
            }, react.createElement("img", {
                src: "img/favorite.svg",
                alt: "favorite"
            })), react.createElement("span", {
                className: "actions-header__text"
            }, "Закладки"))), react.createElement(Link, {
                to: "orders"
            }, react.createElement("div", {
                className: "actions-header__item"
            }, react.createElement("div", {
                className: "actions-header__img"
            }, react.createElement("img", {
                src: "img/user.svg",
                alt: "user"
            })), react.createElement("span", {
                className: "actions-header__text"
            }, "Профиль"))))));
        }
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __rest(s, e) {
            var t = {};
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
            if (s != null && typeof Object.getOwnPropertySymbols === "function") {
                var i = 0;
                for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
            return t;
        }
        var uid = function() {
            return Math.random().toString(36).substring(6);
        };
        var SVG = function(_a) {
            var _b = _a.animate, animate = _b === void 0 ? true : _b, _c = _a.backgroundColor, backgroundColor = _c === void 0 ? "#f5f6f7" : _c, _d = _a.backgroundOpacity, backgroundOpacity = _d === void 0 ? 1 : _d, _e = _a.baseUrl, baseUrl = _e === void 0 ? "" : _e, children = _a.children, _f = _a.foregroundColor, foregroundColor = _f === void 0 ? "#eee" : _f, _g = _a.foregroundOpacity, foregroundOpacity = _g === void 0 ? 1 : _g, _h = _a.gradientRatio, gradientRatio = _h === void 0 ? 2 : _h, uniqueKey = _a.uniqueKey, _j = _a.rtl, rtl = _j === void 0 ? false : _j, _k = _a.speed, speed = _k === void 0 ? 1.2 : _k, _l = _a.style, style = _l === void 0 ? {} : _l, _m = _a.title, title = _m === void 0 ? "Loading..." : _m, _o = _a.beforeMask, beforeMask = _o === void 0 ? null : _o, props = __rest(_a, [ "animate", "backgroundColor", "backgroundOpacity", "baseUrl", "children", "foregroundColor", "foregroundOpacity", "gradientRatio", "uniqueKey", "rtl", "speed", "style", "title", "beforeMask" ]);
            var fixedId = uniqueKey || uid();
            var idClip = "".concat(fixedId, "-diff");
            var idGradient = "".concat(fixedId, "-animated-diff");
            var idAria = "".concat(fixedId, "-aria");
            var rtlStyle = rtl ? {
                transform: "scaleX(-1)"
            } : null;
            var dur = "".concat(speed, "s");
            var from = "".concat(gradientRatio * -1, " 0");
            var to = "".concat(gradientRatio, " 0");
            return (0, react.createElement)("svg", __assign({
                "aria-labelledby": idAria,
                role: "img",
                style: __assign(__assign({}, style), rtlStyle)
            }, props), title ? (0, react.createElement)("title", {
                id: idAria
            }, title) : null, beforeMask && (0, react.isValidElement)(beforeMask) ? beforeMask : null, (0, 
            react.createElement)("rect", {
                role: "presentation",
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                clipPath: "url(".concat(baseUrl, "#").concat(idClip, ")"),
                style: {
                    fill: "url(".concat(baseUrl, "#").concat(idGradient, ")")
                }
            }), (0, react.createElement)("defs", null, (0, react.createElement)("clipPath", {
                id: idClip
            }, children), (0, react.createElement)("linearGradient", {
                id: idGradient,
                gradientTransform: "translate(".concat(from, ")")
            }, (0, react.createElement)("stop", {
                offset: "0%",
                stopColor: backgroundColor,
                stopOpacity: backgroundOpacity
            }), (0, react.createElement)("stop", {
                offset: "50%",
                stopColor: foregroundColor,
                stopOpacity: foregroundOpacity
            }), (0, react.createElement)("stop", {
                offset: "100%",
                stopColor: backgroundColor,
                stopOpacity: backgroundOpacity
            }), animate && (0, react.createElement)("animateTransform", {
                attributeName: "gradientTransform",
                type: "translate",
                values: "".concat(from, "; 0 0; ").concat(to),
                dur,
                repeatCount: "indefinite"
            }))));
        };
        var ContentLoader = function(props) {
            return props.children ? (0, react.createElement)(SVG, __assign({}, props)) : (0, 
            react.createElement)(ReactContentLoaderFacebook, __assign({}, props));
        };
        var ReactContentLoaderFacebook = function(props) {
            return (0, react.createElement)(ContentLoader, __assign({
                viewBox: "0 0 476 124"
            }, props), (0, react.createElement)("rect", {
                x: "48",
                y: "8",
                width: "88",
                height: "6",
                rx: "3"
            }), (0, react.createElement)("rect", {
                x: "48",
                y: "26",
                width: "52",
                height: "6",
                rx: "3"
            }), (0, react.createElement)("rect", {
                x: "0",
                y: "56",
                width: "410",
                height: "6",
                rx: "3"
            }), (0, react.createElement)("rect", {
                x: "0",
                y: "72",
                width: "380",
                height: "6",
                rx: "3"
            }), (0, react.createElement)("rect", {
                x: "0",
                y: "88",
                width: "178",
                height: "6",
                rx: "3"
            }), (0, react.createElement)("circle", {
                cx: "20",
                cy: "20",
                r: "20"
            }));
        };
        const react_content_loader_es = ContentLoader;
        function Card({onFavorite, imageUrl, id, title, cost, onAddCart, favorited = false, loading = false}) {
            const {isItemAdded} = (0, react.useContext)(context);
            const [isFavorite, setIsFavorite] = (0, react.useState)(favorited);
            const obj = {
                id,
                parendId: id,
                title,
                cost,
                imageUrl
            };
            const addPlus = () => {
                onAddCart(obj);
            };
            const addFavorite = () => {
                onFavorite(obj);
                setIsFavorite(!isFavorite);
            };
            return react.createElement(react.Fragment, null, loading ? react.createElement(react_content_loader_es, {
                width: 140,
                height: 265,
                viewBox: "0 0 150 265",
                backgroundColor: "#e5e5e5",
                foregroundColor: "#d3d3d3"
            }, react.createElement("rect", {
                x: "9",
                y: "18",
                rx: "0",
                ry: "0",
                width: "96",
                height: "67"
            }), react.createElement("rect", {
                x: "13",
                y: "100",
                rx: "0",
                ry: "0",
                width: "92",
                height: "11"
            }), react.createElement("rect", {
                x: "13",
                y: "122",
                rx: "0",
                ry: "0",
                width: "64",
                height: "10"
            }), react.createElement("rect", {
                x: "13",
                y: "147",
                rx: "0",
                ry: "0",
                width: "63",
                height: "12"
            }), react.createElement("rect", {
                x: "87",
                y: "124",
                rx: "0",
                ry: "0",
                width: "18",
                height: "26"
            })) : react.createElement("article", {
                className: "page__item card"
            }, react.createElement("button", {
                onClick: addFavorite,
                className: "card__favorite"
            }, react.createElement("img", {
                src: isFavorite ? "img/favorite-like.svg" : "img/favorite.svg",
                alt: ""
            })), react.createElement("img", {
                src: imageUrl,
                alt: ""
            }), react.createElement("h3", {
                className: "card__text"
            }, title), react.createElement("div", {
                className: "card__block"
            }, react.createElement("div", {
                className: "card__left"
            }, react.createElement("span", {
                className: "card__cost"
            }, "цена"), react.createElement("span", {
                className: "card__cost-number"
            }, cost, " руб")), onAddCart && react.createElement("button", {
                className: "card__button"
            }, react.createElement("img", {
                onClick: addPlus,
                src: isItemAdded(id) ? "img/add-complite.svg" : "img/add.svg",
                alt: ""
            })))));
        }
        function Home_extends() {
            return Home_extends = Object.assign ? Object.assign.bind() : function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
            }, Home_extends.apply(null, arguments);
        }
        function Home({searchValue, onChangeSearchInput, items, onAddToFavorite, setSearchValue, onAddToCart, isLoading}) {
            const renderItems = () => {
                const filteredItems = items.filter((item => item.title.toLowerCase().includes(searchValue)));
                return (isLoading ? [ ...Array(8) ] : filteredItems).map(((item, index) => react.createElement(Card, Home_extends({
                    key: index,
                    onFavorite: obj => {
                        onAddToFavorite(obj);
                    },
                    onAddCart: obj => {
                        onAddToCart(obj);
                    }
                }, item, {
                    loading: isLoading
                }))));
            };
            return react.createElement("main", null, react.createElement("section", {
                className: "page"
            }, react.createElement("div", {
                className: "page__container"
            }, react.createElement("div", {
                className: "page__top"
            }, react.createElement("h1", {
                className: "page__title"
            }, searchValue ? `Поиск по: ${searchValue}` : "Все кроссовки"), react.createElement("div", {
                className: "page__search"
            }, react.createElement("img", {
                src: "img/search-input.svg",
                alt: ""
            }), searchValue && react.createElement("img", {
                onClick: () => setSearchValue(""),
                className: "page__input-close",
                src: "img/close.svg",
                alt: "Clear"
            }), react.createElement("input", {
                value: searchValue,
                onChange: onChangeSearchInput,
                id: "input",
                className: "page__input",
                placeholder: "Поиск",
                type: "text"
            }))), react.createElement("div", {
                className: "page__body"
            }, renderItems()))));
        }
        function Info({title, description, image}) {
            const {setCartView} = (0, react.useContext)(context);
            return react.createElement("div", {
                className: "cart-empty"
            }, react.createElement("img", {
                src: image,
                alt: ""
            }), react.createElement("h2", null, title), react.createElement("br", null), react.createElement("p", null, description), react.createElement("button", {
                onClick: () => setCartView(false)
            }, "Вернуться назад"));
        }
        function bind(fn, thisArg) {
            return function wrap() {
                return fn.apply(thisArg, arguments);
            };
        }
        const {toString: utils_toString} = Object.prototype;
        const {getPrototypeOf} = Object;
        const kindOf = (cache => thing => {
            const str = utils_toString.call(thing);
            return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
        })(Object.create(null));
        const kindOfTest = type => {
            type = type.toLowerCase();
            return thing => kindOf(thing) === type;
        };
        const typeOfTest = type => thing => typeof thing === type;
        const {isArray} = Array;
        const isUndefined = typeOfTest("undefined");
        function isBuffer(val) {
            return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
        }
        const isArrayBuffer = kindOfTest("ArrayBuffer");
        function isArrayBufferView(val) {
            let result;
            if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val); else result = val && val.buffer && isArrayBuffer(val.buffer);
            return result;
        }
        const isString = typeOfTest("string");
        const isFunction = typeOfTest("function");
        const isNumber = typeOfTest("number");
        const isObject = thing => thing !== null && typeof thing === "object";
        const isBoolean = thing => thing === true || thing === false;
        const isPlainObject = val => {
            if (kindOf(val) !== "object") return false;
            const prototype = getPrototypeOf(val);
            return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
        };
        const isDate = kindOfTest("Date");
        const isFile = kindOfTest("File");
        const isBlob = kindOfTest("Blob");
        const isFileList = kindOfTest("FileList");
        const isStream = val => isObject(val) && isFunction(val.pipe);
        const isFormData = thing => {
            let kind;
            return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
        };
        const isURLSearchParams = kindOfTest("URLSearchParams");
        const [isReadableStream, isRequest, utils_isResponse, isHeaders] = [ "ReadableStream", "Request", "Response", "Headers" ].map(kindOfTest);
        const trim = str => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        function forEach(obj, fn, {allOwnKeys = false} = {}) {
            if (obj === null || typeof obj === "undefined") return;
            let i;
            let l;
            if (typeof obj !== "object") obj = [ obj ];
            if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj); else {
                const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
                const len = keys.length;
                let key;
                for (i = 0; i < len; i++) {
                    key = keys[i];
                    fn.call(null, obj[key], key, obj);
                }
            }
        }
        function findKey(obj, key) {
            key = key.toLowerCase();
            const keys = Object.keys(obj);
            let i = keys.length;
            let _key;
            while (i-- > 0) {
                _key = keys[i];
                if (key === _key.toLowerCase()) return _key;
            }
            return null;
        }
        const _global = (() => {
            if (typeof globalThis !== "undefined") return globalThis;
            return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
        })();
        const isContextDefined = context => !isUndefined(context) && context !== _global;
        function merge() {
            const {caseless} = isContextDefined(this) && this || {};
            const result = {};
            const assignValue = (val, key) => {
                const targetKey = caseless && findKey(result, key) || key;
                if (isPlainObject(result[targetKey]) && isPlainObject(val)) result[targetKey] = merge(result[targetKey], val); else if (isPlainObject(val)) result[targetKey] = merge({}, val); else if (isArray(val)) result[targetKey] = val.slice(); else result[targetKey] = val;
            };
            for (let i = 0, l = arguments.length; i < l; i++) arguments[i] && forEach(arguments[i], assignValue);
            return result;
        }
        const extend = (a, b, thisArg, {allOwnKeys} = {}) => {
            forEach(b, ((val, key) => {
                if (thisArg && isFunction(val)) a[key] = bind(val, thisArg); else a[key] = val;
            }), {
                allOwnKeys
            });
            return a;
        };
        const stripBOM = content => {
            if (content.charCodeAt(0) === 65279) content = content.slice(1);
            return content;
        };
        const inherits = (constructor, superConstructor, props, descriptors) => {
            constructor.prototype = Object.create(superConstructor.prototype, descriptors);
            constructor.prototype.constructor = constructor;
            Object.defineProperty(constructor, "super", {
                value: superConstructor.prototype
            });
            props && Object.assign(constructor.prototype, props);
        };
        const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
            let props;
            let i;
            let prop;
            const merged = {};
            destObj = destObj || {};
            if (sourceObj == null) return destObj;
            do {
                props = Object.getOwnPropertyNames(sourceObj);
                i = props.length;
                while (i-- > 0) {
                    prop = props[i];
                    if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
                        destObj[prop] = sourceObj[prop];
                        merged[prop] = true;
                    }
                }
                sourceObj = filter !== false && getPrototypeOf(sourceObj);
            } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
            return destObj;
        };
        const endsWith = (str, searchString, position) => {
            str = String(str);
            if (position === void 0 || position > str.length) position = str.length;
            position -= searchString.length;
            const lastIndex = str.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
        const toArray = thing => {
            if (!thing) return null;
            if (isArray(thing)) return thing;
            let i = thing.length;
            if (!isNumber(i)) return null;
            const arr = new Array(i);
            while (i-- > 0) arr[i] = thing[i];
            return arr;
        };
        const isTypedArray = (TypedArray => thing => TypedArray && thing instanceof TypedArray)(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
        const forEachEntry = (obj, fn) => {
            const generator = obj && obj[Symbol.iterator];
            const iterator = generator.call(obj);
            let result;
            while ((result = iterator.next()) && !result.done) {
                const pair = result.value;
                fn.call(obj, pair[0], pair[1]);
            }
        };
        const matchAll = (regExp, str) => {
            let matches;
            const arr = [];
            while ((matches = regExp.exec(str)) !== null) arr.push(matches);
            return arr;
        };
        const isHTMLForm = kindOfTest("HTMLFormElement");
        const toCamelCase = str => str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function replacer(m, p1, p2) {
            return p1.toUpperCase() + p2;
        }));
        const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
        const isRegExp = kindOfTest("RegExp");
        const reduceDescriptors = (obj, reducer) => {
            const descriptors = Object.getOwnPropertyDescriptors(obj);
            const reducedDescriptors = {};
            forEach(descriptors, ((descriptor, name) => {
                let ret;
                if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
            }));
            Object.defineProperties(obj, reducedDescriptors);
        };
        const freezeMethods = obj => {
            reduceDescriptors(obj, ((descriptor, name) => {
                if (isFunction(obj) && [ "arguments", "caller", "callee" ].indexOf(name) !== -1) return false;
                const value = obj[name];
                if (!isFunction(value)) return;
                descriptor.enumerable = false;
                if ("writable" in descriptor) {
                    descriptor.writable = false;
                    return;
                }
                if (!descriptor.set) descriptor.set = () => {
                    throw Error("Can not rewrite read-only method '" + name + "'");
                };
            }));
        };
        const toObjectSet = (arrayOrString, delimiter) => {
            const obj = {};
            const define = arr => {
                arr.forEach((value => {
                    obj[value] = true;
                }));
            };
            isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
            return obj;
        };
        const noop = () => {};
        const toFiniteNumber = (value, defaultValue) => value != null && Number.isFinite(value = +value) ? value : defaultValue;
        const ALPHA = "abcdefghijklmnopqrstuvwxyz";
        const DIGIT = "0123456789";
        const ALPHABET = {
            DIGIT,
            ALPHA,
            ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
        };
        const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
            let str = "";
            const {length} = alphabet;
            while (size--) str += alphabet[Math.random() * length | 0];
            return str;
        };
        function isSpecCompliantForm(thing) {
            return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
        }
        const toJSONObject = obj => {
            const stack = new Array(10);
            const visit = (source, i) => {
                if (isObject(source)) {
                    if (stack.indexOf(source) >= 0) return;
                    if (!("toJSON" in source)) {
                        stack[i] = source;
                        const target = isArray(source) ? [] : {};
                        forEach(source, ((value, key) => {
                            const reducedValue = visit(value, i + 1);
                            !isUndefined(reducedValue) && (target[key] = reducedValue);
                        }));
                        stack[i] = void 0;
                        return target;
                    }
                }
                return source;
            };
            return visit(obj, 0);
        };
        const isAsyncFn = kindOfTest("AsyncFunction");
        const isThenable = thing => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
        const utils = {
            isArray,
            isArrayBuffer,
            isBuffer,
            isFormData,
            isArrayBufferView,
            isString,
            isNumber,
            isBoolean,
            isObject,
            isPlainObject,
            isReadableStream,
            isRequest,
            isResponse: utils_isResponse,
            isHeaders,
            isUndefined,
            isDate,
            isFile,
            isBlob,
            isRegExp,
            isFunction,
            isStream,
            isURLSearchParams,
            isTypedArray,
            isFileList,
            forEach,
            merge,
            extend,
            trim,
            stripBOM,
            inherits,
            toFlatObject,
            kindOf,
            kindOfTest,
            endsWith,
            toArray,
            forEachEntry,
            matchAll,
            isHTMLForm,
            hasOwnProperty: utils_hasOwnProperty,
            hasOwnProp: utils_hasOwnProperty,
            reduceDescriptors,
            freezeMethods,
            toObjectSet,
            toCamelCase,
            noop,
            toFiniteNumber,
            findKey,
            global: _global,
            isContextDefined,
            ALPHABET,
            generateString,
            isSpecCompliantForm,
            toJSONObject,
            isAsyncFn,
            isThenable
        };
        function AxiosError(message, code, config, request, response) {
            Error.call(this);
            if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor); else this.stack = (new Error).stack;
            this.message = message;
            this.name = "AxiosError";
            code && (this.code = code);
            config && (this.config = config);
            request && (this.request = request);
            response && (this.response = response);
        }
        utils.inherits(AxiosError, Error, {
            toJSON: function toJSON() {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: utils.toJSONObject(this.config),
                    code: this.code,
                    status: this.response && this.response.status ? this.response.status : null
                };
            }
        });
        const AxiosError_prototype = AxiosError.prototype;
        const descriptors = {};
        [ "ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL" ].forEach((code => {
            descriptors[code] = {
                value: code
            };
        }));
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(AxiosError_prototype, "isAxiosError", {
            value: true
        });
        AxiosError.from = (error, code, config, request, response, customProps) => {
            const axiosError = Object.create(AxiosError_prototype);
            utils.toFlatObject(error, axiosError, (function filter(obj) {
                return obj !== Error.prototype;
            }), (prop => prop !== "isAxiosError"));
            AxiosError.call(axiosError, error.message, code, config, request, response);
            axiosError.cause = error;
            axiosError.name = error.name;
            customProps && Object.assign(axiosError, customProps);
            return axiosError;
        };
        const core_AxiosError = AxiosError;
        const helpers_null = null;
        function isVisitable(thing) {
            return utils.isPlainObject(thing) || utils.isArray(thing);
        }
        function removeBrackets(key) {
            return utils.endsWith(key, "[]") ? key.slice(0, -2) : key;
        }
        function renderKey(path, key, dots) {
            if (!path) return key;
            return path.concat(key).map((function each(token, i) {
                token = removeBrackets(token);
                return !dots && i ? "[" + token + "]" : token;
            })).join(dots ? "." : "");
        }
        function isFlatArray(arr) {
            return utils.isArray(arr) && !arr.some(isVisitable);
        }
        const predicates = utils.toFlatObject(utils, {}, null, (function filter(prop) {
            return /^is[A-Z]/.test(prop);
        }));
        function toFormData(obj, formData, options) {
            if (!utils.isObject(obj)) throw new TypeError("target must be an object");
            formData = formData || new (helpers_null || FormData);
            options = utils.toFlatObject(options, {
                metaTokens: true,
                dots: false,
                indexes: false
            }, false, (function defined(option, source) {
                return !utils.isUndefined(source[option]);
            }));
            const metaTokens = options.metaTokens;
            const visitor = options.visitor || defaultVisitor;
            const dots = options.dots;
            const indexes = options.indexes;
            const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
            const useBlob = _Blob && utils.isSpecCompliantForm(formData);
            if (!utils.isFunction(visitor)) throw new TypeError("visitor must be a function");
            function convertValue(value) {
                if (value === null) return "";
                if (utils.isDate(value)) return value.toISOString();
                if (!useBlob && utils.isBlob(value)) throw new core_AxiosError("Blob is not supported. Use a Buffer instead.");
                if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([ value ]) : Buffer.from(value);
                return value;
            }
            function defaultVisitor(value, key, path) {
                let arr = value;
                if (value && !path && typeof value === "object") if (utils.endsWith(key, "{}")) {
                    key = metaTokens ? key : key.slice(0, -2);
                    value = JSON.stringify(value);
                } else if (utils.isArray(value) && isFlatArray(value) || (utils.isFileList(value) || utils.endsWith(key, "[]")) && (arr = utils.toArray(value))) {
                    key = removeBrackets(key);
                    arr.forEach((function each(el, index) {
                        !(utils.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([ key ], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
                    }));
                    return false;
                }
                if (isVisitable(value)) return true;
                formData.append(renderKey(path, key, dots), convertValue(value));
                return false;
            }
            const stack = [];
            const exposedHelpers = Object.assign(predicates, {
                defaultVisitor,
                convertValue,
                isVisitable
            });
            function build(value, path) {
                if (utils.isUndefined(value)) return;
                if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
                stack.push(value);
                utils.forEach(value, (function each(el, key) {
                    const result = !(utils.isUndefined(el) || el === null) && visitor.call(formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers);
                    if (result === true) build(el, path ? path.concat(key) : [ key ]);
                }));
                stack.pop();
            }
            if (!utils.isObject(obj)) throw new TypeError("data must be an object");
            build(obj);
            return formData;
        }
        const helpers_toFormData = toFormData;
        function encode(str) {
            const charMap = {
                "!": "%21",
                "'": "%27",
                "(": "%28",
                ")": "%29",
                "~": "%7E",
                "%20": "+",
                "%00": "\0"
            };
            return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, (function replacer(match) {
                return charMap[match];
            }));
        }
        function AxiosURLSearchParams(params, options) {
            this._pairs = [];
            params && helpers_toFormData(params, this, options);
        }
        const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;
        AxiosURLSearchParams_prototype.append = function append(name, value) {
            this._pairs.push([ name, value ]);
        };
        AxiosURLSearchParams_prototype.toString = function toString(encoder) {
            const _encode = encoder ? function(value) {
                return encoder.call(this, value, encode);
            } : encode;
            return this._pairs.map((function each(pair) {
                return _encode(pair[0]) + "=" + _encode(pair[1]);
            }), "").join("&");
        };
        const helpers_AxiosURLSearchParams = AxiosURLSearchParams;
        function buildURL_encode(val) {
            return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        function buildURL(url, params, options) {
            if (!params) return url;
            const _encode = options && options.encode || buildURL_encode;
            const serializeFn = options && options.serialize;
            let serializedParams;
            if (serializeFn) serializedParams = serializeFn(params, options); else serializedParams = utils.isURLSearchParams(params) ? params.toString() : new helpers_AxiosURLSearchParams(params, options).toString(_encode);
            if (serializedParams) {
                const hashmarkIndex = url.indexOf("#");
                if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
                url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
            }
            return url;
        }
        class InterceptorManager {
            constructor() {
                this.handlers = [];
            }
            use(fulfilled, rejected, options) {
                this.handlers.push({
                    fulfilled,
                    rejected,
                    synchronous: options ? options.synchronous : false,
                    runWhen: options ? options.runWhen : null
                });
                return this.handlers.length - 1;
            }
            eject(id) {
                if (this.handlers[id]) this.handlers[id] = null;
            }
            clear() {
                if (this.handlers) this.handlers = [];
            }
            forEach(fn) {
                utils.forEach(this.handlers, (function forEachHandler(h) {
                    if (h !== null) fn(h);
                }));
            }
        }
        const core_InterceptorManager = InterceptorManager;
        const defaults_transitional = {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false
        };
        const classes_URLSearchParams = typeof URLSearchParams !== "undefined" ? URLSearchParams : helpers_AxiosURLSearchParams;
        const classes_FormData = typeof FormData !== "undefined" ? FormData : null;
        const classes_Blob = typeof Blob !== "undefined" ? Blob : null;
        const browser = {
            isBrowser: true,
            classes: {
                URLSearchParams: classes_URLSearchParams,
                FormData: classes_FormData,
                Blob: classes_Blob
            },
            protocols: [ "http", "https", "file", "blob", "url", "data" ]
        };
        const hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
        const hasStandardBrowserEnv = (product => hasBrowserEnv && [ "ReactNative", "NativeScript", "NS" ].indexOf(product) < 0)(typeof navigator !== "undefined" && navigator.product);
        const hasStandardBrowserWebWorkerEnv = (() => typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function")();
        const origin = hasBrowserEnv && window.location.href || "http://localhost";
        const platform = {
            ...common_utils_namespaceObject,
            ...browser
        };
        function toURLEncodedForm(data, options) {
            return helpers_toFormData(data, new platform.classes.URLSearchParams, Object.assign({
                visitor: function(value, key, path, helpers) {
                    if (platform.isNode && utils.isBuffer(value)) {
                        this.append(key, value.toString("base64"));
                        return false;
                    }
                    return helpers.defaultVisitor.apply(this, arguments);
                }
            }, options));
        }
        function parsePropPath(name) {
            return utils.matchAll(/\w+|\[(\w*)]/g, name).map((match => match[0] === "[]" ? "" : match[1] || match[0]));
        }
        function arrayToObject(arr) {
            const obj = {};
            const keys = Object.keys(arr);
            let i;
            const len = keys.length;
            let key;
            for (i = 0; i < len; i++) {
                key = keys[i];
                obj[key] = arr[key];
            }
            return obj;
        }
        function formDataToJSON(formData) {
            function buildPath(path, value, target, index) {
                let name = path[index++];
                if (name === "__proto__") return true;
                const isNumericKey = Number.isFinite(+name);
                const isLast = index >= path.length;
                name = !name && utils.isArray(target) ? target.length : name;
                if (isLast) {
                    if (utils.hasOwnProp(target, name)) target[name] = [ target[name], value ]; else target[name] = value;
                    return !isNumericKey;
                }
                if (!target[name] || !utils.isObject(target[name])) target[name] = [];
                const result = buildPath(path, value, target[name], index);
                if (result && utils.isArray(target[name])) target[name] = arrayToObject(target[name]);
                return !isNumericKey;
            }
            if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
                const obj = {};
                utils.forEachEntry(formData, ((name, value) => {
                    buildPath(parsePropPath(name), value, obj, 0);
                }));
                return obj;
            }
            return null;
        }
        const helpers_formDataToJSON = formDataToJSON;
        function stringifySafely(rawValue, parser, encoder) {
            if (utils.isString(rawValue)) try {
                (parser || JSON.parse)(rawValue);
                return utils.trim(rawValue);
            } catch (e) {
                if (e.name !== "SyntaxError") throw e;
            }
            return (encoder || JSON.stringify)(rawValue);
        }
        const defaults = {
            transitional: defaults_transitional,
            adapter: [ "xhr", "http", "fetch" ],
            transformRequest: [ function transformRequest(data, headers) {
                const contentType = headers.getContentType() || "";
                const hasJSONContentType = contentType.indexOf("application/json") > -1;
                const isObjectPayload = utils.isObject(data);
                if (isObjectPayload && utils.isHTMLForm(data)) data = new FormData(data);
                const isFormData = utils.isFormData(data);
                if (isFormData) return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
                if (utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data) || utils.isReadableStream(data)) return data;
                if (utils.isArrayBufferView(data)) return data.buffer;
                if (utils.isURLSearchParams(data)) {
                    headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
                    return data.toString();
                }
                let isFileList;
                if (isObjectPayload) {
                    if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, this.formSerializer).toString();
                    if ((isFileList = utils.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
                        const _FormData = this.env && this.env.FormData;
                        return helpers_toFormData(isFileList ? {
                            "files[]": data
                        } : data, _FormData && new _FormData, this.formSerializer);
                    }
                }
                if (isObjectPayload || hasJSONContentType) {
                    headers.setContentType("application/json", false);
                    return stringifySafely(data);
                }
                return data;
            } ],
            transformResponse: [ function transformResponse(data) {
                const transitional = this.transitional || defaults.transitional;
                const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
                const JSONRequested = this.responseType === "json";
                if (utils.isResponse(data) || utils.isReadableStream(data)) return data;
                if (data && utils.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
                    const silentJSONParsing = transitional && transitional.silentJSONParsing;
                    const strictJSONParsing = !silentJSONParsing && JSONRequested;
                    try {
                        return JSON.parse(data);
                    } catch (e) {
                        if (strictJSONParsing) {
                            if (e.name === "SyntaxError") throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                            throw e;
                        }
                    }
                }
                return data;
            } ],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
                FormData: platform.classes.FormData,
                Blob: platform.classes.Blob
            },
            validateStatus: function validateStatus(status) {
                return status >= 200 && status < 300;
            },
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": void 0
                }
            }
        };
        utils.forEach([ "delete", "get", "head", "post", "put", "patch" ], (method => {
            defaults.headers[method] = {};
        }));
        const lib_defaults = defaults;
        const ignoreDuplicateOf = utils.toObjectSet([ "age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent" ]);
        const parseHeaders = rawHeaders => {
            const parsed = {};
            let key;
            let val;
            let i;
            rawHeaders && rawHeaders.split("\n").forEach((function parser(line) {
                i = line.indexOf(":");
                key = line.substring(0, i).trim().toLowerCase();
                val = line.substring(i + 1).trim();
                if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
                if (key === "set-cookie") if (parsed[key]) parsed[key].push(val); else parsed[key] = [ val ]; else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
            }));
            return parsed;
        };
        const $internals = Symbol("internals");
        function normalizeHeader(header) {
            return header && String(header).trim().toLowerCase();
        }
        function normalizeValue(value) {
            if (value === false || value == null) return value;
            return utils.isArray(value) ? value.map(normalizeValue) : String(value);
        }
        function parseTokens(str) {
            const tokens = Object.create(null);
            const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let match;
            while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
            return tokens;
        }
        const isValidHeaderName = str => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
        function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
            if (utils.isFunction(filter)) return filter.call(this, value, header);
            if (isHeaderNameFilter) value = header;
            if (!utils.isString(value)) return;
            if (utils.isString(filter)) return value.indexOf(filter) !== -1;
            if (utils.isRegExp(filter)) return filter.test(value);
        }
        function formatHeader(header) {
            return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((w, char, str) => char.toUpperCase() + str));
        }
        function buildAccessors(obj, header) {
            const accessorName = utils.toCamelCase(" " + header);
            [ "get", "set", "has" ].forEach((methodName => {
                Object.defineProperty(obj, methodName + accessorName, {
                    value: function(arg1, arg2, arg3) {
                        return this[methodName].call(this, header, arg1, arg2, arg3);
                    },
                    configurable: true
                });
            }));
        }
        class AxiosHeaders {
            constructor(headers) {
                headers && this.set(headers);
            }
            set(header, valueOrRewrite, rewrite) {
                const self = this;
                function setHeader(_value, _header, _rewrite) {
                    const lHeader = normalizeHeader(_header);
                    if (!lHeader) throw new Error("header name must be a non-empty string");
                    const key = utils.findKey(self, lHeader);
                    if (!key || self[key] === void 0 || _rewrite === true || _rewrite === void 0 && self[key] !== false) self[key || _header] = normalizeValue(_value);
                }
                const setHeaders = (headers, _rewrite) => utils.forEach(headers, ((_value, _header) => setHeader(_value, _header, _rewrite)));
                if (utils.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite); else if (utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders(header), valueOrRewrite); else if (utils.isHeaders(header)) for (const [key, value] of header.entries()) setHeader(value, key, rewrite); else header != null && setHeader(valueOrRewrite, header, rewrite);
                return this;
            }
            get(header, parser) {
                header = normalizeHeader(header);
                if (header) {
                    const key = utils.findKey(this, header);
                    if (key) {
                        const value = this[key];
                        if (!parser) return value;
                        if (parser === true) return parseTokens(value);
                        if (utils.isFunction(parser)) return parser.call(this, value, key);
                        if (utils.isRegExp(parser)) return parser.exec(value);
                        throw new TypeError("parser must be boolean|regexp|function");
                    }
                }
            }
            has(header, matcher) {
                header = normalizeHeader(header);
                if (header) {
                    const key = utils.findKey(this, header);
                    return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
                }
                return false;
            }
            delete(header, matcher) {
                const self = this;
                let deleted = false;
                function deleteHeader(_header) {
                    _header = normalizeHeader(_header);
                    if (_header) {
                        const key = utils.findKey(self, _header);
                        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
                            delete self[key];
                            deleted = true;
                        }
                    }
                }
                if (utils.isArray(header)) header.forEach(deleteHeader); else deleteHeader(header);
                return deleted;
            }
            clear(matcher) {
                const keys = Object.keys(this);
                let i = keys.length;
                let deleted = false;
                while (i--) {
                    const key = keys[i];
                    if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
                        delete this[key];
                        deleted = true;
                    }
                }
                return deleted;
            }
            normalize(format) {
                const self = this;
                const headers = {};
                utils.forEach(this, ((value, header) => {
                    const key = utils.findKey(headers, header);
                    if (key) {
                        self[key] = normalizeValue(value);
                        delete self[header];
                        return;
                    }
                    const normalized = format ? formatHeader(header) : String(header).trim();
                    if (normalized !== header) delete self[header];
                    self[normalized] = normalizeValue(value);
                    headers[normalized] = true;
                }));
                return this;
            }
            concat(...targets) {
                return this.constructor.concat(this, ...targets);
            }
            toJSON(asStrings) {
                const obj = Object.create(null);
                utils.forEach(this, ((value, header) => {
                    value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(", ") : value);
                }));
                return obj;
            }
            [Symbol.iterator]() {
                return Object.entries(this.toJSON())[Symbol.iterator]();
            }
            toString() {
                return Object.entries(this.toJSON()).map((([header, value]) => header + ": " + value)).join("\n");
            }
            get [Symbol.toStringTag]() {
                return "AxiosHeaders";
            }
            static from(thing) {
                return thing instanceof this ? thing : new this(thing);
            }
            static concat(first, ...targets) {
                const computed = new this(first);
                targets.forEach((target => computed.set(target)));
                return computed;
            }
            static accessor(header) {
                const internals = this[$internals] = this[$internals] = {
                    accessors: {}
                };
                const accessors = internals.accessors;
                const prototype = this.prototype;
                function defineAccessor(_header) {
                    const lHeader = normalizeHeader(_header);
                    if (!accessors[lHeader]) {
                        buildAccessors(prototype, _header);
                        accessors[lHeader] = true;
                    }
                }
                utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
                return this;
            }
        }
        AxiosHeaders.accessor([ "Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization" ]);
        utils.reduceDescriptors(AxiosHeaders.prototype, (({value}, key) => {
            let mapped = key[0].toUpperCase() + key.slice(1);
            return {
                get: () => value,
                set(headerValue) {
                    this[mapped] = headerValue;
                }
            };
        }));
        utils.freezeMethods(AxiosHeaders);
        const core_AxiosHeaders = AxiosHeaders;
        function transformData(fns, response) {
            const config = this || lib_defaults;
            const context = response || config;
            const headers = core_AxiosHeaders.from(context.headers);
            let data = context.data;
            utils.forEach(fns, (function transform(fn) {
                data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
            }));
            headers.normalize();
            return data;
        }
        function isCancel(value) {
            return !!(value && value.__CANCEL__);
        }
        function CanceledError(message, config, request) {
            core_AxiosError.call(this, message == null ? "canceled" : message, core_AxiosError.ERR_CANCELED, config, request);
            this.name = "CanceledError";
        }
        utils.inherits(CanceledError, core_AxiosError, {
            __CANCEL__: true
        });
        const cancel_CanceledError = CanceledError;
        function settle(resolve, reject, response) {
            const validateStatus = response.config.validateStatus;
            if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response); else reject(new core_AxiosError("Request failed with status code " + response.status, [ core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE ][Math.floor(response.status / 100) - 4], response.config, response.request, response));
        }
        function parseProtocol(url) {
            const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
            return match && match[1] || "";
        }
        function speedometer(samplesCount, min) {
            samplesCount = samplesCount || 10;
            const bytes = new Array(samplesCount);
            const timestamps = new Array(samplesCount);
            let head = 0;
            let tail = 0;
            let firstSampleTS;
            min = min !== void 0 ? min : 1e3;
            return function push(chunkLength) {
                const now = Date.now();
                const startedAt = timestamps[tail];
                if (!firstSampleTS) firstSampleTS = now;
                bytes[head] = chunkLength;
                timestamps[head] = now;
                let i = tail;
                let bytesCount = 0;
                while (i !== head) {
                    bytesCount += bytes[i++];
                    i %= samplesCount;
                }
                head = (head + 1) % samplesCount;
                if (head === tail) tail = (tail + 1) % samplesCount;
                if (now - firstSampleTS < min) return;
                const passed = startedAt && now - startedAt;
                return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
            };
        }
        const helpers_speedometer = speedometer;
        function throttle(fn, freq) {
            let timestamp = 0;
            const threshold = 1e3 / freq;
            let timer = null;
            return function throttled() {
                const force = this === true;
                const now = Date.now();
                if (force || now - timestamp > threshold) {
                    if (timer) {
                        clearTimeout(timer);
                        timer = null;
                    }
                    timestamp = now;
                    return fn.apply(null, arguments);
                }
                if (!timer) timer = setTimeout((() => {
                    timer = null;
                    timestamp = Date.now();
                    return fn.apply(null, arguments);
                }), threshold - (now - timestamp));
            };
        }
        const helpers_throttle = throttle;
        const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
            let bytesNotified = 0;
            const _speedometer = helpers_speedometer(50, 250);
            return helpers_throttle((e => {
                const loaded = e.loaded;
                const total = e.lengthComputable ? e.total : void 0;
                const progressBytes = loaded - bytesNotified;
                const rate = _speedometer(progressBytes);
                const inRange = loaded <= total;
                bytesNotified = loaded;
                const data = {
                    loaded,
                    total,
                    progress: total ? loaded / total : void 0,
                    bytes: progressBytes,
                    rate: rate ? rate : void 0,
                    estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
                    event: e,
                    lengthComputable: total != null
                };
                data[isDownloadStream ? "download" : "upload"] = true;
                listener(data);
            }), freq);
        };
        const isURLSameOrigin = platform.hasStandardBrowserEnv ? function standardBrowserEnv() {
            const msie = /(msie|trident)/i.test(navigator.userAgent);
            const urlParsingNode = document.createElement("a");
            let originURL;
            function resolveURL(url) {
                let href = url;
                if (msie) {
                    urlParsingNode.setAttribute("href", href);
                    href = urlParsingNode.href;
                }
                urlParsingNode.setAttribute("href", href);
                return {
                    href: urlParsingNode.href,
                    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
                    host: urlParsingNode.host,
                    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
                    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
                    hostname: urlParsingNode.hostname,
                    port: urlParsingNode.port,
                    pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
                };
            }
            originURL = resolveURL(window.location.href);
            return function isURLSameOrigin(requestURL) {
                const parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
                return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
            };
        }() : function nonStandardBrowserEnv() {
            return function isURLSameOrigin() {
                return true;
            };
        }();
        const cookies = platform.hasStandardBrowserEnv ? {
            write(name, value, expires, path, domain, secure) {
                const cookie = [ name + "=" + encodeURIComponent(value) ];
                utils.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
                utils.isString(path) && cookie.push("path=" + path);
                utils.isString(domain) && cookie.push("domain=" + domain);
                secure === true && cookie.push("secure");
                document.cookie = cookie.join("; ");
            },
            read(name) {
                const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
                return match ? decodeURIComponent(match[3]) : null;
            },
            remove(name) {
                this.write(name, "", Date.now() - 864e5);
            }
        } : {
            write() {},
            read() {
                return null;
            },
            remove() {}
        };
        function isAbsoluteURL(url) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        }
        function combineURLs(baseURL, relativeURL) {
            return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        }
        function buildFullPath(baseURL, requestedURL) {
            if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
            return requestedURL;
        }
        const headersToObject = thing => thing instanceof core_AxiosHeaders ? {
            ...thing
        } : thing;
        function mergeConfig(config1, config2) {
            config2 = config2 || {};
            const config = {};
            function getMergedValue(target, source, caseless) {
                if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge.call({
                    caseless
                }, target, source); else if (utils.isPlainObject(source)) return utils.merge({}, source); else if (utils.isArray(source)) return source.slice();
                return source;
            }
            function mergeDeepProperties(a, b, caseless) {
                if (!utils.isUndefined(b)) return getMergedValue(a, b, caseless); else if (!utils.isUndefined(a)) return getMergedValue(void 0, a, caseless);
            }
            function valueFromConfig2(a, b) {
                if (!utils.isUndefined(b)) return getMergedValue(void 0, b);
            }
            function defaultToConfig2(a, b) {
                if (!utils.isUndefined(b)) return getMergedValue(void 0, b); else if (!utils.isUndefined(a)) return getMergedValue(void 0, a);
            }
            function mergeDirectKeys(a, b, prop) {
                if (prop in config2) return getMergedValue(a, b); else if (prop in config1) return getMergedValue(void 0, a);
            }
            const mergeMap = {
                url: valueFromConfig2,
                method: valueFromConfig2,
                data: valueFromConfig2,
                baseURL: defaultToConfig2,
                transformRequest: defaultToConfig2,
                transformResponse: defaultToConfig2,
                paramsSerializer: defaultToConfig2,
                timeout: defaultToConfig2,
                timeoutMessage: defaultToConfig2,
                withCredentials: defaultToConfig2,
                withXSRFToken: defaultToConfig2,
                adapter: defaultToConfig2,
                responseType: defaultToConfig2,
                xsrfCookieName: defaultToConfig2,
                xsrfHeaderName: defaultToConfig2,
                onUploadProgress: defaultToConfig2,
                onDownloadProgress: defaultToConfig2,
                decompress: defaultToConfig2,
                maxContentLength: defaultToConfig2,
                maxBodyLength: defaultToConfig2,
                beforeRedirect: defaultToConfig2,
                transport: defaultToConfig2,
                httpAgent: defaultToConfig2,
                httpsAgent: defaultToConfig2,
                cancelToken: defaultToConfig2,
                socketPath: defaultToConfig2,
                responseEncoding: defaultToConfig2,
                validateStatus: mergeDirectKeys,
                headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
            };
            utils.forEach(Object.keys(Object.assign({}, config1, config2)), (function computeConfigValue(prop) {
                const merge = mergeMap[prop] || mergeDeepProperties;
                const configValue = merge(config1[prop], config2[prop], prop);
                utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
            }));
            return config;
        }
        const resolveConfig = config => {
            const newConfig = mergeConfig({}, config);
            let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;
            newConfig.headers = headers = core_AxiosHeaders.from(headers);
            newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
            if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? unescape(encodeURIComponent(auth.password)) : "")));
            let contentType;
            if (utils.isFormData(data)) if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) headers.setContentType(void 0); else if ((contentType = headers.getContentType()) !== false) {
                const [type, ...tokens] = contentType ? contentType.split(";").map((token => token.trim())).filter(Boolean) : [];
                headers.setContentType([ type || "multipart/form-data", ...tokens ].join("; "));
            }
            if (platform.hasStandardBrowserEnv) {
                withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
                if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin(newConfig.url)) {
                    const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
                    if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
                }
            }
            return newConfig;
        };
        const isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
        const xhr = isXHRAdapterSupported && function(config) {
            return new Promise((function dispatchXhrRequest(resolve, reject) {
                const _config = resolveConfig(config);
                let requestData = _config.data;
                const requestHeaders = core_AxiosHeaders.from(_config.headers).normalize();
                let {responseType} = _config;
                let onCanceled;
                function done() {
                    if (_config.cancelToken) _config.cancelToken.unsubscribe(onCanceled);
                    if (_config.signal) _config.signal.removeEventListener("abort", onCanceled);
                }
                let request = new XMLHttpRequest;
                request.open(_config.method.toUpperCase(), _config.url, true);
                request.timeout = _config.timeout;
                function onloadend() {
                    if (!request) return;
                    const responseHeaders = core_AxiosHeaders.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
                    const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
                    const response = {
                        data: responseData,
                        status: request.status,
                        statusText: request.statusText,
                        headers: responseHeaders,
                        config,
                        request
                    };
                    settle((function _resolve(value) {
                        resolve(value);
                        done();
                    }), (function _reject(err) {
                        reject(err);
                        done();
                    }), response);
                    request = null;
                }
                if ("onloadend" in request) request.onloadend = onloadend; else request.onreadystatechange = function handleLoad() {
                    if (!request || request.readyState !== 4) return;
                    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
                    setTimeout(onloadend);
                };
                request.onabort = function handleAbort() {
                    if (!request) return;
                    reject(new core_AxiosError("Request aborted", core_AxiosError.ECONNABORTED, _config, request));
                    request = null;
                };
                request.onerror = function handleError() {
                    reject(new core_AxiosError("Network Error", core_AxiosError.ERR_NETWORK, _config, request));
                    request = null;
                };
                request.ontimeout = function handleTimeout() {
                    let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
                    const transitional = _config.transitional || defaults_transitional;
                    if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
                    reject(new core_AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED, _config, request));
                    request = null;
                };
                requestData === void 0 && requestHeaders.setContentType(null);
                if ("setRequestHeader" in request) utils.forEach(requestHeaders.toJSON(), (function setRequestHeader(val, key) {
                    request.setRequestHeader(key, val);
                }));
                if (!utils.isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
                if (responseType && responseType !== "json") request.responseType = _config.responseType;
                if (typeof _config.onDownloadProgress === "function") request.addEventListener("progress", progressEventReducer(_config.onDownloadProgress, true));
                if (typeof _config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", progressEventReducer(_config.onUploadProgress));
                if (_config.cancelToken || _config.signal) {
                    onCanceled = cancel => {
                        if (!request) return;
                        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
                        request.abort();
                        request = null;
                    };
                    _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
                    if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
                }
                const protocol = parseProtocol(_config.url);
                if (protocol && platform.protocols.indexOf(protocol) === -1) {
                    reject(new core_AxiosError("Unsupported protocol " + protocol + ":", core_AxiosError.ERR_BAD_REQUEST, config));
                    return;
                }
                request.send(requestData || null);
            }));
        };
        const composeSignals = (signals, timeout) => {
            let controller = new AbortController;
            let aborted;
            const onabort = function(cancel) {
                if (!aborted) {
                    aborted = true;
                    unsubscribe();
                    const err = cancel instanceof Error ? cancel : this.reason;
                    controller.abort(err instanceof core_AxiosError ? err : new cancel_CanceledError(err instanceof Error ? err.message : err));
                }
            };
            let timer = timeout && setTimeout((() => {
                onabort(new core_AxiosError(`timeout ${timeout} of ms exceeded`, core_AxiosError.ETIMEDOUT));
            }), timeout);
            const unsubscribe = () => {
                if (signals) {
                    timer && clearTimeout(timer);
                    timer = null;
                    signals.forEach((signal => {
                        signal && (signal.removeEventListener ? signal.removeEventListener("abort", onabort) : signal.unsubscribe(onabort));
                    }));
                    signals = null;
                }
            };
            signals.forEach((signal => signal && signal.addEventListener && signal.addEventListener("abort", onabort)));
            const {signal} = controller;
            signal.unsubscribe = unsubscribe;
            return [ signal, () => {
                timer && clearTimeout(timer);
                timer = null;
            } ];
        };
        const helpers_composeSignals = composeSignals;
        const streamChunk = function*(chunk, chunkSize) {
            let len = chunk.byteLength;
            if (!chunkSize || len < chunkSize) {
                yield chunk;
                return;
            }
            let pos = 0;
            let end;
            while (pos < len) {
                end = pos + chunkSize;
                yield chunk.slice(pos, end);
                pos = end;
            }
        };
        const readBytes = async function*(iterable, chunkSize, encode) {
            for await (const chunk of iterable) yield* streamChunk(ArrayBuffer.isView(chunk) ? chunk : await encode(String(chunk)), chunkSize);
        };
        const trackStream = (stream, chunkSize, onProgress, onFinish, encode) => {
            const iterator = readBytes(stream, chunkSize, encode);
            let bytes = 0;
            return new ReadableStream({
                type: "bytes",
                async pull(controller) {
                    const {done, value} = await iterator.next();
                    if (done) {
                        controller.close();
                        onFinish();
                        return;
                    }
                    let len = value.byteLength;
                    onProgress && onProgress(bytes += len);
                    controller.enqueue(new Uint8Array(value));
                },
                cancel(reason) {
                    onFinish(reason);
                    return iterator.return();
                }
            }, {
                highWaterMark: 2
            });
        };
        const fetchProgressDecorator = (total, fn) => {
            const lengthComputable = total != null;
            return loaded => setTimeout((() => fn({
                lengthComputable,
                total,
                loaded
            })));
        };
        const isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
        const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
        const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? (encoder => str => encoder.encode(str))(new TextEncoder) : async str => new Uint8Array(await new Response(str).arrayBuffer()));
        const supportsRequestStream = isReadableStreamSupported && (() => {
            let duplexAccessed = false;
            const hasContentType = new Request(platform.origin, {
                body: new ReadableStream,
                method: "POST",
                get duplex() {
                    duplexAccessed = true;
                    return "half";
                }
            }).headers.has("Content-Type");
            return duplexAccessed && !hasContentType;
        })();
        const DEFAULT_CHUNK_SIZE = 64 * 1024;
        const supportsResponseStream = isReadableStreamSupported && !!(() => {
            try {
                return utils.isReadableStream(new Response("").body);
            } catch (err) {}
        })();
        const resolvers = {
            stream: supportsResponseStream && (res => res.body)
        };
        isFetchSupported && (res => {
            [ "text", "arrayBuffer", "blob", "formData", "stream" ].forEach((type => {
                !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? res => res[type]() : (_, config) => {
                    throw new core_AxiosError(`Response type '${type}' is not supported`, core_AxiosError.ERR_NOT_SUPPORT, config);
                });
            }));
        })(new Response);
        const getBodyLength = async body => {
            if (body == null) return 0;
            if (utils.isBlob(body)) return body.size;
            if (utils.isSpecCompliantForm(body)) return (await new Request(body).arrayBuffer()).byteLength;
            if (utils.isArrayBufferView(body)) return body.byteLength;
            if (utils.isURLSearchParams(body)) body += "";
            if (utils.isString(body)) return (await encodeText(body)).byteLength;
        };
        const resolveBodyLength = async (headers, body) => {
            const length = utils.toFiniteNumber(headers.getContentLength());
            return length == null ? getBodyLength(body) : length;
        };
        const adapters_fetch = isFetchSupported && (async config => {
            let {url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions} = resolveConfig(config);
            responseType = responseType ? (responseType + "").toLowerCase() : "text";
            let [composedSignal, stopTimeout] = signal || cancelToken || timeout ? helpers_composeSignals([ signal, cancelToken ], timeout) : [];
            let finished, request;
            const onFinish = () => {
                !finished && setTimeout((() => {
                    composedSignal && composedSignal.unsubscribe();
                }));
                finished = true;
            };
            let requestContentLength;
            try {
                if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
                    let _request = new Request(url, {
                        method: "POST",
                        body: data,
                        duplex: "half"
                    });
                    let contentTypeHeader;
                    if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
                    if (_request.body) data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, fetchProgressDecorator(requestContentLength, progressEventReducer(onUploadProgress)), null, encodeText);
                }
                if (!utils.isString(withCredentials)) withCredentials = withCredentials ? "cors" : "omit";
                request = new Request(url, {
                    ...fetchOptions,
                    signal: composedSignal,
                    method: method.toUpperCase(),
                    headers: headers.normalize().toJSON(),
                    body: data,
                    duplex: "half",
                    withCredentials
                });
                let response = await fetch(request);
                const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
                if (supportsResponseStream && (onDownloadProgress || isStreamResponse)) {
                    const options = {};
                    [ "status", "statusText", "headers" ].forEach((prop => {
                        options[prop] = response[prop];
                    }));
                    const responseContentLength = utils.toFiniteNumber(response.headers.get("content-length"));
                    response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onDownloadProgress && fetchProgressDecorator(responseContentLength, progressEventReducer(onDownloadProgress, true)), isStreamResponse && onFinish, encodeText), options);
                }
                responseType = responseType || "text";
                let responseData = await resolvers[utils.findKey(resolvers, responseType) || "text"](response, config);
                !isStreamResponse && onFinish();
                stopTimeout && stopTimeout();
                return await new Promise(((resolve, reject) => {
                    settle(resolve, reject, {
                        data: responseData,
                        headers: core_AxiosHeaders.from(response.headers),
                        status: response.status,
                        statusText: response.statusText,
                        config,
                        request
                    });
                }));
            } catch (err) {
                onFinish();
                if (err && err.name === "TypeError" && /fetch/i.test(err.message)) throw Object.assign(new core_AxiosError("Network Error", core_AxiosError.ERR_NETWORK, config, request), {
                    cause: err.cause || err
                });
                throw core_AxiosError.from(err, err && err.code, config, request);
            }
        });
        const knownAdapters = {
            http: helpers_null,
            xhr,
            fetch: adapters_fetch
        };
        utils.forEach(knownAdapters, ((fn, value) => {
            if (fn) {
                try {
                    Object.defineProperty(fn, "name", {
                        value
                    });
                } catch (e) {}
                Object.defineProperty(fn, "adapterName", {
                    value
                });
            }
        }));
        const renderReason = reason => `- ${reason}`;
        const isResolvedHandle = adapter => utils.isFunction(adapter) || adapter === null || adapter === false;
        const adapters = {
            getAdapter: adapters => {
                adapters = utils.isArray(adapters) ? adapters : [ adapters ];
                const {length} = adapters;
                let nameOrAdapter;
                let adapter;
                const rejectedReasons = {};
                for (let i = 0; i < length; i++) {
                    nameOrAdapter = adapters[i];
                    let id;
                    adapter = nameOrAdapter;
                    if (!isResolvedHandle(nameOrAdapter)) {
                        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
                        if (adapter === void 0) throw new core_AxiosError(`Unknown adapter '${id}'`);
                    }
                    if (adapter) break;
                    rejectedReasons[id || "#" + i] = adapter;
                }
                if (!adapter) {
                    const reasons = Object.entries(rejectedReasons).map((([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")));
                    let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
                    throw new core_AxiosError(`There is no suitable adapter to dispatch the request ` + s, "ERR_NOT_SUPPORT");
                }
                return adapter;
            },
            adapters: knownAdapters
        };
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) config.cancelToken.throwIfRequested();
            if (config.signal && config.signal.aborted) throw new cancel_CanceledError(null, config);
        }
        function dispatchRequest(config) {
            throwIfCancellationRequested(config);
            config.headers = core_AxiosHeaders.from(config.headers);
            config.data = transformData.call(config, config.transformRequest);
            if ([ "post", "put", "patch" ].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
            const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);
            return adapter(config).then((function onAdapterResolution(response) {
                throwIfCancellationRequested(config);
                response.data = transformData.call(config, config.transformResponse, response);
                response.headers = core_AxiosHeaders.from(response.headers);
                return response;
            }), (function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);
                    if (reason && reason.response) {
                        reason.response.data = transformData.call(config, config.transformResponse, reason.response);
                        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
                    }
                }
                return Promise.reject(reason);
            }));
        }
        const VERSION = "1.7.2";
        const validators = {};
        [ "object", "boolean", "number", "function", "string", "symbol" ].forEach(((type, i) => {
            validators[type] = function validator(thing) {
                return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
            };
        }));
        const deprecatedWarnings = {};
        validators.transitional = function transitional(validator, version, message) {
            function formatMessage(opt, desc) {
                return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
            }
            return (value, opt, opts) => {
                if (validator === false) throw new core_AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), core_AxiosError.ERR_DEPRECATED);
                if (version && !deprecatedWarnings[opt]) {
                    deprecatedWarnings[opt] = true;
                    console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
                }
                return validator ? validator(value, opt, opts) : true;
            };
        };
        function assertOptions(options, schema, allowUnknown) {
            if (typeof options !== "object") throw new core_AxiosError("options must be an object", core_AxiosError.ERR_BAD_OPTION_VALUE);
            const keys = Object.keys(options);
            let i = keys.length;
            while (i-- > 0) {
                const opt = keys[i];
                const validator = schema[opt];
                if (validator) {
                    const value = options[opt];
                    const result = value === void 0 || validator(value, opt, options);
                    if (result !== true) throw new core_AxiosError("option " + opt + " must be " + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
                    continue;
                }
                if (allowUnknown !== true) throw new core_AxiosError("Unknown option " + opt, core_AxiosError.ERR_BAD_OPTION);
            }
        }
        const validator = {
            assertOptions,
            validators
        };
        const Axios_validators = validator.validators;
        class Axios {
            constructor(instanceConfig) {
                this.defaults = instanceConfig;
                this.interceptors = {
                    request: new core_InterceptorManager,
                    response: new core_InterceptorManager
                };
            }
            async request(configOrUrl, config) {
                try {
                    return await this._request(configOrUrl, config);
                } catch (err) {
                    if (err instanceof Error) {
                        let dummy;
                        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error;
                        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
                        try {
                            if (!err.stack) err.stack = stack; else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) err.stack += "\n" + stack;
                        } catch (e) {}
                    }
                    throw err;
                }
            }
            _request(configOrUrl, config) {
                if (typeof configOrUrl === "string") {
                    config = config || {};
                    config.url = configOrUrl;
                } else config = configOrUrl || {};
                config = mergeConfig(this.defaults, config);
                const {transitional, paramsSerializer, headers} = config;
                if (transitional !== void 0) validator.assertOptions(transitional, {
                    silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
                    clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
                }, false);
                if (paramsSerializer != null) if (utils.isFunction(paramsSerializer)) config.paramsSerializer = {
                    serialize: paramsSerializer
                }; else validator.assertOptions(paramsSerializer, {
                    encode: Axios_validators.function,
                    serialize: Axios_validators.function
                }, true);
                config.method = (config.method || this.defaults.method || "get").toLowerCase();
                let contextHeaders = headers && utils.merge(headers.common, headers[config.method]);
                headers && utils.forEach([ "delete", "get", "head", "post", "put", "patch", "common" ], (method => {
                    delete headers[method];
                }));
                config.headers = core_AxiosHeaders.concat(contextHeaders, headers);
                const requestInterceptorChain = [];
                let synchronousRequestInterceptors = true;
                this.interceptors.request.forEach((function unshiftRequestInterceptors(interceptor) {
                    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
                    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
                    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
                }));
                const responseInterceptorChain = [];
                this.interceptors.response.forEach((function pushResponseInterceptors(interceptor) {
                    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
                }));
                let promise;
                let i = 0;
                let len;
                if (!synchronousRequestInterceptors) {
                    const chain = [ dispatchRequest.bind(this), void 0 ];
                    chain.unshift.apply(chain, requestInterceptorChain);
                    chain.push.apply(chain, responseInterceptorChain);
                    len = chain.length;
                    promise = Promise.resolve(config);
                    while (i < len) promise = promise.then(chain[i++], chain[i++]);
                    return promise;
                }
                len = requestInterceptorChain.length;
                let newConfig = config;
                i = 0;
                while (i < len) {
                    const onFulfilled = requestInterceptorChain[i++];
                    const onRejected = requestInterceptorChain[i++];
                    try {
                        newConfig = onFulfilled(newConfig);
                    } catch (error) {
                        onRejected.call(this, error);
                        break;
                    }
                }
                try {
                    promise = dispatchRequest.call(this, newConfig);
                } catch (error) {
                    return Promise.reject(error);
                }
                i = 0;
                len = responseInterceptorChain.length;
                while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
                return promise;
            }
            getUri(config) {
                config = mergeConfig(this.defaults, config);
                const fullPath = buildFullPath(config.baseURL, config.url);
                return buildURL(fullPath, config.params, config.paramsSerializer);
            }
        }
        utils.forEach([ "delete", "get", "head", "options" ], (function forEachMethodNoData(method) {
            Axios.prototype[method] = function(url, config) {
                return this.request(mergeConfig(config || {}, {
                    method,
                    url,
                    data: (config || {}).data
                }));
            };
        }));
        utils.forEach([ "post", "put", "patch" ], (function forEachMethodWithData(method) {
            function generateHTTPMethod(isForm) {
                return function httpMethod(url, data, config) {
                    return this.request(mergeConfig(config || {}, {
                        method,
                        headers: isForm ? {
                            "Content-Type": "multipart/form-data"
                        } : {},
                        url,
                        data
                    }));
                };
            }
            Axios.prototype[method] = generateHTTPMethod();
            Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        }));
        const core_Axios = Axios;
        class CancelToken {
            constructor(executor) {
                if (typeof executor !== "function") throw new TypeError("executor must be a function.");
                let resolvePromise;
                this.promise = new Promise((function promiseExecutor(resolve) {
                    resolvePromise = resolve;
                }));
                const token = this;
                this.promise.then((cancel => {
                    if (!token._listeners) return;
                    let i = token._listeners.length;
                    while (i-- > 0) token._listeners[i](cancel);
                    token._listeners = null;
                }));
                this.promise.then = onfulfilled => {
                    let _resolve;
                    const promise = new Promise((resolve => {
                        token.subscribe(resolve);
                        _resolve = resolve;
                    })).then(onfulfilled);
                    promise.cancel = function reject() {
                        token.unsubscribe(_resolve);
                    };
                    return promise;
                };
                executor((function cancel(message, config, request) {
                    if (token.reason) return;
                    token.reason = new cancel_CanceledError(message, config, request);
                    resolvePromise(token.reason);
                }));
            }
            throwIfRequested() {
                if (this.reason) throw this.reason;
            }
            subscribe(listener) {
                if (this.reason) {
                    listener(this.reason);
                    return;
                }
                if (this._listeners) this._listeners.push(listener); else this._listeners = [ listener ];
            }
            unsubscribe(listener) {
                if (!this._listeners) return;
                const index = this._listeners.indexOf(listener);
                if (index !== -1) this._listeners.splice(index, 1);
            }
            static source() {
                let cancel;
                const token = new CancelToken((function executor(c) {
                    cancel = c;
                }));
                return {
                    token,
                    cancel
                };
            }
        }
        const cancel_CancelToken = CancelToken;
        function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        }
        function isAxiosError(payload) {
            return utils.isObject(payload) && payload.isAxiosError === true;
        }
        const HttpStatusCode = {
            Continue: 100,
            SwitchingProtocols: 101,
            Processing: 102,
            EarlyHints: 103,
            Ok: 200,
            Created: 201,
            Accepted: 202,
            NonAuthoritativeInformation: 203,
            NoContent: 204,
            ResetContent: 205,
            PartialContent: 206,
            MultiStatus: 207,
            AlreadyReported: 208,
            ImUsed: 226,
            MultipleChoices: 300,
            MovedPermanently: 301,
            Found: 302,
            SeeOther: 303,
            NotModified: 304,
            UseProxy: 305,
            Unused: 306,
            TemporaryRedirect: 307,
            PermanentRedirect: 308,
            BadRequest: 400,
            Unauthorized: 401,
            PaymentRequired: 402,
            Forbidden: 403,
            NotFound: 404,
            MethodNotAllowed: 405,
            NotAcceptable: 406,
            ProxyAuthenticationRequired: 407,
            RequestTimeout: 408,
            Conflict: 409,
            Gone: 410,
            LengthRequired: 411,
            PreconditionFailed: 412,
            PayloadTooLarge: 413,
            UriTooLong: 414,
            UnsupportedMediaType: 415,
            RangeNotSatisfiable: 416,
            ExpectationFailed: 417,
            ImATeapot: 418,
            MisdirectedRequest: 421,
            UnprocessableEntity: 422,
            Locked: 423,
            FailedDependency: 424,
            TooEarly: 425,
            UpgradeRequired: 426,
            PreconditionRequired: 428,
            TooManyRequests: 429,
            RequestHeaderFieldsTooLarge: 431,
            UnavailableForLegalReasons: 451,
            InternalServerError: 500,
            NotImplemented: 501,
            BadGateway: 502,
            ServiceUnavailable: 503,
            GatewayTimeout: 504,
            HttpVersionNotSupported: 505,
            VariantAlsoNegotiates: 506,
            InsufficientStorage: 507,
            LoopDetected: 508,
            NotExtended: 510,
            NetworkAuthenticationRequired: 511
        };
        Object.entries(HttpStatusCode).forEach((([key, value]) => {
            HttpStatusCode[value] = key;
        }));
        const helpers_HttpStatusCode = HttpStatusCode;
        function createInstance(defaultConfig) {
            const context = new core_Axios(defaultConfig);
            const instance = bind(core_Axios.prototype.request, context);
            utils.extend(instance, core_Axios.prototype, context, {
                allOwnKeys: true
            });
            utils.extend(instance, context, null, {
                allOwnKeys: true
            });
            instance.create = function create(instanceConfig) {
                return createInstance(mergeConfig(defaultConfig, instanceConfig));
            };
            return instance;
        }
        const axios = createInstance(lib_defaults);
        axios.Axios = core_Axios;
        axios.CanceledError = cancel_CanceledError;
        axios.CancelToken = cancel_CancelToken;
        axios.isCancel = isCancel;
        axios.VERSION = VERSION;
        axios.toFormData = helpers_toFormData;
        axios.AxiosError = core_AxiosError;
        axios.Cancel = axios.CanceledError;
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = spread;
        axios.isAxiosError = isAxiosError;
        axios.mergeConfig = mergeConfig;
        axios.AxiosHeaders = core_AxiosHeaders;
        axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);
        axios.getAdapter = adapters.getAdapter;
        axios.HttpStatusCode = helpers_HttpStatusCode;
        axios.default = axios;
        const lib_axios = axios;
        const delay = ms => new Promise((resolve => setTimeout(resolve, ms)));
        function Driwer({onClose, onRemove, itemsCart = [], opened}) {
            const [orderId, setOrderId] = (0, react.useState)(null);
            const [isOrderComplite, setisOrderComplite] = (0, react.useState)(false);
            const [isLoading, setisLoading] = (0, react.useState)(false);
            const {cartItems, setCartItems, totalPrice} = useCart();
            const onClickOrder = async () => {
                try {
                    setisLoading(true);
                    const {data} = await lib_axios.post("https://666020395425580055b251b6.mockapi.io/Orders", {
                        items: cartItems
                    });
                    setOrderId(data.id);
                    setisOrderComplite(true);
                    setCartItems([]);
                    for (let i = 0; i < cartItems.length; i++) {
                        console.log(1);
                        const element = cartItems[i];
                        await lib_axios.delete("https://6659f9acde346625136ea097.mockapi.io/Cart/" + element.id);
                        await delay(1e3);
                    }
                } catch (error) {
                    alert("Ошибка при создании заказа :(");
                    console.log(error);
                }
                setisLoading(false);
            };
            return react.createElement("div", {
                className: `overlay ${opened ? "driwer-open" : ""}`
            }, react.createElement("div", {
                className: "driwer"
            }, react.createElement("div", {
                className: "driwer__top"
            }, react.createElement("h3", {
                className: "driwer__title"
            }, "Корзина"), react.createElement("div", {
                onClick: onClose,
                className: "driwer__close"
            }, react.createElement("img", {
                src: "img/close.svg",
                alt: ""
            }))), itemsCart.length > 0 ? react.createElement(react.Fragment, null, react.createElement("ul", {
                className: "driwer__list"
            }, itemsCart.map((obj => react.createElement("li", {
                key: obj.id,
                className: "driwer__item"
            }, react.createElement("div", {
                className: "driwer__img"
            }, react.createElement("img", {
                src: obj.imageUrl,
                alt: ""
            })), react.createElement("div", {
                className: "driwer__content"
            }, react.createElement("h3", {
                className: "card__text"
            }, obj.title), react.createElement("span", {
                className: "actions-header__text"
            }, react.createElement("strong", null, obj.cost))), react.createElement("button", {
                onClick: () => onRemove(obj.id),
                className: "driwer__close"
            }, react.createElement("img", {
                src: "img/close.svg",
                alt: ""
            })))))), react.createElement("div", {
                className: "driwer__bottom bottom"
            }, react.createElement("div", {
                className: "bottom__body"
            }, react.createElement("div", {
                className: "bottom__cost"
            }, react.createElement("span", {
                className: "bottom__total"
            }, "Итого"), react.createElement("div", null), react.createElement("span", {
                className: "bottom__number"
            }, totalPrice, " руб.")), react.createElement("div", {
                className: "bottom__cost"
            }, react.createElement("span", {
                className: "bottom__total"
            }, "Налог 5%:"), react.createElement("div", null), react.createElement("span", {
                className: "bottom__number"
            }, totalPrice * .05, " руб."))), react.createElement("button", {
                disabled: isLoading,
                onClick: onClickOrder,
                className: "bottom__button"
            }, react.createElement("span", null, "Оформить заказ"), react.createElement("img", {
                src: "img/arrow-order.svg",
                alt: ""
            })))) : react.createElement(Info, {
                title: isOrderComplite ? "Заказ оформлен" : "Корзина пустая",
                description: isOrderComplite ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.",
                image: isOrderComplite ? "img/order-complite.jpg" : "img/cart-empty.png"
            })));
        }
        function Favorites_extends() {
            return Favorites_extends = Object.assign ? Object.assign.bind() : function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
            }, Favorites_extends.apply(null, arguments);
        }
        function Favorites({onAddToFavorite}) {
            const {favorites} = (0, react.useContext)(context);
            return react.createElement("main", null, react.createElement("section", {
                className: "page"
            }, react.createElement("div", {
                className: "page__container"
            }, react.createElement("div", {
                className: "page__top"
            }, react.createElement("h1", {
                className: "page__title"
            }, "Мои закладки")), react.createElement("div", {
                className: "page__body"
            }, favorites.map(((item, index) => react.createElement(Card, Favorites_extends({
                key: index,
                onFavorite: onAddToFavorite,
                onAddCart: obj => {
                    onAddToCart(obj);
                },
                favorited: true
            }, item))))))));
        }
        function Orders_extends() {
            return Orders_extends = Object.assign ? Object.assign.bind() : function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e];
                    for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
                }
                return n;
            }, Orders_extends.apply(null, arguments);
        }
        function Orders() {
            const {onAddToCart, onAddToFavorite} = (0, react.useContext)(context);
            const [orders, setOrders] = (0, react.useState)([]);
            const [isLoading, setisLoading] = (0, react.useState)(false);
            (0, react.useEffect)((() => {
                (async () => {
                    try {
                        setisLoading(true);
                        const {data} = await lib_axios.get("https://666020395425580055b251b6.mockapi.io/Orders");
                        setOrders(data.map((obj => obj.items)).flat());
                        setisLoading(false);
                    } catch (error) {
                        alert("Ошибка при запросе заказов");
                    }
                })();
            }), []);
            return react.createElement("main", null, react.createElement("section", {
                className: "page"
            }, react.createElement("div", {
                className: "page__container"
            }, react.createElement("div", {
                className: "page__top"
            }, react.createElement("h1", {
                className: "page__title"
            }, "Мои заказы")), react.createElement("div", {
                className: "page__body"
            }, (isLoading ? [ ...Array(8) ] : orders).map(((item, index) => react.createElement(Card, Orders_extends({
                key: index,
                onFavorite: obj => {
                    onAddToFavorite(obj);
                }
            }, item, {
                loading: isLoading
            }))))))));
        }
        const App = () => {
            const [cartItems, setCartItems] = (0, react.useState)([]);
            const [cartView, setCartView] = (0, react.useState)(false);
            const [items, setItems] = (0, react.useState)([]);
            const [searchValue, setSearchValue] = (0, react.useState)("");
            const [favorites, setFavorites] = (0, react.useState)([]);
            const [isLoading, setisLoading] = (0, react.useState)(false);
            (0, react.useEffect)((() => {
                async function fethData() {
                    try {
                        setisLoading(true);
                        const cartResp = await lib_axios.get("https://6659f9acde346625136ea097.mockapi.io/Cart");
                        const favoriteResp = await lib_axios.get("https://666020395425580055b251b6.mockapi.io/favorites");
                        const itemsResp = await lib_axios.get("https://6659f9acde346625136ea097.mockapi.io/Items");
                        setisLoading(false);
                        setCartItems(cartResp.data);
                        setFavorites(favoriteResp.data);
                        setItems(itemsResp.data);
                    } catch (error) {
                        alert("ошибка при запросе данных");
                        console.log(error);
                    }
                }
                fethData();
            }), []);
            const onAddToCart = async obj => {
                try {
                    const findItem = cartItems.find((cartobj => Number(cartobj.parendId) === Number(obj.id)));
                    if (findItem) {
                        setCartItems((prev => prev.filter((item => Number(item.parendId) !== Number(obj.id)))));
                        await lib_axios.delete(`https://6659f9acde346625136ea097.mockapi.io/Cart/${findItem.id}`);
                    } else {
                        setCartItems((prev => [ ...prev, obj ]));
                        const {data} = await lib_axios.post("https://6659f9acde346625136ea097.mockapi.io/Cart", obj);
                        setCartItems((prev => prev.map((item => {
                            if (item.parendId === data.parendId) return {
                                ...item,
                                id: data.id
                            };
                            return item;
                        }))));
                    }
                } catch (error) {
                    alert("ошибка при добавлении в корзину");
                    console.log(error);
                }
            };
            const onRemoveItem = async id => {
                try {
                    setCartItems((prev => prev.filter((item => Number(item.parendId) !== Number(id)))));
                    await lib_axios.delete(`https://6659f9acde346625136ea097.mockapi.io/Cart/${id}`);
                } catch (error) {
                    alert("ошибка при удалении из корзины");
                    console.log(error);
                }
            };
            const onChangeSearchInput = e => {
                setSearchValue(e.target.value);
            };
            const onAddToFavorite = async obj => {
                try {
                    if (favorites.find((favobj => Number(favobj.id) === Number(obj.id)))) {
                        await lib_axios.delete(`https://666020395425580055b251b6.mockapi.io/favorites/${obj.id}`);
                        setFavorites((prev => prev.filter((item => Number(item.id) !== Number(obj.id)))));
                    } else {
                        const {data} = await lib_axios.post("https://666020395425580055b251b6.mockapi.io/favorites", obj);
                        setFavorites((prev => [ ...prev, data ]));
                    }
                } catch (error) {
                    alert("Не удалось добавить в фавориты");
                }
            };
            const isItemAdded = id => cartItems.some((obj => Number(obj.parendId) === Number(id)));
            return react.createElement(context.Provider, {
                value: {
                    cartItems,
                    favorites,
                    items,
                    isItemAdded,
                    onAddToFavorite,
                    setCartView,
                    setCartItems,
                    onAddToCart
                }
            }, react.createElement(react.Fragment, null, react.createElement(Driwer, {
                itemsCart: cartItems,
                onClose: () => setCartView(false),
                onRemove: onRemoveItem,
                opened: cartView
            }), react.createElement(Header, {
                onview: () => setCartView(true)
            }), react.createElement(Routes, null, react.createElement(Route, {
                path: "",
                element: react.createElement(Home, {
                    items,
                    searchValue,
                    setSearchValue,
                    onAddToFavorite,
                    onChangeSearchInput,
                    onAddToCart,
                    cartItems,
                    isLoading
                })
            }), react.createElement(Route, {
                path: "favorites",
                element: react.createElement(Favorites, {
                    onAddToFavorite
                })
            }), react.createElement(Route, {
                path: "Orders",
                element: react.createElement(Orders, {
                    onAddToFavorite
                })
            }))));
        };
        const react_App = App;
        const root = document.querySelector("#root") ? document.querySelector("#root") : document.querySelector(".wrapper");
        client.createRoot(root).render(react.createElement(BrowserRouter, null, react.createElement(react_App, null)));
        let addWindowScrollEvent = false;
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        document.querySelector(".wrapper");
        window["FLS"] = true;
    })();
})();