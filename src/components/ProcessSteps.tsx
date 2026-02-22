import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { FONTS } from '../config/fonts';
import { Cable, Smartphone, CloudLightning, FileText, Bell } from 'lucide-react';

const steps = [
    {
        title: 'Plug In the Dongle',
        description: 'Simply connect the DiagnoX dongle to your vehicle\'s OBD-II port. No tools or professional installation required.',
        icon: Cable,
    },
    {
        title: 'Instant App Sync',
        description: 'Open the DiagnoX app and watch as it automatically pairs with the dongle via Bluetooth in seconds.',
        icon: Smartphone,
    },
    {
        title: 'Cloud-Based Data Analysis',
        description: 'Our AI engine analyzes thousands of data points from your vehicle in real-time through secure cloud processing.',
        icon: CloudLightning,
    },
    {
        title: 'Get Your Vehicle Health Report',
        description: 'Receive a comprehensive breakdown of your vehicle\'s condition, including engine, transmission, and electrical systems.',
        icon: FileText,
    },
    {
        title: 'Stay Informed Anywhere, Anytime',
        description: 'Get predictive alerts and 24/7 monitoring directly on your phone, ensuring peace of mind on every journey.',
        icon: Bell,
    },
];

export function ProcessSteps() {
    const { theme } = useTheme();

    return (
        <div className="w-full max-w-6xl mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative p-8 rounded-3xl transition-all duration-500 ${theme === 'dark'
                                ? 'bg-[#0f0f0f] border border-white/5 hover:border-white/20 hover:bg-[#151515]'
                                : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100'
                            }`}
                        style={{
                            boxShadow: theme === 'dark'
                                ? '0 10px 40px rgba(0,0,0,0.5)'
                                : '0 10px 40px rgba(0,0,0,0.03)'
                        }}
                    >
                        {/* Step Number Badge */}
                        <div className={`mb-6 flex items-center justify-between`}>
                            <div className={`flex items-center justify-center size-14 rounded-2xl transition-transform duration-500 group-hover:scale-110 ${theme === 'dark'
                                    ? 'bg-white/5 text-white border border-white/10'
                                    : 'bg-blue-50 text-blue-600 border border-blue-100'
                                }`}>
                                <step.icon size={24} />
                            </div>
                            <span className={`text-[48px] font-branding leading-none opacity-10 ${theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                0{index + 1}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h3 className={`${FONTS.branding} text-2xl md:text-3xl ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                                } leading-tight`}>
                                {step.title}
                            </h3>
                            <p className={`${FONTS.body} text-[15px] md:text-[16px] leading-relaxed ${theme === 'dark' ? 'text-white/50' : 'text-gray-500'
                                }`}>
                                {step.description}
                            </p>
                        </div>

                        {/* Professional Accent Bar */}
                        <div className={`absolute bottom-0 left-8 right-8 h-[2px] rounded-t-full transition-all duration-500 opacity-0 group-hover:opacity-100 ${theme === 'dark' ? 'bg-blue-500/50' : 'bg-blue-600/30'
                            }`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
