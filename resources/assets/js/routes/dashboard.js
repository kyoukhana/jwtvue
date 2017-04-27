export default [
    {path: '/dashboard', meta: {auth: ['admin']}, component: (resolve) => { require(['../components/views/admin/dashboard.vue'], resolve)},
        children:[
            {path: '',component: (resolve) => { require(['../components/views/admin/dashboardHome.vue'], resolve)}},
            {path: 'login', meta: {auth: false}, component: (resolve) => { require(['../components/views/admin/login.vue'], resolve)},
                children:[
                    { path: '', component: (resolve) => { require(['../components/views/admin/loginhome.vue'], resolve)}}
                ]
            }

        ]
    }]