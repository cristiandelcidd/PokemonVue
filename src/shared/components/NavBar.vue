<script setup lang="ts">
import type { RouterLink } from "@/router/link-routes";
// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
// });

interface Props {
  title?: string;
  links: RouterLink[];
  showIcon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showIcon: true,
  links: () => [],
});
</script>

<template>
  <nav>
    <img
      v-if="props.showIcon"
      src="@/assets/vue.svg"
      alt="Vue Logo"
      height="25"
      width="25"
    />
    <span v-if="props.title">{{ props.title || "no title" }}</span>

    <RouterLink v-for="link in props.links" :to="link.path" :key="link.name">{{
      link.title
    }}</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  align-items: center;
  display: flex;
  gap: 15px;
  width: 100%;
}

a,
a:visited {
  color: #fff;
  text-decoration: none;
}
</style>
