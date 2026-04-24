import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Meera Nair',
    role: 'Chronic Migraine Patient',
    text: 'After years of relying on painkillers, Dr. Shoaib Mansuri Homeopathic Clinic gave me a constitutional remedy that reduced my migraines by 90% within three months. I feel like myself again — naturally.',
    rating: 5,
  },
  {
    name: 'David Okafor',
    role: 'Anxiety & Stress Patient',
    text: 'I was sceptical about homeopathy at first, but Dr. Mehta listened to every detail of my life and prescribed a remedy that genuinely calmed my anxiety without any drowsiness.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Paediatric Patient Parent',
    text: 'My son used to get ear infections every other month. Since starting homeopathic treatment, he has been infection-free for over a year. The remedies are gentle and he loves them.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 bg-[#1b4332] relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#52b788]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#52b788]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Patients Say</h2>
        </motion.div>

        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 text-center">
          <div className="flex justify-center mb-4">
            {Array.from({ length: testimonials[active].rating }).map((_, i) => (
              <motion.svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.08 }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </motion.svg>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={active}
              className="text-white/80 text-lg leading-relaxed mb-8 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              "{testimonials[active].text}"
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${active}`}
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 bg-[#52b788]/30 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#52b788]" fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="22"/>
                  <path d="M15 90c0-19.3 15.7-35 35-35s35 15.7 35 35H15z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-bold">{testimonials[active].name}</div>
                <div className="text-[#52b788] text-sm">{testimonials[active].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all ${i === active ? 'w-8 h-3 bg-[#52b788]' : 'w-3 h-3 bg-white/30 hover:bg-white/60'}`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
