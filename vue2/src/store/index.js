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
        changeNameSync(context,payload){
            new Promise((reslove)=>{
                setTimeout(()=>{
                    reslove(payload)
                },800)
            }).then((res)=>{
                context.commit("changeName",res)
            })
        }
    }
})

export {Vuex}