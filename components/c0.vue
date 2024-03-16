<script lang="ts" setup>
import { queryInfo } from '../composables/info'
import { getItemText } from '../lib/item'

const params = queryContent('/meta-cognitive').params()


function tableData(t: any[]) {
    return t.map((e: any) => ({
        id: e._id,
        title: e.title
    }))
}
</script>

<template>
            <ContentList :query="params" v-slot="{ list }">
                <UCard v-for="item in list" :key="item._id" style="margin-top: 3em;">
                    <template #header>
                        {{ item.title }}
                    </template>

                    {{ getItemText(item.body ?? { type: 'empty' }).split('\n').slice(0, 5).join('\n') }}

                    <template #footer>
                        {{ item._id }}
                    </template>
                </UCard>
                <UTable :rows="tableData(list)" />
                <el-table :data="list" border style="width: 100%">
                    <el-table-column prop="_id" label="ID" width="300" />
                    <el-table-column prop="title" label="Title" width="300">
                        <template #default="scope">
                            <el-tag disable-transitions>{{ scope.row.title }}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
            </ContentList>
</template>
