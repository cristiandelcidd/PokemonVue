<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
import { characterRoute } from "@/characters/router";
import { RouterLink } from "@/router/link-routes";

const linkRoutes: RouterLink[] = characterRoute
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => ({
    name: route.name as string,
    path: route.path,
    title: (route.props as { title: string; visible: boolean }).title,
  }));
</script>

<template>
  <div>
    <h1>Pokemons</h1>
    <NavBar :show-icon="false" :links="linkRoutes" />

    <RouterView />
  </div>
</template>

<style scoped></style>
