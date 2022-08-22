<template>
  <div class="horizontal-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.horizontal-wraper {
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  height: 100%;

  overflow: auto;
}
</style>
