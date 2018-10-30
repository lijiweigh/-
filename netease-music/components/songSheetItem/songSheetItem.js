// components/songSheetItem/songSheetItem.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        songDetail: {
            type: Object
        },
        index: {
            type: Number
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        handletap () {
            this.triggerEvent("songItemTap")
        }
    }
})
