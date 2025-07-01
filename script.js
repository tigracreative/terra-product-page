// Track cart count and total price
let cartCount = 0;
let cartTotal = 0;

// Handle Add to Cart button
function addToCart() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = 4500; // Adjust to product price
  const total = price * quantity;

  // Update cart count and total
  cartCount += quantity;
  cartTotal += total;

  // Update cart preview
  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-info").textContent = `${cartCount} item(s) - ₦${cartTotal}`;

  // Update Cart Sidebar
  updateCartSidebar();

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

// Initialize the related products
renderRelatedProducts();

// Show the clicked tab
function showTab(event, tabName) {
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  // Hide all tabs
  allTabs.forEach(tab => {
    tab.classList.add('hidden');
  });

  // Remove 'active' class from all buttons
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show the selected tab
  document.getElementById(`${tabName}-tab`).classList.remove('hidden');

  // Add 'active' class to the clicked button
  event.target.classList.add('active');
}

// Toggle Cart Sidebar visibility
function toggleCart() {
  document.getElementById("cart-sidebar").classList.toggle("hidden");
}

// Close Cart Sidebar
function closeCart() {
  document.getElementById("cart-sidebar").classList.add("hidden");
}

// Update Cart Sidebar with details
function updateCartSidebar() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.innerHTML = `
    <p><strong>Organic Cocoa</strong></p>
    <p>Items: ${cartCount}</p>
    <p>Total: ₦${cartTotal}</p>
  `;
}

// Checkout Function
function checkout() {
  alert(`Proceeding to checkout... Total: ₦${cartTotal}`);
}

