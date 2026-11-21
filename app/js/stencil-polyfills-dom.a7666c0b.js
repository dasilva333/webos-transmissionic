(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[571], { 6898: function(t, e, n) {
  var o = n(5108);
  (function() {
    var t2 = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));
    function e2(e3) {
      var n3 = t2.has(e3);
      return e3 = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e3), !n3 && e3;
    }
    function n2(t3) {
      var e3 = t3.isConnected;
      if (void 0 !== e3) return e3;
      for (; t3 && !(t3.__CE_isImportDocument || t3 instanceof Document); ) t3 = t3.parentNode || (window.ShadowRoot && t3 instanceof ShadowRoot ? t3.host : void 0);
      return !(!t3 || !(t3.__CE_isImportDocument || t3 instanceof Document));
    }
    function i(t3, e3) {
      for (; e3 && e3 !== t3 && !e3.nextSibling; ) e3 = e3.parentNode;
      return e3 && e3 !== t3 ? e3.nextSibling : null;
    }
    function r(t3, e3, n3) {
      n3 = void 0 === n3 ? /* @__PURE__ */ new Set() : n3;
      for (var o2 = t3; o2; ) {
        if (o2.nodeType === Node.ELEMENT_NODE) {
          var a2 = o2;
          e3(a2);
          var c2 = a2.localName;
          if ("link" === c2 && "import" === a2.getAttribute("rel")) {
            if (o2 = a2.import, o2 instanceof Node && !n3.has(o2)) for (n3.add(o2), o2 = o2.firstChild; o2; o2 = o2.nextSibling) r(o2, e3, n3);
            o2 = i(t3, a2);
            continue;
          }
          if ("template" === c2) {
            o2 = i(t3, a2);
            continue;
          }
          if (a2 = a2.__CE_shadowRoot) for (a2 = a2.firstChild; a2; a2 = a2.nextSibling) r(a2, e3, n3);
        }
        o2 = o2.firstChild ? o2.firstChild : i(t3, o2);
      }
    }
    function a(t3, e3, n3) {
      t3[e3] = n3;
    }
    function c() {
      this.a = /* @__PURE__ */ new Map(), this.g = /* @__PURE__ */ new Map(), this.c = [], this.f = [], this.b = false;
    }
    function l(t3, e3, n3) {
      t3.a.set(e3, n3), t3.g.set(n3.constructorFunction, n3);
    }
    function s(t3, e3) {
      t3.b = true, t3.c.push(e3);
    }
    function u(t3, e3) {
      t3.b = true, t3.f.push(e3);
    }
    function p(t3, e3) {
      t3.b && r(e3, (function(e4) {
        return f(t3, e4);
      }));
    }
    function f(t3, e3) {
      if (t3.b && !e3.__CE_patched) {
        e3.__CE_patched = true;
        for (var n3 = 0; n3 < t3.c.length; n3++) t3.c[n3](e3);
        for (n3 = 0; n3 < t3.f.length; n3++) t3.f[n3](e3);
      }
    }
    function h(t3, e3) {
      var n3 = [];
      for (r(e3, (function(t4) {
        return n3.push(t4);
      })), e3 = 0; e3 < n3.length; e3++) {
        var o2 = n3[e3];
        1 === o2.__CE_state ? t3.connectedCallback(o2) : b(t3, o2);
      }
    }
    function d(t3, e3) {
      var n3 = [];
      for (r(e3, (function(t4) {
        return n3.push(t4);
      })), e3 = 0; e3 < n3.length; e3++) {
        var o2 = n3[e3];
        1 === o2.__CE_state && t3.disconnectedCallback(o2);
      }
    }
    function m(t3, e3, n3) {
      n3 = void 0 === n3 ? {} : n3;
      var o2 = n3.u || /* @__PURE__ */ new Set(), i2 = n3.i || function(e4) {
        return b(t3, e4);
      }, a2 = [];
      if (r(e3, (function(e4) {
        if ("link" === e4.localName && "import" === e4.getAttribute("rel")) {
          var n4 = e4.import;
          n4 instanceof Node && (n4.__CE_isImportDocument = true, n4.__CE_hasRegistry = true), n4 && "complete" === n4.readyState ? n4.__CE_documentLoadHandled = true : e4.addEventListener("load", (function() {
            var n5 = e4.import;
            if (!n5.__CE_documentLoadHandled) {
              n5.__CE_documentLoadHandled = true;
              var r2 = new Set(o2);
              r2.delete(n5), m(t3, n5, { u: r2, i: i2 });
            }
          }));
        } else a2.push(e4);
      }), o2), t3.b) for (e3 = 0; e3 < a2.length; e3++) f(t3, a2[e3]);
      for (e3 = 0; e3 < a2.length; e3++) i2(a2[e3]);
    }
    function b(t3, e3) {
      if (void 0 === e3.__CE_state) {
        var o2 = e3.ownerDocument;
        if ((o2.defaultView || o2.__CE_isImportDocument && o2.__CE_hasRegistry) && (o2 = t3.a.get(e3.localName))) {
          o2.constructionStack.push(e3);
          var i2 = o2.constructorFunction;
          try {
            try {
              if (new i2() !== e3) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              o2.constructionStack.pop();
            }
          } catch (c2) {
            throw e3.__CE_state = 2, c2;
          }
          if (e3.__CE_state = 1, e3.__CE_definition = o2, o2.attributeChangedCallback) for (o2 = o2.observedAttributes, i2 = 0; i2 < o2.length; i2++) {
            var r2 = o2[i2], a2 = e3.getAttribute(r2);
            null !== a2 && t3.attributeChangedCallback(e3, r2, null, a2, null);
          }
          n2(e3) && t3.connectedCallback(e3);
        }
      }
    }
    function y(t3) {
      var e3 = document;
      this.c = t3, this.a = e3, this.b = void 0, m(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, { childList: true, subtree: true }));
    }
    function g(t3) {
      t3.b && t3.b.disconnect();
    }
    function v() {
      var t3 = this;
      this.b = this.a = void 0, this.c = new Promise((function(e3) {
        t3.b = e3, t3.a && e3(t3.a);
      }));
    }
    function w(t3) {
      if (t3.a) throw Error("Already resolved.");
      t3.a = void 0, t3.b && t3.b(void 0);
    }
    function E(t3) {
      this.c = false, this.a = t3, this.j = /* @__PURE__ */ new Map(), this.f = function(t4) {
        return t4();
      }, this.b = false, this.g = [], this.o = new y(t3);
    }
    function C(t3) {
      if (false !== t3.b) {
        t3.b = false;
        for (var e3 = t3.g, n3 = [], o2 = /* @__PURE__ */ new Map(), i2 = 0; i2 < e3.length; i2++) o2.set(e3[i2].localName, []);
        for (m(t3.a, document, { i: function(e4) {
          if (void 0 === e4.__CE_state) {
            var i3 = e4.localName, r3 = o2.get(i3);
            r3 ? r3.push(e4) : t3.a.a.get(i3) && n3.push(e4);
          }
        } }), i2 = 0; i2 < n3.length; i2++) b(t3.a, n3[i2]);
        for (; 0 < e3.length; ) {
          var r2 = e3.shift();
          i2 = r2.localName, r2 = o2.get(r2.localName);
          for (var a2 = 0; a2 < r2.length; a2++) b(t3.a, r2[a2]);
          (i2 = t3.j.get(i2)) && w(i2);
        }
      }
    }
    c.prototype.connectedCallback = function(t3) {
      var e3 = t3.__CE_definition;
      e3.connectedCallback && e3.connectedCallback.call(t3);
    }, c.prototype.disconnectedCallback = function(t3) {
      var e3 = t3.__CE_definition;
      e3.disconnectedCallback && e3.disconnectedCallback.call(t3);
    }, c.prototype.attributeChangedCallback = function(t3, e3, n3, o2, i2) {
      var r2 = t3.__CE_definition;
      r2.attributeChangedCallback && -1 < r2.observedAttributes.indexOf(e3) && r2.attributeChangedCallback.call(t3, e3, n3, o2, i2);
    }, y.prototype.f = function(t3) {
      var e3 = this.a.readyState;
      for ("interactive" !== e3 && "complete" !== e3 || g(this), e3 = 0; e3 < t3.length; e3++) for (var n3 = t3[e3].addedNodes, o2 = 0; o2 < n3.length; o2++) m(this.c, n3[o2]);
    }, E.prototype.l = function(t3, n3) {
      var o2 = this;
      if (!(n3 instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!e2(t3)) throw new SyntaxError("The element name '" + t3 + "' is not valid.");
      if (this.a.a.get(t3)) throw Error("A custom element with name '" + t3 + "' has already been defined.");
      if (this.c) throw Error("A custom element is already being defined.");
      this.c = true;
      try {
        var i2 = function(t4) {
          var e3 = r2[t4];
          if (void 0 !== e3 && !(e3 instanceof Function)) throw Error("The '" + t4 + "' callback must be a function.");
          return e3;
        }, r2 = n3.prototype;
        if (!(r2 instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var a2 = i2("connectedCallback"), c2 = i2("disconnectedCallback"), s2 = i2("adoptedCallback"), u2 = i2("attributeChangedCallback"), p2 = n3.observedAttributes || [];
      } catch (f2) {
        return;
      } finally {
        this.c = false;
      }
      n3 = { localName: t3, constructorFunction: n3, connectedCallback: a2, disconnectedCallback: c2, adoptedCallback: s2, attributeChangedCallback: u2, observedAttributes: p2, constructionStack: [] }, l(this.a, t3, n3), this.g.push(n3), this.b || (this.b = true, this.f((function() {
        return C(o2);
      })));
    }, E.prototype.i = function(t3) {
      m(this.a, t3);
    }, E.prototype.get = function(t3) {
      if (t3 = this.a.a.get(t3)) return t3.constructorFunction;
    }, E.prototype.m = function(t3) {
      if (!e2(t3)) return Promise.reject(new SyntaxError("'" + t3 + "' is not a valid custom element name."));
      var n3 = this.j.get(t3);
      return n3 || (n3 = new v(), this.j.set(t3, n3), this.a.a.get(t3) && !this.g.some((function(e3) {
        return e3.localName === t3;
      })) && w(n3)), n3.c;
    }, E.prototype.s = function(t3) {
      g(this.o);
      var e3 = this.f;
      this.f = function(n3) {
        return t3((function() {
          return e3(n3);
        }));
      };
    }, window.CustomElementRegistry = E, E.prototype.define = E.prototype.l, E.prototype.upgrade = E.prototype.i, E.prototype.get = E.prototype.get, E.prototype.whenDefined = E.prototype.m, E.prototype.polyfillWrapFlushCallback = E.prototype.s;
    var _ = window.Document.prototype.createElement, N = window.Document.prototype.createElementNS, S = window.Document.prototype.importNode, k = window.Document.prototype.prepend, T = window.Document.prototype.append, D = window.DocumentFragment.prototype.prepend, A = window.DocumentFragment.prototype.append, O = window.Node.prototype.cloneNode, j = window.Node.prototype.appendChild, L = window.Node.prototype.insertBefore, M = window.Node.prototype.removeChild, x = window.Node.prototype.replaceChild, H = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), R = window.Element.prototype.attachShadow, P = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), F = window.Element.prototype.getAttribute, I = window.Element.prototype.setAttribute, z = window.Element.prototype.removeAttribute, U = window.Element.prototype.getAttributeNS, W = window.Element.prototype.setAttributeNS, q = window.Element.prototype.removeAttributeNS, B = window.Element.prototype.insertAdjacentElement, $ = window.Element.prototype.insertAdjacentHTML, V = window.Element.prototype.prepend, X = window.Element.prototype.append, G = window.Element.prototype.before, J = window.Element.prototype.after, K = window.Element.prototype.replaceWith, Q = window.Element.prototype.remove, Y = window.HTMLElement, Z = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), tt = window.HTMLElement.prototype.insertAdjacentElement, et = window.HTMLElement.prototype.insertAdjacentHTML, nt = new function() {
    }();
    function ot() {
      var t3 = ut;
      window.HTMLElement = (function() {
        function e3() {
          var e4 = this.constructor, n3 = t3.g.get(e4);
          if (!n3) throw Error("The custom element being constructed was not registered with `customElements`.");
          var o2 = n3.constructionStack;
          if (0 === o2.length) return o2 = _.call(document, n3.localName), Object.setPrototypeOf(o2, e4.prototype), o2.__CE_state = 1, o2.__CE_definition = n3, f(t3, o2), o2;
          n3 = o2.length - 1;
          var i2 = o2[n3];
          if (i2 === nt) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          return o2[n3] = nt, Object.setPrototypeOf(i2, e4.prototype), f(t3, i2), i2;
        }
        return e3.prototype = Y.prototype, Object.defineProperty(e3.prototype, "constructor", { writable: true, configurable: true, enumerable: false, value: e3 }), e3;
      })();
    }
    function it(t3, e3, o2) {
      function i2(e4) {
        return function(o3) {
          for (var i3 = [], r2 = 0; r2 < arguments.length; ++r2) i3[r2] = arguments[r2];
          r2 = [];
          for (var a2 = [], c2 = 0; c2 < i3.length; c2++) {
            var l2 = i3[c2];
            if (l2 instanceof Element && n2(l2) && a2.push(l2), l2 instanceof DocumentFragment) for (l2 = l2.firstChild; l2; l2 = l2.nextSibling) r2.push(l2);
            else r2.push(l2);
          }
          for (e4.apply(this, i3), i3 = 0; i3 < a2.length; i3++) d(t3, a2[i3]);
          if (n2(this)) for (i3 = 0; i3 < r2.length; i3++) a2 = r2[i3], a2 instanceof Element && h(t3, a2);
        };
      }
      void 0 !== o2.h && (e3.prepend = i2(o2.h)), void 0 !== o2.append && (e3.append = i2(o2.append));
    }
    function rt() {
      var t3 = ut;
      a(Document.prototype, "createElement", (function(e3) {
        if (this.__CE_hasRegistry) {
          var n3 = t3.a.get(e3);
          if (n3) return new n3.constructorFunction();
        }
        return e3 = _.call(this, e3), f(t3, e3), e3;
      })), a(Document.prototype, "importNode", (function(e3, n3) {
        return e3 = S.call(this, e3, !!n3), this.__CE_hasRegistry ? m(t3, e3) : p(t3, e3), e3;
      })), a(Document.prototype, "createElementNS", (function(e3, n3) {
        if (this.__CE_hasRegistry && (null === e3 || "http://www.w3.org/1999/xhtml" === e3)) {
          var o2 = t3.a.get(n3);
          if (o2) return new o2.constructorFunction();
        }
        return e3 = N.call(this, e3, n3), f(t3, e3), e3;
      })), it(t3, Document.prototype, { h: k, append: T });
    }
    function at() {
      function t3(t4, o2) {
        Object.defineProperty(t4, "textContent", { enumerable: o2.enumerable, configurable: true, get: o2.get, set: function(t5) {
          if (this.nodeType === Node.TEXT_NODE) o2.set.call(this, t5);
          else {
            var i2 = void 0;
            if (this.firstChild) {
              var r2 = this.childNodes, a2 = r2.length;
              if (0 < a2 && n2(this)) {
                i2 = Array(a2);
                for (var c2 = 0; c2 < a2; c2++) i2[c2] = r2[c2];
              }
            }
            if (o2.set.call(this, t5), i2) for (t5 = 0; t5 < i2.length; t5++) d(e3, i2[t5]);
          }
        } });
      }
      var e3 = ut;
      a(Node.prototype, "insertBefore", (function(t4, o2) {
        if (t4 instanceof DocumentFragment) {
          var i2 = Array.prototype.slice.apply(t4.childNodes);
          if (t4 = L.call(this, t4, o2), n2(this)) for (o2 = 0; o2 < i2.length; o2++) h(e3, i2[o2]);
          return t4;
        }
        return i2 = n2(t4), o2 = L.call(this, t4, o2), i2 && d(e3, t4), n2(this) && h(e3, t4), o2;
      })), a(Node.prototype, "appendChild", (function(t4) {
        if (t4 instanceof DocumentFragment) {
          var o2 = Array.prototype.slice.apply(t4.childNodes);
          if (t4 = j.call(this, t4), n2(this)) for (var i2 = 0; i2 < o2.length; i2++) h(e3, o2[i2]);
          return t4;
        }
        return o2 = n2(t4), i2 = j.call(this, t4), o2 && d(e3, t4), n2(this) && h(e3, t4), i2;
      })), a(Node.prototype, "cloneNode", (function(t4) {
        return t4 = O.call(this, !!t4), this.ownerDocument.__CE_hasRegistry ? m(e3, t4) : p(e3, t4), t4;
      })), a(Node.prototype, "removeChild", (function(t4) {
        var o2 = n2(t4), i2 = M.call(this, t4);
        return o2 && d(e3, t4), i2;
      })), a(Node.prototype, "replaceChild", (function(t4, o2) {
        if (t4 instanceof DocumentFragment) {
          var i2 = Array.prototype.slice.apply(t4.childNodes);
          if (t4 = x.call(this, t4, o2), n2(this)) for (d(e3, o2), o2 = 0; o2 < i2.length; o2++) h(e3, i2[o2]);
          return t4;
        }
        i2 = n2(t4);
        var r2 = x.call(this, t4, o2), a2 = n2(this);
        return a2 && d(e3, o2), i2 && d(e3, t4), a2 && h(e3, t4), r2;
      })), H && H.get ? t3(Node.prototype, H) : s(e3, (function(e4) {
        t3(e4, { enumerable: true, configurable: true, get: function() {
          for (var t4 = [], e5 = 0; e5 < this.childNodes.length; e5++) {
            var n3 = this.childNodes[e5];
            n3.nodeType !== Node.COMMENT_NODE && t4.push(n3.textContent);
          }
          return t4.join("");
        }, set: function(t4) {
          for (; this.firstChild; ) M.call(this, this.firstChild);
          null != t4 && "" !== t4 && j.call(this, document.createTextNode(t4));
        } });
      }));
    }
    function ct(t3) {
      function e3(e4) {
        return function(o3) {
          for (var i2 = [], r2 = 0; r2 < arguments.length; ++r2) i2[r2] = arguments[r2];
          r2 = [];
          for (var a2 = [], c2 = 0; c2 < i2.length; c2++) {
            var l2 = i2[c2];
            if (l2 instanceof Element && n2(l2) && a2.push(l2), l2 instanceof DocumentFragment) for (l2 = l2.firstChild; l2; l2 = l2.nextSibling) r2.push(l2);
            else r2.push(l2);
          }
          for (e4.apply(this, i2), i2 = 0; i2 < a2.length; i2++) d(t3, a2[i2]);
          if (n2(this)) for (i2 = 0; i2 < r2.length; i2++) a2 = r2[i2], a2 instanceof Element && h(t3, a2);
        };
      }
      var o2 = Element.prototype;
      void 0 !== G && (o2.before = e3(G)), void 0 !== G && (o2.after = e3(J)), void 0 !== K && a(o2, "replaceWith", (function(e4) {
        for (var o3 = [], i2 = 0; i2 < arguments.length; ++i2) o3[i2] = arguments[i2];
        i2 = [];
        for (var r2 = [], a2 = 0; a2 < o3.length; a2++) {
          var c2 = o3[a2];
          if (c2 instanceof Element && n2(c2) && r2.push(c2), c2 instanceof DocumentFragment) for (c2 = c2.firstChild; c2; c2 = c2.nextSibling) i2.push(c2);
          else i2.push(c2);
        }
        for (a2 = n2(this), K.apply(this, o3), o3 = 0; o3 < r2.length; o3++) d(t3, r2[o3]);
        if (a2) for (d(t3, this), o3 = 0; o3 < i2.length; o3++) r2 = i2[o3], r2 instanceof Element && h(t3, r2);
      })), void 0 !== Q && a(o2, "remove", (function() {
        var e4 = n2(this);
        Q.call(this), e4 && d(t3, this);
      }));
    }
    function lt() {
      function t3(t4, e4) {
        Object.defineProperty(t4, "innerHTML", { enumerable: e4.enumerable, configurable: true, get: e4.get, set: function(t5) {
          var o2 = this, i3 = void 0;
          if (n2(this) && (i3 = [], r(this, (function(t6) {
            t6 !== o2 && i3.push(t6);
          }))), e4.set.call(this, t5), i3) for (var a2 = 0; a2 < i3.length; a2++) {
            var l2 = i3[a2];
            1 === l2.__CE_state && c2.disconnectedCallback(l2);
          }
          return this.ownerDocument.__CE_hasRegistry ? m(c2, this) : p(c2, this), t5;
        } });
      }
      function e3(t4, e4) {
        a(t4, "insertAdjacentElement", (function(t5, o2) {
          var i3 = n2(o2);
          return t5 = e4.call(this, t5, o2), i3 && d(c2, o2), n2(t5) && h(c2, o2), t5;
        }));
      }
      function i2(t4, e4) {
        function n3(t5, e5) {
          for (var n4 = []; t5 !== e5; t5 = t5.nextSibling) n4.push(t5);
          for (e5 = 0; e5 < n4.length; e5++) m(c2, n4[e5]);
        }
        a(t4, "insertAdjacentHTML", (function(t5, o2) {
          if (t5 = t5.toLowerCase(), "beforebegin" === t5) {
            var i3 = this.previousSibling;
            e4.call(this, t5, o2), n3(i3 || this.parentNode.firstChild, this);
          } else if ("afterbegin" === t5) i3 = this.firstChild, e4.call(this, t5, o2), n3(this.firstChild, i3);
          else if ("beforeend" === t5) i3 = this.lastChild, e4.call(this, t5, o2), n3(i3 || this.firstChild, null);
          else {
            if ("afterend" !== t5) throw new SyntaxError("The value provided (" + String(t5) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            i3 = this.nextSibling, e4.call(this, t5, o2), n3(this.nextSibling, i3);
          }
        }));
      }
      var c2 = ut;
      R && a(Element.prototype, "attachShadow", (function(t4) {
        t4 = R.call(this, t4);
        var e4 = c2;
        if (e4.b && !t4.__CE_patched) {
          t4.__CE_patched = true;
          for (var n3 = 0; n3 < e4.c.length; n3++) e4.c[n3](t4);
        }
        return this.__CE_shadowRoot = t4;
      })), P && P.get ? t3(Element.prototype, P) : Z && Z.get ? t3(HTMLElement.prototype, Z) : u(c2, (function(e4) {
        t3(e4, { enumerable: true, configurable: true, get: function() {
          return O.call(this, true).innerHTML;
        }, set: function(t4) {
          var e5 = "template" === this.localName, n3 = e5 ? this.content : this, o2 = N.call(document, this.namespaceURI, this.localName);
          for (o2.innerHTML = t4; 0 < n3.childNodes.length; ) M.call(n3, n3.childNodes[0]);
          for (t4 = e5 ? o2.content : o2; 0 < t4.childNodes.length; ) j.call(n3, t4.childNodes[0]);
        } });
      })), a(Element.prototype, "setAttribute", (function(t4, e4) {
        if (1 !== this.__CE_state) return I.call(this, t4, e4);
        var n3 = F.call(this, t4);
        I.call(this, t4, e4), e4 = F.call(this, t4), c2.attributeChangedCallback(this, t4, n3, e4, null);
      })), a(Element.prototype, "setAttributeNS", (function(t4, e4, n3) {
        if (1 !== this.__CE_state) return W.call(this, t4, e4, n3);
        var o2 = U.call(this, t4, e4);
        W.call(this, t4, e4, n3), n3 = U.call(this, t4, e4), c2.attributeChangedCallback(this, e4, o2, n3, t4);
      })), a(Element.prototype, "removeAttribute", (function(t4) {
        if (1 !== this.__CE_state) return z.call(this, t4);
        var e4 = F.call(this, t4);
        z.call(this, t4), null !== e4 && c2.attributeChangedCallback(this, t4, e4, null, null);
      })), a(Element.prototype, "removeAttributeNS", (function(t4, e4) {
        if (1 !== this.__CE_state) return q.call(this, t4, e4);
        var n3 = U.call(this, t4, e4);
        q.call(this, t4, e4);
        var o2 = U.call(this, t4, e4);
        n3 !== o2 && c2.attributeChangedCallback(this, e4, n3, o2, t4);
      })), tt ? e3(HTMLElement.prototype, tt) : B ? e3(Element.prototype, B) : o.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), et ? i2(HTMLElement.prototype, et) : $ ? i2(Element.prototype, $) : o.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), it(c2, Element.prototype, { h: V, append: X }), ct(c2);
    }
    var st = window.customElements;
    if (!st || st.forcePolyfill || "function" != typeof st.define || "function" != typeof st.get) {
      var ut = new c();
      ot(), rt(), it(ut, DocumentFragment.prototype, { h: D, append: A }), at(), lt(), document.__CE_hasRegistry = true;
      var pt = new E(ut);
      Object.defineProperty(window, "customElements", { configurable: true, enumerable: true, value: pt });
    }
  }).call(self), "string" !== typeof document.baseURI && Object.defineProperty(Document.prototype, "baseURI", { enumerable: true, configurable: true, get: function() {
    var t2 = document.querySelector("base");
    return t2 && t2.href ? t2.href : document.URL;
  } }), "function" !== typeof window.CustomEvent && (window.CustomEvent = function(t2, e2) {
    e2 = e2 || { bubbles: false, cancelable: false, detail: void 0 };
    var n2 = document.createEvent("CustomEvent");
    return n2.initCustomEvent(t2, e2.bubbles, e2.cancelable, e2.detail), n2;
  }, window.CustomEvent.prototype = window.Event.prototype), (function(t2, e2, n2) {
    t2.composedPath || (t2.composedPath = function() {
      if (this.path) return this.path;
      var t3 = this.target;
      this.path = [];
      while (null !== t3.parentNode) this.path.push(t3), t3 = t3.parentNode;
      return this.path.push(e2, n2), this.path;
    });
  })(Event.prototype, document, window), /*!
  Element.closest and Element.matches
  https://github.com/jonathantneal/closest
  Creative Commons Zero v1.0 Universal
  */
  (function(t2) {
    "function" !== typeof t2.matches && (t2.matches = t2.msMatchesSelector || t2.mozMatchesSelector || t2.webkitMatchesSelector || function(t3) {
      t3 = (this.document || this.ownerDocument).querySelectorAll(t3);
      for (var e2 = 0; t3[e2] && t3[e2] !== this; ) ++e2;
      return !!t3[e2];
    }), "function" !== typeof t2.closest && (t2.closest = function(t3) {
      for (var e2 = this; e2 && 1 === e2.nodeType; ) {
        if (e2.matches(t3)) return e2;
        e2 = e2.parentNode;
      }
      return null;
    });
  })(window.Element.prototype), /*!
  Element.getRootNode()
  */
  (function(t2) {
    function e2(t3) {
      return t3 = n2(t3), t3 && 11 === t3.nodeType ? e2(t3.host) : t3;
    }
    function n2(t3) {
      return t3 && t3.parentNode ? n2(t3.parentNode) : t3;
    }
    "function" !== typeof t2.getRootNode && (t2.getRootNode = function(t3) {
      return t3 && t3.composed ? e2(this) : n2(this);
    });
  })(Element.prototype), /*!
  Element.isConnected()
  */
  (function(t2) {
    "isConnected" in t2 || Object.defineProperty(t2, "isConnected", { configurable: true, enumerable: true, get: function() {
      var t3 = this.getRootNode({ composed: true });
      return t3 && 9 === t3.nodeType;
    } });
  })(Element.prototype), /*!
  Element.remove()
  */
  (function(t2) {
    t2.forEach((function(t3) {
      t3.hasOwnProperty("remove") || Object.defineProperty(t3, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
        null !== this.parentNode && this.parentNode.removeChild(this);
      } });
    }));
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]), (function(t2) {
    "classList" in t2 || Object.defineProperty(t2, "classList", { get: function() {
      var t3 = this, e2 = (t3.getAttribute("class") || "").replace(/^\s+|\s$/g, "").split(/\s+/g);
      function n2() {
        e2.length > 0 ? t3.setAttribute("class", e2.join(" ")) : t3.removeAttribute("class");
      }
      return "" === e2[0] && e2.splice(0, 1), e2.toggle = function(t4, o2) {
        void 0 !== o2 ? o2 ? e2.add(t4) : e2.remove(t4) : -1 !== e2.indexOf(t4) ? e2.splice(e2.indexOf(t4), 1) : e2.push(t4), n2();
      }, e2.add = function() {
        for (var t4 = [].slice.call(arguments), o2 = 0, i = t4.length; o2 < i; o2++) -1 === e2.indexOf(t4[o2]) && e2.push(t4[o2]);
        n2();
      }, e2.remove = function() {
        for (var t4 = [].slice.call(arguments), o2 = 0, i = t4.length; o2 < i; o2++) -1 !== e2.indexOf(t4[o2]) && e2.splice(e2.indexOf(t4[o2]), 1);
        n2();
      }, e2.item = function(t4) {
        return e2[t4];
      }, e2.contains = function(t4) {
        return -1 !== e2.indexOf(t4);
      }, e2.replace = function(t4, o2) {
        -1 !== e2.indexOf(t4) && e2.splice(e2.indexOf(t4), 1, o2), n2();
      }, e2.value = t3.getAttribute("class") || "", e2;
    } });
  })(Element.prototype), /*!
  DOMTokenList
  */
  (function(t2) {
    try {
      document.body.classList.add();
    } catch (o2) {
      var e2 = t2.add, n2 = t2.remove;
      t2.add = function() {
        for (var t3 = 0; t3 < arguments.length; t3++) e2.call(this, arguments[t3]);
      }, t2.remove = function() {
        for (var t3 = 0; t3 < arguments.length; t3++) n2.call(this, arguments[t3]);
      };
    }
  })(DOMTokenList.prototype);
} }]);
