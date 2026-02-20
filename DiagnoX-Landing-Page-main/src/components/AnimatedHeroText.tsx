import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FONTS } from '../config/fonts';

interface AnimatedHeroTextProps {
  text: string;
  delay?: number;
}

export function AnimatedHeroText({ text, delay = 0 }: AnimatedHeroTextProps) {
  const { theme } = useTheme();

  return (
    <motion.h1
      className={`mb-0 ${FONTS.branding} text-[132px] ${
        theme === 'dark' ? 'text-[#C0C0C0]' : 'text-gray-900'
      }`}
      style={{
        fontWeight: 400,
        lineHeight: '100%',
        letterSpacing: '-3.7662px',
        textShadow: '0 0 15px rgba(255, 255, 255, 0.12), 0 0 30px rgba(255, 255, 255, 0.06)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.h1>
  );
}