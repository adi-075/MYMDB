// export async function load({ fetch, params }) {
// 	console.log(params.id);
// 	const res = await fetch(
// 		`https://api.themoviedb.org/3/movie/${params.id}?api_key=a7d79834e60ad067b7e76c2b2584034b&language=en-US`
// 	);
// 	const movieDetail = await res.json();
// 	// console.log(movieDetail.backdrop_path);
// 	if (res.ok) {
// 		return {
// 			props: { movieDetail }
// 		};
// 	}
// }

export const load = async ({ fetch, params }) => {
	const movieDetails = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=a7d79834e60ad067b7e76c2b2584034b&language=en-US`
		);
		const data = await res.json();
		return data.results;
	};
	return {
		mov: movieDetails()
	};
};
