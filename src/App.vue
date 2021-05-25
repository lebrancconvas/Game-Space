<template>
  <Navbar />
  <router-view />
  <Copyright />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Copyright from "@/components/Copyright.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Copyright,
  },
};
</script>

<style>
</style>

