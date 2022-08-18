<script setup>
import MainMenu from "./WraperMainMenu.vue";
import Bar from "@/containers/ContainerBar.vue";
import Body from "./WraperBody.vue";

import TempListCards from "@/components/TempListCards.vue";
</script>

<template>
  <MainMenu>
    <Bar
      title="TTS Deck Builder"
      showButtons="true"
      @addEvent="$emit('addEvent')"
    ></Bar>
    <Body>
      <TempListCards></TempListCards>
    </Body>
  </MainMenu>
</template>
