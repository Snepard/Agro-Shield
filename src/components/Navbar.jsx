import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // State to track if the user has scrolled down the page
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Set isScrolled to true if user has scrolled more than 50px, otherwise false
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    // This is crucial to prevent memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  const navLinks = ["Home", "Diagnose Crop", "Resources", "Community", "About Us"];

  return (
    // The outer container handles the fixed positioning and centering.
    // Its padding ensures the transforming nav doesn't jump on layout change.
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 ease-in-out">
      
      {/* The <nav> element itself handles all visual transformations.
        We use conditional (ternary) operators to switch between two sets of styles
        based on the `isScrolled` state.
        The `transition-all` and `duration-500` classes make these changes animate smoothly.
      */}
      <nav
        className={`
          flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? 'w-[80%] max-w-6xl rounded-full bg-white/70 backdrop-blur-lg py-4 px-10 shadow-xl border border-white/20'
              : 'w-full max-w-none rounded-none bg-white py-5 px-10 shadow-sm'
          }
        `}
      >
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-green-800 tracking-wider">
          <a href="#">Agro Shield 🌿</a>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={link}>
              <a href="#" className="relative group text-slate-800 hover:text-green-600 font-semibold transition-colors duration-300">
                <span>{link}</span>
                <span
                  className={`
                    absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300 ease-out origin-center
                    ${index === 0 ? 'scale-x-100' : ''}
                  `}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Sign-in Button */}
        <div>
          <button className="
            bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full
            shadow-md hover:shadow-lg hover:bg-green-700
            transform hover:-translate-y-0.5 transition-all duration-300
          ">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
