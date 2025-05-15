import { defineCustomElement } from 'vue'
import ClientSearch from './components/ClientSearch.ce.vue'

const ClientSearchElement = defineCustomElement(ClientSearch)
customElements.define('client-search', ClientSearchElement)