import firebase from './firebase'

const db = firebase.firestore().collection('movies')

const moviesApi = {
	getMovies: async() => {
		const documents = await db.get()
		return documents.docs.map(doc => {
			return {
				...doc.data(),
				id: doc.id
			}
			// movie list yg diimport gak isi id 1 2 3 kayak tadi.

		})
	},
	addMovie: async(form) => {
		const {id} =  await db.add(form)
		return {...form, id}

	},
	getMovieById: async() => {

	},
	updateMovies: async() => {

	},
	deleteMovies: async() => {

	},
}

export default moviesApi