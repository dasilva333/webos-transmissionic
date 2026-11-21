"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[775], { 8775: function(e, t, n) {
  n.r(t), n.d(t, { startInputShims: function() {
    return D;
  } });
  var o = n(4074), r = n(6587);
  /*!
   * (C) Ionic http://ionicframework.com - MIT License
   */
  const i = /* @__PURE__ */ new WeakMap(), s = (e2, t2, n2, o2 = 0, r2 = false) => {
    i.has(e2) !== n2 && (n2 ? l(e2, t2, o2, r2) : d(e2, t2));
  }, a = (e2) => e2 === e2.getRootNode().activeElement, l = (e2, t2, n2, o2 = false) => {
    const r2 = t2.parentNode, s2 = t2.cloneNode(false);
    s2.classList.add("cloned-input"), s2.tabIndex = -1, o2 && (s2.disabled = true), r2.appendChild(s2), i.set(e2, s2);
    const a2 = e2.ownerDocument, l2 = "rtl" === a2.dir ? 9999 : -9999;
    e2.style.pointerEvents = "none", t2.style.transform = `translate3d(${l2}px,${n2}px,0) scale(0)`;
  }, d = (e2, t2) => {
    const n2 = i.get(e2);
    n2 && (i.delete(e2), n2.remove()), e2.style.pointerEvents = "", t2.style.transform = "";
  }, c = (e2, t2, n2) => {
    if (!n2 || !t2) return () => {
    };
    const o2 = (n3) => {
      a(t2) && s(e2, t2, n3);
    }, i2 = () => s(e2, t2, false), l2 = () => o2(true), d2 = () => o2(false);
    return (0, r.a)(n2, "ionScrollStart", l2), (0, r.a)(n2, "ionScrollEnd", d2), t2.addEventListener("blur", i2), () => {
      (0, r.b)(n2, "ionScrollStart", l2), (0, r.b)(n2, "ionScrollEnd", d2), t2.removeEventListener("blur", i2);
    };
  }, u = "input, textarea, [no-blur], [contenteditable]", m = () => {
    let e2 = true, t2 = false;
    const n2 = document, o2 = () => {
      t2 = true;
    }, i2 = () => {
      e2 = true;
    }, s2 = (o3) => {
      if (t2) return void (t2 = false);
      const r2 = n2.activeElement;
      if (!r2) return;
      if (r2.matches(u)) return;
      const i3 = o3.target;
      i3 !== r2 && (i3.matches(u) || i3.closest(u) || (e2 = false, setTimeout((() => {
        e2 || r2.blur();
      }), 50)));
    };
    return (0, r.a)(n2, "ionScrollStart", o2), n2.addEventListener("focusin", i2, true), n2.addEventListener("touchend", s2, false), () => {
      (0, r.b)(n2, "ionScrollStart", o2, true), n2.removeEventListener("focusin", i2, true), n2.removeEventListener("touchend", s2, false);
    };
  }, f = 0.3, v = (e2, t2, n2) => {
    var o2;
    const r2 = null !== (o2 = e2.closest("ion-item,[ion-item]")) && void 0 !== o2 ? o2 : e2;
    return p(r2.getBoundingClientRect(), t2.getBoundingClientRect(), n2, e2.ownerDocument.defaultView.innerHeight);
  }, p = (e2, t2, n2, o2) => {
    const r2 = e2.top, i2 = e2.bottom, s2 = t2.top, a2 = Math.min(t2.bottom, o2 - n2), l2 = s2 + 15, d2 = 0.75 * a2, c2 = d2 - i2, u2 = l2 - r2, m2 = Math.round(c2 < 0 ? -c2 : u2 > 0 ? -u2 : 0), v2 = Math.min(m2, r2 - s2), p2 = Math.abs(v2), h2 = p2 / f, w2 = Math.min(400, Math.max(150, h2));
    return { scrollAmount: v2, scrollDuration: w2, scrollPadding: n2, inputSafeY: 4 - (r2 - l2) };
  }, h = (e2, t2, n2, o2, i2, s2 = false) => {
    let l2;
    const d2 = (e3) => {
      l2 = (0, r.p)(e3);
    }, c2 = (d3) => {
      if (!l2) return;
      const c3 = (0, r.p)(d3);
      E(6, l2, c3) || a(t2) || w(e2, t2, n2, o2, i2, s2);
    };
    return e2.addEventListener("touchstart", d2, { capture: true, passive: true }), e2.addEventListener("touchend", c2, true), () => {
      e2.removeEventListener("touchstart", d2, true), e2.removeEventListener("touchend", c2, true);
    };
  }, w = async (e2, t2, n2, i2, a2, l2 = false) => {
    if (!n2 && !i2) return;
    const d2 = v(e2, n2 || i2, a2);
    if (n2 && Math.abs(d2.scrollAmount) < 4) t2.focus();
    else if (s(e2, t2, true, d2.inputSafeY, l2), t2.focus(), (0, r.r)((() => e2.click())), "undefined" !== typeof window) {
      let r2;
      const i3 = async () => {
        void 0 !== r2 && clearTimeout(r2), window.removeEventListener("ionKeyboardDidShow", a3), window.removeEventListener("ionKeyboardDidShow", i3), n2 && await (0, o.c)(n2, 0, d2.scrollAmount, d2.scrollDuration), s(e2, t2, false, d2.inputSafeY), t2.focus();
      }, a3 = () => {
        window.removeEventListener("ionKeyboardDidShow", a3), window.addEventListener("ionKeyboardDidShow", i3);
      };
      if (n2) {
        const e3 = await (0, o.g)(n2), s2 = e3.scrollHeight - e3.clientHeight;
        if (d2.scrollAmount > s2 - e3.scrollTop) return "password" === t2.type ? (d2.scrollAmount += 50, window.addEventListener("ionKeyboardDidShow", a3)) : window.addEventListener("ionKeyboardDidShow", i3), void (r2 = setTimeout(i3, 1e3));
      }
      i3();
    }
  }, E = (e2, t2, n2) => {
    if (t2 && n2) {
      const o2 = t2.x - n2.x, r2 = t2.y - n2.y, i2 = o2 * o2 + r2 * r2;
      return i2 > e2 * e2;
    }
    return false;
  }, y = "$ionPaddingTimer", g = (e2) => {
    const t2 = document, n2 = (t3) => {
      b(t3.target, e2);
    }, o2 = (e3) => {
      b(e3.target, 0);
    };
    return t2.addEventListener("focusin", n2), t2.addEventListener("focusout", o2), () => {
      t2.removeEventListener("focusin", n2), t2.removeEventListener("focusout", o2);
    };
  }, b = (e2, t2) => {
    var n2, r2;
    if ("INPUT" !== e2.tagName) return;
    if (e2.parentElement && "ION-INPUT" === e2.parentElement.tagName) return;
    if ("ION-SEARCHBAR" === (null === (r2 = null === (n2 = e2.parentElement) || void 0 === n2 ? void 0 : n2.parentElement) || void 0 === r2 ? void 0 : r2.tagName)) return;
    const i2 = (0, o.a)(e2);
    if (null === i2) return;
    const s2 = i2[y];
    s2 && clearTimeout(s2), t2 > 0 ? i2.style.setProperty("--keyboard-offset", `${t2}px`) : i2[y] = setTimeout((() => {
      i2.style.setProperty("--keyboard-offset", "0px");
    }), 120);
  }, S = true, L = true, D = (e2, t2) => {
    const n2 = document, i2 = "ios" === t2, s2 = "android" === t2, a2 = e2.getNumber("keyboardHeight", 290), l2 = e2.getBoolean("scrollAssist", true), d2 = e2.getBoolean("hideCaretOnScroll", i2), u2 = e2.getBoolean("inputBlurring", i2), f2 = e2.getBoolean("scrollPadding", true), v2 = Array.from(n2.querySelectorAll("ion-input, ion-textarea")), p2 = /* @__PURE__ */ new WeakMap(), w2 = /* @__PURE__ */ new WeakMap(), E2 = async (e3) => {
      await new Promise(((t4) => (0, r.c)(e3, t4)));
      const t3 = e3.shadowRoot || e3, n3 = t3.querySelector("input") || t3.querySelector("textarea"), i3 = (0, o.a)(e3), u3 = i3 ? null : e3.closest("ion-footer");
      if (!n3) return;
      if (i3 && d2 && !p2.has(e3)) {
        const t4 = c(e3, n3, i3);
        p2.set(e3, t4);
      }
      const m2 = "date" === n3.type || "datetime-local" === n3.type;
      if (!m2 && (i3 || u3) && l2 && !w2.has(e3)) {
        const t4 = h(e3, n3, i3, u3, a2, s2);
        w2.set(e3, t4);
      }
    }, y2 = (e3) => {
      if (d2) {
        const t3 = p2.get(e3);
        t3 && t3(), p2.delete(e3);
      }
      if (l2) {
        const t3 = w2.get(e3);
        t3 && t3(), w2.delete(e3);
      }
    };
    u2 && S && m(), f2 && L && g(a2);
    for (const o2 of v2) E2(o2);
    n2.addEventListener("ionInputDidLoad", ((e3) => {
      E2(e3.detail);
    })), n2.addEventListener("ionInputDidUnload", ((e3) => {
      y2(e3.detail);
    }));
  };
} }]);
