<script setup lang="ts">
import { reactive, watch, ref } from 'vue'
import { ElFormItem, ElInput, ElDialog } from 'element-plus'

const props = defineProps({
    dialogVisible: {
        type: Boolean,
        default: () => false
    },
})
var dialogVisibleOn = ref()
var form = reactive({
    ticketIndex: ""
})
watch(
    () => props?.dialogVisible,
    async (val) => {
        dialogVisibleOn.value = props.dialogVisible
        form.ticketIndex = props?.dialogVisible?"1":"2"
    },
    {
        deep: true,
        immediate: true
    }
)
const ruleFormRef = ref()
const getFormData = () => {
    return form
}
defineExpose({
    getFormData: getFormData,
    ruleFormRef: ruleFormRef
})
const emit = defineEmits(['changeButton'])
const handlechange = (val:any) => {
    emit('changeButton', false)
}
</script>
<template>
    <ElDialog v-model="dialogVisibleOn">
        <el-form-item prop="ticketIndex" label="名称">
            <el-input v-model="form.ticketIndex" @change="handlechange">
                <template #prepend>#</template>
            </el-input>
        </el-form-item>
    </ElDialog>
</template>
<style lang="scss" scoped>
.form-color {
    width: 20px;
    height: 20px;
    margin-left: 4px;
}

.form-color-active {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    border: 1px solid #ccc;
}

.color-setting-box {
    width: 240px;
    height: 92px;
    margin: 0 24px 0 0;
    border: 1px solid #e6e9f0;
    border-radius: 8px 8px 8px 8px;

    .color-setting-label {
        display: flex;
        width: 240px;
        height: 40px;
        background: #f5f6f7;
        border: 1px solid #e6e9f0;
        border-radius: 8px 8px 0px 0px;
        align-items: center;
        justify-content: center;
    }

    .color-setting-content {
        display: flex;
        align-items: center;
        width: 240px;
        height: 52px;
        border-radius: 0px 0px 0px 0px;
    }
}
</style>
