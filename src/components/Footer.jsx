import { motion } from 'framer-motion'

const footerLinks = {
  'Quick Links': ['Home', 'About Us', 'Treatments', 'Practitioners', 'Pricing', 'Blog', 'Contact'],
  'Our Treatments': ['Constitutional Treatment', 'Acute & Chronic Illness', 'Mental Health', 'Paediatric Care', "Women's Wellness", 'Immunity Boosting'],
}

export default function Footer() {
  return (
    <footer className="bg-[#0d2b1f] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-[#52b788] rounded-full flex items-center justify-center text-lg">🌿</div>
            <span className="text-2xl font-bold">Homo<span className="text-[#52b788]">Care</span></span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6">
            Providing compassionate, natural homeopathic care to families for over 20 years. Your wellness is our calling.
          </p>
          <div className="flex gap-3">
            {['f', 't', 'in', 'yt'].map(s => (
              <motion.a
                key={s}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#52b788] transition-colors"
                whileHover={{ scale: 1.15 }}
              >
                {s}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links], i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 text-sm hover:text-[#52b788] transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#52b788] rounded-full inline-block" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="font-bold text-lg mb-4">Newsletter</h4>
          <p className="text-white/50 text-sm mb-4">Subscribe for natural health tips and clinic updates.</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
            />
            <motion.button
              className="bg-[#52b788] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#2d6a4f] transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
          <div className="mt-6 space-y-2 text-sm text-white/50">
            <div className="flex items-center gap-2"><span>📍</span> 45 Wellness Ave, Green District, NY</div>
            <div className="flex items-center gap-2"><span>📞</span> +1 (800) 246-8910</div>
            <div className="flex items-center gap-2"><span>✉️</span> hello@homocare.com</div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} HomoCare Homeopathic Clinic. All rights reserved.
      </div>
    </footer>
  )
}
