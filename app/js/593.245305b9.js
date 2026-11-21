"use strict";
(self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || []).push([[593], { 4593: function(e, s, n) {
  n.r(s), n.d(s, { ScreenReaderWeb: function() {
    return i;
  } });
  var a = n(9895);
  class i extends a.Uw {
    async isEnabled() {
      throw this.unavailable("This feature is not available in the browser.");
    }
    async speak(e2) {
      if (!("speechSynthesis" in window)) throw this.unavailable("Browser does not support the SpeechSynthesis API");
      const s2 = new SpeechSynthesisUtterance(e2.value);
      e2.language && (s2.lang = e2.language), speechSynthesis.speak(s2);
    }
  }
} }]);
