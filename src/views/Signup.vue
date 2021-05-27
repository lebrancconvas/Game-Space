<template>
  <div>
    <div>
      <p class="text-center h2">Signup</p>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Username</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Password</span>
        </div>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Confirm Password</span>
        </div>
        <input
          type="password"
          class="form-control"
          placeholder="Confirm Your Password"
          aria-label="Password"
          aria-describedby="basic-addon1"
        />
      </div>
      <input type="submit" class="btn btn-warning" value="Submit">
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style scoped></style>
