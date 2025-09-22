import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the state based on whether the user has scrolled more than 10px
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Diagnose Crop", path: "/diagnosis" },
    { name: "Market", path: "/market" },
    { name: "Community", path: "/community" },
  ];

  return (
    // --- MODIFIED CODE SECTION ---
    // The <nav> is now the main fixed element, removing the need for a separate <header>.
    <nav
      className={`
        fixed left-0 right-0 z-50
        flex items-center justify-between
        transition-all duration-500 ease-in-out
        ${
          isScrolled
            // Scrolled state: Floats down, shrinks, and becomes a rounded "pill".
            ? 'top-4 mx-auto w-[90%] max-w-6xl rounded-full bg-white/70 backdrop-blur-lg py-3 px-10 shadow-xl border border-white/20'
            // Top state: Full width and flush with the top of the page.
            : 'top-0 w-full rounded-none bg-white py-5 px-10 shadow-sm'
        }
      `}
    >
    {/* --- END OF MODIFIED CODE SECTION --- */}
    
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
  );
};

export default Navbar;