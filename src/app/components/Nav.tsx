"use client";

import { useState } from "react";

function Nav() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
 

      <nav className="p-4 bg-[#98c73d] text-black shadow-md">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-8">
            <li>
              <a className="hover:text-gray-700" href="/home">
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="hover:text-gray-700 dropdown-toggle"
              >
                About
              </button>
              {isAboutOpen && (
                <ul className="absolute bg-white mt-2 space-y-2 p-2 rounded shadow-lg">
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="/about/our-clinics">
                      Our Clinics
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">
                      Directors
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">
                      Careers
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a className="hover:text-gray-700" href="#">
                Services
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                className="hover:text-gray-700 dropdown-toggle"
              >
                Gallery
              </button>
              {isGalleryOpen && (
                <ul className="absolute bg-white mt-2 space-y-2 p-2 rounded shadow-lg">
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">
                      Before and After
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-200" href="#">
                      Testimonials
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a className="hover:text-gray-700" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="text-center py-20 bg-[#98c73d] text-white">
        <h1 className="text-5xl font-bold"> We design your smile</h1>
        <p className="mt-4 text-xl">A passionate group of dentists working together to spread happiness all over the world through smazio</p>
      </header>



  
    </>
  );
}

export default Nav;
