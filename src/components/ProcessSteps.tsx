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
        <div className="relative w-full max-w-4xl mx-auto py-12">
            {/* Central Line */}
            <div
                className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'
                    }`}
            />

            <div className="space-y-24">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Step Number Dot */}
                        <div
                            className={`absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center size-12 rounded-full z-20 transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-black border-2 border-white/20 text-white'
                                    : 'bg-white border-2 border-gray-200 text-black'
                                }`}
                            style={{
                                boxShadow: theme === 'dark'
                                    ? '0 0 20px rgba(255, 255, 255, 0.1)'
                                    : '0 0 20px rgba(0, 0, 0, 0.05)'
                            }}
                        >
                            <step.icon size={20} className={theme === 'dark' ? 'text-white' : 'text-blue-600'} />
                        </div>

                        {/* Content Card */}
                        <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                            }`}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`p-6 rounded-2xl transition-all duration-300 ${theme === 'dark'
                                        ? 'bg-white/5 border border-white/10 hover:border-white/20'
                                        : 'bg-white border border-gray-100 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <span className={`inline-block mb-2 text-sm font-bold tracking-wider uppercase ${theme === 'dark' ? 'text-white/40' : 'text-blue-600/60'
                                    }`}>
                                    Step 0{index + 1}
                                </span>
                                <h3 className={`${FONTS.subheading} text-2xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    {step.title}
                                </h3>
                                <p className={`${FONTS.body} text-base leading-relaxed ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                                    }`}>
                                    {step.description}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Pulsing end point */}
            <div
                className={`absolute left-8 md:left-1/2 bottom-0 -translate-x-1/2 size-4 rounded-full ${theme === 'dark' ? 'bg-white/20' : 'bg-gray-300'
                    }`}
            />
        </div>
    );
}
