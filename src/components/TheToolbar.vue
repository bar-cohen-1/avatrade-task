<template>
  <nav>
    <h2>Avatrade Task</h2>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped lang="scss">
@import "@style/colors.scss";

nav {
  width: 100%;
  height: 4.5rem;
  background-color: $toolbar-color;
  display: flex;
  align-items: center;
  padding: 0 3rem;

  h2 {
    color: white;
    vertical-align: middle;
  }
}
</style>
