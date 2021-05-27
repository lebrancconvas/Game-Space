<template>
  <div>
    <Navbar />
    <div>
      <p class="text-center h2">Login</p>
      <form>
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
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
    <Copyright />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Copyright from "@/components/Copyright.vue";
export default {
  name: "Login",
  components: {
    Navbar,
    Copyright,
  }
};
</script>

<style scoped></style>
