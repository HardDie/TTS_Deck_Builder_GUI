<template>
  <figure>
    <img @contextmenu="rclick" class="img" :src="img" :alt="title" />
    <figcaption class="label">{{ title }}</figcaption>
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
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

  user-select: none;
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
import { NDropdown } from "naive-ui";
import { ref } from "vue";

export default {
  components: {
    NDropdown,
  },
  props: {
    title: String,
    img: String,
  },
  setup() {
    const showDropdownRef = ref(false);
    const xRef = ref(0);
    const yRef = ref(0);

    return {
      showDropdown: showDropdownRef,
      x: xRef,
      y: yRef,
      options: [
        {
          label: "Change",
          key: "change",
        },
        {
          label: "Export",
          key: "Export",
        },
        {
          label: "Delete",
          key: "delete",
        },
      ],
      rclick(e) {
        showDropdownRef.value = true;
        xRef.value = e.clientX;
        yRef.value = e.clientY;
      },
      onClickoutside() {
        showDropdownRef.value = false;
      },
      handleSelect(key) {
        showDropdownRef.value = false;
        console.log(key);
      },
    };
  },
};
</script>
