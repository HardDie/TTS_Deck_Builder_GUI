<template>
  <div class="body-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.body-wrapper {
  /* Чтобы блок тела занимал все пространство в родительском flex элементе */
  flex-grow: 1;
  background-color: #e3ded6;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;
  overflow-y: auto;
}
</style>
