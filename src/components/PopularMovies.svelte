<script>
	export let movies;
	import MovieCard from './MovieCard.svelte';
</script>

<div class="bg-black/95 p-6">
	<h3 class="text-center font-sans text-4xl mb-1 font-extrabold">
		<span class="text-red-600 drop-shadow-xl shadow-md/40">MYMDB</span>
	</h3>
	<div>
		<h1 class="text-gray-50 text-2xl px-7 md:px-7 font-extrabold mt-6">Popular Movies</h1>
		<div class="popular-movies drop-shadow-md">
			{#each movies as movie}
				<MovieCard {movie} />
			{/each}
		</div>
	</div>
</div>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		column-gap: 1rem;
		row-gap: 1.8rem;
	}
</style>
