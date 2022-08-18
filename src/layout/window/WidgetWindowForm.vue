<script setup>
import Bar from "@/containers/ContainerBar.vue";
import Hover from "@/containers/ContainerHover.vue";
import WidgetWindowWraper from "./WidgetWindowWraper.vue";
import WidgetBodyWraper from "./WidgetBodyWraper.vue";
import WindowMiddle from "./WindowMiddle.vue";
import WindowButtons from "./WindowButtons.vue";
</script>

<template>
  <Hover></Hover>
  <WidgetWindowWraper>
    <Bar title="Create game"></Bar>
    <WidgetBodyWraper>
      <WindowMiddle></WindowMiddle>
      <WindowButtons></WindowButtons>
    </WidgetBodyWraper>
  </WidgetWindowWraper>
</template>
