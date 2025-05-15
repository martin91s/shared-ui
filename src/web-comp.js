import { defineCustomElement } from 'vue';
import VueClientSearch from './components/ClientSearch.ce.vue';

export const ClientSearch = defineCustomElement(VueClientSearch);

export function register(tagName = 'client-search') {
    customElements.define(tagName, ClientSearch);
}