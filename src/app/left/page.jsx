import React from 'react';
import Hero from '@/components/hero/Hero';
import Card from '@/components/card/Card';
import Footer from '@/components/footer/Footer';
import styles from '@/app/left/page.module.css';
import Nav from '@/components/nav/Nav';

const Left = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
};

export default Left;
