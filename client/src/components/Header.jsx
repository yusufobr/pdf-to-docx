import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto max-w-screen-lg flex justify-between items-center pt-6">
      <nav className="flex gap-4">
        <a href="/" className="text-xl font-semibold">
          Home
        </a>
        <a href="/about" className="text-xl font-semibold">
          About
        </a>
        <a href="/contact" className="text-xl font-semibold">
          Contact
        </a>
      </nav>
      <a
        href="/login"
        className="text-xl font-semibold rounded-full py-3 px-8 border border-white border-opacity-50 bg-white bg-opacity-30 backdrop-blur-sm shadow-lg"
      >
        Sign up
      </a>
    </div>
  );
};

export default Header;
