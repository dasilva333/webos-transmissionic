(function() {
  var e = { 522: function(e2, t2, a2) {
    var n2 = { "./pwa-action-sheet.entry.js": [3807, 807], "./pwa-camera-modal-instance.entry.js": [7890, 890], "./pwa-camera-modal.entry.js": [9238, 238], "./pwa-camera.entry.js": [3099, 99], "./pwa-toast.entry.js": [5816, 816] };
    function l(e3) {
      if (!a2.o(n2, e3)) return Promise.resolve().then((function() {
        var t4 = new Error("Cannot find module '" + e3 + "'");
        throw t4.code = "MODULE_NOT_FOUND", t4;
      }));
      var t3 = n2[e3], l2 = t3[0];
      return a2.e(t3[1]).then((function() {
        return a2(l2);
      }));
    }
    l.keys = function() {
      return Object.keys(n2);
    }, l.id = 522, e2.exports = l;
  }, 1993: function(e2) {
    function t2(e3) {
      return Promise.resolve().then((function() {
        var t3 = new Error("Cannot find module '" + e3 + "'");
        throw t3.code = "MODULE_NOT_FOUND", t3;
      }));
    }
    t2.keys = function() {
      return [];
    }, t2.resolve = t2, t2.id = 1993, e2.exports = t2;
  }, 6700: function(e2, t2, a2) {
    var n2 = { "./af": 2786, "./af.js": 2786, "./ar": 867, "./ar-dz": 4130, "./ar-dz.js": 4130, "./ar-kw": 6135, "./ar-kw.js": 6135, "./ar-ly": 6440, "./ar-ly.js": 6440, "./ar-ma": 7702, "./ar-ma.js": 7702, "./ar-sa": 6040, "./ar-sa.js": 6040, "./ar-tn": 7100, "./ar-tn.js": 7100, "./ar.js": 867, "./az": 1083, "./az.js": 1083, "./be": 9808, "./be.js": 9808, "./bg": 8338, "./bg.js": 8338, "./bm": 7438, "./bm.js": 7438, "./bn": 8905, "./bn-bd": 6225, "./bn-bd.js": 6225, "./bn.js": 8905, "./bo": 1560, "./bo.js": 1560, "./br": 1278, "./br.js": 1278, "./bs": 622, "./bs.js": 622, "./ca": 2468, "./ca.js": 2468, "./cs": 5822, "./cs.js": 5822, "./cv": 877, "./cv.js": 877, "./cy": 7373, "./cy.js": 7373, "./da": 4780, "./da.js": 4780, "./de": 9740, "./de-at": 217, "./de-at.js": 217, "./de-ch": 894, "./de-ch.js": 894, "./de.js": 9740, "./dv": 5300, "./dv.js": 5300, "./el": 837, "./el.js": 837, "./en-au": 8348, "./en-au.js": 8348, "./en-ca": 7925, "./en-ca.js": 7925, "./en-gb": 2243, "./en-gb.js": 2243, "./en-ie": 6436, "./en-ie.js": 6436, "./en-il": 941, "./en-il.js": 941, "./en-in": 4175, "./en-in.js": 4175, "./en-nz": 6319, "./en-nz.js": 6319, "./en-sg": 1662, "./en-sg.js": 1662, "./eo": 2915, "./eo.js": 2915, "./es": 5655, "./es-do": 5251, "./es-do.js": 5251, "./es-mx": 6112, "./es-mx.js": 6112, "./es-us": 1146, "./es-us.js": 1146, "./es.js": 5655, "./et": 5603, "./et.js": 5603, "./eu": 7763, "./eu.js": 7763, "./fa": 6959, "./fa.js": 6959, "./fi": 1897, "./fi.js": 1897, "./fil": 2549, "./fil.js": 2549, "./fo": 4694, "./fo.js": 4694, "./fr": 4470, "./fr-ca": 3049, "./fr-ca.js": 3049, "./fr-ch": 2330, "./fr-ch.js": 2330, "./fr.js": 4470, "./fy": 5044, "./fy.js": 5044, "./ga": 9295, "./ga.js": 9295, "./gd": 2101, "./gd.js": 2101, "./gl": 8794, "./gl.js": 8794, "./gom-deva": 7884, "./gom-deva.js": 7884, "./gom-latn": 3168, "./gom-latn.js": 3168, "./gu": 5349, "./gu.js": 5349, "./he": 4206, "./he.js": 4206, "./hi": 94, "./hi.js": 94, "./hr": 316, "./hr.js": 316, "./hu": 2138, "./hu.js": 2138, "./hy-am": 1423, "./hy-am.js": 1423, "./id": 9218, "./id.js": 9218, "./is": 135, "./is.js": 135, "./it": 626, "./it-ch": 150, "./it-ch.js": 150, "./it.js": 626, "./ja": 9183, "./ja.js": 9183, "./jv": 4286, "./jv.js": 4286, "./ka": 2105, "./ka.js": 2105, "./kk": 7772, "./kk.js": 7772, "./km": 8758, "./km.js": 8758, "./kn": 3926, "./kn.js": 3926, "./ko": 3730, "./ko.js": 3730, "./ku": 1408, "./ku.js": 1408, "./ky": 3291, "./ky.js": 3291, "./lb": 6841, "./lb.js": 6841, "./lo": 5466, "./lo.js": 5466, "./lt": 7010, "./lt.js": 7010, "./lv": 7595, "./lv.js": 7595, "./me": 9861, "./me.js": 9861, "./mi": 5493, "./mi.js": 5493, "./mk": 5966, "./mk.js": 5966, "./ml": 7341, "./ml.js": 7341, "./mn": 5115, "./mn.js": 5115, "./mr": 370, "./mr.js": 370, "./ms": 9847, "./ms-my": 1237, "./ms-my.js": 1237, "./ms.js": 9847, "./mt": 2126, "./mt.js": 2126, "./my": 6165, "./my.js": 6165, "./nb": 4924, "./nb.js": 4924, "./ne": 6744, "./ne.js": 6744, "./nl": 3901, "./nl-be": 9814, "./nl-be.js": 9814, "./nl.js": 3901, "./nn": 3877, "./nn.js": 3877, "./oc-lnc": 2135, "./oc-lnc.js": 2135, "./pa-in": 5858, "./pa-in.js": 5858, "./pl": 4495, "./pl.js": 4495, "./pt": 9520, "./pt-br": 7971, "./pt-br.js": 7971, "./pt.js": 9520, "./ro": 6459, "./ro.js": 6459, "./ru": 1793, "./ru.js": 1793, "./sd": 950, "./sd.js": 950, "./se": 490, "./se.js": 490, "./si": 124, "./si.js": 124, "./sk": 4249, "./sk.js": 4249, "./sl": 4985, "./sl.js": 4985, "./sq": 1104, "./sq.js": 1104, "./sr": 9131, "./sr-cyrl": 9915, "./sr-cyrl.js": 9915, "./sr.js": 9131, "./ss": 5893, "./ss.js": 5893, "./sv": 8760, "./sv.js": 8760, "./sw": 1172, "./sw.js": 1172, "./ta": 7333, "./ta.js": 7333, "./te": 3110, "./te.js": 3110, "./tet": 2095, "./tet.js": 2095, "./tg": 7321, "./tg.js": 7321, "./th": 9041, "./th.js": 9041, "./tk": 9005, "./tk.js": 9005, "./tl-ph": 5768, "./tl-ph.js": 5768, "./tlh": 9444, "./tlh.js": 9444, "./tr": 2397, "./tr.js": 2397, "./tzl": 8254, "./tzl.js": 8254, "./tzm": 1106, "./tzm-latn": 699, "./tzm-latn.js": 699, "./tzm.js": 1106, "./ug-cn": 9288, "./ug-cn.js": 9288, "./uk": 7691, "./uk.js": 7691, "./ur": 3795, "./ur.js": 3795, "./uz": 6791, "./uz-latn": 588, "./uz-latn.js": 588, "./uz.js": 6791, "./vi": 5666, "./vi.js": 5666, "./x-pseudo": 4378, "./x-pseudo.js": 4378, "./yo": 5805, "./yo.js": 5805, "./zh-cn": 3839, "./zh-cn.js": 3839, "./zh-hk": 5726, "./zh-hk.js": 5726, "./zh-mo": 9913, "./zh-mo.js": 9913, "./zh-tw": 4152, "./zh-tw.js": 4152 };
    function l(e3) {
      var t3 = o(e3);
      return a2(t3);
    }
    function o(e3) {
      if (!a2.o(n2, e3)) {
        var t3 = new Error("Cannot find module '" + e3 + "'");
        throw t3.code = "MODULE_NOT_FOUND", t3;
      }
      return n2[e3];
    }
    l.keys = function() {
      return Object.keys(n2);
    }, l.resolve = o, e2.exports = l, l.id = 6700;
  }, 2307: function(e2, t2, a2) {
    "use strict";
    var n2 = a2(9004), l = a2(3640), o = a2(9963), s = a2(6252), i = a2(3577);
    const r = { slot: "end" }, d = { slot: "end" }, c = { slot: "end" };
    function u(e3, t3, a3, n3, l2, u2) {
      const p2 = (0, s.up)("ion-list-header"), m2 = (0, s.up)("ion-icon"), h2 = (0, s.up)("ion-label"), f2 = (0, s.up)("ion-item"), w2 = (0, s.up)("ion-menu-toggle"), g2 = (0, s.up)("ion-list"), b2 = (0, s.up)("ion-badge"), v2 = (0, s.up)("ion-content"), k2 = (0, s.up)("ion-infinite-scroll-content"), S2 = (0, s.up)("ion-infinite-scroll"), _2 = (0, s.up)("ion-footer"), y2 = (0, s.up)("ion-menu"), W2 = (0, s.up)("List"), L2 = (0, s.up)("ion-split-pane"), U2 = (0, s.up)("ion-app");
      return (0, s.wg)(), (0, s.j4)(U2, null, { default: (0, s.w5)((() => [(0, s.Wm)(L2, { contentId: "main-content", disabled: !e3.sharedState.expandMenu }, { default: (0, s.w5)((() => [(0, s.Wm)(y2, { contentId: "main-content", type: "overlay", "menu-id": "left", swipeGesture: e3.privateState.swipeEnabled, onIonDidClose: t3[6] || (t3[6] = (t4) => e3.closeTrackerList()), onIonDidOpen: t3[7] || (t3[7] = (t4) => e3.Utils.pushState()) }, { default: (0, s.w5)((() => [(0, s.wy)((0, s.Wm)(v2, { id: "navigation", ref: "navigation", scrollbar: "", class: (0, i.C_)({ separator: e3.sharedState.showTrackerList }) }, { default: (0, s.w5)((() => [(0, s.Wm)(g2, { id: "servers-list" }, { default: (0, s.w5)((() => [(0, s.Wm)(p2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.servers), 1)])), _: 1 }), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(e3.privateState.serverList, ((t4, a4) => ((0, s.wg)(), (0, s.j4)(w2, { class: "ion-activatable", "auto-hide": false, key: a4 }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: (t5) => e3.selectServer(a4), class: (0, i.C_)(["hydrated", { selected: e3.privateState.selectedServer === a4 }]), lines: "none", detail: false, button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, { slot: "start", ios: e3.serverOutline, md: e3.serverSharp }, null, 8, ["ios", "md"]), (0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(t4.name), 1)])), _: 2 }, 1024), (0, s.Wm)(m2, { slot: "end", ios: e3.pencilOutline, md: e3.pencilSharp, onClick: (t5) => e3.openServerDetailsModal(a4, t5), tabindex: "0", "aria-label": e3.Locale.serverDetails }, null, 8, ["ios", "md", "onClick", "aria-label"])])), _: 2 }, 1032, ["onClick", "class"])])), _: 2 }, 1024)))), 128)), (0, s.Wm)(w2, { "auto-hide": false }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: t3[0] || (t3[0] = (t4) => e3.addServer(t4)), class: "hydrated", lines: "none", detail: false, button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, { slot: "start", ios: e3.addOutline, md: e3.addSharp }, null, 8, ["ios", "md"]), (0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.add), 1)])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }), (0, s.wy)((0, s.Wm)(g2, { id: "trackers-list" }, { default: (0, s.w5)((() => [(0, s.Wm)(p2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.LocaleController.getForm("tracker", "other")), 1)])), _: 1 }), (0, s.Wm)(w2, { "auto-hide": false }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: t3[1] || (t3[1] = (t4) => e3.openTrackerList(t4)), id: "tracker-dropdown", lines: "none", detail: false, button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.privateState.selectedTracker ? e3.Utils.trackerDomain(e3.privateState.selectedTracker).protocol + "://" + e3.Utils.trackerDomain(e3.privateState.selectedTracker).domain : e3.Locale.filters.all), 1)])), _: 1 }), (0, s._)("div", r, [(0, s.Wm)(m2, { ios: e3.caretDownOutline, md: e3.caretDownSharp }, null, 8, ["ios", "md"])])])), _: 1 })])), _: 1 })])), _: 1 }, 512), [[o.F8, !e3.sharedState.showTrackerList]]), (0, s.Wm)(g2, { id: "filters-list" }, { default: (0, s.w5)((() => [(0, s.Wm)(p2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.filters.filters), 1)])), _: 1 }), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(e3.privateState.filters, ((t4, a4) => ((0, s.wg)(), (0, s.j4)(w2, { "auto-hide": false, key: a4 }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: (t5) => e3.privateState.selectedFilter = a4, lines: "none", class: (0, i.C_)({ selected: e3.privateState.selectedFilter === a4 }), button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, { slot: "start", ios: t4.iosIcon, md: t4.mdIcon }, null, 8, ["ios", "md"]), (0, s.Wm)(h2, { class: "text-transform" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(t4.label()), 1)])), _: 2 }, 1024), (0, s._)("div", d, [(0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.privateState.torrentFilters[t4.id]), 1)])), _: 2 }, 1024)])])), _: 2 }, 1032, ["onClick", "class"])])), _: 2 }, 1024)))), 128))])), _: 1 })])), _: 1 }, 8, ["class"]), [[o.F8, !e3.privateState.trackerListOpened || e3.sharedState.showTrackerList]]), (0, s.wy)((0, s.Wm)(v2, { id: "trackers", ref: "trackers" }, { default: (0, s.w5)((() => [(0, s.Wm)(g2, null, { default: (0, s.w5)((() => [(0, s.Wm)(p2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.LocaleController.getForm("tracker", "other")), 1)])), _: 1 }), (0, s.Wm)(w2, { "auto-hide": false }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: t3[2] || (t3[2] = (t4) => e3.selectTracker()), lines: "none", class: (0, i.C_)({ selected: "" == e3.privateState.selectedTracker }), button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.filters.all), 1)])), _: 1 })])), _: 1 }, 8, ["class"])])), _: 1 }), ((0, s.wg)(true), (0, s.iD)(s.HY, null, (0, s.Ko)(e3.trackerList, ((t4) => ((0, s.wg)(), (0, s.j4)(w2, { "auto-hide": false, key: t4.id }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: (a4) => e3.selectTracker(t4), lines: "none", class: (0, i.C_)({ selected: e3.privateState.selectedTracker == t4.announce }), button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(h2, { title: t4.announce }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(t4.announce), 1)])), _: 2 }, 1032, ["title"]), (0, s._)("div", c, [(0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(t4.ids.length), 1)])), _: 2 }, 1024)])])), _: 2 }, 1032, ["onClick", "class"])])), _: 2 }, 1024)))), 128)), e3.sharedState.showTrackerList ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.j4)(S2, { key: 0, onIonInfinite: t3[3] || (t3[3] = (t4) => e3.displayTrackers(t4)), threshold: "100px" }, { default: (0, s.w5)((() => [(0, s.Wm)(k2, { "loading-spinner": "circular" })])), _: 1 }))])), _: 1 })])), _: 1 }, 512), [[o.F8, e3.privateState.trackerListOpened || e3.sharedState.showTrackerList]]), (0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(g2, { id: "other-list" }, { default: (0, s.w5)((() => [(0, s.Wm)(w2, { "auto-hide": false }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: t3[4] || (t3[4] = (t4) => e3.openSettingsModal()), lines: "none", detail: false, class: "hydrated", button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, { slot: "start", ios: e3.settingsOutline, md: e3.settingsSharp }, null, 8, ["ios", "md"]), (0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.settings), 1)])), _: 1 })])), _: 1 })])), _: 1 }), (0, s.Wm)(w2, { "auto-hide": false }, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { onClick: t3[5] || (t3[5] = (t4) => e3.openAboutModal()), lines: "none", detail: false, class: "hydrated", button: "" }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, { slot: "start", ios: e3.helpCircleOutline, md: e3.helpCircleSharp }, null, 8, ["ios", "md"]), (0, s.Wm)(h2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.about.about), 1)])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }, 8, ["swipeGesture"]), (0, s.Wm)(W2, { id: "main-content" })])), _: 1 }, 8, ["disabled"])])), _: 1 });
    }
    var p = a2(9461), m = a2(8903);
    const h = { class: "annotation" }, f = { href: "http://country.is/", target: "_blank", rel: "noopener" }, w = { class: "ion-padding small" }, g = { class: "ion-padding small" }, b = ["href"], v = { class: "ion-padding small" };
    function k(e3, t3, a3, n3, l2, o2) {
      const r2 = (0, s.up)("ion-back-button"), d2 = (0, s.up)("ion-buttons"), c2 = (0, s.up)("ion-title"), u2 = (0, s.up)("ion-icon"), p2 = (0, s.up)("ion-button"), m2 = (0, s.up)("ion-toolbar"), k2 = (0, s.up)("ion-header"), S2 = (0, s.up)("ion-label"), _2 = (0, s.up)("ion-list-header"), y2 = (0, s.up)("ion-select-option"), W2 = (0, s.up)("ion-select"), L2 = (0, s.up)("ion-item"), U2 = (0, s.up)("ion-toggle"), C2 = (0, s.up)("ion-list"), T2 = (0, s.up)("ion-input"), I2 = (0, s.up)("ion-checkbox"), z2 = (0, s.up)("ion-content"), D2 = (0, s.up)("ion-page");
      return (0, s.wg)(), (0, s.j4)(D2, null, { default: (0, s.w5)((() => [(0, s.Wm)(k2, { translucent: true }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, null, { default: (0, s.w5)((() => [(0, s.Wm)(d2, { slot: "start" }, { default: (0, s.w5)((() => [(0, s.Wm)(r2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, s.Wm)(c2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.settings), 1)])), _: 1 }), (0, s.Wm)(d2, { slot: "end" }, { default: (0, s.w5)((() => [(0, s.Wm)(p2, { onClick: t3[1] || (t3[1] = (t4) => e3.saveSettings()), fill: "clear" }, { default: (0, s.w5)((() => [(0, s.Wm)(u2, { slot: "icon-only", ios: e3.saveOutline, md: e3.saveSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }), (0, s.Wm)(z2, { fullscreen: true, class: "ion-padding", ref: "content" }, { default: (0, s.w5)((() => [(0, s.Wm)(C2, null, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.interface), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.language), 1)])), _: 1 }), (0, s.Wm)(W2, { placeholder: "Select One", modelValue: e3.sharedState.language, "onUpdate:modelValue": t3[2] || (t3[2] = (t4) => e3.sharedState.language = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, s.w5)((() => [(0, s.Wm)(y2, { value: "default" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.default), 1)])), _: 1 }), (0, s.Wm)(y2, { value: "cs" }, { default: (0, s.w5)((() => [(0, s.Uk)("\u010Ce\u0161tina")])), _: 1 }), (0, s.Wm)(y2, { value: "de" }, { default: (0, s.w5)((() => [(0, s.Uk)("Deutsch")])), _: 1 }), (0, s.Wm)(y2, { value: "de-at" }, { default: (0, s.w5)((() => [(0, s.Uk)("\xD6sterreichisches Deutsch")])), _: 1 }), (0, s.Wm)(y2, { value: "el" }, { default: (0, s.w5)((() => [(0, s.Uk)("\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC")])), _: 1 }), (0, s.Wm)(y2, { value: "en" }, { default: (0, s.w5)((() => [(0, s.Uk)("English")])), _: 1 }), (0, s.Wm)(y2, { value: "es-CL" }, { default: (0, s.w5)((() => [(0, s.Uk)("Espa\xF1ol chileno")])), _: 1 }), (0, s.Wm)(y2, { value: "es-CR" }, { default: (0, s.w5)((() => [(0, s.Uk)("Espa\xF1ol costarricense")])), _: 1 }), (0, s.Wm)(y2, { value: "fr" }, { default: (0, s.w5)((() => [(0, s.Uk)("Fran\xE7ais")])), _: 1 }), (0, s.Wm)(y2, { value: "fr-ch" }, { default: (0, s.w5)((() => [(0, s.Uk)("Fran\xE7ais de Suisse")])), _: 1 }), (0, s.Wm)(y2, { value: "hu" }, { default: (0, s.w5)((() => [(0, s.Uk)("Magyar")])), _: 1 }), (0, s.Wm)(y2, { value: "it" }, { default: (0, s.w5)((() => [(0, s.Uk)("Italiano")])), _: 1 }), (0, s.Wm)(y2, { value: "ko" }, { default: (0, s.w5)((() => [(0, s.Uk)("\uD55C\uAD6D\uC5B4")])), _: 1 }), (0, s.Wm)(y2, { value: "nl" }, { default: (0, s.w5)((() => [(0, s.Uk)("Nederlands")])), _: 1 }), (0, s.Wm)(y2, { value: "pl" }, { default: (0, s.w5)((() => [(0, s.Uk)("Polskie")])), _: 1 }), (0, s.Wm)(y2, { value: "pt" }, { default: (0, s.w5)((() => [(0, s.Uk)("Portugu\xEAs")])), _: 1 }), (0, s.Wm)(y2, { value: "pt-br" }, { default: (0, s.w5)((() => [(0, s.Uk)("Portugu\xEAs Brasileiro")])), _: 1 }), (0, s.Wm)(y2, { value: "ru" }, { default: (0, s.w5)((() => [(0, s.Uk)("P\u0443\u0441\u0441\u043A\u0438\u0439")])), _: 1 }), (0, s.Wm)(y2, { value: "sk" }, { default: (0, s.w5)((() => [(0, s.Uk)("Sloven\u010Dina")])), _: 1 }), (0, s.Wm)(y2, { value: "uk" }, { default: (0, s.w5)((() => [(0, s.Uk)("\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430")])), _: 1 }), (0, s.Wm)(y2, { value: "zh-cn" }, { default: (0, s.w5)((() => [(0, s.Uk)("\u7B80\u4F53\u4E2D\u6587")])), _: 1 }), (0, s.Wm)(y2, { value: "zh-tw" }, { default: (0, s.w5)((() => [(0, s.Uk)("\u7E41\u9AD4\u4E2D\u6587")])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.theme), 1)])), _: 1 }), (0, s.Wm)(W2, { placeholder: "Select One", modelValue: e3.sharedState.colorScheme, "onUpdate:modelValue": t3[3] || (t3[3] = (t4) => e3.sharedState.colorScheme = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, s.w5)((() => [(0, s.Wm)(y2, { value: "default" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.default), 1)])), _: 1 }), (0, s.Wm)(y2, { value: "light" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.light), 1)])), _: 1 }), (0, s.Wm)(y2, { value: "dark" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.dark), 1)])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.speedUnit), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.useBits, "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.sharedState.useBits = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.compactMode), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.compactMode, "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.sharedState.compactMode = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.expandSideMenu), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.expandMenu, "onUpdate:modelValue": t3[6] || (t3[6] = (t4) => e3.sharedState.expandMenu = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.showTrackerList), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.showTrackerList, "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.sharedState.showTrackerList = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.displayFlag) + "*", 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.ipFlags, "onUpdate:modelValue": t3[8] || (t3[8] = (t4) => e3.sharedState.ipFlags = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s._)("div", h, [(0, s.Uk)(" * " + (0, i.zw)(e3.Locale.formatString(e3.Locale.useIpApi, "country.is")) + " ", 1), (0, s._)("a", f, [(0, s.Wm)(u2, { slot: "icon-only", ios: e3.informationCircleOutline, md: e3.informationCircleSharp }, null, 8, ["ios", "md"])])])])), _: 1 }), (0, s.Wm)(C2, null, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.connection), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.refreshInterval), 1)])), _: 1 }), (0, s.Wm)(T2, { type: "number", modelValue: e3.sharedState.refreshInterval, "onUpdate:modelValue": t3[9] || (t3[9] = (t4) => e3.sharedState.refreshInterval = t4), modelModifiers: { number: true } }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.connectionTimeout), 1)])), _: 1 }), (0, s.Wm)(T2, { type: "number", modelValue: e3.sharedState.timeout, "onUpdate:modelValue": t3[10] || (t3[10] = (t4) => e3.sharedState.timeout = t4), modelModifiers: { number: true } }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 }), (0, s.Wm)(C2, null, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.searchBy), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.name), 1)])), _: 1 }), (0, s.Wm)(I2, { slot: "start", modelValue: e3.sharedState.searchByName, "onUpdate:modelValue": t3[11] || (t3[11] = (t4) => e3.sharedState.searchByName = t4), modelModifiers: { boolean: true } }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.downloadDir), 1)])), _: 1 }), (0, s.Wm)(I2, { slot: "start", modelValue: e3.sharedState.searchByDirectory, "onUpdate:modelValue": t3[12] || (t3[12] = (t4) => e3.sharedState.searchByDirectory = t4), modelModifiers: { boolean: true } }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 }), (0, s.Wm)(C2, null, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.preset), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.rememberSelectedPreset), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.rememberSelectedPreset, "onUpdate:modelValue": t3[13] || (t3[13] = (t4) => e3.sharedState.rememberSelectedPreset = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s._)("div", w, [(0, s.Wm)(p2, { size: "default", onClick: e3.exportPreset }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.export), 1)])), _: 1 }, 8, ["onClick"]), (0, s.Wm)(p2, { size: "default", onClick: e3.inputPreset }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.import), 1)])), _: 1 }, 8, ["onClick"]), (0, s._)("input", { type: "file", id: "importPreset", accept: ".json", onChange: t3[14] || (t3[14] = (...t4) => e3.importPreset && e3.importPreset(...t4)) }, null, 32)])])), _: 1 }), e3.protocolHandlerAvailable ? ((0, s.wg)(), (0, s.j4)(C2, { key: 0 }, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.protocols), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.openMagnetLinks), 1)])), _: 1 }), (0, s.Wm)(U2, { modelValue: e3.sharedState.openMagnetLinks, "onUpdate:modelValue": t3[15] || (t3[15] = (t4) => e3.sharedState.openMagnetLinks = t4) }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 })) : (0, s.kq)("", true), e3.bookmarkletEnabled ? ((0, s.wg)(), (0, s.j4)(C2, { key: 1 }, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.bookmarklet), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(L2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.bookmarkletDetail), 1)])), _: 1 }), (0, s._)("div", g, [(0, s._)("a", { href: e3.bookmarkletScript }, [(0, s.Wm)(p2, { size: "default" }, { default: (0, s.w5)((() => [(0, s.Uk)("Download with Transmissionic")])), _: 1 })], 8, b)])])), _: 1 })) : (0, s.kq)("", true), (0, s.Wm)(C2, null, { default: (0, s.w5)((() => [(0, s.Wm)(_2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.reset), 1)])), _: 1 })])), _: 1 }), (0, s._)("div", v, [(0, s.Wm)(p2, { size: "default", onClick: t3[16] || (t3[16] = (t4) => e3.resetSettings()) }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.resetSettings), 1)])), _: 1 })])])), _: 1 })])), _: 1 }, 512)])), _: 1 });
    }
    var S = a2(5145), _ = a2(538), y = a2(3983), W = a2(3662), L = a2(8764)["lW"];
    const U = (e3) => {
      let t3 = 0, a3 = (getSelection() || "").toString();
      const n3 = /^[0-9a-fA-F]{40}$/, l2 = /^magnet:\?xt=urn:btih:[0-9a-zA-Z]{32,}(&.+)?$/;
      a3.match(n3) || a3.match(l2) ? t3 = 4 : document.querySelectorAll("a").forEach(((e4) => {
        t3 < 1 && e4.href.match(/\/(torrent|download|get|dl)\W/) ? (a3 = "url:" + e4.href, t3 = 1) : t3 < 2 && e4.href.match(/\.torrent$/) ? (a3 = "url:" + e4.href, t3 = 2) : t3 < 3 && e4.href.match(l2) && (a3 = e4.href, t3 = 3);
      })), t3 ? window.open(e3 + "#" + encodeURIComponent(a3)) : alert("No torrent or magnet link found.");
    };
    var C = (0, s.aZ)({ name: "Settings", data() {
      return { sharedState: y.P.state, privateState: {} };
    }, components: { IonContent: n2.W2, IonHeader: n2.Gu, IonTitle: n2.wd, IonToolbar: n2.sr, IonList: n2.q_, IonItem: n2.Ie, IonLabel: n2.Q$, IonListHeader: n2.yh, IonSelect: n2.t9, IonSelectOption: n2.n0, IonIcon: n2.gu, IonButtons: n2.Sm, IonButton: n2.YG, IonPage: n2._i, IonInput: n2.pK, IonBackButton: n2.oU, IonToggle: n2.ho, IonCheckbox: n2.nz }, computed: { bookmarkletEnabled() {
      return !(0, l.a)("electron") && !(0, l.a)("capacitor");
    }, protocolHandlerAvailable() {
      return !(0, l.a)("electron") && !(0, l.a)("capacitor") && void 0 !== navigator.registerProtocolHandler;
    } }, setup() {
      S.c.pushState();
      const e3 = window.location.href.replace(window.location.hash, ""), t3 = `javascript:(${U})("${e3}");`;
      return { Locale: _.g, bookmarkletScript: t3, saveOutline: m.Z8j, saveSharp: m.qDY, informationCircleOutline: m.yo2, informationCircleSharp: m.ztb };
    }, mounted() {
      S.c.customScrollbar(this.$refs.content);
    }, methods: { saveSettings() {
      y.P.saveSettings(), S.c.responseToast("success"), S.c.registerMagnetLinkProtocol();
    }, modalClose() {
      n2.Fy.dismiss();
    }, async resetSettings() {
      const e3 = await n2.Cl.create({ header: _.g.prompt.confirmation, message: _.g.prompt.reset, buttons: [{ text: _.g.actions.cancel, role: "cancel" }, { text: _.g.prompt.confirm, handler: () => {
        y.P.resetSettings();
      } }] });
      return e3.present();
    }, exportPreset() {
      y.P.loadPresets().then(((e3) => {
        S.c.downloadFile(JSON.stringify(e3), "preset.json", "application/json");
      }));
    }, inputPreset() {
      var _a;
      (_a = document.getElementById("importPreset")) == null ? void 0 : _a.click();
    }, async importPreset(e3) {
      const t3 = e3.target.files;
      if (t3) {
        let a3 = {};
        const n3 = L.from(await W.X.readFile(t3[0])).toString();
        try {
          a3 = JSON.parse(n3);
        } catch (e4) {
          a3 = {};
        }
        this.validatePreset(a3) ? (y.P.savePresets(a3), S.c.responseToast("success")) : S.c.responseToast("Invalid preset file");
      }
    }, validatePreset(e3) {
      let t3 = false;
      const a3 = Object.keys(e3);
      if (a3.length > 0) {
        const n3 = Object.keys(e3[a3[0]]);
        n3.includes("start") && n3.includes("downloadDir") && n3.includes("bandwidthPriority") && n3.includes("other") && (t3 = true);
      }
      return t3;
    } } }), T = a2(3744);
    const I = (0, T.Z)(C, [["render", k], ["__scopeId", "data-v-11f18700"]]);
    var z = I;
    function D(e3, t3, a3, n3, l2, o2) {
      const r2 = (0, s.up)("ion-back-button"), d2 = (0, s.up)("ion-buttons"), c2 = (0, s.up)("ion-title"), u2 = (0, s.up)("ion-icon"), p2 = (0, s.up)("ion-button"), m2 = (0, s.up)("ion-toolbar"), h2 = (0, s.up)("ion-header"), f2 = (0, s.up)("ion-label"), w2 = (0, s.up)("ion-list-header"), g2 = (0, s.up)("ion-input"), b2 = (0, s.up)("ion-item"), v2 = (0, s.up)("ion-toggle"), k2 = (0, s.up)("ion-list"), S2 = (0, s.up)("ion-textarea"), _2 = (0, s.up)("ion-content"), y2 = (0, s.up)("ion-page");
      return (0, s.wg)(), (0, s.j4)(y2, null, { default: (0, s.w5)((() => [(0, s.Wm)(h2, { translucent: true }, { default: (0, s.w5)((() => [(0, s.Wm)(m2, null, { default: (0, s.w5)((() => [(0, s.Wm)(d2, { slot: "start" }, { default: (0, s.w5)((() => [(0, s.Wm)(r2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, s.Wm)(c2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.add ? e3.Locale.newServer : e3.Locale.serverDetails), 1)])), _: 1 }), (0, s.Wm)(d2, { slot: "end" }, { default: (0, s.w5)((() => [e3.add ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.j4)(p2, { key: 0, onClick: t3[1] || (t3[1] = (t4) => e3.deleteSettings()), fill: "clear", "aria-label": e3.Locale.actions.delete }, { default: (0, s.w5)((() => [(0, s.Wm)(u2, { slot: "icon-only", ios: e3.trashOutline, md: e3.trashSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"])), (0, s.Wm)(p2, { onClick: t3[2] || (t3[2] = (t4) => e3.saveSettings()), fill: "clear", "aria-label": "Save" }, { default: (0, s.w5)((() => [e3.add ? (0, s.kq)("", true) : ((0, s.wg)(), (0, s.j4)(u2, { key: 0, slot: "icon-only", ios: e3.saveOutline, md: e3.saveSharp }, null, 8, ["ios", "md"])), e3.add ? ((0, s.wg)(), (0, s.j4)(u2, { key: 1, slot: "icon-only", ios: e3.checkmarkOutline, md: e3.checkmarkSharp }, null, 8, ["ios", "md"])) : (0, s.kq)("", true)])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }), (0, s.Wm)(_2, { fullscreen: true, ref: "content", class: "ion-padding" }, { default: (0, s.w5)((() => [(0, s.Wm)(k2, null, { default: (0, s.w5)((() => [(0, s.Wm)(w2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.general), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.name), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.name, "onUpdate:modelValue": t3[3] || (t3[3] = (t4) => e3.newConf.name = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.hostname), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.host, "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.newConf.host = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.port), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.port, "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.newConf.port = t4), modelModifiers: { number: true }, type: "number", placeholder: "9091" }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.rpcPath), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.path, "onUpdate:modelValue": t3[6] || (t3[6] = (t4) => e3.newConf.path = t4), placeholder: "/transmission/rpc" }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, null, { default: (0, s.w5)((() => [(0, s.Uk)("HTTPS")])), _: 1 }), (0, s.Wm)(v2, { modelValue: e3.newConf.https, "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.newConf.https = t4) }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 }), (0, s.Wm)(k2, null, { default: (0, s.w5)((() => [(0, s.Wm)(w2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.auth), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.username), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.auth.username, "onUpdate:modelValue": t3[8] || (t3[8] = (t4) => e3.newConf.auth.username = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, { position: "floating" }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.password), 1)])), _: 1 }), (0, s.Wm)(g2, { modelValue: e3.newConf.auth.password, "onUpdate:modelValue": t3[9] || (t3[9] = (t4) => e3.newConf.auth.password = t4), type: "password" }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 }), e3.pathMappingEnabled ? ((0, s.wg)(), (0, s.j4)(k2, { key: 0 }, { default: (0, s.w5)((() => [(0, s.Wm)(w2, null, { default: (0, s.w5)((() => [(0, s.Wm)(f2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.pathMapping), 1)])), _: 1 })])), _: 1 }), (0, s.Wm)(b2, null, { default: (0, s.w5)((() => [(0, s.Wm)(S2, { rows: "3", placeholder: e3.placeholder, modelValue: e3.newConf.pathMapping, "onUpdate:modelValue": t3[10] || (t3[10] = (t4) => e3.newConf.pathMapping = t4) }, null, 8, ["placeholder", "modelValue"])])), _: 1 })])), _: 1 })) : (0, s.kq)("", true)])), _: 1 }, 512)])), _: 1 });
    }
    var P = a2(6486), V = (0, s.aZ)({ name: "ServerDetails", props: { serverList: { type: Object, default: function() {
      return {};
    } }, serverId: { type: Number, default: function() {
      return 0;
    } }, add: { type: Boolean } }, components: { IonContent: n2.W2, IonHeader: n2.Gu, IonTitle: n2.wd, IonToolbar: n2.sr, IonList: n2.q_, IonItem: n2.Ie, IonLabel: n2.Q$, IonListHeader: n2.yh, IonIcon: n2.gu, IonButtons: n2.Sm, IonButton: n2.YG, IonToggle: n2.ho, IonInput: n2.pK, IonPage: n2._i, IonBackButton: n2.oU, IonTextarea: n2.g2 }, setup() {
      S.c.pushState();
      const e3 = `${_.g.example}\r/mnt/ssd = \\\\192.168.1.1\\ssd\r/home/user/Downloads = Z:\\Downloads`;
      return { Locale: _.g, placeholder: e3, trashOutline: m.gtu, trashSharp: m.CmT, saveOutline: m.Z8j, saveSharp: m.qDY, checkmarkOutline: m.TjA, checkmarkSharp: m.ARW };
    }, mounted() {
      S.c.customScrollbar(this.$refs.content);
    }, computed: { newConf: function() {
      let e3;
      return this.serverId < this.serverList.length ? (e3 = P.clone(this.serverList[this.serverId]), e3.auth = P.clone(this.serverList[this.serverId]).auth || {}) : e3 = { auth: {} }, e3;
    }, pathMappingEnabled: function() {
      return (0, l.a)("electron");
    } }, methods: { async saveSettings() {
      this.newConf.name || (this.newConf.name = this.newConf.host || `Server #${this.serverList.length + 1}`);
      const e3 = P.clone(this.serverList);
      e3[this.serverId] = P.clone(this.newConf), e3[this.serverId].auth.username && e3[this.serverId].auth.password || delete e3[this.serverId].auth, y.P.saveServerList(e3), Object(this.serverList)[this.serverId] = e3[this.serverId], this.savedToast(), this.add && this.modalClose();
    }, async deleteSettings() {
      const e3 = await n2.Cl.create({ header: _.g.prompt.confirmation, message: _.g.formatString(_.g.prompt["delete"], `"${this.serverList[this.serverId].name}"`), buttons: [{ text: _.g.actions.cancel, role: "cancel" }, { text: _.g.prompt.confirm, handler: () => {
        Object(this.serverList).splice(this.serverId, 1), y.P.saveServerList(this.serverList), this.modalClose();
      } }] });
      return e3.present();
    }, modalClose() {
      n2.Fy.dismiss();
    }, async savedToast() {
      S.c.responseToast("success");
    } } });
    const O = (0, T.Z)(V, [["render", D]]);
    var j = O, x = a2(4104);
    const A = (e3) => ((0, s.dD)("data-v-2b1cf922"), e3 = e3(), (0, s.Cn)(), e3), B = { class: "app-details" }, M = ["src"], F = A((() => (0, s._)("a", { href: "https://github.com/6c65726f79/Transmissionic", target: "_blank", rel: "noopener" }, "https://github.com/6c65726f79/Transmissionic", -1))), E = A((() => (0, s._)("a", { href: "https://poeditor.com/join/project?hash=sbVnI9eo3d", target: "_blank", rel: "noopener" }, "https://poeditor.com/join/project?hash=sbVnI9eo3d", -1))), R = { key: 0 }, q = { key: 1 }, H = ["href"];
    function $(e3, t3, a3, n3, l2, o2) {
      const r2 = (0, s.up)("ion-back-button"), d2 = (0, s.up)("ion-buttons"), c2 = (0, s.up)("ion-title"), u2 = (0, s.up)("ion-toolbar"), p2 = (0, s.up)("ion-header"), m2 = (0, s.up)("ion-button"), h2 = (0, s.up)("ion-content"), f2 = (0, s.up)("ion-page");
      return (0, s.wg)(), (0, s.j4)(f2, null, { default: (0, s.w5)((() => [(0, s.Wm)(p2, { translucent: true }, { default: (0, s.w5)((() => [(0, s.Wm)(u2, null, { default: (0, s.w5)((() => [(0, s.Wm)(d2, { slot: "start" }, { default: (0, s.w5)((() => [(0, s.Wm)(r2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, s.Wm)(c2, null, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.about.about), 1)])), _: 1 })])), _: 1 })])), _: 1 }), (0, s.Wm)(h2, { fullscreen: true, class: "ion-padding", ref: "content" }, { default: (0, s.w5)((() => [(0, s._)("div", B, [(0, s._)("img", { src: e3.iconSrc, alt: "Logo" }, null, 8, M), (0, s._)("h4", null, "Transmissionic " + (0, i.zw)(e3.appVersion), 1)]), (0, s._)("p", null, (0, i.zw)(e3.Locale.about.description), 1), (0, s._)("p", null, [(0, s.Uk)((0, i.zw)(e3.formatText(e3.Locale.about.github).before) + " ", 1), F, (0, s.Uk)(" " + (0, i.zw)(e3.formatText(e3.Locale.about.github).after), 1)]), (0, s._)("p", null, [(0, s.Uk)((0, i.zw)(e3.formatText(e3.Locale.about.poeditor).before) + " ", 1), E, (0, s.Uk)(" " + (0, i.zw)(e3.formatText(e3.Locale.about.poeditor).after), 1)]), e3.isWebUI ? ((0, s.wg)(), (0, s.iD)("p", R, [(0, s.Wm)(m2, { size: "default", onClick: t3[1] || (t3[1] = (t4) => e3.checkForUpdates()) }, { default: (0, s.w5)((() => [(0, s.Uk)((0, i.zw)(e3.Locale.checkUpdates), 1)])), _: 1 })])) : (0, s.kq)("", true), e3.updateAvailable && e3.downloadUrl ? ((0, s.wg)(), (0, s.iD)("p", q, [(0, s._)("strong", null, (0, i.zw)(e3.formatText(e3.Locale.updateAvailable).before), 1), (0, s._)("a", { href: e3.downloadUrl, target: "_blank", rel: "noopener" }, (0, i.zw)(e3.newVersion), 9, H), (0, s._)("strong", null, (0, i.zw)(e3.formatText(e3.Locale.updateAvailable).after), 1)])) : (0, s.kq)("", true)])), _: 1 }, 512)])), _: 1 });
    }
    var Z = (0, s.aZ)({ name: "About", components: { IonContent: n2.W2, IonHeader: n2.Gu, IonTitle: n2.wd, IonToolbar: n2.sr, IonButton: n2.YG, IonButtons: n2.Sm, IonPage: n2._i, IonBackButton: n2.oU }, data() {
      return { updateAvailable: false, newVersion: "", downloadUrl: "" };
    }, setup() {
      return S.c.pushState(), { Locale: _.g, iconSrc: "./assets/icon/favicon.png" };
    }, mounted() {
      S.c.customScrollbar(this.$refs.content);
    }, computed: { appVersion: function() {
      return "v1.8.0";
    }, isWebUI: function() {
      return !(0, l.a)("electron") && !(0, l.a)("capacitor");
    } }, methods: { modalClose() {
      n2.Fy.dismiss();
    }, formatText(e3) {
      const t3 = _.g.formatString(e3, "", ""), a3 = e3.indexOf("{0}");
      return { before: t3.substring(0, a3), after: t3.substring(a3) };
    }, checkForUpdates() {
      fetch("https://api.github.com/repos/6c65726f79/Transmissionic/releases/latest").then((async (e3) => {
        S.c.responseToast("success");
        const t3 = await e3.json();
        t3.prerelease || (this.updateAvailable = this.isNewerVersion(this.appVersion, t3.name), this.newVersion = t3.name, this.downloadUrl = `https://github.com/6c65726f79/Transmissionic/releases/tag/${t3.name}`);
      }));
    }, isNewerVersion(e3, t3) {
      if (e3 == t3) return false;
      const a3 = e3.substring(1).split("."), n3 = t3.substring(1).split(".");
      for (let l2 = 0; l2 < n3.length; l2++) {
        const e4 = parseInt(n3[l2]), t4 = parseInt(a3[l2]);
        if (isNaN(e4) || isNaN(t4)) {
          if (isNaN(t4)) return false;
        } else {
          if (e4 > t4) return true;
          if (e4 < t4) return false;
        }
      }
      return false;
    } } });
    const N = (0, T.Z)(Z, [["render", $], ["__scopeId", "data-v-2b1cf922"]]);
    var Q = N, Y = a2(3502), G = a2(6971), K = a2(1315), X = a2(125), J = (0, s.aZ)({ name: "App", components: { List: x["default"], IonApp: n2.dr, IonContent: n2.W2, IonIcon: n2.gu, IonItem: n2.Ie, IonLabel: n2.Q$, IonList: n2.q_, IonListHeader: n2.yh, IonMenu: n2.z0, IonMenuToggle: n2.zc, IonSplitPane: n2.jI, IonFooter: n2.fr, IonBadge: n2.yp, IonInfiniteScroll: n2.ju, IonInfiniteScrollContent: n2.MB }, data() {
      return { sharedState: y.P.state, privateState: { selectedServer: 0, selectedFilter: 0, selectedTracker: "", selectedIds: [], refresh: null, torrentList: [], torrentFilters: [], serverList: [], displayTrackerCount: 0, fullTrackerList: [], swipeEnabled: true, trackerListOpened: false, connectionStatus: { connected: false, loading: true, error: "", sessionArguments: null }, filters: [{ id: 0, value: "all", label: () => _.g.filters.all, iosIcon: m.Y1P, mdIcon: m.TL$ }, { id: 1, value: "active", label: () => _.g.filters.active, iosIcon: m.PjC, mdIcon: m.iy }, { id: 2, value: "downloading", label: () => _.g.filters.downloading, iosIcon: m.V30, mdIcon: m.Tbd }, { id: 3, value: "seeding", label: () => _.g.filters.seeding, iosIcon: m.ok5, mdIcon: m.cb1 }, { id: 4, value: "completed", label: () => _.g.filters.completed, iosIcon: m.NHs, mdIcon: m.WXQ }, { id: 5, value: "stopped", label: () => _.g.filters.stopped, iosIcon: m.RR6, mdIcon: m.utN }, { id: 6, value: "error", label: () => _.g.error.error, iosIcon: m.OoB, mdIcon: m.fki }, { id: 7, value: "queued", label: () => _.g.filters.queued, iosIcon: m.Go2, mdIcon: m.T07 }, { id: 8, value: "verifying", label: () => _.g.filters.verifying, iosIcon: m.Lk3, mdIcon: m.f0A }, { id: 9, value: "selected", label: () => G.A.getPlural("selected", 1), iosIcon: m.Nwd, mdIcon: m.rhP }] } };
    }, provide() {
      return { connectionStatus: this.privateState.connectionStatus, serverCount: (0, s.Fl)((() => this.privateState.serverList.length)), torrentList: (0, s.Fl)((() => this.privateState.torrentList)), filter: (0, s.Fl)((() => this.privateState.filters[this.privateState.selectedFilter].id)), filterIds: (0, s.Fl)((() => this.privateState.selectedIds)) };
    }, setup() {
      return { Locale: _.g, LocaleController: G.A, Utils: S.c, serverOutline: m.bhR, serverSharp: m.pGB, pencilOutline: m.Tvs, pencilSharp: m.OHb, addOutline: m.s6O, addSharp: m.Vw6, caretDownOutline: m.Hu1, caretDownSharp: m.D2O, settingsOutline: m.C$N, settingsSharp: m.kiF, helpCircleOutline: m.Sm, helpCircleSharp: m.igy };
    }, watch: { colorScheme(e3) {
      S.c.setTheme(e3);
    }, language() {
      G.A.setLanguage(y.P.getLanguage());
    }, "privateState.serverList.length": async function() {
      this.privateState.selectedServer >= this.privateState.serverList.length && (this.privateState.selectedServer = this.privateState.serverList.length - 1), this.privateState.selectedServer < 0 && (this.privateState.serverList = await y.P.loadServerList(), this.privateState.selectedServer = 0), this.selectServer(this.privateState.selectedServer);
    } }, async beforeCreate() {
      await y.P.loadSettings(), this.privateState.selectedServer = y.P.state.selectedServer, S.c.registerMagnetLinkProtocol(), "default" == y.P.state.language && await G.A.setLanguage(y.P.getLanguage()), await y.P.loadServerList().then(((e3) => {
        this.privateState.serverList = e3, this.privateState.connectionStatus.loading = false;
      })), X.c.hide(), document.body.classList.toggle("loading", false);
    }, created() {
      S.c.setTheme(this.sharedState.colorScheme), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ((e3) => {
        e3.origin && e3.origin !== window.location.origin || "default" == this.sharedState.colorScheme && S.c.setTheme(e3.matches ? "dark" : "light");
      }));
    }, mounted() {
      S.c.customScrollbar(this.$refs.navigation), S.c.customScrollbar(this.$refs.trackers), K.Q.on("refresh", ((e3) => {
        this.refresh(e3);
      })), K.Q.on("add-server", this.addServer), K.Q.on("swipe-enabled", ((e3) => this.privateState.swipeEnabled = e3)), K.Q.on("about", this.openAboutModal), K.Q.on("settings", this.openSettingsModal), K.Q.on("toggle-menu", (() => {
        p.m.toggle("left");
      })), K.Q.on("select-filter", ((e3) => {
        this.privateState.selectedFilter = e3 - 1;
      })), K.Q.on("select-server", ((e3) => {
        this.selectServer(e3);
      }));
    }, computed: { colorScheme: function() {
      return this.sharedState.colorScheme;
    }, language: function() {
      return this.sharedState.language;
    }, trackerList: function() {
      return this.sharedState.showTrackerList ? this.privateState.fullTrackerList : this.privateState.fullTrackerList.slice(0, this.privateState.displayTrackerCount);
    } }, methods: { addServer(e3 = null) {
      this.openServerDetailsModal(this.privateState.serverList.length, e3, true);
    }, setRefreshInterval() {
      clearInterval(this.privateState.refresh), this.privateState.refresh = setInterval((() => {
        this.privateState.connectionStatus.loading || "" != this.privateState.connectionStatus.error || this.getTorrents(false, true);
      }), 1e3 * this.sharedState.refreshInterval);
    }, refresh(e3 = false) {
      this.privateState.serverList.length > 0 && (this.setRefreshInterval(), this.getTorrents(e3, false));
    }, openTrackerList(e3) {
      e3.stopPropagation(), this.privateState.trackerListOpened = true, this.displayTrackers();
    }, closeTrackerList() {
      this.privateState.trackerListOpened = false, this.privateState.displayTrackerCount = 0;
    }, displayTrackers(e3) {
      this.privateState.displayTrackerCount += Math.round(window.innerHeight / 48), e3 && e3.target.complete();
    }, getTorrentFilters() {
      this.privateState.torrentFilters = [], this.privateState.torrentList.map(((e3) => {
        (this.privateState.selectedIds.includes(e3.id) || 0 == this.privateState.selectedIds.length) && S.c.getTorrentFilters(e3).forEach(((e4) => {
          this.privateState.torrentFilters[e4] = this.privateState.torrentFilters[e4] ? this.privateState.torrentFilters[e4] + 1 : 1;
        }));
      }));
    }, selectTracker(e3) {
      e3 ? (this.privateState.selectedTracker = e3.announce, this.privateState.selectedIds = e3.ids) : (this.privateState.selectedTracker = "", this.privateState.selectedIds = []), this.closeTrackerList(), this.getTorrentFilters();
    }, getTrackerList() {
      return Y.S.persistentData ? Y.S.persistentData.trackers : [];
    }, async openSettingsModal() {
      const e3 = await n2.Fy.create({ component: z, cssClass: "settings" });
      return e3.onDidDismiss().then((() => {
        this.refresh(false);
      })), e3.present();
    }, async openAboutModal() {
      const e3 = await n2.Fy.create({ component: Q });
      return e3.onDidDismiss().then((() => {
        this.refresh(false);
      })), e3.present();
    }, async openServerDetailsModal(e3, t3, a3 = false) {
      t3 && t3.stopPropagation(), p.m.close("left");
      const l2 = await n2.Fy.create({ component: j, componentProps: { serverList: this.privateState.serverList, serverId: e3, add: a3 } });
      return l2.onDidDismiss().then((() => {
        this.refresh(false);
      })), l2.present();
    }, selectServer(e3 = 0) {
      K.Q.emit("clear-selection"), y.P.setValue("selectedServer", e3, true), this.privateState.torrentList = [], this.privateState.selectedIds = [], this.privateState.selectedTracker = "", this.privateState.selectedServer = e3, this.privateState.connectionStatus.error = "", this.privateState.connectionStatus.loading = true, this.privateState.connectionStatus.connected = false, Y.S.setServer(this.privateState.serverList[e3], this.sharedState.timeout).then(((e4) => {
        this.privateState.connectionStatus.sessionArguments = e4, this.setRefreshInterval(), this.getTorrents(true), Y.S.getPersistentData("trackers").then(((e5) => this.privateState.fullTrackerList = e5));
      })).catch(((e4) => {
        e4.message && (this.privateState.connectionStatus.loading = false, this.privateState.connectionStatus.error = e4.message);
      }));
    }, async getTorrents(e3 = false, t3 = false) {
      const a3 = await n2.Fy.getTop();
      a3 && !e3 || (this.privateState.connectionStatus.loading = true, e3 && (this.setRefreshInterval(), this.privateState.connectionStatus.error = "", this.privateState.torrentList = []), Y.S.getTorrents(t3 && !e3).then(((a4) => {
        this.privateState.connectionStatus.error = "", this.privateState.connectionStatus.connected = true, this.parseTorrentListResponse(a4, e3, t3);
      })).catch(((e4) => {
        e4.message && (this.privateState.connectionStatus.connected = false, this.privateState.connectionStatus.error = e4.message, this.privateState.torrentList = []);
      })).then((() => {
        this.privateState.connectionStatus.loading = false;
      })));
    }, parseTorrentListResponse(e3, t3, a3) {
      a3 ? (this.privateState.torrentList = P.unionBy(e3.torrents, this.privateState.torrentList, "id"), e3.removed.length > 0 && (this.privateState.torrentList = this.privateState.torrentList.filter((function(t4) {
        return !e3.removed.includes(t4.id);
      }))), (e3.torrents.length > 0 || e3.removed.length > 0) && this.getTorrentFilters()) : (this.privateState.torrentList = e3.torrents, this.getTorrentFilters());
    } } });
    const ee = (0, T.Z)(J, [["render", u], ["__scopeId", "data-v-7eb7e420"]]);
    var te = ee, ae = a2(3824), ne = a2(2692), le = a2(9495), oe = a2(6631);
    a2(8851), a2(1292), a2(1633), a2(1045), a2(6187), a2(2299), a2(3423), a2(4687), a2(9147), a2(6250);
    (0, le.q)(window), W.X.listenFileOpen(), oe.f.listenKeys();
    const se = (0, o.ri)(te).use(n2.oX, { backButtonText: (0, l.a)("ios") ? _.g.actions.back : null }).use(ae.Z).use(ne.ZP);
    se.config.unwrapInjectedRef = true, S.c.customDirectives(se), (0, l.a)("electron") && S.c.customTitlebar(), (0, l.a)("ios") && (0, l.a)("mobileweb") && S.c.loadAppleTouchIcon(), S.c.backButtonHandle(), ae.Z.isReady().then((() => {
      se.mount("#app");
    }));
  }, 3824: function(e2, t2, a2) {
    "use strict";
    var n2 = a2(1089);
    const l = [{ path: "/:pathMatch(.*)*", component: () => Promise.resolve().then(a2.bind(a2, 4104)) }], o = (0, n2.p7)({ history: (0, n2.PO)("/"), routes: l });
    t2["Z"] = o;
  }, 1315: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Q: function() {
      return l;
    } });
    var n2 = a2(9391);
    const l = (0, n2.Z)();
  }, 3662: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { X: function() {
      return de;
    } });
    a2(3767), a2(8585), a2(8696), a2(2801), a2(7658);
    var n2 = a2(3640), l = a2(9004), o = a2(3824), s = a2(1281), i = a2(6252), r = a2(3577), d = a2(9963);
    const c = (e3) => ((0, i.dD)("data-v-84f5b4e2"), e3 = e3(), (0, i.Cn)(), e3), u = { class: "swiper", ref: "swiper" }, p = { class: "swiper-wrapper" }, m = ["aria-hidden"], h = { id: "presets", class: "swiper-no-swiping" }, f = { class: "swiper-no-swiping", slot: "end" }, w = { class: "text-transform" }, g = { class: "selectable" }, b = c((() => (0, i._)("div", null, "URL", -1))), v = { class: "selectable" }, k = { class: "selectable" }, S = { class: "selectable" }, _ = { class: "selectable" }, y = { class: "selectable" }, W = ["innerHTML"], L = { class: "selectable" }, U = { class: "selectable" }, C = ["aria-hidden"], T = ["aria-hidden"], I = { class: "torrent" }, z = { class: "side" }, D = ["onClick", "onContextmenu"], P = { class: "name" }, V = { class: "details" };
    function O(e3, t3, a3, n3, l2, o2) {
      const s2 = (0, i.up)("ion-back-button"), c2 = (0, i.up)("ion-buttons"), O2 = (0, i.up)("ion-title"), j2 = (0, i.up)("ion-icon"), x2 = (0, i.up)("ion-button"), A2 = (0, i.up)("ion-toolbar"), B2 = (0, i.up)("ion-label"), M2 = (0, i.up)("ion-segment-button"), F2 = (0, i.up)("ion-segment"), E2 = (0, i.up)("ion-header"), R2 = (0, i.up)("ConnectionStatus"), q2 = (0, i.up)("ion-list-header"), H2 = (0, i.up)("ion-chip"), $2 = (0, i.up)("ion-list"), Z2 = (0, i.up)("autocomplete"), N2 = (0, i.up)("ion-item"), Q2 = (0, i.up)("ion-toggle"), Y2 = (0, i.up)("ion-select-option"), G2 = (0, i.up)("ion-select"), K2 = (0, i.up)("ion-content"), X2 = (0, i.up)("Files"), J2 = (0, i.up)("ion-checkbox"), ee2 = (0, i.up)("VirtualScroll");
      return (0, i.wg)(), (0, i.iD)(i.HY, null, [(0, i.Wm)(E2, null, { default: (0, i.w5)((() => [(0, i.Wm)(A2, null, { default: (0, i.w5)((() => [(0, i.Wm)(c2, { slot: "start" }, { default: (0, i.w5)((() => [(0, i.Wm)(s2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, i.Wm)(O2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.multiple ? e3.Locale.addTorrents : e3.Locale.addTorrent), 1)])), _: 1 }), (0, i.Wm)(c2, { slot: "end" }, { default: (0, i.w5)((() => [(0, i.Wm)(x2, { onClick: t3[1] || (t3[1] = (t4) => e3.serverList()), fill: "clear", "aria-label": e3.Locale.servers }, { default: (0, i.w5)((() => [(0, i.Wm)(j2, { slot: "icon-only", ios: e3.serverOutline, md: e3.serverSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"]), (0, i.Wm)(x2, { onClick: t3[2] || (t3[2] = (t4) => e3.add()), fill: "clear", disabled: !e3.connectionStatus.connected, "aria-label": e3.Locale.add }, { default: (0, i.w5)((() => [(0, i.Wm)(j2, { slot: "icon-only", ios: e3.checkmarkOutline, md: e3.checkmarkSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["disabled", "aria-label"])])), _: 1 })])), _: 1 }), (0, i.Wm)(A2, null, { default: (0, i.w5)((() => [(0, i.Wm)(F2, { ref: "tabs", onIonChange: t3[3] || (t3[3] = (t4) => e3.tabController.setTab(t4.detail.value)), modelValue: e3.tabController.state.selectedTab, "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.tabController.state.selectedTab = t4), scrollable: "" }, { default: (0, i.w5)((() => [(0, i.Wm)(M2, { value: "0", id: "tab1" }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.general), 1)])), _: 1 })])), _: 1 }), e3.multiple ? ((0, i.wg)(), (0, i.j4)(M2, { key: 1, value: "1", id: "tab2" }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "text-transform" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.LocaleController.getForm("torrent", "other")), 1)])), _: 1 })])), _: 1 })) : ((0, i.wg)(), (0, i.j4)(M2, { key: 0, value: "1", disabled: !e3.data.files, id: "tab2" }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.files), 1)])), _: 1 })])), _: 1 }, 8, ["disabled"]))])), _: 1 }, 8, ["modelValue"])])), _: 1 })])), _: 1 }), e3.connectionStatus.loading || "" != e3.connectionStatus.error ? ((0, i.wg)(), (0, i.j4)(R2, { key: 0, onRetry: t3[5] || (t3[5] = (t4) => e3.retry()) })) : (0, i.kq)("", true), (0, i.wy)((0, i._)("div", u, [(0, i._)("div", p, [(0, i._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab1", "aria-hidden": 0 != e3.tabController.state.selectedTab }, [(0, i.Wm)(K2, { class: "ion-padding", ref: "content" }, { default: (0, i.w5)((() => [(0, i.Wm)($2, null, { default: (0, i.w5)((() => [(0, i.Wm)(q2, null, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.preset), 1)])), _: 1 })])), _: 1 }), (0, i._)("div", h, [(0, i.Wm)(H2, { onClick: t3[6] || (t3[6] = (t4) => e3.addPreset()) }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.add), 1)])), _: 1 }), (0, i.Wm)(j2, { ios: e3.addCircleOutline, md: e3.addCircleSharp }, null, 8, ["ios", "md"])])), _: 1 }), ((0, i.wg)(true), (0, i.iD)(i.HY, null, (0, i.Ko)(e3.presets, ((t4, a4) => ((0, i.wg)(), (0, i.j4)(H2, { key: a4, onClick: (t5) => e3.selectPreset(a4), color: e3.selectedPreset == a4 ? "primary" : void 0 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(a4), 1)])), _: 2 }, 1024), (0, i.Wm)(j2, { ios: e3.closeCircleOutline, md: e3.closeCircleSharp, onClick: (t5) => e3.removePreset(a4, t5) }, null, 8, ["ios", "md", "onClick"])])), _: 2 }, 1032, ["onClick", "color"])))), 128))])])), _: 1 }), (0, i.Wm)($2, null, { default: (0, i.w5)((() => [(0, i.Wm)(q2, null, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.options), 1)])), _: 1 })])), _: 1 }), e3.connectionStatus.connected ? ((0, i.wg)(), (0, i.j4)(N2, { key: 0, class: "autocomplete" }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { position: "floating" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.downloadDir), 1)])), _: 1 }), (0, i.Wm)(Z2, { value: e3.settings.downloadDir, items: e3.TransmissionRPC.persistentData.downloadDir, placeholder: e3.defaultDownloadDir, onUpdate: e3.setDownloadDir }, null, 8, ["value", "items", "placeholder", "onUpdate"])])), _: 1 })) : (0, i.kq)("", true), (0, i.Wm)(N2, null, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.actions.start), 1)])), _: 1 }), (0, i._)("span", f, [(0, i.Wm)(Q2, { modelValue: e3.settings.start, "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.settings.start = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, i.Wm)(N2, null, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.priority), 1)])), _: 1 }), (0, i.Wm)(G2, { placeholder: "Select One", modelValue: e3.settings.bandwidthPriority, "onUpdate:modelValue": t3[8] || (t3[8] = (t4) => e3.settings.bandwidthPriority = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, i.w5)((() => [(0, i.Wm)(Y2, { value: 1 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.high), 1)])), _: 1 }), (0, i.Wm)(Y2, { value: 0 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.normal), 1)])), _: 1 }), (0, i.Wm)(Y2, { value: -1 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.low), 1)])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 }), (0, i._)("p", null, [(0, i.Wm)(q2, null, { default: (0, i.w5)((() => [(0, i.Wm)(B2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.information), 1)])), _: 1 })])), _: 1 }), e3.multiple ? ((0, i.wg)(), (0, i.j4)(N2, { key: 0 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [(0, i._)("div", w, (0, r.zw)(e3.LocaleController.getForm("torrent", "other")), 1), (0, i._)("span", g, (0, r.zw)(e3.files.length), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), "url" != e3.type || e3.multiple ? (0, i.kq)("", true) : ((0, i.wg)(), (0, i.j4)(N2, { key: 1 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [b, (0, i._)("span", v, (0, r.zw)(e3.files[0].torrent), 1)])), _: 1 })])), _: 1 })), e3.data.name ? ((0, i.wg)(), (0, i.j4)(N2, { key: 2 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.name), 1), (0, i._)("span", k, (0, r.zw)(e3.data.name), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.totalSize ? ((0, i.wg)(), (0, i.j4)(N2, { key: 3 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.totalSize), 1), (0, i._)("span", S, (0, r.zw)(e3.Utils.formatBytes(e3.totalSize)), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.data.files ? ((0, i.wg)(), (0, i.j4)(N2, { key: 4 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.files), 1), (0, i._)("span", _, (0, r.zw)(e3.data.files.length), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.data.length && e3.data.pieceLength ? ((0, i.wg)(), (0, i.j4)(N2, { key: 5 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.pieces), 1), (0, i._)("span", y, (0, r.zw)(Math.ceil(e3.data.length / e3.data.pieceLength)) + " x " + (0, r.zw)(e3.Utils.formatBytes(e3.data.pieceLength)), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.data.comment ? ((0, i.wg)(), (0, i.j4)(N2, { key: 6 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.comment), 1), (0, i._)("span", { class: "selectable", innerHTML: e3.Utils.autoLink(e3.data.comment) }, null, 8, W)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.data.infoHash ? ((0, i.wg)(), (0, i.j4)(N2, { key: 7 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.hash), 1), (0, i._)("span", L, (0, r.zw)(e3.data.infoHash), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true), e3.data.announce && e3.data.announce.length > 0 ? ((0, i.wg)(), (0, i.j4)(N2, { key: 8 }, { default: (0, i.w5)((() => [(0, i.Wm)(B2, { class: "label no-wrap" }, { default: (0, i.w5)((() => [(0, i._)("div", null, (0, r.zw)(e3.Locale.tracker.one), 1), (0, i._)("span", U, (0, r.zw)(e3.Utils.trackerDomain(e3.data.announce[0]).domain), 1)])), _: 1 })])), _: 1 })) : (0, i.kq)("", true)])])), _: 1 })])), _: 1 }, 512)], 8, m), !e3.multiple && e3.data.files ? ((0, i.wg)(), (0, i.iD)("div", { key: 0, class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab2", "aria-hidden": 1 != e3.tabController.state.selectedTab }, [(0, i.Wm)(X2, { actions: false, onChangeDirectory: e3.changeDirectory }, null, 8, ["onChangeDirectory"])], 8, C)) : (0, i.kq)("", true), e3.multiple ? ((0, i.wg)(), (0, i.iD)("div", { key: 1, class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab2", "aria-hidden": 1 != e3.tabController.state.selectedTab }, [(0, i.Wm)(ee2, (0, i.dG)(e3.$attrs, { items: e3.files, "item-size": 64 }), { default: (0, i.w5)((({ item: t4 }) => [(0, i._)("div", I, [(0, i._)("div", z, [(0, i.Wm)(J2, (0, i.dG)(e3.checkedAttributes(t4.data.infoHash), { onIonChange: (a4) => e3.checboxUpdate(a4, t4.data.infoHash) }), null, 16, ["onIonChange"])]), (0, i._)("div", { class: "middle", onClick: (a4) => e3.fileTitle(t4.data.name || t4.torrent), onContextmenu: (a4) => e3.fileTitle(t4.data.name || t4.torrent, a4) }, [(0, i._)("div", P, (0, r.zw)(t4.data.name || t4.torrent), 1), (0, i._)("div", V, [(0, i.Wm)(j2, { color: "medium", ios: e3.documentOutline, md: e3.documentSharp }, null, 8, ["ios", "md"]), (0, i.Uk)(" " + (0, r.zw)(e3.Utils.formatBytes(t4.data.length)), 1)])], 40, D)])])), _: 1 }, 16, ["items"])], 8, T)) : (0, i.kq)("", true)])], 512), [[d.F8, e3.connectionStatus.connected]])], 64);
    }
    var j = a2(8903), x = a2(447), A = a2(3126), B = a2(986), M = a2(5441);
    const F = { class: "left" }, E = { class: "left" };
    function R(e3, t3, a3, n3, l2, o2) {
      const s2 = (0, i.up)("ion-back-button"), d2 = (0, i.up)("ion-buttons"), c2 = (0, i.up)("ion-title"), u2 = (0, i.up)("ion-icon"), p2 = (0, i.up)("ion-button"), m2 = (0, i.up)("ion-toolbar"), h2 = (0, i.up)("ion-header"), f2 = (0, i.up)("ion-label"), w2 = (0, i.up)("ion-list-header"), g2 = (0, i.up)("ion-input"), b2 = (0, i.up)("ion-item"), v2 = (0, i.up)("autocomplete"), k2 = (0, i.up)("ion-toggle"), S2 = (0, i.up)("ion-select-option"), _2 = (0, i.up)("ion-select"), y2 = (0, i.up)("ion-list"), W2 = (0, i.up)("ion-content"), L2 = (0, i.up)("ion-page");
      return (0, i.wg)(), (0, i.j4)(L2, null, { default: (0, i.w5)((() => [(0, i.Wm)(h2, { translucent: true }, { default: (0, i.w5)((() => [(0, i.Wm)(m2, null, { default: (0, i.w5)((() => [(0, i.Wm)(d2, { slot: "start" }, { default: (0, i.w5)((() => [(0, i.Wm)(s2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, i.Wm)(c2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.preset), 1)])), _: 1 }), (0, i.Wm)(d2, { slot: "end" }, { default: (0, i.w5)((() => [(0, i.Wm)(p2, { onClick: t3[1] || (t3[1] = (t4) => e3.add()), fill: "clear" }, { default: (0, i.w5)((() => [(0, i.Wm)(u2, { slot: "icon-only", ios: e3.checkmarkOutline, md: e3.checkmarkSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }), (0, i.Wm)(W2, { fullscreen: true, class: "ion-padding", ref: "content" }, { default: (0, i.w5)((() => [(0, i.Wm)(y2, null, { default: (0, i.w5)((() => [(0, i.Wm)(w2, null, { default: (0, i.w5)((() => [(0, i.Wm)(f2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.options), 1)])), _: 1 })])), _: 1 }), (0, i.Wm)(b2, null, { default: (0, i.w5)((() => [(0, i.Wm)(f2, { position: "floating" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.name), 1)])), _: 1 }), (0, i.Wm)(g2, { modelValue: e3.name, "onUpdate:modelValue": t3[2] || (t3[2] = (t4) => e3.name = t4) }, null, 8, ["modelValue"])])), _: 1 }), e3.connectionStatus.connected ? ((0, i.wg)(), (0, i.j4)(b2, { key: 0, class: "autocomplete" }, { default: (0, i.w5)((() => [(0, i.Wm)(f2, { position: "floating" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.downloadDir), 1)])), _: 1 }), (0, i.Wm)(v2, { items: e3.TransmissionRPC.persistentData.downloadDir, placeholder: e3.defaultDownloadDir, onUpdate: e3.setDownloadDir }, null, 8, ["items", "placeholder", "onUpdate"])])), _: 1 })) : (0, i.kq)("", true), (0, i.Wm)(b2, null, { default: (0, i.w5)((() => [(0, i.Wm)(f2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.actions.start), 1)])), _: 1 }), (0, i.Wm)(k2, { modelValue: e3.settings.start, "onUpdate:modelValue": t3[3] || (t3[3] = (t4) => e3.settings.start = t4), class: "swiper-no-swiping" }, null, 8, ["modelValue"])])), _: 1 }), (0, i._)("p", null, [(0, i.Wm)(w2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.bandwidth), 1)])), _: 1 }), (0, i.Wm)(b2, null, { default: (0, i.w5)((() => [(0, i.Wm)(f2, null, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.priority), 1)])), _: 1 }), (0, i.Wm)(_2, { placeholder: "Select One", modelValue: e3.settings.bandwidthPriority, "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.settings.bandwidthPriority = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, i.w5)((() => [(0, i.Wm)(S2, { value: 1 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.high), 1)])), _: 1 }), (0, i.Wm)(S2, { value: 0 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.normal), 1)])), _: 1 }), (0, i.Wm)(S2, { value: -1 }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.priority.low), 1)])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 }), (0, i.Wm)(b2, null, { default: (0, i.w5)((() => [(0, i._)("div", F, [(0, i.Wm)(f2, { position: "floating" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.downloadLimit) + " (" + (0, r.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, i.Wm)(g2, { modelValue: e3.settings.other.downloadLimit, "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.settings.other.downloadLimit = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.settings.other.downloadLimited }, null, 8, ["modelValue", "disabled"])]), (0, i.Wm)(k2, { modelValue: e3.settings.other.downloadLimited, "onUpdate:modelValue": t3[6] || (t3[6] = (t4) => e3.settings.other.downloadLimited = t4), slot: "end", class: "swiper-no-swiping" }, null, 8, ["modelValue"])])), _: 1 }), (0, i.Wm)(b2, null, { default: (0, i.w5)((() => [(0, i._)("div", E, [(0, i.Wm)(f2, { position: "floating" }, { default: (0, i.w5)((() => [(0, i.Uk)((0, r.zw)(e3.Locale.uploadLimit) + " (" + (0, r.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, i.Wm)(g2, { modelValue: e3.settings.other.uploadLimit, "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.settings.other.uploadLimit = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.settings.other.uploadLimited }, null, 8, ["modelValue", "disabled"])]), (0, i.Wm)(k2, { modelValue: e3.settings.other.uploadLimited, "onUpdate:modelValue": t3[8] || (t3[8] = (t4) => e3.settings.other.uploadLimited = t4), slot: "end", class: "swiper-no-swiping" }, null, 8, ["modelValue"])])), _: 1 })])])), _: 1 })])), _: 1 }, 512)])), _: 1 });
    }
    var q = a2(3502), H = a2(3983), $ = a2(538), Z = a2(5145), N = (0, i.aZ)({ name: "Preset", inject: ["connectionStatus"], components: { Autocomplete: A.Z, IonContent: l.W2, IonHeader: l.Gu, IonTitle: l.wd, IonToolbar: l.sr, IonButton: l.YG, IonButtons: l.Sm, IonPage: l._i, IonBackButton: l.oU, IonIcon: l.gu, IonList: l.q_, IonListHeader: l.yh, IonItem: l.Ie, IonLabel: l.Q$, IonToggle: l.ho, IonSelect: l.t9, IonSelectOption: l.n0, IonInput: l.pK }, data() {
      return { defaultDownloadDir: "", name: "", settings: { start: true, downloadDir: "", bandwidthPriority: 0, other: { downloadLimited: false, uploadLimited: false, downloadLimit: 0, uploadLimit: 0 } } };
    }, setup() {
      return Z.c.pushState(), { Locale: $.g, TransmissionRPC: q.S, checkmarkOutline: j.TjA, checkmarkSharp: j.ARW };
    }, async created() {
      this.defaultDownloadDir = await q.S.getSessionArgument("download-dir");
    }, mounted() {
      Z.c.customScrollbar(this.$refs.content);
    }, computed: { speedUnit: () => "K" + (H.P.state.useBits ? $.g.units.bit : $.g.units.byte) + $.g.units.perSecond }, methods: { modalClose() {
      l.Fy.dismiss();
    }, setDownloadDir(e3) {
      this.settings.downloadDir = e3;
    }, async add() {
      if ("" != this.name) {
        H.P.state.useBits && (this.settings.other.downloadLimit = Math.round(this.settings.other.downloadLimit / 8), this.settings.other.uploadLimit = Math.round(this.settings.other.uploadLimit / 8));
        const e3 = await H.P.loadPresets();
        e3[this.name] = this.settings, H.P.savePresets(e3), Z.c.responseToast("success"), this.modalClose();
      }
    } } }), Q = a2(3744);
    const Y = (0, Q.Z)(N, [["render", R], ["__scopeId", "data-v-386e5682"]]);
    var G = Y, K = a2(1047), X = a2(6971), J = a2(1315), ee = a2(6486), te = (0, i.aZ)({ name: "AddTorrent", props: ["files", "type"], components: { ConnectionStatus: x.Z, Autocomplete: A.Z, Files: M.Z, VirtualScroll: B.Z, IonContent: l.W2, IonHeader: l.Gu, IonTitle: l.wd, IonToolbar: l.sr, IonButton: l.YG, IonButtons: l.Sm, IonBackButton: l.oU, IonList: l.q_, IonListHeader: l.yh, IonItem: l.Ie, IonLabel: l.Q$, IonSegment: l.cJ, IonSegmentButton: l.GO, IonToggle: l.ho, IonSelect: l.t9, IonSelectOption: l.n0, IonIcon: l.gu, IonCheckbox: l.nz, IonChip: l.hM }, data() {
      return { settings: { start: true, bandwidthPriority: 0, downloadDir: "" }, defaultDownloadDir: "", currentDirectory: "", fileStats: [], notWanted: [], presets: {}, selectedPreset: "", connectionStatus: {} };
    }, computed: { multiple() {
      return this.files.length > 1;
    }, data() {
      return this.multiple ? {} : this.files[0].data;
    }, totalSize() {
      let e3 = 0;
      return this.files.forEach(((t3) => {
        e3 += t3.data.length;
      })), e3 > 0 ? e3 : null;
    } }, provide() {
      return { id: -1, details: this.data, fileStats: this.data.files, currentDirectory: (0, i.Fl)((() => this.currentDirectory)) };
    }, setup() {
      Z.c.pushState();
      const e3 = new K.Z();
      return { Locale: $.g, LocaleController: X.A, Utils: Z.c, tabController: e3, TransmissionRPC: q.S, checkmarkOutline: j.TjA, checkmarkSharp: j.ARW, documentOutline: j.Pf6, documentSharp: j.Rxr, closeCircleOutline: j.UMR, closeCircleSharp: j.J_D, addCircleOutline: j.hd1, addCircleSharp: j.bAt, serverOutline: j.bhR, serverSharp: j.pGB };
    }, async created() {
      this.connectionStatus = (0, i.f3)("connectionStatus"), !this.multiple && this.data.files && (this.fileStats = ee.clone(this.data.files), this.fileStats.forEach(((e3) => {
        e3.wanted = true, e3.name = e3.path;
      }))), this.presets = await H.P.loadPresets(), this.defaultDownloadDir = await q.S.getSessionArgument("download-dir"), H.P.state.rememberSelectedPreset && this.selectPreset(H.P.state.selectedPreset);
    }, mounted() {
      Z.c.customScrollbar(this.$refs.content), this.tabController.init(this.$refs.swiper, this.$refs.tabs);
    }, methods: { modalClose() {
      l.Fy.dismiss();
    }, retry() {
      J.Q.emit("refresh", true);
    }, changeDirectory(e3) {
      this.currentDirectory = e3;
    }, setDownloadDir(e3) {
      this.settings.downloadDir = e3;
    }, fileTitle(e3, t3) {
      t3 && t3.preventDefault(), Z.c.responseToast(e3);
    }, checkedAttributes(e3) {
      return { checked: !this.notWanted.includes(e3) };
    }, checboxUpdate(e3, t3) {
      e3.detail.checked ? this.notWanted.splice(this.notWanted.indexOf(t3), 1) : this.notWanted.push(t3);
    }, async add() {
      let e3 = false;
      const t3 = { paused: !this.settings.start };
      "" != this.settings.downloadDir && (t3["download-dir"] = this.settings.downloadDir);
      const a3 = [], n3 = [];
      for (const l2 in this.fileStats) {
        const e4 = parseInt(l2);
        this.fileStats[e4].wanted ? a3.push(e4) : n3.push(e4);
      }
      a3.length > 0 && (t3["files-wanted"] = a3), n3.length > 0 && (t3["files-unwanted"] = n3);
      const o2 = await l.G0.create({});
      await o2.present(), await this.sendFiles(t3).catch(((t4) => {
        Z.c.responseToast(t4.message), e3 = true;
      })), await o2.dismiss(), e3 || (Z.c.responseToast("success"), this.modalClose());
    }, async sendFiles(e3) {
      for (const t3 of this.files) this.notWanted.includes(t3.data.infoHash) || await this.send(e3, t3.torrent).then((async (e4) => {
        await this.applyPreset(e4.arguments);
      })).catch(((e4) => {
        throw new Error(this.multiple ? `${e4.message}: ${t3.data.name}` : e4.message);
      }));
    }, send(e3, t3) {
      switch (this.type) {
        case "magnet":
        case "url":
          e3.filename = t3;
          break;
        case "file":
          e3.metainfo = t3;
          break;
      }
      return q.S.torrentAdd({ ...this.settings, ...e3 });
    }, selectPreset(e3) {
      this.selectedPreset = this.selectedPreset == e3 ? "" : e3, H.P.setValue("selectedPreset", this.selectedPreset, true), "" != this.selectedPreset ? this.settings = { ...this.presets[e3] } : this.settings = { start: true, bandwidthPriority: 0, downloadDir: "" };
    }, async applyPreset(e3) {
      e3["torrent-added"] && this.presets[this.selectedPreset] && (this.presets[this.selectedPreset].other.downloadLimited || this.presets[this.selectedPreset].other.uploadLimited) && await q.S.torrentAction("set", [e3["torrent-added"].id], this.presets[this.selectedPreset].other).catch(((e4) => {
        Z.c.responseToast(e4.message);
      }));
    }, async addPreset() {
      const e3 = await l.Fy.create({ component: G });
      return e3.onDidDismiss().then((async () => {
        this.presets = await H.P.loadPresets();
      })), e3.present();
    }, async removePreset(e3, t3) {
      t3.stopPropagation();
      const a3 = await l.Cl.create({ header: $.g.prompt.confirmation, message: $.g.formatString($.g.prompt["delete"], `"${e3}"`), buttons: [{ text: $.g.actions.cancel, role: "cancel" }, { text: $.g.prompt.confirm, handler: () => {
        delete this.presets[e3], H.P.savePresets(this.presets);
      } }] });
      return a3.present();
    }, async serverList() {
      const e3 = await H.P.loadServerList(), t3 = H.P.state.selectedServer, a3 = e3.map(((e4, a4) => ({ text: e4.name, role: a4 == t3 ? "selected" : null, handler: () => {
        J.Q.emit("select-server", a4);
      } })));
      a3.push({ text: $.g.actions.cancel, role: "cancel" });
      const n3 = await l.BO.create({ header: $.g.servers, buttons: a3 });
      return n3.present();
    } } });
    const ae = (0, Q.Z)(te, [["render", O], ["__scopeId", "data-v-84f5b4e2"]]);
    var ne = ae, le = a2(9895), oe = a2(5137), se = a2(8764)["lW"];
    let ie, re = [];
    const de = { listenFileOpen() {
      (0, n2.a)("electron") && window.fileOpen ? (window.fileOpen.receive(((e4) => {
        re = e4, this.filesLoaded();
      })), window.magnetOpen.receive(((e4) => {
        this.readMagnets([e4]);
      }))) : (0, n2.a)("capacitor") && oe.g.addListener("appUrlOpen", (async (e4) => {
        if (e4.url.startsWith("magnet:")) this.readMagnets([e4.url]);
        else {
          const t3 = le.dV.convertFileSrc(e4.url);
          this.loadFiles([t3]);
        }
      })), document.body.addEventListener("dragover", ((e4) => e4.preventDefault()), false), document.body.addEventListener("drop", ((e4) => this.handleFilesDrop(e4)), false);
      const e3 = decodeURIComponent(window.location.hash.substring(1));
      e3.startsWith("url:") ? this.readURL(e3.substring(4)) : this.readHashOrMagnet(e3);
    }, async inputFile() {
      if (!ie) {
        const e3 = document.createElement("input");
        e3.setAttribute("type", "file"), e3.setAttribute("id", "inputFile"), e3.setAttribute("multiple", "true"), e3.setAttribute("accept", (0, n2.a)("ios") ? ".torrent" : "application/x-bittorrent"), e3.setAttribute("style", "display:none;"), ie = document.body.appendChild(e3), ie.addEventListener("change", ((e4) => this.handleFiles(e4)), false);
      }
      ie.click();
    }, arrayBufferToBase64(e3) {
      let t3 = "";
      const a3 = new Uint8Array(e3), n3 = a3.byteLength;
      for (let l2 = 0; l2 < n3; l2++) t3 += String.fromCharCode(a3[l2]);
      return window.btoa(t3);
    }, handleFilesDrop(e3) {
      if (e3.preventDefault(), e3.dataTransfer) if (e3.dataTransfer.files.length > 0) this.readFiles(e3.dataTransfer.files);
      else {
        const t3 = e3.dataTransfer.getData("text/plain");
        this.readHashOrMagnet(t3);
      }
    }, handleFiles(e3) {
      const t3 = e3.target.files;
      t3 && this.readFiles(t3);
    }, async readFiles(e3) {
      re = [];
      for (const t3 of Array.from(e3)) (t3.name.endsWith(".torrent") || t3.name.endsWith(".bittorrent") || "application/x-bittorrent" == t3.type) && re.push(await this.readFile(t3));
      re.length > 0 && this.filesLoaded();
    }, readFile(e3) {
      return new Promise((function(t3, a3) {
        const n3 = new FileReader();
        n3.onload = (e4) => {
          t3(e4.target.result);
        }, n3.onerror = () => {
          a3();
        }, n3.readAsArrayBuffer(e3);
      }));
    }, async loadFiles(e3) {
      re = [];
      for (const t3 of e3) re.push(await this.loadFile(t3));
      this.filesLoaded();
    }, async loadFile(e3) {
      return fetch(e3).then(((e4) => e4.arrayBuffer()));
    }, async filesLoaded() {
      const e3 = [];
      for (const t3 of re) {
        const a3 = se.from(t3), n3 = await this.parseBuffer(a3), l2 = this.arrayBufferToBase64(t3);
        e3.push({ data: n3, torrent: l2 });
      }
      re = [], this.newTorrentModal(e3, "file");
    }, async parseBuffer(e3) {
      try {
        return (0, s.ZP)(e3);
      } catch (t3) {
        Z.c.responseToast(t3.message);
      }
    }, readHashOrMagnet(e3) {
      let t3;
      const a3 = [];
      let n3 = e3;
      e3.match(/^\b[0-9a-fA-F]{40}\b$/) && (n3 = `magnet:?xt=urn:btih:${e3}`);
      const l2 = /magnet:\?xt=urn:btih:[0-9a-zA-Z]{32,}(?:&\S*)?/g;
      while (t3 = l2.exec(n3)) a3.push(t3[0]);
      this.readMagnets(a3);
    }, async readMagnets(e3) {
      const t3 = [];
      for (const n3 of e3) try {
        const e4 = await (0, s.ZP)(n3);
        t3.push({ data: e4, torrent: n3 });
      } catch (a3) {
        Z.c.responseToast(a3.message);
      }
      t3.length > 0 && this.newTorrentModal(t3, "magnet");
    }, async readURL(e3) {
      const t3 = [], a3 = e3.match(/\S+/g) || [];
      for (const n3 of a3) if (this.isValidUrl(n3)) {
        const e4 = await ce(n3);
        t3.push({ data: e4, torrent: n3 });
      }
      t3.length > 0 && this.newTorrentModal(t3, "url");
    }, isValidUrl(e3) {
      let t3;
      try {
        t3 = new URL(e3);
      } catch (a3) {
        return false;
      }
      return null != t3;
    }, newTorrentModal(e3, t3) {
      o.Z.isReady().then((async () => {
        const a3 = await l.Fy.create({ component: ne, componentProps: { files: e3, type: t3 } });
        return a3.onDidDismiss().then((() => {
          window.location.hash = "", ie == null ? void 0 : ie.remove(), ie = null, J.Q.emit("refresh", false);
        })), a3.present();
      }));
    }, openExplorer(e3) {
      let t3 = false, a3 = e3.name;
      const n3 = e3.downloadDir;
      return 1 === e3.files.length && (a3 = e3.files[0].name, t3 = true), !!window.fileOpen && window.fileOpen.open(this.pathMapping(n3), a3, t3);
    }, pathMapping(e3) {
      const t3 = q.S.pathMapping;
      let a3 = e3;
      for (const n3 in t3) e3.startsWith(n3) && (a3 = t3[n3] + e3.substring(n3.length));
      return a3;
    } }, ce = (e3) => new Promise(((t3) => {
      (0, s.xv)(e3, ((e4, a3) => {
        t3(e4 ? {} : a3);
      }));
    }));
  }, 538: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { g: function() {
      return s;
    } });
    var n2 = a2(4870), l = a2(2694), o = a2(5744);
    const s = (0, n2.qj)(new l.Z({ en: o }));
  }, 6971: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { A: function() {
      return d;
    } });
    var n2 = a2(538), l = a2(2333), o = a2(5744);
    const s = { en: o }, i = ["cs", "de", "de-at", "el", "en", "es-cl", "es-cr", "fr", "fr-ch", "hu", "it", "ko", "nl", "pl", "pt", "pt-br", "ru", "sk", "uk", "zh-cn", "zh-tw"], r = { es: "es-cr", zh: "zh-cn" }, d = { async setLanguage(e3) {
      const t3 = this.getLanguageCode(e3);
      s[t3] || await this.loadLanguages(t3).then(((e4) => {
        s[t3] = e4, n2.g.setContent(s);
      })).catch((() => {
      })), n2.g.setLanguage(t3);
    }, loadLanguages(e3) {
      return fetch(`locales/${e3}.json`).then(((e4) => e4.json()));
    }, getLanguageCode(e3, t3 = false) {
      const a3 = e3.toLowerCase();
      return i.includes(a3) ? a3 : r[a3] ? r[a3] : t3 ? "en" : this.getLanguageCode(a3.substring(0, 2), true);
    }, getPlural(e3, t3) {
      let a3 = n2.g.getLanguage();
      Object(l)[a3] || (a3 = a3.substring(0, 2));
      const o2 = Object(l)[a3] ? Object(l)[a3](t3) : "other";
      return this.getForm(e3, o2);
    }, getForm(e3, t3) {
      return Object(n2.g)[e3][t3] ? Object(n2.g)[e3][t3] : Object(n2.g)[e3]["one"];
    } };
  }, 6631: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { f: function() {
      return o;
    } });
    a2(7658);
    var n2 = a2(1315);
    let l = { ctrl: false, alt: false };
    const o = { listenKeys() {
      document.onkeydown = (e3) => {
        this.keyEventHandler(e3, true);
      }, document.onkeyup = (e3) => {
        this.keyEventHandler(e3, false);
      };
    }, keyEventHandler(e3, t3) {
      t3 || (l = { ctrl: false, alt: false }), "Control" != e3.key && "Alt" != e3.key && (l["ctrl"] = e3.ctrlKey || e3.metaKey, l["alt"] = e3.altKey, l[e3.key] = t3, t3 && this.checkShortcuts());
    }, isPressed(e3) {
      return !!l[e3] && l[e3];
    }, getPressedKeys() {
      const e3 = [];
      for (const t3 in l) this.isPressed(t3) && e3.push(t3);
      return e3;
    }, checkShortcuts() {
      const e3 = this.getPressedKeys();
      switch (e3.toString()) {
        case "Enter":
        case "Shift,Enter":
          this.simulateClick();
          break;
        case "alt,t":
          this.call("add-torrent");
          break;
        case "alt,m":
          this.call("add-magnet");
          break;
        case "alt,u":
          this.call("add-url");
          break;
        case "alt,n":
          this.call("add-server");
          break;
        case "alt,s":
          this.call("settings");
          break;
        case "ctrl,a":
          this.call("select-all");
          break;
        case "Escape":
          this.call("clear-selection");
          break;
        case "alt,a":
          this.call("about");
          break;
        case "ctrl,alt,s":
          this.call("toggle-search");
          break;
        case "ctrl,alt,t":
          this.call("toggle-menu");
          break;
        case "alt,i":
          this.call("info-server");
          break;
        case "alt,c":
          this.call("config-server");
          break;
        case "1,alt":
        case "2,alt":
        case "3,alt":
        case "4,alt":
        case "5,alt":
        case "6,alt":
        case "7,alt":
        case "8,alt":
        case "9,alt":
          this.call("select-filter", e3[0]);
          break;
        case "ctrl,ArrowRight":
          this.call("next-tab");
          break;
        case "ctrl,ArrowLeft":
          this.call("previous-tab");
          break;
        default:
          break;
      }
    }, simulateClick() {
      const e3 = document.activeElement;
      "ION-SELECT" != e3.nodeName && "ION-BUTTON" != e3.nodeName && e3.click();
    }, call(e3, t3) {
      n2.Q.emit(e3, t3);
    } };
  }, 1047: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Z: function() {
      return r;
    } });
    var n2 = a2(7327), l = a2(4870), o = a2(3640), s = a2(1315), i = a2(965);
    class r {
      constructor() {
        (0, n2.Z)(this, "state", (0, l.qj)({ selectedTab: 0, visibleTab: 0, swiper: {}, segments: {} })), s.Q.on("next-tab", (() => {
          this.setTab(this.state.selectedTab - 0 + 1);
        })), s.Q.on("previous-tab", (() => {
          this.setTab(this.state.selectedTab - 1);
        }));
      }
      init(e3, t3) {
        const a3 = this;
        this.state.swiper = new i.ZP(e3, { centeredSlides: true, initialSlide: this.state.selectedTab, resistanceRatio: (0, o.a)("ios") ? 0.85 : 0, simulateTouch: false, on: { transitionEnd: () => a3.slideChanged() } }), this.state.segments = t3;
      }
      setTab(e3, t3 = true) {
        if (e3 = parseInt((e3 || 0).toString()), e3 >= 0 && e3 <= this.state.segments.$el.childNodes.length) {
          this.state.swiper ? this.state.swiper.slideTo(e3) : (this.state.selectedTab = e3, this.state.visibleTab = e3);
          const a3 = this.state.segments.$el.childNodes[e3];
          a3.scrollIntoView({ behavior: t3 ? "smooth" : "instant", block: "center", inline: "center" });
        }
      }
      async slideChanged() {
        const e3 = this.state.swiper.activeIndex;
        null != e3 && (this.state.selectedTab = e3, this.state.visibleTab = e3, this.setTab(e3, false));
      }
      isVisible(e3) {
        return this.state.visibleTab >= e3 - 1 && this.state.visibleTab <= e3 + 1;
      }
    }
  }, 3502: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { S: function() {
      return c;
    } });
    var n2 = a2(7327), l = (a2(7658), a2(6486)), o = a2(8764)["lW"];
    let s, i, r = 0;
    class d {
      constructor() {
        (0, n2.Z)(this, "sessionToken", void 0), (0, n2.Z)(this, "sessionArguments", void 0), (0, n2.Z)(this, "options", void 0), (0, n2.Z)(this, "lastRequestId", void 0), (0, n2.Z)(this, "persistentData", void 0), (0, n2.Z)(this, "persistentDataValid", false), (0, n2.Z)(this, "sessionStats", void 0), (0, n2.Z)(this, "statsHistory", []), (0, n2.Z)(this, "pathMapping", void 0), this.lastRequestId = 0, this.pathMapping = {};
      }
      async setServer(e3 = {}, t3 = 5) {
        this.sessionToken = null, this.options = { host: "localhost", path: "/transmission/rpc", port: 9091, https: false, timeout: t3 };
        for (const [a3, n3] of Object.entries(e3)) "" != n3 && (this.options[a3] = n3);
        return this.options.pathMapping && (this.pathMapping = this.readPathMapping(this.options.pathMapping)), this.invalidatePersitentData(), this.sessionArguments = await this.getSession(), this.setFreeSpaceRefreshInterval(), this.setSessionStatsRefreshInterval(), this.sessionArguments;
      }
      readPathMapping(e3) {
        const t3 = {};
        return e3.split(/\r?\n/).forEach(((e4) => {
          const a3 = e4.match(/^(.+) ?= ?(.+)$/) || [];
          for (const t4 in a3) a3[t4] && (a3[t4].startsWith(" ") && (a3[t4] = a3[t4].substring(1)), a3[t4].endsWith(" ") && (a3[t4] = a3[t4].slice(0, -1)));
          a3.length >= 3 && (t3[a3[1]] = a3[2]);
        })), t3;
      }
      setFreeSpaceRefreshInterval() {
        clearInterval(s), s = setInterval((async () => {
          const e3 = await this.rpcCall("free-space", { path: this.sessionArguments["download-dir"] });
          "success" == e3.result && (this.sessionArguments["download-dir-free-space"] = e3.arguments["size-bytes"]);
        }), 6e4);
      }
      async setSessionStatsRefreshInterval() {
        this.statsHistory = [], clearInterval(i), i = setInterval((() => this.getSessionStats()), 1e4), await this.getSessionStats();
      }
      async getSession() {
        const e3 = await this.rpcCall("session-get");
        return e3.arguments ? e3.arguments : {};
      }
      getSessionArgument(e3) {
        return new Promise(((t3, a3) => {
          let n3 = 0;
          const l2 = setInterval((() => {
            this.sessionArguments && "undefined" != typeof this.sessionArguments[e3] ? t3(this.sessionArguments[e3]) : n3 >= 100 && (clearInterval(l2), a3()), n3++;
          }), 50);
        }));
      }
      getSessionStats() {
        return this.rpcCall("session-stats").then(((e3) => {
          this.sessionStats = e3.arguments, this.addStatsHistory(this.sessionStats.downloadSpeed, this.sessionStats.uploadSpeed);
        })).catch((() => {
          this.addStatsHistory(null, null);
        }));
      }
      addStatsHistory(e3, t3) {
        this.statsHistory.push([e3, t3]), this.statsHistory = this.statsHistory.slice(-30);
      }
      setSession(e3) {
        return new Promise(((t3, a3) => {
          this.rpcCall("session-set", e3).then(((a4) => {
            for (const t4 in e3) this.sessionArguments[t4] = e3[t4];
            t3(a4);
          })).catch((() => a3()));
        }));
      }
      async getToken() {
        let e3 = "";
        if (this.sessionToken) e3 = this.sessionToken;
        else {
          const t3 = await this.request("");
          if (t3.errorMessage) throw Error(t3.errorMessage);
          if (401 == t3.status) throw Error("Authentication error");
          if (e3 = this.readToken(t3), "" == e3) throw Error("Unable to reach Transmission Daemon");
          this.sessionToken = e3;
        }
        return e3;
      }
      readToken(e3) {
        if (e3 && e3._sessionTokenFromBody) return e3._sessionTokenFromBody;
        let t3 = "";
        return e3.headers && "undefined" !== typeof e3.headers["x-transmission-session-id"] ? t3 = e3.headers["x-transmission-session-id"] : e3.headers && "undefined" !== typeof e3.headers["X-Transmission-Session-Id"] ? t3 = e3.headers["X-Transmission-Session-Id"] : e3.headers && e3.headers.get && null != e3.headers.get("x-transmission-session-id") && (t3 = e3.headers.get("x-transmission-session-id")), t3;
      }
      async getTorrents(e3 = false) {
        let t3 = {}, a3 = false;
        const n3 = { format: "table", fields: ["id", "name", "percentDone", "uploadRatio", "rateDownload", "rateUpload", "downloadedEver", "uploadedEver", "totalSize", "addedDate", "status", "errorString", "activityDate", "sizeWhenDone", "eta", "recheckProgress", "queuePosition", "downloadDir"] };
        e3 && (n3.ids = "recently-active"), this.persistentDataValid || (a3 = true, n3.fields.push("trackers", "downloadDir"));
        const l2 = await this.rpcCall("torrent-get", n3, true, true);
        if (l2.arguments) {
          if (t3 = l2.arguments, t3.torrents.length > 0 && Array.isArray(t3.torrents[0])) {
            const e4 = t3.torrents[0];
            t3.torrents.shift(), t3.torrents = t3.torrents.map(((t4) => e4.reduce(((e5, a4, n4) => ({ ...e5, [a4]: t4[n4] })), {})));
          }
          a3 && this.readPersitentData(t3);
        }
        return t3;
      }
      readPersitentData(e3) {
        let t3 = [];
        const a3 = [];
        r = 0;
        for (const n3 of e3.torrents) {
          const e4 = this.readDownloadDir(n3.downloadDir);
          a3.includes(e4) || a3.push(e4), t3 = this.readTrackers(t3, n3.trackers, n3.id);
        }
        a3.sort(), this.persistentData = { trackers: Object.values(t3), downloadDir: a3 }, this.persistentDataValid = true;
      }
      async getPersistentData(e3) {
        return new Promise(((t3) => {
          const a3 = (e4) => {
            clearInterval(l2), t3(e4);
          }, n3 = () => {
            this.persistentData && this.persistentData[e3] && a3(this.persistentData[e3]);
          }, l2 = setInterval(n3, 100);
          n3();
        }));
      }
      readDownloadDir(e3) {
        let t3 = e3;
        return t3.match(/[\/\\]$/) && (t3 = t3.substring(0, t3.length - 1)), t3;
      }
      readTrackers(e3, t3, a3) {
        const n3 = e3;
        for (const l2 of t3) {
          const e4 = l2.announce.match(/^[\w]+:\/\/[\w\d\.-]+/);
          if (e4) {
            const t4 = e4[0], l3 = { id: r, announce: t4, ids: [] };
            n3[l3.announce] || (n3[l3.announce] = l3, r++), n3[l3.announce].ids.includes(a3) || n3[l3.announce].ids.push(a3);
          }
        }
        return n3;
      }
      invalidatePersitentData() {
        this.persistentDataValid = false;
      }
      async getTorrentDetails(e3) {
        let t3 = {};
        const a3 = { ids: e3, fields: ["id", "name", "percentDone", "uploadRatio", "rateDownload", "rateUpload", "downloadedEver", "uploadedEver", "totalSize", "addedDate", "status", "errorString", "activityDate", "sizeWhenDone", "leftUntilDone", "downloadDir", "comment", "creator", "dateCreated", "magnetLink", "hashString", "secondsDownloading", "secondsSeeding", "pieceCount", "pieceSize", "files", "fileStats", "doneDate", "downloadLimit", "downloadLimited", "uploadLimit", "uploadLimited", "peer-limit", "seedRatioLimit", "seedRatioMode", "seedIdleLimit", "seedIdleMode", "bandwidthPriority", "trackers", "trackerStats", "peers", "recheckProgress"] }, n3 = await this.rpcCall("torrent-get", a3);
        if (!(n3.arguments && n3.arguments.torrents.length > 0)) throw Error("Torrent not found");
        return t3 = n3.arguments.torrents[0], t3;
      }
      async torrentAction(e3, t3, a3 = {}) {
        return "remove" != e3 && "set-location" != e3 || this.invalidatePersitentData(), this.rpcCall("torrent-" + e3, Object.assign({ ids: t3 }, a3));
      }
      async torrentAdd(e3 = {}) {
        return this.invalidatePersitentData(), this.rpcCall("torrent-add", e3);
      }
      async rpcCall(e3, t3 = {}, a3 = true, n3 = false) {
        const o2 = l.cloneDeep(t3);
        let s2 = {};
        const i2 = await this.getToken(), r2 = await this.request(e3, i2, o2, n3);
        if (r2.errorMessage) throw Error(r2.errorMessage);
        if (r2.status) if (200 === r2.status) s2 = r2.data;
        else {
          if (409 !== r2.status) throw Error("HTTP " + r2.status);
          if (this.sessionToken = this.readToken(r2), !a3) throw Error("Invalid token");
          s2 = await this.rpcCall(e3, t3, false);
        }
        if (s2.result && "success" != s2.result) throw Error(s2.result);
        return s2;
      }
      async request(e3, t3, a3 = {}, n3 = false) {
        let l2 = {};
        const o2 = ++this.lastRequestId, s2 = this.getHeaders(), i2 = this.getRequestUrl();
        t3 && (s2["X-Transmission-Session-Id"] = t3);
        const r2 = { method: e3, arguments: a3, tag: o2 }, d2 = { method: "post", headers: s2, serializer: "json", timeout: parseInt(this.options.timeout), data: {}, body: null };
        if (l2 = window.net ? await this.electronRequest(d2, r2) : await this.browserRequest(i2, d2, r2), l2.data && l2.data.tag && l2.data.tag != o2 || i2 != this.getRequestUrl()) throw Error();
        if (l2.errorMessage && n3 && o2 < this.lastRequestId) throw Error();
        return l2;
      }
      async electronRequest(e3, t3) {
        let a3 = {};
        return Object.assign(e3, { hostname: this.options.host, port: this.options.port, path: this.options.path, protocol: this.options.https ? "https:" : "http:" }), await this.timeout(1e3 * this.options.timeout, window.net.request(e3, t3)).then(((e4) => {
          a3 = e4;
        })).catch(((e4) => {
          e4.status ? a3 = e4 : e4 && (a3.errorMessage = e4);
        })), a3;
      }
      async browserRequest(e3, t3, a3) {
        let n3 = {};
        t3.body = JSON.stringify(a3);
        try {
          const resp = await this.timeout(1e3 * this.options.timeout, fetch(e3, t3));
          n3 = resp;
          if (resp.status === 409) {
            try {
              const text = await resp.text();
              const match = text.match(/X-Transmission-Session-Id:\s*([a-zA-Z0-9]+)/);
              if (match) n3._sessionTokenFromBody = match[1];
            } catch(e) {}
          } else if (resp.json && resp.ok) {
            n3.data = await resp.json();
          }
        } catch(e4) {
          n3.errorMessage = "TypeError: Failed to fetch" == e4 ? "Unable to reach host" : e4;
        }
        return n3;
      }
      getRequestUrl() {
        let e3 = this.options.https ? "https" : "http";
        return e3 += "://" + this.options.host + ":" + this.options.port + this.options.path, e3;
      }
      getHeaders(e3 = {}) {
        if (this.options.auth) {
          const t3 = "Basic " + o.from(this.options.auth.username + ":" + this.options.auth.password).toString("base64");
          e3["Authorization"] = t3;
        }
        return e3["Content-Type"] = "application/json", e3;
      }
      timeout(e3, t3) {
        return new Promise((function(a3, n3) {
          setTimeout((function() {
            n3("Unable to reach host (Timeout)");
          }), e3), t3.then(a3, n3);
        }));
      }
    }
    const c = new d();
  }, 3983: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { P: function() {
      return c;
    } });
    a2(7658);
    var n2 = a2(4870), l = a2(3640), o = a2(4571), s = a2(1867);
    const i = { colorScheme: "default", language: "default", refreshInterval: 5, timeout: 10, orderBy: "addedDate", reverse: true, selectedServer: 0, useBits: true, expandMenu: true, ipFlags: false, openMagnetLinks: false, searchByName: true, searchByDirectory: true, selectedPreset: "", rememberSelectedPreset: false, compactMode: false, showTrackerList: false }, r = { name: "Windows Torrent Server", host: (window.location.hostname || "10.0.0.91"), port: (window.location.port ? parseInt(window.location.port) : 9091), https: false }, d = [r], c = { state: (0, n2.qj)({ ...i }), getLanguage() {
      return "default" == this.state.language ? navigator.language : this.state.language;
    }, setValue(e3, t3, a3 = false) {
      null != t3 && (Object(this.state)[e3] = t3), a3 && this.saveKey(e3);
    }, async loadSettings() {
      await this.loadDefaultSettings();
      for (const e3 in this.state) await o.u.get({ key: e3 }).then(((t3) => {
        t3.value && ("boolean" == typeof Object(this.state)[e3] ? this.setValue(e3, "true" == t3.value) : "number" == typeof Object(this.state)[e3] ? this.setValue(e3, parseInt(t3.value)) : this.setValue(e3, t3.value));
      }));
    }, async loadDefaultSettings() {
      if (!(0, l.a)("capacitor") && !(0, l.a)("electron")) {
        const e3 = await Promise.resolve({ servers: [{ name: "Windows Torrent Server", host: "10.0.0.91", port: 9091, https: false }] }).catch((() => {
        }));
        if (e3) for (const t3 in e3) "servers" == t3 ? (d.length = 0, e3[t3].forEach(((e4) => {
          d.push(Object.assign({}, r, e4));
        }))) : (this.setValue(t3, e3[t3]), i[t3] = e3[t3]);
      }
    }, resetSettings() {
      for (const e3 in this.state) this.setValue(e3, i[e3], true);
    }, saveSettings() {
      for (const e3 in this.state) this.saveKey(e3);
    }, saveKey(e3) {
      this.state[e3] != i[e3] || "selectedServer" == e3 ? o.u.set({ key: e3, value: Object(this.state)[e3].toString() }) : o.u.remove({ key: e3 });
    }, async loadServerList() {
      let e3 = [];
      try {
        const raw = localStorage.getItem("CapacitorStorage.servers") || localStorage.getItem("servers");
        if (raw && raw !== "[]") e3 = JSON.parse(raw);
      } catch(err) {}
      if (!e3 || !e3.length) {
        try {
          const res = await s.k.get({ key: "servers" });
          if (res && res.value && res.value !== "[]") e3 = JSON.parse(res.value);
        } catch(err) {}
      }
      if (!e3 || !e3.length) e3 = [...d];
      return e3;
    }, saveServerList(e3) {
      s.k.set({ key: "servers", value: JSON.stringify(e3) });
    }, async loadPresets() {
      let e3 = {};
      return await o.u.get({ key: "presets" }).then(((t3) => {
        t3.value && (e3 = JSON.parse(t3.value));
      })), e3;
    }, savePresets(e3) {
      o.u.set({ key: "presets", value: JSON.stringify(e3) });
    } };
  }, 5145: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { c: function() {
      return _;
    } });
    a2(7658);
    var n2 = a2(3640), l = a2(9004), o = a2(9461), s = a2(5137), i = a2(9807), r = a2(2634), d = a2(3079), c = a2(9594), u = a2(5241), p = a2(842), m = a2(3983), h = a2(538), f = a2(7539), w = a2(381), g = a2.n(w), b = a2(6631), v = a2(1315), k = a2(8764)["lW"];
    const S = {}, _ = { formatBytes(e3, t3 = 2, a3 = false) {
      if (void 0 === e3 || e3 < 0) return;
      const n3 = a3 && m.P.state.useBits, l2 = n3 ? 1e3 : 1024;
      let o2 = n3 ? h.g.units.bit : h.g.units.byte;
      a3 && (o2 += h.g.units.perSecond);
      const s2 = t3 < 0 ? 0 : t3, i2 = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
      if (0 === e3) return "0 " + o2;
      const r2 = n3 ? 8 * e3 : e3, d2 = Math.floor(Math.log(r2) / Math.log(l2));
      return (r2 / Math.pow(l2, d2)).toLocaleString(m.P.getLanguage(), { maximumFractionDigits: s2 }) + " " + i2[d2] + o2;
    }, getPercent(e3 = 0) {
      return (100 * e3).toLocaleString(m.P.getLanguage(), { maximumFractionDigits: 2 }) + "%";
    }, getRatio(e3 = 0, t3 = 3) {
      return e3.toLocaleString(m.P.getLanguage(), { maximumFractionDigits: t3 });
    }, durationToString(e3) {
      if (e3 < 0) return "\u221E";
      g().locale(m.P.getLanguage());
      const t3 = g().duration(e3);
      return t3.humanize();
    }, secondsToDate(e3, t3 = false, a3 = false) {
      if (0 === e3) return h.g.never;
      g().locale(m.P.getLanguage());
      const n3 = g()(1e3 * e3);
      let l2 = n3.format(a3 && n3.isSame(Date.now(), "day") ? "LT" : "L LT");
      return t3 && (l2 += " (" + this.timeSince(e3) + ")"), l2;
    }, timeSince(e3) {
      g().locale(m.P.getLanguage());
      const t3 = g().duration(Date.now() - 1e3 * e3);
      return h.g.formatString(h.g.ago, t3.humanize());
    }, autoLink(e3) {
      return f.ZP.link(e3, { stripPrefix: false, stripTrailingSlash: false, sanitizeHtml: true });
    }, async clipboardCopy(e3) {
      let t3;
      if ((0, n2.a)("capacitor")) t3 = i.T.write({ string: e3 });
      else if (navigator.clipboard && navigator.clipboard.writeText) t3 = navigator.clipboard.writeText(e3);
      else {
        const t4 = document.createElement("input");
        document.body.appendChild(t4), t4.value = e3, t4.focus(), t4.select();
        const a3 = document.execCommand("copy");
        if (t4.remove(), !a3) throw Error("Failed to copy text.");
      }
      return t3;
    }, async ipToCountry(e3) {
      const t3 = null != S[e3];
      return t3 && "loading" != S[e3] ? S[e3] : t3 ? void 0 : (S[e3] = "loading", S[e3] = await fetch(`https://api.country.is/${e3}`).then(((e4) => e4.json())), S[e3]);
    }, trackerDomain(e3) {
      let t3 = {};
      const a3 = /^(\w+):\/\/([\w\d\.-]+):?(\d+)?/, n3 = e3.match(a3);
      return n3 && (t3 = { protocol: n3[1], domain: n3[2], port: n3[3] || 80 }), t3;
    }, actionStatusResult(e3, t3, a3) {
      switch (e3) {
        case "start":
        case "start-now":
          return 1 == a3 ? 6 : 4;
        case "verify":
          return 2;
        case "stop":
          return 0;
        default:
          return t3;
      }
    }, getTorrentFilters(e3) {
      const t3 = [0];
      return 1e3 * e3.activityDate > Date.now() - 6e4 && t3.push(1), 4 == e3.status && t3.push(2), 6 == e3.status && t3.push(3), 1 == e3.percentDone && t3.push(4), 0 == e3.status && t3.push(5), "" != e3.errorString && t3.push(6), 3 == e3.status && t3.push(7), 1 != e3.status && 2 != e3.status || t3.push(8), t3;
    }, setTheme(e3) {
      const t3 = window.matchMedia("(prefers-color-scheme: dark)").matches || window.navigator.userAgent.includes("AndroidDarkMode");
      let a3;
      switch (e3) {
        case "light":
          a3 = false;
          break;
        case "dark":
          a3 = true;
          break;
        default:
          a3 = t3;
          break;
      }
      document.body.classList.toggle("dark", a3), (0, n2.a)("ios") && p.N1.setStyle({ style: a3 ? p.vM.Dark : p.vM.Light }), this.setStatusBarColor(a3);
    }, async responseToast(e3) {
      let t3;
      switch (e3) {
        case "success":
          t3 = h.g.success;
          break;
        case "":
          t3 = h.g.error.error;
          break;
        default:
          t3 = this.localizeError(e3);
          break;
      }
      await r.F.show({ text: t3 });
      try {
        await d.I.isEnabled() && await d.I.speak({ value: t3, language: m.P.getLanguage() });
      } catch (a3) {
        return;
      }
    }, localizeError(e3) {
      let t3, a3 = e3 ? e3.toLowerCase() : "";
      const n3 = a3.match(/net::[a-z_]+/);
      switch (a3 = n3 ? n3[0] : a3, a3) {
        case "unable to reach host (timeout)":
        case "net::err_connection_timed_out":
          t3 = h.g.error.timeout;
          break;
        case "net::err_internet_disconnected":
        case "net::err_network_changed":
        case "net::err_address_unreachable":
          t3 = h.g.error.noInternetConnection;
          break;
        case "unable to reach host":
        case "net::err_connection_refused":
          t3 = h.g.error.hostUnreachable;
          break;
        case "unable to reach transmission daemon":
          t3 = h.g.error.daemonUnreachable;
          break;
        case "invalid token":
          t3 = h.g.error.invalidToken;
          break;
        case "authentication error":
          t3 = h.g.error.authenticationError;
          break;
        case "torrent not found":
          t3 = h.g.error.torrentNotFound;
          break;
        case "unregistered torrent":
          t3 = h.g.error.unregisteredTorrent;
          break;
        case "invalid argument":
          t3 = h.g.error.invalidArgument;
          break;
        case "http -1":
          t3 = h.g.error.requestAborted;
          break;
        case "connection failed":
          t3 = h.g.error.connectionFailed;
          break;
        case "could not connect to tracker":
          t3 = h.g.error.trackerConnectionError;
          break;
        case 'no data found! ensure your drives are connected or use "set location". to re-download, remove the torrent and re-add it.':
          t3 = h.g.error.noDataFound;
          break;
        case "download directory path is not absolute":
          t3 = h.g.error.pathNotAbsolute;
          break;
        case "tracker did not respond":
          t3 = h.g.error.trackerDidNotRespond;
          break;
        case "not found":
          t3 = h.g.error.notFound;
          break;
        case "no response":
          t3 = h.g.error.noResponse;
          break;
        default:
          t3 = e3;
          break;
      }
      if (t3) {
        const e4 = t3.match(/Tracker gave HTTP response code (\d+) \(([\w\s]+)\)/);
        e4 && (t3 = h.g.formatString(h.g.error.trackerResponseCode, e4[1], this.localizeError(e4[2])).toString());
      }
      return t3;
    }, customScrollbar(e3, t3 = true, a3 = true) {
      if (e3 && (0, n2.a)("desktop")) {
        let n3;
        n3 = e3.$el ? e3.$el : e3;
        const l2 = document.createElement("style");
        l2.textContent = "\n      ::-webkit-scrollbar {\n          width: 6px;\n          height: 6px;\n      }\n\n      ::-webkit-scrollbar-track {\n          background:transparent;\n      }\n\n      ::-webkit-scrollbar-thumb {\n          background:rgba(127,127,127,.2);\n          border-radius:3px;\n      }\n\n      ::-webkit-scrollbar-thumb:hover {\n          background:rgba(127,127,127,.5);\n      }\n      ", a3 && (l2.textContent += "\n          ::-webkit-scrollbar-button:increment {\n            height:var(--offset-bottom);\n          }\n\n          ::-webkit-scrollbar-button:decrement {\n              height:var(--offset-top);\n          }\n          "), t3 && n3.shadowRoot ? n3.shadowRoot.appendChild(l2) : n3.appendChild(l2);
      }
    }, customTitlebar() {
      window.Titlebar && (window.Titlebar.new(), window.Titlebar.shortcuts(((e3) => {
        b.f.call(e3);
      })));
    }, setStatusBarColor(e3) {
      const t3 = getComputedStyle(document.body).getPropertyValue("--ion-toolbar-background") || getComputedStyle(document.body).getPropertyValue("--ion-color-light");
      (0, n2.a)("capacitor") && ((0, n2.a)("android") || (0, n2.a)("ios")) ? (c.A_.setStyle({ style: e3 ? c.bg.Dark : c.bg.Light }), c.A_.setBackgroundColor({ color: t3 })) : (0, n2.a)("electron") && window.Titlebar && window.Titlebar.updateBackground(t3);
    }, customDirectives(e3) {
      e3.directive("longpress", { beforeMount(e4, t3) {
        let a3 = null;
        const n3 = () => {
          t3.value(parseInt(e4.getAttribute("attr-id")));
        }, l2 = (e5) => {
          "click" === e5.type && 0 !== e5.button || null === a3 && (t3.value(), a3 = setTimeout((() => {
            n3();
          }), 600));
        }, o2 = () => {
          null !== a3 && (clearTimeout(a3), a3 = null);
        };
        e4.addEventListener("mousedown", l2), e4.addEventListener("touchstart", l2, { passive: true }), e4.addEventListener("click", o2), e4.addEventListener("mouseout", o2), e4.addEventListener("mouseup", o2), e4.addEventListener("touchend", o2), e4.addEventListener("touchcancel", o2), e4.addEventListener("touchmove", o2, { passive: true });
      } });
    }, backButtonHandle() {
      v.Q.on("back", (() => {
        this.popState();
      })), (0, n2.a)("capacitor") ? (0, l.Kx)(-1, (async () => {
        const e3 = await this.getTop();
        e3.hasTop || s.g.exitApp();
      })) : window.addEventListener("popstate", ((e3) => {
        e3.origin && e3.origin !== window.location.origin || this.popState(e3);
      }));
    }, async popState(e3 = null) {
      const t3 = await this.getTop();
      t3.hasTop && (e3 == null ? void 0 : e3.preventDefault(), history.go(1)), t3.actionsheet ? t3.actionsheet.dismiss() : t3.popover ? t3.popover.dismiss() : t3.alert ? t3.alert.dismiss() : t3.modal ? t3.modal.dismiss() : t3.menu && o.m.close();
    }, pushState() {
      if (!window.history.state.modal) {
        const e3 = { modal: true };
        history.pushState(e3, "");
      }
    }, async getTop() {
      const e3 = await o.m.isOpen(), t3 = await l.Fy.getTop(), a3 = await l.Cl.getTop(), n3 = await l.oq.getTop(), s2 = await l.BO.getTop();
      return { menu: e3, modal: t3, alert: a3, popover: n3, actionsheet: s2, hasTop: e3 || t3 || a3 || n3 || s2 };
    }, async loadAppleTouchIcon() {
      var _a;
      const e3 = await fetch("./assets/icon/apple-touch-icon.png").then(((e4) => e4.blob())).then(((e4) => new Promise(((t3, a3) => {
        const n3 = new FileReader();
        n3.onloadend = () => t3(n3.result), n3.onerror = a3, n3.readAsDataURL(e4);
      }))));
      (_a = document.querySelector("link[title=ATI]")) == null ? void 0 : _a.setAttribute("href", e3);
    }, registerMagnetLinkProtocol() {
      if (!(0, n2.a)("electron") && !(0, n2.a)("capacitor")) {
        const e3 = window.location.href.replace(window.location.hash, "");
        m.P.state.openMagnetLinks ? navigator.registerProtocolHandler && navigator.registerProtocolHandler("magnet", `${e3}#%s`, "Transmissionic Magnet Handler") : navigator.unregisterProtocolHandler && navigator.unregisterProtocolHandler("magnet", `${e3}#%s`);
      }
    }, downloadFile(e3, t3, a3) {
      const l2 = k.from(e3, "utf-8").toString("base64");
      (0, n2.a)("capacitor") ? u.y.share({ filename: t3, base64Data: l2, contentType: a3 }) : fetch(`data:${a3};base64,${l2}`).then(((e4) => e4.blob())).then(((e4) => {
        const a4 = window.URL.createObjectURL(e4), n3 = document.createElement("a");
        n3.style.display = "none", n3.href = a4, n3.download = t3, document.body.appendChild(n3), n3.click(), window.URL.revokeObjectURL(a4);
      }));
    } };
  }, 4104: function(e2, t2, a2) {
    "use strict";
    a2.r(t2), a2.d(t2, { default: function() {
      return Ja;
    } });
    var n2 = a2(6252), l = a2(3577);
    const o = (e3) => ((0, n2.dD)("data-v-65990222"), e3 = e3(), (0, n2.Cn)(), e3), s = o((() => (0, n2._)("span", null, "ionic", -1))), i = ["aria-label"], r = { class: "text" }, d = { class: "bloc", "aria-label": "Download speed" }, c = { class: "bloc", "aria-label": "Upload speed" };
    function u(e3, t3, a3, o2, u2, p2) {
      const m2 = (0, n2.up)("ion-menu-button"), h2 = (0, n2.up)("ion-buttons"), f2 = (0, n2.up)("ion-title"), w2 = (0, n2.up)("ion-icon"), g2 = (0, n2.up)("ion-button"), b2 = (0, n2.up)("ion-searchbar"), v2 = (0, n2.up)("ion-toolbar"), k2 = (0, n2.up)("ion-header"), S2 = (0, n2.up)("ConnectionStatus"), _2 = (0, n2.up)("ion-label"), y2 = (0, n2.up)("ion-list-header"), W2 = (0, n2.up)("Torrent"), L2 = (0, n2.up)("ion-fab-button"), U2 = (0, n2.up)("ion-fab-list"), C2 = (0, n2.up)("ion-fab"), T2 = (0, n2.up)("VirtualScroll"), I2 = (0, n2.up)("ion-footer"), z2 = (0, n2.up)("ion-page"), D2 = (0, n2.Q2)("longpress");
      return (0, n2.wg)(), (0, n2.j4)(z2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(k2, { translucent: true }, { default: (0, n2.w5)((() => [(0, n2.Wm)(v2, null, { default: (0, n2.w5)((() => [e3.privateState.viewSearch ? (0, n2.kq)("", true) : ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Wm)(h2, { slot: "start" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(m2)])), _: 1 }), (0, n2.Wm)(f2, { id: "logo" }, { default: (0, n2.w5)((() => [(0, n2.Uk)(" Transmiss"), s])), _: 1 }), (0, n2.Wm)(h2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { onClick: t3[0] || (t3[0] = (t4) => e3.toggleSearch()), fill: "clear", "aria-label": e3.Locale.search }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.searchOutline, md: e3.searchSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"])])), _: 1 })], 64)), e3.privateState.viewSearch ? ((0, n2.wg)(), (0, n2.j4)(b2, { key: 1, id: "search", "show-cancel-button": "always", modelValue: e3.privateState.search, "onUpdate:modelValue": t3[1] || (t3[1] = (t4) => e3.privateState.search = t4), onIonCancel: t3[2] || (t3[2] = (t4) => e3.toggleSearch()), placeholder: e3.Locale.search, "cancel-button-text": e3.Locale.actions.cancel }, null, 8, ["modelValue", "placeholder", "cancel-button-text"])) : (0, n2.kq)("", true)])), _: 1 })])), _: 1 }), e3.connectionStatus.connected ? ((0, n2.wg)(), (0, n2.j4)(T2, { key: 1, id: "torrentList", fullscreen: true, items: e3.torrentOrderedList, "item-size": e3.itemSize, "key-field": "id" }, (0, n2.Nv)({ start: (0, n2.w5)((() => [(0, n2.Wm)(y2, { id: "top" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.torrentSelectedList.length) + " " + (0, l.zw)(e3.LocaleController.getPlural("torrent", e3.torrentSelectedList.length)) + " \xB7 " + (0, l.zw)(e3.Utils.formatBytes(e3.totalSize)) + " \xB7 ", 1), (0, n2._)("span", { onClick: t3[4] || (t3[4] = (...t4) => e3.openOrderPopover && e3.openOrderPopover(...t4)), tabindex: "0", "aria-label": e3.Locale.sort }, [(0, n2.Wm)(w2, { ios: e3.filterOutline, md: e3.filterSharp }, null, 8, ["ios", "md"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.sort), 1)], 8, i)])), _: 1 })])), _: 1 })])), default: (0, n2.w5)((({ item: t4 }) => [(0, n2.wy)((0, n2.Wm)(W2, { "attr-id": t4.id, torrent: t4, onSwitch: e3.switchTorrentState, onClick: (a4) => e3.torrentClick(t4), onContextmenu: (a4) => e3.longPress(a4, t4.id), class: (0, l.C_)({ selected: e3.privateState.selection.includes(t4.id), removed: e3.privateState.removed.includes(t4.id) }) }, null, 8, ["attr-id", "torrent", "onSwitch", "onClick", "onContextmenu", "class"]), [[D2, e3.longPressFallback]])])), fab: (0, n2.w5)((() => [(0, n2.Wm)(C2, { vertical: "bottom", horizontal: "end", slot: "fixed" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(L2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { icon: e3.add }, null, 8, ["icon"])])), _: 1 }), (0, n2.Wm)(U2, { side: "top" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(L2, { color: "light", "data-desc": e3.Locale.torrentFile, onClick: t3[5] || (t3[5] = (t4) => e3.inputFile()) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { ios: e3.documentOutline, md: e3.documentSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["data-desc"]), (0, n2.Wm)(L2, { color: "light", "data-desc": e3.Locale.magnet, onClick: t3[6] || (t3[6] = (t4) => e3.inputMagnet()) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { ios: e3.magnetOutline, md: e3.magnetSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["data-desc"]), (0, n2.Wm)(L2, { color: "light", "data-desc": "URL", onClick: t3[7] || (t3[7] = (t4) => e3.inputURL()) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { ios: e3.linkOutline, md: e3.linkSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 })])), _: 1 })])), _: 2 }, ["" != e3.privateState.search ? { name: "search", fn: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.noResult), 1)])), key: "0" } : void 0]), 1032, ["items", "item-size"])) : ((0, n2.wg)(), (0, n2.j4)(S2, { key: 0, onRetry: t3[3] || (t3[3] = (t4) => e3.retry()) })), e3.connectionStatus.connected ? ((0, n2.wg)(), (0, n2.j4)(I2, { key: 2, translucent: true }, { default: (0, n2.w5)((() => [e3.privateState.selection.length > 0 ? ((0, n2.wg)(), (0, n2.j4)(v2, { key: 0, id: "footer", color: "primary" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { slot: "start" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { fill: "clear", onClick: t3[8] || (t3[8] = (t4) => e3.cancelSelection()) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.closeOutline, md: e3.closeSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 }), (0, n2._)("div", r, (0, l.zw)(e3.privateState.selection.length) + " " + (0, l.zw)(e3.LocaleController.getPlural("selected", e3.privateState.selection.length)), 1), (0, n2.Wm)(h2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { fill: "clear", onClick: t3[9] || (t3[9] = (t4) => e3.torrentActions(e3.privateState.selection[0])) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.ellipsisVerticalOutline, md: e3.ellipsisVerticalSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 })])), _: 1 })) : ((0, n2.wg)(), (0, n2.j4)(v2, { key: 1, id: "footer" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { slot: "start" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { fill: "clear", onClick: t3[10] || (t3[10] = (t4) => e3.serverConfiguration()), "aria-label": e3.Locale.serverConfig }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.constructOutline, md: e3.constructSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"]), (0, n2.Wm)(g2, { fill: "clear", id: "alt-speed", onClick: t3[11] || (t3[11] = (t4) => e3.switchAltSpeed()), "aria-label": "Alternative speed", "aria-checked": e3.altSpeedEnabled() }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", color: e3.altSpeedEnabled() ? "primary" : void 0, ios: e3.altSpeedEnabled() ? e3.speedometer : e3.speedometerOutline, md: e3.speedometerSharp }, null, 8, ["color", "ios", "md"])])), _: 1 }, 8, ["aria-checked"]), (0, n2.Wm)(g2, { fill: "clear", onClick: t3[12] || (t3[12] = (t4) => e3.serverInformations()), "aria-label": e3.Locale.serverInformation }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.informationCircleOutline, md: e3.informationCircleSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"])])), _: 1 }), (0, n2.Wm)(h2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, [(0, n2._)("span", d, [(0, n2.Wm)(w2, { icon: e3.arrowDownOutline, color: "success" }, null, 8, ["icon"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(e3.downloadSpeed(), 1, true)), 1)]), (0, n2._)("span", c, [(0, n2.Wm)(w2, { icon: e3.arrowUpOutline, color: "primary" }, null, 8, ["icon"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(e3.uploadSpeed(), 1, true)), 1)])]), (0, n2.Wm)(g2, { fill: "clear", onClick: e3.openStatsPopover, "aria-label": e3.Locale.statistics }, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { slot: "icon-only", ios: e3.analyticsOutline, md: e3.analyticsSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["onClick", "aria-label"])])), _: 1 })])), _: 1 }))])), _: 1 })) : (0, n2.kq)("", true)])), _: 1 });
    }
    a2(7658);
    var p = a2(9004), m = a2(3640), h = a2(8903), f = a2(447), w = a2(9963);
    const g = { class: "swiper", ref: "swiper" }, b = { class: "swiper-wrapper" }, v = ["aria-hidden"], k = ["aria-hidden"], S = ["aria-hidden"], _ = ["aria-hidden"], y = ["aria-hidden"];
    function W(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-back-button"), d2 = (0, n2.up)("ion-buttons"), c2 = (0, n2.up)("ion-title"), u2 = (0, n2.up)("ion-icon"), p2 = (0, n2.up)("ion-button"), m2 = (0, n2.up)("ion-toolbar"), h2 = (0, n2.up)("ion-label"), f2 = (0, n2.up)("ion-segment-button"), W2 = (0, n2.up)("ion-segment"), L2 = (0, n2.up)("ion-header"), U2 = (0, n2.up)("ConnectionStatus"), C2 = (0, n2.up)("Infos"), T2 = (0, n2.up)("Options"), I2 = (0, n2.up)("Files"), z2 = (0, n2.up)("Trackers"), D2 = (0, n2.up)("Peers"), P2 = (0, n2.up)("ion-fab-button"), V2 = (0, n2.up)("ion-fab");
      return (0, n2.wg)(), (0, n2.iD)(n2.HY, null, [(0, n2.Wm)(L2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(m2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { slot: "start" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.privateState.details.name), 1)])), _: 1 }), (0, n2.Wm)(d2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(p2, { onClick: t3[1] || (t3[1] = (t4) => e3.switchTorrentState()), fill: "clear", "aria-label": 0 == e3.privateState.details.status ? e3.Locale.actions.start : e3.Locale.actions.stop }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { slot: "icon-only", ios: 0 == e3.privateState.details.status ? e3.playOutline : e3.pauseOutline, md: 0 == e3.privateState.details.status ? e3.playSharp : e3.pauseSharp }, null, 8, ["ios", "md"])])), _: 1 }, 8, ["aria-label"]), e3.privateState.modified ? ((0, n2.wg)(), (0, n2.j4)(p2, { key: 0, onClick: t3[2] || (t3[2] = (t4) => e3.saveDetails()), fill: "clear", "aria-label": "Save" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { slot: "icon-only", ios: e3.saveOutline, md: e3.saveSharp }, null, 8, ["ios", "md"])])), _: 1 })) : ((0, n2.wg)(), (0, n2.j4)(p2, { key: 1, onClick: t3[3] || (t3[3] = (t4) => e3.torrentActions()), fill: "clear", "aria-label": "Actions" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { slot: "icon-only", ios: e3.ellipsisVerticalOutline, md: e3.ellipsisVerticalSharp }, null, 8, ["ios", "md"])])), _: 1 }))])), _: 1 })])), _: 1 }), (0, n2.Wm)(m2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(W2, { ref: "tabs", onIonChange: t3[4] || (t3[4] = (t4) => e3.tabController.setTab(t4.detail.value)), modelValue: e3.tabController.state.selectedTab, "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.tabController.state.selectedTab = t4), scrollable: "" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(f2, { value: "0", id: "tab1" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.general), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: "1", id: "tab2" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.options), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: "2", id: "tab3" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.files), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: "3", id: "tab4" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.LocaleController.getForm("tracker", "other")), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: "4", id: "tab5" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.LocaleController.getForm("peer", "other")), 1)])), _: 1 })])), _: 1 })])), _: 1 }, 8, ["modelValue"])])), _: 1 })])), _: 1 }), e3.privateState.connectionStatus.loading || "" != e3.privateState.connectionStatus.error ? ((0, n2.wg)(), (0, n2.j4)(U2, { key: 0, onRetry: t3[6] || (t3[6] = (t4) => e3.loadDetails()) })) : (0, n2.kq)("", true), (0, n2.wy)((0, n2._)("div", g, [(0, n2._)("div", b, [(0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab1", "aria-hidden": 0 != e3.tabController.state.selectedTab }, [e3.tabController.isVisible(0) ? ((0, n2.wg)(), (0, n2.j4)(C2, { key: 0 })) : (0, n2.kq)("", true)], 8, v), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab2", "aria-hidden": 1 != e3.tabController.state.selectedTab }, [e3.tabController.isVisible(1) ? ((0, n2.wg)(), (0, n2.j4)(T2, { key: 0 })) : (0, n2.kq)("", true)], 8, k), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab3", "aria-hidden": 2 != e3.tabController.state.selectedTab }, [e3.tabController.isVisible(2) ? ((0, n2.wg)(), (0, n2.j4)(I2, { key: 0, onChangeDirectory: e3.changeDirectory }, null, 8, ["onChangeDirectory"])) : (0, n2.kq)("", true)], 8, S), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab4", "aria-hidden": 3 != e3.tabController.state.selectedTab }, [e3.tabController.isVisible(3) ? ((0, n2.wg)(), (0, n2.j4)(z2, { key: 0 })) : (0, n2.kq)("", true)], 8, _), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab5", "aria-hidden": 4 != e3.tabController.state.selectedTab }, [e3.tabController.isVisible(4) ? ((0, n2.wg)(), (0, n2.j4)(D2, { key: 0 })) : (0, n2.kq)("", true)], 8, y)])], 512), [[w.F8, !e3.privateState.connectionStatus.loading && "" == e3.privateState.connectionStatus.error]]), (0, n2._)("div", { class: (0, l.C_)({ "no-fab": 3 != e3.tabController.state.selectedTab }) }, [(0, n2.Wm)(V2, { vertical: "bottom", horizontal: "end", slot: "fixed", onClick: t3[7] || (t3[7] = (t4) => e3.addTracker()) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(P2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { icon: e3.add }, null, 8, ["icon"])])), _: 1 })])), _: 1 })], 2)], 64);
    }
    var L = a2(538), U = a2(6971), C = a2(5145), T = a2(3983), I = a2(3662);
    const z = { class: "alert-head" }, D = { class: "alert-title" }, P = { class: "alert-input-group" }, V = { class: "alert-checkbox-group" }, O = ["aria-checked"], j = { class: "alert-button-inner" }, x = (0, n2._)("div", { class: "alert-checkbox-icon" }, [(0, n2._)("div", { class: "alert-checkbox-inner" })], -1), A = { class: "alert-checkbox-label" }, B = { class: "alert-button-group" };
    function M(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("autocomplete"), d2 = (0, n2.up)("ion-button");
      return (0, n2.wg)(), (0, n2.iD)(n2.HY, null, [(0, n2._)("div", z, [(0, n2._)("h2", D, (0, l.zw)(e3.Locale.actions.setLocation), 1)]), (0, n2._)("div", P, [(0, n2.Wm)(r2, { items: e3.TransmissionRPC.persistentData.downloadDir, value: e3.value, onUpdate: e3.setLocation }, null, 8, ["items", "value", "onUpdate"])]), (0, n2._)("div", V, [(0, n2._)("button", { onClick: t3[0] || (t3[0] = (t4) => e3.switchMove()), type: "button", "aria-checked": e3.move, tabindex: "0", role: "checkbox", class: "alert-tappable alert-checkbox alert-checkbox-button ion-focusable sc-ion-alert-md" }, [(0, n2._)("div", j, [x, (0, n2._)("div", A, (0, l.zw)(e3.Locale.moveData), 1)])], 8, O)]), (0, n2._)("div", B, [(0, n2.Wm)(d2, { fill: "clear", onClick: t3[1] || (t3[1] = (t4) => e3.cancel()) }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.actions.cancel), 1)])), _: 1 }), (0, n2.Wm)(d2, { fill: "clear", onClick: t3[2] || (t3[2] = (t4) => e3.confirm()) }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.ok), 1)])), _: 1 })])], 64);
    }
    var F = a2(3126), E = a2(3502), R = (0, n2.aZ)({ name: "About", props: ["value"], components: { Autocomplete: F.Z, IonButton: p.YG }, data() {
      return { location: "", move: false };
    }, setup() {
      return { Locale: L.g, TransmissionRPC: E.S };
    }, mounted() {
      this.location = this.value;
    }, methods: { cancel() {
      p.Fy.dismiss();
    }, confirm() {
      p.Fy.dismiss({ location: this.location, move: this.move });
    }, switchMove() {
      this.move = !this.move;
    }, setLocation(e3) {
      this.location = e3;
    } } }), q = a2(3744);
    const H = (0, q.Z)(R, [["render", M]]);
    var $ = H;
    const Z = { class: "selectable" }, N = { class: "selectable" }, Q = { class: "selectable" }, Y = { class: "selectable" }, G = { class: "selectable" }, K = { class: "selectable" }, X = { class: "selectable" }, J = { class: "selectable" }, ee = { class: "selectable" }, te = ["innerHTML"], ae = { class: "selectable" }, ne = ["href"], le = { class: "selectable" }, oe = { class: "selectable" }, se = { class: "selectable" }, ie = { class: "selectable" }, re = { class: "selectable" }, de = { class: "selectable" }, ce = { class: "selectable" }, ue = { class: "selectable" }, pe = { class: "selectable" };
    function me(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-list-header"), d2 = (0, n2.up)("ion-label"), c2 = (0, n2.up)("ion-item"), u2 = (0, n2.up)("ion-list"), p2 = (0, n2.up)("ion-content");
      return e3.details ? ((0, n2.wg)(), (0, n2.j4)(p2, { key: 0, class: "ion-padding", ref: "content" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.information), 1)])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.name), 1), (0, n2._)("span", Z, (0, l.zw)(e3.details.name), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.downloadDir), 1), (0, n2._)("span", N, (0, l.zw)(e3.details.downloadDir), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.totalSize), 1), (0, n2._)("span", Q, [(0, n2.Uk)((0, l.zw)(e3.Utils.formatBytes(e3.details.totalSize)) + " ", 1), e3.details.totalSize != e3.details.sizeWhenDone ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.formatBytes(e3.details.sizeWhenDone)) + " " + (0, l.zw)(e3.Locale.selected.one) + ") ", 1)], 64)) : (0, n2.kq)("", true)])])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => {
        var _a2;
        return [(0, n2._)("div", null, (0, l.zw)(e3.Locale.files), 1), (0, n2._)("span", Y, (0, l.zw)((_a2 = e3.details.files) == null ? void 0 : _a2.length), 1)];
      })), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.pieces), 1), (0, n2._)("span", G, (0, l.zw)(e3.details.pieceCount) + " x " + (0, l.zw)(e3.Utils.formatBytes(e3.details.pieceSize)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.createdBy), 1), (0, n2._)("span", K, (0, l.zw)(e3.details.creator), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.createdOn), 1), (0, n2._)("span", X, (0, l.zw)(e3.Utils.secondsToDate(e3.details.dateCreated, true)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.addedOn), 1), (0, n2._)("span", J, (0, l.zw)(e3.Utils.secondsToDate(e3.details.addedDate, true)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.completedOn), 1), (0, n2._)("span", ee, (0, l.zw)(e3.Utils.secondsToDate(e3.details.doneDate, true)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.comment), 1), (0, n2._)("span", { class: "selectable", innerHTML: e3.Utils.autoLink(e3.details.comment) }, null, 8, te)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.hash), 1), (0, n2._)("span", ae, (0, l.zw)(e3.details.hashString), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.magnet), 1), (0, n2._)("a", { href: e3.details.magnetLink }, (0, l.zw)(e3.details.magnetLink), 9, ne)])), _: 1 })])), _: 1 })])), _: 1 }), (0, n2.Wm)(u2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.transfer), 1)])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.status), 1), (0, n2._)("span", le, [(0, n2.Uk)((0, l.zw)(e3.statusText[e3.details.status]) + " ", 1), 2 == e3.details.status ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Uk)(" (" + (0, l.zw)(Math.round(100 * (100 * e3.details.recheckProgress + Number.EPSILON)) / 100) + "%) ", 1)], 64)) : (0, n2.kq)("", true)])])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.tracker.one), 1), (0, n2._)("span", oe, (0, l.zw)(e3.details.trackers && e3.details.trackers.length > 0 ? e3.Utils.trackerDomain(e3.details.trackers[0].announce).domain : null), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label no-wrap" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.error.error), 1), (0, n2._)("span", se, (0, l.zw)(e3.Utils.localizeError(e3.details.errorString)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.lastActivity), 1), (0, n2._)("span", ie, (0, l.zw)(e3.Utils.secondsToDate(e3.details.activityDate, true)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.downloaded), 1), (0, n2._)("span", re, (0, l.zw)(e3.Utils.formatBytes(e3.details.downloadedEver)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.uploaded), 1), (0, n2._)("span", de, (0, l.zw)(e3.Utils.formatBytes(e3.details.uploadedEver)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.shareRatio), 1), (0, n2._)("span", ce, (0, l.zw)(e3.Utils.getRatio(e3.details.uploadRatio, 10)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.downloadTime), 1), (0, n2._)("span", ue, (0, l.zw)(e3.Utils.durationToString(1e3 * e3.details.secondsDownloading)), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { class: "label" }, { default: (0, n2.w5)((() => [(0, n2._)("div", null, (0, l.zw)(e3.Locale.seedTime), 1), (0, n2._)("span", pe, (0, l.zw)(e3.Utils.durationToString(1e3 * e3.details.secondsSeeding)), 1)])), _: 1 })])), _: 1 })])), _: 1 })])), _: 1 }, 512)) : (0, n2.kq)("", true);
    }
    var he = (0, n2.aZ)({ components: { IonContent: p.W2, IonList: p.q_, IonItem: p.Ie, IonListHeader: p.yh, IonLabel: p.Q$ }, data() {
      return { details: {}, statusText: [L.g.filters.stopped, L.g.filters.verifying, L.g.filters.verifying, L.g.filters.queued, L.g.filters.downloading, "5", L.g.filters.seeding] };
    }, setup() {
      return { Utils: C.c, Locale: L.g };
    }, created() {
      this.details = (0, n2.f3)("details");
    }, mounted() {
      C.c.customScrollbar(this.$refs.content);
    } });
    const fe = (0, q.Z)(he, [["render", me], ["__scopeId", "data-v-f2d9b6ea"]]);
    var we = fe;
    const ge = { class: "left" }, be = { class: "swiper-no-swiping", slot: "end" }, ve = { class: "left" }, ke = { class: "swiper-no-swiping", slot: "end" }, Se = { class: "left" }, _e = { class: "left" };
    function ye(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-list-header"), d2 = (0, n2.up)("ion-label"), c2 = (0, n2.up)("ion-input"), u2 = (0, n2.up)("ion-toggle"), p2 = (0, n2.up)("ion-item"), m2 = (0, n2.up)("ion-select-option"), h2 = (0, n2.up)("ion-select"), f2 = (0, n2.up)("ion-list"), w2 = (0, n2.up)("TriToggle"), g2 = (0, n2.up)("ion-content");
      return (0, n2.wg)(), (0, n2.j4)(g2, { class: "ion-padding", ref: "content" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(f2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.bandwidth), 1)])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", ge, [(0, n2.Wm)(d2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.downloadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, n2.Wm)(c2, { modelValue: e3.details.downloadLimit, "onUpdate:modelValue": t3[0] || (t3[0] = (t4) => e3.details.downloadLimit = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.details.downloadLimited }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", be, [(0, n2.Wm)(u2, { modelValue: e3.details.downloadLimited, "onUpdate:modelValue": t3[1] || (t3[1] = (t4) => e3.details.downloadLimited = t4), slot: "end", class: "swiper-no-swiping" }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", ve, [(0, n2.Wm)(d2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.uploadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, n2.Wm)(c2, { modelValue: e3.details.uploadLimit, "onUpdate:modelValue": t3[2] || (t3[2] = (t4) => e3.details.uploadLimit = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.details.uploadLimited }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", ke, [(0, n2.Wm)(u2, { modelValue: e3.details.uploadLimited, "onUpdate:modelValue": t3[3] || (t3[3] = (t4) => e3.details.uploadLimited = t4), slot: "end", class: "swiper-no-swiping" }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.peersLimit), 1)])), _: 1 }), (0, n2.Wm)(c2, { modelValue: e3.details["peer-limit"], "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.details["peer-limit"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.priority.priority), 1)])), _: 1 }), (0, n2.Wm)(h2, { placeholder: "Select One", modelValue: e3.details.bandwidthPriority, "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.details.bandwidthPriority = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, n2.w5)((() => [(0, n2.Wm)(m2, { value: 1 }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.priority.high), 1)])), _: 1 }), (0, n2.Wm)(m2, { value: 0 }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.priority.normal), 1)])), _: 1 }), (0, n2.Wm)(m2, { value: -1 }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.priority.low), 1)])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.ratio), 1)])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.useGlobalLimit), 1)])), _: 1 }), (0, n2.Wm)(w2, { value: e3.details.seedRatioMode, true: 0, onUpdate: t3[6] || (t3[6] = (t4) => e3.details.seedRatioMode = t4.checked ? 0 : 2), slot: "end" }, null, 8, ["value"])])), _: 1 }), (0, n2.Wm)(p2, { disabled: 0 == e3.details.seedRatioMode }, { default: (0, n2.w5)((() => [(0, n2._)("div", Se, [(0, n2.Wm)(d2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.seedRatioLimit), 1)])), _: 1 }), (0, n2.Wm)(c2, { modelValue: e3.details.seedRatioLimit, "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.details.seedRatioLimit = t4), modelModifiers: { number: true }, type: "number", disabled: 2 == e3.details.seedRatioMode }, null, 8, ["modelValue", "disabled"])]), (0, n2.Wm)(w2, { value: e3.details.seedRatioMode, true: 1, false: 2, onUpdate: t3[8] || (t3[8] = (t4) => e3.details.seedRatioMode = t4.checked ? 1 : t4.value), slot: "end" }, null, 8, ["value"])])), _: 1 }, 8, ["disabled"])])), _: 1 }), (0, n2.Wm)(f2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.inactivity), 1)])), _: 1 }), (0, n2.Wm)(p2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.useGlobalLimit), 1)])), _: 1 }), (0, n2.Wm)(w2, { value: e3.details.seedIdleMode, true: 0, onUpdate: t3[9] || (t3[9] = (t4) => e3.details.seedIdleMode = t4.checked ? 0 : 2), slot: "end" }, null, 8, ["value"])])), _: 1 }), (0, n2.Wm)(p2, { disabled: 0 == e3.details.seedIdleMode }, { default: (0, n2.w5)((() => [(0, n2._)("div", _e, [(0, n2.Wm)(d2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.stopWhenInactive), 1)])), _: 1 }), (0, n2.Wm)(c2, { modelValue: e3.details.seedIdleLimit, "onUpdate:modelValue": t3[10] || (t3[10] = (t4) => e3.details.seedIdleLimit = t4), modelModifiers: { number: true }, type: "number", disabled: 2 == e3.details.seedIdleMode }, null, 8, ["modelValue", "disabled"])]), (0, n2.Wm)(w2, { value: e3.details.seedIdleMode, true: 1, false: 2, onUpdate: t3[11] || (t3[11] = (t4) => e3.details.seedIdleMode = t4.checked ? 1 : t4.value), slot: "end" }, null, 8, ["value"])])), _: 1 }, 8, ["disabled"])])), _: 1 })])), _: 1 }, 512);
    }
    const We = { class: "swiper-no-swiping" };
    function Le(e3, t3, a3, l2, o2, s2) {
      const i2 = (0, n2.up)("ion-toggle");
      return (0, n2.wg)(), (0, n2.iD)("span", We, [(0, n2.Wm)(i2, { modelValue: e3.checked, "onUpdate:modelValue": t3[0] || (t3[0] = (t4) => e3.checked = t4) }, null, 8, ["modelValue"])]);
    }
    var Ue = (0, n2.aZ)({ props: ["value", "true", "false"], components: { IonToggle: p.ho }, computed: { checked: { get() {
      return this.value === this.true;
    }, set(e3) {
      let t3 = e3 ? this.true : this.false;
      this.value !== this.true && this.value !== this.false && (t3 = this.value), this.$emit("update", { checked: e3, value: t3 });
    } } } });
    const Ce = (0, q.Z)(Ue, [["render", Le]]);
    var Te = Ce, Ie = (0, n2.aZ)({ components: { TriToggle: Te, IonContent: p.W2, IonList: p.q_, IonItem: p.Ie, IonListHeader: p.yh, IonLabel: p.Q$, IonInput: p.pK, IonToggle: p.ho, IonSelect: p.t9, IonSelectOption: p.n0 }, data() {
      return { details: {} };
    }, setup() {
      return { Utils: C.c, Locale: L.g };
    }, created() {
      this.details = (0, n2.f3)("newOptions");
    }, mounted() {
      C.c.customScrollbar(this.$refs.content);
    }, computed: { speedUnit: () => "K" + (T.P.state.useBits ? L.g.units.bit : L.g.units.byte) + L.g.units.perSecond } });
    const ze = (0, q.Z)(Ie, [["render", ye], ["__scopeId", "data-v-0ab72952"]]);
    var De = ze, Pe = a2(5441);
    const Ve = (e3) => ((0, n2.dD)("data-v-5141928b"), e3 = e3(), (0, n2.Cn)(), e3), Oe = Ve((() => (0, n2._)("br", null, null, -1))), je = { class: "selectable" }, xe = Ve((() => (0, n2._)("br", null, null, -1))), Ae = { key: 0 }, Be = Ve((() => (0, n2._)("br", null, null, -1))), Me = { key: 1, class: "error selectable" }, Fe = Ve((() => (0, n2._)("br", null, null, -1))), Ee = Ve((() => (0, n2._)("br", null, null, -1))), Re = Ve((() => (0, n2._)("br", null, null, -1))), qe = Ve((() => (0, n2._)("br", null, null, -1))), He = { key: 1 }, $e = Ve((() => (0, n2._)("br", null, null, -1))), Ze = { key: 1, class: "error selectable" }, Ne = Ve((() => (0, n2._)("br", null, null, -1))), Qe = Ve((() => (0, n2._)("br", null, null, -1))), Ye = Ve((() => (0, n2._)("br", null, null, -1))), Ge = Ve((() => (0, n2._)("br", null, null, -1))), Ke = Ve((() => (0, n2._)("br", null, null, -1))), Xe = Ve((() => (0, n2._)("br", null, null, -1)));
    function Je(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-label"), d2 = (0, n2.up)("ion-list-header"), c2 = (0, n2.up)("ion-badge"), u2 = (0, n2.up)("ion-icon"), p2 = (0, n2.up)("ion-button"), m2 = (0, n2.up)("ion-buttons"), h2 = (0, n2.up)("ion-item"), f2 = (0, n2.up)("ion-card-content"), w2 = (0, n2.up)("ion-card"), g2 = (0, n2.up)("ion-infinite-scroll-content"), b2 = (0, n2.up)("ion-infinite-scroll"), v2 = (0, n2.up)("ion-content");
      return (0, n2.wg)(), (0, n2.j4)(v2, { ref: "content" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { id: "top" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.trackerCount) + " " + (0, l.zw)(e3.LocaleController.getPlural("tracker", e3.trackerCount)), 1)])), _: 1 })])), _: 1 }), ((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.displayedTrackerList, ((t4) => ((0, n2.wg)(), (0, n2.j4)(w2, { key: t4.id, class: (0, l.C_)({ removed: e3.removed.includes(t4.announce) }) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(c2, { color: "primary" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.tier) + " " + (0, l.zw)(t4.tier + 1), 1)])), _: 2 }, 1024), (0, n2.Wm)(c2, { color: "dark" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Utils.trackerDomain(t4.host).protocol), 1)])), _: 2 }, 1024), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.trackerDomain(t4.host).domain), 1)])), _: 2 }, 1024), (0, n2.Wm)(m2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(p2, { fill: "clear", color: "dark", onClick: (a4) => e3.trackerActions(t4) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { slot: "icon-only", ios: e3.ellipsisVerticalOutline, md: e3.ellipsisVerticalSharp }, null, 8, ["ios", "md"])])), _: 2 }, 1032, ["onClick"])])), _: 2 }, 1024)])), _: 2 }, 1024), (0, n2.Wm)(f2, null, { default: (0, n2.w5)((() => [(0, n2._)("p", null, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.address), 1), Oe, (0, n2._)("span", je, (0, l.zw)(t4.announce), 1), xe]), 0 !== t4.announceState ? ((0, n2.wg)(), (0, n2.iD)("p", Ae, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.announce), 1), Be, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.state) + " : ", 1), 3 == t4.announceState ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Wm)(u2, { color: "warning", ios: e3.syncCircleOutline, md: e3.syncCircleSharp }, null, 8, ["ios", "md"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.updating), 1)], 64)) : ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 1 }, [t4.lastAnnounceSucceeded ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Wm)(u2, { color: "success", ios: e3.checkmarkCircleOutline, md: e3.checkmarkCircleSharp }, null, 8, ["ios", "md"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.working), 1)], 64)) : ((0, n2.wg)(), (0, n2.iD)("span", Me, (0, l.zw)(e3.Utils.localizeError(t4.lastAnnounceResult)), 1)), t4.lastAnnounceSucceeded || t4.lastAnnounceResult.length > 0 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 2 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.timeSince(t4.lastAnnounceTime)) + ") ", 1)], 64)) : (0, n2.kq)("", true)], 64)), Fe, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.peerCount) + " : " + (0, l.zw)(t4.lastAnnouncePeerCount >= 0 ? t4.lastAnnouncePeerCount : "?"), 1), Ee, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.lastUpdate) + " : " + (0, l.zw)(e3.Utils.secondsToDate(t4.lastAnnounceTime, false, true)), 1), Re, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.nextUpdate) + " : " + (0, l.zw)(e3.Utils.secondsToDate(t4.nextAnnounceTime, false, true)), 1), qe])) : (0, n2.kq)("", true), 0 !== t4.scrapeState && 2 != t4.scrapeState ? ((0, n2.wg)(), (0, n2.iD)("p", He, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.scrape), 1), $e, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.state) + " : ", 1), 3 == t4.scrapeState ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Wm)(u2, { color: "warning", ios: e3.syncCircleOutline, md: e3.syncCircleSharp }, null, 8, ["ios", "md"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.updating), 1)], 64)) : ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 1 }, [t4.lastScrapeSucceeded ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Wm)(u2, { color: "success", ios: e3.checkmarkCircleOutline, md: e3.checkmarkCircleSharp }, null, 8, ["ios", "md"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.working), 1)], 64)) : t4.lastScrapeResult.length > 0 ? ((0, n2.wg)(), (0, n2.iD)("span", Ze, (0, l.zw)(e3.Utils.localizeError(t4.lastScrapeResult)), 1)) : ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 2 }, [(0, n2.Uk)((0, l.zw)(e3.Locale.filters.waiting), 1)], 64)), t4.lastScrapeSucceeded || t4.lastScrapeResult.length > 0 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 3 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.timeSince(t4.lastScrapeTime)) + ") ", 1)], 64)) : (0, n2.kq)("", true)], 64)), Ne, t4.seederCount >= 0 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 2 }, [(0, n2.Uk)((0, l.zw)(e3.Locale.seeders) + " : " + (0, l.zw)(t4.seederCount), 1), Qe], 64)) : (0, n2.kq)("", true), t4.leecherCount >= 0 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 3 }, [(0, n2.Uk)((0, l.zw)(e3.Locale.leechers) + " : " + (0, l.zw)(t4.leecherCount), 1), Ye], 64)) : (0, n2.kq)("", true), t4.downloadCount >= 0 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 4 }, [(0, n2.Uk)((0, l.zw)(e3.Locale.downloadCount) + " : " + (0, l.zw)(t4.downloadCount), 1), Ge], 64)) : (0, n2.kq)("", true), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.lastUpdate) + " : " + (0, l.zw)(e3.Utils.secondsToDate(t4.lastScrapeTime, false, true)), 1), Ke, (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.nextUpdate) + " : " + (0, l.zw)(e3.Utils.secondsToDate(t4.nextScrapeTime, false, true)), 1), Xe])) : (0, n2.kq)("", true)])), _: 2 }, 1024)])), _: 2 }, 1032, ["class"])))), 128)), (0, n2.Wm)(b2, { onIonInfinite: t3[1] || (t3[1] = (t4) => e3.displayMore(t4)), threshold: "100px" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { "loading-spinner": "circular" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(p2, { fill: "clear", color: "dark", onClick: t3[0] || (t3[0] = (t4) => e3.displayMore()), disabled: e3.displayedCount >= e3.trackerCount }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.displayMore), 1)])), _: 1 }, 8, ["disabled"])])), _: 1 })])), _: 1 })])), _: 1 }, 512);
    }
    var et = a2(1315), tt = (0, n2.aZ)({ components: { IonContent: p.W2, IonItem: p.Ie, IonLabel: p.Q$, IonCard: p.PM, IonCardContent: p.FN, IonIcon: p.gu, IonButton: p.YG, IonButtons: p.Sm, IonBadge: p.yp, IonInfiniteScroll: p.ju, IonInfiniteScrollContent: p.MB, IonListHeader: p.yh }, data() {
      return { details: {}, displayedCount: 0, removed: [] };
    }, watch: { "details.trackerStats.length": function() {
      this.removed = [];
    } }, setup() {
      return { Utils: C.c, Locale: L.g, LocaleController: U.A, ellipsisVerticalOutline: h.Z9b, ellipsisVerticalSharp: h.ujZ, syncCircleOutline: h.g3, syncCircleSharp: h.WUu, checkmarkCircleOutline: h.Nwd, checkmarkCircleSharp: h.rhP, add: h.IHx };
    }, created() {
      this.details = (0, n2.f3)("details"), this.displayMore();
    }, mounted() {
      C.c.customScrollbar(this.$refs.content), et.Q.on("add-tracker", this.addTracker), et.Q.on("unmount-torrent-details", (() => {
        et.Q.off("add-tracker", this.addTracker);
      }));
    }, computed: { displayedTrackerList: function() {
      const e3 = [];
      for (let t3 = 0; t3 < this.displayedCount; t3++) this.details.trackerStats[t3] && e3.push(this.details.trackerStats[t3]);
      return e3;
    }, trackerCount: function() {
      return this.details.trackerStats.length;
    } }, methods: { displayMore(e3) {
      this.details && (this.displayedCount = this.displayedCount + 5), this.displayedCount > this.trackerCount && (this.displayedCount = this.trackerCount), e3 && e3.target.complete();
    }, async addTracker() {
      const e3 = await p.Cl.create({ header: L.g.addTracker, inputs: [{ name: "address", placeholder: L.g.address }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.ok, handler: (e4) => {
        const t3 = { trackerAdd: [e4.address] };
        E.S.invalidatePersitentData(), E.S.torrentAction("set", this.details.id, t3).then(((t4) => {
          C.c.responseToast(t4.result);
          const a3 = C.c.trackerDomain(e4.address), n3 = this.details.trackerStats.length, l2 = { id: n3, tier: this.details.trackerStats.length > 0 ? this.details.trackerStats[this.details.trackerStats.length - 1].tier + 1 : 0, announce: e4.address, host: a3.protocol + "://" + a3.domain + ":" + a3.port, announceState: 0, scrapeState: 0 };
          this.details.trackerStats[n3] = l2, this.displayedCount == this.trackerCount - 1 && this.displayMore();
        })).catch(((e5) => {
          C.c.responseToast(e5.message);
        }));
      } }] });
      return e3.present();
    }, async editTracker(e3) {
      const t3 = await p.Cl.create({ header: L.g.actions.editAddress, inputs: [{ name: "address", value: e3.announce }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.ok, handler: (t4) => {
        const a3 = { trackerReplace: [e3.id, t4.address] };
        E.S.invalidatePersitentData(), E.S.torrentAction("set", this.details.id, a3).then(((a4) => {
          C.c.responseToast(a4.result);
          const n3 = C.c.trackerDomain(t4.address);
          this.details.trackerStats[e3.id].announce = t4.address, this.details.trackerStats[e3.id].host = n3.protocol + "://" + n3.domain + ":" + n3.port;
        })).catch(((e4) => {
          C.c.responseToast(e4.message);
        }));
      } }] });
      return t3.present();
    }, async trackerActions(e3) {
      const t3 = await p.BO.create({ header: C.c.trackerDomain(e3.host).domain, buttons: [{ text: L.g.actions.editAddress, handler: () => {
        this.editTracker(e3);
      } }, { text: L.g.actions.remove, role: "destructive", handler: () => {
        const t4 = { trackerRemove: [e3.id] };
        E.S.invalidatePersitentData(), E.S.torrentAction("set", this.details.id, t4).then(((t5) => {
          C.c.responseToast(t5.result), this.removed.push(e3.announce);
        })).catch(((e4) => {
          C.c.responseToast(e4.message);
        }));
      } }, { text: L.g.actions.cancel, role: "cancel" }] });
      return t3.present();
    } } });
    const at = (0, q.Z)(tt, [["render", Je], ["__scopeId", "data-v-5141928b"]]);
    var nt = at;
    const lt = { class: "peer" }, ot = { class: "main" }, st = { class: "bloc fit" }, it = ["onClick"], rt = { class: "bloc right truncate" }, dt = { class: "selectable" }, ct = { class: "details" }, ut = { class: "bloc" }, pt = ["src"], mt = { class: "bloc" }, ht = ["src"], ft = { style: { float: "right" } };
    function wt(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-label"), d2 = (0, n2.up)("ion-list-header"), c2 = (0, n2.up)("ion-icon"), u2 = (0, n2.up)("VirtualScroll");
      return (0, n2.wg)(), (0, n2.j4)(u2, { ref: "content", items: e3.details.peers, "item-size": 48, "key-field": "address" }, { start: (0, n2.w5)((() => [(0, n2.Wm)(d2, { id: "top" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.details.peers.length) + " " + (0, l.zw)(e3.LocaleController.getPlural("peer", e3.details.peers.length)), 1)])), _: 1 })])), _: 1 })])), default: (0, n2.w5)((({ item: t4 }) => [(0, n2._)("div", lt, [(0, n2._)("div", ot, [(0, n2._)("div", st, [e3.flagEnabled ? ((0, n2.wg)(), (0, n2.iD)("img", (0, n2.dG)({ key: 0, class: "flag" }, e3.flagAttributes(t4.address), { onClick: (a4) => e3.countryName(t4.address), alt: "" }), null, 16, it)) : (0, n2.kq)("", true), (0, n2.Uk)(" " + (0, l.zw)(t4.address) + " ", 1), t4.isEncrypted ? ((0, n2.wg)(), (0, n2.j4)(c2, { key: 1, ios: e3.lockClosedOutline, md: e3.lockClosedSharp }, null, 8, ["ios", "md"])) : (0, n2.kq)("", true)]), (0, n2._)("div", rt, [(0, n2._)("span", dt, (0, l.zw)(t4.clientName), 1)])]), (0, n2._)("div", ct, [(0, n2._)("span", ut, [(0, n2._)("img", { class: "icon", src: e3.downIcon, alt: "Download" }, null, 8, pt), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(t4.rateToClient, 2, true)), 1)]), (0, n2._)("span", mt, [(0, n2._)("img", { class: "icon", src: e3.upIcon, alt: "Upload" }, null, 8, ht), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(t4.rateToPeer, 2, true)), 1)]), (0, n2._)("span", ft, (0, l.zw)(e3.Utils.getPercent(t4.progress)), 1)])])])), _: 1 }, 8, ["items"]);
    }
    a2(2087);
    var gt = a2(986), bt = a2(5108);
    let vt;
    var kt = (0, n2.aZ)({ components: { VirtualScroll: gt.Z, IonIcon: p.gu, IonListHeader: p.yh, IonLabel: p.Q$ }, data() {
      return { downIcon: "./assets/down.png", upIcon: "./assets/up.png", details: {}, flags: {} };
    }, computed: { flagEnabled() {
      return T.P.state.ipFlags;
    } }, setup() {
      return { Utils: C.c, Locale: L.g, LocaleController: U.A, lockClosedOutline: h.hkI, lockClosedSharp: h.UmF };
    }, created() {
      this.details = (0, n2.f3)("details");
      try {
        vt = new Intl.DisplayNames([T.P.getLanguage()], { type: "region" });
      } catch (e3) {
        bt.error("Intl.DisplayNames not supported");
      }
    }, methods: { flagAttributes(e3) {
      if (T.P.state.ipFlags) return this.flags[e3] || this.loadFlag(e3), this.flags[e3];
    }, async countryName(e3) {
      C.c.responseToast(this.flags[e3].name);
    }, async loadFlag(e3) {
      const t3 = await C.c.ipToCountry(e3);
      if (t3) {
        let a3 = t3.country;
        vt && (a3 = vt.of(t3.country)), this.flags[e3] = { src: `./assets/flags/${t3.country}.png`, name: a3 };
      }
    } } });
    const St = (0, q.Z)(kt, [["render", wt], ["__scopeId", "data-v-75f0fbea"]]);
    var _t = St, yt = a2(1047), Wt = a2(5645), Lt = a2(6948), Ut = a2(7420), Ct = a2(6150), Tt = a2(6486), It = (0, n2.aZ)({ name: "TorrentDetails", props: ["id", "name"], components: { ConnectionStatus: f.Z, Infos: we, Options: De, Files: Pe.Z, Trackers: nt, Peers: _t, IonHeader: p.Gu, IonTitle: p.wd, IonToolbar: p.sr, IonButtons: p.Sm, IonBackButton: p.oU, IonSegment: p.cJ, IonSegmentButton: p.GO, IonLabel: p.Q$, IonIcon: p.gu, IonButton: p.YG, IonFab: p.IJ, IonFabButton: p.W4 }, data() {
      return { sharedState: T.P.state, privateState: { details: {}, newOptions: {}, modified: false, connectionStatus: {}, refreshInterval: null, currentDirectory: "", optionKeys: ["downloadLimit", "downloadLimited", "uploadLimit", "uploadLimited", "seedRatioMode", "seedRatioLimit", "seedIdleMode", "seedIdleLimit", "peer-limit", "bandwidthPriority"] } };
    }, provide() {
      return { id: (0, n2.Fl)((() => this.id)), details: (0, n2.Fl)((() => this.privateState.details)), newOptions: (0, n2.Fl)((() => this.privateState.newOptions)), fileStats: (0, n2.Fl)((() => this.privateState.newOptions.fileStats)), currentDirectory: (0, n2.Fl)((() => this.privateState.currentDirectory)) };
    }, watch: { "privateState.newOptions": { handler: function() {
      this.privateState.modified = !Tt.isEqual(this.optionList(this.privateState.details), this.optionList(this.privateState.newOptions));
    }, deep: true } }, setup() {
      C.c.pushState();
      const e3 = new yt.Z();
      return { Locale: L.g, LocaleController: U.A, Utils: C.c, tabController: e3, playOutline: h.AO3, pauseOutline: h.Q48, playSharp: h.IoO, pauseSharp: h.iFW, saveOutline: h.Z8j, saveSharp: h.qDY, ellipsisVerticalOutline: h.Z9b, ellipsisVerticalSharp: h.ujZ, add: h.IHx };
    }, created() {
      this.privateState.connectionStatus = (0, n2.f3)("connectionStatus"), this.privateState.details.name = this.name, this.loadDetails(), this.privateState.refreshInterval = setInterval((() => {
        this.privateState.connectionStatus.loading || "" != this.privateState.connectionStatus.error || this.loadDetails(true);
      }), 1e3 * this.sharedState.refreshInterval);
    }, mounted() {
      C.c.customScrollbar(this.$refs.tabs, false, false), C.c.customScrollbar(this.$refs.content), this.tabController.init(this.$refs.swiper, this.$refs.tabs), et.Q.on("unmount-torrent-details", (() => {
        clearInterval(this.privateState.refreshInterval);
      }));
    }, methods: { addTracker() {
      et.Q.emit("add-tracker");
    }, async loadDetails(e3 = false) {
      e3 || (this.privateState.connectionStatus.error = "", this.privateState.connectionStatus.loading = true), await E.S.getTorrentDetails(this.id).then(((e4) => {
        this.privateState.connectionStatus.error = "", this.privateState.connectionStatus.connected = true, this.privateState.details = e4;
      })).catch(((e4) => {
        e4.message && (this.privateState.connectionStatus.connected = false, this.privateState.connectionStatus.error = e4.message);
      })), T.P.state.useBits && (this.privateState.details.downloadLimit = 8 * this.privateState.details.downloadLimit, this.privateState.details.uploadLimit = 8 * this.privateState.details.uploadLimit), this.privateState.modified || (this.privateState.newOptions = Tt.cloneDeep(this.privateState.details)), this.privateState.connectionStatus.loading = false;
    }, optionList(e3) {
      const t3 = Tt.pickBy(e3, ((e4, t4) => this.privateState.optionKeys.includes(t4)));
      return t3.fileStats = Tt.map(e3.fileStats, ((e4) => ({ priority: e4.priority, wanted: e4.wanted }))), t3;
    }, async saveDetails() {
      const e3 = await p.G0.create({});
      await e3.present();
      const t3 = {};
      this.privateState.optionKeys.forEach(((e4) => {
        t3[e4] = this.privateState.newOptions[e4];
      })), T.P.state.useBits && (t3.downloadLimit = Math.round(t3.downloadLimit / 8), t3.uploadLimit = Math.round(t3.uploadLimit / 8));
      const a3 = [], n3 = [], l2 = [], o2 = [], s2 = [];
      for (const i2 in this.privateState.newOptions.fileStats) {
        const e4 = parseInt(i2);
        switch (this.privateState.newOptions.fileStats[i2].wanted ? a3.push(e4) : n3.push(e4), this.privateState.newOptions.fileStats[i2].priority) {
          case 1:
            l2.push(e4);
            break;
          case -1:
            o2.push(e4);
            break;
          default:
            s2.push(e4);
            break;
        }
      }
      a3.length > 0 && (t3["files-wanted"] = a3), n3.length > 0 && (t3["files-unwanted"] = n3), l2.length > 0 && (t3["priority-high"] = l2), o2.length > 0 && (t3["priority-low"] = o2), s2.length > 0 && (t3["priority-normal"] = s2), await E.S.torrentAction("set", this.id, t3).then(((e4) => {
        C.c.responseToast(e4.result), this.privateState.modified = false;
      })).catch(((e4) => {
        C.c.responseToast(e4.message);
      })), e3.dismiss();
    }, async torrentActions() {
      let e3 = [{ text: L.g.formatString(L.g.actions.startNow).toString(), handler: () => this.torrentAction("start-now", this.id) }, { text: L.g.actions.setLocation, handler: async () => {
        p.BO.dismiss(), this.setLocation();
      } }, { text: L.g.actions.openInExplorer, handler: () => {
        const e4 = I.X.openExplorer(this.privateState.details);
        e4 || C.c.responseToast(L.g.error.notFound);
      } }, { text: L.g.actions.copyMagnet, handler: () => this.copyMagnet() }, { text: L.g.actions.reannounce, handler: () => this.torrentAction("reannounce", this.id) }, { text: L.g.actions.verify, handler: () => this.torrentAction("verify", this.id) }, { text: L.g.actions.remove, role: "destructive", handler: async () => {
        p.BO.dismiss(), this.removeTorrents();
      } }, { text: L.g.actions.cancel, role: "cancel" }];
      (0, m.a)("electron") || e3.splice(2, 1);
      const t3 = await p.BO.create({ buttons: e3 });
      return t3.present();
    }, copyMagnet() {
      C.c.clipboardCopy(this.privateState.details.magnetLink).then((() => {
        C.c.responseToast("success");
      })).catch(((e3) => {
        C.c.responseToast(e3);
      }));
    }, torrentAction(e3, t3) {
      E.S.torrentAction(e3, t3).then(((t4) => {
        C.c.responseToast(t4.result), this.privateState.details.status = C.c.actionStatusResult(e3, this.privateState.details.status, this.privateState.details.percentDone);
      })).catch(((e4) => {
        C.c.responseToast(e4.message);
      }));
    }, async removeTorrents() {
      const e3 = await p.Cl.create({ header: L.g.prompt.confirmation, message: L.g.formatString(L.g.prompt.remove, `"${this.privateState.details.name}"`), inputs: [{ name: "deleteData", value: "deleteData", label: L.g.prompt.deleteData, type: "checkbox" }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.prompt.confirm, handler: async (e4) => {
        E.S.torrentAction("remove", [this.id], { "delete-local-data": e4.includes("deleteData") }).then((async (e5) => {
          C.c.responseToast(e5.result), this.modalClose();
        })).catch(((e5) => {
          C.c.responseToast(e5.message);
        }));
      } }] });
      return e3.present();
    }, async setLocation() {
      const e3 = await p.Fy.create({ component: $, cssClass: "location-alert", enterAnimation: (0, m.a)("ios") ? Wt.u : Ut.i, leaveAnimation: (0, m.a)("ios") ? Lt.x : Ct.m, componentProps: { value: this.privateState.details.downloadDir } });
      return e3.onDidDismiss().then(((e4) => {
        e4.data && E.S.torrentAction("set-location", [this.id], e4.data).then((async (t3) => {
          C.c.responseToast(t3.result), this.privateState.details.downloadDir = e4.data.location;
        })).catch(((e5) => {
          C.c.responseToast(e5.message);
        }));
      })), e3.present();
    }, changeDirectory(e3) {
      this.privateState.currentDirectory = e3;
    }, modalClose() {
      p.Fy.dismiss();
    }, switchTorrentState() {
      et.Q.emit("switch", this.id), this.privateState.details.status = 0 == this.privateState.details.status ? 6 : 0;
    } } });
    const zt = (0, q.Z)(It, [["render", W]]);
    var Dt = zt;
    const Pt = { class: "swiper", ref: "swiper" }, Vt = { class: "swiper-wrapper" }, Ot = ["aria-hidden"], jt = { class: "swiper-no-swiping" }, xt = { class: "swiper-no-swiping" }, At = { class: "left" }, Bt = { class: "swiper-no-swiping", slot: "end" }, Mt = { class: "swiper-no-swiping", slot: "end" }, Ft = { class: "swiper-no-swiping", slot: "end" }, Et = ["aria-hidden"], Rt = { class: "left" }, qt = { class: "swiper-no-swiping", slot: "end" }, Ht = { class: "left" }, $t = { class: "swiper-no-swiping", slot: "end" }, Zt = { class: "swiper-no-swiping", slot: "end" }, Nt = { class: "swiper-no-swiping", slot: "end" }, Qt = { class: "left" }, Yt = { class: "swiper-no-swiping", slot: "end" }, Gt = { class: "left" }, Kt = { class: "swiper-no-swiping", slot: "end" }, Xt = ["aria-hidden"], Jt = { class: "swiper-no-swiping", slot: "end" }, ea = { class: "swiper-no-swiping", slot: "end" }, ta = { class: "ion-padding small" }, aa = { class: "swiper-no-swiping", slot: "end" }, na = { class: "swiper-no-swiping", slot: "end" }, la = { class: "swiper-no-swiping", slot: "end" }, oa = { class: "swiper-no-swiping", slot: "end" }, sa = { class: "swiper-no-swiping", slot: "end" }, ia = { class: "ion-padding small" };
    function ra(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-back-button"), d2 = (0, n2.up)("ion-buttons"), c2 = (0, n2.up)("ion-title"), u2 = (0, n2.up)("ion-icon"), p2 = (0, n2.up)("ion-button"), m2 = (0, n2.up)("ion-toolbar"), h2 = (0, n2.up)("ion-label"), f2 = (0, n2.up)("ion-segment-button"), w2 = (0, n2.up)("ion-segment"), g2 = (0, n2.up)("ion-header"), b2 = (0, n2.up)("ion-list-header"), v2 = (0, n2.up)("ion-input"), k2 = (0, n2.up)("ion-item"), S2 = (0, n2.up)("ion-toggle"), _2 = (0, n2.up)("ion-list"), y2 = (0, n2.up)("ion-content"), W2 = (0, n2.up)("ion-select-option"), L2 = (0, n2.up)("ion-select");
      return (0, n2.wg)(), (0, n2.iD)(n2.HY, null, [(0, n2.Wm)(g2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(m2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(d2, { slot: "start" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, { defaultHref: "#", onClick: t3[0] || (t3[0] = (t4) => e3.modalClose()) })])), _: 1 }), (0, n2.Wm)(c2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.serverConfig), 1)])), _: 1 }), (0, n2.Wm)(d2, { slot: "end" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(p2, { onClick: t3[1] || (t3[1] = (t4) => e3.saveSettings()), fill: "clear", "aria-label": "Save" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(u2, { slot: "icon-only", ios: e3.saveOutline, md: e3.saveSharp }, null, 8, ["ios", "md"])])), _: 1 })])), _: 1 })])), _: 1 }), (0, n2.Wm)(m2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(w2, { ref: "tabs", onIonChange: t3[2] || (t3[2] = (t4) => e3.tabController.setTab(t4.detail.value)), modelValue: e3.tabController.state.selectedTab, "onUpdate:modelValue": t3[3] || (t3[3] = (t4) => e3.tabController.state.selectedTab = t4), scrollable: "" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(f2, { value: 0, id: "tab1" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.download), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: 1, id: "tab2" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.limits), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(f2, { value: 2, id: "tab3" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.network), 1)])), _: 1 })])), _: 1 })])), _: 1 }, 8, ["modelValue"])])), _: 1 })])), _: 1 }), (0, n2._)("div", Pt, [(0, n2._)("div", Vt, [(0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab1", "aria-hidden": 0 != e3.tabController.state.selectedTab }, [(0, n2.Wm)(y2, { class: "ion-padding", ref: "tab1" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.general), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.defaultDownloadDir), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["download-dir"], "onUpdate:modelValue": t3[4] || (t3[4] = (t4) => e3.config["download-dir"] = t4) }, null, 8, ["modelValue"])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.cacheSize) + " (M" + (0, l.zw)(e3.Locale.units.byte) + ")", 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["cache-size-mb"], "onUpdate:modelValue": t3[5] || (t3[5] = (t4) => e3.config["cache-size-mb"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.startAddedTorrents), 1)])), _: 1 }), (0, n2._)("span", jt, [(0, n2.Wm)(S2, { modelValue: e3.config["start-added-torrents"], "onUpdate:modelValue": t3[6] || (t3[6] = (t4) => e3.config["start-added-torrents"] = t4), slot: "end" }, null, 8, ["modelValue"])])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.queue), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.enabled), 1)])), _: 1 }), (0, n2._)("span", xt, [(0, n2.Wm)(S2, { modelValue: e3.config["download-queue-enabled"], "onUpdate:modelValue": t3[7] || (t3[7] = (t4) => e3.config["download-queue-enabled"] = t4), slot: "end" }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, { disabled: !e3.config["download-queue-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.queueSize), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["download-queue-size"], "onUpdate:modelValue": t3[8] || (t3[8] = (t4) => e3.config["download-queue-size"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"]), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", At, [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.stopWhenInactive), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["queue-stalled-minutes"], "onUpdate:modelValue": t3[9] || (t3[9] = (t4) => e3.config["queue-stalled-minutes"] = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.config["queue-stalled-enabled"] }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", Bt, [(0, n2.Wm)(S2, { modelValue: e3.config["queue-stalled-enabled"], "onUpdate:modelValue": t3[10] || (t3[10] = (t4) => e3.config["queue-stalled-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.incompleteDownloads), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.addPartExt), 1)])), _: 1 }), (0, n2._)("span", Mt, [(0, n2.Wm)(S2, { modelValue: e3.config["rename-partial-files"], "onUpdate:modelValue": t3[11] || (t3[11] = (t4) => e3.config["rename-partial-files"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.useTempDir), 1)])), _: 1 }), (0, n2._)("span", Ft, [(0, n2.Wm)(S2, { modelValue: e3.config["incomplete-dir-enabled"], "onUpdate:modelValue": t3[12] || (t3[12] = (t4) => e3.config["incomplete-dir-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, { disabled: !e3.config["incomplete-dir-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.tempDirPath), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["incomplete-dir"], "onUpdate:modelValue": t3[13] || (t3[13] = (t4) => e3.config["incomplete-dir"] = t4) }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"])])), _: 1 })])), _: 1 }, 512)], 8, Ot), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab2", "aria-hidden": 1 != e3.tabController.state.selectedTab }, [(0, n2.Wm)(y2, { class: "ion-padding", ref: "tab2" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.bandwidth), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", Rt, [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.downloadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["speed-limit-down"], "onUpdate:modelValue": t3[14] || (t3[14] = (t4) => e3.config["speed-limit-down"] = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.config["speed-limit-down-enabled"] }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", qt, [(0, n2.Wm)(S2, { modelValue: e3.config["speed-limit-down-enabled"], "onUpdate:modelValue": t3[15] || (t3[15] = (t4) => e3.config["speed-limit-down-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", Ht, [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.uploadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ") ", 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["speed-limit-up"], "onUpdate:modelValue": t3[16] || (t3[16] = (t4) => e3.config["speed-limit-up"] = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.config["speed-limit-up-enabled"] }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", $t, [(0, n2.Wm)(S2, { modelValue: e3.config["speed-limit-up-enabled"], "onUpdate:modelValue": t3[17] || (t3[17] = (t4) => e3.config["speed-limit-up-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.altSpeed), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.enabled), 1)])), _: 1 }), (0, n2._)("span", Zt, [(0, n2.Wm)(S2, { modelValue: e3.config["alt-speed-enabled"], "onUpdate:modelValue": t3[18] || (t3[18] = (t4) => e3.config["alt-speed-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.downloadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ")", 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["alt-speed-down"], "onUpdate:modelValue": t3[19] || (t3[19] = (t4) => e3.config["alt-speed-down"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.uploadLimit) + " (" + (0, l.zw)(e3.speedUnit) + ")", 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["alt-speed-up"], "onUpdate:modelValue": t3[20] || (t3[20] = (t4) => e3.config["alt-speed-up"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.altSpeedScheduler), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.enabled), 1)])), _: 1 }), (0, n2._)("span", Nt, [(0, n2.Wm)(S2, { modelValue: e3.config["alt-speed-time-enabled"], "onUpdate:modelValue": t3[21] || (t3[21] = (t4) => e3.config["alt-speed-time-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, { disabled: !e3.config["alt-speed-time-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.altSpeedBegin), 1)])), _: 1 }), (0, n2.Wm)(v2, { type: "time", modelValue: e3.altSpeedTimeBegin, "onUpdate:modelValue": t3[22] || (t3[22] = (t4) => e3.altSpeedTimeBegin = t4) }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"]), (0, n2.Wm)(k2, { disabled: !e3.config["alt-speed-time-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.altSpeedEnd), 1)])), _: 1 }), (0, n2.Wm)(v2, { type: "time", modelValue: e3.altSpeedTimeEnd, "onUpdate:modelValue": t3[23] || (t3[23] = (t4) => e3.altSpeedTimeEnd = t4) }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"]), (0, n2.Wm)(k2, { disabled: !e3.config["alt-speed-time-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.altSpeedDays), 1)])), _: 1 }), (0, n2.Wm)(L2, { placeholder: e3.Locale.never, multiple: true, modelValue: e3.altSpeedTimeDay, "onUpdate:modelValue": t3[24] || (t3[24] = (t4) => e3.altSpeedTimeDay = t4) }, { default: (0, n2.w5)((() => [((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.getWeekDays, ((e4, t4) => ((0, n2.wg)(), (0, n2.j4)(W2, { value: t4, key: t4 }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e4), 1)])), _: 2 }, 1032, ["value"])))), 128))])), _: 1 }, 8, ["placeholder", "modelValue"])])), _: 1 }, 8, ["disabled"])])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.seed), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", Qt, [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.seedRatioLimit), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config.seedRatioLimit, "onUpdate:modelValue": t3[25] || (t3[25] = (t4) => e3.config.seedRatioLimit = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.config.seedRatioLimited }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", Yt, [(0, n2.Wm)(S2, { modelValue: e3.config.seedRatioLimited, "onUpdate:modelValue": t3[26] || (t3[26] = (t4) => e3.config.seedRatioLimited = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", Gt, [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.stopWhenInactive), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["idle-seeding-limit"], "onUpdate:modelValue": t3[27] || (t3[27] = (t4) => e3.config["idle-seeding-limit"] = t4), modelModifiers: { number: true }, type: "number", disabled: !e3.config["idle-seeding-limit-enabled"] }, null, 8, ["modelValue", "disabled"])]), (0, n2._)("span", Kt, [(0, n2.Wm)(S2, { modelValue: e3.config["idle-seeding-limit-enabled"], "onUpdate:modelValue": t3[28] || (t3[28] = (t4) => e3.config["idle-seeding-limit-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.LocaleController.getForm("peer", "other")), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.globalPeerLimit), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["peer-limit-global"], "onUpdate:modelValue": t3[29] || (t3[29] = (t4) => e3.config["peer-limit-global"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.peerLimitByTorrent), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["peer-limit-per-torrent"], "onUpdate:modelValue": t3[30] || (t3[30] = (t4) => e3.config["peer-limit-per-torrent"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 })])), _: 1 })])), _: 1 }, 512)], 8, Et), (0, n2._)("div", { class: "swiper-slide", role: "tabpanel", "aria-labelledby": "tab3", "aria-hidden": 2 != e3.tabController.state.selectedTab }, [(0, n2.Wm)(y2, { class: "ion-padding", ref: "tab3" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.general), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.encryption), 1)])), _: 1 }), (0, n2.Wm)(L2, { placeholder: "Select One", modelValue: e3.config.encryption, "onUpdate:modelValue": t3[31] || (t3[31] = (t4) => e3.config.encryption = t4), okText: e3.Locale.ok, cancelText: e3.Locale.actions.cancel }, { default: (0, n2.w5)((() => [(0, n2.Wm)(W2, { value: "required" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.required), 1)])), _: 1 }), (0, n2.Wm)(W2, { value: "preferred" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.preferred), 1)])), _: 1 }), (0, n2.Wm)(W2, { value: "tolerated" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.tolerated), 1)])), _: 1 })])), _: 1 }, 8, ["modelValue", "okText", "cancelText"])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.peerPort), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, { disabled: e3.config["peer-port-random-on-start"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.port), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["peer-port"], "onUpdate:modelValue": t3[32] || (t3[32] = (t4) => e3.config["peer-port"] = t4), modelModifiers: { number: true }, type: "number" }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"]), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.randomPortOnStart), 1)])), _: 1 }), (0, n2._)("span", Jt, [(0, n2.Wm)(S2, { modelValue: e3.config["peer-port-random-on-start"], "onUpdate:modelValue": t3[33] || (t3[33] = (t4) => e3.config["peer-port-random-on-start"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.portForwarding), 1)])), _: 1 }), (0, n2._)("span", ea, [(0, n2.Wm)(S2, { modelValue: e3.config["port-forwarding-enabled"], "onUpdate:modelValue": t3[34] || (t3[34] = (t4) => e3.config["port-forwarding-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2._)("div", ta, [(0, n2.Wm)(p2, { size: "default", onClick: t3[35] || (t3[35] = (t4) => e3.testPort()) }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.testPort), 1)])), _: 1 })])])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.protocols), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.DHT) + " (DHT)", 1)])), _: 1 }), (0, n2._)("span", aa, [(0, n2.Wm)(S2, { modelValue: e3.config["dht-enabled"], "onUpdate:modelValue": t3[36] || (t3[36] = (t4) => e3.config["dht-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.LPD) + " (LPD)", 1)])), _: 1 }), (0, n2._)("span", na, [(0, n2.Wm)(S2, { modelValue: e3.config["lpd-enabled"], "onUpdate:modelValue": t3[37] || (t3[37] = (t4) => e3.config["lpd-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.PEX) + " (PEX)", 1)])), _: 1 }), (0, n2._)("span", la, [(0, n2.Wm)(S2, { modelValue: e3.config["pex-enabled"], "onUpdate:modelValue": t3[38] || (t3[38] = (t4) => e3.config["pex-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.UTP) + " (\xB5TP)", 1)])), _: 1 }), (0, n2._)("span", oa, [(0, n2.Wm)(S2, { modelValue: e3.config["utp-enabled"], "onUpdate:modelValue": t3[39] || (t3[39] = (t4) => e3.config["utp-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 })])), _: 1 }), (0, n2.Wm)(_2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(b2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.blocklist), 1)])), _: 1 })])), _: 1 }), (0, n2.Wm)(k2, null, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.enabled), 1)])), _: 1 }), (0, n2._)("span", sa, [(0, n2.Wm)(S2, { modelValue: e3.config["blocklist-enabled"], "onUpdate:modelValue": t3[40] || (t3[40] = (t4) => e3.config["blocklist-enabled"] = t4) }, null, 8, ["modelValue"])])])), _: 1 }), (0, n2.Wm)(k2, { disabled: !e3.config["blocklist-enabled"] }, { default: (0, n2.w5)((() => [(0, n2.Wm)(h2, { position: "floating" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.blocklistUrl), 1)])), _: 1 }), (0, n2.Wm)(v2, { modelValue: e3.config["blocklist-url"], "onUpdate:modelValue": t3[41] || (t3[41] = (t4) => e3.config["blocklist-url"] = t4), modelModifiers: { number: true } }, null, 8, ["modelValue"])])), _: 1 }, 8, ["disabled"]), (0, n2._)("div", ia, [(0, n2.Wm)(p2, { size: "default", onClick: t3[42] || (t3[42] = (t4) => e3.updateBlocklist()) }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.updateBlocklist), 1)])), _: 1 })])])), _: 1 })])), _: 1 }, 512)], 8, Xt)])], 512)], 64);
    }
    var da = (0, n2.aZ)({ name: "Server configuration", components: { IonContent: p.W2, IonHeader: p.Gu, IonTitle: p.wd, IonToolbar: p.sr, IonButtons: p.Sm, IonBackButton: p.oU, IonSegment: p.cJ, IonSegmentButton: p.GO, IonList: p.q_, IonIcon: p.gu, IonButton: p.YG, IonLabel: p.Q$, IonListHeader: p.yh, IonItem: p.Ie, IonInput: p.pK, IonToggle: p.ho, IonSelect: p.t9, IonSelectOption: p.n0 }, data() {
      return { config: Tt.clone(E.S.sessionArguments) };
    }, setup() {
      C.c.pushState();
      const e3 = new yt.Z();
      return { Locale: L.g, LocaleController: U.A, Utils: C.c, tabController: e3, saveOutline: h.Z8j, saveSharp: h.qDY };
    }, created() {
      T.P.state.useBits && (this.config["alt-speed-up"] = 8 * this.config["alt-speed-up"], this.config["alt-speed-down"] = 8 * this.config["alt-speed-down"], this.config["speed-limit-up"] = 8 * this.config["speed-limit-up"], this.config["speed-limit-down"] = 8 * this.config["speed-limit-down"]);
    }, async mounted() {
      C.c.customScrollbar(this.$refs.tab1), C.c.customScrollbar(this.$refs.tab2), C.c.customScrollbar(this.$refs.tab3), this.tabController.init(this.$refs.swiper, this.$refs.tabs);
    }, computed: { speedUnit: () => "K" + (T.P.state.useBits ? L.g.units.bit : L.g.units.byte) + L.g.units.perSecond, altSpeedTimeBegin: { get() {
      return this.minutesToHhmm(this.config["alt-speed-time-begin"]);
    }, set(e3) {
      this.config["alt-speed-time-begin"] = this.HhmmToMinutes(e3);
    } }, altSpeedTimeEnd: { get() {
      return this.minutesToHhmm(this.config["alt-speed-time-end"]);
    }, set(e3) {
      this.config["alt-speed-time-end"] = this.HhmmToMinutes(e3);
    } }, altSpeedTimeDay: { get() {
      const e3 = (this.config["alt-speed-time-day"] >>> 0).toString(2).padStart(7, "0"), t3 = [];
      for (let a3 = 1; a3 < 7; a3++) "1" == e3[a3] && t3.push(a3 - 1);
      return "1" == e3[0] && t3.push(6), t3;
    }, set(e3) {
      let t3 = e3.includes(6) ? "1" : "0";
      for (let a3 = 0; a3 < 6; a3++) t3 += e3.includes(a3) ? "1" : "0";
      this.config["alt-speed-time-day"] = parseInt(t3, 2);
    } }, getWeekDays() {
      const e3 = T.P.getLanguage(), t3 = new Date(Date.UTC(2017, 0, 2)), a3 = [];
      for (let n3 = 0; n3 < 7; n3++) {
        const n4 = t3.toLocaleDateString(e3, { weekday: "long" }).split(" ").map(((e4) => e4.substring(0, 1).toUpperCase() + e4.substring(1))).join(" ");
        a3.push(n4), t3.setDate(t3.getDate() + 1);
      }
      return a3;
    } }, methods: { modalClose() {
      p.Fy.dismiss();
    }, minutesToHhmm(e3) {
      const t3 = Math.floor(e3 / 60), a3 = e3 % 60;
      return `${t3.toString().padStart(2, "0")}:${a3.toString().padStart(2, "0")}`;
    }, HhmmToMinutes(e3) {
      const t3 = e3.split(":");
      return 60 * parseInt(t3[0]) + parseInt(t3[1]);
    }, async updateBlocklist() {
      const e3 = await p.G0.create({});
      await e3.present(), await E.S.rpcCall("blocklist-update").then(((e4) => {
        const t3 = e4.arguments["blocklist-size"].toLocaleString(T.P.getLanguage());
        C.c.responseToast(L.g.formatString(L.g.blocklistSize, t3).toString());
      })).catch(((e4) => {
        C.c.responseToast(e4.message);
      })), e3.dismiss();
    }, async testPort() {
      const e3 = await p.G0.create({});
      await e3.present(), await E.S.rpcCall("port-test").then(((e4) => {
        C.c.responseToast(e4.arguments["port-is-open"] ? L.g.success : L.g.error.error);
      })).catch(((e4) => {
        C.c.responseToast(e4.message);
      })), e3.dismiss();
    }, async saveSettings() {
      const e3 = await p.G0.create({});
      await e3.present();
      const t3 = Tt.clone(this.config), a3 = {};
      T.P.state.useBits && (t3["alt-speed-up"] = Math.round(t3["alt-speed-up"] / 8), t3["alt-speed-down"] = Math.round(t3["alt-speed-down"] / 8), t3["speed-limit-up"] = Math.round(t3["speed-limit-up"] / 8), t3["speed-limit-down"] = Math.round(t3["speed-limit-down"] / 8));
      for (const n3 in t3) Tt.isEqual(t3[n3], E.S.sessionArguments[n3]) || (a3[n3] = t3[n3]);
      await E.S.setSession(a3).then(((e4) => {
        C.c.responseToast(e4.result);
      })), e3.dismiss();
    } } });
    const ca = (0, q.Z)(da, [["render", ra], ["__scopeId", "data-v-c3b2541e"]]);
    var ua = ca;
    const pa = { key: 0, class: "order" }, ma = { class: "right" }, ha = ["title"], fa = { class: "line" }, wa = { class: "bloc fit" }, ga = ["src", "alt"], ba = { class: "bloc fit" }, va = ["src", "alt"], ka = { class: "line end" }, Sa = { class: "bloc fit" }, _a = ["src"], ya = { key: 0, class: "bloc truncate" }, Wa = { key: 1, class: "bloc truncate verifying" }, La = { key: 2, class: "bloc truncate" }, Ua = ["title"], Ca = { class: "bloc right fit" };
    function Ta(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-icon"), d2 = (0, n2.up)("ion-progress-bar");
      return (0, n2.wg)(), (0, n2.iD)("div", { class: (0, l.C_)({ torrent: true, condensed: e3.condensed }), tabindex: "0" }, [e3.orderByPosition ? ((0, n2.wg)(), (0, n2.iD)("div", pa, [(0, n2.Wm)(r2, { md: e3.caretUpSharp, ios: e3.caretUpOutline, color: "medium", onClick: t3[0] || (t3[0] = (t4) => e3.changeTorrentPosition(t4, true)) }, null, 8, ["md", "ios"]), (0, n2.Wm)(r2, { md: e3.caretDownSharp, ios: e3.caretDownOutline, color: "medium", onClick: t3[1] || (t3[1] = (t4) => e3.changeTorrentPosition(t4, false)) }, null, 8, ["md", "ios"])])) : ((0, n2.wg)(), (0, n2.iD)("div", { key: 1, class: (0, l.C_)(["control", { paused: 0 == e3.torrent.status }]), onClick: t3[2] || (t3[2] = (t4) => e3.switchTorrentState(t4)) }, null, 2)), (0, n2._)("div", ma, [(0, n2._)("div", { class: "title", title: e3.torrent.name }, (0, l.zw)(e3.torrent.name), 9, ha), (0, n2._)("div", { class: (0, l.C_)({ details: true, error: "" != e3.torrent.errorString }) }, [(0, n2._)("div", fa, [(0, n2._)("span", wa, [(0, n2._)("img", { class: "icon", src: e3.downIcon, alt: e3.Locale.downloaded }, null, 8, ga), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(e3.torrent.downloadedEver)) + " ", 1), e3.torrent.rateDownload > 1 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.formatBytes(e3.torrent.rateDownload, 2, true)) + ") ", 1)], 64)) : (0, n2.kq)("", true)]), (0, n2._)("span", ba, [(0, n2._)("img", { class: "icon", src: e3.upIcon, alt: e3.Locale.uploaded }, null, 8, va), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(e3.torrent.uploadedEver)) + " ", 1), e3.torrent.rateUpload > 1 ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.formatBytes(e3.torrent.rateUpload, 2, true)) + ") ", 1)], 64)) : (0, n2.kq)("", true)])]), (0, n2._)("div", ka, [(0, n2._)("span", Sa, [(0, n2._)("img", { class: "icon", src: e3.bothIcon, alt: "Ratio" }, null, 8, _a), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.getRatio(e3.torrent.uploadRatio)), 1)]), 4 == e3.torrent.status ? ((0, n2.wg)(), (0, n2.iD)("span", ya, [(0, n2.Wm)(r2, { md: e3.timeSharp, ios: e3.timeOutline }, null, 8, ["md", "ios"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.durationToString(1e3 * e3.torrent.eta)), 1)])) : 2 == e3.torrent.status ? ((0, n2.wg)(), (0, n2.iD)("span", Wa, (0, l.zw)(e3.Locale.filters.verifying) + " (" + (0, l.zw)(e3.Utils.getPercent(e3.torrent.recheckProgress)) + ") ", 1)) : 3 == e3.torrent.status ? ((0, n2.wg)(), (0, n2.iD)("span", La, [(0, n2.Wm)(r2, { md: e3.hourglassSharp, ios: e3.hourglassOutline }, null, 8, ["md", "ios"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Locale.filters.queued), 1)])) : "" != e3.torrent.errorString ? ((0, n2.wg)(), (0, n2.iD)("span", { key: 3, class: "bloc truncate error", title: e3.Utils.localizeError(e3.torrent.errorString) }, [(0, n2.Wm)(r2, { md: e3.warningSharp, ios: e3.warningOutline }, null, 8, ["md", "ios"]), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.localizeError(e3.torrent.errorString)), 1)], 8, Ua)) : (0, n2.kq)("", true), (0, n2._)("span", Ca, (0, l.zw)(e3.Utils.formatBytes(e3.torrent.sizeWhenDone)) + " (" + (0, l.zw)(e3.Utils.getPercent(e3.torrent.percentDone)) + ") ", 1)])], 2), (0, n2.Wm)(d2, { value: e3.torrent.percentDone, color: e3.ProgressBarColors[e3.torrent.status], "aria-hidden": "true" }, null, 8, ["value", "color"])])], 2);
    }
    var Ia = (0, n2.aZ)({ props: ["torrent"], components: { IonIcon: p.gu, IonProgressBar: p.X7 }, data() {
      return { downIcon: "./assets/down.png", upIcon: "./assets/up.png", bothIcon: "./assets/both.png" };
    }, setup() {
      const e3 = ["medium", "warning", "warning", "medium", "success", null, "primary"];
      return { Locale: L.g, Utils: C.c, ProgressBarColors: e3, timeSharp: h.L$7, timeOutline: h.bdY, hourglassSharp: h.T07, hourglassOutline: h.Go2, warningSharp: h.fki, warningOutline: h.OoB, caretUpSharp: h.kKV, caretUpOutline: h.yvO, caretDownSharp: h.D2O, caretDownOutline: h.Hu1 };
    }, computed: { orderByPosition() {
      return "queuePosition" == T.P.state.orderBy;
    }, condensed() {
      return T.P.state.compactMode;
    } }, methods: { switchTorrentState(e3) {
      e3.stopPropagation(), et.Q.emit("switch", this.torrent.id);
    }, changeTorrentPosition(e3, t3) {
      e3.stopPropagation(), et.Q.emit("torrent-position", { id: this.torrent.id, up: t3 });
    } } });
    const za = (0, q.Z)(Ia, [["render", Ta], ["__scopeId", "data-v-a4d508be"]]);
    var Da = za;
    function Pa(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-icon"), d2 = (0, n2.up)("ion-item"), c2 = (0, n2.up)("ion-list");
      return (0, n2.wg)(), (0, n2.j4)(c2, { lines: "none" }, { default: (0, n2.w5)((() => [((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.privateState.orders, ((t4) => ((0, n2.wg)(), (0, n2.j4)(d2, { button: "", key: t4.value, onClick: (a4) => e3.setOrder(t4.value), detail: "false" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(t4.label) + " ", 1), e3.sharedState.orderBy == t4.value ? ((0, n2.wg)(), (0, n2.j4)(r2, { key: 0, ios: e3.sharedState.reverse ? e3.caretDownOutline : e3.caretUpOutline, md: e3.sharedState.reverse ? e3.caretDownSharp : e3.caretUpSharp, slot: "end" }, null, 8, ["ios", "md"])) : (0, n2.kq)("", true)])), _: 2 }, 1032, ["onClick"])))), 128))])), _: 1 });
    }
    var Va = (0, n2.aZ)({ name: "OrderPopover", components: { IonList: p.q_, IonItem: p.Ie, IonIcon: p.gu }, data() {
      return { sharedState: T.P.state, privateState: { orders: [{ value: "name", label: L.g.name }, { value: "addedDate", label: L.g.addedDate }, { value: "sizeWhenDone", label: L.g.size }, { value: "uploadRatio", label: L.g.ratio }, { value: "uploadedEver", label: L.g.uploaded }, { value: "rateUpload", label: L.g.uploadSpeed }, { value: "activityDate", label: L.g.lastActivity }, { value: "queuePosition", label: L.g.queuePosition }] } };
    }, setup() {
      return C.c.pushState(), { Locale: L.g, caretDownOutline: h.Hu1, caretUpOutline: h.yvO, caretDownSharp: h.D2O, caretUpSharp: h.kKV };
    }, methods: { setOrder(e3) {
      e3 == this.sharedState.orderBy ? T.P.setValue("reverse", !this.sharedState.reverse, true) : (T.P.setValue("orderBy", e3, true), T.P.setValue("reverse", false, true)), p.oq.dismiss();
    } } });
    const Oa = (0, q.Z)(Va, [["render", Pa]]);
    var ja = Oa;
    const xa = (e3) => ((0, n2.dD)("data-v-42228228"), e3 = e3(), (0, n2.Cn)(), e3), Aa = { ref: "canvas", width: "290", height: "150" }, Ba = { "aria-describedby": "title" }, Ma = xa((() => (0, n2._)("th", { scope: "col" }, null, -1))), Fa = { scope: "col" }, Ea = { scope: "col" };
    function Ra(e3, t3, a3, o2, s2, i2) {
      const r2 = (0, n2.up)("ion-item"), d2 = (0, n2.up)("ion-list");
      return (0, n2.wg)(), (0, n2.j4)(d2, { id: "stats", lines: "none" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(r2, { id: "title" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(e3.Locale.statistics), 1)])), _: 1 }), (0, n2._)("canvas", Aa, null, 512), (0, n2.Wm)(r2, null, { default: (0, n2.w5)((() => [(0, n2._)("table", Ba, [(0, n2._)("tr", null, [Ma, (0, n2._)("th", Fa, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.current), 1)]), (0, n2._)("th", Ea, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.total), 1)])]), (0, n2._)("tr", null, [(0, n2._)("td", null, (0, l.zw)(e3.Locale.downloaded), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.formatBytes(e3.sessionStats["current-stats"].downloadedBytes, 1)), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.formatBytes(e3.sessionStats["cumulative-stats"].downloadedBytes, 1)), 1)]), (0, n2._)("tr", null, [(0, n2._)("td", null, (0, l.zw)(e3.Locale.uploaded), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.formatBytes(e3.sessionStats["current-stats"].uploadedBytes, 1)), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.formatBytes(e3.sessionStats["cumulative-stats"].uploadedBytes, 1)), 1)]), (0, n2._)("tr", null, [(0, n2._)("td", null, (0, l.zw)(e3.Locale.duration), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.durationToString(1e3 * e3.sessionStats["current-stats"].secondsActive)), 1), (0, n2._)("td", null, (0, l.zw)(e3.Utils.durationToString(1e3 * e3.sessionStats["cumulative-stats"].secondsActive)), 1)])])])), _: 1 })])), _: 1 });
    }
    var qa = a2(5750);
    let Ha, $a;
    qa.kL.register(...qa.zX);
    const Za = { responsive: false, plugins: { legend: { position: "bottom" }, tooltip: { callbacks: { label: function(e3) {
      return C.c.formatBytes(e3.raw, 1, true);
    } } } }, elements: { line: { borderWidth: 2, fill: true }, point: { radius: 0 } }, animation: { duration: 0 }, scales: { x: { ticks: { autoSkip: false, maxRotation: 0, minRotation: 0 }, grid: { display: false } }, y: { ticks: { callback: function(e3) {
      return C.c.formatBytes(parseInt(e3.toString()), 1, true);
    } } } } };
    var Na = (0, n2.aZ)({ name: "OrderPopover", components: { IonList: p.q_, IonItem: p.Ie }, data() {
      return { data: { labels: this.labels(), datasets: [{ label: L.g.download, data: this.dataset1(), borderColor: "rgb(47,223,117)", backgroundColor: "rgba(47,223,117,.2)" }, { label: L.g.seed, data: this.dataset2(), borderColor: "rgb(66,140,255)", backgroundColor: "rgba(66,140,255,.2)" }] }, sessionStats: E.S.sessionStats };
    }, setup() {
      return C.c.pushState(), { Locale: L.g, Utils: C.c, arrowDownOutline: h.o9Y, arrowUpOutline: h.Edm };
    }, created() {
      this.$nextTick((() => this.setDrawInterval()));
    }, beforeUnmount() {
      clearInterval($a);
    }, methods: { setDrawInterval() {
      const e3 = this.$refs.canvas;
      Ha = new qa.kL(e3, { type: "line", options: Za, data: this.data }), $a = setInterval((() => this.updateData()), 1e4);
    }, updateData() {
      this.data.labels = this.labels(), this.data.datasets[0].data = this.dataset1(), this.data.datasets[1].data = this.dataset2(), this.sessionStats = E.S.sessionStats, Ha.update();
    }, dataset1() {
      return E.S.statsHistory.map(((e3) => e3[0]));
    }, dataset2() {
      return E.S.statsHistory.map(((e3) => e3[1]));
    }, labels() {
      const e3 = [];
      for (let t3 = 0; t3 < E.S.statsHistory.length; t3++) if (0 === t3) {
        const t4 = Date.now() / 1e3 - 10 * E.S.statsHistory.length;
        e3.push(C.c.secondsToDate(t4, false, true));
      } else t3 === E.S.statsHistory.length - 1 ? e3.push(C.c.secondsToDate(Date.now() / 1e3, false, true)) : e3.push("");
      return e3;
    } } });
    const Qa = (0, q.Z)(Na, [["render", Ra], ["__scopeId", "data-v-42228228"]]);
    var Ya = Qa, Ga = a2(6631), Ka = (0, n2.aZ)({ name: "list", data() {
      return { torrentList: [], filter: 0, filterIds: [], connectionStatus: {}, sharedState: T.P.state, privateState: { viewSearch: false, search: "", viewPopover: false, needFallback: false, selection: [], removed: [], altSpeedEnabled: false } };
    }, components: { ConnectionStatus: f.Z, VirtualScroll: gt.Z, Torrent: Da, IonButtons: p.Sm, IonHeader: p.Gu, IonMenuButton: p.fG, IonPage: p._i, IonTitle: p.wd, IonToolbar: p.sr, IonIcon: p.gu, IonButton: p.YG, IonSearchbar: p.VI, IonFooter: p.fr, IonFab: p.IJ, IonFabButton: p.W4, IonFabList: p.zq, IonLabel: p.Q$, IonListHeader: p.yh }, computed: { torrentSelectedList: function() {
      let e3 = this.torrentList;
      const t3 = this.filter, a3 = this.privateState.removed, n3 = this.privateState.selection;
      if (this.filterIds.length > 0 && (e3 = Tt.filter(e3, ((e4) => this.filterIds.includes(e4.id)))), e3 = Tt.filter(e3, (function(e4) {
        return !a3.includes(e4.id) && (9 == t3 ? n3.includes(e4.id) : C.c.getTorrentFilters(e4).includes(t3));
      })), "" != this.privateState.search) {
        const t4 = this.privateState.search.toLowerCase();
        e3 = Tt.filter(e3, (function(e4) {
          let a4 = false;
          return T.P.state.searchByName && (a4 = e4.name.toLowerCase().replace(/\./g, " ").indexOf(t4.replace(/\./g, " ")) >= 0), T.P.state.searchByDirectory && !a4 && (a4 = e4.downloadDir.toLowerCase().indexOf(t4) >= 0), a4;
        }));
      }
      return e3;
    }, torrentOrderedList: function() {
      const e3 = [this.sharedState.reverse ? "desc" : "asc"];
      return "name" == this.sharedState.orderBy ? Tt.orderBy(this.torrentSelectedList, [(e4) => e4.name.toString().toLowerCase()], e3) : Tt.orderBy(this.torrentSelectedList, [this.sharedState.orderBy], e3);
    }, uploadSpeed: function() {
      return () => E.S.sessionStats ? E.S.sessionStats.uploadSpeed : 0;
    }, downloadSpeed: function() {
      return () => E.S.sessionStats ? E.S.sessionStats.downloadSpeed : 0;
    }, itemSize() {
      return T.P.state.compactMode ? 46 : 72;
    }, totalSize: function() {
      return this.torrentSelectedList.reduce((function(e3, t3) {
        return e3 + t3.percentDone * t3.sizeWhenDone;
      }), 0);
    } }, setup() {
      return { Locale: L.g, LocaleController: U.A, Utils: C.c, searchOutline: h.W6I, searchSharp: h.YJw, filterOutline: h.t42, filterSharp: h.w50, add: h.IHx, documentOutline: h.Pf6, documentSharp: h.Rxr, magnetOutline: h.LTP, magnetSharp: h.mvx, closeOutline: h.fID, closeSharp: h.Uy3, ellipsisVerticalOutline: h.Z9b, ellipsisVerticalSharp: h.ujZ, speedometer: h.kAS, speedometerOutline: h.hkG, speedometerSharp: h.m7O, informationCircleOutline: h.yo2, informationCircleSharp: h.ztb, arrowDownOutline: h.o9Y, arrowUpOutline: h.Edm, constructOutline: h.a98, constructSharp: h.KX5, linkOutline: h.m5T, linkSharp: h.kR0, analyticsOutline: h.VAV, analyticsSharp: h.U0d };
    }, async created() {
      this.torrentList = (0, n2.f3)("torrentList"), this.filter = (0, n2.f3)("filter"), this.filterIds = (0, n2.f3)("filterIds"), this.connectionStatus = (0, n2.f3)("connectionStatus");
    }, mounted() {
      et.Q.on("switch", ((e3) => this.switchTorrentState(e3))), et.Q.on("clear-selection", this.cancelSelection), et.Q.on("torrent-position", ((e3) => this.changeTorrentPosition(e3.id, e3.up))), et.Q.on("add-torrent", this.inputFile), et.Q.on("add-magnet", this.inputMagnet), et.Q.on("add-url", this.inputURL), et.Q.on("select-all", this.selectAll), et.Q.on("toggle-search", this.toggleSearch), et.Q.on("info-server", this.serverInformations), et.Q.on("config-server", this.serverConfiguration);
    }, methods: { toggleSearch() {
      this.privateState.viewSearch = !this.privateState.viewSearch, this.privateState.viewSearch ? setTimeout((() => {
        const e3 = document.querySelector("#search");
        e3 == null ? void 0 : e3.setFocus();
      }), 100) : this.privateState.search = "";
    }, retry() {
      et.Q.emit("refresh", true);
    }, async openOrderPopover(e3) {
      et.Q.emit("swipe-enabled", false);
      const t3 = await p.oq.create({ component: ja, event: e3, translucent: true, showBackdrop: (0, m.a)("ios") });
      return t3.onDidDismiss().then((() => et.Q.emit("swipe-enabled", true))), t3.present();
    }, async openStatsPopover(e3) {
      et.Q.emit("swipe-enabled", false);
      const t3 = await p.oq.create({ component: Ya, event: e3, translucent: true, cssClass: "stats-popover", showBackdrop: (0, m.a)("ios") });
      return t3.onDidDismiss().then((() => et.Q.emit("swipe-enabled", true))), t3.present();
    }, async torrentClick(e3) {
      if (!(this.privateState.selection.length > 0 || Ga.f.isPressed("Shift"))) {
        const t3 = await p.Fy.create({ component: Dt, componentProps: { id: e3.id, name: e3.name } });
        return t3.onDidDismiss().then((() => {
          et.Q.emit("refresh", false), et.Q.emit("unmount-torrent-details");
        })), t3.present();
      }
      this.selectTorrent(e3.id);
    }, switchTorrentState(e3) {
      const t3 = this.getTorrentsByIds([e3])[0];
      0 === t3.status ? this.torrentAction("start", [t3.id]) : this.torrentAction("stop", [t3.id]);
    }, altSpeedEnabled() {
      return E.S.sessionArguments && (this.privateState.altSpeedEnabled = E.S.sessionArguments["alt-speed-enabled"]), this.privateState.altSpeedEnabled;
    }, switchAltSpeed() {
      E.S.setSession({ "alt-speed-enabled": !this.altSpeedEnabled() }).then(((e3) => {
        C.c.responseToast(e3.result), this.privateState.altSpeedEnabled = !this.privateState.altSpeedEnabled;
      }));
    }, torrentAction(e3, t3) {
      E.S.torrentAction(e3, t3).then(((a3) => {
        C.c.responseToast(a3.result);
        for (const n3 of this.getTorrentsByIds(t3)) n3.status = C.c.actionStatusResult(e3, n3.status, n3.percentDone);
      })).catch(((e4) => {
        C.c.responseToast(e4.message);
      }));
    }, getTorrentsByIds(e3) {
      return Tt.filter(this.torrentList, (function(t3) {
        return e3.includes(t3.id);
      }));
    }, selectTorrent(e3, t3 = true) {
      this.privateState.selection.includes(e3) ? t3 && this.privateState.selection.splice(this.privateState.selection.indexOf(e3), 1) : this.privateState.selection.push(e3);
    }, async selectAll() {
      const e3 = await p.Fy.getTop();
      if (!e3) for (const t3 of this.torrentOrderedList) this.selectTorrent(t3.id, false);
    }, cancelSelection() {
      this.privateState.selection = [];
    }, async removeTorrents(e3) {
      const t3 = this.getTorrentsByIds(e3), a3 = 1 == e3.length ? `"${t3[0].name}"` : `${e3.length} ${U.A.getForm("torrent", "other")}`, n3 = await p.Cl.create({ header: L.g.prompt.confirmation, message: L.g.formatString(L.g.prompt.remove, a3), inputs: [{ name: "deleteData", value: "deleteData", label: L.g.prompt.deleteData, type: "checkbox" }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.prompt.confirm, handler: (a4) => {
        E.S.torrentAction("remove", e3, { "delete-local-data": a4.includes("deleteData") }).then(((e4) => {
          C.c.responseToast(e4.result);
          for (const a5 of t3) this.privateState.removed.push(a5.id);
          this.cancelSelection();
        })).catch(((e4) => {
          C.c.responseToast(e4.message);
        }));
      } }] });
      return n3.present();
    }, async torrentActions(e3) {
      C.c.pushState();
      const t3 = this.getTorrentsByIds([e3])[0], a3 = this.privateState.selection.length > 0 ? this.privateState.selection : [t3.id];
      let n3 = [{ text: 0 == this.privateState.selection.length ? L.g.actions.select : L.g.actions.selectAll, handler: () => {
        0 == this.privateState.selection.length ? this.selectTorrent(t3.id) : this.selectAll();
      } }, { text: L.g.actions.start, handler: () => this.torrentAction("start", a3) }, { text: L.g.formatString(L.g.actions.startNow).toString(), handler: () => this.torrentAction("start-now", a3) }, { text: L.g.actions.stop, handler: () => this.torrentAction("stop", a3) }, { text: L.g.actions.reannounce, handler: () => this.torrentAction("reannounce", a3) }, { text: L.g.actions.verify, handler: () => this.torrentAction("verify", a3) }, { text: L.g.actions.setLocation, handler: () => this.setLocation(a3) }, { text: L.g.actions.openInExplorer, handler: () => {
        E.S.getTorrentDetails(t3.id).then(((e4) => {
          const t4 = I.X.openExplorer(e4);
          t4 || C.c.responseToast(L.g.error.notFound);
        }));
      } }, { text: L.g.actions.remove, role: "destructive", handler: async () => {
        p.BO.dismiss(), this.removeTorrents(a3);
      } }, { text: L.g.actions.cancel, role: "cancel" }];
      (!(0, m.a)("electron") || a3.length > 1) && n3.splice(7, 1);
      const l2 = await p.BO.create({ header: 0 == this.privateState.selection.length ? t3.name : L.g.selection, buttons: n3 });
      return l2.present();
    }, async setLocation(e3) {
      const t3 = this.getTorrentsByIds(e3);
      let a3 = t3.every(((e4, t4, a4) => e4.downloadDir === a4[0].downloadDir)) ? t3[0].downloadDir : "";
      const n3 = await p.Fy.create({ component: $, cssClass: "location-alert", enterAnimation: (0, m.a)("ios") ? Wt.u : Ut.i, leaveAnimation: (0, m.a)("ios") ? Lt.x : Ct.m, componentProps: { value: a3 } });
      return n3.onDidDismiss().then(((a4) => {
        a4.data && E.S.torrentAction("set-location", e3, a4.data).then((async (e4) => {
          C.c.responseToast(e4.result), t3.forEach(((e5) => e5.downloadDir = a4.data.location));
        })).catch(((e4) => {
          C.c.responseToast(e4.message);
        }));
      })), n3.present();
    }, changeTorrentPosition(e3, t3) {
      let a3 = -1, n3 = false;
      while (!n3 && a3 < this.torrentOrderedList.length) a3++, this.torrentOrderedList[a3].id == e3 && (n3 = true);
      const l2 = t3 ? a3 - 1 : a3 + 1;
      if (l2 >= 0 && l2 < this.torrentOrderedList.length) {
        const a4 = Math.round(this.torrentOrderedList[l2].queuePosition);
        E.S.torrentAction("set", [e3], { queuePosition: a4 }).then(((n4) => {
          C.c.responseToast(n4.result);
          const l3 = T.P.state.reverse ? -0.1 : 0.1;
          this.getTorrentsByIds([e3])[0].queuePosition = t3 ? a4 - l3 : a4 + l3;
        })).catch(((e4) => {
          C.c.responseToast(e4.message);
        }));
      }
    }, async serverInformations() {
      if (this.connectionStatus.connected) {
        C.c.pushState();
        const e3 = E.S.sessionArguments, t3 = await p.Cl.create({ header: L.g.serverInformation, message: `
              <p>
                <b>${L.g.transmissionVersion}</b><br>
                ${e3.version}
              </p>
              <p>
                <b>${L.g.freeSpace}</b><br>
                ${C.c.formatBytes(e3["download-dir-free-space"])}
              </p>
              <p>
                <b>${L.g.port}</b><br>
                ${e3["peer-port"]}
              </p>
            `, buttons: [L.g.ok] });
        return t3.present();
      }
    }, async serverConfiguration() {
      if (this.connectionStatus.connected) {
        const e3 = await p.Fy.create({ component: ua });
        return e3.present();
      }
    }, longPress(e3, t3) {
      e3 && e3.preventDefault(), this.privateState.needFallback = false, this.torrentActions(t3);
    }, longPressFallback(e3) {
      e3 ? this.privateState.needFallback && this.torrentActions(e3) : this.privateState.needFallback = true;
    }, inputFile() {
      I.X.inputFile();
    }, async inputMagnet() {
      const e3 = await p.Cl.create({ header: L.g.magnet, message: "BitTorrent info hash (BTIH)", inputs: [{ type: "textarea", name: "link", placeholder: L.g.magnetLink }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.ok, handler: (e4) => {
        I.X.readHashOrMagnet(e4.link);
      } }] });
      return e3.present();
    }, async inputURL() {
      const e3 = await p.Cl.create({ header: "URL", inputs: [{ name: "url", type: "textarea", placeholder: L.g.torrentFileLink }], buttons: [{ text: L.g.actions.cancel, role: "cancel" }, { text: L.g.ok, handler: (e4) => {
        p.G0.create({}).then(((t3) => {
          t3.present(), I.X.readURL(e4.url).then((() => {
            t3.dismiss();
          }));
        }));
      } }] });
      return e3.present();
    } } });
    const Xa = (0, q.Z)(Ka, [["render", u], ["__scopeId", "data-v-65990222"]]);
    var Ja = Xa;
  }, 3126: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Z: function() {
      return h;
    } });
    var n2 = a2(6252), l = a2(9963), o = a2(3577);
    const s = { class: "autocomplete-wrapper" }, i = { id: "autocomplete-results", class: "autocomplete-results", ref: "results" };
    function r(e3, t3, a3, r2, d2, c2) {
      const u2 = (0, n2.up)("ion-input"), p2 = (0, n2.up)("ion-label"), m2 = (0, n2.up)("ion-item"), h2 = (0, n2.up)("ion-list");
      return (0, n2.wg)(), (0, n2.iD)("div", s, [(0, n2.Wm)(u2, (0, n2.dG)(e3.$attrs, { modelValue: e3.search, "onUpdate:modelValue": t3[0] || (t3[0] = (t4) => e3.search = t4), placeholder: e3.placeholder, onClick: e3.onChange, onInput: e3.onChange, onKeydown: [(0, l.D2)(e3.onArrowDown, ["down"]), (0, l.D2)(e3.onArrowUp, ["up"]), (0, l.D2)(e3.onEnter, ["enter"])] }), null, 16, ["modelValue", "placeholder", "onClick", "onInput", "onKeydown"]), (0, n2.wy)((0, n2._)("div", i, [(0, n2.Wm)(h2, { lines: "none" }, { default: (0, n2.w5)((() => [((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.results, ((a4, l2) => ((0, n2.wg)(), (0, n2.j4)(m2, { button: "", key: l2, onClick: (t4) => e3.setResult(a4), onMousedown: t3[1] || (t3[1] = (e4) => e4.stopPropagation()), class: (0, o.C_)(["autocomplete-result", { "is-active": l2 === e3.arrowCounter }]), detail: "false" }, { default: (0, n2.w5)((() => [(0, n2.Wm)(p2, { class: "item text-wrap" }, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, o.zw)(a4), 1)])), _: 2 }, 1024)])), _: 2 }, 1032, ["onClick", "class"])))), 128))])), _: 1 })], 512), [[l.F8, e3.isOpen && e3.results.length > 0]])]);
    }
    var d = a2(9004), c = a2(5145), u = (0, n2.aZ)({ name: "autocomplete", props: { items: { type: Array, required: false, default: () => [] }, placeholder: { type: String, required: false, default: () => "" }, value: { type: String, required: false, default: () => "" } }, components: { IonInput: d.pK, IonList: d.q_, IonItem: d.Ie, IonLabel: d.Q$ }, data() {
      return { isOpen: false, results: [], search: "", arrowCounter: 0 };
    }, methods: { onChange(e3) {
      this.search = e3.target.value, this.$emit("update", this.search), this.filterResults(), this.isOpen = true;
    }, filterResults() {
      this.results = this.items.filter(((e3) => e3.toLowerCase().indexOf(this.search.toLowerCase()) > -1)).slice(0, 20);
    }, setResult(e3) {
      this.search = e3, this.isOpen = false, this.$emit("update", this.search);
    }, onArrowDown() {
      this.arrowCounter < this.results.length && (this.arrowCounter = this.arrowCounter + 1);
    }, onArrowUp() {
      this.arrowCounter > 0 && (this.arrowCounter = this.arrowCounter - 1);
    }, onEnter() {
      this.search = this.results[this.arrowCounter], this.isOpen = false, this.arrowCounter = -1;
    }, handleClickOutside(e3) {
      this.$el.contains(e3.target) || (this.isOpen = false, this.arrowCounter = -1);
    } }, watch: { items: function(e3, t3) {
      e3.length !== t3.length && (this.results = e3);
    }, value: function(e3) {
      this.search = e3;
    } }, mounted() {
      c.c.customScrollbar(this.$refs.results, false, false), this.search = this.value, document.addEventListener("mousedown", this.handleClickOutside);
    }, unmounted() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    } }), p = a2(3744);
    const m = (0, p.Z)(u, [["render", r], ["__scopeId", "data-v-5600c26a"]]);
    var h = m;
  }, 447: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Z: function() {
      return h;
    } });
    var n2 = a2(6252), l = a2(3577);
    const o = { class: "placeholder" };
    function s(e3, t3, a3, s2, i2, r2) {
      const d2 = (0, n2.up)("ion-spinner"), c2 = (0, n2.up)("ion-content");
      return (0, n2.wg)(), (0, n2.j4)(c2, null, { default: (0, n2.w5)((() => [(0, n2._)("div", o, ["" != e3.connectionStatus.error ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 0 }, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.error.error), 1), (0, n2._)("p", null, (0, l.zw)(e3.Utils.localizeError(e3.connectionStatus.error)), 1), (0, n2._)("a", { onClick: t3[0] || (t3[0] = (t4) => e3.$emit("retry")) }, (0, l.zw)(e3.Locale.retry), 1)], 64)) : e3.connectionStatus.loading ? ((0, n2.wg)(), (0, n2.j4)(d2, { key: 1 })) : 0 == e3.serverCount ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 2 }, [(0, n2._)("strong", null, (0, l.zw)(e3.Locale.empty), 1), (0, n2._)("p", null, [(0, n2.Uk)((0, l.zw)(e3.addServerText().before), 1), (0, n2._)("a", { onClick: t3[1] || (t3[1] = (t4) => e3.addServer()) }, (0, l.zw)(e3.addServerText().link), 1), (0, n2.Uk)((0, l.zw)(e3.addServerText().after), 1)])], 64)) : (0, n2.kq)("", true)])])), _: 1 });
    }
    var i = a2(9004), r = a2(538), d = a2(1315), c = a2(5145), u = (0, n2.aZ)({ name: "ConnectionStatus", inject: ["connectionStatus", "serverCount"], components: { IonContent: i.W2, IonSpinner: i.PQ }, setup() {
      return { Locale: r.g, Utils: c.c };
    }, methods: { addServer() {
      d.Q.emit("add-server");
    }, addServerText() {
      const e3 = r.g.formatString(r.g.startByAddingServer, "", ""), t3 = r.g.startByAddingServer.indexOf("{0}");
      let a3 = r.g.startByAddingServer.replace("{0}", "").indexOf("{1}");
      return a3 < 0 && (a3 = r.g.startByAddingServer.length), { before: e3.substring(0, t3), link: e3.substring(t3, a3), after: e3.substring(a3) };
    } } }), p = a2(3744);
    const m = (0, p.Z)(u, [["render", s]]);
    var h = m;
  }, 5441: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Z: function() {
      return L;
    } });
    var n2 = a2(6252), l = a2(3577);
    const o = { class: "breadcrumb swiper-no-swiping", ref: "breadcrumb" }, s = ["onClick"], i = { class: "side" }, r = { class: "side" }, d = ["onClick", "onContextmenu"], c = { class: "name" }, u = { class: "details" }, p = ["onClick"], m = { class: "chips swiper-no-swiping" };
    function h(e3, t3, a3, h2, f2, w2) {
      const g2 = (0, n2.up)("ion-icon"), b2 = (0, n2.up)("ion-checkbox"), v2 = (0, n2.up)("ion-label"), k2 = (0, n2.up)("ion-chip"), S2 = (0, n2.up)("VirtualScroll");
      return (0, n2.wg)(), (0, n2.j4)(S2, (0, n2.dG)(e3.$attrs, { ref: "content", items: e3.currentDirectoryContent, "item-size": 64, "key-field": "name", bottom: true }), { start: (0, n2.w5)((() => [(0, n2._)("div", o, [(0, n2._)("div", { class: (0, l.C_)({ active: 0 == e3.breadcrumb.length }) }, [(0, n2._)("a", { onClick: t3[0] || (t3[0] = (t4) => e3.selectDirectory(0)) }, [(0, n2.Wm)(g2, { class: "home", ios: e3.homeOutline, md: e3.homeSharp }, null, 8, ["ios", "md"])]), (0, n2.Wm)(g2, { class: "chevron", icon: e3.chevronForwardOutline }, null, 8, ["icon"])], 2), ((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.breadcrumb, ((t4, a4) => ((0, n2.wg)(), (0, n2.iD)("div", { key: t4, class: (0, l.C_)({ active: a4 == e3.breadcrumb.length - 1 }) }, [(0, n2._)("a", { onClick: (t5) => e3.selectDirectory(a4 + 1) }, (0, l.zw)(t4), 9, s), a4 != e3.breadcrumb.length - 1 ? ((0, n2.wg)(), (0, n2.j4)(g2, { key: 0, class: "chevron", icon: e3.chevronForwardOutline }, null, 8, ["icon"])) : (0, n2.kq)("", true)], 2)))), 128))], 512), "" != e3.currentDirectory ? ((0, n2.wg)(), (0, n2.iD)("div", { key: 0, class: "back click", onClick: t3[1] || (t3[1] = (t4) => e3.selectDirectory(-1)) }, [(0, n2._)("div", i, [(0, n2.Wm)(g2, { ios: e3.returnUpBackOutline, md: e3.returnUpBackSharp }, null, 8, ["ios", "md"])]), (0, n2.Uk)(" .. ")])) : (0, n2.kq)("", true)])), default: (0, n2.w5)((({ item: t4 }) => [(0, n2._)("div", { class: (0, l.C_)({ file: true, actions: e3.actions }) }, [(0, n2._)("div", r, [(0, n2.Wm)(b2, (0, n2.dG)(e3.checkedAttributes(t4.ids), { onIonChange: (a4) => e3.checboxUpdate(a4, t4.ids) }), null, 16, ["onIonChange"])]), (0, n2._)("div", { class: (0, l.C_)({ middle: true, click: t4.folder }), onClick: (a4) => e3.fileAction(t4), onContextmenu: (a4) => e3.fileTitle(t4.name, a4) }, [(0, n2._)("div", c, (0, l.zw)(t4.name), 1), (0, n2._)("div", u, [1 == e3.getPriority(t4.ids) ? ((0, n2.wg)(), (0, n2.j4)(g2, { key: 0, color: "success", ios: e3.caretUpOutline, md: e3.caretUpSharp }, null, 8, ["ios", "md"])) : (0, n2.kq)("", true), -1 == e3.getPriority(t4.ids) ? ((0, n2.wg)(), (0, n2.j4)(g2, { key: 1, color: "danger", ios: e3.caretDownOutline, md: e3.caretDownSharp }, null, 8, ["ios", "md"])) : (0, n2.kq)("", true), (0, n2.Wm)(g2, { color: "medium", ios: t4.folder ? e3.folderOpenOutline : e3.documentOutline, md: t4.folder ? e3.folderOpenSharp : e3.documentSharp }, null, 8, ["ios", "md"]), void 0 != t4.bytesCompleted && t4.bytesCompleted != t4.length ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 2 }, [(0, n2.Uk)(" \xA0" + (0, l.zw)(e3.Utils.formatBytes(t4.bytesCompleted)) + " " + (0, l.zw)(e3.Locale.of), 1)], 64)) : (0, n2.kq)("", true), (0, n2.Uk)(" " + (0, l.zw)(e3.Utils.formatBytes(t4.length)) + " ", 1), void 0 != t4.bytesCompleted ? ((0, n2.wg)(), (0, n2.iD)(n2.HY, { key: 3 }, [(0, n2.Uk)(" (" + (0, l.zw)(e3.Utils.getPercent(t4.bytesCompleted / t4.length)) + ") ", 1)], 64)) : (0, n2.kq)("", true)])], 42, d), e3.actions ? ((0, n2.wg)(), (0, n2.iD)("div", { key: 0, class: "side click", onClick: (a4) => e3.fileActions(t4) }, [(0, n2.Wm)(g2, { ios: e3.ellipsisVerticalOutline, md: e3.ellipsisVerticalSharp }, null, 8, ["ios", "md"])], 8, p)) : (0, n2.kq)("", true)], 2)])), end: (0, n2.w5)((() => [(0, n2._)("div", m, [((0, n2.wg)(true), (0, n2.iD)(n2.HY, null, (0, n2.Ko)(e3.extList, ((t4, a4) => ((0, n2.wg)(), (0, n2.j4)(k2, { key: a4, color: t4 ? "primary" : void 0, onClick: (n3) => e3.selectExt(a4, !t4) }, { default: (0, n2.w5)((() => [(0, n2.Wm)(g2, { color: t4 ? "primary" : void 0, ios: e3.documentOutline, md: e3.documentSharp }, null, 8, ["color", "ios", "md"]), (0, n2.Wm)(v2, null, { default: (0, n2.w5)((() => [(0, n2.Uk)((0, l.zw)(a4), 1)])), _: 2 }, 1024)])), _: 2 }, 1032, ["color", "onClick"])))), 128))])])), _: 1 }, 16, ["items"]);
    }
    a2(7658);
    var f = a2(9004), w = a2(8903), g = a2(986), b = a2(538), v = a2(5145), k = a2(3502), S = a2(6486), _ = (0, n2.aZ)({ props: { actions: { type: Boolean, required: false, default: () => true } }, components: { VirtualScroll: g.Z, IonCheckbox: f.nz, IonIcon: f.gu, IonChip: f.hM, IonLabel: f.Q$ }, data() {
      return { id: null, details: {}, fileStats: {}, currentDirectory: "", navigation: false };
    }, setup() {
      return { Utils: v.c, Locale: b.g, homeOutline: w.TSh, homeSharp: w.bxr, chevronForwardOutline: w.Dji, returnUpBackOutline: w.HiY, returnUpBackSharp: w.X6D, caretUpOutline: w.yvO, caretUpSharp: w.kKV, caretDownOutline: w.Hu1, caretDownSharp: w.D2O, folderOpenOutline: w.vSg, documentOutline: w.Pf6, folderOpenSharp: w.AvM, documentSharp: w.Rxr, ellipsisVerticalOutline: w.Z9b, ellipsisVerticalSharp: w.ujZ };
    }, created() {
      this.id = (0, n2.f3)("id"), this.details = (0, n2.f3)("details"), this.fileStats = (0, n2.f3)("fileStats"), this.currentDirectory = (0, n2.f3)("currentDirectory");
    }, mounted() {
      v.c.customScrollbar(this.$refs.breadcrumb, false, false);
    }, watch: { currentDirectory() {
      this.$nextTick((() => {
        this.setScroll();
      }));
    } }, computed: { breadcrumb: function() {
      const e3 = this.currentDirectory.split("/");
      return e3.slice(0, e3.length - 1);
    }, extList: function() {
      const e3 = {};
      return this.details.files.forEach(((t3, a3) => {
        const n3 = t3.name.split(".").pop().toLowerCase();
        e3[n3] ? e3[n3] = e3[n3] && this.fileStats[a3].wanted : e3[n3] = this.fileStats[a3].wanted;
      })), e3;
    }, currentDirectoryContent: function() {
      let e3 = [];
      const t3 = {}, a3 = this.details.files;
      for (const n3 in a3) if (a3[n3].name && a3[n3].name.startsWith(this.currentDirectory)) {
        const l2 = a3[n3].name.substring(this.currentDirectory.length), o2 = (l2.match(/\//g) || []).length;
        if (0 == o2) {
          const t4 = { name: l2, bytesCompleted: a3[n3].bytesCompleted, length: a3[n3].length, folder: false, ids: [n3] };
          e3.push(t4);
        } else {
          const e4 = l2.substring(0, l2.indexOf("/"));
          if (Object.keys(t3).includes(e4)) t3[e4].length += a3[n3].length, t3[e4].ids.push(n3), "undefined" != typeof t3[e4].bytesCompleted && (t3[e4].bytesCompleted += a3[n3].bytesCompleted);
          else {
            const l3 = { name: e4, length: a3[n3].length, folder: true, ids: [n3] };
            "undefined" != typeof a3[n3].bytesCompleted && (l3.bytesCompleted = a3[n3].bytesCompleted), t3[e4] = l3;
          }
        }
      }
      return e3 = Object.values(t3).concat(e3), e3 = S.orderBy(e3, ["folder", (e4) => e4.name.toString().toLowerCase()], ["desc", "asc"]), e3;
    } }, methods: { selectDirectory(e3) {
      const t3 = e3 >= 0 ? e3 : this.currentDirectory.split("/").length - 2;
      let a3 = this.currentDirectory.split("/").slice(0, t3).join("/");
      t3 > 0 && (a3 += "/"), this.changeDirectory(a3);
    }, changeDirectory(e3) {
      this.navigation = true, this.$emit("change-directory", e3), setTimeout((() => {
        this.navigation = false;
      }), 10);
    }, fileAction(e3) {
      e3.folder ? this.changeDirectory(this.currentDirectory + e3.name + "/") : this.fileTitle(e3.name);
    }, fileTitle(e3, t3) {
      t3 && t3.preventDefault(), v.c.responseToast(e3);
    }, async fileActions(e3) {
      const t3 = await f.BO.create({ header: e3.name, buttons: [{ text: b.g.actions.rename, handler: () => {
        this.fileRename(e3);
      } }, { text: b.g.priority.priority, handler: () => {
        this.filePriority(e3);
      } }, { text: b.g.actions.cancel, role: "cancel" }] });
      return t3.present();
    }, async fileRename(e3) {
      const t3 = await f.Cl.create({ header: b.g.actions.rename, inputs: [{ name: "name", value: e3.name }], buttons: [{ text: b.g.actions.cancel, role: "cancel" }, { text: b.g.ok, handler: (t4) => {
        const a3 = this.currentDirectory + e3.name, n3 = { path: a3, name: t4.name };
        k.S.torrentAction("rename-path", this.id, n3).then(((n4) => {
          v.c.responseToast(n4.result);
          for (const l2 of this.details.files) e3.folder && l2.name.startsWith(a3) ? l2.name = l2.name.replace(a3, this.currentDirectory + t4.name) : e3.folder || l2.name != a3 || (l2.name = this.currentDirectory + t4.name);
        })).catch(((e4) => {
          v.c.responseToast(e4.message);
        }));
      } }] });
      return t3.present().then((() => {
        const t4 = document.querySelector("ion-alert input"), a3 = e3.folder ? e3.name.length : e3.name.lastIndexOf("."), n3 = setInterval((() => {
          t4.setSelectionRange(0, a3), t4.focus();
        }), 10);
        setTimeout((() => {
          clearInterval(n3);
        }), 500);
      }));
    }, async filePriority(e3) {
      const t3 = this.getPriority(e3.ids), a3 = await f.Cl.create({ header: b.g.priority.priority, inputs: [{ type: "radio", label: b.g.priority.high, name: "priority", value: 1, checked: 1 == t3 }, { type: "radio", label: b.g.priority.normal, name: "priority", value: 0, checked: 0 == t3 }, { type: "radio", label: b.g.priority.low, name: "priority", value: -1, checked: -1 == t3 }], buttons: [{ text: b.g.actions.cancel, role: "cancel" }, { text: b.g.ok, handler: (t4) => {
        void 0 !== t4 && this.priorityUpdate(t4, e3.ids);
      } }] });
      return a3.present();
    }, checkedAttributes(e3) {
      const t3 = this.isWanted(e3);
      return { checked: 1 == t3, indeterminate: 2 == t3 };
    }, checboxUpdate(e3, t3) {
      this.navigation || t3.forEach(((t4) => {
        this.fileStats[t4].wanted = e3.detail.checked;
      }));
    }, selectExt(e3, t3) {
      this.navigation = true, this.details.files.forEach(((a3, n3) => {
        const l2 = a3.name.split(".").pop().toLowerCase();
        l2 == e3 && (this.fileStats[n3].wanted = t3);
      })), setTimeout((() => {
        this.navigation = false;
      }), 10);
    }, priorityUpdate(e3, t3) {
      t3.forEach(((t4) => {
        this.fileStats[t4].priority = e3;
      }));
    }, isWanted(e3) {
      let t3 = null;
      return e3.forEach(((e4) => {
        this.fileStats && (null === t3 ? t3 = this.fileStats[e4].wanted ? 1 : 0 : this.fileStats[e4].wanted != (1 == t3) && (t3 = 2));
      })), t3;
    }, getPriority(e3) {
      let t3;
      return e3.forEach(((e4) => {
        void 0 === t3 ? t3 = this.fileStats[e4].priority : this.fileStats[e4].priority != t3 && (t3 = null);
      })), void 0 !== t3 ? t3 : null;
    }, setScroll() {
      const e3 = this.$refs.content;
      e3.$el.scrollToTop();
      const t3 = this.$refs.breadcrumb;
      t3 && (t3.scrollLeft = t3.scrollWidth);
    } } }), y = a2(3744);
    const W = (0, y.Z)(_, [["render", h], ["__scopeId", "data-v-7dd42126"]]);
    var L = W;
  }, 986: function(e2, t2, a2) {
    "use strict";
    a2.d(t2, { Z: function() {
      return h;
    } });
    var n2 = a2(6252), l = a2(3577);
    const o = { key: 0, class: "placeholder" }, s = { class: "capitalize" };
    function i(e3, t3, a3, i2, r2, d2) {
      const c2 = (0, n2.up)("RecycleScroller"), u2 = (0, n2.up)("ion-content");
      return (0, n2.wg)(), (0, n2.j4)(u2, { fullscreen: e3.fullscreen, ref: "virtualscroll" }, { default: (0, n2.w5)((() => [(0, n2.WI)(e3.$slots, "fab", {}, void 0, true), (0, n2.Wm)(c2, { class: (0, l.C_)({ scroller: true, bottom: e3.bottom }), ref: "scroller", items: e3.items, "item-size": e3.itemSize, "key-field": e3.keyField ? e3.keyField : null }, { before: (0, n2.w5)((() => [(0, n2.WI)(e3.$slots, "start", {}, void 0, true), 0 == e3.items.length ? ((0, n2.wg)(), (0, n2.iD)("div", o, [(0, n2._)("strong", s, (0, l.zw)(e3.Locale.empty), 1), (0, n2._)("p", null, [(0, n2.WI)(e3.$slots, "search", {}, void 0, true)])])) : (0, n2.kq)("", true)])), default: (0, n2.w5)((({ item: t4 }) => [(0, n2.WI)(e3.$slots, "default", { item: t4 }, void 0, true)])), _: 3 }, 8, ["class", "items", "item-size", "key-field"]), (0, n2.WI)(e3.$slots, "end", {}, void 0, true)])), _: 3 }, 8, ["fullscreen"]);
    }
    var r = a2(9004), d = a2(538), c = a2(5145), u = (0, n2.aZ)({ props: ["items", "itemSize", "keyField", "fullscreen", "bottom"], data() {
      return { scrollIndex: 0, lastScrollTop: 0 };
    }, components: { IonContent: r.W2 }, setup() {
      return { Locale: d.g };
    }, mounted() {
      const e3 = this.$refs.scroller;
      c.c.customScrollbar(e3, true, false), e3.$el.addEventListener("scroll", (() => this.handleScroll(e3)), false);
    }, methods: { handleScroll(e3) {
      const t3 = this.$refs.virtualscroll, a3 = e3.$el.scrollTop;
      t3.$el.classList.toggle("no-fab", a3 > this.lastScrollTop), this.lastScrollTop = a3 <= 0 ? 0 : a3;
    } } }), p = a2(3744);
    const m = (0, p.Z)(u, [["render", i], ["__scopeId", "data-v-65200c74"]]);
    var h = m;
  }, 1982: function() {
  }, 5744: function(e2) {
    "use strict";
    e2.exports = JSON.parse('{"servers":"Servers","other":"Other","settings":"Settings","about":{"about":"About","description":"Transmissionic is a free multi-platform remote for Transmission Daemon built with Ionic and Vue.js.","github":"This project is open source, you can find the source code on GitHub: {0}","poeditor":"If you want to help with the translation, you can join the project on POEditor: {0}","shortDescription":"Remote for Transmission Daemon"},"search":"Search","add":"Add","empty":"Empty","error":{"error":"Error","timeout":"Unable to reach host (Timeout)","hostUnreachable":"Unable to reach host","daemonUnreachable":"Unable to reach Transmission Daemon","invalidToken":"Invalid token","authenticationError":"Authentication error","torrentNotFound":"Torrent not found","invalidArgument":"Invalid argument","requestAborted":"Request aborted","connectionFailed":"Connection failed","trackerConnectionError":"Could not connect to tracker","noDataFound":"No data found! Ensure your drives are connected or use \\"Set Location\\". To re-download, remove the torrent and re-add it.","pathNotAbsolute":"Download directory path is not absolute","trackerResponseCode":"Tracker gave HTTP response code {0} ({1})","notFound":"Not found","noResponse":"No response","trackerDidNotRespond":"Tracker did not respond","noInternetConnection":"No internet connection","unregisteredTorrent":"Unregistered torrent"},"retry":"Retry","default":"Default","interface":"Interface","connection":"Connection","language":"Language","theme":"Theme","light":"Light","dark":"Dark","sort":"Sort","name":"Name","addedDate":"Added date","size":"Size","ratio":"Ratio","newServer":"New server","serverDetails":"Server details","general":"General","hostname":"Hostname or IP address","port":"Port","auth":"Authentication","username":"Username","password":"Password","selection":"Selection","torrent":{"one":"torrent","other":"torrents"},"actions":{"select":"Select","start":"Start","startNow":"$ref{actions.start} now","stop":"Stop","reannounce":"Reannounce","verify":"Verify","cancel":"Cancel","delete":"Delete","back":"Back","rename":"Rename","selectAll":"Select all","remove":"Remove","editAddress":"Edit address","setLocation":"Set location","openInExplorer":"Open in explorer","copyMagnet":"Copy magnet link"},"filters":{"filters":"Filters","all":"All","downloading":"Downloading","active":"Active","completed":"Completed","stopped":"Stopped","waiting":"Waiting","queued":"Queued","seeding":"Seeding","verifying":"Verifying"},"selected":{"one":"selected","other":"selected"},"prompt":{"confirm":"Confirm","confirmation":"Confirmation","remove":"Confirm the removal of {0}?","deleteData":"Delete data","delete":"Confirm the deletion of {0}?","reset":"Confirm settings reset?"},"units":{"perSecond":"/s","bit":"b","byte":"B"},"rpcPath":"RPC path","preferences":"Preferences","uploadSpeed":"Upload speed","and":"and","ago":"{0} ago","lastActivity":"Last activity","success":"Success","speedUnit":"Display speed in bit/s","options":"Options","files":"Files","tracker":{"one":"Tracker","other":"Trackers"},"peer":{"one":"Peer","other":"Peers"},"downloadDir":"Download directory","totalSize":"Total size","pieces":"Pieces","createdBy":"Created by","createdOn":"Created on","addedOn":"Added on","completedOn":"Completed on","comment":"Comment","hash":"Hash","magnet":"Magnet","transfer":"Transfer","status":"Status","downloaded":"Downloaded","uploaded":"Uploaded","shareRatio":"Share ratio","downloadTime":"Download time","seedTime":"Seed time","bandwidth":"Bandwidth","downloadLimit":"Download speed limit","uploadLimit":"Upload speed limit","peersLimit":"Peers limit","priority":{"priority":"Priority","high":"High","normal":"Normal","low":"Low"},"useGlobalLimit":"Use global limit","seedRatioLimit":"Seed ratio limit","inactivity":"Inactivity","stopWhenInactive":"Stop when inactive for (minutes)","of":"of","refreshInterval":"Refresh interval (seconds)","connectionTimeout":"Connection timeout (seconds)","never":"Never","address":"Address","announce":"Announce","state":"State","updating":"Updating\u2026","working":"Working","peerCount":"Peer count","lastUpdate":"Last update","nextUpdate":"Next update","scrape":"Scrape","seeders":"Seeders","leechers":"Leechers","downloadCount":"Download count","tier":"Tier","displayFlag":"Display peer flag","addTracker":"Add tracker","displayMore":"Display more","serverInformation":"Server information","transmissionVersion":"Transmission version","freeSpace":"Free space","addTorrent":"Add torrent","noResult":"No result","startByAddingServer":"Start by {0}adding a server{1}","moveData":"Move the data","ok":"OK","information":"Information","torrentFile":"Torrent file","updateAvailable":"Update available: {0}","download":"Download","magnetLink":"Magnet link or hash","expandSideMenu":"Expand side menu on large screen","serverConfig":"Server configuration","limits":"Limits","network":"Network","defaultDownloadDir":"Default download directory","cacheSize":"Cache size","startAddedTorrents":"Start added torrents","queue":"Queue","queueSize":"Queue size","incompleteDownloads":"Incomplete downloads","addPartExt":"Add .part extension to incomplete files","useTempDir":"Use temporary directory","tempDirPath":"Temporary directory path","altSpeed":"Alternative speed","enabled":"Enabled","seed":"Seed","globalPeerLimit":"Global peer limit","peerLimitByTorrent":"Peer limit by torrent","encryption":"Encryption","tolerated":"Tolerated","preferred":"Preferred","required":"Required","peerPort":"Peer port","randomPortOnStart":"Random port on start","portForwarding":"Port forwarding","protocols":"Protocols","DHT":"Distributed hash table","LPD":"Local peer discovery","PEX":"Peer exchange","UTP":"Micro Transport Protocol","blocklist":"Blocklist","blocklistUrl":"Blocklist URL","useIpApi":"Using {0}","reset":"Reset","resetSettings":"Reset settings","pathMapping":"Remote to local path mapping","example":"Example","checkUpdates":"Check for updates","bookmarklet":"Bookmarklet","bookmarkletDetail":"Drag and drop this button inside your bookmarks bar to import magnet and torrent links from other websites in one click.","updateBlocklist":"Update blocklist","blocklistSize":"Blocklist size: {0}","queuePosition":"Queue position","torrentFileLink":"Torrent file link","statistics":"Statistics","current":"Current","total":"Total","duration":"Duration","addTorrents":"Add multiple torrents","preset":"Preset","openMagnetLinks":"Open magnet links with Transmissionic","compactMode":"Compact mode","enableNotifications":"Enable notifications","searchBy":"Search by","rememberSelectedPreset":"Remember selected preset","export":"Export","import":"Import","downloadFinished":"Download finished","altSpeedScheduler":"Alternative speed scheduler","altSpeedBegin":"Start time","altSpeedEnd":"End time","altSpeedDays":"Days","showTrackerList":"Always show tracker list","testPort":"Test if the port is open"}');
  } }, t = {};
  function a(n2) {
    var l = t[n2];
    if (void 0 !== l) return l.exports;
    var o = t[n2] = { id: n2, loaded: false, exports: {} };
    return e[n2].call(o.exports, o, o.exports, a), o.loaded = true, o.exports;
  }
  a.m = e, (function() {
    var e2 = [];
    a.O = function(t2, n2, l, o) {
      if (!n2) {
        var s = 1 / 0;
        for (c = 0; c < e2.length; c++) {
          n2 = e2[c][0], l = e2[c][1], o = e2[c][2];
          for (var i = true, r = 0; r < n2.length; r++) (false & o || s >= o) && Object.keys(a.O).every((function(e3) {
            return a.O[e3](n2[r]);
          })) ? n2.splice(r--, 1) : (i = false, o < s && (s = o));
          if (i) {
            e2.splice(c--, 1);
            var d = l();
            void 0 !== d && (t2 = d);
          }
        }
        return t2;
      }
      o = o || 0;
      for (var c = e2.length; c > 0 && e2[c - 1][2] > o; c--) e2[c] = e2[c - 1];
      e2[c] = [n2, l, o];
    };
  })(), (function() {
    a.n = function(e2) {
      var t2 = e2 && e2.__esModule ? function() {
        return e2["default"];
      } : function() {
        return e2;
      };
      return a.d(t2, { a: t2 }), t2;
    };
  })(), (function() {
    var e2, t2 = Object.getPrototypeOf ? function(e3) {
      return Object.getPrototypeOf(e3);
    } : function(e3) {
      return e3.__proto__;
    };
    a.t = function(n2, l) {
      if (1 & l && (n2 = this(n2)), 8 & l) return n2;
      if ("object" === typeof n2 && n2) {
        if (4 & l && n2.__esModule) return n2;
        if (16 & l && "function" === typeof n2.then) return n2;
      }
      var o = /* @__PURE__ */ Object.create(null);
      a.r(o);
      var s = {};
      e2 = e2 || [null, t2({}), t2([]), t2(t2)];
      for (var i = 2 & l && n2; "object" == typeof i && !~e2.indexOf(i); i = t2(i)) Object.getOwnPropertyNames(i).forEach((function(e3) {
        s[e3] = function() {
          return n2[e3];
        };
      }));
      return s["default"] = function() {
        return n2;
      }, a.d(o, s), o;
    };
  })(), (function() {
    a.d = function(e2, t2) {
      for (var n2 in t2) a.o(t2, n2) && !a.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
    };
  })(), (function() {
    a.f = {}, a.e = function(e2) {
      return Promise.all(Object.keys(a.f).reduce((function(t2, n2) {
        return a.f[n2](e2, t2), t2;
      }), []));
    };
  })(), (function() {
    a.u = function(e2) {
      return "js/" + ({ 571: "stencil-polyfills-dom", 952: "stencil-polyfills-css-shim" }[e2] || e2) + "." + { 30: "2ff7150a", 56: "f8824b63", 78: "949ec92e", 99: "bd5057d3", 238: "63fe7c04", 338: "df9c7631", 385: "9123e0b2", 486: "73a49f07", 541: "4cd56c15", 544: "21145616", 571: "a7666c0b", 576: "47fc5bdb", 593: "245305b9", 601: "03c01ff9", 753: "0f295df9", 775: "a7b76a59", 807: "470fd6aa", 816: "4cff31c3", 823: "3b8f9e10", 855: "8ef7da5b", 890: "8e6653d1", 952: "e8b2026d", 990: "46a3cbe7" }[e2] + ".js";
    };
  })(), (function() {
    a.miniCssF = function(e2) {
    };
  })(), (function() {
    a.g = (function() {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e2) {
        if ("object" === typeof window) return window;
      }
    })();
  })(), (function() {
    a.o = function(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    };
  })(), (function() {
    var e2 = {}, t2 = "transmissionic:";
    a.l = function(n2, l, o, s) {
      if (e2[n2]) e2[n2].push(l);
      else {
        var i, r;
        if (void 0 !== o) for (var d = document.getElementsByTagName("script"), c = 0; c < d.length; c++) {
          var u = d[c];
          if (u.getAttribute("src") == n2 || u.getAttribute("data-webpack") == t2 + o) {
            i = u;
            break;
          }
        }
        i || (r = true, i = document.createElement("script"), i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.setAttribute("data-webpack", t2 + o), i.src = n2), e2[n2] = [l];
        var p = function(t3, a2) {
          i.onerror = i.onload = null, clearTimeout(m);
          var l2 = e2[n2];
          if (delete e2[n2], i.parentNode && i.parentNode.removeChild(i), l2 && l2.forEach((function(e3) {
            return e3(a2);
          })), t3) return t3(a2);
        }, m = setTimeout(p.bind(null, void 0, { type: "timeout", target: i }), 12e4);
        i.onerror = p.bind(null, i.onerror), i.onload = p.bind(null, i.onload), r && document.head.appendChild(i);
      }
    };
  })(), (function() {
    a.r = function(e2) {
      "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    };
  })(), (function() {
    a.nmd = function(e2) {
      return e2.paths = [], e2.children || (e2.children = []), e2;
    };
  })(), (function() {
    a.p = "/";
  })(), (function() {
    var e2 = { 143: 0 };
    a.f.j = function(t3, n3) {
      var l = a.o(e2, t3) ? e2[t3] : void 0;
      if (0 !== l) if (l) n3.push(l[2]);
      else {
        var o = new Promise((function(a2, n4) {
          l = e2[t3] = [a2, n4];
        }));
        n3.push(l[2] = o);
        var s = a.u(t3), i = new Error(), r = function(n4) {
          if (a.o(e2, t3) && (l = e2[t3], 0 !== l && (e2[t3] = void 0), l)) {
            var o2 = n4 && ("load" === n4.type ? "missing" : n4.type), s2 = n4 && n4.target && n4.target.src;
            i.message = "Loading chunk " + t3 + " failed.\n(" + o2 + ": " + s2 + ")", i.name = "ChunkLoadError", i.type = o2, i.request = s2, l[1](i);
          }
        };
        a.l(s, r, "chunk-" + t3, t3);
      }
    }, a.O.j = function(t3) {
      return 0 === e2[t3];
    };
    var t2 = function(t3, n3) {
      var l, o, s = n3[0], i = n3[1], r = n3[2], d = 0;
      if (s.some((function(t4) {
        return 0 !== e2[t4];
      }))) {
        for (l in i) a.o(i, l) && (a.m[l] = i[l]);
        if (r) var c = r(a);
      }
      for (t3 && t3(n3); d < s.length; d++) o = s[d], a.o(e2, o) && e2[o] && e2[o][0](), e2[o] = 0;
      return a.O(c);
    }, n2 = self["webpackChunktransmissionic"] = self["webpackChunktransmissionic"] || [];
    n2.forEach(t2.bind(null, 0)), n2.push = t2.bind(null, n2.push.bind(n2));
  })();
  var n = a.O(void 0, [998], (function() {
    return a(2307);
  }));
  n = a.O(n);
})();
