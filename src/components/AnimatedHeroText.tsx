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
    <motion.div
      className={`w-full flex justify-center items-center ${FONTS.branding} text-[48px] sm:text-[72px] md:text-[96px] lg:text-[112px] xl:text-[124px] ${theme === 'dark' ? 'text-[#e0e0e0]' : 'text-gray-900'
        }`}
      style={{
        fontWeight: 400,
        lineHeight: '1.05',
        letterSpacing: '-0.01em',
        textShadow: theme === 'dark' ? '0 0 20px rgba(255, 255, 255, 0.08)' : 'none',
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
    >
      {text}
    </motion.div>
  );
}