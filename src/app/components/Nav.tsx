"use client";

import Link from "next/link";




function Nav() {


  return (
    <>
      <div >
        <nav className="p-4 bg-[#98c73d] text-black shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link style={{color:"black"}} href="/home" className="text-lg font-bold hover:text-gray-700 ">Home</Link>
              <div className="relative group">
                <Link style={{color:"black"}}
                  className="text-lg font-bold hover:text-gray-700"
                  href="/about/our-clinics"
                >
                  About
                </Link>
              </div>
              <Link style={{color:"black"}} href="/services" className="text-lg font-bold hover:text-gray-700">Services</Link>
              <Link style={{color:"black"}} href="/contact" className="text-lg font-bold hover:text-gray-700">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link style={{color:"black"}} href="https://facebook.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link style={{color:"black"}} href="https://twitter.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link style={{color:"black"}} href="https://instagram.com" target="_blank" className="hover:text-gray-700">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link 
                href="/appointment"
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Take an Appointment
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
