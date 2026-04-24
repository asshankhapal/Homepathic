import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['Home', 'About', 'Remedies', 'Practitioners', 'Blog', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#2d6a4f] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#95d5b2]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              +1 (800) 246-8910
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#95d5b2]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              hello@homocare.com
            </span>
          </div>
          <div className="flex gap-3 text-xs">
            {['FB', 'TW', 'IG', 'YT'].map(s => (
              <a key={s} href="#" className="hover:text-[#95d5b2] transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95'}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2d6a4f] rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🌿</span>
            </div>
            <span className="text-2xl font-bold text-[#1b4332]">Homo<span className="text-[#52b788]">Care</span></span>
          </a>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link, i) => (
              <motion.li key={link} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}>
                <a href="#" className="text-[#1b4332] font-medium hover:text-[#52b788] transition-colors text-sm">{link}</a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#appointment"
            className="hidden md:inline-block bg-[#52b788] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#2d6a4f] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Book Consultation
          </motion.a>

          <button className="md:hidden text-[#1b4332]" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden bg-white border-t px-4 pb-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map(link => (
                <a key={link} href="#" className="block py-2 text-[#1b4332] font-medium hover:text-[#52b788]">{link}</a>
              ))}
              <a href="#appointment" className="mt-2 block text-center bg-[#52b788] text-white px-6 py-2 rounded-full font-semibold text-sm">
                Book Consultation
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
