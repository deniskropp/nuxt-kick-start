<script lang="ts" setup>
import { queryInfo } from '../composables/info'
import { getItemText } from '../lib/item'

const params = queryInfo().params()
</script>

<template>
    <ContentList :query="params" v-slot="{ list }">
        <table class="m-8">
            <tr v-for="info in list" :key="info._path">
                <td>{{ info._id }}</td>
                <td class="px-4">{{ info.title }}</td>
                <td class="px-4">
                    <pre>{{ info.body ? getItemText(info.body) : '' }}</pre>
                </td>
            </tr>
        </table>
    </ContentList>
</template>
