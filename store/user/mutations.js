export default {
  ADD_TO_CART(state, payload) {
    let cartProduct = state.cart.find((product) => product.id === payload.id)

    if (cartProduct) {
      cartProduct.quantity++;
    } else {
      state.cart.push({
        ...payload,
        quantity: 1
      })
    }
  },

  REMOVE_FROM_CART(state, payload) {
    let cartProduct = state.cart.find((product) => product.id === payload.id);
    cartProduct.quantity--;
  },

  DELETE_FROM_CART(state, payload) {
    let cartProductIndex = state.cart.findIndex((product) => product.id === payload.id);
    state.cart.splice(cartProductIndex, 1);
  },

  SAVE_ORDER(state, payload) {
    state.orders.push({
      ...payload,
    })
  }
}