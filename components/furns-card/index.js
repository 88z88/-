// components/furns-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      observer(data) {
        if (!data) {
          return;
        }
        this.setData({
          furns: data
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    furns: {
      id: ''
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle() {
      this.triggerEvent('click', {
        goods: this.data.goods
      });
    },

    clickThumbHandle() {
      this.triggerEvent('thumb', {
        goods: this.data.goods
      });
    }
  }
})