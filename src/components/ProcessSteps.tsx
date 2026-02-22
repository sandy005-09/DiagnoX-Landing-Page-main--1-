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
        <div className="w-full max-w-4xl mx-auto py-12 px-6">
            <div className="flex flex-col gap-6">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                ? 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                                : 'bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-lg'
                            }`}
                    >
                        {/* Number & Icon Wrapper */}
                        <div className="flex items-center gap-6 shrink-0">
                            <span className={`text-sm font-bold tracking-widest ${theme === 'dark' ? 'text-white/20' : 'text-blue-600/30'
                                }`}>
                                0{index + 1}
                            </span>
                            <div className={`flex items-center justify-center size-12 rounded-xl border ${theme === 'dark'
                                    ? 'bg-white/5 border-white/10 text-white'
                                    : 'bg-white border-blue-100 text-blue-600 shadow-sm'
                                }`}>
                                <step.icon size={20} />
                            </div>
                        </div>

                        {/* Divider Line (Mobile: hidden, Tablet+: shown) */}
                        <div className={`hidden md:block h-12 w-[1px] ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
                            }`} />

                        {/* Text Content */}
                        <div className="flex-1 text-left">
                            <h3 className={`${FONTS.branding} text-2xl mb-2 ${theme === 'dark' ? 'text-white/90' : 'text-gray-900'
                                }`}>
                                {step.title}
                            </h3>
                            <p className={`${FONTS.body} text-[15px] leading-relaxed ${theme === 'dark' ? 'text-white/40' : 'text-gray-500'
                                }`}>
                                {step.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
