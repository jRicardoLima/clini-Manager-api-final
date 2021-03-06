import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import store from "@/store/store";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Loading from "@/components/Loading";
import DialogInfo from "@/components/DialogInfo";
import MessageInfo from "@/components/MessageInfo";
import VCalendar from "v-calendar";
import Tooltip from "primevue/tooltip";
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/js/solid"
import  "@fortawesome/fontawesome-free/js/fontawesome";
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/themes/nova-accent/theme.css';
import '@/custom.css';
import 'quill/dist/quill';
import 'quill/dist/quill.snow.css';


Vue.config.productionTip = false

Vue.use(PrimeVue);
Vue.use(ConfirmationService);
Vue.use(ToastService);
Vue.use(VCalendar,{
  componentPrefix:'vc'
});
// Vue.use(VCalendar,{
//   componentPrefix:'vc'
// })

/**
 * COMPONENTES GLOBAIS
 */

Vue.component("Loading",Loading);
Vue.component("DialogInfo",DialogInfo);
Vue.component("MessageInfo",MessageInfo);
Vue.component("Toast",Toast);
//Vue.component("Dialog",Dialog);
/**
 * FIM COMPONENTES GLOBAIS
 */

/**
 * DIRETIVAS
 */
Vue.directive('tooltip',Tooltip);
/**
 * FIM DAS DIRETIVAS
 */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
