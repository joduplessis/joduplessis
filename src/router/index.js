import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/work/:slug',
            name: 'Project',
            component: Project
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
    ]
})
