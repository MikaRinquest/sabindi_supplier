<template>
  <div class="holder">
    <div class="products">
      <router-link to="/stores">
        <h2 class="heading">Stores</h2>
      </router-link>
    </div>
    <div class="store">
      <router-link to="/products">
        <h2 class="heading">Products</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
//
</script>

<style scoped>
.holder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.store,
.products {
  border: 1px solid lightgrey;
}

a {
  text-decoration: none;
}

.heading {
  color: black;
}
</style>
