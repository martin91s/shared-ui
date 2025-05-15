import { defineCustomElement } from 'vue'
import ClientSearch from './components/ClientSearch.vue';

const ClientSearchElement = defineCustomElement(ClientSearch)
customElements.define('client-search', ClientSearchElement)