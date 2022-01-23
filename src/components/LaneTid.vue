<template>
  <div class="flex flex-col ml-8">
    <div class="flex justify-center">
      <p class="text-black dark:text-white ml-12">
        {{ Number(rangeValue).toLocaleString() }}
        År
      </p>
    </div>
    <div class="flex flex-row">
      <p class="text-black dark:text-white pr-4">Lånetid</p>

      <input
        type="range"
        min="0"
        max="15"
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
const LaneTid = defineComponent({
  data() {
    return {
      rangeValue: 0,
    };
  },
  methods: {
    changeValue: function () {
      this.$store.commit("changeLaneTid", this.rangeValue);
    },
  },
});

export default LaneTid;
</script>

<style></style>
