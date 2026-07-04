// ===============================
// ShopEase - Home Page Script
// ===============================

// Get cart from LocalStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Badge
function updateCartCount() {
    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add Product to Cart
function addToCart(product) {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");
}

// Featured Products
const featuredProducts = [
    {
        id: 1,
        name: "iPhone 15",
        price: 999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
        id: 2,
        name: "Nike Shoes",
        price: 120,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        id: 3,
        name: "MacBook Air",
        price: 1399,
        image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=400"
    }
];

// Attach Add to Cart events
const buttons = document.querySelectorAll(".product-card .btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        addToCart(featuredProducts[index]);
    });
});

// Initialize
updateCartCount();
