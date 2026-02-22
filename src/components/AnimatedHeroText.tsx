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
    <motion.span
      className={`mb-0 ${FONTS.branding} text-[100px] sm:text-[110px] md:text-[120px] ${theme === 'dark' ? 'text-[#C0C0C0]' : 'text-gray-900'
        }`}
      style={{
        display: 'inline-block',
        fontWeight: 400,
        lineHeight: '1.1',
        letterSpacing: '-2px',
        textShadow: theme === 'dark' ? '0 0 15px rgba(255, 255, 255, 0.12), 0 0 30px rgba(255, 255, 255, 0.06)' : 'none',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.span>
  );
}