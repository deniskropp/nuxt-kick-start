<script setup>
import markdownParser from "@nuxt/content/transformers/markdown"

const props = defineProps({
    markdownString: {
        type: String,
        required: true,
    }
})

const record = ref('')

watchEffect(async () => {
    await markdownParser.parse("custom.md", props.markdownString).then((md) => record.value = md)
});
</script>

<template>
    <ContentRendererMarkdown :value="record" v-if="record" />
</template>