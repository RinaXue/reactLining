const Mock = require('mockjs')

let bannerData = {
  status: 0,
  data: [
    {
      id: 423423,
      name: '李宁轮播图1',
      imgUrl: 'http://www.lining.com/images/banner/181010/01.jpg'
    },
    {
      id: 64564,
      name: '李宁轮播图2',
      imgUrl: 'http://www.lining.com/images/banner/19Q1/02.jpg'
    },
    {
      id: 6565654,
      name: '李宁轮播图3',
      imgUrl: 'http://www.lining.com/images/banner/19Q1/03.jpg'
    },
    {
      id: 7657567,
      name: '李宁轮播图4',
      imgUrl: 'http://www.lining.com/images/banner/19Q1/04.jpg'
    },
    {
      id: 6456456,
      name: '李宁轮播图5',
      imgUrl: 'http://www.lining.com/images/banner/19Q1/05.jpg'
    }
  ]
}

Mock.mock('/banner/data', 'get',bannerData )