import { defineCustomElement } from 'vue'
import ClientSearchComponent from './components/ClientSearch.ce.vue'

const ClientSearch = defineCustomElement(ClientSearchComponent)

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch)
}