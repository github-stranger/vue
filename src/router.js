// 强制当前页面的js解析为es6
'use strict';
/**
 *
 *
 *
 */
import Hi from './page/Hi';
import heads from './page/heads';

export default {
  '/hi': {
    name: 'hi',
    component: Hi
  },
  '/one': {
    name: 'one',
    component: (r) => {
      require(['./page/One'], r);
    }
  },
  //首页
  '/index/': {
    name: 'index',
    component: (r) => {
      require(['./page/index'], r);
    }
  },
  '/autocar': {
    name: 'autocar',
    component: (r) => {
      require(['./page/autocar'], r);
    }
  },
  //我的收藏
  '/collect': {
    name: 'collect',
    component: (r) => {
      require(['./page/collect'], r);
    }
  },
  //关于我们
  '/about': {
    name: 'about',
    component: (r) => {
      require(['./page/about'], r);
    }
  },
  //头部
  '/heads': {
    name: 'heads',
    component: (r) => {
      require(['./page/heads'], r);
    }
  },
  //回顶部
  '/Returntop': {
    name: 'Returntop',
    component: (r) => {
      require(['./page/Returntop'], r);
    }
  },
  //图书大全
  '/complete': {
    name: 'complete',
    component: (r) => {
      require(['./page/complete'], r);
    }
  },
  //图书详情页
  '/summary': {
    name: 'summary',
    component: (r) => {
      require(['./page/summary'], r);
    }
  },
  //底部
  '/bottom': {
    name: 'bottom',
    component: (r) => {
      require(['./page/bottom'], r);
    }
  }

};
