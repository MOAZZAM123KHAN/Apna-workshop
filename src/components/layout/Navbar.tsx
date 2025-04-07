
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Apna</span>
            <span className="text-accent font-bold">Workshop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/book-repair" className="text-gray-700 hover:text-primary font-medium">
              Book Repair
            </Link>
            <Link to="/workshops" className="text-gray-700 hover:text-primary font-medium">
              Find Workshops
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">
              Pricing
            </Link>
            <Link to="/reviews" className="text-gray-700 hover:text-primary font-medium">
              Reviews
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
              Contact Us
            </Link>
          </div>

          {/* Login/Signup button on desktop */}
          <div className="hidden md:flex items-center">
            <Button className="bg-primary hover:bg-primary/90">Login / Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 animate-slide-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/book-repair" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Book Repair
            </Link>
            <Link 
              to="/workshops" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Find Workshops
            </Link>
            <Link 
              to="/pricing" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/reviews" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Reviews
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Login / Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
