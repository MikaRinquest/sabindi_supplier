<template>
  <v-container class="d-flex flex-wrap">
    <div class="w-25" v-for="(item, i) in items" :key="i">
      <v-card class="card mb-3">
        <v-img :src="item.image" height="200" cover></v-img>
        <v-card-title>{{ item.name }}</v-card-title>
        <v-card-subtitle>{{ item.price }}</v-card-subtitle>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Carpentry",
  data() {
    return {
      search: "",
    };
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<style>
.card {
  width: 90%;
}
</style>
