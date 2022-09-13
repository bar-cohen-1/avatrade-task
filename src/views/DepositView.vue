<template>
  <base-view header="Deposit">
    <base-form :onSubmit="onSubmit">
      <base-input
        v-model="data.creditCard"
        required
        maxlength="16"
        label="Credit Card"
      />
      <base-input
        v-model="data.expiryDate"
        required
        maxlength="4"
        label="Expire"
      />
      <base-input v-model="data.cvv" required maxlength="3" label="CVV" />
    </base-form>
  </base-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DepositForm } from "@type/index";

type DepositFormErrors = Partial<{
  [K in keyof DepositForm]: string;
}>;

interface ComponentData {
  data: DepositForm;
  error: DepositFormErrors;
}

export default defineComponent({
  data(): ComponentData {
    return {
      data: {
        creditCard: "",
        expiryDate: "",
        cvv: "",
      },
      error: {},
    };
  },
  methods: {
    validate() {
      let errors: DepositFormErrors = {};
      Object.keys(this.data).forEach((key) => {
        // if (!this.data[key]) {
        // errors[key] = "this field is required";
        // }
      });
      this.error = errors;
      return Object.keys(errors).length === 0;
    },
    onSubmit() {
      if (this.validate()) {
        console.log("Credit Card:", this.data.creditCard);
        console.log("Expiry Date:", this.data.expiryDate);
        console.log("CVV:", this.data.cvv);
      }
    },
  },
});
</script>
