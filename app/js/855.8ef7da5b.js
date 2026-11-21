"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[855], { 855: function(e, t, r) {
  r.r(t), r.d(t, { SecureStoragePluginWeb: function() {
    return o;
  } });
  var s = r(9895);
  class o extends s.Uw {
    constructor() {
      super(...arguments), this.PREFIX = "cap_sec_", this.addPrefix = (e2) => this.PREFIX + e2, this.removePrefix = (e2) => e2.replace(this.PREFIX, "");
    }
    get(e2) {
      const t2 = localStorage.getItem(this.addPrefix(e2.key));
      return null !== t2 ? Promise.resolve({ value: atob(t2) }) : Promise.reject("Item with given key does not exist");
    }
    set(e2) {
      return localStorage.setItem(this.addPrefix(e2.key), btoa(e2.value)), Promise.resolve({ value: true });
    }
    remove(e2) {
      return localStorage.getItem(this.addPrefix(e2.key)) ? (localStorage.removeItem(this.addPrefix(e2.key)), Promise.resolve({ value: true })) : Promise.reject("Item with given key does not exist");
    }
    clear() {
      for (const e2 in localStorage) 0 === e2.indexOf(this.PREFIX) && localStorage.removeItem(e2);
      return Promise.resolve({ value: true });
    }
    keys() {
      const e2 = Object.keys(localStorage).filter(((e3) => 0 === e3.indexOf(this.PREFIX))).map(this.removePrefix);
      return Promise.resolve({ value: e2 });
    }
    getPlatform() {
      return Promise.resolve({ value: "web" });
    }
  }
} }]);
