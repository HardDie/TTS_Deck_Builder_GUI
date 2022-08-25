<template>
  <div class="footer-wraper">
    <n-button type="primary" @click="$emit('addEvent')">Add</n-button>
    <n-button type="error" @click="$emit('cancelEvent')">Cancel</n-button>
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

<script>
import { NButton } from "naive-ui";

export default {
  components: {
    NButton,
  },
  setup() {
    return {};
  },
};
</script>
