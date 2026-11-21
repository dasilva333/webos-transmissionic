"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[823], { 6823: function(t, e, n) {
  n.r(e), n.d(e, { startTapClick: function() {
    return s;
  } });
  var o = n(6587);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const s = (t2) => {
    let e2, n2, s2, f = 10 * -l, v = 0;
    const p = t2.getBoolean("animated", true) && t2.getBoolean("rippleEffect", true), m = /* @__PURE__ */ new WeakMap(), h = (t3) => {
      f = (0, o.u)(t3), k(t3);
    }, L = (t3) => {
      f = (0, o.u)(t3), T(t3);
    }, w = (t3) => {
      if (2 === t3.button) return;
      const e3 = (0, o.u)(t3) - l;
      f < e3 && k(t3);
    }, E = (t3) => {
      const e3 = (0, o.u)(t3) - l;
      f < e3 && T(t3);
    }, b = () => {
      s2 && clearTimeout(s2), s2 = void 0, e2 && (y(false), e2 = void 0);
    }, k = (t3) => {
      e2 || g(i(t3), t3);
    }, T = (t3) => {
      g(void 0, t3);
    }, g = (t3, n3) => {
      if (t3 && t3 === e2) return;
      s2 && clearTimeout(s2), s2 = void 0;
      const { x: i2, y: r2 } = (0, o.p)(n3);
      if (e2) {
        if (m.has(e2)) throw new Error("internal error");
        e2.classList.contains(c) || C(e2, i2, r2), y(true);
      }
      if (t3) {
        const e3 = m.get(t3);
        e3 && (clearTimeout(e3), m.delete(t3)), t3.classList.remove(c);
        const n4 = () => {
          C(t3, i2, r2), s2 = void 0;
        };
        a(t3) ? n4() : s2 = setTimeout(n4, d);
      }
      e2 = t3;
    }, C = (t3, e3, o2) => {
      if (v = Date.now(), t3.classList.add(c), !p) return;
      const s3 = r(t3);
      null !== s3 && (R(), n2 = s3.addRipple(e3, o2));
    }, R = () => {
      void 0 !== n2 && (n2.then(((t3) => t3())), n2 = void 0);
    }, y = (t3) => {
      R();
      const n3 = e2;
      if (!n3) return;
      const o2 = u - Date.now() + v;
      if (t3 && o2 > 0 && !a(n3)) {
        const t4 = setTimeout((() => {
          n3.classList.remove(c), m.delete(n3);
        }), u);
        m.set(n3, t4);
      } else n3.classList.remove(c);
    }, S = document;
    S.addEventListener("ionGestureCaptured", b), S.addEventListener("touchstart", h, true), S.addEventListener("touchcancel", L, true), S.addEventListener("touchend", L, true), S.addEventListener("pointercancel", b, true), S.addEventListener("mousedown", w, true), S.addEventListener("mouseup", E, true);
  }, i = (t2) => {
    if (void 0 === t2.composedPath) return t2.target.closest(".ion-activatable");
    {
      const e2 = t2.composedPath();
      for (let t3 = 0; t3 < e2.length - 2; t3++) {
        const n2 = e2[t3];
        if (!(n2 instanceof ShadowRoot) && n2.classList.contains("ion-activatable")) return n2;
      }
    }
  }, a = (t2) => t2.classList.contains("ion-activatable-instant"), r = (t2) => {
    if (t2.shadowRoot) {
      const e2 = t2.shadowRoot.querySelector("ion-ripple-effect");
      if (e2) return e2;
    }
    return t2.querySelector("ion-ripple-effect");
  }, c = "ion-activated", d = 200, u = 200, l = 2500;
} }]);
