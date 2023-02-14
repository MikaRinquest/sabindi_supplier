<template>
  <div class="holder">
    <div>
      <router-link class="link" to="/electrical">Electrical</router-link>
    </div>
    <div>
      <router-link class="link" to="/carpentry">Carpentry</router-link>
    </div>
    <div><router-link class="link" to="/plumbing">Plumbing</router-link></div>
    <div>
      <router-link class="link" to="/construction">Construction</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
};
</script>

<style>
.holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>
