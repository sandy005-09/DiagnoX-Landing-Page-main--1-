import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

interface FAQDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqData = [
  {
    question: "What is DiagnoX and how does it work?",
    answer: "DiagnoX is a cloud-powered vehicle diagnostics tool that connects to your car's OBD-II port and analyzes data to provide real-time health reports, predictive maintenance alerts, and safety notifications."
  },
  {
    question: "When will DiagnoX be available?",
    answer: "We're launching soon! Join our waitlist to be among the first to experience DiagnoX and receive updates on release dates."
  },
  {
    question: "What vehicles are compatible with DiagnoX?",
    answer: "DiagnoX supports most cars equipped with OBD-II ports (generally vehicles manufactured after 2008). If you're unsure, reach out to our support team for confirmation."
  },
  {
    question: "Does DiagnoX require an internet connection?",
    answer: "Yes, for now, DiagnoX analyzes your vehicle data securely via the cloud, so you'll need an internet connection for full functionality."
  },
  {
    question: "Will my data stay private and secure?",
    answer: "Absolutely. We use industry-standard encryption to protect your vehicle's data and do not share your information with third parties."
  },
  {
    question: "How do I set up DiagnoX?",
    answer: "Simply plug the dongle into your car's OBD-II port, download our mobile app, and follow the on-screen instructions to activate and start scanning."
  },
  {
    question: "What are predictive maintenance alerts?",
    answer: "Our AI analyzes your car's data to predict possible issues before they become costly repairs, helping you save time and money on servicing."
  },
  {
    question: "Does DiagnoX support anti-theft and anti-tow alerts?",
    answer: "DiagnoX monitors unusual vehicle activity and can notify you in case of unauthorized movement or potential towing events."
  },
  {
    question: "How can I contact support if I have issues?",
    answer: "Click the 'Support' link on our website or app to reach our team via email or live chat."
  },
  {
    question: "Can I try DiagnoX before it launches?",
    answer: "Join our waitlist for early access opportunities and be the first to test new features as a beta customer."
  }
];

export function FAQDialog({ isOpen, onClose }: FAQDialogProps) {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
            initial={{ opacity: 0, y: 100, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 100, x: -50 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              duration: 0.32
            }}
            className="fixed bottom-10 left-10 z-[70] w-[480px] h-[420px] overflow-hidden rounded-2xl"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(to bottom, #0B0B0B, #121212)'
                : 'linear-gradient(to bottom, #FFFFFF, #F7F9FF)',
              boxShadow: theme === 'dark'
                ? '0 2px 18px rgba(192, 192, 192, 0.45), inset 0 0 0 1px rgba(192, 192, 192, 0.15)'
                : '0 2px 18px rgba(0, 13, 87, 0.45), inset 0 0 0 1px rgba(0, 13, 87, 0.15)',
            }}
          >
            {/* Header */}
            <div className={`border-b p-4 ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'
              }`}>
              <div className="flex items-center justify-between">
                <h3 className={`font-branding text-[22px] ${theme === 'dark' ? 'text-white' : 'text-[#0D0D0D]'
                  }`}>
                  Frequently Asked Questions
                </h3>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    color: theme === 'dark' ? '#C0C0C0' : '#000d57'
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className={`transition-colors ${theme === 'dark'
                    ? 'text-white/70 hover:text-[#C0C0C0]'
                    : 'text-black/70 hover:text-[#000d57]'
                    }`}
                >
                  <X className="size-5" />
                </motion.button>
              </div>
            </div>

            {/* FAQ List - Scrollable */}
            <div className="h-[calc(420px-73px)] overflow-y-auto p-4" style={{
              scrollbarWidth: 'thin',
              scrollbarColor: theme === 'dark'
                ? 'rgba(192, 192, 192, 0.3) transparent'
                : 'rgba(0, 13, 87, 0.3) transparent',
            }}>
              <style>{`
                div::-webkit-scrollbar {
                  width: 6px;
                }
                div::-webkit-scrollbar-track {
                  background: transparent;
                }
                div::-webkit-scrollbar-thumb {
                  background: ${theme === 'dark'
                  ? 'rgba(192, 192, 192, 0.3)'
                  : 'rgba(0, 13, 87, 0.3)'
                };
                  border-radius: 10px;
                }
                div::-webkit-scrollbar-thumb:hover {
                  background: ${theme === 'dark'
                  ? 'rgba(192, 192, 192, 0.5)'
                  : 'rgba(0, 13, 87, 0.5)'
                };
                }
              `}</style>

              <div className="space-y-2">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`border-b ${theme === 'dark' ? 'border-white/8' : 'border-gray-200'
                      }`}
                  >
                    {/* Question */}
                    <motion.button
                      onClick={() => toggleFAQ(index)}
                      className="w-full text-left py-3 flex items-center justify-between gap-3"
                      whileHover={{ x: 2 }}
                    >
                      <span className={`font-body !font-bold text-[15px] ${theme === 'dark' ? 'text-[#EDEDED]' : 'text-[#0D0D0D]'
                        }`} style={{ fontWeight: 700 }}>
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="shrink-0"
                      >
                        <ChevronRight
                          className={`size-4 ${theme === 'dark' ? 'text-[#C0C0C0]' : 'text-[#000d57]'
                            }`}
                        />
                      </motion.div>
                    </motion.button>

                    {/* Answer */}
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className={`font-body text-[14px] pb-3 pr-6 leading-[1.5] ${theme === 'dark' ? 'text-white/78' : 'text-black/78'
                            }`}>
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
