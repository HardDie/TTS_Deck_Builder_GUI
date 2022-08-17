<template>
  <div class="app-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;

  width: 1440px;
  margin: 0 auto;
  background-color: #e3ded6;
  height: 100vh;
}
</style>
