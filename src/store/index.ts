import { createStore } from "vuex";
import { formatPrice } from "../utils/formatPrice";
import { fetchProducts } from "../api";

interface RootState {
  cart: CartProduct[];
  item: Product[];
}

export default createStore({
  state: {
    cart: [],
    item: [],
  },
  getters: {
    totalPrice: (state: RootState) =>
      formatPrice(
        state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      ),
  },

  mutations: {
    addToCart(state: RootState, product: CartProduct): void {
      if (!state.cart.some((item) => item.id === product.id)) {
        product.quantity = 1;
        state.cart.push(product);
      }
    },
    removeFromCart(state: RootState, productId: number): void {
      state.cart = state.cart.filter((item: Product) => item.id !== productId);
    },
    setItems(state: RootState, items: Product[]): void {
      state.item = items;
    },
    updateQuantity(
      state: RootState,
      payload: { id: number; value: number }
    ): void {
      const foundProduct = state.cart.find(
        (element) => element.id === payload.id
      );

      if (foundProduct) {
        foundProduct.quantity = payload.value;
      }
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
