<script>
	export let data;
	const { movies, trendingMovies } = data;
	import PopularMovies from '../components/PopularMovies.svelte';
	import TrendingMovies from '../components/TrendingMovies.svelte';
</script>

<section>
	<PopularMovies {movies} />
	<TrendingMovies {trendingMovies} />
</section>
