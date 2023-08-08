import React from 'react';
import styles from '@/components/button/button.module.css';
import Link from 'next/link';

const Button = () => {
  return (
    <Link href='/' className={styles.button}>
      Learn More
    </Link>
  );
};

export default Button;
