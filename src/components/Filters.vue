<template>
	<div id="filters">
		<h3>Filters</h3>
		<p v-for="(filter, index) in filters" :key="filter.key" @click="applyFilter(filter)">{{filter.name}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				filters: [
					{
						name: 'Rating Highest',
						key: 'rating',
						order: 'desc'
					},
					{
						name: 'Rating Lowest',
						key: 'rating',
						order: 'asc'
					},
					{
						name: 'Year Newest',
						key: 'year',
						order: 'desc'
					},
					{
						name: 'Year Oldest',
						key: 'year',
						order: 'asc'
					},
				]
			}
		},
		methods: {
			applyFilter(filter){
				this.$store.dispatch('filter', filter)
			}
		}
	}
</script>

<style lang='scss' scoped>
	#filters {
		text-align: left;
		color: rgb(143, 143, 143);
		cursor: pointer;

		p {
			margin-left: 10px;
			transition: all .2s
		}
		p:hover{
			color: white;
		}
	}
</style>