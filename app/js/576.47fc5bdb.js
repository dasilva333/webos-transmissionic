"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[576], { 576: function(e, t, s) {
  s.r(t), s.d(t, { scopeCss: function() {
    return P;
  } });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *
   * This file is a port of shadowCSS from webcomponents.js to TypeScript.
   * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
   * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
   */
  const r = (e2) => {
    const t2 = [];
    let s2 = 0;
    e2 = e2.replace(/(\[[^\]]*\])/g, ((e3, r3) => {
      const c3 = `__ph-${s2}__`;
      return t2.push(r3), s2++, c3;
    }));
    const r2 = e2.replace(/(:nth-[-\w]+)(\([^)]+\))/g, ((e3, r3, c3) => {
      const n2 = `__ph-${s2}__`;
      return t2.push(c3), s2++, r3 + n2;
    })), c2 = { content: r2, placeholders: t2 };
    return c2;
  }, c = (e2, t2) => t2.replace(/__ph-(\d+)__/g, ((t3, s2) => e2[+s2])), n = "-shadowcsshost", o = "-shadowcssslotted", l = "-shadowcsscontext", i = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)", a = new RegExp("(" + n + i, "gim"), p = new RegExp("(" + l + i, "gim"), h = new RegExp("(" + o + i, "gim"), u = n + "-no-combinator", g = /-shadowcsshost-no-combinator([^\s]*)/, d = [/::shadow/g, /::content/g], m = "([>\\s~+[.,{:][\\s\\S]*)?$", f = /-shadowcsshost/gim, $ = /:host/gim, x = /::slotted/gim, _ = /:host-context/gim, w = /\/\*\s*[\s\S]*?\*\//g, b = (e2) => e2.replace(w, ""), S = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g, W = (e2) => e2.match(S) || [], k = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g, O = /([{}])/g, j = /(^.*?[^\\])??((:+)(.*)|$)/, E = "{", R = "}", C = "%BLOCK%", T = (e2, t2) => {
    const s2 = L(e2);
    let r2 = 0;
    return s2.escapedString.replace(k, ((...e3) => {
      const c2 = e3[2];
      let n2 = "", o2 = e3[4], l2 = "";
      o2 && o2.startsWith("{" + C) && (n2 = s2.blocks[r2++], o2 = o2.substring(C.length + 1), l2 = "{");
      const i2 = { selector: c2, content: n2 }, a2 = t2(i2);
      return `${e3[1]}${a2.selector}${e3[3]}${l2}${a2.content}${o2}`;
    }));
  }, L = (e2) => {
    const t2 = e2.split(O), s2 = [], r2 = [];
    let c2 = 0, n2 = [];
    for (let l2 = 0; l2 < t2.length; l2++) {
      const e3 = t2[l2];
      e3 === R && c2--, c2 > 0 ? n2.push(e3) : (n2.length > 0 && (r2.push(n2.join("")), s2.push(C), n2 = []), s2.push(e3)), e3 === E && c2++;
    }
    n2.length > 0 && (r2.push(n2.join("")), s2.push(C));
    const o2 = { escapedString: s2.join(""), blocks: r2 };
    return o2;
  }, B = (e2) => (e2 = e2.replace(_, l).replace($, n).replace(x, o), e2), I = (e2, t2, s2) => e2.replace(t2, ((...e3) => {
    if (e3[2]) {
      const t3 = e3[2].split(","), r2 = [];
      for (let c2 = 0; c2 < t3.length; c2++) {
        const n2 = t3[c2].trim();
        if (!n2) break;
        r2.push(s2(u, n2, e3[3]));
      }
      return r2.join(",");
    }
    return u + e3[3];
  })), K = (e2, t2, s2) => e2 + t2.replace(n, "") + s2, M = (e2) => I(e2, a, K), U = (e2, t2, s2) => t2.indexOf(n) > -1 ? K(e2, t2, s2) : e2 + t2 + s2 + ", " + t2 + " " + e2 + s2, q = (e2, t2) => {
    const s2 = "." + t2 + " > ", r2 = [];
    return e2 = e2.replace(h, ((...e3) => {
      if (e3[2]) {
        const t3 = e3[2].trim(), c2 = e3[3], n2 = s2 + t3 + c2;
        let o2 = "";
        for (let s3 = e3[4] - 1; s3 >= 0; s3--) {
          const t4 = e3[5][s3];
          if ("}" === t4 || "," === t4) break;
          o2 = t4 + o2;
        }
        const l2 = o2 + n2, i2 = `${o2.trimRight()}${n2.trim()}`;
        if (l2.trim() !== i2.trim()) {
          const e4 = `${i2}, ${l2}`;
          r2.push({ orgSelector: l2, updatedSelector: e4 });
        }
        return n2;
      }
      return u + e3[3];
    })), { selectors: r2, cssText: e2 };
  }, v = (e2) => I(e2, p, U), y = (e2) => d.reduce(((e3, t2) => e3.replace(t2, " ")), e2), z = (e2) => {
    const t2 = /\[/g, s2 = /\]/g;
    return e2 = e2.replace(t2, "\\[").replace(s2, "\\]"), new RegExp("^(" + e2 + ")" + m, "m");
  }, A = (e2, t2) => {
    const s2 = z(t2);
    return !s2.test(e2);
  }, D = (e2, t2) => e2.replace(j, ((e3, s2 = "", r2, c2 = "", n2 = "") => s2 + t2 + c2 + n2)), F = (e2, t2, s2) => {
    if (f.lastIndex = 0, f.test(e2)) {
      const t3 = `.${s2}`;
      return e2.replace(g, ((e3, s3) => D(s3, t3))).replace(f, t3 + " ");
    }
    return t2 + " " + e2;
  }, G = (e2, t2, s2) => {
    const n2 = /\[is=([^\]]*)\]/g;
    t2 = t2.replace(n2, ((e3, ...t3) => t3[0]));
    const o2 = "." + t2, l2 = (e3) => {
      let r2 = e3.trim();
      if (!r2) return "";
      if (e3.indexOf(u) > -1) r2 = F(e3, t2, s2);
      else {
        const t3 = e3.replace(f, "");
        t3.length > 0 && (r2 = D(t3, o2));
      }
      return r2;
    }, i2 = r(e2);
    e2 = i2.content;
    let a2, p2 = "", h2 = 0;
    const g2 = /( |>|\+|~(?!=))\s*/g, d2 = e2.indexOf(u) > -1;
    let m2 = !d2;
    while (null !== (a2 = g2.exec(e2))) {
      const t3 = a2[1], s3 = e2.slice(h2, a2.index).trim();
      m2 = m2 || s3.indexOf(u) > -1;
      const r2 = m2 ? l2(s3) : s3;
      p2 += `${r2} ${t3} `, h2 = g2.lastIndex;
    }
    const $2 = e2.substring(h2);
    return m2 = m2 || $2.indexOf(u) > -1, p2 += m2 ? l2($2) : $2, c(i2.placeholders, p2);
  }, H = (e2, t2, s2, r2) => e2.split(",").map(((e3) => r2 && e3.indexOf("." + r2) > -1 ? e3.trim() : A(e3, t2) ? G(e3, t2, s2).trim() : e3.trim())).join(", "), J = (e2, t2, s2, r2, c2) => T(e2, ((e3) => {
    let c3 = e3.selector, n2 = e3.content;
    "@" !== e3.selector[0] ? c3 = H(e3.selector, t2, s2, r2) : (e3.selector.startsWith("@media") || e3.selector.startsWith("@supports") || e3.selector.startsWith("@page") || e3.selector.startsWith("@document")) && (n2 = J(e3.content, t2, s2, r2));
    const o2 = { selector: c3.replace(/\s{2,}/g, " ").trim(), content: n2 };
    return o2;
  })), N = (e2, t2, s2, r2, c2) => {
    e2 = B(e2), e2 = M(e2), e2 = v(e2);
    const n2 = q(e2, r2);
    return e2 = n2.cssText, e2 = y(e2), t2 && (e2 = J(e2, t2, s2, r2)), e2 = e2.replace(/-shadowcsshost-no-combinator/g, `.${s2}`), e2 = e2.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 "), { cssText: e2.trim(), slottedSelectors: n2.selectors };
  }, P = (e2, t2, s2) => {
    const r2 = t2 + "-h", c2 = t2 + "-s", n2 = W(e2);
    e2 = b(e2);
    const o2 = [];
    if (s2) {
      const t3 = (e3) => {
        const t4 = `/*!@___${o2.length}___*/`, s3 = `/*!@${e3.selector}*/`;
        return o2.push({ placeholder: t4, comment: s3 }), e3.selector = t4 + e3.selector, e3;
      };
      e2 = T(e2, ((e3) => "@" !== e3.selector[0] ? t3(e3) : e3.selector.startsWith("@media") || e3.selector.startsWith("@supports") || e3.selector.startsWith("@page") || e3.selector.startsWith("@document") ? (e3.content = T(e3.content, t3), e3) : e3));
    }
    const l2 = N(e2, t2, r2, c2);
    return e2 = [l2.cssText, ...n2].join("\n"), s2 && o2.forEach((({ placeholder: t3, comment: s3 }) => {
      e2 = e2.replace(t3, s3);
    })), l2.slottedSelectors.forEach(((t3) => {
      e2 = e2.replace(t3.orgSelector, t3.updatedSelector);
    })), e2;
  };
} }]);
