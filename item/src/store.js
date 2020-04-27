import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:'邓俊',
    age:24
  },
  getters:{
    newName:state => {
      return state.name + state.age
    }
  },
  mutations: {
    changeState(state,payload){
      state.name = payload.name
    },
  },
  actions: {
    asyncChangeState(context,payload){
      setTimeout(()=>{
        context.state.name = payload.name
      },1000)
    }
  }
})
