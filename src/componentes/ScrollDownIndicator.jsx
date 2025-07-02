import React from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ScrollDownIndicator = () => (
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    style={{
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      marginTop: 20,
    }}
    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
  >
    <KeyboardArrowDownIcon sx={{ fontSize: 50, color: '#fff' }} />
  </motion.div>
);

export default ScrollDownIndicator;
