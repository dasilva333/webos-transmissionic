"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[601], { 3601: function(r, t, e) {
  e.r(t), e.d(t, { scopeCss: function() {
    return N;
  } });
  var n = function() {
    for (var r2 = 0, t2 = 0, e2 = arguments.length; t2 < e2; t2++) r2 += arguments[t2].length;
    var n2 = Array(r2), s2 = 0;
    for (t2 = 0; t2 < e2; t2++) for (var c2 = arguments[t2], o2 = 0, i2 = c2.length; o2 < i2; o2++, s2++) n2[s2] = c2[o2];
    return n2;
  }, s = function(r2) {
    var t2, e2 = [], n2 = 0;
    r2 = r2.replace(/(\[[^\]]*\])/g, (function(r3, t3) {
      var s3 = "__ph-" + n2 + "__";
      return e2.push(t3), n2++, s3;
    })), t2 = r2.replace(/(:nth-[-\w]+)(\([^)]+\))/g, (function(r3, t3, s3) {
      var c2 = "__ph-" + n2 + "__";
      return e2.push(s3), n2++, t3 + c2;
    }));
    var s2 = { content: t2, placeholders: e2 };
    return s2;
  }, c = function(r2, t2) {
    return t2.replace(/__ph-(\d+)__/g, (function(t3, e2) {
      return r2[+e2];
    }));
  }, o = "-shadowcsshost", i = "-shadowcssslotted", a = "-shadowcsscontext", u = ")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)", l = new RegExp("(" + o + u, "gim"), f = new RegExp("(" + a + u, "gim"), p = new RegExp("(" + i + u, "gim"), h = o + "-no-combinator", g = /-shadowcsshost-no-combinator([^\s]*)/, v = [/::shadow/g, /::content/g], m = "([>\\s~+[.,{:][\\s\\S]*)?$", d = /-shadowcsshost/gim, x = /:host/gim, _ = /::slotted/gim, w = /:host-context/gim, b = /\/\*\s*[\s\S]*?\*\//g, S = function(r2) {
    return r2.replace(b, "");
  }, W = /\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g, k = function(r2) {
    return r2.match(W) || [];
  }, O = /(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g, j = /([{}])/g, E = "{", R = "}", C = "%BLOCK%", T = function(r2, t2) {
    var e2 = L(r2), n2 = 0;
    return e2.escapedString.replace(O, (function() {
      for (var r3 = [], s2 = 0; s2 < arguments.length; s2++) r3[s2] = arguments[s2];
      var c2 = r3[2], o2 = "", i2 = r3[4], a2 = "";
      i2 && i2.startsWith("{" + C) && (o2 = e2.blocks[n2++], i2 = i2.substring(C.length + 1), a2 = "{");
      var u2 = { selector: c2, content: o2 }, l2 = t2(u2);
      return "" + r3[1] + l2.selector + r3[3] + a2 + l2.content + i2;
    }));
  }, L = function(r2) {
    for (var t2 = r2.split(j), e2 = [], n2 = [], s2 = 0, c2 = [], o2 = 0; o2 < t2.length; o2++) {
      var i2 = t2[o2];
      i2 === R && s2--, s2 > 0 ? c2.push(i2) : (c2.length > 0 && (n2.push(c2.join("")), e2.push(C), c2 = []), e2.push(i2)), i2 === E && s2++;
    }
    c2.length > 0 && (n2.push(c2.join("")), e2.push(C));
    var a2 = { escapedString: e2.join(""), blocks: n2 };
    return a2;
  }, B = function(r2) {
    return r2 = r2.replace(w, a).replace(x, o).replace(_, i), r2;
  }, I = function(r2, t2, e2) {
    return r2.replace(t2, (function() {
      for (var r3 = [], t3 = 0; t3 < arguments.length; t3++) r3[t3] = arguments[t3];
      if (r3[2]) {
        for (var n2 = r3[2].split(","), s2 = [], c2 = 0; c2 < n2.length; c2++) {
          var o2 = n2[c2].trim();
          if (!o2) break;
          s2.push(e2(h, o2, r3[3]));
        }
        return s2.join(",");
      }
      return h + r3[3];
    }));
  }, K = function(r2, t2, e2) {
    return r2 + t2.replace(o, "") + e2;
  }, $ = function(r2) {
    return I(r2, l, K);
  }, y = function(r2, t2, e2) {
    return t2.indexOf(o) > -1 ? K(r2, t2, e2) : r2 + t2 + e2 + ", " + t2 + " " + r2 + e2;
  }, A = function(r2, t2) {
    var e2 = "." + t2 + " > ", n2 = [];
    return r2 = r2.replace(p, (function() {
      for (var r3 = [], t3 = 0; t3 < arguments.length; t3++) r3[t3] = arguments[t3];
      if (r3[2]) {
        for (var s2 = r3[2].trim(), c2 = r3[3], o2 = e2 + s2 + c2, i2 = "", a2 = r3[4] - 1; a2 >= 0; a2--) {
          var u2 = r3[5][a2];
          if ("}" === u2 || "," === u2) break;
          i2 = u2 + i2;
        }
        var l2 = i2 + o2, f2 = "" + i2.trimRight() + o2.trim();
        if (l2.trim() !== f2.trim()) {
          var p2 = f2 + ", " + l2;
          n2.push({ orgSelector: l2, updatedSelector: p2 });
        }
        return o2;
      }
      return h + r3[3];
    })), { selectors: n2, cssText: r2 };
  }, M = function(r2) {
    return I(r2, f, y);
  }, U = function(r2) {
    return v.reduce((function(r3, t2) {
      return r3.replace(t2, " ");
    }), r2);
  }, q = function(r2) {
    var t2 = /\[/g, e2 = /\]/g;
    return r2 = r2.replace(t2, "\\[").replace(e2, "\\]"), new RegExp("^(" + r2 + ")" + m, "m");
  }, z = function(r2, t2) {
    var e2 = q(t2);
    return !e2.test(r2);
  }, D = function(r2, t2, e2) {
    if (d.lastIndex = 0, d.test(r2)) {
      var n2 = "." + e2;
      return r2.replace(g, (function(r3, t3) {
        return t3.replace(/([^:]*)(:*)(.*)/, (function(r4, t4, e3, s2) {
          return t4 + n2 + e3 + s2;
        }));
      })).replace(d, n2 + " ");
    }
    return t2 + " " + r2;
  }, F = function(r2, t2, e2) {
    var n2 = /\[is=([^\]]*)\]/g;
    t2 = t2.replace(n2, (function(r3) {
      for (var t3 = [], e3 = 1; e3 < arguments.length; e3++) t3[e3 - 1] = arguments[e3];
      return t3[0];
    }));
    var o2 = "." + t2, i2 = function(r3) {
      var n3 = r3.trim();
      if (!n3) return "";
      if (r3.indexOf(h) > -1) n3 = D(r3, t2, e2);
      else {
        var s2 = r3.replace(d, "");
        if (s2.length > 0) {
          var c2 = s2.match(/([^:]*)(:*)(.*)/);
          c2 && (n3 = c2[1] + o2 + c2[2] + c2[3]);
        }
      }
      return n3;
    }, a2 = s(r2);
    r2 = a2.content;
    var u2, l2 = "", f2 = 0, p2 = /( |>|\+|~(?!=))\s*/g, g2 = r2.indexOf(h) > -1, v2 = !g2;
    while (null !== (u2 = p2.exec(r2))) {
      var m2 = u2[1], x2 = r2.slice(f2, u2.index).trim();
      v2 = v2 || x2.indexOf(h) > -1;
      var _2 = v2 ? i2(x2) : x2;
      l2 += _2 + " " + m2 + " ", f2 = p2.lastIndex;
    }
    var w2 = r2.substring(f2);
    return v2 = v2 || w2.indexOf(h) > -1, l2 += v2 ? i2(w2) : w2, c(a2.placeholders, l2);
  }, G = function(r2, t2, e2, n2) {
    return r2.split(",").map((function(r3) {
      return n2 && r3.indexOf("." + n2) > -1 ? r3.trim() : z(r3, t2) ? F(r3, t2, e2).trim() : r3.trim();
    })).join(", ");
  }, H = function(r2, t2, e2, n2, s2) {
    return T(r2, (function(r3) {
      var s3 = r3.selector, c2 = r3.content;
      "@" !== r3.selector[0] ? s3 = G(r3.selector, t2, e2, n2) : (r3.selector.startsWith("@media") || r3.selector.startsWith("@supports") || r3.selector.startsWith("@page") || r3.selector.startsWith("@document")) && (c2 = H(r3.content, t2, e2, n2));
      var o2 = { selector: s3.replace(/\s{2,}/g, " ").trim(), content: c2 };
      return o2;
    }));
  }, J = function(r2, t2, e2, n2, s2) {
    r2 = B(r2), r2 = $(r2), r2 = M(r2);
    var c2 = A(r2, n2);
    return r2 = c2.cssText, r2 = U(r2), t2 && (r2 = H(r2, t2, e2, n2)), r2 = r2.replace(/-shadowcsshost-no-combinator/g, "." + e2), r2 = r2.replace(/>\s*\*\s+([^{, ]+)/gm, " $1 "), { cssText: r2.trim(), slottedSelectors: c2.selectors };
  }, N = function(r2, t2, e2) {
    var s2 = t2 + "-h", c2 = t2 + "-s", o2 = k(r2);
    r2 = S(r2);
    var i2 = [];
    if (e2) {
      var a2 = function(r3) {
        var t3 = "/*!@___" + i2.length + "___*/", e3 = "/*!@" + r3.selector + "*/";
        return i2.push({ placeholder: t3, comment: e3 }), r3.selector = t3 + r3.selector, r3;
      };
      r2 = T(r2, (function(r3) {
        return "@" !== r3.selector[0] ? a2(r3) : r3.selector.startsWith("@media") || r3.selector.startsWith("@supports") || r3.selector.startsWith("@page") || r3.selector.startsWith("@document") ? (r3.content = T(r3.content, a2), r3) : r3;
      }));
    }
    var u2 = J(r2, t2, s2, c2);
    return r2 = n([u2.cssText], o2).join("\n"), e2 && i2.forEach((function(t3) {
      var e3 = t3.placeholder, n2 = t3.comment;
      r2 = r2.replace(e3, n2);
    })), u2.slottedSelectors.forEach((function(t3) {
      r2 = r2.replace(t3.orgSelector, t3.updatedSelector);
    })), r2;
  };
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
} }]);
