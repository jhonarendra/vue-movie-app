const ratingMixin = {
	methods: {
		getRatingColor(){
			if(this.movie.rating > 7) return "#4CAF50"

			if(this.movie.rating > 4) return "#FFEB3B"

			return "#F44336"
		}
	}
}

export default ratingMixin