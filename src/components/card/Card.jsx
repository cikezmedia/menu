import React from 'react';
import styles from '@/components/card/card.module.css';
import Image from 'next/image';
import Title from '../title/Title';
import Button from '../button/Button';

const Card = () => {
  return (
    <div className={styles.container}>
      <Title />
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src='/education.svg'
              alt='Education'
              fill={true}
              className={styles.image}
            />
          </div>
          <h1 className={styles.cardTitle}>Simple Education</h1>
          <p className={styles.cardBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            fugiat eum eos dolore, dicta maxime veniam! Numquam consequatur ab
            sequi veniam quisquam illo natus nisi! Vitae eos accusantium
            excepturi hic!
          </p>
          <div className={styles.cardButton}>
            <Button />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src='/online.svg'
              alt='Online'
              fill={true}
              className={styles.image}
            />
          </div>
          <h1 className={styles.cardTitle}>Simple Access</h1>
          <p className={styles.cardBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            fugiat eum eos dolore, dicta maxime veniam! Numquam consequatur ab
            sequi veniam quisquam illo natus nisi! Vitae eos accusantium
            excepturi hic!
          </p>
          <div className={styles.cardButton}>
            <Button />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src='/mobile.svg'
              alt='Mobile'
              fill={true}
              className={styles.image}
            />
          </div>
          <h1 className={styles.cardTitle}>Simple Mobile</h1>
          <p className={styles.cardBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            fugiat eum eos dolore, dicta maxime veniam! Numquam consequatur ab
            sequi veniam quisquam illo natus nisi! Vitae eos accusantium
            excepturi hic!
          </p>
          <div className={styles.cardButton}>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
