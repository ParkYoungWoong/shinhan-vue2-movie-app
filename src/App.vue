<template>
  <div>
    <hello />
    <router-view />
    <div></div>
  </div>
</template>

<script>
import Hello from '@/components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>