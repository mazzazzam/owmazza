<template>
  <div class="container">
    <div class="row">
      <div v-if="cartTotalAmount === 0" class="col-12 text-center empty-cart">
        <h3>Ops, seu carrinho está vazio!</h3>
        <NuxtLink to="/">
          <button class="btn btn-secondary">Continuar Comprando</button>
        </NuxtLink>
      </div>
      <div v-else class="col-12">
        <h3>Carrinho de Compras</h3>
        <table class="cartResume" width="100%">
          <thead>
            <tr>
              <td></td>
              <td>Produto</td>
              <td class="text-center">Quantidade</td>
              <td class="hide-sm">Valor Unitário</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td class="text-center" style="width: 30px">
                <button class="btn btn-delete" @click="deleteFromCart(item)"><img src="@/assets/img/garbage.svg" height="15px"></button>
              </td>
              <td>{{ item.name }}</td>
              <td class="text-center">
                  <button 
                      @click="removeFromCart(item)"
                      :disabled="item.quantity === 1"
                      class="btn btn-quantity">
                      -
                  </button>
                  <span class="mx-2">{{item.quantity}}</span>
                  <button 
                      @click="addToCart(item)" 
                      class="btn btn-quantity">
                      +
                  </button>
              </td>
              <td class="hide-sm">R${{ item.price }}</td>
              <td>R${{ (item.price * item.quantity).toFixed(2) }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="hide-sm"><strong>Total Geral:</strong></td>
              <td>
                <strong>R${{ cartTotalAmount.toFixed(2) }}</strong><br><small>em até 10x de R${{ (cartTotalAmount/10).toFixed(2) }}</small>
              </td>
            </tr>
          </tfoot>
        </table>
        
        <div class="row no-gutters">
          <div class="col-6 my-5">
            <NuxtLink to="/">
              <button class="btn btn-secondary">Continuar Comprando</button>
            </NuxtLink>
          </div>

          <div class="col-6 my-5 text-right">
            <NuxtLink to="checkout">
              <button class="btn">Ir para o Checkout</button>
            </NuxtLink>
          </div>
        </div>
        
      </div>
      
      
    </div>
  </div>
</template>

<script>
export default {

  computed: {
    cartItems() {
      return this.$store.state.user.cart;
    },

    cartTotalAmount() {
      return this.$store.getters['user/cartTotalAmount']
    }
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch('user/addToCart', product)
    },

    removeFromCart(product) {
      this.$store.dispatch('user/removeFromCart', product)
    },

    deleteFromCart(product) {
      this.$store.dispatch('user/deleteFromCart', product)
    }
  }
}
</script>