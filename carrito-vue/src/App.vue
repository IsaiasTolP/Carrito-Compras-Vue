<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:underline">Tienda</router-link></li>
        <li><router-link to="/cart" class="hover:underline">Carrito</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>