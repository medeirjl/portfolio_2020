import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Work from './views/Work.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '*',
            redirect: '/'
        }
    ],
})