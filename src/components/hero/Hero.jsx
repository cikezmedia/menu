import React from 'react';
import styles from '@/components/hero/hero.module.css';
import Image from 'next/image';
import Button from '../button/Button';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
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
      </div>
      <div className={styles.item}>
        <div className={styles.image}>
          <Image src='/hero.svg' alt='Hero' fill={true} priority />
        </div>
      </div>
    </div>
  );
};

export default Hero;
