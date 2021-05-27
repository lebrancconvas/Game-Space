<template>
  <div>
    <h1>Game List</h1>
    <br>
    <hr>
    <br>
    <div class="container">
      <div class="row">
        <div class="col">
          <Monhunt />
        </div>
        <div class="col">
          <Nier />
        </div>
        <div class="col">
          <Resident />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Monhunt from '@/components/listgame/Monhunt.vue';
import Nier from '@/components/listgame/Nier.vue';
import Resident from '@/components/listgame/Resident.vue'
export default {
  name: "List",
  components: {
    Monhunt,
    Nier,
    Resident,
  }
};
</script>

<style scoped></style>
