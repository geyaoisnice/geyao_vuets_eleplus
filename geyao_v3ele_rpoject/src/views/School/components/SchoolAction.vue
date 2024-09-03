<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import { ElInput, ElFormItem, ElForm } from 'element-plus'
import {SchoolType} from "./data.js"
// 父子传值
const props = defineProps({
    id: {
        type: String,
        default: () => ''
    },
    tagDetail: {
        type: Array,
        default: () => []
    }
})
var form = reactive({
    name: '',
    color: '#FF5C93'
})
// 监听
watch(
    () => props.tagDetail,
    async (val) => {
        form.name = props.tagDetail?.name
    },
    {
        deep: true,
        immediate: true
    }
)
const ruleFormRef = ref()
const rules = reactive({
    name: [
        { required: true, message: 'name is Required', trigger: 'blur' },
        { min: 0, max: 20, message: 'Length should be 0 to 20', trigger: 'blur' }
    ],

})
const getFormData = () => {
    return form
}

defineExpose({
    getFormData: getFormData,
    ruleFormRef: ruleFormRef
})
</script>
<template>
    <ElForm ref="ruleFormRef" :model="form" label-width="auto" :rules="rules" style="max-width: 600px">
        <el-form-item prop="name" label="name">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item prop="type" label="type">
            <el-select v-model="form.type" placeholder="Select" size="large" style="width: 240px">
                <el-option v-for="item in SchoolType" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </el-form-item>
    </ElForm>
</template>
