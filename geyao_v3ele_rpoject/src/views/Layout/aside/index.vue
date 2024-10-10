<template>
    <div class="gy-aside">
        <el-menu 
        text-color="#cccccc"
        @select="handleSelect"
         active-text-color="#ffd04b" background-color="#545c64" :default-openeds="['index']">
            <el-sub-menu>
                <template #title>
                    <el-icon>
                        <message />
                    </el-icon>用户管理
                </template>
                <el-menu-item-group>
                    <template #title>用户</template>
                    <el-menu-item index="/user">用户列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                <template #title>学校</template>
                <el-menu-item index="/school">学校列表</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                <template #title>标签</template>
                <el-menu-item index="/tags">标签管理</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                <template #title>弹框</template>
                <el-menu-item index="/dialog">弹框管理</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </el-menu>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  router.push(key)
}
</script>
<style>
.gy-aside {
    width: 200px;
    background-color: #091328;
    height: 100vh;
}
</style>