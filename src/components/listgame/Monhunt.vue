<template>
 <div class="card" style="width: 18rem;" id="monhunt">
  <img class="card-img-top" src="@/assets/game/monhunrise.jpeg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Monster Hunter Rise</h5>
    <p class="card-text">
      Release Date: 26 March 2021 
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
  name: "Monhunt",
}
</script>

<style scoped>
#monhunt {
  height: 100%;
  margin: 0px 0px 50px 20px;
}

#monhunt img {
  width: 100%;
  height: 50vh;
}
</style>
    
