import { defineCustomElement } from 'vue'
import ClientSearchCeComponent from './components/ClientSearch.ce.vue'
import AddressSearchCeComponent from './components/AddressSearch.ce.vue';
import SearchWrapperCeComponent from './components/ui/SearchWrapper.ce.vue';
import PersonSearchCeComponent from './components/PersonSearch.ce.vue';

const ClientSearch = defineCustomElement(ClientSearchCeComponent);
const AddressSearch = defineCustomElement(AddressSearchCeComponent);
const PersonSearch = defineCustomElement(PersonSearchCeComponent);
const SearchWrapper = defineCustomElement(SearchWrapperCeComponent);

if (typeof window !== 'undefined') {
    customElements.define('client-search', ClientSearch);
    customElements.define('address-search', AddressSearch);
    customElements.define('person-search', PersonSearch);
    customElements.define('search-wrapper', SearchWrapper);
}