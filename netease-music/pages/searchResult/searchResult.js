// pages/searchResult/searchResult.js
import { getHotSearchResult, getSearchResult } from "../../api/api.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShowClearIcon: false,
      searchValue: "",
      hotSearch: [],
      songsResult: [],
      listResult: [],
      singerResult: [],
      videoResult: [],
      searchResult: [[], [], [], []],
      resultKeys: ["songs", "playlists", "artists","videos"],
      maxSearchCount: 0,
      isShowHotSearch: true,
      limit: 30,
      offset: 0,
      keywords: "",
      searchType: 1, // type: 搜索类型；默认为 1 即单曲, 取值意义: 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频
      isShowNoMore: false,
      navList: [
          {
            name: "单曲",
            searchType: 1,
            offset: 0
          },
          {
              name: "歌单",
              searchType: 1000,
              offset: 0
          },
          {
              name: "歌手",
              searchType: 100,
              offset: 0
          },
          {
              name: "视频",
              searchType: 1014,
              offset: 0
          }],
        curNav: 0
  },

    handleCancel () {
        wx.navigateBack({
            delta: 1
        })
    },

    handleNav (e) {
        this.setData({
            curNav: e.target.dataset.index,
            searchType: e.target.dataset.searchtype,
            isShowNoMore: false
        })

        if ( !this.data.searchResult[this.data.curNav].length ) {
            
            this.handleSearchResult(this.data.searchValue)
        }

    },

    handleInput (e) {
        this.setData({
            searchValue: e.detail.value
        })
        
        if (e.detail.value !== "") {
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
        const searchValue = this.data.searchValue
        this.setData({
            keywords: searchValue,
            searchResult: [[], [], [], []],
            navList: [
                {
                    name: "单曲",
                    searchType: 1,
                    offset: 0
                },
                {
                    name: "歌单",
                    searchType: 1000,
                    offset: 0
                },
                {
                    name: "歌手",
                    searchType: 100,
                    offset: 0
                },
                {
                    name: "视频",
                    searchType: 1014,
                    offset: 0
                }],
        })
        if (searchValue) {
            this.handleSearchResult(searchValue)
        }
        
    },

    handleSearchHot (e) {
        this.setData({
            keywords: e.target.dataset.value,
            searchValue: e.target.dataset.value,
            isShowClearIcon: true
        })
       
        this.handleSearchResult(e.target.dataset.value)
    },

    handleSearchResult (keywords) {
        const _this = this
        getSearchResult ({
            data: {
                keywords: keywords,
                limit: _this.data.limit,
                offset: _this.data.navList[_this.data.curNav].offset * _this.data.limit,
                "type": _this.data.searchType
            },
            success (res) {
                console.log(res)
                 
                _this.setData({
                    ["searchResult[" + _this.data.curNav + "]"]: res.data.result[_this.data.resultKeys[_this.data.curNav]] ? _this.data.searchResult[_this.data.curNav].concat(res.data.result[_this.data.resultKeys[_this.data.curNav]]) : _this.data.searchResult[_this.data.curNav],
                    // maxSearchCount: res.data.result.songCount,
                    isShowHotSearch: false
                })

                if (!res.data.result[_this.data.resultKeys[_this.data.curNav]]) {
                    
                    _this.setData({
                        isShowNoMore: true
                    })
                }
            }
        })
    },

    handleSearchItemTap () {

    },

   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const _this = this
      getHotSearchResult ({
          
          success (res) {
              _this.setData({
                  hotSearch: res.data.result.hots
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
      
      if (!this.data.isShowNoMore ) {
          const _this = this
          this.setData({
              ["navList[" + _this.data.curNav + "].offset"]: ++_this.data.navList[_this.data.curNav].offset
          })
          this.handleSearchResult(this.data.keywords)
      }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})