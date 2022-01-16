import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid"
import  "@fortawesome/fontawesome-free/js/fontawesome";
import router from "@/router";
import store from "@/store/store";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Loading from "@/components/Loading";
import Dialog from "@/components/Dialog";
import MessageInfo from "@/components/MessageInfo";

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'quill/dist/quill';
import 'quill/dist/quill.snow.css';

Vue.config.productionTip = false

Vue.use(PrimeVue);
Vue.use(ConfirmationService);
Vue.use(ToastService);


/**
 * COMPONENTES GLOBAIS
 */

Vue.component("Loading",Loading);
Vue.component("Dialog",Dialog);
Vue.component("MessageInfo",MessageInfo);
Vue.component("Toast",Toast);

/**
 * FIM COMPONENTES GLOBAIS
 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
