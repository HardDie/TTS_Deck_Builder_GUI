<script setup>
import {NButton, NSpace} from 'naive-ui'
</script>

<template>
  <div class="button-wraper">
    <n-space>
      <n-button type="primary">Add</n-button>
      <n-button type="error">Cancel</n-button>
    </n-space>
  </div>
</template>

<style scoped>
.button-wraper {
  display: flex;
  flex-direction: row;

  height: 56px;

  justify-content: right;
}
</style>
