<template>
  <div class="input-wraper">
    <n-input type="text" placeholder="Title" />
    <n-input type="text" placeholder="Image Link" />
    <n-input class="bigInput" type="textarea" placeholder="Description" />
  </div>
</template>

<style scoped>
.input-wraper {
  flex-grow: 1;

  padding: 74px 120px;

  display: flex;
  flex-direction: column;
  gap: 16px;
}
.bigInput {
  flex-grow: 1;
}
</style>

<script>
import { NInput } from "naive-ui";

export default {
  components: {
    NInput,
  },
  setup() {
    return {};
  },
};
</script>
