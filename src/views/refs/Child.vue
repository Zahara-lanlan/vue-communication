<template>
  <div>child-refs</div>
</template>

<script>
export default {
    name:"Child",
    data(){
        return{
            message:'子组件'
        }
    },
    mounted(){
    console.log(this.message)
        console.log("子组件的值")
    },
    methods:{
        getMessage(m){
            console.log("+++getmessage+++");
            console.log("从父组件传过来的值",m)
        }
        
    }

}

</script>
<style>
</style>