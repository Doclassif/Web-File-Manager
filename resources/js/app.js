import Vue from 'vue';
import Vuetify from './packages/vuetify.js';
import App from './views/App';
import Routes from './routes/routes.js';
import Store from './packages/vuex';

import Toolbar from './components/Toolbar';
Vue.component('Toolbar', Toolbar);

const app = new Vue({
    el: '#app',
    router: Routes,
    vuetify: Vuetify,
    Store,
    render: h => h(App)
}).$mount('#app');

export default app;
