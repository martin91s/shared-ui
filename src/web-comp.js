import { defineCustomElement } from 'vue'
import VueClientSearch from './components/ClientSearch.ce.vue'

const ClientSearch = defineCustomElement(VueClientSearch)

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch)
}