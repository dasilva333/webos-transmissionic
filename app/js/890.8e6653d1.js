"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[890], { 7890: function(e, t, n) {
  n.r(t), n.d(t, { pwa_camera_modal_instance: function() {
    return c;
  } });
  var o = n(6696), i = function(e2, t2, n2, o2) {
    function i2(e3) {
      return e3 instanceof n2 ? e3 : new n2((function(t3) {
        t3(e3);
      }));
    }
    return new (n2 || (n2 = Promise))((function(n3, r2) {
      function c2(e3) {
        try {
          s(o2.next(e3));
        } catch (t3) {
          r2(t3);
        }
      }
      function a(e3) {
        try {
          s(o2["throw"](e3));
        } catch (t3) {
          r2(t3);
        }
      }
      function s(e3) {
        e3.done ? n3(e3.value) : i2(e3.value).then(c2, a);
      }
      s((o2 = o2.apply(e2, t2 || [])).next());
    }));
  }, r = function(e2, t2) {
    var n2, o2, i2, r2, c2 = { label: 0, sent: function() {
      if (1 & i2[0]) throw i2[1];
      return i2[1];
    }, trys: [], ops: [] };
    return r2 = { next: a(0), throw: a(1), return: a(2) }, "function" === typeof Symbol && (r2[Symbol.iterator] = function() {
      return this;
    }), r2;
    function a(e3) {
      return function(t3) {
        return s([e3, t3]);
      };
    }
    function s(r3) {
      if (n2) throw new TypeError("Generator is already executing.");
      while (c2) try {
        if (n2 = 1, o2 && (i2 = 2 & r3[0] ? o2["return"] : r3[0] ? o2["throw"] || ((i2 = o2["return"]) && i2.call(o2), 0) : o2.next) && !(i2 = i2.call(o2, r3[1])).done) return i2;
        switch (o2 = 0, i2 && (r3 = [2 & r3[0], i2.value]), r3[0]) {
          case 0:
          case 1:
            i2 = r3;
            break;
          case 4:
            return c2.label++, { value: r3[1], done: false };
          case 5:
            c2.label++, o2 = r3[1], r3 = [0];
            continue;
          case 7:
            r3 = c2.ops.pop(), c2.trys.pop();
            continue;
          default:
            if (i2 = c2.trys, !(i2 = i2.length > 0 && i2[i2.length - 1]) && (6 === r3[0] || 2 === r3[0])) {
              c2 = 0;
              continue;
            }
            if (3 === r3[0] && (!i2 || r3[1] > i2[0] && r3[1] < i2[3])) {
              c2.label = r3[1];
              break;
            }
            if (6 === r3[0] && c2.label < i2[1]) {
              c2.label = i2[1], i2 = r3;
              break;
            }
            if (i2 && c2.label < i2[2]) {
              c2.label = i2[2], c2.ops.push(r3);
              break;
            }
            i2[2] && c2.ops.pop(), c2.trys.pop();
            continue;
        }
        r3 = t2.call(e2, c2);
      } catch (a2) {
        r3 = [6, a2], o2 = 0;
      } finally {
        n2 = i2 = 0;
      }
      if (5 & r3[0]) throw r3[1];
      return { value: r3[0] ? r3[1] : void 0, done: true };
    }
  }, c = (function() {
    function e2(e3) {
      var t2 = this;
      (0, o.r)(this, e3), this.facingMode = "user", this.noDevicesText = "No camera found", this.noDevicesButtonText = "Choose image", this.handlePhoto = function(e4) {
        return i(t2, void 0, void 0, (function() {
          return r(this, (function(t3) {
            return this.onPhoto.emit(e4), [2];
          }));
        }));
      }, this.handleNoDeviceError = function(e4) {
        return i(t2, void 0, void 0, (function() {
          return r(this, (function(t3) {
            return this.noDeviceError.emit(e4), [2];
          }));
        }));
      }, this.onPhoto = (0, o.c)(this, "onPhoto", 7), this.noDeviceError = (0, o.c)(this, "noDeviceError", 7);
    }
    return e2.prototype.handleBackdropClick = function(e3) {
      e3.target !== this.el && this.onPhoto.emit(null);
    }, e2.prototype.handleComponentClick = function(e3) {
      e3.stopPropagation();
    }, e2.prototype.handleBackdropKeyUp = function(e3) {
      "Escape" === e3.key && this.onPhoto.emit(null);
    }, e2.prototype.render = function() {
      var e3 = this;
      return (0, o.h)("div", { class: "wrapper", onClick: function(t2) {
        return e3.handleBackdropClick(t2);
      } }, (0, o.h)("div", { class: "content" }, (0, o.h)("pwa-camera", { onClick: function(t2) {
        return e3.handleComponentClick(t2);
      }, facingMode: this.facingMode, handlePhoto: this.handlePhoto, handleNoDeviceError: this.handleNoDeviceError, noDevicesButtonText: this.noDevicesButtonText, noDevicesText: this.noDevicesText })));
    }, Object.defineProperty(e2.prototype, "el", { get: function() {
      return (0, o.g)(this);
    }, enumerable: true, configurable: true }), Object.defineProperty(e2, "style", { get: function() {
      return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width:600px){.content{width:100%;height:100%}}";
    }, enumerable: true, configurable: true }), e2;
  })();
} }]);
