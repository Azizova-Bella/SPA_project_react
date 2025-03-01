import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Logo (2).png";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white text-black">
        <nav className="flex px-[10%] justify-between items-center py-4">
          <img src={logo} alt="Logo" />

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-gray-900 transition">Home</Link>
            <Link to="/about" className="hover:text-gray-900 transition">About</Link>
            <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
            <Link to="/pricing" className="hover:text-gray-900 transition">Pricing</Link>
            <Link to="/blog" className="hover:text-gray-900 transition">Blog</Link>
            <Link to="/details" className="hover:text-gray-900 transition">Details Blog</Link>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <aside className="bg-white w-64 p-5 shadow-lg h-full">
            <button onClick={() => setIsMenuOpen(false)} className="text-black mb-5">
              ⛔
            </button>
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">About</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">Contact</Link>
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">Pricing</Link>
              <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">Blog</Link>
              <Link to="/details" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-900">Details Blog</Link>
            </nav>
          </aside>

        </div>
      )}

      <Outlet />

      <footer className="mt-[200px] bg-gray-100 py-10">
        <section className="w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <aside className="lg:w-[720px]">
            <h2 className="text-[24px] lg:text-[64px] text-[#1D1E25] font-bold">
              Think beyond the wave
            </h2>
            <div className="flex items-start gap-[20px] mt-[20px]">
              <h2 className="text-[16px] lg:text-[24px] text-[#1D1E25] font-bold">
                Ask about Sans products, pricing, implementation, or anything else.
                Our highly trained reps are standing by, ready to help.
              </h2>
            </div>
          </aside>
          <aside>
            <button className="text-white bg-[#1D1E25] font-bold w-[175px] h-[56px] rounded-[100px]">
              Try for free
            </button>
          </aside>
        </section>

        <section className="hidden lg:flex justify-evenly mt-10">
          <div>
            <img src={logo} alt="Company Logo" />
            <p>We built an elegant solution. Our team <br /> created a fully integrated sales and marketing solution for SMBs.</p>
          </div>
          <div className="text-gray-500">
            <p className="text-black font-semibold">Company</p>
            <p className="mt-2">About</p>
            <p className="mt-2">Pricing</p>
            <p className="mt-2">Jobs</p>
            <p className="mt-2">Blog</p>
          </div>
          <div className="text-gray-500">
            <p className="text-black font-semibold">Product</p>
            <p className="mt-2">Sales Software</p>
            <p className="mt-2">Marketplace</p>
            <p className="mt-2">Terms &amp; Conditions</p>
            <p className="mt-2">Privacy Policy</p>
          </div>
          <div className="text-gray-500">
            <p className="text-black font-semibold">Discover</p>
            <p className="mt-2">CRM Comparison</p>
            <p className="mt-2">Partner Program</p>
            <p className="mt-2">What is CRM</p>
            <p className="mt-2">Resources</p>
          </div>
          <div className="text-gray-500">
            <p className="text-black font-semibold">Help Center</p>
            <p className="mt-2">Community</p>
            <p className="mt-2">Knowledge Base</p>
            <p className="mt-2">Academy</p>
            <p className="mt-2">Support</p>
          </div>
        </section>

        <div className="border-t-2 w-[90%] mt-[20px] border-[#CED1D8] pb-[20px] mx-auto text-center text-gray-500">
          <p className="mt-5">© Copyright 2023 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
