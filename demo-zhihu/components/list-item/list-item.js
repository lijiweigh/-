// components/list-item/list-item.js

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        itemData: {
            type: Object
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
        tapQuestion(e) {
            wx.navigateTo({
                url: `/pages/question/question?question_id=${e.currentTarget.dataset['questionid']}&answer_id=${e.answer_id}&feed_source_id=${e.feed_source_id}`
            })
        },
        tapContent(e) {
            wx.navigateTo({
                url: `/pages/answer/answer?question_id=${e.currentTarget.dataset.questionid}&answer_id=${e.answer_id}&feed_source_id=${e.feed_source_id}`
            })
        },
    },
    lifetimes: {
        ready() {

        }
    }
})
