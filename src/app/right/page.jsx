import React from 'react';
import Hero from '@/components/hero/Hero';
import Card from '@/components/card/Card';
import Footer from '@/components/footer/Footer';
import styles from '@/app/right/page.module.css';

const Right = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Card />
      <Footer />
    </div>
  );
};

export default Right;
