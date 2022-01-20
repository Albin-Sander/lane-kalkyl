<template>
  <div class="border-solid border-2 border-purple-600 p-4 rounded-lg">
    <p>Exempel på månadskostnad</p>
    <p>{{ $store.state.lanebelopp }} / {{ $store.state.lanetid }}</p>
  </div>
</template>

<script>
export default {
  name: "Bubble",
};
</script>

<style></style>
