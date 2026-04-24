import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic Plan',
    price: '$49',
    period: 'Monthly',
    features: [
      'Initial Consultation',
      'Single Remedy Prescription',
      'Follow-up Email Support',
      'Wellness Tips Newsletter',
      '10% Off Remedy Kits',
    ],
    highlighted: false,
  },
  {
    name: 'Standard Plan',
    price: '$99',
    period: 'Monthly',
    features: [
      'Everything in Basic',
      '2 Consultations Per Month',
      'Constitutional Assessment',
      'Priority Appointment Slots',
      '20% Off Remedy Kits',
    ],
    highlighted: true,
  },
  {
    name: 'Unlimited Plan',
    price: '$149',
    period: 'Monthly',
    features: [
      'Everything in Standard',
      'Unlimited Consultations',
      'Chronic Disease Programme',
      'Home Remedy Kit Included',
      '30% Off All Products',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#52b788] font-semibold text-sm uppercase tracking-widest">Pricing Plans</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4332] mt-2">Affordable Wellness Plans</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Choose a plan that fits your healing journey. All plans include access to our certified homeopathic practitioners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-[#1b4332] text-white shadow-2xl'
                  : 'bg-[#f0fdf4] text-[#1b4332] shadow-sm'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: plan.highlighted ? 1.03 : 1.02 }}
              style={{ scale: plan.highlighted ? 1.05 : 1 }}
            >
              <div className="text-sm font-semibold uppercase tracking-widest mb-2 text-[#52b788]">
                {plan.name}
              </div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`text-sm mb-2 ${plan.highlighted ? 'text-white/60' : 'text-gray-400'}`}>/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-[#52b788]' : 'bg-[#52b788]/20'}`}>
                      <svg className={`w-3 h-3 ${plan.highlighted ? 'text-white' : 'text-[#52b788]'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#appointment"
                className={`text-center py-3 rounded-full font-semibold text-sm transition-colors ${
                  plan.highlighted
                    ? 'bg-[#52b788] text-white hover:bg-[#2d6a4f]'
                    : 'bg-[#1b4332] text-white hover:bg-[#52b788]'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
