<template>
<div>
  <div>refs-parent</div>
  <Child ref="msg"></Child>
</div>
  
</template>

<script>
import Child from '@/views/refs/Child.vue'
export default {
    name:'Refs',
    components:{
        Child,
    },
    mounted(){
        console.log(this.$refs.msg);
        this.$refs.msg.getMessage('hello world')
    }
}

</script>
<style>
</style>