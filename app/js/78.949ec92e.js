"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[78], { 6078: function(t, e, n) {
  n.r(e), n.d(e, { startStatusTap: function() {
    return o;
  } });
  var s = n(65), r = n(4074), i = n(6587);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const o = () => {
    const t2 = window;
    t2.addEventListener("statusTap", (() => {
      (0, s.wj)((() => {
        const e2 = t2.innerWidth, n2 = t2.innerHeight, o2 = document.elementFromPoint(e2 / 2, n2 / 2);
        if (!o2) return;
        const a = (0, r.a)(o2);
        a && new Promise(((t3) => (0, i.c)(a, t3))).then((() => {
          (0, s.Iu)((async () => {
            a.style.setProperty("--overflow", "hidden"), await (0, r.s)(a, 300), a.style.removeProperty("--overflow");
          }));
        }));
      }));
    }));
  };
} }]);
