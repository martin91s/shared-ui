/** @type { import('@storybook/vue3').Preview } */
import { injectStyles } from './styles';
import IntroductionTemplate from '../src/stories/Introduction.mdx';

const modules = import.meta.glob('../src/components/**/*.ce.vue', { eager: true });

Object.values(modules).forEach((component) => {
    injectStyles(component.default);
});

const preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'Light', value: '#f9fafb' },
                { name: 'Dark', value: '#333333' },
            ],
            default: 'Light',
        },
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
