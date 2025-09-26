import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import Logo from '../img/Logo.png'

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.includes(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex-shrink-0 flex items-center"
              >
                <div className="flex mr-[150px] gap-[10px] w-10 h-10">
                  <img src={Logo} alt="logo"  />
                  <h1 className='text-[#096DA1] font-medium ml-[-10px] mt-[5px]'>
                    Biomed
                  </h1>
                </div>
              </Link>
            </div>

            {/*  Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
  <div className="flex items-center space-x-10">
    <Link
      to="/"
      className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive('/') 
          ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      Menu
    </Link>
    <Link
      to="/about"
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive('about') 
          ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      About
    </Link>
    <Link
      to="/graphic"
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive('graphic') 
          ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      Graphic
    </Link>
    <Link
      to="/graphic"
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive('graphic') 
          ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      Graphic
    </Link>
    <Link
      to="/graphic"
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive('graphic') 
          ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600' 
          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
      }`}
    >
      Graphic
    </Link>
  </div>
  
  <button className='bg-[#096DA1] text-white px-8 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[#0d91d8] transition-colors duration-300'>
    Schedule an Appointment
  </button>
</div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>





        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('/')
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('about')
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/graphic"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('graphic')
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic
              </Link>
              <Link
                to="/graphic"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('graphic')
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic
              </Link>
              <Link
                to="/graphic"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                  isActive('graphic')
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Graphic
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand Section */}
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <span className="ml-3 text-xl font-bold">YourBrand</span>
              </div>
              <p className="text-gray-300 text-base">
                Creating amazing experiences through innovative design and development.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Sections */}
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Navigation
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link to="/" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/graphic" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        Graphic
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white transition-colors duration-300">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  Terms
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
                  Cookies
                </a>
              </div>
              <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; 2024 YourBrand. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;