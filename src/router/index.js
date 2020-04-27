import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import Login from '../views/Login'
import Task from '../views/Task'
import Home from '../views/Home'
import Person from '../views/Person'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
            path: '/404',
            name: 'nofind',
            component: () =>
                import ('@/views/common/404'),
            meta: {
                title: '找不到页面'
            }
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/task',
            name: 'task',
            component: Task,
            meta: {
                title: '发布任务'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录'
            }
        },
        {
            path: '/person',
            name: 'person',
            component: Person,
            meta: {
                title: '个人中心'
            }
        },
    ]
})