<template>
  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col">
      <div class="flex justify-end mb-10 mt-10">
        <Bubble />
      </div>
      <LaneBelopp class="flex content-center" />
      <LaneTid class="mt-8" />
      <div class="flex justify-end">
        <Button class="justify-self-end mt-2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LaneBelopp from "../components/LaneBelopp.vue";
import LaneTid from "../components/LaneTid.vue";
import Button from "../components/Button.vue";
import Bubble from "../components/Bubble.vue";

const Home = defineComponent({
  components: {
    LaneBelopp,
    LaneTid,
    Button,
    Bubble,
  },
  mounted() {
    this.$store.commit("changeMonthlyCost");
  },
});

export default Home;
</script>

<style></style>
