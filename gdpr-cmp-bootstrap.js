!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 225));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "__extends", function () {
        return o;
      }),
      n.d(t, "__assign", function () {
        return i;
      }),
      n.d(t, "__rest", function () {
        return s;
      }),
      n.d(t, "__decorate", function () {
        return u;
      }),
      n.d(t, "__param", function () {
        return a;
      }),
      n.d(t, "__metadata", function () {
        return c;
      }),
      n.d(t, "__awaiter", function () {
        return l;
      }),
      n.d(t, "__generator", function () {
        return p;
      }),
      n.d(t, "__exportStar", function () {
        return d;
      }),
      n.d(t, "__values", function () {
        return f;
      }),
      n.d(t, "__read", function () {
        return h;
      }),
      n.d(t, "__spread", function () {
        return v;
      }),
      n.d(t, "__spreadArrays", function () {
        return _;
      }),
      n.d(t, "__await", function () {
        return y;
      }),
      n.d(t, "__asyncGenerator", function () {
        return g;
      }),
      n.d(t, "__asyncDelegator", function () {
        return b;
      }),
      n.d(t, "__asyncValues", function () {
        return m;
      }),
      n.d(t, "__makeTemplateObject", function () {
        return E;
      }),
      n.d(t, "__importStar", function () {
        return C;
      }),
      n.d(t, "__importDefault", function () {
        return S;
      }),
      n.d(t, "__classPrivateFieldGet", function () {
        return O;
      }),
      n.d(t, "__classPrivateFieldSet", function () {
        return w;
      });
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
    var r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function () {
      return (i =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function s(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
            (n[r[o]] = e[r[o]]);
      }
      return n;
    }
    function u(e, t, n, r) {
      var o,
        i = arguments.length,
        s =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        s = Reflect.decorate(e, t, n, r);
      else
        for (var u = e.length - 1; u >= 0; u--)
          (o = e[u]) &&
            (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
      return i > 3 && s && Object.defineProperty(t, n, s), s;
    }
    function a(e, t) {
      return function (n, r) {
        t(n, r, e);
      };
    }
    function c(e, t) {
      if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function l(e, t, n, r) {
      return new (n || (n = Promise))(function (o, i) {
        function s(e) {
          try {
            a(r.next(e));
          } catch (e) {
            i(e);
          }
        }
        function u(e) {
          try {
            a(r.throw(e));
          } catch (e) {
            i(e);
          }
        }
        function a(e) {
          var t;
          e.done
            ? o(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(s, u);
        }
        a((r = r.apply(e, t || [])).next());
      });
    }
    function p(e, t) {
      var n,
        r,
        o,
        i,
        s = {
          label: 0,
          sent: function () {
            if (1 & o[0]) throw o[1];
            return o[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (i = { next: u(0), throw: u(1), return: u(2) }),
        "function" == typeof Symbol &&
          (i[Symbol.iterator] = function () {
            return this;
          }),
        i
      );
      function u(i) {
        return function (u) {
          return (function (i) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; s; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (o =
                      2 & i[0]
                        ? r.return
                        : i[0]
                        ? r.throw || ((o = r.return) && o.call(r), 0)
                        : r.next) &&
                    !(o = o.call(r, i[1])).done)
                )
                  return o;
                switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return s.label++, { value: i[1], done: !1 };
                  case 5:
                    s.label++, (r = i[1]), (i = [0]);
                    continue;
                  case 7:
                    (i = s.ops.pop()), s.trys.pop();
                    continue;
                  default:
                    if (
                      !((o = s.trys),
                      (o = o.length > 0 && o[o.length - 1]) ||
                        (6 !== i[0] && 2 !== i[0]))
                    ) {
                      s = 0;
                      continue;
                    }
                    if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                      s.label = i[1];
                      break;
                    }
                    if (6 === i[0] && s.label < o[1]) {
                      (s.label = o[1]), (o = i);
                      break;
                    }
                    if (o && s.label < o[2]) {
                      (s.label = o[2]), s.ops.push(i);
                      break;
                    }
                    o[2] && s.ops.pop(), s.trys.pop();
                    continue;
                }
                i = t.call(e, s);
              } catch (e) {
                (i = [6, e]), (r = 0);
              } finally {
                n = o = 0;
              }
            if (5 & i[0]) throw i[1];
            return { value: i[0] ? i[1] : void 0, done: !0 };
          })([i, u]);
        };
      }
    }
    function d(e, t) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    function f(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return (
              e && r >= e.length && (e = void 0),
              { value: e && e[r++], done: !e }
            );
          },
        };
      throw new TypeError(
        t ? "Object is not iterable." : "Symbol.iterator is not defined."
      );
    }
    function h(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        i = n.call(e),
        s = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
          s.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = i.return) && n.call(i);
        } finally {
          if (o) throw o.error;
        }
      }
      return s;
    }
    function v() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(h(arguments[t]));
      return e;
    }
    function _() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        o = 0;
      for (t = 0; t < n; t++)
        for (var i = arguments[t], s = 0, u = i.length; s < u; s++, o++)
          r[o] = i[s];
      return r;
    }
    function y(e) {
      return this instanceof y ? ((this.v = e), this) : new y(e);
    }
    function g(e, t, n) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var r,
        o = n.apply(e, t || []),
        i = [];
      return (
        (r = {}),
        s("next"),
        s("throw"),
        s("return"),
        (r[Symbol.asyncIterator] = function () {
          return this;
        }),
        r
      );
      function s(e) {
        o[e] &&
          (r[e] = function (t) {
            return new Promise(function (n, r) {
              i.push([e, t, n, r]) > 1 || u(e, t);
            });
          });
      }
      function u(e, t) {
        try {
          (n = o[e](t)).value instanceof y
            ? Promise.resolve(n.value.v).then(a, c)
            : l(i[0][2], n);
        } catch (e) {
          l(i[0][3], e);
        }
        var n;
      }
      function a(e) {
        u("next", e);
      }
      function c(e) {
        u("throw", e);
      }
      function l(e, t) {
        e(t), i.shift(), i.length && u(i[0][0], i[0][1]);
      }
    }
    function b(e) {
      var t, n;
      return (
        (t = {}),
        r("next"),
        r("throw", function (e) {
          throw e;
        }),
        r("return"),
        (t[Symbol.iterator] = function () {
          return this;
        }),
        t
      );
      function r(r, o) {
        t[r] = e[r]
          ? function (t) {
              return (n = !n)
                ? { value: y(e[r](t)), done: "return" === r }
                : o
                ? o(t)
                : t;
            }
          : o;
      }
    }
    function m(e) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var t,
        n = e[Symbol.asyncIterator];
      return n
        ? n.call(e)
        : ((e = f(e)),
          (t = {}),
          r("next"),
          r("throw"),
          r("return"),
          (t[Symbol.asyncIterator] = function () {
            return this;
          }),
          t);
      function r(n) {
        t[n] =
          e[n] &&
          function (t) {
            return new Promise(function (r, o) {
              (function (e, t, n, r) {
                Promise.resolve(r).then(function (t) {
                  e({ value: t, done: n });
                }, t);
              })(r, o, (t = e[n](t)).done, t.value);
            });
          };
      }
    }
    function E(e, t) {
      return (
        Object.defineProperty
          ? Object.defineProperty(e, "raw", { value: t })
          : (e.raw = t),
        e
      );
    }
    function C(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    }
    function S(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function O(e, t) {
      if (!t.has(e))
        throw new TypeError("attempted to get private field on non-instance");
      return t.get(e);
    }
    function w(e, t, n) {
      if (!t.has(e))
        throw new TypeError("attempted to set private field on non-instance");
      return t.set(e, n), n;
    }
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(110)),
      r(n(111)),
      r(n(112)),
      r(n(113));
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(28)),
      r(n(114)),
      r(n(29)),
      r(n(30)),
      r(n(115)),
      r(n(20)),
      r(n(31)),
      r(n(116)),
      r(n(117));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function () {};
    t.BootstrapModel = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(42),
      o = (function () {
        function e() {}
        return (
          (e.init = function () {
            var e = this;
            this.VERSION = n(43).version || "3.0.0";
            var t = new r.URLDefs(this.VERSION);
            Object.keys(t).forEach(function (n) {
              e[n] = t[n];
            });
          }),
          (e.BOOTSTRAP_FILE_NAME = "gdpr-cmp-bootstrap.js"),
          (e.CMP_ID = 23),
          (e.CONFIG = "cmpConfig"),
          (e.CONSENSU_TIMEOUT = 5e3),
          (e.CONSENT_STRING_COOKIE = "euconsent-v2"),
          (e.PUBLISHER_TC_COOKIE = "euconsent-v2-ptc"),
          (e.CONFIG_VERSION_COOKIE = "euconsent-config-version"),
          (e.CONVERSANT_VENDOR_ID = 24),
          (e.DEFAULT_BANNER_PLACEMENT = "bottom"),
          (e.DEFAULT_CONSENT_EXPIRATION_DAYS = 390),
          (e.DEFAULT_CONSENT_MIN_SHOW_DAYS = 30),
          (e.DEFAULT_LANGUAGE = "en"),
          (e.DEFAULT_REDIRECT_URL = "favicon.ico"),
          (e.MILLISECOND_DAY = 864e5),
          (e.POST_OFFICE_FUNCTION = "cmpPostOfficeBox"),
          (e.THIRDPC_POSTMESSAGE_PREFIX = "ThirdPartyCookies:"),
          (e.THIRDPC_HTML = "tpcc.html"),
          (e.UI_DIV_ID = "gdpr-cmp"),
          (e.UI_FILE_NAME = "gdpr-cmp-ui.js"),
          (e.UI_LOAD_TIMEOUT = 1e4),
          e
        );
      })();
    t.GlobalConstants = o;
  },
  function (e, t, n) {
    "use strict";
    var r =
      (this && this.__values) ||
      function (e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = (function () {
      function e() {}
      return (
        (e.prototype.clone = function () {
          var e = this,
            t = new this.constructor();
          return (
            Object.keys(this).forEach(function (n) {
              var r = e.deepClone(e[n]);
              void 0 !== r && (t[n] = r);
            }),
            t
          );
        }),
        (e.prototype.deepClone = function (e) {
          var t,
            n,
            o = typeof e;
          if ("number" === o || "string" === o || "boolean" === o) return e;
          if (null !== e && "object" === o) {
            if ("function" == typeof e.clone) return e.clone();
            if (e instanceof Date) return new Date(e.getTime());
            if (void 0 !== e[Symbol.iterator]) {
              var i = [];
              try {
                for (var s = r(e), u = s.next(); !u.done; u = s.next()) {
                  var a = u.value;
                  i.push(this.deepClone(a));
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (n = s.return) && n.call(s);
                } finally {
                  if (t) throw t.error;
                }
              }
              return e instanceof Array ? i : new e.constructor(i);
            }
            var c = {};
            for (var l in e)
              e.hasOwnProperty(l) && (c[l] = this.deepClone(e[l]));
            return c;
          }
        }),
        e
      );
    })();
    t.Cloneable = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3),
      o = (function () {
        function e() {}
        return (
          (e.encode = function (e, t) {
            var n;
            if (
              ("string" == typeof e && (e = parseInt(e, 10)),
              (n = e.toString(2)).length > t || e < 0)
            )
              throw new r.EncodingError(e + " too large to encode into " + t);
            return n.length < t && (n = "0".repeat(t - n.length) + n), n;
          }),
          (e.decode = function (e, t) {
            if (t !== e.length) throw new r.DecodingError("invalid bit length");
            return parseInt(e, 2);
          }),
          e
        );
      })();
    t.IntEncoder = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(166),
      i = (function () {
        function e() {
          this.name = "Decision";
        }
        return (
          (e.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [2, !1];
              });
            });
          }),
          (e.prototype.answer = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.evaluate()];
                  case 1:
                    return e.sent() ? [2, o.YesOrNo.YES] : [2, o.YesOrNo.NO];
                }
              });
            });
          }),
          e
        );
      })();
    t.Decision = i;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(18)),
      r(n(3)),
      r(n(4)),
      r(n(7)),
      r(n(39)),
      r(n(40)),
      r(n(41)),
      r(n(122));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.encode = function (e) {
          return +e + "";
        }),
        (e.decode = function (e) {
          return "1" === e;
        }),
        e
      );
    })();
    t.BooleanEncoder = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      i = n(5),
      s = n(126),
      u = (function () {
        function e() {}
        return (
          (e.init = function () {
            (this.messagesSent = 0),
              (this.debug.t0 = this.getTime()),
              (this.lastSentIndex = 0),
              (this.instance = new e());
          }),
          (e.logMeta = function () {
            var e = i.BootstrapModel.config,
              t = this.debug.meta;
            e &&
              ((this.cid = e.id),
              t.push(
                this.createLogObject("cmpVersion", o.GlobalConstants.VERSION)
              ),
              t.push(
                this.createLogObject(
                  "gdprAppliesGlobally",
                  !!e.gdprAppliesGlobally
                )
              ),
              t.push(
                this.createLogObject(
                  "vendorListIsLimited",
                  !(!e.vendors || !e.vendors.length)
                )
              ),
              t.push(
                this.createLogObject("isServiceSpecific", !!e.isServiceSpecific)
              ),
              t.push(this.createLogObject("inApp", !!e.inAppConfig)),
              e.inAppConfig &&
                t.push(
                  this.createLogObject("deviceId", e.inAppConfig.deviceId)
                ),
              (window.__tcfapi.debug = this.debug));
          }),
          (e.getInstance = function () {
            return e.instance;
          }),
          (e.logEvent = function (t, n) {
            e.debug.events.push(e.createLogObject(t, n));
          }),
          (e.prototype.logEvent = function (t, n) {
            e.logEvent(t, n);
          }),
          (e.setGUID = function (e) {
            this.debug.id = e;
          }),
          (e.send = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    return (
                      this.sessionPhase++,
                      this.logEvent("sessionPhase", this.sessionPhase),
                      (this.lastSentIndex = this.debug.events.length - 1),
                      [
                        4,
                        s.JSONUtils.post(
                          o.GlobalConstants.EVENT_EP,
                          this.createMessage()
                        ),
                      ]
                    );
                  case 1:
                    return (
                      e.sent(),
                      (this.debug.sent = this.lastSentIndex),
                      (this.messagesSent = this.messagesSent + 1),
                      [2]
                    );
                }
              });
            });
          }),
          (e.createLogObject = function (e, t) {
            return { name: e, time: this.getTime() - this.debug.t0, params: t };
          }),
          (e.createMessage = function () {
            var e = { id: this.debug.id, cid: this.cid, e: [] };
            if (this.debug.sent > 0)
              e.e = this.debug.events.slice(this.debug.sent + 1);
            else {
              var t = { name: "t0", params: this.debug.t0, time: 0 };
              e.e = [t].concat(this.debug.meta, this.debug.events);
            }
            return e;
          }),
          (e.sessionPhase = 0),
          (e.cid = -1),
          (e.debug = { t0: 0, meta: [], events: [] }),
          (e.getTime = function () {
            return new Date().getTime();
          }),
          e
        );
      })();
    t.Debug = u;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(50),
      o = n(234),
      i = (function () {
        function e() {}
        return (
          (e.reset = function () {
            delete this.cmpId,
              delete this.cmpVersion,
              delete this.eventStatus,
              delete this.gdprApplies,
              delete this.tcModel,
              delete this.tcString,
              (this.cmpStatus = r.CmpStatus.LOADING),
              (this.disabled = !1),
              (this.displayStatus = r.DisplayStatus.HIDDEN),
              this.eventQueue.clear();
          }),
          (e.apiVersion = "2"),
          (e.tcfPolicyVersion = 2),
          (e.eventQueue = new o.EventListenerQueue()),
          (e.cmpStatus = r.CmpStatus.LOADING),
          (e.disabled = !1),
          (e.displayStatus = r.DisplayStatus.HIDDEN),
          e
        );
      })();
    t.CmpApiModel = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function () {
        function e() {
          this.hasRun = !1;
        }
        return (
          (e.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return (this.hasRun = !0), [2];
              });
            });
          }),
          e
        );
      })();
    t.Action = o;
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(27)),
      r(n(19)),
      r(n(118)),
      r(n(32)),
      r(n(38));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(4),
      o = (function () {
        function e() {}
        var t, n, o, i, s, u, a, c, l, p, d, f, h, v, _, y, g, b;
        return (
          (t = r.Fields.cmpId),
          (n = r.Fields.cmpVersion),
          (o = r.Fields.consentLanguage),
          (i = r.Fields.consentScreen),
          (s = r.Fields.created),
          (u = r.Fields.isServiceSpecific),
          (a = r.Fields.lastUpdated),
          (c = r.Fields.policyVersion),
          (l = r.Fields.publisherCountryCode),
          (p = r.Fields.publisherLegitimateInterests),
          (d = r.Fields.publisherConsents),
          (f = r.Fields.purposeConsents),
          (h = r.Fields.purposeLegitimateInterests),
          (v = r.Fields.purposeOneTreatment),
          (_ = r.Fields.specialFeatureOptins),
          (y = r.Fields.useNonStandardStacks),
          (g = r.Fields.vendorListVersion),
          (b = r.Fields.version),
          (e[t] = 12),
          (e[n] = 12),
          (e[o] = 12),
          (e[i] = 6),
          (e[s] = 36),
          (e[u] = 1),
          (e[a] = 36),
          (e[c] = 6),
          (e[l] = 12),
          (e[p] = 24),
          (e[d] = 24),
          (e[f] = 24),
          (e[h] = 24),
          (e[v] = 1),
          (e[_] = 12),
          (e[y] = 1),
          (e[g] = 12),
          (e[b] = 6),
          (e.anyBoolean = 1),
          (e.encodingType = 1),
          (e.maxId = 16),
          (e.numCustomPurposes = 6),
          (e.numEntries = 12),
          (e.numRestrictions = 12),
          (e.purposeId = 6),
          (e.restrictionType = 2),
          (e.segmentType = 3),
          (e.singleOrRange = 1),
          (e.vendorId = 16),
          e
        );
      })();
    t.BitLength = o;
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.RestrictionType || (t.RestrictionType = {}))[
        (r.NOT_ALLOWED = 0)
      ] = "NOT_ALLOWED"),
      (r[(r.REQUIRE_CONSENT = 1)] = "REQUIRE_CONSENT"),
      (r[(r.REQUIRE_LI = 2)] = "REQUIRE_LI");
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(3),
      i = n(4),
      s = (function () {
        function e() {}
        return (
          (e.encode = function (e, t) {
            for (var n = "", o = 1; o <= t; o++)
              n += r.BooleanEncoder.encode(e.has(o));
            return n;
          }),
          (e.decode = function (e, t) {
            if (e.length !== t)
              throw new o.DecodingError("bitfield encoding length mismatch");
            for (var n = new i.Vector(), s = 1; s <= t; s++)
              r.BooleanEncoder.decode(e[s - 1]) && n.set(s);
            return (n.bitLength = e.length), n;
          }),
          e
        );
      })();
    t.FixedVectorEncoder = s;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(3),
      o = (function () {
        function e() {}
        return (
          (e.encode = function (e) {
            if (!/^[0-1]+$/.test(e))
              throw new r.EncodingError("Invalid bitField");
            e += "0".repeat(this.LCM - (e.length % this.LCM));
            for (var t = "", n = 0; n < e.length; n += this.BASIS)
              t += this.DICT[parseInt(e.substr(n, this.BASIS), 2)];
            return t;
          }),
          (e.decode = function (e) {
            if (!/^[A-Za-z0-9\-_]+$/.test(e))
              throw new r.DecodingError("Invalidly encoded Base64URL string");
            for (var t = "", n = 0; n < e.length; n++) {
              var o = this.REVERSE_DICT.get(e[n]).toString(2);
              t += "0".repeat(this.BASIS - o.length) + o;
            }
            return t;
          }),
          (e.DICT =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"),
          (e.REVERSE_DICT = new Map([
            ["A", 0],
            ["B", 1],
            ["C", 2],
            ["D", 3],
            ["E", 4],
            ["F", 5],
            ["G", 6],
            ["H", 7],
            ["I", 8],
            ["J", 9],
            ["K", 10],
            ["L", 11],
            ["M", 12],
            ["N", 13],
            ["O", 14],
            ["P", 15],
            ["Q", 16],
            ["R", 17],
            ["S", 18],
            ["T", 19],
            ["U", 20],
            ["V", 21],
            ["W", 22],
            ["X", 23],
            ["Y", 24],
            ["Z", 25],
            ["a", 26],
            ["b", 27],
            ["c", 28],
            ["d", 29],
            ["e", 30],
            ["f", 31],
            ["g", 32],
            ["h", 33],
            ["i", 34],
            ["j", 35],
            ["k", 36],
            ["l", 37],
            ["m", 38],
            ["n", 39],
            ["o", 40],
            ["p", 41],
            ["q", 42],
            ["r", 43],
            ["s", 44],
            ["t", 45],
            ["u", 46],
            ["v", 47],
            ["w", 48],
            ["x", 49],
            ["y", 50],
            ["z", 51],
            ["0", 52],
            ["1", 53],
            ["2", 54],
            ["3", 55],
            ["4", 56],
            ["5", 57],
            ["6", 58],
            ["7", 59],
            ["8", 60],
            ["9", 61],
            ["-", 62],
            ["_", 63],
          ])),
          (e.BASIS = 6),
          (e.LCM = 24),
          e
        );
      })();
    t.Base64Url = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.root = null), t;
      }
      return (
        o(t, e),
        (t.prototype.isEmpty = function () {
          return !this.root;
        }),
        (t.prototype.add = function (e) {
          var t,
            n = { value: e, left: null, right: null };
          if (this.isEmpty()) this.root = n;
          else
            for (t = this.root; ; )
              if (e < t.value) {
                if (null === t.left) {
                  t.left = n;
                  break;
                }
                t = t.left;
              } else {
                if (!(e > t.value)) break;
                if (null === t.right) {
                  t.right = n;
                  break;
                }
                t = t.right;
              }
        }),
        (t.prototype.get = function () {
          for (var e = [], t = this.root; t; )
            if (t.left) {
              for (var n = t.left; n.right && n.right != t; ) n = n.right;
              n.right == t
                ? ((n.right = null), e.push(t.value), (t = t.right))
                : ((n.right = t), (t = t.left));
            } else e.push(t.value), (t = t.right);
          return e;
        }),
        (t.prototype.contains = function (e) {
          for (var t = !1, n = this.root; n; ) {
            if (n.value === e) {
              t = !0;
              break;
            }
            e > n.value ? (n = n.right) : e < n.value && (n = n.left);
          }
          return t;
        }),
        (t.prototype.min = function (e) {
          var t;
          for (void 0 === e && (e = this.root); e; )
            e.left ? (e = e.left) : ((t = e.value), (e = null));
          return t;
        }),
        (t.prototype.max = function (e) {
          var t;
          for (void 0 === e && (e = this.root); e; )
            e.right ? (e = e.right) : ((t = e.value), (e = null));
          return t;
        }),
        (t.prototype.remove = function (e, t) {
          void 0 === t && (t = this.root);
          for (var n = null, r = "left"; t; )
            if (e < t.value) (n = t), (t = t.left), (r = "left");
            else if (e > t.value) (n = t), (t = t.right), (r = "right");
            else {
              if (t.left || t.right)
                if (t.left)
                  if (t.right) {
                    var o = this.min(t.right);
                    this.remove(o, t.right), (t.value = o);
                  } else n ? (n[r] = t.left) : (this.root = t.left);
                else n ? (n[r] = t.right) : (this.root = t.right);
              else n ? (n[r] = null) : (this.root = null);
              t = null;
            }
        }),
        t
      );
    })(n(7).Cloneable);
    t.BinarySearchTree = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.cmpId = "cmpId"),
        (e.cmpVersion = "cmpVersion"),
        (e.consentLanguage = "consentLanguage"),
        (e.consentScreen = "consentScreen"),
        (e.created = "created"),
        (e.supportOOB = "supportOOB"),
        (e.isServiceSpecific = "isServiceSpecific"),
        (e.lastUpdated = "lastUpdated"),
        (e.numCustomPurposes = "numCustomPurposes"),
        (e.policyVersion = "policyVersion"),
        (e.publisherCountryCode = "publisherCountryCode"),
        (e.publisherCustomConsents = "publisherCustomConsents"),
        (e.publisherCustomLegitimateInterests =
          "publisherCustomLegitimateInterests"),
        (e.publisherLegitimateInterests = "publisherLegitimateInterests"),
        (e.publisherConsents = "publisherConsents"),
        (e.publisherRestrictions = "publisherRestrictions"),
        (e.purposeConsents = "purposeConsents"),
        (e.purposeLegitimateInterests = "purposeLegitimateInterests"),
        (e.purposeOneTreatment = "purposeOneTreatment"),
        (e.specialFeatureOptins = "specialFeatureOptins"),
        (e.useNonStandardStacks = "useNonStandardStacks"),
        (e.vendorConsents = "vendorConsents"),
        (e.vendorLegitimateInterests = "vendorLegitimateInterests"),
        (e.vendorListVersion = "vendorListVersion"),
        (e.vendorsAllowed = "vendorsAllowed"),
        (e.vendorsDisclosed = "vendorsDisclosed"),
        (e.version = "version"),
        e
      );
    })();
    t.Fields = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(7),
      s = n(3),
      u = n(20),
      a = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          return (
            void 0 !== t && (r.purposeId = t),
            void 0 !== n && (r.restrictionType = n),
            r
          );
        }
        return (
          o(t, e),
          (t.unHash = function (e) {
            var n = e.split(this.hashSeparator),
              r = new t();
            if (2 !== n.length) throw new s.TCModelError("hash", e);
            return (
              (r.purposeId = parseInt(n[0], 10)),
              (r.restrictionType = parseInt(n[1], 10)),
              r
            );
          }),
          Object.defineProperty(t.prototype, "hash", {
            get: function () {
              if (!this.isValid())
                throw new Error("cannot hash invalid PurposeRestriction");
              return (
                "" + this.purposeId + t.hashSeparator + this.restrictionType
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "purposeId", {
            get: function () {
              return this.purposeId_;
            },
            set: function (e) {
              this.purposeId_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isValid = function () {
            return (
              Number.isInteger(this.purposeId) &&
              this.purposeId > 0 &&
              (this.restrictionType === u.RestrictionType.NOT_ALLOWED ||
                this.restrictionType === u.RestrictionType.REQUIRE_CONSENT ||
                this.restrictionType === u.RestrictionType.REQUIRE_LI)
            );
          }),
          (t.prototype.isSameAs = function (e) {
            return (
              this.purposeId === e.purposeId &&
              this.restrictionType === e.restrictionType
            );
          }),
          (t.hashSeparator = "-"),
          t
        );
      })(i.Cloneable);
    t.PurposeRestriction = a;
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.Segment || (t.Segment = {})).CORE = "core"),
      (r.VENDORS_DISCLOSED = "vendorsDisclosed"),
      (r.VENDORS_ALLOWED = "vendorsAllowed"),
      (r.PUBLISHER_TC = "publisherTC");
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(11)),
      r(n(33)),
      r(n(119)),
      r(n(21)),
      r(n(8)),
      r(n(34)),
      r(n(35)),
      r(n(37)),
      r(n(36));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(8),
      o = n(3),
      i = (function () {
        function e() {}
        return (
          (e.encode = function (e, t) {
            return r.IntEncoder.encode(Math.round(e.getTime() / 100), t);
          }),
          (e.decode = function (e, t) {
            if (t !== e.length) throw new o.DecodingError("invalid bit length");
            var n = new Date();
            return n.setTime(100 * r.IntEncoder.decode(e, t)), n;
          }),
          e
        );
      })();
    t.DateEncoder = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(8),
      o = n(3),
      i = (function () {
        function e() {}
        return (
          (e.encode = function (e, t) {
            var n = (e = e.toUpperCase()).charCodeAt(0) - 65,
              i = e.charCodeAt(1) - 65;
            if (n < 0 || n > 25 || i < 0 || i > 25)
              throw new o.EncodingError("invalid language code: " + e);
            if (t % 2 == 1)
              throw new o.EncodingError(
                "numBits must be even, " + t + " is not valid"
              );
            return (
              (t /= 2), r.IntEncoder.encode(n, t) + r.IntEncoder.encode(i, t)
            );
          }),
          (e.decode = function (e, t) {
            if (t !== e.length || e.length % 2)
              throw new o.DecodingError("invalid bit length for language");
            var n = e.length / 2,
              i = r.IntEncoder.decode(e.slice(0, n), n) + 65,
              s = r.IntEncoder.decode(e.slice(n), n) + 65;
            return String.fromCharCode(i) + String.fromCharCode(s);
          }),
          e
        );
      })();
    t.LangEncoder = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(19),
      o = n(11),
      i = n(3),
      s = n(8),
      u = n(4),
      a = (function () {
        function e() {}
        return (
          (e.encode = function (e) {
            var t = s.IntEncoder.encode(
              e.numRestrictions,
              r.BitLength.numRestrictions
            );
            return (
              e.isEncodable() &&
                e.getRestrictions().forEach(function (n) {
                  (t += s.IntEncoder.encode(
                    n.purposeId,
                    r.BitLength.purposeId
                  )),
                    (t += s.IntEncoder.encode(
                      n.restrictionType,
                      r.BitLength.restrictionType
                    ));
                  for (
                    var i = e.getVendors(n),
                      u = i.length,
                      a = 0,
                      c = 0,
                      l = "",
                      p = 0;
                    p < u;
                    p++
                  ) {
                    var d = i[p];
                    if (
                      (0 === c && (a++, (c = d)),
                      p === u - 1 || i[p + 1] > d + 1)
                    ) {
                      var f = !(d === c);
                      (l += o.BooleanEncoder.encode(f)),
                        (l += s.IntEncoder.encode(c, r.BitLength.vendorId)),
                        f &&
                          (l += s.IntEncoder.encode(d, r.BitLength.vendorId)),
                        (c = 0);
                    }
                  }
                  (t += s.IntEncoder.encode(a, r.BitLength.numEntries)),
                    (t += l);
                }),
              t
            );
          }),
          (e.decode = function (e) {
            var t = 0,
              n = new u.PurposeRestrictionVector(),
              a = s.IntEncoder.decode(
                e.substr(t, r.BitLength.numRestrictions),
                r.BitLength.numRestrictions
              );
            t += r.BitLength.numRestrictions;
            for (var c = 0; c < a; c++) {
              var l = s.IntEncoder.decode(
                e.substr(t, r.BitLength.purposeId),
                r.BitLength.purposeId
              );
              t += r.BitLength.purposeId;
              var p = s.IntEncoder.decode(
                e.substr(t, r.BitLength.restrictionType),
                r.BitLength.restrictionType
              );
              t += r.BitLength.restrictionType;
              var d = new u.PurposeRestriction(l, p),
                f = s.IntEncoder.decode(
                  e.substr(t, r.BitLength.numEntries),
                  r.BitLength.numEntries
                );
              t += r.BitLength.numEntries;
              for (var h = 0; h < f; h++) {
                var v = o.BooleanEncoder.decode(
                  e.substr(t, r.BitLength.anyBoolean)
                );
                t += r.BitLength.anyBoolean;
                var _ = s.IntEncoder.decode(
                  e.substr(t, r.BitLength.vendorId),
                  r.BitLength.vendorId
                );
                if (((t += r.BitLength.vendorId), v)) {
                  var y = s.IntEncoder.decode(
                    e.substr(t, r.BitLength.vendorId),
                    r.BitLength.vendorId
                  );
                  if (((t += r.BitLength.vendorId), y < _))
                    throw new i.DecodingError(
                      "Invalid RangeEntry: endVendorId " +
                        y +
                        " is less than " +
                        _
                    );
                  for (var g = _; g <= y; g++) n.add(g, d);
                } else n.add(_, d);
              }
            }
            return (n.bitLength = t), n;
          }),
          e
        );
      })();
    t.PurposeRestrictionVectorEncoder = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(4),
      o = n(18),
      i = n(8),
      s = n(11),
      u = n(21),
      a = n(37),
      c = (function () {
        function e() {}
        return (
          (e.encode = function (e) {
            var t,
              n = [],
              r = [],
              u = i.IntEncoder.encode(e.maxId, o.BitLength.maxId),
              c = "",
              l = o.BitLength.maxId + o.BitLength.encodingType,
              p = l + e.maxId,
              d =
                2 * o.BitLength.vendorId +
                o.BitLength.singleOrRange +
                o.BitLength.numEntries,
              f = l + o.BitLength.numEntries;
            return (
              e.forEach(function (i, u) {
                (c += s.BooleanEncoder.encode(i)),
                  (t = e.maxId > d && f < p) &&
                    i &&
                    (e.has(u + 1)
                      ? 0 === r.length &&
                        (r.push(u),
                        (f += o.BitLength.singleOrRange),
                        (f += o.BitLength.vendorId))
                      : (r.push(u),
                        (f += o.BitLength.vendorId),
                        n.push(r),
                        (r = [])));
              }),
              t
                ? ((u += a.VectorEncodingType.RANGE + ""),
                  (u += this.buildRangeEncoding(n)))
                : ((u += a.VectorEncodingType.FIELD + ""), (u += c)),
              u
            );
          }),
          (e.decode = function (e) {
            var t,
              n = 0,
              c = i.IntEncoder.decode(
                e.substr(n, o.BitLength.maxId),
                o.BitLength.maxId
              );
            n += o.BitLength.maxId;
            var l = i.IntEncoder.decode(e.charAt(n), o.BitLength.encodingType);
            if (
              ((n += o.BitLength.encodingType),
              l === a.VectorEncodingType.RANGE)
            ) {
              t = new r.Vector();
              var p = i.IntEncoder.decode(
                e.substr(n, o.BitLength.numEntries),
                o.BitLength.numEntries
              );
              n += o.BitLength.numEntries;
              for (var d = 0; d < p; d++) {
                var f = s.BooleanEncoder.decode(e.charAt(n));
                n += o.BitLength.singleOrRange;
                var h = i.IntEncoder.decode(
                  e.substr(n, o.BitLength.vendorId),
                  o.BitLength.vendorId
                );
                if (((n += o.BitLength.vendorId), f)) {
                  var v = i.IntEncoder.decode(
                    e.substr(n, o.BitLength.vendorId),
                    o.BitLength.vendorId
                  );
                  n += o.BitLength.vendorId;
                  for (var _ = h; _ <= v; _++) t.set(_);
                } else t.set(h);
              }
            } else {
              var y = e.substr(n, c);
              (n += c), (t = u.FixedVectorEncoder.decode(y, c));
            }
            return (t.bitLength = n), t;
          }),
          (e.buildRangeEncoding = function (e) {
            var t = e.length,
              n = i.IntEncoder.encode(t, o.BitLength.numEntries);
            return (
              e.forEach(function (e) {
                var t = 1 === e.length;
                (n += s.BooleanEncoder.encode(!t)),
                  (n += i.IntEncoder.encode(e[0], o.BitLength.vendorId)),
                  t || (n += i.IntEncoder.encode(e[1], o.BitLength.vendorId));
              }),
              n
            );
          }),
          e
        );
      })();
    t.VendorVectorEncoder = c;
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.VectorEncodingType || (t.VectorEncodingType = {}))[
        (r.FIELD = 0)
      ] = "FIELD"),
      (r[(r.RANGE = 1)] = "RANGE");
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), r(n(120)), r(n(121));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(7),
      a = n(3),
      c = n(40),
      l = n(4),
      p = (function (e) {
        function t(n) {
          var r = e.call(this) || this;
          (r.isReady_ = !1), (r.isLatest = !1);
          var o = t.baseUrl;
          if (((r.lang_ = t.DEFAULT_LANGUAGE), r.isVendorList(n)))
            r.populate(n), (r.readyPromise = Promise.resolve());
          else {
            if (!o)
              throw new a.GVLError(
                "must specify GVL.baseUrl before loading GVL json"
              );
            if (n > 0) {
              var i = n;
              t.CACHE.has(i)
                ? (r.populate(t.CACHE.get(i)),
                  (r.readyPromise = Promise.resolve()))
                : ((o += t.versionedFilename.replace("[VERSION]", i + "")),
                  (r.readyPromise = r.fetchJson(o)));
            } else
              t.CACHE.has(t.LATEST_CACHE_KEY)
                ? (r.populate(t.CACHE.get(t.LATEST_CACHE_KEY)),
                  (r.readyPromise = Promise.resolve()))
                : ((r.isLatest = !0),
                  (r.readyPromise = r.fetchJson(o + t.latestFilename)));
          }
          return r;
        }
        return (
          o(t, e),
          Object.defineProperty(t, "baseUrl", {
            get: function () {
              return this.baseUrl_;
            },
            set: function (e) {
              if (/^https?:\/\/vendorlist\.consensu\.org\//.test(e))
                throw new a.GVLError(
                  "Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache"
                );
              e.length > 0 && "/" !== e[e.length - 1] && (e += "/"),
                (this.baseUrl_ = e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.emptyLanguageCache = function (e) {
            var n = !1;
            return (
              void 0 === e && t.LANGUAGE_CACHE.size > 0
                ? ((t.LANGUAGE_CACHE = new Map()), (n = !0))
                : "string" == typeof e &&
                  this.consentLanguages.has(e.toUpperCase()) &&
                  (t.LANGUAGE_CACHE.delete(e.toUpperCase()), (n = !0)),
              n
            );
          }),
          (t.emptyCache = function (e) {
            var n = !1;
            return (
              Number.isInteger(e) && e >= 0
                ? (t.CACHE.delete(e), (n = !0))
                : void 0 === e && ((t.CACHE = new Map()), (n = !0)),
              n
            );
          }),
          (t.prototype.cacheLanguage = function () {
            t.LANGUAGE_CACHE.has(this.lang_) ||
              t.LANGUAGE_CACHE.set(this.lang_, {
                purposes: this.purposes,
                specialPurposes: this.specialPurposes,
                features: this.features,
                specialFeatures: this.specialFeatures,
                stacks: this.stacks,
              });
          }),
          (t.prototype.fetchJson = function (e) {
            return i(this, void 0, void 0, function () {
              var t, n;
              return s(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      r.trys.push([0, 2, , 3]),
                      (t = this.populate),
                      [4, c.Json.fetch(e)]
                    );
                  case 1:
                    return t.apply(this, [r.sent()]), [3, 3];
                  case 2:
                    throw ((n = r.sent()), new a.GVLError(n.message));
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.getJson = function () {
            return JSON.parse(
              JSON.stringify({
                gvlSpecificationVersion: this.gvlSpecificationVersion,
                vendorListVersion: this.vendorListVersion,
                tcfPolicyVersion: this.tcfPolicyVersion,
                lastUpdated: this.lastUpdated,
                purposes: this.purposes,
                specialPurposes: this.specialPurposes,
                features: this.features,
                specialFeatures: this.specialFeatures,
                stacks: this.stacks,
                vendors: this.fullVendorList,
              })
            );
          }),
          (t.prototype.changeLanguage = function (e) {
            return i(this, void 0, void 0, function () {
              var n, r, o, i, u;
              return s(this, function (s) {
                switch (s.label) {
                  case 0:
                    if (((n = e.toUpperCase()), !t.consentLanguages.has(n)))
                      return [3, 6];
                    if (n === this.lang_) return [3, 5];
                    if (((this.lang_ = n), !t.LANGUAGE_CACHE.has(n)))
                      return [3, 1];
                    for (o in (r = t.LANGUAGE_CACHE.get(n)))
                      r.hasOwnProperty(o) && (this[o] = r[o]);
                    return [3, 5];
                  case 1:
                    (i = t.baseUrl + t.languageFilename.replace("[LANG]", e)),
                      (s.label = 2);
                  case 2:
                    return s.trys.push([2, 4, , 5]), [4, this.fetchJson(i)];
                  case 3:
                    return s.sent(), this.cacheLanguage(), [3, 5];
                  case 4:
                    throw (
                      ((u = s.sent()),
                      new a.GVLError("unable to load language: " + u.message))
                    );
                  case 5:
                    return [3, 7];
                  case 6:
                    throw new a.GVLError("unsupported language " + e);
                  case 7:
                    return [2];
                }
              });
            });
          }),
          Object.defineProperty(t.prototype, "language", {
            get: function () {
              return this.lang_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isVendorList = function (e) {
            return void 0 !== e && void 0 !== e.vendors;
          }),
          (t.prototype.populate = function (e) {
            (this.purposes = e.purposes),
              (this.specialPurposes = e.specialPurposes),
              (this.features = e.features),
              (this.specialFeatures = e.specialFeatures),
              (this.stacks = e.stacks),
              this.isVendorList(e) &&
                ((this.gvlSpecificationVersion = e.gvlSpecificationVersion),
                (this.tcfPolicyVersion = e.tcfPolicyVersion),
                (this.vendorListVersion = e.vendorListVersion),
                (this.lastUpdated = e.lastUpdated),
                "string" == typeof this.lastUpdated &&
                  (this.lastUpdated = new Date(this.lastUpdated)),
                (this.vendors_ = e.vendors),
                (this.fullVendorList = e.vendors),
                this.mapVendors(),
                (this.isReady_ = !0),
                this.isLatest &&
                  t.CACHE.set(t.LATEST_CACHE_KEY, this.getJson()),
                t.CACHE.has(this.vendorListVersion) ||
                  t.CACHE.set(this.vendorListVersion, this.getJson())),
              this.cacheLanguage();
          }),
          (t.prototype.mapVendors = function (e) {
            var t = this;
            (this.byPurposeVendorMap = {}),
              (this.bySpecialPurposeVendorMap = {}),
              (this.byFeatureVendorMap = {}),
              (this.bySpecialFeatureVendorMap = {}),
              Object.keys(this.purposes).forEach(function (e) {
                t.byPurposeVendorMap[e] = {
                  legInt: new Set(),
                  consent: new Set(),
                  flexible: new Set(),
                };
              }),
              Object.keys(this.specialPurposes).forEach(function (e) {
                t.bySpecialPurposeVendorMap[e] = new Set();
              }),
              Object.keys(this.features).forEach(function (e) {
                t.byFeatureVendorMap[e] = new Set();
              }),
              Object.keys(this.specialFeatures).forEach(function (e) {
                t.bySpecialFeatureVendorMap[e] = new Set();
              }),
              Array.isArray(e) ||
                (e = Object.keys(this.fullVendorList).map(function (e) {
                  return +e;
                })),
              (this.vendors_ = e.reduce(function (e, n) {
                var r = t.vendors_["" + n];
                return (
                  r &&
                    void 0 === r.deletedDate &&
                    (r.purposes.forEach(function (e) {
                      t.byPurposeVendorMap[e + ""].consent.add(n);
                    }),
                    r.specialPurposes.forEach(function (e) {
                      t.bySpecialPurposeVendorMap[e + ""].add(n);
                    }),
                    r.legIntPurposes.forEach(function (e) {
                      t.byPurposeVendorMap[e + ""].legInt.add(n);
                    }),
                    r.flexiblePurposes &&
                      r.flexiblePurposes.forEach(function (e) {
                        t.byPurposeVendorMap[e + ""].flexible.add(n);
                      }),
                    r.features.forEach(function (e) {
                      t.byFeatureVendorMap[e + ""].add(n);
                    }),
                    r.specialFeatures.forEach(function (e) {
                      t.bySpecialFeatureVendorMap[e + ""].add(n);
                    }),
                    (e[n] = r)),
                  e
                );
              }, {}));
          }),
          (t.prototype.getFilteredVendors = function (e, t, n, r) {
            var o = this,
              i = e.charAt(0).toUpperCase() + e.slice(1),
              s = {};
            return (
              ("purpose" === e && n
                ? this["by" + i + "VendorMap"][t + ""][n]
                : this["by" + (r ? "Special" : "") + i + "VendorMap"][t + ""]
              ).forEach(function (e) {
                s[e + ""] = o.vendors[e + ""];
              }),
              s
            );
          }),
          (t.prototype.getVendorsWithConsentPurpose = function (e) {
            return this.getFilteredVendors("purpose", e, "consent");
          }),
          (t.prototype.getVendorsWithLegIntPurpose = function (e) {
            return this.getFilteredVendors("purpose", e, "legInt");
          }),
          (t.prototype.getVendorsWithFlexiblePurpose = function (e) {
            return this.getFilteredVendors("purpose", e, "flexible");
          }),
          (t.prototype.getVendorsWithSpecialPurpose = function (e) {
            return this.getFilteredVendors("purpose", e, void 0, !0);
          }),
          (t.prototype.getVendorsWithFeature = function (e) {
            return this.getFilteredVendors("feature", e);
          }),
          (t.prototype.getVendorsWithSpecialFeature = function (e) {
            return this.getFilteredVendors("feature", e, void 0, !0);
          }),
          Object.defineProperty(t.prototype, "vendors", {
            get: function () {
              return this.vendors_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.narrowVendorsTo = function (e) {
            this.mapVendors(e);
          }),
          Object.defineProperty(t.prototype, "isReady", {
            get: function () {
              return this.isReady_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.clone = function () {
            return new t(this.getJson());
          }),
          (t.isInstanceOf = function (e) {
            return (
              "object" == typeof e && "function" == typeof e.narrowVendorsTo
            );
          }),
          (t.LANGUAGE_CACHE = new Map()),
          (t.CACHE = new Map()),
          (t.LATEST_CACHE_KEY = 0),
          (t.DEFAULT_LANGUAGE = "EN"),
          (t.consentLanguages = new l.ConsentLanguages()),
          (t.latestFilename = "vendor-list.json"),
          (t.versionedFilename = "archives/vendor-list-v[VERSION].json"),
          (t.languageFilename = "purposes-[LANG].json"),
          t
        );
      })(u.Cloneable);
    t.GVL = p;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.absCall = function (e, t, n, r) {
          return new Promise(function (o, i) {
            var s = new XMLHttpRequest();
            (s.withCredentials = n),
              s.addEventListener("load", function () {
                if (s.readyState == XMLHttpRequest.DONE)
                  if (s.status >= 200 && s.status < 300) {
                    var e = s.response;
                    if ("string" == typeof e)
                      try {
                        e = JSON.parse(e);
                      } catch (e) {}
                    o(e);
                  } else
                    i(
                      new Error(
                        "HTTP Status: " +
                          s.status +
                          " response type: " +
                          s.responseType
                      )
                    );
              }),
              s.addEventListener("error", function () {
                i(new Error("error"));
              }),
              s.addEventListener("abort", function () {
                i(new Error("aborted"));
              }),
              null === t ? s.open("GET", e, !0) : s.open("POST", e, !0),
              (s.responseType = "json"),
              (s.timeout = r),
              (s.ontimeout = function () {
                i(new Error("Timeout " + r + "ms " + e));
              }),
              s.send(t);
          });
        }),
        (e.post = function (e, t, n, r) {
          return (
            void 0 === n && (n = !1),
            void 0 === r && (r = 0),
            this.absCall(e, JSON.stringify(t), n, r)
          );
        }),
        (e.fetch = function (e, t, n) {
          return (
            void 0 === t && (t = !1),
            void 0 === n && (n = 0),
            this.absCall(e, null, t, n)
          );
        }),
        e
      );
    })();
    t.Json = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(7),
      s = n(3),
      u = n(39),
      a = n(4),
      c = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (
            (n.isServiceSpecific_ = !1),
            (n.supportOOB_ = !0),
            (n.useNonStandardStacks_ = !1),
            (n.purposeOneTreatment_ = !1),
            (n.publisherCountryCode_ = "AA"),
            (n.version_ = 2),
            (n.consentScreen_ = 0),
            (n.policyVersion_ = 2),
            (n.consentLanguage_ = "EN"),
            (n.cmpId_ = 0),
            (n.cmpVersion_ = 0),
            (n.vendorListVersion_ = 0),
            (n.numCustomPurposes_ = 0),
            (n.specialFeatureOptins = new a.Vector()),
            (n.purposeConsents = new a.Vector()),
            (n.purposeLegitimateInterests = new a.Vector()),
            (n.publisherConsents = new a.Vector()),
            (n.publisherLegitimateInterests = new a.Vector()),
            (n.publisherCustomConsents = new a.Vector()),
            (n.publisherCustomLegitimateInterests = new a.Vector()),
            (n.vendorConsents = new a.Vector()),
            (n.vendorLegitimateInterests = new a.Vector()),
            (n.vendorsDisclosed = new a.Vector()),
            (n.vendorsAllowed = new a.Vector()),
            (n.publisherRestrictions = new a.PurposeRestrictionVector()),
            t && (n.gvl = t),
            (n.created = new Date()),
            n.updated(),
            n
          );
        }
        return (
          o(t, e),
          Object.defineProperty(t.prototype, "gvl", {
            get: function () {
              return this.gvl_;
            },
            set: function (e) {
              u.GVL.isInstanceOf(e) || (e = new u.GVL(e)),
                (this.gvl_ = e),
                (this.publisherRestrictions.gvl = e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "cmpId", {
            get: function () {
              return this.cmpId_;
            },
            set: function (e) {
              if (!(Number.isInteger(+e) && e > 1))
                throw new s.TCModelError("cmpId", e);
              this.cmpId_ = +e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "cmpVersion", {
            get: function () {
              return this.cmpVersion_;
            },
            set: function (e) {
              if (!(Number.isInteger(+e) && e > -1))
                throw new s.TCModelError("cmpVersion", e);
              this.cmpVersion_ = +e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "consentScreen", {
            get: function () {
              return this.consentScreen_;
            },
            set: function (e) {
              if (!(Number.isInteger(+e) && e > -1))
                throw new s.TCModelError("consentScreen", e);
              this.consentScreen_ = +e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "consentLanguage", {
            get: function () {
              return this.consentLanguage_;
            },
            set: function (e) {
              this.consentLanguage_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "publisherCountryCode", {
            get: function () {
              return this.publisherCountryCode_;
            },
            set: function (e) {
              if (!/^([A-z]){2}$/.test(e))
                throw new s.TCModelError("publisherCountryCode", e);
              this.publisherCountryCode_ = e.toUpperCase();
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "vendorListVersion", {
            get: function () {
              return this.gvl
                ? this.gvl.vendorListVersion
                : this.vendorListVersion_;
            },
            set: function (e) {
              if (
                ((this.vendorListVersion_ = parseInt(e, 10)),
                this.vendorListVersion_ < 0)
              )
                throw new s.TCModelError("vendorListVersion", e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "policyVersion", {
            get: function () {
              return this.gvl ? this.gvl.tcfPolicyVersion : this.policyVersion_;
            },
            set: function (e) {
              if (
                ((this.policyVersion_ = parseInt(e, 10)),
                this.policyVersion_ < 0)
              )
                throw new s.TCModelError("policyVersion", e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "version", {
            get: function () {
              return this.version_;
            },
            set: function (e) {
              this.version_ = parseInt(e, 10);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isServiceSpecific", {
            get: function () {
              return this.isServiceSpecific_;
            },
            set: function (e) {
              this.isServiceSpecific_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "useNonStandardStacks", {
            get: function () {
              return this.useNonStandardStacks_;
            },
            set: function (e) {
              this.useNonStandardStacks_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "supportOOB", {
            get: function () {
              return this.supportOOB_;
            },
            set: function (e) {
              this.supportOOB_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "purposeOneTreatment", {
            get: function () {
              return this.purposeOneTreatment_;
            },
            set: function (e) {
              this.purposeOneTreatment_ = e;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.setAllVendorConsents = function () {
            this.vendorConsents.setAll(this.gvl.vendors);
          }),
          (t.prototype.unsetAllVendorConsents = function () {
            this.vendorConsents.empty();
          }),
          (t.prototype.setAllVendorsDisclosed = function () {
            this.vendorsDisclosed.setAll(this.gvl.vendors);
          }),
          (t.prototype.unsetAllVendorsDisclosed = function () {
            this.vendorsDisclosed.empty();
          }),
          (t.prototype.setAllVendorsAllowed = function () {
            this.vendorsAllowed.setAll(this.gvl.vendors);
          }),
          (t.prototype.unsetAllVendorsAllowed = function () {
            this.vendorsAllowed.empty();
          }),
          (t.prototype.setAllVendorLegitimateInterests = function () {
            this.vendorLegitimateInterests.setAll(this.gvl.vendors);
          }),
          (t.prototype.unsetAllVendorLegitimateInterests = function () {
            this.vendorLegitimateInterests.empty();
          }),
          (t.prototype.setAllPurposeConsents = function () {
            this.purposeConsents.setAll(this.gvl.purposes);
          }),
          (t.prototype.unsetAllPurposeConsents = function () {
            this.purposeConsents.empty();
          }),
          (t.prototype.setAllPurposeLegitimateInterests = function () {
            this.purposeLegitimateInterests.setAll(this.gvl.purposes);
          }),
          (t.prototype.unsetAllPurposeLegitimateInterests = function () {
            this.purposeLegitimateInterests.empty();
          }),
          (t.prototype.setAllSpecialFeatureOptins = function () {
            this.specialFeatureOptins.setAll(this.gvl.specialFeatures);
          }),
          (t.prototype.unsetAllSpecialFeatureOptins = function () {
            this.specialFeatureOptins.empty();
          }),
          (t.prototype.setAll = function () {
            this.setAllVendorConsents(),
              this.setAllPurposeLegitimateInterests(),
              this.setAllSpecialFeatureOptins(),
              this.setAllPurposeConsents(),
              this.setAllVendorLegitimateInterests();
          }),
          (t.prototype.unsetAll = function () {
            this.unsetAllVendorConsents(),
              this.unsetAllPurposeLegitimateInterests(),
              this.unsetAllSpecialFeatureOptins(),
              this.unsetAllPurposeConsents(),
              this.unsetAllVendorLegitimateInterests();
          }),
          Object.defineProperty(t.prototype, "numCustomPurposes", {
            get: function () {
              var e = this.numCustomPurposes_;
              if ("object" == typeof this.customPurposes) {
                var t = Object.keys(this.customPurposes).sort(function (e, t) {
                  return +e - +t;
                });
                e = parseInt(t.pop(), 10);
              }
              return e;
            },
            set: function (e) {
              if (
                ((this.numCustomPurposes_ = parseInt(e, 10)),
                this.numCustomPurposes_ < 0)
              )
                throw new s.TCModelError("numCustomPurposes", e);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.updated = function () {
            this.lastUpdated = new Date();
          }),
          (t.consentLanguages = u.GVL.consentLanguages),
          t
        );
      })(i.Cloneable);
    t.TCModel = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e) {
      (this.BASE_URL = "https://cdn.conversant.mgr.consensu.org/gdpr/cmp/"),
        (this.EUCONSENT_EP =
          "https://api.conversant.mgr.consensu.org/euconsent"),
        (this.EVENT_EP =
          "https://api.conversant.mgr.consensu.org/gdpr/cmp/event"),
        (this.GVL_HOST =
          "https://cdn.conversant.mgr.consensu.org/gdpr/vendorlist/v2/"),
        (this.BASE_URL += e);
    };
    t.URLDefs = r;
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"gdpr-cmp","version":"3.0.6","description":"Conversant GDPR CMP","license":"UNLICENSED","scripts":{"start":"webpack-dev-server","lint":"eslint --fix --ext .d.ts,.ts,.vue,.js src","build":"./build","build:test":"mocha -R mocha-bamboo-reporter","prepublishOnly":"./build","docs":"./docs/generateCMPConfig.js > ./docs/config.js && ./docs/confluence/updateConfluence.js $npm_package_version","test":"mocha","coverage":"nyc yarn test"},"repository":{"type":"git","url":"http://stash.cnvrmedia.net/scm/gdpr/gdpr-cmp.git"},"publishConfig":{"registry":"http://vault.cnvrmedia.net/nexus/content/repositories/npm-internal/"},"files":["lib/*.html","lib/*.js","lib/*.js.map","lib/*.md","lib/languages"],"dependencies":{"@dpe/contrib":"^1.0.77","@iabtcf/cmpapi":"^1.0.1-2","@iabtcf/core":"^1.0.1-2","css-vars-ponyfill":"^2.0.2","vue":"^2.6.10","vue-class-component":"^7.0.2","vue-property-decorator":"^8.1.0"},"devDependencies":{"@babel/cli":"^7.6.4","@babel/core":"^7.6.4","@babel/preset-env":"^7.6.3","@dpe/types":"^1.1.0-alpha.22","@iabtcf/stub":"^1.0.1-2","@iabtcf/testing":"^1.0.1-2","@types/chai":"^4.2.0","@types/mocha":"^5.2.7","@types/nock":"^10.0.3","@types/node":"^12.12.7","@types/sinon":"^7.5.1","@types/sinon-chai":"^3.2.3","@types/webpack":"^4.41.0","@types/webpack-dev-server":"^3.9.0","@typescript-eslint/eslint-plugin":"^2.14.0","@typescript-eslint/parser":"^2.25.0","@vue/cli":"^4.0.5","@vue/cli-plugin-babel":"^3.9.2","@vue/cli-plugin-eslint":"^3.9.2","@vue/cli-plugin-typescript":"^3.9.0","@vue/cli-plugin-unit-mocha":"^3.9.0","@vue/cli-service":"^3.12.0","@vue/eslint-config-typescript":"^5.0.2","@vue/test-utils":"1.0.0-beta.29","babel-eslint":"^10.0.1","babel-loader":"^8.0.6","babel-plugin-istanbul":"^5.2.0","babel-preset-vue":"^2.0.2","babel-register":"^6.26.0","chai":"^4.2.0","confluence-api":"^1.4.0","copy-webpack-plugin":"^5.0.4","css-loader":"*","eslint":"^6.0.0","eslint-config-dpe":"^1.0.32","eslint-plugin-json":"^2.0.1","eslint-plugin-node":"^10.0.0","eslint-plugin-vue":"^6.0.0","friendly-errors-webpack-plugin":"^1.7.0","html-webpack-inline-source-plugin":"^0.0.10","html-webpack-plugin":"^3.2.0","jsdom":"^15.1.1","jsdom-global":"^3.0.2","json":"^9.0.6","mocha":"^6.2.2","mocha-bamboo-reporter":"^1.1.2","nock":"^10.0.6","node-sass":"~4.12.0","nyc":"^15.0.0","sass-loader":"^7.1.0","showdown":"^1.9.1","sinon":"^7.4.1","source-map-support":"^0.5.16","terser":"^4.4.0","ts-loader":"^6.2.1","ts-node":"^8.5.2","tsconfig-paths":"^3.9.0","typescript":"3.7","vue-eslint-parser":"^6.0.4","vue-loader":"^15.7.1","vue-template-compiler":"^2.6.10","webpack":"^4.41.2","webpack-cli":"^3.3.10","webpack-dev-server":"^3.9.0"}}'
    );
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(230)),
      r(n(235)),
      r(n(236)),
      r(n(49)),
      r(n(161));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e(e, t, n) {
        (this.callback = e),
          (this.param = t),
          (this.listenerId = n),
          this.isValid() ? this.success() : this.fail();
      }
      return (
        (e.prototype.isValid = function () {
          return !0;
        }),
        (e.prototype.fail = function () {
          (0, this.callback)(null, !1);
        }),
        e
      );
    })();
    t.Command = r;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(15);
    t.Response = function () {
      (this.cmpId = r.CmpApiModel.cmpId),
        (this.cmpVersion = r.CmpApiModel.cmpVersion),
        (this.gdprApplies = r.CmpApiModel.gdprApplies),
        (this.tcfPolicyVersion = r.CmpApiModel.tcfPolicyVersion);
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(231)),
      r(n(232)),
      r(n(233));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(45),
      a = n(44),
      c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  (0, this.callback)(
                    new a.TCData(this.param, this.listenerId),
                    !0
                  ),
                  [2]
                );
              });
            });
          }),
          (t.prototype.isValid = function () {
            var e = !0;
            return (
              void 0 !== this.param &&
                (e =
                  (e = Array.isArray(this.param)) &&
                  this.param.every(function (e) {
                    return Number.isInteger(e);
                  })),
              e
            );
          }),
          t
        );
      })(u.Command);
    t.GetTCDataCommand = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(6),
      o = (function () {
        function e() {}
        return (
          (e.getMilliSecondsFromDays = function (e) {
            return r.GlobalConstants.MILLISECOND_DAY * e;
          }),
          (e.fillCookieJar = function () {
            var e = this;
            (this.cookieJar = {}),
              document.cookie.split(";").forEach(function (t) {
                var n = t.split("="),
                  r = n[0].trim();
                e.cookieJar[r] = n[1];
              });
          }),
          (e.getCookie = function (t) {
            return this.cookieJar || e.fillCookieJar(), this.cookieJar[t] || "";
          }),
          (e.writeCookie = function (e, t, n) {
            var r,
              o,
              i = document.location.host.split("."),
              s = i[i.length - 2];
            (o =
              e +
              "=" +
              t +
              "; domain=" +
              (r =
                "co" === s || "com" === s
                  ? "." + i.slice(-3).join(".")
                  : "." + i.slice(-2).join(".")) +
              "; path=/; SameSite=Lax;"),
              ~r.indexOf("localhost") &&
                (o = e + "=" + t + "; path=/; SameSite=Lax;"),
              n &&
                n > 0 &&
                ((o +=
                  " expires=" +
                  new Date(
                    new Date().getTime() + this.getMilliSecondsFromDays(n)
                  ).toUTCString() +
                  ";"),
                (o +=
                  " Max-Age=" + this.getMilliSecondsFromDays(n) / 1e3 + ";")),
              (document.cookie = o),
              (this.cookieJar = void 0);
          }),
          e
        );
      })();
    t.CookieAPI = o;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (n.name = "DecodingError"), n;
      }
      return o(t, e), t;
    })(Error);
    t.DecodingError = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (n.name = "EncodingError"), n;
      }
      return o(t, e), t;
    })(Error);
    t.EncodingError = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (n.name = "GVLError"), n;
      }
      return o(t, e), t;
    })(Error);
    t.GVLError = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = (function (e) {
      function t(t, n, r) {
        void 0 === r && (r = "");
        var o =
          e.call(this, "invalid value " + n + " passed for " + t + " " + r) ||
          this;
        return (o.name = "TCModelError"), o;
      }
      return o(t, e), t;
    })(Error);
    t.TCModelError = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.prototype.has = function (t) {
          return e.langSet.has(t);
        }),
        (e.prototype.forEach = function (t) {
          e.langSet.forEach(t);
        }),
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            return e.langSet.size;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.langSet = new Set([
          "BG",
          "CA",
          "CS",
          "DA",
          "DE",
          "EL",
          "EN",
          "ES",
          "ET",
          "FI",
          "FR",
          "HR",
          "HU",
          "IT",
          "LT",
          "LV",
          "MT",
          "NL",
          "NO",
          "PL",
          "PT",
          "RO",
          "RU",
          "SK",
          "SL",
          "SV",
          "ZH",
        ])),
        e
      );
    })();
    t.ConsentLanguages = r;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(30),
      s = n(28),
      u = n(20),
      a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.bitLength = 0), (t.map = new Map()), t;
        }
        return (
          o(t, e),
          (t.prototype.has = function (e) {
            return this.map.has(e);
          }),
          (t.prototype.isOkToHave = function (e, t, n) {
            var r = n.toString();
            if (this.gvl) {
              if (!this.gvl.vendors || !this.gvl.vendors[r]) return !1;
              var o = this.gvl.vendors[r];
              if (o.flexiblePurposes.length)
                switch (e) {
                  case u.RestrictionType.NOT_ALLOWED:
                    return (
                      o.legIntPurposes.includes(t) || o.purposes.includes(t)
                    );
                  case u.RestrictionType.REQUIRE_CONSENT:
                    return (
                      o.flexiblePurposes.includes(t) &&
                      o.legIntPurposes.includes(t)
                    );
                  case u.RestrictionType.REQUIRE_LI:
                    return (
                      o.flexiblePurposes.includes(t) && o.purposes.includes(t)
                    );
                  default:
                    return !1;
                }
              else if (e === u.RestrictionType.NOT_ALLOWED)
                return o.legIntPurposes.includes(t) || o.purposes.includes(t);
            }
            return !0;
          }),
          (t.prototype.add = function (e, t) {
            var n = this;
            if (this.isOkToHave(t.restrictionType, t.purposeId, e)) {
              var r = t.hash;
              this.has(r) ||
                (this.map.set(r, new s.BinarySearchTree()),
                (this.bitLength = 0)),
                this.getRestrictions(e).forEach(function (r) {
                  r.purposeId === t.purposeId && n.remove(e, r);
                }),
                this.map.get(r).add(e);
            }
          }),
          (t.prototype.getVendors = function (e) {
            var t = [];
            if (e) {
              var n = e.hash;
              this.has(n) && (t = this.map.get(n).get());
            } else {
              var r = new Set();
              this.map.forEach(function (e) {
                e.get().forEach(function (e) {
                  r.add(e);
                });
              }),
                (t = Array.from(r));
            }
            return t;
          }),
          (t.prototype.getRestrictionType = function (e, t) {
            var n;
            return (
              this.getRestrictions(e).forEach(function (e) {
                e.purposeId === t &&
                  (void 0 === n || n > e.restrictionType) &&
                  (n = e.restrictionType);
              }),
              n
            );
          }),
          (t.prototype.vendorHasRestriction = function (e, t) {
            for (
              var n = !1, r = this.getRestrictions(e), o = 0;
              o < r.length && !n;
              o++
            )
              n = t.isSameAs(r[o]);
            return n;
          }),
          (t.prototype.getMaxVendorId = function () {
            var e = 0;
            return (
              this.map.forEach(function (t) {
                e = Math.max(t.max(), e);
              }),
              e
            );
          }),
          (t.prototype.getRestrictions = function (e) {
            var t = [];
            return (
              this.map.forEach(function (n, r) {
                e
                  ? n.contains(e) && t.push(i.PurposeRestriction.unHash(r))
                  : t.push(i.PurposeRestriction.unHash(r));
              }),
              t
            );
          }),
          (t.prototype.getPurposes = function () {
            var e = new Set();
            return (
              this.map.forEach(function (t, n) {
                e.add(i.PurposeRestriction.unHash(n).purposeId);
              }),
              Array.from(e)
            );
          }),
          (t.prototype.remove = function (e, t) {
            var n = t.hash,
              r = this.map.get(n);
            r &&
              (r.remove(e),
              r.isEmpty() && (this.map.delete(n), (this.bitLength = 0)));
          }),
          Object.defineProperty(t.prototype, "gvl", {
            get: function () {
              return this.gvl_;
            },
            set: function (e) {
              var t = this;
              this.gvl_ ||
                ((this.gvl_ = e),
                this.numRestrictions &&
                  this.map.forEach(function (e, n) {
                    var r = i.PurposeRestriction.unHash(n);
                    e.get().forEach(function (n) {
                      t.isOkToHave(r.restrictionType, r.purposeId, n) ||
                        e.remove(n);
                    });
                  }));
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isEmpty = function () {
            return 0 === this.map.size;
          }),
          (t.prototype.isEncodable = function () {
            return void 0 !== this.gvl_ && !this.isEmpty();
          }),
          Object.defineProperty(t.prototype, "numRestrictions", {
            get: function () {
              return this.map.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          t
        );
      })(n(7).Cloneable);
    t.PurposeRestrictionVector = a;
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(31),
      i = (function () {
        function e() {}
        return (
          (e.ID_TO_KEY = [
            o.Segment.CORE,
            o.Segment.VENDORS_DISCLOSED,
            o.Segment.VENDORS_ALLOWED,
            o.Segment.PUBLISHER_TC,
          ]),
          (e.KEY_TO_ID =
            (((r = {})[o.Segment.CORE] = 0),
            (r[o.Segment.VENDORS_DISCLOSED] = 1),
            (r[o.Segment.VENDORS_ALLOWED] = 2),
            (r[o.Segment.PUBLISHER_TC] = 3),
            r)),
          e
        );
      })();
    t.SegmentIDs = i;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
      s =
        (this && this.__values) ||
        function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length)
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  { value: e && e[r++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? "Object is not iterable." : "Symbol.iterator is not defined."
          );
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(7),
      a = n(3),
      c = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.bitLength = 0), (t.maxId_ = 0), (t.set_ = new Set()), t;
        }
        return (
          o(t, e),
          (t.prototype[Symbol.iterator] = function () {
            var e;
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  (e = 1), (t.label = 1);
                case 1:
                  return e <= this.maxId ? [4, [e, this.has(e)]] : [3, 4];
                case 2:
                  t.sent(), (t.label = 3);
                case 3:
                  return e++, [3, 1];
                case 4:
                  return [2];
              }
            });
          }),
          Object.defineProperty(t.prototype, "maxId", {
            get: function () {
              return this.maxId_;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.has = function (e) {
            return this.set_.has(e);
          }),
          (t.prototype.unset = function (e) {
            var t = this;
            Array.isArray(e)
              ? e.forEach(function (e) {
                  return t.unset(e);
                })
              : (this.set_.delete(e),
                (this.bitLength = 0),
                e === this.maxId &&
                  ((this.maxId_ = 0),
                  this.set_.forEach(function (e) {
                    t.maxId_ = Math.max(t.maxId, e);
                  })));
          }),
          (t.prototype.set = function (e) {
            var t = this;
            if (Array.isArray(e))
              e.forEach(function (e) {
                return t.set(e);
              });
            else {
              if (!(Number.isInteger(e) && e > 0))
                throw new a.TCModelError(
                  "set()",
                  e,
                  "must be positive integer"
                );
              this.set_.add(e),
                (this.maxId_ = Math.max(this.maxId, e)),
                (this.bitLength = 0);
            }
          }),
          (t.prototype.empty = function () {
            this.set_ = new Set();
          }),
          (t.prototype.forEach = function (e) {
            var t, n;
            try {
              for (var r = s(this), o = r.next(); !o.done; o = r.next()) {
                var i = o.value;
                e(i[1], i[0]);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                o && !o.done && (n = r.return) && n.call(r);
              } finally {
                if (t) throw t.error;
              }
            }
          }),
          Object.defineProperty(t.prototype, "size", {
            get: function () {
              return this.set_.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.setAll = function (e) {
            var t = this;
            Object.keys(e).forEach(function (e) {
              t.set(+e);
            });
          }),
          t
        );
      })(u.Cloneable);
    t.Vector = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(27),
      o = n(19),
      i = n(32),
      s = n(38),
      u = n(3),
      a = n(29),
      c = n(4),
      l = (function () {
        function e() {}
        return (
          (e.encode = function (e, t) {
            var n,
              s = this;
            try {
              n = this.fieldSequence["" + e.version][t];
            } catch (n) {
              throw new u.EncodingError(
                "Unable to encode version: " + e.version + ", segment: " + t
              );
            }
            var l = "";
            return (
              t !== c.Segment.CORE &&
                (l = i.IntEncoder.encode(
                  c.SegmentIDs.KEY_TO_ID[t],
                  o.BitLength.segmentType
                )),
              n.forEach(function (n) {
                var r = e[n],
                  c = i.FieldEncoderMap[n],
                  p = o.BitLength[n];
                void 0 === p &&
                  s.isPublisherCustom(n) &&
                  (p = +e[a.Fields.numCustomPurposes]);
                try {
                  l += c.encode(r, p);
                } catch (e) {
                  throw new u.EncodingError(
                    "Error encoding " + t + "->" + n + ": " + e.message
                  );
                }
              }),
              r.Base64Url.encode(l)
            );
          }),
          (e.decode = function (e, t, n) {
            var s = this,
              l = this.fieldSequence["" + t.version][n],
              p = r.Base64Url.decode(e),
              d = 0;
            return (
              n !== c.Segment.CORE && (d += o.BitLength.segmentType),
              l.forEach(function (e) {
                var n = i.FieldEncoderMap[e],
                  r = o.BitLength[e];
                if (
                  (void 0 === r &&
                    s.isPublisherCustom(e) &&
                    (r = +t[a.Fields.numCustomPurposes]),
                  0 !== r)
                ) {
                  var c = p.substr(d, r);
                  if (((t[e] = n.decode(c, r)), Number.isInteger(r))) d += r;
                  else {
                    if (!Number.isInteger(t[e].bitLength))
                      throw new u.DecodingError(e);
                    d += t[e].bitLength;
                  }
                }
              }),
              t
            );
          }),
          (e.isPublisherCustom = function (e) {
            return 0 === e.indexOf("publisherCustom");
          }),
          (e.fieldSequence = new s.FieldSequence()),
          e
        );
      })();
    t.SegmentEncoder = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(4),
      o = n(11),
      i = n(33),
      s = n(21),
      u = n(8),
      a = n(34),
      c = n(35),
      l = n(36),
      p = (function () {
        function e() {}
        var t,
          n,
          p,
          d,
          f,
          h,
          v,
          _,
          y,
          g,
          b,
          m,
          E,
          C,
          S,
          O,
          w,
          I,
          P,
          L,
          A,
          M,
          T,
          V,
          D,
          j;
        return (
          (t = r.Fields.version),
          (n = r.Fields.created),
          (p = r.Fields.lastUpdated),
          (d = r.Fields.cmpId),
          (f = r.Fields.cmpVersion),
          (h = r.Fields.consentScreen),
          (v = r.Fields.consentLanguage),
          (_ = r.Fields.vendorListVersion),
          (y = r.Fields.policyVersion),
          (g = r.Fields.isServiceSpecific),
          (b = r.Fields.useNonStandardStacks),
          (m = r.Fields.specialFeatureOptins),
          (E = r.Fields.purposeConsents),
          (C = r.Fields.purposeLegitimateInterests),
          (S = r.Fields.purposeOneTreatment),
          (O = r.Fields.publisherCountryCode),
          (w = r.Fields.vendorConsents),
          (I = r.Fields.vendorLegitimateInterests),
          (P = r.Fields.publisherRestrictions),
          (L = r.Fields.vendorsDisclosed),
          (A = r.Fields.vendorsAllowed),
          (M = r.Fields.publisherConsents),
          (T = r.Fields.publisherLegitimateInterests),
          (V = r.Fields.numCustomPurposes),
          (D = r.Fields.publisherCustomConsents),
          (j = r.Fields.publisherCustomLegitimateInterests),
          (e[t] = u.IntEncoder),
          (e[n] = i.DateEncoder),
          (e[p] = i.DateEncoder),
          (e[d] = u.IntEncoder),
          (e[f] = u.IntEncoder),
          (e[h] = u.IntEncoder),
          (e[v] = a.LangEncoder),
          (e[_] = u.IntEncoder),
          (e[y] = u.IntEncoder),
          (e[g] = o.BooleanEncoder),
          (e[b] = o.BooleanEncoder),
          (e[m] = s.FixedVectorEncoder),
          (e[E] = s.FixedVectorEncoder),
          (e[C] = s.FixedVectorEncoder),
          (e[S] = o.BooleanEncoder),
          (e[O] = a.LangEncoder),
          (e[w] = l.VendorVectorEncoder),
          (e[I] = l.VendorVectorEncoder),
          (e[P] = c.PurposeRestrictionVectorEncoder),
          (e.segmentType = u.IntEncoder),
          (e[L] = l.VendorVectorEncoder),
          (e[A] = l.VendorVectorEncoder),
          (e[M] = s.FixedVectorEncoder),
          (e[T] = s.FixedVectorEncoder),
          (e[V] = u.IntEncoder),
          (e[D] = s.FixedVectorEncoder),
          (e[j] = s.FixedVectorEncoder),
          e
        );
      })();
    t.FieldEncoderMap = p;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(4);
    t.FieldSequence = function () {
      var e, t;
      (this[1] =
        (((e = {})[r.Segment.CORE] = [
          r.Fields.version,
          r.Fields.created,
          r.Fields.lastUpdated,
          r.Fields.cmpId,
          r.Fields.cmpVersion,
          r.Fields.consentScreen,
          r.Fields.consentLanguage,
          r.Fields.vendorListVersion,
          r.Fields.purposeConsents,
          r.Fields.vendorConsents,
        ]),
        e)),
        (this[2] =
          (((t = {})[r.Segment.CORE] = [
            r.Fields.version,
            r.Fields.created,
            r.Fields.lastUpdated,
            r.Fields.cmpId,
            r.Fields.cmpVersion,
            r.Fields.consentScreen,
            r.Fields.consentLanguage,
            r.Fields.vendorListVersion,
            r.Fields.policyVersion,
            r.Fields.isServiceSpecific,
            r.Fields.useNonStandardStacks,
            r.Fields.specialFeatureOptins,
            r.Fields.purposeConsents,
            r.Fields.purposeLegitimateInterests,
            r.Fields.purposeOneTreatment,
            r.Fields.publisherCountryCode,
            r.Fields.vendorConsents,
            r.Fields.vendorLegitimateInterests,
            r.Fields.publisherRestrictions,
          ]),
          (t[r.Segment.PUBLISHER_TC] = [
            r.Fields.publisherConsents,
            r.Fields.publisherLegitimateInterests,
            r.Fields.numCustomPurposes,
            r.Fields.publisherCustomConsents,
            r.Fields.publisherCustomLegitimateInterests,
          ]),
          (t[r.Segment.VENDORS_ALLOWED] = [r.Fields.vendorsAllowed]),
          (t[r.Segment.VENDORS_DISCLOSED] = [r.Fields.vendorsDisclosed]),
          t));
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(4);
    t.SegmentSequence = function (e, t) {
      if (
        ((this[1] = [r.Segment.CORE]),
        (this[2] = [r.Segment.CORE]),
        2 === e.version)
      )
        if (e.isServiceSpecific) this[2].push(r.Segment.PUBLISHER_TC);
        else {
          var n = !(!t || !t.isForVendors);
          (n && !0 !== e[r.Fields.supportOOB]) ||
            this[2].push(r.Segment.VENDORS_DISCLOSED),
            n &&
              (e[r.Fields.supportOOB] &&
                e[r.Fields.vendorsAllowed].size > 0 &&
                this[2].push(r.Segment.VENDORS_ALLOWED),
              this[2].push(r.Segment.PUBLISHER_TC));
        }
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(18),
      o = n(3),
      i = n(8),
      s = n(4),
      u = n(41),
      a = (function () {
        function e() {}
        return (
          (e.encode = function (t, n) {
            var i,
              u = "",
              a = t.gvl;
            if (!a)
              throw new o.EncodingError(
                "Unable to encode TCModel without a GVL"
              );
            if (!a.isReady)
              throw new o.EncodingError(
                "Unable to encode TCModel tcModel.gvl.readyPromise is not resolved"
              );
            ((t = t.clone()).consentLanguage = a.language),
              t[s.Fields.purposeLegitimateInterests].has(1) &&
                t[s.Fields.purposeLegitimateInterests].unset(1);
            var c = Object.keys(a.vendors).map(function (e) {
              return parseInt(e, 10);
            });
            return (
              t.vendorsDisclosed.set(c),
              n && 1 === n.version
                ? (t.version = 1)
                : (t.version = e.MAX_ENCODING_VERSION),
              (i =
                n && Array.isArray(n.segments)
                  ? n.segments
                  : new r.SegmentSequence(t, n)["" + t.version]).forEach(
                function (e, n) {
                  var o = "";
                  n < i.length - 1 && (o = "."),
                    (u += r.SegmentEncoder.encode(t, e) + o);
                }
              ),
              u
            );
          }),
          (e.decode = function (e, t) {
            var n = e.split("."),
              o = n.length;
            t || (t = new u.TCModel());
            for (var a = 0; a < o; a++) {
              var c = n[a],
                l = r.Base64Url.decode(c.charAt(0)).substr(
                  0,
                  r.BitLength.segmentType
                ),
                p =
                  s.SegmentIDs.ID_TO_KEY[
                    i.IntEncoder.decode(l, r.BitLength.segmentType).toString()
                  ];
              r.SegmentEncoder.decode(c, t, p);
            }
            return t;
          }),
          (e.MAX_ENCODING_VERSION = 2),
          e
        );
      })();
    t.TCString = a;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.performMagic = function (e, t, n, r) {
          return (
            void 0 === n && (n = null),
            new Promise(function (o, i) {
              var s = new XMLHttpRequest();
              (s.withCredentials = ~e.indexOf("euconsent")),
                "POST" === t
                  ? s.overrideMimeType("application/json")
                  : (s.responseType = "json"),
                s.open(t, e, !0),
                void 0 !== r && r > 0 && (s.timeout = r),
                (s.ontimeout = function () {
                  i(new Error("Timeout " + r + "ms " + e));
                }),
                (s.onreadystatechange = function () {
                  4 == s.readyState &&
                    (s.status >= 200 && s.status < 300
                      ? s.response
                        ? o(s.response)
                        : o()
                      : i(new Error("HTTP Error " + s.status)),
                    (s.onreadystatechange = null));
                }),
                s.send(n);
            })
          );
        }),
        (e.get = function (e, t) {
          return this.performMagic(e, "GET", void 0, t);
        }),
        (e.post = function (e, t) {
          return this.performMagic(e, "POST", JSON.stringify(t));
        }),
        e
      );
    })();
    t.JSONUtils = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.PING = "ping"),
        (e.GET_TC_DATA = "getTCData"),
        (e.GET_IN_APP_TC_DATA = "getInAppTCData"),
        (e.GET_VENDOR_LIST = "getVendorList"),
        (e.ADD_EVENT_LISTENER = "addEventListener"),
        (e.REMOVE_EVENT_LISTENER = "removeEventListener"),
        e
      );
    })();
    t.TCFCommands = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(162),
      i = n(6),
      s = n(5),
      u = n(126),
      a = n(12),
      c = (function () {
        function e() {
          var e = this;
          this.url = i.GlobalConstants.EUCONSENT_EP;
          var t = {
              configId: s.BootstrapModel.config.id,
              cmpVersion: i.GlobalConstants.VERSION,
              c: Math.round(1e11 * Math.random()),
            },
            n = !0;
          Object.keys(t).forEach(function (r) {
            n ? ((n = !1), (e.url += "?")) : (e.url += "&"),
              (e.url += r + "=" + t[r]);
          });
        }
        return (
          (e.prototype.read = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var t, n;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    a.Debug.logEvent("service", e.START), (r.label = 1);
                  case 1:
                    return (
                      r.trys.push([1, 3, , 4]),
                      [
                        4,
                        u.JSONUtils.get(
                          this.url,
                          i.GlobalConstants.CONSENSU_TIMEOUT
                        ),
                      ]
                    );
                  case 2:
                    return (
                      (t = r.sent()), a.Debug.logEvent("service", e.END), [3, 4]
                    );
                  case 3:
                    return (
                      (n = r.sent()),
                      a.Debug.logEvent("serviceError", n),
                      [3, 4]
                    );
                  case 4:
                    return [2, t];
                }
              });
            });
          }),
          (e.prototype.write = function (t) {
            return r.__awaiter(this, void 0, void 0, function () {
              var n, i;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      a.Debug.logEvent("check3rdParty", e.START),
                      [4, o.ThirdPartyCookieChecker.check()]
                    );
                  case 1:
                    if (
                      ((n = r.sent()),
                      a.Debug.logEvent("check3rdParty", e.END),
                      a.Debug.logEvent("3rdPartySupport", n),
                      !n)
                    )
                      return [3, 5];
                    r.label = 2;
                  case 2:
                    return (
                      r.trys.push([2, 4, , 5]),
                      a.Debug.logEvent("service", e.START),
                      [4, u.JSONUtils.post(this.url, { euconsentV2: t })]
                    );
                  case 3:
                    return (
                      r.sent(),
                      (n = !0),
                      a.Debug.logEvent("service", e.END),
                      [3, 5]
                    );
                  case 4:
                    return (
                      (i = r.sent()),
                      a.Debug.logEvent("serviceError", i),
                      (n = !1),
                      [3, 5]
                    );
                  case 5:
                    return [2, n];
                }
              });
            });
          }),
          (e.START = "start"),
          (e.END = "end"),
          e
        );
      })();
    t.ConsensuService = c;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(12),
      s = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "IsNewTCString"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e;
              return r.__generator(this, function (t) {
                return (
                  (e = "" === o.BootstrapModel.tcString),
                  i.Debug.logEvent("isNewTCString", e),
                  [2, e]
                );
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.IsNewTCString = s;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    r.__exportStar(n(12), t), r.__exportStar(n(227), t);
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      s =
        (this && this.__spread) ||
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(15),
      a = (function (e) {
        function t(t, n) {
          var r = e.call(this) || this;
          if (
            ((r.eventStatus = u.CmpApiModel.eventStatus),
            (r.cmpStatus = u.CmpApiModel.cmpStatus),
            (r.listenerId = n),
            u.CmpApiModel.gdprApplies)
          ) {
            var o = u.CmpApiModel.tcModel;
            (r.tcString = u.CmpApiModel.tcString),
              (r.isServiceSpecific = o.isServiceSpecific),
              (r.useNonStandardStacks = o.useNonStandardStacks),
              (r.purposeOneTreatment = o.purposeOneTreatment),
              (r.publisherCC = o.publisherCountryCode),
              (r.outOfBand = {
                allowedVendors: r.createVectorField(o.vendorsAllowed, t),
                disclosedVendors: r.createVectorField(o.vendorsDisclosed, t),
              }),
              (r.purpose = {
                consents: r.createVectorField(o.purposeConsents),
                legitimateInterests: r.createVectorField(
                  o.purposeLegitimateInterests
                ),
              }),
              (r.vendor = {
                consents: r.createVectorField(o.vendorConsents, t),
                legitimateInterests: r.createVectorField(
                  o.vendorLegitimateInterests,
                  t
                ),
              }),
              (r.specialFeatureOptins = r.createVectorField(
                o.specialFeatureOptins
              )),
              (r.publisher = {
                consents: r.createVectorField(o.publisherConsents),
                legitimateInterests: r.createVectorField(
                  o.publisherLegitimateInterests
                ),
                customPurpose: {
                  consents: r.createVectorField(o.publisherCustomConsents),
                  legitimateInterests: r.createVectorField(
                    o.publisherCustomLegitimateInterests
                  ),
                },
                restrictions: r.createRestrictions(o.publisherRestrictions),
              });
          }
          return r;
        }
        return (
          o(t, e),
          (t.prototype.createRestrictions = function (e) {
            var t = {};
            if (e.numRestrictions > 0)
              for (
                var n = e.getMaxVendorId(),
                  r = function (n) {
                    var r = n.toString();
                    e.getRestrictions(n).forEach(function (e) {
                      var n = e.purposeId.toString();
                      t[n] || (t[n] = {}), (t[n][r] = e.restrictionType);
                    });
                  },
                  o = 1;
                o <= n;
                o++
              )
                r(o);
            return t;
          }),
          (t.prototype.createVectorField = function (e, t) {
            return t
              ? t.reduce(function (t, n) {
                  return (t[n + ""] = e.has(+n)), t;
                }, {})
              : s(e).reduce(function (e, t) {
                  return (e[t[0].toString(10)] = t[1]), e;
                }, {});
          }),
          t
        );
      })(n(49).Response);
    t.TCData = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      i = (function () {
        function e() {}
        return (
          (e.check = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [
                  2,
                  new Promise(function (e) {
                    var t = window,
                      n = document.createElement("iframe"),
                      r = function (i) {
                        var s = i.data;
                        "string" == typeof s &&
                          ~s.indexOf(
                            o.GlobalConstants.THIRDPC_POSTMESSAGE_PREFIX
                          ) &&
                          (n.parentNode.removeChild(n),
                          t.removeEventListener("message", r, !1),
                          e(
                            s ===
                              o.GlobalConstants.THIRDPC_POSTMESSAGE_PREFIX +
                                "active"
                          ));
                      };
                    t.addEventListener("message", r, !1),
                      (n.style.display = "none;"),
                      document.body.appendChild(n),
                      (n.src =
                        o.GlobalConstants.BASE_URL +
                        "/" +
                        o.GlobalConstants.THIRDPC_HTML);
                  }),
                ];
              });
            });
          }),
          e
        );
      })();
    t.ThirdPartyCookieChecker = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.ALL = "all"), (e.SOME = "some"), (e.NONE = "none");
      })(t.ConsentAccept || (t.ConsentAccept = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    r.__exportStar(n(165), t),
      r.__exportStar(n(9), t),
      r.__exportStar(n(250), t),
      r.__exportStar(n(167), t),
      r.__exportStar(n(168), t),
      r.__exportStar(n(169), t),
      r.__exportStar(n(170), t),
      r.__exportStar(n(171), t),
      r.__exportStar(n(129), t),
      r.__exportStar(n(172), t),
      r.__exportStar(n(173), t),
      r.__exportStar(n(174), t),
      r.__exportStar(n(251), t),
      r.__exportStar(n(178), t),
      r.__exportStar(n(177), t),
      r.__exportStar(n(179), t),
      r.__exportStar(n(180), t),
      r.__exportStar(n(166), t);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(9),
      s = n(12),
      u = n(10),
      a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "CanDecodeTCString"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e;
              return r.__generator(this, function (t) {
                e = !0;
                try {
                  o.BootstrapModel.tcModel = u.TCString.decode(
                    o.BootstrapModel.tcString
                  );
                } catch (t) {
                  (e = !1), s.Debug.logEvent("invalidTCStringParse");
                }
                return [2, e];
              });
            });
          }),
          t
        );
      })(i.Decision);
    t.CanDecodeTCString = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        (e.YES = "yes"), (e.NO = "no");
      })(t.YesOrNo || (t.YesOrNo = {}));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(9),
      s = n(12),
      u = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "GDPRApplies"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e;
              return r.__generator(this, function (t) {
                return (
                  (e = o.BootstrapModel.consensuResponse.gdprApplies),
                  s.Debug.logEvent("gdprApplies", e),
                  s.Debug.setGUID(o.BootstrapModel.consensuResponse.id),
                  [2, e || o.BootstrapModel.config.gdprAppliesGlobally]
                );
              });
            });
          }),
          t
        );
      })(i.Decision);
    t.GDPRApplies = u;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "GVLVersionDifferent"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [
                  2,
                  o.BootstrapModel.gvl.vendorListVersion !==
                    o.BootstrapModel.tcModel.vendorListVersion,
                ];
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.GVLVersionDifferent = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "HasConfig"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [2, void 0 !== o.BootstrapModel.config];
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.HasConfig = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(6),
      s = n(9),
      u = n(12),
      a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "HasValidVendors"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e, t;
              return r.__generator(this, function (n) {
                return (
                  (e = o.BootstrapModel.config.vendors),
                  (t =
                    void 0 === e ||
                    (Array.isArray(e) && 0 === e.length) ||
                    e.includes(i.GlobalConstants.CONVERSANT_VENDOR_ID)) ||
                    u.Debug.logEvent("requireVendorsNotPresent"),
                  [2, t]
                );
              });
            });
          }),
          t
        );
      })(s.Decision);
    t.HasValidVendors = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(6),
      s = n(9),
      u = n(52),
      a = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "IsConfigVersionDifferent"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [
                  2,
                  (o.BootstrapModel.config.inAppConfig
                    ? o.BootstrapModel.config.inAppConfig.storedVersion
                    : u.CookieAPI.getCookie(
                        i.GlobalConstants.CONFIG_VERSION_COOKIE
                      )) !== o.BootstrapModel.config.version,
                ];
              });
            });
          }),
          t
        );
      })(s.Decision);
    t.IsConfigVersionDifferent = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.name = "IsNotPrivacyPolicyPage"),
            (t.getWindowLocationPath = function () {
              return window.location.pathname;
            }),
            t
          );
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [
                  2,
                  new URL(o.BootstrapModel.config.policyUrl).pathname !==
                    this.getWindowLocationPath(),
                ];
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.IsNotPrivacyPolicyPage = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "ListedVendorsChanged"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e, t, n, i, s, u, a, c;
              return r.__generator(this, function (r) {
                for (
                  e = !1,
                    t = o.BootstrapModel.config.vendors,
                    n = o.BootstrapModel.gvl,
                    i = o.BootstrapModel.tcModel.gvl,
                    s = 0;
                  s < t.length && !e;
                  s++
                )
                  (u = t[s]),
                    (a = n.vendors[u]),
                    (c = i.vendors[u]),
                    (e = this.determineDifference(a, c));
                return [2, e];
              });
            });
          }),
          (t.prototype.determineDifference = function (e, t) {
            var n = !1;
            return (
              t
                ? !e || e.deletedDate
                  ? (n = !1)
                  : (this.diffStrings(e.name, t.name) ||
                      this.diffStrings(e.policyUrl, t.policyUrl) ||
                      this.diffArrays(e.purposes, t.purposes) ||
                      this.diffArrays(e.legIntPurposes, t.legIntPurposes) ||
                      this.diffArrays(e.features, t.features) ||
                      this.diffArrays(e.specialPurposes, t.specialPurposes) ||
                      this.diffArrays(e.specialFeatures, t.specialFeatures) ||
                      this.diffArrays(
                        e.flexiblePurposes,
                        t.flexiblePurposes
                      )) &&
                    (n = !0)
                : (n = !0),
              n
            );
          }),
          (t.prototype.diffStrings = function (e, t) {
            return e.trim() !== t.trim();
          }),
          (t.prototype.diffArrays = function (e, t) {
            return (
              (0 === e.length && t.length > 0) ||
              (Array.prototype.includes
                ? this.diffArraysModernBrowsers(e, t)
                : this.diffArraysInternetExplorer(e, t))
            );
          }),
          (t.prototype.diffArraysModernBrowsers = function (e, t) {
            var n = !1;
            return (
              e.forEach(function (e) {
                t.includes(e) || (n = !0);
              }),
              n
            );
          }),
          (t.prototype.diffArraysInternetExplorer = function (e, t) {
            for (var n = !1, r = 0; r < e.length && !n; r++) {
              var o = e[r];
              this.arrayIncludes(t, o) || (n = !0);
            }
            return n;
          }),
          (t.prototype.arrayIncludes = function (e, t) {
            for (var n = !1, r = 0; r < e.length && !n; r++)
              t === e[r] && (n = !0);
            return n;
          }),
          t
        );
      })(n(9).Decision);
    t.ListedVendorsChanged = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(6),
      s = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "MinShowExceeded"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e, t, n, s, u;
              return r.__generator(this, function (r) {
                return (
                  (e = new Date(o.BootstrapModel.tcModel.lastUpdated)),
                  (t = new Date()),
                  (n = Math.abs(t.getTime() - e.getTime())),
                  (s = Math.ceil(n / i.GlobalConstants.MILLISECOND_DAY)),
                  (u = o.BootstrapModel.config.minShowDays) ||
                    (u = i.GlobalConstants.DEFAULT_CONSENT_MIN_SHOW_DAYS),
                  [2, s >= u]
                );
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.MinShowExceeded = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(16),
      i = n(10),
      s = n(5),
      u = n(12),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      u.Debug.logEvent("gvl", "start"),
                      (s.BootstrapModel.gvl = new i.GVL()),
                      [4, s.BootstrapModel.gvl.readyPromise]
                    );
                  case 1:
                    return (
                      t.sent(),
                      u.Debug.logEvent("gvl", "end"),
                      [4, e.prototype.run.call(this)]
                    );
                  case 2:
                    return t.sent(), [2];
                }
              });
            });
          }),
          t
        );
      })(o.Action);
    t.GetGVL = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(16),
      i = n(5),
      s = n(12),
      u = n(10),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var t;
              return r.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      (t = i.BootstrapModel.tcModel.vendorListVersion),
                      i.BootstrapModel.tcModel.gvl &&
                      i.BootstrapModel.tcModel.gvl.vendorListVersion === t
                        ? [3, 2]
                        : (s.Debug.logEvent("gvl", "start"),
                          (i.BootstrapModel.tcModel.gvl = new u.GVL(t)),
                          [4, i.BootstrapModel.tcModel.gvl.readyPromise])
                    );
                  case 1:
                    n.sent(), s.Debug.logEvent("gvl", "end"), (n.label = 2);
                  case 2:
                    return [4, e.prototype.run.call(this)];
                  case 3:
                    return n.sent(), [2];
                }
              });
            });
          }),
          t
        );
      })(o.Action);
    t.GetVersionedGVL = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(9),
      i = n(5),
      s = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "TCStringIsInvalid"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e, t, n, o;
              return r.__generator(this, function (r) {
                return (
                  (e = !1),
                  (t = i.BootstrapModel.tcModel.isServiceSpecific),
                  (n = i.BootstrapModel.config),
                  (o = i.BootstrapModel.tcString),
                  o.split(".").length > 1
                    ? t !== !!n.isServiceSpecific && (e = !0)
                    : (e = !0),
                  [2, e]
                );
              });
            });
          }),
          t
        );
      })(o.Decision);
    t.TCStringIsInvalid = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "TCFPolicyDifferent"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (e) {
                return [
                  2,
                  o.BootstrapModel.gvl.tcfPolicyVersion !==
                    o.BootstrapModel.tcModel.policyVersion,
                ];
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.TCFPolicyDifferent = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.name = "VendorListIsNarrowed"), t;
        }
        return (
          r.__extends(t, e),
          (t.prototype.evaluate = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e;
              return r.__generator(this, function (t) {
                return (
                  (e = o.BootstrapModel.config.vendors),
                  [2, Array.isArray(e) && e.length > 0]
                );
              });
            });
          }),
          t
        );
      })(n(9).Decision);
    t.VendorListIsNarrowed = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.name = "YesNode"),
            (t.evaluate = function () {
              return r.__awaiter(t, void 0, void 0, function () {
                return r.__generator(this, function (e) {
                  return [2, !0];
                });
              });
            }),
            t
          );
        }
        return r.__extends(t, e), t;
      })(n(9).Decision);
    t.YesNode = o;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      n(226).BootstrapController.init();
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(160),
      s = n(10),
      u = n(228),
      a = n(6),
      c = n(247),
      l = n(249),
      p = n(164),
      d = n(258),
      f = n(129),
      h = n(175),
      v = (function () {
        function e() {}
        return (
          (e.init = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e,
                t,
                n = this;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      a.GlobalConstants.init(),
                      i.Debug.init(),
                      [4, new p.DecisionTree().run(new p.NeedLegalBases())]
                    );
                  case 1:
                    return (
                      (e = r.sent() === p.YesOrNo.YES),
                      (t = o.BootstrapModel.config)
                        ? ((this.cmpApi = new u.CmpApi(
                            a.GlobalConstants.CMP_ID,
                            parseInt(a.GlobalConstants.VERSION, 10),
                            !!t.isServiceSpecific,
                            new d.CmpApiCommands(this.showUI.bind(this))
                          )),
                          (window.__tcfapi.version = a.GlobalConstants.VERSION),
                          i.Debug.logMeta(),
                          i.Debug.logEvent("UIShow", e),
                          e
                            ? ((this.uiLoadTimeout = setTimeout(function () {
                                i.Debug.logEvent("UIInit", !1),
                                  i.Debug.send(),
                                  n.cmpApi.update(o.BootstrapModel.tcString);
                              }, a.GlobalConstants.UI_LOAD_TIMEOUT)),
                              [4, this.showUI()])
                            : [3, 3])
                        : [3, 4]
                    );
                  case 2:
                    return r.sent(), [3, 4];
                  case 3:
                    this.cmpApi.update(o.BootstrapModel.tcString),
                      (r.label = 4);
                  case 4:
                    return i.Debug.send(), [2];
                }
              });
            });
          }),
          (e.showUI = function () {
            var e, t, n;
            return r.__awaiter(this, void 0, void 0, function () {
              var i, u;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (i = o.BootstrapModel.tcModel),
                      (u = o.BootstrapModel.config),
                      i.gvl ? [3, 2] : [4, new h.GetGVL().run()]
                    );
                  case 1:
                    r.sent(), (i.gvl = o.BootstrapModel.gvl), (r.label = 2);
                  case 2:
                    return [4, i.gvl.readyPromise];
                  case 3:
                    return (
                      r.sent(), [4, new p.VendorListIsNarrowed().evaluate()]
                    );
                  case 4:
                    return (
                      r.sent() && i.gvl.narrowVendorsTo(u.vendors),
                      [4, new f.IsNewTCString().evaluate()]
                    );
                  case 5:
                    return (
                      r.sent() &&
                        (i.setAllVendorLegitimateInterests(),
                        i.setAllPurposeLegitimateInterests(),
                        (null ===
                          (n =
                            null ===
                              (t =
                                null === (e = u) || void 0 === e
                                  ? void 0
                                  : e.legalBases) || void 0 === t
                              ? void 0
                              : t.purpose) || void 0 === n
                          ? void 0
                          : n.legitimateInterest) &&
                          i.publisherLegitimateInterests.set(
                            u.legalBases.purpose.legitimateInterest
                          )),
                      (window.__tcfapi[
                        a.GlobalConstants.POST_OFFICE_FUNCTION
                      ] = this.postOfficeFunction.bind(this)),
                      this.cmpApi.update(
                        s.TCString.encode(i, { isForVendors: !0 }),
                        !0
                      ),
                      l.UI.show(),
                      [2]
                    );
                }
              });
            });
          }),
          (e.postOfficeFunction = function (t) {
            clearTimeout(this.uiLoadTimeout),
              i.Debug.logEvent("UIInit", !0),
              i.Debug.send(),
              t({
                config: o.BootstrapModel.config,
                tcModel: o.BootstrapModel.tcModel,
                debug: i.Debug.getInstance().logEvent,
                end: e.end.bind(e),
              }),
              delete window.__tcfapi[a.GlobalConstants.POST_OFFICE_FUNCTION];
          }),
          (e.end = function (e, t) {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      l.UI.hide(t),
                      c.CookieAPI.writeCookie(
                        a.GlobalConstants.CONFIG_VERSION_COOKIE,
                        o.BootstrapModel.config.version,
                        a.GlobalConstants.DEFAULT_CONSENT_EXPIRATION_DAYS
                      ),
                      [4, c.SaveTCData.save(e, this.cmpApi)]
                    );
                  case 1:
                    return n.sent(), i.Debug.send(), [2];
                }
              });
            });
          }),
          e
        );
      })();
    t.BootstrapController = v;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.formatName = function (e) {
          for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charAt(n),
              o = e.charCodeAt(n) < 91,
              i = e.charCodeAt(n - 1) < 91,
              s = e.charCodeAt(n + 1) < 91,
              u = "";
            0 !== n || o || (r = r.toUpperCase()),
              !o || (i && s) || 0 == n || (u = " "),
              (t += u + r);
          }
          return t;
        }),
        (e.formatTime = function (e) {
          return "[" + e + "]";
        }),
        (e.getLongest = function (e) {
          var t = 0;
          return (
            e.forEach(function (e) {
              t = Math.max(t, e.length);
            }),
            t
          );
        }),
        (e.format = function (e) {
          var t = this,
            n = [],
            r = [],
            o = [],
            i = [];
          e.forEach(function (e) {
            r.push(t.formatName(e.name)),
              void 0 !== e.time
                ? o.push(t.formatTime(e.time.toString()))
                : o.push(""),
              void 0 !== e.params ? i.push(e.params.toString()) : i.push("");
          });
          var s = this.getLongest(r),
            u = this.getLongest(o),
            a = 0;
          e.forEach(function (e, t) {
            var c = "",
              l = o[t];
            l && ((c += o[t]), (c += " "), (c += " ".repeat(u - l.length)));
            var p = r[t];
            c += p;
            var d = i[t];
            d && ((c += ": "), (c += " ".repeat(s - p.length)), (c += d)),
              (a = Math.max(a, c.length)),
              n.push(c);
          });
          var c = "-".repeat(a);
          return n.unshift(c), n.push(c), n.join("\n");
        }),
        e
      );
    })();
    t.LogFormatter = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      r(n(229)),
      r(n(44)),
      r(n(50)),
      r(n(237));
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (function (e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
      })(n(127));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(49),
      s = n(50),
      u = (function (e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.cmpStatus = s.CmpStatus.ERROR), t;
        }
        return o(t, e), t;
      })(i.Response);
    t.Disabled = u;
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.CmpStatus || (t.CmpStatus = {})).STUB = "stub"),
      (r.LOADING = "loading"),
      (r.LOADED = "loaded"),
      (r.ERROR = "error");
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.DisplayStatus || (t.DisplayStatus = {})).VISIBLE = "visible"),
      (r.HIDDEN = "hidden"),
      (r.DISABLED = "disabled");
  },
  function (e, t, n) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      ((r = t.EventStatus || (t.EventStatus = {})).TC_LOADED = "tcloaded"),
      (r.CMP_UI_SHOWN = "cmpuishown"),
      (r.USER_ACTION_COMPLETE = "useractioncomplete");
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(51),
      o = (function () {
        function e() {
          (this.eventQueue = new Map()), (this.queueNumber = 0);
        }
        return (
          (e.prototype.add = function (e) {
            return this.eventQueue.set(this.queueNumber, e), this.queueNumber++;
          }),
          (e.prototype.remove = function (e) {
            return this.eventQueue.delete(e);
          }),
          (e.prototype.exec = function () {
            this.eventQueue.forEach(function (e, t) {
              new r.GetTCDataCommand(e, void 0, t);
            });
          }),
          (e.prototype.clear = function () {
            (this.queueNumber = 0), this.eventQueue.clear();
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this.eventQueue.size;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
    t.EventListenerQueue = o;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      s =
        (this && this.__spread) ||
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(i(arguments[t]));
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return delete n.outOfBand, n;
      }
      return (
        o(t, e),
        (t.prototype.createVectorField = function (e) {
          return s(e).reduce(function (e, t) {
            return e + (t[1] ? "1" : "0");
          }, "");
        }),
        (t.prototype.createRestrictions = function (e) {
          var t = {};
          if (e.numRestrictions > 0) {
            var n = e.getMaxVendorId();
            e.getRestrictions().forEach(function (e) {
              t[e.purposeId.toString()] = "_".repeat(n);
            });
            for (
              var r = function (n) {
                  var r = n + 1;
                  e.getRestrictions(r).forEach(function (e) {
                    var r = e.restrictionType.toString(),
                      o = e.purposeId.toString(),
                      i = t[o].substr(0, n),
                      s = t[o].substr(n + 1);
                    t[o] = i + r + s;
                  });
                },
                o = 0;
              o < n;
              o++
            )
              r(o);
          }
          return t;
        }),
        t
      );
    })(n(161).TCData);
    t.InAppTCData = u;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        });
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(15),
      s = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.cmpLoaded = !0),
            (t.cmpStatus = i.CmpApiModel.cmpStatus),
            (t.displayStatus = i.CmpApiModel.displayStatus),
            (t.apiVersion = "" + i.CmpApiModel.apiVersion),
            i.CmpApiModel.tcModel &&
              i.CmpApiModel.tcModel.vendorListVersion &&
              (t.gvlVersion = +i.CmpApiModel.tcModel.vendorListVersion),
            t
          );
        }
        return o(t, e), t;
      })(n(49).Response);
    t.Ping = s;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(15),
      o = n(50),
      i = n(238),
      s = n(10),
      u = (function () {
        function e(e, t, n, o) {
          void 0 === n && (n = !1),
            this.throwIfInvalidInt(e, "cmpId", 2),
            this.throwIfInvalidInt(t, "cmpVersion", 0),
            (r.CmpApiModel.cmpId = e),
            (r.CmpApiModel.cmpVersion = t),
            (this.isServiceSpecific = !!n),
            (this.callResponder = new i.CallResponder(o));
        }
        return (
          Object.defineProperty(e.prototype, "tcModel", {
            set: function (e) {
              console.error(
                "@iabtcf/cmpapi: As of v1.0.0-beta.21 setting tcModel via CmpApi.tcModel is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"
              ),
                console.log(
                  "  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples"
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tcString", {
            set: function (e) {
              console.error(
                "@iabtcf/cmpapi: As of v1.0.0-beta.21 setting tcString via CmpApi.tcString is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"
              ),
                console.log(
                  "  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples"
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "uiVisible", {
            set: function (e) {
              console.error(
                "@iabtcf/cmpapi: As of v1.0.0-beta.21 setting uiVisible via CmpApi.uiVisible is deprecated.  Use cmpApi.update(tcString, uiVisible) instead"
              ),
                console.log(
                  "  see: https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/cmpapi#cmpapi-examples"
                );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (e.prototype.throwIfInvalidInt = function (e, t, n) {
            if (!("number" == typeof e && Number.isInteger(e) && e >= n))
              throw new Error("Invalid " + t + ": " + e);
          }),
          (e.prototype.update = function (e, t) {
            if ((void 0 === t && (t = !1), r.CmpApiModel.disabled))
              throw new Error("CmpApi Disabled");
            (r.CmpApiModel.cmpStatus = o.CmpStatus.LOADED),
              t
                ? ((r.CmpApiModel.displayStatus = o.DisplayStatus.VISIBLE),
                  (r.CmpApiModel.eventStatus = o.EventStatus.CMP_UI_SHOWN))
                : void 0 === r.CmpApiModel.tcModel
                ? ((r.CmpApiModel.displayStatus = o.DisplayStatus.DISABLED),
                  (r.CmpApiModel.eventStatus = o.EventStatus.TC_LOADED))
                : ((r.CmpApiModel.displayStatus = o.DisplayStatus.HIDDEN),
                  (r.CmpApiModel.eventStatus =
                    o.EventStatus.USER_ACTION_COMPLETE)),
              null === e
                ? ((r.CmpApiModel.gdprApplies = !1),
                  (r.CmpApiModel.tcModel = null))
                : ((r.CmpApiModel.gdprApplies = !0),
                  "" === e
                    ? ((r.CmpApiModel.tcModel = new s.TCModel()),
                      (r.CmpApiModel.tcModel.cmpId = r.CmpApiModel.cmpId),
                      (r.CmpApiModel.tcModel.cmpVersion =
                        r.CmpApiModel.cmpVersion))
                    : (r.CmpApiModel.tcModel = s.TCString.decode(e)),
                  (r.CmpApiModel.tcModel.isServiceSpecific = this.isServiceSpecific),
                  (r.CmpApiModel.tcString = e)),
              r.CmpApiModel.eventQueue.exec(),
              this.callResponder.purgeQueuedCalls();
          }),
          (e.prototype.disable = function () {
            (r.CmpApiModel.disabled = !0),
              (r.CmpApiModel.cmpStatus = o.CmpStatus.ERROR);
          }),
          e
        );
      })();
    t.CmpApi = u;
  },
  function (e, t, n) {
    "use strict";
    var r =
        (this && this.__read) ||
        function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r,
            o,
            i = n.call(e),
            s = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              s.push(r.value);
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return s;
        },
      o =
        (this && this.__spread) ||
        function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(r(arguments[t]));
          return e;
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(239),
      s = n(15),
      u = n(127),
      a = n(245),
      c = n(246),
      l = (function () {
        function e(e) {
          (this.API_FUNCTION_NAME = "__tcfapi"), (this.customCommands = e);
          try {
            this.queuedCalls = window[this.API_FUNCTION_NAME]();
          } catch (e) {
          } finally {
            window[this.API_FUNCTION_NAME] = this.apiCall.bind(this);
          }
        }
        return (
          (e.prototype.apiCall = function (e, t, n) {
            for (var r, l = [], p = 3; p < arguments.length; p++)
              l[p - 3] = arguments[p];
            if ("string" != typeof e) n("invalid command: " + e, !1);
            else if (c.SupportedVersions.has(t)) {
              if ("function" != typeof n)
                throw new Error("invalid callback function");
              s.CmpApiModel.disabled
                ? new a.DisabledCommand(n)
                : this.isKnownCommand(e)
                ? e === u.TCFCommands.PING
                  ? new i.CommandMap[e](n, l[0])
                  : this.customCommands && this.customCommands[e]
                  ? (r = this.customCommands)[e].apply(r, o([n], l))
                  : void 0 === s.CmpApiModel.tcModel
                  ? this.queuedCalls.push([e, t, n, l])
                  : new i.CommandMap[e](n, l[0])
                : n('CmpApi does not support the "' + e + '" command', !1);
            } else n("unsupported version: " + t, !1);
          }),
          (e.prototype.purgeQueuedCalls = function () {
            if (this.queuedCalls) {
              var e = this.apiCall.bind(this);
              this.queuedCalls.forEach(function (t) {
                var n = r(t, 4),
                  i = n[0],
                  s = n[1],
                  u = n[2],
                  a = n[3];
                void 0 !== a ? e.apply(void 0, o([i, s, u], a)) : e(i, s, u);
              }),
                delete this.queuedCalls;
            }
          }),
          (e.prototype.isKnownCommand = function (e) {
            return (
              (void 0 !== this.customCommands &&
                void 0 !== this.customCommands[e]) ||
              void 0 !== i.CommandMap[e]
            );
          }),
          e
        );
      })();
    t.CallResponder = l;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(240),
      o = n(51),
      i = n(241),
      s = n(242),
      u = n(243),
      a = n(244),
      c = n(127),
      l = (function () {
        function e() {}
        var t, n, l, p, d, f;
        return (
          (t = c.TCFCommands.PING),
          (n = c.TCFCommands.GET_TC_DATA),
          (l = c.TCFCommands.GET_IN_APP_TC_DATA),
          (p = c.TCFCommands.GET_VENDOR_LIST),
          (d = c.TCFCommands.ADD_EVENT_LISTENER),
          (f = c.TCFCommands.REMOVE_EVENT_LISTENER),
          (e[t] = r.PingCommand),
          (e[n] = o.GetTCDataCommand),
          (e[l] = i.GetInAppTCDataCommand),
          (e[p] = s.GetVendorListCommand),
          (e[d] = u.AddEventListenerCommand),
          (e[f] = a.RemoveEventListenerCommand),
          e
        );
      })();
    t.CommandMap = l;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(44),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              return s(this, function (e) {
                return (0, this.callback)(new u.Ping()), [2];
              });
            });
          }),
          t
        );
      })(n(45).Command);
    t.PingCommand = a;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(51),
      a = n(44),
      c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              return s(this, function (e) {
                return (
                  (0, this.callback)(new a.InAppTCData(this.param), !0), [2]
                );
              });
            });
          }),
          t
        );
      })(u.GetTCDataCommand);
    t.GetInAppTCDataCommand = c;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(15),
      a = n(45),
      c = n(10),
      l = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              var e, t;
              return s(this, function (n) {
                switch (n.label) {
                  case 0:
                    (e = this.callback),
                      void 0 === this.param &&
                        (this.param = u.CmpApiModel.tcModel.vendorListVersion),
                      (t = new c.GVL(this.param)),
                      (n.label = 1);
                  case 1:
                    return n.trys.push([1, 3, , 4]), [4, t.readyPromise];
                  case 2:
                    return n.sent(), e(t.getJson(), !0), [3, 4];
                  case 3:
                    return n.sent(), this.fail(), [3, 4];
                  case 4:
                    return [2];
                }
              });
            });
          }),
          (t.prototype.isValid = function () {
            var e = !0;
            return (
              void 0 !== this.param &&
                (e =
                  ("string" == typeof this.param ||
                    "number" == typeof this.param) &&
                  ((Number.isInteger(+this.param) && +this.param > 0) ||
                    "LATEST" === this.param)),
              e
            );
          }),
          t
        );
      })(a.Command);
    t.GetVendorListCommand = l;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(51),
      a = n(15),
      c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              var e;
              return s(this, function (t) {
                return (
                  (e = a.CmpApiModel.eventQueue.add(this.callback)),
                  void 0 !== a.CmpApiModel.tcModel &&
                    new u.GetTCDataCommand(this.callback, void 0, e),
                  [2]
                );
              });
            });
          }),
          t
        );
      })(u.GetTCDataCommand);
    t.AddEventListenerCommand = c;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(45),
      a = n(15),
      c = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              return s(this, function (e) {
                return (0, this.callback)(!0), [2];
              });
            });
          }),
          (t.prototype.fail = function () {
            (0, this.callback)(!1);
          }),
          (t.prototype.isValid = function () {
            return (
              "number" == typeof this.param &&
              a.CmpApiModel.eventQueue.remove(this.param)
            );
          }),
          t
        );
      })(u.Command);
    t.RemoveEventListenerCommand = c;
  },
  function (e, t, n) {
    "use strict";
    var r,
      o =
        (this && this.__extends) ||
        ((r = function (e, t) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
        }),
        function (e, t) {
          function n() {
            this.constructor = e;
          }
          r(e, t),
            (e.prototype =
              null === t
                ? Object.create(t)
                : ((n.prototype = t.prototype), new n()));
        }),
      i =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
          return new (n || (n = Promise))(function (o, i) {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function u(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof n
                    ? t
                    : new n(function (e) {
                        e(t);
                      })).then(s, u);
            }
            a((r = r.apply(e, t || [])).next());
          });
        },
      s =
        (this && this.__generator) ||
        function (e, t) {
          var n,
            r,
            o,
            i,
            s = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" == typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s; )
                  try {
                    if (
                      ((n = 1),
                      r &&
                        (o =
                          2 & i[0]
                            ? r.return
                            : i[0]
                            ? r.throw || ((o = r.return) && o.call(r), 0)
                            : r.next) &&
                        !(o = o.call(r, i[1])).done)
                    )
                      return o;
                    switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return s.label++, { value: i[1], done: !1 };
                      case 5:
                        s.label++, (r = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = s.ops.pop()), s.trys.pop();
                        continue;
                      default:
                        if (
                          !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                          (6 === i[0] || 2 === i[0])
                        ) {
                          s = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          s.label = i[1];
                          break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                          (s.label = o[1]), (o = i);
                          break;
                        }
                        if (o && s.label < o[2]) {
                          (s.label = o[2]), s.ops.push(i);
                          break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                    }
                    i = t.call(e, s);
                  } catch (e) {
                    (i = [6, e]), (r = 0);
                  } finally {
                    n = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
    Object.defineProperty(t, "__esModule", { value: !0 });
    var u = n(44),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          o(t, e),
          (t.prototype.success = function () {
            return i(this, void 0, void 0, function () {
              return s(this, function (e) {
                return (0, this.callback)(new u.Disabled(), !1), [2];
              });
            });
          }),
          t
        );
      })(n(45).Command);
    t.DisabledCommand = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
      function e() {}
      return (
        (e.has = function (e) {
          return "string" == typeof e && (e = +e), this.set_.has(e);
        }),
        (e.set_ = new Set([0, 2, void 0, null])),
        e
      );
    })();
    t.SupportedVersions = r;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    r.__exportStar(n(128), t),
      r.__exportStar(n(163), t),
      r.__exportStar(n(52), t),
      r.__exportStar(n(126), t),
      r.__exportStar(n(248), t),
      r.__exportStar(n(162), t);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      i = n(128),
      s = n(5),
      u = n(10),
      a = n(52),
      c = n(163),
      l = n(12),
      p = (function () {
        function e() {}
        return (
          (e.save = function (e, t) {
            return r.__awaiter(this, void 0, void 0, function () {
              var n, p, d, f, h;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (p = e.vendorConsents.size),
                      (d = Object.keys(e.gvl.vendors).length),
                      (f = s.BootstrapModel.config),
                      (this.cmpApi = t),
                      (s.BootstrapModel.tcModel = e),
                      (e.cmpId = o.GlobalConstants.CMP_ID),
                      (e.cmpVersion = parseInt(o.GlobalConstants.VERSION, 10)),
                      (e.publisherCountryCode = f.countryCode),
                      (e.isServiceSpecific = !!s.BootstrapModel.config
                        .isServiceSpecific),
                      e.updated(),
                      (s.BootstrapModel.tcString = u.TCString.encode(e)),
                      (n =
                        0 === p
                          ? c.ConsentAccept.NONE
                          : p === d
                          ? c.ConsentAccept.ALL
                          : c.ConsentAccept.SOME),
                      l.Debug.logEvent("consentAccept", n),
                      f.isServiceSpecific
                        ? (this.writeLocalConsent(), [3, 3])
                        : [3, 1]
                    );
                  case 1:
                    return f.inAppConfig
                      ? [3, 3]
                      : [
                          4,
                          new i.ConsensuService().write(
                            s.BootstrapModel.tcString
                          ),
                        ];
                  case 2:
                    r.sent()
                      ? ((h = u.TCString.encode(e, {
                          segments: [u.Segment.PUBLISHER_TC],
                        })),
                        a.CookieAPI.writeCookie(
                          o.GlobalConstants.PUBLISHER_TC_COOKIE,
                          h,
                          o.GlobalConstants.DEFAULT_CONSENT_EXPIRATION_DAYS
                        ),
                        this.cmpApi.update(
                          s.BootstrapModel.tcString + "." + h,
                          !1
                        ))
                      : ((e.isServiceSpecific = !0),
                        (s.BootstrapModel.tcString = u.TCString.encode(e)),
                        this.writeLocalConsent()),
                      (r.label = 3);
                  case 3:
                    return [2];
                }
              });
            });
          }),
          (e.writeLocalConsent = function () {
            a.CookieAPI.writeCookie(
              o.GlobalConstants.CONSENT_STRING_COOKIE,
              s.BootstrapModel.tcString,
              o.GlobalConstants.DEFAULT_CONSENT_EXPIRATION_DAYS
            ),
              l.Debug.logEvent("writeLocalConsent"),
              this.cmpApi.update(s.BootstrapModel.tcString, !1);
          }),
          e
        );
      })();
    t.SaveTCData = p;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(12),
      o = n(6),
      i = (function () {
        function e() {}
        return (
          (e.show = function () {
            this.isActive || (this.placeUIScript(), (this.isActive = !0));
          }),
          (e.hide = function (e) {
            (this.isActive = !1), e.setAttribute("style", "display:none;");
          }),
          (e.placeUIScript = function () {
            var e,
              t = document,
              n = t.createElement("script"),
              i = t.getElementsByTagName("script"),
              s = t.createElement("div");
            (s.id = o.GlobalConstants.UI_DIV_ID),
              t.body.appendChild(s),
              r.Debug.logEvent("placeUIScript");
            for (var u = 0; u < i.length; u++)
              if (
                i[u].src &&
                ~i[u].src.indexOf(o.GlobalConstants.BOOTSTRAP_FILE_NAME)
              ) {
                var a = i[u].src.split("/");
                (a[a.length - 1] = o.GlobalConstants.UI_FILE_NAME),
                  (n.src = a.join("/")),
                  (e = i[u]);
                break;
              }
            e && e.parentNode && e.parentNode.insertBefore(n, e);
          }),
          (e.isActive = !1),
          e
        );
      })();
    t.UI = i;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = (function () {
        function e() {
          this.complete = !1;
        }
        return (
          (e.addToDecisionLog = function (e, t) {
            this.log.push({ name: e, params: t });
          }),
          (e.prototype.run = function (t) {
            return r.__awaiter(this, void 0, void 0, function () {
              var n;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return [4, this.evaluateDecision(t)];
                  case 1:
                    return (
                      (n = r.sent()),
                      (this.complete = !0),
                      e.addToDecisionLog("Final", n),
                      [2, n]
                    );
                }
              });
            });
          }),
          (e.prototype.evaluateDecision = function (t) {
            return r.__awaiter(this, void 0, void 0, function () {
              var n, o, i;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (
                      ((n = new t.decision()),
                      !(t.sideEffect && t.sideEffect.length > 0))
                    )
                      return [3, 4];
                    (o = 0), (r.label = 1);
                  case 1:
                    return o < t.sideEffect.length
                      ? [4, new t.sideEffect[o]().run()]
                      : [3, 4];
                  case 2:
                    r.sent(), (r.label = 3);
                  case 3:
                    return o++, [3, 1];
                  case 4:
                    return [4, n.answer()];
                  case 5:
                    return (
                      (i = r.sent()),
                      e.addToDecisionLog(n.name, i),
                      t[i] ? [4, this.evaluateDecision(t[i])] : [3, 7]
                    );
                  case 6:
                    return [2, r.sent()];
                  case 7:
                    return [2, i];
                }
              });
            });
          }),
          (e.log = []),
          e
        );
      })();
    t.DecisionTree = o;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(252),
      o = n(165),
      i = n(167),
      s = n(168),
      u = n(169),
      a = n(170),
      c = n(171),
      l = n(129),
      p = n(172),
      d = n(173),
      f = n(174),
      h = n(177),
      v = n(178),
      _ = n(179),
      y = n(180),
      g = function () {
        (this.decision = u.HasConfig),
          (this.sideEffect = [r.GetConfig, r.SetGVLParams]),
          (this.yes = {
            decision: a.HasValidVendors,
            yes: {
              sideEffect: [r.GetConsensuResponse],
              decision: i.GDPRApplies,
              yes: {
                decision: p.IsNotPrivacyPolicyPage,
                yes: {
                  sideEffect: [r.GetTCString],
                  decision: l.IsNewTCString,
                  no: {
                    decision: o.CanDecodeTCString,
                    yes: {
                      decision: h.TCStringIsInvalid,
                      no: {
                        decision: c.IsConfigVersionDifferent,
                        no: {
                          decision: f.MinShowExceeded,
                          yes: {
                            sideEffect: [r.GetGVL],
                            decision: v.TCFPolicyDifferent,
                            no: {
                              decision: s.GVLVersionDifferent,
                              yes: {
                                decision: _.VendorListIsNarrowed,
                                yes: {
                                  sideEffect: [r.GetVersionedGVL],
                                  decision: d.ListedVendorsChanged,
                                },
                                no: { decision: y.YesNode },
                              },
                            },
                          },
                        },
                      },
                    },
                    no: {
                      sideEffect: [r.CreateEmptyTCModel],
                      decision: y.YesNode,
                    },
                  },
                  yes: {
                    sideEffect: [r.CreateEmptyTCModel],
                    decision: y.YesNode,
                  },
                },
              },
            },
          });
      };
    t.NeedLegalBases = g;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0);
    r.__exportStar(n(16), t),
      r.__exportStar(n(253), t),
      r.__exportStar(n(254), t),
      r.__exportStar(n(255), t),
      r.__exportStar(n(175), t),
      r.__exportStar(n(256), t),
      r.__exportStar(n(176), t),
      r.__exportStar(n(257), t);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(16),
      i = n(5),
      s = n(6),
      u = n(10),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var e, t;
              return r.__generator(this, function (n) {
                return (
                  (e = new u.TCModel()),
                  (t = i.BootstrapModel.config),
                  (i.BootstrapModel.tcString = ""),
                  (i.BootstrapModel.tcModel = e),
                  (e.isServiceSpecific = !!t.isServiceSpecific),
                  (e.cmpId = s.GlobalConstants.CMP_ID),
                  (e.cmpVersion = parseInt(s.GlobalConstants.VERSION, 10)),
                  [2]
                );
              });
            });
          }),
          t
        );
      })(o.Action);
    t.CreateEmptyTCModel = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(12),
      s = n(16),
      u = n(6),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return (
                      (o.BootstrapModel.config =
                        window[u.GlobalConstants.CONFIG]),
                      o.BootstrapModel.config ||
                        i.Debug.logEvent("exception", "No CMP Config"),
                      [4, e.prototype.run.call(this)]
                    );
                  case 1:
                    return t.sent(), [2];
                }
              });
            });
          }),
          t
        );
      })(s.Action);
    t.GetConfig = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(16),
      i = n(5),
      s = n(128),
      u = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var t, n;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = new s.ConsensuService()),
                      (n = i.BootstrapModel),
                      [4, t.read()]
                    );
                  case 1:
                    return (
                      (n.consensuResponse = r.sent()),
                      [4, e.prototype.run.call(this)]
                    );
                  case 2:
                    return r.sent(), [2];
                }
              });
            });
          }),
          t
        );
      })(o.Action);
    t.GetConsensuResponse = u;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(52),
      s = n(16),
      u = n(6),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            return r.__awaiter(this, void 0, void 0, function () {
              var t, n;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = ""),
                      o.BootstrapModel.config.inAppConfig
                        ? (t = o.BootstrapModel.config.inAppConfig.tcstring)
                        : o.BootstrapModel.config.isServiceSpecific
                        ? (t = i.CookieAPI.getCookie(
                            u.GlobalConstants.CONSENT_STRING_COOKIE
                          ))
                        : o.BootstrapModel.consensuResponse.euconsentV2
                        ? ((t = o.BootstrapModel.consensuResponse.euconsentV2),
                          (n = i.CookieAPI.getCookie(
                            u.GlobalConstants.PUBLISHER_TC_COOKIE
                          )) && (t += "." + n))
                        : (t = i.CookieAPI.getCookie(
                            u.GlobalConstants.CONSENT_STRING_COOKIE
                          )),
                      (o.BootstrapModel.tcString = t),
                      [4, e.prototype.run.call(this)]
                    );
                  case 1:
                    return r.sent(), [2];
                }
              });
            });
          }),
          t
        );
      })(s.Action);
    t.GetTCString = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      i = n(5),
      s = n(16),
      u = n(10),
      a = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          r.__extends(t, e),
          (t.prototype.run = function () {
            var e;
            return r.__awaiter(this, void 0, void 0, function () {
              return r.__generator(this, function (t) {
                return (
                  void 0 !==
                  (null === (e = i.BootstrapModel.config) || void 0 === e
                    ? void 0
                    : e.GVL)
                    ? ((u.GVL.baseUrl =
                        i.BootstrapModel.config.GVL.baseUrl ||
                        o.GlobalConstants.GVL_HOST),
                      (u.GVL.latestFilename =
                        i.BootstrapModel.config.GVL.latestFilename ||
                        u.GVL.latestFilename),
                      (u.GVL.versionedFilename =
                        i.BootstrapModel.config.GVL.versionedFilename ||
                        u.GVL.versionedFilename))
                    : i.BootstrapModel.config &&
                      (u.GVL.baseUrl = o.GlobalConstants.GVL_HOST),
                  [2]
                );
              });
            });
          }),
          t
        );
      })(s.Action);
    t.SetGVLParams = a;
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(5),
      i = n(164),
      s = n(160),
      u = n(176),
      a = (function () {
        function e(e) {
          (this.getBootstrapResult = function (e) {
            e(s.LogFormatter.format(i.DecisionTree.log));
          }),
            (this.getDebug = function (e) {
              var t = "";
              (t += s.LogFormatter.format(s.Debug.debug.meta)),
                (t += "\nEvents:\n"),
                (t += s.LogFormatter.format(s.Debug.debug.events)),
                (t += "\nBootstrap Result:\n"),
                e((t += s.LogFormatter.format(i.DecisionTree.log)));
            }),
            (this.getDebugEvents = function (e) {
              e(s.LogFormatter.format(s.Debug.debug.events));
            }),
            (this.getDebugMeta = function (e) {
              e(s.LogFormatter.format(s.Debug.debug.meta));
            }),
            (this.showUI = e);
        }
        return (
          (e.prototype.summon = function (e) {
            return r.__awaiter(this, void 0, void 0, function () {
              var t, n, s;
              return r.__generator(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (t = [
                        new i.HasValidVendors().evaluate(),
                        new i.HasConfig().evaluate(),
                        new i.GDPRApplies().evaluate(),
                      ]),
                      [4, Promise.all(t)]
                    );
                  case 1:
                    return (
                      (n = r.sent()),
                      (s = n.every(function (e) {
                        return e;
                      }))
                        ? o.BootstrapModel.tcModel.gvl
                          ? [3, 3]
                          : [4, new u.GetVersionedGVL().run()]
                        : [3, 4]
                    );
                  case 2:
                    r.sent(), (r.label = 3);
                  case 3:
                    this.showUI(), (r.label = 4);
                  case 4:
                    return e(s), [2];
                }
              });
            });
          }),
          e
        );
      })();
    t.CmpApiCommands = a;
  },
]);
//# sourceMappingURL=https://cdn-qa.conversant.mgr.consensu.org/gdpr-cmp/3.0.6/gdpr-cmp-bootstrap.js.map
