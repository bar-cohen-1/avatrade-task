<template>
  <the-toolbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheToolbar from "@components/TheToolbar.vue";

export default defineComponent({
  components: {
    TheToolbar,
  },
});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  font-size: 16px;
  margin: 0;
}
</style>
