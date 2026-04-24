import { motion } from 'framer-motion'

const posts = [
  {
    date: 'April 18, 2026',
    category: 'Wellness',
    title: 'How Homeopathy Supports Long-Term Immune Health',
    excerpt: 'Discover how constitutional homeopathic remedies work with your body to build resilience against seasonal illness and chronic immune challenges.',
  },
  {
    date: 'April 5, 2026',
    category: 'Mental Health',
    title: 'Natural Remedies for Anxiety and Stress Relief',
    excerpt: 'Explore the most effective homeopathic remedies for managing anxiety, panic attacks, and everyday stress without sedation or dependency.',
  },
  {
    date: 'March 22, 2026',
    category: 'Paediatrics',
    title: "Homeopathy for Children: A Parent's Complete Guide",
    excerpt: 'From teething and colic to recurring infections and behavioural concerns, learn how gentle homeopathic care can support your child at every stage.',
  },
]

const catColors = {
  'Wellness': 'bg-green-100 text-green-600',
  'Mental Health': 'bg-purple-100 text-purple-600',
  'Paediatrics': 'bg-blue-100 text-blue-600',
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Latest Articles</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2">From Our Wellness Blog</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Insights, guides, and natural health tips from our experienced homeopathic practitioners.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.article
              key={post.title}
              variants={item}
              className="bg-[#f0fdf4] rounded-2xl overflow-hidden group"
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(82,183,136,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 bg-gradient-to-br from-[#52b788]/20 to-[#1b4332]/10 flex items-center justify-center">
                <span className="text-7xl select-none">🌿</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${catColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.date}</span>
                </div>
                <h3 className="font-bold text-[#1b4332] text-lg mb-3 leading-snug group-hover:text-[#52b788] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <a href="#" className="text-[#52b788] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
