<template>
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
    <p class="text-black dark:text-white pl-4">
      {{ Number(rangeValue).toLocaleString() }}
      År
    </p>
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
      console.log(this.rangeValue);
      this.$store.commit("changeLaneTid", this.rangeValue);
    },
  },
});

export default LaneTid;
</script>

<style></style>
