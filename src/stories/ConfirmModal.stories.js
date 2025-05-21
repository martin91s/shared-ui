import { h } from 'vue';
import { confirmModal } from '../modalService.js';

export default {
    title: 'Utilities/ConfirmModal',
};

export const Default = {
    render: () => h('div', ''),
    play: async () => {
        const confirmed = await confirmModal({
            title: 'Title of modal',
            description: 'Description goes here...',
        });

        console.log('Confirmed:', confirmed);
    },
};