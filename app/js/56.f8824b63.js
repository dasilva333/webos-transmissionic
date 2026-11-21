"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[56], { 5056: function(e, n, t) {
  t.r(n), t.d(n, { ToastWeb: function() {
    return o;
  } });
  var s = t(9895);
  class o extends s.Uw {
    async show(e2) {
      if ("undefined" !== typeof document) {
        let n2 = 2e3;
        e2.duration && (n2 = "long" === e2.duration ? 3500 : 2e3);
        const t2 = document.createElement("pwa-toast");
        t2.duration = n2, t2.message = e2.text, document.body.appendChild(t2);
      }
    }
  }
} }]);
