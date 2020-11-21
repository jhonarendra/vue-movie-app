import { createStore } from 'vuex'

const SET_USER = 'SET_USER'

export default createStore({
  state: {
  	user: ()
  },
  mutations: {
  	[SET_USER](state, user){
  		state.user = user
  	}
  },
  actions: {
  	setUser({commit}, user){
  		// call api

  		commit(SET_USER, user)
  	}
  },
  modules: {
  },
  getters: {
  	isUserAdmin: state => {
  		return state.user.role === 'admin'
  	}
  }
})
