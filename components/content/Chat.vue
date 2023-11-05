<script setup lang="ts">
const props = defineProps({
    task: {
        type: String,
        default: ''
    },
})

const { messages, generate } = await useChat(props)

const markdown = ref('')
const pending = ref(false)

const ask = () => {
    async function run() {
        markdown.value = await generate(messages)//, '/kx/all-wetek-2.txt?prepare=')
    }

    pending.value = true

    run()
}
</script>

<template>
    <div style="width: 40px; height: 2px; background-color: rebeccapurple; margin-top: 1em;" v-if="markdown"></div>
    <MarkdownStringRenderer :markdownString="markdown" />

    <button style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em;" v-if="!markdown"
        @click="ask()" :disabled="pending">
        <div v-if="!pending">✨</div>
        <div v-if="pending">...</div>
        <div style="scale: 0.7; margin: -20% -10% -10% -10%; border-top: 1px solid;">
            <slot v-if="!pending" />
        </div>
    </button>
</template>
