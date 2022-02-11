<template>
  <div class="container">
    <form @submit="orderPlaced()">
    <div class="row mt-5">
      <div class="col-md-6">

        <label for="name">Nome completo:</label>
        <input type="text" id="name" name="name" class="mt-1 mb-4" v-model="user.name" required>

        <label for="email">E-mail:</label>
        <input type="text" id="email" name="email" class="mt-1 mb-4" v-model="user.email">

        <label for="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" class="mt-1 mb-4" v-model="user.cpf" v-mask="'###.###.###-##'">

        <div class="row">
          <div class="col-6">
            <label for="birth">Data de Nascimento:</label>
            <input type="text" id="birth" name="birth" class="mt-1 mb-4" v-mask="'##/##/####'" v-model="user.birth">
          </div>

          <div class="col-6">
            <label for="phone">Telefone Celular:</label>
            <input type="text" id="phone" name="phone" class="mt-1 mb-4" v-mask="'(##) #####-####'" v-model="user.phone">
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="row">
          <div class="col-5">
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" class="mt-1 mb-4" v-model="cep" @keyup="searchCep()" v-mask="'#####-###'">
          </div>
          <div class="col d-flex align-items-center">
            <p v-if="data.erro" class="hintError">CEP não encontrado. Verifique o CEP digitado.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <label for="address">Endereço:</label>
            <input type="text" id="address" name="address" class="mt-1 mb-4" v-model="data.logradouro" readonly>
          </div>
          <div class="col-3">
            <label for="addressnumber">Número:</label>
            <input type="text" id="addressnumber" name="addressnumber" class="mt-1 mb-4" v-model="data.numero">
          </div>
        </div>
        
        <div class="row">
          <div class="col-6">
            <label for="addressadd">Complemento:</label>
            <input type="text" id="addressadd" name="addressadd" class="mt-1 mb-4">
          </div>
          <div class="col-6">
            <label for="neighborhood">Bairro:</label>
            <input type="text" id="neighborhood" name="neighborhood" class="mt-1 mb-4" v-model="data.bairro" readonly>
          </div>
        </div>
        
        <div class="row">
          <div class="col-9">
            <label for="city">Cidade:</label>
            <input type="text" id="city" name="city" class="mt-1 mb-4" v-model="data.localidade" readonly>
          </div>
          <div class="col-3">
            <label for="uf">Estado:</label>
            <input type="text" id="uf" name="uf" class="mt-1 mb-4" v-model="data.uf" readonly>
          </div>
        </div>

      </div>
      
    </div>

    <div class="row my-5">
      <div class="col-6">
        <NuxtLink to="/cart">
          <button class="btn btn-secondary">Voltar para Carrinho</button>
        </NuxtLink>
      </div>

      <div class="col-6 text-right">
          <button class="btn" type="submit">Finalizar Compra</button>
      </div>
    </div>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cep: '',
      data: {},
      messageCep: null,
      baseUrl: 'https://viacep.com.br/ws/',

      user: {
        name: '',
        email: '',
        cpf: '',
        birth: '',
        phone: '',
      }
    }
  },

  methods: {
    searchCep() {
      const cep = this.cep.replace(/-/g,"")
      const url = `${this.baseUrl}${cep}/json/`
      if (cep.length == 8) {
        console.log(url)
        this.$axios.$get(url)
        .then(response => this.data = response)
        .catch(error => console.log(error))
      }
    },

    orderPlaced(order) {
      this.$store.dispatch("user/saveOrder", order)
      console.log(order)
      alert('boa neideee!')
    }

  }
}
</script>