<template>
  <Hover v-show="isShow">
    <Window>
      <Bar title="Create game"></Bar>
      <Vertical>
        <Horizontal>
          <WraperInput></WraperInput>
          <WraperImage></WraperImage>
        </Horizontal>
        <WraperFooter @cancelEvent="$emit('cancelEvent')"></WraperFooter>
      </Vertical>
    </Window>
  </Hover>
</template>

<script>
import Vertical from "@/layout/common/LayoutVertical.vue";
import Horizontal from "@/layout/common/LayoutHorizontal.vue";

import Hover from "@/containers/ContainerHover.vue";
import Window from "./WraperWindow.vue";
import Bar from "@/containers/ContainerBar.vue";
import WraperInput from "./WraperInput.vue";
import WraperImage from "./WraperImage.vue";
import WraperFooter from "./WraperFooter.vue";

export default {
  components: {
    Vertical,
    Horizontal,
    Hover,
    Window,
    Bar,
    WraperInput,
    WraperImage,
    WraperFooter,
  },
  props: {
    isShow: Boolean,
  },
  setup() {
    return {};
  },
};
</script>
