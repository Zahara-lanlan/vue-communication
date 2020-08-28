<template>
  <div>
      <div>vuex-components</div>
      <div @click="changeA">哈哈哈</div>
  </div>
</template>

<script>
export default {
  name: "Vuex1",
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
      changeA(){
          console.log("a的值",this.a)
          this.$store.commit('changeA',this.a+1);  //会自动在内部找mutations这个方法
      }
  }
};
</script>
<style></style>
