import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PlaneTakeoff, ChevronDown, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <PlaneTakeoff size={28} className="text-primary-600" />
          <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
            E-Tour
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className={`text-sm font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/' ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className={`text-sm font-medium hover:text-primary-600 transition-colors ${
              location.pathname.includes('/destinations') ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Destinations
          </Link>
          <Link
            to="/tours"
            className={`text-sm font-medium hover:text-primary-600 transition-colors ${
              location.pathname.includes('/tours') ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Tours
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/about' ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium hover:text-primary-600 transition-colors ${
              location.pathname === '/contact' ? 'text-primary-600' : isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Contact
          </Link>
          
          {currentUser ? (
            <div className="relative group">
              <button className="flex items-center space-x-1 bg-primary-100 text-primary-700 px-4 py-2 rounded-full">
                <User size={16} />
                <span>Account</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  My Dashboard
                </Link>
                <button onClick={logout} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link
              to="/"
              className={`text-base font-medium ${location.pathname === '/' ? 'text-primary-600' : 'text-gray-800'}`}
            >
              Home
            </Link>
            <Link
              to="/destinations"
              className={`text-base font-medium ${
                location.pathname.includes('/destinations') ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Destinations
            </Link>
            <Link
              to="/tours"
              className={`text-base font-medium ${
                location.pathname.includes('/tours') ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Tours
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium ${location.pathname === '/about' ? 'text-primary-600' : 'text-gray-800'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium ${
                location.pathname === '/contact' ? 'text-primary-600' : 'text-gray-800'
              }`}
            >
              Contact
            </Link>
            {currentUser ? (
              <>
                <Link to="/dashboard" className="text-base font-medium text-gray-800">
                  My Dashboard
                </Link>
                <button onClick={logout} className="text-left text-base font-medium text-gray-800">
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-primary-600 text-white py-2 px-4 rounded-full font-medium text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;