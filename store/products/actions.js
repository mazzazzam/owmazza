export default {
  getProducts(context) {
    return this.$axios.$get('https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json')
    .then((response) => {
      context.commit('STORE', response)
    })
  }
}