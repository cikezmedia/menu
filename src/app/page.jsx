'use client';
import NavBar from '@/components/navbar/NavBar';
import styles from './page.module.css';
import Hero from '@/components/hero/Hero';
import Card from '@/components/card/Card';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <Card />
      <Footer />
    </div>
  );
}
