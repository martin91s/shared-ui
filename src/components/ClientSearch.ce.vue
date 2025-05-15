<template>
    <div>
        <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            placeholder="Search clients..."
        />
        <ul v-if="results && results.length">
            <li v-for="result in results" :key="result.number" @click="$emit('select', result)">
                {{ result.name }} ({{ result.number }})
            </li>
        </ul>
    </div>
</template>

<script setup>
    defineProps({
        modelValue: String,
        results: Array
    });
    defineEmits(['update:modelValue', 'select']);
</script>

<style scoped>
    input {
        padding: 0.5rem;
        width: 100%;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        cursor: pointer;
        padding: 0.25rem 0;
    }
</style>
