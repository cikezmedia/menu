import React from 'react';
import styles from '@/components/footer/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <span>&copy;2023 M-NAV Inc.</span>
        <span>All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
