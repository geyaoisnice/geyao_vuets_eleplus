<template>
    <div class="common-layout">
        <el-container>
            <Aside width="200px"></Aside>
            <el-container class="gy-content">
                <Header></Header>
                <Content></Content>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import Aside from "../Layout/aside/index.vue"
import Content from "../Layout/content/index.vue"
import Header from "../Layout/Header/index.vue"
</script>
<style>
.gy-content{
    display: flex;
    flex-direction: column;
}
</style>