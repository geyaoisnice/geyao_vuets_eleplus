<template>
  11111
</template>
<script>
import {getDataApi} from "./api/index.ts"
import {onMounted} from "vue"
let getData = () => {

 	getDataApi().then((res) => {
    let resData = res.data.data
  })
  console.log(222222)
}
getDataApi()
</script>