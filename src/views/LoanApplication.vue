<template>
  <div class="flex justify-center mt-10">
    <div class="flex flex-col content-center">
      <h1 class="text-black dark:text-white text-4xl">Review Loan</h1>

      <div class="flex justify-center pt-4">
        <div class="flex flex-col">
          <h2 class="text-black dark:text-white pr-6 pt-2 text-3xl">
            Månadskostnad: {{ Math.round($store.state.monthCost) }} kr
          </h2>
          <h2 class="text-black dark:text-white pr-6 pt-2 text-3xl">
            Lånebelopp:
            {{ Number($store.state.lanebelopp).toLocaleString() }} kr
          </h2>
          <h2 class="text-black dark:text-white pt-2 text-3xl">
            Tid: {{ Number($store.state.lanetid).toLocaleString() }} år
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const LoanApplication = defineComponent({});

export default LoanApplication;
</script>

<style></style>
