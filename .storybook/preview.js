/** @type { import('@storybook/vue3').Preview } */
import { injectStyles } from './styles';
import IntroductionTemplate from '../src/stories/Introduction.mdx';
import '../src/assets/main.css';

const modules = import.meta.glob('../src/components/**/*.ce.vue', { eager: true });

Object.values(modules).forEach((component) => {
    injectStyles(component.default);
});

const removeDanglingModals = () => {
    document.querySelectorAll('dialog.confirm-modal')?.forEach((modal) => {
        try {
            modal.close?.();
            modal.remove?.();
        } catch (e) {
            console.warn('Failed to close modal:', e);
        }
    });
};

const preview = {
    decorators: [
        (Story) => {
            removeDanglingModals();
            return Story();
        },
    ],
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            toc: true,
            page: IntroductionTemplate,
        },
    },
};

export default preview;
