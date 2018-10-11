const baseUrl = "http://localhost:3000"

const wxRequest = (params, url) => {
    wx.showToast({
        title: '加载中...',
        icon: "loading"
    })

    wx.request({
        url: url,
        data: params.data || {},
        method: params.method || "GET",
        header: params.header || { 'Content-Type': 'application/json'},
        success (res) {
            params.success && params.success (res)
            wx.hideToast()

        },
        fail (res) {
            params.fail && params.fail (res)
        },
        complete (res) {
            params.complete && params.complete (res)
        }
    })
}

// banner图片
const getBanner = (params) => {
    wxRequest (params, baseUrl + "/banner")
}
// 推荐歌单
const getRecommendMusicList = (params) => {
    wxRequest(params, baseUrl + "/personalized")
}
// 推荐MV  
const getRecommendMV = (params) => {
    wxRequest(params, baseUrl + "/personalized/mv")
}
// 获取歌单列表  调用例子 : /playlist/detail?id=24381616
const getMusicListDetail = (params) => {
    wxRequest(params, baseUrl + "/playlist/detail")
}
// 获取精品歌单列表  /top/playlist/highquality?limit=30
const getHighqualityMusicList = (params) => {
    wxRequest(params, baseUrl + "/top/playlist/highquality")
}
// 获取mv信息 必选参数 : mvid: mv 的 id  调用例子 : /mv?mvid=5436712
const getMVDetail = (params) => {
    wxRequest(params, baseUrl + "/mv")
}
// 播放Mv  /mv/url?url=http://
const getMVUrl = (params) => {
    wxRequest(params, baseUrl + "/mv/url")
}
// 获取mv评论  /comment/mv?id=5436712
const getMVComment = (params) => {
    wxRequest(params, baseUrl + "/comment/mv")
}
// 获取热门歌手  /top/artists?offset=0&limit=30
const getTopArtists = (params) => {
    wxRequest(params, baseUrl + "/top/artists")
}
// 获取歌手的mv  /artist/mv?id=6452
const getArtistMV = (params) => {
    wxRequest(params, baseUrl + "/artist/mv")
}
// 搜索  /search?keywords= 海阔天空
const getSearchResult = (params) => {
    wxRequest(params, baseUrl + "/search")
}
// 获取热门搜索
const getHotSearchResult = (params) => {
    wxRequest(params, baseUrl + "/search/hot")
}
// 获取歌曲详情  /playlist/detail?id=24381616
const getMusicDetail = (params) => {
    wxRequest(params, baseUrl + "/playlist/detail")
}


module.exports = {
    getMusicDetail,
    getHotSearchResult,
    getSearchResult,
    getArtistMV,
    getTopArtists,
    getMVComment,
    getMVUrl,
    getMVDetail,
    getHighqualityMusicList,
    getMusicListDetail,
    getRecommendMV,
    getRecommendMusicList,
    getBanner
}