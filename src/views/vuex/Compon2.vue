<template>
  <div>
      <div>vuex-components2</div>
      {{a}}
      <div @click="changeA">哈哈哈2</div>
  </div>
</template>

<script>
export default {
  name: "Vuex2",
//   data() {
//     return {
//       a: this.$store.state.a,
//     };
//   },
computed:{
    a(){
        return this.$store.state.a;

    },

},
  mounted() {
    console.log(this.$store.state);
  },
  methods:{
      async changeA(){
          console.log("a的值",this.a)
          await this.$store.dispatch('changeA',this.a+1);  //会自动在内部找action这个方法


          //但是它不能处理异步的情况
      }
  }
};
</script>
<style>
</style>