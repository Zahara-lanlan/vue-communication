<template>
<div>
   <div @click="handleClick" id="child">子组件</div>   
</div>

</template>

<script>
export default {
  name: "Child",
  props: {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  data() {
    return {
      a: 18
    };
  },
  created() {
    console.log("姓名", this.name);
    console.log("年龄", this.age);
  },
  methods: {
    handleClick() {
      this.$emit("changeHandel",this.a);
    },
  },
};
</script>
<style></style>
