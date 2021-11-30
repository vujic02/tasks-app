<template>
  <div class="bg-white border border-gray-200 p-4 rounded-xl break-words ">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="w-1 h-1 rounded-full bg-red-500 mr-1"></div>
        <h2 class="roboto text-lg font-semibold">Design</h2>
      </div>
      <p class="text-gray-400 font-bold roboto text-xs">High priority</p>
    </div>
    <div class="mt-2">
      <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur felis nibh, sed efficitur diam ultrices vitae. Donec venenatis est quis magnmlestie  condimentum. Duis faucibus viverra ante, sagittis varius sem malesuada at. </p>
    </div>
    <div class="flex justify-start items-center mt-4">
      <div class="flex justify-center items-center rounded-full bg-green-500 icon">
        <img src="../assets/check-mark.svg" class="w-5 h-5">
      </div>
      <div class="flex justify-center items-center rounded-full bg-blue-500 icon ml-2">
        <img src="../assets/loading.svg" class="w-5 h-5">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task"
}
</script>

<style>

</style>