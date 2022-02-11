export default {
  cartSize: (state) => {
    //   return state.cart.length;
    return state.cart.reduce((total, product) => {
        return total + product.quantity
    }, 0);
  },

  cartTotalAmount: (state) => {
      return state.cart.reduce((total, product) => {
          return total + (product.price * product.quantity);
      }, 0);
  },
}
