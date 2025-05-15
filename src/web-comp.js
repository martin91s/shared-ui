import { defineCustomElement } from 'vue'
import ClientSearch from './components/ClientSearch.vue'

const ClientSearch = defineCustomElement(ClientSearch)

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch)
}