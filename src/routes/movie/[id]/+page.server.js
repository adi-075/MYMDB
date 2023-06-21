export const load = async ({ fetch, params }) => {
	const movieDetails = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
		);
		const data = await res.json();
		return data.results;
	};
	return {
		mov: movieDetails()
	};
};
