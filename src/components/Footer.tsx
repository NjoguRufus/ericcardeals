import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../assets/logo.png';  // Importing your company logo

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-900 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            {/* Increased logo size */}
            <img src={logo} alt="Logo" className="h-20 w-auto" />
            <p className="mt-2 text-gray-400 text-xs">
              Making car ownership easier and more accessible for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-1 text-gray-400 text-xs">
              <li>123 Car Street</li>
              <li>Nairobi, Kenya</li>
              <li>Phone: +254 725 772 082</li>
              <li>Email: info@ericcars.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-3 mt-1">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-800 text-xs">
          {/* Centering the 'Developed and Maintained By' section */}
          <div className="flex flex-col md:flex-row justify-center items-center text-center">
            <p className="text-gray-400">
              Website Developed And Maintained By{' '}
              {/* External logo */}
              <img src="https://i.imgur.com/T7mH4Ly.png" alt="External Logo" className="h-6 w-auto inline-block mr-2" />
              <a 
                href="https://astraronixsolutions.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-400"
              >
                Astraronix Solutions
              </a>
            </p>
          </div>
          <div className="text-center mt-4 text-gray-400">
            <p>© {currentYear} Eric_Car_Deals!. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
