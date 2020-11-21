<template>
	<div id="filters">
		<h3>Filters</h3>
		<p>Rating Highest</p>
		<p>Rating Lowest</p>
		<p>Year Newest</p>
		<p>Year Oldest</p>
	</div>
</template>

<script>
	export default{
		data(){
			return {

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
		}
	}
</style>