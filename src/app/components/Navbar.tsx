"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../style/navbar.module.css";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle the menu open/close on mobile
  };

  return (
    

<div className={styles.navbar}>
  {/* Logo */}
  <div className={styles.logo}>
    <h2>My Portfolio</h2>
  </div>

  {/* Hamburger Icon */}
  <div className={styles.hamburger} onClick={toggleMenu}>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
    <div className={styles.hamburgerLine}></div>
  </div>

  {/* Navigation Links */}
  <div className={`${styles.navLinks} ${isMenuOpen ? styles.activeMenu : ""}`}>
    {links.map((link, index) => (
      <Link
        href={link.path}
        key={index}
        className={`${styles.navItem} ${link.path === pathname ? styles.active : ""} ${link.name === 'Contact' ? styles.contactButton : ''}`}
      >
        {link.name}
      </Link>
    ))}
  </div>
</div>

  );
};

export default Navbar;
