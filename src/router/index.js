import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Goals from '@/components/goal/Goals'
import AddGoal from '@/components/goal/AddGoal'
import Profile from '@/components/user/Profile'
import Signin from '@/components//user/Signin'
import Signup from '@/components//user/Signup'
import Goal from '@/components/goal/Goal'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goals',
      name: 'Goals',
      component: Goals
    },
    {
      path: '/goal/new',
      name: 'AddGoal',
      component: AddGoal,
      beforeEnter: AuthGuard
    },
    {
      path: '/goals/:id',
      name: 'Goal',
      props: true,
      component: Goal
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
