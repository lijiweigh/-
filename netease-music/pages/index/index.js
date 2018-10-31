import { getBanner, getRecommendMusicList } from "../../api/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      isPlaying: false,
      bannerList: [],
      iconNav: [
          {
              name: "私人FM",
              url: "",
              icon: "iconfont icon-FM"
          },
          {
              name: "每日推荐",
              url: "",
              icon: "iconfont icon-rili"
          },
          {
              name: "精品歌单",
              url: "../../../../allMusiclist/allmusicList",
              icon: "iconfont icon-gedan"
          },
          {
              name: "排行榜",
              url: "",
              icon: "iconfont icon-paihang"
          }],
       MusicList: [
           {
               "id": 2415575770,
               "type": 0,
               "name": "我愿望穿秋水，你却甘做行云",
               "copywriter": "编辑推荐： 曾经沧海难为水，除却巫山不是云",
               "picUrl": "http://p1.music.126.net/5qvw4gKzbqJMNO6mkk5NdQ==/109951163544927573.jpg",
               "canDislike": false,
               "playCount": 913213.0,
               "trackCount": 35,
               "highQuality": false,
               "alg": "featured"
           }
       ]   
         
  },

    handleSearch () {
        wx.navigateTo({
            url: '/pages/searchResult/searchResult',
        })
    },

    handleMusicListTap(e) {
        wx.navigateTo({
            url: '/pages/songSheetList/songSheetList?id=' + e.target.dataset.id,
            
        })
    },
    handleNavigateTo (e) {
        console.log(e.target.dataset.id)
        wx.navigateTo({
            url: '/pages/songSheetList/songSheetList?id=' + e.target.dataset.id,

        })
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const _this = this
      getBanner({
          success(res) {
              _this.setData({
                  bannerList: res.data.banners 
              })
          }
      })

      getRecommendMusicList ({
          success(res) {
              _this.setData({
                  MusicList: res.data.result
              })
          }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //   wx.login({
    //       success (res) {
    //           console.log(res.code)
    //       }
    //   })

    wx.getSystemInfo({
        success: function(res) {
            console.log(res.benchmarkLevel)
        },
    })
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