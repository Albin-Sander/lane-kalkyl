<script setup lang="ts">
import LaneBelopp from "./components/LaneBelopp.vue";
import LaneTid from "./components/LaneTid.vue";
import Button from "./components/Button.vue";
</script>

<template>
  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col">
      <LaneBelopp class="flex content-center" />
      <LaneTid class="mt-8" />
      <div class="flex justify-end">
        <Button class="justify-self-end" />
      </div>
    </div>
  </div>
</template>

<style></style>
