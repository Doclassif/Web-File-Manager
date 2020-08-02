import Vue from 'vue';
import Vuex from 'vuex';
import 'vuetify/dist/vuetify.min.css'

import dftvxstore from '../stores/default-vuex-store.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dftvxstore
    }
});
