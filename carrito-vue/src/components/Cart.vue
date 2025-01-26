<template>
    <div class="p-4 w-1/2">
      <h1 class="text-xl font-bold mb-4">Your Cart</h1>
      <ul>
        <li v-for="product in store.products" :key="product.id" class="flex justify-between items-center mb-2">
          <div>
            <p>{{ product.name }}</p>
            <p>Quantity: {{ product.quantity }}</p>
          </div>
          <div>
            <p>Total: ${{ product.price * product.quantity }}</p>
            <button @click="removeProduct(product.id)" class="text-red-500">Remove</button>
          </div>
        </li>
      </ul>
      <button @click="clearCart" class="bg-red-500 text-white px-4 py-2 mt-4">Clear Cart</button>
      <p class="text-right mt-4 font-bold">Total: ${{ getTotal() }}</p>
    </div>
  </template>
  
  <script setup>
  import { useCart } from '@/composables/useCart';
  
  const { store, removeProduct, clearCart, getTotal } = useCart();
  </script>