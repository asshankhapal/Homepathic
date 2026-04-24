import { motion } from 'framer-motion'

const doctors = [
  { name: 'Dr. Priya Sharma', specialty: 'Classical Homeopath', exp: '18 Years Exp.' },
  { name: 'Dr. Arjun Mehta', specialty: 'Paediatric Homeopathy', exp: '14 Years Exp.' },
  { name: 'Dr. Leena Patel', specialty: "Women's Wellness", exp: '11 Years Exp.' },
  { name: 'Dr. Samuel Roy', specialty: 'Chronic Disease Specialist', exp: '16 Years Exp.' },
]

const avatarColors = ['bg-green-100', 'bg-emerald-100', 'bg-teal-100', 'bg-lime-100']
const avatarText = ['text-green-400', 'text-emerald-400', 'text-teal-400', 'text-lime-500']

export default function Doctors() {
  return (
    <section id="practitioners" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2">Meet Our Expert Practitioners</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Our certified homeopaths bring decades of combined experience in natural, holistic healing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <div className={`${avatarColors[i]} h-52 flex items-center justify-center`}>
                <svg className={`w-28 h-28 ${avatarText[i]}`} fill="currentColor" viewBox="0 0 100 100">
                  <circle cx="50" cy="35" r="22"/>
                  <path d="M15 90c0-19.3 15.7-35 35-35s35 15.7 35 35H15z"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#1b4332] text-lg">{doc.name}</h3>
                <p className="text-[#52b788] text-sm font-medium mt-1">{doc.specialty}</p>
                <p className="text-gray-400 text-xs mt-1">{doc.exp}</p>
                <div className="flex justify-center gap-3 mt-4">
                  {['f', 't', 'in'].map(s => (
                    <motion.a
                      key={s}
                      href="#"
                      className="w-8 h-8 bg-[#f0fdf4] rounded-full flex items-center justify-center text-[#1b4332] text-xs font-bold hover:bg-[#52b788] hover:text-white transition-colors"
                      whileHover={{ scale: 1.2 }}
                    >
                      {s}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
