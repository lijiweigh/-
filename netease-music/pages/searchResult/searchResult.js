// pages/searchResult/searchResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShowClearIcon: false,
      searchValue: ""
  },

    handleCancel () {
        wx.navigateBack({
            delta: 1
        })
    },

    handleInput (e) {
        this.setData({
            searchValue: e.detail.value.trim()
        })
        
        if (e.detail.value.trim() !== "") {
            this.setData({
                isShowClearIcon: true
            })
        } else {
            this.setData({
                isShowClearIcon: false
            })
        }
    },

    handleClear () {
        this.setData({
            searchValue: "",
            isShowClearIcon: false
        })
    },

    handleSearch () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})