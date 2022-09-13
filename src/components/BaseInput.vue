<template>
  <div class="base-input">
    <div class="inner-base-input" :class="{ error: !!error }">
      <input
        :id="id"
        type="text"
        :placeholder="label"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        v-bind="$attrs"
      />
    </div>
    <p class="base-input-error" v-if="!!error">
      {{ error }}
    </p>
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
    modelValue: String,
  },
  data() {
    return {
      content: this.value,
    };
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

  .inner-base-input.error {
    border-color: $error-color;
  }

  input {
    color: $text-color;
    border: none;
    outline: none;
  }
}

.base-input-error {
  color: $error-color;
  margin: 0;
  margin-top: 0.25rem;
}
</style>
