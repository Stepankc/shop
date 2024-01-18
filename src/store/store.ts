import { createStore } from "vuex";
import { formatPrice } from "../utils/formatPrice";

interface RootState {
  cart: CartProduct[];
  item: Product[];
}

const store = createStore({
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
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart(state: RootState, productId: number): void {
      state.cart = state.cart.filter((item: Product) => {
        return item.id !== productId;
      });
      sessionStorage.setItem("cart", JSON.stringify(state.cart));
    },
    setItems(state: RootState, items: Product[]): void {
      state.item = items;
      sessionStorage.setItem("items", JSON.stringify(items));
    },
    setItem(state: RootState, item: Product): void {
      state.item.push(item);
      sessionStorage.setItem("items", JSON.stringify(state.item));
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
        sessionStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    setCart(state: RootState, cart: CartProduct[]): void {
      state.cart = cart;
    },
  },
  actions: {
    saveCartBeforeUnload({ commit }): void {
      commit("setCart", JSON.parse(sessionStorage.getItem("cart") || "[]"));
    },
    addToCart({ commit, dispatch, state }, product: CartProduct): void {
      if (!state.cart.some((item) => item.id === product.id)) {
        product.quantity = 1;
        commit("setCart", [...state.cart, product]);
        dispatch("saveCartBeforeUnload");
      }
    },
  },
});

const cartFromStorage = sessionStorage.getItem("cart");
const itemsFromStorage = sessionStorage.getItem("items");

if (cartFromStorage) {
  store.commit("setCart", JSON.parse(cartFromStorage));
}

if (itemsFromStorage) {
  store.commit("setItems", JSON.parse(itemsFromStorage));
}

window.addEventListener("beforeunload", () => {
  store.dispatch("saveCartBeforeUnload");
});

export default store;
