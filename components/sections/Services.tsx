'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    nameBg: 'Подстригване',
    nameEn: 'Haircut',
    priceBgv: 15,
    description: 'Класическо подстригване с финален стайлинг',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16s1.5 2 4 2 4-2 4-2"/>
      </svg>
    ),
    nameBg: 'Подстригване + Оформяне на брада',
    nameEn: 'Haircut + Beard Styling',
    priceBgv: 22,
    description: 'Пълен груминг пакет — прическа и брада',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16s1.5 2 4 2 4-2 4-2M9 10h.01M15 10h.01"/>
        <path strokeLinecap="round" d="M5 8c0-3.866 3.134-7 7-7s7 3.134 7 7v4H5V8z"/>
      </svg>
    ),
    nameBg: 'Оформяне на брада',
    nameEn: 'Beard Grooming',
    priceBgv: 10,
    description: 'Прецизно оформяне и подреждане на брада',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <line x1="20" y1="4" x2="8.12" y2="15.88"/>
        <line x1="14.47" y1="14.48" x2="20" y2="20"/>
        <line x1="8.12" y1="8.12" x2="12" y2="12"/>
      </svg>
    ),
    nameBg: 'Skin Fade',
    nameEn: 'Skin Fade',
    priceBgv: 18,
    description: 'Плавен преход до нула — модерен и чист стил',
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    nameBg: 'Skin Fade + Дизайн',
    nameEn: 'Skin Fade + Design',
    priceBgv: 25,
    description: 'Skin fade с персонализиран дизайн — уникален стил',
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
      </svg>
    ),
    nameBg: 'Детско подстригване',
    nameEn: "Children's Haircut",
    priceBgv: 12,
    description: 'Внимателна прическа за деца до 12 год.',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const euroPrice = (service.priceBgv * 0.51).toFixed(2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`relative group rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${
        service.featured
          ? 'bg-gold/8 border-gold/40 hover:border-gold/70'
          : 'bg-surface-2 border-border hover:border-gold/30'
      }`}
    >
      {service.featured && (
        <span className="absolute -top-3 left-4 bg-gold text-black text-xs font-bold px-3 py-0.5 rounded-full uppercase tracking-wide">
          Popular
        </span>
      )}

      <div className={`mb-4 ${service.featured ? 'text-gold' : 'text-gray-400 group-hover:text-gold'} transition-colors duration-300`}>
        {service.icon}
      </div>

      <h3 className="text-white font-semibold text-lg mb-0.5 leading-snug">{service.nameBg}</h3>
      <p className="text-gray-500 text-xs mb-3 uppercase tracking-wider">{service.nameEn}</p>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>

      <div className="flex items-baseline gap-2">
        <span className="text-gold font-bold text-2xl">{service.priceBgv} лв.</span>
        <span className="text-gray-500 text-sm">/ ~{euroPrice} €</span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Нашите услуги</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 section-title">
            Услуги &amp; Цени
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Всяка прическа е изработена с внимание и прецизност. Изберете услуга и запазете час.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <ServiceCard key={service.nameBg} service={service} index={index} />
          ))}
        </div>

        {/* Price note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 text-sm"
        >
          * Цените са ориентировъчни. 1 лв. ≈ 0.51 €
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#booking')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gold hover:bg-gold-light text-black font-bold px-10 py-4 rounded transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Запази час сега
          </button>
        </motion.div>
      </div>
    </section>
  )
}
