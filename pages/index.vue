<template>
  <div class="container-fluid">
    <div class="row">
      <BannerHome />
    </div>

    <div class="container">

      <div class="row my-4">
        <div class="col-md-3">
          <p>Encontre seu Produto:</p>
        </div>
        <div class="col-md-9">
          <input type="text" class="searchInput" v-model="search" placeholder="o que você procura?">
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-4 col-sm-12 mb-4"
          v-for="product in searchFilter"
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
      search: '',
    };
  },

  computed: {
    products() {
      return this.$store.state.products.productsList;
    },

    searchFilter() {
      return this.$store.state.products.productsList.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    cart() {
      return this.$store.state.user.cart;
    }
  },

  methods: {
    async loadProducts() {
      await this.$store.dispatch("products/getProducts")
    }
  },

  mounted() {
    this.loadProducts()
  },
};
</script>
