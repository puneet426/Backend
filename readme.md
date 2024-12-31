User Model
fullname-string, email, password , cart- array, isadmin-bool 
orders-array,
contact
picture-db




products detail
image, name, price , discount, bg-color, panelcolor, text-color


strating of index

<%- include('./partials/header') %>

    <% if(error.length>0){ %>
        <div class="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-md bg-red-500">
            <span class="inline-block mt-1 mb-1 text-white">
                <%= error %>
            </span>
        </div>
        <% } %>



        product

         <div class="flex items-start gap-5">
                <% products.forEach(function(product){ %>
                    <div class="w-60">
                        <div class="w-full h-52 flex items-center justify-center bg-[<%= product.bgcolor %>]">
                            <img class="h-[12rem]" src="data:image/jpeg;base64,<%= product.image.toString('base64') %>"
                                alt="">
                        </div>
                        <div
                            class="flex justify-between bg-[<%= product.panelcolor %>] items-center px-4 py-4 text-[<%= product.textcolor %>]">
                            <div>
                                <h3>
                                    <%= product.name %>
                                </h3>
                                <h4>₹ <%= product.price %>
                                </h4>
                            </div>
                            <a class="w-7 h-7 flex items-center justify-center rounded-full bg-white" href="">
                                <i class="ri-add-line"></i>
                            </a>
                        </div>
                    </div>
                    <% }) %>




                    startting of createproduct
             
cart



<%- include('./partials/header') %>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<div class="swiper-container">
  <div class="swiper-wrapper">
    <% let totalBill = 0; %> <!-- Initialize totalBill -->
    <% user.cart.forEach(function(item) { %>
      <% 
        let productBill = Number(item.price) + 20 - Number(item.discount); 
        totalBill += productBill; // Add productBill to totalBill
      %>
      <div class="swiper-slide flex flex-col items-center px-5 py-10 gap-1 justify-center ">
        <div class="w-[45%] rounded-md overflow-hidden mx-auto">
          <div class="w-full flex justify-center items-center h-80 bg-[<%= item.bgcolor %>]">
            <img class="h-[18rem]" src="data:image/jpeg;base64,<%= item.image.toString('base64') %>" alt="">
          </div>
          <div class="w-full flex justify-between px-5 py-4 bg-[<%= item.panelcolor %>]">
            <h3 class="text-2xl"><%= item.name %></h3>
            <div class="flex items-center gap-2">
              <i class="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-add-line"></i>
              <div class="px-2 py-1 rounded-md bg-white text-black">01</div>
              <i class="w-7 h-7 bg-white flex rounded-full items-center justify-center ri-subtract-line"></i>
            </div>
          </div>
          <div class="flex items-center justify-between px-5 text-white py-3 bg-[<%= item.textcolor %>]">
            <h4 class="text-lg">Net Total</h4>
            <h2 class="text-lg">₹ <%= productBill %></h2>
          </div>
        </div>
      </div>
    <% }) %>
  </div>
  <!-- Add navigation buttons -->
  <div class="swiper-button-next"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-pagination"></div>
</div>

<!-- Fixed footer for total bill and place order -->
<div class="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-between items-center px-10 py-5">
  <h3 class="text-xl font-bold">Total Bill: ₹ <%= totalBill %></h3>
  <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold">
    Place Order
  </button>
</div>

<script>
  // Initialize Swiper with optimized spacing
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, // Display 2 products per slide
    spaceBetween: 10, // Reduce space between products
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   
    breakpoints: {
      768: {
        slidesPerView: 1, // Show 1 product on smaller screens
      },
      1024: {
        slidesPerView: 2, // Show 2 products on larger screens
      },
    },
  });
</script>

<%- include('./partials/footer') %>