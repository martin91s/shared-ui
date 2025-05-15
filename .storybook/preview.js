/** @type { import('@storybook/vue3').Preview } */
import { injectStyles } from './styles';
import { setup } from '@storybook/vue3';
import { createBootstrap } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
const modules = import.meta.glob('../src/components/**/*.ce.vue', { eager: true });

Object.values(modules).forEach((component) => {
    injectStyles(component.default);
});

setup((app) => {
    app.use(createBootstrap());
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
