import { getRecommendMV } from "../../api/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    MVList: [],
    limit: 10,
    offset: 0,
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        this.getMVList()
  },

    handleMVTap () {
        console.log("handleMVTap")
    },
  getMVList () {
      const _this = this
      const { MVList, limit, offset, hasMore } = this.data
      if (!hasMore) {
          return
      }
      getRecommendMV({
          data: {
              limit: limit,
              offset: offset
          },
          success(res) {
              console.log(res.data)
              _this.setData({
                  MVList: MVList.concat(res.data.data),
                  offset: offset + limit,
                  hasMore: res.data.hasMore
              })
          }
      })
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
      this.getMVList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})