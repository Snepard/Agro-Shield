import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- MODIFIED CODE SECTION ---
  // Added the "Market" link to the navLinks array
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diagnose Crop", path: "/diagnosis" },
    { name: "Market", path: "/market" }, // Added this line
    { name: "Community", path: "/community" },
  ];
  // --- END OF MODIFIED CODE SECTION ---

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-300 ease-in-out">
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
          <Link to="/">Agro Shield 🌿</Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="relative group text-slate-800 hover:text-green-600 font-semibold transition-colors duration-300"
              >
                {({ isActive }) => (
                  <>
                    <span>{link.name}</span>
                    <span
                      className={`
                        absolute bottom-[-4px] left-0 w-full h-0.5 bg-green-600
                        transform group-hover:scale-x-100
                        transition-transform duration-300 ease-out origin-center
                        ${isActive ? 'scale-x-100' : 'scale-x-0'}
                      `}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;