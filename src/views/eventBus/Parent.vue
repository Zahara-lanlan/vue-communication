<template>
<div>
  <div>parent-eventBus</div>
  <Child></Child>
</div>
</template>

<script>
import EventBus from '@/eventBus.js'
import Child from '@/views/eventBus/Child.vue'
export default {
   name:'EventBus',
   components:{
        Child
   },
   mounted(){
       EventBus.$on('change',(a)=>{
           console.log(a)
       })
   }
}

</script>
<style>
</style>