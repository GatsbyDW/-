// components/recommend/recommend.js
Component({
  data: {
    date:0
,    cover:[],
    month:[],
    baseUrl:"http://119.29.12.250:3000/"
  },
  properties: {

  },
  methods: {
    // 获取精选大图数据
    
   getCover(){
    wx.request({
      url:'http://119.29.12.250:3000/home/cover',
      success :(res) => {
          this.setData({
          cover:res.data.data
        })
      }
    })
   },
   //
   getmonth(){
   wx.request({
     url: 'http://119.29.12.250:3000/home/month',
     success :(res)=>{
      console.log(res)
      var months=res.data.data
      var getdate=res.data.data.date
      var date=new Date(getdate)
      var day=date.getDate()
      var month=date.getMonth()+1
      console.log(month)
      var month_msg=day+"/"+month+"月"
      months.month_msg = month_msg;
      this.setData({
        month:months
      })
     }
   })
   }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getCover()
      this.getmonth()
    },
   
  },
})
