import { defineCustomElement } from 'vue'
import ClientSearchCeComponent from './components/dropdown/ClientSearch.ce.vue'
import AddressSearchCeComponent from './components/dropdown/AddressSearch.ce.vue';
import PersonSearchCeComponent from './components/dropdown/PersonSearch.ce.vue';
import { confirmModal } from './modalService.js';

const ClientSearch = defineCustomElement(ClientSearchCeComponent);
const AddressSearch = defineCustomElement(AddressSearchCeComponent);
const PersonSearch = defineCustomElement(PersonSearchCeComponent);

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch);
    customElements.define('address-search', AddressSearch);
    customElements.define('person-search', PersonSearch);

    window.SharedUI = window.SharedUI || {};
    window.SharedUI.confirmModal = confirmModal;
}

export {
    ClientSearch,
    AddressSearch,
    PersonSearch,
    confirmModal,
};
