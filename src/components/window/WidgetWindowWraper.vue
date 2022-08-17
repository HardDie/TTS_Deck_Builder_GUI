<template>
  <div class="window-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.window-wraper {
  position: absolute;

  background-color: #e3ded6;
  width: 90%;
  height: 80vh;

  margin: 10vh 5%;

  display: flex;
  flex-direction: column;
}
</style>
