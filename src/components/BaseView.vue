<template>
  <main class="view flex-col">
    <h1>
      {{ header }}
    </h1>
    <section>
      <slot></slot>
    </section>
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
.view {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;
}
</style>
