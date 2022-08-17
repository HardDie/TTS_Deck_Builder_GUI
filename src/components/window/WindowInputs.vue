<template>
  <div class="inputs">
    <label for="title">Title</label>
    <input id="title" type="text" />

    <label for="link">Image Link</label>
    <input id="link" type="text" />

    <label for="desc">Description</label>
    <input id="desc" type="text" />
  </div>
</template>

<style scoped>
.inputs {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
}
</style>
