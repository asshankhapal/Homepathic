import { motion } from 'framer-motion'

const floatAnim = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
}

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#d8f3dc] to-[#f0fdf4] min-h-[90vh] flex items-center overflow-hidden">
      {/* Decorative blobs */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 bg-[#52b788]/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-56 h-56 bg-[#2d6a4f]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <motion.span
            className="inline-block bg-[#52b788]/20 text-[#2d6a4f] text-sm font-semibold px-4 py-1 rounded-full mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to HomoCare Homeopathy
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1b4332] leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Heal Naturally, <span className="text-[#52b788]">Live Fully</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            We offer holistic homeopathic treatments rooted in nature. Our certified practitioners craft personalised remedies to restore balance, vitality, and well-being — gently and effectively.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.a
              href="#appointment"
              className="bg-[#52b788] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d6a4f] transition-colors shadow-lg shadow-[#52b788]/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Consultation
            </motion.a>
            <motion.a
              href="#remedies"
              className="border-2 border-[#1b4332] text-[#1b4332] px-8 py-3 rounded-full font-semibold hover:bg-[#1b4332] hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Our Remedies
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-12 flex flex-wrap gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { num: '20+', label: 'Years of Practice' },
              { num: '12K+', label: 'Patients Healed' },
              { num: '150+', label: 'Natural Remedies' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                <div className="text-3xl font-bold text-[#52b788]">{s.num}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="w-80 h-80 md:w-[420px] md:h-[420px] bg-[#52b788]/20 rounded-full flex items-center justify-center"
            {...floatAnim}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-[#52b788]/30 rounded-full flex items-center justify-center">
              <span className="text-[120px] select-none">🌿</span>
            </div>
          </motion.div>

          {/* Floating badge 1 */}
          <motion.div
            className="absolute top-8 right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">✅</div>
            <div>
              <div className="text-xs text-gray-400">Certified</div>
              <div className="text-sm font-bold text-[#1b4332]">100% Natural</div>
            </div>
          </motion.div>

          {/* Floating badge 2 */}
          <motion.div
            className="absolute bottom-8 left-4 bg-white rounded-2xl shadow-xl p-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-xs text-gray-400 mb-1">Next Available</div>
            <div className="text-sm font-bold text-[#1b4332]">Today, 3:00 PM</div>
            <div className="text-xs text-[#52b788]">Dr. Priya Sharma</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
