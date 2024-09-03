<template>
    <ElCard>
        <ElTable :data="tableList" style="width: 100%">
            <ElTableColumn :width="500" prop="username" label="Name" width="180" />
            <ElTableColumn :width="500" prop="password" label="Password" />
        </ElTable>
        <ElPagination
      v-model:current-page="currentPage"
      :size="pageSize"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
      @size-change="onSizeChangeFn"
      @current-change="onPageChangeFn"
    />
    </ElCard>
</template>
<script setup>
import { ref } from "vue"
import { getDataList } from "./api/index.ts"
import { ElTable, ElTableColumn, ElCard,ElPagination} from "element-plus"
const tableList = ref([])
const currentPage= ref(1)
const pageSize= ref(10)
const allPageData= ref([])
const total= ref()
const getList = async () => {
    let params = {
        pageIndex: currentPage.value,
        pageSize: pageSize.value,
    }
    let res = await getDataList(params)
    total.value=res.data.data.total
    tableList.value = res.data.data.list
}
const onSizeChangeFn = (val) => {
  currentPage.value = 1
  pageSize.value = val
  getList()
}

const onPageChangeFn = (val) => {
  currentPage.value = val
  getList()
 
}
getList()
</script>