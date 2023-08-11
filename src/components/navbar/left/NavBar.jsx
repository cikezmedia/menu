import React from 'react';
import styles from '@/components/navbar/left/navbar.module.css';
import Link from '../Link';
import { motion } from 'framer-motion';
import { menuSlide } from './animate';
import Curve from './Curve';

const NavBar = () => {
  const navLinks = [
    { id: 1, url: './', title: 'Home' },
    { id: 2, url: '/left', title: 'L-R' },
    { id: 3, url: '/right', title: 'R-L' },
    { id: 4, url: '/bottom', title: 'B-T' },
    { id: 5, url: '/middle', title: 'Middle' },
  ];
  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
            <div className={styles.links}>
              {navLinks.map((item, index) => {
                return <Link key={index} data={{ ...item, index }} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <a>Github</a>
          <a>Twitter</a>
          <a>Facebook</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default NavBar;
