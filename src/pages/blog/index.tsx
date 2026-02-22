import { motion } from 'framer-motion';
import { useTheme } from '../../components/ThemeProvider';
import { NavBar } from '../../components/NavBar';
import { FONTS } from '../../config/fonts';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Fleet Management Best Practices: A Complete Guide',
    excerpt: 'Learn the essential strategies for managing truck fleets efficiently, reducing downtime, and maximizing profitability.',
    date: 'February 18, 2026',
    author: 'DiagnoX Team',
    category: 'Fleet Management',
    readTime: '8 min read',
    slug: 'fleet-management-best-practices',
  },
  {
    id: '2',
    title: 'Predictive Maintenance: The Future of Vehicle Care',
    excerpt: 'Discover how AI-powered predictive maintenance can prevent costly breakdowns and extend vehicle lifespan.',
    date: 'February 15, 2026',
    author: 'DiagnoX Team',
    category: 'Predictive Maintenance',
    readTime: '6 min read',
    slug: 'predictive-maintenance-future',
  },
  {
    id: '3',
    title: 'Reduce Vehicle Downtime: Strategies That Work',
    excerpt: 'Explore proven methods to minimize vehicle downtime and keep your fleet operational and profitable.',
    date: 'February 12, 2026',
    author: 'DiagnoX Team',
    category: 'Optimization',
    readTime: '7 min read',
    slug: 'reduce-vehicle-downtime',
  },
  {
    id: '4',
    title: 'AI-Powered Vehicle Diagnostics: How It Works',
    excerpt: 'Understand the technology behind AI diagnostics and how it revolutionizes vehicle health monitoring.',
    date: 'February 10, 2026',
    author: 'DiagnoX Team',
    category: 'Technology',
    readTime: '9 min read',
    slug: 'ai-vehicle-diagnostics',
  },
];

export function BlogIndex() {
  const { theme } = useTheme();

  return (
    <>
      <NavBar />
      <div className={`pt-[72px] ${theme === 'dark' ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
        {/* Hero Section */}
        <section
          className={`py-24 px-6 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-[#0d0d0d] to-[#070d32]'
              : 'bg-gradient-to-b from-gray-50 to-blue-50'
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1
              className={`${FONTS.subheading} text-[64px] mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Fleet & Diagnostics Blog
            </h1>
            <p
              className={`${FONTS.body} text-[18px] ${
                theme === 'dark' ? 'text-white/60' : 'text-gray-600'
              }`}
            >
              Expert insights on fleet management, predictive maintenance, and vehicle diagnostics
            </p>
          </motion.div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-lg p-8 transition-all hover:shadow-lg ${
                  theme === 'dark'
                    ? 'bg-[#1a1a1a] border border-white/10 hover:border-white/20'
                    : 'bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      theme === 'dark'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`${FONTS.bodySemiBold} text-[24px] mb-4 line-clamp-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p
                  className={`${FONTS.body} text-[16px] mb-6 line-clamp-3 ${
                    theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                  }`}
                >
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div
                  className={`flex items-center justify-between text-sm mb-6 ${
                    theme === 'dark' ? 'text-white/40' : 'text-gray-500'
                  }`}
                >
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <a
                  href={`#`}
                  className={`inline-block font-medium transition-colors ${
                    theme === 'dark'
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Read Article →
                </a>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
