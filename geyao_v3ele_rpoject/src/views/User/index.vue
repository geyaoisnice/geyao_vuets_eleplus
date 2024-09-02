<template>
    <template>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </template>
</template>
<script setup>
import { ref } from "vue"
import { getDataList } from "./api/index.ts"
const tableList = ref()
const getList = async () => {
    let params = {
        pageIndex: 1,
        pageSize: 10,
    }
    let res = await getDataList(params)
    console.log(res, "res is")
}
getList()
</script>