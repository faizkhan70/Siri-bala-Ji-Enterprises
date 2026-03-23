import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Spare Parts", path: "/spare-parts" },
    { name: "Franchise", path: "/franchise" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16 py-4">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold text-green-400 tracking-wide">
          ⚡ Bala Ji EV
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative group ${
                location.pathname === link.path
                  ? "text-green-400"
                  : "text-gray-300"
              }`}
            >
              {link.name}

              {/* Hover underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>

              {/* Active underline */}
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-green-400"></span>
              )}
            </Link>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/917054856378"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full font-semibold shadow-lg"
          >
            Book Now
          </a>

        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-2xl text-white">
          {open ? (
            <FaTimes onClick={() => setOpen(false)} />
          ) : (
            <FaBars onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl transition-transform duration-500 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setOpen(false)}
            className={`${
              location.pathname === link.path
                ? "text-green-400"
                : "text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <a
          href="https://wa.me/917054856378"
          target="_blank"
          className="bg-green-500 px-6 py-3 rounded-full font-semibold"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;