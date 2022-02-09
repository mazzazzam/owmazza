<template>
  <div class="card">
    <div class="info">
      <img :src="product.imageUrl" :alt="product.name">
      <p class="category">{{ product.category }}</p>
      <p class="title">{{ product.name }}</p>
      <p class="price">R${{ product.price }}</p>
      <p class="installment">em até 12x {{ installment }} sem juros</p>
    </div>
    <div class="cardBtn">ADICIONAR AO CARRINHO</div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },

  computed: {
    installment() {
      let installmentVal = this.product.price / 12;
      return (Math.round(installmentVal * 100) / 100).toFixed(2);
    }
  }
}
</script>

