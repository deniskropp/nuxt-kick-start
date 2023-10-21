<script setup lang="ts">
import { kickIt } from '../../lib/kick'

const v = await useAsyncData('kick', () => kickIt('/ai', 'chat', {messages:[
    {
        role: 'json',
        content: JSON.stringify(useContent().page.value.body.children)
    },
    {
        role: 'system',
        content: 'Your task is to continue the markdown content in plain text format'
    }
]}))
const c = v.data.value.messages[v.data.value.messages.length-1].content
</script>

<template>
    <MarkdownBlock>
    {{c}}
</MarkdownBlock>
</template>
