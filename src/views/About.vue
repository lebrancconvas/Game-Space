<template>
  <div>
    <Navbar />
    <div class="about">
      <h1>About Me</h1>
      <div class="about-me">
        <h3 class="text-center">Poom Yimyuean</h3>
        <div></div>
      </div>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Copyright from "@/components/Copyright.vue";
export default {
  name: "About",
  components: {
    Navbar,
    Copyright,
  }
};
</script>
