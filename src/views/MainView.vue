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
import LayoutApp from "@/layout/app/LayoutApp.vue";
import LayoutMainMenu from "@/layout/main_menu/LayoutMainMenu.vue";
import LayoutWindow from "@/layout/window/LayoutWindow.vue";

import { ref } from "vue";

export default {
  components: {
    LayoutApp,
    LayoutMainMenu,
    LayoutWindow,
  },
  setup() {
    const showWindowRef = ref(false);
    return {
      showWindow: showWindowRef,
      addEvent() {
        showWindowRef.value = true;
      },
      cancelEvent() {
        showWindowRef.value = false;
      },
    };
  },
};
</script>