<script setup lang="ts">
import { kickIt } from '../../lib/kick'

const markdown = ref('')

function ask() {
    async function run() {
        const v = await useAsyncData('kick', () => kickIt('/ai', 'chat', {
            messages: [
                {
                    role: 'json',
                    content: JSON.stringify(useContent().page.value.body.children)
                },
                {
                    role: 'system',
                    content: 'Your task is to continue the markdown content in plain text format'
                }
            ]
        }))

        if (v.data.value) {
            const d = v.data.value

            markdown.value = d.type === 'error' ? d.what :
                d.type === 'chat' ? d.messages[d.messages.length - 1].content : d.type
        }
    }
    run()
}
</script>

<template>
    <div style="width: 10px; height: 1px; background-color: white;" v-if="markdown"></div>
    <MarkdownStringRenderer :markdownString="markdown" />

    <button style="border: 1px solid; text-align: left; margin-top: 1em; padding: 0.5em 1em 0.2em 0.5em;" v-if="!markdown"
        @click="ask()">
        ✨
        <div style="scale: 0.7; margin: -20% -10% -10% -10%; border-top: 1px solid;">
            <slot />
        </div>
    </button>
</template>
