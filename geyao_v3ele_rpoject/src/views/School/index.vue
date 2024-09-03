<script setup>
import { ref } from "vue"
import { getDataList } from "./api/index.ts"
import { ElTable, ElTableColumn, ElCard, ElPagination, ElButton, ElDialog } from "element-plus"
import SchoolAction from "./components/SchoolAction.vue"
import GeyaoSearch from "../../component/GeyaoSearch.vue"
const tableList = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const allPageData = ref([])
const total = ref()
const dialog = ref(false)
const datacolumn = [{
    type:"input",
    field:"name"
},{
    type:"select",
    field:"type",
}]
// 查询数据
const getList = async () => {
    let params = {
        pageIndex: currentPage.value,
        pageSize: pageSize.value,
    }
    let res = await getDataList(params)
    total.value = res.data.data.total
    tableList.value = res.data.data.list
}
// size改变
const onSizeChangeFn = (val) => {
    currentPage.value = 1
    pageSize.value = val
    getList()
}
// 分页改变
const onPageChangeFn = (val) => {
    currentPage.value = val
    getList()

}
const handleAction = () => {
    dialog.value = true
}
getList()
</script>
<template>
    <GeyaoSearch :columns="datacolumn"></GeyaoSearch>
    <!-- element plus card -->
    <ElCard>
        <!-- element plus table -->
        <ElTable :data="tableList" style="width: 100%">
            <ElTableColumn :width="500" prop="username" label="Name" width="180" />
            <ElTableColumn :width="500" prop="type" label="Type">
                <template #default=row>
                    {{ row.type === "0" ? "南方" : "北方" }}
                </template>
            </ElTableColumn>
            <ElTableColumn prop="opration" label="opration">
                <template #default=row>
                    <ElButton @click="handleAction" type="text">编辑</ElButton>
                    <ElButton type="text">删除</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
        <!-- element plus 分页 -->
        <ElPagination v-model:current-page="currentPage" :size="pageSize" :page-size="10"
            layout="total, prev, pager, next" :total="total" @size-change="onSizeChangeFn"
            @current-change="onPageChangeFn" />
    </ElCard>
    <ElDialog v-model="dialog" title="新增学校">
        <SchoolAction></SchoolAction>
    </ElDialog>
</template>
