// components/like/index.js
Component({
  /**
   * 组件的属性列表 (开放数据可从组件外部设置)
   */
  properties: {
    like: {
      type: Boolean,
    
    },
    count: {
      type: Number,     
    }
    
  },

  /**
   * 组件的初始数据 （内部数据）
   */
  data: {
    yes_url: "images/like.png",
    no_url: "images/like@dis.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function(event){

      let like = this.properties.like
      let count = this.properties.count
      count = like ? count - 1 : count + 1
      this.setData({
        count: count,
        like: !like
      })
      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent('like',{
        behavior: behavior
      })
    }
  }
})
