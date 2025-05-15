import { defineCustomElement } from 'vue'
import ClientSearchCeComponent from './components/ClientSearch.ce.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

const ClientSearch = defineCustomElement(ClientSearchCeComponent);

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch)
}