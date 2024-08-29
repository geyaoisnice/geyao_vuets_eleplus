<template>
  <router-view></router-view>
</template>
<script>
import {getDataApi} from "./api/index.ts"
import {onMounted} from "vue"
let getData = () => {
  let params ={
    pageIndex:1,
    pageSize:10,
    username:"admin"
  }
 	getDataApi(params).then((res) => {
    let resData = res.data.data
  })
  console.log(222222)
}
getData()
</script>