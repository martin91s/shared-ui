import { defineCustomElement } from 'vue';
import ClientSearch from './src/components/ClientSearch.vue';

const ClientSearchElement = defineCustomElement(ClientSearch);

customElements.define('client-search', ClientSearchElement);
