<script setup>
import WidgetBar from "../common/WidgetBar.vue";
import WidgetHover from "./WidgetHover.vue";
import WidgetWindowWraper from "./WidgetWindowWraper.vue";
import WidgetBodyWraper from "./WidgetBodyWraper.vue";
import WindowMiddle from "./WindowMiddle.vue";
import WindowButtons from "./WindowButtons.vue";
</script>

<template>
  <WidgetHover></WidgetHover>
  <WidgetWindowWraper>
    <WidgetBar title="Create game"></WidgetBar>
    <WidgetBodyWraper>
      <WindowMiddle></WindowMiddle>
      <WindowButtons></WindowButtons>
    </WidgetBodyWraper>
  </WidgetWindowWraper>
</template>
