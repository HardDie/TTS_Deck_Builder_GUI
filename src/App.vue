<script setup>
import WidgetMainWraper from "@/layout/main_menu/WidgetMainWraper.vue";
import Bar from "@/containers/ContainerBar.vue";
import WidgetBodyWraper from "@/layout/main_menu/WidgetBodyWraper.vue";
import WidgetWindowForm from "@/layout/window/WidgetWindowForm.vue";

import TempListCards from "@/components/TempListCards.vue";
</script>

<template>
  <WidgetMainWraper>
    <Bar title="TTS Deck Builder" showButtons="true"></Bar>
    <WidgetBodyWraper>
      <TempListCards></TempListCards>
    </WidgetBodyWraper>
    <WidgetWindowForm></WidgetWindowForm>
  </WidgetMainWraper>
</template>
