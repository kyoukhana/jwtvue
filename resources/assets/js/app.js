import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAuth from '@websanova/vue-auth'
import App from './components/app.vue'
import mdl from 'material-design-lite'
import VueMdl from 'vue-mdl'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'

Vue.use(VueRouter);
Vue.use(VueMdl);
Vue.use(VueAxios, axios);
Vue.use(VueResource);


const router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    routes: [{
        path: '/',
        component: (resolve) => { require(['./components/views/home.vue'], resolve)}
    },

        {
            path: '/403',
            component: (resolve) => { require(['./components/views/forbidden.vue'], resolve)}
        },

        {
            path: '/404',
            component: (resolve) => { require(['./components/views/forbidden.vue'], resolve)}
        },

    {
        path: '/admin/login',
        name:'adminlogin',
        component: (resolve) => { require(['./components/views/admin/login.vue'], resolve)}
    },
    {
    path: '/admin/dashboard',
    name:'dashadmin',
     meta: {auth: ['admin']},
    component: (resolve) => { require(['./components/views/admin/dashboard.vue'], resolve)},
     children:[
        {
            path: '', component: (resolve) => { require(['./components/views/admin/dashboardHome.vue'], resolve)}
        }
      ]

    }
  ]
});



/*Set VUE ROUTER */
Vue.router = router;

//Vue.axios.defaults.baseURL = domainUrl;
//Vue.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');
Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('content');
Vue.http.options.root="http://www.kevinyoukhana.com";

Vue.use(VueAuth,{
    authRedirect:'/',
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    token: [{request: 'token', response: 'token', authType: 'bearer', foundIn: 'header'}],
    tokenName:'token',
    loginData: {url: 'api/auth', method: 'POST', redirect: 'dashboard'},
    logoutData: {url: 'api/logout', method: 'POST', redirect: 'login',  makeRequest: false},
    fetchData: {url: 'api/account', method: 'GET' , enabled: true},
    rolesVar: 'role',
    refreshData: {enabled: false}
});


const app = new Vue({
    router,
    ...App
})

app.$mount('#app');