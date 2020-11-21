<template>
	<div id="movie-container">
		Movie List
		<ul>
			<li style="color:white" v-for="m in movies" :key="m.id">{{m.name}}</li>
		</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			movies:[
				{
					id: 1,
					name: 'Avenger Endgame'
				},
				{
					id: 2,
					name: 'Boruto'
				},
				{
					id: 3,
					name: 'Spongebob Squarepants'
				},
				{
					id: 4,
					name: 'Dragon Ball Z'
				}
			]
		}
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