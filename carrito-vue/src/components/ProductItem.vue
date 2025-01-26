<template>
  <div class="p-4 border rounded-lg">
    <h2 class="text-lg font-bold mb-2">{{ product.name }}</h2>
    <img :src="product.image" alt="product.name" class="w-full h-96 object-contain" />
    <p class="text-sm">Price: ${{ product.price }}</p>
    <input v-model.number="quantity" type="number" class="mt-2 border p-1" placeholder="Quantity" />
    <button @click="addToCart" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
      Add to Cart
    </button>
    <p v-if="showMessage" class="text-green-500 mt-2">Added to cart successfully!</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCart } from '@/composables/useCart';
import type { Product } from '@/stores/cart';

const props = defineProps({
  product: Object as () => Product,
});
const quantity = ref(1);
const showMessage = ref(false);
const { addProduct } = useCart();

const addToCart = () => {
  if (quantity.value <= props.product.stock) {
    addProduct({ ...props.product, quantity: quantity.value });
    showMessage.value = true;
    setTimeout(() => (showMessage.value = false), 2000);
  } else {
    alert('Insufficient stock!');
  }
};
</script>