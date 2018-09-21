Page({

  /**
   * 页面的初始数据
   */
  data: {
      imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ],
      tabList: [
          "推荐",
          "咨询",
          "头条"
      ],
      articleList: [
          [
              {
                  img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  title: '高情商的表现，你有几个？',
                  time: '2017-10-10 10:01:01'
              },
              {
                  img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
                  title: '别以为你长得帅我就不打你',
                  time: '2017-10-10 10:01:01'
              },
              {
                  img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
                  title: '一支穿云箭，千军万马来相见',
                  time: '2017-10-10 10:01:01'
              },
              {
                  img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  title: '你还是回乡下养猪吧',
                  time: '2017-10-10 10:01:01'
              },
              {
                  img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
                  title: '一支穿云箭，千军万马来相见',
                  time: '2017-10-10 10:01:01'
              },
              {
                  img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  title: '你还是回乡下养猪吧',
                  time: '2017-10-10 10:01:01'
              }
          ],
          [
              {
                  img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  title: '你还是回乡下养猪吧',
                  time: '2017-10-10 10:01:01'
              }
          ],
          [
              {
                  img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
                  title: '一支穿云箭，千军万马来相见',
                  time: '2017-10-10 10:01:01'
              }
          ]
      ],
      curTab: 0
  },

    toggleTab(e) {
        
        this.setData({
            curTab: e.target.dataset.index
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