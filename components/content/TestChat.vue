<script setup lang="ts">
const props = defineProps({
    task: {
        type: String,
        default: 'continue the chat'
    },
})

const input = ref('')
const last = ref('')

const { markdown, pending, ask, messages, generate } = await useKick(props)

async function go() {
    async function run() {
        messages.push({ role: 'user', content: input.value })

        last.value = await generate(messages)

        markdown.value += `\n\n---\n\n/${input.value}/\n---\n\n${last.value}`

        messages.push({ role: 'asistant', content: last.value })
    }

    pending.value = true

    await run()

    pending.value = false
}
</script>

<template>
    <div style="width: 40px; height: 2px; background-color: rebeccapurple; margin-top: 1em;" v-if="markdown"></div>
    <MarkdownStringRenderer :markdownString="markdown" />

        <input v-if="!pending" v-model="input" style="color: #222222; width: 70%;" />

        <button style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em;" @click="() => {go()}" :disabled="pending">
            <div v-if="!pending">✨</div>
            <div v-if="pending">please wait...</div>
        <div v-if="!pending" style="scale: 0.7; margin: -20% -10% -10% -10%; border-top: 1px solid;">
            <slot />
        </div>
    </button>
</template>
