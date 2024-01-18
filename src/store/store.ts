import { createStore } from "vuex";
import { formatPrice } from "../utils/formatPrice";

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
    getItemById:
      (state: RootState) =>
      (itemId: number): Product | undefined => {
        const foundProduct = state.item.find(
          (element) => element.id === itemId
        );
        return foundProduct;
      },
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
    setItem(state: RootState, item: Product): void {
      state.item.push(item);
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
  actions: {},
});
