"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[541], { 9541: function(e, t, s) {
  s.r(t), s.d(t, { PreferencesWeb: function() {
    return r;
  } });
  var i = s(9895);
  class r extends i.Uw {
    constructor() {
      super(...arguments), this.group = "CapacitorStorage";
    }
    async configure({ group: e2 }) {
      "string" === typeof e2 && (this.group = e2);
    }
    async get(e2) {
      const t2 = this.impl.getItem(this.applyPrefix(e2.key));
      return { value: t2 };
    }
    async set(e2) {
      this.impl.setItem(this.applyPrefix(e2.key), e2.value);
    }
    async remove(e2) {
      this.impl.removeItem(this.applyPrefix(e2.key));
    }
    async keys() {
      const e2 = this.rawKeys().map(((e3) => e3.substring(this.prefix.length)));
      return { keys: e2 };
    }
    async clear() {
      for (const e2 of this.rawKeys()) this.impl.removeItem(e2);
    }
    async migrate() {
      var e2;
      const t2 = [], s2 = [], i2 = "_cap_", r2 = Object.keys(this.impl).filter(((e3) => 0 === e3.indexOf(i2)));
      for (const n of r2) {
        const r3 = n.substring(i2.length), a = null !== (e2 = this.impl.getItem(n)) && void 0 !== e2 ? e2 : "", { value: o } = await this.get({ key: r3 });
        "string" === typeof o ? s2.push(r3) : (await this.set({ key: r3, value: a }), t2.push(r3));
      }
      return { migrated: t2, existing: s2 };
    }
    async removeOld() {
      const e2 = "_cap_", t2 = Object.keys(this.impl).filter(((t3) => 0 === t3.indexOf(e2)));
      for (const s2 of t2) this.impl.removeItem(s2);
    }
    get impl() {
      return window.localStorage;
    }
    get prefix() {
      return "NativeStorage" === this.group ? "" : `${this.group}.`;
    }
    rawKeys() {
      return Object.keys(this.impl).filter(((e2) => 0 === e2.indexOf(this.prefix)));
    }
    applyPrefix(e2) {
      return this.prefix + e2;
    }
  }
} }]);
