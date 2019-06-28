import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from '@/pages/home'
import  Artists from '@/pages/artists'
import Search from '@/pages/search'
import Ucenter from '@/pages/ucenter'
import HotList from '@/pages/musiclist/hot_list'
import KingList from '@/pages/musiclist/king_list'
import NewsList from '@/pages/musiclist/news_list'
import MoreList from '@/pages/morelist'
import MusicPlay from "@/pages/musicplay"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/musicplay",
      name:"MusicPlay",
      component:MusicPlay
    },{
      path: '/',
      name: 'Index',
      redirect:'/home',
      component: Index,
      children:[
        {
          path: 'home',
          component: Home,
          redirect:"/home/hotList",
          children: [
            {
              path:'hotList',
              component:HotList
            },{
              path:'kingList',
              component:KingList
            },{
              path:'newsList',
              component:NewsList
            }
          ]
        },{
          path: 'artists',
          component: Artists
        },{
          path: 'search',
          component: Search
        },{
          path: 'ucenter',
          component: Ucenter
        },{
          path: 'more',
          name:'MoreList',
          component: MoreList
        }
      ]
    }
  ]
})
