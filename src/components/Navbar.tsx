import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/jobs", label: "Jobs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // SVG Icons as components
  const MenuIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            onClick={closeMenu}
          >
            JobPortal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="ml-4 flex items-center space-x-3 border-l border-gray-200 pl-4">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 rounded-lg bg-blue-600 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Register
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-4 flex flex-col space-y-2 border-t border-gray-200 pt-4">
              <NavLink
                to="/login"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-center px-4 py-2 rounded-lg font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={closeMenu}
                className="block text-center px-4 py-2 rounded-lg bg-blue-600 font-medium text-white transition hover:bg-blue-700"
              >
                Register
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;