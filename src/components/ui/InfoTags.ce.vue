<template>
    <div class="info-tags">
        <span
            v-for="(tag, index) in computedTags"
            :key="index"
            class="badge"
            :class="`badge-${ tag.label.toLowerCase()} `"
        >
          {{ tag.label }}: {{ tag.value }}
        </span>
    </div>
</template>

<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        data: {
            type: Object,
            default: () => ({}),
        },
        resultType: {
            type: String,
            default: '',
        },
    });

    const computedTags = computed(() => {
        const data = props.data || {};

        const tagFields = {
            client: ['utr', 'vat', 'reg'],
            person: ['ni', 'dob', 'utr', 'vat'],
        };

        const keys = tagFields[props.resultType] || [];

        return keys
            .map(key => (data[key] ? { label: key, value: data[key] } : null))
            .filter(Boolean);
    });
</script>

<style scoped>
    .info-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .badge {
            font-size: 12px;
            padding: 5px 6px;
            border-radius: 4px;
            background-color: #f0f0f0;
            line-height: 1;
            text-transform: uppercase;
            color: #1f2937;
            border: 1px solid;

            &.badge-utr {
                background: linear-gradient(0deg, rgba(255, 211, 159, 0.25) 0%, rgba(255, 211, 159, 0.25) 100%), #fff;
                border-color: #ffd39f;
            }

            &.badge-vat {
                background: linear-gradient(0deg, rgba(157, 223, 238, 0.25) 0%, rgba(157, 223, 238, 0.25) 100%), #fff;
                border-color: #9ddfee;
            }

            &.badge-reg {
                background: linear-gradient(0deg, rgba(238, 157, 158, 0.25) 0%, rgba(238, 157, 158, 0.25) 100%), #fff;
                border-color: #ffadad;
            }

            &.badge-ni {
                background-color: rgba(165, 245, 202, 0.25);
                border-color: #a5f5ca;
            }

            &.badge-dob {
                background: #f3f4f6;
                border-color: #d1d5db;
            }
        }
    }
</style>
