<script>
	export let trendingMovies;
	import MovieCard from './MovieCard.svelte';
</script>

<div class="bg-black/95 p-6">
	<div>
		<h1 class="text-gray-50 text-2xl px-7 md:px-7 font-extrabold mt-6">Trending Movies</h1>
		<div class="upcoming-movies drop-shadow-md">
			{#each trendingMovies as movie}
				<MovieCard {movie} />
			{/each}
		</div>
	</div>
</div>

<style>
	.upcoming-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		column-gap: 1rem;
		row-gap: 1.8rem;
	}
</style>
