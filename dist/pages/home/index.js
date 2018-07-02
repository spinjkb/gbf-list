"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mock = require("./mock.js");

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Page({
  data: {
    value: _mock2.default,
    isShow: false,
    element: ["全部", "火", "水", "土", "风", "光", "暗"],
    selectElement: 0,
    type: ["全部", "人类", "兽耳", "豆丁", "牛族", "星晶兽", "未知"],
    selectType: 0
  },
  changeElement: function changeElement(e) {
    this.setData({ selectElement: e.detail.value });
  },
  changeType: function changeType(e) {
    this.setData({ selectType: e.detail.value });
  },
  selectImg: function selectImg(e) {
    wx.showToast({
      title: '点击' + e.target.id,
      icon: 'success',
      duration: 2000
    });
  }
});