
// Track cart count
let cartCount = 0;

// Handle Add to Cart button
function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  cartCount += quantity;
  document.getElementById("cart-count").textContent = cartCount;
  alert("Item added to cart!");
}

// Handle review submission
function submitReview() {
  const reviewInput = document.getElementById("review-input");
  const reviewText = reviewInput.value.trim();

  if (reviewText !== "") {
    const reviewList = document.getElementById("review-list");
    const newReview = document.createElement("p");
    newReview.textContent = reviewText;
    reviewList.appendChild(newReview);
    reviewInput.value = "";
  } else {
    alert("Please write a review before submitting.");
  }
}

// Sample related products
const relatedProducts = [
  {
    name: "Plantain Flour",
    price: "₦3,000",
    image: "https://via.placeholder.com/200x150?text=Plantain+Flour"
  },
  {
    name: "Eco Soap",
    price: "₦2,500",
    image: "https://via.placeholder.com/200x150?text=Eco+Soap"
  },
  {
    name: "Palm Oil",
    price: "₦4,000",
    image: "https://via.placeholder.com/200x150?text=Palm+Oil"
  }
];

// Render related products on the page
function renderRelatedProducts() {
  const container = document.getElementById("related-products-container");

  relatedProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>${product.price}</p>
    `;

    container.appendChild(card);
  });
}

// Initialize
renderRelatedProducts();
function showTab(tabName) {
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  allTabs.forEach(tab => {
    tab.classList.add('hidden');
  });

  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(`${tabName}-tab`).classList.remove('hidden');
  event.target.classList.add('active');
}
let cartTotal = 0;

function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = 4500;
  const total = price * quantity;

  cartCount += quantity;
  cartTotal += total;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-info").textContent = `${cartCount} item(s) - ₦${cartTotal}`;
  updateCartSidebar();
  alert("Item added to cart!");
}

function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("hidden");
}

function closeCart() {
  document.getElementById("cart-sidebar").classList.add("hidden");
}

function updateCartSidebar() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.innerHTML = `
    <p><strong>Organic Cocoa</strong></p>
    <p>Items: ${cartCount}</p>
    <p>Total: ₦${cartTotal}</p>
  `;
}
