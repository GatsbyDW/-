// components/recommend/recommend.js
Component({
  data: {
    date:0,
    cover:[],
    month:[],
    List:[],
    total:0,
    baseUrl:"http://119.29.12.250:3000/",
    params:{
      skip:0,
      limit:12
    }

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
      //console.log(res)
      var months=res.data.data
      var getdate=res.data.data.date
      var date=new Date(getdate)
      var day=date.getDate()
      var month=date.getMonth()+1
      //console.log(month)
      var month_msg=day+"/"+month+"月"
      months.month_msg = month_msg;
      this.setData({
        month:months
      })
     }
   })
   },
   gethot(){
    wx.request({
      url:'http://119.29.12.250:3000/home/hot?',
      // 请求携带参数时，
      data:this.data.params,
      success:(res)=>{
        //console.log(res.data.data.list)
        console.log(this.data)
         //console.log(res.data.data.total)
        this.setData({
           List:[...this.data.List,...res.data.data.list],
           total:res.data.data.total
        })

      }
      
    })
   },
   scrolltolower(){
    //  0 应该先判断一下有没有更多数据 
    if (this.data.params.skip >= this.data.total) {
      // 没有更多数据了
      // 显示一会之后 自动显示 弹窗 
      wx.showToast({
        title: '没有更多数据了.',
        // 把 图标去除掉
        icon: 'none',
      });
      // 让代码不再往下执行
      return;
    }
     var params=this.data.params
     params.skip+=12
     this.setData({
       params:params
     })
     this.gethot()
   }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.getCover()
      this.getmonth()
      this.gethot()
    },
   
  },
})
