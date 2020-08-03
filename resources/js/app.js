import Vue from 'vue';
import Vuetify from './packages/vuetify.js';
import App from './views/App';
import Routes from './routes/routes.js';
import Store from './packages/vuex';

import Toolbar from './components/Toolbar';
Vue.component('Toolbar', Toolbar);
import Treeview from './components/Treeview';
Vue.component('Treeview', Treeview);
import List from './components/List';
Vue.component('List', List);
import Usercard from './components/User-card';
Vue.component('Usercard', Usercard);
import Tableview from './components/Table-view';
Vue.component('Tableview', Tableview);
import Pathbread from './components/Path-breadcrumbs';
Vue.component('Pathbread', Pathbread);
import Infocard from './components/Info-card';
Vue.component('Infocard', Infocard);


const app = new Vue({
    el: '#app',
    router: Routes,
    vuetify: Vuetify,
    Store,
    render: h => h(App)
}).$mount('#app');

export default app;
