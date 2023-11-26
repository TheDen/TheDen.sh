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
          "_",
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
                        s,
                      ),
                    )
                  : new Date(
                      r[1],
                      i,
                      r[3] || 1,
                      r[4] || 0,
                      r[5] || 0,
                      r[6] || 0,
                      s,
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
                n,
              );
              return r ? i : i.endOf(a);
            },
            l = function (t, e) {
              return O.w(
                n
                  .toDate()
                  [t].apply(
                    n.toDate("s"),
                    (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e),
                  ),
                n,
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
