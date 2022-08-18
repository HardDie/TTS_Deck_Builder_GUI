<template>
  <div class="hover-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.hover-wrapper {
  position: absolute;

  background-color: #0d5f3070;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
