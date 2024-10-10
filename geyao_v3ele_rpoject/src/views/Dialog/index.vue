<script setup lang="ts">
import { ElButton, ElDialog } from 'element-plus';
import { ref } from 'vue';
import DialogInput from './dialogInput.vue';
const dialogVisible=ref(false)
const handleClick=()=>{
    dialogVisible.value = true
}
const changeButton=(val)=>{
    dialogVisible.value=val
}
</script>

<template>
    <ElButton @click="handleClick">打开弹框</ElButton>
    <DialogInput @changeButton="changeButton" :dialogVisible="dialogVisible"></DialogInput>
</template>