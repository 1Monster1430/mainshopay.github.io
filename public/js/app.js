// Simulating product data with 18 products
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'images/devin-avery-bMH8ub9z1_U-unsplash.jpg' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'images/eniko-kis-KsLPTsYaqIQ-unsplash.jpg' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'images/fernando-andrade-potCPE_Cw8A-unsplash.jpg' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'images/icons8-team-7LNatQYMzm4-unsplash.jpg' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'images/kuiye-chen-NuOGFo4PudE-unsplash.jpg' },
    { id: 6, name: 'Product 6', price: 69.99, image: 'images/mitzie-organics-dnstpPqCBbw-unsplash.jpg' },
    { id: 7, name: 'Product 7', price: 79.99, image: 'images/mohammad-metri-E-0ON3VGrBc-unsplash.jpg' },
    { id: 8, name: 'Product 8', price: 89.99, image: 'images/nataliya-melnychuk-PdzMmdHqN2c-unsplash.jpg' },
    { id: 9, name: 'Product 9', price: 99.99, image: 'images/rachit-tank-2cFZ_FB08UM-unsplash.jpg' },
    { id: 10, name: 'Product 10', price: 109.99, image: 'images/tamara-bellis-LJqRUWr9V0w-unsplash.jpg' },
    { id: 11, name: 'Product 11', price: 119.99, image: 'images/the-printable-concept-KWylPhCFMaY-unsplash.jpg' },
    { id: 12, name: 'Product 12', price: 129.99, image: 'images/adam-birkett-QRWAdBCqysc-unsplash.jpg' },
    { id: 13, name: 'Product 13', price: 139.99, image: 'images/brittany-neale-bbSsuLAhsWU-unsplash.jpg' },
    { id: 14, name: 'Product 14', price: 149.99, image: 'images/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg' },
    { id: 15, name: 'Product 15', price: 159.99, image: 'images/jakob-owens-O_bhy3TnSYU-unsplash.jpg' },
    { id: 16, name: 'Product 16', price: 169.99, image: 'images/karly-jones-4i9ef6xU738-unsplash.jpg"' },
    { id: 17, name: 'Product 17', price: 179.99, image: 'images/nordwood-themes-Nv4QHkTVEaI-unsplash.jpg' },
    { id: 18, name: 'Product 18', price: 189.99, image: 'images/devin-avery-bMH8ub9z1_U-unsplash.jpg' }
];

const cart = [];

// Display products on the homepage
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
}

// Display cart items on the cart page
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
            </div>
        `;
    });
}

// Call the appropriate function depending on the page
if (document.getElementById('product-list')) {
    displayProducts();
}
if (document.getElementById('cart-items')) {
    displayCartItems();
}