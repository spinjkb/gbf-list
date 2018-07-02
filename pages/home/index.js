export default {
    config: {
        navigationBarTitleText: "首页",
        backgroundColor: "#F4F4F4",
        navigationBarTextStyle: "black"
    },
    data: {
        isShow: false
    },
    starShow() {
        this.setData({
            isShow: true
        })
    },
    show() {
        wx.showToast({
            title: "成功",
            icon: "success",
            duration: 2000
        })
    }
}