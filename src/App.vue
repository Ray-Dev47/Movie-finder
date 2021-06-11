<template>
  <div>
    <app-header></app-header>
    <!-- <app-body></app-body> -->
    <!-- <app-movie-info></app-movie-info> -->
   
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
        
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
