<script setup>
import WindowInputs from "./WindowInputs.vue";
import WindowImage from "./WindowImage.vue";
</script>

<template>
  <div class="middle-wraper">
    <WindowInputs></WindowInputs>
    <WindowImage></WindowImage>
  </div>
</template>

<style scoped>
.middle-wraper {
  flex-grow: 1;
  width: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
}
</style>
