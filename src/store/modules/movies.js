import movieList from '../../assets/movie-list'
const SET_SEARCH = "SET_SEARCH"
const state = {
	movies: movieList,
	search: ''
}

const mutations = {
	[SET_SEARCH](state, search){
		state.search = search
	}
}

const actions = {
	search({commit}, search){
		commit(SET_SEARCH, search)
	}
}

const getters = {
	getMovies: state => {
		return state.movies.filter(movie => movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}