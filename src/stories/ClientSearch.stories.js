// src/stories/ClientSearchCe.stories.js
import ClientSearchCe from '../components/ClientSearch.ce.vue';

export default {
    title: 'ClientSearch',
    component: ClientSearchCe,
};

export const Default = () => ({
    components: { ClientSearch: ClientSearchCe },
    template: `
    <ClientSearch :results="results" @search-input="onInput" @selected="onSelect" />
  `,
    data() {
        return {
            results: [
                { name: 'Acme Ltd', number: '1234567890', address: 'London', utr: '123', vat: '456', reg: '789' },
                { name: 'Apple Tree Ltd', number: '9876543210', address: 'Manchester' },
            ],
        };
    },
    methods: {
        onInput(val) {
            console.log('Input:', val);
        },
        onSelect(item) {
            console.log('Selected:', item);
        },
    },
});

export const DropdownVisible = () => ({
    components: { ClientSearch: ClientSearchCe },
    template: `
    <ClientSearch
      :results="results"
      @search-input="onInput"
      @selected="onSelect"
    />
  `,
    data() {
        return {
            query: 'Acme',
            results: [
                {
                    name: 'Acme Ltd',
                    number: '1234567890',
                    address: 'London',
                    utr: '1234567890',
                    vat: 'GB012345678',
                    reg: '09876543',
                },
                {
                    name: 'Acme Partners',
                    number: '2345678901',
                    address: 'Bristol',
                    utr: '9876543210',
                    vat: 'GB098765432',
                    reg: '12345678',
                },
            ],
        };
    },
    mounted() {
        // simulate user input to open dropdown
        this.$el.querySelector('input').value = this.query;
        this.$el.querySelector('input').dispatchEvent(new Event('input', { bubbles: true }));
    },
    methods: {
        onInput(val) {
            console.log('Input:', val);
        },
        onSelect(item) {
            console.log('Selected:', item);
        },
    },
});
