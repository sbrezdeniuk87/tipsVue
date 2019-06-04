import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tip from '@/components/AdsTips/Tip'
import MyTips from '@/components/AdsTips/MyTips'
import NewTip from '@/components/AdsTips/NewTip'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Tips from '@/components/User/Tips'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/tip/:id',
      props: true,
      name: 'tip',
      component: Tip
    },
    {
      path: '/list',
      name: 'list',
      component: MyTips
    },
    {
      path: '/new',
      name: 'newTip',
      component: NewTip
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/tips',
      name: 'tips',
      component: Tips
    }
  ],
  mode: 'history'
})