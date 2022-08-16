<script setup>
import WidgetMain from "./components/WidgetMain.vue";
import WidgetBar from "./components/WidgetBar.vue";
</script>

<template>
  <WidgetMain>
    <header>
      <WidgetBar></WidgetBar>
    </header>
    <main>Main app</main>
  </WidgetMain>
</template>

<style scoped></style>
