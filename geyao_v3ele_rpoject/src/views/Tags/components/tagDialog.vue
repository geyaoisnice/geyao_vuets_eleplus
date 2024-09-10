<script setup lang="ts">
import { PropType, ref, computed, watch } from 'vue'
import router from '@/router'
import { cloneDeep } from 'lodash-es'
import { getTagShowList } from '../api/index.ts'
import { ElCheckbox, ElDialog,ElIcon, ElInput,ElSelect } from 'element-plus'
const emit = defineEmits(['addTags'])
const props = defineProps({
  tags: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  dialogTitle: {
    type: String
  },
  zIndex: {
    type: Number,
    default: () => 1005
  },
  width: {
    type: String,
    default: () => '800px'
  }
})

const formModel = ref<string[]>([])
const keywords = ref('')
const tagList = ref<any[]>([])
const allTagList = ref<any[]>([])
const zIndex = ref(props.zIndex)
const width = ref(props.width)
const tagColorList = ref()

watch(
  () => props.tags,
  () => {
    handleTagList()
  },
  {
    deep: true
  }
)

const handleTagList = () => {
  const selectNames: string[] = []

  props.tags?.forEach((item) => {
    selectNames.push(item.name)
  })

  tagList.value = allTagList.value.filter((item) => !selectNames.includes(item.name))
}
const getTagList = async () => {
    getTagShowList({ }).then((res) => {
        console.log(res)
    if (res?.data?.data.list.length) {
        console.log(res.data.data.list,"11111")
      allTagList.value = res.data.data.list
    } else {
      allTagList.value = []
    }

    handleTagList()
  })
}

getTagList()

const addTagDialog = ref(false)
const openTagDialogFn = () => {
  keywords.value = ''
  addTagDialog.value = true
}

const closeChooseTags = () => {
  const tagSelected = tagList.value.filter((item) => formModel.value.includes(item.name))
  console.log(tagSelected, 'tagSelected is')
  emit('addTags', tagSelected)
  addTagDialog.value = false
  formModel.value = []
}

const getBackColor = (color) => {
  return color
}

const toTagManage = () => {
  router.push({ path: '/admin/setting/Advanced/TagManagement' })
}

// 是否显示， 用于判断过滤
const isShowContactPropertyField = (tagItem) => {
  if (!keywords.value) {
    return true
  }
  return tagItem.name?.toLowerCase().indexOf(keywords.value.toLowerCase()) > -1
}
const filterEmpty = computed(() => {
  if (keywords.value) {
    const resultList =
      tagList.value.filter(
        (tagItem) => tagItem.name.toLowerCase().indexOf(keywords.value.toLowerCase()) > -1
      ) ?? []
    const selectedListFilter =
      props.tags?.filter(
        (tagItem) => tagItem.name.toLowerCase().indexOf(keywords.value.toLowerCase()) > -1
      ) ?? []
    return resultList.length == 0 && selectedListFilter.length == 0
  }
  return false
})

const createTagDialog = ref()
const selectColor = ref()
const createTag = () => {
  createTagDialog.value = true
}
const closeCreateTag = () => {
  selectColor.value = ''
  createTagDialog.value = false
}

const saveCreateTag = () => {
  if (keywords.value && selectColor.value) {
    allTagList.value.unshift({
      name: cloneDeep(keywords.value),
      color: cloneDeep(selectColor.value)
    })
    formModel.value.push(keywords.value)
    handleTagList()
  }

  keywords.value = ''
  selectColor.value = ''
  createTagDialog.value = false
}

defineExpose({ openTagDialogFn })
</script>
<template>
  <ElDialog
    v-model="addTagDialog"
    @cancel="closeChooseTags"
    :max-width="width"
    :show-icon="false"
    :normal="false"
    :scrim="false"
    :z-index="zIndex"
    :title="dialogTitle ?? 'addTags'"
    :show-close-icon="false"
  >
    <div class="py-20px">
      <ElInput v-model="keywords" label="" autofocus color="primary">
        <template #prepend-inner>
            <el-icon><Plus /></el-icon>
        </template>
      </ElInput>
    </div>
    <div class="max-h-500px overflow-y-auto mb-20px">
      <ElSelect
        v-for="tagItem in tagList"
        v-show="isShowContactPropertyField(tagItem)"
        :key="tagItem.name"
        :value="tagItem.name"
        class="mb-4"
        v-model="formModel"
        @update:model-value="(v) => $emit('update:modelValue', v)"
        color="primary"
        hide-details
      >
        <template #label>
          <div
            class="tag-item nowrap-hidden-ellipsis"
            :style="{ backgroundColor: getBackColor(tagItem.color), color: tagItem.color }"
          >
            {{ tagItem.name }}
          </div>
        </template>
      </ElSelect>
    </div>
    <div v-if="filterEmpty" @click="createTag()" class="create-tag nowrap-hidden-ellipsis pb-20px">
      {{ 'createTag' }}
      <span style="padding-left: 10px">{{ '"' + keywords + '"' }}</span>
    </div>
    <div @click="toTagManage">
        <el-icon><Plus /></el-icon>
      <span style="padding-left: 10px; color: #60a5fa; cursor: pointer"
        >{{ 'manageTags'}}
      </span>
    </div>
  </ElDialog>
  <ElDialog
    v-model="createTagDialog"
    max-width="800px"
    @cancel="closeCreateTag()"
    @save="saveCreateTag()"
    :show-icon="false"
    :scrim="false"
    :title="'createTag'"
  >
    <div class="py-20px">
      <div>{{ 'tagName' }}</div>
      <div class="create-tag-name nowrap-hidden-ellipsis">
        <div class="px-20px"><el-icon><Plus /></el-icon></div>
        <span>{{ keywords }}</span>
      </div>
    </div>
    <div> {{ 'selectTagColor' }} </div>
    <div class="select-color-box">
      <div class="select-color-preview nowrap-hidden-ellipsis">
        <div
          class="preview-item nowrap-hidden-ellipsis"
          :style="{
            'background-color': selectColor ? getBackColor(selectColor) : '',
            color: selectColor
          }"
        >
          {{ keywords }}
        </div>
      </div>
      <div class="select-color-item">
        <div
          v-for="color in tagColorList"
          :key="color"
          @click="selectColor = color"
          :style="{ 'background-color': color }"
          class="mx-10px w-20px h-20px cursor-pointer"
        >
        </div>
      </div>
    </div>
  </ElDialog>
</template>
<style scoped lang="scss">
.tag-item {
  max-width: 400px;
  padding: 0 10px;
  border-radius: 4px;
}

:deep(.el-tag__content) {
  max-width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.create-tag {
  color: #246ae3;
  cursor: pointer;
}

.create-tag-name {
  display: flex;
  width: 80%;
  height: 40px;
  margin-top: 12px;
  border: 1px solid #e6e9f0;
  border-radius: 8px;
  align-items: center;
}

.select-color-box {
  display: flex;
  width: 100%;
  height: 110px;
  padding: 24px;
  margin-top: 12px;
  background-color: #fafafa;
  border-radius: 8px;

  .select-color-preview {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;

    .preview-item {
      max-width: 80%;
      padding: 4px 8px;
    }
  }

  .select-color-item {
    display: flex;
    width: 50%;
    height: 100%;
    padding: 0 80px;
    border-left: 1px solid #e6e9f0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>