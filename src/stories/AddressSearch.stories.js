import AddressSearch from '../components/dropdown/AddressSearch.ce.vue';

const results = [
    {
        addressLine1: 'Unit 35, Commons',
        addressLine2: 'Duleek Business Park',
        city: 'Co. Meath',
        postcode: 'A92 N15E',
        county: 'Meath',
        country: 'Ireland',
    },
    {
        addressLine1: '12 King Street',
        addressLine2: '',
        city: 'London',
        postcode: 'W1T 4TJ',
        county: 'London',
        country: 'UK',
    },
];

export default {
    title: 'Dropdown/AddressSearch',
    component: AddressSearch,
    argTypes: {
        modelValue: { control: 'text' },
        results: { control: 'object' },
        'update:modelValue': { action: 'update:modelValue' },
        select: { action: 'select' },
    },
    args: {
        results,
    },
};

export const Default = {};

export const WithResults = {
    args: {
        open: true,
        modelValue: 'Acme',
    },
};

export const noResults = {
    args: {
        results: [],
        open: true,
        modelValue: 'ABC ltd',
    },
}

export const Selected = {
    args: {
        selected: results[0],
    },
};