<template>
  <div id="hello">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  export default {
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
body {
  min-height: 100vh;
}
</style>
