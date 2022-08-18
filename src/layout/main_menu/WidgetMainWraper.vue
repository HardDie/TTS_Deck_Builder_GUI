<template>
  <div class="app-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 320px;
  background-color: #e3ded6;
  height: 100vh;
}
</style>
