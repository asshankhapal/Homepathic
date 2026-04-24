import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Features() {
  const [form, setForm] = useState({
    patientName: '', age: '', gender: '', complaint: '', followUp: '', address: ''
  })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    alert('Patient record saved successfully!')
    setForm({ patientName: '', age: '', gender: '', complaint: '', followUp: '', address: '' })
  }

  return (
    <section className="bg-[#1b4332] py-14">
      <div className="max-w-7xl mx-auto px-4">
        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Patient Name */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Patient Name</label>
            <input
              name="patientName"
              value={form.patientName}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Age</label>
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="e.g. 34"
              type="number"
              min="0"
              max="120"
              required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#52b788] transition-colors"
            >
              <option value="" className="text-gray-800">Select</option>
              <option value="male" className="text-gray-800">Male</option>
              <option value="female" className="text-gray-800">Female</option>
              <option value="other" className="text-gray-800">Other</option>
            </select>
          </div>

          {/* Chief Complaint */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Complaint</label>
            <input
              name="complaint"
              value={form.complaint}
              onChange={handleChange}
              placeholder="Chief complaint"
              required
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* Follow Up */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Follow Up</label>
            <input
              name="followUp"
              value={form.followUp}
              onChange={handleChange}
              type="date"
              className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
            />
          </div>

          {/* Address + Submit */}
          <div className="flex flex-col gap-1">
            <label className="text-[#95d5b2] text-xs font-semibold uppercase tracking-wider">Address</label>
            <div className="flex gap-2">
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="City / Area"
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#52b788] transition-colors"
              />
              <motion.button
                type="submit"
                className="bg-[#52b788] text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-[#2d6a4f] transition-colors flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Save Patient"
              >
                ✓
              </motion.button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
