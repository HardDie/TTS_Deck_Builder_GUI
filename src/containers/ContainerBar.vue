<template>
  <div class="bar">
    <span class="path"> {{ title }} </span>
    <ul class="buttons-layout" v-if="showButtons">
      <li class="button-wraper">
        <a href="#" @click="$emit('addEvent')">
          <Icon class="icon" size="24">
            <AddFilled />
          </Icon>
        </a>
      </li>
      <li class="button-wraper">
        <a href="#" @click="$emit('importEvent')">
          <Icon class="icon" size="24">
            <NoteAddOutlined />
          </Icon>
        </a>
      </li>
      <li class="button-wraper">
        <a href="#" @click="$emit('searchEvent')">
          <Icon class="icon" size="24">
            <SearchOutlined />
          </Icon>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #169747;
  padding: 0 16px;
  height: 56px;
}
.path {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #e3ded6;
  font-weight: bold;
}
.buttons-layout {
  display: flex;
  gap: 16px;
  padding: 0;
  align-items: center;
  list-style: none;
}
.button-wraper {
  width: 24px;
  height: 24px;
}
.icon {
  color: #e3ded6;
}
.icon:hover {
  color: #968c7b;
}
</style>

<script>
import { AddFilled, NoteAddOutlined, SearchOutlined } from "@vicons/material";
import { Icon } from "@vicons/utils";

export default {
  components: {
    AddFilled,
    NoteAddOutlined,
    SearchOutlined,
    Icon,
  },
  props: {
    title: String,
    showButtons: Boolean,
  },
};
</script>
