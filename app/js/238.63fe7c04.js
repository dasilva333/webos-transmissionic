"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[238], { 9238: function(t, n, e) {
  e.r(n), e.d(n, { pwa_camera_modal: function() {
    return c;
  } });
  var r = e(6696), o = function(t2, n2, e2, r2) {
    function o2(t3) {
      return t3 instanceof e2 ? t3 : new e2((function(n3) {
        n3(t3);
      }));
    }
    return new (e2 || (e2 = Promise))((function(e3, i2) {
      function c2(t3) {
        try {
          a(r2.next(t3));
        } catch (n3) {
          i2(n3);
        }
      }
      function u(t3) {
        try {
          a(r2["throw"](t3));
        } catch (n3) {
          i2(n3);
        }
      }
      function a(t3) {
        t3.done ? e3(t3.value) : o2(t3.value).then(c2, u);
      }
      a((r2 = r2.apply(t2, n2 || [])).next());
    }));
  }, i = function(t2, n2) {
    var e2, r2, o2, i2, c2 = { label: 0, sent: function() {
      if (1 & o2[0]) throw o2[1];
      return o2[1];
    }, trys: [], ops: [] };
    return i2 = { next: u(0), throw: u(1), return: u(2) }, "function" === typeof Symbol && (i2[Symbol.iterator] = function() {
      return this;
    }), i2;
    function u(t3) {
      return function(n3) {
        return a([t3, n3]);
      };
    }
    function a(i3) {
      if (e2) throw new TypeError("Generator is already executing.");
      while (c2) try {
        if (e2 = 1, r2 && (o2 = 2 & i3[0] ? r2["return"] : i3[0] ? r2["throw"] || ((o2 = r2["return"]) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i3[1])).done) return o2;
        switch (r2 = 0, o2 && (i3 = [2 & i3[0], o2.value]), i3[0]) {
          case 0:
          case 1:
            o2 = i3;
            break;
          case 4:
            return c2.label++, { value: i3[1], done: false };
          case 5:
            c2.label++, r2 = i3[1], i3 = [0];
            continue;
          case 7:
            i3 = c2.ops.pop(), c2.trys.pop();
            continue;
          default:
            if (o2 = c2.trys, !(o2 = o2.length > 0 && o2[o2.length - 1]) && (6 === i3[0] || 2 === i3[0])) {
              c2 = 0;
              continue;
            }
            if (3 === i3[0] && (!o2 || i3[1] > o2[0] && i3[1] < o2[3])) {
              c2.label = i3[1];
              break;
            }
            if (6 === i3[0] && c2.label < o2[1]) {
              c2.label = o2[1], o2 = i3;
              break;
            }
            if (o2 && c2.label < o2[2]) {
              c2.label = o2[2], c2.ops.push(i3);
              break;
            }
            o2[2] && c2.ops.pop(), c2.trys.pop();
            continue;
        }
        i3 = n2.call(t2, c2);
      } catch (u2) {
        i3 = [6, u2], r2 = 0;
      } finally {
        e2 = o2 = 0;
      }
      if (5 & i3[0]) throw i3[1];
      return { value: i3[0] ? i3[1] : void 0, done: true };
    }
  }, c = (function() {
    function t2(t3) {
      (0, r.r)(this, t3), this.facingMode = "user", this.onPhoto = (0, r.c)(this, "onPhoto", 7), this.noDeviceError = (0, r.c)(this, "noDeviceError", 7);
    }
    return t2.prototype.present = function() {
      return o(this, void 0, void 0, (function() {
        var t3, n2 = this;
        return i(this, (function(e2) {
          return t3 = document.createElement("pwa-camera-modal-instance"), t3.facingMode = this.facingMode, t3.addEventListener("onPhoto", (function(t4) {
            return o(n2, void 0, void 0, (function() {
              var n3;
              return i(this, (function(e3) {
                return this._modal ? (n3 = t4.detail, this.onPhoto.emit(n3), [2]) : [2];
              }));
            }));
          })), t3.addEventListener("noDeviceError", (function(t4) {
            return o(n2, void 0, void 0, (function() {
              return i(this, (function(n3) {
                return this.noDeviceError.emit(t4), [2];
              }));
            }));
          })), document.body.append(t3), this._modal = t3, [2];
        }));
      }));
    }, t2.prototype.dismiss = function() {
      return o(this, void 0, void 0, (function() {
        return i(this, (function(t3) {
          return this._modal ? (this._modal && this._modal.parentNode.removeChild(this._modal), this._modal = null, [2]) : [2];
        }));
      }));
    }, t2.prototype.render = function() {
      return (0, r.h)("div", null);
    }, Object.defineProperty(t2, "style", { get: function() {
      return ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;contain:strict}.wrapper,:host{display:-ms-flexbox;display:flex}.wrapper{-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.15)}.content{-webkit-box-shadow:0 0 5px rgba(0,0,0,.2);box-shadow:0 0 5px rgba(0,0,0,.2);width:600px;height:600px}";
    }, enumerable: true, configurable: true }), t2;
  })();
} }]);
