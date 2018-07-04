"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mock = require("./mock.js");

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    value: ""
  },
  onLoad: function onLoad(option) {
    // var id = option.id
    console.log(_mock2.default[15]);
    this.setData({
      value: _mock2.default[15]
    });
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  }
});