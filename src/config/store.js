import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import data from '@/data/module'


export default new Vuex.Store ({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        data,
    },
})
