<template>
    <div ref="ruleFormRef" class="SelectTextColor">
        <div class="SelectTextColorContent">
            <div :style="`color:${activeColor}`"  class="SelectTextColorLeft">Example</div>
            <div class="SelectTextColorMiddle"></div>
            <div class="SelectTextColorRight">
                <div :style="`background-color:${item}`"  :span="6" v-for="(item, index) in defaultValueColor" @click="handleColor(item)"
                    :class="`${item === activeColor? 'SelectTextColorActive' : 'SelectTextColorTag'} `">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps,defineEmits,defineExpose,watch} from "vue"
const props = defineProps({
    modelValue: {
        type: String,
        required: ()=>''
    },
    defaultColor: {
        type: Array,
        default: () => []
    },
})
const defaultValueColor = ref(props?.defaultColor)
const emit = defineEmits(['update:modelValue'])
const activeColor = ref(props?.modelValue)
const handleColor = (item) => {
    activeColor.value = item
}

defineExpose({
    activeColor
})
</script>
<style lang="scss" scoped>
.SelectTextColor {
    width: 417px;
    height: 112px;
    background: #FAFAFA;
    border-radius: 8px 8px 8px 8px;

    .SelectTextColorContent {
        display: flex;
        align-items: center;


        .SelectTextColorLeft {
            width: 241px;
            height: 64px;
            line-height: 64px;
            border-radius: 0px 0px 0px 0px;
            margin-top: 28px;
            display: flex;
            justify-content: center;

        }

        .SelectTextColorMiddle {
            width: 1px;
            height: 64px;
            border: 1px solid #E6E9F0;
            margin-top: 28px;
        }

        .SelectTextColorRight {
            width: 176px;
            height: 56px;
            border-radius: 0px 0px 0px 0px;
            margin-top: 28px;
            display: flex;
            flex-wrap: wrap;

            .SelectTextColorTag {
                width: 20px;
                height: 20px;
                margin: 0 0 0 16px;
                border-radius: 4px 4px 4px 4px;
            }

            .SelectTextColorActive {
                width: 28px;
                height: 28px;
                margin: 0 0 0 16px;
                border-radius: 8px 8px 8px 8px;
                border: 1px solid #246AE3;
            }
        }
    }
}
</style>

