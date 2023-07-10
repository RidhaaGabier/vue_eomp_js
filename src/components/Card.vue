<template>
    <div class="card">
      <img
        :src="product.image"
        class="card-img-top"
        style="padding: 0.6rem"
        height="450"
      />
      <div class="card-body">
        <h5 class="card-title">R&amp;G</h5>
        <p>{{ product.desc }}</p>
        <p>{{ product.price }}</p>
        <button class="btn btn-product" @click="addToCart(1)">Buy Now</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["product"],
  }
  </script>


