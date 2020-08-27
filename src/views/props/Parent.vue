<template>
<div>
  <div ref="myh1">vue1</div>
  <Child :name="name" :age="age" @changeHandel="getParams"></Child>
</div>
</template>

<script>
import Child from "@/views/props/Child.vue";
export default {
  name: "Parent",
  data() {
    return {
      name: "小红",
      age: 18,
    };
  },
  components: {
    Child,
  },
  created(){
    // console.log(this.$refs.myh1.innerText) //此处报错
  },
  methods: {
    getParams(data) {
      console.log(this.$refs.myh1.innerText)  //输出vue
      console.log("从子组件获取到的值", data); 
    },
  },
};
</script>
<style></style>
