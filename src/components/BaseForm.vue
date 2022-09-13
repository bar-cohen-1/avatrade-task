<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    onSubmit() {
      // logic here...
    },
  },
});
</script>

<style scoped lang="scss"></style>
