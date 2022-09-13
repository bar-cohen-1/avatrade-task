<template>
  <base-view header="Deposit">
    <base-form :onSubmit="onSubmit">
      <base-input
        v-model="data.creditCard"
        :error="error.creditCard"
        @blur="validate"
        maxlength="16"
        label="Credit Card"
      />
      <base-input
        v-model="data.expiryDate"
        :error="error.expiryDate"
        @blur="validate"
        maxlength="4"
        label="Expire"
      />
      <base-input
        v-model="data.cvv"
        :error="error.cvv"
        @blur="validate"
        maxlength="3"
        label="CVV"
      />
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
        const _key = key as keyof DepositForm;
        if (!this.data[_key]) {
          errors[_key] = "this field is required";
        }
      });
      this.error = errors;
      return !Object.keys(errors).length;
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
