import { motion } from 'framer-motion'

const services = [
  {
    icon: '🌾',
    title: 'Constitutional Treatment',
    desc: 'A deep, individualised approach that addresses your unique physical and emotional constitution for lasting wellness.',
  },
  {
    icon: '🤧',
    title: 'Acute & Chronic Illness',
    desc: 'Effective homeopathic care for colds, fevers, allergies, asthma, arthritis, and other long-term conditions.',
  },
  {
    icon: '🧠',
    title: 'Mental & Emotional Health',
    desc: 'Gentle remedies to support anxiety, stress, depression, grief, and emotional imbalances without sedation.',
  },
  {
    icon: '👶',
    title: 'Paediatric Homeopathy',
    desc: 'Safe, sweet-tasting remedies for children covering colic, teething, ear infections, and behavioural concerns.',
  },
  {
    icon: '🌸',
    title: "Women's Wellness",
    desc: 'Hormonal balance, menstrual irregularities, pregnancy support, and menopause management — naturally.',
  },
  {
    icon: '🛡️',
    title: 'Immunity Boosting',
    desc: 'Strengthen your immune system with targeted constitutional remedies and seasonal preventive protocols.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="remedies" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Our Treatments</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2">
            Comprehensive Homeopathic Care
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            From acute ailments to deep-seated chronic conditions, we offer a full spectrum of natural homeopathic treatments.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={card}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-[#52b788]/20"
              whileHover={{ y: -6 }}
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-[#1b4332] mb-3 group-hover:text-[#52b788] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href="#" className="text-[#52b788] font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
