'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.css';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navLinks = [
    { id: 1, url: './', title: 'Home' },
    { id: 2, url: '/left', title: 'L-R' },
    { id: 3, url: '/right', title: 'R-L' },
    { id: 4, url: '/bottom', title: 'B-T' },
    { id: 5, url: '/middle', title: 'Middle' },
  ];

  const toggleMenu = () => {
    setShow((isOpen) => !isOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: [0, 1, 0.95, 1],
      transition: {
        duration: 0.9,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };
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
        {show ? (
          <div className={styles.mobile}>
            <RiCloseLine
              size={35}
              className={styles.icon}
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className={styles.mobile}>
            <RiMenu3Fill
              size={35}
              className={styles.icon}
              onClick={toggleMenu}
            />
          </div>
        )}
      </nav>
      <AnimatePresence>
        {show && (
          <motion.div
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.mobileMenu}
          >
            <div className={styles.menuIcons}>
              <Link href='/' className={styles.logo}>
                <Image src='/logo.svg' alt='Logo' width={40} height={40} />{' '}
                M-NAV
              </Link>
              <div className={styles.mobile}>
                <RiCloseLine
                  size={35}
                  className={styles.icon}
                  onClick={toggleMenu}
                />
              </div>
            </div>
            <div className={styles.mobileList}>
              {navLinks.map((menu) => (
                <Link href={menu.url} key={menu.id}>
                  {menu.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
