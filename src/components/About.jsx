import { motion } from 'framer-motion'

const checks = ['Plant-Based Medicines', 'No Harmful Side Effects', 'Personalised Treatment', 'Chronic Disease Support']

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#d8f3dc] rounded-3xl w-full h-96 flex items-center justify-center overflow-hidden">
            <span className="text-[160px] select-none">🌿</span>
          </div>
          <motion.div
            className="absolute -bottom-6 -right-6 bg-[#52b788] text-white rounded-2xl p-6 shadow-xl"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
          >
            <div className="text-4xl font-bold">20+</div>
            <div className="text-sm font-medium">Years of Healing</div>
          </motion.div>
          <motion.div
            className="absolute top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="w-12 h-12 bg-[#52b788]/10 rounded-full flex items-center justify-center text-2xl">⭐</div>
            <div>
              <div className="text-xl font-bold text-[#1b4332]">4.9/5</div>
              <div className="text-xs text-gray-400">Patient Rating</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2 mb-6 leading-tight">
            Restoring Health Through the Power of Nature
          </h2>
          <p className="text-gray-500 mb-4 leading-relaxed">
            At HomoCare, we believe the body has an innate ability to heal itself when given the right support. Our homeopathic clinic has been guiding patients toward natural wellness for over two decades, treating root causes rather than masking symptoms.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            From acute conditions to long-standing chronic illnesses, our practitioners design individualised remedy plans that work in harmony with your body's own healing intelligence.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {checks.map(item => (
              <motion.div
                key={item}
                className="flex items-center gap-2 text-[#1b4332] font-medium text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-5 h-5 bg-[#52b788] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                {item}
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#appointment"
            className="inline-block bg-[#52b788] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#2d6a4f] transition-colors shadow-lg shadow-[#52b788]/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
