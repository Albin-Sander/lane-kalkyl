<template>
  <div
    class="border-solid border-2 border-purple-600 p-4 rounded-lg bg-primary"
  >
    <p class="text-white">Exempel på månadskostnad</p>
    <p class="text-white">
      {{ Math.round(this.$store.state.monthCost) }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: "Bubble",

  methods: {
    calculateRate: function () {
      this.$store.commit(
        "changeMonthlyCost",
        this.$store.state.lanebelopp,
        this.$store.state.lanetid
      );
    },
  },
};
</script>

<style></style>
