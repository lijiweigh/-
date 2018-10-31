// components/highQualityMusicItem/highQualityMusicItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        musicItem: {
            type: Object
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        songCount: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTap () {
            this.triggerEvent("itemTap")
        }
    },
    attached () {
        this.setData({
            songCount: this.data.musicItem.playCount
        })
    }
    
})
