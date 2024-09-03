<script setup>
import { ElInput, ElFormItem, ElForm, ElOption, ElRow, ElCol } from 'element-plus'
import { ref } from "vue"
// 父子传值
const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    }
})
const form = ref({})
</script>
<template>
    <ElForm :inline="true" class="demo-form-inline">
        <el-row>
            <template v-for="(item) in columns">
                <ElFormItem style="width: 30%;margin-top: 16px;margin-left: 16px;" v-if="item.type === 'input'">
                    <el-input v-model="form[item.field]" />
                </ElFormItem>
                <ElFormItem style="width: 30%;margin-top: 16px;margin-left: 16px;" v-if="item.type === 'select'">
                    <el-select v-model="form[item.field]">
                        <el-option v-for="data in item.options" :label="data.label" :value="data.value" />
                    </el-select>
                </ElFormItem>
            </template>
        </el-row>
    </ElForm>

</template>
<style scoped>
.demo-form-inline {
    display: flex;
    flex-direction: column;
}

.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>