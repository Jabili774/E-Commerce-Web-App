// ===============================
// ShopEase Products Script
// ===============================

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Elements
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCount = document.getElementById("cart-count");

// Update Cart Badge
function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Save Cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Add Product
function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();

    alert(product.name + " added to cart!");
}

// Display Products
function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <h2 style="text-align:center;width:100%;">
                No products found.
            </h2>
        `;

        return;
    }

    productList.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p class="category">${product.category}</p>

            <h2 class="price">$${product.price}</h2>

            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>

        </div>

        `;

    });

}

// Search
searchInput.addEventListener("keyup", function () {

    const keyword = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(filtered);

});

// Filter
filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        const category = this.dataset.category;

        if (category === "All") {

            displayProducts(products);

        } else {

            const filtered = products.filter(product =>
                product.category === category
            );

            displayProducts(filtered);

        }

    });

});

// Initialize
displayProducts(products);
updateCartCount();
