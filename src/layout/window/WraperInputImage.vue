<script setup>
import Input from "./WraperInput.vue";
import Image from "./WraperImage.vue";
</script>

<template>
  <div class="input-image-wraper">
    <Input></Input>
    <Image></Image>
  </div>
</template>

<style scoped>
.input-image-wraper {
  flex-grow: 1;
  display: flex;
}
</style>
