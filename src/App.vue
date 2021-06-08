<template>
  <div>
    <app-header></app-header>
    <!-- <app-body></app-body> -->
    <!-- <app-movie-info></app-movie-info> -->
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Body from './components/Body.vue';
// import MovieInfo from './components/MovieInfo.vue';
import Footer from "./components/Footer.vue";

// import store from './store/store'

export default {
	
  name: "App",
  components: {
    appHeader: Header,
    // appBody: Body,
    appFooter: Footer,
    // appMovieInfo: MovieInfo,
  },
  // computed: {
  //   isDark() {
  //     return store.getters.isDark;
  //   },
  // },
};
</script>

<style>
</style>
