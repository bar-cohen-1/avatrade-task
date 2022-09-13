<template>
  <form
    class="base-form flex-col"
    autocomplete="off"
    @submit.prevent="onSubmit"
  >
    <slot></slot>
    <base-button v-if="!!submitButton" type="submit">Submit</base-button>
  </form>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue";

interface Props {
  submitButton?: boolean;
  onSubmit: (e: Event) => void;
}

withDefaults(defineProps<Props>(), {
  submitButton: true,
});
</script>

<style lang="scss">
@import "@style/colors.scss";

.base-form {
  padding: 1rem;
  width: 24rem;

  div.base-input {
    margin-bottom: 1.25rem;
  }

  button[type="submit"] {
    margin: 0.5rem;
  }
}
</style>
