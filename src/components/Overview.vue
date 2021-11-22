<template>
  <div class="grid grid-cols-3 w-full gap-x-10 mx-32">
    <div class="faded-green w-full h-full flex flex-col p-4 px-8 rounded-xl">
      <div class="flex flex-row justify-between">
        <h2 class="roboto text-lg font-normal">To do</h2>
        <div class="number-of-tasks roboto font-medium">2</div>
      </div>
      <div class="green rounded-xl flex justify-center items-center h-16 mt-8 cursor-pointer border border-transparent hover:border-green-300">
        <img src="../assets/image7.png" >
      </div>
      <div class="bg-white border border-gray-200 p-4 rounded-xl">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <div class="w-1 h-1 rounded-full bg-red-500 mr-1"></div>
            <h2 class="roboto text-lg font-semibold">Design</h2>
          </div>
          <p class="text-gray-400 font-bold roboto text-xs">High priority</p>
        </div>
        <div class="mt-2">
          <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur felis nibh, sed efficitur diam ultrices vitae. Donec venenatis est quis magna molestie condimentum. Duis faucibus viverra ante, sagittis varius sem malesuada at. </p>
        </div>
        <div class="flex justify-start items-center mt-4">
          <div class="flex justify-center items-center rounded-full bg-green-500 icon">
            <img src="../assets/check-mark.svg" class="w-2/3 h-2/3">
          </div>
          <div class="flex justify-center items-center rounded-full bg-blue-500 icon ml-2">
            <img src="../assets/loading.svg" class="w-2/3 h-2/3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
}
</script>

<style scoped>
  .faded-green {
    background: rgba(180, 245, 187, 0.13)
  }
  .green {
    background: rgba(158, 231, 165, 0.15)
  }
  .number-of-tasks {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(158, 231, 165, 0.2);
    color: #62BC6B;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 27px;
    height: 27px;
  }
</style>