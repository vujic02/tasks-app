<template>
  <div class="flex">
    <Sidebar />
    <Overview />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Overview from './components/Overview.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Overview
  }
}
</script>

<style>
#app {
  background: #FDFDFD;
}
.roboto {
  font-family: 'Roboto', sans-serif;
}
.red-hat {
  font-family: 'Red Hat Display', sans-serif;
}
</style>
