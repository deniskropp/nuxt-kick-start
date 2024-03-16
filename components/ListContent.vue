<script lang="ts" setup>
</script>

<template>
    <ContentList :path="$route.path" v-slot="{ list }">
        <UCard v-for="item in list" :key="item._id" style="margin-top: 3em;">
            <template #header>
                {{ item.title }}
            </template>

            <MDCRenderer :body="item.body" />

            <template #footer>
                {{ item._id }}
            </template>
        </UCard>
    </ContentList>
</template>
