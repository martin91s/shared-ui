<template>
    <div class="search-result-item">
        <div class="result-header">
            <div class="title">
                <slot name="header" />
            </div>
            <div class="badges">
                <span class="badge" v-html="proposeIcon" />
                <span class="badge" v-html="managerIcon" />
            </div>
        </div>
        <div class="result-detail">
            <slot name="detail" />
        </div>
        <div v-if="$slots['additional-detail']" class="additional-detail">
            <slot name="additional-detail" />
        </div>
    </div>
</template>

<script setup>
    import proposeIcon from '../../assets/products/rounded/propose-logo.svg?raw';
    import managerIcon from '../../assets/products/rounded/manager-logo.svg?raw';

    defineProps({
        result: {
            type: Object,
            default: () => ({}),
        },
    });
</script>

<style scoped>
    .search-result-item {
        padding: 12px;
        background: #ffffff;
        cursor: pointer;
        transition: background-color 0.2s ease, border-radius 0.2s ease;

        &:hover {
            background: #f9fafb;
            border-radius: 8px;
        }
    }

    .result-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .title {
            font-weight: 600;
            margin-right: 4px;
            color: #080e1b;
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

    .result-detail {
        font-size: 12px;
        color: #4b5563;
    }

    .additional-detail {
        margin-top: 16px;
    }
</style>