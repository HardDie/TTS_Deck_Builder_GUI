<script setup>
import Vertical from "@/layout/common/LayoutVertical.vue";

import Bar from "@/containers/ContainerBar.vue";
import Body from "./WraperBody.vue";

import TempListCards from "@/components/TempListCards.vue";
</script>

<template>
  <Vertical>
    <Bar
      title="TTS Deck Builder"
      showButtons="true"
      @addEvent="$emit('addEvent')"
    ></Bar>
    <Body>
      <TempListCards></TempListCards>
    </Body>
  </Vertical>
</template>
