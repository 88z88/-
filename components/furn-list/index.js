// components/furn-list/index.js
Component({
  externalClasses: ['wr-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    furnsList: {
      type: Array,
      value: [],
    },
    thresholds: {
      type: Array,
      value: [],
    },
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
    onClickFurns(e) {
      const { index } = e.currentTarget.dataset;
      this.triggerEvent('click', { ...e.detail, index });
    }
  }
})
