import { createStore } from "vuex";
import Product from "../components/Types";
import { formatPrice } from "../utils/formatPrice";
import { fetchProducts } from "../api";

interface RootState {
  cart: Product[];
  item: Product[];
}

export default createStore({
  state: {
    cart: [],
    item: [],
  },
  getters: {
    totalPrice: (state: RootState) =>
      formatPrice(state.cart.reduce((acc, item) => acc + item.price, 0)),
  },

  mutations: {
    addToCart(state: RootState, product: Product): void {
      if (!state.cart.some((item) => item.id === product.id)) {
        state.cart.push(product);
      } else {
        console.log("добавлен");
      }
    },
    removeFromCart(state: RootState, productId: number): void {
      state.cart = state.cart.filter((item: Product) => item.id !== productId);
      console.log(state.cart);
    },
    setItems(state: RootState, items: Product[]): void {
      state.item = items;
    },
  },
  actions: {
    async fetchProducts({ commit }): Promise<void> {
      try {
        const data = await fetchProducts();
        commit("setItems", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
});
