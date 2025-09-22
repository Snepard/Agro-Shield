import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, X, ChevronDown, Filter, Star, CheckSquare, Square, LoaderCircle } from 'lucide-react';

import S from '../assets/landing.png';

import landingImage from '../assets/landing.png';

import landingImage from '../assets/landing.png';

import landingImage from '../assets/landing.png';

// --- IMPORTANT: ADD YOUR PEXELS API KEY HERE ---
// Get a free key from https://www.pexels.com/api/
const PEXELS_API_KEY = '6F2tKZvOKoxSAaeZb6r1ypm4pKjvUDRgSh6eAApdMgnTYDTtkDW8rlrZ';

// --- BASE PRODUCT DATA (IMAGES WILL BE FETCHED DYNAMICALLY) ---
const initialProductsData = [
    { id: 1, name: "EcoGrowth Organic Fertilizer", price: 850, originalPrice: 1100, discount: 23, image: "https://i.ibb.co/HhVvVw2/pexels-akil-mazumder-1072824.jpg", category: "fertilizers", brand: "GreenLeaf", rating: 5, searchQuery: "organic fertilizer" },
    { id: 2, name: "Advanced Hybrid Corn Seeds", price: 1200, originalPrice: 1500, discount: 20, image: "https://i.ibb.co/Rz0d507/pexels-mark-p-68045.jpg", category: "seeds", brand: "FarmGen", rating: 4, searchQuery: "corn field" },
    { id: 3, name: "PestGuard Max Strength Pesticide", price: 720, originalPrice: 950, discount: 24, image: "https://i.ibb.co/3Wf4b7Z/pexels-roman-odintsov-5653733.jpg", category: "pesticides", brand: "AgroSafe", rating: 4, searchQuery: "crop spraying" },
    { id: 4, name: "Heavy-Duty Steel Garden Hoe", price: 450, originalPrice: 600, discount: 25, image: "https://i.ibb.co/CBr21Jt/pexels-karolina-grabowska-6624233.jpg", category: "tools", brand: "IronGrip", rating: 5, searchQuery: "gardening tools" },
    { id: 5, name: "Farmson F1 Hybrid Sunflower Seeds", price: 705, originalPrice: 1028, discount: 31, image: "https://i.ibb.co/P9tLwzF/pexels-pixabay-46231.jpg", category: "seeds", brand: "FarmGen", rating: 4, searchQuery: "sunflower seeds" },
    { id: 6, name: "Digital 3-in-1 Soil Meter", price: 950, originalPrice: 1200, discount: 21, image: "https://i.ibb.co/zXqG9zX/pexels-gary-barnes-6231612.jpg", category: "tools", brand: "AgroTech", rating: 4, searchQuery: "soil testing" },
    { id: 7, name: "AgriBegri Combo Pack", price: 622, originalPrice: 898, discount: 30, image: "https://i.ibb.co/6y405M6/pexels-dominika-roseclay-1140134.jpg", category: "pesticides", brand: "GreenLeaf", rating: 3, searchQuery: "farm products" },
    { id: 8, name: "Manual Fertilizer Spreader", price: 1300, originalPrice: 1650, discount: 21, image: "https://i.ibb.co/M6N2W4V/pexels-zain-ali-17882110.jpg", category: "tools", brand: "IronGrip", rating: 3, searchQuery: "gardening spreader" },
    { id: 9, name: "Heirloom Tomato Seeds Pack", price: 350, originalPrice: 500, discount: 30, image: "https://i.ibb.co/K7s3yTf/pexels-lisa-fotios-139303.jpg", category: "seeds", brand: "FarmGen", rating: 5, searchQuery: "heirloom tomato" },
    { id: 10, name: "Durable Farming Gloves", price: 250, originalPrice: 350, discount: 29, image: "https://i.ibb.co/6HqXmJd/pexels-zen-chung-5538059.jpg", category: "tools", brand: "IronGrip", rating: 4, searchQuery: "gardening gloves" },
    { id: 11, name: "Natural Neem Oil Pesticide", price: 480, originalPrice: 600, discount: 20, image: "https://i.ibb.co/GcLs9P7/pexels-yash-s-4386466.jpg", category: "pesticides", brand: "GreenLeaf", rating: 5, searchQuery: "natural pesticide" },
    { id: 12, name: "All-Purpose Plant Nutrient Mix", price: 900, originalPrice: 1150, discount: 22, image: "https://i.ibb.co/pwn8L1H/pexels-svetozar-milashevich-1459339.jpg", category: "fertilizers", brand: "AgroTech", rating: 4, searchQuery: "plant nutrients" },
    { id: 13, name: "Wildflower Seed Mix (1kg)", price: 1500, originalPrice: 1800, discount: 17, image: "https://i.ibb.co/y4YJxyC/pexels-pixabay-268261.jpg", category: "seeds", brand: "GreenLeaf", rating: 5, searchQuery: "wildflowers" },
    { id: 14, name: "Fungal Disease Control Spray", price: 650, originalPrice: 800, discount: 19, image: "https://i.ibb.co/n6z4cm2/pexels-sittichai-1296204.jpg", category: "pesticides", brand: "AgroSafe", rating: 4, searchQuery: "crop spray" },
    { id: 15, name: "Ergonomic Hand Pruning Shears", price: 550, originalPrice: 700, discount: 21, image: "https://i.ibb.co/x1bB50b/pexels-galina-l-1577726.jpg", category: "tools", brand: "IronGrip", rating: 5, searchQuery: "pruning shears" },
    { id: 16, name: "Liquid Seaweed Fertilizer", price: 980, originalPrice: 1200, discount: 18, image: "https://i.ibb.co/hK8bdtB/pexels-wendy-wei-2813133.jpg", category: "fertilizers", brand: "AgroTech", rating: 5, searchQuery: "liquid fertilizer" },
    { id: 17, name: "Professional Grafting Knife", price: 400, originalPrice: 500, discount: 20, image: "https://i.ibb.co/bF9FjB7/pexels-tim-gouw-1300949.jpg", category: "tools", brand: "AgroTech", rating: 4, searchQuery: "grafting knife" },
    { id: 18, name: "Organic Compost Starter", price: 750, originalPrice: 900, discount: 17, image: "https://i.ibb.co/K93jCgq/pexels-olia-danilevich-5011603.jpg", category: "fertilizers", brand: "GreenLeaf", rating: 4, searchQuery: "compost" },
    { id: 19, "name": "Insect Repellent Garden Spray", "price": 530, "originalPrice": 700, "discount": 24, "image": "https://i.ibb.co/0VpMS8C/pexels-tima-miroshnichenko-6539217.jpg", "category": "pesticides", "brand": "AgroSafe", "rating": 3, searchQuery: "garden spray" },
    { id: 20, "name": "Premium Carrot Seeds", "price": 250, "originalPrice": 350, "discount": 29, "image": "https://i.ibb.co/mHq33C0/pexels-zen-chung-5531003.jpg", "category": "seeds", "brand": "FarmGen", "rating": 5, searchQuery: "carrots growing" }
];

