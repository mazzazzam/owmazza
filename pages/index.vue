<template>
  <div class="container-fluid">
    <div class="row">
      <BannerHome />
    </div>

    <div class="container">
      <div class="row">
        <div class="col">
          <Search />
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4 col-sm-12 mb-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // products: [],
    };
  },

  computed: {
    products() {
      return this.$store.state.products.products;
    },
  },

  async created() {
    await this.$store.dispatch("products/getProducts");
    // .then((response) => {
    // this.products = response
    // console.log(response)
    // })
  },
};
</script>
