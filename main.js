// Main JavaScript for Jyoti Electron Website

// Product Data
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
        description: "Experience cinematic excellence with LG OLED's self-lit pixels delivering perfect black and infinite contrast.",
        features: [
            "Self-Lit OLED Pixels",
            "4K Resolution",
            "AI-Powered Processing",
            "Dolby Vision IQ",
            "Dolby Atmos",
            "HDMI 2.1 Gaming Features"
        ],
        specifications: {
            "Screen Size": "55 inches",
            "Resolution": "4K Ultra HD",
            "Display": "OLED",
            "HDR": "Dolby Vision IQ, HDR10",
            "Processor": "α9 Gen6 AI",
            "Smart TV": "webOS 23",
            "Gaming Features": "NVIDIA G-SYNC, FreeSync",
            "Connectivity": "4x HDMI 2.1, 3x USB"
        },
        inStock: true,
        discount: 16,
        tags: ["oled", "4k", "smart-tv", "gaming"],
        warranty: "1 Year Standard + 1 Year Panel"
    },
    {
        id: 2,
        name: "LG 260L Frost Free Refrigerator",
        price: 28990,
        originalPrice: 34990,
        category: "refrigerator",
        brand: "LG",
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=400&fit=crop"
        ],
        description: "Smart inverter compressor with door cooling+ for efficient cooling and longer freshness.",
        features: [
            "Smart Inverter Compressor",
            "Door Cooling+",
            "Multi Air Flow",
            "Auto Smart Connect",
            "Anti-bacterial Gasket",
            "Humidity Controller"
        ],
        specifications: {
            "Capacity": "260 Liters",
            "Type": "Frost Free",
            "Energy Rating": "3 Star",
            "Shelves": "Toughened Glass",
            "Door": "Double Door",
            "Warranty": "1 Year Product + 10 Years Compressor"
        },
        inStock: true,
        discount: 17,
        tags: ["refrigerator", "inverter", "frost-free"],
        warranty: "1 Year Product + 10 Years Compressor"
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
        comment: "Amazing experience! Free delivery and installation was done professionally. The refrigerator is working perfectly.",
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

// Initialize cart from localStorage or empty array
function updateCartBadge() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

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

// Page Navigation
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
    const allFilter = document.querySelector('.filter-chip[onclick="filterProducts(\'all\')"]');
    if (allFilter) {
        allFilter.classList.add('active');
    }
    
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
    localStorage.setItem('jyotiElectronCart', JSON.stringify(cart));
    updateCartBadge();
    showToast('Product added to cart!');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('jyotiElectronCart', JSON.stringify(cart));
    updateCartBadge();
    loadCartItems();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + delta);
        localStorage.setItem('jyotiElectronCart', JSON.stringify(cart));
        updateCartBadge();
        loadCartItems();
    }
}

function loadCartItems() {
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

// Wishlist Functions
function toggleWishlist(productId) {
    const existingIndex = wishlist.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        wishlist.splice(existingIndex, 1);
        showToast('Removed from wishlist');
    } else {
        const product = products.find(p => p.id === productId);
        if (product) {
            wishlist.push(product);
            showToast('Added to wishlist');
        }
    }
    
    localStorage.setItem('jyotiElectronWishlist', JSON.stringify(wishlist));
    updateWishlistDisplay();
}

function updateWishlistDisplay() {
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function toggleCompare(productId) {
    const existingIndex = compareList.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
        compareList.splice(existingIndex, 1);
        showToast('Removed from compare');
    } else {
        if (compareList.length >= 3) {
            showToast('Maximum 3 products can be compared');
            return;
        }
        const product = products.find(p => p.id === productId);
        if (product) {
            compareList.push(product);
            showToast('Added to compare');
        }
    }
    
    localStorage.setItem('jyotiElectronCompare', JSON.stringify(compareList));
}

function updateCartDisplay() {
    updateCartBadge();
}

function saveCartToStorage() {
    localStorage.setItem('jyotiElectronCart', JSON.stringify(cart));
    localStorage.setItem('jyotiElectronWishlist', JSON.stringify(wishlist));
    localStorage.setItem('jyotiElectronCompare', JSON.stringify(compareList));
}

// Product Detail Functions
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    showPage('product');
    
    // Store current images for gallery navigation
    window.currentProductImages = product.images;
    window.currentImageIndex = 0;
    
    // You would populate the product detail page here
    // This is a placeholder - implement based on your HTML structure
}

function quickView(productId) {
    // Quick view modal implementation
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Implement quick view modal
    showToast('Quick view feature - implement modal');
}

function buyNow(productId) {
    addToCart(productId);
    showPage('cart');
}

// Testimonials Functions
function loadTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;
    
    container.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card" data-aos="fade-up">
            <div class="testimonial-content">
                <div class="rating mb-2">
                    ${generateStarRating(testimonial.rating)}
                </div>
                <p class="comment">"${testimonial.comment}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div class="author-info">
                        <h5>${testimonial.name}</h5>
                        <span class="location">${testimonial.location}</span>
                        <span class="product">${testimonial.product}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Utility Functions
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
        <div class="toast-body">
            ${message}
        </div>
    `;
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade');
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

function updateProductCount(count) {
    const productCount = document.getElementById('productCount');
    if (productCount) {
        productCount.textContent = `${count} products found`;
    }
}

function createPagination(totalProducts) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">Previous</button>`;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Next</button>`;
    }
    
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    loadAllProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    // Add other active filters based on checkboxes
    const smartFeatures = document.getElementById('smartFeatures');
    if (smartFeatures && smartFeatures.checked) {
        activeFilters.push({
            label: 'Smart Features',
            action: () => {
                smartFeatures.checked = false;
                loadAllProducts();
            }
        });
    }
    
    const energyEfficient = document.getElementById('energyEfficient');
    if (energyEfficient && energyEfficient.checked) {
        activeFilters.push({
            label: 'Energy Efficient',
            action: () => {
                energyEfficient.checked = false;
                loadAllProducts();
            }
        });
    }
    
    const inverterTech = document.getElementById('inverterTech');
    if (inverterTech && inverterTech.checked) {
        activeFilters.push({
            label: 'Inverter Technology',
            action: () => {
                inverterTech.checked = false;
                loadAllProducts();
            }
        });
    }
    
    activeFiltersContainer.innerHTML = activeFilters.map((filter, index) => 
        `<span class="filter-tag" onclick="activeFilters[${index}].action()">
            ${filter.label} <i class="fas fa-times ms-1"></i>
        </span>`
    ).join('');
    
    // Store for onclick access
    window.activeFilters = activeFilters;
}

// Event Handler Functions
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your server
    console.log('Contact form submitted:', data);
    showToast('Thank you for your message! We will get back to you soon.');
    
    event.target.reset();
}

function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}

function handleBackToTopVisibility() {
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
}

function handleKeyboardShortcuts(event) {
    // Implement keyboard shortcuts if needed
    if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
}

function initializeScrollEffects() {
    // Implement scroll effects if needed
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    
    // Implement checkout process
    showToast('Redirecting to checkout...');
    // You would redirect to your checkout page here
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart badge
    updateCartBadge();
    updateWishlistDisplay();
    
    // Show home page by default
    showPage('home');
    
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
        const page = event.state?.page || 'home';
        showPage(page);
    });
    
    // Handle initial URL
    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
    }
});