(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[952], { 8533: function(t, e, r) {
  var n = r(5108), s = /* @__PURE__ */ (function() {
    function t2() {
      this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = "", this.cssText = "", this.atRule = false, this.type = 0, this.keyframesName = "", this.selector = "", this.parsedSelector = "";
    }
    return t2;
  })();
  function i(t2) {
    return t2 = o(t2), u(a(t2), t2);
  }
  function o(t2) {
    return t2.replace(h.comments, "").replace(h.port, "");
  }
  function a(t2) {
    var e2 = new s();
    e2["start"] = 0, e2["end"] = t2.length;
    for (var r2 = e2, n2 = 0, i2 = t2.length; n2 < i2; n2++) if (t2[n2] === p) {
      r2["rules"] || (r2["rules"] = []);
      var o2 = r2, a2 = o2["rules"][o2["rules"].length - 1] || null;
      r2 = new s(), r2["start"] = n2 + 1, r2["parent"] = o2, r2["previous"] = a2, o2["rules"].push(r2);
    } else t2[n2] === f && (r2["end"] = n2 + 1, r2 = r2["parent"] || e2);
    return e2;
  }
  function u(t2, e2) {
    var r2 = e2.substring(t2["start"], t2["end"] - 1);
    if (t2["parsedCssText"] = t2["cssText"] = r2.trim(), t2.parent) {
      var n2 = t2.previous ? t2.previous["end"] : t2.parent["start"];
      r2 = e2.substring(n2, t2["start"] - 1), r2 = c(r2), r2 = r2.replace(h.multipleSpaces, " "), r2 = r2.substring(r2.lastIndexOf(";") + 1);
      var s2 = t2["parsedSelector"] = t2["selector"] = r2.trim();
      t2["atRule"] = 0 === s2.indexOf(d), t2["atRule"] ? 0 === s2.indexOf(m) ? t2["type"] = l.MEDIA_RULE : s2.match(h.keyframesRule) && (t2["type"] = l.KEYFRAMES_RULE, t2["keyframesName"] = t2["selector"].split(h.multipleSpaces).pop()) : 0 === s2.indexOf(v) ? t2["type"] = l.MIXIN_RULE : t2["type"] = l.STYLE_RULE;
    }
    var i2 = t2["rules"];
    if (i2) for (var o2 = 0, a2 = i2.length, p2 = void 0; o2 < a2 && (p2 = i2[o2]); o2++) u(p2, e2);
    return t2;
  }
  function c(t2) {
    return t2.replace(/\\([0-9a-f]{1,6})\s/gi, (function() {
      var t3 = arguments[1], e2 = 6 - t3.length;
      while (e2--) t3 = "0" + t3;
      return "\\" + t3;
    }));
  }
  var l = { STYLE_RULE: 1, KEYFRAMES_RULE: 7, MEDIA_RULE: 4, MIXIN_RULE: 1e3 }, p = "{", f = "}", h = { comments: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, keyframesRule: /^@[^\s]*keyframes/, multipleSpaces: /\s+/g }, v = "--", m = "@media", d = "@";
  function g(t2, e2, r2) {
    t2["lastIndex"] = 0;
    var n2 = e2.substring(r2).match(t2);
    if (n2) {
      var s2 = r2 + n2["index"];
      return { start: s2, end: s2 + n2[0].length };
    }
    return null;
  }
  var y = /\bvar\(/, S = /\B--[\w-]+\s*:/, b = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, E = /^[\t ]+\n/gm;
  function w(t2, e2, r2) {
    return t2[e2] ? t2[e2] : r2 ? C(r2, t2) : "";
  }
  function x(t2, e2) {
    for (var r2 = 0, n2 = e2; n2 < t2.length; n2++) {
      var s2 = t2[n2];
      if ("(" === s2) r2++;
      else if (")" === s2 && (r2--, r2 <= 0)) return n2 + 1;
    }
    return n2;
  }
  function M(t2, e2) {
    var r2 = g(y, t2, e2);
    if (!r2) return null;
    var n2 = x(t2, r2.start), s2 = t2.substring(r2.end, n2 - 1), i2 = s2.split(","), o2 = i2[0], a2 = i2.slice(1);
    return { start: r2.start, end: n2, propName: o2.trim(), fallback: a2.length > 0 ? a2.join(",").trim() : void 0 };
  }
  function k(t2, e2, r2) {
    var n2 = M(t2, r2);
    if (!n2) return e2.push(t2.substring(r2, t2.length)), t2.length;
    var s2 = n2.propName, i2 = null != n2.fallback ? A(n2.fallback) : void 0;
    return e2.push(t2.substring(r2, n2.start), (function(t3) {
      return w(t3, s2, i2);
    })), n2.end;
  }
  function C(t2, e2) {
    for (var r2 = "", n2 = 0; n2 < t2.length; n2++) {
      var s2 = t2[n2];
      r2 += "string" === typeof s2 ? s2 : s2(e2);
    }
    return r2;
  }
  function I(t2, e2) {
    for (var r2 = false, n2 = false, s2 = e2; s2 < t2.length; s2++) {
      var i2 = t2[s2];
      if (r2) n2 && '"' === i2 && (r2 = false), n2 || "'" !== i2 || (r2 = false);
      else if ('"' === i2) r2 = true, n2 = true;
      else if ("'" === i2) r2 = true, n2 = false;
      else {
        if (";" === i2) return s2 + 1;
        if ("}" === i2) return s2;
      }
    }
    return s2;
  }
  function R(t2) {
    var e2 = "", r2 = 0;
    while (1) {
      var n2 = g(S, t2, r2), s2 = n2 ? n2.start : t2.length;
      if (e2 += t2.substring(r2, s2), !n2) break;
      r2 = I(t2, s2);
    }
    return e2;
  }
  function A(t2) {
    var e2 = 0;
    t2 = t2.replace(b, ""), t2 = R(t2).replace(E, "");
    var r2 = [];
    while (e2 < t2.length) e2 = k(t2, r2, e2);
    return r2;
  }
  function L(t2) {
    var e2 = {};
    t2.forEach((function(t3) {
      t3.declarations.forEach((function(t4) {
        e2[t4.prop] = t4.value;
      }));
    }));
    for (var r2 = {}, n2 = Object.entries(e2), s2 = function(t3) {
      var e3 = false;
      if (n2.forEach((function(t4) {
        var n3 = t4[0], s3 = t4[1], i3 = C(s3, r2);
        i3 !== r2[n3] && (r2[n3] = i3, e3 = true);
      })), !e3) return "break";
    }, i2 = 0; i2 < 10; i2++) {
      var o2 = s2();
      if ("break" === o2) break;
    }
    return r2;
  }
  function _(t2, e2) {
    if (void 0 === e2 && (e2 = 0), !t2.rules) return [];
    var r2 = [];
    return t2.rules.filter((function(t3) {
      return t3.type === l.STYLE_RULE;
    })).forEach((function(t3) {
      var n2 = N(t3.cssText);
      n2.length > 0 && t3.parsedSelector.split(",").forEach((function(t4) {
        t4 = t4.trim(), r2.push({ selector: t4, declarations: n2, specificity: O(), nu: e2 });
      })), e2++;
    })), r2;
  }
  function O(t2) {
    return 1;
  }
  var T = "!important", U = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;
  function N(t2) {
    var e2, r2 = [];
    while (e2 = U.exec(t2.trim())) {
      var n2 = j(e2[2]), s2 = n2.value, i2 = n2.important;
      r2.push({ prop: e2[1].trim(), value: A(s2), important: i2 });
    }
    return r2;
  }
  function j(t2) {
    var e2 = /\s+/gim;
    t2 = t2.replace(e2, " ").trim();
    var r2 = t2.endsWith(T);
    return r2 && (t2 = t2.substr(0, t2.length - T.length).trim()), { value: t2, important: r2 };
  }
  function $(t2, e2, r2) {
    var n2 = [], s2 = G(e2, t2);
    r2.forEach((function(t3) {
      return n2.push(t3);
    })), s2.forEach((function(t3) {
      return n2.push(t3);
    }));
    var i2 = H(n2), o2 = i2.filter((function(e3) {
      return V(t2, e3.selector);
    }));
    return P(o2);
  }
  function G(t2, e2) {
    var r2 = [];
    while (e2) {
      var n2 = t2.get(e2);
      n2 && r2.push(n2), e2 = e2.parentElement;
    }
    return r2;
  }
  function H(t2) {
    var e2 = [];
    return t2.forEach((function(t3) {
      e2.push.apply(e2, t3.selectors);
    })), e2;
  }
  function P(t2) {
    return t2.sort((function(t3, e2) {
      return t3.specificity === e2.specificity ? t3.nu - e2.nu : t3.specificity - e2.specificity;
    })), t2;
  }
  function V(t2, e2) {
    return ":root" === e2 || "html" === e2 || t2.matches(e2);
  }
  function Y(t2) {
    var e2 = i(t2), r2 = A(t2), n2 = _(e2);
    return { original: t2, template: r2, selectors: n2, usesCssVars: r2.length > 1 };
  }
  function q(t2, e2) {
    if (t2.some((function(t3) {
      return t3.styleEl === e2;
    }))) return false;
    var r2 = Y(e2.textContent);
    return r2.styleEl = e2, t2.push(r2), true;
  }
  function F(t2) {
    var e2 = H(t2), r2 = L(e2);
    t2.forEach((function(t3) {
      t3.usesCssVars && (t3.styleEl.textContent = C(t3.template, r2));
    }));
  }
  function B(t2, e2) {
    var r2 = t2.template.map((function(r3) {
      return "string" === typeof r3 ? W(r3, t2.scopeId, e2) : r3;
    })), n2 = t2.selectors.map((function(r3) {
      return Object.assign(Object.assign({}, r3), { selector: W(r3.selector, t2.scopeId, e2) });
    }));
    return Object.assign(Object.assign({}, t2), { template: r2, selectors: n2, scopeId: e2 });
  }
  function W(t2, e2, r2) {
    return t2 = D(t2, "\\." + e2, "." + r2), t2;
  }
  function D(t2, e2, r2) {
    return t2.replace(new RegExp(e2, "g"), r2);
  }
  function K(t2, e2) {
    return Z(t2, e2), z(t2, e2).then((function() {
      F(e2);
    }));
  }
  function X(t2, e2) {
    var r2 = new MutationObserver((function() {
      Z(t2, e2) && F(e2);
    }));
    r2.observe(document.head, { childList: true });
  }
  function z(t2, e2) {
    for (var r2 = [], n2 = t2.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'), s2 = 0; s2 < n2.length; s2++) r2.push(J(t2, e2, n2[s2]));
    return Promise.all(r2);
  }
  function Z(t2, e2) {
    var r2 = Array.from(t2.querySelectorAll("style:not([data-styles]):not([data-no-shim])"));
    return r2.map((function(t3) {
      return q(e2, t3);
    })).some(Boolean);
  }
  function J(t2, e2, r2) {
    var s2 = r2.href;
    return fetch(s2).then((function(t3) {
      return t3.text();
    })).then((function(n2) {
      if (tt(n2) && r2.parentNode) {
        rt(n2) && (n2 = nt(n2, s2));
        var i2 = t2.createElement("style");
        i2.setAttribute("data-styles", ""), i2.textContent = n2, q(e2, i2), r2.parentNode.insertBefore(i2, r2), r2.remove();
      }
    })).catch((function(t3) {
      n.error(t3);
    }));
  }
  var Q = /[\s;{]--[-a-zA-Z0-9]+\s*:/m;
  function tt(t2) {
    return t2.indexOf("var(") > -1 || Q.test(t2);
  }
  var et = /url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim;
  function rt(t2) {
    return et.lastIndex = 0, et.test(t2);
  }
  function nt(t2, e2) {
    var r2 = e2.replace(/[^/]*$/, "");
    return t2.replace(et, (function(t3, e3) {
      var n2 = r2 + e3;
      return t3.replace(e3, n2);
    }));
  }
  var st = (function() {
    function t2(t3, e2) {
      this.win = t3, this.doc = e2, this.count = 0, this.hostStyleMap = /* @__PURE__ */ new WeakMap(), this.hostScopeMap = /* @__PURE__ */ new WeakMap(), this.globalScopes = [], this.scopesMap = /* @__PURE__ */ new Map(), this.didInit = false;
    }
    return t2.prototype.i = function() {
      var t3 = this;
      return this.didInit || !this.win.requestAnimationFrame ? Promise.resolve() : (this.didInit = true, new Promise((function(e2) {
        t3.win.requestAnimationFrame((function() {
          X(t3.doc, t3.globalScopes), K(t3.doc, t3.globalScopes).then((function() {
            return e2();
          }));
        }));
      })));
    }, t2.prototype.addLink = function(t3) {
      var e2 = this;
      return J(this.doc, this.globalScopes, t3).then((function() {
        e2.updateGlobal();
      }));
    }, t2.prototype.addGlobalStyle = function(t3) {
      q(this.globalScopes, t3) && this.updateGlobal();
    }, t2.prototype.createHostStyle = function(t3, e2, r2, n2) {
      if (this.hostScopeMap.has(t3)) throw new Error("host style already created");
      var s2 = this.registerHostTemplate(r2, e2, n2), i2 = this.doc.createElement("style");
      return i2.setAttribute("data-no-shim", ""), s2.usesCssVars ? n2 ? (i2["s-sc"] = e2 = s2.scopeId + "-" + this.count, i2.textContent = "/*needs update*/", this.hostStyleMap.set(t3, i2), this.hostScopeMap.set(t3, B(s2, e2)), this.count++) : (s2.styleEl = i2, s2.usesCssVars || (i2.textContent = C(s2.template, {})), this.globalScopes.push(s2), this.updateGlobal(), this.hostScopeMap.set(t3, s2)) : i2.textContent = r2, i2;
    }, t2.prototype.removeHost = function(t3) {
      var e2 = this.hostStyleMap.get(t3);
      e2 && e2.remove(), this.hostStyleMap.delete(t3), this.hostScopeMap.delete(t3);
    }, t2.prototype.updateHost = function(t3) {
      var e2 = this.hostScopeMap.get(t3);
      if (e2 && e2.usesCssVars && e2.isScoped) {
        var r2 = this.hostStyleMap.get(t3);
        if (r2) {
          var n2 = $(t3, this.hostScopeMap, this.globalScopes), s2 = L(n2);
          r2.textContent = C(e2.template, s2);
        }
      }
    }, t2.prototype.updateGlobal = function() {
      F(this.globalScopes);
    }, t2.prototype.registerHostTemplate = function(t3, e2, r2) {
      var n2 = this.scopesMap.get(e2);
      return n2 || (n2 = Y(t3), n2.scopeId = e2, n2.isScoped = r2, this.scopesMap.set(e2, n2)), n2;
    }, t2;
  })();
  (function(t2) {
    !t2 || t2.__cssshim || t2.CSS && t2.CSS.supports && t2.CSS.supports("color", "var(--c)") || (t2.__cssshim = new st(t2, t2.document));
  })("undefined" !== typeof window && window);
} }]);
