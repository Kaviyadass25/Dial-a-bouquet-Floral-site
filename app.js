// ============================================
// DIAL A BOUQUET - E-COMMERCE PWA
// ============================================

// Product Database with Unsplash Images
const products = [
    {
        id: 1,
        name: "Eternal Love Roses",
        price: 2999,
        image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Luxury",
        rating: 4.8,
        description: "12 premium red roses with baby's breath",
        inStock: true,
        delivery: ["Same Day", "Midnight"],
        occasion: ["Anniversary", "Valentine's Day", "Romantic"]
    },
    {
        id: 2,
        name: "Spring Bliss Bouquet",
        price: 1999,
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Seasonal",
        rating: 4.5,
        description: "Mixed seasonal flowers arrangement",
        inStock: true,
        delivery: ["Same Day"],
        occasion: ["Birthday", "Congratulations", "Get Well"]
    },
    {
        id: 3,
        name: "Royal Orchid Delight",
        price: 3499,
        image: "https://images.unsplash.com/photo-1545241047-6083a3684597?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Exotic",
        rating: 4.9,
        description: "Premium orchid arrangement",
        inStock: true,
        delivery: ["Same Day", "Scheduled"],
        occasion: ["Corporate", "Luxury", "Anniversary"]
    },
    {
        id: 4,
        name: "Sunshine Gerbera",
        price: 1599,
        image: "https://images.unsplash.com/photo-1560695380-cb1a9c42a585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Birthday",
        rating: 4.3,
        description: "Bright gerbera daisies bouquet",
        inStock: true,
        delivery: ["Same Day"],
        occasion: ["Birthday", "Congratulations", "Friendship"]
    },
    {
        id: 5,
        name: "Lily Symphony",
        price: 2299,
        image: "https://images.unsplash.com/photo-1572451479137-7d78d5c5d3ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Wedding",
        rating: 4.6,
        description: "Elegant lily arrangement",
        inStock: true,
        delivery: ["Scheduled"],
        occasion: ["Wedding", "Anniversary", "Formal"]
    },
    {
        id: 6,
        name: "Midnight Romance",
        price: 3999,
        image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Luxury",
        rating: 4.9,
        description: "Premium midnight delivery bouquet",
        inStock: true,
        delivery: ["Midnight"],
        occasion: ["Romantic", "Surprise", "Anniversary"]
    },
    {
        id: 7,
        name: "Tulip Celebration",
        price: 1799,
        image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Seasonal",
        rating: 4.4,
        description: "Fresh tulips in rainbow colors",
        inStock: true,
        delivery: ["Same Day"],
        occasion: ["Birthday", "Congratulations", "Spring"]
    },
    {
        id: 8,
        name: "Carnation Harmony",
        price: 1299,
        image: "https://images.unsplash.com/photo-1578948856697-db91d246b7b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Budget",
        rating: 4.2,
        description: "Colorful carnations bouquet",
        inStock: true,
        delivery: ["Same Day", "Standard"],
        occasion: ["Friendship", "Thank You", "Get Well"]
    },
    {
        id: 9,
        name: "Protea Paradise",
        price: 4599,
        image: "https://images.unsplash.com/photo-1582794543139-8ac9cad40c5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Exotic",
        rating: 4.7,
        description: "Exotic protea and tropical flowers",
        inStock: true,
        delivery: ["Scheduled"],
        occasion: ["Luxury", "Corporate", "Special Events"]
    },
    {
        id: 10,
        name: "Baby's Breath Cloud",
        price: 2499,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Wedding",
        rating: 4.6,
        description: "Delicate baby's breath arrangement",
        inStock: true,
        delivery: ["Same Day", "Scheduled"],
        occasion: ["Wedding", "Romantic", "Baby Shower"]
    },
    {
        id: 11,
        name: "Sunflower Happiness",
        price: 2199,
        image: "https://images.unsplash.com/photo-1597848212624-e7f23ac73c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Birthday",
        rating: 4.5,
        description: "Bright sunflowers bouquet",
        inStock: true,
        delivery: ["Same Day"],
        occasion: ["Birthday", "Congratulations", "Cheer Up"]
    },
    {
        id: 12,
        name: "Hydrangea Elegance",
        price: 3299,
        image: "https://images.unsplash.com/photo-1496062031456-07afce4cbf6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        category: "Luxury",
        rating: 4.8,
        description: "Luxury hydrangea arrangement",
        inStock: true,
        delivery: ["Same Day", "Scheduled"],
        occasion: ["Anniversary", "Formal", "Corporate"]
    }
];

