<template>
  <base-view header="Login">
    <base-form :onSubmit="onSubmit">
      <base-input v-model="username" label="Username" />
      <base-input v-model="password" type="password" label="Password" />
    </base-form>
  </base-view>
</template>

<script lang="ts">
import { URL } from "@constants/url";
import { LoginForm } from "@type/index";
import { defineComponent } from "vue";

export default defineComponent({
  data(): LoginForm {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("login", this.$data);
      this.$router.push(URL.DEPOSIT);
    },
  },
});
</script>
