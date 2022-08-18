<script setup>
import Hover from "@/containers/ContainerHover.vue";
import Window from "./WraperWindow.vue";
import Bar from "@/containers/ContainerBar.vue";
import Body from "./WraperBody.vue";
import InputImage from "./WraperInputImage.vue";
import Footer from "./WraperFooter.vue";
</script>

<template>
  <Hover v-show="isShow">
    <Window>
      <Bar title="Create game"></Bar>
      <Body>
        <InputImage></InputImage>
        <Footer @cancelEvent="$emit('cancelEvent')"></Footer>
      </Body>
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
