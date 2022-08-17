<script setup>
import WidgetBar from "./WidgetBar.vue";
import WidgetHover from "./WidgetHover.vue";
import WidgetWindow from "./WidgetWindow.vue";
</script>

<template>
  <WidgetHover></WidgetHover>
  <WidgetWindow>
    <WidgetBar title="Create game"></WidgetBar>
  </WidgetWindow>
</template>
