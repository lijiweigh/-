// components/searchResultItem/searchResultItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      dataObj: {
          type: Object
      },
      searchtype: {
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
      tap() {
          this.triggerEvent("searchItemTap")
      },
  }
})
