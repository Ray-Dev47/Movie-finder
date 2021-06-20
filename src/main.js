import { createApp } from 'vue';
// import store from './store/store'

import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import '@/styles/app.css';
import Routes from './routes';
import VueSmoothScroll from 'vue3-smooth-scroll';

const router = createRouter({
	routes: Routes,
	history: createWebHistory(),
	scrollBehavior() {
        document.getElementById('app').scrollIntoView()
	}
});

createApp(App)
	.use(router)
	.mount('#app')
	.use(VueSmoothScroll);

// createApp(App).use(store).mount('#app')


