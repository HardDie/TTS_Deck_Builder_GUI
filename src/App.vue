<script setup>
import LayoutApp from "@/layout/app/LayoutApp.vue";
import LayoutMainMenu from "@/layout/main_menu/LayoutMainMenu.vue";
import LayoutWindow from "@/layout/window/LayoutWindow.vue";
</script>

<template>
  <LayoutApp>
    <LayoutMainMenu @addEvent="addEvent"></LayoutMainMenu>
    <LayoutWindow
      @cancelEvent="cancelEvent"
      :isShow="showWindow"
    ></LayoutWindow>
  </LayoutApp>
</template>

<script>
export default {
  data() {
    return {
      showWindow: false,
    };
  },
  methods: {
    addEvent: function () {
      this.showWindow = true;
    },
    cancelEvent: function () {
      this.showWindow = false;
    },
  },
};
</script>
