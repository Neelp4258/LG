// Main JavaScript for Jyoti Electron Website

// Initialize cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 'home';

// Update cart badge
const updateCartBadge = () => {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
};

// Product Data with Enhanced Information
const products = [
    {
        id: 1,
        name: "LG OLED 55\" C3 4K Smart TV",
        price: 129990,
        originalPrice: 159990,
        category: "tv",
        brand: "LG",
        rating: 4.8,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=400&fit=crop"
        ],
        description: "Experience cinematic excellence with LG OLED's self-lit pixels delivering perfect black and infinite contrast. Every scene comes alive with stunning detail and vibrant colors.",
        features: [
            "Convection Cooking",
            "Auto Cook Menus",
            "Child Safety Lock",
            "Energy Saving Mode",
            "Stainless Steel Cavity",
            "LED Display"
        ],
        specifications: {
            "Capacity": "28 Liters",
            "Type": "Convection Microwave",
            "Power": "900W Microwave + 1950W Convection",
            "Auto Cook": "151 Menus",
            "Control": "Touch Panel",
            "Cavity": "Stainless Steel",
            "Dimensions": "54.8 x 50.0 x 31.9 cm",
            "Weight": "17.5 kg"
        },
        inStock: true,
        discount: 16,
        tags: ["convection", "auto-cook", "energy-saving"],
        warranty: "1 Year Product + 3 Years Magnetron"
    },
    {
        id: 6,
        name: "LG 65\" NanoCell 4K Smart TV",
        price: 89990,
        originalPrice: 109990,
        category: "tv",
        brand: "LG",
        rating: 4.6,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop"
        ],
        description: "Immersive viewing experience with NanoCell technology that delivers pure colors and enhanced clarity for movies, sports, and gaming.",
        features: [
            "NanoCell Technology",
            "α7 Gen5 AI Processor 4K",
            "Local Dimming",
            "HGiG Gaming",
            "webOS Smart TV",
            "Magic Remote"
        ],
        specifications: {
            "Screen Size": "65 inches",
            "Resolution": "4K Ultra HD",
            "Display": "NanoCell",
            "Processor": "α7 Gen5 AI 4K",
            "HDR": "HDR10 Pro, HLG",
            "Smart TV": "webOS 23",
            "Audio": "20W",
            "Connectivity": "3x HDMI, 2x USB"
        },
        inStock: true,
        discount: 18,
        tags: ["nanocell", "gaming", "ai-processor"],
        warranty: "2 Years Comprehensive"
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: "Rajesh Patil",
        location: "Kalyan West",
        rating: 5,
        comment: "Excellent service and genuine LG products. The team helped me choose the perfect TV for my home. Highly recommended!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        product: "LG OLED TV"
    },
    {
        id: 2,
        name: "Priya Sharma",
        location: "Dombivli",
        rating: 5,
        comment: "Amazing experience! Free delivery and installation was done professionally. The refrigerator is working perfectly."
    }
];

