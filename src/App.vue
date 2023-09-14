<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import { linkRoutes } from "@/router/link-routes";
</script>

<template>
  <div>
    <header>
      <NavBar title="BreakingBad" :links="linkRoutes" />
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
