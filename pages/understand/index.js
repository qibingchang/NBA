// pages/understand/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    under: [{
      name: "NBA明星级别球员",
      title: "2016年4月14日，科比正式告别篮球。他曾是湖人王朝的缔造者之一，联盟第一人，甚至历史上最强得分手之一，那些金光闪闪的纪录，也仿佛他职业生涯中一幕又一幕的华丽乐章。"
    }],
    imgage: [{
      img: "https://china.nba.com/media/img/players/head/260x190/202695.png",
      title: "科怀-伦纳德",
      zhiwei: "前锋/多伦多/猛龙队",
      qiuyihao: "2",
      fen: '27'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/203507.png",
      title: "扬尼斯-安特托昆博",
      zhiwei: "前锋 / 密尔沃基 雄鹿",
      qiuyihao: "34",
      fen: '21'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/201572.png",
      title: "布鲁克-洛佩兹",
      zhiwei: "中锋 / 密尔沃基 雄鹿",
      qiuyihao: "11",
      fen: '18'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/1627783.png",
      title: "帕斯卡尔-西亚卡姆",
      zhiwei: "前锋 / 多伦多 猛龙",
      qiuyihao: "43",
      fen: '18'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/200768.png",
      title: "凯尔-洛瑞",
      zhiwei: "后卫 / 多伦多 猛龙",
      qiuyihao: "7",
      fen: '17'
    }],
    lanban: [{
      img: "https://china.nba.com/media/img/players/head/260x190/202695.png",
      title: "科怀-伦纳德",
      zhiwei: "前锋/多伦多/猛龙队",
      qiuyihao: "2",
      fen: '17'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/203507.png",
      title: "扬尼斯-安特托昆博",
      zhiwei: "前锋 / 密尔沃基 雄鹿",
      qiuyihao: "34",
      fen: '11'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/201572.png",
      title: "布鲁克-洛佩兹",
      zhiwei: "中锋 / 密尔沃基 雄鹿",
      qiuyihao: "11",
      fen: '9'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/101141.png",
      title: "艾森-伊利亚索瓦",
      zhiwei: "前锋 / 密尔沃基 雄鹿",
      qiuyihao: "77",
      fen: '6'
    }, {
      img: "https://china.nba.com/media/img/players/head/260x190/202339.png",
      title: "埃里克-布莱德索",
      zhiwei: "后卫 / 密尔沃基 雄鹿",
      qiuyihao: "6",
      fen: '5'
    }],
    lunbo: [{
      img: "http://img1.gtimg.com/chinanba/pics/hv1/72/148/2310/150245562.jpg"
    }, {
        img: "http://img1.gtimg.com/chinanba/pics/hv1/16/148/2310/150245506.jpg"
    }, {
        img: "http://img1.gtimg.com/chinanba/pics/hv1/73/148/2310/150245563.jpg"
    }, {
        img: "http://img1.gtimg.com/chinanba/pics/hv1/208/130/2310/150241108.jpg"
    }, {
        img: "http://img1.gtimg.com/chinanba/pics/hv1/203/130/2310/150241103.jpg"
    }],
    neirong: [{
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/233/151/2310/150246488.jpg',
      title: '小卡今年季后赛个人表现卓绝，勇士很可能会延续之前的防守策略对小卡施以高强度逼抢，这可能是小卡在东部未能见到的包夹强度，他想得分可能不会那么容易。',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/70/148/2310/150245560.jpg',
      title: '大战将至 杜兰特将随队赶赴多伦多',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/68/148/2310/150245558.jpg',
      title: '未来悬而未决 巴恩斯尚未决定是否跳出合同',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/67/148/2310/150245557.jpg',
      title: '字母哥：从未想过要拿MVP 只在意球队已被淘汰',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/32/148/2310/150245522.jpg',
      title: '曝火箭&鹈鹕邀请泰伦-卢担任球队首席助教',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/11/148/2310/150245501.jpg',
      title: '科尔：克莱是今年季后赛攻守最均衡的后卫',
    }, {
      img: 'http://img1.gtimg.com/chinanba/pics/hv1/217/141/2310/150243922.jpg',
      title: '荆棘与梦想 猛龙总决赛之路回顾 ',
    }]
  },
  clcikbtn() {
    this.setData({
      isShow: true
    })
  },
  clcikmajor() {
    this.setData({
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // wx.request({
    //   url: 'https://m.china.nba.com/static/data/league/playerlist_A.json',
    //   success(res) {
    //     console.log(res.data.payload.players);
    //     that.setData({
    //       payload: res.data.payload.players
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.clearStorageSync()
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