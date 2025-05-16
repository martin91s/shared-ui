/** @type { import('@storybook/vue3').Preview } */
import { injectStyles } from './styles';
const modules = import.meta.glob('../src/components/**/*.ce.vue', { eager: true });

Object.values(modules).forEach((component) => {
    injectStyles(component.default);
});

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },

    },
};

export default preview;
