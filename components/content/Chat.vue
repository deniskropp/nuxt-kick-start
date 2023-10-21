<script setup lang="ts">

const markdown = ref('')

function ask() {
    async function run() {
        markdown.value = await useChat()
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
