<template>
  <div>
    <header>Auth Layout</header>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  middleware: "auth",
})
</script>

<style lang="scss"></style>
