import { getHighqualityMusicList } from "../../api/api.js" 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList: [],
    more: true,
    before: ""
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getList ()
  },

    getList () {
        if (this.data.more) {
            const _this = this
            getHighqualityMusicList({
                data: {
                    limit: 10,
                    before: _this.data.before
                },
                success(res) {
                    _this.setData({
                        musicList: res.data.playlists,
                        more: res.data.more,
                        before: res.data.lasttime
                    })
                }
            }) 
        }
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