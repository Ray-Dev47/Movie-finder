 <template>
  <div>
    <div v-if="isLoading">Loading....</div>
    <div class="max-w-full mt-36">
      <router-link to="/">
        <img
          :src="'https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path"
          class="sm:h-customHeight z-0 h-auto w-full sm:px-9 object"
          alt=""
        />
      </router-link>
    </div>

    <div class="flex sm:flex-row flex-col sm:justify-evenly">
      <div>
        <img
           :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          class="w-64 sm:ml-40 mx-auto mr-16 -top-28 relative h-80 z-10"
          alt=""
        />
      </div>

      <!-- title and casts -->
      <div class="flex sm:max-w-xl w-auto sm:mt-10 sm:mx-40">
        <div class="flex flex-col pb-20">
          <div class="">
            <div class="font-bold justify-items-end text-2xl sm:text-4xl mb-3">
               {{movie.title}}
            </div>
            <div class="flex">
              <div class="mr-3 text-md sm:text-lg text-red-500">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <div class="flex font-bold text-gray-500">. {{movie.release_date}}</div>
            </div>
            <div class="text-md sm:text-lg text-gray-600 font-bold my-6">
              {{movie.overview}}
            </div>
          </div>
          <div class="font-bold text-gray-500 mb-6">Casts</div>
          <div class="flex flex-wrap justify-between">
            <div class="flex w-28 text-sm text-center pb-6 flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-25 h-24 w-24 object-cover"
                  src="@/assets/img/person-1.jpg"
                  alt="Alexander Skarsgård"
                />
                <div>Alexander Skarsgård</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-2.jpg"
                  alt="user image"
                />
                <div>Millie Bobby Brown</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-3.jpg"
                  alt="user image"
                />
                <div>Rebecca Hall</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-4.jpg"
                  alt="user image"
                />
                <div>Brian Tyree Henry</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-5.jpg"
                  alt="user image"
                />
                <div>Shun Oguri</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-6.jpg"
                  alt="user image"
                />
                <div>Eiza González</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-7.jpg"
                  alt="user image"
                />
                <div>Julian Dennison</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-8.jpg"
                  alt="user image"
                />
                <div>Lance Reddick</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-9.jpg"
                  alt="user image"
                />
                <div>Kyle Chandler</div>
              </div>
            </div>
            <div class="flex w-28 text-sm text-center flex-row font-bold">
              <div>
                <img
                  class="rounded-full mx-2 h-24 w-24 object-cover"
                  src="@/assets/img/person-10.jpg"
                  alt="user image"
                />
                <div>Demián Bichir</div>
              </div>
            </div>
          </div>
          <div class="font-bold py-6 text-gray-500">Director</div>
          <div class="flex w-28 text-sm text-center mr-8 flex-row font-bold">
            <div>
              <img
                class="rounded-full h-24 w-24 object-cover"
                src="@/assets/img/person-11.jpg"
                alt="user image"
              />
              <div>Adam Wingard</div>
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
      id: this.$route.params.id,
      isLoading: false,
      movie: {},
    };
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
  },
  mounted() {
    this.getMovie();
  },
};
</script>

