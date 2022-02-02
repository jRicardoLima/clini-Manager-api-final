import Vue from "vue";
import Vuex from "vuex";
import loading from "@/store/modulos/loading";

Vue.use(Vuex);

const stores = new Vuex.Store({
    modules:{
        loading,
    }
});

export default stores;