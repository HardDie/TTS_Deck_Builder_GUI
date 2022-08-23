<template>
  <div class="window-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.window-wraper {
  background-color: #e3ded6;
  width: 70%;
  height: 80%;

  display: flex;
  flex-direction: column;
}
</style>
