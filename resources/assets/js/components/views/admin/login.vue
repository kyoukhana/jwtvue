<template>
    <div>
    <div class="mdl-layout mdl-layout-login mdl-js-layout" v-if="!$auth.check()">

        <main class="mdl-layout__content">

            <main class="mdl-layout__content mdl-layout__content-login">
                <div class="mdl-card mdl-shadow--6dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Login</h2>
                    </div>
                    <div class="mdl-card__supporting-text">

                        <form  role="form" action="#" method="post"  @submit.prevent="processlogin">

                            <div class="mdl-textfield mdl-js-textfield">
                                <mdl-textfield floating-label="Email:" type="email" v-model="data.body.email" id="email" email="email"></mdl-textfield>
                            </div>

                            <div class="mdl-textfield mdl-js-textfield">
                                <mdl-textfield floating-label="Password:" type="password" v-model="data.body.password" id="pass" password="password"></mdl-textfield>
                            </div>


                            <div class="mdl-card__actions">
                                <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Sign in</button>
                            </div>
                        </form>


                    </div>
                </div>
            </main>
        </main>
    </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                context: 'login context',
                data: {
                    body: {
                        email: '',
                        password: ''
                    },
                    rememberMe: false
                },
                error: null
            };
        },


        mounted: function () {
            this.$nextTick(function () {
                componentHandler.upgradeDom();
                componentHandler.upgradeAllRegistered();
            })
        },

        methods: {
            processlogin: function () {

                var redirect = this.$auth.redirect();
                this.$auth.login({
                    body: this.data.body,
                    rememberMe: true,
                    redirect: {name: 'dashadmin'},
                });




            }
            /*End process form */
        }
    }
</script>

<style>
    body{
        height:100%;
    }
    .mdl-layout-login {
        align-items: center;
        justify-content: center;
    }
    .mdl-layout__content-login {
        padding: 24px;
        flex: none;
    }

    .bg-row {
        background: url('https://getmdl.io/assets/demos/transparent.jpg') center / cover;
    }
    .demo-layout-transparent .mdl-layout__header,
    .demo-layout-transparent .mdl-layout__drawer-button {
        /* This background is dark, so we set text to white. Use 87% black instead if
           your background is light. */
        color: white;
    }

</style>