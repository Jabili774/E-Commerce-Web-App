let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cart-count");

function updateCartCount(){

cartCount.textContent = cart.reduce((sum,item)=>sum+item.quantity,0);

}

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

displayCart();

}

function displayCart(){

cartItems.innerHTML="";

let total=0;

if(cart.length===0){

cartItems.innerHTML="<h2>Your cart is empty.</h2>";

totalPrice.innerHTML="Total : $0";

updateCartCount();

return;

}

cart.forEach(item=>{

total+=item.price*item.quantity;

cartItems.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div class="cart-details">

<h3>${item.name}</h3>

<p>$${item.price}</p>

<div class="quantity">

<button onclick="decrease(${item.id})">-</button>

<span>${item.quantity}</span>

<button onclick="increase(${item.id})">+</button>

</div>

</div>

<button class="remove-btn"

onclick="removeItem(${item.id})">

Remove

</button>

</div>

`;

});

totalPrice.innerHTML=`Total : $${total}`;

updateCartCount();

}

function increase(id){

const item=cart.find(p=>p.id===id);

item.quantity++;

saveCart();

}

function decrease(id){

const item=cart.find(p=>p.id===id);

if(item.quantity>1){

item.quantity--;

}else{

cart=cart.filter(p=>p.id!==id);

}

saveCart();

}

function removeItem(id){

cart=cart.filter(item=>item.id!==id);

saveCart();

}

displayCart();
