import 'dotenv/config';
export const load = async () => {
	const fetchMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
		);
		const data = await res.json();
		return data.results;
	};

	const trendingMovies = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`
		);

		const data = await res.json();
		return data.results;
	};

	return {
		movies: fetchMovies(),
		trendingMovies: trendingMovies()
	};
};
