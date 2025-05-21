<template>
    <div class="address-search">
        <search-wrapper v-model="model" v-model:selected="selected" :results="results">
            <template #selected>
                {{ selected.addressLine1 }}
            </template>
            <template #default>
                <search-result-item
                    v-for="(result, i) in results"
                    :key="i"
                    :result="result"
                    @click="setSelected(result)"
                >
                    <template #header>
                        {{ result.addressLine1 }}
                    </template>
                    <template #detail>
                        <div class="address">
                            {{ result.addressLine2 }},
                            {{ result.city }},
                            {{ result.postcode }},
                            {{ result.county }},
                            {{ result.country }}
                        </div>
                    </template>
                </search-result-item>
            </template>
        </search-wrapper>
    </div>
</template>

<script setup>
    import SearchWrapper from '../ui/SearchWrapper.ce.vue';
    import SearchResultItem from '../ui/SearchResultItem.ce.vue';
    import InfoTags from '../ui/InfoTags.ce.vue';

    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });

    defineProps({
        results: {
            type: Array,
            default: () => ([]),
        },
    });

    const emit = defineEmits(['select']);

    const setSelected = (result) => {
        selected.value = result;
        open.value = false;
        emit('select', result);
    };
</script>