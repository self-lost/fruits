<template>
    <div class="push-max"  style="width:100%;height:100vh;">
        <push>
            <div class="abc">
                <merchandise />
            </div>
        </push>
    </div>
</template>
<script>
import push from '@/components/push1.vue'
import merchandise from '@/components/merchandise.vue'
export default {
    data(){
        return{

        };
    },
    methods:{
        
    },
    components:{
        push,
merchandise
    }
}
</script>
<style>
.abc{
    width: 100%;
    height: 90%;
    overflow: scroll;
    background: blue;
}
</style>
