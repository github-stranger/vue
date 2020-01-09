import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
// vue的$.get() $post()都依赖它
import VueResource from 'vue-resource';
import routeMap from './router.js';
import $ from 'jquery';
window.$ = $;

Vue.use(Router);
Vue.use(VueResource);

// 注册全局路由
var router = new Router();
router.map(routeMap);
// 所有没在router找到的页面都会匹配到home页面
router.redirect({
  '*': '/hi'
});

router.start(App, 'app');
