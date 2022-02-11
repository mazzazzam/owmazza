<template>
  <nav id="navbar">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <NuxtLink to="/" class="logo">
          <div class="col">MktPlace</div>
        </NuxtLink>
        <div class="col text-right hide-sm">
          <NuxtLink to="/" class="linkNav">
            <p>Produtos</p>
          </NuxtLink>
        </div>
        
        <div class="col-md-2 col-6 d-flex justify-content-end">
          <NuxtLink to="/cart" class="btn btn-cart d-flex align-items-center justify-content-center">
            <img src="@/assets/img/shopping-cart.svg" alt="cart">
            <span class="badge">{{ cartItems }}</span>
          </NuxtLink>

        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters['user/cartSize']
    }
  }
}
</script>