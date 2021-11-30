<template>
  <div class="grid xl:grid-cols-3 grid-cols-1 w-full gap-x-10 xl:mx-32 mx-8">
    <div class="faded-green w-full h-full flex flex-col p-4 px-8 rounded-xl">
      <div class="flex flex-row justify-between">
        <h2 class="roboto text-lg font-normal">To do</h2>
        <div class="number-of-tasks roboto font-medium">2</div>
      </div>
      <div class="green rounded-xl flex justify-center items-center h-16 mt-8 cursor-pointer border border-transparent hover:border-green-300 mb-4">
        <img src="../assets/image7.png" >
      </div>
      <Task />
      <button @click="register('nikola@vujic.com', 'nikola123')">Register</button>
    </div>
  </div>
</template>


<script>
import Task from "../components/Task.vue"

export default {
  name: "Overview",
  components: {
    Task
  },
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