import { Link } from 'react-router-dom';
import { PlaneTakeoff, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <PlaneTakeoff size={24} className="text-primary-500" />
              <h3 className="ml-2 text-xl font-bold text-white">E-Tour</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Discover the world with our expertly curated travel experiences. From breathtaking landscapes to cultural
              immersions, we make your dream vacations a reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Popular Destinations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/destinations/goa" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Goa
                </Link>
              </li>
              <li>
                <Link to="/destinations/rajasthan" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link to="/destinations/kerala" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Kerala
                </Link>
              </li>
              <li>
                <Link to="/destinations/bali" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Bali
                </Link>
              </li>
              <li>
                <Link to="/destinations/switzerland" className="text-gray-400 hover:text-primary-500 transition-colors">
                  Switzerland
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">SM Vita, Mumbai, Maharashtra 400049, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+91 900-467-8994</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@etour.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} E-Tour. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-gray-500 text-sm hover:text-primary-500 transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;