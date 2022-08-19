<template>
  <div class="horizontal-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-wraper {
  flex-grow: 1;
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  overflow: auto;
}
</style>
