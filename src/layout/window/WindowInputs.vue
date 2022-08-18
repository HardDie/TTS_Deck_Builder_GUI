<script setup>
import { NInput, NSpace } from "naive-ui";
</script>

<template>
  <div class="inputs">
    <n-space vertical>
      <n-input type="text" placeholder="Title" />
      <n-input type="text" placeholder="Image Link" />
      <n-input type="textarea" placeholder="Description" />
    </n-space>
  </div>
</template>

<style scoped>
.inputs {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
}
</style>
