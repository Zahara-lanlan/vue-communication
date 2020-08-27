import Router from 'vue-router'
import Vue from 'vue'
import Parent from '@/views/props/Parent.vue'
import Refs from '@/views/refs/Parent.vue'
import EventBus from '@/views/eventBus/Parent.vue'


console.log('+++路由+++')
Vue.use(Router);

let router = new Router({

    mode:'history',
    routes:[
        {
          path:'/',
          name:'Parent',
          component:Parent  
        },
        {
            path:'/refs',
            name:'Refs',
            component:Refs,
        },
        {
            path:'/eventBus',
            name:'EventBus',
            component:EventBus,
        }
      
    ]


});

export default router;