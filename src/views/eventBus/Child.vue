<template>
  <div @click="changeEvent">chile-eventBud</div>
</template>

<script>
import eventBus from '@/eventBus.js'
export default {
    name:'Child',
    data(){
        return{
            a:'event-bus'
        }
    },
    methods:{
        changeEvent(){
            eventBus.$emit('change',this.a)
        }
    }

}

</script>
<style>
</style>