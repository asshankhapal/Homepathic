import { motion } from 'framer-motion'

const features = [
  {
    icon: '🌱',
    title: 'All-Natural Remedies',
    desc: 'Every remedy is derived from plants, minerals, and natural sources — zero side effects.',
  },
  {
    icon: '🩺',
    title: 'Certified Practitioners',
    desc: 'Our homeopaths hold internationally recognised qualifications with decades of experience.',
  },
  {
    icon: '📅',
    title: 'Easy Scheduling',
    desc: 'Book in-person or online consultations at a time that suits your lifestyle.',
  },
  {
    icon: '💚',
    title: 'Holistic Wellness',
    desc: 'We treat the whole person — mind, body, and spirit — not just the symptoms.',
  },
]

export default function Features() {
  return (
    <section className="bg-[#1b4332] py-16">
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="flex items-start gap-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="flex-shrink-0 w-16 h-16 bg-[#52b788]/20 rounded-2xl flex items-center justify-center text-3xl">
              {f.icon}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