// Page Navigation
function showPage(pageName) {
    currentPage = pageName;
    const pages = ['home', 'shop', 'services', 'about', 'contact', 'cart'];
    pages.forEach(page => {
        const element = document.getElementById(page + 'Page');
        if (element) {
            element.style.display = page === pageName ? 'block' : 'none';
        }
    });

    // Special handling for shop page
    if (pageName === 'shop') {
        displayProducts();
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Product Display Functions
function displayProducts(category = null) {
    const productContainer = document.getElementById('productGrid');
    if (!productContainer) return;

    const filteredProducts = category 
        ? products.filter(p => p.category === category)
        : products;

    productContainer.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-aos="fade-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.discount ? `<span class="discount-badge">-${product.discount}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <button class="btn btn-primary mt-2" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Initialize AOS animations
    AOS.refresh();
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    showToast('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    if (currentPage === 'cart') {
        displayCart();
    }
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
        if (currentPage === 'cart') {
            displayCart();
        }
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cartItems');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart text-center py-5">
                <i class="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
                <h3>Your cart is empty</h3>
                <p class="text-muted">Start shopping to add items to your cart!</p>
                <button class="btn btn-primary mt-3" onclick="showPage('shop')">
                    Browse Products
                </button>
            </div>
        `;
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartContainer.innerHTML = `
        <div class="cart-items">
            ${cart.map(item => `
                <div class="cart-item" data-aos="fade-right">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="price">₹${item.price.toLocaleString()}</div>
                        <div class="quantity-controls">
                            <button onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('')}
        </div>
        <div class="cart-summary" data-aos="fade-up">
            <h3>Cart Summary</h3>
            <div class="summary-item">
                <span>Subtotal:</span>
                <span>₹${total.toLocaleString()}</span>
            </div>
            <button class="btn btn-primary w-100 mt-3" onclick="checkout()">
                Proceed to Checkout
            </button>
        </div>
    `;
}

// Filter Products
function filterProducts(category) {
    showPage('shop');
    displayProducts(category);
}

// Search Products
function searchProducts(query) {
    const searchQuery = query.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery) ||
        product.description.toLowerCase().includes(searchQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchQuery))
    );
    
    showPage('shop');
    displayProducts(filtered);
}

// Floating Menu Toggle
function toggleMenu() {
    const menu = document.getElementById('floatingMenu');
    menu.classList.toggle('active');
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    // Show home page by default
    showPage('home');
    
    // Initialize cart badge
    updateCartBadge();
    
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // Initialize search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length >= 2) {
                searchProducts(e.target.value);
            } else if (e.target.value.length === 0) {
                displayProducts();
            }
        });
    }
});
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b169?w=100&h=100&fit=crop",
        product: "LG Refrigerator"
    },
    {
        id: 3,
        name: "Amit Kumar",
        location: "Kalyan East",
        rating: 4,
        comment: "Great prices and excellent after-sales service. The washing machine has been trouble-free for 2 years now.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        product: "LG Washing Machine"
    }
];

// Application State
let cart = JSON.parse(localStorage.getItem('jyotiElectronCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('jyotiElectronWishlist')) || [];
let compareList = JSON.parse(localStorage.getItem('jyotiElectronCompare')) || [];
let currentFilter = 'all';
let currentSort = 'name';
let currentView = 'grid';
let currentPage = 1;
let itemsPerPage = 9;

// Application Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize AOS animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // Load initial content
    setTimeout(() => {
        loadFeaturedProducts();
        loadAllProducts();
        loadTestimonials();
        updateCartDisplay();
        updateWishlistDisplay();
        initializeEventListeners();
        initializeScrollEffects();
        hideLoadingScreen();
        
        // Register PWA service worker
        registerServiceWorker();
    }, 1500);
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Event Listeners Initialization
function initializeEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
    
    // Price range filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', handlePriceRangeChange);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Back to top button
    window.addEventListener('scroll', handleBackToTopVisibility);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Cart persistence
    window.addEventListener('beforeunload', saveCartToStorage);
}

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navigation Functions
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Load page-specific content
        switch(pageId) {
            case 'shop':
                loadAllProducts();
                break;
            case 'cart':
                loadCartItems();
                break;
            case 'about':
                animateCounters();
                break;
        }
        
        // Update URL without page reload
        updateURL(pageId);
        
        // Re-initialize AOS for new content
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
}

function updateURL(pageId) {
    const newURL = pageId === 'home' ? '/' : `/#${pageId}`;
    history.pushState({ page: pageId }, '', newURL);
}

