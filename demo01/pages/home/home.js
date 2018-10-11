Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    menjinList: [
        "3楼东门", "3楼西门", "1楼大门"
    ],
      articleList: [
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
              title: '一支穿云箭，千军万马来相见一支穿云箭，千军万马来相见',
              time: '2017-10-10 10:01:01'
          },
          {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              title: '你还是回乡下养猪吧',
              time: '2017-10-10 10:01:01'
          },
      ],
      maskShow :false,
      menjinName: '',
      slideX: 0,
      slideW: 0,
      slideWW: 0,
      canToast: true
  },

    showMask (e) {
        console.log(e.currentTarget.dataset.menjin )
        this.setData({
            maskShow: true,
            menjinName: e.currentTarget.dataset.menjin 
        })
    },

    maskBack() {
        this.setData({
            maskShow: false
        })
    },

    slideStart(e) {
        
        const target = e.changedTouches[0]
        this.sx = target.clientX
        // console.log(e.target.getBoundingClientRect().width)

        wx.createSelectorQuery().select(".slide-wrap").boundingClientRect(rect => {
           
            this.setData({
                slideW: rect.width
            })
        }).exec()

        wx.createSelectorQuery().select(".slide").boundingClientRect(rect => {
           
            this.setData({
                slideWW: rect.width
            })
        }).exec()
    },

    slideMove(e) {
        const target = e.changedTouches[0]
        this.mx = target.clientX
        let x = this.mx - this.sx
        console.log(x)
        if (x < 0) {
            x = 0
        } else if (x > this.data.slideW - this.data.slideWW - 2) {
            x = this.data.slideW - this.data.slideWW - 2
            if (this.data.canToast) {
                wx.showToast({
                    title: '开锁成功！',
                    duration: 1000,
                    icon: "success"
                })

                this.setData({
                    canToast: false
                })

                setTimeout(() => {
                    this.setData({
                        canToast: true
                    })
                }, 1000)
            }
            
        }
        console.log(x)
        this.setData({
            slideX: x + "px"
        })
    },

    slideEnd(e) {
        this.setData({
            slideX: 0
        })
    },

  testtap(e) {
      console.log(e)
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