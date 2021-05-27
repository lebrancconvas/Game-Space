<template>
    <div id="firstpage">
        <Hello />
        <h3>Please Login before using this website.</h3>
        <input type="button" class="btn btn-primary" value="Login">
    </div>
</template>

<script>
import Hello from "@/components/Hello.vue";
export default {
    name: "Firstpage",
    components: {
        Hello,
    }
};
</script>

<style scoped>
    #firstpage {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px; 
        margin-top: -25px; 
    }
</style>