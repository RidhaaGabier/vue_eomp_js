<template>
    <div class="contact">
     <h1>This is contact page</h1>
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
    </div>

      <!-- contact form -->

   <main id="main-Section">

<div id="contact" class="row">
  <div class="col  first">
    <div class="card left">
      <div class="hide hijab">
        <img src="https://i.postimg.cc/Tw9Y2z2J/hiijab-model-2.jpg" loading="lazy" class="pfp" />
      </div>

      <div class="text-center pb-3 add-pad bot">
        <h4><strong>R&G Clothing</strong></h4>
        <em>Contact Details:</em> <br />
        <br />
        Number: 021 967 000 <br />
        Email: R&G@gmail.com<br />
        <br />
        <p>We at R&G clothing store care about our customer's <br> feedback as we strive to serve nothing but the
          best.</p>

      </div>
    </div>
  </div>

  <div class="col-md-8 p-2">
    <!-- Logo image -->
    <div class="logo">
      <img class="logo-contact" src="https://i.postimg.cc/qq9GfZZX/Screenshot-2023-06-13-112128.png">
    </div>

    <div class="card border-2 mt-5 second" id="contact-box">

      <form action="https://formspree.io/f/xknayqyj" method="POST">

        <h2 class="card p-3 heading-text pink-bg border-2 text-center" style="border: none;">Contact Me!</h2>
        <div class="input-ting">
          <label class="form-label heading-text">Name:</label>
          <input type="text" name="Name" class="form-control light-bg border-2" placeholder="Please enter your name"
            required />
        </div>

        <div class="input-ting">
          <label class="form-label heading-text">Email:</label>
          <input type="email" name="Email" class="form-control light-bg border-2"
            placeholder="Please Enter your email" required />
        </div>

        <div class="input-ting">
          <label class="form-label heading-text">Enter message:</label>
          <textarea name="Message" class="form-control light-bg border-2" rows="5"
            placeholder="We would like to hear from you"></textarea>
        </div>
        <div class="bttn">
        <button type="submit" class="btn submit-btn submitting">Submit</button>
      </div>
      </form>
    </div>
  </div>
</div>
<!-- contact form done -->
</main>
  
  </template>
  
  <script>
  
  
  export default {
    name: 'ContactView',
    components: {}
  }
  </script>