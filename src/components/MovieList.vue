<template>
	<div id="movie-container">
		Movie List
		<ul>
			<li style="color:white" v-for="movies in movies" :key="movies.id">{{movies.name}}</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			// movies:[]
		}
	}, 
	computed: {
		// movies() {
		// 	return this.$store.getters.getMovies
		// }
	},
	created(){
		this.movies = this.$store.getters.getMovies
	}
}
</script>

<style lang='scss' scoped>
#movie-container {
	padding-top: 1rem;
	display: flex;
	flex-wrap: wrap;
	flex-grow: 2;
	justify-content: center;
}
</style>