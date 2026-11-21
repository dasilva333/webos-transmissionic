"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[753], { 4753: function(n, i, e) {
  e.r(i), e.d(i, { mdTransitionAnimation: function() {
    return a;
  } });
  var t = e(5980), o = e(5026);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const a = (n2, i2) => {
    var e2, a2, r;
    const s = "40px", l = "0px", c = "back" === i2.direction, d = i2.enteringEl, u = i2.leavingEl, m = (0, o.g)(d), f = m.querySelector("ion-toolbar"), b = (0, t.c)();
    if (b.addElement(m).fill("both").beforeRemoveClass("ion-page-invisible"), c ? b.duration((null !== (e2 = i2.duration) && void 0 !== e2 ? e2 : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)") : b.duration((null !== (a2 = i2.duration) && void 0 !== a2 ? a2 : 0) || 280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform", `translateY(${s})`, `translateY(${l})`).fromTo("opacity", 0.01, 1), f) {
      const n3 = (0, t.c)();
      n3.addElement(f), b.addAnimation(n3);
    }
    if (u && c) {
      b.duration((null !== (r = i2.duration) && void 0 !== r ? r : 0) || 200).easing("cubic-bezier(0.47,0,0.745,0.715)");
      const n3 = (0, t.c)();
      n3.addElement((0, o.g)(u)).onFinish(((i3) => {
        1 === i3 && n3.elements.length > 0 && n3.elements[0].style.setProperty("display", "none");
      })).fromTo("transform", `translateY(${l})`, `translateY(${s})`).fromTo("opacity", 1, 0), b.addAnimation(n3);
    }
    return b;
  };
} }]);
