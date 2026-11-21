(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[385], { 1385: function(e, t, n) {
  "use strict";
  n.r(t), n.d(t, { FileSharerPluginWeb: function() {
    return i;
  } });
  var o = n(9895), a = n(3162);
  class r {
    static toByteArray(e2) {
      const t2 = atob(e2), n2 = new Array(t2.length);
      for (let o2 = 0; o2 < t2.length; o2++) n2[o2] = t2.charCodeAt(o2);
      return new Uint8Array(n2);
    }
  }
  class i extends o.Uw {
    async share(e2) {
      return new Promise(((t2, n2) => {
        e2.base64Data && 0 != e2.base64Data.length ? e2.filename && 0 != e2.filename.length ? e2.contentType && 0 != e2.contentType.length || n2(new Error("ERR_PARAM_NO_CONTENT_TYPE")) : n2(new Error("ERR_PARAM_NO_FILENAME")) : n2(new Error("ERR_PARAM_NO_DATA"));
        let o2 = new Blob([r.toByteArray(e2.base64Data)], { type: e2.contentType });
        a.saveAs(o2, e2.filename), t2();
      }));
    }
  }
}, 3162: function(e, t, n) {
  var o, a, r, i = n(5108);
  (function(n2, i2) {
    a = [], o = i2, r = "function" === typeof o ? o.apply(t, a) : o, void 0 === r || (e.exports = r);
  })(0, (function() {
    "use strict";
    function t2(e2, t3) {
      return "undefined" == typeof t3 ? t3 = { autoBom: false } : "object" != typeof t3 && (i.warn("Deprecated: Expected third argument to be a object"), t3 = { autoBom: !t3 }), t3.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e2.type) ? new Blob(["\uFEFF", e2], { type: e2.type }) : e2;
    }
    function o2(e2, t3, n2) {
      var o3 = new XMLHttpRequest();
      o3.open("GET", e2), o3.responseType = "blob", o3.onload = function() {
        l(o3.response, t3, n2);
      }, o3.onerror = function() {
        i.error("could not download file");
      }, o3.send();
    }
    function a2(e2) {
      var t3 = new XMLHttpRequest();
      t3.open("HEAD", e2, false);
      try {
        t3.send();
      } catch (e3) {
      }
      return 200 <= t3.status && 299 >= t3.status;
    }
    function r2(e2) {
      try {
        e2.dispatchEvent(new MouseEvent("click"));
      } catch (o3) {
        var t3 = document.createEvent("MouseEvents");
        t3.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), e2.dispatchEvent(t3);
      }
    }
    var s = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof n.g && n.g.global === n.g ? n.g : void 0, c = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || ("object" != typeof window || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !c ? function(e2, t3, n2) {
      var i2 = s.URL || s.webkitURL, c2 = document.createElement("a");
      t3 = t3 || e2.name || "download", c2.download = t3, c2.rel = "noopener", "string" == typeof e2 ? (c2.href = e2, c2.origin === location.origin ? r2(c2) : a2(c2.href) ? o2(e2, t3, n2) : r2(c2, c2.target = "_blank")) : (c2.href = i2.createObjectURL(e2), setTimeout((function() {
        i2.revokeObjectURL(c2.href);
      }), 4e4), setTimeout((function() {
        r2(c2);
      }), 0));
    } : "msSaveOrOpenBlob" in navigator ? function(e2, n2, i2) {
      if (n2 = n2 || e2.name || "download", "string" != typeof e2) navigator.msSaveOrOpenBlob(t2(e2, i2), n2);
      else if (a2(e2)) o2(e2, n2, i2);
      else {
        var s2 = document.createElement("a");
        s2.href = e2, s2.target = "_blank", setTimeout((function() {
          r2(s2);
        }));
      }
    } : function(e2, t3, n2, a3) {
      if (a3 = a3 || open("", "_blank"), a3 && (a3.document.title = a3.document.body.innerText = "downloading..."), "string" == typeof e2) return o2(e2, t3, n2);
      var r3 = "application/octet-stream" === e2.type, i2 = /constructor/i.test(s.HTMLElement) || s.safari, l2 = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((l2 || r3 && i2 || c) && "undefined" != typeof FileReader) {
        var u = new FileReader();
        u.onloadend = function() {
          var e3 = u.result;
          e3 = l2 ? e3 : e3.replace(/^data:[^;]*;/, "data:attachment/file;"), a3 ? a3.location.href = e3 : location = e3, a3 = null;
        }, u.readAsDataURL(e2);
      } else {
        var f = s.URL || s.webkitURL, d = f.createObjectURL(e2);
        a3 ? a3.location = d : location.href = d, a3 = null, setTimeout((function() {
          f.revokeObjectURL(d);
        }), 4e4);
      }
    });
    s.saveAs = l.saveAs = l, e.exports = l;
  }));
} }]);
