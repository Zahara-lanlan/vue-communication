import Vue  from 'vue'
import Vuex from 'vuex'
// import { resolve } from 'core-js/fn/promise';

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        a:1
    },

    //修改数据。只处理同步数据的修改
    mutations:{
        changeA(state,payload){
            console.log("改变值",payload)
            console.log("state的值",state)
            //  state.a = payload;
             console.log("+++改变后的值+++",state.a);
           
        }
    },
    //异步数据的修改
    actions:{
        changeA(store,payload){
            return new Promise((resolve)=>{
                let data = payload;
                setTimeout(()=>{
                    store.commit('changeA',data)
                    resolve();
                },1000)

            })

        }
        
    }

});

export default store;