"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: function data() {
    return {
      items: [],
      val: 1
    };
  },

  methods: {
    tabresult: function tabresult() {
      ui.switchTab({
        url: "/pages/other/setting"
      });
    }
  },
  mounted: function mounted() {
    for (var i = 30; i >= this.val; i--) {
      this.items.push("\u5217\u8868\u9879\u76EE" + i);
    }
  }
});