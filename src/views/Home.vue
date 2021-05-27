<template>
  <div>
    <Navbar />
    <div class="home">
      <div>
        <img alt="Vue logo" src="../assets/desk.png" />
      </div>
      <div>
        <Hello />
      </div>
    </div>
    <Copyright />
  </div>

</template>

<script>
import Hello from "@/components/Hello.vue";
import Navbar from "@/components/Navbar.vue";
import Copyright from "@/components/Copyright.vue";
export default {
  name: "Home",
  components: {
    Hello,
    Navbar,
    Copyright,
  },
};
</script>

<style scoped>
.home img {
  width: 200px;
  height: 205px;
  margin: 10px 10px 20px 10px;
}
</style>
