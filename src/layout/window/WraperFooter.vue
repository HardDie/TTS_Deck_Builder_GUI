<script setup>
import { NButton } from "naive-ui";
</script>

<template>
  <div class="footer-wraper">
    <n-button type="primary" @click="addEvent">Add</n-button>
    <n-button type="error" @click="cancelEvent">Cancel</n-button>
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
export default {
  data() {
    return {};
  },
  methods: {
    addEvent: function () {
      this.$emit("addEvent");
    },
    cancelEvent: function () {
      this.$emit("cancelEvent");
    },
  },
};
</script>
