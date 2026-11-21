"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[338], { 6338: function(e, t, o) {
  o.r(t), o.d(t, { iosTransitionAnimation: function() {
    return p;
  }, shadow: function() {
    return s;
  } });
  var n = o(5980), r = o(5026);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const a = 540, l = (e2) => document.querySelector(`${e2}.ion-cloned-element`), s = (e2) => e2.shadowRoot || e2, i = (e2) => {
    const t2 = "ION-TABS" === e2.tagName ? e2 : e2.querySelector("ion-tabs"), o2 = "ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";
    if (null != t2) {
      const e3 = t2.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
      return null != e3 ? e3.querySelector(o2) : null;
    }
    return e2.querySelector(o2);
  }, c = (e2, t2) => {
    const o2 = "ION-TABS" === e2.tagName ? e2 : e2.querySelector("ion-tabs");
    let n2 = [];
    if (null != o2) {
      const e3 = o2.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");
      null != e3 && (n2 = e3.querySelectorAll("ion-buttons"));
    } else n2 = e2.querySelectorAll("ion-buttons");
    for (const r2 of n2) {
      const e3 = r2.closest("ion-header"), o3 = e3 && !e3.classList.contains("header-collapse-condense-inactive"), n3 = r2.querySelector("ion-back-button"), a2 = r2.classList.contains("buttons-collapse"), l2 = "start" === r2.slot || "" === r2.slot;
      if (null !== n3 && l2 && (a2 && o3 && t2 || !a2)) return n3;
    }
    return null;
  }, d = (e2, t2, o2, n2, r2) => {
    const a2 = c(n2, o2), l2 = i(r2), s2 = i(n2), d2 = c(r2, o2), p2 = null !== a2 && null !== l2 && !o2, y = null !== s2 && null !== d2 && o2;
    if (p2) {
      const n3 = l2.getBoundingClientRect(), r3 = a2.getBoundingClientRect();
      m(e2, t2, o2, l2, n3, r3), f(e2, t2, o2, a2, n3, r3);
    } else if (y) {
      const n3 = s2.getBoundingClientRect(), r3 = d2.getBoundingClientRect();
      m(e2, t2, o2, s2, n3, r3), f(e2, t2, o2, d2, n3, r3);
    }
    return { forward: p2, backward: y };
  }, f = (e2, t2, o2, r2, a2, i2) => {
    const c2 = t2 ? `calc(100% - ${i2.right + 4}px)` : i2.left - 4 + "px", d2 = t2 ? "7px" : "-7px", f2 = t2 ? "-4px" : "4px", m2 = t2 ? "-4px" : "4px", p2 = t2 ? "right" : "left", y = t2 ? "left" : "right", u = [{ offset: 0, opacity: 0, transform: `translate3d(${d2}, ${a2.top - 40}px, 0) scale(2.1)` }, { offset: 1, opacity: 1, transform: `translate3d(${f2}, ${i2.top - 46}px, 0) scale(1)` }], b = [{ offset: 0, opacity: 1, transform: `translate3d(${f2}, ${i2.top - 46}px, 0) scale(1)` }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: `translate3d(${d2}, ${a2.top - 40}px, 0) scale(2.1)` }], S = o2 ? b : u, $ = [{ offset: 0, opacity: 0, transform: `translate3d(${m2}, ${i2.top - 41}px, 0) scale(0.6)` }, { offset: 1, opacity: 1, transform: `translate3d(${m2}, ${i2.top - 46}px, 0) scale(1)` }], g = [{ offset: 0, opacity: 1, transform: `translate3d(${m2}, ${i2.top - 46}px, 0) scale(1)` }, { offset: 0.2, opacity: 0, transform: `translate3d(${m2}, ${i2.top - 41}px, 0) scale(0.6)` }, { offset: 1, opacity: 0, transform: `translate3d(${m2}, ${i2.top - 41}px, 0) scale(0.6)` }], T = o2 ? g : $, h = (0, n.c)(), x = (0, n.c)(), q = l("ion-back-button"), X = s(q).querySelector(".button-text"), A = s(q).querySelector("ion-icon");
    q.text = r2.text, q.mode = r2.mode, q.icon = r2.icon, q.color = r2.color, q.disabled = r2.disabled, q.style.setProperty("display", "block"), q.style.setProperty("position", "fixed"), x.addElement(A), h.addElement(X), h.beforeStyles({ "transform-origin": `${p2} center` }).beforeAddWrite((() => {
      r2.style.setProperty("display", "none"), q.style.setProperty(p2, c2);
    })).afterAddWrite((() => {
      r2.style.setProperty("display", ""), q.style.setProperty("display", "none"), q.style.removeProperty(p2);
    })).keyframes(S), x.beforeStyles({ "transform-origin": `${y} center` }).keyframes(T), e2.addAnimation([h, x]);
  }, m = (e2, t2, o2, r2, a2, s2) => {
    const i2 = t2 ? `calc(100% - ${a2.right}px)` : `${a2.left}px`, c2 = t2 ? "-18px" : "18px", d2 = t2 ? "right" : "left", f2 = [{ offset: 0, opacity: 0, transform: `translate3d(${c2}, ${s2.top - 4}px, 0) scale(0.49)` }, { offset: 0.1, opacity: 0 }, { offset: 1, opacity: 1, transform: `translate3d(0, ${a2.top - 2}px, 0) scale(1)` }], m2 = [{ offset: 0, opacity: 0.99, transform: `translate3d(0, ${a2.top - 2}px, 0) scale(1)` }, { offset: 0.6, opacity: 0 }, { offset: 1, opacity: 0, transform: `translate3d(${c2}, ${s2.top - 4}px, 0) scale(0.5)` }], p2 = o2 ? f2 : m2, y = l("ion-title"), u = (0, n.c)();
    y.innerText = r2.innerText, y.size = r2.size, y.color = r2.color, u.addElement(y), u.beforeStyles({ "transform-origin": `${d2} center`, height: "46px", display: "", position: "relative", [d2]: i2 }).beforeAddWrite((() => {
      r2.style.setProperty("display", "none");
    })).afterAddWrite((() => {
      r2.style.setProperty("display", ""), y.style.setProperty("display", "none");
    })).keyframes(p2), e2.addAnimation(u);
  }, p = (e2, t2) => {
    var o2;
    try {
      const l2 = "cubic-bezier(0.32,0.72,0,1)", i2 = "opacity", c2 = "transform", f2 = "0%", m2 = 0.8, p2 = "rtl" === e2.ownerDocument.dir, y = p2 ? "-99.5%" : "99.5%", u = p2 ? "33%" : "-33%", b = t2.enteringEl, S = t2.leavingEl, $ = "back" === t2.direction, g = b.querySelector(":scope > ion-content"), T = b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"), h = b.querySelectorAll(":scope > ion-header > ion-toolbar"), x = (0, n.c)(), q = (0, n.c)();
      if (x.addElement(b).duration((null !== (o2 = t2.duration) && void 0 !== o2 ? o2 : 0) || a).easing(t2.easing || l2).fill("both").beforeRemoveClass("ion-page-invisible"), S && null !== e2 && void 0 !== e2) {
        const t3 = (0, n.c)();
        t3.addElement(e2), x.addAnimation(t3);
      }
      if (g || 0 !== h.length || 0 !== T.length ? (q.addElement(g), q.addElement(T)) : q.addElement(b.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), x.addAnimation(q), $ ? q.beforeClearStyles([i2]).fromTo("transform", `translateX(${u})`, `translateX(${f2})`).fromTo(i2, m2, 1) : q.beforeClearStyles([i2]).fromTo("transform", `translateX(${y})`, `translateX(${f2})`), g) {
        const e3 = s(g).querySelector(".transition-effect");
        if (e3) {
          const t3 = e3.querySelector(".transition-cover"), o3 = e3.querySelector(".transition-shadow"), r2 = (0, n.c)(), a2 = (0, n.c)(), l3 = (0, n.c)();
          r2.addElement(e3).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), a2.addElement(t3).beforeClearStyles([i2]).fromTo(i2, 0, 0.1), l3.addElement(o3).beforeClearStyles([i2]).fromTo(i2, 0.03, 0.7), r2.addAnimation([a2, l3]), q.addAnimation([r2]);
        }
      }
      const X = b.querySelector("ion-header.header-collapse-condense"), { forward: A, backward: E } = d(x, p2, $, b, S);
      if (h.forEach(((e3) => {
        const t3 = (0, n.c)();
        t3.addElement(e3), x.addAnimation(t3);
        const o3 = (0, n.c)();
        o3.addElement(e3.querySelector("ion-title"));
        const r2 = (0, n.c)(), a2 = Array.from(e3.querySelectorAll("ion-buttons,[menuToggle]")), l3 = e3.closest("ion-header"), c3 = null === l3 || void 0 === l3 ? void 0 : l3.classList.contains("header-collapse-condense-inactive");
        let d2;
        d2 = $ ? a2.filter(((e4) => {
          const t4 = e4.classList.contains("buttons-collapse");
          return t4 && !c3 || !t4;
        })) : a2.filter(((e4) => !e4.classList.contains("buttons-collapse"))), r2.addElement(d2);
        const m3 = (0, n.c)();
        m3.addElement(e3.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));
        const b2 = (0, n.c)();
        b2.addElement(s(e3).querySelector(".toolbar-background"));
        const S2 = (0, n.c)(), g2 = e3.querySelector("ion-back-button");
        if (g2 && S2.addElement(g2), t3.addAnimation([o3, r2, m3, b2, S2]), r2.fromTo(i2, 0.01, 1), m3.fromTo(i2, 0.01, 1), $) c3 || o3.fromTo("transform", `translateX(${u})`, `translateX(${f2})`).fromTo(i2, 0.01, 1), m3.fromTo("transform", `translateX(${u})`, `translateX(${f2})`), S2.fromTo(i2, 0.01, 1);
        else {
          X || o3.fromTo("transform", `translateX(${y})`, `translateX(${f2})`).fromTo(i2, 0.01, 1), m3.fromTo("transform", `translateX(${y})`, `translateX(${f2})`), b2.beforeClearStyles([i2, "transform"]);
          const e4 = null === l3 || void 0 === l3 ? void 0 : l3.translucent;
          if (e4 ? b2.fromTo("transform", p2 ? "translateX(-100%)" : "translateX(100%)", "translateX(0px)") : b2.fromTo(i2, 0.01, "var(--opacity)"), A || S2.fromTo(i2, 0.01, 1), g2 && !A) {
            const e5 = (0, n.c)();
            e5.addElement(s(g2).querySelector(".button-text")).fromTo("transform", p2 ? "translateX(-100px)" : "translateX(100px)", "translateX(0px)"), t3.addAnimation(e5);
          }
        }
      })), S) {
        const e3 = (0, n.c)(), t3 = S.querySelector(":scope > ion-content"), o3 = S.querySelectorAll(":scope > ion-header > ion-toolbar"), a2 = S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");
        if (t3 || 0 !== o3.length || 0 !== a2.length ? (e3.addElement(t3), e3.addElement(a2)) : e3.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")), x.addAnimation(e3), $) {
          e3.beforeClearStyles([i2]).fromTo("transform", `translateX(${f2})`, p2 ? "translateX(-100%)" : "translateX(100%)");
          const t4 = (0, r.g)(S);
          x.afterAddWrite((() => {
            "normal" === x.getDirection() && t4.style.setProperty("display", "none");
          }));
        } else e3.fromTo("transform", `translateX(${f2})`, `translateX(${u})`).fromTo(i2, 1, m2);
        if (t3) {
          const o4 = s(t3).querySelector(".transition-effect");
          if (o4) {
            const t4 = o4.querySelector(".transition-cover"), r2 = o4.querySelector(".transition-shadow"), a3 = (0, n.c)(), l3 = (0, n.c)(), s2 = (0, n.c)();
            a3.addElement(o4).beforeStyles({ opacity: "1", display: "block" }).afterStyles({ opacity: "", display: "" }), l3.addElement(t4).beforeClearStyles([i2]).fromTo(i2, 0.1, 0), s2.addElement(r2).beforeClearStyles([i2]).fromTo(i2, 0.7, 0.03), a3.addAnimation([l3, s2]), e3.addAnimation([a3]);
          }
        }
        o3.forEach(((e4) => {
          const t4 = (0, n.c)();
          t4.addElement(e4);
          const o4 = (0, n.c)();
          o4.addElement(e4.querySelector("ion-title"));
          const r2 = (0, n.c)(), a3 = e4.querySelectorAll("ion-buttons,[menuToggle]"), l3 = e4.closest("ion-header"), d2 = null === l3 || void 0 === l3 ? void 0 : l3.classList.contains("header-collapse-condense-inactive"), m3 = Array.from(a3).filter(((e5) => {
            const t5 = e5.classList.contains("buttons-collapse");
            return t5 && !d2 || !t5;
          }));
          r2.addElement(m3);
          const y2 = (0, n.c)(), b2 = e4.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");
          b2.length > 0 && y2.addElement(b2);
          const S2 = (0, n.c)();
          S2.addElement(s(e4).querySelector(".toolbar-background"));
          const g2 = (0, n.c)(), T2 = e4.querySelector("ion-back-button");
          if (T2 && g2.addElement(T2), t4.addAnimation([o4, r2, y2, g2, S2]), x.addAnimation(t4), g2.fromTo(i2, 0.99, 0), r2.fromTo(i2, 0.99, 0), y2.fromTo(i2, 0.99, 0), $) {
            d2 || o4.fromTo("transform", `translateX(${f2})`, p2 ? "translateX(-100%)" : "translateX(100%)").fromTo(i2, 0.99, 0), y2.fromTo("transform", `translateX(${f2})`, p2 ? "translateX(-100%)" : "translateX(100%)"), S2.beforeClearStyles([i2, "transform"]);
            const e5 = null === l3 || void 0 === l3 ? void 0 : l3.translucent;
            if (e5 ? S2.fromTo("transform", "translateX(0px)", p2 ? "translateX(-100%)" : "translateX(100%)") : S2.fromTo(i2, "var(--opacity)", 0), T2 && !E) {
              const e6 = (0, n.c)();
              e6.addElement(s(T2).querySelector(".button-text")).fromTo("transform", `translateX(${f2})`, `translateX(${(p2 ? -124 : 124) + "px"})`), t4.addAnimation(e6);
            }
          } else d2 || o4.fromTo("transform", `translateX(${f2})`, `translateX(${u})`).fromTo(i2, 0.99, 0).afterClearStyles([c2, i2]), y2.fromTo("transform", `translateX(${f2})`, `translateX(${u})`).afterClearStyles([c2, i2]), g2.afterClearStyles([i2]), o4.afterClearStyles([i2]), r2.afterClearStyles([i2]);
        }));
      }
      return x;
    } catch (l2) {
      throw l2;
    }
  };
} }]);
