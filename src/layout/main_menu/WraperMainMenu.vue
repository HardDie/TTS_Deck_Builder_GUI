<template>
  <div class="main-menu-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.main-menu-wrapper {
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 320px;
  background-color: #e3ded6;
  height: 100vh;
}
</style>
