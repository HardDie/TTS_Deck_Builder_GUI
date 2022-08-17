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

  /* Устанавливаем режим отображения карт на сетке */
  display: flex;
  flex-wrap: wrap;

  /* Чтобы сверху и слева был отступ 30px */
  padding: 30px 0 30px 30px;
  /* Чтобы расстояние между элементами было 30px */
  gap: 30px;
  /* Элементы должны прижиматься к верху */
  align-content: flex-start;

  /* При большом количестве элементов, должна появляться полоса прокрутки */
  overflow-y: auto;
}
</style>
