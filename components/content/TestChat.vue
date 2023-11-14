<script setup lang="ts">
const props = defineProps({
    name: {
        task: String,
        default: 'continue the chat'
    },
})

const input = ref('')

const { markdown, pending, ask, messages, generate } = await useKick(props)

function go() {
    async function run() {
        markdown.value = await generate([...messages, { role: 'user', content: input.value }])
    }

    pending.value = true

    run()
}
</script>

<template>
    <div style="width: 40px; height: 2px; background-color: rebeccapurple; margin-top: 1em;" v-if="markdown"></div>
    <MarkdownStringRenderer :markdownString="markdown" />

                            <input v-if="!pending" v-model="input" style="color: #222222;" />

                            <button style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em;" v-if="!markdown" @click="go()" :disabled="pending">
                <div v-if="!pending">✨</div>
                <div v-if="pending">please wait...</div>
        <div style="scale: 0.7; margin: -20% -10% -10% -10%; border-top: 1px solid;">
            <slot v-if="!pending" />
        </div>
    </button>
</template>
