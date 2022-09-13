<template>
  <div class="base-input">
    <div class="inner-base-input">
      <input :id="id" type="text" :placeholder="label" v-bind="$attrs" />
    </div>
    <span class="base-input-error" v-if="!!error">
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      required: true,
      type: String,
    },
    id: String,
    error: String,
  },
});
</script>

<style scoped lang="scss">
@import "@style/colors.scss";

.base-input {
  width: 100%;

  .inner-base-input {
    border-radius: 4px;
    padding: 0.75rem 0.6rem;
    border: 2px solid $border-dark;
  }

  input {
    border: none;
    color: $text-color;
    outline: none;
  }
}

.base-input-error {
  color: $error-color;
}
</style>
