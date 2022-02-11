export default {
  addToCart(context, product) {
    context.commit('ADD_TO_CART', product);
    context.commit("toast/showToast", "Adicionado no Carrinho!", { root: true });
  },

  removeFromCart(context, product) {
    context.commit('REMOVE_FROM_CART', product)
  },

  deleteFromCart(context, product) {
    context.commit('DELETE_FROM_CART', product)
    context.commit("toast/showToast", "Removido do carrinho!", {
      root: true,
    });

  }
}