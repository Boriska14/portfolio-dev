import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface RevealTextProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  immediate?: boolean;
}

export function RevealText({
  children,
  delay = 0,
  className = '',
  immediate = false,
}: RevealTextProps) {
  if (immediate) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          initial={{ y: 20, opacity: 0.99 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: 18, opacity: 0.99 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
