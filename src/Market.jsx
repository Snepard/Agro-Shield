import React, { useState } from 'react';

// Product data for the marketplace
const productsData = [
    { id: 1, name: "Hybrid Tomato Seeds", price: 250, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Tomato+Seeds" },
    { id: 2, name: "Organic Pesticide", price: 500, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Pesticide" },
    { id: 3, name: "Gardening Shovel", price: 300, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Shovel" },
    { id: 4, name: "Neem Oil Solution", price: 450, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Neem+Oil" },
    { id: 5, name: "High-Yield Corn Seeds", price: 600, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Corn+Seeds" },
    { id: 6, name: "Soil Moisture Meter", price: 750, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Moisture+Meter" },
    { id: 7, name: "Weeding Hoe", price: 280, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Weeding+Hoe" },
    { id: 8, name: "Fertilizer Spreader", price: 1200, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Fertilizer" },
    { id: 9, name: "Rose Plant Cuttings", price: 150, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Rose+Cuttings" },
    { id: 10, name: "Farming Gloves", price: 200, image: "https://placehold.co/400x300/e9f5e1/228B22?text=Gloves" }
];

// Main App Component
const App = () => {
    // State to manage the shopping cart items
    const [cartItems, setCartItems] = useState([]);
    // State for search functionality
    const [searchTerm, setSearchTerm] = useState('');
    // State for message modal
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
    const [message, setMessage] = useState('');
    // State for cart view modal
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    // Filter products based on the search term
    const filteredProducts = productsData.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Function to add a product to the cart
    const addToCart = (productToAdd) => {
        setCartItems(prevItems => [...prevItems, productToAdd]);
        showMessageModal("Item added to cart!");
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

    return (
        <div className="bg-[#F0FFF0] text-[#333] font-sans leading-relaxed min-h-screen flex flex-col">
            {/* Header Section */}
            <header className="bg-gradient-to-r from-[#228B22] to-[#3CB371] text-white p-6 flex flex-col sm:flex-row justify-between items-center shadow-lg">
                <h1 className="text-3xl font-bold tracking-wide mb-4 sm:mb-0">Agro-Mart 🌱</h1>
                <div className="flex-grow max-w-xl w-full mx-0 sm:mx-8">
                    <div className="flex rounded-lg overflow-hidden shadow-md">
                        <input
                            type="text"
                            placeholder="Search for seeds, pesticides, and tools..."
                            className="w-full p-3 border-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#145A32]"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className="bg-[#145A32] text-white px-5 py-3 rounded-r-lg transition-colors hover:bg-[#0E4324]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className="relative text-3xl cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={showCartModal}
                >
                    🛒
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold leading-none">
                        {cartItems.length}
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto p-8 max-w-7xl flex-grow">
                <h2 className="text-3xl font-semibold text-[#145A32] mt-0 pb-2 mb-6 border-b-2 border-[#3CB371]">
                    Popular Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl p-6 text-center transition-transform duration-300 hover:translate-y-[-8px] shadow-lg hover:shadow-2xl"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-contain rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-[#228B22] mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-xl font-bold text-[#145A32] mb-4">
                                    ₹{product.price.toFixed(2)}
                                </p>
                                <button
                                    className="bg-[#3CB371] text-white py-3 px-6 rounded-md text-lg font-medium transition-transform duration-300 hover:scale-105 hover:bg-[#329A5F] shadow-md"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
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
                    <div className="bg-white p-8 rounded-lg text-center shadow-2xl max-w-lg w-full">
                        <h3 className="text-2xl font-bold text-[#145A32] mb-4">Your Cart</h3>
                        {cartItems.length > 0 ? (
                            <ul className="list-none p-0 max-h-80 overflow-y-auto mb-4">
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex justify-between items-center p-3 mb-2 rounded-lg bg-[#F0FFF0]">
                                        <span className="text-lg font-medium text-[#333]">{item.name}</span>
                                        <span className="text-lg font-bold text-[#228B22]">₹{item.price.toFixed(2)}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-lg text-gray-600 mb-4">Your cart is empty.</p>
                        )}
                        <button
                            className="bg-[#3CB371] text-white py-2 px-6 rounded-md transition-colors hover:bg-[#329A5F]"
                            onClick={hideCartModal}
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
