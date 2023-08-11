'use client';
import React, { useState } from 'react';
import styles from '@/components/nav/nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavBar from '@/components/navbar/left/NavBar';
import { AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { id: 1, url: './', title: 'Home' },
    { id: 2, url: '/left', title: 'L-R' },
    { id: 3, url: '/right', title: 'R-L' },
    { id: 4, url: '/bottom', title: 'B-T' },
    { id: 5, url: '/middle', title: 'Middle' },
  ];
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/' className={styles.logo}>
          <Image src='/logo.svg' alt='Logo' width={40} height={40} /> M-NAV
        </Link>
        <div className={styles.navLists}>
          {navLinks.map((menu) => (
            <Link href={menu.url} key={menu.id}>
              {menu.title}
            </Link>
          ))}
        </div>
        <div
          className={styles.button}
          onClick={() => {
            setShow(!show);
          }}
        >
          <div
            className={`${styles.burger} ${show ? styles.burgerActive : ''}`}
          ></div>
        </div>
      </nav>
      <AnimatePresence mode='exit'>
        {show && pathname === '/left' ? <NavBar /> : ''}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
