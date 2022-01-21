<template>
  <button
    class="btn btn-primary bg-green-500 hover:bg-green-600"
    v-on:click="addRoute"
  >
    Till ansökan
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "../router";
import LoanApplication from "../views/LoanApplication.vue";

// /loan-application/?amount=100000&months=120

const Button = defineComponent({
  methods: {
    addRoute: async function () {
      let path = `?amount=${this.$store.state.lanebelopp}&months=${this.$store.state.lanetid}`;
      console.log(router.getRoutes());
      router.addRoute("LoanApplication", {
        path: path,
        component: LoanApplication,
      });
      await router.replace(`/loan-application/${path}`);
    },
  },
});

export default Button;
</script>

<style></style>
