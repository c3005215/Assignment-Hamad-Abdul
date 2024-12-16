'use client'
import Link from 'next/link';
import "./Navbar.css";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
    <div className="logo">
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
    </div>
        


      <button className='burgericon' onClick={toggleMenu}>&#9776;</button>
      <menu className={menuOpen ? "active" : ""}>
        <li><Link href="/aboutus" onClick={toggleMenu}>About Us</Link></li>
        <li><Link href="/courses" onClick={toggleMenu}>Courses</Link></li>
        <li><Link href="/forstudents" onClick={toggleMenu}>For Students</Link></li>
        <li><Link href="/information" onClick={toggleMenu}>Information</Link></li>
        <li><Link href="/workingwithus" onClick={toggleMenu}>Working With Us</Link></li>
        <li><Link href="/contactus" onClick={toggleMenu}>Contact Us</Link></li>
      </menu>
    </nav>
  );
};

export default Navbar;