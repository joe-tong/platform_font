import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import Login from '../views/Login'
import Home from '../views/Home'

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
            name: 'login',
            component: Login,
            meta: {
                title: '登录页面'
            }
        },
        ,
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        }
    ]
})