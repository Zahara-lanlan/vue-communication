<template>
  <div>
    <div @click="changeMsg">sync-child</div>
  </div>
</template>

<script>
export default {

  name:'Syncchild',
  props:{
    msg:{
      type:String,
      dafault:"lalala"
    }
  },
  methods:{
    changeMsg(){
      this.$emit('update:msg','修改了')
    }
  }
}
</script>
<style>
</style>