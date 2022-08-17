<script setup>
import WidgetMainWraper from "./components/main_menu/WidgetMainWraper.vue";
import WidgetBar from "./components/common/WidgetBar.vue";
import WidgetBodyWraper from "./components/main_menu/WidgetBodyWraper.vue";
import WidgetWindowForm from "./components/window/WidgetWindowForm.vue";

import TempListCards from "./components/TempListCards.vue";
</script>

<template>
  <WidgetMainWraper>
    <WidgetBar title="TTS Deck Builder" showButtons="true"></WidgetBar>
    <WidgetBodyWraper>
      <TempListCards></TempListCards>
    </WidgetBodyWraper>
    <WidgetWindowForm></WidgetWindowForm>
  </WidgetMainWraper>
</template>