// --- CHILD COMPONENTS ---

const FloatingControls = ({ onSearch, onCartClick, cartCount }) => (
    <motion.div className="fixed bottom-6 right-6 z-40" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5">
            <div className="relative">
                <input type="text" placeholder="Search products..." onChange={(e) => onSearch(e.target.value)}
                    className="w-48 sm:w-64 py-2 pl-10 pr-4 text-gray-700 bg-slate-100 border-2 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <button onClick={onCartClick} className="relative text-white bg-green-600 hover:bg-green-700 transition-colors p-3 rounded-full shadow-lg">
                <ShoppingCart size={24} />
                {cartCount > 0 && 
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center ring-2 ring-white">{cartCount}</span>
                }
            </button>
        </div>
    </motion.div>
);

const FilterSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="border-b border-slate-200 py-6">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left text-slate-700 hover:text-slate-900">
                <h3 className="text-lg font-semibold">{title}</h3>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                        <div className="pt-4">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const StarRating = ({ rating }) => (
    <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => <Star key={star} className={`h-5 w-5 ${rating >= star ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />)}
    </div>
);

const FilterSidebar = ({ filters, setFilters, isSidebarOpen, setIsSidebarOpen }) => {
    const allBrands = useMemo(() => [...new Set(initialProductsData.map(p => p.brand))], []);

    const handleBrandChange = (brand) => {
        const currentBrands = filters.brands || [];
        const newBrands = currentBrands.includes(brand) ? currentBrands.filter(b => b !== brand) : [...currentBrands, brand];
        setFilters({ ...filters, brands: newBrands });
    };

    const filterContent = (
        <>
            <FilterSection title="Category">
                <div className="flex flex-col space-y-2">
                    {['all', 'seeds', 'pesticides', 'tools', 'fertilizers'].map(category => (
                        <button key={category} onClick={() => setFilters({ ...filters, category })}
                            className={`text-left px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center ${
                                filters.category === category ? 'bg-green-100 text-green-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                             <span className={`h-2 w-2 rounded-full mr-3 ${filters.category === category ? 'bg-green-500' : 'bg-slate-300'}`}></span>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </FilterSection>
            <FilterSection title="Brands">
                <div className="flex flex-col space-y-3">
                    {allBrands.map(brand => (
                        <label key={brand} className="flex items-center cursor-pointer p-1 -ml-1 rounded-md hover:bg-slate-50">
                            <input type="checkbox" className="hidden" checked={filters.brands.includes(brand)} onChange={() => handleBrandChange(brand)} />
                            {filters.brands.includes(brand) ? <CheckSquare className="h-5 w-5 text-green-600" /> : <Square className="h-5 w-5 text-slate-400" />}
                            <span className="ml-2 text-slate-700">{brand}</span>
                        </label>
                    ))}
                </div>
            </FilterSection>
            <FilterSection title="Rating">
                <div className="flex flex-col space-y-2">
                    {[5, 4, 3, 2, 1].map(rating => (
                        <button key={rating} onClick={() => setFilters({ ...filters, rating: filters.rating === rating ? 0 : rating })} 
                            className={`flex items-center p-2 rounded-lg ${filters.rating === rating ? 'bg-yellow-100/60' : 'hover:bg-slate-50'}`}>
                            <StarRating rating={rating} />
                            <span className="ml-2 text-sm text-slate-600">& up</span>
                        </button>
                    ))}
                </div>
            </FilterSection>
            <FilterSection title="Budget">
                <input type="range" min="0" max="2000" value={filters.budget} onChange={(e) => setFilters({ ...filters, budget: Number(e.target.value) })}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
                <p className="text-center font-medium text-slate-700 mt-2">Up to ₹{filters.budget}</p>
            </FilterSection>
        </>
    );
    
    return (
        <>
            <aside className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-8 self-start h-[calc(100vh-4rem)] overflow-y-auto pr-6 custom-scrollbar">
                     <h2 className="text-2xl font-bold text-slate-900 mb-4">Filters</h2>
                     {filterContent}
                </div>
            </aside>
            <AnimatePresence>
            {isSidebarOpen && (
                 <motion.div className="fixed inset-0 z-40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSidebarOpen(false)}>
                     <div className="absolute inset-0 bg-black/40"/>
                 </motion.div>
            )}
            </AnimatePresence>
            <motion.aside className="fixed top-0 left-0 h-full w-80 bg-white z-50 p-6 overflow-y-auto lg:hidden custom-scrollbar" initial={{x: "-100%"}} animate={{x: isSidebarOpen ? 0 : "-100%"}} transition={{ type: "tween", duration: 0.3 }}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-green-800">Filters</h2>
                    <button onClick={() => setIsSidebarOpen(false)}><X className="h-6 w-6" /></button>
                </div>
                {filterContent}
            </motion.aside>
        </>
    );
};

const ProductCard = ({ product, onAddToCart }) => (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 group relative flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">-{product.discount}%</div>
        <div className="w-full h-56 overflow-hidden bg-slate-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <div className="flex-grow">
                <p className="text-xs text-slate-500 uppercase mb-1">{product.brand}</p>
                <h3 className="text-md font-semibold text-slate-800 mb-2 h-12 leading-tight">{product.name}</h3>
                <StarRating rating={product.rating} />
            </div>
            <div className="mt-4">
                <div className="flex items-baseline space-x-2 mb-4">
                    <p className="text-2xl font-bold text-green-700">₹{product.price.toFixed(2)}</p>
                    <p className="text-sm text-slate-400 line-through">₹{product.originalPrice.toFixed(2)}</p>
                </div>
                <button onClick={() => onAddToCart(product)}
                    className="w-full bg-green-600 text-white py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-green-700 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg">
                    <ShoppingCart size={18}/><span>Add to Cart</span>
                </button>
            </div>
        </div>
    </div>
);

const LoadingSkeleton = () => (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 animate-pulse">
        <div className="w-full h-56 bg-slate-200"></div>
        <div className="p-5">
            <div className="h-3 bg-slate-200 rounded w-1/4 mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-slate-200 rounded w-3/4 mb-3"></div>
            <div className="flex items-center mb-4">
                <div className="h-5 w-24 bg-slate-200 rounded"></div>
            </div>
            <div className="flex items-baseline space-x-2 mb-4">
                <div className="h-8 w-1/3 bg-slate-200 rounded"></div>
                <div className="h-4 w-1/4 bg-slate-200 rounded"></div>
            </div>
            <div className="w-full h-11 bg-slate-200 rounded-lg"></div>
        </div>
    </div>
)

// --- MAIN MARKET COMPONENT ---
const Market = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [filters, setFilters] = useState({
        searchTerm: '', category: 'all', brands: [], rating: 0, budget: 2000, sortBy: 'rating_desc'
    });

    useEffect(() => {
        const fetchProductImages = async () => {
            if (PEXELS_API_KEY === 'YOUR_PEXELS_API_KEY') {
                console.warn("Pexels API key is missing. Using fallback images.");
                setProducts(initialProductsData);
                setIsLoading(false);
                return;
            }

            const productsWithFetchedImages = await Promise.all(
                initialProductsData.map(async (product) => {
                    try {
                        const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(product.searchQuery)}&per_page=1`, {
                            headers: { Authorization: PEXELS_API_KEY }
                        });
                        if (!response.ok) throw new Error(`Pexels API Error: ${response.statusText}`);
                        const data = await response.json();
                        const imageUrl = data.photos[0]?.src?.large || product.image;
                        return { ...product, image: imageUrl };
                    } catch (error) {
                        console.error(`Failed to fetch image for ${product.name}:`, error);
                        return product; // Return product with fallback image on error
                    }
                })
            );
            setProducts(productsWithFetchedImages);
            setIsLoading(false);
        };
        fetchProductImages();
    }, []);

    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products
            .filter(p => p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()))
            .filter(p => filters.category === 'all' || p.category === filters.category)
            .filter(p => p.price <= filters.budget)
            .filter(p => filters.brands.length === 0 || filters.brands.includes(p.brand))
            .filter(p => p.rating >= filters.rating);
        
        const sortFunctions = { 'price_asc': (a, b) => a.price - b.price, 'price_desc': (a, b) => b.price - a.price, 'rating_desc': (a, b) => b.rating - a.rating };
        filtered.sort(sortFunctions[filters.sortBy]);
        
        return filtered;
    }, [filters, products]);

    const addToCart = (productToAdd) => {
      setCartItems(prev => prev.find(item => item.id === productToAdd.id) 
        ? prev.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item) 
        : [...prev, { ...productToAdd, quantity: 1 }]);
      alert(`${productToAdd.name} added to cart!`);
    };
    
    const showCartModal = () => alert(`Cart Items: ${cartItems.length}\nTotal: ₹${cartItems.reduce((t, i) => t + i.price * i.quantity, 0).toFixed(2)}`);

    return (
        <div className="bg-slate-50 min-h-screen font-sans">
            <FloatingControls onSearch={(term) => setFilters({ ...filters, searchTerm: term })} onCartClick={showCartModal} cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
            <div className="container mx-auto flex px-4 sm:px-6 lg:px-8 py-12">
                <FilterSidebar filters={filters} setFilters={setFilters} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
                <main className="flex-grow lg:pl-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-8">
                        <div>
                            <h1 className="text-4xl font-bold text-slate-900">Our Marketplace</h1>
                            <p className="text-slate-500 mt-2">Find the best products for your farm and garden.</p>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                             <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-600 bg-white p-2 rounded-md border border-slate-200"><Filter size={20}/></button>
                             <select value={filters.sortBy} onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                className="border border-slate-300 rounded-lg p-2.5 text-sm focus:ring-green-500 focus:border-green-500 bg-white">
                                 <option value="rating_desc">Sort by Rating</option>
                                 <option value="price_asc">Price: Low to High</option>
                                 <option value="price_desc">Price: High to Low</option>
                             </select>
                        </div>
                    </div>
                    <div className="mb-4 text-sm text-slate-700">
                        {isLoading ? 'Loading products...' : `Showing ${filteredAndSortedProducts.length} of ${products.length} products`}
                    </div>
                    {isLoading ? (
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, i) => <LoadingSkeleton key={i} />)}
                        </div>
                    ) : filteredAndSortedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredAndSortedProducts.map(product => <ProductCard key={product.id} product={product} onAddToCart={addToCart} />)}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                            <h2 className="text-2xl font-semibold text-slate-700">No Products Found</h2>
                            <p className="text-slate-500 mt-2">Try adjusting your filters to see more results.</p>
                        </div>
                    )}
                </main>
            </div>
             <footer className="text-center p-8 bg-slate-100 text-slate-500 mt-16 border-t border-slate-200">
                <p>&copy; {new Date().getFullYear()} Agro-Shield. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Market;

