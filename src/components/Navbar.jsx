import React from 'react';

const Navbar = () => {
  const navLinks = ["Home", "Diagnose Crop", "Resources", "Community", "About Us"];

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-6">
      <nav className="flex items-center justify-between w-auto space-x-16 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-8 py-4">
        {/* Left: Logo */}
        <div className="text-xl font-bold text-green-800">
          <a href="#">Agro Shield 🌿</a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Sign-in Button */}
        <div>
          <button className="bg-green-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-green-700 transition-colors duration-300">
            Sign In
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;