<template>
    <div class="admin">
     <h1>This is admin page</h1>
  
      <main id="body-admin">

    <!-- Crud system -->

 
 <div class="container-admin">
  <h1 class="mt-5">Admin inputs</h1>
<form id="addProductForm">
  <input  type="text" id="productName" placeholder="Product Name" required>
  <input  type="text" id="productImage" placeholder="Product Image Tag" required>
  <input  type="number" id="productPrice" placeholder="Product Price" required>
  <button id="admin-submit" type="submit">Submit Product</button>
</form>
  <!-- display products  -->
  <h2 style="margin-top: 15px; margin-bottom: 20px;">Products Displayed</h2>
  <h3 class="mb-3">Scroll to see</h3>
  <ul id="productList"></ul>

</div>


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

</main>
  
      
    </div>
    
  </template>
  
  <script>
  
  
  export default {
    name: 'AdminView',
    components: {}
  }
  </script>