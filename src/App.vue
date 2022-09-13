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
