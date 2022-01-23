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
        min="0"
        max="350000"
        v-model="rangeValue"
        placeholder="350 000 kr"
        @change="changeValue"
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
      rangeValue: 0,
    };
  },
  methods: {
    changeValue: function () {
      this.$store.commit("changeLaneBeloppValue", this.rangeValue);
    },
  },
});

export default LaneBelopp;
</script>

<style></style>
