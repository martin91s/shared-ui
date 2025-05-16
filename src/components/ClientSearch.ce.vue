<template>
    <div class="client-search">
        <input
            :value="modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            placeholder="Search clients..."
        />
        <ul v-if="results?.length" class="results">
            <li
                v-for="result in results"
                :key="result.number"
                class="result-item"
                @click="$emit('select', result)"
            >
                <div class="result-header">
                    <div>
                        <strong class="name">{{ result.name }}</strong>
                        <span class="number">({{ result.number }})</span>
                    </div>
                    <div class="badges">
                        <span class="badge">🟢</span>
                        <span class="badge">🔴</span>
                    </div>
                </div>

                <div class="address">{{ result.address }}</div>
                <div class="contact">
                    <span>{{ result.email }}</span> |
                    <span>{{ result.phone }}</span> |
                    <span>{{ result.country }}</span>
                </div>

                <div class="labels">
                    <strong>{{ result.type }}</strong> |
                    <strong>{{ result.category }}</strong>
                </div>

                <div class="tags">
                    <span v-if="result.utr" class="tag utr">UTR: {{ result.utr }}</span>
                    <span v-if="result.vat" class="tag vat">VAT: {{ result.vat }}</span>
                    <span v-if="result.reg" class="tag reg">REG: {{ result.reg }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        modelValue: String,
        results: Array,
    });
    const emit = defineEmits(['update:modelValue', 'select']);
</script>

<style>
    .client-search {
        width: 100%;
        font-family: system-ui, sans-serif;
    }

    input {
        padding: 0.75rem;
        width: 100%;
        font-size: 1rem;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .results {
        list-style: none;
        padding: 0;
        margin: 0;
        border: 1px solid #d1d5db;
        border-top: none;
    }

    .result-item {
        border-radius: 4px;
        padding: 1rem;
        margin-bottom: 0.75rem;
        background: #fff;
        cursor: pointer;
        transition: background 0.2s;
    }

    .result-item:hover {
        background: #f9f9f9;
    }

    .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.25rem;
    }

    .name {
        font-weight: 600;
        font-size: 1.1rem;
    }

    .number {
        color: #666;
        font-size: 0.9rem;
        margin-left: 0.5rem;
    }

    .badges {
        display: flex;
        gap: 0.25rem;
    }

    .address {
        margin-bottom: 0.25rem;
        color: #555;
    }

    .contact {
        font-size: 0.9rem;
        color: #666;
        margin-bottom: 0.25rem;
    }

    .labels {
        font-size: 0.9rem;
        color: #444;
        margin-bottom: 0.5rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .tag {
        font-size: 0.8rem;
        padding: 0.3rem 0.5rem;
        border-radius: 4px;
        background-color: #f0f0f0;
    }

    .tag.utr {
        background-color: #fef3c7;
        border: 1px solid #facc15;
    }

    .tag.vat {
        background-color: #dbeafe;
        border: 1px solid #3b82f6;
    }

    .tag.reg {
        background-color: #fee2e2;
        border: 1px solid #ef4444;
    }
</style>
