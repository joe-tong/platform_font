import Vue from 'vue'
import Router from 'vue-router'

// 按模块管理引用路由
import Login from '../views/Login'

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
            name: 'Login',
            component: Login,
            meta: {
                title: '登录页面'
            }
        }
    ]
})