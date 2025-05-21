import ClientSearch from '../components/dropdown/ClientSearch.ce.vue';
import { userEvent, within } from '@storybook/test';

const results = [
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
        reg: "12345678",
    },
    {
        name: "Beta Corp",
        number: "9876543210",
        address: "12 King Street, London, UK",
        email: "contact@betacorp.com",
        phone: "01234 567890",
        country: "UK",
        type: "LLP",
        category: "Consulting",
        utr: "9876543210",
        vat: "09876543210",
        reg: "87654321",
    },
];
export default {
    title: 'Dropdown/ClientSearch',
    component: ClientSearch,
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

export const SelectedEdit = {
    ...Selected,
    name: 'Selected/With Edit',
    args: {
        ...Selected.args,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const editButton = await canvas.getByText('Edit');
        await userEvent.click(editButton);

        return () => {
            const modal = document.querySelector('dialog.confirm-modal');
            if (modal) modal.remove();
        };
    },
};