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
          <div class="font-bold dark:text-white text-2xl sm:text-4xl mb-10">New Releases</div>
        </div>
      </div>

      <div
        class="flex flex-row flex-wrap py-4  items-center justify-center sm:justify-between"
      >
        <div v-if="isLoading">Loading....</div>
        <div
          v-for="movie in movies"
          :key="movie.id"
          class="flex sm:w-60 flex-wrap flex-col"
        >
          <div class="flex flex-col">
            <router-link :to="'/info/'+movie.id">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                alt="godzilla"
                class="card w-80 sm:w-72 mb-5 h-80 object-fill hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
              />
            </router-link>
          </div>
          <div>
            <span class="py-2 font-bold  mx-auto text-xl">{{
              movie.title
            }}</span>
            <div class="flex text-lg text-red-500 mb-7 sm:mb-10">
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
  </div>
</template>


<script>
export default {
  data() {
    return {
      movies: [],
      isLoading: false,
    };
  },
  methods: {
    getMovie() {
      this.isLoading = true;
      let url =
        "https://api.themoviedb.org/3/movie/popular?api_key=9099d4a456925cc52c8aed25ab61ba4e";
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.isLoading = false;
          this.movies = response.results;
          console.log(response);
        });
    },
  },
  mounted() {
    this.getMovie();
  },
};
</script>
