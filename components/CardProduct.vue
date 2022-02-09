<template>
  <div class="card">
    <div class="info">
      <img :src="product.imageUrl" :alt="product.name">
      <p>{{ product.category }}</p>
      <p>{{ product.name }}</p>
      <p>R${{ product.price }}</p>
    </div>
    <div class="cardBtn">ADICIONAR AO CARRINHO</div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  min-height: 400px;
  // padding: 10px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);
  box-shadow: 0px 0px 5px 0px rgba(209,209,209,1);

  img {
    width: 100%;
  }

  .info {
    padding: 10px;
  }

  .cardBtn {
    // width: 100%;
    min-height: 30px;
    border-top: 1px solid blue;
  }
}
</style>