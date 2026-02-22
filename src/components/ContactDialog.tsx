import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactDialog({ isOpen, onClose }: ContactDialogProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    fromEmail: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('https://script.google.com/macros/s/AKfycbxdauy9ygtDkm0tiwP_CDIPd6Wo85qvftzrQUIBwk10IYYmqWucomX-OmSwy2ECYQBt/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'support',
        email: formData.fromEmail,
        subject: formData.subject,
        message: formData.message
      }),
      mode: 'no-cors'
    })
      .then(() => {
        setIsLoading(false);
        setSubmitted(true);
        setFormData({ fromEmail: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Submission error:', error);
        setIsLoading(false);
        setSubmitted(true); // Still show success
        setFormData({ fromEmail: '', subject: '', message: '' });
      });
  };

  const handleClose = () => {
    // Reset form state when closing
    setSubmitted(false);
    setFormData({ fromEmail: '', subject: '', message: '' });
    onClose();
  };

  const handleClear = () => {
    setFormData({ fromEmail: '', subject: '', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, y: 100, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 100, x: 50 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.32
            }}
            className="fixed bottom-10 right-10 z-[70] w-[560px] overflow-hidden rounded-2xl"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to bottom, #0B0B0B, #121212)'
                : 'linear-gradient(to bottom, #ffffff, #f9fafb)',
              boxShadow: theme === 'dark'
                ? '0 2px 18px rgba(192, 192, 192, 0.45), inset 0 0 0 1px rgba(192, 192, 192, 0.15)'
                : '0 2px 18px rgba(0, 13, 87, 0.45), inset 0 0 0 1px rgba(0, 13, 87, 0.15)',
            }}
          >
            {/* Header */}
            <div className={`border-b p-4 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'
              }`}>
              <div className="flex items-center justify-between mb-1">
                <h3 className={`font-branding text-[22px] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  How can we help you?
                </h3>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    color: theme === 'dark' ? '#C0C0C0' : '#000d57'
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className={`transition-colors ${theme === 'dark'
                    ? 'text-white/60 hover:text-[#C0C0C0]'
                    : 'text-gray-400 hover:text-[#000d57]'
                    }`}
                >
                  <X className="size-5" />
                </motion.button>
              </div>
              <p className={`font-body text-[13px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                }`}>
                Send us a message at <span className={`font-body font-semibold ${theme === 'dark' ? 'text-[#C0C0C0]' : 'text-[#000d57]'
                  }`}>support@diagnox.xyz</span>
              </p>
            </div>

            {/* Form */}
            <div className="p-4">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
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
                  <p className={`font-body text-[14px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}`}>
                    Sending message...
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
                  className="flex flex-col items-center justify-center py-12 space-y-4"
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
                    <h4 className={`font-body font-semibold text-[18px] ${theme === 'dark' ? 'text-green-400' : 'text-green-600'
                      }`}>
                      Message Sent Successfully!
                    </h4>
                    <p className={`font-body text-[14px] ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                      }`}>
                      We'll get back to you as soon as possible.
                    </p>
                  </motion.div>

                  {/* Optional: Send Another Message Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className={`mt-4 px-6 py-2.5 rounded-lg font-body font-semibold text-[13px] transition-all ${theme === 'dark'
                      ? 'bg-white/10 hover:bg-white/15 text-white/80 border border-white/20'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                      }`}
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Your email */}
                  <div>
                    <label className={`mb-1.5 block font-body !font-bold text-[13px] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontWeight: 700 }}>
                      Your email
                    </label>
                    <input
                      type="email"
                      name="fromEmail"
                      placeholder="you@example.com"
                      value={formData.fromEmail}
                      onChange={(e) => setFormData({ ...formData, fromEmail: e.target.value })}
                      required
                      className={`w-full h-[48px] px-4 font-body text-[14px] border transition-colors ${theme === 'dark'
                        ? 'bg-white/4 border-white/12 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 focus:outline-none'
                        }`}
                      style={{ borderRadius: '36px' }}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`mb-1.5 block font-body !font-bold text-[13px] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontWeight: 700 }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className={`w-full h-[44px] px-3.5 font-body text-[13.5px] border transition-colors ${theme === 'dark'
                        ? 'bg-white/4 border-white/12 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 focus:outline-none'
                        }`}
                      style={{ borderRadius: '8px' }}
                    />
                    <p className={`mt-1 text-right font-body text-[11px] transition-colors ${formData.subject.length > 100
                      ? 'text-red-500'
                      : theme === 'dark'
                        ? 'text-white/50'
                        : 'text-gray-500'
                      }`}>
                      {formData.subject.length} / 100
                    </p>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`mb-1.5 block font-body !font-bold text-[13px] ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontWeight: 700 }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={4}
                      className={`w-full px-3 py-2 font-body text-[14px] border resize-none transition-colors ${theme === 'dark'
                        ? 'bg-white/4 border-white/12 text-white placeholder:text-gray-500 focus:border-white/25 focus:outline-none'
                        : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-gray-400 focus:outline-none'
                        }`}
                      style={{
                        borderRadius: '8px',
                        scrollbarWidth: 'thin',
                        scrollbarColor: theme === 'dark'
                          ? 'rgba(192, 192, 192, 0.3) transparent'
                          : 'rgba(0, 13, 87, 0.3) transparent',
                      }}
                    />
                    <p className={`mt-1 text-right font-body text-[11px] transition-colors ${formData.message.length > 1000
                      ? 'text-red-500'
                      : theme === 'dark'
                        ? 'text-white/50'
                        : 'text-gray-500'
                      }`}>
                      {formData.message.length} / 1000
                    </p>
                    <style>{`
                      textarea::-webkit-scrollbar {
                        width: 6px;
                      }
                      textarea::-webkit-scrollbar-track {
                        background: transparent;
                      }
                      textarea::-webkit-scrollbar-thumb {
                        background: ${theme === 'dark'
                        ? 'rgba(192, 192, 192, 0.3)'
                        : 'rgba(0, 13, 87, 0.3)'
                      };
                        border-radius: 10px;
                      }
                      textarea::-webkit-scrollbar-thumb:hover {
                        background: ${theme === 'dark'
                        ? 'rgba(192, 192, 192, 0.5)'
                        : 'rgba(0, 13, 87, 0.5)'
                      };
                      }
                    `}</style>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleClear}
                      className={`flex-1 h-[48px] font-body font-semibold text-[14px] border transition-all duration-200 backdrop-blur-md flex items-center justify-center ${theme === 'dark'
                        ? 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30'
                        : 'bg-gray-100/50 border-gray-300 text-gray-700 hover:bg-gray-200/60 hover:border-gray-400'
                        }`}
                      style={{ borderRadius: '8px' }}
                    >
                      Clear
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={formData.subject.length > 100 || formData.message.length > 1000}
                      whileHover={formData.subject.length <= 100 && formData.message.length <= 1000 ? { scale: 1.02 } : {}}
                      whileTap={formData.subject.length <= 100 && formData.message.length <= 1000 ? { scale: 0.98 } : {}}
                      className={`flex-[2] h-[48px] font-body font-semibold text-[15px] transition-all duration-200 shadow-lg flex items-center justify-center relative overflow-hidden ${formData.subject.length > 100 || formData.message.length > 1000
                        ? theme === 'dark'
                          ? 'bg-white/10 text-white/30 cursor-not-allowed'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : theme === 'dark'
                          ? 'bg-gradient-to-r from-white via-gray-100 to-white text-black hover:shadow-[0_0_20px_rgba(192,192,192,0.4)] hover:from-gray-50 hover:to-gray-50'
                          : 'text-white'
                        }`}
                      style={
                        formData.subject.length > 100 || formData.message.length > 1000
                          ? { borderRadius: '8px' }
                          : theme === 'light'
                            ? {
                              borderRadius: '8px',
                              background: 'radial-gradient(circle at center, #0D0D0D 24%, #0A0D20 78%, #000D57 96%)',
                              boxShadow: 'inset 0 0 0 0.8px rgba(232, 232, 232, 0.8), 0 0 20px rgba(0, 13, 87, 0.4)',
                            }
                            : { borderRadius: '8px' }
                      }
                    >
                      <span className="relative z-10">Send Message</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}