// Floating Menu Functions
function toggleMenu() {
    const menu = document.getElementById('floatingMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Product Display Functions
function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;
    
    const featured = products.slice(0, 3);
    
    container.innerHTML = featured.map(product => createProductCard(product, true)).join('');
}

function loadAllProducts() {
    const container = document.getElementById('productGrid');
    if (!container) return;
    
    let filteredProducts = filterProducts();
    filteredProducts = sortProducts(filteredProducts);
    
    // Pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    container.innerHTML = paginatedProducts.map(product => createProductCard(product)).join('');
    
    updateProductCount(filteredProducts.length);
    createPagination(filteredProducts.length);
    updateActiveFilters();
}

function createProductCard(product, isFeatured = false) {
    const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const isInCompare = compareList.some(item => item.id === product.id);
    
    return `
        <div class="col-md-4 ${isFeatured ? '' : 'mb-4'}" data-aos="fade-up" data-aos-delay="${isFeatured ? '0' : '100'}">
            <div class="product-card" onclick="showProductDetail(${product.id})">
                <div class="product-image" style="background-image: url('${product.image}')">
                    ${product.discount > 0 ? `<div class="discount-badge">${discountPercent}% OFF</div>` : ''}
                    <div class="product-actions">
                        <button class="action-btn ${isInWishlist ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" title="Add to Wishlist">
                            <i class="fas fa-heart"></i>
                        </button>
                        <button class="action-btn ${isInCompare ? 'active' : ''}" onclick="event.stopPropagation(); toggleCompare(${product.id})" title="Compare">
                            <i class="fas fa-balance-scale"></i>
                        </button>
                        <button class="action-btn" onclick="event.stopPropagation(); quickView(${product.id})" title="Quick View">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="product-overlay">
                        <button class="quick-view-btn" onclick="event.stopPropagation(); quickView(${product.id})">
                            Quick View
                        </button>
                    </div>
                </div>
                <div class="p-3">
                    <div class="product-rating mb-2">
                        ${generateStarRating(product.rating)}
                        <span class="text-muted small">(${product.reviews})</span>
                    </div>
                    <h5 class="mb-2 product-title">${product.name}</h5>
                    <div class="price-section mb-2">
                        <span class="current-price text-lg-red fw-bold">₹${product.price.toLocaleString()}</span>
                        ${product.originalPrice > product.price ? 
                            `<span class="original-price text-muted text-decoration-line-through ms-2">₹${product.originalPrice.toLocaleString()}</span>` 
                            : ''}
                    </div>
                    <div class="product-tags mb-2">
                        ${product.tags.slice(0, 2).map(tag => `<span class="product-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn bg-lg-red text-white btn-sm rounded-custom flex-fill" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="fas fa-shopping-cart me-1"></i>Add to Cart
                        </button>
                        <button class="btn btn-outline-danger btn-sm rounded-custom" onclick="event.stopPropagation(); buyNow(${product.id})">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    
    return stars;
}

// Filter and Sort Functions
function filterProducts(category = currentFilter) {
    currentFilter = category;
    let filtered = category === 'all' ? [...products] : products.filter(p => p.category === category);
    
    // Apply price filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        const maxPrice = parseInt(priceRange.value);
        filtered = filtered.filter(p => p.price <= maxPrice);
    }
    
    // Apply feature filters
    const smartFeatures = document.getElementById('smartFeatures');
    const energyEfficient = document.getElementById('energyEfficient');
    const inverterTech = document.getElementById('inverterTech');
    
    if (smartFeatures && smartFeatures.checked) {
        filtered = filtered.filter(p => p.tags.includes('smart') || p.tags.includes('ai'));
    }
    
    if (energyEfficient && energyEfficient.checked) {
        filtered = filtered.filter(p => p.tags.includes('energy-efficient'));
    }
    
    if (inverterTech && inverterTech.checked) {
        filtered = filtered.filter(p => p.tags.includes('inverter') || p.tags.includes('dual-inverter'));
    }
    
    return filtered;
}

function sortProducts(products) {
    const sortSelect = document.getElementById('sortSelect');
    const sortBy = sortSelect ? sortSelect.value : currentSort;
    currentSort = sortBy;
    
    return [...products].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        loadAllProducts();
        return;
    }
    
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.features.some(feature => feature.toLowerCase().includes(query)) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
    );
    
    const container = document.getElementById('productGrid');
    if (container) {
        container.innerHTML = filtered.map(product => createProductCard(product)).join('');
        updateProductCount(filtered.length);
    }
    
    // Show shop page if not already visible
    if (!document.getElementById('shopPage').classList.contains('active')) {
        showPage('shop');
    }
}

function handlePriceRangeChange() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    if (priceRange && priceValue) {
        priceValue.textContent = `₹${parseInt(priceRange.value).toLocaleString()}`;
        loadAllProducts();
    }
}

function clearFilters() {
    // Reset filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    document.querySelector('.filter-chip[onclick="filterProducts(\'all\')"]').classList.add('active');
    
    // Reset checkboxes
    document.querySelectorAll('.filter-section input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.value = priceRange.max;
        handlePriceRangeChange();
    }
    
    // Reset filters and reload
    currentFilter = 'all';
    loadAllProducts();
}

