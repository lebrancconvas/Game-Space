<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/desk.png" />
    </div>
    <div>
      <Hello />
      <Sign />
    </div>
  </div>

</template>

<script>
import Hello from "@/components/Hello.vue";
import Sign from "@/components/Sign.vue";
export default {
  name: "Home",
  components: {
    Hello,
    Sign,
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
