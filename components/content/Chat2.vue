<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Untitled chat'
    },
})
</script>

<template>
    <input :value="props.title" />
</template>
