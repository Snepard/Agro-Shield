import React, { useState } from 'react';

// Product data for the marketplace with added categories
const productsData = [
    { id: 1, name: "AgriBegri Combo Pack", price: 622, originalPrice: 898, discount: 59, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Combo+Pack", category: "pesticides" },
    { id: 2, name: "Farmson FB Sun777 F1 Hybrid Seeds", price: 705, originalPrice: 1028, discount: 31, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Sunflower+Seeds", category: "seeds" },
    { id: 3, name: "Geolife No Virus Chilly Special", price: 348, originalPrice: 800, discount: 57, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Geolife+No+Virus", category: "pesticides" },
    { id: 4, name: "Dr. Bacto's Combo, NPK Microbial", price: 706, originalPrice: 944, discount: 25, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Microbial+Fertilizer", category: "fertilizers" },
    { id: 5, name: "High-Yield Corn Seeds", price: 600, originalPrice: 850, discount: 30, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Corn+Seeds", category: "seeds" },
    { id: 6, name: "Soil Moisture Meter", price: 750, originalPrice: 900, discount: 16, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Moisture+Meter", category: "tools" },
    { id: 7, name: "Weeding Hoe", price: 280, originalPrice: 350, discount: 20, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Weeding+Hoe", category: "tools" },
    { id: 8, name: "Fertilizer Spreader", price: 1200, originalPrice: 1500, discount: 20, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Fertilizer+Spreader", category: "tools" },
    { id: 9, name: "Rose Plant Cuttings", price: 150, originalPrice: 200, discount: 25, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Rose+Cuttings", category: "seeds" },
    { id: 10, name: "Farming Gloves", price: 200, originalPrice: 250, discount: 20, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Farming+Gloves", category: "tools" }
];

// Main App Component
const App = () => {
    // State to manage the shopping cart items
    const [cartItems, setCartItems] = useState([]);
    // State to manage the wishlist items
    const [wishlistItems, setWishlistItems] = useState([]);
    // State for search functionality
    const [searchTerm, setSearchTerm] = useState('');
    // State for category filtering
    const [selectedCategory, setSelectedCategory] = useState('all');
    // State for message modal
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    // State for cart view modal
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    // State for wishlist view modal
    const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);

    // Filter products based on search term and category
    const filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Function to add a product to the cart
    const addToCart = (productToAdd) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === productToAdd.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...productToAdd, quantity: 1 }];
        });
        showMessageModal("Item added to cart!");
    };

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        showMessageModal("Item removed from cart.");
    };

    // Function to add a product to the wishlist
    const addToWishlist = (productToAdd) => {
        const isAlreadyInWishlist = wishlistItems.some(item => item.id === productToAdd.id);
        if (isAlreadyInWishlist) {
            showMessageModal("Item is already in your wishlist!");
            return;
        }
        setWishlistItems(prevItems => [...prevItems, productToAdd]);
        showMessageModal("Item added to wishlist!");
    };

    // Function to remove a product from the wishlist
    const removeFromWishlist = (productId) => {
        setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
        showMessageModal("Item removed from wishlist.");
    };

    // Helper function to calculate cart total
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    // Function to open and set the message modal
    const showMessageModal = (text) => {
        setMessage(text);
        setIsMessageModalOpen(true);
    };

    // Function to close the message modal
    const hideMessageModal = () => {
        setIsMessageModalOpen(false);
    };

    // Function to show the cart view modal
    const showCartModal = () => {
        setIsCartModalOpen(true);
    };

    // Function to close the cart view modal
    const hideCartModal = () => {
        setIsCartModalOpen(false);
    };

    // Function to show the wishlist view modal
    const showWishlistModal = () => {
        setIsWishlistModalOpen(true);
    };

    // Function to close the wishlist view modal
    const hideWishlistModal = () => {
        setIsWishlistModalOpen(false);
    };

    return (
        <div className="bg-[#F0FFF0] text-[#333] font-sans leading-relaxed min-h-screen flex flex-col">
            {/* Top Banner */}
            <div className="bg-[#145A32] text-white text-xs sm:text-sm text-center py-2">
                <p>Extra Discount On Online Payment</p>
            </div>

            {/* Main Header */}
            <header className="bg-gradient-to-r from-[#228B22] to-[#3CB371] text-white p-4 flex flex-col lg:flex-row justify-between items-center shadow-lg">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                    <span className="text-3xl font-bold">AgriBegri</span>
                    <a href="#" className="flex items-center space-x-2 text-white hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" /><path d="M10 6a1 1 0 011 1v4a1 1 0 01-2 0V7a1 1 0 011-1z" /><path d="M10 13a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1z" /></svg>
                        <span className="hidden sm:inline">Get on Google Play</span>
                    </a>
                </div>
                <div className="flex-grow max-w-xl w-full mx-0 sm:mx-8 mb-4 lg:mb-0">
                    <div className="flex rounded-full overflow-hidden shadow-md">
                        <input
                            type="text"
                            placeholder="Search Products, Categories or Brands"
                            className="w-full p-3 border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#145A32]"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-[#145A32] text-white px-5 py-3 transition-colors hover:bg-[#0E4324]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                    <span className="hidden lg:inline">Missed call to order: **7050606162**</span>
                    <a href="#" className="flex items-center space-x-1 hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-7-4a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd" /></svg>
                        <span>Ask Agro Experts</span>
                    </a>
                    <a href="#" className="hover:text-gray-200">Login</a>
                </div>
            </header>

            {/* Navigation / Filter Bar */}
            <nav className="bg-[#3CB371] text-white p-3 shadow-md">
                <div className="container mx-auto max-w-7xl flex flex-wrap justify-center sm:justify-between items-center space-x-4 sm:space-x-8">
                    {['all', 'seeds', 'pesticides', 'tools', 'best sellers', 'organic farming'].map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap ${
                                selectedCategory === category
                                    ? 'bg-[#145A32] text-white shadow-lg'
                                    : 'bg-transparent text-white border-transparent hover:bg-[#329A5F]'
                            }`}
                        >
                            {category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                        </button>
                    ))}
                    <div className="flex items-center space-x-2">
                        <div
                            className="relative text-xl cursor-pointer transition-transform duration-300 hover:scale-110"
                            onClick={showCartModal}
                        >
                            🛒
                            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs font-bold leading-none">
                                {cartItems.length}
                            </span>
                        </div>
                        <span className="font-bold">CART</span>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto p-8 max-w-7xl flex-grow">
                <div className="flex flex-wrap items-center justify-between mb-6">
                    <h2 className="text-3xl font-semibold text-[#145A32] mt-0">
                        Popular Products
                    </h2>
                    {/* Add a placeholder for the side arrows from the image */}
                    <div className="flex space-x-2">
                        <button className="bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl p-6 text-center transition-transform duration-300 hover:translate-y-[-8px] shadow-lg hover:shadow-2xl relative"
                            >
                                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold rounded-md px-2 py-1">
                                    {product.discount}%
                                </div>
                                <button
                                    className="absolute top-4 left-4 text-gray-400 hover:text-red-500 transition-colors"
                                    onClick={() => addToWishlist(product)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-contain rounded-lg mb-4"
                                />
                                <h3 className="text-xl font-semibold text-[#228B22] mb-2">{product.name}</h3>
                                <p className="text-sm text-gray-500 line-through">₹{product.originalPrice.toFixed(2)}</p>
                                <p className="text-2xl font-bold text-[#145A32] mb-4">₹{product.price.toFixed(2)}</p>
                                <button
                                    className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-blue-700 shadow-md w-full"
                                    onClick={() => addToCart(product)}
                                >
                                    BUY NOW
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-600 text-lg">
                            No products found matching your search.
                        </p>
                    )}
                </div>
            </main>

            {/* Footer */}
            <footer className="text-center p-6 bg-[#145A32] text-white mt-8">
                <p>&copy; 2025 Agro-Mart. All rights reserved.</p>
            </footer>

            {/* Message Modal */}
            {isMessageModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg text-center shadow-2xl max-w-sm w-full">
                        <p className="text-xl text-[#333] mb-6">{message}</p>
                        <button
                            className="bg-[#3CB371] text-white py-2 px-6 rounded-md transition-colors hover:bg-[#329A5F]"
                            onClick={hideMessageModal}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            {/* Cart Modal */}
            {isCartModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
                        <h3 className="text-2xl font-bold text-[#145A32] mb-4 text-center">Your Cart</h3>
                        {cartItems.length > 0 ? (
                            <>
                                <ul className="list-none p-0 max-h-80 overflow-y-auto mb-4 border-b pb-4">
                                    {cartItems.map((item, index) => (
                                        <li key={index} className="flex justify-between items-center p-3 mb-2 rounded-lg bg-[#F0FFF0] shadow-sm">
                                            <span className="text-lg font-medium text-[#333]">{item.name} (x{item.quantity})</span>
                                            <span className="text-lg font-bold text-[#228B22]">₹{(item.price * item.quantity).toFixed(2)}</span>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition-colors"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xl font-bold text-[#145A32] mb-4 text-center">
                                    Total: ₹{getCartTotal()}
                                </p>
                            </>
                        ) : (
                            <p className="text-lg text-gray-600 mb-4 text-center">Your cart is empty.</p>
                        )}
                        <button
                            className="bg-[#3CB371] text-white py-2 px-6 rounded-md transition-colors hover:bg-[#329A5F] w-full"
                            onClick={hideCartModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Wishlist Modal */}
            {isWishlistModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
                        <h3 className="text-2xl font-bold text-[#145A32] mb-4 text-center">Your Wishlist</h3>
                        {wishlistItems.length > 0 ? (
                            <ul className="list-none p-0 max-h-80 overflow-y-auto mb-4 border-b pb-4">
                                {wishlistItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center p-3 mb-2 rounded-lg bg-[#F0FFF0] shadow-sm">
                                        <div className="flex-grow flex justify-between items-center">
                                            <span className="text-lg font-medium text-[#333]">{item.name}</span>
                                            <span className="text-lg font-bold text-[#228B22]">₹{item.price.toFixed(2)}</span>
                                        </div>
                                        <div className="flex-shrink-0 ml-4 space-x-2">
                                            <button
                                                className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs hover:bg-blue-600 transition-colors"
                                                onClick={() => {
                                                    addToCart(item);
                                                    removeFromWishlist(item.id);
                                                }}
                                            >
                                                Move to Cart
                                            </button>
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded-full text-xs hover:bg-red-600 transition-colors"
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-lg text-gray-600 mb-4 text-center">Your wishlist is empty.</p>
                        )}
                        <button
                            className="bg-[#3CB371] text-white py-2 px-6 rounded-md transition-colors hover:bg-[#329A5F] w-full"
                            onClick={hideWishlistModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;
