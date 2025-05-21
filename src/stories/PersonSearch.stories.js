import PersonSearch from '../components/dropdown/PersonSearch.ce.vue';

const results = [
    {
        id: 1,
        clientId: 1,
        name: "Mr John James Doe",
        email: "john.doe@example.com",
        company: "Acme Ltd",
        intRef: '2382903',
        companyRole: 'Director',
        vat: '333332',
        phone: '01234 567890',
        dob: '01/03/1993',
        utr: '1234567890',
        ni: "AB123456C",
    },
    {
        id: 2,
        clientId: 1,
        company: "Acme Ltd",
        name: "Ms Jane Anne Smith",
        email: "jane.smith@example.com",
        companyRole: 'Director',
        intRef: '2382903',
        phone: '01234 567890',
        vat: '3352343',
        dob: '01/03/1993',
        ni: "DE123456F"
    },
    {
        id: 3,
        clientId: 2,
        name: "Miss Alice Elizabeth Johnson",
        email: "alice.johnson@example.com",
        company: "Acme Ltd",
        companyRole: 'Director',
        intRef: '2382903',
        phone: '01234 567890',
        vat: '33555',
        dob: '01/03/1993',
        utr: '1234567890',
        ni: "GH123456I"
    },
    {
        id: 4,
        clientId: 3,
        name: "Mr Bob William Brown",
        email: "bob.brown@example.com",
        companyRole: 'Director',
        company: "Acme Ltd",
        intRef: '2382903',
        phone: '01234 567890',
        vat: '333',
        dob: '01/03/1993',
        utr: '1234567890',
        ni: "JK123456L"
    },
    {
        id: 5,
        clientId: 4,
        name: "Ms Charlie Anna Green",
        email: "charlie.green@example.com",
        company: "Acme Ltd",
        companyRole: 'Director',
        intRef: '2382903',
        phone: '01234 567890',
        vat: '444',
        dob: '01/03/1993',
        utr: '1234567890',
        ni: "MN123456O"
    },
];

export default {
    title: 'Dropdown/PersonSearch',
    component: PersonSearch,
    argTypes: {
        modelValue: { control: 'text' },
        results: { control: 'object' },
        'update:modelValue': { action: 'update:modelValue' },
        select: { action: 'select' },
    },
    args: {
        results,
        clientId: 1,
    },
};

export const Default = {};

export const WithResults = {
    args: {
        modelValue: "Acme",
    },
};

export const Selected = {
    args: {
        selected: results[0],
    },
};