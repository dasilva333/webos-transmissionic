"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[990], { 8990: function(t, e, n) {
  n.r(e), n.d(e, { createSwipeBackGesture: function() {
    return c;
  } });
  var r = n(6587), i = n(545), s = n(6515);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const c = (t2, e2, n2, c2, o) => {
    const a = t2.ownerDocument.defaultView;
    let u = (0, i.i)(t2);
    const h = (t3) => {
      const e3 = 50, { startX: n3 } = t3;
      return u ? n3 >= a.innerWidth - e3 : n3 <= e3;
    }, l = (t3) => u ? -t3.deltaX : t3.deltaX, d = (t3) => u ? -t3.velocityX : t3.velocityX, f = (n3) => (u = (0, i.i)(t2), h(n3) && e2()), k = (t3) => {
      const e3 = l(t3), n3 = e3 / a.innerWidth;
      c2(n3);
    }, w = (t3) => {
      const e3 = l(t3), n3 = a.innerWidth, i2 = e3 / n3, s2 = d(t3), c3 = n3 / 2, u2 = s2 >= 0 && (s2 > 0.2 || e3 > c3), h2 = u2 ? 1 - i2 : i2, f2 = h2 * n3;
      let k2 = 0;
      if (f2 > 5) {
        const t4 = f2 / Math.abs(s2);
        k2 = Math.min(t4, 540);
      }
      o(u2, i2 <= 0 ? 0.01 : (0, r.h)(0, i2, 0.9999), k2);
    };
    return (0, s.createGesture)({ el: t2, gestureName: "goback-swipe", gesturePriority: 40, threshold: 10, canStart: f, onStart: n2, onMove: k, onEnd: w });
  };
} }]);
