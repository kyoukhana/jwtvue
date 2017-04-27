export default [
    {path: '/', component: (resolve) => { require(['../components/views/home.vue'], resolve)}},
    {path: '/403', component: (resolve) => { require(['../components/views/forbidden.vue'], resolve)}},
    {path: '/404', component: (resolve) => { require(['../components/views/forbidden.vue'], resolve)}}
]