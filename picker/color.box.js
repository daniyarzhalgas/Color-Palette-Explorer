!function(e, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.colorjoe = n()
}(this, function() {
    "use strict";
    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    function e(e, n) {
        return e(n = {
            exports: {}
        }, n.exports),
        n.exports
    }
    var p = e(function(e, n) {
        e.exports = function() {
            function r(e, n) {
                e ? (t(e, n, "touchstart", "touchmove", "touchend"),
                t(e, n, "mousedown", "mousemove", "mouseup")) : console.warn("drag is missing elem!")
            }
            return r.xyslider = function(e) {
                var n = i(e.class || "", e.parent)
                  , t = i("pointer", n);
                return i("shape shape1", t),
                i("shape shape2", t),
                i("bg bg1", n),
                i("bg bg2", n),
                r(n, a(e.cbs, t)),
                {
                    background: n,
                    pointer: t
                }
            }
            ,
            r.slider = function(e) {
                var n = i(e.class, e.parent)
                  , t = i("pointer", n);
                return i("shape", t),
                i("bg", n),
                r(n, a(e.cbs, t)),
                {
                    background: n,
                    pointer: t
                }
            }
            ,
            r;
            function a(e, t) {
                var n = {};
                for (var r in e)
                    n[r] = a(e[r]);
                function a(n) {
                    return function(e) {
                        e.pointer = t,
                        n(e)
                    }
                }
                return n
            }
            function i(e, n) {
                return t = "div",
                r = e,
                a = n,
                i = document.createElement(t),
                r && (i.className = r),
                a.appendChild(i),
                i;
                var t, r, a, i
            }
            function t(r, e, n, a, i) {
                var t, o, u, s = (e = (t = e) ? {
                    begin: t.begin || p,
                    change: t.change || p,
                    end: t.end || p
                } : {
                    begin: function(e) {
                        o = {
                            x: e.elem.offsetLeft,
                            y: e.elem.offsetTop
                        },
                        u = e.cursor
                    },
                    change: function(e) {
                        d(e.elem, "left", o.x + e.cursor.x - u.x + "px"),
                        d(e.elem, "top", o.y + e.cursor.y - u.y + "px")
                    },
                    end: p
                }).begin, l = e.change, f = e.end;
                c(r, n, function(n) {
                    var t = function(e) {
                        var n = Array.prototype.slice
                          , t = n.apply(arguments, [1]);
                        return function() {
                            return e.apply(null, t.concat(n.apply(arguments)))
                        }
                    }(g, l, r);
                    c(document, a, t),
                    c(document, i, function e() {
                        h(document, a, t),
                        h(document, i, e),
                        g(f, r, n)
                    }),
                    g(s, r, n)
                })
            }
            function c(e, n, t) {
                var r = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            r = !0
                        }
                    });
                    window.addEventListener("testPassive", null, a),
                    window.removeEventListener("testPassive", null, a)
                } catch (e) {}
                e.addEventListener(n, t, !!r && {
                    passive: !1
                })
            }
            function h(e, n, t) {
                e.removeEventListener(n, t, !1)
            }
            function d(e, n, t) {
                e.style[n] = t
            }
            function p() {}
            function g(e, n, t) {
                t.preventDefault();
                var r, a, i, o = {
                    x: (r = n.getBoundingClientRect()).left,
                    y: r.top
                }, u = n.clientWidth, s = n.clientHeight, l = {
                    x: (i = t,
                    (i.touches ? i.touches[i.touches.length - 1] : i).clientX),
                    y: (a = t,
                    (a.touches ? a.touches[a.touches.length - 1] : a).clientY)
                }, f = (l.x - o.x) / u, c = (l.y - o.y) / s;
                e({
                    x: isNaN(f) ? 0 : f,
                    y: isNaN(c) ? 0 : c,
                    cursor: l,
                    elem: n,
                    e: t
                })
            }
        }()
    })
      , o = e(function(e, n) {
        e.exports = function() {
            function c(e) {
                if (Array.isArray(e)) {
                    if ("string" == typeof e[0] && "function" == typeof c[e[0]])
                        return new c[e[0]](e.slice(1, e.length));
                    if (4 === e.length)
                        return new c.RGB(e[0] / 255,e[1] / 255,e[2] / 255,e[3] / 255)
                } else if ("string" == typeof e) {
                    var n = e.toLowerCase();
                    c.namedColors[n] && (e = "#" + c.namedColors[n]),
                    "transparent" === n && (e = "rgba(0,0,0,0)");
                    var t = e.match(p);
                    if (t) {
                        var r = t[1].toUpperCase()
                          , a = h(t[8]) ? t[8] : parseFloat(t[8])
                          , i = "H" === r[0]
                          , o = t[3] ? 100 : i ? 360 : 255
                          , u = t[5] || i ? 100 : 255
                          , s = t[7] || i ? 100 : 255;
                        if (h(c[r]))
                            throw new Error("color." + r + " is not installed.");
                        return new c[r](parseFloat(t[2]) / o,parseFloat(t[4]) / u,parseFloat(t[6]) / s,a)
                    }
                    e.length < 6 && (e = e.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3"));
                    var l = e.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
                    if (l)
                        return new c.RGB(parseInt(l[1], 16) / 255,parseInt(l[2], 16) / 255,parseInt(l[3], 16) / 255);
                    if (c.CMYK) {
                        var f = e.match(new RegExp("^cmyk\\(" + d.source + "," + d.source + "," + d.source + "," + d.source + "\\)$","i"));
                        if (f)
                            return new c.CMYK(parseFloat(f[1]) / 100,parseFloat(f[2]) / 100,parseFloat(f[3]) / 100,parseFloat(f[4]) / 100)
                    }
                } else if ("object" == typeof e && e.isColor)
                    return e;
                return !1
            }
            var u = []
              , h = function(e) {
                return void 0 === e
            }
              , e = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/
              , d = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/
              , p = new RegExp("^(rgb|hsl|hsv)a?\\(" + e.source + "," + e.source + "," + e.source + "(?:," + /\s*(\.\d+|\d+(?:\.\d+)?)\s*/.source + ")?\\)$","i");
            c.namedColors = {},
            c.installColorSpace = function(a, i, e) {
                function n(e, r) {
                    var n = {};
                    for (var t in n[r.toLowerCase()] = function() {
                        return this.rgb()[r.toLowerCase()]()
                    }
                    ,
                    c[r].propertyNames.forEach(function(t) {
                        var e = "black" === t ? "k" : t.charAt(0);
                        n[t] = n[e] = function(e, n) {
                            return this[r.toLowerCase()]()[t](e, n)
                        }
                    }),
                    n)
                        n.hasOwnProperty(t) && void 0 === c[e].prototype[t] && (c[e].prototype[t] = n[t])
                }
                (c[a] = function(e) {
                    var r = Array.isArray(e) ? e : arguments;
                    i.forEach(function(e, n) {
                        var t = r[n];
                        if ("alpha" === e)
                            this._alpha = isNaN(t) || 1 < t ? 1 : t < 0 ? 0 : t;
                        else {
                            if (isNaN(t))
                                throw new Error("[" + a + "]: Invalid color: (" + i.join(",") + ")");
                            "hue" === e ? this._hue = t < 0 ? t - Math.floor(t) : t % 1 : this["_" + e] = t < 0 ? 0 : 1 < t ? 1 : t
                        }
                    }, this)
                }
                ).propertyNames = i;
                var r = c[a].prototype;
                for (var t in ["valueOf", "hex", "hexa", "css", "cssa"].forEach(function(e) {
                    r[e] = r[e] || ("RGB" === a ? r.hex : function() {
                        return this.rgb()[e]()
                    }
                    )
                }),
                r.isColor = !0,
                r.equals = function(e, n) {
                    h(n) && (n = 1e-10),
                    e = e[a.toLowerCase()]();
                    for (var t = 0; t < i.length; t += 1)
                        if (Math.abs(this["_" + i[t]] - e["_" + i[t]]) > n)
                            return !1;
                    return !0
                }
                ,
                r.toJSON = function() {
                    return [a].concat(i.map(function(e) {
                        return this["_" + e]
                    }, this))
                }
                ,
                e)
                    if (e.hasOwnProperty(t)) {
                        var o = t.match(/^from(.*)$/);
                        o ? c[o[1].toUpperCase()].prototype[a.toLowerCase()] = e[t] : r[t] = e[t]
                    }
                return r[a.toLowerCase()] = function() {
                    return this
                }
                ,
                r.toString = function() {
                    return "[" + a + " " + i.map(function(e) {
                        return this["_" + e]
                    }, this).join(", ") + "]"
                }
                ,
                i.forEach(function(t) {
                    var e = "black" === t ? "k" : t.charAt(0);
                    r[t] = r[e] = function(n, e) {
                        return void 0 === n ? this["_" + t] : e ? new this.constructor(i.map(function(e) {
                            return this["_" + e] + (t === e ? n : 0)
                        }, this)) : new this.constructor(i.map(function(e) {
                            return t === e ? n : this["_" + e]
                        }, this))
                    }
                }),
                u.forEach(function(e) {
                    n(a, e),
                    n(e, a)
                }),
                u.push(a),
                c
            }
            ,
            c.pluginList = [],
            c.use = function(e) {
                return -1 === c.pluginList.indexOf(e) && (this.pluginList.push(e),
                e(c)),
                c
            }
            ,
            c.installMethod = function(n, t) {
                return u.forEach(function(e) {
                    c[e].prototype[n] = t
                }),
                this
            }
            ,
            c.installColorSpace("RGB", ["red", "green", "blue", "alpha"], {
                hex: function() {
                    var e = (65536 * Math.round(255 * this._red) + 256 * Math.round(255 * this._green) + Math.round(255 * this._blue)).toString(16);
                    return "#" + "00000".substr(0, 6 - e.length) + e
                },
                hexa: function() {
                    var e = Math.round(255 * this._alpha).toString(16);
                    return "#" + "00".substr(0, 2 - e.length) + e + this.hex().substr(1, 6)
                },
                css: function() {
                    return "rgb(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + ")"
                },
                cssa: function() {
                    return "rgba(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + "," + this._alpha + ")"
                }
            });
            var n = function(a) {
                a.installColorSpace("XYZ", ["x", "y", "z", "alpha"], {
                    fromRgb: function() {
                        var e = function(e) {
                            return .04045 < e ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92
                        }
                          , n = e(this._red)
                          , t = e(this._green)
                          , r = e(this._blue);
                        return new a.XYZ(.4124564 * n + .3575761 * t + .1804375 * r,.2126729 * n + .7151522 * t + .072175 * r,.0193339 * n + .119192 * t + .9503041 * r,this._alpha)
                    },
                    rgb: function() {
                        var e = this._x
                          , n = this._y
                          , t = this._z
                          , r = function(e) {
                            return .0031308 < e ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e
                        };
                        return new a.RGB(r(3.2404542 * e + -1.5371385 * n + -.4985314 * t),r(-.969266 * e + 1.8760108 * n + .041556 * t),r(.0556434 * e + -.2040259 * n + 1.0572252 * t),this._alpha)
                    },
                    lab: function() {
                        var e = function(e) {
                            return .008856 < e ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
                        }
                          , n = e(this._x / 95.047)
                          , t = e(this._y / 100)
                          , r = e(this._z / 108.883);
                        return new a.LAB(116 * t - 16,500 * (n - t),200 * (t - r),this._alpha)
                    }
                })
            }
              , t = function(c) {
                c.installColorSpace("HSV", ["hue", "saturation", "value", "alpha"], {
                    rgb: function() {
                        var e, n, t, r = this._hue, a = this._saturation, i = this._value, o = Math.min(5, Math.floor(6 * r)), u = 6 * r - o, s = i * (1 - a), l = i * (1 - u * a), f = i * (1 - (1 - u) * a);
                        switch (o) {
                        case 0:
                            e = i,
                            n = f,
                            t = s;
                            break;
                        case 1:
                            e = l,
                            n = i,
                            t = s;
                            break;
                        case 2:
                            e = s,
                            n = i,
                            t = f;
                            break;
                        case 3:
                            e = s,
                            n = l,
                            t = i;
                            break;
                        case 4:
                            e = f,
                            n = s,
                            t = i;
                            break;
                        case 5:
                            e = i,
                            n = s,
                            t = l
                        }
                        return new c.RGB(e,n,t,this._alpha)
                    },
                    hsl: function() {
                        var e, n = (2 - this._saturation) * this._value, t = this._saturation * this._value, r = n <= 1 ? n : 2 - n;
                        return e = r < 1e-9 ? 0 : t / r,
                        new c.HSL(this._hue,e,n / 2,this._alpha)
                    },
                    fromRgb: function() {
                        var e, n = this._red, t = this._green, r = this._blue, a = Math.max(n, t, r), i = Math.min(n, t, r), o = a - i, u = 0 === a ? 0 : o / a, s = a;
                        if (0 === o)
                            e = 0;
                        else
                            switch (a) {
                            case n:
                                e = (t - r) / o / 6 + (t < r ? 1 : 0);
                                break;
                            case t:
                                e = (r - n) / o / 6 + 1 / 3;
                                break;
                            case r:
                                e = (n - t) / o / 6 + 2 / 3
                            }
                        return new c.HSV(e,u,s,this._alpha)
                    }
                })
            }
              , r = function(r) {
                r.use(t),
                r.installColorSpace("HSL", ["hue", "saturation", "lightness", "alpha"], {
                    hsv: function() {
                        var e, n = 2 * this._lightness, t = this._saturation * (n <= 1 ? n : 2 - n);
                        return e = n + t < 1e-9 ? 0 : 2 * t / (n + t),
                        new r.HSV(this._hue,e,(n + t) / 2,this._alpha)
                    },
                    rgb: function() {
                        return this.hsv().rgb()
                    },
                    fromRgb: function() {
                        return this.hsv().hsl()
                    }
                })
            };
            return c.use(n).use(function(a) {
                a.use(n),
                a.installColorSpace("LAB", ["l", "a", "b", "alpha"], {
                    fromRgb: function() {
                        return this.xyz().lab()
                    },
                    rgb: function() {
                        return this.xyz().rgb()
                    },
                    xyz: function() {
                        var e = function(e) {
                            var n = Math.pow(e, 3);
                            return .008856 < n ? n : (e - 16 / 116) / 7.87
                        }
                          , n = (this._l + 16) / 116
                          , t = this._a / 500 + n
                          , r = n - this._b / 200;
                        return new a.XYZ(95.047 * e(t),100 * e(n),108.883 * e(r),this._alpha)
                    }
                })
            }).use(t).use(r).use(function(u) {
                u.installColorSpace("CMYK", ["cyan", "magenta", "yellow", "black", "alpha"], {
                    rgb: function() {
                        return new u.RGB(1 - this._cyan * (1 - this._black) - this._black,1 - this._magenta * (1 - this._black) - this._black,1 - this._yellow * (1 - this._black) - this._black,this._alpha)
                    },
                    fromRgb: function() {
                        var e = this._red
                          , n = this._green
                          , t = this._blue
                          , r = 1 - e
                          , a = 1 - n
                          , i = 1 - t
                          , o = 1;
                        return e || n || t ? (o = Math.min(r, Math.min(a, i)),
                        r = (r - o) / (1 - o),
                        a = (a - o) / (1 - o),
                        i = (i - o) / (1 - o)) : o = 1,
                        new u.CMYK(r,a,i,o,this._alpha)
                    }
                })
            }).use(function(e) {
                e.namedColors = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgrey: "a9a9a9",
                    darkgreen: "006400",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    grey: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgrey: "d3d3d3",
                    lightgreen: "90ee90",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370d8",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "d87093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "639",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                }
            }).use(function(e) {
                e.installMethod("clearer", function(e) {
                    return this.alpha(isNaN(e) ? -.1 : -e, !0)
                })
            }).use(function(e) {
                e.use(r),
                e.installMethod("darken", function(e) {
                    return this.lightness(isNaN(e) ? -.1 : -e, !0)
                })
            }).use(function(e) {
                e.use(r),
                e.installMethod("desaturate", function(e) {
                    return this.saturation(isNaN(e) ? -.1 : -e, !0)
                })
            }).use(function(t) {
                function e() {
                    var e = this.rgb()
                      , n = .3 * e._red + .59 * e._green + .11 * e._blue;
                    return new t.RGB(n,n,n,e._alpha)
                }
                t.installMethod("greyscale", e).installMethod("grayscale", e)
            }).use(function(e) {
                e.use(r),
                e.installMethod("lighten", function(e) {
                    return this.lightness(isNaN(e) ? .1 : e, !0)
                })
            }).use(function(u) {
                u.installMethod("mix", function(e, n) {
                    e = u(e).rgb();
                    var t = 2 * (n = 1 - (isNaN(n) ? .5 : n)) - 1
                      , r = this._alpha - e._alpha
                      , a = ((t * r == -1 ? t : (t + r) / (1 + t * r)) + 1) / 2
                      , i = 1 - a
                      , o = this.rgb();
                    return new u.RGB(o._red * a + e._red * i,o._green * a + e._green * i,o._blue * a + e._blue * i,o._alpha * n + e._alpha * (1 - n))
                })
            }).use(function(n) {
                n.installMethod("negate", function() {
                    var e = this.rgb();
                    return new n.RGB(1 - e._red,1 - e._green,1 - e._blue,this._alpha)
                })
            }).use(function(e) {
                e.installMethod("opaquer", function(e) {
                    return this.alpha(isNaN(e) ? .1 : e, !0)
                })
            }).use(function(e) {
                e.use(r),
                e.installMethod("rotate", function(e) {
                    return this.hue((e || 0) / 360, !0)
                })
            }).use(function(e) {
                e.use(r),
                e.installMethod("saturate", function(e) {
                    return this.saturation(isNaN(e) ? .1 : e, !0)
                })
            }).use(function(e) {
                e.installMethod("toAlpha", function(e) {
                    var n = this.rgb()
                      , t = e(e).rgb()
                      , r = new e.RGB(0,0,0,n._alpha)
                      , a = ["_red", "_green", "_blue"];
                    return a.forEach(function(e) {
                        n[e] < 1e-10 ? r[e] = n[e] : n[e] > t[e] ? r[e] = (n[e] - t[e]) / (1 - t[e]) : n[e] > t[e] ? r[e] = (t[e] - n[e]) / t[e] : r[e] = 0
                    }),
                    r._red > r._green ? r._red > r._blue ? n._alpha = r._red : n._alpha = r._blue : r._green > r._blue ? n._alpha = r._green : n._alpha = r._blue,
                    n._alpha < 1e-10 || (a.forEach(function(e) {
                        n[e] = (n[e] - t[e]) / n._alpha + t[e]
                    }),
                    n._alpha *= r._alpha),
                    n
                })
            })
        }()
    })
      , g = n(b, "div");
    function b(e, n, t) {
        var r = document.createElement(e);
        return r.className = n,
        t.appendChild(r),
        r
    }
    function n(e) {
        var n = Array.prototype.slice
          , t = n.apply(arguments, [1]);
        return function() {
            return e.apply(null, t.concat(n.apply(arguments)))
        }
    }
    function t(e, n, t) {
        return Math.min(Math.max(e, n), t)
    }
    var v = {
        clamp: t,
        e: b,
        div: g,
        partial: n,
        labelInput: function(e, n, t, r) {
            var a = "colorPickerInput" + Math.floor(1001 * Math.random())
              , i = g(e, t);
            return {
                label: (c = n,
                h = i,
                d = a,
                p = b("label", "", h),
                p.innerHTML = c,
                d && p.setAttribute("for", d),
                p),
                input: (o = "text",
                u = i,
                s = r,
                l = a,
                f = b("input", "", u),
                f.type = o,
                s && (f.maxLength = s),
                l && f.setAttribute("id", l),
                s && (f.maxLength = s),
                f)
            };
            var o, u, s, l, f;
            var c, h, d, p
        },
        X: function(e, n) {
            e.style.left = t(100 * n, 0, 100) + "%"
        },
        Y: function(e, n) {
            e.style.top = t(100 * n, 0, 100) + "%"
        },
        BG: function(e, n) {
            e.style.background = n
        }
    };
    var r = {
        currentColor: function(e) {
            var n = v.div("currentColorContainer", e)
              , t = v.div("currentColor", n);
            return {
                change: function(e) {
                    v.BG(t, e.cssa())
                }
            }
        },
        fields: function(e, t, n) {
            var r = n.space
              , a = n.limit || 255
              , i = 0 <= n.fix ? n.fix : 0
              , o = ("" + a).length + i;
            o = i ? o + 1 : o;
            var u = r.split("")
              , s = "A" == r[r.length - 1];
            if (r = s ? r.slice(0, -1) : r,
            ["RGB", "HSL", "HSV", "CMYK"].indexOf(r) < 0)
                return console.warn("Invalid field names", r);
            var l = v.div("colorFields", e)
              , f = u.map(function(e) {
                e = e.toLowerCase();
                var n = v.labelInput("color " + e, e, l, o);
                return n.input.onblur = c,
                n.input.onkeydown = h,
                n.input.onkeyup = d,
                {
                    name: e,
                    e: n
                }
            });
            function c() {
                t.done()
            }
            function h(e) {
                e.ctrlKey || e.altKey || !/^[a-zA-Z]$/.test(e.key) || e.preventDefault()
            }
            function d() {
                var n = [r];
                f.forEach(function(e) {
                    n.push(e.e.input.value / a)
                }),
                s || n.push(t.getAlpha()),
                t.set(n)
            }
            return {
                change: function(n) {
                    f.forEach(function(e) {
                        e.e.input.value = (n[e.name]() * a).toFixed(i)
                    })
                }
            }
        },
        hex: function(e, r, n) {
            var t = v.labelInput("hex", n.label || "", e, 7);
            return t.input.value = "#",
            t.input.onkeyup = function(e) {
                var n = e.keyCode || e.which
                  , t = e.target.value;
                t = function(e, n, t) {
                    for (var r = e, a = e.length; a < n; a++)
                        r += t;
                    return r
                }(t = "#" == t[0] ? t : "#" + t, 7, "0"),
                13 == n && r.set(t)
            }
            ,
            t.input.onblur = function(e) {
                r.set(e.target.value),
                r.done()
            }
            ,
            {
                change: function(e) {
                    t.input.value = "#" == t.input.value[0] ? "#" : "",
                    t.input.value += e.hex().slice(1)
                }
            }
        },
        alpha: function(e, t) {
            var n = p.slider({
                parent: e,
                class: "oned alpha",
                cbs: {
                    begin: r,
                    change: r,
                    end: function() {
                        t.done()
                    }
                }
            });
            function r(e) {
                var n = v.clamp(e.y, 0, 1);
                v.Y(e.pointer, n),
                t.setAlpha(1 - n)
            }
            return {
                change: function(e) {
                    v.Y(n.pointer, 1 - e.alpha())
                }
            }
        },
        close: function(e, n, t) {
            var r = v.e("a", t.class || "close", e);
            r.href = "#",
            r.innerHTML = t.label || "Close",
            r.onclick = function(e) {
                e.preventDefault(),
                n.hide()
            }
        }
    }
      , y = function(r) {
        return e = u,
        (n = [r.init, r.xy, r.z]).map(e).filter(s).length != n.length ? console.warn("colorjoe: missing cb") : function(e, n, t) {
            return function(e) {
                if (!e.e)
                    return console.warn("colorjoe: missing element");
                var n = (t = e.e,
                "string" == typeof t ? document.getElementById(e.e) : e.e);
                var t;
                n.className = "colorPicker";
                var r = e.cbs
                  , a = p.xyslider({
                    parent: n,
                    class: "twod",
                    cbs: {
                        begin: i,
                        change: i,
                        end: h
                    }
                });
                function i(e) {
                    l = r.xy(l, {
                        x: v.clamp(e.x, 0, 1),
                        y: v.clamp(e.y, 0, 1)
                    }, a, o),
                    c()
                }
                var o = p.slider({
                    parent: n,
                    class: "oned",
                    cbs: {
                        begin: u,
                        change: u,
                        end: h
                    }
                });
                function u(e) {
                    l = r.z(l, v.clamp(e.y, 0, 1), a, o),
                    c()
                }
                var s = m(e.color)
                  , l = r.init(s, a, o)
                  , f = {
                    change: [],
                    done: []
                };
                function c(e) {
                    e = _(e) ? e : [];
                    for (var n, t = f.change, r = 0, a = t.length; r < a; r++)
                        n = t[r],
                        -1 == e.indexOf(n.name) && n.fn(l)
                }
                function h() {
                    if (!s.equals(l)) {
                        for (var e = 0, n = f.done.length; e < n; e++)
                            f.done[e].fn(l);
                        s = l
                    }
                }
                var d = {
                    e: n,
                    done: function() {
                        return h(),
                        this
                    },
                    update: function(e) {
                        return c(e),
                        this
                    },
                    hide: function() {
                        return n.style.display = "none",
                        this
                    },
                    show: function() {
                        return n.style.display = "",
                        this
                    },
                    get: function() {
                        return l
                    },
                    set: function(e) {
                        var n = this.get();
                        return l = r.init(m(e), a, o),
                        n.equals(l) || this.update(),
                        this
                    },
                    getAlpha: function() {
                        return l.alpha()
                    },
                    setAlpha: function(e) {
                        return l = l.alpha(e),
                        this.update(),
                        this
                    },
                    on: function(e, n, t) {
                        return "change" == e || "done" == e ? f[e].push({
                            name: t,
                            fn: n
                        }) : console.warn('Passed invalid evt name "' + e + '" to colorjoe.on'),
                        this
                    },
                    removeAllListeners: function(e) {
                        if (e)
                            f[e] = [];
                        else
                            for (var n in f)
                                f[n] = [];
                        return this
                    }
                };
                return function(e, u, n) {
                    if (n) {
                        var s, l, f, c = v.div("extras", e);
                        n.forEach(function(e, n) {
                            _(e) ? (l = e[0],
                            f = 1 < e.length ? e[1] : {}) : (l = e,
                            f = {});
                            var t, r, a, i = l in y.extras ? y.extras[l] : null;
                            if (i)
                                for (var o in s = i(c, (r = l + n,
                                (a = function(e) {
                                    var n = {};
                                    for (var t in e)
                                        n[t] = e[t];
                                    return n
                                }(t = u)).update = function() {
                                    t.update([r])
                                }
                                ,
                                a), f))
                                    u.on(o, s[o], l)
                        })
                    }
                }(n, d, e.extras),
                c(),
                d
            }({
                e: e,
                color: n,
                cbs: r,
                extras: t
            })
        }
        ;
        var e, n
    };
    for (var a in y.rgb = y({
        init: function(e, n, t) {
            var r = o(e).hsv();
            return this.xy(r, {
                x: r.saturation(),
                y: 1 - r.value()
            }, n, t),
            this.z(r, r.hue(), n, t),
            r
        },
        xy: function(e, n, t) {
            return v.X(t.pointer, n.x),
            v.Y(t.pointer, n.y),
            e.saturation(n.x).value(1 - n.y)
        },
        z: function(e, n, t, r) {
            var a, i;
            return v.Y(r.pointer, n),
            a = t.background,
            i = n,
            v.BG(a, new o.HSV(i,1,1).cssa()),
            e.hue(n)
        }
    }),
    y.hsl = y({
        init: function(e, n, t) {
            var r = o(e).hsl();
            return this.xy(r, {
                x: r.hue(),
                y: 1 - r.saturation()
            }, n, t),
            this.z(r, 1 - r.lightness(), n, t),
            r
        },
        xy: function(e, n, t, r) {
            return v.X(t.pointer, n.x),
            v.Y(t.pointer, n.y),
            v.BG(r.background, e.css()),
            e.hue(n.x).saturation(1 - n.y)
        },
        z: function(e, n, t, r) {
            return v.Y(r.pointer, n),
            e.lightness(1 - n)
        }
    }),
    y.extras = {},
    y.registerExtra = function(e, n) {
        e in y.extras && console.warn('Extra "' + e + '"has been registered already!'),
        y.extras[e] = n
    }
    ,
    r)
        y.registerExtra(a, r[a]);
    function m(e) {
        if (!i(e))
            return o("#000");
        if (e.isColor)
            return e;
        var n = o(e);
        return n || (i(e) && console.warn("Passed invalid color to colorjoe, using black instead"),
        o("#000"))
    }
    function _(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
    function i(e) {
        return void 0 !== e
    }
    function u(e) {
        return "function" == typeof e
    }
    function s(e) {
        return e
    }
    return y
});
//# sourceMappingURL=colorjoe.min.js.map
