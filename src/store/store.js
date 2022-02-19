import Vue from "vue";
import Vuex from "vuex";
import loading from "@/store/modulos/loading";
import dialog from "@/store/modulos/dialog";
import sideBarControl from "@/store/modulos/sideBarControl";

Vue.use(Vuex);

const stores = new Vuex.Store({
    modules:{
        loading,
        dialog,
        sideBarControl,
    }
});

export default stores;