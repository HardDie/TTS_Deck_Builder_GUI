<template>
  <div class="window-image">
    <img
      class="img"
      src="https://foursouls.com/wp-content/uploads/2022/01/r-the_capricious-308x420.png"
      alt="Some Image"
    />
  </div>
</template>

<style scoped>
.window-image {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
}
.img {
  max-width: 369px;
  aspect-ratio: 0.71;
  border: 4px #138b44 solid;
  border-radius: 8px;
}
</style>
