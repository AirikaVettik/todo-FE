import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        createdBy: "",
    },
    getters: {

    },
    mutations: {
        selectedName(state, button) {
            state.createdBy = button
        }

    },
    actions: {

    },
    modules: {

    }
});