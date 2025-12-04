import { Link } from "@tanstack/react-router";
import phone from "../../assets/phone-svgrepo-com.svg";
import logo from "../../assets/velgog.png";

import {
  Search,
  Phone,
  ShoppingCart,
  CircleUserRound,
  Menu,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const Header = () => {
  const cartCount = 10;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const products = ["T-Shirt", "Hoodie", "Polo", "Gift", "Sweater", "Short"];
  return (
    <>
      <div className="bg-white shadow-xs max-w-7xl mx-auto shadow-gray-200 min-h-[100px] flex justify-evenly px-4 ">
        {/* menu */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" color="black" />
        </button>
        {/* Left: Phone */}
        <div className=" hidden md:flex items-center space-x-2">
          <Phone className="w-6 h-6  " color="rgb(94, 201, 255)" />
          <a
            href="tel:0966140378"
            className="text-[#5ec9ff] font-medium hover:text-blue-500 text-[16px] "
          >
            0966140378
          </a>
        </div>

        {/* Center: Logo */}

        <div className="flex-1 flex  justify-center  md:flex-none">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className=" w-255 h-14 md:w-[380px] md:h-[86px] py-2 my-auto"
            />
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-2 md:space-x-4 text-gray-700">
          <Link
            to="/search"
            className="p-2 hover:bg-gray-100 rounded-full transitio"
          >
            <Search
              className="w-5 h-5  md:w-6 md:h-6"
              color="rgb(94, 201, 255)"
            />
          </Link>
          <Link
            to="/cart"
            className=" relative p-2 hover:bg-gray-100 rounded-full transition"
          >
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
              {cartCount}
            </span>
            <ShoppingCart
              className="w-5 h-5  md:w-6 md:h-6"
              color="rgb(94, 201, 255)"
            />
          </Link>
          <Link
            to="/profile"
            className=" hidden md:block p-2 hover:bg-gray-100 rounded-full transition"
          >
            <CircleUserRound
              className="w-5 h-5  md:w-6 md:h-6"
              color="rgb(94, 201, 255)"
            />
          </Link>
        </div>
        {/* navbar */}
      </div>

      <nav className=" hidden md:flex justify-center px-4">
        <ul className="flex space-x-6 p-4">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              Home
            </Link>
          </li>

          {/* Shop với dropdown */}
          <li
            className="relative hover:text-blue-500 flex  items-center text-[16px] uppercase  font-normal cursor-pointer"
            onMouseEnter={() => setIsShopOpen(true)}
            onMouseLeave={() => setIsShopOpen(false)}
          >
            <Link to="/collections" className="block py-2">
              Shop
            </Link>
            <ChevronRight
              className={`w-4 h-4 transform transition-transform duration-300 ${
                isShopOpen ? "rotate-90" : "rotate-0"
              }`}
            />
            {isShopOpen && (
              <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md overflow-hidden z-10">
                {products.map((p) => (
                  <li key={p}>
                    <Link
                      to={`/shop/${p.toLowerCase()}`}
                      className="px-4 py-2 hover:bg-blue-100 text-gray-700  text-[16px] block"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/blog"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/group"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              Vergency Group
            </Link>
          </li>
          <li>
            <Link
              to="/instagram"
              className="hover:text-blue-500  text-[16px] uppercase  font-normal cursor-pointer block py-2"
            >
              Vergency Instagram
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
