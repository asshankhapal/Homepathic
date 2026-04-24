import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Appointment() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', concern: '', date: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    alert('Consultation request submitted! Our practitioner will contact you within 24 hours.')
    setForm({ name: '', email: '', phone: '', concern: '', date: '', message: '' })
  }

  return (
    <section id="appointment" className="py-20 bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Book Now</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2 mb-6">
            Schedule Your Consultation
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Begin your natural healing journey today. Fill out the form and one of our certified homeopaths will confirm your appointment within 24 hours.
          </p>

          <div className="space-y-6">
            {[
              { icon: '📍', title: 'Our Clinic', detail: '45 Wellness Avenue, Green District, NY 10002' },
              { icon: '📞', title: 'Phone Number', detail: '+1 (800) 246-8910' },
              { icon: '🕐', title: 'Clinic Hours', detail: 'Mon – Sat: 9:00 AM – 6:00 PM' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#52b788]/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold text-[#1b4332]">{item.title}</div>
                  <div className="text-gray-500 text-sm">{item.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name" value={form.name} onChange={handleChange}
                placeholder="Your Name" required
                className="col-span-2 sm:col-span-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#52b788] transition-colors"
              />
              <input
                name="email" value={form.email} onChange={handleChange}
                placeholder="Email Address" type="email" required
                className="col-span-2 sm:col-span-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#52b788] transition-colors"
              />
            </div>
            <input
              name="phone" value={form.phone} onChange={handleChange}
              placeholder="Phone Number" type="tel"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#52b788] transition-colors"
            />
            <select
              name="concern" value={form.concern} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[#52b788] transition-colors"
            >
              <option value="">Select Health Concern</option>
              <option>Constitutional Treatment</option>
              <option>Acute & Chronic Illness</option>
              <option>Mental & Emotional Health</option>
              <option>Paediatric Homeopathy</option>
              <option>Women's Wellness</option>
              <option>Immunity Boosting</option>
            </select>
            <input
              name="date" value={form.date} onChange={handleChange}
              type="date" required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#52b788] transition-colors"
            />
            <textarea
              name="message" value={form.message} onChange={handleChange}
              placeholder="Briefly describe your symptoms or concerns (optional)" rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#52b788] transition-colors resize-none"
            />
            <motion.button
              type="submit"
              className="w-full bg-[#52b788] text-white py-3 rounded-xl font-semibold hover:bg-[#2d6a4f] transition-colors shadow-lg shadow-[#52b788]/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Consultation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