// Occasions Data
const occasions = [
    { id: 1, name: "Birthday", icon: "fa-birthday-cake", color: "#FF6B6B" },
    { id: 2, name: "Anniversary", icon: "fa-heart", color: "#8FBC8F" },
    { id: 3, name: "Wedding", icon: "fa-ring", color: "#FFD166" },
    { id: 4, name: "Valentine's Day", icon: "fa-heart", color: "#EF476F" },
    { id: 5, name: "Congratulations", icon: "fa-trophy", color: "#118AB2" },
    { id: 6, name: "Get Well", icon: "fa-plus-square", color: "#06D6A0" },
    { id: 7, name: "Thank You", icon: "fa-hands", color: "#7209B7" },
    { id: 8, name: "Corporate", icon: "fa-briefcase", color: "#3A86FF" }
];

// Application State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let deferredPrompt = null;
let currentFilter = 'all';
let currentSort = 'default';

// DOM Elements
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const searchInput = searchBar ? searchBar.querySelector('input') : null;
const searchClose = document.getElementById('searchClose');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const shopNowBtn = document.getElementById('shopNow');
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');
const dismissBtn = document.getElementById('dismissBtn');
const notification = document.getElementById('notification');
const checkoutBtn = document.querySelector('.checkout-btn');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Main Initialization Function
function initializeApp() {
    renderProducts();
    renderOccasions();
    updateCartUI();
    setupEventListeners();
    checkPWAInstall();
    loadUserPreferences();
    
    // Check for online/offline status
    updateOnlineStatus();
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
}

// Render Products with Filtering and Sorting
function renderProducts() {
    let filteredProducts = [...products];
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category.toLowerCase() === currentFilter.toLowerCase() ||
            product.occasion.includes(currentFilter)
        );
    }
    
    // Apply sorting
    filteredProducts = sortProducts(filteredProducts, currentSort);
    
    // Render to DOM
    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.inStock ? '<span class="out-of-stock">Out of Stock</span>' : ''}
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart ${wishlist.includes(product.id) ? 'active' : ''}"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-meta">
                    <span class="product-category">${product.category}</span>
                    <div class="rating">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
                        <span class="rating-text">(${product.rating})</span>
                    </div>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="delivery-tags">
                    ${product.delivery.map(del => `<span class="delivery-tag">${del}</span>`).join('')}
                </div>
                <div class="product-footer">
                    <p class="product-price">₹${product.price.toLocaleString()}</p>
                    <button class="add-to-cart" onclick="addToCart(${product.id})" 
                            ${!product.inStock ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i> ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Occasions Filter
function renderOccasions() {
    const occasionsContainer = document.querySelector('.categories .container');
    if (!occasionsContainer) return;
    
    const occasionsHTML = `
        <div class="occasions-filter">
            <h3 class="filter-title">Shop by Occasion</h3>
            <div class="filter-tags">
                <button class="filter-tag ${currentFilter === 'all' ? 'active' : ''}" 
                        onclick="setFilter('all')">All</button>
                ${occasions.map(occasion => `
                    <button class="filter-tag ${currentFilter === occasion.name ? 'active' : ''}" 
                            onclick="setFilter('${occasion.name}')">
                        <i class="fas ${occasion.icon}"></i> ${occasion.name}
                    </button>
                `).join('')}
            </div>
            <div class="sort-options">
                <select id="sortSelect" onchange="setSort(this.value)">
                    <option value="default" ${currentSort === 'default' ? 'selected' : ''}>Sort by: Default</option>
                    <option value="price-low" ${currentSort === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                    <option value="price-high" ${currentSort === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                    <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Rating: High to Low</option>
                    <option value="name" ${currentSort === 'name' ? 'selected' : ''}>Name: A to Z</option>
                </select>
            </div>
        </div>
    `;
    
    occasionsContainer.insertAdjacentHTML('beforeend', occasionsHTML);
}

// Sort Products Function
function sortProducts(products, sortType) {
    switch(sortType) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'rating':
            return [...products].sort((a, b) => b.rating - a.rating);
        case 'name':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return products;
    }
}

