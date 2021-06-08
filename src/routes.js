// import Header from './components/Header.vue';
import Body from './components/Body.vue';
import MovieInfo from './components/MovieInfo.vue';
// import Footer from './components/Footer.vue'

export default [
	{ path: '/', component: Body },
	{ path: '/info/:id', component: MovieInfo },
];
