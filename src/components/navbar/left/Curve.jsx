import { motion } from 'framer-motion';
import styles from './curve.module.css';

export default function Curve() {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <svg className={styles.svgCurve}>
      <motion.path
        d={targetPath}
        variants={pathAnimation}
        initial='initial'
        animate='enter'
        exit='exit'
      ></motion.path>
    </svg>
  );
}
