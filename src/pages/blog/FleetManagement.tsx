import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { NavBar } from '../../components/NavBar';
import { FONTS } from '../../config/fonts';

export function BlogArticleFleetManagement() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <div className={`pt-[72px] ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        {/* Article Header */}
        <section
          className={`py-16 px-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0d0d0d] to-[#070d32]'
              : 'bg-gradient-to-b from-gray-50 to-blue-50'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <a
              href="/blog"
              className={`inline-block mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              } hover:underline`}
            >
              ← Back to Blog
            </a>
            <h1
              className={`${FONTS.subheading} text-[48px] mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Fleet Management Best Practices: A Complete Guide
            </h1>
            <div
              className={`flex gap-6 text-sm ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}
            >
              <span>February 18, 2026</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>DiagnoX Team</span>
            </div>
          </motion.div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-6 max-w-2xl mx-auto">
          <article
            className={`${FONTS.body} text-[18px] leading-[1.8] ${
              theme === 'dark' ? 'text-white/80' : 'text-gray-700'
            } space-y-6`}
          >
            <p>
              Managing a truck fleet is one of the most complex operational challenges facing companies today. From maintenance schedules to fuel costs, driver safety to regulatory compliance, the variables are endless. However, with the right strategies and tools, you can significantly improve efficiency and profitability.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              1. Implement Preventive Maintenance
            </h2>
            <p>
              Preventive maintenance is the foundation of good fleet management. By servicing vehicles on a regular schedule, you can catch problems before they become expensive failures. This includes oil changes, filter replacements, brake inspections, and tire rotations.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              2. Use Fleet Management Software
            </h2>
            <p>
              Modern fleet management software provides real-time tracking, maintenance alerts, and performance analytics. DiagnoX offers AI-powered diagnostics that predict maintenance needs before failures occur, reducing downtime by up to 40%.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              3. Monitor Driver Behavior
            </h2>
            <p>
              Driver behavior directly impacts fuel consumption, maintenance costs, and safety. Encourage safe driving practices through training and incentives. Modern telematics systems can track harsh braking, speeding, and idle time.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              4. Optimize Route Planning
            </h2>
            <p>
              Route optimization reduces fuel consumption, improves delivery times, and increases customer satisfaction. Use GPS tracking and route planning software to identify the most efficient routes and avoid traffic congestion.
            </p>

            <h2
              className={`${FONTS.bodySemiBold} text-[28px] mt-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Conclusion
            </h2>
            <p>
              Effective fleet management requires a combination of preventive maintenance, modern technology, driver training, and continuous optimization. By implementing these best practices, you can reduce costs, improve safety, and increase profitability.
            </p>

            {/* CTA */}
            <div
              className={`mt-12 p-8 rounded-lg ${
                theme === 'dark'
                  ? 'bg-[#070d32] border border-white/10'
                  : 'bg-blue-50 border border-blue-200'
              }`}
            >
              <h3
                className={`${FONTS.bodySemiBold} text-[20px] mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Ready to Transform Your Fleet?
              </h3>
              <p
                className={`mb-4 ${
                  theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                }`}
              >
                DiagnoX provides AI-powered diagnostics and predictive maintenance to keep your fleet running smoothly.
              </p>
              <a
                href="/#contact"
                className={`inline-block px-6 py-3 rounded-full font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Join Our Waitlist
              </a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
