import React from 'react';
import styles from '@/components/title/title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
        vero!
      </p>
    </div>
  );
};

export default Title;
