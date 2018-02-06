import Vue from 'vue'
import Router from 'vue-router'
import Chat_window from '@/components/ChatWindow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatWindow',
      component: Chat_window
    }
  ]
})
