import movieList from '../../assets/movie-list'
const SET_SEARCH = "SET_SEARCH"
const SET_FILTER = "SET_FILTER"
const ADD_MOVIE = "ADD_MOVIE"
const state = {
	movies: movieList,
	search: '',
	filter: {
		key: 'rating',
		order: 'desc'
	}
}

const mutations = {
	[SET_SEARCH](state, search){
		state.search = search
	},
	[SET_FILTER](state, filter){
		state.filter = filter
	},
	[ADD_MOVIE](state, movie){
		state.movies.push(movie)
	}
}

const actions = {
	search({commit}, search){
		commit(SET_SEARCH, search)
	},
	filter({commit}, filter){
		commit(SET_FILTER, filter)
	},
	addMovie({commit, state}, movie){
		movie.id = state.movies.length + 1 //increment
		commit(ADD_MOVIE, movie)
	}
}

const getters = {
	getMovies: state => {
		return state.movies.filter(movie => movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
		.sort(compare(state.filter))
	},
	getMovieById: state => id => {
		return state.movies.find(movie => movie.id === id)
	}
}

const compare = ({key, order}) => {
	return (a, b) => {
		let result = 0

		if(a[key] > b[key]){
			result = 1
		}

		if(a[key] < b[key]){
			result = -1
		}

		if(order === 'asc') return result

		// kalo order desc tinggal dibalik (pake -1)
		return result * -1
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}