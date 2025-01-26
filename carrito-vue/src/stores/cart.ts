import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  quantity: number;
}

interface CartState {
  products: Product[];
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    products: [],
  }),
  getters: {
    total: (state) => state.products.reduce((sum, p) => sum + p.price * p.quantity, 0),
  },
  actions: {
    addProduct(product: Product) {
      const existing = this.products.find((p) => p.id === product.id);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        this.products.push({ ...product });
      }
    },
    removeProduct(id: number) {
      this.products = this.products.filter((p) => p.id !== id);
    },
    updateQuantity(id: number, quantity: number) {
      const product = this.products.find((p) => p.id === id);
      if (product) product.quantity = quantity;
    },
    clearCart() {
      this.products = [];
    },
  },
});