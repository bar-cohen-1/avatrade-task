<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped lang="scss">
@import "@style/colors.scss";

button {
  padding: 0.75rem 1.5rem;
  background-color: $base-color;
  border: 1px solid $base-color;
  border-radius: 24px;
  color: white;
  min-width: 8em;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: $base-color-active;
  border-color: $base-color-active;
}
</style>
