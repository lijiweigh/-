let app = getApp()
let index_data = require("../../data/data_index")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchValue: "",
        listData: index_data.index.data
    },
    searchValueChange(e) {
        this.setData({
            searchValue: e.detail.value
        })
    },
    handleSearch() {
        // wx.showLoading({
        //     title: '加载数据中。。。',
        // })

        // setTimeout(() => {
        //     wx.hideLoading()
        // }, 1000)
        wx.showToast({
            title: `正在搜索: ${this.data.searchValue}`,
            icon: "loading",
            duration: 3000
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.showToast({
            title: "加载中",
            icon: "loading",
            duration: 3000
        })
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        wx.showLoading({
            title: "加载中",
            mask: true
        })
        this.setData({
            listData: this.data.listData.concat(index_data.index.data)
        })
        setTimeout(() => {
            wx.hideLoading()
        }, 2000);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})