<template>
  <main>
    <h1>
      {{ header }}
    </h1>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    header: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
}
</style>
