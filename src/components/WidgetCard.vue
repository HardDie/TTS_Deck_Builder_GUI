<template>
  <figure>
    <div class="img-wraper">
      <img class="img" :src="img" :alt="title" />
    </div>
    <figcaption class="label">{{title}}</figcaption>
  </figure>
</template>

<style scoped>
figure {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  /* margin: 30px 0 30px 30px; */
}
.img {
  width: 100%;
  height: 100%;
}
.img-wraper {
  width: 205px;
  height: 280px;
  border-radius: 8px;

  box-sizing: border-box;
  border: 2px #138b44 solid;

  overflow: hidden;
}
.label {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: black;
  font-weight: bold;

  margin-top: 8px;
}
</style>

<script>
export default {
  props: ["title", "img"],
  data() {},
};
</script>
