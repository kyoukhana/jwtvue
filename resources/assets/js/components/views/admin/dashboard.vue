<template>

              <router-view></router-view>

</template>

<script>
    export default {

        mounted: function () {
            this.$nextTick(function () {
                componentHandler.upgradeDom();
                componentHandler.upgradeAllRegistered();
            })


        }


    }
</script>
<style>

</style>