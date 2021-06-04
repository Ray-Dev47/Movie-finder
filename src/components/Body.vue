<template>
	<div>
		<div class="max-w-6xl mx-auto">
			<!-- main -->
			<div class="mt-60 text-center">
				<div class="text-4xl sm:text-5xl font-bold">MovieFinder</div>
				<div class="text-lg font-bold mt-4 mb-10 text-gray-800">
					Want to find out about a movie? We've got you!
				</div>
				<!-- search movie -->
				<div>
					<input
						type="text"
						class="form-input text-gray-500 text-2xl sm:text-5xl font-bold w-10/12 border-custom-orange border-t-0 border-r-0 border-l-0 border-b-2 sm:border-b-4 p-3 outline-none mb-3 placeholder-gray-400"
						placeholder="Search by title... "
					/>
					<i class="fas fa-search text-3xl sm:text-4xl text-gray-400"></i>
				</div>

				<!-- movie posters -->
				<div class="mt-36">
					<div class="font-bold text-2xl sm:text-4xl mb-10">New Releases</div>
				</div>
			</div>

			<div class="flex flex-row flex-wrap p-4 items-center justify-center sm:justify-between">
				<div v-if="isLoading">Loading....</div>
				<div 
					v-for="movie in movies"
					:key="movie.id" 
					class="flex flex-wrap flex-col"
				>
                    <router-link to="info">
                        <img
						:src="'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
                    </router-link>
					
					<span class="py-2 font-bold text-xl">{{ movie.title  }}</span>
					<div class="flex text-lg text-red-500 mb-7 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return{
			movies: [],
			isLoading: false
		};
	},
	methods:{
		getMovie(){
			this.isLoading = true;
			let url = 'https://api.themoviedb.org/3/movie/popular?api_key=9099d4a456925cc52c8aed25ab61ba4e';
			fetch(url)
				.then(response => response.json())
				.then(response => {
					this.isLoading = false;
					this.movies = response.results;
					console.log(response);
				});
		}
	},
	mounted(){
		this.getMovie();
	}
}
</script>
