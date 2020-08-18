import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import FullWidth from '@/components/Index/FullWidth'
import Category from '@/components/Index/Category'
import News from '@/components/Index/News'
import Search from '@/components/Index/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/FullWidth',
      name: 'FullWidth',
      component: FullWidth
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },{
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
  ]
})
