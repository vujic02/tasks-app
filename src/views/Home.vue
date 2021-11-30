<template>
  <div class="home">
    HOME
    <div @click="gotoAbout">Go to about</div>
  </div>
</template>

<script>
import router from "../router"


export default {
  name: 'Home',
  methods: {
    gotoAbout() {
      router.push("about")
    }
  }
}
</script>
