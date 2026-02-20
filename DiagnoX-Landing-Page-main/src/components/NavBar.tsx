import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
const lightModeLogo = '/c6e878ec99d5a6a46f2ef96f6eec5542faa878ff.png';
const darkModeLogo = '/6d2fa2cbe0d69440a2e9d4951b4dbf4fea83e7fd.png';

export function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [isInWaitlistSection, setIsInWaitlistSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'features', 'about', 'contact'];
      const navHeight = 72;

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Consider section active if it's in the upper portion of viewport
          if (rect.top <= navHeight + 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Check if waitlist section is in view
      const waitlistSection = document.getElementById('waitlist');
      if (waitlistSection) {
        const rect = waitlistSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsInWaitlistSection(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-colors ${theme === 'dark'
        ? 'bg-[#0d0d0d] border-b border-[#C0C0C0]/40'
        : 'bg-white border-b border-gray-200'
        }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[72px]">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block cursor-pointer h-[72px] w-[133px]"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            alt="DiagnoX Logo"
            className="h-full w-full object-contain"
            src={theme === 'dark' ? darkModeLogo : lightModeLogo}
          />
        </motion.button>

        {/* Nav Items */}
        <div className="flex items-center gap-[32px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById('features');
              if (section) {
                const navHeight = 72;
                const y = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`font-body-semibold text-[16px] leading-[1.45] cursor-pointer transition-colors ${activeSection === 'features'
              ? theme === 'dark'
                ? 'text-[#ffffff]'
                : 'text-gray-900'
              : theme === 'dark'
                ? 'text-[#C0C0C0] hover:text-[#ffffff]'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Features
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById('about');
              if (section) {
                const navHeight = 72;
                const y = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`font-body-semibold text-[16px] leading-[1.45] cursor-pointer transition-colors ${activeSection === 'about'
              ? theme === 'dark'
                ? 'text-[#ffffff]'
                : 'text-gray-900'
              : theme === 'dark'
                ? 'text-[#C0C0C0] hover:text-[#ffffff]'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            About Us
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/blog"
            className={`font-body-semibold text-[16px] leading-[1.45] cursor-pointer transition-colors ${
              theme === 'dark'
                ? 'text-[#C0C0C0] hover:text-[#ffffff]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Blog
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById('contact');
              if (section) {
                const navHeight = 72;
                const y = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className={`font-body-semibold text-[16px] leading-[1.45] cursor-pointer transition-colors ${activeSection === 'contact'
              ? theme === 'dark'
                ? 'text-[#ffffff]'
                : 'text-gray-900'
              : theme === 'dark'
                ? 'text-[#C0C0C0] hover:text-[#ffffff]'
                : 'text-gray-600 hover:text-gray-900'
              }`}
          >
            Contact
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`rounded-full p-2 transition-colors ${theme === 'dark'
              ? 'bg-white/10 hover:bg-white/20'
              : 'bg-gray-100 hover:bg-gray-200'
              }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="size-5 text-yellow-400" />
            ) : (
              <Moon className="size-5 text-gray-700" />
            )}
          </motion.button>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button
              className={`group relative font-body-semibold h-[56px] gap-[10px] rounded-[8px] px-[24px] py-[16px] overflow-hidden transition-all duration-300 ${theme === 'dark'
                ? 'bg-white text-black'
                : isInWaitlistSection
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white group-hover:text-black'
                }`}
              style={{
                border: theme === 'dark'
                  ? 'none'
                  : isInWaitlistSection
                    ? '0.8px solid black'
                    : 'none',
              }}
              onClick={() => {
                const section = document.getElementById('waitlist');
                if (section) {
                  const navHeight = 72;
                  const y = section.getBoundingClientRect().top + window.pageYOffset - navHeight - 40;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              <span className={`relative z-10 transition-colors duration-300 ${theme === 'dark'
                ? isInWaitlistSection ? 'text-white' : 'group-hover:text-white'
                : isInWaitlistSection ? 'text-black' : 'text-white group-hover:text-black'
                }`}>
                Join Waitlist
              </span>
              {/* Gradient overlay with metallic stroke */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${theme === 'dark'
                  ? isInWaitlistSection ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  : isInWaitlistSection ? 'opacity-0 group-hover:opacity-0' : 'opacity-100 group-hover:opacity-0'
                  }`}
                style={{
                  background: 'radial-gradient(circle at center, #0D0D0D 24%, #0A0D20 78%, #000D57 96%)',
                  borderRadius: '8px',
                  boxShadow: theme === 'dark'
                    ? (isInWaitlistSection
                      ? 'inset 0 0 0 0.8px rgba(232, 232, 232, 0.8), 0 0 20px rgba(232, 232, 232, 0.6), 0 0 40px rgba(184, 184, 184, 0.4)'
                      : 'inset 0 0 0 0.8px rgba(232, 232, 232, 0.8)')
                    : (isInWaitlistSection
                      ? 'inset 0 0 0 0.8px rgba(232, 232, 232, 0.8)'
                      : 'inset 0 0 0 0.8px rgba(232, 232, 232, 0.8), 0 0 20px rgba(232, 232, 232, 0.6), 0 0 40px rgba(184, 184, 184, 0.4)'),
                }}
              />
              {/* White background overlay for hover in light mode */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${theme === 'dark'
                  ? 'opacity-0'
                  : isInWaitlistSection ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  border: '0.8px solid black',
                }}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}