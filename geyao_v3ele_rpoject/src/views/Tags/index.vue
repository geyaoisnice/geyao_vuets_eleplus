<script setup lang="ts">
import { ElButton, ElDialog } from 'element-plus';
import SelectTag from './components/index.vue';
import tagDialog from "./components/tagDialog.vue"
import { ref } from 'vue';
const defaultValue = ["#FFB6C1", "#DC143C", "#87CEFA", "#40E0D0", "#FFD700", "#FF4500", "#A9A9A9", "#FFE4E1"]
const tagAddDialog = ref<typeof tagDialog>()
const showInput = () => {
    tagAddDialog.value?.openTagDialogFn()
}
</script>
<template>
    <div class="GY-Tags">
        <div class="GY-Tags-content">
            <div style="text-align: center;margin-bottom: 24px;">Tag标签管理</div>
            <SelectTag :defaultColor="defaultValue"></SelectTag>
        </div>
        <div class="GY-Tags-content">
            <div style="text-align: center;margin-bottom: 24px;">Tag标签管理</div>
            <ElButton @click="showInput">弹框</ElButton>
        </div>
    </div>
    <tagDialog ref="tagAddDialog"></tagDialog>
</template>
<style scoped lang="scss">
.GY-Tags {
    margin: 16px 0 0 16px;
    display: flex;

    .GY-Tags-content {
        width: 49%;
        height: 40vh;
        background-color: #cccccc;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column
    }
}
</style>
