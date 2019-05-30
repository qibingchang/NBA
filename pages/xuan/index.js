// pages/xuan/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      'http://img5.imgtn.bdimg.com/it/u=2428353399,1053633872&fm=26&gp=0.jpg',
      'http://img5.imgtn.bdimg.com/it/u=617321261,3557578248&fm=26&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=1529506425,2693238444&fm=26&gp=0.jpg'
    ],
      lists:[
       {
          wo:"自我坚持",
          you:"有一种坚持叫科比·布莱恩特",
          div:"科比，不说再见",
          bei:"北京时间11月30日，科比在《球员论坛网》发表文章，宣布本赛季结束后正式退役。距离湖人送给勇士开局第16场连胜仅过去5天，那场比赛科比全场14投仅1中。他说：“这个赛季结束后，我已经离开了”。他曾经说：“当我退役时，那是因为我自己选择离开”。",
          div2:"※科比生涯无比辉煌",
          bei1:"1996年，科比被当时的夏洛特黄蜂以首轮第13顺位选中，随即他被交易到湖人。在漫长的职业生涯里，科比帮助球队先后夺取5座总冠军。而飞侠本人在07-08赛季荣膺常规赛MVP。在目前的历史得分榜上，科比排名第三位，仅次于贾巴尔与马龙。",
          div3:"退役后他会做什么",
          bei2:"据称科比对成为球队的老板或者教练也不感兴趣，但科比未来还是会做与篮球密切相关的事业。2014年，科比正式成立了“科比公司”，他的公司除了为科比谋划商业活动之外，还进行投资。",
          div4:"※一个人，一座城"
       }
      ]
  },
  understand(){
    wx.navigateTo({
      url: '/pages/understand/index',
    })
  },
  detail(){
    wx.navigateTo({
      url: '/pages/detail/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})