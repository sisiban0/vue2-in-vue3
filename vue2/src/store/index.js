import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        name:"td"
    },
    mutations:{
        changeName(state,val){
            console.log(state)
            state.name = val
        }
    },
    actions:{
        changeNameSync(context){
            new Promise((reslove)=>{
                setTimeout(()=>{
                    reslove('lowerzZ')
                },3000)
            }).then((res)=>{
                context.commit("changeName",res)
            })
        }
    }
})