function updateActiveFilters() {
    const activeFiltersContainer = document.getElementById('activeFilters');
    if (!activeFiltersContainer) return;
    
    const activeFilters = [];
    
    if (currentFilter !== 'all') {
        activeFilters.push({
            label: currentFilter.replace('-', ' ').toUpperCase(),
            action: () => filterProducts('all')
        });
    }
    
    // Add other active filters based on checkboxes, price range, etc.
    const smartFeatures = document.getElementById('smartFeatures');
    if (smartFeatures && smartFeatures.checked) {
        activeFilters.push({
            label: 'Smart Features',
            action: () => smartFeatures.checked = false
        });
    }
    
    activeFiltersContainer.innerHTML = activeFilters.map(filter => 
        `<span class="filter-tag" onclick="(${filter.action})(); loadAllProducts();">
            ${filter.label} <i class="fas fa-times ms-1"></i>
        </span>`
    ).join('');
}

// Product Detail Functions
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const container = document.getElementById('productDetail');
    if (!container) return;
    
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

    container.innerHTML = `
        <div class="row">
            <div class="col-lg-6">
                <div class="product-gallery">
                    <div class="gallery-main" id="mainImage" style="background-image: url('${product.images[0]}')">
                        <div class="gallery-controls">
                            <button class="gallery-btn" onclick="previousImage()"><i class="fas fa-chevron-left"></i></button>
                            <button class="gallery-btn" onclick="nextImage()"><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="gallery-indicators">
                            ${product.images.map((_, index) => 
                                `<span class="indicator ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${product.images[index]}', ${index})"></span>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="gallery-thumbs">
                        ${product.images.map((img, index) => `
                            <div class="thumb ${index === 0 ? 'active' : ''}" 
                                 style="background-image: url('${img}')"
                                 onclick="changeMainImage('${img}', ${index})"></div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="product-info">
                    <div class="product-badges mb-3">
                        ${product.inStock ? '<span class="badge bg-success">In Stock</span>' : '<span class="badge bg-danger">Out of Stock</span>'}
                        ${product.discount > 0 ? `<span class="badge bg-warning text-dark">${product.discount}% Off</span>` : ''}
                    </div>
                    
                    <h1 class="product-title mb-3">${product.name}</h1>
                    
                    <div class="product-rating mb-3">
                        ${generateStarRating(product.rating)}
                        <span class="rating-text ms-2">${product.rating}/5 (${product.reviews} reviews)</span>
                    </div>
                    
                    <div class="price-section mb-4">
                        <div class="current-price h3 text-lg-red mb-2">₹${product.price.toLocaleString()}</div>
                        ${product.originalPrice > product.price ? 
                            `<div class="original-price text-muted text-decoration-line-through">₹${product.originalPrice.toLocaleString()}</div>
                             <div class="savings text-success">You save ₹${(product.originalPrice - product.price).toLocaleString()}</div>` 
                            : ''}
                    </div>
                    
                    <p class="product-description mb-4">${product.description}</p>
                    
                    <div class="product-actions mb-4">
                        <div class="row g-2">
                            <div class="col-12">
                                <button class="btn bg-lg-red text-white w-100 btn-lg rounded-custom" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                                    <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-outline-danger w-100 rounded-custom" onclick="buyNow(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                                    <i class="fas fa-bolt me-2"></i>Buy Now
                                </button>
                            </div>
                            <div class="col-6">
                                <button class="btn btn-outline-secondary w-100 rounded-custom ${isInWishlist ? 'active' : ''}" onclick="toggleWishlist(${product.id})">
                                    <i class="fas fa-heart me-2"></i>${isInWishlist ? 'Wishlisted' : 'Wishlist'}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-features mb-4">
                        <h5 class="mb-3">Key Features</h5>
                        <div class="row g-3">
                            ${product.features.map(feature => `
                                <div class="col-md-6">
                                    <div class="feature-item d-flex align-items-center">
                                        <i class="fas fa-check-circle text-lg-red me-2"></i>
                                        <span>${feature}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="warranty-info bg-light p-3 rounded-custom">
                        <h6 class="mb-2"><i class="fas fa-shield-alt text-lg-red me-2"></i>Warranty Information</h6>
                        <p class="mb-0 small">${product.warranty}</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Product Tabs -->
        <div class="product-tabs mt-5">
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" href="#specifications">Specifications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#reviews">Reviews</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#delivery">Delivery & Installation</a>
                </li>
            </ul>
            
            <div class="tab-content mt-3">
                <div class="tab-pane fade show active" id="specifications">
                    <div class="specifications-table">
                        <table class="table table-striped">
                            ${Object.entries(product.specifications).map(([key, value]) => `
                                <tr>
                                    <td class="fw-semibold">${key}</td>
                                    <td>${value}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>
                </div>
                
                <div class="tab-pane fade" id="reviews">
                    <div class="reviews-section">
                        <div class="reviews-summary mb-4">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="rating-overview text-center">
                                        <div class="average-rating h2 text-lg-red">${product.rating}</div>
                                        <div class="rating-stars">${generateStarRating(product.rating)}</div>
                                        <div class="total-reviews text-muted">${product.reviews} reviews</div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="rating-breakdown">
                                        ${[5,4,3,2,1].map(star => {
                                            const percentage = Math.random() * 60 + 20; // Demo data
                                            return `
                                                <div class="rating-bar d-flex align-items-center mb-2">
                                                    <span class="rating-label">${star} star</span>
                                                    <div class="progress flex-fill mx-3">
                                                        <div class="progress-bar bg-warning" style="width: ${percentage}%"></div>
                                                    </div>
                                                    <span class="rating-count">${Math.floor(percentage)}%</span>
                                                </div>
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-list">
                            ${generateSampleReviews(product.id)}
                        </div>
                    </div>
                </div>
                
                <div class="tab-pane fade" id="delivery">
                    <div class="delivery-info">
                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="info-card">
                                    <h5><i class="fas fa-shipping-fast text-lg-red me-2"></i>Free Delivery</h5>
                                    <p>Free delivery available within Kalyan city limits. Same day delivery available for orders placed before 2 PM.</p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="info-card">
                                    <h5><i class="fas fa-tools text-lg-red me-2"></i>Professional Installation</h5>
                                    <p>Complimentary installation by certified technicians. Demo and orientation included with every purchase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Related Products -->
        ${relatedProducts.length > 0 ? `
            <div class="related-products mt-5">
                <h3 class="mb-4">Related Products</h3>
                <div class="row g-4">
                    ${relatedProducts.map(relatedProduct => createProductCard(relatedProduct)).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    // Store current images for gallery navigation
    window.currentProductImages = product.images;
    window.currentImageIndex = 0;
    
    showPage('product');
}

function changeMainImage(imageSrc, index) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.backgroundImage = `url('${imageSrc}')`;
    }
    
    // Update active states
    document.querySelectorAll('.thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    document.querySelectorAll('.indicator').forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
    
    window.currentImageIndex = index;
}

function previousImage() {
    if (!window.currentProductImages) return;
    
    window.currentImageIndex = window.currentImageIndex > 0 
        ? window.currentImageIndex - 1 
        : window.currentProductImages.length - 1;
    
    changeMainImage(window.currentProductImages[window.currentImageIndex], window.currentImageIndex);
}

function nextImage() {
    if (!window.currentProductImages) return;
    
    window.currentImageIndex = window.currentImageIndex < window.currentProductImages.length - 1 
        ? window.currentImageIndex + 1 
        : 0;
    
    changeMainImage(window.currentProductImages[window.currentImageIndex], window.currentImageIndex);
}

function generateSampleReviews(productId) {
    const sampleReviews = [
        {
            name: "Rohit M.",
            rating: 5,
            date: "2 weeks ago",
            comment: "Excellent product! Exactly as described. The quality is outstanding and delivery was quick.",
            helpful: 12
        },
        {
            name: "Sneha P.",
            rating: 4,
            date: "1 month ago", 
            comment: "Good value for money. Installation team was professional. Minor issue with remote but got resolved quickly.",
            OLED Self-Lit Pixels",
            "4K α9 Gen6 AI Processor",
            "Dolby Vision IQ & Dolby Atmos",
            "webOS 23 Smart Platform",
            "NVIDIA G-SYNC Compatible",
            "4 HDMI 2.1 Ports"
        ],
        specifications: {
            "Screen Size": "55 inches",
            "Resolution": "4K Ultra HD (3840 x 2160)",
            "Display Type": "OLED",
            "Smart TV": "webOS 23",
            "HDR": "Dolby Vision IQ, HDR10 Pro",
            "Audio": "40W, Dolby Atmos",
            "Connectivity": "Wi-Fi, Bluetooth, 4x HDMI 2.1",
            "Dimensions": "122.8 x 70.6 x 4.6 cm",
            "Weight": "18.7 kg"
        },
        inStock: true,
        discount: 19,
        tags: ["smart", "4k", "oled", "gaming"],
        warranty: "2 Years Comprehensive + 5 Years Panel"
    },
    {
        id: 2,
        name: "LG 260L Frost Free Double Door Refrigerator",
        price: 28990,
        originalPrice: 34990,
        category: "refrigerator",
        brand: "LG",
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
        ],
        description: "Smart inverter technology meets efficient cooling with LG's advanced refrigeration system. Keep your food fresh longer with optimal temperature control.",
        features: [
            "Smart Inverter Compressor",
            "Multi Air Flow",
            "Moist 'N' Fresh",
            "Smart Diagnosis",
            "Door Cooling+",
            "Toughened Glass Shelves"
        ],
        specifications: {
            "Capacity": "260 Liters",
            "Type": "Frost Free Double Door",
            "Energy Rating": "5 Star",
            "Compressor": "Smart Inverter",
            "Shelves": "Toughened Glass",
            "Warranty": "10 Years on Compressor",
            "Dimensions": "55.5 x 64.5 x 150 cm",
            "Weight": "52 kg"
        },
        inStock: true,
        discount: 17,
        tags: ["energy-efficient", "smart", "frost-free"],
        warranty: "2 Years Product + 10 Years Compressor"
    },
    {
        id: 3,
        name: "LG 7kg Front Load Washing Machine",
        price: 35990,
        originalPrice: 42990,
        category: "washing-machine",
        brand: "LG",
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1558618047-fbd67c35803b?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558618047-fbd67c35803b?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&h=400&fit=crop"
        ],
        description: "Revolutionary washing technology with AI Direct Drive that delivers powerful performance while being gentle on your clothes.",
        features: [
            "AI DD (Direct Drive)",
            "Steam Wash",
            "Smart Diagnosis",
            "6 Motion DD",
            "Allergiene Cycle",
            "Smart ThinQ App"
        ],
        specifications: {
            "Capacity": "7 kg",
            "Type": "Front Load",
            "Energy Rating": "5 Star",
            "Motor": "AI Direct Drive",
            "Programs": "14 Wash Programs",
            "Speed": "1400 RPM",
            "Dimensions": "60 x 56 x 85 cm",
            "Weight": "62 kg"
        },
        inStock: true,
        discount: 16,
        tags: ["ai", "steam", "direct-drive"],
        warranty: "2 Years Product + 10 Years Motor"
    },
    {
        id: 4,
        name: "LG 1.5 Ton Dual Inverter Split AC",
        price: 45990,
        originalPrice: 52990,
        category: "ac",
        brand: "LG",
        rating: 4.5,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1591767177019-8c07dd36b465?w=600&h=400&fit=crop"
        ],
        description: "Experience superior cooling with Dual Inverter technology that adapts to cooling needs while saving energy and reducing noise.",
        features: [
            "Dual Inverter Compressor",
            "Copper Condenser",
            "4-Way Swing",
            "Wi-Fi Control",
            "Ocean Black Protection",
            "Low Gas Detection"
        ],
        specifications: {
            "Capacity": "1.5 Ton",
            "Type": "Split AC",
            "Energy Rating": "5 Star",
            "Compressor": "Dual Inverter",
            "Cooling": "5100W",
            "Refrigerant": "R32",
            "Noise Level": "38 dB",
            "Room Size": "150-180 sq ft"
        },
        inStock: true,
        discount: 13,
        tags: ["dual-inverter", "wifi", "energy-efficient"],
        warranty: "1 Year Product + 10 Years Compressor"
    },
    {
        id: 5,
        name: "LG 28L Convection Microwave Oven",
        price: 15990,
        originalPrice: 18990,
        category: "microwave",
        brand: "LG",
        rating: 4.4,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1574269910919-0a2ad7d7e0c0?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1574269910919-0a2ad7d7e0c0?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=600&h=400&fit=crop"
        ],
        description: "Multi-functional cooking companion with convection technology for baking, grilling, reheating, and defrosting all in one appliance.",
        features: [
            "