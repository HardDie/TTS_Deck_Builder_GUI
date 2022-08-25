<template>
  <Vertical>
    <Bar
      title="TTS Deck Builder"
      :showButtons="true"
      @addEvent="$emit('addEvent')"
    ></Bar>
    <WraperBody>
      <TempListCards></TempListCards>
    </WraperBody>
  </Vertical>
</template>

<script>
import Vertical from "@/layout/common/LayoutVertical.vue";

import Bar from "@/containers/ContainerBar.vue";
import WraperBody from "./WraperBody.vue";

import TempListCards from "@/components/TempListCards.vue";

export default {
  components: {
    Vertical,
    Bar,
    WraperBody,
    TempListCards,
  },
};
</script>
