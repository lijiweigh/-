// components/recommendMVItem/recommendMVItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        MVItem: {
            type: Object
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        videoCount: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        tap () {
            this.triggerEvent("MVTap")
        }
    },
    attached () {
        this.setData({
            videoCount: this.data.MVItem.playCount
        })
    }
})
