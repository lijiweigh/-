import { getTopArtists } from "../../api/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    singerList: [],
    limit: 10,
    offset: 0,
    more: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getSingerList()
  },

  getSingerList () {
      const _this = this
      const { singerList, limit, offset, more } = this.data
      if (!more) {
          return
      }
      getTopArtists ({
          data: {
              limit,
              offset
          },
          success (res) {
            console.log(res.data)
              _this.setData({
                  singerList: singerList.concat(res.data.artists),
                  offset: offset + limit,
                  more: res.data.more
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
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})