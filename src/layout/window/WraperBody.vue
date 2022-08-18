<template>
  <div class="body-wraper">
    <slot></slot>
  </div>
</template>

<style scoped>
.body-wraper {
  flex-grow: 1;

  display: flex;
  flex-direction: column;

  overflow: auto;
}
</style>
