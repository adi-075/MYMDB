<script>
	export let movie;
</script>

<div class="movie-card scale-95 hover:scale-105 ease-in duration-200">
	<!-- Movies Card Component  -->
	<!-- <a href={'/movie/' + movie.id}> -->
	<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
	<!-- </a> -->
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
	<div class="mb-5" />
</div>

<style>
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 0.5rem;
	}
	h2 {
		font-size: 1.3rem;
		color: white;
	}
	.description {
		height: 4vh;
	}
	p {
		font-size: 0.8rem;
		font-weight: 700;
		color: gray;
	}
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
