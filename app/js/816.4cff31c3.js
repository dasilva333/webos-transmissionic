"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[816], { 5816: function(t, e, i) {
  i.r(e), i.d(e, { pwa_toast: function() {
    return n;
  } });
  var o = i(6696), n = (function() {
    function t2(t3) {
      (0, o.r)(this, t3), this.duration = 2e3, this.closing = null;
    }
    return t2.prototype.hostData = function() {
      var t3 = { out: !!this.closing };
      return null !== this.closing && (t3["in"] = !this.closing), { class: t3 };
    }, t2.prototype.componentDidLoad = function() {
      var t3 = this;
      setTimeout((function() {
        t3.closing = false;
      })), setTimeout((function() {
        t3.close();
      }), this.duration);
    }, t2.prototype.close = function() {
      var t3 = this;
      this.closing = true, setTimeout((function() {
        t3.el.parentNode.removeChild(t3.el);
      }), 1e3);
    }, t2.prototype.__stencil_render = function() {
      return (0, o.h)("div", { class: "wrapper" }, (0, o.h)("div", { class: "toast" }, this.message));
    }, Object.defineProperty(t2.prototype, "el", { get: function() {
      return (0, o.g)(this);
    }, enumerable: true, configurable: true }), t2.prototype.render = function() {
      return (0, o.h)(o.H, this.hostData(), this.__stencil_render());
    }, Object.defineProperty(t2, "style", { get: function() {
      return ":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity .3s;transition:opacity .3s;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system,system-ui,Helvetica Neue,Roboto,sans-serif;background-color:#eee;color:#000;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.2);box-shadow:0 1px 2px rgba(0,0,0,.2)}";
    }, enumerable: true, configurable: true }), t2;
  })();
} }]);