// Filter and Sort Functions
function setFilter(filter) {
    currentFilter = filter;
    renderProducts();
    updateActiveFilter();
}

function setSort(sortType) {
    currentSort = sortType;
    renderProducts();
    localStorage.setItem('sortPreference', sortType);
}

function updateActiveFilter() {
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
        if (tag.textContent.includes(currentFilter) || 
            (currentFilter === 'all' && tag.textContent.includes('All'))) {
            tag.classList.add('active');
        }
    });
}

// Cart Management Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product || !product.inStock) {
        showNotification('This product is currently out of stock', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            addedAt: new Date().toISOString()
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Add to recently viewed
    addToRecentlyViewed(productId);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Item removed from cart', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            removeFromCart(productId);
            return;
        }
        saveCart();
        updateCartUI();
    }
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        saveCart();
        updateCartUI();
        showNotification('Cart cleared successfully', 'info');
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems > 99 ? '99+' : totalItems;
    
    // Update cart items and total
    let totalPrice = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <button class="btn-primary" onclick="shopNow()">Start Shopping</button>
            </div>
        `;
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;
        
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-meta">
                        <span class="cart-item-price">₹${item.price.toLocaleString()}</span>
                        <span class="cart-item-category">${item.category}</span>
                    </div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                        <span class="item-total">₹${itemTotal.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `₹${totalPrice.toLocaleString()}`;
    
    // Add clear cart button if not present
    if (!document.querySelector('.clear-cart-btn')) {
        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-cart-btn';
        clearBtn.innerHTML = '<i class="fas fa-trash"></i> Clear Cart';
        clearBtn.onclick = clearCart;
        
        const cartFooter = document.querySelector('.cart-footer');
        if (cartFooter) {
            cartFooter.insertBefore(clearBtn, checkoutBtn);
        }
    }
}

// Wishlist Functions
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showNotification('Added to wishlist', 'success');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    }
    
    saveWishlist();
    renderProducts();
}

function saveWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

// Search Functionality
function searchProducts(query) {
    if (!query.trim()) {
        renderProducts();
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.occasion.some(occ => occ.toLowerCase().includes(searchTerm))
    );
    
    productGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Notification System
function showNotification(message, type = 'info') {
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = 'notification';
    
    // Add type class
    notification.classList.add(type);
    notification.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    // Play sound for success notifications
    if (type === 'success') {
        playNotificationSound();
    }
}

function playNotificationSound() {
    // Create a simple notification sound
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (error) {
        console.log('Audio context not supported');
    }
}

// Event Listeners Setup
function setupEventListeners() {
    // Cart toggle
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }
    
    // Search functionality
    if (searchBtn && searchBar && searchInput) {
        searchBtn.addEventListener('click', () => {
            searchBar.style.display = 'block';
            searchInput.focus();
        });
        
        searchClose.addEventListener('click', () => {
            searchBar.style.display = 'none';
            searchInput.value = '';
            renderProducts();
        });
        
        searchInput.addEventListener('input', (e) => {
            searchProducts(e.target.value);
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts(e.target.value);
            }
        });
    }
    
    // Mobile menu toggle
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Shop now button
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('#bouquets').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // PWA Installation
    if (installBtn) {
        installBtn.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    installBanner.style.display = 'none';
                    showNotification('App installed successfully!', 'success');
                }
                deferredPrompt = null;
            }
        });
    }
    
    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            installBanner.style.display = 'none';
            localStorage.setItem('pwaDismissed', 'true');
        });
    }
    
    // Checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showNotification('Your cart is empty', 'error');
                return;
            }
            proceedToCheckout();
        });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartSidebar && cartSidebar.classList.contains('active') &&
            !cartSidebar.contains(e.target) && 
            !cartBtn.contains(e.target)) {
            cartSidebar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close mobile menu when clicking outside
        if (mainNav && mainNav.classList.contains('active') &&
            !mainNav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            mainNav.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
                    link.classList.add('active');
                    
                    // Close mobile menu if open
                    if (mainNav && mainNav.classList.contains('active')) {
                        mainNav.classList.remove('active');
                        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            }
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchBar && searchInput) {
                searchBar.style.display = 'block';
                searchInput.focus();
            }
        }
        
        // Escape to close cart
        if (e.key === 'Escape') {
            if (cartSidebar && cartSidebar.classList.contains('active')) {
                cartSidebar.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// PWA Installation
function checkPWAInstall() {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
        return;
    }
    
    // Check if dismissed before
    if (localStorage.getItem('pwaDismissed') === 'true') {
        return;
    }
    
    // Listen for beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install banner after 5 seconds
        setTimeout(() => {
            if (installBanner && !localStorage.getItem('pwaInstalled')) {
                installBanner.style.display = 'flex';
            }
        }, 5000);
    });
    
    // Track installation
    window.addEventListener('appinstalled', () => {
        localStorage.setItem('pwaInstalled', 'true');
        if (installBanner) {
            installBanner.style.display = 'none';
        }
    });
}

// Checkout Process
function proceedToCheckout() {
    // In a real app, this would redirect to a checkout page
    // For demo purposes, we'll show a confirmation modal
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'checkout-modal';
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.parentElement.parentElement.remove()">×</button>
            <h3>Order Summary</h3>
            <div class="order-items">
                ${cart.map(item => `
                    <div class="order-item">
                        <span>${item.name} × ${item.quantity}</span>
                        <span>₹${(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                `).join('')}
            </div>
            <div class="order-total">
                <span>Total Amount:</span>
                <span>₹${totalAmount.toLocaleString()}</span>
            </div>
            <div class="delivery-options">
                <h4>Select Delivery Option:</h4>
                <select id="deliveryOption">
                    <option value="same-day">Same Day Delivery (₹199)</option>
                    <option value="midnight">Midnight Delivery (₹299)</option>
                    <option value="standard">Standard 2-3 Days (Free)</option>
                    <option value="scheduled">Scheduled Delivery (Free)</option>
                </select>
            </div>
            <button class="btn-primary confirm-order" onclick="confirmOrder()">
                <i class="fas fa-lock"></i> Confirm Order
            </button>
        </div>
    `;
    
    document.body.appendChild(checkoutModal);
    
    // Add modal styles
    if (!document.querySelector('#modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .checkout-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
            }
            .modal-content {
                background: white;
                padding: 30px;
                border-radius: 10px;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            }
            .modal-close {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: var(--text-light);
            }
            .order-items {
                margin: 20px 0;
                max-height: 200px;
                overflow-y: auto;
            }
            .order-item {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid var(--primary-beige);
            }
            .order-total {
                display: flex;
                justify-content: space-between;
                font-size: 1.2rem;
                font-weight: bold;
                margin: 20px 0;
                padding-top: 20px;
                border-top: 2px solid var(--accent-beige);
            }
            .delivery-options {
                margin: 20px 0;
            }
            .delivery-options select {
                width: 100%;
                padding: 10px;
                border: 1px solid var(--accent-beige);
                border-radius: 5px;
                margin-top: 10px;
            }
            .confirm-order {
                width: 100%;
                margin-top: 20px;
            }
        `;
        document.head.appendChild(style);
    }
}

function confirmOrder() {
    // In a real app, this would process payment and create order
    // For demo, we'll just show success message
    showNotification('Order placed successfully! Thank you for shopping with us.', 'success');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    
    // Close modal
    const modal = document.querySelector('.checkout-modal');
    if (modal) modal.remove();
    
    // Close cart sidebar
    cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Helper Functions
function shopNow() {
    document.querySelector('#bouquets').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    cartSidebar.classList.remove('active');
}

function addToRecentlyViewed(productId) {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
    recentlyViewed = recentlyViewed.filter(id => id !== productId);
    recentlyViewed.unshift(productId);
    
    // Keep only last 5 items
    if (recentlyViewed.length > 5) {
        recentlyViewed = recentlyViewed.slice(0, 5);
    }
    
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

function loadUserPreferences() {
    // Load sort preference
    const savedSort = localStorage.getItem('sortPreference');
    if (savedSort) {
        currentSort = savedSort;
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect) {
            sortSelect.value = savedSort;
        }
    }
    
    // Load theme preference
    const theme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', theme);
}

function updateOnlineStatus() {
    if (!navigator.onLine) {
        showNotification('You are offline. Some features may be limited.', 'warning');
    }
}

// Export functions for HTML onclick attributes
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.toggleWishlist = toggleWishlist;
window.setFilter = setFilter;
window.setSort = setSort;
window.shopNow = shopNow;
window.confirmOrder = confirmOrder;

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            showNotification('New update available! Refresh to update.', 'info');
                        }
                    });
                });
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Add extra CSS for new features
const extraStyles = document.createElement('style');
extraStyles.textContent = `
    /* Product Meta */
    .product-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .product-category {
        background: var(--primary-beige);
        color: var(--text-dark);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    .rating-text {
        color: var(--text-light);
        font-size: 0.9rem;
        margin-left: 5px;
    }
    
    .product-description {
        color: var(--text-light);
        font-size: 0.9rem;
        margin-bottom: 10px;
        min-height: 40px;
    }
    
    /* Delivery Tags */
    .delivery-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 15px;
    }
    
    .delivery-tag {
        background: var(--secondary-beige);
        color: var(--text-dark);
        padding: 3px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        border: 1px solid var(--accent-beige);
    }
    
    /* Product Footer */
    .product-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    
    /* Wishlist Button */
    .wishlist-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    }
    
    .wishlist-btn:hover {
        transform: scale(1.1);
    }
    
    .wishlist-btn i {
        color: #ccc;
        font-size: 1.2rem;
        transition: color 0.3s ease;
    }
    
    .wishlist-btn i.active {
        color: #EF476F;
    }
    
    /* Out of Stock */
    .out-of-stock {
        position: absolute;
        top: 10px;
        left: 10px;
        background: rgba(239, 71, 111, 0.9);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
    }
    
    /* Filter Tags */
    .occasions-filter {
        margin-bottom: 40px;
    }
    
    .filter-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.5rem;
        margin-bottom: 15px;
        color: var(--text-dark);
    }
    
    .filter-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .filter-tag {
        background: var(--white);
        border: 2px solid var(--accent-beige);
        color: var(--text-dark);
        padding: 8px 16px;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
    }
    
    .filter-tag:hover {
        border-color: var(--success);
        color: var(--success);
    }
    
    .filter-tag.active {
        background: var(--success);
        border-color: var(--success);
        color: white;
    }
    
    /* Sort Options */
    .sort-options select {
        padding: 10px 15px;
        border: 2px solid var(--accent-beige);
        border-radius: 8px;
        background: white;
        color: var(--text-dark);
        font-family: 'Poppins', sans-serif;
        font-size: 0.9rem;
        cursor: pointer;
        min-width: 200px;
    }
    
    /* Empty Cart */
    .empty-cart {
        text-align: center;
        padding: 40px 20px;
        color: var(--text-light);
    }
    
    .empty-cart i {
        font-size: 3rem;
        color: var(--accent-beige);
        margin-bottom: 20px;
    }
    
    .empty-cart p {
        margin-bottom: 20px;
        font-size: 1.1rem;
    }
    
    /* Cart Item Meta */
    .cart-item-meta {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .cart-item-category {
        background: var(--primary-beige);
        color: var(--text-dark);
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 0.8rem;
    }
    
    /* Cart Item Actions */
    .cart-item-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
    }
    
    .item-total {
        font-weight: 600;
        color: var(--success);
    }
    
    /* Clear Cart Button */
    .clear-cart-btn {
        width: 100%;
        background: var(--accent-beige);
        color: var(--text-dark);
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 10px;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .clear-cart-btn:hover {
        background: #c5b9a3;
    }
    
    /* Notification Types */
    .notification.success {
        background: var(--success);
    }
    
    .notification.error {
        background: #EF476F;
    }
    
    .notification.warning {
        background: #FFD166;
        color: var(--text-dark);
    }
    
    .notification.info {
        background: #118AB2;
    }
    
    /* Online Status Indicator */
    .online-status {
        position: fixed;
        top: 10px;
        right: 10px;
        background: var(--success);
        color: white;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 0.8rem;
        z-index: 1000;
        display: none;
    }
    
    .online-status.offline {
        background: #EF476F;
    }
`;

document.head.appendChild(extraStyles);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}