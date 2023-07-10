<template>
  <div class="about">
    <h1>This is an about page</h1>
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


    <!-- Content-->

<div class="heading">
  <h1>About Us</h1>
<p>R & G clothing presents you originality at your door step</p>
</div>
<div class="container-about">
  <section class="about">
    <div class="about-image">
      <img src="https://i.postimg.cc/QMv45h13/image-1.jpg" alt="Image">
    </div>
    <div class="about-content">
      <h2>R & G Clothing</h2>
      <p>R & G was first Established in <strong>South Africa</strong> in 2023, selling ground braking designs never to be seen before. Recreating the past with the future, eventing our unique design with our signature logo representing our brand.</p>

      <p>At R & G we believe beauty has no boundaries, introducing <strong>exquisite taste</strong> with a hint of originality.</p>
    
      <p>R & G balances our clothing with natural <strong>earth friendly</strong> material but yet still luxurious as ever.</p>
    
      <p>We strongly stand firm with quality over quantity as we believe beauty takes time to morph into what we have today and that is <strong>R & G Clothing</strong>.</p>
      <a href="/html/product.html" class="read-more">R&G Products</a>
    </div>
  </section>
</div>

<!--End of Content-->

  </div>

</template>