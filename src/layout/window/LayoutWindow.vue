<script setup>
import Hover from "@/containers/ContainerHover.vue";
import Window from "./WraperWindow.vue";
import Bar from "@/containers/ContainerBar.vue";
import Body from "./WraperBody.vue";
import InputImage from "./WraperInputImage.vue";
import Footer from "./WraperFooter.vue";
</script>

<template>
  <Hover>
    <Window>
      <Bar title="Create game"></Bar>
      <Body>
        <InputImage></InputImage>
        <Footer></Footer>
      </Body>
    </Window>
  </Hover>
</template>
