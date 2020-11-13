// components/tabs/tabs.js
Component({
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log("组件创建完成");
    },
  },
  properties: {
    tabs:{
      type:Array,
      value:[]
    }
  },
  data: {
    currentindex:0
  },
  methods: {
    getindex(e){
      
      //console.log(e.currentTarget.dataset.index)
      var index=e.currentTarget.dataset.index
      this.triggerEvent("aaa", index )
      this.setData({
        currentindex:index
      })
    }
  }
})
