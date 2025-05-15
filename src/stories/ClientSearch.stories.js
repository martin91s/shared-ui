// src/stories/ClientSearchCe.stories.js
import ClientSearch from '../components/ClientSearch.vue';

export default {
    title: 'ClientSearch',
    component: ClientSearch,
};

export const Default = () => ({
    components: { ClientSearch: ClientSearch },
    template: `
    <ClientSearch :results="results" @search-input="onInput" @selected="onSelect" />
  `,
    data() {
        return {
            results: [
                {
                    name: "Acme Ltd",
                    number: "1234567890",
                    address: "Unit 35, Commons, Duleek Business Park, Co. Meath, A92 N15E, Ireland",
                    email: "info@acmeltd.com",
                    phone: "07890 098765",
                    country: "Ireland",
                    type: "Private Limited Company",
                    category: "Software",
                    utr: "1234567890",
                    vat: "01234567890",
                    reg: "12345678"
                },
                {
                    name: "Acme Ltd",
                    number: "1234567890",
                    address: "Unit 35, Commons, Duleek Business Park, Co. Meath, A92 N15E, Ireland",
                    email: "info@acmeltd.com",
                    phone: "07890 098765",
                    country: "Ireland",
                    type: "Private Limited Company",
                    category: "Software",
                    utr: "1234567890",
                    vat: "01234567890",
                    reg: "12345678"
                },
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
    components: { ClientSearch: ClientSearch },
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
                    name: "Acme Ltd",
                    number: "1234567890",
                    address: "Unit 35, Commons, Duleek Business Park, Co. Meath, A92 N15E, Ireland",
                    email: "info@acmeltd.com",
                    phone: "07890 098765",
                    country: "Ireland",
                    type: "Private Limited Company",
                    category: "Software",
                    utr: "1234567890",
                    vat: "01234567890",
                    reg: "12345678"
                },
                {
                    name: "Acme Ltd",
                    number: "1234567890",
                    address: "Unit 35, Commons, Duleek Business Park, Co. Meath, A92 N15E, Ireland",
                    email: "info@acmeltd.com",
                    phone: "07890 098765",
                    country: "Ireland",
                    type: "Private Limited Company",
                    category: "Software",
                    utr: "1234567890",
                    vat: "01234567890",
                    reg: "12345678"
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
