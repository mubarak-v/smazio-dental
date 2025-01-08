"use client";

import { useState } from "react";

function Nav() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <body className="font-roboto">
        <nav className="p-4 bg-[#98c73d] text-black shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/home" className="text-lg font-bold hover:text-gray-700">Home</a>
              <div className="relative group">
                <a
                  className="text-lg font-bold hover:text-gray-700"
                  href="/about/our-clinics"
                >
                  About
                </a>
              </div>
              <a href="/services" className="text-lg font-bold hover:text-gray-700">Services</a>
              <a href="/contact" className="text-lg font-bold hover:text-gray-700">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="/appointment"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Take an Appointment
              </a>
            </div>
          </div>
        </nav>
      </body>
    </>
  );
}

export default Nav;
