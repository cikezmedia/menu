'use client';
import React from 'react';
import styles from '@/components/hero/hero.module.css';
import Image from 'next/image';
import Button from '../button/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const imageVariant = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  const itemVar = {
    hidden: {
      y: 0,
    },
    visible: {
      y: -200,
      transition: {
        duration: 5,
        delay: 1,
        when: 'beforeChildren',
      },
    },
  };
  const moveRight = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 80,
      staggerChildren: 0.5,
      transition: {
        duration: 3,
        delay: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.item}
        variants={imageVariant}
        initial='hidden'
        animate='visible'
      >
        <div className={styles.card}>
          <h1 className={styles.title}>Different Modern Mobile Menu Designs</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            incidunt mollitia at sed architecto reprehenderit ullam commodi
            autem molestiae! Omnis quod vel perspiciatis inventore dolore in
            dicta? Assumenda, iste sed!
          </p>
          <Button />
        </div>
      </motion.div>
      <div className={`${styles.item} ${styles.arrange}`}>
        <div className={styles.image}>
          <Image src='/hero.svg' alt='Hero' fill={true} priority />
        </div>
        <motion.div
          variants={itemVar}
          initial='hidden'
          animate='visible'
          className={styles.motionImages}
        >
          <motion.div>
            <Image src='/71.svg' alt='Hero' width={120} height={120} priority />
          </motion.div>
          <motion.div variants={moveRight}>
            <Image
              src='/208.svg'
              alt='Hero'
              width={100}
              height={100}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
