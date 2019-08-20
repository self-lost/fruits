<template>
    <div class="my-max">
        <mytop/>
        <myorder />
        <myfuwu />
    </div>
</template>
<script>
import mytop from '@/components/my-top.vue'
import myorder from '@/components/my-orderfrom.vue'
import myfuwu from '@/components/my-fuwu.vue'
export default {
        data(){
        return {}
    },
    components: {
        mytop,
        myorder,
        myfuwu
  },mounted(){
    this.$store.commit('hidemoney');
    this.$store.commit('showMenu');
  }
}
</script>
<style scope lang="less">
    .my-max{
        width: 100%;
        height: 91vh;
    }
</style>