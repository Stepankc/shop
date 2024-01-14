import { createStore } from "vuex";
import Product from "../components/Types";
import { formatPrice } from "../utils/formatPrice";

interface RootState {
  cart: Product[];
}

export default createStore({
  state: {
    cart: [],
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
  },
  actions: {},
});
