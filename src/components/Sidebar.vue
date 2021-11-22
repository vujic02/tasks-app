<template>
  <div class="bg-white h-screen flex flex-col justify-between sm:items-start items-center p-8 sm:w-80 w-40 shadow-xl border-r border-gray-200">
      <h2
        class="font-semibold sm:text-3xl sm:ml-4 text-xl m-0 red-hat"
      >
        Tasks App
      </h2>
      <div class="flex flex-col">
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image1.png">
          <h3
            class="font-medium text-xl ml-4 hidden sm:block roboto"
          >
            Overview
          </h3>
        </a>
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image2.png">
          <h3
            class="font-medium text-xl ml-4 hidden sm:block roboto"
          >
            Stats
          </h3>
        </a>
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image3.png">
          <h3
            class="font-medium text-xl ml-4 hidden sm:block roboto"
          >
            Projects
          </h3>
        </a>
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image4.png">
          <h3
            class="font-medium text-xl ml-4 hidden sm:block roboto"
          >
            Calendar
          </h3>
        </a>
      </div>
      <div class="flex flex-col">
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image5.png">
          <h3
            class="font-light text-xl ml-4 hidden sm:block roboto"
          >
            Settings
          </h3>
        </a>
        <a href="#" class="flex w-full items-center my-4">
          <img src="../assets/image6.png">
          <h3
            class="font-light text-xl ml-4 hidden sm:block roboto"
          >
            Log Out
          </h3>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.roboto {
  font-family: 'Roboto', sans-serif;
}
.red-hat {
  font-family: 'Red Hat Display', sans-serif;
}
</style>