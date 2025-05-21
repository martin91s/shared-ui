<template>
    <div class="person-search">
        <search-wrapper v-model="model" v-model:selected="selected" :results="results">
            <template #selected>
                {{ selected.name }}
            </template>
            <template #default>
                <div class="suggested-results">
                    <div class="results-header">
                        Suggested ({{ suggestedResults.length }})
                    </div>
                    <search-result-item
                        v-for="result in suggestedResults"
                        :key="result.id"
                        :result="result"
                    >
                        <template #header>
                            {{ result.name }}
                        </template>
                        <template #detail>
                            <div class="address">{{ result.address }}</div>
                            <div class="contact">
                                <span>{{ result.email }}</span> |
                                <span>{{ result.phone }}</span> |
                            </div>
                            <div class="company-details">
                                <span>{{ result.company }}</span> |
                                <span v-if="result.companyRole">({{ result.companyRole }})</span>
                            </div>
                        </template>
                        <template #additional-detail>
                            <info-tags result-type="person" :data="result" />
                        </template>
                    </search-result-item>
                </div>
                <div class="other-results">
                    <div class="results-header">
                        Other ({{ otherResults.length }})
                    </div>
                    <search-result-item
                        v-for="result in otherResults"
                        :key="result.id"
                        :result="result"
                    >
                        <template #header>
                            {{ result.name }}
                        </template>
                        <template #detail>
                            <div class="address">{{ result.address }}</div>
                            <div class="contact">
                                <span>{{ result.email }}</span> |
                                <span>{{ result.phone }}</span> |
                            </div>
                            <div class="company-details">
                                <span>{{ result.company }}</span> |
                                <span v-if="result.companyRole">({{ result.companyRole }})</span>
                            </div>
                        </template>
                        <template #additional-detail>
                            <info-tags result-type="person" :data="result" />
                        </template>
                    </search-result-item>
                </div>
            </template>
        </search-wrapper>
    </div>
</template>

<script setup>
    import SearchWrapper from '../ui/SearchWrapper.ce.vue';
    import InfoTags from '../ui/InfoTags.ce.vue';
    import { computed } from 'vue';
    import SearchResultItem from '../ui/SearchResultItem.ce.vue';
    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });

    const props = defineProps({
        results: {
            type: Array,
            default: () => ([]),
        },
        clientId: {
            type: Number,
            default: 0,
        },
    });

    const suggestedResults = computed(() =>
        props.results.filter((person) => person.clientId === props.clientId)
    );

    const otherResults = computed(() =>
        props.results.filter((person) => person.clientId !== props.clientId)
    );
</script>

<style scoped>
    .results-header {
        color: #6b7280;
        font-size: 12px;
        margin-bottom: 12px;
        padding: 4px;
    }

    .suggested-results {
        margin: 0 -12px;
        padding: 0 12px 12px;
        border-bottom: 1px solid #d1d5db;
    }

    .other-results {
        margin-top: 16px;
    }

    .address,
    .contact {
        margin-bottom: 4px;
    }

    :deep(.search-result-item) {
        .result-header {
            margin-bottom: 0;
        }
    }
</style>
