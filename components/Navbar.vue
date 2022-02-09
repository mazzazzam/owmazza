<template>
  <nav id="navbar">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <NuxtLink to="/">
          <div class="col logo">MktPlace</div>
        </NuxtLink>
        <div class="col">
          <p>Produtos</p>
        </div>
        <div class="col text-right">
        
          <NuxtLink to="/cart" class="button">
            <img src="@/assets/img/shopping-cart.svg" alt="cart">
          </NuxtLink>

        </div>
      </div>
    </div>
  </nav>
</template>
