<script setup>
import { NButton } from "naive-ui";
</script>

<template>
  <div class="footer-wraper">
    <n-button type="primary">Add</n-button>
    <n-button type="error">Cancel</n-button>
  </div>
</template>

<style scoped>
.footer-wraper {
  height: 56px;

  display: flex;
  justify-content: right;
  align-items: center;

  gap: 16px;
  padding-right: 16px;
}
</style>
