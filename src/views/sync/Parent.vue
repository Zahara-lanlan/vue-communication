<template>
  <div>
      <div>sync-parent</div>
      {{msg}}
      <Child :msg.sync="msg"></Child>
  </div>
</template>

<script>
import Child from '@/views/sync/Child.vue'
export default {
    name:'SyncParent',
    components:{
        Child,
    },
    data(){
        return {
            msg:"原始数据"
        }
    }

}

</script>
<style>
</style>