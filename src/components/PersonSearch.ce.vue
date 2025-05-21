<template>
    <div class="person-search">
        <search-wrapper v-model="model" v-model:selected="selected" :results="results">
            <template #default="{ result }">
                person search
            </template>
        </search-wrapper>
    </div>
</template>

<script setup>
    import SearchWrapper from './ui/SearchWrapper.ce.vue';

    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });

    defineProps({
        results: {
            type: Array,
            default: () => ([]),
        },
    });
</script>

<style scoped>

</style>
