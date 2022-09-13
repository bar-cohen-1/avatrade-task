<template>
  <form @submit.prevent="onSubmit">
    <slot></slot>
  </form>
</template>

<script lang="ts">
export default {
  methods: {
    onSubmit() {
      // logic here...
    },
  },
};
</script>

<style scoped lang="scss"></style>
