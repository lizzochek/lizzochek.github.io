import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
  },
  getters: {
    getProducts() {
      return this.state.products;
    },
  },
  mutations: {
    async fetchProducts() {
      const products = [];
      for (let i = 1; i < 13; i++) {
        let res = await fetch(`https://fakestoreapi.com/products/${i}`);
        let { title, image, price } = await res.json();
        products.push({ title, image, price });
      }
      this.state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      commit('fetchProducts');
    },
  },
});
