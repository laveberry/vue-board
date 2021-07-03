import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'

Vue.use(Router)

/**
 * 1. 컴포넌트 만들기
 * 2. 라우터에 경로추가
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      //?붙여주어 null일때도 적용되게하기
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      // 파라미터로 index값 받아오기
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
  ]
})
