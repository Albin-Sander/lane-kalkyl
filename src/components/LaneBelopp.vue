<template>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <p class="text-black dark:text-white ml-12">
        {{ Number(rangeValue).toLocaleString() }}
        kr
      </p>
    </div>
    <div class="flex flex-row mt-1">
      <p class="text-black dark:text-white pr-4">Lånebelopp</p>

      <input
        type="range"
        min="20000"
        max="200000"
        v-model="rangeValue"
        placeholder="350 000 kr"
        @change="changeValue"
        step="10000"
        class="range range-lg w-96 rounded-lg range-primary"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const LaneBelopp = defineComponent({
  data() {
    return {
      rangeValue: 20000,
    };
  },
  methods: {
    changeValue: function () {
      this.$store.commit("changeLaneBeloppValue", this.rangeValue);
      this.$store.commit("changeMonthlyCost");
    },
  },
});

export default LaneBelopp;
</script>

<style></style>
