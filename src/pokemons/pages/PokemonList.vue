<script setup lang="ts">
import CardList from "@/characters/components/CardList.vue";

interface Props {
  title: string;
  visible: boolean;
}

defineProps<Props>();
</script>

<template>
  <div>
    <h2>{{ title }}</h2>

    <CardList />
  </div>
</template>

<style scoped></style>
