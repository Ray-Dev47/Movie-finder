<template>
  <div class="flex">
    <input
      type="text"
      v-on:keyup="searchQuery"
      v-model="movieSearch"
      class="
        form-input
        text-gray-400
        bg-white
        dark:bg-gray-900
        text-2xl
        sm:text-5xl
        font-bold
        w-10/12
        border-custom-orange border-t-0 border-r-0 border-l-0 border-b-2
        sm:border-b-4
        p-3
        outline-none
        mb-3
        placeholder-gray-400
      "
      placeholder="Search by title... "
    />
    <i
      @click="movieSearch = ''"
      class="
        fas
        fa-times
        text-3xl
        sm:text-4xl
        text-gray-400
        cursor-pointer
        px-3
      "
    ></i>
    <i
      class="fas fa-search text-3xl sm:text-4xl cursor-pointer text-gray-400"
    ></i>
  </div>
  <div
    v-for="movie in movies"
    :key="movie.id"
    class="p-3 mx-auto w-10/12 bg-gray-300 border-b-2"
  >
    <router-link :to="'/info/' + movie.id">
      <div
        class="flex justify-between cursor-pointer items-center text-xl font-bold">
        <div class="flex" >
          <div >
            <img
              :src="'https://image.tmdb.org/t/p/w92' + movie.poster_path"
              alt=""
              class="card w-14 h-20 mr-3 object-cover"
            />
          </div>

          <div class="flex flex-col">
            <div class="text-black text-2xl font-bold">
              {{ movie.title }}
            </div>
            <div class="text-md flex items-start text-red-500 ">
              <StarRating :rate="movie.vote_average" />
            </div>
          </div>
        </div>
        <div class="text-gray-500">{{ movie.release_date.split("-")[0] }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
    components: {
    StarRating
  },
  data() {
    return {
      movies: [],
      movieSearch: "",
    };
  },
  methods: {
    searchQuery() {
      this.getMovie();
    },
    getMovie() {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=9099d4a456925cc52c8aed25ab61ba4e&query=${this.movieSearch}`;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.movies = response.results;
        });
    },
  },
};
</script>