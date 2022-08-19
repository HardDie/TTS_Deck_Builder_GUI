<template>
  <div class="vertical-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.vertical-wraper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  overflow: auto;
}
</style>
