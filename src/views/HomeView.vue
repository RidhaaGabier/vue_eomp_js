<template>
  <div class="home">
   <h1>This is home page</h1>
           <!-- Modal -->
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" style="font-weight: 900;" id="exampleModalLabel">Cart</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Content -->

                    <!-- show item in cart -->
                    <div id="display-item">
                    </div>

                    <!-- show the total price -->

                    <div id="total-amount"></div>

                    <button class="btn btn-product" onclick="removeAllItems()">Purchase</button>
                    <!-- End of content -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    
    <section id="hero">
    <h4 class="resp-text">We believe</h4>
    <h2 class="resp-text">Beauty has no barriers with</h2>
    <h1 class="resp-text">R&G Clothing</h1>
    <p class="resp-text">We only serve looks with a tot of originality</p>
   <a href="/html/product.html"><button class="btn btn bg-light p-0 px-4">Shop Now <i class="fa-solid fa-arrow-right"></i></button></a> 
  </section>

  <div class="category" id="category">
    <div class="category-title">
      <h2 class="line-head" style="margin: 2rem;letter-spacing: 8px;">R&G Clothing</h2>
    </div>
    <div class="category-box">
      <div class="box woman-box">
        <div class="box-content b2">
          <h3>Most bought products</h3>
          <label>Woman</label>
          <a class="feature-btn" href="/html/product.html">Go Here</a>
        </div>
        <img src="https://i.postimg.cc/52jgCFqF/210928211546-leather-allsaints-elora-leather-biker-jacket.jpg" loading="lazy" class="image-feature">
      </div>
      <div class="box man-box">
        <div class="box-content b2">
          <h3>Most popular styles</h3>
          <label>R & G</label>
          <a class="feature-btn" href="/html/product.html">Go Here</a>
        </div>
        <img src="https://i.postimg.cc/52jgCFqF/210928211546-leather-allsaints-elora-leather-biker-jacket.jpg" loading="lazy" class="image-feature">
      </div>
    </div>
  </div>
<!-- End of navbar section -->

  <!-- Card section -->
  <h2 class="line-heading" style="text-align: center;letter-spacing: 8px;margin: 2rem;">Checkout our latest fits</h2>

  <section class="banner_section">
 
  <div class="container products">
     <div class="row d-flex justify-content-center">
     </div>
   </div>
 </section>
<!-- end of card section -->
  </div>

</template>

<script>

import Card from '@/components/Card.vue'

export default {
  name: 'HomeView',
  components: {Card}
}
</script>





<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
