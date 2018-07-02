"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// tabBar.js
exports.default = Page({
  data: function data() {
    return {
      items: [],
      val: 30
    };
  },

  methods: {
    tabresult: function tabresult() {
      ui.switchTab({
        url: "/pages/other/other"
      });
    },
    navigateBack: function navigateBack() {
      ui.navigateBack();
    }
  },
  mounted: function mounted() {
    for (var i = 1; i <= this.val; i++) {
      this.items.push("\u5217\u8868\u9879\u76EE" + i);
    }
  }
});