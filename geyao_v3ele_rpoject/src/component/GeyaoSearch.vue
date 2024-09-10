<script setup>
import { ElInput, ElFormItem, ElForm, ElOption, ElRow, ElCol, ElButton } from 'element-plus'
import { ref,defineEmits, reactive } from "vue"
// 父子传值
const props = defineProps({
    columns: {
        type: Array,
        default: () => []
    }
})
const formRef=ref()
const form = reactive({})
const click =(data)=>{
    console.log(data)
}
const emit = defineEmits(["search","reset"])
const search=()=>{
    emit("search",form)
}
const reset=()=>{
    form.type=null
    form.username=null
    emit("reset",form)
}
</script>
<template>
    <ElForm ref="formRef" :inline="true" class="demo-form-inline">
        <el-row>
            <template v-for="(item) in columns">
                <ElFormItem :label="item.label" style="width: 30%;margin-top: 16px;margin-left: 16px;" v-if="item.type === 'input'">
                    <el-input v-model="form[item.field]" />
                </ElFormItem>
                <ElFormItem :label="item.label" style="width: 30%;margin-top: 16px;margin-left: 16px;" v-if="item.type === 'select'">
                    <el-select v-model="form[item.field]">
                        <el-option v-for="data in item.options" :label="data.label" :value="data.value" />
                    </el-select>
                </ElFormItem>
                <ElFormItem :label="item.label" style="width: 30%;margin-top: 16px;margin-left: 16px;" v-if="item.type === 'opration'">
                    <ElButton @click="search">
                       查询
                    </ElButton>
                    <ElButton @click="reset">
                       重置
                    </ElButton>
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