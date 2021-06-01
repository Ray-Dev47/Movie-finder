<template>
	<div id="app">
		<app-header></app-header>
		<!-- <app-body></app-body> -->
		<!-- <app-movie-info></app-movie-info> -->
		<router-view></router-view>
		<app-footer></app-footer>
	</div>
</template>

<script>
import Header from './components/Header.vue';
// import Body from './components/Body.vue';
// import MovieInfo from './components/MovieInfo.vue';
import Footer from './components/Footer.vue';

export default {
	name: 'App',
	components: {
		appHeader: Header,
		// appBody: Body,
		appFooter: Footer,
		// appMovieInfo: MovieInfo,
	},
};
</script>

<style>

</style>
