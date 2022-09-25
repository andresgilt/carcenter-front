import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from "primevue/config";
// import VueAxios from 'vue-axios'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import DataTable from 'primevue/datatable';
import Dropdown from 'primevue/dropdown';
import Column from 'primevue/column';
import Sidebar from "primevue/sidebar";
import ColumnGroup from 'primevue/columngroup';
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Row from 'primevue/row';
import Toast from 'primevue/toast';
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import 'primeflex/primeflex.css'



import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import ToastService from 'primevue/toastservice';

//const cors = require('cors');

createApp(App)
    .use(router)
    .use(PrimeVue)
    .use(ToastService)
    //.use( VueAxios, Axios)

    .component("DataTable",DataTable)
    .component("Dialog",Dialog)
    .component("Column",Column)
    .component("ColumnGroup",ColumnGroup)
    .component("Row",Row)
    .component("TabView",TabView)
    .component("TabPanel",TabPanel)
    .component("Dropdown", Dropdown)
    .component("InputText", InputText)
    .component("InputNumber", InputNumber)
    .component("Button", Button)
    .component("Sidebar", Sidebar)
    .component("Toast",Toast)
    //.use(cors())
    .mount('#app')



