<template>
 <div class="card" style="width: 18rem;" id="resident">
  <img class="card-img-top" src="@/assets/game/revillage.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Resident Evil Village</h5>
    <p class="card-text">
      Release Date: 7 May 2021
      <br>
      Developer: Capcom 
      <br>
      Publisher: Capcom
    </p>
    <div>
      <button class="btn btn-primary">Add to Wishlist</button>
      <button class="btn btn-success">Buy</button>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: "Resident",
}
</script>

<style scoped>
#resident {
  height: 100%;
  margin: 0px 0px 50px 20px;
}

</style>
    
