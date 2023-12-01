<script setup lang="ts">
const props = defineProps({
    task: {
        type: String,
        default: 'continue the chat'
    },
})

const input = ref('')
const last = ref('')

const { markdown, pending, ask, messages, generate } = useKick(props)

async function go(append: boolean) {
    pending.value = true

    if (last.value && append)
        messages.push({ role: 'assistant', content: last.value })

    messages.push({ role: 'user', content: input.value })

    last.value = await generate(messages)

    if (append)
        markdown.value += `\n\n---\n\n*${input.value}*\n---\n\n${last.value}`
    else
        markdown.value = `\n\n---\n\n*${input.value}*\n---\n\n${last.value}`

    pending.value = false
}

function go1() {
    go(false)
}

function go2() {
    go(true)
}
</script>

<template>
    <div style="display: flex; flex-direction: column;">
        <div style="width: 40px; height: 2px; background-color: rebeccapurple; margin-top: 1em;" v-if="markdown"></div>

        <MarkdownStringRenderer :markdownString="markdown" />

        <input v-if="!pending" v-model="input" style="color: #222222; width: 100%;" />

                <button v-if="!pending"
                    style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em; min-height: 2em;"
                    @click="go1()" :disabled="pending">
                <div>🏴‍☠️</div>
            </button>

                <button
                    style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em; min-height: 7em;"
                    @click="go2()" :disabled="pending">
            <div v-if="!pending" xstyle="scale: 0.9; margin: -10% -5% -5% -5%; border-top: 1px solid;">
                <div>✨</div>
                <slot />
            </div>
            <div v-if="pending">please wait...</div>
        </button>
    </div>
</template>
