import movieList from '../../assets/movie-list'

const state = {
	movies: movieList
}

const mutations = {
	
}

const actions = {
	
}

const getters = {
	getMovies: state => {
		return state.movies
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}