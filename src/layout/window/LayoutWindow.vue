<script setup>
import Vertical from "@/layout/common/LayoutVertical.vue";
import Horizontal from "@/layout/common/LayoutHorizontal.vue";

import Hover from "@/containers/ContainerHover.vue";
import Window from "./WraperWindow.vue";
import Bar from "@/containers/ContainerBar.vue";
import Input from "./WraperInput.vue";
import Image from "./WraperImage.vue";
import Footer from "./WraperFooter.vue";
</script>

<template>
  <Hover v-show="isShow">
    <Window>
      <Bar title="Create game"></Bar>
      <Vertical>
        <Horizontal>
          <Input></Input>
          <Image></Image>
        </Horizontal>
        <Footer @cancelEvent="$emit('cancelEvent')"></Footer>
      </Vertical>
      <Body> </Body>
    </Window>
  </Hover>
</template>

<script>
export default {
  props: ["isShow"],
  data() {
    return {};
  },
};
</script>
