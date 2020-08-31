import Router from 'vue-router'
import Vue from 'vue'
import Parent from '@/views/props/Parent.vue'
import Refs from '@/views/refs/Parent.vue'
import EventBus from '@/views/eventBus/Parent.vue'
import Vuex from '@/views/vuex/Compon1.vue'
import Vuex2 from '@/views/vuex/Compon2.vue'

import SyncParent from '@/views/sync/Parent.vue'

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
        },
        {
            path:'/vuex',
            name:'Vuex1',
            component:Vuex
        },
        {
            path:'/vuex2',
            name:'Vuex2',
            component:Vuex2
        },
        {
            path:'/sync',
            name:'SyncParent',
            component:SyncParent

        }
      
    ]


});

export default router;