import { defineCustomElement } from 'vue'
import ClientSearchCeComponent from './components/ClientSearch.ce.vue'

const ClientSearch = defineCustomElement(ClientSearchCeComponent);

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch)
}