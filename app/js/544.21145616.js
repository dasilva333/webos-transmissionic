"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[544], { 2642: function(e, t, s) {
  s.r(t), s.d(t, { startFocusVisible: function() {
    return i;
  } });
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const o = "ion-focused", n = "ion-focusable", r = ["Tab", "ArrowDown", "Space", "Escape", " ", "Shift", "Enter", "ArrowLeft", "ArrowRight", "ArrowUp", "Home", "End"], i = (e2) => {
    let t2 = [], s2 = true;
    const i2 = e2 ? e2.shadowRoot : document, c = e2 || document.body, a = (e3) => {
      t2.forEach(((e4) => e4.classList.remove(o))), e3.forEach(((e4) => e4.classList.add(o))), t2 = e3;
    }, d = () => {
      s2 = false, a([]);
    }, u = (e3) => {
      s2 = r.includes(e3.key), s2 || a([]);
    }, v = (e3) => {
      if (s2 && void 0 !== e3.composedPath) {
        const t3 = e3.composedPath().filter(((e4) => !!e4.classList && e4.classList.contains(n)));
        a(t3);
      }
    }, f = () => {
      i2.activeElement === c && a([]);
    };
    i2.addEventListener("keydown", u), i2.addEventListener("focusin", v), i2.addEventListener("focusout", f), i2.addEventListener("touchstart", d), i2.addEventListener("mousedown", d);
    const m = () => {
      i2.removeEventListener("keydown", u), i2.removeEventListener("focusin", v), i2.removeEventListener("focusout", f), i2.removeEventListener("touchstart", d), i2.removeEventListener("mousedown", d);
    };
    return { destroy: m, setFocus: a };
  };
} }]);
