import Link from 'next/link';
import React from 'react';
import styles from '@/components/navbar/link.module.css';
import { motion } from 'framer-motion';
import { slide } from './left/animate';

const Links = ({ data }) => {
  return (
    <motion.div
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
      custom={data.index}
      className={styles.link}
    >
      <Link href={data.url}>{data.title}</Link>
    </motion.div>
  );
};

export default Links;
