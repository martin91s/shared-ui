<template>
    <div class="client-search">
        <search-wrapper
            v-model="model"
            v-model:selected="selected"
            v-model:open="open"
            :results="results"
        >
            <template #selected>
                {{ selected.name }}
            </template>
            <template #default>
                <search-result-item
                    v-for="result in results"
                    :key="result.number"
                    :result="result"
                    @click="setSelected(result)"
                >
                    <template #header>
                        {{ result.name }}
                        <span class="number">({{ result.number }})</span>
                    </template>
                    <template #detail>
                        <div class="address">{{ result.address }}</div>
                        <div class="contact">
                            <span>{{ result.email }}</span> |
                            <span>{{ result.phone }}</span> |
                            <span>{{ result.country }}</span>
                        </div>
                    </template>
                    <template #additional-detail>
                        <div class="labels">
                            <strong>{{ result.type }}</strong> |
                            <strong>{{ result.category }}</strong>
                        </div>
                        <info-tags result-type="client" :data="result" />
                    </template>
                </search-result-item>
            </template>
        </search-wrapper>
    </div>
</template>

<script setup>
    import SearchWrapper from '../ui/SearchWrapper.ce.vue';
    import InfoTags from '../ui/InfoTags.ce.vue';
    import SearchResultItem from '../ui/SearchResultItem.ce.vue';

    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });
    const open = defineModel('open', { default: false });

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

<style scoped>
    .number {
        color: #4b5563;
        font-weight: 400;
        font-size: 14px;
    }

    .address {
        margin-bottom: 4px;
    }

    .labels {
        color: #1f2937;
        font-size: 12px;
        margin-bottom: 12px;
    }
</style>
