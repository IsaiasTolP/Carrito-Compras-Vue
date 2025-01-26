import { useCartStore } from '@/stores/cart';

export function useCart() {
  const store = useCartStore();

  const addProduct = (product) => {
    store.addProduct(product);
  };

  const removeProduct = (id) => {
    store.removeProduct(id);
  };

  const clearCart = () => {
    store.clearCart();
  };

  const getTotal = () => {
    return store.total;
  };

  return { addProduct, removeProduct, clearCart, getTotal, store };
}