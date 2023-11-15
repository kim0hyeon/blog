<template>


  <div v-for="(item, index) in 블로그글" :key="index">
    <h4 @click="$router.push('/detail/{{index}}')">{{ item.title }}</h4>
    <p>{{ item.date }}</p>
  </div>


</template>

<script>
export default {
    name : "PageList",
    props:{
      블로그글 : Array,
    },
}
</script>

<style>

</style>