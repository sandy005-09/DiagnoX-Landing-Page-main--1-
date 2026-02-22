import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Linkedin, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { Input } from './components/ui/input';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import { NavBar } from './components/NavBar';
import { AnimatedHeroText } from './components/AnimatedHeroText';
import { BentoGrid } from './components/BentoCards';
import { BenefitCard } from './components/BenefitCard';
import { XIcon } from './components/XIcon';
import { ContactDialog } from './components/ContactDialog';
import { FAQDialog } from './components/FAQDialog';
import { FONTS } from './config/fonts';
import { ProcessSteps } from './components/ProcessSteps';
import svgPaths from './imports/svg-sppztv54cx';
import imgMockupRemovebg1 from './assets/83cc5e54f935b3e722af1ce6b7f8180b5220a779.png';
import imgCarWorkshopBg from './assets/0e3325f9d305dc65d43313e8420c46656d44acd9.png';

function HeroSection() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Generate random particles - more in light mode
  const particleCount = theme === 'dark' ? 30 : 50;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 1 + Math.random() * 2,
  }));

  return (
    <section
      id="hero"
      className={`relative min-h-[900px] w-full ${theme === 'dark'
        ? 'bg-gradient-to-b from-[#0d0d0d] from-[73.676%] via-[#070d32] via-[102.02%] to-[#000d57] to-[113.83%]'
        : 'bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100'
        }`}
    >
      {/* Glowing blue gradient at bottom - reduced glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(ellipse at center bottom, rgba(0, 13, 87, 0.4) 0%, rgba(7, 13, 50, 0.2) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at center bottom, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.1) 40%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Particle emission effect - works in both modes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: theme === 'dark' ? '#6B93E8' : '#3B82F6',
              boxShadow: theme === 'dark'
                ? `0 0 ${particle.size * 2}px rgba(107, 147, 232, 0.8), 0 0 ${particle.size * 4}px rgba(59, 130, 246, 0.6)`
                : `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.6), 0 0 ${particle.size * 4}px rgba(147, 197, 253, 0.4)`,
            }}
            initial={{
              y: 0,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: -800,
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Text + Product */}
      <motion.div
        style={{ y }}
        className="relative z-10 flex flex-col items-center pt-[120px] pb-[100px] px-6 text-center w-full"
      >
        <div className="flex flex-col items-center gap-8 w-full max-w-[1200px]">
          <h1 className="flex flex-col gap-2">
            <AnimatedHeroText text="AI-Driven Truck Fleet Health" delay={0.3} />
            <AnimatedHeroText text="& Operations Intelligence" delay={0.7} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className={`w-full max-w-[800px] font-body-semibold text-[20px] leading-relaxed tracking-normal ${theme === 'dark' ? '' : 'text-gray-700'
              }`}
            style={theme === 'dark' ? {
              background: 'linear-gradient(135deg, #B8B8B8 0%, #E8E8E8 50%, #B8B8B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            } : {}}
          >
            DiagnoX is redefining vehicle health with AI-powered diagnostics that<br className="hidden md:block" />
            predict, prevent, and perfect performance.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative flex items-center justify-center mt-8"
          style={{
            height: 'auto',
            width: '100%',
            maxWidth: '1200px'
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="flex-none rotate-[179.52deg]"
          >
            <div className="relative h-[1186.01px] w-[1780.76px]">
              <img
                src={imgMockupRemovebg1}
                alt="DiagnoX AI-powered vehicle diagnostic device showing mobile app interface with real-time health data"
                className="absolute inset-0 pointer-events-none size-full max-w-none object-cover object-[50%_50%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeaturesSection() {
  const { theme } = useTheme();

  return (
    <section
      id="features"
      className={`relative flex items-center justify-center scroll-mt-[44px] ${theme === 'dark' ? 'bg-[#000000]' : 'bg-white'
        }`}
      style={{ height: '812px' }}
    >
      <div className="flex flex-col items-center" style={{ width: '1440px', padding: '24px', gap: '10px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
          style={{ width: '1200px', gap: '36px' }}
        >
          <h2
            className={FONTS.heading}
            style={{
              fontSize: '64px',
              lineHeight: '100%',
              letterSpacing: '0.5%',
              color: theme === 'dark' ? '#FFFFFF' : '#000000'
            }}
          >
            What do we offer?
          </h2>

          <BentoGrid />
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { theme } = useTheme();
  return (
    <section className={`py-32 px-6 ${theme === 'dark' ? 'bg-[#000000]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${FONTS.subheading} text-[44px] mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          Our Mission: Revolutionizing Vehicle Health
        </h2>
        <p className={`${FONTS.body} text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          At DiagnoX, we believe that every vehicle owner deserves complete transparency and peace of mind. Our mission is to bridge the gap between complex automotive engineering and everyday drivers using the power of Artificial Intelligence.
        </p>
        <p className={`${FONTS.body} text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>
          By transforming raw sensor data into meaningful stories, we help fleet managers and individual owners prevent breakdowns before they happen, optimize fuel efficiency, and extend the lifespan of their vehicles. We are committed to building a safer, more efficient future for the global transport industry through data-driven intelligence.
        </p>
      </div>
    </section>
  );
}

function AboutUsSection() {
  const { theme } = useTheme();

  const benefits = [
    {
      title: 'Instant, Accurate Diagnostics',
      description: 'DiagnoX delivers rapid, AI-driven health checks for your vehicle, transforming raw sensor data into clear, actionable insights—so you know exactly what your car needs, fast.',
    },
    {
      title: 'Proactive Peace of Mind',
      description: "DiagnoX helps you prevent breakdowns & costly repairs by sending early warnings & predictive maintenance alerts based on real AI analysis of your car's condition & usage.",
    },
    {
      title: 'Data Security & Privacy',
      description: "Your vehicle's data is transmitted & stored securely in the cloud using modern encryption methods, so you're always protected—DiagnoX never shares or sells your data.",
    },
    {
      title: 'User-Friendly & Accessible',
      description: 'Plug and play setup, intuitive mobile app, and remote access mean anyone can use DiagnoX — no technical expertise or complex setup required.',
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden" style={{ minHeight: 'auto' }}>
      {/* First Part: How does DiagnoX work ? */}
      <div
        className={`relative ${theme === 'dark' ? 'bg-[#000000]' : 'bg-gray-50'}`}
        style={{ paddingBottom: '120px' }}
      >
        {/* Floating Mockup Image */}
        <div
          className="absolute pointer-events-none z-0"
          style={{
            right: '-592px',
            top: '-560px',
            width: '1926.58px',
            height: '1283.13px',
            transform: 'rotate(48.99deg)',
            transformOrigin: 'center center',
          }}
        >
          <div className="relative size-full">
            <img
              src={imgMockupRemovebg1}
              alt="DiagnoX mobile interface mockup showing vehicle health status"
              className="size-full object-contain"
              style={{ opacity: 0.15 }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className={`mb-12 ${FONTS.subheading} text-[108px] leading-[1.04] tracking-[-3.786px] ${theme === 'dark' ? 'text-white/90' : 'text-black'
              }`}>
              How does <br />DiagnoX work?
            </h2>

            <ProcessSteps />
          </motion.div>
        </div>
      </div>

      {/* Second Part: Why choose DiagnoX ? - 752px */}
      <motion.div
        className="relative overflow-hidden"
        style={{ height: '752px' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image with subtle fixed parallax effect */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${imgCarWorkshopBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto h-full flex flex-col justify-between">
          {/* Title at top */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center bg-[rgba(192,192,192,0.5)] backdrop-blur-sm border border-gray-400/40 shadow-lg w-full"
              style={{ height: '72px' }}
            >
              <h2 className={`${FONTS.subheading} text-[44px] leading-[1.1] tracking-[-0.24px] text-black`}>
                Why choose DiagnoX ?
              </h2>
            </motion.div>
          </div>

          {/* Cards at bottom */}
          <div className="max-w-[1440px] mx-auto w-full px-6 pb-8" style={{ marginTop: '-264px' }}>
            <div className="flex justify-center gap-4" style={{ marginTop: '-24px' }}>
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Contact Section
 * Everything below "Why choose DiagnoX?" including:
 * 1. "Save time, reduce repair bills..." headline
 * 2. Waitlist form (email input + join button)
 * 3. Learn more & Support links
 * 4. Social media handles
 */
function WaitlistSection({ onSupportClick, onLearnMoreClick }: { onSupportClick: () => void; onLearnMoreClick: () => void }) {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Generate random particles for contact section - more in light mode
  const contactParticleCount = theme === 'dark' ? 25 : 45;
  const contactParticles = Array.from({ length: contactParticleCount }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    size: 1 + Math.random() * 2,
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbxdauy9ygtDkm0tiwP_CDIPd6Wo85qvftzrQUIBwk10IYYmqWucomX-OmSwy2ECYQBt/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'waitlist',      // or 'support'
        email: email           // add subject/message if needed for support
      }),
      mode: 'no-cors'
    })
      .then(() => {
        setIsLoading(false);
        setSubmitted(true);
        setEmail('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setIsLoading(false);
        setSubmitted(true);
        setEmail('');
      });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_kal.ai14/', isCustom: false },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalaiarasu14/', isCustom: false },
    { icon: XIcon, label: 'X', href: 'https://x.com/explore/tabs/trending', isCustom: true },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden ${theme === 'dark'
        ? 'bg-gradient-to-b from-[#0d0d0d] from-[73.676%] via-[#070d32] via-[102.02%] to-[#000d57] to-[113.83%]'
        : 'bg-gradient-to-b from-gray-50 via-blue-50 to-blue-100'
        }`}
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Glowing blue gradient at bottom - reduced glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[350px] pointer-events-none"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(ellipse at center bottom, rgba(0, 13, 87, 0.4) 0%, rgba(7, 13, 50, 0.2) 40%, transparent 70%)'
            : 'radial-gradient(ellipse at center bottom, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.1) 40%, transparent 70%)',
          filter: 'blur(30px)',
          animation: 'pulse 4s ease-in-out infinite',
        }}
      />

      {/* Particle emission effect - works in both modes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {contactParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              bottom: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: theme === 'dark' ? '#6B93E8' : '#3B82F6',
              boxShadow: theme === 'dark'
                ? `0 0 ${particle.size * 2}px rgba(107, 147, 232, 0.8), 0 0 ${particle.size * 4}px rgba(59, 130, 246, 0.6)`
                : `0 0 ${particle.size * 2}px rgba(59, 130, 246, 0.6), 0 0 ${particle.size * 4}px rgba(147, 197, 253, 0.4)`,
            }}
            initial={{
              y: 0,
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: -1000,
              opacity: [0, 0.7, 0.7, 0],
              scale: [0, 1, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* 1. Headline: "Save time, reduce repair bills..." */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl"
        >
          <h2 className={`${FONTS.subheading} text-[96px] leading-[1.2] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            Save time, reduce repair bills—
          </h2>
          <p className={`mb-12 ${FONTS.subheading} text-[64px] leading-[1.3] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
            our game-changing product is launching soon.
          </p>

          {/* 2. Waitlist Form Section */}
          <motion.div
            id="waitlist"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 360 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 },
                    rotate: { duration: 1, repeat: Infinity, ease: "linear" }
                  }}
                  className="relative"
                >
                  <Loader2 className={`size-12 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`} />
                </motion.div>
                <p className={`${FONTS.body} text-[14px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                  Joining waitlist...
                </p>
              </div>
            ) : submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'spring',
                  damping: 15,
                  stiffness: 300
                }}
                className="flex flex-col items-center justify-center py-8 space-y-4"
              >
                {/* Animated Success Icon */}
                <div className="relative">
                  {/* Outer ring animation */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className={`absolute inset-0 rounded-full ${theme === 'dark'
                      ? 'bg-green-400/10'
                      : 'bg-green-500/10'
                      }`}
                    style={{ width: '80px', height: '80px', top: '-10px', left: '-10px' }}
                  />

                  {/* Checkmark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      damping: 12,
                      stiffness: 200,
                      delay: 0.2
                    }}
                  >
                    <CheckCircle2
                      className={`size-[60px] ${theme === 'dark' ? 'text-green-400' : 'text-green-500'
                        }`}
                      strokeWidth={2}
                    />
                  </motion.div>

                  {/* Sparkles around the checkmark */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: [0, (i - 1) * 25],
                        y: [0, -20 + (i * 10)]
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.4 + (i * 0.1),
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                      className="absolute top-0 left-1/2"
                    >
                      <Sparkles
                        className={`size-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-400'
                          }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center space-y-2"
                >
                  <h4 className={`${FONTS.bodySemiBold} text-[18px] ${theme === 'dark' ? 'text-green-400' : 'text-green-600'
                    }`}>
                    You're on the Waitlist!
                  </h4>
                  <p className={`${FONTS.body} text-[14px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>
                    We'll notify you when we launch.
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <>
                <p className={`mb-6 ${FONTS.body} text-[14px] ${theme === 'dark' ? 'text-white' : 'text-gray-700'
                  }`}>
                  Wanna be our early customer ?
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                  <Input
                    type="email"
                    placeholder="Email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`h-[48px] w-[320px] rounded-full border ${FONTS.body} text-[14px] px-6 ${theme === 'dark'
                      ? 'border-white/20 bg-transparent text-white placeholder:text-gray-400'
                      : 'border-gray-300 bg-white text-gray-900 placeholder:text-gray-500'
                      }`}
                  />
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <button
                      type="submit"
                      className={`group relative h-[44px] px-8 rounded-full ${FONTS.body} text-[14px] overflow-hidden transition-all duration-300 ${theme === 'dark'
                        ? 'bg-white text-black'
                        : 'bg-transparent text-white group-hover:text-black'
                        }`}
                      style={{
                        border: 'none',
                      }}
                    >
                      <span className={`relative z-10 transition-colors duration-300 ${theme === 'dark'
                        ? 'group-hover:text-white'
                        : 'text-white group-hover:text-black'
                        }`}>
                        Join Waitlist
                      </span>
                      {/* Gradient overlay with metallic stroke */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${theme === 'dark'
                          ? 'opacity-0 group-hover:opacity-100'
                          : 'opacity-100 group-hover:opacity-0'
                          }`}
                        style={{
                          background: 'radial-gradient(circle at center, #0D0D0D 24%, #0A0D20 78%, #000D57 96%)',
                          borderRadius: '9999px',
                          boxShadow: theme === 'dark'
                            ? 'inset 0 0 0 0.65px rgba(232, 232, 232, 0.8)'
                            : 'inset 0 0 0 0.65px rgba(232, 232, 232, 0.8), 0 0 20px rgba(232, 232, 232, 0.6), 0 0 40px rgba(184, 184, 184, 0.4)',
                        }}
                      />
                      {/* White background overlay for hover in light mode */}
                      <div
                        className={`absolute inset-0 transition-all duration-300 ${theme === 'dark'
                          ? 'opacity-0'
                          : 'opacity-0 group-hover:opacity-100'
                          }`}
                        style={{
                          background: 'white',
                          borderRadius: '9999px',
                          border: '0.65px solid black',
                        }}
                      />
                    </button>
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Footer: Learn More, Support & Social Handles */}
      <div className="px-6 pb-8">
        <div className={`max-w-7xl mx-auto border-t pt-8 ${theme === 'dark' ? 'border-white/20' : 'border-gray-300'
          }`}>
          <div className="flex items-center justify-between">
            {/* Learn More & Support Links */}
            <nav className={`flex gap-8 ${FONTS.nav} text-[16px] leading-[1.45] tracking-[-0.08px] ${theme === 'dark' ? 'text-white' : 'text-gray-600'
              }`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={onLearnMoreClick}
                className="cursor-pointer transition-colors"
              >
                Learn more
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={onSupportClick}
                className="cursor-pointer transition-colors"
              >
                Support
              </motion.button>
            </nav>

            {/* Social Links */}
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, label, href, isCustom }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2 }}
                  className={`transition-colors ${theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {isCustom ? <Icon size={20} /> : <Icon size={20} />}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_kal.ai14/', isCustom: false },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalaiarasu14/', isCustom: false },
    { icon: XIcon, label: 'X', href: 'https://x.com/explore/tabs/trending', isCustom: true },
  ];

  return (
    <footer className={`border-t py-12 ${theme === 'dark'
      ? 'border-white/50 bg-[#0d0d0d]'
      : 'border-gray-200 bg-white'
      }`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Nav Links */}
          <nav className={`flex gap-8 ${FONTS.nav} text-[16px] leading-[1.45] tracking-[-0.08px] ${theme === 'dark' ? 'text-white' : 'text-gray-600'
            }`}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#features"
              className="cursor-pointer transition-colors"
            >
              Learn more
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="cursor-pointer transition-colors"
            >
              Support
            </motion.a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, label, href, isCustom }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`transition-colors ${theme === 'dark'
                  ? 'text-white hover:text-gray-300'
                  : 'text-gray-700 hover:text-gray-900'
                  }`}
                aria-label={label}
              >
                {isCustom ? <Icon size={24} /> : <Icon className="size-6" />}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-8 text-center ${FONTS.body} text-[14px] ${theme === 'dark'
            ? 'text-gray-500'
            : 'text-gray-500'
            }`}
        >
          <p>© 2025 DiagnoX. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

function AppContent() {
  const { theme } = useTheme();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <>
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <FAQDialog isOpen={isFAQOpen} onClose={() => setIsFAQOpen(false)} />
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'
        }`}>
        <NavBar />
        <main className="pt-[72px]">
          <HeroSection />
          <FeaturesSection />
          <AboutUsSection />
          <MissionSection />
          <WaitlistSection onSupportClick={() => setIsContactOpen(true)} onLearnMoreClick={() => setIsFAQOpen(true)} />
        </main>
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}