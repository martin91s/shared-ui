<template>
    <div class="client-search">
        <search-wrapper-ce
            v-model="model"
            v-model:selected="selected"
            v-model:open="open"
            :results="results"
        >
            <template #default="{ result }">
                <div class="result-header">
                    <div>
                        <strong class="name">{{ result.name }}</strong>
                        <span class="number">({{ result.number }})</span>
                    </div>
                    <div class="badges">
                        <span class="badge" v-html="proposeIcon" />
                        <span class="badge" v-html="managerIcon" />
                    </div>
                </div>

                <div class="client-details">
                    <div class="address">{{ result.address }}</div>
                    <div class="contact">
                        <span>{{ result.email }}</span> |
                        <span>{{ result.phone }}</span> |
                        <span>{{ result.country }}</span>
                    </div>
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
            </template>
        </search-wrapper-ce>
    </div>
</template>

<script setup>
    import SearchWrapperCe from './ui/SearchWrapper.ce.vue';
    import proposeIcon from '../assets/products/rounded/propose-logo.svg?raw';
    import managerIcon from '../assets/products/rounded/manager-logo.svg?raw';

    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });
    const open = defineModel('open', { default: false });

    defineProps({
        results: {
            type: Array,
            default: () => ([]),
        },
    });
</script>

<style scoped>
    .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .name {
            font-weight: 600;
            margin-right: 4px;
            color: #080e1b;
        }

        .number {
            color: #4b5563;
            font-size: 14px;
        }

        .badges {
            display: flex;

            .badge {
                margin-left: -10px;
            }

            svg {
                width: 14px;
                height: 14px;
            }
        }
    }

    .client-details {
        font-size: 12px;
        color: #4b5563;
        margin-bottom: 16px;

        .address {
            margin-bottom: 4px;
        }
    }

    .labels {
        color: #1f2937;
        font-size: 12px;
        margin-bottom: 12px;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .tag {
            font-size: 12px;
            padding: 5px 6px;
            border-radius: 4px;
            background-color: #f0f0f0;
            line-height: 1;
            color: #1f2937;

            &.utr {
                background: linear-gradient(0deg, rgba(255, 211, 159, 0.25) 0%, rgba(255, 211, 159, 0.25) 100%), #fff;
                border: 1px solid #ffd39f;
            }

            &.vat {
                background: linear-gradient(0deg, rgba(157, 223, 238, 0.25) 0%, rgba(157, 223, 238, 0.25) 100%), #fff;
                border: 1px solid #9ddfee;
            }

            &.reg {
                background: linear-gradient(0deg, rgba(238, 157, 158, 0.25) 0%, rgba(238, 157, 158, 0.25) 100%), #fff;
                border: 1px solid #ffadad;
            }
        }
    }
</style>
