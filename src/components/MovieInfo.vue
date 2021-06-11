 <template>
  <div>
    <div v-if="isLoading">Loading....</div>
    <div class="max-w-full mt-32">
      <router-link to="/">
        <img
          :src="'https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path"
          class="z-0 h-5/6 w-full sm:px-9 object"
          alt=""
        />
      </router-link>
    </div>

    <div class="flex sm:flex-row flex-col sm:justify-evenly">
      <div>
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="w-64 sm:ml-40 mx-auto mr-16 -top-28 relative sm:h-96 h-80 z-10"
          alt=""
        />
      </div>

      <!-- title and casts -->
      <div class="flex sm:max-w-xl w-auto sm:mt-10 sm:mx-40">
        <div class="flex flex-col pb-20">
          <div class="font-bold justify-items-end text-2xl sm:text-4xl mb-6">
            {{ movie.title }}
          </div>
          
            <div class="mr-6">
             <StarRating :rate="movie.vote_average" />
          </div>
          <div class="flex font-bold text-gray-500">
            <span class="text-gray-800">Release Date: &nbsp;</span>  {{ movie.release_date }}
            </div>

          
          <!-- Genre -->
          <div class="flex font-bold py-2 text-gray-500">
            <span class="text-gray-800">Genre: &nbsp;</span>
            {{ genresList }}
          </div>
          <div class="font-bold text-gray-500">
            <span class="text-gray-800">Vote Count:</span>&nbsp; {{ movie.vote_count }}
            </div>
          <div class="text-md sm:text-lg text-gray-600 font-bold my-6">
            {{ movie.overview }}
          </div>
          <!-- casts -->
          <div class="font-bold text-gray-500 mb-6">Casts</div>
          <div class="flex flex-wrap justify-between">
            <div
              v-for="cast in movieCast"
              :key="cast.id"
              class="flex w-28 text-sm text-center pb-6 flex-row font-bold"
            >
              <div>
                <img
                  class="rounded-full mx-25 h-24 w-24 object-cover"
                  :src="'https://image.tmdb.org/t/p/w92' + cast.profile_path"
                  alt="Alexander Skarsgård"
                  v-if="cast.profile_path"
                />
                <div class="bg-yellow-600 rounded-full h-24 w-24" v-else><img src="@/assets/img/avatar.png" alt=""></div>

                <div>{{ cast.name }}</div>
              </div>
            </div>
          </div>
          <div class="font-bold py-6 text-gray-500">Director</div>
          <span v-if="directors.length < 1"
            >Director not available for this movie</span
          >
          <div
            v-for="director in directors"
            :key="director.id"
            class="flex w-28 text-sm text-center mr-8 flex-row font-bold"
          >
            <div>
              <img
                class="rounded-full h-24 w-24 object-cover"
                :src="'https://image.tmdb.org/t/p/w92' + director.profile_path"
                alt="user image"
              />
              <div>{{ director.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import StarRating from "./StarRating.vue";
export default {
  components: {
    StarRating
  },

  data() {
    return {
      id: this.$route.params.id,
      isLoading: false,
      movie: {},
      movieCast: [],
    };
  },
  computed: {
    genresList() {
      const genresArr = this.movie.genres;
      if (genresArr) {
        return genresArr.map((g) => g.name).join(", ");
      }
      return "";
    },
    directors() {
      return this.movieCast.filter(
        (cast) => cast.known_for_department === "Directing"
      );
    },
  },
  methods: {
    getMovie() {
      this.isLoading = true;
      let url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=9099d4a456925cc52c8aed25ab61ba4e`;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          this.isLoading = false;
          this.movie = response;
        });
    },
    getCast() {
      let url = `https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=9099d4a456925cc52c8aed25ab61ba4e`;
      // https://api.themoviedb.org/3/movie/337404/credits?api_key=9099d4a456925cc52c8aed25ab61ba4e
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          //   this.isLoading = false;
          this.movieCast = response.cast;
        });
    },
  },
  mounted() {
    this.getMovie();
    this.getCast();
  },
};
</script>

