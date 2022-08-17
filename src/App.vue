<script setup>
import WidgetMain from "./components/WidgetMain.vue";
import WidgetBar from "./components/WidgetBar.vue";
import WidgetBody from "./components/WidgetBody.vue";
import WidgetCreate from "./components/WidgetCreate.vue";

import TempListCards from "./components/TempListCards.vue";
</script>

<template>
  <WidgetMain>
    <WidgetBar title="TTS Deck Builder" showButtons="true"></WidgetBar>
    <WidgetBody>
      <TempListCards></TempListCards>
    </WidgetBody>
    <WidgetCreate></WidgetCreate>
  </WidgetMain>
</template>

<style scoped></style>
