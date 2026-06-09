'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern texture-lines"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-gold/10" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-gold/5" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full border border-gold/8" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)'
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black tracking-tight leading-none mb-6"
          style={{ fontSize: 'clamp(3rem, 14vw, 9rem)' }}
        >
          <span className="block text-white">BARBER</span>
          <span className="block text-gold-gradient">SAMOKOV</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Професионални мъжки прически в Самоков
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo('#booking')}
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-black font-bold px-10 py-4 rounded text-base transition-all duration-200 hover:shadow-lg hover:shadow-gold/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            Запази час
          </button>
          <button
            onClick={() => scrollTo('#gallery')}
            className="w-full sm:w-auto border border-white/30 text-white hover:border-gold hover:text-gold font-semibold px-10 py-4 rounded text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Виж нашата работа
          </button>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-2 mt-12 text-sm text-gray-500"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
          </div>
          <span className="text-white font-medium">4.8</span>
          <span>— 37 отзива в Google</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gold transition-colors duration-200"
        aria-label="Виж повече"
      >
        <span className="text-xs tracking-widest uppercase">Виж повече</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </motion.div>
      </motion.button>
    </section>
  )
}
