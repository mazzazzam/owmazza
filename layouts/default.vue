<template>
  <div>
    <Navbar />
    <Nuxt class="main"/>
    <Footer />
    <toast
      :show="toast.show"
      :text="toast.text"
      @hide-toast="hideToast"
    ></toast>
  </div>
</template>

<script>
export default {
  computed: {
    toast() {
      return this.$store.getters['toast/toast'];
    },
  },
  methods: {
    hideToast() {
      this.$store.commit("toast/hideToast", "added", { root: true });
    },
  },
};
</script>
