import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        a:1
    },

    //修改数据
    mutations:{
        changeA(state,payload){
            console.log("改变值",payload)
            console.log("state的值",state)
             state.a = payload;
             console.log("+++改变后的值+++",state.a);
        }
    }

});

export default store;