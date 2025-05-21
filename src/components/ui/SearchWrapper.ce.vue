<template>
    <div :class="{ open }" class="search-wrapper">
        <div v-if="Object.keys(selected).length" class="selected">
            <div class="selected-item">
                <slot name="selected" />
            </div>
            <div class="action-buttons">
                <button class="edit-button" @click="edit">
                    Edit
                </button>
                <button class="change-button" @click="selected = {}">
                    Change
                </button>
            </div>
        </div>
        <div v-else class="input-wrapper">
            <span class="icon" v-html="searchIcon" />
            <input
                type="text"
                v-model="model"
                placeholder="Search..."
            />
            <span class="icon bright-icon" v-html="brightIcon" />
        </div>
        <div v-if="open" class="results">
            <div v-if="!results.length" class="no-results">
                <p class="create text-xs">Create new</p>
                <button @click="createItem" class="create-button">
                    <span v-html="addIcon" class="add-icon" />
                    {{ model }}
                </button>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup>
    import searchIcon from '../../assets/icons/search.svg?raw';
    import brightIcon from '../../assets/icons/bright-b.svg?raw';
    import addIcon from '../../assets/icons/add.svg?raw';
    import { confirmModal } from '../../modalService.js';

    import { watch } from 'vue';

    defineProps({
        results: {
            type: Array,
            default: () => ([]),
        },
    });

    const model = defineModel({ default: '' });
    const selected = defineModel('selected', { default: () => ({}) });
    const open = defineModel('open', { default: false });

    watch(model, (val) => {
        if (val && val.length > 2) { return open.value = true; }
        open.value = false;
    }, { immediate: true });


    const edit = async () => {
        const confirmed = await confirmModal({
            title: 'Edit client name',
            description: 'You can edit your selected client to change its information. Once you save the changes, it will be updated within BrightClient.',
        });

        if (confirmed) {
            console.log('Client edited');
        }
    };

    const createItem = () => {

    };
</script>

<style scoped>
    .search-wrapper {
        font-family: 'Open Sans', 'Segoe UI', sans-serif;

        &.open {
            input {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    button {
        cursor: pointer;
    }

    .selected {
        border-radius: 4px;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        border: 1px solid #d1d5db;
        align-items: center;

        .selected-item {
            padding: 0 8px;
        }

        .edit-button {
            color: #007995;
            background-color: inherit;
            border: none;
            font-weight: 600;
            font-size: 12px;
            margin-right: 12px;
        }

        .change-button {
            background-color: #ffffff;
            color: #007995;
            padding: 9px 16px;
            font-weight: 600;
            border: 1px solid #007995;
            font-size: 16px;
        }
    }

    .text-xs {
        font-size: 12px;
    }

    .results {
        border: 1px solid #d1d5db;
        border-top: none;
        background-color: #ffffff;
        border-radius: 0 0 4px 4px;
        padding: 12px;
    }

    .no-results {
        padding: 0 8px;

        .create {
            color: #6b7280;
            margin-bottom: 12px;
        }

        .create-button {
            padding: 12px;
            font-weight: 600;
            background-color: #ffffff;
            border: none;
            display: inline-flex;
            align-items: center;

            .add-icon {
                margin-right: 8px;
            }
        }
    }

    .input-wrapper {
        position: relative;

        .icon {
            position: absolute;
            top: 0;
            left: 8px;
            bottom: 0;
            display: flex;
            align-items: center;
        }

        .bright-icon {
            left: unset;
            right: 16px;
        }

        input {
            padding: 10px 36px;
            width: 100%;
            font-size: 1rem;
            border: 1px solid #d1d5db;
            border-radius: 4px;
            box-sizing: border-box;
        }
    }
</style>