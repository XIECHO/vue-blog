import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: resolve => require(['@/views/page404'], resolve),
      meta: {
        title: '404 · 博客 | 吴予安'
      }
    },
    {
      path: '/',
      name: 'root',
      redirect: '/home',
      component: resolve => require(['@/views/user/userBase'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['@/views/user/userHome'], resolve),
          meta: {
            title: '首页 · 博客 | 吴予安'
          }
        },
        {
          path: 'article/:articleId',
          name: 'article',
          component: resolve => require(['@/views/user/article'], resolve),
          meta: {
            title: '文章 · 博客 | 吴予安'
          }
        },
        {
          path: 'tagArchived/:tag',
          name: 'tagArchived',
          component: resolve => require(['@/views/user/tagArchived'], resolve),
          meta: {
            title: '标签 · 博客 | 吴予安'
          }
        },
        {
          path: 'archived',
          name: 'archived',
          component: resolve => require(['@/views/user/archived'], resolve),
          meta: {
            title: '归档 · 博客 | 吴予安'
          }
        },
        {
          path: 'about',
          name: 'about',
          component: resolve => require(['@/views/user/about'], resolve),
          meta: {
            title: '关于 · 博客 | 吴予安'
          }
        },
        {
          path: 'friendLink',
          name: 'friendLink',
          component: resolve => require(['@/views/user/friendLink'], resolve),
          meta: {
            title: '友链 · 博客 | 吴予安'
          }
        }
      ]
    },
    {
      path: '/github_login',
      name: 'github_login',
      component: resolve => require(['@/views/login/github_login'], resolve),
      meta: {
        title: '第三方登录 · 博客 | 吴予安'
      }
    }
  ],
  scrollBehavior (to) {
    // return 期望滚动到哪个的位置
    if (to.name === 'article') {
      return {
        x: 0,
        y: 0
      }
    }
  }
})