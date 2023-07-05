!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs =
        e());
})(this, function () {
  "use strict";
  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    f = "month",
    h = "quarter",
    c = "year",
    d = "date",
    $ = "Invalid Date",
    l =
      /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y =
      /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays:
        "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months:
        "January_February_March_April_May_June_July_August_September_October_November_December".split(
          "_"
        ),
    },
    m = function (t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    g = {
      s: m,
      z: function (t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, f),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), f);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function (t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function (t) {
        return (
          { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t] ||
          String(t || "")
            .toLowerCase()
            .replace(/s$/, "")
        );
      },
      u: function (t) {
        return void 0 === t;
      },
    },
    v = "en",
    D = {};
  D[v] = M;
  var p = function (t) {
      return t instanceof _;
    },
    S = function t(e, n, r) {
      var i;
      if (!e) return v;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && ((D[s] = n), (i = s));
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        (D[a] = e), (i = a);
      }
      return !r && i && (v = i), i || (!r && v);
    },
    w = function (t, e) {
      if (p(t)) return t.clone();
      var n = "object" == typeof e ? e : {};
      return (n.date = t), (n.args = arguments), new _(n);
    },
    O = g;
  (O.l = S),
    (O.i = p),
    (O.w = function (t, e) {
      return w(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
    });
  var _ = (function () {
      function M(t) {
        (this.$L = S(t.locale, null, !0)), this.parse(t);
      }
      var m = M.prototype;
      return (
        (m.parse = function (t) {
          (this.$d = (function (t) {
            var e = t.date,
              n = t.utc;
            if (null === e) return new Date(NaN);
            if (O.u(e)) return new Date();
            if (e instanceof Date) return new Date(e);
            if ("string" == typeof e && !/Z$/i.test(e)) {
              var r = e.match(l);
              if (r) {
                var i = r[2] - 1 || 0,
                  s = (r[7] || "0").substring(0, 3);
                return n
                  ? new Date(
                      Date.UTC(
                        r[1],
                        i,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        s
                      )
                    )
                  : new Date(
                      r[1],
                      i,
                      r[3] || 1,
                      r[4] || 0,
                      r[5] || 0,
                      r[6] || 0,
                      s
                    );
              }
            }
            return new Date(e);
          })(t)),
            (this.$x = t.x || {}),
            this.init();
        }),
        (m.init = function () {
          var t = this.$d;
          (this.$y = t.getFullYear()),
            (this.$M = t.getMonth()),
            (this.$D = t.getDate()),
            (this.$W = t.getDay()),
            (this.$H = t.getHours()),
            (this.$m = t.getMinutes()),
            (this.$s = t.getSeconds()),
            (this.$ms = t.getMilliseconds());
        }),
        (m.$utils = function () {
          return O;
        }),
        (m.isValid = function () {
          return !(this.$d.toString() === $);
        }),
        (m.isSame = function (t, e) {
          var n = w(t);
          return this.startOf(e) <= n && n <= this.endOf(e);
        }),
        (m.isAfter = function (t, e) {
          return w(t) < this.startOf(e);
        }),
        (m.isBefore = function (t, e) {
          return this.endOf(e) < w(t);
        }),
        (m.$g = function (t, e, n) {
          return O.u(t) ? this[e] : this.set(n, t);
        }),
        (m.unix = function () {
          return Math.floor(this.valueOf() / 1e3);
        }),
        (m.valueOf = function () {
          return this.$d.getTime();
        }),
        (m.startOf = function (t, e) {
          var n = this,
            r = !!O.u(e) || e,
            h = O.p(t),
            $ = function (t, e) {
              var i = O.w(
                n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t),
                n
              );
              return r ? i : i.endOf(a);
            },
            l = function (t, e) {
              return O.w(
                n
                  .toDate()
                  [t].apply(
                    n.toDate("s"),
                    (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                  ),
                n
              );
            },
            y = this.$W,
            M = this.$M,
            m = this.$D,
            g = "set" + (this.$u ? "UTC" : "");
          switch (h) {
            case c:
              return r ? $(1, 0) : $(31, 11);
            case f:
              return r ? $(1, M) : $(0, M + 1);
            case o:
              var v = this.$locale().weekStart || 0,
                D = (y < v ? y + 7 : y) - v;
              return $(r ? m - D : m + (6 - D), M);
            case a:
            case d:
              return l(g + "Hours", 0);
            case u:
              return l(g + "Minutes", 1);
            case s:
              return l(g + "Seconds", 2);
            case i:
              return l(g + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }),
        (m.endOf = function (t) {
          return this.startOf(t, !1);
        }),
        (m.$set = function (t, e) {
          var n,
            o = O.p(t),
            h = "set" + (this.$u ? "UTC" : ""),
            $ = ((n = {}),
            (n[a] = h + "Date"),
            (n[d] = h + "Date"),
            (n[f] = h + "Month"),
            (n[c] = h + "FullYear"),
            (n[u] = h + "Hours"),
            (n[s] = h + "Minutes"),
            (n[i] = h + "Seconds"),
            (n[r] = h + "Milliseconds"),
            n)[o],
            l = o === a ? this.$D + (e - this.$W) : e;
          if (o === f || o === c) {
            var y = this.clone().set(d, 1);
            y.$d[$](l),
              y.init(),
              (this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d);
          } else $ && this.$d[$](l);
          return this.init(), this;
        }),
        (m.set = function (t, e) {
          return this.clone().$set(t, e);
        }),
        (m.get = function (t) {
          return this[O.p(t)]();
        }),
        (m.add = function (r, h) {
          var d,
            $ = this;
          r = Number(r);
          var l = O.p(h),
            y = function (t) {
              var e = w($);
              return O.w(e.date(e.date() + Math.round(t * r)), $);
            };
          if (l === f) return this.set(f, this.$M + r);
          if (l === c) return this.set(c, this.$y + r);
          if (l === a) return y(1);
          if (l === o) return y(7);
          var M = ((d = {}), (d[s] = e), (d[u] = n), (d[i] = t), d)[l] || 1,
            m = this.$d.getTime() + r * M;
          return O.w(m, this);
        }),
        (m.subtract = function (t, e) {
          return this.add(-1 * t, e);
        }),
        (m.format = function (t) {
          var e = this,
            n = this.$locale();
          if (!this.isValid()) return n.invalidDate || $;
          var r = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = O.z(this),
            s = this.$H,
            u = this.$m,
            a = this.$M,
            o = n.weekdays,
            f = n.months,
            h = function (t, n, i, s) {
              return (t && (t[n] || t(e, r))) || i[n].slice(0, s);
            },
            c = function (t) {
              return O.s(s % 12 || 12, t, "0");
            },
            d =
              n.meridiem ||
              function (t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
              },
            l = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: a + 1,
              MM: O.s(a + 1, 2, "0"),
              MMM: h(n.monthsShort, a, f, 3),
              MMMM: h(f, a),
              D: this.$D,
              DD: O.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: h(n.weekdaysMin, this.$W, o, 2),
              ddd: h(n.weekdaysShort, this.$W, o, 3),
              dddd: o[this.$W],
              H: String(s),
              HH: O.s(s, 2, "0"),
              h: c(1),
              hh: c(2),
              a: d(s, u, !0),
              A: d(s, u, !1),
              m: String(u),
              mm: O.s(u, 2, "0"),
              s: String(this.$s),
              ss: O.s(this.$s, 2, "0"),
              SSS: O.s(this.$ms, 3, "0"),
              Z: i,
            };
          return r.replace(y, function (t, e) {
            return e || l[t] || i.replace(":", "");
          });
        }),
        (m.utcOffset = function () {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }),
        (m.diff = function (r, d, $) {
          var l,
            y = O.p(d),
            M = w(r),
            m = (M.utcOffset() - this.utcOffset()) * e,
            g = this - M,
            v = O.m(this, M);
          return (
            (v =
              ((l = {}),
              (l[c] = v / 12),
              (l[f] = v),
              (l[h] = v / 3),
              (l[o] = (g - m) / 6048e5),
              (l[a] = (g - m) / 864e5),
              (l[u] = g / n),
              (l[s] = g / e),
              (l[i] = g / t),
              l)[y] || g),
            $ ? v : O.a(v)
          );
        }),
        (m.daysInMonth = function () {
          return this.endOf(f).$D;
        }),
        (m.$locale = function () {
          return D[this.$L];
        }),
        (m.locale = function (t, e) {
          if (!t) return this.$L;
          var n = this.clone(),
            r = S(t, e, !0);
          return r && (n.$L = r), n;
        }),
        (m.clone = function () {
          return O.w(this.$d, this);
        }),
        (m.toDate = function () {
          return new Date(this.valueOf());
        }),
        (m.toJSON = function () {
          return this.isValid() ? this.toISOString() : null;
        }),
        (m.toISOString = function () {
          return this.$d.toISOString();
        }),
        (m.toString = function () {
          return this.$d.toUTCString();
        }),
        M
      );
    })(),
    T = _.prototype;
  return (
    (w.prototype = T),
    [
      ["$ms", r],
      ["$s", i],
      ["$m", s],
      ["$H", u],
      ["$W", a],
      ["$M", f],
      ["$y", c],
      ["$D", d],
    ].forEach(function (t) {
      T[t[1]] = function (e) {
        return this.$g(e, t[0], t[1]);
      };
    }),
    (w.extend = function (t, e) {
      return t.$i || (t(e, _, w), (t.$i = !0)), w;
    }),
    (w.locale = S),
    (w.isDayjs = p),
    (w.unix = function (t) {
      return w(1e3 * t);
    }),
    (w.en = D[v]),
    (w.Ls = D),
    (w.p = {}),
    w
  );
});
!(function (t, s) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = s())
    : "function" == typeof define && define.amd
    ? define(s)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_duration = s());
})(this, function () {
  "use strict";
  var t,
    s,
    n = 1e3,
    i = 6e4,
    e = 36e5,
    r = 864e5,
    o =
      /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    u = 31536e6,
    h = 2592e6,
    a =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
    d = {
      years: u,
      months: h,
      days: r,
      hours: e,
      minutes: i,
      seconds: n,
      milliseconds: 1,
      weeks: 6048e5,
    },
    c = function (t) {
      return t instanceof p;
    },
    f = function (t, s, n) {
      return new p(t, n, s.$l);
    },
    m = function (t) {
      return s.p(t) + "s";
    },
    l = function (t) {
      return t < 0;
    },
    $ = function (t) {
      return l(t) ? Math.ceil(t) : Math.floor(t);
    },
    y = function (t) {
      return Math.abs(t);
    },
    g = function (t, s) {
      return t
        ? l(t)
          ? { negative: !0, format: "" + y(t) + s }
          : { negative: !1, format: "" + t + s }
        : { negative: !1, format: "" };
    },
    p = (function () {
      function l(t, s, n) {
        var i = this;
        if (
          ((this.$d = {}),
          (this.$l = n),
          void 0 === t && ((this.$ms = 0), this.parseFromMilliseconds()),
          s)
        )
          return f(t * d[m(s)], this);
        if ("number" == typeof t)
          return (this.$ms = t), this.parseFromMilliseconds(), this;
        if ("object" == typeof t)
          return (
            Object.keys(t).forEach(function (s) {
              i.$d[m(s)] = t[s];
            }),
            this.calMilliseconds(),
            this
          );
        if ("string" == typeof t) {
          var e = t.match(a);
          if (e) {
            var r = e.slice(2).map(function (t) {
              return null != t ? Number(t) : 0;
            });
            return (
              (this.$d.years = r[0]),
              (this.$d.months = r[1]),
              (this.$d.weeks = r[2]),
              (this.$d.days = r[3]),
              (this.$d.hours = r[4]),
              (this.$d.minutes = r[5]),
              (this.$d.seconds = r[6]),
              this.calMilliseconds(),
              this
            );
          }
        }
        return this;
      }
      var y = l.prototype;
      return (
        (y.calMilliseconds = function () {
          var t = this;
          this.$ms = Object.keys(this.$d).reduce(function (s, n) {
            return s + (t.$d[n] || 0) * d[n];
          }, 0);
        }),
        (y.parseFromMilliseconds = function () {
          var t = this.$ms;
          (this.$d.years = $(t / u)),
            (t %= u),
            (this.$d.months = $(t / h)),
            (t %= h),
            (this.$d.days = $(t / r)),
            (t %= r),
            (this.$d.hours = $(t / e)),
            (t %= e),
            (this.$d.minutes = $(t / i)),
            (t %= i),
            (this.$d.seconds = $(t / n)),
            (t %= n),
            (this.$d.milliseconds = t);
        }),
        (y.toISOString = function () {
          var t = g(this.$d.years, "Y"),
            s = g(this.$d.months, "M"),
            n = +this.$d.days || 0;
          this.$d.weeks && (n += 7 * this.$d.weeks);
          var i = g(n, "D"),
            e = g(this.$d.hours, "H"),
            r = g(this.$d.minutes, "M"),
            o = this.$d.seconds || 0;
          this.$d.milliseconds && (o += this.$d.milliseconds / 1e3);
          var u = g(o, "S"),
            h =
              t.negative ||
              s.negative ||
              i.negative ||
              e.negative ||
              r.negative ||
              u.negative,
            a = e.format || r.format || u.format ? "T" : "",
            d =
              (h ? "-" : "") +
              "P" +
              t.format +
              s.format +
              i.format +
              a +
              e.format +
              r.format +
              u.format;
          return "P" === d || "-P" === d ? "P0D" : d;
        }),
        (y.toJSON = function () {
          return this.toISOString();
        }),
        (y.format = function (t) {
          var n = t || "YYYY-MM-DDTHH:mm:ss",
            i = {
              Y: this.$d.years,
              YY: s.s(this.$d.years, 2, "0"),
              YYYY: s.s(this.$d.years, 4, "0"),
              M: this.$d.months,
              MM: s.s(this.$d.months, 2, "0"),
              D: this.$d.days,
              DD: s.s(this.$d.days, 2, "0"),
              H: this.$d.hours,
              HH: s.s(this.$d.hours, 2, "0"),
              m: this.$d.minutes,
              mm: s.s(this.$d.minutes, 2, "0"),
              s: this.$d.seconds,
              ss: s.s(this.$d.seconds, 2, "0"),
              SSS: s.s(this.$d.milliseconds, 3, "0"),
            };
          return n.replace(o, function (t, s) {
            return s || String(i[t]);
          });
        }),
        (y.as = function (t) {
          return this.$ms / d[m(t)];
        }),
        (y.get = function (t) {
          var s = this.$ms,
            n = m(t);
          return (
            "milliseconds" === n
              ? (s %= 1e3)
              : (s = "weeks" === n ? $(s / d[n]) : this.$d[n]),
            0 === s ? 0 : s
          );
        }),
        (y.add = function (t, s, n) {
          var i;
          return (
            (i = s ? t * d[m(s)] : c(t) ? t.$ms : f(t, this).$ms),
            f(this.$ms + i * (n ? -1 : 1), this)
          );
        }),
        (y.subtract = function (t, s) {
          return this.add(t, s, !0);
        }),
        (y.locale = function (t) {
          var s = this.clone();
          return (s.$l = t), s;
        }),
        (y.clone = function () {
          return f(this.$ms, this);
        }),
        (y.humanize = function (s) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s);
        }),
        (y.milliseconds = function () {
          return this.get("milliseconds");
        }),
        (y.asMilliseconds = function () {
          return this.as("milliseconds");
        }),
        (y.seconds = function () {
          return this.get("seconds");
        }),
        (y.asSeconds = function () {
          return this.as("seconds");
        }),
        (y.minutes = function () {
          return this.get("minutes");
        }),
        (y.asMinutes = function () {
          return this.as("minutes");
        }),
        (y.hours = function () {
          return this.get("hours");
        }),
        (y.asHours = function () {
          return this.as("hours");
        }),
        (y.days = function () {
          return this.get("days");
        }),
        (y.asDays = function () {
          return this.as("days");
        }),
        (y.weeks = function () {
          return this.get("weeks");
        }),
        (y.asWeeks = function () {
          return this.as("weeks");
        }),
        (y.months = function () {
          return this.get("months");
        }),
        (y.asMonths = function () {
          return this.as("months");
        }),
        (y.years = function () {
          return this.get("years");
        }),
        (y.asYears = function () {
          return this.as("years");
        }),
        l
      );
    })();
  return function (n, i, e) {
    (t = e),
      (s = e().$utils()),
      (e.duration = function (t, s) {
        var n = e.locale();
        return f(t, { $l: n }, s);
      }),
      (e.isDuration = c);
    var r = i.prototype.add,
      o = i.prototype.subtract;
    (i.prototype.add = function (t, s) {
      return c(t) && (t = t.asMilliseconds()), r.bind(this)(t, s);
    }),
      (i.prototype.subtract = function (t, s) {
        return c(t) && (t = t.asMilliseconds()), o.bind(this)(t, s);
      });
  };
});
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).dayjs_plugin_utc = i());
})(this, function () {
  "use strict";
  var t = "minute",
    i = /[+-]\d\d(?::?\d\d)?/g,
    e = /([+-]|\d\d)/g;
  return function (s, f, n) {
    var u = f.prototype;
    (n.utc = function (t) {
      var i = { date: t, utc: !0, args: arguments };
      return new f(i);
    }),
      (u.utc = function (i) {
        var e = n(this.toDate(), { locale: this.$L, utc: !0 });
        return i ? e.add(this.utcOffset(), t) : e;
      }),
      (u.local = function () {
        return n(this.toDate(), { locale: this.$L, utc: !1 });
      });
    var o = u.parse;
    u.parse = function (t) {
      t.utc && (this.$u = !0),
        this.$utils().u(t.$offset) || (this.$offset = t.$offset),
        o.call(this, t);
    };
    var r = u.init;
    u.init = function () {
      if (this.$u) {
        var t = this.$d;
        (this.$y = t.getUTCFullYear()),
          (this.$M = t.getUTCMonth()),
          (this.$D = t.getUTCDate()),
          (this.$W = t.getUTCDay()),
          (this.$H = t.getUTCHours()),
          (this.$m = t.getUTCMinutes()),
          (this.$s = t.getUTCSeconds()),
          (this.$ms = t.getUTCMilliseconds());
      } else r.call(this);
    };
    var a = u.utcOffset;
    u.utcOffset = function (s, f) {
      var n = this.$utils().u;
      if (n(s))
        return this.$u ? 0 : n(this.$offset) ? a.call(this) : this.$offset;
      if (
        "string" == typeof s &&
        ((s = (function (t) {
          void 0 === t && (t = "");
          var s = t.match(i);
          if (!s) return null;
          var f = ("" + s[0]).match(e) || ["-", 0, 0],
            n = f[0],
            u = 60 * +f[1] + +f[2];
          return 0 === u ? 0 : "+" === n ? u : -u;
        })(s)),
        null === s)
      )
        return this;
      var u = Math.abs(s) <= 16 ? 60 * s : s,
        o = this;
      if (f) return (o.$offset = u), (o.$u = 0 === s), o;
      if (0 !== s) {
        var r = this.$u
          ? this.toDate().getTimezoneOffset()
          : -1 * this.utcOffset();
        ((o = this.local().add(u + r, t)).$offset = u), (o.$x.$localOffset = r);
      } else o = this.utc();
      return o;
    };
    var h = u.format;
    (u.format = function (t) {
      var i = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return h.call(this, i);
    }),
      (u.valueOf = function () {
        var t = this.$utils().u(this.$offset)
          ? 0
          : this.$offset +
            (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * t;
      }),
      (u.isUTC = function () {
        return !!this.$u;
      }),
      (u.toISOString = function () {
        return this.toDate().toISOString();
      }),
      (u.toString = function () {
        return this.toDate().toUTCString();
      });
    var l = u.toDate;
    u.toDate = function (t) {
      return "s" === t && this.$offset
        ? n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate()
        : l.call(this);
    };
    var c = u.diff;
    u.diff = function (t, i, e) {
      if (t && this.$u === t.$u) return c.call(this, t, i, e);
      var s = this.local(),
        f = n(t).local();
      return c.call(s, f, i, e);
    };
  };
});
/*!
 * Draggabilly PACKAGED v3.0.0
 * Make that shiz draggable
 * https://draggabilly.desandro.com
 * MIT license
 */
!(function (t, i) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return i(t, e);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(t, require("jquery")))
    : (t.jQueryBridget = i(t, t.jQuery));
})(window, function (t, i) {
  "use strict";
  var e = Array.prototype.slice,
    n = t.console,
    o =
      void 0 === n
        ? function () {}
        : function (t) {
            n.error(t);
          };
  function s(n, s, h) {
    function a(t, i, e) {
      var s,
        r = "$()." + n + '("' + i + '")';
      return (
        t.each(function (t, a) {
          var d = h.data(a, n);
          if (d) {
            var u = d[i];
            if (u && "_" != i.charAt(0)) {
              var l = u.apply(d, e);
              s = void 0 === s ? l : s;
            } else o(r + " is not a valid method");
          } else o(n + " not initialized. Cannot call methods, i.e. " + r);
        }),
        void 0 !== s ? s : t
      );
    }
    function d(t, i) {
      t.each(function (t, e) {
        var o = h.data(e, n);
        o ? (o.option(i), o._init()) : ((o = new s(e, i)), h.data(e, n, o));
      });
    }
    (h = h || i || t.jQuery) &&
      (s.prototype.option ||
        (s.prototype.option = function (t) {
          h.isPlainObject(t) && (this.options = h.extend(!0, this.options, t));
        }),
      (h.fn[n] = function (t) {
        if ("string" == typeof t) {
          var i = e.call(arguments, 1);
          return a(this, t, i);
        }
        return d(this, t), this;
      }),
      r(h));
  }
  function r(t) {
    !t || (t && t.bridget) || (t.bridget = s);
  }
  return r(i || t.jQuery), s;
}),
  /*!
   * Infinite Scroll v2.0.4
   * measure size of elements
   * MIT license
   */
  (function (t, i) {
    "object" == typeof module && module.exports
      ? (module.exports = i())
      : (t.getSize = i());
  })(window, function () {
    function t(t) {
      let i = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(i) && i;
    }
    let i = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
    ];
    i.length;
    return function (e) {
      if (
        ("string" == typeof e && (e = document.querySelector(e)),
        !(e && "object" == typeof e && e.nodeType))
      )
        return;
      let n = getComputedStyle(e);
      if ("none" == n.display)
        return (function () {
          let t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          };
          return (
            i.forEach((i) => {
              t[i] = 0;
            }),
            t
          );
        })();
      let o = {};
      (o.width = e.offsetWidth), (o.height = e.offsetHeight);
      let s = (o.isBorderBox = "border-box" == n.boxSizing);
      i.forEach((t) => {
        let i = n[t],
          e = parseFloat(i);
        o[t] = isNaN(e) ? 0 : e;
      });
      let r = o.paddingLeft + o.paddingRight,
        h = o.paddingTop + o.paddingBottom,
        a = o.marginLeft + o.marginRight,
        d = o.marginTop + o.marginBottom,
        u = o.borderLeftWidth + o.borderRightWidth,
        l = o.borderTopWidth + o.borderBottomWidth,
        c = t(n.width);
      !1 !== c && (o.width = c + (s ? 0 : r + u));
      let p = t(n.height);
      return (
        !1 !== p && (o.height = p + (s ? 0 : h + l)),
        (o.innerWidth = o.width - (r + u)),
        (o.innerHeight = o.height - (h + l)),
        (o.outerWidth = o.width + a),
        (o.outerHeight = o.height + d),
        o
      );
    };
  }),
  (function (t, i) {
    "object" == typeof module && module.exports
      ? (module.exports = i())
      : (t.EvEmitter = i());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    let i = t.prototype;
    return (
      (i.on = function (t, i) {
        if (!t || !i) return this;
        let e = (this._events = this._events || {}),
          n = (e[t] = e[t] || []);
        return n.includes(i) || n.push(i), this;
      }),
      (i.once = function (t, i) {
        if (!t || !i) return this;
        this.on(t, i);
        let e = (this._onceEvents = this._onceEvents || {});
        return ((e[t] = e[t] || {})[i] = !0), this;
      }),
      (i.off = function (t, i) {
        let e = this._events && this._events[t];
        if (!e || !e.length) return this;
        let n = e.indexOf(i);
        return -1 != n && e.splice(n, 1), this;
      }),
      (i.emitEvent = function (t, i) {
        let e = this._events && this._events[t];
        if (!e || !e.length) return this;
        (e = e.slice(0)), (i = i || []);
        let n = this._onceEvents && this._onceEvents[t];
        for (let o of e) {
          n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, i);
        }
        return this;
      }),
      (i.allOff = function () {
        return delete this._events, delete this._onceEvents, this;
      }),
      t
    );
  }),
  /*!
   * Unidragger v3.0.0
   * Draggable base class
   * MIT license
   */
  (function (t, i) {
    "object" == typeof module && module.exports
      ? (module.exports = i(t, require("ev-emitter")))
      : (t.Unidragger = i(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function (t, i) {
    function e() {}
    let n,
      o,
      s = (e.prototype = Object.create(i.prototype));
    (s.handleEvent = function (t) {
      let i = "on" + t.type;
      this[i] && this[i](t);
    }),
      "ontouchstart" in t
        ? ((n = "touchstart"), (o = ["touchmove", "touchend", "touchcancel"]))
        : t.PointerEvent
        ? ((n = "pointerdown"),
          (o = ["pointermove", "pointerup", "pointercancel"]))
        : ((n = "mousedown"), (o = ["mousemove", "mouseup"])),
      (s.touchActionValue = "none"),
      (s.bindHandles = function () {
        this._bindHandles("addEventListener", this.touchActionValue);
      }),
      (s.unbindHandles = function () {
        this._bindHandles("removeEventListener", "");
      }),
      (s._bindHandles = function (i, e) {
        this.handles.forEach((o) => {
          o[i](n, this),
            o[i]("click", this),
            t.PointerEvent && (o.style.touchAction = e);
        });
      }),
      (s.bindActivePointerEvents = function () {
        o.forEach((i) => {
          t.addEventListener(i, this);
        });
      }),
      (s.unbindActivePointerEvents = function () {
        o.forEach((i) => {
          t.removeEventListener(i, this);
        });
      }),
      (s.withPointer = function (t, i) {
        i.pointerId == this.pointerIdentifier && this[t](i, i);
      }),
      (s.withTouch = function (t, i) {
        let e;
        for (let t of i.changedTouches)
          t.identifier == this.pointerIdentifier && (e = t);
        e && this[t](i, e);
      }),
      (s.onmousedown = function (t) {
        this.pointerDown(t, t);
      }),
      (s.ontouchstart = function (t) {
        this.pointerDown(t, t.changedTouches[0]);
      }),
      (s.onpointerdown = function (t) {
        this.pointerDown(t, t);
      });
    const r = ["TEXTAREA", "INPUT", "SELECT", "OPTION"],
      h = ["radio", "checkbox", "button", "submit", "image", "file"];
    return (
      (s.pointerDown = function (t, i) {
        let e = r.includes(t.target.nodeName),
          n = h.includes(t.target.type),
          o = !e || n;
        !this.isPointerDown &&
          !t.button &&
          o &&
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== i.pointerId ? i.pointerId : i.identifier),
          this.pointerDown(t, i),
          this.bindActivePointerEvents(),
          this.emitEvent("pointerDown", [t, i]));
      }),
      (s.onmousemove = function (t) {
        this.pointerMove(t, t);
      }),
      (s.onpointermove = function (t) {
        this.withPointer("pointerMove", t);
      }),
      (s.ontouchmove = function (t) {
        this.withTouch("pointerMove", t);
      }),
      (s.pointerMove = function (t, i) {
        let e = {
          x: i.pageX - this.pointerDownPointer.pageX,
          y: i.pageY - this.pointerDownPointer.pageY,
        };
        this.emitEvent("pointerMove", [t, i, e]),
          !this.isDragging && this.hasDragStarted(e) && this.dragStart(t, i),
          this.isDragging && this.dragMove(t, i, e);
      }),
      (s.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (s.dragStart = function (t, i) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.emitEvent("dragStart", [t, i]);
      }),
      (s.dragMove = function (t, i, e) {
        this.emitEvent("dragMove", [t, i, e]);
      }),
      (s.onmouseup = function (t) {
        this.pointerUp(t, t);
      }),
      (s.onpointerup = function (t) {
        this.withPointer("pointerUp", t);
      }),
      (s.ontouchend = function (t) {
        this.withTouch("pointerUp", t);
      }),
      (s.pointerUp = function (t, i) {
        this.pointerDone(),
          this.emitEvent("pointerUp", [t, i]),
          this.isDragging ? this.dragEnd(t, i) : this.staticClick(t, i);
      }),
      (s.dragEnd = function (t, i) {
        (this.isDragging = !1),
          setTimeout(() => delete this.isPreventingClicks),
          this.emitEvent("dragEnd", [t, i]);
      }),
      (s.pointerDone = function () {
        (this.isPointerDown = !1),
          delete this.pointerIdentifier,
          this.unbindActivePointerEvents(),
          this.emitEvent("pointerDone");
      }),
      (s.onpointercancel = function (t) {
        this.withPointer("pointerCancel", t);
      }),
      (s.ontouchcancel = function (t) {
        this.withTouch("pointerCancel", t);
      }),
      (s.pointerCancel = function (t, i) {
        this.pointerDone(), this.emitEvent("pointerCancel", [t, i]);
      }),
      (s.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (s.staticClick = function (t, i) {
        let e = "mouseup" == t.type;
        (e && this.isIgnoringMouseUp) ||
          (this.emitEvent("staticClick", [t, i]),
          e &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(() => {
              delete this.isIgnoringMouseUp;
            }, 400)));
      }),
      e
    );
  }),
  /*!
   * Draggabilly v3.0.0
   * Make that shiz draggable
   * https://draggabilly.desandro.com
   * MIT license
   */
  (function (t, i) {
    "object" == typeof module && module.exports
      ? (module.exports = i(t, require("get-size"), require("unidragger")))
      : (t.Draggabilly = i(t, t.getSize, t.Unidragger));
  })("undefined" != typeof window ? window : this, function (t, i, e) {
    let n = t.jQuery;
    function o(t, i) {
      (this.element = "string" == typeof t ? document.querySelector(t) : t),
        n && (this.$element = n(this.element)),
        (this.options = {}),
        this.option(i),
        this._create();
    }
    let s = (o.prototype = Object.create(e.prototype));
    s.option = function (t) {
      this.options = { ...this.options, ...t };
    };
    const r = ["relative", "absolute", "fixed"];
    (s._create = function () {
      (this.position = {}),
        this._getPosition(),
        (this.startPoint = { x: 0, y: 0 }),
        (this.dragPoint = { x: 0, y: 0 }),
        (this.startPosition = { ...this.position });
      let t = getComputedStyle(this.element);
      r.includes(t.position) || (this.element.style.position = "relative"),
        this.on("pointerDown", this.handlePointerDown),
        this.on("pointerUp", this.handlePointerUp),
        this.on("dragStart", this.handleDragStart),
        this.on("dragMove", this.handleDragMove),
        this.on("dragEnd", this.handleDragEnd),
        this.setHandles(),
        this.enable();
    }),
      (s.setHandles = function () {
        let { handle: t } = this.options;
        "string" == typeof t
          ? (this.handles = this.element.querySelectorAll(t))
          : "object" == typeof t && t.length
          ? (this.handles = t)
          : t instanceof HTMLElement
          ? (this.handles = [t])
          : (this.handles = [this.element]);
      });
    const h = ["dragStart", "dragMove", "dragEnd"];
    let a = s.emitEvent;
    function d(t, i, e) {
      return i ? ((e = e || "round"), Math[e](t / i) * i) : t;
    }
    (s.emitEvent = function (i, e) {
      if (!this.isEnabled && h.includes(i)) return;
      a.call(this, i, e);
      let n,
        o = t.jQuery;
      if (!o || !this.$element) return;
      let s = e;
      e && e[0] instanceof Event && ([n, ...s] = e);
      let r = o.Event(n);
      (r.type = i), this.$element.trigger(r, s);
    }),
      (s._getPosition = function () {
        let t = getComputedStyle(this.element),
          i = this._getPositionCoord(t.left, "width"),
          e = this._getPositionCoord(t.top, "height");
        (this.position.x = isNaN(i) ? 0 : i),
          (this.position.y = isNaN(e) ? 0 : e),
          this._addTransformPosition(t);
      }),
      (s._getPositionCoord = function (t, e) {
        if (t.includes("%")) {
          let n = i(this.element.parentNode);
          return n ? (parseFloat(t) / 100) * n[e] : 0;
        }
        return parseInt(t, 10);
      }),
      (s._addTransformPosition = function (t) {
        let i = t.transform;
        if (!i.startsWith("matrix")) return;
        let e = i.split(","),
          n = i.startsWith("matrix3d") ? 12 : 4,
          o = parseInt(e[n], 10),
          s = parseInt(e[n + 1], 10);
        (this.position.x += o), (this.position.y += s);
      }),
      (s.handlePointerDown = function (t, i) {
        this.isEnabled &&
          ((this.pointerDownPointer = { pageX: i.pageX, pageY: i.pageY }),
          t.preventDefault(),
          document.activeElement.blur(),
          this.bindActivePointerEvents(t),
          this.element.classList.add("is-pointer-down"));
      }),
      (s.handleDragStart = function () {
        this.isEnabled &&
          (this._getPosition(),
          this.measureContainment(),
          (this.startPosition.x = this.position.x),
          (this.startPosition.y = this.position.y),
          this.setLeftTop(),
          (this.dragPoint.x = 0),
          (this.dragPoint.y = 0),
          this.element.classList.add("is-dragging"),
          this.animate());
      }),
      (s.measureContainment = function () {
        let t = this.getContainer();
        if (!t) return;
        let e = i(this.element),
          n = i(t),
          {
            borderLeftWidth: o,
            borderRightWidth: s,
            borderTopWidth: r,
            borderBottomWidth: h,
          } = n,
          a = this.element.getBoundingClientRect(),
          d = t.getBoundingClientRect(),
          u = o + s,
          l = r + h,
          c = (this.relativeStartPosition = {
            x: a.left - (d.left + o),
            y: a.top - (d.top + r),
          });
        this.containSize = {
          width: n.width - u - c.x - e.width,
          height: n.height - l - c.y - e.height,
        };
      }),
      (s.getContainer = function () {
        let t = this.options.containment;
        if (t)
          return t instanceof HTMLElement
            ? t
            : "string" == typeof t
            ? document.querySelector(t)
            : this.element.parentNode;
      }),
      (s.handleDragMove = function (t, i, e) {
        if (!this.isEnabled) return;
        let n = e.x,
          o = e.y,
          s = this.options.grid,
          r = s && s[0],
          h = s && s[1];
        (n = d(n, r)),
          (o = d(o, h)),
          (n = this.containDrag("x", n, r)),
          (o = this.containDrag("y", o, h)),
          (n = "y" == this.options.axis ? 0 : n),
          (o = "x" == this.options.axis ? 0 : o),
          (this.position.x = this.startPosition.x + n),
          (this.position.y = this.startPosition.y + o),
          (this.dragPoint.x = n),
          (this.dragPoint.y = o);
      }),
      (s.containDrag = function (t, i, e) {
        if (!this.options.containment) return i;
        let n = "x" == t ? "width" : "height",
          o = d(-this.relativeStartPosition[t], e, "ceil"),
          s = this.containSize[n];
        return (s = d(s, e, "floor")), Math.max(o, Math.min(s, i));
      }),
      (s.handlePointerUp = function () {
        this.element.classList.remove("is-pointer-down");
      }),
      (s.handleDragEnd = function () {
        this.isEnabled &&
          ((this.element.style.transform = ""),
          this.setLeftTop(),
          this.element.classList.remove("is-dragging"));
      }),
      (s.animate = function () {
        this.isDragging &&
          (this.positionDrag(), requestAnimationFrame(() => this.animate()));
      }),
      (s.setLeftTop = function () {
        let { x: t, y: i } = this.position;
        (this.element.style.left = `${t}px`),
          (this.element.style.top = `${i}px`);
      }),
      (s.positionDrag = function () {
        let { x: t, y: i } = this.dragPoint;
        this.element.style.transform = `translate3d(${t}px, ${i}px, 0)`;
      }),
      (s.setPosition = function (t, i) {
        (this.position.x = t), (this.position.y = i), this.setLeftTop();
      }),
      (s.enable = function () {
        this.isEnabled || ((this.isEnabled = !0), this.bindHandles());
      }),
      (s.disable = function () {
        this.isEnabled &&
          ((this.isEnabled = !1),
          this.isDragging && this.dragEnd(),
          this.unbindHandles());
      });
    const u = ["transform", "left", "top", "position"];
    return (
      (s.destroy = function () {
        this.disable(),
          u.forEach((t) => {
            this.element.style[t] = "";
          }),
          this.unbindHandles(),
          this.$element && this.$element.removeData("draggabilly");
      }),
      (s._init = function () {}),
      n && n.bridget && n.bridget("draggabilly", o),
      o
    );
  });
!(function (t, s) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = s())
    : "function" == typeof define && define.amd
    ? define(s)
    : ((t || self).Typed = s());
})(this, function () {
  function t() {
    return (
      (t = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var s = 1; s < arguments.length; s++) {
              var e = arguments[s];
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }
            return t;
          }),
      t.apply(this, arguments)
    );
  }
  var s = {
      strings: [
        "These are the default values...",
        "You know what you should do?",
        "Use your own!",
        "Have a great day!",
      ],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: Infinity,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onBegin: function (t) {},
      onComplete: function (t) {},
      preStringTyped: function (t, s) {},
      onStringTyped: function (t, s) {},
      onLastStringBackspaced: function (t) {},
      onTypingPaused: function (t, s) {},
      onTypingResumed: function (t, s) {},
      onReset: function (t) {},
      onStop: function (t, s) {},
      onStart: function (t, s) {},
      onDestroy: function (t) {},
    },
    e = new /*#__PURE__*/ ((function () {
      function e() {}
      var n = e.prototype;
      return (
        (n.load = function (e, n, i) {
          if (
            ((e.el = "string" == typeof i ? document.querySelector(i) : i),
            (e.options = t({}, s, n)),
            (e.isInput = "input" === e.el.tagName.toLowerCase()),
            (e.attr = e.options.attr),
            (e.bindInputFocusEvents = e.options.bindInputFocusEvents),
            (e.showCursor = !e.isInput && e.options.showCursor),
            (e.cursorChar = e.options.cursorChar),
            (e.cursorBlinking = !0),
            (e.elContent = e.attr
              ? e.el.getAttribute(e.attr)
              : e.el.textContent),
            (e.contentType = e.options.contentType),
            (e.typeSpeed = e.options.typeSpeed),
            (e.startDelay = e.options.startDelay),
            (e.backSpeed = e.options.backSpeed),
            (e.smartBackspace = e.options.smartBackspace),
            (e.backDelay = e.options.backDelay),
            (e.fadeOut = e.options.fadeOut),
            (e.fadeOutClass = e.options.fadeOutClass),
            (e.fadeOutDelay = e.options.fadeOutDelay),
            (e.isPaused = !1),
            (e.strings = e.options.strings.map(function (t) {
              return t.trim();
            })),
            (e.stringsElement =
              "string" == typeof e.options.stringsElement
                ? document.querySelector(e.options.stringsElement)
                : e.options.stringsElement),
            e.stringsElement)
          ) {
            (e.strings = []),
              (e.stringsElement.style.cssText =
                "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
            var r = Array.prototype.slice.apply(e.stringsElement.children),
              o = r.length;
            if (o)
              for (var a = 0; a < o; a += 1)
                e.strings.push(r[a].innerHTML.trim());
          }
          for (var u in ((e.strPos = 0),
          (e.currentElContent = this.getCurrentElContent(e)),
          e.currentElContent &&
            e.currentElContent.length > 0 &&
            ((e.strPos = e.currentElContent.length - 1),
            e.strings.unshift(e.currentElContent)),
          (e.sequence = []),
          e.strings))
            e.sequence[u] = u;
          (e.arrayPos = 0),
            (e.stopNum = 0),
            (e.loop = e.options.loop),
            (e.loopCount = e.options.loopCount),
            (e.curLoop = 0),
            (e.shuffle = e.options.shuffle),
            (e.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0,
            }),
            (e.typingComplete = !1),
            (e.autoInsertCss = e.options.autoInsertCss),
            e.autoInsertCss &&
              (this.appendCursorAnimationCss(e),
              this.appendFadeOutAnimationCss(e));
        }),
        (n.getCurrentElContent = function (t) {
          return t.attr
            ? t.el.getAttribute(t.attr)
            : t.isInput
            ? t.el.value
            : "html" === t.contentType
            ? t.el.innerHTML
            : t.el.textContent;
        }),
        (n.appendCursorAnimationCss = function (t) {
          var s = "data-typed-js-cursor-css";
          if (t.showCursor && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"),
              (e.innerHTML =
                "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),
              document.body.appendChild(e);
          }
        }),
        (n.appendFadeOutAnimationCss = function (t) {
          var s = "data-typed-fadeout-js-css";
          if (t.fadeOut && !document.querySelector("[" + s + "]")) {
            var e = document.createElement("style");
            e.setAttribute(s, "true"),
              (e.innerHTML =
                "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),
              document.body.appendChild(e);
          }
        }),
        e
      );
    })())(),
    n = new /*#__PURE__*/ ((function () {
      function t() {}
      var s = t.prototype;
      return (
        (s.typeHtmlChars = function (t, s, e) {
          if ("html" !== e.contentType) return s;
          var n = t.substring(s).charAt(0);
          if ("<" === n || "&" === n) {
            var i;
            for (
              i = "<" === n ? ">" : ";";
              t.substring(s + 1).charAt(0) !== i && !(1 + ++s > t.length);

            );
            s++;
          }
          return s;
        }),
        (s.backSpaceHtmlChars = function (t, s, e) {
          if ("html" !== e.contentType) return s;
          var n = t.substring(s).charAt(0);
          if (">" === n || ";" === n) {
            var i;
            for (
              i = ">" === n ? "<" : "&";
              t.substring(s - 1).charAt(0) !== i && !(--s < 0);

            );
            s--;
          }
          return s;
        }),
        t
      );
    })())(); /*#__PURE__*/
  return (function () {
    function t(t, s) {
      e.load(this, s, t), this.begin();
    }
    var s = t.prototype;
    return (
      (s.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (s.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (s.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (s.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (s.reset = function (t) {
        void 0 === t && (t = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          t && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (s.begin = function () {
        var t = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            0 === t.strPos
              ? t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
              : t.backspace(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay));
      }),
      (s.typewrite = function (t, s) {
        var e = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed),
          r = 1;
        !0 !== this.pause.status
          ? (this.timeout = setTimeout(function () {
              s = n.typeHtmlChars(t, s, e);
              var i = 0,
                o = t.substring(s);
              if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
                var a = 1;
                (a += (o = /\d+/.exec(o)[0]).length),
                  (i = parseInt(o)),
                  (e.temporaryPause = !0),
                  e.options.onTypingPaused(e.arrayPos, e),
                  (t = t.substring(0, s) + t.substring(s + a)),
                  e.toggleBlinking(!0);
              }
              if ("`" === o.charAt(0)) {
                for (
                  ;
                  "`" !== t.substring(s + r).charAt(0) &&
                  (r++, !(s + r > t.length));

                );
                var u = t.substring(0, s),
                  p = t.substring(u.length + 1, s + r),
                  c = t.substring(s + r + 1);
                (t = u + p + c), r--;
              }
              e.timeout = setTimeout(function () {
                e.toggleBlinking(!1),
                  s >= t.length ? e.doneTyping(t, s) : e.keepTyping(t, s, r),
                  e.temporaryPause &&
                    ((e.temporaryPause = !1),
                    e.options.onTypingResumed(e.arrayPos, e));
              }, i);
            }, i))
          : this.setPauseStatus(t, s, !0);
      }),
      (s.keepTyping = function (t, s, e) {
        0 === s &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var n = t.substring(0, (s += e));
        this.replaceText(n), this.typewrite(t, s);
      }),
      (s.doneTyping = function (t, s) {
        var e = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            !1 === this.loop || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              e.backspace(t, s);
            }, this.backDelay));
      }),
      (s.backspace = function (t, s) {
        var e = this;
        if (!0 !== this.pause.status) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var i = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            s = n.backSpaceHtmlChars(t, s, e);
            var i = t.substring(0, s);
            if ((e.replaceText(i), e.smartBackspace)) {
              var r = e.strings[e.arrayPos + 1];
              e.stopNum = r && i === r.substring(0, s) ? s : 0;
            }
            s > e.stopNum
              ? (s--, e.backspace(t, s))
              : s <= e.stopNum &&
                (e.arrayPos++,
                e.arrayPos === e.strings.length
                  ? ((e.arrayPos = 0),
                    e.options.onLastStringBackspaced(),
                    e.shuffleStringsIfNeeded(),
                    e.begin())
                  : e.typewrite(e.strings[e.sequence[e.arrayPos]], s));
          }, i);
        } else this.setPauseStatus(t, s, !1);
      }),
      (s.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (s.setPauseStatus = function (t, s, e) {
        (this.pause.typewrite = e),
          (this.pause.curString = t),
          (this.pause.curStrPos = s);
      }),
      (s.toggleBlinking = function (t) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== t &&
              ((this.cursorBlinking = t),
              t
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (s.humanizer = function (t) {
        return Math.round((Math.random() * t) / 2) + t;
      }),
      (s.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (s.initFadeOut = function () {
        var t = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            t.arrayPos++,
              t.replaceText(""),
              t.strings.length > t.arrayPos
                ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0)
                : (t.typewrite(t.strings[0], 0), (t.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (s.replaceText = function (t) {
        this.attr
          ? this.el.setAttribute(this.attr, t)
          : this.isInput
          ? (this.el.value = t)
          : "html" === this.contentType
          ? (this.el.innerHTML = t)
          : (this.el.textContent = t);
      }),
      (s.bindFocusEvents = function () {
        var t = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (s) {
            t.stop();
          }),
          this.el.addEventListener("blur", function (s) {
            (t.el.value && 0 !== t.el.value.length) || t.start();
          }));
      }),
      (s.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )));
      }),
      t
    );
  })();
});
(function (d) {
  "use strict";
  var E = Object.defineProperty,
    $ = Object.defineProperties,
    P = Object.getOwnPropertyDescriptors,
    p = Object.getOwnPropertySymbols,
    C = Object.prototype.hasOwnProperty,
    M = Object.prototype.propertyIsEnumerable,
    y = (t, e, n) =>
      e in t
        ? E(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[e] = n),
    f = (t, e) => {
      for (var n in e || (e = {})) C.call(e, n) && y(t, n, e[n]);
      if (p) for (var n of p(e)) M.call(e, n) && y(t, n, e[n]);
      return t;
    },
    G = (t, e) => $(t, P(e));
  const v = (t = "always") => ({
      playMode: t,
      createContainers: !0,
      hideOverflow: !1,
      timing:
        t === "always"
          ? { duration: 2 * 1e3, iterations: 1 / 0 }
          : { duration: 250, iterations: 1 },
      glitchTimeSpan:
        t === "always" ? { start: 0.5, end: 0.7 } : { start: 0, end: 1 },
      shake: { velocity: 15, amplitudeX: 0.2, amplitudeY: 0.2 },
      slice:
        t === "click"
          ? {
              count: 15,
              velocity: 20,
              minHeight: 0.02,
              maxHeight: 0.15,
              hueRotate: !0,
            }
          : {
              count: 6,
              velocity: 15,
              minHeight: 0.02,
              maxHeight: 0.15,
              hueRotate: !0,
            },
      pulse: !1,
    }),
    w = (t, e) => {
      if (!t.glitchTimeSpan) return 1;
      const n = t.glitchTimeSpan.start,
        a = t.glitchTimeSpan.end;
      if (e < n || e > a) return 0;
      const r = n + (a - n) / 2;
      return e < r ? (e - n) / (r - n) : (a - e) / (a - r);
    },
    u = (t, e) => (Math.random() - 0.5) * 2 * w(t, e),
    O = ({ minHeight: t, maxHeight: e, minWidth: n, maxWidth: a }) => {
      const r = Math.floor(Math.random() * ((e - t) * 100 + 1)) + t * 100,
        c = Math.floor(Math.random() * ((a - n) * 100 + 1)) + n * 100,
        i = Math.floor(Math.random() * (100 - r)),
        s = Math.floor(Math.random() * (100 - c)),
        h = `${s + c}% ${i}%`,
        l = `${s + c}% ${i + r}%`,
        o = `${s}% ${i + r}%`,
        g = `${s}% ${i}%`;
      return `polygon(${h},${l},${o},${g})`;
    },
    b = (t) => {
      const e = Math.floor((t.slice.velocity * t.timing.duration) / 1e3) + 1,
        n = [];
      for (let a = 0; a < e; ++a) {
        if (w(t, a / e) === 0) {
          n.push({ opacity: "0", transform: "none", clipPath: "unset" });
          continue;
        }
        const r = u(t, a / e) * 30,
          c = {
            opacity: "1",
            transform: `translate3d(${r}%,0,0)`,
            clipPath: O({
              minHeight: t.slice.minHeight,
              maxHeight: t.slice.maxHeight,
              minWidth: 1,
              maxWidth: 1,
            }),
          };
        t.slice.hueRotate &&
          (c.filter = `hue-rotate(${Math.floor(u(t, a / e) * 360)}deg)`),
          n.push(c);
      }
      return {
        steps: n,
        timing: f({ easing: `steps(${e},jump-start)` }, t.timing),
      };
    },
    A = (t) =>
      t.pulse
        ? {
            steps: [
              { transform: "scale(1)", opacity: "1" },
              { transform: `scale(${t.pulse.scale})`, opacity: "0" },
            ],
            timing: G(f({}, t.timing), {
              delay:
                (t.glitchTimeSpan ? t.glitchTimeSpan.start : 0) *
                t.timing.duration,
              easing: "ease-in-out",
            }),
          }
        : null,
    L = (t) => {
      if (!t.shake) return { steps: [], timing: {} };
      const e = Math.floor((t.shake.velocity * t.timing.duration) / 1e3) + 1,
        n = [];
      for (let a = 0; a < e; ++a) {
        const r = u(t, a / e) * t.shake.amplitudeX * 100,
          c = u(t, a / e) * t.shake.amplitudeY * 100;
        n.push({ transform: `translate3d(${r}%,${c}%,0)` });
      }
      return {
        steps: n,
        timing: f({ easing: `steps(${e},jump-start)` }, t.timing),
      };
    },
    _ = (t) =>
      [
        L(t),
        A(t),
        ...Array.from({ length: t.slice.count }).map(() => b(t)),
      ].filter((e) => e !== null),
    m = (...t) => {
      const e = (n) => n && typeof n == "object";
      return t.reduce(
        (n, a) => (
          Object.keys(a).forEach((r) => {
            e(n[r]) && e(a[r])
              ? (n[r] = m(n[r], a[r]))
              : a[r] !== void 0 && (n[r] = a[r]);
          }),
          n
        ),
        {}
      );
    },
    H = (t, e) => {
      var n, a;
      if (!e.createContainers)
        return {
          container: t,
          layersContainer: t,
          glitched: t.firstElementChild,
        };
      if (!t.dataset.glitched) {
        const i = document.createElement("div"),
          s = document.createElement("div");
        return (
          getComputedStyle(t)
            .getPropertyValue("display")
            .match(/^inline/) && (s.style.display = "inline-block"),
          s.appendChild(i),
          (n = t.parentElement) == null || n.insertBefore(s, t),
          i.prepend(t),
          { container: s, layersContainer: i, glitched: t }
        );
      }
      const r = t.parentElement,
        c = (a = t.parentElement) == null ? void 0 : a.parentElement;
      for (; r.children.length > 1; ) r.removeChild(r.children[1]);
      return (
        r.firstElementChild.getAnimations().forEach((i) => i.cancel()),
        { container: c, layersContainer: r, glitched: t }
      );
    },
    R = (t, e, n) => {
      const { glitched: a, container: r, layersContainer: c } = H(t, n);
      (c.style.display = "grid"),
        n.hideOverflow && (r.style.overflow = "hidden"),
        n.html && (a.innerHTML = n.html),
        (a.style.gridArea = "1/1/-1/-1");
      const i = a.cloneNode(!0);
      (i.style.gridArea = "1/1/-1/-1"),
        (i.style.userSelect = "none"),
        (i.style.pointerEvents = "none"),
        (i.style.opacity = "0");
      for (let l = 0; l < e.length - 1; ++l) {
        const o = i.cloneNode(!0);
        c.appendChild(o);
      }
      const s = () => {
          e.forEach((l, o) => {
            c.children[o].animate(l.steps, l.timing);
          });
        },
        h = () => {
          e.forEach((l, o) => {
            c.children[o].getAnimations().forEach((g) => {
              g.cancel();
            });
          });
        };
      switch (
        ((r.onmouseenter = null),
        (r.onmouseleave = null),
        (r.onclick = null),
        n.playMode)
      ) {
        case "always":
          s();
          break;
        case "hover":
          (r.onmouseenter = s), (r.onmouseleave = h);
          break;
        case "click":
          r.onclick = () => {
            h(), s();
          };
          break;
      }
      return (
        (t.dataset.glitched = "1"),
        { container: r, startGlitch: s, stopGlitch: h }
      );
    },
    T = {
      glitch: (t = ".powerglitch", e = {}) => {
        const n = m(v(e.playMode), e);
        let a = [];
        typeof t == "string"
          ? (a = Array.from(document.querySelectorAll(t)))
          : t instanceof NodeList
          ? (a = Array.from(t))
          : Array.isArray(t)
          ? (a = t)
          : t instanceof HTMLElement && (a = [t]);
        const r = _(n),
          c = a.map((i) => R(i, r, n));
        return {
          containers: c.map((i) => i.container),
          startGlitch: () => c.forEach((i) => i.startGlitch()),
          stopGlitch: () => c.forEach((i) => i.stopGlitch()),
        };
      },
      generateLayers: _,
      getDefaultOptions: v,
    };
  (d.PowerGlitch = T),
    (d.mergeOptions = m),
    Object.defineProperty(d, "__esModule", { value: !0 });
})((this.window = this.window || {}));
