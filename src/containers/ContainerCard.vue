<template>
  <figure @contextmenu="$emit('rclick')">
    <img class="img" :src="img" :alt="title" />
    <figcaption class="label">{{ title }}</figcaption>
  </figure>
</template>

<style scoped>
figure {
  margin: 0;
}
.img {
  max-width: 205px;
  aspect-ratio: 0.71;
  border: 2px #138b44 solid;
  border-radius: 8px;
}

.label {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-top: 8px;
}
</style>

<script>
export default {
  props: {
    title: String,
    img: String,
  },
  data() {
    return {};
  },
};
</script>
