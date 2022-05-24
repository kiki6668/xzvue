<template>
  <div>
    <li>{{i+1}}-{{task}} x</li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["task","i"]
}
</script>

<style scoped>

</style>
