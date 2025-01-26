<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script setup>
  import ProductItem from '@/components/ProductItem.vue';
  
  const products = [
    { id: 1, name: 'Shirt', price: 20, image: 'src/assets/shirt.jpg', stock: 10 },
    { id: 2, name: 'Jeans', price: 40, image: 'src/assets/jeans.jpg', stock: 5 },
    { id: 3, name: 'Hat', price: 15, image: 'src/assets/hat.jpg', stock: 8 },
    { id: 4, name: 'Shoes', price: 50, image: 'src/assets/shoes.jpg', stock: 7 },
    { id: 5, name: 'Jacket', price: 60, image: 'src/assets/jacket.jpg', stock: 4 },
  ];
  </script>