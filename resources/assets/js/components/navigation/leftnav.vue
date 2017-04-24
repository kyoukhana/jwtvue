<template>
    <!--Start left navigation -->
    <div class="app-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        <header class="app-drawer-header">
            <img src="/images/loose/user.png" class="app-avatar">
            <div class="app-avatar-dropdown">
                <span>{{user.email}}</span>
                <div class="mdl-layout-spacer"></div>
                <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                    <i class="material-icons" role="presentation">arrow_drop_down</i>
                    <span class="visuallyhidden">Accounts</span>
                </button>
                <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
                    <li class="mdl-menu__item"><router-link class="mdl-navigation__link" to="/yinyangadmin/dashboard/account">Account Info</router-link></li>
                      <li class="mdl-menu__item"><a v-if="$auth.check()" v-on:click="this.logout()">logout</a></li>

                </ul>
            </div>
        </header>

        <!--Start Navigation items -->
        <nav class="app-navigation mdl-navigation mdl-color--blue-grey-800">



        <router-link class="mdl-navigation__link" to="/yinyangadmin/dashboard"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">home</i>Home</router-link>
        <router-link class="mdl-navigation__link" to="/yinyangadmin/dashboard/users"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">perm_identity</i>Users</router-link>
        <router-link class="mdl-navigation__link" to="/yinyangadmin/dashboard/tracks"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">graphic_eq</i>Tracks</router-link>
        <router-link class="mdl-navigation__link" to="/"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">subject</i>Reporting</router-link>
        <a class="mdl-navigation__link" v-if="$auth.check()" v-on:click="this.lgOut()" style="cursor:pointer"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">&#xE851;</i>Logout</a>
        </nav>
        <!--End Navigation items -->

    </div>
    <!--End Left Navigation -->
</template>


<script>
    export default {
        name: 'leftnav',
        data: function () {
            return {
                user: {
                  email: ''
                }
            }
        },

        methods:{

            logout:function(){
                this.$auth.logout({
                    makeRequest: true,
                    params: {},
                    success: function () {},
                    error: function () {},
                    redirect: '/admin/login',
                });
            }
        },

        mounted: function () {
            this.$nextTick(function () {
                this.user.email=this.$auth.user().email;
            })
        }


    }
</script>
