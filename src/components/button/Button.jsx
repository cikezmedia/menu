'use client';
import React from 'react';
import styles from '@/components/button/button.module.css';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Button = () => {
  const button = {
    initial: {
      backgroundColor: 'gold',
      y: 0,
    },
    animate: {
      backgroundColor: '#051a6f',
      rotateY: 100,
      transition: {
        duration: 100,
      },
    },
  };
  return (
    <AnimatePresence>
      <Link href='/' className={styles.link}>
        <motion.div
          whileHover={{
            backgroundColor: '#051a6f',
            color: 'white',
            transition: {
              duration: 0.5,
              delay: 0.1,
            },
          }}
          className={styles.button}
        >
          Learn More
        </motion.div>
      </Link>
    </AnimatePresence>
  );
};

export default Button;
